import ceylon.examples.photogallery.data { CategoryJSON }
import ceylon.examples.photogallery.gallery { Category }

shared class Gallery(shared String dir) {
	shared variable Category[] categories = {};
	shared String currentCategory = "";
	
	shared void setCategories(CategoryJSON[] categoriesJSON) {
		categories = [for (category in categoriesJSON) getCategory(category)];
		init();
	}
	
	shared void displayCategories() {
		for (category in categories) {
			dynamic {
				jQuery(".catagories").append("<li class=\"category category-" + category.name.lowercased + "\"><a href=\"#/" + category.name.lowercased + "\">" + category.name + "</a></li>");
			}
		}
	}
	
	shared void displayCategory(String name, Integer page) {
		variable Boolean found = false;
		for (category in categories) { 
			if (name.lowercased == category.name.lowercased) {
				found = true; 
				break;
			}
		}
		if (found) {
			dynamic {
				jQuery(".category").each( () => jQuery(\ithis).removeClass("active") );
			}
			for (category in categories) {
				if (name.lowercased == category.name.lowercased) {
					print("Display category with name: " + name + " and page: " + page.string);
					dynamic {
						jQuery(".category-" + category.name.lowercased).addClass("active");
					}
					category.displayPage(page);
				}
			}
		} else {
			print("could not find category with name: " + name);
		}
	}
	
	Category getCategory(CategoryJSON categoryJSON) {
		Category category = Category(this, categoryJSON.name);
		category.setPhotos(categoryJSON.photos);
		return category;
	}
	
	void init() {
		dynamic {
			value router = Router().init("/");
			router.on("/", routeIndex);
			router.on("/:category", routeCategory);
			router.on("/:category/:page", routePage);
			router.on("/:category/:page/:photo", routePhoto);
		}
		displayCategories();
	}
	
	void routeIndex() {
		if (exists firstCategory = categories[0]) {
			print("routing first category");
			displayCategory(firstCategory.name, 1);
		} else {
			print("no categories to display");
		}
	}
	
	void routeCategory(String category) {
		print("routing category: " + category);
		displayCategory(category, 1);
	}
	
	void routePage(String category, Integer page) {
		value pageNum = Integer(page);
		print("routing category: " + category + " and page: " + pageNum.string);
		displayCategory(category, pageNum);
	}
	
	void routePhoto(String categoryName, Integer page, Integer photo) {
		value pageNum = Integer(page);
		value photoNum = Integer(photo);
		print("routing category: " + categoryName + " and page: " + pageNum.string + " with photo: " + photoNum.string);
		displayCategory(categoryName, pageNum);
		for (category in categories) {
			if (categoryName.lowercased == category.name.lowercased) {
				print("found category");
				category.displayPhoto(photoNum);
				return;
			}
		}
	}
}