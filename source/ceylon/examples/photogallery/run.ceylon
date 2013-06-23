"Run the module `ceylon.examples.photogallery`."

shared void init(String galleryDir) {
	
    dynamic {
		jQuery.getJSON(galleryDir + "/images.json")
		.done((categories) {
			alert(JSON.stringify(categories));
		})
		.fail(() => alert("Error could not load image file") );
    }
}