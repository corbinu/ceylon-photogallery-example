(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$an":{"shared":[]},"$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"photos"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"CategoryJSON"},"clockwise":{"super":{"$pk":"ceylon.examples.photogallery","$nm":"SpinDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"clockwise"},"JQuerySpin":{"super":{"$pk":"ceylon.examples.photogallery","$nm":"JQuerySpinAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuerySpin"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"counterclockwise":{"super":{"$pk":"ceylon.examples.photogallery","$nm":"SpinDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"counterclockwise"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"pageNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"title"},"height":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"height"},"paginationTemplate":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"paginationTemplate"},"page":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"page"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"alt"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"src"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"pagination":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pagination"}},"$nm":"CategoryView"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"photos"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"PageModel"},"SpinDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.examples.photogallery","$nm":"clockwise"},{"$pk":"ceylon.examples.photogallery","$nm":"counterclockwise"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"direc"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"direc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"direc"}},"$nm":"SpinDirection"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$at":{"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"title"},"height":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"height"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"alt"},"width":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"src"},"thumb":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"thumb"}},"$nm":"Photo"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"photoLoaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$nm":"photoLoaded"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"PageView"},"$pkg-shared":"1","GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"isDesktop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDesktop"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"},"isMobile":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isMobile"}},"$at":{"template":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"template"},"category":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"category"},"categoryTabs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"categoryTabs"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"},"tabsTemplate":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"unknown"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tabsTemplate"}},"$nm":"GalleryView"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"categoriesJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"status"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"jqXHR"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$at":{"dir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"dir"},"controller":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"controller"}},"$nm":"GalleryModel"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$an":{"shared":[]},"$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"updatePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updatePage"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"pages"},"parent":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"attr","$an":{"shared":[]},"$nm":"parent"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Category"},"SpinOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"lines"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"length"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"radius"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"corners"},{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"SpinDirection"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"direction"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"color"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"speed"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"trail"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"shadow"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"hardwareAccel"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"className"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"zIndex"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"left"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"zIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"zIndex"},"speed":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"speed"},"direction":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"SpinDirection"},"$mt":"attr","$an":{"shared":[]},"$nm":"direction"},"width":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"width"},"corners":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$an":{"shared":[]},"$nm":"corners"},"hardwareAccel":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"hardwareAccel"},"color":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"color"},"shadow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"shadow"},"trail":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"trail"},"length":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"length"},"left":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"left"},"lines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"lines"},"radius":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"radius"},"className":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"className"},"top":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"top"}},"$nm":"SpinOptions"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$an":{"shared":[]},"$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$at":{"title":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"title"},"height":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"height"},"alt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"alt"},"width":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"width"},"caption":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"caption"},"src":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"src"},"thumb":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"thumb"}},"$nm":"PhotoJSON"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$an":{"shared":[]},"$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[]},"$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"parent":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"attr","$an":{"shared":[]},"$nm":"parent"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"},"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"Page"},"spin":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"JQuerySpin"},"$ps":[[{"$t":{"$md":"ceylon.js.jquery","$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"spin"},"JQuerySpinAbs":{"abstract":"1","super":{"$md":"ceylon.js.jquery","$pk":"ceylon.js.jquery","$nm":"JQueryAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"spinSetPreset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"SpinOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"spinSetPreset"},"spinPreset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"color"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"spinPreset"},"spin":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"SpinOptions"}]},"$mt":"prm","$def":"1","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"spin"},"spinStop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"spinStop"}},"$nm":"JQuerySpinAbs"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"updateCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"category"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"updateCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"handlebarHelpers":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"handlebarHelpers"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[],"actual":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6.1","ceylon.js.jquery\/1.10.0","ceylon.js.language\/1.8.5","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cjj2=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj2,'ceylon.js.json/1.0.0');
var $$$cjj3=require('ceylon/js/jquery/1.10.0/ceylon.js.jquery-1.10.0');
$$$cl1.$addmod$($$$cjj3,'ceylon.js.jquery/1.10.0');
var $$$cjl4=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl4,'ceylon.js.language/1.8.5');
function Gallery($$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    var categories=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$5){return categories=categories$5;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Category}}},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Gallery','$at','categories']};});
    $$gallery.$prop$getCategories={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Category}}},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Gallery','$at','categories']};}};
    $$gallery.$prop$getCategories.get=function(){return categories};
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$at','currentCategory']};});
    $$gallery.$prop$getCurrentCategory={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$at','currentCategory']};}};
    $$gallery.$prop$getCurrentCategory.get=function(){return currentCategory};
    var model;
    $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$6){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$6;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};});
    $$gallery.$prop$getModel={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};}};
    $$gallery.$prop$getModel.get=function(){return model};
    var view;
    $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$7){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$7;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};});
    $$gallery.$prop$getView={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};}};
    $$gallery.$prop$getView.get=function(){return view};
    function init(dir$8){
        $$$cl1.print($$$cl1.String("initalizing gallery",19));
        var model=GalleryModel($$gallery,dir$8);
        $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$9){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$9;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Gallery','$at','model']};});
        var view=GalleryView($$gallery);
        $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$10){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$10;},function(){return{mod:$$METAMODEL$$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Gallery','$at','view']};});
        handlebarHelpers$11();
        $$gallery.model.loadJSON();
        /*Begin dynamic block*/
        var resize$12=$$$cl1.$JsCallable(function (event$13){
            if($$$cjj3.jq($$$cl1.String(".visible-lg",11)).getCss($$$cl1.String("display",7)).equals($$$cl1.String("none !important",15))){
                $$gallery.view.isMobile();
            }else {
                $$gallery.view.isDesktop();
            }
        },[{$nm:'p1',$mt:'prm',$t:{t:$$$cl1.Anything}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}});
        $prop$getResize$12={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},d:['ceylon.examples.photogallery','Gallery','$m','init','$at','resize']};}};
        $prop$getResize$12.get=function(){return resize$12};
        $$$cjj3.jq($$$cjl4.JSObject((typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'27:15-27:20','gallery.ceylon'):window))).resize($$$cl1.$JsCallable(resize$12,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        return $$gallery;
    }
    $$gallery.init=init;
    init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','init']};};
    function loaded(){
        $$$cl1.print($$$cl1.String("gallery loaded",14));
        /*Begin dynamic block*/
        var router$14=(tmpvar$15=(typeof Router==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Router")),'36:20-36:25','gallery.ceylon'):Router),tmpvar$15.$$===undefined?new tmpvar$15():tmpvar$15()).init(/*NULL PARAM!*/$$$cl1.String("/",1).valueOf());
        $prop$getRouter$14={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.examples.photogallery','Gallery','$m','loaded','$at','router']};}};
        $prop$getRouter$14.get=function(){return router$14};
        router$14.on(/*NULL PARAM!*/$$$cl1.String("/",1).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(routeIndex$16,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$14.on(/*NULL PARAM!*/$$$cl1.String("/:category",10).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(routeCategory$17,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$14.on(/*NULL PARAM!*/$$$cl1.String("/:category/:page",16).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(routePage$18,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$14.on(/*NULL PARAM!*/$$$cl1.String("/:category/:page/:photo",23).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(routePhoto$19,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.view.displayCategories();
    }
    $$gallery.loaded=loaded;
    loaded.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','loaded']};};
    function updateCategory(category$20){
        ($$gallery.view.category=category$20);
        $$gallery.view.display();
    }
    $$gallery.updateCategory=updateCategory;
    updateCategory.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery','$m','updateCategory']};};
    function handlebarHelpers$11(){
        /*Begin dynamic block*/
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'53:3-53:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("lower",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (string$21){
            return string$21.lowercased;
        },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'56:3-56:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("upper",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (string$22){
            return string$22.uppercased;
        },[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'59:3-59:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("add",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$23,int2$24){
            return int1$23.plus(int2$24).string;
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'62:3-62:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("sub",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$25,int2$26){
            return int1$25.minus(int2$26).string;
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'65:3-65:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("eql",3).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (obj1$27,obj2$28,funcs$29){
            if(obj1$27.equals(obj2$28)){
                return (tmpvar$30=funcs$29.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'67:21-67:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$30,{t:$$$cl1.Anything})?tmpvar$30:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'67:12-67:27','gallery.ceylon'));
            }else {
                return (tmpvar$31=funcs$29.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'69:26-69:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$31,{t:$$$cl1.Anything})?tmpvar$31:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'69:12-69:32','gallery.ceylon'));
            }
        },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'72:3-72:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("nteql",5).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (obj1$32,obj2$33,funcs$34){
            if((!obj1$32.equals(obj2$33))){
                return (tmpvar$35=funcs$34.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'74:21-74:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$35,{t:$$$cl1.Anything})?tmpvar$35:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'74:12-74:27','gallery.ceylon'));
            }else {
                return (tmpvar$36=funcs$34.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'76:26-76:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$36,{t:$$$cl1.Anything})?tmpvar$36:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'76:12-76:32','gallery.ceylon'));
            }
        },[{$nm:'obj1',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'79:3-79:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("lt",2).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$37,int2$38,funcs$39){
            if(int1$37.compare(int2$38).equals($$$cl1.getSmaller())){
                return (tmpvar$40=funcs$39.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'81:21-81:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$40,{t:$$$cl1.Anything})?tmpvar$40:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'81:12-81:27','gallery.ceylon'));
            }else {
                return (tmpvar$41=funcs$39.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'83:26-83:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$41,{t:$$$cl1.Anything})?tmpvar$41:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'83:12-83:32','gallery.ceylon'));
            }
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        (typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'86:3-86:12','gallery.ceylon'):Handlebars).registerHelper(/*NULL PARAM!*/$$$cl1.String("gt",2).valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(function (int1$42,int2$43,funcs$44){
            if(int1$42.compare(int2$43).equals($$$cl1.getLarger())){
                return (tmpvar$45=funcs$44.fn(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'88:21-88:24','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$45,{t:$$$cl1.Anything})?tmpvar$45:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'88:12-88:27','gallery.ceylon'));
            }else {
                return (tmpvar$46=funcs$44.inverse(/*NULL PARAM!*/(typeof this==='undefined'||this===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: this")),'90:26-90:29','gallery.ceylon'):this)),$$$cl1.isOfType(tmpvar$46,{t:$$$cl1.Anything})?tmpvar$46:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'90:12-90:32','gallery.ceylon'));
            }
        },[{$nm:'int1',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    };handlebarHelpers$11.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','handlebarHelpers']};};
    function getCategory$47(name$48){
        $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$48));
        var it$49 = $$gallery.categories.iterator();
        var category$50;while ((category$50=it$49.next())!==$$$cl1.getFinished()){
            if(name$48.lowercased.equals(category$50.model.name.lowercased)){
                return category$50;
            }
        }
        return null;
    };getCategory$47.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','getCategory']};};
    function routeIndex$16(){
        $$$cl1.print($$$cl1.String("routing index",13));
        var firstCategory$51;
        if((firstCategory$51=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("display first category",22));
            firstCategory$51.display((0),(0));
        }
    };routeIndex$16.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routeIndex']};};
    function routeCategory$17(categoryName$52){
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$52));
        var category$53;
        if((category$53=getCategory$47(categoryName$52))!==null){
            $$$cl1.print($$$cl1.String("display category",16));
            category$53.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routeCategory$17.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routeCategory']};};
    function routePage$18(categoryName$54,page$55){
        var pageNum$56=$$$cl1.Integer(page$55);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$54).plus($$$cl1.String(" page num: ",11)).plus(pageNum$56.string));
        var category$57;
        if((category$57=getCategory$47(categoryName$54))!==null){
            $$$cl1.print($$$cl1.String("display category and page",25));
            category$57.display(pageNum$56,(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePage$18.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routePage']};};
    function routePhoto$19(categoryName$58,page$59,photo$60){
        var pageNum$61=$$$cl1.Integer(page$59);
        var photoNum$62=$$$cl1.Integer(photo$60);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$58).plus($$$cl1.String(" page num: ",11)).plus(pageNum$61.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$60.string));
        var category$63;
        if((category$63=getCategory$47(categoryName$58))!==null){
            $$$cl1.print($$$cl1.String("display category, page and photo",32));
            category$63.display(pageNum$61,photoNum$62);
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePhoto$19.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['ceylon.examples.photogallery','Gallery','$m','routePhoto']};};
    return $$gallery;
}
Gallery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Gallery']};};
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
    $$galleryModel.controller_=controller;
    $$galleryModel.dir_=dir;
    $$$cl1.defineAttr($$galleryModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$at','controller']};});
    $$$cl1.defineAttr($$galleryModel,'dir',function(){return this.dir_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$at','dir']};});
    function loadJSON(){
        $$$cl1.print($$$cl1.String("loading local json",18));
        /*Begin dynamic block*/
        $$$cjj3.jQueryGetJSON($$galleryModel.dir.plus($$$cl1.String("/images.json",12))).done(/*NULL PARAM!*/$$$cl1.$JsCallable($$galleryModel.parseCategories,[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},$an:function(){return[];}},{$nm:'status',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'jqXHR',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})).fail(/*NULL PARAM!*/$$$cl1.$JsCallable(function (){
            return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: alert")),'157:73-157:77','gallery.ceylon'):alert)(/*NULL PARAM!*/$$$cl1.String("Error could not load image file",31).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    }
    $$galleryModel.loadJSON=loadJSON;
    loadJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$m','loadJSON']};};
    function parseCategories(categoriesJSON$64,status$65,jqXHR$66){
        $$$cl1.print($$$cl1.String("process category json",21));
        $$$cl1.print($$$cl1.String("dir is:",7).plus($$galleryModel.dir));
        ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
            var it$67=categoriesJSON$64.iterator();
            var category$68=$$$cl1.getFinished();
            var next$category$68=function(){return category$68=it$67.next();}
            next$category$68();
            return function(){
                if(category$68!==$$$cl1.getFinished()){
                    var category$68$69=category$68;
                    var tmpvar$70=Category($$galleryModel.controller).init(category$68$69.name,category$68$69.photos,$$galleryModel.dir);
                    next$category$68();
                    return tmpvar$70;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Category}}).sequence);
        $$galleryModel.controller.loaded();
    }
    $$galleryModel.parseCategories=parseCategories;
    parseCategories.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},$an:function(){return[];}},{$nm:'status',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'jqXHR',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:GalleryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel','$m','parseCategories']};};
    return $$galleryModel;
}
GalleryModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryModel']};};
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
    $$galleryView.controller_=controller;
    $$$cl1.defineAttr($$galleryView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$at','controller']};});
    var template$71;
    $$$cl1.defineAttr($$galleryView,'template$71',function(){return template$71;},function(template$72){return template$71=template$72;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','template']};});
    $$galleryView.$prop$getTemplate$71={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','template']};}};
    $$galleryView.$prop$getTemplate$71.get=function(){return template$71};
    var tabsTemplate$73;
    $$$cl1.defineAttr($$galleryView,'tabsTemplate$73',function(){return tabsTemplate$73;},function(tabsTemplate$74){return tabsTemplate$73=tabsTemplate$74;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','tabsTemplate']};});
    $$galleryView.$prop$getTabsTemplate$73={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:GalleryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','tabsTemplate']};}};
    $$galleryView.$prop$getTabsTemplate$73.get=function(){return tabsTemplate$73};
    var categoryTabs=$$$cl1.String("categoryTabs",12);
    $$$cl1.defineAttr($$galleryView,'categoryTabs',function(){return categoryTabs;},function(categoryTabs$75){return categoryTabs=categoryTabs$75;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};});
    $$galleryView.$prop$getCategoryTabs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};}};
    $$galleryView.$prop$getCategoryTabs.get=function(){return categoryTabs};
    var category=$$$cl1.String("category",8);
    $$$cl1.defineAttr($$galleryView,'category',function(){return category;},function(category$76){return category=category$76;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','category']};});
    $$galleryView.$prop$getCategory={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GalleryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','GalleryView','$at','category']};}};
    $$galleryView.$prop$getCategory.get=function(){return category};
    /*Begin dynamic block*/
    template$71=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'180:13-180:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/$$$cjj3.jq($$$cl1.String("#gallery-template",17)).getHtml().$native);tabsTemplate$73=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'181:17-181:26','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/$$$cjj3.jq($$$cl1.String("#gallery-tabs-template",22)).getHtml().$native);/*End dynamic block*/
    function display(){
        var context$77=(values$78=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("categoryTabs",12),$$galleryView.categoryTabs,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("category",8),$$galleryView.category,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj2.JSON(values$78));
        var values$78;
        /*Begin dynamic block*/
        $$$cjj3.jq($$$cl1.String("body",4)).setHtml((tmpvar$79=template$71(/*NULL PARAM!*/context$77.toJson().$native),$$$cl1.isOfType(tmpvar$79,{t:$$$cl1.String})?tmpvar$79:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'190:28-190:60','gallery.ceylon')));
        /*End dynamic block*/
    }
    $$galleryView.display=display;
    display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','display']};};
    function displayCategories(){
        var categories$80=$$$cjj2.JSONArray();
        var it$81 = $$galleryView.controller.categories.iterator();
        var category$82;while ((category$82=it$81.next())!==$$$cl1.getFinished()){
            categories$80.add((values$83=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("name",4),category$82.model.name,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj2.JSON(values$83)));
            var values$83;
        }
        var context$84=(values$85=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("category",8),categories$80,{Key:{t:$$$cl1.String},Item:{t:$$$cjj2.JSONArray}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjj2.JSONArray}}}}),$$$cjj2.JSON(values$85));
        var values$85;
        /*Begin dynamic block*/
        $$galleryView.categoryTabs=(tmpvar$86=tabsTemplate$73(/*NULL PARAM!*/context$84.toJson().$native),$$$cl1.isOfType(tmpvar$86,{t:$$$cl1.String})?tmpvar$86:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'201:18-201:54','gallery.ceylon'));/*End dynamic block*/
        $$galleryView.display();
    }
    $$galleryView.displayCategories=displayCategories;
    displayCategories.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','displayCategories']};};
    function displayInvalidCategory(){
    }
    $$galleryView.displayInvalidCategory=displayInvalidCategory;
    displayInvalidCategory.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','displayInvalidCategory']};};
    function isMobile(){
        $$$cl1.print($$$cl1.String("is mobile",9));
    }
    $$galleryView.isMobile=isMobile;
    isMobile.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','isMobile']};};
    function isDesktop(){
        $$$cl1.print($$$cl1.String("is desktop",10));
    }
    $$galleryView.isDesktop=isDesktop;
    isDesktop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView','$m','isDesktop']};};
    return $$galleryView;
}
GalleryView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','GalleryView']};};
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
    $$category.parent_=parent;
    $$$cl1.defineAttr($$category,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Gallery},$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$at','parent']};});
    var model;
    $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$87){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$87;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Category','$at','model']};});
    $$category.$prop$getModel.get=function(){return model};
    var view;
    $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$88){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$88;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryView},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Category','$at','view']};});
    $$category.$prop$getView.get=function(){return view};
    var pages=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$category,'pages',function(){return pages;},function(pages$89){return pages=pages$89;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Page}}},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Category','$at','pages']};});
    $$category.$prop$getPages={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Page}}},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','Category','$at','pages']};}};
    $$category.$prop$getPages.get=function(){return pages};
    function init(name$90,photos$91,dir$92){
        $$$cl1.print($$$cl1.String("initalizing category",20));
        var model=CategoryModel($$category,name$90);
        $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$93){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$93;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Category','$at','model']};});
        var view=CategoryView($$category);
        $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$94){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$94;},function(){return{mod:$$METAMODEL$$,$t:{t:CategoryView},$cont:Category,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Category','$at','view']};});
        $$category.setPages(photos$91,dir$92);
        return $$category;
    }
    $$category.init=init;
    init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','init']};};
    function updatePage(page$95){
        ($$category.view.page=page$95);
        $$category.view.display();
    }
    $$category.updatePage=updatePage;
    updatePage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','updatePage']};};
    function display(pageNum$96,photoNum$97){
        $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$96.string).plus($$$cl1.String(" photo ",7)).plus(photoNum$97.string));
        $$category.view.display();
        var page$98;
        if((page$98=$$category.pages.get(pageNum$96))!==null){
            $$$cl1.print($$$cl1.String("display page",12));
            $$category.view.displayPage(pageNum$96);
            page$98.display(photoNum$97);
        }else {
            $$$cl1.print($$$cl1.String("display invalid page",20));
            $$category.view.displayInvalidPage();
        }
    }
    $$category.display=display;
    display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','display']};};
    function displayPhoto(photoM$99){
        var photo$100;
        if((photo$100=photoM$99)!==null){
            $$$cl1.print($$$cl1.String("display photo",13));
            $$category.view.displayPhoto(photo$100);
        }else {
            $$$cl1.print($$$cl1.String("display no photo",16));
            $$category.view.displayNoPhoto();
        }
    }
    $$category.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','displayPhoto']};};
    function setPages(photosJSON$101,dir$102){
        $$$cl1.print($$$cl1.String("set category pages",18));
        var end$103=(1).plus(photosJSON$101.size.divided((6)));
        $$category.pages=$$$cl1.Comprehension(function(){
            var it$104=(function(){var tmpvar$106=end$103;
            if (tmpvar$106>0){
            var tmpvar$107=(0);
            var tmpvar$108=tmpvar$107;
            for (var i=1; i<tmpvar$106; i++){tmpvar$108=tmpvar$108.successor;}
            return $$$cl1.Range(tmpvar$107,tmpvar$108,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$105=$$$cl1.getFinished();
            var next$i$105=function(){return i$105=it$104.next();}
            next$i$105();
            return function(){
                if(i$105!==$$$cl1.getFinished()){
                    var i$105$109=i$105;
                    var tmpvar$110=Page($$category,$$category.model.uri.plus(i$105$109.string).plus($$$cl1.String("/",1))).init(photosJSON$101.segment(i$105$109.times((6)),(6)),dir$102);
                    next$i$105();
                    return tmpvar$110;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Page}}).sequence;
    }
    $$category.setPages=setPages;
    setPages.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category','$m','setPages']};};
    return $$category;
}
Category.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Category']};};
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
    $$categoryModel.controller_=controller;
    $$categoryModel.name_=name;
    $$$cl1.defineAttr($$categoryModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','controller']};});
    $$$cl1.defineAttr($$categoryModel,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','name']};});
    $$$cl1.defineAttr($$categoryModel,'uri',function(){return $$$cl1.String("#/",2).plus($$categoryModel.name.lowercased).plus($$$cl1.String("/",1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','uri']};});
    $$categoryModel.$prop$getUri={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel','$at','uri']};}};
    $$categoryModel.$prop$getUri.get=function(){return uri};
    return $$categoryModel;
}
CategoryModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryModel']};};
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
    $$categoryView.controller_=controller;
    $$$cl1.defineAttr($$categoryView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$at','controller']};});
    var template$111;
    $$$cl1.defineAttr($$categoryView,'template$111',function(){return template$111;},function(template$112){return template$111=template$112;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','template']};});
    $$categoryView.$prop$getTemplate$111={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','template']};}};
    $$categoryView.$prop$getTemplate$111.get=function(){return template$111};
    var paginationTemplate$113;
    $$categoryView.$prop$getPaginationTemplate$113={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CategoryView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','paginationTemplate']};}};
    $$categoryView.$prop$getPaginationTemplate$113.get=function(){return paginationTemplate$113};
    var pagination=$$$cl1.String("pagination",10);
    $$$cl1.defineAttr($$categoryView,'pagination',function(){return pagination;},function(pagination$114){return pagination=pagination$114;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','pagination']};});
    $$categoryView.$prop$getPagination={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','pagination']};}};
    $$categoryView.$prop$getPagination.get=function(){return pagination};
    var page=$$$cl1.String("page",4);
    $$$cl1.defineAttr($$categoryView,'page',function(){return page;},function(page$115){return page=page$115;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','page']};});
    $$categoryView.$prop$getPage={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','page']};}};
    $$categoryView.$prop$getPage.get=function(){return page};
    var title=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'title',function(){return title;},function(title$116){return title=title$116;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','title']};});
    $$categoryView.$prop$getTitle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','title']};}};
    $$categoryView.$prop$getTitle.get=function(){return title};
    var src=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'src',function(){return src;},function(src$117){return src=src$117;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','src']};});
    $$categoryView.$prop$getSrc={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','src']};}};
    $$categoryView.$prop$getSrc.get=function(){return src};
    var alt=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'alt',function(){return alt;},function(alt$118){return alt=alt$118;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','alt']};});
    $$categoryView.$prop$getAlt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','alt']};}};
    $$categoryView.$prop$getAlt.get=function(){return alt};
    var caption=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'caption',function(){return caption;},function(caption$119){return caption=caption$119;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','caption']};});
    $$categoryView.$prop$getCaption={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','caption']};}};
    $$categoryView.$prop$getCaption.get=function(){return caption};
    var width=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'width',function(){return width;},function(width$120){return width=width$120;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','width']};});
    $$categoryView.$prop$getWidth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','width']};}};
    $$categoryView.$prop$getWidth.get=function(){return width};
    var height=$$$cl1.String("",0);
    $$$cl1.defineAttr($$categoryView,'height',function(){return height;},function(height$121){return height=height$121;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','height']};});
    $$categoryView.$prop$getHeight={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryView,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','CategoryView','$at','height']};}};
    $$categoryView.$prop$getHeight.get=function(){return height};
    /*Begin dynamic block*/
    template$111=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'287:13-287:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/$$$cjj3.jq($$$cl1.String("#category-template",18)).getHtml().$native);paginationTemplate$113=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'288:23-288:32','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/$$$cjj3.jq($$$cl1.String("#category-pagination-template",29)).getHtml().$native);/*End dynamic block*/
    function display(){
        $$$cl1.print($$$cl1.String("display category",16));
        var context$122=(values$123=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("title",5),$$categoryView.title,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("width",5),$$categoryView.width,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("src",3),$$categoryView.src,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("alt",3),$$categoryView.alt,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("caption",7),$$categoryView.caption,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("page",4),$$categoryView.page,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("pagination",10),$$categoryView.pagination,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj2.JSON(values$123));
        var values$123;
        $$$cl1.print($$$cl1.String("src: ",5).plus($$categoryView.src));
        /*Begin dynamic block*/
        $$categoryView.controller.parent.updateCategory((tmpvar$124=template$111(/*NULL PARAM!*/context$122.toJson().$native),$$$cl1.isOfType(tmpvar$124,{t:$$$cl1.String})?tmpvar$124:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'304:36-304:68','gallery.ceylon')));
        $$$cjj3.jq($$$cl1.String(".category",9)).each($$$cl1.$JsCallable((tmpvar$125=function (index$126,item$127){
            return (typeof jqThis==='undefined'||jqThis===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jqThis")),'305:59-305:64','gallery.ceylon'):jqThis)().removeClass(/*NULL PARAM!*/$$$cl1.String("active",6).valueOf());
        },$$$cl1.isOfType(tmpvar$125,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}})?tmpvar$125:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'305:25-305:88','gallery.ceylon')),[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}));
        $$$cjj3.jq($$$cl1.String(".category-",10).plus($$categoryView.controller.model.name.lowercased)).addClass($$$cl1.String("active",6));
        /*End dynamic block*/
    }
    $$categoryView.display=display;
    display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','display']};};
    function displayPhoto(photo$128){
        var photoWidth$129;
        if((photoWidth$129=photo$128.width)!==null){
            $$categoryView.width=photoWidth$129.string;
        }
        var photoHeight$130;
        if((photoHeight$130=photo$128.height)!==null){
            $$categoryView.height=photoHeight$130.string;
        }
        $$categoryView.src=photo$128.src;
        $$categoryView.alt=photo$128.alt;
        $$categoryView.caption=photo$128.caption;
        $$categoryView.title=photo$128.title;
        $$categoryView.display();
        $$$cjj3.jq($$$cl1.String(".display-photo",14)).stop(true,true).hide().fadeIn((800));
    }
    $$categoryView.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayPhoto']};};
    function displayNoPhoto(){
    }
    $$categoryView.displayNoPhoto=displayNoPhoto;
    displayNoPhoto.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayNoPhoto']};};
    function displayInvalidPage(){
    }
    $$categoryView.displayInvalidPage=displayInvalidPage;
    displayInvalidPage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayInvalidPage']};};
    function displayPage(pageNum$131){
        var pages$132=$$$cjj2.JSONArray();
        var it$133 = $$categoryView.controller.pages.iterator();
        var page$134;while ((page$134=it$133.next())!==$$$cl1.getFinished()){
            pages$132.add((values$135=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("uri",3),page$134.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),$$$cjj2.JSON(values$135)));
            var values$135;
        }
        var context$136=(values$137=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("uri",3),$$categoryView.controller.model.uri,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("page",4),pageNum$131,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("lastPage",8),$$categoryView.controller.pages.size.minus((1)),{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("pages",5),pages$132,{Key:{t:$$$cl1.String},Item:{t:$$$cjj2.JSONArray}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Integer}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjj2.JSONArray}}}]}}),$$$cjj2.JSON(values$137));
        var values$137;
        /*Begin dynamic block*/
        /*End dynamic block*/
        $$categoryView.display();
    }
    $$categoryView.displayPage=displayPage;
    displayPage.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView','$m','displayPage']};};
    return $$categoryView;
}
CategoryView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryView']};};
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
    $$categoryJSON.name_=name;
    $$categoryJSON.photos_=photos;
    $$$cl1.defineAttr($$categoryJSON,'name',function(){return this.name_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CategoryJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON','$at','name']};});
    $$$cl1.defineAttr($$categoryJSON,'photos',function(){return this.photos_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$cont:CategoryJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON','$at','photos']};});
    return $$categoryJSON;
}
CategoryJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','CategoryJSON']};};
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
    $$page.parent_=parent;
    $$page.uri_=uri;
    $$$cl1.defineAttr($$page,'parent',function(){return this.parent_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Category},$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$at','parent']};});
    $$$cl1.defineAttr($$page,'uri',function(){return this.uri_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$at','uri']};});
    var model;
    $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$138){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$138;},function(){return{mod:$$METAMODEL$$,$t:{t:PageModel},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Page','$at','model']};});
    $$page.$prop$getModel.get=function(){return model};
    var view;
    $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$139){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$139;},function(){return{mod:$$METAMODEL$$,$t:{t:PageView},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late()];},d:['ceylon.examples.photogallery','Page','$at','view']};});
    $$page.$prop$getView.get=function(){return view};
    function init(photos$140,dir$141){
        $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
        var model=PageModel($$page);
        $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$142){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$142;},function(){return{mod:$$METAMODEL$$,$t:{t:PageModel},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Page','$at','model']};});
        var view=PageView($$page);
        $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$143){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$143;},function(){return{mod:$$METAMODEL$$,$t:{t:PageView},$cont:Page,$an:function(){return[$$$cl1.shared(),$$$cl1.late(),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','Page','$at','view']};});
        $$page.model.parsePhotos(photos$140,dir$141);
        return $$page;
    }
    $$page.init=init;
    init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$m','init']};};
    function display(photoNum$144){
        $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
        $$page.view.display();
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$144.string));
        $$page.parent.displayPhoto($$page.model.photos.get(photoNum$144));
    }
    $$page.display=display;
    display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Page,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page','$m','display']};};
    return $$page;
}
Page.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Page']};};
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
    $$pageModel.controller_=controller;
    $$$cl1.defineAttr($$pageModel,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Page},$cont:PageModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel','$at','controller']};});
    var photos=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$pageModel,'photos',function(){return photos;},function(photos$145){return photos=photos$145;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Photo}}},$cont:PageModel,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageModel','$at','photos']};});
    $$pageModel.$prop$getPhotos={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Photo}}},$cont:PageModel,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageModel','$at','photos']};}};
    $$pageModel.$prop$getPhotos.get=function(){return photos};
    function parsePhotos(photosJSON$146,dir$147){
        $$$cl1.print($$$cl1.String("parsing photos",14));
        $$pageModel.photos=$$$cl1.Comprehension(function(){
            var it$148=photosJSON$146.iterator();
            var photo$149=$$$cl1.getFinished();
            var next$photo$149=function(){return photo$149=it$148.next();}
            next$photo$149();
            return function(){
                if(photo$149!==$$$cl1.getFinished()){
                    var photo$149$150=photo$149;
                    var tmpvar$151=Photo(photo$149$150.title,photo$149$150.caption,dir$147.plus($$$cl1.String("/",1)).plus(photo$149$150.src),dir$147.plus($$$cl1.String("/",1)).plus(photo$149$150.thumb),photo$149$150.height,photo$149$150.width,photo$149$150.alt);
                    next$photo$149();
                    return tmpvar$151;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
    }
    $$pageModel.parsePhotos=parsePhotos;
    parsePhotos.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:PageModel,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel','$m','parsePhotos']};};
    return $$pageModel;
}
PageModel.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageModel']};};
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
    $$pageView.controller_=controller;
    $$$cl1.defineAttr($$pageView,'controller',function(){return this.controller_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Page},$cont:PageView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView','$at','controller']};});
    var template$152;
    $$pageView.$prop$getTemplate$152={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:PageView,$an:function(){return[$$$cl1.variable()];},d:['ceylon.examples.photogallery','PageView','$at','template']};}};
    $$pageView.$prop$getTemplate$152.get=function(){return template$152};
    /*Begin dynamic block*/
    template$152=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Handlebars")),'389:13-389:22','gallery.ceylon'):Handlebars).compile(/*NULL PARAM!*/$$$cjj3.jq($$$cl1.String("#page-template",14)).getHtml().$native);/*End dynamic block*/
    function display(){
        /*Begin dynamic block*/
        /*End dynamic block*/
    }
    $$pageView.display=display;
    display.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:PageView,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView','$m','display']};};
    return $$pageView;
}
PageView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PageView']};};
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
    $$photo.title_=title;
    $$photo.caption_=caption;
    $$photo.src_=src;
    $$photo.thumb_=thumb;
    $$photo.height_=height;
    $$photo.width_=width;
    $$photo.alt_=alt;
    $$$cl1.defineAttr($$photo,'title',function(){return this.title_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','title']};});
    $$$cl1.defineAttr($$photo,'caption',function(){return this.caption_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','caption']};});
    $$$cl1.defineAttr($$photo,'src',function(){return this.src_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','src']};});
    $$$cl1.defineAttr($$photo,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','thumb']};});
    $$$cl1.defineAttr($$photo,'height',function(){return this.height_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','height']};});
    $$$cl1.defineAttr($$photo,'width',function(){return this.width_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','width']};});
    $$$cl1.defineAttr($$photo,'alt',function(){return this.alt_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Photo,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo','$at','alt']};});
    return $$photo;
}
Photo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','Photo']};};
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
    $$photoJSON.title_=title;
    $$photoJSON.caption_=caption;
    $$photoJSON.src_=src;
    $$photoJSON.thumb_=thumb;
    $$photoJSON.height_=height;
    $$photoJSON.width_=width;
    $$photoJSON.alt_=alt;
    $$$cl1.defineAttr($$photoJSON,'title',function(){return this.title_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','title']};});
    $$$cl1.defineAttr($$photoJSON,'caption',function(){return this.caption_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','caption']};});
    $$$cl1.defineAttr($$photoJSON,'src',function(){return this.src_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','src']};});
    $$$cl1.defineAttr($$photoJSON,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','thumb']};});
    $$$cl1.defineAttr($$photoJSON,'height',function(){return this.height_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','height']};});
    $$$cl1.defineAttr($$photoJSON,'width',function(){return this.width_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','width']};});
    $$$cl1.defineAttr($$photoJSON,'alt',function(){return this.alt_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:PhotoJSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON','$at','alt']};});
    return $$photoJSON;
}
PhotoJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','PhotoJSON']};};
exports.PhotoJSON=PhotoJSON;
function $init$PhotoJSON(){
    if (PhotoJSON.$$===undefined){
        $$$cl1.initTypeProto(PhotoJSON,'ceylon.examples.photogallery::PhotoJSON',$$$cl1.Basic);
    }
    return PhotoJSON;
}
exports.$init$PhotoJSON=$init$PhotoJSON;
$init$PhotoJSON();
function spin(jq$153){
    /*Begin dynamic block*/
    return JQuerySpin(jq$153.$native);
    /*End dynamic block*/
}
exports.spin=spin;
spin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuerySpin},$ps:[{$nm:'jq',$mt:'prm',$t:{t:$$$cjj3.JQuery},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','spin']};};
function SpinDirection(direc, $$spinDirection){
    $init$SpinDirection();
    if ($$spinDirection===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$spinDirection.direc_=direc;
    $$$cl1.defineAttr($$spinDirection,'direc',function(){return this.direc_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinDirection,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinDirection','$at','direc']};});
    return $$spinDirection;
}
SpinDirection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.examples.photogallery','SpinDirection']};};
exports.SpinDirection=SpinDirection;
function $init$SpinDirection(){
    if (SpinDirection.$$===undefined){
        $$$cl1.initTypeProto(SpinDirection,'ceylon.examples.photogallery::SpinDirection',$$$cl1.Basic);
    }
    return SpinDirection;
}
exports.$init$SpinDirection=$init$SpinDirection;
$init$SpinDirection();
function clockwise$154(){
    var $$clockwise=new clockwise$154.$$;
    SpinDirection((1),$$clockwise);
    return $$clockwise;
}
function $init$clockwise$154(){
    if (clockwise$154.$$===undefined){
        $$$cl1.initTypeProto(clockwise$154,'ceylon.examples.photogallery::clockwise',$init$SpinDirection());
    }
    return clockwise$154;
}
exports.$init$clockwise$154=$init$clockwise$154;
$init$clockwise$154();
var clockwise$155;
function getClockwise(){
    if (clockwise$155===undefined)clockwise$155=$init$clockwise$154()();
    return clockwise$155;
}
exports.getClockwise=getClockwise;
getClockwise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:clockwise$154},$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','clockwise']};};
$prop$getClockwise={get:getClockwise,$$metamodel$$:getClockwise.$$metamodel$$};
exports.$prop$getClockwise=$prop$getClockwise;
function counterclockwise$156(){
    var $$counterclockwise=new counterclockwise$156.$$;
    SpinDirection((-(1)),$$counterclockwise);
    return $$counterclockwise;
}
function $init$counterclockwise$156(){
    if (counterclockwise$156.$$===undefined){
        $$$cl1.initTypeProto(counterclockwise$156,'ceylon.examples.photogallery::counterclockwise',$init$SpinDirection());
    }
    return counterclockwise$156;
}
exports.$init$counterclockwise$156=$init$counterclockwise$156;
$init$counterclockwise$156();
var counterclockwise$157;
function getCounterclockwise(){
    if (counterclockwise$157===undefined)counterclockwise$157=$init$counterclockwise$156()();
    return counterclockwise$157;
}
exports.getCounterclockwise=getCounterclockwise;
getCounterclockwise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:counterclockwise$156},$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','counterclockwise']};};
$prop$getCounterclockwise={get:getCounterclockwise,$$metamodel$$:getCounterclockwise.$$metamodel$$};
exports.$prop$getCounterclockwise=$prop$getCounterclockwise;
function SpinOptions(lines, length, width, radius, corners, direction, color, speed, trail, shadow, hardwareAccel, className, zIndex, top, left, $$spinOptions){
    $init$SpinOptions();
    if ($$spinOptions===undefined)$$spinOptions=new SpinOptions.$$;
    if(lines===undefined){lines=(13);}
    $$spinOptions.lines_=lines;
    if(length===undefined){length=(20);}
    $$spinOptions.length_=length;
    if(width===undefined){width=(10);}
    $$spinOptions.width_=width;
    if(radius===undefined){radius=(30);}
    $$spinOptions.radius_=radius;
    if(corners===undefined){corners=$$$cl1.Float(1.0);}
    $$spinOptions.corners_=corners;
    if(direction===undefined){direction=getClockwise();}
    $$spinOptions.direction_=direction;
    if(color===undefined){color=$$$cl1.String("#000",4);}
    $$spinOptions.color_=color;
    if(speed===undefined){speed=(1);}
    $$spinOptions.speed_=speed;
    if(trail===undefined){trail=(60);}
    $$spinOptions.trail_=trail;
    if(shadow===undefined){shadow=false;}
    $$spinOptions.shadow_=shadow;
    if(hardwareAccel===undefined){hardwareAccel=false;}
    $$spinOptions.hardwareAccel_=hardwareAccel;
    if(className===undefined){className=$$$cl1.String("spinner",7);}
    $$spinOptions.className_=className;
    if(zIndex===undefined){zIndex=(2000000000);}
    $$spinOptions.zIndex_=zIndex;
    if(top===undefined){top=$$$cl1.String("auto",4);}
    $$spinOptions.top_=top;
    if(left===undefined){left=$$$cl1.String("auto",4);}
    $$spinOptions.left_=left;
    $$$cl1.defineAttr($$spinOptions,'lines',function(){return this.lines_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','lines']};});
    $$$cl1.defineAttr($$spinOptions,'length',function(){return this.length_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','length']};});
    $$$cl1.defineAttr($$spinOptions,'width',function(){return this.width_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','width']};});
    $$$cl1.defineAttr($$spinOptions,'radius',function(){return this.radius_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','radius']};});
    $$$cl1.defineAttr($$spinOptions,'corners',function(){return this.corners_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','corners']};});
    $$$cl1.defineAttr($$spinOptions,'direction',function(){return this.direction_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:SpinDirection},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','direction']};});
    $$$cl1.defineAttr($$spinOptions,'color',function(){return this.color_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','color']};});
    $$$cl1.defineAttr($$spinOptions,'speed',function(){return this.speed_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','speed']};});
    $$$cl1.defineAttr($$spinOptions,'trail',function(){return this.trail_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','trail']};});
    $$$cl1.defineAttr($$spinOptions,'shadow',function(){return this.shadow_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','shadow']};});
    $$$cl1.defineAttr($$spinOptions,'hardwareAccel',function(){return this.hardwareAccel_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','hardwareAccel']};});
    $$$cl1.defineAttr($$spinOptions,'className',function(){return this.className_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','className']};});
    $$$cl1.defineAttr($$spinOptions,'zIndex',function(){return this.zIndex_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','zIndex']};});
    $$$cl1.defineAttr($$spinOptions,'top',function(){return this.top_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','top']};});
    $$$cl1.defineAttr($$spinOptions,'left',function(){return this.left_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]},$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$at','left']};});
    function toJson(){
        var json$158=$$$cjl4.createJSObject();
        /*Begin dynamic block*/
        json$158.$native.lines=$$spinOptions.lines;
        json$158.$native.length=$$spinOptions.length;
        json$158.$native.width=$$spinOptions.width;
        json$158.$native.radius=$$spinOptions.radius;
        json$158.$native.corners=$$spinOptions.corners.valueOf();
        json$158.$native.direction=$$spinOptions.direction.direc;
        json$158.$native.color=$$spinOptions.color.valueOf();
        json$158.$native.speed=$$spinOptions.speed;
        json$158.$native.trail=$$spinOptions.trail;
        json$158.$native.shadow=$$spinOptions.shadow;
        json$158.$native.hwaccel=$$spinOptions.hardwareAccel;
        json$158.$native.zIndex=$$spinOptions.zIndex;
        json$158.$native.top=$$spinOptions.top;
        json$158.$native.left=$$spinOptions.left;
        return $$$cjj2.JSJSON(json$158.$native);
        /*End dynamic block*/
    }
    $$spinOptions.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj2.JSJSON},$ps:[],$cont:SpinOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions','$m','toJson']};};
    return $$spinOptions;
}
SpinOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','SpinOptions']};};
exports.SpinOptions=SpinOptions;
function $init$SpinOptions(){
    if (SpinOptions.$$===undefined){
        $$$cl1.initTypeProto(SpinOptions,'ceylon.examples.photogallery::SpinOptions',$$$cl1.Basic);
    }
    return SpinOptions;
}
exports.$init$SpinOptions=$init$SpinOptions;
$init$SpinOptions();
function JQuerySpinAbs($$jQuerySpinAbs){
    $init$JQuerySpinAbs();
    if ($$jQuerySpinAbs===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$cjj3.JQueryAbs($$jQuerySpinAbs);
    $$jQuerySpinAbs.spin$defs$options=function(options$159){return null;};
    function spin(options$159){
        if(options$159===undefined){options$159=$$jQuerySpinAbs.spin$defs$options(options$159);}
        /*Begin dynamic block*/
        var o$160;
        if((o$160=options$159)!==null){
            $$jQuerySpinAbs.$native.spin(/*NULL PARAM!*/o$160.toJson());
        }else {
            $$jQuerySpinAbs.$native.spin();
        }/*End dynamic block*/
    }
    $$jQuerySpinAbs.spin=spin;
    spin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:SpinOptions}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','JQuerySpinAbs','$m','spin']};};
    $$jQuerySpinAbs.spinPreset$defs$color=function(name$161,color$162){return null;};
    function spinPreset(name$161,color$162){
        if(color$162===undefined){color$162=$$jQuerySpinAbs.spinPreset$defs$color(name$161,color$162);}
        /*Begin dynamic block*/
        $$jQuerySpinAbs.$native.spin(/*NULL PARAM!*/name$161.valueOf()/*NULL PARAM!*/,color$162);
        /*End dynamic block*/
    }
    $$jQuerySpinAbs.spinPreset=spinPreset;
    spinPreset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'color',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','JQuerySpinAbs','$m','spinPreset']};};
    function spinStop(){
        /*Begin dynamic block*/
        $$jQuerySpinAbs.$native.spin(/*NULL PARAM!*/false);
        /*End dynamic block*/
    }
    $$jQuerySpinAbs.spinStop=spinStop;
    spinStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQuerySpinAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','JQuerySpinAbs','$m','spinStop']};};
    function spinSetPreset(name$163,options$164){
        /*Begin dynamic block*/
        (typeof objectDefineProperty==='undefined'||objectDefineProperty===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: objectDefineProperty")),'72:3-72:22','jqueryspin.ceylon'):objectDefineProperty)(/*NULL PARAM!*/(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'72:24-72:29','jqueryspin.ceylon'):jQuery).spin.presets/*NULL PARAM!*/,name$163.valueOf()/*NULL PARAM!*/,$$$cjl4.DataDescriptor(true,false,true,true,options$164.toJson()));
        /*End dynamic block*/
    }
    $$jQuerySpinAbs.spinSetPreset=spinSetPreset;
    spinSetPreset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:SpinOptions},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','JQuerySpinAbs','$m','spinSetPreset']};};
    return $$jQuerySpinAbs;
}
JQuerySpinAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjj3.JQueryAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.examples.photogallery','JQuerySpinAbs']};};
exports.JQuerySpinAbs=JQuerySpinAbs;
function $init$JQuerySpinAbs(){
    if (JQuerySpinAbs.$$===undefined){
        $$$cl1.initTypeProto(JQuerySpinAbs,'ceylon.examples.photogallery::JQuerySpinAbs',$$$cjj3.JQueryAbs);
    }
    return JQuerySpinAbs;
}
exports.$init$JQuerySpinAbs=$init$JQuerySpinAbs;
$init$JQuerySpinAbs();
function JQuerySpin(n$165, $$jQuerySpin){
    $init$JQuerySpin();
    if ($$jQuerySpin===undefined)$$jQuerySpin=new JQuerySpin.$$;
    $$jQuerySpin.n$165_=n$165;
    JQuerySpinAbs($$jQuerySpin);
    $$$cl1.defineAttr($$jQuerySpin,'n$165',function(){return this.n$165_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuerySpin,d:['ceylon.examples.photogallery','JQuerySpin','$at','n']};});
    $$jQuerySpin.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuerySpin,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.examples.photogallery','JQuerySpin','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuerySpin.$native=n$165;/*End dynamic block*/
    return $$jQuerySpin;
}
JQuerySpin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQuerySpinAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.examples.photogallery','JQuerySpin']};};
exports.JQuerySpin=JQuerySpin;
function $init$JQuerySpin(){
    if (JQuerySpin.$$===undefined){
        $$$cl1.initTypeProto(JQuerySpin,'ceylon.examples.photogallery::JQuerySpin',$init$JQuerySpinAbs());
    }
    return JQuerySpin;
}
exports.$init$JQuerySpin=$init$JQuerySpin;
$init$JQuerySpin();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$examples$photogallery=function(){return[$$$cl1.shared()];};
function init(galleryDir$166){
    Gallery().init(galleryDir$166);
}
exports.init=init;
init.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.examples.photogallery`.",46)),$$$cl1.shared()];},d:['ceylon.examples.photogallery','init']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
