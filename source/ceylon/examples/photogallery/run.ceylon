"Run the module `ceylon.examples.photogallery`."

shared void init(String galleryDir) {
	
    dynamic {
		variable Gallery gallery = Gallery(galleryDir);
		jQuery.getJSON(galleryDir + "/images.json")
		.done(gallery.setCategories)
		.fail(() => alert("Error could not load image file") );
    }
}


class Gallery(shared String dir) {
	shared variable PhotoCategory[] categories = {};
	
	shared void setCategories(PhotoCategoryJSON[] categoriesJSON) {
		categories = [for (category in categoriesJSON) getCategory(category)];
		init();
	}
	
	shared void displayCategory(String name) {
		for (category in categories) {
			if (name == category.name) {
				category.displayPhotos(dir);
				return;
			}
		}
		dynamic {
			alert("Could not find category with name: " + name);
		}
	}
	
	shared void displayPhoto(Photo photo) {
		dynamic {
			// Should be shown here on click
			jQuery(".display-photo").attr("src", dir + "/" + photo.src).attr("alt", photo.alt);
		}
	}
	
	PhotoCategory getCategory(PhotoCategoryJSON categoryJSON) {
		PhotoCategory category = PhotoCategory(this, categoryJSON.name);
		category.setPhotos(categoryJSON.photos);
		return category;
	}
	
	void init() {
		PhotoCategory? firstCategory = categories[0];
		if (exists firstCategory) {
			displayCategory(firstCategory.name);
		}
	}
	
}

class PhotoCategory(shared Gallery gallery, shared String name) {
	shared variable Photo[] photos = {};
	
	shared void setPhotos(PhotoJSON[] photosJSON) {
		photos  = [ for ( photo in photosJSON) Photo(photo.src, photo.height, photo.width, photo.alt, photo.span) ];
	}
	
	shared void displayPhotos(String dir) {
		Photo? firstPhoto = photos[0];
		if (exists firstPhoto) {
			gallery.displayPhoto(firstPhoto);
		}
		
		variable Integer i = 0;
		for (photo in photos) {
			dynamic {
				print("adding photo: " + photo.src);
				jQuery(".image-grid").append("<li class=\"span" + photo.span.string 
					+ "\"><a href=\"#\" class=\"thumbnail photo" + i.string + "\"><img src=\"" 
					+ dir + "/" + photo.src + "\" alt=\"" + photo.alt 
					+ "\" width=\"" + photo.width.string 
					+ "\" height=\"" + photo.height.string + "\"></a></li>");
				// Should be binding to a photo click here and passing the photo
				jQuery(".photo"+i.string).click( () => gallery.displayPhoto(photo));
			}
			i++;
		}
	}
	
	
}
class Photo(shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}

class PhotoCategoryJSON(shared String name, shared PhotoJSON[] photos) {}
class PhotoJSON(shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}