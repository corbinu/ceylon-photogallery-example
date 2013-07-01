(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"$pkg-shared":"1","init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"category"}]],"$mt":"mthd","$nm":"routeCategory"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"$pk":"ceylon.examples.photogallery.gallery","$nm":"Category"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery.data","$nm":"CategoryJSON"},"$mt":"prm","$pt":"v","$nm":"categoryJSON"}]],"$mt":"mthd","$nm":"getCategory"},"setCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.data","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCategories"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"init"},"displayCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategory"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$at":{"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery.gallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
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
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cep2.Category$gallery}}).sequence;
        init$10();
    }
    $$gallery.setCategories=setCategories;
    setCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['setCategories']};//setCategories.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}}}},Return:{t:$$$cl1.Anything}};
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
        var category$22=$$$cep2.Category$gallery($$gallery,categoryJSON$21.name);
        category$22.setPhotos(categoryJSON$21.photos);
        return category$22;
    };getCategory$9.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cep2.Category$gallery},$ps:[{$nm:'categoryJSON',$mt:'prm',$t:{t:$$$cep2.CategoryJSON$data}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$9.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cep2.CategoryJSON$data},Element:{t:$$$cep2.CategoryJSON$data}}},Return:{t:$$$cep2.Category$gallery}};
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
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON(galleryDir$41.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable((opt$44=gallery$42,$$$cl1.JsCallable(opt$44,opt$44!==null?opt$44.setCategories:null)),[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cep2.CategoryJSON$data}}}}},Return:{t:$$$cl1.Anything}})).fail($$$cl1.$JsCallable(function (){
        return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
    },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
    var opt$44;
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
