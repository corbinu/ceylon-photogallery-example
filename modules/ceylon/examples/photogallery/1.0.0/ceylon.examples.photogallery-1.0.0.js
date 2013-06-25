(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"gallery"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$m":{"displayPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhotos"},"setPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPhotos"},"showPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}],[]],"$mt":"mthd","$nm":"showPhoto"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"}},"$nm":"PhotoCategory"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"PhotoJSON"},"PhotoCategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$nm":"PhotoCategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"Photo"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"init"},"displayCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategory"}},"$at":{"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl28=require('ceylon/language/0.6/ceylon.language-0.6');

//MethodDefinition init at run.ceylon (1:0-11:0)
function init(galleryDir$29){
    /*Begin dynamic block*/
    
    //AttributeDeclaration gallery at run.ceylon (6:2-6:48)
    var gallery$30=Gallery(galleryDir$29);
    var setGallery$30=function(gallery$31){return gallery$30=gallery$31;};
    (typeof jQuery==='undefined'||jQuery===null?$$$cl28.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON(galleryDir$29.plus($$$cl28.String("/images.json",12)).valueOf()).done($$$cl28.$JsCallable((opt$32=gallery$30,$$$cl28.JsCallable(opt$32,opt$32!==null?opt$32.setCategories:null)),[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl28.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}],{Arguments:{t:$$$cl28.Tuple,a:{Rest:{t:$$$cl28.Empty},First:{t:$$$cl28.Sequential,a:{Element:{t:PhotoCategoryJSON}}},Element:{t:$$$cl28.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}},Return:{t:$$$cl28.Anything}})).fail(function (){
        return (typeof alert==='undefined'||alert===null?$$$cl28.throwexc('Undefined or null reference: alert'):alert)($$$cl28.String("Error could not load image file",31).valueOf());
    });
    /*End dynamic block*/
    var opt$32;
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl28.String}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl28.Tuple,a:{Rest:{t:$$$cl28.Empty},First:{t:$$$cl28.String},Element:{t:$$$cl28.String}}},Return:{t:$$$cl28.Anything}};

//ClassDefinition Gallery at run.ceylon (14:0-52:0)
function Gallery(dir, $$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    $$gallery.dir=dir;
    
    //AttributeDeclaration categories at run.ceylon (15:1-15:48)
    $$gallery.categories$33_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl28.getEmpty();
    return $$gallery;
}
Gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl28.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']};
function $init$Gallery(){
    if (Gallery.$$===undefined){
        $$$cl28.initTypeProto(Gallery,'ceylon.examples.photogallery::Gallery',$$$cl28.Basic);
        (function($$gallery){
            
            //AttributeDeclaration categories at run.ceylon (15:1-15:48)
            $$$cl28.defineAttr($$gallery,'categories',function(){return this.categories$33_;},function(categories$34){return this.categories$33_=categories$34;});
            
            //MethodDefinition setCategories at run.ceylon (17:1-20:1)
            $$gallery.setCategories=function setCategories(categoriesJSON$35){
                var $$gallery=this;
                $$gallery.categories=$$$cl28.Comprehension(function(){
                    //Comprehension at run.ceylon (18:16-18:69)
                    var it$36=categoriesJSON$35.iterator();
                    var category$37=$$$cl28.getFinished();
                    var next$category$37=function(){return category$37=it$36.next();}
                    next$category$37();
                    return function(){
                        if(category$37!==$$$cl28.getFinished()){
                            var category$37$38=category$37;
                            var tmpvar$39=$$gallery.getCategory$40(category$37$38);
                            next$category$37();
                            return tmpvar$39;
                        }
                        return $$$cl28.getFinished();
                    }
                },{Absent:{t:$$$cl28.Null},Element:{t:PhotoCategory}}).sequence;
                $$gallery.init$41();
            };$$gallery.setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl28.Sequential,a:{Element:{t:PhotoCategoryJSON}}}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['setCategories']};
            //MethodDefinition displayCategory at run.ceylon (22:1-32:1)
            $$gallery.displayCategory=function displayCategory(name$42){
                var $$gallery=this;
                //'for' statement at run.ceylon (23:2-28:2)
                var it$43 = $$gallery.categories.iterator();
                var category$44;while ((category$44=it$43.next())!==$$$cl28.getFinished()){
                    if(name$42.equals(category$44.name)){
                        category$44.displayPhotos($$gallery.dir);
                        return ;
                    }
                }
                /*Begin dynamic block*/
                (typeof alert==='undefined'||alert===null?$$$cl28.throwexc('Undefined or null reference: alert'):alert)($$$cl28.String("Could not find category with name: ",35).plus(name$42).valueOf());
                /*End dynamic block*/
            };$$gallery.displayCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl28.String}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategory']};
            //MethodDefinition displayPhoto at run.ceylon (34:1-38:1)
            $$gallery.displayPhoto=function displayPhoto(photo$45){
                var $$gallery=this;
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl28.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl28.String(".display-photo",14).valueOf()).attr($$$cl28.String("src",3).valueOf(),$$gallery.dir.plus($$$cl28.String("/",1)).plus(photo$45.src).valueOf()).attr($$$cl28.String("alt",3).valueOf(),photo$45.alt.valueOf());
                /*End dynamic block*/
            };$$gallery.displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayPhoto']};
            //MethodDefinition getCategory at run.ceylon (40:1-44:1)
            $$gallery.getCategory$40=function getCategory$40(categoryJSON$46){
                var $$gallery=this;
                
                //AttributeDeclaration category at run.ceylon (41:2-41:65)
                var category$47=PhotoCategory($$gallery,categoryJSON$46.name);
                category$47.setPhotos(categoryJSON$46.photos);
                return category$47;
            };$$gallery.getCategory$40.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:PhotoCategory},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:PhotoCategoryJSON}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};
            //MethodDefinition init at run.ceylon (46:1-50:1)
            $$gallery.init$41=function init$41(){
                var $$gallery=this;
                var firstCategory$48;
                if((firstCategory$48=$$gallery.categories.get((0)))!==null){
                    $$gallery.displayCategory(firstCategory$48.name);
                }
            };$$gallery.init$41.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};
        })(Gallery.$$.prototype);
    }
    return Gallery;
}
exports.$init$Gallery=$init$Gallery;
$init$Gallery();

//ClassDefinition PhotoCategory at run.ceylon (54:0-88:0)
function PhotoCategory(gallery, name, $$photoCategory){
    $init$PhotoCategory();
    if ($$photoCategory===undefined)$$photoCategory=new PhotoCategory.$$;
    $$photoCategory.gallery=gallery;
    $$photoCategory.name=name;
    
    //AttributeDeclaration photos at run.ceylon (55:1-55:36)
    $$photoCategory.photos$49_=/*anotaciones:ceylon.language::Shared,ceylon.language::Variable,*/$$$cl28.getEmpty();
    return $$photoCategory;
}
PhotoCategory.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl28.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']};
function $init$PhotoCategory(){
    if (PhotoCategory.$$===undefined){
        $$$cl28.initTypeProto(PhotoCategory,'ceylon.examples.photogallery::PhotoCategory',$$$cl28.Basic);
        (function($$photoCategory){
            
            //AttributeDeclaration photos at run.ceylon (55:1-55:36)
            $$$cl28.defineAttr($$photoCategory,'photos',function(){return this.photos$49_;},function(photos$50){return this.photos$49_=photos$50;});
            
            //MethodDefinition setPhotos at run.ceylon (57:1-59:1)
            $$photoCategory.setPhotos=function setPhotos(photosJSON$51){
                var $$photoCategory=this;
                $$photoCategory.photos=$$$cl28.Comprehension(function(){
                    //Comprehension at run.ceylon (58:14-58:106)
                    var it$52=photosJSON$51.iterator();
                    var photo$53=$$$cl28.getFinished();
                    var next$photo$53=function(){return photo$53=it$52.next();}
                    next$photo$53();
                    return function(){
                        if(photo$53!==$$$cl28.getFinished()){
                            var photo$53$54=photo$53;
                            var tmpvar$55=Photo(photo$53$54.src,photo$53$54.height,photo$53$54.width,photo$53$54.alt,photo$53$54.span);
                            next$photo$53();
                            return tmpvar$55;
                        }
                        return $$$cl28.getFinished();
                    }
                },{Absent:{t:$$$cl28.Null},Element:{t:Photo}}).sequence;
            };$$photoCategory.setPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl28.Sequential,a:{Element:{t:PhotoJSON}}}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['setPhotos']};
            //MethodDefinition showPhoto at run.ceylon (61:1-63:1)
            $$photoCategory.showPhoto$56=function showPhoto$56(photo$57){
                var $$photoCategory=this;
                return function(){
                    var $$photoCategory=this;
                    $$photoCategory.gallery.displayPhoto(photo$57);
                }
            };$$photoCategory.showPhoto$56.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['showPhoto']};
            //MethodDefinition displayPhotos at run.ceylon (65:1-85:1)
            $$photoCategory.displayPhotos=function displayPhotos(dir$58){
                var $$photoCategory=this;
                var firstPhoto$59;
                if((firstPhoto$59=$$photoCategory.photos.get((0)))!==null){
                    $$photoCategory.gallery.displayPhoto(firstPhoto$59);
                }
                
                //AttributeDeclaration i at run.ceylon (70:2-70:24)
                var i$60=(0);
                var setI$60=function(i$61){return i$60=i$61;};
                //'for' statement at run.ceylon (71:2-84:2)
                var it$62 = $$photoCategory.photos.iterator();
                var photo$63;while ((photo$63=it$62.next())!==$$$cl28.getFinished()){
                    
                    //AttributeDeclaration photoname at run.ceylon (72:3-72:40)
                    var photoname$64=$$$cl28.String("photo",5).plus(i$60.string);
                    (oldi$65=i$60,i$60=oldi$65.successor,oldi$65);
                    var oldi$65;
                    /*Begin dynamic block*/
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl28.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl28.String(".image-grid",11).valueOf()).append($$$cl28.String("<li class=\"span",15).plus(photo$63.span.string).plus($$$cl28.String("\"><a href=\"#\" class=\"thumbnail ",31)).plus(photoname$64).plus($$$cl28.String("\"><img src=\"",12)).plus(dir$58).plus($$$cl28.String("/",1)).plus(photo$63.src).plus($$$cl28.String("\" alt=\"",7)).plus(photo$63.alt).plus($$$cl28.String("\" width=\"",9)).plus(photo$63.width.string).plus($$$cl28.String("\" height=\"",10)).plus(photo$63.height.string).plus($$$cl28.String("\"></a></li>",11)).valueOf());
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl28.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl28.String(".",1).plus(photoname$64).valueOf()).click($$$cl28.$JsCallable($$photoCategory.showPhoto$56(photo$63),[],{Arguments:{t:$$$cl28.Empty},Return:{t:$$$cl28.Anything}}));
                    /*End dynamic block*/
                }
            };$$photoCategory.displayPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl28.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl28.String}}],$an:function(){return[$$$cl28.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['displayPhotos']};
        })(PhotoCategory.$$.prototype);
    }
    return PhotoCategory;
}
exports.$init$PhotoCategory=$init$PhotoCategory;
$init$PhotoCategory();

//ClassDefinition Photo at run.ceylon (89:0-89:117)
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
Photo.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl28.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Photo']};
function $init$Photo(){
    if (Photo.$$===undefined){
        $$$cl28.initTypeProto(Photo,'ceylon.examples.photogallery::Photo',$$$cl28.Basic);
    }
    return Photo;
}
exports.$init$Photo=$init$Photo;
$init$Photo();

//ClassDefinition PhotoCategoryJSON at run.ceylon (91:0-91:72)
function PhotoCategoryJSON(name, photos, $$photoCategoryJSON){
    $init$PhotoCategoryJSON();
    if ($$photoCategoryJSON===undefined)$$photoCategoryJSON=new PhotoCategoryJSON.$$;
    $$photoCategoryJSON.name=name;
    $$photoCategoryJSON.photos=photos;
    return $$photoCategoryJSON;
}
PhotoCategoryJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl28.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategoryJSON']};
function $init$PhotoCategoryJSON(){
    if (PhotoCategoryJSON.$$===undefined){
        $$$cl28.initTypeProto(PhotoCategoryJSON,'ceylon.examples.photogallery::PhotoCategoryJSON',$$$cl28.Basic);
    }
    return PhotoCategoryJSON;
}
exports.$init$PhotoCategoryJSON=$init$PhotoCategoryJSON;
$init$PhotoCategoryJSON();

//ClassDefinition PhotoJSON at run.ceylon (92:0-92:121)
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
PhotoJSON.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl28.Basic},satisfies:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoJSON']};
function $init$PhotoJSON(){
    if (PhotoJSON.$$===undefined){
        $$$cl28.initTypeProto(PhotoJSON,'ceylon.examples.photogallery::PhotoJSON',$$$cl28.Basic);
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
