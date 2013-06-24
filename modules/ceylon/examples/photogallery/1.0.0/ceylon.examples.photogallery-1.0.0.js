(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"gallery"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$m":{"displayPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhotos"},"setPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"}},"$nm":"PhotoCategory"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"PhotoJSON"},"PhotoCategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$nm":"PhotoCategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"Photo"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"init"},"displayCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategory"}},"$at":{"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
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
        init$13();
    }
    $$gallery.setCategories=setCategories;
    setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['setCategories']};//setCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}},Return:{t:$$$cl1.Anything}};
    function displayCategory(name$14){
        var it$15 = $$gallery.categories.iterator();
        var category$16;while ((category$16=it$15.next())!==$$$cl1.getFinished()){
            if(name$14.equals(category$16.name)){
                category$16.displayPhotos($$gallery.dir);
                return ;
            }
        }
        /*Begin dynamic block*/
        (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Could not find category with name: ",35).plus(name$14).valueOf());
        /*End dynamic block*/
    }
    $$gallery.displayCategory=displayCategory;
    displayCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategory']};//displayCategory.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photo$17){
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-photo",14).valueOf()).attr($$$cl1.String("src",3).valueOf(),$$gallery.dir.plus($$$cl1.String("/",1)).plus(photo$17.src).valueOf()).attr($$$cl1.String("alt",3).valueOf(),photo$17.alt.valueOf());
        /*End dynamic block*/
    }
    $$gallery.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Photo},Element:{t:Photo}}},Return:{t:$$$cl1.Anything}};
    function getCategory$12(categoryJSON$18){
        var category$19=PhotoCategory($$gallery,categoryJSON$18.name);
        category$19.setPhotos(categoryJSON$18.photos);
        return category$19;
    };getCategory$12.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:PhotoCategory},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:PhotoCategoryJSON}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$12.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:PhotoCategoryJSON},Element:{t:PhotoCategoryJSON}}},Return:{t:PhotoCategory}};
    function init$13(){
        var firstCategory$20=$$gallery.categories.get((0));
        var firstCategory$21;
        if((firstCategory$21=firstCategory$20)!==null){
            $$gallery.displayCategory(firstCategory$21.name);
        }
    };init$13.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init$13.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
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
function PhotoCategory(gallery, name, $$photoCategory){
    $init$PhotoCategory();
    if ($$photoCategory===undefined)$$photoCategory=new PhotoCategory.$$;
    $$photoCategory.gallery=gallery;
    $$photoCategory.name=name;
    var photos=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$photoCategory,'photos',function(){return photos;},function(photos$22){return photos=photos$22;});
    function setPhotos(photosJSON$23){
        $$photoCategory.photos=$$$cl1.Comprehension(function(){
            var it$24=photosJSON$23.iterator();
            var photo$25=$$$cl1.getFinished();
            var next$photo$25=function(){return photo$25=it$24.next();}
            next$photo$25();
            return function(){
                if(photo$25!==$$$cl1.getFinished()){
                    var photo$25$26=photo$25;
                    var tmpvar$27=Photo(photo$25$26.src,photo$25$26.height,photo$25$26.width,photo$25$26.alt,photo$25$26.span);
                    next$photo$25();
                    return tmpvar$27;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
    }
    $$photoCategory.setPhotos=setPhotos;
    setPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['setPhotos']};//setPhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}}},Return:{t:$$$cl1.Anything}};
    function displayPhotos(dir$28){
        var firstPhoto$29=$$photoCategory.photos.get((0));
        var firstPhoto$30;
        if((firstPhoto$30=firstPhoto$29)!==null){
            $$photoCategory.gallery.displayPhoto(firstPhoto$30);
        }
        var i$31=(0);
        var setI$31=function(i$32){return i$31=i$32;};
        var it$33 = $$photoCategory.photos.iterator();
        var photo$34;while ((photo$34=it$33.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            $$$cl1.print($$$cl1.String("adding photo: ",14).plus(photo$34.src));
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).append($$$cl1.String("<li class=\"span",15).plus(photo$34.span.string).plus($$$cl1.String("\"><a href=\"#\" class=\"thumbnail photo",36)).plus(i$31.string).plus($$$cl1.String("\"><img src=\"",12)).plus(dir$28).plus($$$cl1.String("/",1)).plus(photo$34.src).plus($$$cl1.String("\" alt=\"",7)).plus(photo$34.alt).plus($$$cl1.String("\" width=\"",9)).plus(photo$34.width.string).plus($$$cl1.String("\" height=\"",10)).plus(photo$34.height.string).plus($$$cl1.String("\"></a></li>",11)).valueOf());
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".photo",6).plus(i$31.string).valueOf()).click($$$cl1.$JsCallable(function (){
                return $$photoCategory.gallery.displayPhoto(photo$34);
            },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
            /*End dynamic block*/
            (oldi$35=i$31,i$31=oldi$35.successor,oldi$35);
            var oldi$35;
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
