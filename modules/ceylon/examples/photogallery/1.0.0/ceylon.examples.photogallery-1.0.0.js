(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"ceylon.examples.photogallery":{"GalleryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayInvalidCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidCategory"},"displayNoCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoCategories"},"displayCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayCategories"}},"$nm":"GalleryView"},"$pkg-shared":"1","CategoryJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"}],"$mt":"cls","$an":{"shared":[]},"$nm":"CategoryJSON"},"Category":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"parent"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Photo"}]},"$mt":"prm","$pt":"v","$nm":"photoM"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"setPages":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPages"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"pageNum"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"pages":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Page"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"pages"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"CategoryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Category"},"GalleryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parseCategories":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"CategoryJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"categoriesJSON"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parseCategories"},"loadJSON":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loadJSON"}},"$nm":"GalleryModel"},"PhotoJSON":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"PhotoJSON"},"Page":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"parent"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"uri"}],"$mt":"cls","$an":{"shared":[]},"$m":{"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photos"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photoNum"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"PageView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Page"},"init":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"galleryDir"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Run the module `ceylon.examples.photogallery`."]},"$nm":"init"},"CategoryModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$at":{"uri":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[]},"$nm":"uri"}},"$nm":"CategoryModel"},"PageModel":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"parsePhotos":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"PhotoJSON"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$pt":"v","$nm":"photosJSON"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parsePhotos"}},"$at":{"photos":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Photo"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"photos"}},"$nm":"PageModel"},"CategoryView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Category"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"displayPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPage"},"displayPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Photo"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"displayPhoto"},"displayInvalidPage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayInvalidPage"},"displayNoPhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"displayNoPhoto"},"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"CategoryView"},"Photo":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"title"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"caption"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"src"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"height"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"width"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"alt"}],"$mt":"cls","$an":{"shared":[]},"$nm":"Photo"},"PageView":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Page"},"$mt":"prm","$pt":"v","$nm":"controller"}],"$mt":"cls","$an":{"shared":[]},"$m":{"display":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"display"}},"$nm":"PageView"},"Gallery":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[]},"$m":{"routePage":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"}]],"$mt":"mthd","$nm":"routePage"},"routeCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"}]],"$mt":"mthd","$nm":"routeCategory"},"loaded":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"loaded"},"routePhoto":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"categoryName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"page"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"photo"}]],"$mt":"mthd","$nm":"routePhoto"},"routeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"routeIndex"},"getCategory":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.examples.photogallery","$nm":"Category"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"}]],"$mt":"mthd","$nm":"getCategory"},"init":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"Gallery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"init"}},"$at":{"model":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryModel"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"model"},"currentCategory":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"currentCategory"},"categories":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.examples.photogallery","$nm":"Category"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"categories"},"view":{"$t":{"$pk":"ceylon.examples.photogallery","$nm":"GalleryView"},"$mt":"attr","$an":{"shared":[],"late":[]},"$nm":"view"}},"$nm":"Gallery"}},"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.examples.photogallery","$mod-version":"1.0.0"};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function Gallery($$gallery){
    $init$Gallery();
    if ($$gallery===undefined)$$gallery=new Gallery.$$;
    var categories=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$gallery,'categories',function(){return categories;},function(categories$2){return categories=categories$2;});
    var currentCategory=$$$cl1.String("",0);
    $$$cl1.defineAttr($$gallery,'currentCategory',function(){return currentCategory;});
    var model;
    $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$3){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$3;});
    var view;
    $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$4){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$4;});
    function init(dir$5){
        $$$cl1.print($$$cl1.String("initalizing gallery",19));
        var model=GalleryModel($$gallery,dir$5);
        $$$cl1.defineAttr($$gallery,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$6){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$6;});
        var view=GalleryView($$gallery);
        $$$cl1.defineAttr($$gallery,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$7){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$7;});
        $$gallery.model.loadJSON();
        return $$gallery;
    }
    $$gallery.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Gallery}};
    function loaded(){
        $$$cl1.print($$$cl1.String("gallery loaded",14));
        /*Begin dynamic block*/
        var router$8=(tmpvar$9=(typeof Router==='undefined'?$$$cl1.throwexc('Undefined type Router'):Router),tmpvar$9.$$===undefined?new tmpvar$9():tmpvar$9()).init($$$cl1.String("/",1).valueOf());
        router$8.on($$$cl1.String("/",1).valueOf(),$$$cl1.$JsCallable(routeIndex$10,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        router$8.on($$$cl1.String("/:category",10).valueOf(),$$$cl1.$JsCallable(routeCategory$11,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        router$8.on($$$cl1.String("/:category/:page",16).valueOf(),$$$cl1.$JsCallable(routePage$12,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        router$8.on($$$cl1.String("/:category/:page/:photo",23).valueOf(),$$$cl1.$JsCallable(routePhoto$13,[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
        if($$gallery.categories.size.compare((0)).equals($$$cl1.getLarger())){
            $$gallery.view.displayCategories();
        }else {
            $$gallery.view.displayNoCategories();
        }
    }
    $$gallery.loaded=loaded;
    loaded.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['loaded']};//loaded.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function getCategory$14(name$15){
        $$$cl1.print($$$cl1.String("getting category: ",18).plus(name$15));
        var it$16 = $$gallery.categories.iterator();
        var category$17;while ((category$17=it$16.next())!==$$$cl1.getFinished()){
            if(name$15.lowercased.equals(category$17.model.name.lowercased)){
                return category$17;
            }
        }
        return null;
    };getCategory$14.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['getCategory']};//getCategory$14.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Category}]}};
    function routeIndex$10(){
        $$$cl1.print($$$cl1.String("routing index",13));
        var firstCategory$18;
        if((firstCategory$18=$$gallery.categories.get((0)))!==null){
            $$$cl1.print($$$cl1.String("display first category",22));
            firstCategory$18.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display no categories",21));
            $$gallery.view.displayNoCategories();
        }
    };routeIndex$10.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeIndex']};//routeIndex$10.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function routeCategory$11(categoryName$19){
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$19));
        var category$20;
        if((category$20=getCategory$14(categoryName$19))!==null){
            $$$cl1.print($$$cl1.String("display category",16));
            category$20.display((0),(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routeCategory$11.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routeCategory']};//routeCategory$11.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function routePage$12(categoryName$21,page$22){
        var pageNum$23=$$$cl1.Integer(page$22);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$21).plus($$$cl1.String(" page num: ",11)).plus(pageNum$23.string));
        var category$24;
        if((category$24=getCategory$14(categoryName$21))!==null){
            $$$cl1.print($$$cl1.String("display category and page",25));
            category$24.display(pageNum$23,(0));
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePage$12.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePage']};//routePage$12.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function routePhoto$13(categoryName$25,page$26,photo$27){
        var pageNum$28=$$$cl1.Integer(page$26);
        var photoNum$29=$$$cl1.Integer(photo$27);
        $$$cl1.print($$$cl1.String("route category name: ",21).plus(categoryName$25).plus($$$cl1.String(" page num: ",11)).plus(pageNum$28.string).plus($$$cl1.String(" photo num: ",12)).plus(photo$27.string));
        var category$30;
        if((category$30=getCategory$14(categoryName$25))!==null){
            $$$cl1.print($$$cl1.String("display category, page and photo",32));
            category$30.display(pageNum$28,photoNum$29);
        }else {
            $$$cl1.print($$$cl1.String("display invalid category",24));
            $$gallery.view.displayInvalidCategory();
        }
    };routePhoto$13.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'page',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photo',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Gallery']['$m']['routePhoto']};//routePhoto$13.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
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
        $$$cl1.print($$$cl1.String("laoding loal json",17));
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery).getJSON($$galleryModel.dir.plus($$$cl1.String("/images.json",12)).valueOf()).done($$$cl1.$JsCallable($$galleryModel.parseCategories,[{$nm:'categoriesJSON',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:CategoryJSON}}}}},Return:{t:$$$cl1.Anything}})).fail($$$cl1.$JsCallable(function (){
            return (typeof alert==='undefined'||alert===null?$$$cl1.throwexc('Undefined or null reference: alert'):alert)($$$cl1.String("Error could not load image file",31).valueOf());
        },[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        /*End dynamic block*/
    }
    $$galleryModel.loadJSON=loadJSON;
    loadJSON.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryModel']['$m']['loadJSON']};//loadJSON.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function parseCategories(categoriesJSON$31){
        $$$cl1.print($$$cl1.String("process category json",21));
        ($$galleryModel.controller.categories=$$$cl1.Comprehension(function(){
            var it$32=categoriesJSON$31.iterator();
            var category$33=$$$cl1.getFinished();
            var next$category$33=function(){return category$33=it$32.next();}
            next$category$33();
            return function(){
                if(category$33!==$$$cl1.getFinished()){
                    var category$33$34=category$33;
                    var tmpvar$35=Category($$galleryModel.controller).init(category$33$34.name,category$33$34.photos,$$galleryModel.dir);
                    next$category$33();
                    return tmpvar$35;
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
    $$galleryView.controller=controller;
    function displayCategories(){
        var it$36 = $$galleryView.controller.categories.iterator();
        var category$37;while ((category$37=it$36.next())!==$$$cl1.getFinished()){
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".catagories",11).valueOf()).append($$$cl1.String("<li class=\"category category-",29).plus(category$37.model.name.lowercased).plus($$$cl1.String("\"><a href=\"#/",13)).plus(category$37.model.name.lowercased).plus($$$cl1.String("\">",2)).plus(category$37.model.name).plus($$$cl1.String("</a></li>",9)).valueOf());
            /*End dynamic block*/
        }
    }
    $$galleryView.displayCategories=displayCategories;
    displayCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['displayCategories']};//displayCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function displayNoCategories(){
    }
    $$galleryView.displayNoCategories=displayNoCategories;
    displayNoCategories.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['GalleryView']['$m']['displayNoCategories']};//displayNoCategories.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
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
    $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$38){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$38;});
    var view;
    $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$39){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$39;});
    var pages=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$category,'pages',function(){return pages;},function(pages$40){return pages=pages$40;});
    function init(name$41,photos$42,dir$43){
        $$$cl1.print($$$cl1.String("initalizing category",20));
        var model=CategoryModel($$category,name$41);
        $$$cl1.defineAttr($$category,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$44){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$44;});
        var view=CategoryView($$category);
        $$$cl1.defineAttr($$category,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$45){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$45;});
        $$category.setPages(photos$42,dir$43);
        return $$category;
    }
    $$category.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Category}};
    function display(pageNum$46,photoNum$47){
        $$$cl1.print($$$cl1.String("display category ",17).plus($$category.model.name).plus($$$cl1.String(" page ",6)).plus(pageNum$46.string).plus($$$cl1.String(" photo",6)).plus(photoNum$47.string));
        $$category.view.display();
        var page$48;
        if((page$48=$$category.pages.get(pageNum$46))!==null){
            $$$cl1.print($$$cl1.String("display page",12));
            $$category.view.displayPage(pageNum$46);
            page$48.display(photoNum$47);
        }else {
            $$$cl1.print($$$cl1.String("display invalid page",20));
            $$category.view.displayInvalidPage();
        }
    }
    $$category.display=display;
    display.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'photoNum',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['display']};//display.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function displayPhoto(photoM$49){
        var photo$50;
        if((photo$50=photoM$49)!==null){
            $$$cl1.print($$$cl1.String("display photo",13));
            $$category.view.displayPhoto(photo$50);
        }else {
            $$$cl1.print($$$cl1.String("display no photo",16));
            $$category.view.displayNoPhoto();
        }
    }
    $$category.displayPhoto=displayPhoto;
    displayPhoto.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Category']['$m']['displayPhoto']};//displayPhoto.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Photo}]}}},Return:{t:$$$cl1.Anything}};
    function setPages(photosJSON$51,dir$52){
        $$$cl1.print($$$cl1.String("set category pages",18));
        var end$53=(1).plus(photosJSON$51.size.divided((6)));
        $$category.pages=$$$cl1.Comprehension(function(){
            var it$54=(function(){var tmpvar$56=end$53;
            if (tmpvar$56>0){
            var tmpvar$57=(0);
            var tmpvar$58=tmpvar$57;
            for (var i=1; i<tmpvar$56; i++){tmpvar$58=tmpvar$58.successor;}
            return $$$cl1.Range(tmpvar$57,tmpvar$58,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$55=$$$cl1.getFinished();
            var next$i$55=function(){return i$55=it$54.next();}
            next$i$55();
            return function(){
                if(i$55!==$$$cl1.getFinished()){
                    var i$55$59=i$55;
                    var tmpvar$60=Page($$category,$$category.model.uri.plus(i$55$59.string).plus($$$cl1.String("/",1))).init(photosJSON$51.segment(i$55$59.times((6)),(6)),dir$52);
                    next$i$55();
                    return tmpvar$60;
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
    function displayPhoto(photo$61){
        /*Begin dynamic block*/
        var photoDisplay$62=(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-photo",14).valueOf());
        photoDisplay$62.attr($$$cl1.String("src",3).valueOf(),photo$61.src.valueOf()).attr($$$cl1.String("alt",3).valueOf(),photo$61.alt.valueOf());
        var width$63;
        if((width$63=photo$61.width)!==null){
            photoDisplay$62.attr($$$cl1.String("width",5).valueOf(),width$63);
        }else {
            photoDisplay$62.removeAttr($$$cl1.String("width",5).valueOf());
        }var height$64;
        if((height$64=photo$61.height)!==null){
            photoDisplay$62.attr($$$cl1.String("height",6).valueOf(),height$64);
        }else {
            photoDisplay$62.removeAttr($$$cl1.String("height",6).valueOf());
        }(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-title",14).valueOf()).text(photo$61.title.valueOf());
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".display-caption",16).valueOf()).text(photo$61.caption.valueOf());
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
    function displayPage(page$65){
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).empty();
        /*End dynamic block*/
        if($$categoryView.controller.pages.size.compare((1)).equals($$$cl1.getLarger())){
            var append$66=$$$cl1.String("<ul>",4);
            var setAppend$66=function(append$67){return append$66=append$67;};
            if(page$65.compare((0)).equals($$$cl1.getLarger())){
                (append$66=append$66.plus($$$cl1.String("<li><a href=\"",13).plus($$categoryView.controller.model.uri).plus(page$65.minus((1)).string).plus($$$cl1.String("\">Prev</a></li>",15))));
            }else {
                (append$66=append$66.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Prev</a></li>",46)));
            }
            var it$68 = (function(){var tmpvar$70=$$categoryView.controller.pages.size;
            if (tmpvar$70>0){
            var tmpvar$71=(0);
            var tmpvar$72=tmpvar$71;
            for (var i=1; i<tmpvar$70; i++){tmpvar$72=tmpvar$72.successor;}
            return $$$cl1.Range(tmpvar$71,tmpvar$72,{Element:{t:$$$cl1.Integer}})
            }else return $$$cl1.getEmpty();}()).iterator();
            var i$69;while ((i$69=it$68.next())!==$$$cl1.getFinished()){
                (append$66=append$66.plus($$$cl1.String("<li",3)));
                if(i$69.equals(page$65)){
                    (append$66=append$66.plus($$$cl1.String(" class=\"active\"",15)));
                }
                (append$66=append$66.plus($$$cl1.String("><a href=\"",10).plus($$categoryView.controller.model.uri).plus(i$69.string).plus($$$cl1.String("\">",2)).plus(i$69.plus((1)).string).plus($$$cl1.String("</a></li>",9))));
            }
            if(page$65.compare($$categoryView.controller.pages.size.minus((1))).equals($$$cl1.getSmaller())){
                (append$66=append$66.plus($$$cl1.String("<li><a href=\"",13).plus($$categoryView.controller.model.uri).plus(page$65.plus((1)).string).plus($$$cl1.String("\">Next</a></li>",15))));
            }else {
                (append$66=append$66.plus($$$cl1.String("<li class=\"disabled\"><a href=\"#\">Next</a></li>",46)));
            }
            (append$66=append$66.plus($$$cl1.String("</ul>",5)));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".pagination",11).valueOf()).append(append$66.valueOf());
            /*End dynamic block*/
        }
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
    $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$73){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$73;});
    var view;
    $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$74){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$74;});
    function init(photos$75,dir$76){
        $$$cl1.print($$$cl1.String("initalize page: ",16).plus($$page.uri));
        var model=PageModel($$page);
        $$$cl1.defineAttr($$page,'model',function(){if (model===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «model»'));return model;},function(model$77){if(model!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «model»'));return model=model$77;});
        var view=PageView($$page);
        $$$cl1.defineAttr($$page,'view',function(){if (view===undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to read unitialized attribute «view»'));return view;},function(view$78){if(view!==undefined)throw $$$cl1.InitializationException($$$cl1.String('Attempt to reassign immutable attribute «view»'));return view=view$78;});
        $$page.model.parsePhotos(photos$75,dir$76);
        return $$page;
    }
    $$page.init=init;
    init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:PhotoJSON}}}},{$nm:'dir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['Page']['$m']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Page}};
    function display(photoNum$79){
        $$$cl1.print($$$cl1.String("display page: ",14).plus($$page.uri));
        $$page.view.display();
        $$$cl1.print($$$cl1.String("display photo: ",15).plus(photoNum$79.string));
        $$page.parent.displayPhoto($$page.model.photos.get(photoNum$79));
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
    $$$cl1.defineAttr($$pageModel,'photos',function(){return photos;},function(photos$80){return photos=photos$80;});
    function parsePhotos(photosJSON$81,dir$82){
        $$$cl1.print($$$cl1.String("parsing photos",14));
        $$pageModel.photos=$$$cl1.Comprehension(function(){
            var it$83=photosJSON$81.iterator();
            var photo$84=$$$cl1.getFinished();
            var next$photo$84=function(){return photo$84=it$83.next();}
            next$photo$84();
            return function(){
                if(photo$84!==$$$cl1.getFinished()){
                    var photo$84$85=photo$84;
                    var tmpvar$86=Photo(photo$84$85.title,photo$84$85.caption,dir$82.plus($$$cl1.String("/",1)).plus(photo$84$85.src),photo$84$85.height,photo$84$85.width,photo$84$85.alt);
                    next$photo$84();
                    return tmpvar$86;
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
        /*Begin dynamic block*/
        (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).empty();
        /*End dynamic block*/
        var it$87 = $$$cl1.entries($$pageView.controller.model.photos,{Element:{t:Photo}}).iterator();
        var item$88;while ((item$88=it$87.next())!==$$$cl1.getFinished()){
            var i$89=item$88.key;
            var photo$90=item$88.item;
            var append$91=$$$cl1.String("<li class=\"span2\"><a href=\"",27).plus($$pageView.controller.uri).plus(i$89.string).plus($$$cl1.String("\" class=\"thumbnail\"><img src=\"",30)).plus(photo$90.src).plus($$$cl1.String("\" alt=\"",7)).plus(photo$90.alt).plus($$$cl1.String("\"></a></li>",11));
            /*Begin dynamic block*/
            (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc('Undefined or null reference: jQuery'):jQuery)($$$cl1.String(".image-grid",11).valueOf()).append(append$91.valueOf());
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
function Photo(title, caption, src, height, width, alt, $$photo){
    $init$Photo();
    if ($$photo===undefined)$$photo=new Photo.$$;
    $$photo.title=title;
    $$photo.caption=caption;
    $$photo.src=src;
    $$photo.height=height;
    $$photo.width=width;
    $$photo.alt=alt;
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
function PhotoJSON(title, caption, src, height, width, alt, $$photoJSON){
    $init$PhotoJSON();
    if ($$photoJSON===undefined)$$photoJSON=new PhotoJSON.$$;
    $$photoJSON.title=title;
    $$photoJSON.caption=caption;
    $$photoJSON.src=src;
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
function init(galleryDir$92){
    Gallery().init(galleryDir$92);
}
exports.init=init;
init.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.examples.photogallery',d:$$METAMODEL$$['ceylon.examples.photogallery']['init']};//init.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
