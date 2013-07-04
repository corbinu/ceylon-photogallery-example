shared class Gallery() {
	shared variable Category[] categories = {};
	shared String currentCategory = "";
	shared late GalleryModel model;
	shared late GalleryView view;
	
	shared Gallery init(String dir) {
		print("initalizing gallery");
		model = GalleryModel(this, dir);
		view = GalleryView(this);
		
		model.loadJSON();
		
		return this;
	}
	
	shared void loaded() {
		print("gallery loaded");
		dynamic {
			value router = Router().init("/");
			router.on("/", routeIndex);
			router.on("/:category", routeCategory);
			router.on("/:category/:page", routePage);
			router.on("/:category/:page/:photo", routePhoto);
		}
		
		if (categories.size > 0) {
			view.displayCategories();
		} else {
			view.displayNoCategories();
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
		} else {
			print("display no categories");
			view.displayNoCategories();
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
		print("laoding loal json");
		dynamic {
			jQuery.getJSON(dir + "/images.json")
			.done(parseCategories)
			.fail( () => alert("Error could not load image file") );
		}
	}
	
	shared void parseCategories(CategoryJSON[] categoriesJSON) {
		print("process category json");
		controller.categories = [for (category in categoriesJSON) Category(controller).init(category.name, category.photos, dir) ];
		
		controller.loaded();
	}
	
}

shared class GalleryView(shared Gallery controller) {
	
	shared void displayCategories() {
		for (category in controller.categories) {
			dynamic {
				jQuery(".catagories").append("<li class=\"category category-" + category.model.name.lowercased + "\"><a href=\"#/" + category.model.name.lowercased + "\">" + category.model.name + "</a></li>");
			}
		}
	}
	
	shared void displayNoCategories() {
		// display no categories here
	}
	
	shared void displayInvalidCategory() {
		// display invalid category here
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
	
	shared void display(Integer pageNum, Integer photoNum) {
		print("display category " + model.name + " page " + pageNum.string + " photo" + photoNum.string);
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
	
	shared void display() {
		print("display category");
		dynamic {
			jQuery(".category").each( () => jQuery(\ithis).removeClass("active") );
			jQuery(".category-" + controller.model.name.lowercased).addClass("active");
		}
	}
	
	shared void displayPhoto(Photo photo) {
		dynamic {
			jQuery(".display-photo").attr("src", photo.src).attr("alt", photo.alt);
			jQuery(".display-title").text(photo.title);
			jQuery(".display-caption").text(photo.caption);
		}
	}
	
	shared void displayNoPhoto() {
		// display no photo
	}
	
	shared void displayInvalidPage() {
		// display no photo
	}

	shared void displayPage(Integer page) {
		dynamic {
			jQuery(".pagination").empty();
		}
		if (controller.pages.size > 1) {
			variable String append = "<ul>";
			if (page > 0) {
				append += "<li><a href=\"" + controller.model.uri + (page-1).string + "\">Prev</a></li>";
			} else {
				append += "<li class=\"disabled\"><a href=\"#\">Prev</a></li>";
			}
			
			for (i in 0:controller.pages.size) {
				append += "<li";
				if (i == page) {
					append += " class=\"active\"";
				}
				append += "><a href=\"" + controller.model.uri + i.string + "\">" + (i + 1).string + "</a></li>";
			}
			
			if (page < (controller.pages.size - 1)) {
				append += "<li><a href=\"" + controller.model.uri + (page+1).string + "\">Next</a></li>";
			} else {
				append += "<li class=\"disabled\"><a href=\"#\">Next</a></li>";
			}
			append += "</ul>";
			
			dynamic {
				jQuery(".pagination").append(append);
			}
		}
	}
}

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
		photos  = [ for (photo in photosJSON ) Photo(photo.title, photo.caption, dir + "/" + photo.src, photo.height, photo.width, photo.alt, photo.span) ];
	}
}

shared class PageView(shared Page controller) {
	
	shared void display() {
		dynamic {
			jQuery(".image-grid").empty();
		}
		for (i -> photo in entries(controller.model.photos) ) {
			value append = "<li class=\"span" + photo.span.string 
				+ "\"><a href=\"" + controller.uri + i.string + "\" class=\"thumbnail\"><img src=\"" 
				+ photo.src + "\" alt=\"" + photo.alt 
				+ "\" width=\"" + photo.width.string 
				+ "\" height=\"" + photo.height.string + "\"></a></li>";
			dynamic {
				jQuery(".image-grid").append(append);
			}
		}
	}
	
}

shared class CategoryJSON(shared String name, shared PhotoJSON[] photos) {}

shared class Photo(shared String title, shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}

shared class PhotoJSON(shared String title,shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}