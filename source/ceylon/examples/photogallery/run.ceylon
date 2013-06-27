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
	
	shared void displayCategory(String name, Integer page) {
		variable Boolean found = false;
		for (category in categories) { 
			if (name.lowercased == category.name.lowercased) {
				found = true; 
				break;
			}
		}
		if (found) {
			for (category in categories) {
				if (name.lowercased == category.name.lowercased) {
					print("Display category with name: " + name + " and page: " + page.string);
					dynamic {
						jQuery(".category-" + category.name.lowercased).addClass("active");
					}
					category.displayPage(page);
				} else {
					dynamic {
						jQuery(".category-" + category.name.lowercased).removeClass("active");
					}
				}
			}
		} else {
			print("could not find category with name: " + name);
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

class PhotoCategory(shared Gallery gallery, shared String name) {
	shared variable Photo[] photos = {};
	shared variable Integer pages = 1;
	
	shared void setPhotos(PhotoJSON[] photosJSON) {
		photos  = [ for ( photo in photosJSON) Photo(photo.title, photo.caption, photo.src, photo.height, photo.width, photo.alt, photo.span) ];
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
class Photo(shared String title, shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}

class PhotoCategoryJSON(shared String name, shared PhotoJSON[] photos) {}
class PhotoJSON(shared String title, shared String caption, shared String src, shared Integer height, shared Integer width, shared String alt, shared Integer span) {}