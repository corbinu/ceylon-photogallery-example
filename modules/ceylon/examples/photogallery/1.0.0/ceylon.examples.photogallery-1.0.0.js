(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$m":{"displayPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhotos"}},"$nm":"PhotoCategory"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"PhotoJSON"},"PhotoCategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$nm":"PhotoCategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"Photo"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$m":{"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function init(galleryDir$2){
    /*Begin dynamic block*/
    var gallery$3=Gallery(galleryDir$2);
    var setGallery$3=function(gallery$4){return gallery$3=gallery$4;};
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON(galleryDir$2.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable((opt$5=gallery$3,$$$cl1.JsCallable(opt$5,opt$5!==null?opt$5.setCategories:null)),[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}},Return:{t:$$$cl1.Anything}})).fail(function (){
        return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
    });
    /*End dynamic block*/
    var opt$5;
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function Gallery(dir, $$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    $$gallery.dir=dir;
    var categories=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$6){return categories=categories$6;});
    function setCategories(categoriesJSON$7){
        $$gallery.categories=$$$cl1.Comprehension(function(){
            var it$8=categoriesJSON$7.iterator();
            var category$9=$$$cl1.getFinished();
            var next$category$9=function(){return category$9=it$8.next();}
            next$category$9();
            return function(){
                if(category$9!==$$$cl1.getFinished()){
                    var category$9$10=category$9;
                    var tmpvar$11=getCategory$12(category$9$10);
                    next$category$9();
                    return tmpvar$11;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:PhotoCategory}}).sequence;
        $$gallery.displayCategories();
    }
    $$gallery.setCategories=setCategories;
    setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['setCategories']};//setCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}},Return:{t:$$$cl1.Anything}};
    function displayCategories(){
        var it$13 = $$gallery.categories.iterator();
        var category$14;while ((category$14=it$13.next())!==$$$cl1.getFinished()){
            category$14.displayPhotos($$gallery.dir);
        }
    }
    $$gallery.displayCategories=displayCategories;
    displayCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategories']};//displayCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function getCategory$12(categoryJSON$15){
        var photos$16=$$$cl1.Comprehension(function(){
            var it$17=categoryJSON$15.photos.iterator();
            var photo$18=$$$cl1.getFinished();
            var next$photo$18=function(){return photo$18=it$17.next();}
            next$photo$18();
            return function(){
                if(photo$18!==$$$cl1.getFinished()){
                    var photo$18$19=photo$18;
                    var tmpvar$20=Photo(photo$18$19.src,photo$18$19.height,photo$18$19.width,photo$18$19.alt,photo$18$19.span);
                    next$photo$18();
                    return tmpvar$20;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
        return PhotoCategory(categoryJSON$15.name,photos$16);
    };getCategory$12.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:PhotoCategory},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:PhotoCategoryJSON}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$12.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:PhotoCategoryJSON},Element:{t:PhotoCategoryJSON}}},Return:{t:PhotoCategory}};
    return $$gallery;
}
Gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']};
function $init$Gallery(){
    if (Gallery.$$===undefined){
        $$$cl1.initTypeProto(Gallery,'ceylon.examples.photogallery::Gallery',$$$cl1.Basic);
    }
    return Gallery;
}
exports.$init$Gallery=$init$Gallery;
$init$Gallery();
function PhotoCategory(name, photos, $$photoCategory){
    $init$PhotoCategory();
    if ($$photoCategory===undefined)$$photoCategory=new PhotoCategory.$$;
    $$photoCategory.photos=photos;
    function displayPhotos(dir$21){
        $$$cl1.print($$$cl1.String("adding photos",13));
        var it$22 = $$photoCategory.photos.iterator();
        var photo$23;while ((photo$23=it$22.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            $$$cl1.print($$$cl1.String("adding photo: ",14).plus(photo$23.src));
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).append($$$cl1.String("<li class=\"span",15).plus(photo$23.span.string).plus($$$cl1.String("\"><a href=\"#\" class=\"thumbnail\"><img src=\"",42)).plus(dir$21).plus($$$cl1.String("/",1)).plus(photo$23.src).plus($$$cl1.String("\" alt=\"",7)).plus(photo$23.alt).plus($$$cl1.String("\" width=\"",9)).plus(photo$23.width.string).plus($$$cl1.String("\" height=\"",10)).plus(photo$23.height.string).plus($$$cl1.String("\"></a></li>",11)).valueOf());
            /*End dynamic block*/
        }
    }
    $$photoCategory.displayPhotos=displayPhotos;
    displayPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['displayPhotos']};//displayPhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
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
function Photo(src, height, width, alt, span, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.src=src;
    $$photo.height=height;
    $$photo.width=width;
    $$photo.alt=alt;
    $$photo.span=span;
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
function PhotoCategoryJSON(name, photos, $$photoCategoryJSON){
    $init$PhotoCategoryJSON();
    if ($$photoCategoryJSON===undefined)$$photoCategoryJSON=new PhotoCategoryJSON.$$;
    $$photoCategoryJSON.name=name;
    $$photoCategoryJSON.photos=photos;
    return $$photoCategoryJSON;
}
PhotoCategoryJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategoryJSON']};
function $init$PhotoCategoryJSON(){
    if (PhotoCategoryJSON.$$===undefined){
        $$$cl1.initTypeProto(PhotoCategoryJSON,'ceylon.examples.photogallery::PhotoCategoryJSON',$$$cl1.Basic);
    }
    return PhotoCategoryJSON;
}
exports.$init$PhotoCategoryJSON=$init$PhotoCategoryJSON;
$init$PhotoCategoryJSON();
function PhotoJSON(src, height, width, alt, span, $$photoJSON){
    $init$PhotoJSON();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON.$$;
    $$photoJSON.src=src;
    $$photoJSON.height=height;
    $$photoJSON.width=width;
    $$photoJSON.alt=alt;
    $$photoJSON.span=span;
    return $$photoJSON;
}
PhotoJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoJSON']};
function $init$PhotoJSON(){
    if (PhotoJSON.$$===undefined){
        $$$cl1.initTypeProto(PhotoJSON,'ceylon.examples.photogallery::PhotoJSON',$$$cl1.Basic);
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
