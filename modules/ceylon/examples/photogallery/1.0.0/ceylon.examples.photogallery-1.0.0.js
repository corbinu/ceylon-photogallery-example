(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"isDesktop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDesktop"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"},"isMobile":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isMobile"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"category":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"category"},"categoryTabs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"categoryTabs"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"tabsTemplate":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tabsTemplate"}},"$nm":"GalleryView"},"$pkg-shared":"1","CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$an":{"shared":[]},"$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"photos"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"CategoryJSON"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"updatePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updatePage"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"pages"},"parent":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"parent"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Category"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$at":{"dir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"dir"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"GalleryModel"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$at":{"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"title"},"height":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"height"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"alt"},"width":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"src"},"thumb":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"thumb"}},"$nm":"PhotoJSON"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"parent":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"parent"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"},"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"Page"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"photos"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"PageModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"pageNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"title"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"height"},"paginationTemplate":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"paginationTemplate"},"page":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"page"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"alt"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"src"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"pagination":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"pagination"}},"$nm":"CategoryView"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$at":{"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"title"},"height":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"height"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"alt"},"width":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"src"},"thumb":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"thumb"}},"$nm":"Photo"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"photoLoaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$nm":"photoLoaded"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"PageView"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"updateCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"category"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updateCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"handlebarHelpers":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"handlebarHelpers"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.js.jquery\/1.10.0","ceylon.js.language\/1.8.5","ceylon.js.json\/1.0.0","ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');

//MethodDefinition init at run.ceylon (1:0-5:0)
function init(galleryDir$2){
    Gallery().init(galleryDir$2);
}
exports.init=init;
init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.examples.photogallery`.",46)),$$$cl1.shared()];},d:['ceylon.examples.photogallery','init']};};
exports.$pkg$ans$ceylon$examples$photogallery=function(){return[$$$cl1.shared()];};
exports.$mod$ans$=[];
var $$$cjj3=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj3,'ceylon.js.json/1.0.0');

//ClassDefinition Gallery at gallery.ceylon (3:0-148:0)
function Gallery($$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    
    //AttributeDeclaration categories at gallery.ceylon (4:1-4:43)
    $$gallery.categories$4_=$$$cl1.getEmpty();
    $$gallery.$prop$getCategories={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Category}}},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Gallery','$at','categories']};}};
    $$gallery.$prop$getCategories.get=function(){return categories};
    
    //AttributeDeclaration currentCategory at gallery.ceylon (5:1-5:35)
    $$gallery.currentCategory$5_=$$$cl1.String("",0);
    $$gallery.$prop$getCurrentCategory={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$at','currentCategory']};}};
    $$gallery.$prop$getCurrentCategory.get=function(){return currentCategory};
    
    //AttributeDeclaration model at gallery.ceylon (6:1-6:31)
    $$gallery.model$6_=undefined;
    $$gallery.$prop$getModel={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};}};
    $$gallery.$prop$getModel.get=function(){return model};
    
    //AttributeDeclaration view at gallery.ceylon (7:1-7:29)
    $$gallery.view$7_=undefined;
    $$gallery.$prop$getView={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};}};
    $$gallery.$prop$getView.get=function(){return view};
    return $$gallery;
}
Gallery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery']};};
exports.Gallery=Gallery;
function $init$Gallery(){
    if (Gallery.$$===undefined){
        $$$cl1.initTypeProto(Gallery,'ceylon.examples.photogallery::Gallery',$$$cl1.Basic);
        (function($$gallery){
            
            //AttributeDeclaration categories at gallery.ceylon (4:1-4:43)
            $$$cl1.defineAttr($$gallery,'categories',function(){return this.categories$4_;},function(categories$8){return this.categories$4_=categories$8;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Category}}},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Gallery','$at','categories']};});
            
            //AttributeDeclaration currentCategory at gallery.ceylon (5:1-5:35)
            $$$cl1.defineAttr($$gallery,'currentCategory',function(){return this.currentCategory$5_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$at','currentCategory']};});
            
            //AttributeDeclaration model at gallery.ceylon (6:1-6:31)
            $$$cl1.defineAttr($$gallery,'model',function(){if (this.model$6_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return this.model$6_;},function(model$9){if(this.model$6_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return this.model$6_=model$9;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};});
            
            //AttributeDeclaration view at gallery.ceylon (7:1-7:29)
            $$$cl1.defineAttr($$gallery,'view',function(){if (this.view$7_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return this.view$7_;},function(view$10){if(this.view$7_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return this.view$7_=view$10;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};});
            
            //MethodDefinition init at gallery.ceylon (9:1-29:1)
            $$gallery.init=function init(dir$11){
                var $$gallery=this;
                $$$cl1.print($$$cl1.String("initalizing gallery",19));
                var model=GalleryModel($$gallery,dir$11);
                $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return model;},function(model$12){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return model=model$12;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};});
                var view=GalleryView($$gallery);
                $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return view;},function(view$13){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return view=view$13;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};});
                $$gallery.handlebarHelpers$14();
                $$gallery.model.loadJSON();
                /*Begin dynamic block*/
                
                //AttributeDeclaration resize at gallery.ceylon (18:3-24:4)
                var resize$15=$$$cl1.$JsCallable(function (){
                    var $$gallery=this;
                    if((tmpvar$16=(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'19:9-19:14','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".visible-lg",11).valueOf()).css(/*NULL PARAM!*/$$$cl1.String("display",7).valueOf()),tmpvar$17=$$$cl1.String("none !important",15),(tmpvar$16.equals&&tmpvar$16.equals(tmpvar$17))||tmpvar$16===tmpvar$17)){
                        $$gallery.view.isMobile();
                    }else {
                        $$gallery.view.isDesktop();
                    }
                },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}});
                $prop$getResize$15={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},d:['ceylon.examples.photogallery','Gallery','$m','init','$at','resize']};}};
                $prop$getResize$15.get=function(){return resize$15};
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'25:3-25:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'25:10-25:15','gallery.ceylon'):window)).resize(/*NULL PARAM!*/$$$cl1.$JsCallable(resize$15,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
                /*End dynamic block*/
                return $$gallery;
            };$$gallery.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','init']};};
            
            //MethodDefinition loaded at gallery.ceylon (31:1-42:1)
            $$gallery.loaded=function loaded(){
                var $$gallery=this;
                $$$cl1.print($$$cl1.String("gallery loaded",14));
                /*Begin dynamic block*/
                
                //AttributeDeclaration router at gallery.ceylon (34:3-34:38)
                var router$18=(tmpvar$19=(typeof Router==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Router")),'34:20-34:25','gallery.ceylon'):Router),tmpvar$19.$$===undefined?new tmpvar$19():tmpvar$19()).init(/*NULL PARAM!*/$$$cl1.String("/",1).valueOf());
                $prop$getRouter$18={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.examples.photogallery','Gallery','$m','loaded','$at','router']};}};
                $prop$getRouter$18.get=function(){return router$18};
                router$18.on(/*NULL PARAM!*/$$$cl1.String("/",1).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable($$gallery.routeIndex$20,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
                router$18.on(/*NULL PARAM!*/$$$cl1.String("/:category",10).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable($$gallery.routeCategory$21,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
                router$18.on(/*NULL PARAM!*/$$$cl1.String("/:category/:page",16).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable($$gallery.routePage$22,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
                router$18.on(/*NULL PARAM!*/$$$cl1.String("/:category/:page/:photo",23).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable($$gallery.routePhoto$23,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
                /*End dynamic block*/
                $$gallery.view.displayCategories();
            };$$gallery.loaded.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','loaded']};};
            
            //MethodDefinition updateCategory at gallery.ceylon (44:1-47:1)
            $$gallery.updateCategory=function updateCategory(category$24){
                var $$gallery=this;
                ($$gallery.view.category=category$24);
                $$gallery.view.display();
            };$$gallery.updateCategory.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','updateCategory']};};
            
            //MethodDefinition handlebarHelpers at gallery.ceylon (49:1-92:1)
            $$gallery.handlebarHelpers$14=function handlebarHelpers$14(){
                var $$gallery=this;
                /*Begin dynamic block*/
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'51:3-51:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("lower",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (string$25){
                    var $$gallery=this;
                    return string$25.lowercased;
                },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'54:3-54:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("upper",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (string$26){
                    var $$gallery=this;
                    return string$26.uppercased;
                },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'57:3-57:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("add",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$27,int2$28){
                    var $$gallery=this;
                    return int1$27.plus(int2$28).string;
                },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'60:3-60:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("sub",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$29,int2$30){
                    var $$gallery=this;
                    return int1$29.minus(int2$30).string;
                },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'63:3-63:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("eql",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (obj1$31,obj2$32,funcs$33){
                    var $$gallery=this;
                    if(obj1$31.equals(obj2$32)){
                        return (tmpvar$34=funcs$33.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'65:21-65:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$34,{t:$$$cl1.Anything})?tmpvar$34:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'65:12-65:27','gallery.ceylon'));
                    }else {
                        return (tmpvar$35=funcs$33.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'67:26-67:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$35,{t:$$$cl1.Anything})?tmpvar$35:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'67:12-67:32','gallery.ceylon'));
                    }
                },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'70:3-70:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("nteql",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (obj1$36,obj2$37,funcs$38){
                    var $$gallery=this;
                    if((!obj1$36.equals(obj2$37))){
                        return (tmpvar$39=funcs$38.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'72:21-72:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$39,{t:$$$cl1.Anything})?tmpvar$39:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'72:12-72:27','gallery.ceylon'));
                    }else {
                        return (tmpvar$40=funcs$38.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'74:26-74:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$40,{t:$$$cl1.Anything})?tmpvar$40:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'74:12-74:32','gallery.ceylon'));
                    }
                },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'77:3-77:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("lt",2).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$41,int2$42,funcs$43){
                    var $$gallery=this;
                    if(int1$41.compare(int2$42).equals($$$cl1.getSmaller())){
                        return (tmpvar$44=funcs$43.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'79:21-79:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$44,{t:$$$cl1.Anything})?tmpvar$44:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'79:12-79:27','gallery.ceylon'));
                    }else {
                        return (tmpvar$45=funcs$43.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'81:26-81:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$45,{t:$$$cl1.Anything})?tmpvar$45:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'81:12-81:32','gallery.ceylon'));
                    }
                },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
                (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'84:3-84:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("gt",2).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$46,int2$47,funcs$48){
                    var $$gallery=this;
                    if(int1$46.compare(int2$47).equals($$$cl1.getLarger())){
                        return (tmpvar$49=funcs$48.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'86:21-86:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$49,{t:$$$cl1.Anything})?tmpvar$49:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'86:12-86:27','gallery.ceylon'));
                    }else {
                        return (tmpvar$50=funcs$48.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'88:26-88:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$50,{t:$$$cl1.Anything})?tmpvar$50:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:12-88:32','gallery.ceylon'));
                    }
                },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
                /*End dynamic block*/
            };$$gallery.handlebarHelpers$14.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','handlebarHelpers']};};
            
            //MethodDefinition getCategory at gallery.ceylon (94:1-102:1)
            $$gallery.getCategory$51=function getCategory$51(name$52){
                var $$gallery=this;
                $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$52));
                //'for' statement at gallery.ceylon (96:2-100:2)
                var it$53 = $$gallery.categories.iterator();
                var category$54;while ((category$54=it$53.next())!==$$$cl1.getFinished()){
                    if(name$52.lowercased.equals(category$54.model.name.lowercased)){
                        return category$54;
                    }
                }
                return null;
            };$$gallery.getCategory$51.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','getCategory']};};
            
            //MethodDefinition routeIndex at gallery.ceylon (104:1-110:1)
            $$gallery.routeIndex$20=function routeIndex$20(){
                var $$gallery=this;
                $$$cl1.print($$$cl1.String("routing index",13));
                var firstCategory$55;
                if((firstCategory$55=$$gallery.categories.get((0)))!==null){
                    $$$cl1.print($$$cl1.String("display first category",22));
                    firstCategory$55.display((0),(0));
                }
            };$$gallery.routeIndex$20.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routeIndex']};};
            
            //MethodDefinition routeCategory at gallery.ceylon (112:1-121:1)
            $$gallery.routeCategory$21=function routeCategory$21(categoryName$56){
                var $$gallery=this;
                $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$56));
                var category$57;
                if((category$57=$$gallery.getCategory$51(categoryName$56))!==null){
                    $$$cl1.print($$$cl1.String("display category",16));
                    category$57.display((0),(0));
                }else {
                    $$$cl1.print($$$cl1.String("display invalid category",24));
                    $$gallery.view.displayInvalidCategory();
                }
            };$$gallery.routeCategory$21.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routeCategory']};};
            
            //MethodDefinition routePage at gallery.ceylon (123:1-133:1)
            $$gallery.routePage$22=function routePage$22(categoryName$58,page$59){
                var $$gallery=this;
                
                //AttributeDeclaration pageNum at gallery.ceylon (124:2-124:31)
                var pageNum$60=$$$cl1.Integer(page$59);
                $prop$getPageNum$60={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.examples.photogallery','Gallery','$m','routePage','$at','pageNum']};}};
                $prop$getPageNum$60.get=function(){return pageNum$60};
                $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$58).plus($$$cl1.String(" page num: ",11)).plus(pageNum$60.string));
                var category$61;
                if((category$61=$$gallery.getCategory$51(categoryName$58))!==null){
                    $$$cl1.print($$$cl1.String("display category and page",25));
                    category$61.display(pageNum$60,(0));
                }else {
                    $$$cl1.print($$$cl1.String("display invalid category",24));
                    $$gallery.view.displayInvalidCategory();
                }
            };$$gallery.routePage$22.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routePage']};};
            
            //MethodDefinition routePhoto at gallery.ceylon (135:1-146:1)
            $$gallery.routePhoto$23=function routePhoto$23(categoryName$62,page$63,photo$64){
                var $$gallery=this;
                
                //AttributeDeclaration pageNum at gallery.ceylon (136:2-136:31)
                var pageNum$65=$$$cl1.Integer(page$63);
                $prop$getPageNum$65={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.examples.photogallery','Gallery','$m','routePhoto','$at','pageNum']};}};
                $prop$getPageNum$65.get=function(){return pageNum$65};
                
                //AttributeDeclaration photoNum at gallery.ceylon (137:2-137:33)
                var photoNum$66=$$$cl1.Integer(photo$64);
                $prop$getPhotoNum$66={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.examples.photogallery','Gallery','$m','routePhoto','$at','photoNum']};}};
                $prop$getPhotoNum$66.get=function(){return photoNum$66};
                $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$62).plus($$$cl1.String(" page num: ",11)).plus(pageNum$65.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$64.string));
                var category$67;
                if((category$67=$$gallery.getCategory$51(categoryName$62))!==null){
                    $$$cl1.print($$$cl1.String("display category, page and photo",32));
                    category$67.display(pageNum$65,photoNum$66);
                }else {
                    $$$cl1.print($$$cl1.String("display invalid category",24));
                    $$gallery.view.displayInvalidCategory();
                }
            };$$gallery.routePhoto$23.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routePhoto']};};
        })(Gallery.$$.prototype);
    }
    return Gallery;
}
exports.$init$Gallery=$init$Gallery;
$init$Gallery();

//ClassDefinition GalleryModel at gallery.ceylon (150:0-169:0)
function GalleryModel(controller, dir, $$galleryModel){
    $init$GalleryModel();
    if ($$galleryModel===undefined)$$galleryModel=new GalleryModel.$$;
    $$galleryModel.controller_=controller;
    $$galleryModel.dir_=dir;
    return $$galleryModel;
}
GalleryModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel']};};
exports.GalleryModel=GalleryModel;
function $init$GalleryModel(){
    if (GalleryModel.$$===undefined){
        $$$cl1.initTypeProto(GalleryModel,'ceylon.examples.photogallery::GalleryModel',$$$cl1.Basic);
        (function($$galleryModel){
            
            //MethodDefinition loadJSON at gallery.ceylon (152:1-159:1)
            $$galleryModel.loadJSON=function loadJSON(){
                var $$galleryModel=this;
                $$$cl1.print($$$cl1.String("loading local json",18));
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'155:3-155:8','gallery.ceylon'):jQuery).getJSON(/*NULL PARAM!*/$$galleryModel.dir.plus($$$cl1.String("/images.json",12)).valueOf()).done(/*NULL PARAM!*/$$$cl1.$JsCallable($$galleryModel.parseCategories,[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}},Return:{t:$$$cl1.Anything}})).fail(/*NULL PARAM!*/$$$cl1.$JsCallable(function (){
                    var $$galleryModel=this;
                    return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: alert")),'157:16-157:20','gallery.ceylon'):alert)(/*NULL PARAM!*/$$$cl1.String("Error could not load image file",31).valueOf());
                },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
                /*End dynamic block*/
            };$$galleryModel.loadJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$m','loadJSON']};};
            
            //MethodDefinition parseCategories at gallery.ceylon (161:1-167:1)
            $$galleryModel.parseCategories=function parseCategories(categoriesJSON$68){
                var $$galleryModel=this;
                $$$cl1.print($$$cl1.String("process category json",21));
                $$$cl1.print($$$cl1.String("dir is:",7).plus($$galleryModel.dir));
                ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (164:27-164:121)
                    var it$69=categoriesJSON$68.iterator();
                    var category$70=$$$cl1.getFinished();
                    var next$category$70=function(){return category$70=it$69.next();}
                    next$category$70();
                    return function(){
                        if(category$70!==$$$cl1.getFinished()){
                            var category$70$71=category$70;
                            var tmpvar$72=Category($$galleryModel.controller).init(category$70$71.name,category$70$71.photos,$$galleryModel.dir);
                            next$category$70();
                            return tmpvar$72;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Category}}).sequence);
                $$galleryModel.controller.loaded();
            };$$galleryModel.parseCategories.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},$an:function(){return[];}}],$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$m','parseCategories']};};
            $$$cl1.defineAttr($$galleryModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$at','controller']};});
            $$$cl1.defineAttr($$galleryModel,'dir',function(){return this.dir_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$at','dir']};});
        })(GalleryModel.$$.prototype);
    }
    return GalleryModel;
}
exports.$init$GalleryModel=$init$GalleryModel;
$init$GalleryModel();

//ClassDefinition GalleryView at gallery.ceylon (171:0-216:0)
function GalleryView(controller, $$galleryView){
    $init$GalleryView();
    if ($$galleryView===undefined)$$galleryView=new GalleryView.$$;
    $$galleryView.controller_=controller;
    
    //AttributeDeclaration template at gallery.ceylon (172:1-172:26)
    $$galleryView.$prop$getTemplate$73={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','template']};}};
    $$galleryView.$prop$getTemplate$73.get=function(){return template$73};
    
    //AttributeDeclaration tabsTemplate at gallery.ceylon (173:1-173:30)
    $$galleryView.$prop$getTabsTemplate$74={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','tabsTemplate']};}};
    $$galleryView.$prop$getTabsTemplate$74.get=function(){return tabsTemplate$74};
    
    //AttributeDeclaration categoryTabs at gallery.ceylon (175:1-175:53)
    $$galleryView.categoryTabs$75_=$$$cl1.String("categoryTabs",12);
    $$galleryView.$prop$getCategoryTabs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};}};
    $$galleryView.$prop$getCategoryTabs.get=function(){return categoryTabs};
    
    //AttributeDeclaration category at gallery.ceylon (176:1-176:45)
    $$galleryView.category$76_=$$$cl1.String("category",8);
    $$galleryView.$prop$getCategory={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','category']};}};
    $$galleryView.$prop$getCategory.get=function(){return category};
    /*Begin dynamic block*/
    $$galleryView.template$73=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'179:13-179:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'179:34-179:39','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("#gallery-template",17).valueOf()).html());$$galleryView.tabsTemplate$74=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'180:17-180:26','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'180:38-180:43','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("#gallery-tabs-template",22).valueOf()).html());/*End dynamic block*/
    return $$galleryView;
}
GalleryView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView']};};
exports.GalleryView=GalleryView;
function $init$GalleryView(){
    if (GalleryView.$$===undefined){
        $$$cl1.initTypeProto(GalleryView,'ceylon.examples.photogallery::GalleryView',$$$cl1.Basic);
        (function($$galleryView){
            
            //AttributeDeclaration template at gallery.ceylon (172:1-172:26)
            $$$cl1.defineAttr($$galleryView,'template$73',function(){return this.template$73_;},function(template$77){return this.template$73_=template$77;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','template']};});
            
            //AttributeDeclaration tabsTemplate at gallery.ceylon (173:1-173:30)
            $$$cl1.defineAttr($$galleryView,'tabsTemplate$74',function(){return this.tabsTemplate$74_;},function(tabsTemplate$78){return this.tabsTemplate$74_=tabsTemplate$78;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','tabsTemplate']};});
            
            //AttributeDeclaration categoryTabs at gallery.ceylon (175:1-175:53)
            $$$cl1.defineAttr($$galleryView,'categoryTabs',function(){return this.categoryTabs$75_;},function(categoryTabs$79){return this.categoryTabs$75_=categoryTabs$79;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};});
            
            //AttributeDeclaration category at gallery.ceylon (176:1-176:45)
            $$$cl1.defineAttr($$galleryView,'category',function(){return this.category$76_;},function(category$80){return this.category$76_=category$80;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','category']};});
            
            //MethodDefinition display at gallery.ceylon (183:1-191:1)
            $$galleryView.display=function display(){
                var $$galleryView=this;
                
                //AttributeDeclaration context at gallery.ceylon (184:2-187:6)
                var context$81=(values$82=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("categoryTabs",12),$$galleryView.categoryTabs,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("category",8),$$galleryView.category,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj3.JSON(values$82));
                $prop$getContext$81={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSON},d:['ceylon.examples.photogallery','GalleryView','$m','display','$at','context']};}};
                $prop$getContext$81.get=function(){return context$81};
                var values$82;
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'189:6-189:11','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("body",4).valueOf()).html(/*NULL PARAM!*/$$galleryView.template$73(/*NULL PARAM!*/context$81.toJson()));
                /*End dynamic block*/
            };$$galleryView.display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','display']};};
            
            //MethodDefinition displayCategories at gallery.ceylon (193:1-203:1)
            $$galleryView.displayCategories=function displayCategories(){
                var $$galleryView=this;
                
                //AttributeDeclaration categories at gallery.ceylon (194:2-194:32)
                var categories$83=$$$cjj3.JSONArray();
                $prop$getCategories$83={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSONArray},d:['ceylon.examples.photogallery','GalleryView','$m','displayCategories','$at','categories']};}};
                $prop$getCategories$83.get=function(){return categories$83};
                //'for' statement at gallery.ceylon (195:2-197:2)
                var it$84 = $$galleryView.controller.categories.iterator();
                var category$85;while ((category$85=it$84.next())!==$$$cl1.getFinished()){
                    categories$83.add((values$86=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("name",4),category$85.model.name,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj3.JSON(values$86)));
                    var values$86;
                }
                
                //AttributeDeclaration context at gallery.ceylon (198:2-198:51)
                var context$87=(values$88=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("category",8),categories$83,{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}}}}),$$$cjj3.JSON(values$88));
                $prop$getContext$87={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSON},d:['ceylon.examples.photogallery','GalleryView','$m','displayCategories','$at','context']};}};
                $prop$getContext$87.get=function(){return context$87};
                var values$88;
                /*Begin dynamic block*/
                $$galleryView.categoryTabs=(tmpvar$89=$$galleryView.tabsTemplate$74(/*NULL PARAM!*/context$87.toJson()),$$$cl1.isOfType(tmpvar$89,{t:$$$cl1.String})?tmpvar$89:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'200:18-200:47','gallery.ceylon'));/*End dynamic block*/
                $$galleryView.display();
            };$$galleryView.displayCategories.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','displayCategories']};};
            
            //MethodDefinition displayInvalidCategory at gallery.ceylon (205:1-207:1)
            $$galleryView.displayInvalidCategory=function displayInvalidCategory(){
                var $$galleryView=this;
            };$$galleryView.displayInvalidCategory.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','displayInvalidCategory']};};
            
            //MethodDefinition isMobile at gallery.ceylon (209:1-211:1)
            $$galleryView.isMobile=function isMobile(){
                var $$galleryView=this;
                $$$cl1.print($$$cl1.String("is mobile",9));
            };$$galleryView.isMobile.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','isMobile']};};
            
            //MethodDefinition isDesktop at gallery.ceylon (213:1-215:1)
            $$galleryView.isDesktop=function isDesktop(){
                var $$galleryView=this;
                $$$cl1.print($$$cl1.String("is desktop",10));
            };$$galleryView.isDesktop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','isDesktop']};};
            $$$cl1.defineAttr($$galleryView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$at','controller']};});
        })(GalleryView.$$.prototype);
    }
    return GalleryView;
}
exports.$init$GalleryView=$init$GalleryView;
$init$GalleryView();

//ClassDefinition Category at gallery.ceylon (218:0-266:0)
function Category(parent, $$category){
    $init$Category();
    if ($$category===undefined)$$category=new Category.$$;
    $$category.parent_=parent;
    
    //AttributeDeclaration model at gallery.ceylon (219:1-219:32)
    $$category.model$90_=undefined;
    $$category.$prop$getModel.get=function(){return model};
    
    //AttributeDeclaration view at gallery.ceylon (220:1-220:30)
    $$category.view$91_=undefined;
    $$category.$prop$getView.get=function(){return view};
    
    //AttributeDeclaration pages at gallery.ceylon (221:1-221:34)
    $$category.pages$92_=$$$cl1.getEmpty();
    $$category.$prop$getPages={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Page}}},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Category','$at','pages']};}};
    $$category.$prop$getPages.get=function(){return pages};
    return $$category;
}
Category.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category']};};
exports.Category=Category;
function $init$Category(){
    if (Category.$$===undefined){
        $$$cl1.initTypeProto(Category,'ceylon.examples.photogallery::Category',$$$cl1.Basic);
        (function($$category){
            
            //AttributeDeclaration model at gallery.ceylon (219:1-219:32)
            $$$cl1.defineAttr($$category,'model',function(){if (this.model$90_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return this.model$90_;},function(model$93){if(this.model$90_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return this.model$90_=model$93;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Category','$at','model']};});
            
            //AttributeDeclaration view at gallery.ceylon (220:1-220:30)
            $$$cl1.defineAttr($$category,'view',function(){if (this.view$91_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return this.view$91_;},function(view$94){if(this.view$91_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return this.view$91_=view$94;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryView},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Category','$at','view']};});
            
            //AttributeDeclaration pages at gallery.ceylon (221:1-221:34)
            $$$cl1.defineAttr($$category,'pages',function(){return this.pages$92_;},function(pages$95){return this.pages$92_=pages$95;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Page}}},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Category','$at','pages']};});
            
            //MethodDefinition init at gallery.ceylon (223:1-231:1)
            $$category.init=function init(name$96,photos$97,dir$98){
                var $$category=this;
                $$$cl1.print($$$cl1.String("initalizing category",20));
                var model=CategoryModel($$category,name$96);
                $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return model;},function(model$99){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return model=model$99;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Category','$at','model']};});
                var view=CategoryView($$category);
                $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return view;},function(view$100){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return view=view$100;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryView},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Category','$at','view']};});
                $$category.setPages(photos$97,dir$98);
                return $$category;
            };$$category.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','init']};};
            
            //MethodDefinition updatePage at gallery.ceylon (233:1-236:1)
            $$category.updatePage=function updatePage(page$101){
                var $$category=this;
                ($$category.view.page=page$101);
                $$category.view.display();
            };$$category.updatePage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','updatePage']};};
            
            //MethodDefinition display at gallery.ceylon (238:1-249:1)
            $$category.display=function display(pageNum$102,photoNum$103){
                var $$category=this;
                $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$102.string).plus($$$cl1.String(" photo ",7)).plus(photoNum$103.string));
                $$category.view.display();
                var page$104;
                if((page$104=$$category.pages.get(pageNum$102))!==null){
                    $$$cl1.print($$$cl1.String("display page",12));
                    $$category.view.displayPage(pageNum$102);
                    page$104.display(photoNum$103);
                }else {
                    $$$cl1.print($$$cl1.String("display invalid page",20));
                    $$category.view.displayInvalidPage();
                }
            };$$category.display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','display']};};
            
            //MethodDefinition displayPhoto at gallery.ceylon (251:1-259:1)
            $$category.displayPhoto=function displayPhoto(photoM$105){
                var $$category=this;
                var photo$106;
                if((photo$106=photoM$105)!==null){
                    $$$cl1.print($$$cl1.String("display photo",13));
                    $$category.view.displayPhoto(photo$106);
                }else {
                    $$$cl1.print($$$cl1.String("display no photo",16));
                    $$category.view.displayNoPhoto();
                }
            };$$category.displayPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','displayPhoto']};};
            
            //MethodDefinition setPages at gallery.ceylon (261:1-265:1)
            $$category.setPages=function setPages(photosJSON$107,dir$108){
                var $$category=this;
                $$$cl1.print($$$cl1.String("set category pages",18));
                
                //AttributeDeclaration end at gallery.ceylon (263:2-263:37)
                var end$109=(1).plus(photosJSON$107.size.divided((6)));
                $prop$getEnd$109={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.examples.photogallery','Category','$m','setPages','$at','end']};}};
                $prop$getEnd$109.get=function(){return end$109};
                $$category.pages=$$$cl1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (264:11-264:103)
                    var it$110=(function(){var tmpvar$112=end$109;
                    if (tmpvar$112>0){
                    var tmpvar$113=(0);
                    var tmpvar$114=tmpvar$113;
                    for (var i=1; i<tmpvar$112; i++){tmpvar$114=tmpvar$114.successor;}
                    return $$$cl1.Range(tmpvar$113,tmpvar$114,{Element:{t:$$$cl1.Integer}})
                    }else return $$$cl1.getEmpty();}()).iterator();
                    var i$111=$$$cl1.getFinished();
                    var next$i$111=function(){return i$111=it$110.next();}
                    next$i$111();
                    return function(){
                        if(i$111!==$$$cl1.getFinished()){
                            var i$111$115=i$111;
                            var tmpvar$116=Page($$category,$$category.model.uri.plus(i$111$115.string).plus($$$cl1.String("/",1))).init(photosJSON$107.segment(i$111$115.times((6)),(6)),dir$108);
                            next$i$111();
                            return tmpvar$116;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Page}}).sequence;
            };$$category.setPages.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','setPages']};};
            $$$cl1.defineAttr($$category,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$at','parent']};});
        })(Category.$$.prototype);
    }
    return Category;
}
exports.$init$Category=$init$Category;
$init$Category();

//ClassDefinition CategoryModel at gallery.ceylon (268:0-270:0)
function CategoryModel(controller, name, $$categoryModel){
    $init$CategoryModel();
    if ($$categoryModel===undefined)$$categoryModel=new CategoryModel.$$;
    $$categoryModel.controller_=controller;
    $$categoryModel.name_=name;
    
    //AttributeDeclaration uri at gallery.ceylon (269:1-269:50)
    $$categoryModel.$prop$getUri={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','uri']};}};
    $$categoryModel.$prop$getUri.get=function(){return uri};
    return $$categoryModel;
}
CategoryModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel']};};
exports.CategoryModel=CategoryModel;
function $init$CategoryModel(){
    if (CategoryModel.$$===undefined){
        $$$cl1.initTypeProto(CategoryModel,'ceylon.examples.photogallery::CategoryModel',$$$cl1.Basic);
        (function($$categoryModel){
            
            //AttributeDeclaration uri at gallery.ceylon (269:1-269:50)
            $$$cl1.defineAttr($$categoryModel,'uri',function(){
                var $$categoryModel=this;
                return $$$cl1.String("#/",2).plus($$categoryModel.name.lowercased).plus($$$cl1.String("/",1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','uri']};});
            $$$cl1.defineAttr($$categoryModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','controller']};});
            $$$cl1.defineAttr($$categoryModel,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','name']};});
        })(CategoryModel.$$.prototype);
    }
    return CategoryModel;
}
exports.$init$CategoryModel=$init$CategoryModel;
$init$CategoryModel();

//ClassDefinition CategoryView at gallery.ceylon (272:0-352:0)
function CategoryView(controller, $$categoryView){
    $init$CategoryView();
    if ($$categoryView===undefined)$$categoryView=new CategoryView.$$;
    $$categoryView.controller_=controller;
    
    //AttributeDeclaration template at gallery.ceylon (273:1-273:26)
    $$categoryView.$prop$getTemplate$117={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','template']};}};
    $$categoryView.$prop$getTemplate$117.get=function(){return template$117};
    
    //AttributeDeclaration paginationTemplate at gallery.ceylon (274:1-274:36)
    $$categoryView.$prop$getPaginationTemplate$118={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','paginationTemplate']};}};
    $$categoryView.$prop$getPaginationTemplate$118.get=function(){return paginationTemplate$118};
    
    //AttributeDeclaration pagination at gallery.ceylon (276:1-276:49)
    $$categoryView.pagination$119_=$$$cl1.String("pagination",10);
    $$categoryView.$prop$getPagination={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','pagination']};}};
    $$categoryView.$prop$getPagination.get=function(){return pagination};
    
    //AttributeDeclaration page at gallery.ceylon (277:1-277:37)
    $$categoryView.page$120_=$$$cl1.String("page",4);
    $$categoryView.$prop$getPage={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','page']};}};
    $$categoryView.$prop$getPage.get=function(){return page};
    
    //AttributeDeclaration title at gallery.ceylon (278:1-278:34)
    $$categoryView.title$121_=$$$cl1.String("",0);
    $$categoryView.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','title']};}};
    $$categoryView.$prop$getTitle.get=function(){return title};
    
    //AttributeDeclaration src at gallery.ceylon (279:1-279:32)
    $$categoryView.src$122_=$$$cl1.String("",0);
    $$categoryView.$prop$getSrc={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','src']};}};
    $$categoryView.$prop$getSrc.get=function(){return src};
    
    //AttributeDeclaration alt at gallery.ceylon (280:1-280:32)
    $$categoryView.alt$123_=$$$cl1.String("",0);
    $$categoryView.$prop$getAlt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','alt']};}};
    $$categoryView.$prop$getAlt.get=function(){return alt};
    
    //AttributeDeclaration caption at gallery.ceylon (281:1-281:36)
    $$categoryView.caption$124_=$$$cl1.String("",0);
    $$categoryView.$prop$getCaption={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','caption']};}};
    $$categoryView.$prop$getCaption.get=function(){return caption};
    
    //AttributeDeclaration width at gallery.ceylon (282:1-282:34)
    $$categoryView.width$125_=$$$cl1.String("",0);
    $$categoryView.$prop$getWidth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','width']};}};
    $$categoryView.$prop$getWidth.get=function(){return width};
    
    //AttributeDeclaration height at gallery.ceylon (283:1-283:35)
    $$categoryView.height$126_=$$$cl1.String("",0);
    $$categoryView.$prop$getHeight={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','height']};}};
    $$categoryView.$prop$getHeight.get=function(){return height};
    /*Begin dynamic block*/
    $$categoryView.template$117=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'286:13-286:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'286:34-286:39','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("#category-template",18).valueOf()).html());$$categoryView.paginationTemplate$118=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'287:23-287:32','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'287:44-287:49','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("#category-pagination-template",29).valueOf()).html());/*End dynamic block*/
    return $$categoryView;
}
CategoryView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView']};};
exports.CategoryView=CategoryView;
function $init$CategoryView(){
    if (CategoryView.$$===undefined){
        $$$cl1.initTypeProto(CategoryView,'ceylon.examples.photogallery::CategoryView',$$$cl1.Basic);
        (function($$categoryView){
            
            //AttributeDeclaration template at gallery.ceylon (273:1-273:26)
            $$$cl1.defineAttr($$categoryView,'template$117',function(){return this.template$117_;},function(template$127){return this.template$117_=template$127;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','template']};});
            
            //AttributeDeclaration paginationTemplate at gallery.ceylon (274:1-274:36)
            $$$cl1.defineAttr($$categoryView,'paginationTemplate$118',function(){return this.paginationTemplate$118_;},function(paginationTemplate$128){return this.paginationTemplate$118_=paginationTemplate$128;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','paginationTemplate']};});
            
            //AttributeDeclaration pagination at gallery.ceylon (276:1-276:49)
            $$$cl1.defineAttr($$categoryView,'pagination',function(){return this.pagination$119_;},function(pagination$129){return this.pagination$119_=pagination$129;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','pagination']};});
            
            //AttributeDeclaration page at gallery.ceylon (277:1-277:37)
            $$$cl1.defineAttr($$categoryView,'page',function(){return this.page$120_;},function(page$130){return this.page$120_=page$130;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','page']};});
            
            //AttributeDeclaration title at gallery.ceylon (278:1-278:34)
            $$$cl1.defineAttr($$categoryView,'title',function(){return this.title$121_;},function(title$131){return this.title$121_=title$131;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','title']};});
            
            //AttributeDeclaration src at gallery.ceylon (279:1-279:32)
            $$$cl1.defineAttr($$categoryView,'src',function(){return this.src$122_;},function(src$132){return this.src$122_=src$132;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','src']};});
            
            //AttributeDeclaration alt at gallery.ceylon (280:1-280:32)
            $$$cl1.defineAttr($$categoryView,'alt',function(){return this.alt$123_;},function(alt$133){return this.alt$123_=alt$133;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','alt']};});
            
            //AttributeDeclaration caption at gallery.ceylon (281:1-281:36)
            $$$cl1.defineAttr($$categoryView,'caption',function(){return this.caption$124_;},function(caption$134){return this.caption$124_=caption$134;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','caption']};});
            
            //AttributeDeclaration width at gallery.ceylon (282:1-282:34)
            $$$cl1.defineAttr($$categoryView,'width',function(){return this.width$125_;},function(width$135){return this.width$125_=width$135;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','width']};});
            
            //AttributeDeclaration height at gallery.ceylon (283:1-283:35)
            $$$cl1.defineAttr($$categoryView,'height',function(){return this.height$126_;},function(height$136){return this.height$126_=height$136;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','height']};});
            
            //MethodDefinition display at gallery.ceylon (290:1-309:1)
            $$categoryView.display=function display(){
                var $$categoryView=this;
                $$$cl1.print($$$cl1.String("display category",16));
                
                //AttributeDeclaration context at gallery.ceylon (292:2-300:3)
                var context$137=(values$138=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("title",5),$$categoryView.title,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("width",5),$$categoryView.width,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("src",3),$$categoryView.src,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("alt",3),$$categoryView.alt,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("caption",7),$$categoryView.caption,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("page",4),$$categoryView.page,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("pagination",10),$$categoryView.pagination,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj3.JSON(values$138));
                $prop$getContext$137={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSON},d:['ceylon.examples.photogallery','CategoryView','$m','display','$at','context']};}};
                $prop$getContext$137.get=function(){return context$137};
                var values$138;
                $$$cl1.print($$$cl1.String("src: ",5).plus($$categoryView.src));
                /*Begin dynamic block*/
                $$categoryView.controller.parent.updateCategory((tmpvar$139=$$categoryView.template$117(/*NULL PARAM!*/context$137.toJson()),$$$cl1.isOfType(tmpvar$139,{t:$$$cl1.String})?tmpvar$139:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'303:39-303:64','gallery.ceylon')));
                /*End dynamic block*/
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'306:3-306:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".category",9).valueOf()).each(/*NULL PARAM!*/$$$cl1.$JsCallable(function (){
                    var $$categoryView=this;
                    return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'306:35-306:40','gallery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'306:42-306:45','gallery.ceylon'):this)).removeClass(/*NULL PARAM!*/$$$cl1.String("active",6).valueOf());
                },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'307:3-307:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".category-",10).plus($$categoryView.controller.model.name.lowercased).valueOf()).addClass(/*NULL PARAM!*/$$$cl1.String("active",6).valueOf());
                /*End dynamic block*/
            };$$categoryView.display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','display']};};
            
            //MethodDefinition displayPhoto at gallery.ceylon (311:1-326:1)
            $$categoryView.displayPhoto=function displayPhoto(photo$140){
                var $$categoryView=this;
                var photoWidth$141;
                if((photoWidth$141=photo$140.width)!==null){
                    $$categoryView.width=photoWidth$141.string;
                }
                var photoHeight$142;
                if((photoHeight$142=photo$140.height)!==null){
                    $$categoryView.height=photoHeight$142.string;
                }
                $$categoryView.src=photo$140.src;
                $$categoryView.alt=photo$140.alt;
                $$categoryView.caption=photo$140.caption;
                $$categoryView.title=photo$140.title;
                /*Begin dynamic block*/
                $$categoryView.display();
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'324:3-324:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".display-photo",14).valueOf()).stop(/*NULL PARAM!*/true/*NULL PARAM!*/,true).hide().fadeIn(/*NULL PARAM!*/(800));
                /*End dynamic block*/
            };$$categoryView.displayPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayPhoto']};};
            
            //MethodDefinition displayNoPhoto at gallery.ceylon (328:1-330:1)
            $$categoryView.displayNoPhoto=function displayNoPhoto(){
                var $$categoryView=this;
            };$$categoryView.displayNoPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayNoPhoto']};};
            
            //MethodDefinition displayInvalidPage at gallery.ceylon (332:1-334:1)
            $$categoryView.displayInvalidPage=function displayInvalidPage(){
                var $$categoryView=this;
            };$$categoryView.displayInvalidPage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayInvalidPage']};};
            
            //MethodDefinition displayPage at gallery.ceylon (336:1-351:1)
            $$categoryView.displayPage=function displayPage(pageNum$143){
                var $$categoryView=this;
                
                //AttributeDeclaration pages at gallery.ceylon (337:2-337:27)
                var pages$144=$$$cjj3.JSONArray();
                $prop$getPages$144={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSONArray},d:['ceylon.examples.photogallery','CategoryView','$m','displayPage','$at','pages']};}};
                $prop$getPages$144.get=function(){return pages$144};
                //'for' statement at gallery.ceylon (338:2-340:2)
                var it$145 = $$categoryView.controller.pages.iterator();
                var page$146;while ((page$146=it$145.next())!==$$$cl1.getFinished()){
                    pages$144.add((values$147=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("uri",3),page$146.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj3.JSON(values$147)));
                    var values$147;
                }
                
                //AttributeDeclaration context at gallery.ceylon (341:2-346:6)
                var context$148=(values$149=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("uri",3),$$categoryView.controller.model.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("page",4),pageNum$143,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("lastPage",8),$$categoryView.controller.pages.size.minus((1)),{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("pages",5),pages$144,{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}}}]}}),$$$cjj3.JSON(values$149));
                $prop$getContext$148={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSON},d:['ceylon.examples.photogallery','CategoryView','$m','displayPage','$at','context']};}};
                $prop$getContext$148.get=function(){return context$148};
                var values$149;
                /*Begin dynamic block*/
                $$categoryView.pagination=(tmpvar$150=$$categoryView.paginationTemplate$118(/*NULL PARAM!*/context$148.toJson()),$$$cl1.isOfType(tmpvar$150,{t:$$$cl1.String})?tmpvar$150:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'348:19-348:54','gallery.ceylon'));/*End dynamic block*/
                $$categoryView.display();
            };$$categoryView.displayPage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayPage']};};
            $$$cl1.defineAttr($$categoryView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$at','controller']};});
        })(CategoryView.$$.prototype);
    }
    return CategoryView;
}
exports.$init$CategoryView=$init$CategoryView;
$init$CategoryView();

//ClassDefinition CategoryJSON at gallery.ceylon (354:0-354:74)
function CategoryJSON(name, photos, $$categoryJSON){
    $init$CategoryJSON();
    if ($$categoryJSON===undefined)$$categoryJSON=new CategoryJSON.$$;
    $$categoryJSON.name_=name;
    $$categoryJSON.photos_=photos;
    return $$categoryJSON;
}
CategoryJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON']};};
exports.CategoryJSON=CategoryJSON;
function $init$CategoryJSON(){
    if (CategoryJSON.$$===undefined){
        $$$cl1.initTypeProto(CategoryJSON,'ceylon.examples.photogallery::CategoryJSON',$$$cl1.Basic);
        (function($$categoryJSON){
            $$$cl1.defineAttr($$categoryJSON,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON','$at','name']};});
            $$$cl1.defineAttr($$categoryJSON,'photos',function(){return this.photos_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$cont:CategoryJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON','$at','photos']};});
        })(CategoryJSON.$$.prototype);
    }
    return CategoryJSON;
}
exports.$init$CategoryJSON=$init$CategoryJSON;
$init$CategoryJSON();

//ClassDefinition Page at gallery.ceylon (356:0-377:0)
function Page(parent, uri, $$page){
    $init$Page();
    if ($$page===undefined)$$page=new Page.$$;
    $$page.parent_=parent;
    $$page.uri_=uri;
    
    //AttributeDeclaration model at gallery.ceylon (357:1-357:28)
    $$page.model$151_=undefined;
    $$page.$prop$getModel.get=function(){return model};
    
    //AttributeDeclaration view at gallery.ceylon (358:1-358:26)
    $$page.view$152_=undefined;
    $$page.$prop$getView.get=function(){return view};
    return $$page;
}
Page.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page']};};
exports.Page=Page;
function $init$Page(){
    if (Page.$$===undefined){
        $$$cl1.initTypeProto(Page,'ceylon.examples.photogallery::Page',$$$cl1.Basic);
        (function($$page){
            
            //AttributeDeclaration model at gallery.ceylon (357:1-357:28)
            $$$cl1.defineAttr($$page,'model',function(){if (this.model$151_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return this.model$151_;},function(model$153){if(this.model$151_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return this.model$151_=model$153;},function(){return{mod:$$METAMODEL$$,$t:{t:PageModel},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Page','$at','model']};});
            
            //AttributeDeclaration view at gallery.ceylon (358:1-358:26)
            $$$cl1.defineAttr($$page,'view',function(){if (this.view$152_===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return this.view$152_;},function(view$154){if(this.view$152_!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return this.view$152_=view$154;},function(){return{mod:$$METAMODEL$$,$t:{t:PageView},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Page','$at','view']};});
            
            //MethodDefinition init at gallery.ceylon (360:1-368:1)
            $$page.init=function init(photos$155,dir$156){
                var $$page=this;
                $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
                var model=PageModel($$page);
                $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?model?'));return model;},function(model$157){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?model?'));return model=model$157;},function(){return{mod:$$METAMODEL$$,$t:{t:PageModel},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Page','$at','model']};});
                var view=PageView($$page);
                $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute ?view?'));return view;},function(view$158){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute ?view?'));return view=view$158;},function(){return{mod:$$METAMODEL$$,$t:{t:PageView},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Page','$at','view']};});
                $$page.model.parsePhotos(photos$155,dir$156);
                return $$page;
            };$$page.init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$m','init']};};
            
            //MethodDefinition display at gallery.ceylon (370:1-375:1)
            $$page.display=function display(photoNum$159){
                var $$page=this;
                $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
                $$page.view.display();
                $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$159.string));
                $$page.parent.displayPhoto($$page.model.photos.get(photoNum$159));
            };$$page.display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$m','display']};};
            $$$cl1.defineAttr($$page,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$at','parent']};});
            $$$cl1.defineAttr($$page,'uri',function(){return this.uri_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$at','uri']};});
        })(Page.$$.prototype);
    }
    return Page;
}
exports.$init$Page=$init$Page;
$init$Page();

//ClassDefinition PageModel at gallery.ceylon (379:0-386:0)
function PageModel(controller, $$pageModel){
    $init$PageModel();
    if ($$pageModel===undefined)$$pageModel=new PageModel.$$;
    $$pageModel.controller_=controller;
    
    //AttributeDeclaration photos at gallery.ceylon (380:1-380:36)
    $$pageModel.photos$160_=$$$cl1.getEmpty();
    $$pageModel.$prop$getPhotos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Photo}}},$cont:PageModel,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageModel','$at','photos']};}};
    $$pageModel.$prop$getPhotos.get=function(){return photos};
    return $$pageModel;
}
PageModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel']};};
exports.PageModel=PageModel;
function $init$PageModel(){
    if (PageModel.$$===undefined){
        $$$cl1.initTypeProto(PageModel,'ceylon.examples.photogallery::PageModel',$$$cl1.Basic);
        (function($$pageModel){
            
            //AttributeDeclaration photos at gallery.ceylon (380:1-380:36)
            $$$cl1.defineAttr($$pageModel,'photos',function(){return this.photos$160_;},function(photos$161){return this.photos$160_=photos$161;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Photo}}},$cont:PageModel,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageModel','$at','photos']};});
            
            //MethodDefinition parsePhotos at gallery.ceylon (382:1-385:1)
            $$pageModel.parsePhotos=function parsePhotos(photosJSON$162,dir$163){
                var $$pageModel=this;
                $$$cl1.print($$$cl1.String("parsing photos",14));
                $$pageModel.photos=$$$cl1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (384:14-384:159)
                    var it$164=photosJSON$162.iterator();
                    var photo$165=$$$cl1.getFinished();
                    var next$photo$165=function(){return photo$165=it$164.next();}
                    next$photo$165();
                    return function(){
                        if(photo$165!==$$$cl1.getFinished()){
                            var photo$165$166=photo$165;
                            var tmpvar$167=Photo(photo$165$166.title,photo$165$166.caption,dir$163.plus($$$cl1.String("/",1)).plus(photo$165$166.src),dir$163.plus($$$cl1.String("/",1)).plus(photo$165$166.thumb),photo$165$166.height,photo$165$166.width,photo$165$166.alt);
                            next$photo$165();
                            return tmpvar$167;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
            };$$pageModel.parsePhotos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:PageModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel','$m','parsePhotos']};};
            $$$cl1.defineAttr($$pageModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Page},$cont:PageModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel','$at','controller']};});
        })(PageModel.$$.prototype);
    }
    return PageModel;
}
exports.$init$PageModel=$init$PageModel;
$init$PageModel();

//ClassDefinition PageView at gallery.ceylon (388:0-427:0)
function PageView(controller, $$pageView){
    $init$PageView();
    if ($$pageView===undefined)$$pageView=new PageView.$$;
    $$pageView.controller_=controller;
    
    //AttributeDeclaration template at gallery.ceylon (389:1-389:26)
    $$pageView.$prop$getTemplate$168={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:PageView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageView','$at','template']};}};
    $$pageView.$prop$getTemplate$168.get=function(){return template$168};
    /*Begin dynamic block*/
    $$pageView.template$168=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'392:13-392:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'392:34-392:39','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String("#page-template",14).valueOf()).html());/*End dynamic block*/
    return $$pageView;
}
PageView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView']};};
exports.PageView=PageView;
function $init$PageView(){
    if (PageView.$$===undefined){
        $$$cl1.initTypeProto(PageView,'ceylon.examples.photogallery::PageView',$$$cl1.Basic);
        (function($$pageView){
            
            //AttributeDeclaration template at gallery.ceylon (389:1-389:26)
            $$$cl1.defineAttr($$pageView,'template$168',function(){return this.template$168_;},function(template$169){return this.template$168_=template$169;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:PageView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageView','$at','template']};});
            
            //MethodDefinition display at gallery.ceylon (395:1-418:1)
            $$pageView.display=function display(){
                var $$pageView=this;
                
                //AttributeDeclaration photos at gallery.ceylon (396:2-396:28)
                var photos$170=$$$cjj3.JSONArray();
                $prop$getPhotos$170={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSONArray},d:['ceylon.examples.photogallery','PageView','$m','display','$at','photos']};}};
                $prop$getPhotos$170.get=function(){return photos$170};
                //'for' statement at gallery.ceylon (397:2-404:2)
                var it$171 = $$pageView.controller.model.photos.iterator();
                var photo$172;while ((photo$172=it$171.next())!==$$$cl1.getFinished()){
                    photos$170.add((values$173=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("title",5),photo$172.title,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("uri",3),$$pageView.controller.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("src",3),photo$172.thumb,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("alt",3),photo$172.alt,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj3.JSON(values$173)));
                    var values$173;
                }
                
                //AttributeDeclaration context at gallery.ceylon (405:2-407:6)
                var context$174=(values$175=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("photos",6),photos$170,{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjj3.JSONArray}}}}),$$$cjj3.JSON(values$175));
                $prop$getContext$174={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj3.JSON},d:['ceylon.examples.photogallery','PageView','$m','display','$at','context']};}};
                $prop$getContext$174.get=function(){return context$174};
                var values$175;
                /*Begin dynamic block*/
                $$pageView.controller.parent.updatePage((tmpvar$176=$$pageView.template$168(/*NULL PARAM!*/context$174.toJson()),$$$cl1.isOfType(tmpvar$176,{t:$$$cl1.String})?tmpvar$176:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'409:32-409:57','gallery.ceylon')));
                /*End dynamic block*/
                //'for' statement at gallery.ceylon (411:2-417:2)
                var it$177 = (function(){var tmpvar$179=photos$170.size;
                if (tmpvar$179>0){
                var tmpvar$180=(0);
                var tmpvar$181=tmpvar$180;
                for (var i=1; i<tmpvar$179; i++){tmpvar$181=tmpvar$181.successor;}
                return $$$cl1.Range(tmpvar$180,tmpvar$181,{Element:{t:$$$cl1.Integer}})
                }else return $$$cl1.getEmpty();}()).iterator();
                var i$178;while ((i$178=it$177.next())!==$$$cl1.getFinished()){
                    /*Begin dynamic block*/
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'413:4-413:9','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".photo",6).plus(i$178.string).valueOf()).hide();
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'414:4-414:9','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".photo",6).plus(i$178.string).valueOf()).load(/*NULL PARAM!*/$$$cl1.$JsCallable(function (){
                        var $$pageView=this;
                        return $$pageView.photoLoaded$182(i$178);
                    },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'415:4-415:9','gallery.ceylon'):jQuery)(/*NULL PARAM!*/$$$cl1.String(".photo",6).plus(i$178.string).valueOf()).parent().spin(/*NULL PARAM!*/$$$cl1.String("small",5).valueOf());
                    /*End dynamic block*/
                }
            };$$pageView.display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:PageView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView','$m','display']};};
            
            //MethodDefinition photoLoaded at gallery.ceylon (420:1-425:1)
            $$pageView.photoLoaded$182=function photoLoaded$182(photo$183){
                var $$pageView=this;
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'422:3-422:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'422:10-422:13','gallery.ceylon'):this)).parent().spin(/*NULL PARAM!*/false);
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'423:3-423:8','gallery.ceylon'):jQuery)(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'423:10-423:13','gallery.ceylon'):this)).show();
                /*End dynamic block*/
            };$$pageView.photoLoaded$182.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:PageView,d:['ceylon.examples.photogallery','PageView','$m','photoLoaded']};};
            $$$cl1.defineAttr($$pageView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Page},$cont:PageView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView','$at','controller']};});
        })(PageView.$$.prototype);
    }
    return PageView;
}
exports.$init$PageView=$init$PageView;
$init$PageView();

//ClassDefinition Photo at gallery.ceylon (429:0-429:170)
function Photo(title, caption, src, thumb, height, width, alt, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.title_=title;
    $$photo.caption_=caption;
    $$photo.src_=src;
    $$photo.thumb_=thumb;
    $$photo.height_=height;
    $$photo.width_=width;
    $$photo.alt_=alt;
    return $$photo;
}
Photo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo']};};
exports.Photo=Photo;
function $init$Photo(){
    if (Photo.$$===undefined){
        $$$cl1.initTypeProto(Photo,'ceylon.examples.photogallery::Photo',$$$cl1.Basic);
        (function($$photo){
            $$$cl1.defineAttr($$photo,'title',function(){return this.title_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','title']};});
            $$$cl1.defineAttr($$photo,'caption',function(){return this.caption_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','caption']};});
            $$$cl1.defineAttr($$photo,'src',function(){return this.src_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','src']};});
            $$$cl1.defineAttr($$photo,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','thumb']};});
            $$$cl1.defineAttr($$photo,'height',function(){return this.height_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','height']};});
            $$$cl1.defineAttr($$photo,'width',function(){return this.width_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','width']};});
            $$$cl1.defineAttr($$photo,'alt',function(){return this.alt_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','alt']};});
        })(Photo.$$.prototype);
    }
    return Photo;
}
exports.$init$Photo=$init$Photo;
$init$Photo();

//ClassDefinition PhotoJSON at gallery.ceylon (431:0-431:173)
function PhotoJSON(title, caption, src, thumb, height, width, alt, $$photoJSON){
    $init$PhotoJSON();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON.$$;
    $$photoJSON.title_=title;
    $$photoJSON.caption_=caption;
    $$photoJSON.src_=src;
    $$photoJSON.thumb_=thumb;
    $$photoJSON.height_=height;
    $$photoJSON.width_=width;
    $$photoJSON.alt_=alt;
    return $$photoJSON;
}
PhotoJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON']};};
exports.PhotoJSON=PhotoJSON;
function $init$PhotoJSON(){
    if (PhotoJSON.$$===undefined){
        $$$cl1.initTypeProto(PhotoJSON,'ceylon.examples.photogallery::PhotoJSON',$$$cl1.Basic);
        (function($$photoJSON){
            $$$cl1.defineAttr($$photoJSON,'title',function(){return this.title_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','title']};});
            $$$cl1.defineAttr($$photoJSON,'caption',function(){return this.caption_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','caption']};});
            $$$cl1.defineAttr($$photoJSON,'src',function(){return this.src_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','src']};});
            $$$cl1.defineAttr($$photoJSON,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','thumb']};});
            $$$cl1.defineAttr($$photoJSON,'height',function(){return this.height_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','height']};});
            $$$cl1.defineAttr($$photoJSON,'width',function(){return this.width_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','width']};});
            $$$cl1.defineAttr($$photoJSON,'alt',function(){return this.alt_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','alt']};});
        })(PhotoJSON.$$.prototype);
    }
    return PhotoJSON;
}
exports.$init$PhotoJSON=$init$PhotoJSON;
$init$PhotoJSON();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
