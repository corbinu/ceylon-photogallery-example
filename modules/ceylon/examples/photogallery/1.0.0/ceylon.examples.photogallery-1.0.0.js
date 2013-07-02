(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"}]],"$mt":"mthd","$nm":"routeCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoCategory"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoCategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoCategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"init"},"displayCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategory"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoCategory"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0","ceylon.examples.photogallery.gallery":{"$pkg-shared":"1","PhotoCategory":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"gallery"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"num"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPhotos"},"displayThumbnails":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayThumbnails"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"},"pages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pages"}},"$nm":"PhotoCategory"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoJSON"},"PhotoCategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoCategoryJSON"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"span"}],"$mt":"cls","$an":{"shared":[]},"$nm":"Photo"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var $$$cep2=require('ceylon/examples/photogallery/1.0.0/ceylon.examples.photogallery-1.0.0');
function Gallery(dir, $$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    var categories=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$3){return categories=categories$3;});
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
    function setCategories(categoriesJSON$4){
        $$gallery.categories=$$$cl1.Comprehension(function(){
            var it$5=categoriesJSON$4.iterator();
            var category$6=$$$cl1.getFinished();
            var next$category$6=function(){return category$6=it$5.next();}
            next$category$6();
            return function(){
                if(category$6!==$$$cl1.getFinished()){
                    var category$6$7=category$6;
                    var tmpvar$8=getCategory$9(category$6$7);
                    next$category$6();
                    return tmpvar$8;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cep2.PhotoCategory$gallery}}).sequence;
        init$10();
    }
    $$gallery.setCategories=setCategories;
    setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['setCategories']};//setCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}}}},Return:{t:$$$cl1.Anything}};
    function displayCategories(){
        var it$11 = $$gallery.categories.iterator();
        var category$12;while ((category$12=it$11.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".catagories",11).valueOf()).append($$$cl1.String("<li class=\"category category-",29).plus(category$12.name.lowercased).plus($$$cl1.String("\"><a href=\"#/",13)).plus(category$12.name.lowercased).plus($$$cl1.String("\">",2)).plus(category$12.name).plus($$$cl1.String("</a></li>",9)).valueOf());
            /*End dynamic block*/
        }
    }
    $$gallery.displayCategories=displayCategories;
    displayCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategories']};//displayCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayCategory(name$13,page$14){
        var found$15=false;
        var setFound$15=function(found$16){return found$15=found$16;};
        var it$17 = $$gallery.categories.iterator();
        var category$18;while ((category$18=it$17.next())!==$$$cl1.getFinished()){
            if(name$13.lowercased.equals(category$18.name.lowercased)){
                found$15=true;
                break;
            }
        }
        if(found$15){
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category",9).valueOf()).each($$$cl1.$JsCallable(function (){
                return (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)((typeof this==='undefined'||this===null?$$$cl1.throwexc('Undefined or null reference: this'):this)).removeClass($$$cl1.String("active",6).valueOf());
            },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
            /*End dynamic block*/
            var it$19 = $$gallery.categories.iterator();
            var category$20;while ((category$20=it$19.next())!==$$$cl1.getFinished()){
                if(name$13.lowercased.equals(category$20.name.lowercased)){
                    $$$cl1.print($$$cl1.String("Display category with name: ",28).plus(name$13).plus($$$cl1.String(" and page: ",11)).plus(page$14.string));
                    /*Begin dynamic block*/
                    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".category-",10).plus(category$20.name.lowercased).valueOf()).addClass($$$cl1.String("active",6).valueOf());
                    /*End dynamic block*/
                    category$20.displayPage(page$14);
                }
            }
        }else {
            $$$cl1.print($$$cl1.String("could not find category with name: ",35).plus(name$13));
        }
    }
    $$gallery.displayCategory=displayCategory;
    displayCategory.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['displayCategory']};//displayCategory.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function getCategory$9(categoryJSON$21){
        var category$22=$$$cep2.PhotoCategory$gallery($$gallery,categoryJSON$21.name);
        category$22.setPhotos(categoryJSON$21.photos);
        return category$22;
    };getCategory$9.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cep2.PhotoCategory$gallery},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:$$$cep2.PhotoCategoryJSON$gallery}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$9.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cep2.PhotoCategoryJSON$gallery},Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}},Return:{t:$$$cep2.PhotoCategory$gallery}};
    function init$10(){
        /*Begin dynamic block*/
        var router$23=(tmpvar$24=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$24.$$===undefined?new tmpvar$24():tmpvar$24()).init($$$cl1.String("/",1).valueOf());
        router$23.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$25,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$23.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$26,[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$23.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$27,[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$23.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$28,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        $$gallery.displayCategories();
    };init$10.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init$10.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeIndex$25(){
        var firstCategory$29;
        if((firstCategory$29=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("routing first category",22));
            $$gallery.displayCategory(firstCategory$29.name,(1));
        }else {
            $$$cl1.print($$$cl1.String("no categories to display",24));
        }
    };routeIndex$25.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$25.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$26(category$30){
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(category$30));
        $$gallery.displayCategory(category$30,(1));
    };routeCategory$26.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$26.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$27(category$31,page$32){
        var pageNum$33=$$$cl1.Integer(page$32);
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(category$31).plus($$$cl1.String(" and page: ",11)).plus(pageNum$33.string));
        $$gallery.displayCategory(category$31,pageNum$33);
    };routePage$27.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$27.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$28(categoryName$34,page$35,photo$36){
        var pageNum$37=$$$cl1.Integer(page$35);
        var photoNum$38=$$$cl1.Integer(photo$36);
        $$$cl1.print($$$cl1.String("routing category: ",18).plus(categoryName$34).plus($$$cl1.String(" and page: ",11)).plus(pageNum$37.string).plus($$$cl1.String(" with photo: ",13)).plus(photoNum$38.string));
        $$gallery.displayCategory(categoryName$34,pageNum$37);
        var it$39 = $$gallery.categories.iterator();
        var category$40;while ((category$40=it$39.next())!==$$$cl1.getFinished()){
            if(categoryName$34.lowercased.equals(category$40.name.lowercased)){
                $$$cl1.print($$$cl1.String("found category",14));
                category$40.displayPhoto(photoNum$38);
                return ;
            }
        }
    };routePhoto$28.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$28.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
function init(galleryDir$41){
    /*Begin dynamic block*/
    var gallery$42=Gallery(galleryDir$41);
    var setGallery$42=function(gallery$43){return gallery$42=gallery$43;};
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON(galleryDir$41.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable((opt$44=gallery$42,$$$cl1.JsCallable(opt$44,opt$44!==null?opt$44.setCategories:null)),[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.PhotoCategoryJSON$gallery}}}}},Return:{t:$$$cl1.Anything}})).fail($$$cl1.$JsCallable(function (){
        return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
    },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
    var opt$44;
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function PhotoCategory$gallery(gallery, name, $$photoCategory){
    $init$PhotoCategory$gallery();
    if ($$photoCategory===undefined)$$photoCategory=new PhotoCategory$gallery.$$;
    $$photoCategory.gallery=gallery;
    $$photoCategory.name=name;
    var photos=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$photoCategory,'photos',function(){return photos;},function(photos$45){return photos=photos$45;});
    var pages=(1);
    $$$cl1.defineAttr($$photoCategory,'pages',function(){return pages;},function(pages$46){return pages=pages$46;});
    function setPhotos(photosJSON$47){
        $$photoCategory.photos=$$$cl1.Comprehension(function(){
            var it$48=photosJSON$47.iterator();
            var photo$49=$$$cl1.getFinished();
            var next$photo$49=function(){return photo$49=it$48.next();}
            next$photo$49();
            return function(){
                if(photo$49!==$$$cl1.getFinished()){
                    var photo$49$50=photo$49;
                    var tmpvar$51=Photo$gallery(photo$49$50.title,photo$49$50.caption,photo$49$50.src,photo$49$50.height,photo$49$50.width,photo$49$50.alt,photo$49$50.span);
                    next$photo$49();
                    return tmpvar$51;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Photo$gallery}}).sequence;
        ($$photoCategory.pages=$$photoCategory.pages.plus($$photoCategory.photos.size.divided((6))));
        $$$cl1.print($$$cl1.String("number of pages: ",17).plus($$photoCategory.pages.string));
    }
    $$photoCategory.setPhotos=setPhotos;
    setPhotos.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON$gallery}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategory']['$m']['setPhotos']};//setPhotos.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON$gallery}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON$gallery}}}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(num$52){
        var photo$53;
        if((photo$53=$$photoCategory.photos.get(num$52))!==null){
            $$$cl1.print($$$cl1.String("displaying photo num: ",22).plus(num$52.string));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-photo",14).valueOf()).attr($$$cl1.String("src",3).valueOf(),$$photoCategory.gallery.dir.plus($$$cl1.String("/",1)).plus(photo$53.src).valueOf()).attr($$$cl1.String("alt",3).valueOf(),photo$53.alt.valueOf());
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-title",14).valueOf()).text(photo$53.title.valueOf());
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-caption",16).valueOf()).text(photo$53.caption.valueOf());
            /*End dynamic block*/
        }else {
            $$$cl1.print($$$cl1.String("could not find photo num: ",26).plus(num$52.string));
        }
    }
    $$photoCategory.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'num',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategory']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPage(page$54){
        $$$cl1.print($$$cl1.String("display page num: ",18).plus(page$54.string));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).empty();
        /*End dynamic block*/
        if($$photoCategory.pages.compare((1)).equals($$$cl1.getLarger())){
            var append$55=$$$cl1.String("<ul>",4);
            var setAppend$55=function(append$56){return append$55=append$56;};
            if(page$54.compare((1)).equals($$$cl1.getLarger())){
                (append$55=append$55.plus($$$cl1.String("<li><a href=\"#/",15).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$54.minus((1)).string).plus($$$cl1.String("\">Prev</a></li>",15))));
            }else {
                (append$55=append$55.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Prev</a></li>",46)));
            }
            var it$57 = (function(){var tmpvar$59=$$photoCategory.pages;
            if (tmpvar$59>0){
            var tmpvar$60=(1);
            var tmpvar$61=tmpvar$60;
            for (var i=1; i<tmpvar$59; i++){tmpvar$61=tmpvar$61.successor;}
            return $$$cl1.Range(tmpvar$60,tmpvar$61,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$58;while ((i$58=it$57.next())!==$$$cl1.getFinished()){
                (append$55=append$55.plus($$$cl1.String("<li",3)));
                if(i$58.equals(page$54)){
                    (append$55=append$55.plus($$$cl1.String(" class=\"active\"",15)));
                }
                (append$55=append$55.plus($$$cl1.String("><a href=\"#/",12).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(i$58.string).plus($$$cl1.String("\">",2)).plus(i$58.string).plus($$$cl1.String("</a></li>",9))));
            }
            if(page$54.compare($$photoCategory.pages).equals($$$cl1.getSmaller())){
                (append$55=append$55.plus($$$cl1.String("<li><a href=\"#/",15).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$54.plus((1)).string).plus($$$cl1.String("\">Next</a></li>",15))));
            }else {
                (append$55=append$55.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Next</a></li>",46)));
            }
            (append$55=append$55.plus($$$cl1.String("</ul>",5)));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).append(append$55.valueOf());
            /*End dynamic block*/
        }
        $$photoCategory.displayThumbnails(page$54);
    }
    $$photoCategory.displayPage=displayPage;
    displayPage.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategory']['$m']['displayPage']};//displayPage.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayThumbnails(page$62){
        $$$cl1.print($$$cl1.String("display thumbnails page num: ",29).plus(page$62.string));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).empty();
        /*End dynamic block*/
        var i$63=page$62.minus((1)).times((6));
        var setI$63=function(i$64){return i$63=i$64;};
        $$$cl1.print($$$cl1.String("thumbnails start: ",18).plus(i$63.string));
        $$$cl1.print($$$cl1.String("thumbnails end: ",16).plus(page$62.times((6)).string));
        while(i$63.compare(page$62.times((6))).equals($$$cl1.getSmaller())){
            var photo$65;
            if((photo$65=$$photoCategory.photos.get(i$63))!==null){
                $$$cl1.print($$$cl1.String("displaying thumbnail: ",22).plus(i$63.string));
                /*Begin dynamic block*/
                (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).append($$$cl1.String("<li class=\"span",15).plus(photo$65.span.string).plus($$$cl1.String("\"><a href=\"#/",13)).plus($$photoCategory.name.lowercased).plus($$$cl1.String("/",1)).plus(page$62.string).plus($$$cl1.String("/",1)).plus(i$63.string).plus($$$cl1.String("\" class=\"thumbnail\"><img src=\"",30)).plus($$photoCategory.gallery.dir).plus($$$cl1.String("/",1)).plus(photo$65.src).plus($$$cl1.String("\" alt=\"",7)).plus(photo$65.alt).plus($$$cl1.String("\" width=\"",9)).plus(photo$65.width.string).plus($$$cl1.String("\" height=\"",10)).plus(photo$65.height.string).plus($$$cl1.String("\"></a></li>",11)).valueOf());
                /*End dynamic block*/
            }
            (oldi$66=i$63,i$63=oldi$66.successor,oldi$66);
            var oldi$66;
        }
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(page$62.minus((1)).times((6)).string));
        $$photoCategory.displayPhoto(page$62.minus((1)).times((6)));
    }
    $$photoCategory.displayThumbnails=displayThumbnails;
    displayThumbnails.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategory']['$m']['displayThumbnails']};//displayThumbnails.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    return $$photoCategory;
}
PhotoCategory$gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategory']};
exports.PhotoCategory$gallery=PhotoCategory$gallery;
function $init$PhotoCategory$gallery(){
    if (PhotoCategory$gallery.$$===undefined){
        $$$cl1.initTypeProto(PhotoCategory$gallery,'ceylon.examples.photogallery.gallery::PhotoCategory',$$$cl1.Basic);
    }
    return PhotoCategory$gallery;
}
exports.$init$PhotoCategory$gallery=$init$PhotoCategory$gallery;
$init$PhotoCategory$gallery();
function PhotoCategoryJSON$gallery(name, photos, $$photoCategoryJSON){
    $init$PhotoCategoryJSON$gallery();
    if ($$photoCategoryJSON===undefined)$$photoCategoryJSON=new PhotoCategoryJSON$gallery.$$;
    return $$photoCategoryJSON;
}
PhotoCategoryJSON$gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoCategoryJSON']};
exports.PhotoCategoryJSON$gallery=PhotoCategoryJSON$gallery;
function $init$PhotoCategoryJSON$gallery(){
    if (PhotoCategoryJSON$gallery.$$===undefined){
        $$$cl1.initTypeProto(PhotoCategoryJSON$gallery,'ceylon.examples.photogallery.gallery::PhotoCategoryJSON',$$$cl1.Basic);
    }
    return PhotoCategoryJSON$gallery;
}
exports.$init$PhotoCategoryJSON$gallery=$init$PhotoCategoryJSON$gallery;
$init$PhotoCategoryJSON$gallery();
function Photo$gallery(title, caption, src, height, width, alt, span, $$photo){
    $init$Photo$gallery();
    if ($$photo===undefined)$$photo=new Photo$gallery.$$;
    $$photo.title=title;
    $$photo.caption=caption;
    $$photo.src=src;
    $$photo.height=height;
    $$photo.width=width;
    $$photo.alt=alt;
    $$photo.span=span;
    return $$photo;
}
Photo$gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['Photo']};
exports.Photo$gallery=Photo$gallery;
function $init$Photo$gallery(){
    if (Photo$gallery.$$===undefined){
        $$$cl1.initTypeProto(Photo$gallery,'ceylon.examples.photogallery.gallery::Photo',$$$cl1.Basic);
    }
    return Photo$gallery;
}
exports.$init$Photo$gallery=$init$Photo$gallery;
$init$Photo$gallery();
function PhotoJSON$gallery(title, caption, src, height, width, alt, span, $$photoJSON){
    $init$PhotoJSON$gallery();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON$gallery.$$;
    $$photoJSON.title=title;
    $$photoJSON.caption=caption;
    $$photoJSON.src=src;
    $$photoJSON.height=height;
    $$photoJSON.width=width;
    $$photoJSON.alt=alt;
    $$photoJSON.span=span;
    return $$photoJSON;
}
PhotoJSON$gallery.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery.gallery',d:$$METAMODEL$$['ceylon.examples.photogallery.gallery']['PhotoJSON']};
exports.PhotoJSON$gallery=PhotoJSON$gallery;
function $init$PhotoJSON$gallery(){
    if (PhotoJSON$gallery.$$===undefined){
        $$$cl1.initTypeProto(PhotoJSON$gallery,'ceylon.examples.photogallery.gallery::PhotoJSON',$$$cl1.Basic);
    }
    return PhotoJSON$gallery;
}
exports.$init$PhotoJSON$gallery=$init$PhotoJSON$gallery;
$init$PhotoJSON$gallery();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
