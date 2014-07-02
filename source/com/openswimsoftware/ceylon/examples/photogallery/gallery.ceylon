import com.openswimsoftware.ceylon.js.json { JSON, JSONArray }
import com.openswimsoftware.ceylon.js.jquery { jq, jqThis, jQueryGetJSON }
import com.openswimsoftware.ceylon.js.language { JSObject }

shared class Gallery() {
	shared variable Category[] categories = [];
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
			 value resize = void (Anything event) {
				if ( jq(".visible-lg").getCss("display") == "none !important" ) {
					view.isMobile();
				} else {
					view.isDesktop();
				}
			};
			jq(JSObject(window)).resize(resize);
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
				print("comparing if " + int1.string + " is greater then " + int2.string);
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
			jQueryGetJSON(dir + "/images.json").done(parseCategories).fail( () => alert("Error could not load image file") );
		}
		
	}
	
	shared void parseCategories(CategoryJSON[] categoriesJSON, String status, Anything jqXHR) {
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
		template = \iHandlebars.compile(jq("#gallery-template").getHtml().native);
		tabsTemplate = \iHandlebars.compile(jq("#gallery-tabs-template").getHtml().native);
	}
	
	shared void display() {
		value context = JSON {
	        "categoryTabs" -> categoryTabs,
	        "category" -> category
	    };
	    dynamic {
	        jq("body").setHtml(template(context.toJson().native));
		}
	}
	
	shared void displayCategories() {
		value categories = JSONArray();
		for (category in controller.categories) { 
			// TODO this should be automatic in the JSON to JSON conversion
			dynamic {
				categories.add(JSON { "name" -> category.model.name });
			}
		}
		value context = JSON { "category" -> categories };
		dynamic {
			value tabs = context.toJson();
			categoryTabs = tabsTemplate(tabs.native);
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
	shared variable Page[] pages = [];
	
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
		template = \iHandlebars.compile(jq("#category-template").getHtml().native);
		paginationTemplate = \iHandlebars.compile(jq("#category-pagination-template").getHtml().native);
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
			controller.parent.updateCategory(template(context.toJson().native));
			jq(".category").each( (Integer index, Anything item) => jqThis().removeClass("active") );
			jq(".category-" + controller.model.name.lowercased).addClass("active");
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
		display();
		jq(".display-photo").stop(true, true).hide().fadeIn(800);
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
	        print("displaying page with properties:" + context.string);
	        pagination = paginationTemplate(context.toJson().native);
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
	shared variable Photo[] photos = [];
	
	shared void parsePhotos(PhotoJSON[] photosJSON, String dir) {
		print("parsing photos");
		photos  = [ for (photo in photosJSON ) Photo(photo.title, photo.caption, dir + "/" + photo.src, dir + "/" + photo.thumb, photo.height, photo.width, photo.alt) ];
	}
}

shared class PageView(shared Page controller) {
	variable dynamic template;
	
	dynamic {
		template = \iHandlebars.compile(jq("#page-template").getHtml().native);
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
			controller.parent.updatePage(template(context.toJson().native));
		}
		for (i in 0:photos.size) {
			dynamic {
				jq(".photo" + i.string).hide();
				jq(".photo" + i.string).on( "load", null, null, (Anything event) => photoLoaded(i) );
				spin(jq(".photo" + i.string).parent()).spinPreset("small");
			}
		}
	}
	
	void photoLoaded(Integer photo) {
		dynamic {
			spin(jq(\ithis).parent()).spinStop();
			jq(\ithis).show();
		}
	}
	
}

shared class Photo(shared String title, shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}

shared class PhotoJSON(shared String title,shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}