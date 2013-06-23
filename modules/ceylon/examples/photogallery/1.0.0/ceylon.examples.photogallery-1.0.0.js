(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","setPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"prm","$pt":"v","$nm":"photos"}]],"$mt":"mthd","$nm":"setPhotos"},"PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$nm":"PhotoCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"prm","$pt":"v","$nm":"categories"}]],"$mt":"mthd","$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"Photo"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function init(galleryDir$2){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON(galleryDir$2.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable(setCategories,[{$nm:'categories',$mt:'prm',$t:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}},Element:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}}}},Return:{t:$$$cl1.Anything}})).fail(function (){
        return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
    });
    /*End dynamic block*/
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function setCategories(categories$3){
    var it$4 = categories$3.iterator();
    var category$5;while ((category$5=it$4.next())!==$$$cl1.getFinished()){
        setPhotos(category$5.photos);
    }
};setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categories',$mt:'prm',$t:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['setCategories']};//setCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}},Element:{t:$$$cl1.Collection,a:{Element:{t:PhotoCategory}}}}},Return:{t:$$$cl1.Anything}};
function setPhotos(photos$6){
    var it$7 = photos$6.iterator();
    var photo$8;while ((photo$8=it$7.next())!==$$$cl1.getFinished()){
        /*Begin dynamic block*/
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Got photo: ",11).plus(photo$8.src).valueOf());
        /*End dynamic block*/
    }
};setPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Collection,a:{Element:{t:Photo}}}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['setPhotos']};//setPhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Collection,a:{Element:{t:Photo}}},Element:{t:$$$cl1.Collection,a:{Element:{t:Photo}}}}},Return:{t:$$$cl1.Anything}};
function PhotoCategory(photos, $$photoCategory){
    $init$PhotoCategory();
    if ($$photoCategory===undefined)$$photoCategory=new PhotoCategory.$$;
    $$photoCategory.photos=photos;
    return $$photoCategory;
}
PhotoCategory.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']};
function $init$PhotoCategory(){
    if (PhotoCategory.$$===undefined){
        $$$cl1.initTypeProto(PhotoCategory,'ceylon.examples.photogallery::PhotoCategory',$$$cl1.Basic);
    }
    return PhotoCategory;
}
exports.$init$PhotoCategory=$init$PhotoCategory;
$init$PhotoCategory();
function Photo(src, height, width, span, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.src=src;
    return $$photo;
}
Photo.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Photo']};
function $init$Photo(){
    if (Photo.$$===undefined){
        $$$cl1.initTypeProto(Photo,'ceylon.examples.photogallery::Photo',$$$cl1.Basic);
    }
    return Photo;
}
exports.$init$Photo=$init$Photo;
$init$Photo();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
