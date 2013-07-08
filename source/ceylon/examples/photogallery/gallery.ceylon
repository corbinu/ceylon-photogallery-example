import ceylon.json { ... }

shared void nativejs() {  }

shared nativejs interface JSArray {
	
	// add the rest later
	
	shared formal Anything pop();
	
	shared formal Anything push();

}

shared nativejs interface JSJSON {}

class JSObject({Entry<String, String|Boolean|Integer|Float|Object|Array|NullInstance>*} values = {}) extends Object(values) {
	
	shared JSJSON toJson() {
		print("converting object to json");
		return objectToJson(this);
	}
	
	JSJSON objectToJson(Object ceylonJSON) {
		variable JSJSON returnJSON;
		dynamic {
			value json = \iObject();
			print("created new JS object " + json);
			for (name -> entry in ceylonJSON) {
				switch (entry)
				case (is String) { 
					print("adding entry" + name + " with value " + entry);
					json.name = entry;
				}
				case (is Boolean) {
					if (entry) {
						json.name = \itrue;
					} else {
						json.name = \ifalse;
					}
				}
				case (is Integer|Float) { 
					json.name = \iNumber(entry);
				}
				case (is Object) {
					json.name = objectToJson(entry);
				}
				case (is Array) {
					json.name = arrayToArray(entry);
				}
				case (is NullInstance) {
					json.name = \inull;
				}

			}
			returnJSON = json;
		}
		
		return returnJSON;
	}
	
	JSArray arrayToArray(Array ceylonArray) {
		variable JSArray returnArray;
		dynamic {
			value array = \iArray();
			for (entry in ceylonArray) {
				switch (entry)
				case (is String) {  
					array.push(entry);
				}
				case (is Boolean) {
					if (entry) {
						array.push(\itrue);
					} else {
						array.push(\ifalse);
					}
				}
				case (is Integer|Float) { 
					array.push(objectToJson(\iNumber(entry)));
				}
				case (is Object) {
					array.push(objectToJson(entry));
				}
				case (is Array) {
					array.push(arrayToArray(entry));
				}
				case (is NullInstance) {
					array.push(\inull);
				}

			}
			returnArray = array;
		}
		
		return returnArray;
	}
}

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
		
		view.displayCategories();
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
		print("loading loal json");
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
	variable Callable<String, Anything[]> template;
	variable Callable<String, Anything[]> tabsTemplate;
	
	variable String categoryTabs = "categoryTabs";
	variable String categoryMobile = "categoryMobile";
	variable String categoryDesktop = "categoryDesktop";
	
	dynamic {
		template = \iHandlebars.compile(jQuery("#gallery-template").html());
		tabsTemplate = \iHandlebars.compile(jQuery("#gallery-tabs-template").html());
	}
	
	shared void display() {
		value context = JSObject {
	        "categoryTabs" -> categoryTabs,
	        "categoryMobile" -> categoryMobile,
	        "categoryDesktop" -> categoryDesktop
	    };
	    dynamic {
	       	alert(context.toJson());
	    	jQuery("body").html(template(context.toJson()));
		}
	}
	
	shared void displayCategories() {
		/*value contextArray = [ for (category in controller.categories) JSObject { "name" -> category.model.name }];
		dynamic {
			value context = \iArray();
			for (entry in contextArray) {
				context.push(entry.json);
			}
			categoryTabs = tabsTemplate(context);
		}*/
		display();
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
			// update template
			jQuery(".display-photo").stop(true,true).hide().fadeIn(800);
		}
	}
	
	shared void displayNoPhoto() {
		// display no photo
	}
	
	shared void displayInvalidPage() {
		// display no photo
	}

	shared void displayPage(Integer page) {
		// update template
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
	
	shared void display() {
		
		// update template
		for (i -> photo in entries(controller.model.photos) ) {
			dynamic {
				jQuery(".photo" + i.string).load( () => jQuery(\ithis).parent().spin(false) );
				jQuery(".photo" + i.string).parent().spin("small");
			}
		}
	}
	
}

shared class Photo(shared String title, shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}

shared class PhotoJSON(shared String title,shared String caption, shared String src, shared String thumb, shared Integer? height, shared Integer? width, shared String alt) {}