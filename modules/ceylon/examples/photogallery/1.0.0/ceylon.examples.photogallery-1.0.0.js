(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"JSJSON":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$nm":"JSJSON"},"CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$nm":"CategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"}},"$nm":"PageModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"CategoryView"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"Photo"},"nativejs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nativejs"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"PageView"},"$pkg-shared":"1","GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"template":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"template"},"categoryTabs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryTabs"},"categoryMobile":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryMobile"},"categoryDesktop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryDesktop"},"tabsTemplate":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"tabsTemplate"}},"$nm":"GalleryView"},"JSArray":{"$mt":"ifc","$an":{"shared":[],"nativejs":[]},"$m":{"pop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"pop"},"push":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"push"}},"$nm":"JSArray"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$nm":"GalleryModel"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$pt":"v","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pages"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Category"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoJSON"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Page"},"JSObject":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"$mt":"cls","$m":{"arrayToArray":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"JSJSON"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$nm":"JSObject"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6","ceylon.json\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var $$$cj2=require('ceylon/json/0.6/ceylon.json-0.6');
function nativejs(){
}
exports.nativejs=nativejs;
nativejs.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['nativejs']};//nativejs.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
function JSArray($$jSArray){
}
JSArray.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSArray']};
exports.JSArray=JSArray;
function $init$JSArray(){
    if (JSArray.$$===undefined){
        $$$cl1.initTypeProto(JSArray,'ceylon.examples.photogallery::JSArray');
    }
    return JSArray;
}
exports.$init$JSArray=$init$JSArray;
$init$JSArray();
function JSJSON($$jSJSON){
}
JSJSON.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared(),nativejs()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSJSON']};
exports.JSJSON=JSJSON;
function $init$JSJSON(){
    if (JSJSON.$$===undefined){
        $$$cl1.initTypeProto(JSJSON,'ceylon.examples.photogallery::JSJSON');
    }
    return JSJSON;
}
exports.$init$JSJSON=$init$JSJSON;
$init$JSJSON();
function JSObject(values$3, $$jSObject){
    $init$JSObject();
    if ($$jSObject===undefined)$$jSObject=new JSObject.$$;
    if(values$3===undefined){values$3=$$$cl1.getEmpty();}
    $$$cj2.Object(values$3,$$jSObject);
    function toJson(){
        $$$cl1.print($$$cl1.String("converting object to json",25));
        return objectToJson$4($$jSObject);
    }
    $$jSObject.toJson=toJson;
    toJson.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['toJson']};//toJson.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:JSJSON}};
    function objectToJson$4(ceylonJSON$5){
        var returnJSON$6;
        var setReturnJSON$6=function(returnJSON$7){return returnJSON$6=returnJSON$7;};
        /*Begin dynamic block*/
        var json$8=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc('Undefined or null reference: Object'):Object)();
        $$$cl1.print((tmpvar$9=$$$cl1.String("created new JS object ",22).plus(json$8),$$$cl1.isOfType(tmpvar$9,{t:$$$cl1.Anything})?tmpvar$9:$$$cl1.throwexc('dynamic objects cannot be used here')));
        var it$10 = ceylonJSON$5.iterator();
        var item$11;while ((item$11=it$10.next())!==$$$cl1.getFinished()){
            var name$12=item$11.key;
            var entry$13=item$11.item;
            
            var case$14=entry$13;
            if ($$$cl1.isOfType(entry$13,{t:$$$cl1.String})) {
                $$$cl1.print($$$cl1.String("adding entry",12).plus(name$12).plus($$$cl1.String(" with value ",12)).plus(case$14));
                json$8.name=case$14.valueOf();
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cl1.Boolean})) {
                if(case$14){
                    json$8.name=true;
                }else {
                    json$8.name=false;
                }
            }else if ($$$cl1.isOfType(entry$13,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                json$8.name=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc('Undefined or null reference: Number'):Number)(case$14);
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.Object})) {
                json$8.name=objectToJson$4(case$14);
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.Array})) {
                json$8.name=arrayToArray$15(case$14);
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.NullInstance})) {
                json$8.name=null;
            }
        }returnJSON$6=(tmpvar$16=json$8,$$$cl1.isOfType(tmpvar$16,{t:JSJSON})?tmpvar$16:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
        return returnJSON$6;
    };objectToJson$4.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj2.Object}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['objectToJson']};//objectToJson$4.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cj2.Object},Element:{t:$$$cj2.Object}}},Return:{t:JSJSON}};
    function arrayToArray$15(ceylonArray$17){
        var returnArray$18;
        var setReturnArray$18=function(returnArray$19){return returnArray$18=returnArray$19;};
        /*Begin dynamic block*/
        var array$20=(typeof Array==='undefined'||Array===null?$$$cl1.throwexc('Undefined or null reference: Array'):Array)();
        var it$21 = ceylonArray$17.iterator();
        var entry$22;while ((entry$22=it$21.next())!==$$$cl1.getFinished()){
            
            var case$23=entry$22;
            if ($$$cl1.isOfType(entry$22,{t:$$$cl1.String})) {
                array$20.push(case$23.valueOf());
            }else if ($$$cl1.isOfType(entry$22,{t:$$$cl1.Boolean})) {
                if(case$23){
                    array$20.push(true);
                }else {
                    array$20.push(false);
                }
            }else if ($$$cl1.isOfType(entry$22,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                array$20.push(objectToJson$4((tmpvar$24=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc('Undefined or null reference: Number'):Number)(case$23),$$$cl1.isOfType(tmpvar$24,{t:$$$cj2.Object})?tmpvar$24:$$$cl1.throwexc('dynamic objects cannot be used here'))));
            }else if ($$$cl1.isOfType(entry$22,{t:$$$cj2.Object})) {
                array$20.push(objectToJson$4(case$23));
            }else if ($$$cl1.isOfType(entry$22,{t:$$$cj2.Array})) {
                array$20.push(arrayToArray$15(case$23));
            }else if ($$$cl1.isOfType(entry$22,{t:$$$cj2.NullInstance})) {
                array$20.push(null);
            }
        }returnArray$18=(tmpvar$25=array$20,$$$cl1.isOfType(tmpvar$25,{t:JSArray})?tmpvar$25:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
        return returnArray$18;
    };arrayToArray$15.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj2.Array}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['JSObject']['$m']['arrayToArray']};//arrayToArray$15.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cj2.Array},Element:{t:$$$cj2.Array}}},Return:{t:JSArray}};
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
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$26){return categories=categories$26;});
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
    var model;
    $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$27){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$27;});
    var view;
    $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$28){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$28;});
    function init(dir$29){
        $$$cl1.print($$$cl1.String("initalizing gallery",19));
        var model=GalleryModel($$gallery,dir$29);
        $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$30){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$30;});
        var view=GalleryView($$gallery);
        $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$31){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$31;});
        $$gallery.model.loadJSON();
        return $$gallery;
    }
    $$gallery.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Gallery}};
    function loaded(){
        $$$cl1.print($$$cl1.String("gallery loaded",14));
        /*Begin dynamic block*/
        var router$32=(tmpvar$33=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$33.$$===undefined?new tmpvar$33():tmpvar$33()).init($$$cl1.String("/",1).valueOf());
        router$32.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$34,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$32.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$35,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$32.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$36,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$32.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$37,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.view.displayCategories();
    }
    $$gallery.loaded=loaded;
    loaded.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['loaded']};//loaded.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function getCategory$38(name$39){
        $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$39));
        var it$40 = $$gallery.categories.iterator();
        var category$41;while ((category$41=it$40.next())!==$$$cl1.getFinished()){
            if(name$39.lowercased.equals(category$41.model.name.lowercased)){
                return category$41;
            }
        }
        return null;
    };getCategory$38.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$38.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]}};
    function routeIndex$34(){
        $$$cl1.print($$$cl1.String("routing index",13));
        var firstCategory$42;
        if((firstCategory$42=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("display first category",22));
            firstCategory$42.display((0),(0));
        }
    };routeIndex$34.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$34.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$35(categoryName$43){
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$43));
        var category$44;
        if((category$44=getCategory$38(categoryName$43))!==null){
            $$$cl1.print($$$cl1.String("display category",16));
            category$44.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routeCategory$35.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$35.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$36(categoryName$45,page$46){
        var pageNum$47=$$$cl1.Integer(page$46);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$45).plus($$$cl1.String(" page num: ",11)).plus(pageNum$47.string));
        var category$48;
        if((category$48=getCategory$38(categoryName$45))!==null){
            $$$cl1.print($$$cl1.String("display category and page",25));
            category$48.display(pageNum$47,(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePage$36.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$36.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$37(categoryName$49,page$50,photo$51){
        var pageNum$52=$$$cl1.Integer(page$50);
        var photoNum$53=$$$cl1.Integer(photo$51);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$49).plus($$$cl1.String(" page num: ",11)).plus(pageNum$52.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$51.string));
        var category$54;
        if((category$54=getCategory$38(categoryName$49))!==null){
            $$$cl1.print($$$cl1.String("display category, page and photo",32));
            category$54.display(pageNum$52,photoNum$53);
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePhoto$37.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$37.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
        $$$cl1.print($$$cl1.String("loading loal json",17));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON($$galleryModel.dir.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable($$galleryModel.parseCategories,[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}},Return:{t:$$$cl1.Anything}})).fail($$$cl1.$JsCallable(function (){
            return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    }
    $$galleryModel.loadJSON=loadJSON;
    loadJSON.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryModel']['$m']['loadJSON']};//loadJSON.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function parseCategories(categoriesJSON$55){
        $$$cl1.print($$$cl1.String("process category json",21));
        ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
            var it$56=categoriesJSON$55.iterator();
            var category$57=$$$cl1.getFinished();
            var next$category$57=function(){return category$57=it$56.next();}
            next$category$57();
            return function(){
                if(category$57!==$$$cl1.getFinished()){
                    var category$57$58=category$57;
                    var tmpvar$59=Category($$galleryModel.controller).init(category$57$58.name,category$57$58.photos,$$galleryModel.dir);
                    next$category$57();
                    return tmpvar$59;
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
    var template$60;
    $$$cl1.defineAttr($$galleryView,'template$60',function(){return template$60;},function(template$61){return template$60=template$61;});
    var tabsTemplate$62;
    var categoryTabs$63=$$$cl1.String("categoryTabs",12);
    $$$cl1.defineAttr($$galleryView,'categoryTabs$63',function(){return categoryTabs$63;},function(categoryTabs$64){return categoryTabs$63=categoryTabs$64;});
    var categoryMobile$65=$$$cl1.String("categoryMobile",14);
    $$$cl1.defineAttr($$galleryView,'categoryMobile$65',function(){return categoryMobile$65;},function(categoryMobile$66){return categoryMobile$65=categoryMobile$66;});
    var categoryDesktop$67=$$$cl1.String("categoryDesktop",15);
    $$$cl1.defineAttr($$galleryView,'categoryDesktop$67',function(){return categoryDesktop$67;},function(categoryDesktop$68){return categoryDesktop$67=categoryDesktop$68;});
    /*Begin dynamic block*/
    template$60=(tmpvar$69=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-template",17).valueOf()).html()),$$$cl1.isOfType(tmpvar$69,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$69:$$$cl1.throwexc('dynamic objects cannot be used here'));tabsTemplate$62=(tmpvar$70=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-tabs-template",22).valueOf()).html()),$$$cl1.isOfType(tmpvar$70,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$70:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
    function display(){
        var context$71=(values$72=[$$$cl1.Entry($$$cl1.String("categoryTabs",12),categoryTabs$63,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("categoryMobile",14),categoryMobile$65,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("categoryDesktop",15),categoryDesktop$67,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$72));
        var values$72;
        /*Begin dynamic block*/
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)(context$71.toJson());
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("body",4).valueOf()).html(template$60(context$71.toJson()).valueOf());
        /*End dynamic block*/
    }
    $$galleryView.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayCategories(){
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
    var model;
    $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$73){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$73;});
    var view;
    $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$74){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$74;});
    var pages=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$category,'pages',function(){return pages;},function(pages$75){return pages=pages$75;});
    function init(name$76,photos$77,dir$78){
        $$$cl1.print($$$cl1.String("initalizing category",20));
        var model=CategoryModel($$category,name$76);
        $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$79){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$79;});
        var view=CategoryView($$category);
        $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$80){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$80;});
        $$category.setPages(photos$77,dir$78);
        return $$category;
    }
    $$category.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Category}};
    function display(pageNum$81,photoNum$82){
        $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$81.string).plus($$$cl1.String(" photo",6)).plus(photoNum$82.string));
        $$category.view.display();
        var page$83;
        if((page$83=$$category.pages.get(pageNum$81))!==null){
            $$$cl1.print($$$cl1.String("display page",12));
            $$category.view.displayPage(pageNum$81);
            page$83.display(photoNum$82);
        }else {
            $$$cl1.print($$$cl1.String("display invalid page",20));
            $$category.view.displayInvalidPage();
        }
    }
    $$category.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photoM$84){
        var photo$85;
        if((photo$85=photoM$84)!==null){
            $$$cl1.print($$$cl1.String("display photo",13));
            $$category.view.displayPhoto(photo$85);
        }else {
            $$$cl1.print($$$cl1.String("display no photo",16));
            $$category.view.displayNoPhoto();
        }
    }
    $$category.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}},Return:{t:$$$cl1.Anything}};
    function setPages(photosJSON$86,dir$87){
        $$$cl1.print($$$cl1.String("set category pages",18));
        var end$88=(1).plus(photosJSON$86.size.divided((6)));
        $$category.pages=$$$cl1.Comprehension(function(){
            var it$89=(function(){var tmpvar$91=end$88;
            if (tmpvar$91>0){
            var tmpvar$92=(0);
            var tmpvar$93=tmpvar$92;
            for (var i=1; i<tmpvar$91; i++){tmpvar$93=tmpvar$93.successor;}
            return $$$cl1.Range(tmpvar$92,tmpvar$93,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$90=$$$cl1.getFinished();
            var next$i$90=function(){return i$90=it$89.next();}
            next$i$90();
            return function(){
                if(i$90!==$$$cl1.getFinished()){
                    var i$90$94=i$90;
                    var tmpvar$95=Page($$category,$$category.model.uri.plus(i$90$94.string).plus($$$cl1.String("/",1))).init(photosJSON$86.segment(i$90$94.times((6)),(6)),dir$87);
                    next$i$90();
                    return tmpvar$95;
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
    function display(){
        $$$cl1.print($$$cl1.String("display category",16));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category",9).valueOf()).each($$$cl1.$JsCallable(function (){
            return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).removeClass($$$cl1.String("active",6).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category-",10).plus($$categoryView.controller.model.name.lowercased).valueOf()).addClass($$$cl1.String("active",6).valueOf());
        /*End dynamic block*/
    }
    $$categoryView.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photo$96){
        /*Begin dynamic block*/
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
    function displayPage(page$97){
    }
    $$categoryView.displayPage=displayPage;
    displayPage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['CategoryView']['$m']['displayPage']};//displayPage.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
    $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$98){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$98;});
    var view;
    $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$99){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$99;});
    function init(photos$100,dir$101){
        $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
        var model=PageModel($$page);
        $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$102){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$102;});
        var view=PageView($$page);
        $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$103){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$103;});
        $$page.model.parsePhotos(photos$100,dir$101);
        return $$page;
    }
    $$page.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Page}};
    function display(photoNum$104){
        $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
        $$page.view.display();
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$104.string));
        $$page.parent.displayPhoto($$page.model.photos.get(photoNum$104));
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
    $$$cl1.defineAttr($$pageModel,'photos',function(){return photos;},function(photos$105){return photos=photos$105;});
    function parsePhotos(photosJSON$106,dir$107){
        $$$cl1.print($$$cl1.String("parsing photos",14));
        $$pageModel.photos=$$$cl1.Comprehension(function(){
            var it$108=photosJSON$106.iterator();
            var photo$109=$$$cl1.getFinished();
            var next$photo$109=function(){return photo$109=it$108.next();}
            next$photo$109();
            return function(){
                if(photo$109!==$$$cl1.getFinished()){
                    var photo$109$110=photo$109;
                    var tmpvar$111=Photo(photo$109$110.title,photo$109$110.caption,dir$107.plus($$$cl1.String("/",1)).plus(photo$109$110.src),dir$107.plus($$$cl1.String("/",1)).plus(photo$109$110.thumb),photo$109$110.height,photo$109$110.width,photo$109$110.alt);
                    next$photo$109();
                    return tmpvar$111;
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
    function display(){
        var it$112 = $$$cl1.entries($$pageView.controller.model.photos,{Element:{t:Photo}}).iterator();
        var item$113;while ((item$113=it$112.next())!==$$$cl1.getFinished()){
            var i$114=item$113.key;
            var photo$115=item$113.item;
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$114.string).valueOf()).load($$$cl1.$JsCallable(function (){
                return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).parent().spin(false);
            },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$114.string).valueOf()).parent().spin($$$cl1.String("small",5).valueOf());
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
function init(galleryDir$116){
    Gallery().init(galleryDir$116);
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
