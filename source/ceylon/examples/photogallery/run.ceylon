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
		displayCategories();
	}
	
	shared void displayCategories() {
		for (category in categories) {
			category.displayPhotos(dir);
		}
	}
	
	PhotoCategory getCategory(PhotoCategoryJSON categoryJSON) {
		Photo[] photos  = [ for ( photo in categoryJSON.photos) Photo(photo.src, photo.height, photo.width, photo.alt, photo.span) ];
			
		return PhotoCategory(categoryJSON.name, photos);
	}
	
}

class PhotoCategory(shared String name, shared Photo[] photos) {
	
	shared void displayPhotos(String dir) {
		print("adding photos");
		for (photo in photos) {
			dynamic {
				print("adding photo: " + photo.src);
				jQuery(".image-grid").append("<li class=\"span" + photo.span.string 
					+ "\"><a href=\"#\" class=\"thumbnail\"><img src=\"" 
					+ dir + "/" + photo.src + "\" alt=\"" + photo.alt 
					+ "\" width=\"" + photo.width.string 
					+ "\" height=\"" + photo.height.string + "\"></a></li>");
			}
		}
	}
}
class Photo(shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}

class PhotoCategoryJSON(shared String name, shared PhotoJSON[] photos) {}
class PhotoJSON(shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}