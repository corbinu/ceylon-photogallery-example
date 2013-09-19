import ceylon.js.json { JSON, JSONArray }

shared class Gallery() {
	shared variable Category[] categories = {};
	shared String currentCategory = "";
	shared late GalleryModel model;
	shared late GalleryView view;
	
	shared Gallery init(String dir) {
		print("initalizing gallery");
		model = GalleryModel(this, dir);
		view = GalleryView(this);
		
		handlebarHelpers();
		model.loadJSON();
		
		dynamic {
			value resize = void () {
				if ( jQuery(".visible-lg").css("display") == "none !important" ) {
					view.isMobile();
				} else {
					view.isDesktop();
				}
			};
			jQuery(window).resize(resize);
		}
		
		return this;
	}
	
	shared void loaded() {
		print("gallery loaded");
		dynamic {
			dynamic router = Router().init("/");
			router.on("/", routeIndex);
			router.on("/:category", routeCategory);
			router.on("/:category/:page", routePage);
			router.on("/:category/:page/:photo", routePhoto);
		}
		
		view.displayCategories();
	}
	
	shared void updateCategory(String category) {
		view.category = category;
		view.display();
	}
	
	void handlebarHelpers() {
		dynamic {
			\iHandlebars.registerHelper("lower", (String string) { 
				return string.lowercased;
			});
			\iHandlebars.registerHelper("upper", (String string) { 
				return string.uppercased;
			});
			\iHandlebars.registerHelper("add", (Integer int1, Integer int2) { 
				return (int1 + int2).string;
			});
			\iHandlebars.registerHelper("sub", (Integer int1, Integer int2) {
				return (int1 - int2).string;
			});
			\iHandlebars.registerHelper("eql", (Object obj1, Object obj2, dynamic funcs) { 
				if (obj1 == obj2) {
					return funcs.fn(\ithis);
				} else {
					return funcs.inverse(\ithis);
				}
			});
			\iHandlebars.registerHelper("nteql", (Object obj1, Object obj2, dynamic funcs) {
				if (obj1 != obj2) {
					return funcs.fn(\ithis);
				} else {
					return funcs.inverse(\ithis);
				}
			});
			\iHandlebars.registerHelper("lt", (Integer int1, Integer int2, dynamic funcs) {
				if (int1 < int2) {
					return funcs.fn(\ithis);
				} else {
					return funcs.inverse(\ithis);
				}
			});
			\iHandlebars.registerHelper("gt", (Integer int1, Integer int2, dynamic funcs) {
				if (int1 > int2) {
					return funcs.fn(\ithis);
				} else {
					return funcs.inverse(\ithis);
				}
			});
		}
	}
	
	Category? getCategory(String name) {
		print("getting category: " + name);
		for (category in categories) { 
			if (name.lowercased == category.model.name.lowercased) {
				return category;
			}
		}
		return null;
	}
	
	void routeIndex() {
		print("routing index");
		if (exists firstCategory = categories[0]) {
			print("display first category");
			firstCategory.display(0, 0);
		}
	}
	
	void routeCategory(String categoryName) {
		print("route category name: " + categoryName);
		if (exists category = getCategory(categoryName)) {
			print("display category");
			category.display(0, 0);
		} else {
			print("display invalid category");
			view.displayInvalidCategory();
		}
	}
	
	void routePage(String categoryName, Integer page) {
		value pageNum = Integer(page);
		print("route category name: " + categoryName + " page num: " + pageNum.string);
		if (exists category = getCategory(categoryName)) {
			print("display category and page");
			category.display(pageNum, 0);
		} else {
			print("display invalid category");
			view.displayInvalidCategory();
		}
	}
	
	void routePhoto(String categoryName, Integer page, Integer photo) {
		value pageNum = Integer(page);
		value photoNum = Integer(photo);
		print("route category name: " + categoryName + " page num: " + pageNum.string + " photo num: " + photo.string);
		if (exists category = getCategory(categoryName)) {
			print("display category, page and photo");
			category.display(pageNum, photoNum);
		} else {
			print("display invalid category");
			view.displayInvalidCategory();
		}
	}
	
}

shared class GalleryModel(shared Gallery controller, shared String dir) {
	
	shared void loadJSON() {
		print("loading local json");
		dynamic {
			jQuery.getJSON(dir + "/images.json")
			.done(parseCategories)
			.fail( () => alert("Error could not load image file") );
		}
	}
	
	shared void parseCategories(CategoryJSON[] categoriesJSON) {
		print("process category json");
		print("dir is:" + dir);
		controller.categories = [for (category in categoriesJSON) Category(controller).init(category.name, category.photos, dir) ];
		
		controller.loaded();
	}
	
}

shared class GalleryView(shared Gallery controller) {
	variable dynamic template;
	variable dynamic tabsTemplate;
	
	shared variable String categoryTabs = "categoryTabs";
	shared variable String category = "category";
	
	dynamic {
		template = \iHandlebars.compile(jQuery("#gallery-template").html());
		tabsTemplate = \iHandlebars.compile(jQuery("#gallery-tabs-template").html());
	}
	
	shared void display() {
		value context = JSON {
	        "categoryTabs" -> categoryTabs,
	        "category" -> category
	    };
	    dynamic {
	    	jQuery("body").html(template(context.toJson()));
		}
	}
	
	shared void displayCategories() {
		value categories = JSONArray();
		for (category in controller.categories) { 
			categories.add(JSON { "name" -> category.model.name });
		}
		value context = JSON { "category" -> categories };
		dynamic {
			categoryTabs = tabsTemplate(context.toJson());
		}
		display();
	}
	
	shared void displayInvalidCategory() {
		// display invalid category here
	}
	
	shared void isMobile() {
		print("is mobile");
	}
	
	shared void isDesktop() {
		print("is desktop");
	}
}

shared class Category(shared Gallery parent) {
	shared late CategoryModel model;
	shared late CategoryView view;
	shared variable Page[] pages = {};
	
	shared Category init(String name, PhotoJSON[] photos, String dir) {
		print("initalizing category");
		model = CategoryModel(this, name);
		view = CategoryView(this);
		
		setPages(photos, dir);
		
		return this;
	}
	
	shared void updatePage(String page) {
		view.page = page;
		view.display();
	}
	
	shared void display(Integer pageNum, Integer photoNum) {
		print("display category " + model.name + " page " + pageNum.string + " photo " + photoNum.string);
		view.display();
		if (exists page = pages[pageNum]) {
			print("display page");
			view.displayPage(pageNum);
			page.display(photoNum);
		} else {
			print("display invalid page");
			view.displayInvalidPage();
		}
	}
	
	shared void displayPhoto(Photo? photoM) {
		if (exists photo = photoM) {
			print("display photo");
			view.displayPhoto(photo);
		} else {
			print("display no photo");
			view.displayNoPhoto();
		}
	}
	
	shared void setPages(PhotoJSON[] photosJSON, String dir) {
		print("set category pages");
		value end = (1 + photosJSON.size/6);
		pages = [for (i in 0:end) Page(this, model.uri + i.string + "/").init(photosJSON.segment(i*6, 6), dir) ];
	}
}

shared class CategoryModel(shared Category controller, shared String name) {
	shared String uri => "#/" + name.lowercased + "/";
}

shared class CategoryView(shared Category controller) {
	variable dynamic template;
	variable dynamic paginationTemplate;
	
	shared variable String pagination = "pagination";
	shared variable String page = "page";
	shared variable String title = "";
	shared variable String src = "";
	shared variable String alt = "";
	shared variable String caption = "";
	shared variable String width = "";
	shared variable String height = "";
	
	dynamic {
		template = \iHandlebars.compile(jQuery("#category-template").html());
		paginationTemplate = \iHandlebars.compile(jQuery("#category-pagination-template").html());
	}
	
	shared void display() {
		print("display category");
		value context = JSON {
	        "title" -> title,
	        "width" -> width,
	        "src" -> src,
	        "alt" -> alt,
	        "caption" -> caption,
	        "page" -> page,
	        "pagination" -> pagination
		};
		print("src: " + src);
		dynamic {
	    	controller.parent.updateCategory(template(context.toJson()));
		}
		dynamic {
			jQuery(".category").each( () => jQuery(\ithis).removeClass("active") );
			jQuery(".category-" + controller.model.name.lowercased).addClass("active");
		}
	}
	
	shared void displayPhoto(Photo photo) {
	    if (exists photoWidth = photo.width) {
	    	width = photoWidth.string;
		}
		if (exists photoHeight = photo.height) {
	    	height = photoHeight.string;
		}
		src = photo.src;
		alt = photo.alt;
		caption = photo.caption;
		title = photo.title;
		dynamic {
			display();
			jQuery(".display-photo").stop(true, true).hide().fadeIn(800);
		}
	}
	
	shared void displayNoPhoto() {
		// display no photo
	}
	
	shared void displayInvalidPage() {
		// display no photo
	}

	shared void displayPage(Integer pageNum) {
		value pages = JSONArray();
		for (page in controller.pages) { 
			pages.add(JSON { "uri" -> page.uri });
		}
		value context = JSON {
			"uri" -> controller.model.uri,
	        "page" -> pageNum,
	        "lastPage" -> (controller.pages.size - 1),
	        "pages" -> pages
	    };
	    dynamic {
	    	pagination = paginationTemplate(context.toJson());
		}
		display();
	}
}

shared class CategoryJSON(shared String name, shared PhotoJSON[] photos) {}

shared class Page(shared Category parent, shared String uri) {
	shared late PageModel model;
	shared late PageView view;
	
	shared Page init(PhotoJSON[] photos, String dir) {
		print("initalize page: " + uri);
		model = PageModel(this);
		view = PageView(this);
		
		model.parsePhotos(photos, dir);
		
		return this;
	}
	
	shared void display(Integer photoNum) {
		print("display page: " + uri);
		view.display();
		print("display photo: " + photoNum.string);
		parent.displayPhoto(model.photos[photoNum]);
	}
	
}

shared class PageModel(shared Page controller) {
	shared variable Photo[] photos = {};
	
	shared void parsePhotos(PhotoJSON[] photosJSON, String dir) {
		print("parsing photos");
		photos  = [ for (photo in photosJSON ) Photo(photo.title, photo.caption, dir + "/" + photo.src, dir + "/" + photo.thumb, photo.height, photo.width, photo.alt) ];
	}
}

shared class PageView(shared Page controller) {
	variable dynamic template;
	
	dynamic {
		template = \iHandlebars.compile(jQuery("#page-template").html());
	}
	
	shared void display() {
		value photos = JSONArray();
		for (photo in controller.model.photos) { 
			photos.add(JSON { 
				"title" -> photo.title,
				"uri" -> controller.uri,
				"src" -> photo.thumb,
				"alt" -> photo.alt
			});
		}
		value context = JSON {
	        "photos" -> photos
	    };
	    dynamic {
			controller.parent.updatePage(template(context.toJson()));
		}
		for (i in 0:photos.size) {
			dynamic {
				jQuery(".photo" + i.string).hide();
				jQuery(".photo" + i.string).load( () => photoLoaded(i) );
				jQuery(".photo" + i.string).parent().spin("small");
			}
		}
	}
	
	void photoLoaded(Integer photo) {
		dynamic {
			jQuery(\ithis).parent().spin(false);
			jQuery(\ithis).show();
		}
	}
	
}

shared class Photo(shared String title, shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}

shared class PhotoJSON(shared String title,shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}