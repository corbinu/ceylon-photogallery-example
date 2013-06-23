"Run the module `ceylon.examples.photogallery`."

shared void init(String galleryDir) {
	
    dynamic {
		jQuery.getJSON(galleryDir + "/images.json")
		.done(setCategories)
		.fail(() => alert("Error could not load image file") );
    }
}

void setCategories(Collection<PhotoCategory> categories) {
	for (category in categories)
	{
		setPhotos(category.photos);
	}
}

void setPhotos(Collection<Photo> photos) {
	for (photo in photos) {
		dynamic {
			alert("Got photo: "+photo.src);
		}
	}
}

class PhotoCategory(shared Collection<Photo> photos) {}
class Photo(shared String src, shared Integer height, shared Integer width, shared Integer span) {}