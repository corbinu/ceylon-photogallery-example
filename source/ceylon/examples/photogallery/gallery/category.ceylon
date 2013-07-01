import ceylon.examples.photogallery { Gallery }
import ceylon.examples.photogallery.data { PhotoJSON, PhotoModel }

shared class Category(shared Gallery gallery, shared String name) {
	shared variable PhotoModel[] photos = {};
	shared variable Integer pages = 1;
	
	shared void setPhotos(PhotoJSON[] photosJSON) {
		photos  = [ for ( photo in photosJSON) PhotoModel(photo.title, photo.caption, photo.src, photo.height, photo.width, photo.alt, photo.span) ];
		pages += photos.size/6;
		print("number of pages: " + pages.string);
	}
	
	shared void displayPhoto(Integer num) {
		if (exists photo = photos[num]) {
			print("displaying photo num: " + num.string);
			dynamic {
				jQuery(".display-photo").attr("src", gallery.dir + "/" + photo.src).attr("alt", photo.alt);
				jQuery(".display-title").text(photo.title);
				jQuery(".display-caption").text(photo.caption);
			}
		} else {
			print("could not find photo num: " + num.string);
		}
	}
	
	shared void displayPage(Integer page) {
		print("display page num: " + page.string);
		dynamic {
			jQuery(".pagination").empty();
		}
		if (pages > 1) {
			variable String append = "<ul>";
			if (page > 1) {
				append += "<li><a href=\"#/" + name.lowercased + "/" + (page-1).string + "\">Prev</a></li>";
			} else {
				append += "<li class=\"disabled\"><a href=\"#\">Prev</a></li>";
			}
			
			for (i in 1:pages) {
				append += "<li";
				if (i == page) {
					append += " class=\"active\"";
				}
				append += "><a href=\"#/" + name.lowercased + "/" + i.string + "\">" + i.string + "</a></li>";
			}
			
			if (page < pages) {
				append += "<li><a href=\"#/" + name.lowercased + "/" + (page+1).string + "\">Next</a></li>";
			} else {
				append += "<li class=\"disabled\"><a href=\"#\">Next</a></li>";
			}
			append += "</ul>";
			
			dynamic {
				jQuery(".pagination").append(append);
			}
		}
		displayThumbnails(page);
	}
	
	shared void displayThumbnails(Integer page) {
		print("display thumbnails page num: " + page.string);
		dynamic {
			jQuery(".image-grid").empty();
		}
		variable Integer i = (page-1)*6;
		print("thumbnails start: " + i.string);
		print("thumbnails end: " + (page*6).string);
		while (i < page*6) {
			if (exists photo = photos[i]) {
				print("displaying thumbnail: " + i.string);
				dynamic {
					jQuery(".image-grid").append("<li class=\"span" + photo.span.string 
						+ "\"><a href=\"#/" + name.lowercased + "/" + page.string + "/" + i.string + "\" class=\"thumbnail\"><img src=\"" 
						+ gallery.dir + "/" + photo.src + "\" alt=\"" + photo.alt 
						+ "\" width=\"" + photo.width.string 
						+ "\" height=\"" + photo.height.string + "\"></a></li>");
				}
			}
			i++;
		}
		print("display photo: " + ((page-1)*6).string);
		displayPhoto((page-1)*6);
	}
}