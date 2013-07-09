(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$nm":"CategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"CategoryView"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"}},"$nm":"PageModel"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"Photo"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"PageView"},"$pkg-shared":"1","GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"template":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"template"},"categoryTabs":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryTabs"},"categoryMobile":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryMobile"},"categoryDesktop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"categoryDesktop"},"tabsTemplate":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"tabsTemplate"}},"$nm":"GalleryView"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$nm":"GalleryModel"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$pt":"v","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pages"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Category"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"thumb"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoJSON"},"Carrier":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$nm":"Carrier"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Page"},"JSObject":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"$mt":"cls","$m":{"arrayToArray":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Carrier"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$nm":"JSObject"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6","ceylon.json\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
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
        $$$cl1.print($$$cl1.String("converting object to json",25));
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
        $$$cl1.print((tmpvar$9=$$$cl1.String("created new JS object ",22).plus(json$7),$$$cl1.isOfType(tmpvar$9,{t:$$$cl1.Anything})?tmpvar$9:$$$cl1.throwexc('dynamic objects cannot be used here')));
        var it$10 = ceylonJSON$5.iterator();
        var item$11;while ((item$11=it$10.next())!==$$$cl1.getFinished()){
            var name$12=item$11.key;
            var entry$13=item$11.item;
            
            var case$14=entry$13;
            if ($$$cl1.isOfType(entry$13,{t:$$$cl1.String})) {
                options$8.value=case$14.valueOf();
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cl1.Boolean})) {
                if(case$14){
                    options$8.value=true;
                }else {
                    options$8.value=false;
                }
            }else if ($$$cl1.isOfType(entry$13,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                options$8.value=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc('Undefined or null reference: Number'):Number)(case$14);
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.Object})) {
                options$8.value=objectToJson$4(case$14);
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.Array})) {
                var dummy$15={dCarrier:arrayToArray$16(case$14)};
                options$8.value=dummy$15.dCarrier.array;
            }else if ($$$cl1.isOfType(entry$13,{t:$$$cj2.NullInstance})) {
                options$8.value=null;
            }
            (typeof Object==='undefined'||Object===null?$$$cl1.throwexc('Undefined or null reference: Object'):Object).defineProperty(json$7,name$12.valueOf(),options$8);
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
                array$23.push(objectToJson$4(case$26));
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cj2.Array})) {
                array$23.push(arrayToArray$16(case$26));
            }else if ($$$cl1.isOfType(entry$25,{t:$$$cj2.NullInstance})) {
                array$23.push(null);
            }
        }var dummy$28={};
        var setDummy$28=function(dummy$29){return dummy$28=dummy$29;};
        var dCarrier$30=dummy$28;
        var setDCarrier$30=function(dCarrier$31){return dCarrier$30=dCarrier$31;};
        dCarrier$30=carrier$22;dCarrier$30.array=array$23;
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
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$32){return categories=categories$32;});
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
    var model;
    $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$33){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$33;});
    var view;
    $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$34){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$34;});
    function init(dir$35){
        $$$cl1.print($$$cl1.String("initalizing gallery",19));
        var model=GalleryModel($$gallery,dir$35);
        $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$36){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$36;});
        var view=GalleryView($$gallery);
        $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$37){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$37;});
        $$gallery.model.loadJSON();
        return $$gallery;
    }
    $$gallery.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Gallery}};
    function loaded(){
        $$$cl1.print($$$cl1.String("gallery loaded",14));
        /*Begin dynamic block*/
        var router$38=(tmpvar$39=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$39.$$===undefined?new tmpvar$39():tmpvar$39()).init($$$cl1.String("/",1).valueOf());
        router$38.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$40,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$38.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$41,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$38.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$42,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$38.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$43,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.view.displayCategories();
    }
    $$gallery.loaded=loaded;
    loaded.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['loaded']};//loaded.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function getCategory$44(name$45){
        $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$45));
        var it$46 = $$gallery.categories.iterator();
        var category$47;while ((category$47=it$46.next())!==$$$cl1.getFinished()){
            if(name$45.lowercased.equals(category$47.model.name.lowercased)){
                return category$47;
            }
        }
        return null;
    };getCategory$44.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$44.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]}};
    function routeIndex$40(){
        $$$cl1.print($$$cl1.String("routing index",13));
        var firstCategory$48;
        if((firstCategory$48=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("display first category",22));
            firstCategory$48.display((0),(0));
        }
    };routeIndex$40.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$40.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$41(categoryName$49){
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$49));
        var category$50;
        if((category$50=getCategory$44(categoryName$49))!==null){
            $$$cl1.print($$$cl1.String("display category",16));
            category$50.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routeCategory$41.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$41.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$42(categoryName$51,page$52){
        var pageNum$53=$$$cl1.Integer(page$52);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$51).plus($$$cl1.String(" page num: ",11)).plus(pageNum$53.string));
        var category$54;
        if((category$54=getCategory$44(categoryName$51))!==null){
            $$$cl1.print($$$cl1.String("display category and page",25));
            category$54.display(pageNum$53,(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePage$42.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$42.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$43(categoryName$55,page$56,photo$57){
        var pageNum$58=$$$cl1.Integer(page$56);
        var photoNum$59=$$$cl1.Integer(photo$57);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$55).plus($$$cl1.String(" page num: ",11)).plus(pageNum$58.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$57.string));
        var category$60;
        if((category$60=getCategory$44(categoryName$55))!==null){
            $$$cl1.print($$$cl1.String("display category, page and photo",32));
            category$60.display(pageNum$58,photoNum$59);
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePhoto$43.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$43.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
    function parseCategories(categoriesJSON$61){
        $$$cl1.print($$$cl1.String("process category json",21));
        ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
            var it$62=categoriesJSON$61.iterator();
            var category$63=$$$cl1.getFinished();
            var next$category$63=function(){return category$63=it$62.next();}
            next$category$63();
            return function(){
                if(category$63!==$$$cl1.getFinished()){
                    var category$63$64=category$63;
                    var tmpvar$65=Category($$galleryModel.controller).init(category$63$64.name,category$63$64.photos,$$galleryModel.dir);
                    next$category$63();
                    return tmpvar$65;
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
    var template$66;
    $$$cl1.defineAttr($$galleryView,'template$66',function(){return template$66;},function(template$67){return template$66=template$67;});
    var tabsTemplate$68;
    var categoryTabs$69=$$$cl1.String("categoryTabs",12);
    $$$cl1.defineAttr($$galleryView,'categoryTabs$69',function(){return categoryTabs$69;},function(categoryTabs$70){return categoryTabs$69=categoryTabs$70;});
    var categoryMobile$71=$$$cl1.String("categoryMobile",14);
    $$$cl1.defineAttr($$galleryView,'categoryMobile$71',function(){return categoryMobile$71;},function(categoryMobile$72){return categoryMobile$71=categoryMobile$72;});
    var categoryDesktop$73=$$$cl1.String("categoryDesktop",15);
    $$$cl1.defineAttr($$galleryView,'categoryDesktop$73',function(){return categoryDesktop$73;},function(categoryDesktop$74){return categoryDesktop$73=categoryDesktop$74;});
    /*Begin dynamic block*/
    template$66=(tmpvar$75=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-template",17).valueOf()).html()),$$$cl1.isOfType(tmpvar$75,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$75:$$$cl1.throwexc('dynamic objects cannot be used here'));tabsTemplate$68=(tmpvar$76=(typeof Handlebars==='undefined'||Handlebars===null?$$$cl1.throwexc('Undefined or null reference: Handlebars'):Handlebars).compile((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("#gallery-tabs-template",22).valueOf()).html()),$$$cl1.isOfType(tmpvar$76,{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.String}}})?tmpvar$76:$$$cl1.throwexc('dynamic objects cannot be used here'));/*End dynamic block*/
    function display(){
        var context$77=(values$78=[$$$cl1.Entry($$$cl1.String("categoryTabs",12),categoryTabs$69,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("categoryMobile",14),categoryMobile$71,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}),$$$cl1.Entry($$$cl1.String("categoryDesktop",15),categoryDesktop$73,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}),JSObject(values$78));
        var values$78;
        /*Begin dynamic block*/
        var dummy$79={dCarrier:context$77.toJson()};
        $$$cl1.print((tmpvar$80=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc('Undefined or null reference: JSON'):JSON).stringify(dummy$79.dCarrier.json),$$$cl1.isOfType(tmpvar$80,{t:$$$cl1.Anything})?tmpvar$80:$$$cl1.throwexc('dynamic objects cannot be used here')));
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String("body",4).valueOf()).html(template$66(dummy$79.dCarrier.json).valueOf());
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
    $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$81){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$81;});
    var view;
    $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$82){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$82;});
    var pages=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$category,'pages',function(){return pages;},function(pages$83){return pages=pages$83;});
    function init(name$84,photos$85,dir$86){
        $$$cl1.print($$$cl1.String("initalizing category",20));
        var model=CategoryModel($$category,name$84);
        $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$87){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$87;});
        var view=CategoryView($$category);
        $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$88){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$88;});
        $$category.setPages(photos$85,dir$86);
        return $$category;
    }
    $$category.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Category}};
    function display(pageNum$89,photoNum$90){
        $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$89.string).plus($$$cl1.String(" photo",6)).plus(photoNum$90.string));
        $$category.view.display();
        var page$91;
        if((page$91=$$category.pages.get(pageNum$89))!==null){
            $$$cl1.print($$$cl1.String("display page",12));
            $$category.view.displayPage(pageNum$89);
            page$91.display(photoNum$90);
        }else {
            $$$cl1.print($$$cl1.String("display invalid page",20));
            $$category.view.displayInvalidPage();
        }
    }
    $$category.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photoM$92){
        var photo$93;
        if((photo$93=photoM$92)!==null){
            $$$cl1.print($$$cl1.String("display photo",13));
            $$category.view.displayPhoto(photo$93);
        }else {
            $$$cl1.print($$$cl1.String("display no photo",16));
            $$category.view.displayNoPhoto();
        }
    }
    $$category.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}},Return:{t:$$$cl1.Anything}};
    function setPages(photosJSON$94,dir$95){
        $$$cl1.print($$$cl1.String("set category pages",18));
        var end$96=(1).plus(photosJSON$94.size.divided((6)));
        $$category.pages=$$$cl1.Comprehension(function(){
            var it$97=(function(){var tmpvar$99=end$96;
            if (tmpvar$99>0){
            var tmpvar$100=(0);
            var tmpvar$101=tmpvar$100;
            for (var i=1; i<tmpvar$99; i++){tmpvar$101=tmpvar$101.successor;}
            return $$$cl1.Range(tmpvar$100,tmpvar$101,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$98=$$$cl1.getFinished();
            var next$i$98=function(){return i$98=it$97.next();}
            next$i$98();
            return function(){
                if(i$98!==$$$cl1.getFinished()){
                    var i$98$102=i$98;
                    var tmpvar$103=Page($$category,$$category.model.uri.plus(i$98$102.string).plus($$$cl1.String("/",1))).init(photosJSON$94.segment(i$98$102.times((6)),(6)),dir$95);
                    next$i$98();
                    return tmpvar$103;
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
    function displayPhoto(photo$104){
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
    function displayPage(page$105){
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
    $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$106){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$106;});
    var view;
    $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$107){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$107;});
    function init(photos$108,dir$109){
        $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
        var model=PageModel($$page);
        $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$110){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$110;});
        var view=PageView($$page);
        $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$111){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$111;});
        $$page.model.parsePhotos(photos$108,dir$109);
        return $$page;
    }
    $$page.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Page}};
    function display(photoNum$112){
        $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
        $$page.view.display();
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$112.string));
        $$page.parent.displayPhoto($$page.model.photos.get(photoNum$112));
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
    $$$cl1.defineAttr($$pageModel,'photos',function(){return photos;},function(photos$113){return photos=photos$113;});
    function parsePhotos(photosJSON$114,dir$115){
        $$$cl1.print($$$cl1.String("parsing photos",14));
        $$pageModel.photos=$$$cl1.Comprehension(function(){
            var it$116=photosJSON$114.iterator();
            var photo$117=$$$cl1.getFinished();
            var next$photo$117=function(){return photo$117=it$116.next();}
            next$photo$117();
            return function(){
                if(photo$117!==$$$cl1.getFinished()){
                    var photo$117$118=photo$117;
                    var tmpvar$119=Photo(photo$117$118.title,photo$117$118.caption,dir$115.plus($$$cl1.String("/",1)).plus(photo$117$118.src),dir$115.plus($$$cl1.String("/",1)).plus(photo$117$118.thumb),photo$117$118.height,photo$117$118.width,photo$117$118.alt);
                    next$photo$117();
                    return tmpvar$119;
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
        var it$120 = $$$cl1.entries($$pageView.controller.model.photos,{Element:{t:Photo}}).iterator();
        var item$121;while ((item$121=it$120.next())!==$$$cl1.getFinished()){
            var i$122=item$121.key;
            var photo$123=item$121.item;
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$122.string).valueOf()).load($$$cl1.$JsCallable(function (){
                return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).parent().spin(false);
            },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$122.string).valueOf()).parent().spin($$$cl1.String("small",5).valueOf());
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
function init(galleryDir$124){
    Gallery().init(galleryDir$124);
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
