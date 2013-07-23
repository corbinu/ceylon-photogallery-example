(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$nm":"CategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"pageNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"title"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"height"},"paginationTemplate":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"paginationTemplate"},"page":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"page"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"alt"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"src"},"pagination":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"pagination"}},"$nm":"CategoryView"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"photos"}},"$nm":"PageModel"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"Photo"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"}},"$nm":"PageView"},"$pkg-shared":"1","GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"template":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"category":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"category"},"categoryTabs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"categoryTabs"},"tabsTemplate":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tabsTemplate"}},"$nm":"GalleryView"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$nm":"GalleryModel"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$pt":"v","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"updatePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updatePage"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"pages"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Category"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoJSON"},"Carrier":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$nm":"Carrier"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$an":{"shared":[]},"$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Page"},"JSObject":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"$mt":"cls","$m":{"arrayToArray":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$nm":"JSObject"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"updateCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updateCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"handlebarHelpers":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"handlebarHelpers"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6","ceylon.json\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var $$$cj2=require('ceylon/json/0.6/ceylon.json-0.6');
function Carrier($$carrier){
    $init$Carrier();
    if ($$carrier===undefined)$$carrier=new Carrier.$$;
    return $$carrier;
}
Carrier.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Carrier']};
function $init$Carrier(){
    if (Carrier.$$===undefined){
        $$$cl1.initTypeProto(Carrier,'ceylon.examples.photogallery::Carrier',$$$cl1.Basic);
    }
    return Carrier;
}
exports.$init$Carrier=$init$Carrier;
$init$Carrier();
function JSObject(values$3, $$jSObject){
    $init$JSObject();
    if ($$jSObject===undefined)$$jSObject=new JSObject.$$;
    if(values$3===undefined){values$3=$$$cl1.getEmpty();}
    $$$cj2.Object(values$3,$$jSObject);
    function toJson(){
        return objectToJson$4($$jSObject);
    }
    $$jSObject.toJson=toJson;
    toJson.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Carrier},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['toJson']};//toJson.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:Carrier}};
    function objectToJson$4(ceylonJSON$5){
        var carrier$6=Carrier();
        /*Begin dynamic block*/
        var json$7=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc('Undefined or null reference: Object'):Object)();
        var options$8=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc('Undefined or null reference: Object'):Object)();
        options$8.writable=true;
        options$8.enumerable=true;
        options$8.configurable=true;
        var it$9 = ceylonJSON$5.iterator();
        var item$10;while ((item$10=it$9.next())!==$$$cl1.getFinished()){
            var name$11=item$10.key;
            var entry$12=item$10.item;
            
            var case$13=entry$12;
            if ($$$cl1.isOfType(entry$12,{t:$$$cl1.String})) {
                options$8.value=case$13.valueOf();
            }else if ($$$cl1.isOfType(entry$12,{t:$$$cl1.Boolean})) {
                if(case$13){
                    options$8.value=true;
                }else {
                    options$8.value=false;
                }
            }else if ($$$cl1.isOfType(entry$12,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                options$8.value=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc('Undefined or null reference: Number'):Number)(case$13);
            }else if ($$$cl1.isOfType(entry$12,{t:$$$cj2.Object})) {
                var dummy$14={dCarrier:objectToJson$4(case$13)};
                options$8.value=dummy$14.dCarrier.json;
            }else if ($$$cl1.isOfType(entry$12,{t:$$$cj2.Array})) {
                var dummy$15={dCarrier:arrayToArray$16(case$13)};
                options$8.value=dummy$15.dCarrier.array;
            }else if ($$$cl1.isOfType(entry$12,{t:$$$cj2.NullInstance})) {
                options$8.value=null;
            }
            (typeof Object==='undefined'||Object===null?$$$cl1.throwexc('Undefined or null reference: Object'):Object).defineProperty(json$7,name$11.valueOf(),options$8);
            var dummy$17={};
            var setDummy$17=function(dummy$18){return dummy$17=dummy$18;};
            var dCarrier$19=dummy$17;
            var setDCarrier$19=function(dCarrier$20){return dCarrier$19=dCarrier$20;};
            dCarrier$19=carrier$6;
            dCarrier$19.json=json$7;
        }/*End dynamic block*/
        return carrier$6;
    };objectToJson$4.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Carrier},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj2.Object}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['objectToJson']};//objectToJson$4.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cj2.Object},Element:{t:$$$cj2.Object}}},Return:{t:Carrier}};
    function arrayToArray$16(ceylonArray$21){
        var carrier$22=Carrier();
        /*Begin dynamic block*/
        var array$23=(typeof Array==='undefined'||Array===null?$$$cl1.throwexc('Undefined or null reference: Array'):Array)();
        var it$24 = ceylonArray$21.iterator();
        var entry$25;while ((entry$25=it$24.next())!==$$$cl1.getFinished()){
            
            var case$26=entry$25;
            if ($$$cl1.isOfType(entry$25,{t:$$$cl1.String})) {
                array$23.push(case$26.valueOf());
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cl1.Boolean})) {
                if(case$26){
                    array$23.push(true);
                }else {
                    array$23.push(false);
                }
            }else if ($$$cl1.isOfType(entry$25,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                array$23.push(objectToJson$4((tmpvar$27=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc('Undefined or null reference: Number'):Number)(case$26),$$$cl1.isOfType(tmpvar$27,{t:$$$cj2.Object})?tmpvar$27:$$$cl1.throwexc('dynamic objects cannot be used here'))));
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cj2.Object})) {
                var dummy$28={dCarrier:objectToJson$4(case$26)};
                array$23.push(dummy$28.dCarrier.json);
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cj2.Array})) {
                var dummy$29={dCarrier:arrayToArray$16(case$26)};
                array$23.push(dummy$29.dCarrier.array);
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cj2.NullInstance})) {
                array$23.push(null);
            }
        }var dummy$30={};
        var setDummy$30=function(dummy$31){return dummy$30=dummy$31;};
        var dCarrier$32=dummy$30;
        var setDCarrier$32=function(dCarrier$33){return dCarrier$32=dCarrier$33;};
        dCarrier$32=carrier$22;dCarrier$32.array=array$23;
        /*End dynamic block*/
        return carrier$22;
    };arrayToArray$16.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Carrier},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj2.Array}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['arrayToArray']};//arrayToArray$16.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cj2.Array},Element:{t:$$$cj2.Array}}},Return:{t:Carrier}};
    return $$jSObject;
}
JSObject.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cj2.Object},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']};
function $init$JSObject(){
    if (JSObject.$$===undefined){
        $$$cl1.initTypeProto(JSObject,'ceylon.examples.photogallery::JSObject',$$$cj2.Object);
    }
    return JSObject;
}
exports.$init$JSObject=$init$JSObject;
$init$JSObject();
function Gallery($$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    var categories=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$34){return categories=categories$34;});
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
    var model;
    $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$35){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$35;});
    var view;
    $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$36){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$36;});
    function init(dir$37){
        $$$cl1.print($$$cl1.String("initalizing gallery",19));
        var model=GalleryModel($$gallery,dir$37);
        $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$38){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$38;});
        var view=GalleryView($$gallery);
        $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$39){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$39;});
        handlebarHelpers$40();
        $$gallery.model.loadJSON();
        return $$gallery;
    }
    $$gallery.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Gallery}};
    function loaded(){
        $$$cl1.print($$$cl1.String("gallery loaded",14));
        /*Begin dynamic block*/
        var router$41=(tmpvar$42=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$42.$$===undefined?new tmpvar$42():tmpvar$42()).init($$$cl1.String("/",1).valueOf());
        router$41.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$43,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$41.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$44,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$41.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$45,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$41.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$46,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.view.displayCategories();
    }
    $$gallery.loaded=loaded;
    loaded.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['loaded']};//loaded.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function updateCategory(category$47){
        ($$gallery.view.category=category$47);
        $$gallery.view.display();
    }
    $$gallery.updateCategory=updateCategory;
    updateCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['updateCategory']};//updateCategory.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function handlebarHelpers$40(){
        /*Begin dynamic block*/
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("lower",5).valueOf(),$$$cl1.$JsCallable(function (string$48){
            return string$48.lowercased;
        },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("upper",5).valueOf(),$$$cl1.$JsCallable(function (string$49){
            return string$49.uppercased;
        },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("add",3).valueOf(),$$$cl1.$JsCallable(function (int1$50,int2$51){
            return int1$50.plus(int2$51).string;
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("sub",3).valueOf(),$$$cl1.$JsCallable(function (int1$52,int2$53){
            return int1$52.minus(int2$53).string;
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("eql",3).valueOf(),$$$cl1.$JsCallable(function (obj1$54,obj2$55,funcs$56){
            if(obj1$54.equals(obj2$55)){
                funcs$56.fn((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }else {
                funcs$56.inverse((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }
        },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cj2.Object}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cj2.Object}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cj2.Object},Element:{ t:'u', l:[{t:$$$cj2.Object},{t:$$$cl1.Anything}]}}},First:{t:$$$cj2.Object},Element:{ t:'u', l:[{t:$$$cj2.Object},{t:$$$cl1.Anything}]}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("nteql",5).valueOf(),$$$cl1.$JsCallable(function (obj1$57,obj2$58,funcs$59){
            if((!obj1$57.equals(obj2$58))){
                funcs$59.fn((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }else {
                funcs$59.inverse((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }
        },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cj2.Object}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cj2.Object}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cj2.Object},Element:{ t:'u', l:[{t:$$$cj2.Object},{t:$$$cl1.Anything}]}}},First:{t:$$$cj2.Object},Element:{ t:'u', l:[{t:$$$cj2.Object},{t:$$$cl1.Anything}]}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("lt",2).valueOf(),$$$cl1.$JsCallable(function (int1$60,int2$61,funcs$62){
            if(int1$60.compare(int2$61).equals($$$cl1.getSmaller())){
                funcs$62.fn((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }else {
                funcs$62.inverse((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).registerHelper($$$cl1.String("gt",2).valueOf(),$$$cl1.$JsCallable(function (int1$63,int2$64,funcs$65){
            if(int1$63.compare(int2$64).equals($$$cl1.getLarger())){
                funcs$65.fn((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }else {
                funcs$65.inverse((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this));
            }
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Anything}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    };handlebarHelpers$40.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['handlebarHelpers']};//handlebarHelpers$40.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function getCategory$66(name$67){
        $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$67));
        var it$68 = $$gallery.categories.iterator();
        var category$69;while ((category$69=it$68.next())!==$$$cl1.getFinished()){
            if(name$67.lowercased.equals(category$69.model.name.lowercased)){
                return category$69;
            }
        }
        return null;
    };getCategory$66.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$66.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]}};
    function routeIndex$43(){
        $$$cl1.print($$$cl1.String("routing index",13));
        var firstCategory$70;
        if((firstCategory$70=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("display first category",22));
            firstCategory$70.display((0),(0));
        }
    };routeIndex$43.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$43.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$44(categoryName$71){
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$71));
        var category$72;
        if((category$72=getCategory$66(categoryName$71))!==null){
            $$$cl1.print($$$cl1.String("display category",16));
            category$72.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routeCategory$44.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$44.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$45(categoryName$73,page$74){
        var pageNum$75=$$$cl1.Integer(page$74);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$73).plus($$$cl1.String(" page num: ",11)).plus(pageNum$75.string));
        var category$76;
        if((category$76=getCategory$66(categoryName$73))!==null){
            $$$cl1.print($$$cl1.String("display category and page",25));
            category$76.display(pageNum$75,(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePage$45.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$45.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$46(categoryName$77,page$78,photo$79){
        var pageNum$80=$$$cl1.Integer(page$78);
        var photoNum$81=$$$cl1.Integer(photo$79);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$77).plus($$$cl1.String(" page num: ",11)).plus(pageNum$80.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$79.string));
        var category$82;
        if((category$82=getCategory$66(categoryName$77))!==null){
            $$$cl1.print($$$cl1.String("display category, page and photo",32));
            category$82.display(pageNum$80,photoNum$81);
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePhoto$46.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$46.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    return $$gallery;
}
Gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']};
exports.Gallery=Gallery;
function $init$Gallery(){
    if (Gallery.$$===undefined){
        $$$cl1.initTypeProto(Gallery,'ceylon.examples.photogallery::Gallery',$$$cl1.Basic);
    }
    return Gallery;
}
exports.$init$Gallery=$init$Gallery;
$init$Gallery();
function GalleryModel(controller, dir, $$galleryModel){
    $init$GalleryModel();
    if ($$galleryModel===undefined)$$galleryModel=new GalleryModel.$$;
    $$galleryModel.controller=controller;
    $$galleryModel.dir=dir;
    function loadJSON(){
        $$$cl1.print($$$cl1.String("loading local json",18));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON($$galleryModel.dir.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable($$galleryModel.parseCategories,[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}},Return:{t:$$$cl1.Anything}})).fail($$$cl1.$JsCallable(function (){
            return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    }
    $$galleryModel.loadJSON=loadJSON;
    loadJSON.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryModel']['$m']['loadJSON']};//loadJSON.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function parseCategories(categoriesJSON$83){
        $$$cl1.print($$$cl1.String("process category json",21));
        $$$cl1.print($$$cl1.String("dir is:",7).plus($$galleryModel.dir));
        ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
            var it$84=categoriesJSON$83.iterator();
            var category$85=$$$cl1.getFinished();
            var next$category$85=function(){return category$85=it$84.next();}
            next$category$85();
            return function(){
                if(category$85!==$$$cl1.getFinished()){
                    var category$85$86=category$85;
                    var tmpvar$87=Category($$galleryModel.controller).init(category$85$86.name,category$85$86.photos,$$galleryModel.dir);
                    next$category$85();
                    return tmpvar$87;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Category}}).sequence);
        $$galleryModel.controller.loaded();
    }
    $$galleryModel.parseCategories=parseCategories;
    parseCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryModel']['$m']['parseCategories']};//parseCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}},Return:{t:$$$cl1.Anything}};
    return $$galleryModel;
}
GalleryModel.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryModel']};
exports.GalleryModel=GalleryModel;
function $init$GalleryModel(){
    if (GalleryModel.$$===undefined){
        $$$cl1.initTypeProto(GalleryModel,'ceylon.examples.photogallery::GalleryModel',$$$cl1.Basic);
    }
    return GalleryModel;
}
exports.$init$GalleryModel=$init$GalleryModel;
$init$GalleryModel();
function GalleryView(controller, $$galleryView){
    $init$GalleryView();
    if ($$galleryView===undefined)$$galleryView=new GalleryView.$$;
    $$galleryView.controller=controller;
    var template$88;
    $$$cl1.defineAttr($$galleryView,'template$88',function(){return template$88;},function(template$89){return template$88=template$89;});
    var tabsTemplate$90;
    $$$cl1.defineAttr($$galleryView,'tabsTemplate$90',function(){return tabsTemplate$90;},function(tabsTemplate$91){return tabsTemplate$90=tabsTemplate$91;});
    var categoryTabs=$$$cl1.String("categoryTabs",12);
    $$$cl1.defineAttr($$galleryView,'categoryTabs',function(){return categoryTabs;},function(categoryTabs$92){return categoryTabs=categoryTabs$92;});
    var category=$$$cl1.String("category",8);
    $$$cl1.defineAttr($$galleryView,'category',function(){return category;},function(category$93){return category=category$93;});
    /*Begin dynamic block*/
    template$88=(tmpvar$94=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-template",17).valueOf()).html()),$$$cl1.isOfType(tmpvar$94,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$94:$$$cl1.throwexc('dynamic objects cannot be used here'));tabsTemplate$90=(tmpvar$95=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-tabs-template",22).valueOf()).html()),$$$cl1.isOfType(tmpvar$95,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$95:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
    function display(){
        var context$96=(values$97=[$$$cl1.Entry($$$cl1.String("categoryTabs",12),$$galleryView.categoryTabs,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("category",8),$$galleryView.category,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$97));
        var values$97;
        /*Begin dynamic block*/
        var dummy$98={dCarrier:context$96.toJson()};
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("body",4).valueOf()).html(template$88(dummy$98.dCarrier.json).valueOf());
        /*End dynamic block*/
    }
    $$galleryView.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayCategories(){
        var categories$99=$$$cj2.Array();
        var it$100 = $$galleryView.controller.categories.iterator();
        var category$101;while ((category$101=it$100.next())!==$$$cl1.getFinished()){
            categories$99.add((values$102=[$$$cl1.Entry($$$cl1.String("name",4),category$101.model.name,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$102)));
            var values$102;
        }
        var context$103=(values$104=[$$$cl1.Entry($$$cl1.String("category",8),categories$99,{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}}}}),JSObject(values$104));
        var values$104;
        /*Begin dynamic block*/
        var dummy$105={dCarrier:context$103.toJson()};
        $$galleryView.categoryTabs=tabsTemplate$90(dummy$105.dCarrier.json);/*End dynamic block*/
        $$galleryView.display();
    }
    $$galleryView.displayCategories=displayCategories;
    displayCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['displayCategories']};//displayCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayInvalidCategory(){
    }
    $$galleryView.displayInvalidCategory=displayInvalidCategory;
    displayInvalidCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['displayInvalidCategory']};//displayInvalidCategory.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    return $$galleryView;
}
GalleryView.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']};
exports.GalleryView=GalleryView;
function $init$GalleryView(){
    if (GalleryView.$$===undefined){
        $$$cl1.initTypeProto(GalleryView,'ceylon.examples.photogallery::GalleryView',$$$cl1.Basic);
    }
    return GalleryView;
}
exports.$init$GalleryView=$init$GalleryView;
$init$GalleryView();
function Category(parent, $$category){
    $init$Category();
    if ($$category===undefined)$$category=new Category.$$;
    $$category.parent=parent;
    var model;
    $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$106){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$106;});
    var view;
    $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$107){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$107;});
    var pages=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$category,'pages',function(){return pages;},function(pages$108){return pages=pages$108;});
    function init(name$109,photos$110,dir$111){
        $$$cl1.print($$$cl1.String("initalizing category",20));
        var model=CategoryModel($$category,name$109);
        $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$112){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$112;});
        var view=CategoryView($$category);
        $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$113){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$113;});
        $$category.setPages(photos$110,dir$111);
        return $$category;
    }
    $$category.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Category}};
    function updatePage(page$114){
        ($$category.view.page=page$114);
        $$category.view.display();
    }
    $$category.updatePage=updatePage;
    updatePage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['updatePage']};//updatePage.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function display(pageNum$115,photoNum$116){
        $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$115.string).plus($$$cl1.String(" photo ",7)).plus(photoNum$116.string));
        $$category.view.display();
        var page$117;
        if((page$117=$$category.pages.get(pageNum$115))!==null){
            $$$cl1.print($$$cl1.String("display page",12));
            $$category.view.displayPage(pageNum$115);
            page$117.display(photoNum$116);
        }else {
            $$$cl1.print($$$cl1.String("display invalid page",20));
            $$category.view.displayInvalidPage();
        }
    }
    $$category.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photoM$118){
        var photo$119;
        if((photo$119=photoM$118)!==null){
            $$$cl1.print($$$cl1.String("display photo",13));
            $$category.view.displayPhoto(photo$119);
        }else {
            $$$cl1.print($$$cl1.String("display no photo",16));
            $$category.view.displayNoPhoto();
        }
    }
    $$category.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}},Return:{t:$$$cl1.Anything}};
    function setPages(photosJSON$120,dir$121){
        $$$cl1.print($$$cl1.String("set category pages",18));
        var end$122=(1).plus(photosJSON$120.size.divided((6)));
        $$category.pages=$$$cl1.Comprehension(function(){
            var it$123=(function(){var tmpvar$125=end$122;
            if (tmpvar$125>0){
            var tmpvar$126=(0);
            var tmpvar$127=tmpvar$126;
            for (var i=1; i<tmpvar$125; i++){tmpvar$127=tmpvar$127.successor;}
            return $$$cl1.Range(tmpvar$126,tmpvar$127,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$124=$$$cl1.getFinished();
            var next$i$124=function(){return i$124=it$123.next();}
            next$i$124();
            return function(){
                if(i$124!==$$$cl1.getFinished()){
                    var i$124$128=i$124;
                    var tmpvar$129=Page($$category,$$category.model.uri.plus(i$124$128.string).plus($$$cl1.String("/",1))).init(photosJSON$120.segment(i$124$128.times((6)),(6)),dir$121);
                    next$i$124();
                    return tmpvar$129;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Page}}).sequence;
    }
    $$category.setPages=setPages;
    setPages.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['setPages']};//setPages.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    return $$category;
}
Category.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']};
exports.Category=Category;
function $init$Category(){
    if (Category.$$===undefined){
        $$$cl1.initTypeProto(Category,'ceylon.examples.photogallery::Category',$$$cl1.Basic);
    }
    return Category;
}
exports.$init$Category=$init$Category;
$init$Category();
function CategoryModel(controller, name, $$categoryModel){
    $init$CategoryModel();
    if ($$categoryModel===undefined)$$categoryModel=new CategoryModel.$$;
    $$categoryModel.name=name;
    $$$cl1.defineAttr($$categoryModel,'uri',function(){return $$$cl1.String("#/",2).plus($$categoryModel.name.lowercased).plus($$$cl1.String("/",1));});
    return $$categoryModel;
}
CategoryModel.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryModel']};
exports.CategoryModel=CategoryModel;
function $init$CategoryModel(){
    if (CategoryModel.$$===undefined){
        $$$cl1.initTypeProto(CategoryModel,'ceylon.examples.photogallery::CategoryModel',$$$cl1.Basic);
    }
    return CategoryModel;
}
exports.$init$CategoryModel=$init$CategoryModel;
$init$CategoryModel();
function CategoryView(controller, $$categoryView){
    $init$CategoryView();
    if ($$categoryView===undefined)$$categoryView=new CategoryView.$$;
    $$categoryView.controller=controller;
    var template$130;
    $$$cl1.defineAttr($$categoryView,'template$130',function(){return template$130;},function(template$131){return template$130=template$131;});
    var paginationTemplate$132;
    $$$cl1.defineAttr($$categoryView,'paginationTemplate$132',function(){return paginationTemplate$132;},function(paginationTemplate$133){return paginationTemplate$132=paginationTemplate$133;});
    var pagination=$$$cl1.String("pagination",10);
    $$$cl1.defineAttr($$categoryView,'pagination',function(){return pagination;},function(pagination$134){return pagination=pagination$134;});
    var page=$$$cl1.String("page",4);
    $$$cl1.defineAttr($$categoryView,'page',function(){return page;},function(page$135){return page=page$135;});
    var title=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'title',function(){return title;},function(title$136){return title=title$136;});
    var src=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'src',function(){return src;},function(src$137){return src=src$137;});
    var alt=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'alt',function(){return alt;},function(alt$138){return alt=alt$138;});
    var caption=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'caption',function(){return caption;},function(caption$139){return caption=caption$139;});
    var width=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'width',function(){return width;},function(width$140){return width=width$140;});
    var height=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'height',function(){return height;},function(height$141){return height=height$141;});
    /*Begin dynamic block*/
    template$130=(tmpvar$142=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#category-template",18).valueOf()).html()),$$$cl1.isOfType(tmpvar$142,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$142:$$$cl1.throwexc('dynamic objects cannot be used here'));paginationTemplate$132=(tmpvar$143=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#category-pagination-template",29).valueOf()).html()),$$$cl1.isOfType(tmpvar$143,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$143:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
    function display(){
        $$$cl1.print($$$cl1.String("display category",16));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category",9).valueOf()).each($$$cl1.$JsCallable(function (){
            return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).removeClass($$$cl1.String("active",6).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category-",10).plus($$categoryView.controller.model.name.lowercased).valueOf()).addClass($$$cl1.String("active",6).valueOf());
        /*End dynamic block*/
        var context$144=(values$145=[$$$cl1.Entry($$$cl1.String("title",5),$$categoryView.title,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("width",5),$$categoryView.width,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("src",3),$$categoryView.src,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("alt",3),$$categoryView.alt,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("caption",7),$$categoryView.caption,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("page",4),$$categoryView.page,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("pagination",10),$$categoryView.pagination,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$145));
        var values$145;
        $$$cl1.print($$$cl1.String("src: ",5).plus($$categoryView.src));
        /*Begin dynamic block*/
        var dummy$146={dCarrier:context$144.toJson()};
        $$categoryView.controller.parent.updateCategory(template$130(dummy$146.dCarrier.json));
        /*End dynamic block*/
    }
    $$categoryView.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photo$147){
        var photoWidth$148;
        if((photoWidth$148=photo$147.width)!==null){
            $$categoryView.width=photoWidth$148.string;
        }
        var photoHeight$149;
        if((photoHeight$149=photo$147.height)!==null){
            $$categoryView.height=photoHeight$149.string;
        }
        $$categoryView.src=photo$147.src;
        $$categoryView.alt=photo$147.alt;
        $$categoryView.caption=photo$147.caption;
        $$categoryView.title=photo$147.title;
        /*Begin dynamic block*/
        $$categoryView.display();
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-photo",14).valueOf()).stop(true,true).hide().fadeIn((800));
        /*End dynamic block*/
    }
    $$categoryView.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Photo},Element:{t:Photo}}},Return:{t:$$$cl1.Anything}};
    function displayNoPhoto(){
    }
    $$categoryView.displayNoPhoto=displayNoPhoto;
    displayNoPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['displayNoPhoto']};//displayNoPhoto.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayInvalidPage(){
    }
    $$categoryView.displayInvalidPage=displayInvalidPage;
    displayInvalidPage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['displayInvalidPage']};//displayInvalidPage.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayPage(pageNum$150){
        var pages$151=$$$cj2.Array();
        var it$152 = $$categoryView.controller.pages.iterator();
        var page$153;while ((page$153=it$152.next())!==$$$cl1.getFinished()){
            pages$151.add((values$154=[$$$cl1.Entry($$$cl1.String("uri",3),page$153.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$154)));
            var values$154;
        }
        var context$155=(values$156=[$$$cl1.Entry($$$cl1.String("page",4),pageNum$150,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}}),$$$cl1.Entry($$$cl1.String("lastPage",8),$$categoryView.controller.pages.size.minus((1)),{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}}),$$$cl1.Entry($$$cl1.String("pages",5),pages$151,{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}}}]}}),JSObject(values$156));
        var values$156;
        /*Begin dynamic block*/
        var dummy$157={dCarrier:context$155.toJson()};
        $$categoryView.pagination=paginationTemplate$132(dummy$157.dCarrier.json);/*End dynamic block*/
        $$categoryView.display();
    }
    $$categoryView.displayPage=displayPage;
    displayPage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['displayPage']};//displayPage.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    return $$categoryView;
}
CategoryView.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']};
exports.CategoryView=CategoryView;
function $init$CategoryView(){
    if (CategoryView.$$===undefined){
        $$$cl1.initTypeProto(CategoryView,'ceylon.examples.photogallery::CategoryView',$$$cl1.Basic);
    }
    return CategoryView;
}
exports.$init$CategoryView=$init$CategoryView;
$init$CategoryView();
function CategoryJSON(name, photos, $$categoryJSON){
    $init$CategoryJSON();
    if ($$categoryJSON===undefined)$$categoryJSON=new CategoryJSON.$$;
    $$categoryJSON.name=name;
    $$categoryJSON.photos=photos;
    return $$categoryJSON;
}
CategoryJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryJSON']};
exports.CategoryJSON=CategoryJSON;
function $init$CategoryJSON(){
    if (CategoryJSON.$$===undefined){
        $$$cl1.initTypeProto(CategoryJSON,'ceylon.examples.photogallery::CategoryJSON',$$$cl1.Basic);
    }
    return CategoryJSON;
}
exports.$init$CategoryJSON=$init$CategoryJSON;
$init$CategoryJSON();
function Page(parent, uri, $$page){
    $init$Page();
    if ($$page===undefined)$$page=new Page.$$;
    $$page.parent=parent;
    $$page.uri=uri;
    var model;
    $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$158){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$158;});
    var view;
    $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$159){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$159;});
    function init(photos$160,dir$161){
        $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
        var model=PageModel($$page);
        $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$162){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$162;});
        var view=PageView($$page);
        $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$163){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$163;});
        $$page.model.parsePhotos(photos$160,dir$161);
        return $$page;
    }
    $$page.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Page}};
    function display(photoNum$164){
        $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
        $$page.view.display();
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$164.string));
        $$page.parent.displayPhoto($$page.model.photos.get(photoNum$164));
    }
    $$page.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    return $$page;
}
Page.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']};
exports.Page=Page;
function $init$Page(){
    if (Page.$$===undefined){
        $$$cl1.initTypeProto(Page,'ceylon.examples.photogallery::Page',$$$cl1.Basic);
    }
    return Page;
}
exports.$init$Page=$init$Page;
$init$Page();
function PageModel(controller, $$pageModel){
    $init$PageModel();
    if ($$pageModel===undefined)$$pageModel=new PageModel.$$;
    var photos=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$pageModel,'photos',function(){return photos;},function(photos$165){return photos=photos$165;});
    function parsePhotos(photosJSON$166,dir$167){
        $$$cl1.print($$$cl1.String("parsing photos",14));
        $$pageModel.photos=$$$cl1.Comprehension(function(){
            var it$168=photosJSON$166.iterator();
            var photo$169=$$$cl1.getFinished();
            var next$photo$169=function(){return photo$169=it$168.next();}
            next$photo$169();
            return function(){
                if(photo$169!==$$$cl1.getFinished()){
                    var photo$169$170=photo$169;
                    var tmpvar$171=Photo(photo$169$170.title,photo$169$170.caption,dir$167.plus($$$cl1.String("/",1)).plus(photo$169$170.src),dir$167.plus($$$cl1.String("/",1)).plus(photo$169$170.thumb),photo$169$170.height,photo$169$170.width,photo$169$170.alt);
                    next$photo$169();
                    return tmpvar$171;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
    }
    $$pageModel.parsePhotos=parsePhotos;
    parsePhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PageModel']['$m']['parsePhotos']};//parsePhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    return $$pageModel;
}
PageModel.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PageModel']};
exports.PageModel=PageModel;
function $init$PageModel(){
    if (PageModel.$$===undefined){
        $$$cl1.initTypeProto(PageModel,'ceylon.examples.photogallery::PageModel',$$$cl1.Basic);
    }
    return PageModel;
}
exports.$init$PageModel=$init$PageModel;
$init$PageModel();
function PageView(controller, $$pageView){
    $init$PageView();
    if ($$pageView===undefined)$$pageView=new PageView.$$;
    $$pageView.controller=controller;
    var template$172;
    $$$cl1.defineAttr($$pageView,'template$172',function(){return template$172;},function(template$173){return template$172=template$173;});
    /*Begin dynamic block*/
    template$172=(tmpvar$174=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#page-template",14).valueOf()).html()),$$$cl1.isOfType(tmpvar$174,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$174:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
    function display(){
        var photos$175=$$$cj2.Array();
        var it$176 = $$pageView.controller.model.photos.iterator();
        var photo$177;while ((photo$177=it$176.next())!==$$$cl1.getFinished()){
            photos$175.add((values$178=[$$$cl1.Entry($$$cl1.String("title",5),photo$177.title,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("uri",3),$$pageView.controller.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("src",3),photo$177.thumb,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("alt",3),photo$177.alt,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$178)));
            var values$178;
        }
        var context$179=(values$180=[$$$cl1.Entry($$$cl1.String("photos",6),photos$175,{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cj2.Array}}}}),JSObject(values$180));
        var values$180;
        /*Begin dynamic block*/
        var dummy$181={dCarrier:context$179.toJson()};
        $$pageView.controller.parent.updatePage(template$172(dummy$181.dCarrier.json));
        /*End dynamic block*/
        var it$182 = (function(){var tmpvar$184=photos$175.size;
        if (tmpvar$184>0){
        var tmpvar$185=(0);
        var tmpvar$186=tmpvar$185;
        for (var i=1; i<tmpvar$184; i++){tmpvar$186=tmpvar$186.successor;}
        return $$$cl1.Range(tmpvar$185,tmpvar$186,{Element:{t:$$$cl1.Integer}})
        }else return $$$cl1.getEmpty();}()).iterator();
        var i$183;while ((i$183=it$182.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$183.string).valueOf()).load($$$cl1.$JsCallable(function (){
                return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).parent().spin(false);
            },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$183.string).valueOf()).parent().spin($$$cl1.String("small",5).valueOf());
            /*End dynamic block*/
        }
    }
    $$pageView.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PageView']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    return $$pageView;
}
PageView.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PageView']};
exports.PageView=PageView;
function $init$PageView(){
    if (PageView.$$===undefined){
        $$$cl1.initTypeProto(PageView,'ceylon.examples.photogallery::PageView',$$$cl1.Basic);
    }
    return PageView;
}
exports.$init$PageView=$init$PageView;
$init$PageView();
function Photo(title, caption, src, thumb, height, width, alt, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.title=title;
    $$photo.caption=caption;
    $$photo.src=src;
    $$photo.thumb=thumb;
    $$photo.height=height;
    $$photo.width=width;
    $$photo.alt=alt;
    return $$photo;
}
Photo.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Photo']};
exports.Photo=Photo;
function $init$Photo(){
    if (Photo.$$===undefined){
        $$$cl1.initTypeProto(Photo,'ceylon.examples.photogallery::Photo',$$$cl1.Basic);
    }
    return Photo;
}
exports.$init$Photo=$init$Photo;
$init$Photo();
function PhotoJSON(title, caption, src, thumb, height, width, alt, $$photoJSON){
    $init$PhotoJSON();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON.$$;
    $$photoJSON.title=title;
    $$photoJSON.caption=caption;
    $$photoJSON.src=src;
    $$photoJSON.thumb=thumb;
    $$photoJSON.height=height;
    $$photoJSON.width=width;
    $$photoJSON.alt=alt;
    return $$photoJSON;
}
PhotoJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoJSON']};
exports.PhotoJSON=PhotoJSON;
function $init$PhotoJSON(){
    if (PhotoJSON.$$===undefined){
        $$$cl1.initTypeProto(PhotoJSON,'ceylon.examples.photogallery::PhotoJSON',$$$cl1.Basic);
    }
    return PhotoJSON;
}
exports.$init$PhotoJSON=$init$PhotoJSON;
$init$PhotoJSON();
function init(galleryDir$187){
    Gallery().init(galleryDir$187);
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
