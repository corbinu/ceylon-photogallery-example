"Run the module `ceylon.examples.photogallery`."

shared void init(String galleryDir) {
	
    dynamic {
		variable Gallery gallery = Gallery(galleryDir);
		jQuery.getJSON(galleryDir + "/images.json")
		.done(gallery.setCategories)
		.fail( () => alert("Error could not load image file") );
    }
}


class Gallery(shared String dir) {
	shared variable PhotoCategory[] categories = {};
	shared String currentCategory = "";
	
	shared void setCategories(PhotoCategoryJSON[] categoriesJSON) {
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
	
	shared void displayCategory(String name) {
		if (name == currentCategory) {
			return;
		}
		dynamic {
			jQuery(".catagory").each( () => jQuery(this).removeClass("active") );
		}
		for (category in categories) {
			if (name.lowercased == category.name.lowercased) {
				dynamic {
					jQuery(".category-" + category.name.lowercased).addClass("active");
				}
				category.displayPhotos(dir);
				return;
			}
		}
		dynamic {
			alert("Could not find category with name: " + name);
		}
	}
	
	PhotoCategory getCategory(PhotoCategoryJSON categoryJSON) {
		PhotoCategory category = PhotoCategory(this, categoryJSON.name);
		category.setPhotos(categoryJSON.photos);
		return category;
	}
	
	void init() {
		dynamic {
			value router = Router().init("/");
			router.on("/", routeIndex);
			router.on("/:category", routeCategory);
			router.on("/:category/:photo", routePhoto);
		}
		displayCategories();
	}
	
	void routeIndex() {
		if (exists firstCategory = categories[0]) {
			displayCategory(firstCategory.name);
		}
	}
	
	void routeCategory(String category) {
		displayCategory(category);
	}
	
	void routePhoto(String categoryName, Integer photo) {
		displayCategory(categoryName);
		for (category in categories) {
			if (categoryName.lowercased == category.name.lowercased) {
				category.displayPhoto(photo);
				return;
			}
		}
	}
}

class PhotoCategory(shared Gallery gallery, shared String name) {
	shared variable Photo[] photos = {};
	
	shared void setPhotos(PhotoJSON[] photosJSON) {
		photos  = [ for ( photo in photosJSON) Photo(photo.title, photo.caption, photo.src, photo.height, photo.width, photo.alt, photo.span) ];
	}
	
	shared void displayPhoto(Integer num) {
		if (exists photo = photos[num]) {
			dynamic {
				jQuery(".display-photo").attr("src", gallery.dir + "/" + photo.src).attr("alt", photo.alt);
				jQuery(".display-title").text(photo.title);
				jQuery(".display-caption").text(photo.caption);
			}
		}
	}
	
	shared void displayPhotos(String dir) {
		dynamic {
			jQuery(".image-grid").empty();
		}
		variable Integer i = 0;
		for (photo in photos) {
			dynamic {
				jQuery(".image-grid").append("<li class=\"span" + photo.span.string 
					+ "\"><a href=\"#/" + name.lowercased + "/" + i.string + "\" class=\"thumbnail\"><img src=\"" 
					+ dir + "/" + photo.src + "\" alt=\"" + photo.alt 
					+ "\" width=\"" + photo.width.string 
					+ "\" height=\"" + photo.height.string + "\"></a></li>");
			}
			i++;
		}
		displayPhoto(0);
	}
	
	
}
class Photo(shared String title, shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}

class PhotoCategoryJSON(shared String name, shared PhotoJSON[] photos) {}
class PhotoJSON(shared String title, shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}