(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"gallery"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"num"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPhotos"},"displayThumbnails":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayThumbnails"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"},"pages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pages"}},"$nm":"PhotoCategory"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"PhotoJSON"},"PhotoCategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$nm":"PhotoCategoryJSON"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$nm":"Photo"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"}]],"$mt":"mthd","$nm":"routeCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"init"},"displayCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategory"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
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
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
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
    function displayCategories(){
        var it$14 = $$gallery.categories.iterator();
        var category$15;while ((category$15=it$14.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".catagories",11).valueOf()).append($$$cl1.String("<li class=\"category category-",29).plus(category$15.name.lowercased).plus($$$cl1.String("\"><a href=\"#/",13)).plus(category$15.name.lowercased).plus($$$cl1.String("\">",2)).plus(category$15.name).plus($$$cl1.String("</a></li>",9)).valueOf());
            /*End dynamic block*/
        }
    }
    $$gallery.displayCategories=displayCategories;
    displayCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategories']};//displayCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayCategory(name$16,page$17){
        var found$18=false;
        var setFound$18=function(found$19){return found$18=found$19;};
        var it$20 = $$gallery.categories.iterator();
        var category$21;while ((category$21=it$20.next())!==$$$cl1.getFinished()){
            if(name$16.lowercased.equals(category$21.name.lowercased)){
                found$18=true;
                break;
            }
        }
        if(found$18){
            var it$22 = $$gallery.categories.iterator();
            var category$23;while ((category$23=it$22.next())!==$$$cl1.getFinished()){
                if(name$16.lowercased.equals(category$23.name.lowercased)){
                    $$$cl1.print($$$cl1.String("Display category with name: ",28).plus(name$16).plus($$$cl1.String(" and page: ",11)).plus(page$17.string));
                    /*Begin dynamic block*/
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category-",10).plus(category$23.name.lowercased).valueOf()).addClass($$$cl1.String("active",6).valueOf());
                    /*End dynamic block*/
                    category$23.displayPage(page$17);
                }else {
                    /*Begin dynamic block*/
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category-",10).plus(category$23.name.lowercased).valueOf()).removeClass($$$cl1.String("active",6).valueOf());
                    /*End dynamic block*/
                }
            }
        }else {
            $$$cl1.print($$$cl1.String("could not find category with name: ",35).plus(name$16));
        }
    }
    $$gallery.displayCategory=displayCategory;
    displayCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategory']};//displayCategory.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function getCategory$12(categoryJSON$24){
        var category$25=PhotoCategory($$gallery,categoryJSON$24.name);
        category$25.setPhotos(categoryJSON$24.photos);
        return category$25;
    };getCategory$12.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:PhotoCategory},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:PhotoCategoryJSON}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$12.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:PhotoCategoryJSON},Element:{t:PhotoCategoryJSON}}},Return:{t:PhotoCategory}};
    function init$13(){
        /*Begin dynamic block*/
        var router$26=(tmpvar$27=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$27.$$===undefined?new tmpvar$27():tmpvar$27()).init($$$cl1.String("/",1).valueOf());
        router$26.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$28,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$26.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$29,[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$26.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$30,[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$26.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$31,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.displayCategories();
    };init$13.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init$13.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeIndex$28(){
        var firstCategory$32;
        if((firstCategory$32=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("routing first category",22));
            $$gallery.displayCategory(firstCategory$32.name,(1));
        }else {
            $$$cl1.print($$$cl1.String("no categories to display",24));
        }
    };routeIndex$28.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$28.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$29(category$33){
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(category$33));
        $$gallery.displayCategory(category$33,(1));
    };routeCategory$29.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$29.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$30(category$34,page$35){
        var pageNum$36=$$$cl1.Integer(page$35);
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(category$34).plus($$$cl1.String(" and page: ",11)).plus(pageNum$36.string));
        $$gallery.displayCategory(category$34,pageNum$36);
    };routePage$30.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$30.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$31(categoryName$37,page$38,photo$39){
        var pageNum$40=$$$cl1.Integer(page$38);
        var photoNum$41=$$$cl1.Integer(photo$39);
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(categoryName$37).plus($$$cl1.String(" and page: ",11)).plus(pageNum$40.string).plus($$$cl1.String(" with photo: ",13)).plus(photoNum$41.string));
        $$gallery.displayCategory(categoryName$37,pageNum$40);
        var it$42 = $$gallery.categories.iterator();
        var category$43;while ((category$43=it$42.next())!==$$$cl1.getFinished()){
            if(categoryName$37.lowercased.equals(category$43.name.lowercased)){
                $$$cl1.print($$$cl1.String("found category",14));
                category$43.displayPhoto(photoNum$41);
                return ;
            }
        }
    };routePhoto$31.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$31.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
    $$$cl1.defineAttr($$photoCategory,'photos',function(){return photos;},function(photos$44){return photos=photos$44;});
    var pages=(1);
    $$$cl1.defineAttr($$photoCategory,'pages',function(){return pages;},function(pages$45){return pages=pages$45;});
    function setPhotos(photosJSON$46){
        $$photoCategory.photos=$$$cl1.Comprehension(function(){
            var it$47=photosJSON$46.iterator();
            var photo$48=$$$cl1.getFinished();
            var next$photo$48=function(){return photo$48=it$47.next();}
            next$photo$48();
            return function(){
                if(photo$48!==$$$cl1.getFinished()){
                    var photo$48$49=photo$48;
                    var tmpvar$50=Photo(photo$48$49.title,photo$48$49.caption,photo$48$49.src,photo$48$49.height,photo$48$49.width,photo$48$49.alt,photo$48$49.span);
                    next$photo$48();
                    return tmpvar$50;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo}}).sequence;
        ($$photoCategory.pages=$$photoCategory.pages.plus($$photoCategory.photos.size.divided((6))));
        $$$cl1.print($$$cl1.String("number of pages: ",17).plus($$photoCategory.pages.string));
    }
    $$photoCategory.setPhotos=setPhotos;
    setPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['setPhotos']};//setPhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(num$51){
        var photo$52;
        if((photo$52=$$photoCategory.photos.get(num$51))!==null){
            $$$cl1.print($$$cl1.String("displaying photo num: ",22).plus(num$51.string));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-photo",14).valueOf()).attr($$$cl1.String("src",3).valueOf(),$$photoCategory.gallery.dir.plus($$$cl1.String("/",1)).plus(photo$52.src).valueOf()).attr($$$cl1.String("alt",3).valueOf(),photo$52.alt.valueOf());
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-title",14).valueOf()).text(photo$52.title.valueOf());
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-caption",16).valueOf()).text(photo$52.caption.valueOf());
            /*End dynamic block*/
        }else {
            $$$cl1.print($$$cl1.String("could not find photo num: ",26).plus(num$51.string));
        }
    }
    $$photoCategory.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'num',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPage(page$53){
        $$$cl1.print($$$cl1.String("display page num: ",18).plus(page$53.string));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).empty();
        /*End dynamic block*/
        if($$photoCategory.pages.compare((1)).equals($$$cl1.getLarger())){
            var append$54=$$$cl1.String("<ul>",4);
            var setAppend$54=function(append$55){return append$54=append$55;};
            if(page$53.compare((1)).equals($$$cl1.getLarger())){
                (append$54=append$54.plus($$$cl1.String("<li><a href=\"#/",15).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$53.minus((1)).string).plus($$$cl1.String("\">Prev</a></li>",15))));
            }else {
                (append$54=append$54.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Prev</a></li>",46)));
            }
            var it$56 = (function(){var tmpvar$58=$$photoCategory.pages;
            if (tmpvar$58>0){
            var tmpvar$59=(1);
            var tmpvar$60=tmpvar$59;
            for (var i=1; i<tmpvar$58; i++){tmpvar$60=tmpvar$60.successor;}
            return $$$cl1.Range(tmpvar$59,tmpvar$60,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$57;while ((i$57=it$56.next())!==$$$cl1.getFinished()){
                (append$54=append$54.plus($$$cl1.String("<li",3)));
                if(i$57.equals(page$53)){
                    (append$54=append$54.plus($$$cl1.String(" class=\"active\"",15)));
                }
                (append$54=append$54.plus($$$cl1.String("><a href=\"#/",12).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(i$57.string).plus($$$cl1.String("\">",2)).plus(i$57.string).plus($$$cl1.String("</a></li>",9))));
            }
            if(page$53.compare($$photoCategory.pages).equals($$$cl1.getSmaller())){
                (append$54=append$54.plus($$$cl1.String("<li><a href=\"#/",15).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$53.plus((1)).string).plus($$$cl1.String("\">Next</a></li>",15))));
            }else {
                (append$54=append$54.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Next</a></li>",46)));
            }
            (append$54=append$54.plus($$$cl1.String("</ul>",5)));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).append(append$54.valueOf());
            /*End dynamic block*/
        }
        $$photoCategory.displayThumbnails(page$53);
    }
    $$photoCategory.displayPage=displayPage;
    displayPage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['displayPage']};//displayPage.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayThumbnails(page$61){
        $$$cl1.print($$$cl1.String("display thumbnails page num: ",29).plus(page$61.string));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).empty();
        /*End dynamic block*/
        var i$62=page$61.minus((1)).times((6));
        var setI$62=function(i$63){return i$62=i$63;};
        $$$cl1.print($$$cl1.String("thumbnails start: ",18).plus(i$62.string));
        $$$cl1.print($$$cl1.String("thumbnails end: ",16).plus(page$61.times((6)).string));
        while(i$62.compare(page$61.times((6))).equals($$$cl1.getSmaller())){
            var photo$64;
            if((photo$64=$$photoCategory.photos.get(i$62))!==null){
                $$$cl1.print($$$cl1.String("displaying thumbnail: ",22).plus(i$62.string));
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).append($$$cl1.String("<li class=\"span",15).plus(photo$64.span.string).plus($$$cl1.String("\"><a href=\"#/",13)).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$61.string).plus($$$cl1.String("/",1)).plus(i$62.string).plus($$$cl1.String("\" class=\"thumbnail\"><img src=\"",30)).plus($$photoCategory.gallery.dir).plus($$$cl1.String("/",1)).plus(photo$64.src).plus($$$cl1.String("\" alt=\"",7)).plus(photo$64.alt).plus($$$cl1.String("\" width=\"",9)).plus(photo$64.width.string).plus($$$cl1.String("\" height=\"",10)).plus(photo$64.height.string).plus($$$cl1.String("\"></a></li>",11)).valueOf());
                /*End dynamic block*/
            }
            (oldi$65=i$62,i$62=oldi$65.successor,oldi$65);
            var oldi$65;
        }
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(page$61.minus((1)).times((6)).string));
        $$photoCategory.displayPhoto(page$61.minus((1)).times((6)));
    }
    $$photoCategory.displayThumbnails=displayThumbnails;
    displayThumbnails.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['PhotoCategory']['$m']['displayThumbnails']};//displayThumbnails.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
function Photo(title, caption, src, height, width, alt, span, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.title=title;
    $$photo.caption=caption;
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
function PhotoJSON(title, caption, src, height, width, alt, span, $$photoJSON){
    $init$PhotoJSON();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON.$$;
    $$photoJSON.title=title;
    $$photoJSON.caption=caption;
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
