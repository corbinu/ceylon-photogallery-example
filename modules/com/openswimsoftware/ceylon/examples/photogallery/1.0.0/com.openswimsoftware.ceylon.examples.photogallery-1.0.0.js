(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"1.0.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.jquery\/1.10.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.json\/1.0.0"},{exp:1,path:"ceylon.language\/1.1.0"}],"com.openswimsoftware.ceylon.examples.photogallery":{PageView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PageView",$ps:[{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},template$dxvsy1:{$t:{$nm:"$U"},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"}},$m:{display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},photoLoaded$s0bjlg:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"photoLoaded",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photo",$mt:"prm"}]],$mt:"m"}},$mt:"c"},init:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[],doc:["Run the module `ceylon.examples.photogallery`."]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"galleryDir",$mt:"prm"}]],$mt:"m"},Category:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Category",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"prm"}],$at:{parent:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"a"},view:{$t:{$nm:"CategoryView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},pages:{$t:{$tp:[{$nm:"Page",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"pages",var:1,$mt:"a"},model:{$t:{$nm:"CategoryModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"}},$m:{init:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photos",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},setPages:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"setPages",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photosJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},updatePage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"updatePage",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"}]],$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"pageNum",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photoNum",$mt:"prm"}]],$mt:"m"},displayPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPhoto",$ps:[[{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Photo",$pk:"."}]},$nm:"photoM",$mt:"prm"}]],$mt:"m"}},$mt:"c"},SpinOptions:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"SpinOptions",$ps:[{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"lines",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"length",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"width",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"radius",$mt:"prm"},{$def:1,$t:{$nm:"Float",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"corners",$mt:"prm"},{$def:1,$t:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"direction",$mt:"prm"},{$def:1,$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"color",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"Float",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"speed",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"trail",$mt:"prm"},{$def:1,$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"shadow",$mt:"prm"},{$def:1,$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"hardwareAccel",$mt:"prm"},{$def:1,$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"className",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"zIndex",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"top",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"left",$mt:"prm"}],$at:{color:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"color",$mt:"a"},shadow:{$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"shadow",$mt:"a"},length:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"length",$mt:"a"},className:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"className",$mt:"a"},speed:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"Float",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"speed",$mt:"a"},trail:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"trail",$mt:"a"},corners:{$t:{$nm:"Float",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"corners",$mt:"a"},top:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"top",$mt:"a"},left:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"left",$mt:"a"},hardwareAccel:{$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"hardwareAccel",$mt:"a"},width:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"width",$mt:"a"},lines:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"lines",$mt:"a"},radius:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"radius",$mt:"a"},direction:{$t:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"direction",$mt:"a"},zIndex:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"zIndex",$mt:"a"}},$m:{toJson:{$t:{$nm:"JSJSON",$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json"},$an:{shared:[]},$nm:"toJson",$mt:"m"}},$mt:"c"},clockwise:{super:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"clockwise",$mt:"o"},JQuerySpinAbs:{super:{$nm:"JQueryAbs",$md:"com.openswimsoftware.ceylon.js.jquery",$pk:"com.openswimsoftware.ceylon.js.jquery"},$an:{shared:[],abstract:[]},$nm:"JQuerySpinAbs",$m:{spinPreset:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinPreset",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$nm:"color",$mt:"prm"}]],$mt:"m"},spin:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spin",$ps:[[{$def:1,$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"SpinOptions",$pk:"."}]},$nm:"options",$mt:"prm"}]],$mt:"m"},spinStop:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinStop",$mt:"m"},spinSetPreset:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinSetPreset",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$t:{$nm:"SpinOptions",$pk:"."},$nm:"options",$mt:"prm"}]],$mt:"m"}},$mt:"c",abstract:1},CategoryJSON:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryJSON",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"prm"},{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"photos",$mt:"prm"}],$at:{name:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"a"},photos:{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"photos",$mt:"a"}},$mt:"c"},Page:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Page",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"prm"}],$at:{parent:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"a"},view:{$t:{$nm:"PageView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},model:{$t:{$nm:"PageModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"},uri:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"a"}},$m:{init:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photos",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photoNum",$mt:"prm"}]],$mt:"m"}},$mt:"c"},Photo:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Photo",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"prm"}],$at:{src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"a"},thumb:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"a"},width:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"a"},height:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"a"}},$mt:"c"},counterclockwise:{super:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"counterclockwise",$mt:"o"},"$pkg-shared":1,spin:{$t:{$nm:"JQuerySpin",$pk:"."},$an:{shared:[]},$nm:"spin",$ps:[[{$t:{$nm:"JQuery",$md:"com.openswimsoftware.ceylon.js.jquery",$pk:"com.openswimsoftware.ceylon.js.jquery"},$nm:"jq",$mt:"prm"}]],$mt:"m"},Gallery:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Gallery",$at:{view:{$t:{$nm:"GalleryView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},currentCategory:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"currentCategory",$mt:"a"},model:{$t:{$nm:"GalleryModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"},categories:{$t:{$tp:[{$nm:"Category",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"categories",var:1,$mt:"a"}},$m:{loaded:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"loaded",$mt:"m"},routeIndex$zg3dno:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routeIndex",$mt:"m"},init:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},routeCategory$rgqfxy:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routeCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"}]],$mt:"m"},updateCategory:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"updateCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"category",$mt:"prm"}]],$mt:"m"},routePhoto$yxwdj8:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routePhoto",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photo",$mt:"prm"}]],$mt:"m"},routePage$zgjivh:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routePage",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"}]],$mt:"m"},handlebarHelpers$2hwb97:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"handlebarHelpers",$mt:"m"},getCategory$xu66r5:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Category",$pk:"."}]},$nm:"getCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"}]],$mt:"m"}},$mt:"c"},CategoryView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryView",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},pagination:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"pagination",var:1,$mt:"a"},paginationTemplate$grci0:{$t:{$nm:"$U"},$an:{shared:[],actual:[],variable:[]},$nm:"paginationTemplate",var:1,$mt:"a"},src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"src",var:1,$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"alt",var:1,$mt:"a"},width:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"width",var:1,$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"caption",var:1,$mt:"a"},page:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"page",var:1,$mt:"a"},template$ttmu8y:{$t:{$nm:"$U"},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"title",var:1,$mt:"a"},height:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"height",var:1,$mt:"a"}},$m:{displayNoPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayNoPhoto",$mt:"m"},displayInvalidPage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayInvalidPage",$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},displayPage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPage",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"pageNum",$mt:"prm"}]],$mt:"m"},displayPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPhoto",$ps:[[{$t:{$nm:"Photo",$pk:"."},$nm:"photo",$mt:"prm"}]],$mt:"m"}},$mt:"c"},GalleryModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"GalleryModel",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"dir",$mt:"prm"}],$at:{controller:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},dir:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"dir",$mt:"a"}},$m:{loadJSON:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"loadJSON",$mt:"m"},parseCategories:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"parseCategories",$ps:[[{$t:{$tp:[{$nm:"CategoryJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"categoriesJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"status",$mt:"prm"},{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"jqXHR",$mt:"prm"}]],$mt:"m"}},$mt:"c"},JQuerySpin:{super:{$nm:"JQuerySpinAbs",$pk:"."},$an:{shared:[]},$nm:"JQuerySpin",$ps:[{$t:{$nm:"$U"},$nm:"n",$mt:"prm"}],$at:{native:{$t:{$nm:"$U"},$an:{shared:[],actual:[]},$nm:"native",$mt:"a"},n$icgs7:{$t:{$nm:"$U"},$nm:"n",$mt:"a"}},$mt:"c"},GalleryView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"GalleryView",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},categoryTabs:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"categoryTabs",var:1,$mt:"a"},category:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"category",var:1,$mt:"a"},template$gjh3pu:{$t:{$nm:"$U"},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"},tabsTemplate$2ov37k:{$t:{$nm:"$U"},$an:{shared:[],actual:[],variable:[]},$nm:"tabsTemplate",var:1,$mt:"a"}},$m:{displayCategories:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayCategories",$mt:"m"},isDesktop:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"isDesktop",$mt:"m"},displayInvalidCategory:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayInvalidCategory",$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},isMobile:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"isMobile",$mt:"m"}},$mt:"c"},CategoryModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryModel",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"prm"}],$at:{controller:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},name:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"a"},uri:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"g"}},$mt:"c"},PageModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PageModel",$ps:[{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},photos:{$t:{$tp:[{$nm:"Photo",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"photos",var:1,$mt:"a"}},$m:{parsePhotos:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"parsePhotos",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photosJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"}},$mt:"c"},PhotoJSON:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PhotoJSON",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"prm"}],$at:{src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"a"},thumb:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"a"},width:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"a"},height:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"a"}},$mt:"c"},SpinDirection:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[],abstract:[]},$nm:"SpinDirection",$ps:[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"direc",$mt:"prm"}],of:[{$nm:"clockwise",$pk:"."},{$nm:"counterclockwise",$pk:"."}],$at:{direc:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"direc",$mt:"a"}},$mt:"c",abstract:1}},"$mod-bin":"7.0","$mod-name":"com.openswimsoftware.ceylon.examples.photogallery"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$6mi=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$6mi.$addmod$(m$6mi,'ceylon.language/1.1.0');
ex$.$pkg$ans$com$openswimsoftware$ceylon$examples$photogallery=function(){return[m$6mi.shared()];};
ex$.$mod$ans$=[];
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.jquery/1.10.0':function(){return[m$6mi.shared()];},
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$6mi.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$6mi.shared()];}
};};
var m$6mj=require('com/openswimsoftware/ceylon/js/jquery/1.10.0/com.openswimsoftware.ceylon.js.jquery-1.10.0');
m$6mi.$addmod$(m$6mj,'com.openswimsoftware.ceylon.js.jquery/1.10.0');
var m$6mk=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$6mi.$addmod$(m$6mk,'com.openswimsoftware.ceylon.js.json/1.0.0');
var m$6ml=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$6mi.$addmod$(m$6ml,'com.openswimsoftware.ceylon.js.language/1.8.0');

//MethodDef spin at jqueryspin.ceylon (5:0-9:0)
function spin($6mm){
    /*BEG dynblock*/
    return JQuerySpin($6mm.$_native);
    /*END dynblock*/
}
ex$.spin=spin;
spin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuerySpin},$ps:[{$nm:'jq',$mt:'prm',$t:{t:m$6mj.JQuery},$an:function(){return[];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','spin']};};

//ClassDef SpinDirection at jqueryspin.ceylon (11:0-11:91)
function SpinDirection(direc,spinDirection$){
    $init$SpinDirection();
    if(spinDirection$===undefined)m$6mi.throwexc(m$6mi.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    spinDirection$.direc_=direc;
    return spinDirection$;
}
SpinDirection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'direc',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}}],of:[$prop$get$6mn,$prop$get$6mo],$an:function(){return[m$6mi.shared(),m$6mi.abstract()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinDirection']};};
ex$.SpinDirection=SpinDirection;
function $init$SpinDirection(){
    if(SpinDirection.$$===undefined){
        m$6mi.initTypeProto(SpinDirection,'com.openswimsoftware.ceylon.examples.photogallery::SpinDirection',m$6mi.Basic);
        (function(spinDirection$){
            m$6mi.atr$(spinDirection$,'direc',function(){return this.direc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinDirection,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinDirection','$at','direc']};});
        })(SpinDirection.$$.prototype);
    }
    return SpinDirection;
}
ex$.$init$SpinDirection=$init$SpinDirection;
$init$SpinDirection();

//ObjectDef clockwise at jqueryspin.ceylon (13:0-13:50)
function $6mn(){
    var clockwise$=new $6mn.$$;SpinDirection(1,clockwise$);
    return clockwise$;
};$6mn.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SpinDirection},$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','clockwise']};};
function $init$$6mn(){
    if($6mn.$$===undefined){
        m$6mi.initTypeProto($6mn,'com.openswimsoftware.ceylon.examples.photogallery::clockwise',$init$SpinDirection());
    }
    return $6mn;
}
ex$.$init$$6mn=$init$$6mn;
$init$$6mn();
var $6mp;
function getClockwise(){
    if($6mp===undefined){$6mp=$init$$6mn()();$6mp.$crtmm$=getClockwise.$crtmm$;}
    return $6mp;
}
ex$.getClockwise=getClockwise;
getClockwise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6mn},$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','clockwise']};};
$prop$getClockwise={get:getClockwise,$crtmm$:getClockwise.$crtmm$};
get$6mn=getClockwise;$prop$get$6mn=getClockwise;
ex$.$prop$getClockwise=$prop$getClockwise;

//ObjectDef counterclockwise at jqueryspin.ceylon (14:0-14:58)
function $6mo(){
    var counterclockwise$=new $6mo.$$;SpinDirection((-1),counterclockwise$);
    return counterclockwise$;
};$6mo.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SpinDirection},$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','counterclockwise']};};
function $init$$6mo(){
    if($6mo.$$===undefined){
        m$6mi.initTypeProto($6mo,'com.openswimsoftware.ceylon.examples.photogallery::counterclockwise',$init$SpinDirection());
    }
    return $6mo;
}
ex$.$init$$6mo=$init$$6mo;
$init$$6mo();
var $6mq;
function getCounterclockwise(){
    if($6mq===undefined){$6mq=$init$$6mo()();$6mq.$crtmm$=getCounterclockwise.$crtmm$;}
    return $6mq;
}
ex$.getCounterclockwise=getCounterclockwise;
getCounterclockwise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$6mo},$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','counterclockwise']};};
$prop$getCounterclockwise={get:getCounterclockwise,$crtmm$:getCounterclockwise.$crtmm$};
get$6mo=getCounterclockwise;$prop$get$6mo=getCounterclockwise;
ex$.$prop$getCounterclockwise=$prop$getCounterclockwise;

//ClassDef SpinOptions at jqueryspin.ceylon (17:0-43:0)
function SpinOptions(lines,length,width,radius,corners,direction,color,speed,trail,shadow,hardwareAccel,className,zIndex,top,left,spinOptions$){
    $init$SpinOptions();
    if(spinOptions$===undefined)spinOptions$=new SpinOptions.$$;
    if(lines===undefined){lines=(13);}
    spinOptions$.lines_=lines;
    if(length===undefined){length=(20);}
    spinOptions$.length_=length;
    if(width===undefined){width=(10);}
    spinOptions$.width_=width;
    if(radius===undefined){radius=(30);}
    spinOptions$.radius_=radius;
    if(corners===undefined){corners=m$6mi.Float(1.0);}
    spinOptions$.corners_=corners;
    if(direction===undefined){direction=getClockwise();}
    spinOptions$.direction_=direction;
    if(color===undefined){color="#000";}
    spinOptions$.color_=color;
    if(speed===undefined){speed=(1);}
    spinOptions$.speed_=speed;
    if(trail===undefined){trail=(60);}
    spinOptions$.trail_=trail;
    if(shadow===undefined){shadow=false;}
    spinOptions$.shadow_=shadow;
    if(hardwareAccel===undefined){hardwareAccel=false;}
    spinOptions$.hardwareAccel_=hardwareAccel;
    if(className===undefined){className="spinner";}
    spinOptions$.className_=className;
    if(zIndex===undefined){zIndex=(2000000000);}
    spinOptions$.zIndex_=zIndex;
    if(top===undefined){top="auto";}
    spinOptions$.top_=top;
    if(left===undefined){left="auto";}
    spinOptions$.left_=left;
    return spinOptions$;
}
SpinOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'lines',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'length',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'width',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'radius',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'corners',$mt:'prm',$def:1,$t:{t:m$6mi.Float},$an:function(){return[m$6mi.shared()];}},{$nm:'direction',$mt:'prm',$def:1,$t:{t:SpinDirection},$an:function(){return[m$6mi.shared()];}},{$nm:'color',$mt:'prm',$def:1,$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'speed',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.Float}]},$an:function(){return[m$6mi.shared()];}},{$nm:'trail',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'shadow',$mt:'prm',$def:1,$t:{t:m$6mi.$_Boolean},$an:function(){return[m$6mi.shared()];}},{$nm:'hardwareAccel',$mt:'prm',$def:1,$t:{t:m$6mi.$_Boolean},$an:function(){return[m$6mi.shared()];}},{$nm:'className',$mt:'prm',$def:1,$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'zIndex',$mt:'prm',$def:1,$t:{t:m$6mi.Integer},$an:function(){return[m$6mi.shared()];}},{$nm:'top',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.$_String}]},$an:function(){return[m$6mi.shared()];}},{$nm:'left',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.$_String}]},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions']};};
ex$.SpinOptions=SpinOptions;
function $init$SpinOptions(){
    if(SpinOptions.$$===undefined){
        m$6mi.initTypeProto(SpinOptions,'com.openswimsoftware.ceylon.examples.photogallery::SpinOptions',m$6mi.Basic);
        (function(spinOptions$){
            
            //MethodDef toJson at jqueryspin.ceylon (23:1-42:1)
            spinOptions$.toJson=function toJson(){
                var spinOptions$=this;
                
                //AttributeDecl json at jqueryspin.ceylon (24:2-24:34)
                var $6mr=m$6ml.createJSObject();
                /*BEG dynblock*/
                $6mr.$_native.lines=spinOptions$.lines;
                $6mr.$_native.length=spinOptions$.length;
                $6mr.$_native.width=spinOptions$.width;
                $6mr.$_native.radius=spinOptions$.radius;
                $6mr.$_native.corners=spinOptions$.corners.valueOf();
                $6mr.$_native.direction=spinOptions$.direction.direc;
                $6mr.$_native.color=spinOptions$.color;
                $6mr.$_native.speed=spinOptions$.speed;
                $6mr.$_native.trail=spinOptions$.trail;
                $6mr.$_native.shadow=spinOptions$.shadow;
                $6mr.$_native.hwaccel=spinOptions$.hardwareAccel;
                $6mr.$_native.zIndex=spinOptions$.zIndex;
                $6mr.$_native.top=spinOptions$.top;
                $6mr.$_native.left=spinOptions$.left;
                return m$6mk.JSJSON($6mr.$_native);
                /*END dynblock*/
            };spinOptions$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mk.JSJSON},$ps:[],$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$m','toJson']};};
            m$6mi.atr$(spinOptions$,'lines',function(){return this.lines_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','lines']};});
            m$6mi.atr$(spinOptions$,'length',function(){return this.length_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','length']};});
            m$6mi.atr$(spinOptions$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','width']};});
            m$6mi.atr$(spinOptions$,'radius',function(){return this.radius_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','radius']};});
            m$6mi.atr$(spinOptions$,'corners',function(){return this.corners_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Float},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','corners']};});
            m$6mi.atr$(spinOptions$,'direction',function(){return this.direction_;},undefined,function(){return{mod:$CCMM$,$t:{t:SpinDirection},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','direction']};});
            m$6mi.atr$(spinOptions$,'color',function(){return this.color_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','color']};});
            m$6mi.atr$(spinOptions$,'speed',function(){return this.speed_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.Float}]},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','speed']};});
            m$6mi.atr$(spinOptions$,'trail',function(){return this.trail_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','trail']};});
            m$6mi.atr$(spinOptions$,'shadow',function(){return this.shadow_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_Boolean},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','shadow']};});
            m$6mi.atr$(spinOptions$,'hardwareAccel',function(){return this.hardwareAccel_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_Boolean},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','hardwareAccel']};});
            m$6mi.atr$(spinOptions$,'className',function(){return this.className_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','className']};});
            m$6mi.atr$(spinOptions$,'zIndex',function(){return this.zIndex_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Integer},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','zIndex']};});
            m$6mi.atr$(spinOptions$,'top',function(){return this.top_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.$_String}]},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','top']};});
            m$6mi.atr$(spinOptions$,'left',function(){return this.left_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Integer},{t:m$6mi.$_String}]},$cont:SpinOptions,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','left']};});
        })(SpinOptions.$$.prototype);
    }
    return SpinOptions;
}
ex$.$init$SpinOptions=$init$SpinOptions;
$init$SpinOptions();

//ClassDef JQuerySpinAbs at jqueryspin.ceylon (45:0-75:0)
function JQuerySpinAbs(jQuerySpinAbs$){
    $init$JQuerySpinAbs();
    if(jQuerySpinAbs$===undefined)m$6mi.throwexc(m$6mi.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$6mj.JQueryAbs(jQuerySpinAbs$);
    return jQuerySpinAbs$;
}
JQuerySpinAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mj.JQueryAbs},$ps:[],$an:function(){return[m$6mi.shared(),m$6mi.abstract()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs']};};
ex$.JQuerySpinAbs=JQuerySpinAbs;
function $init$JQuerySpinAbs(){
    if(JQuerySpinAbs.$$===undefined){
        m$6mi.initTypeProto(JQuerySpinAbs,'com.openswimsoftware.ceylon.examples.photogallery::JQuerySpinAbs',m$6mj.JQueryAbs);
        (function(jQuerySpinAbs$){
            
            //MethodDef spin at jqueryspin.ceylon (47:1-55:1)
            jQuerySpinAbs$.spin$defs$options=function($6ms){return null;};
            jQuerySpinAbs$.spin=function spin($6ms){
                var jQuerySpinAbs$=this;
                if($6ms===undefined){$6ms=jQuerySpinAbs$.spin$defs$options($6ms);}
                /*BEG dynblock*/
                var $6mt;
                if(($6mt=$6ms)!==null&&$6mt!==undefined){
                    jQuerySpinAbs$.$_native.spin($6mt.toJson());
                }else {
                    jQuerySpinAbs$.$_native.spin();
                }/*END dynblock*/
            };jQuerySpinAbs$.spin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$6mi.Null},{t:SpinOptions}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spin']};};
            
            //MethodDef spinPreset at jqueryspin.ceylon (57:1-61:1)
            jQuerySpinAbs$.spinPreset$defs$color=function($6mu,$6mv){return null;};
            jQuerySpinAbs$.spinPreset=function spinPreset($6mu,$6mv){
                var jQuerySpinAbs$=this;
                if($6mv===undefined){$6mv=jQuerySpinAbs$.spinPreset$defs$color($6mu,$6mv);}
                /*BEG dynblock*/
                jQuerySpinAbs$.$_native.spin($6mu,$6mv);
                /*END dynblock*/
            };jQuerySpinAbs$.spinPreset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'color',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.$_String}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinPreset']};};
            
            //MethodDef spinStop at jqueryspin.ceylon (63:1-67:1)
            jQuerySpinAbs$.spinStop=function spinStop(){
                var jQuerySpinAbs$=this;
                /*BEG dynblock*/
                jQuerySpinAbs$.$_native.spin(false);
                /*END dynblock*/
            };jQuerySpinAbs$.spinStop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:JQuerySpinAbs,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinStop']};};
            
            //MethodDef spinSetPreset at jqueryspin.ceylon (69:1-73:1)
            jQuerySpinAbs$.spinSetPreset=function spinSetPreset($6mw,$6mx){
                var jQuerySpinAbs$=this;
                /*BEG dynblock*/
                (typeof objectDefineProperty==='undefined'||objectDefineProperty===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: objectDefineProperty"),'71:3-71:22','jqueryspin.ceylon'):objectDefineProperty)((typeof jQuery==='undefined'||jQuery===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: jQuery"),'71:24-71:29','jqueryspin.ceylon'):jQuery).spin.presets,$6mw,m$6ml.DataDescriptor(true,false,true,true,$6mx.toJson()));
                /*END dynblock*/
            };jQuerySpinAbs$.spinSetPreset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:SpinOptions},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinSetPreset']};};
        })(JQuerySpinAbs.$$.prototype);
    }
    return JQuerySpinAbs;
}
ex$.$init$JQuerySpinAbs=$init$JQuerySpinAbs;
$init$JQuerySpinAbs();

//ClassDef JQuerySpin at jqueryspin.ceylon (77:0-82:0)
function JQuerySpin($6my,jQuerySpin$){
    $init$JQuerySpin();
    if(jQuerySpin$===undefined)jQuerySpin$=new JQuerySpin.$$;
    jQuerySpin$.$6my_=$6my;
    JQuerySpinAbs(jQuerySpin$);
    
    //AttributeDecl native at jqueryspin.ceylon (78:1-78:29)
    jQuerySpin$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:JQuerySpin,$an:function(){return[m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin','$at','native']};}};
    /*BEG dynblock*/
    jQuerySpin$.$_native=jQuerySpin$.$6my;/*END dynblock*/
    return jQuerySpin$;
}
JQuerySpin.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQuerySpinAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$6mi.Anything},$an:function(){return[];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin']};};
ex$.JQuerySpin=JQuerySpin;
function $init$JQuerySpin(){
    if(JQuerySpin.$$===undefined){
        m$6mi.initTypeProto(JQuerySpin,'com.openswimsoftware.ceylon.examples.photogallery::JQuerySpin',$init$JQuerySpinAbs());
        (function(jQuerySpin$){
            
            //AttributeDecl native at jqueryspin.ceylon (78:1-78:29)
            m$6mi.atr$(jQuerySpin$,'$6my',function(){return this.$6my_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:JQuerySpin,d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin','$at','n$icgs7']};});
        })(JQuerySpin.$$.prototype);
    }
    return JQuerySpin;
}
ex$.$init$JQuerySpin=$init$JQuerySpin;
$init$JQuerySpin();

//ClassDef Gallery at gallery.ceylon (5:0-151:0)
function Gallery(gallery$){
    $init$Gallery();
    if(gallery$===undefined)gallery$=new Gallery.$$;
    
    //AttributeDecl categories at gallery.ceylon (6:1-6:43)
    gallery$.$6mz_=m$6mi.getEmpty();
    gallery$.$prop$getCategories={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Category}}},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','categories']};}};
    gallery$.$prop$getCategories.get=function(){return categories};
    
    //AttributeDecl currentCategory at gallery.ceylon (7:1-7:35)
    gallery$.$6n0_="";
    gallery$.$prop$getCurrentCategory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Gallery,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','currentCategory']};}};
    gallery$.$prop$getCurrentCategory.get=function(){return currentCategory};
    
    //AttributeDecl model at gallery.ceylon (8:1-8:31)
    gallery$.$6n1_=undefined;
    gallery$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};}};
    gallery$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (9:1-9:29)
    gallery$.$6n2_=undefined;
    gallery$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};}};
    gallery$.$prop$getView.get=function(){return view};
    return gallery$;
}
Gallery.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery']};};
ex$.Gallery=Gallery;
function $init$Gallery(){
    if(Gallery.$$===undefined){
        m$6mi.initTypeProto(Gallery,'com.openswimsoftware.ceylon.examples.photogallery::Gallery',m$6mi.Basic);
        (function(gallery$){
            
            //AttributeDecl categories at gallery.ceylon (6:1-6:43)
            m$6mi.atr$(gallery$,'categories',function(){return this.$6mz_;},function($6n3){return this.$6mz_=$6n3;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Category}}},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','categories']};});
            
            //AttributeDecl currentCategory at gallery.ceylon (7:1-7:35)
            m$6mi.atr$(gallery$,'currentCategory',function(){return this.$6n0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Gallery,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','currentCategory']};});
            
            //AttributeDecl model at gallery.ceylon (8:1-8:31)
            m$6mi.atr$(gallery$,'model',function(){if(this.$6n1_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return this.$6n1_;},function($6n4){if(this.$6n1_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$6n1_=$6n4;},function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (9:1-9:29)
            m$6mi.atr$(gallery$,'view',function(){if(this.$6n2_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return this.$6n2_;},function($6n5){if(this.$6n2_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$6n2_=$6n5;},function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};});
            
            //MethodDef init at gallery.ceylon (11:1-31:1)
            gallery$.init=function init($6n6){
                var gallery$=this;
                m$6mi.print("initalizing gallery");
                var model=GalleryModel(gallery$,$6n6);
                m$6mi.atr$(gallery$,'model',function(){if(model===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($6n7){if(model!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$6n7;},function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};});
                var view=GalleryView(gallery$);
                m$6mi.atr$(gallery$,'view',function(){if(view===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($6n8){if(view!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$6n8;},function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};});
                gallery$.$6n9();
                gallery$.model.loadJSON();
                /*BEG dynblock*/
                
                //AttributeDecl resize at gallery.ceylon (20:4-26:4)
                var $6na=m$6mi.$JsCallable((function ($6nb){
                    if(m$6mj.jq(".visible-lg").getCss("display").equals("none !important")){
                        gallery$.view.isMobile();
                    }else {
                        gallery$.view.isDesktop();
                    }
                }),[{$nm:'p2',$mt:'prm',$t:{t:m$6mi.Anything}}],{Arguments$Callable:{t:'T',l:[{t:m$6mi.Anything}]},Return$Callable:{t:m$6mi.Anything}});
                m$6mj.jq(m$6ml.JSObject((typeof window==='undefined'||window===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: window"),'27:15-27:20','gallery.ceylon'):window))).resize($6na);
                /*END dynblock*/
                return gallery$;
            };gallery$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','init']};};
            
            //MethodDef loaded at gallery.ceylon (33:1-44:1)
            gallery$.loaded=function loaded(){
                var gallery$=this;
                m$6mi.print("gallery loaded");
                /*BEG dynblock*/
                
                //AttributeDecl router at gallery.ceylon (36:3-36:38)
                var $6nc=($6nd=(typeof Router==='undefined'?m$6mi.throwexc(m$6mi.Exception("Undefined type Router"),'36:20-36:25','gallery.ceylon'):Router),$6nd.$$===undefined?new $6nd():$6nd()).init("/");
                $6nc.on("/",m$6mi.JsCallable(gallery$,gallery$.$6ne));
                $6nc.on("/:category",m$6mi.JsCallable(gallery$,gallery$.$6nf));
                $6nc.on("/:category/:page",m$6mi.JsCallable(gallery$,gallery$.$6ng));
                $6nc.on("/:category/:page/:photo",m$6mi.JsCallable(gallery$,gallery$.$6nh));
                /*END dynblock*/
                gallery$.view.displayCategories();
            };gallery$.loaded.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:Gallery,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','loaded']};};
            
            //MethodDef updateCategory at gallery.ceylon (46:1-49:1)
            gallery$.updateCategory=function updateCategory($6ni){
                var gallery$=this;
                (gallery$.view.category=$6ni);
                gallery$.view.display();
            };gallery$.updateCategory.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','updateCategory']};};
            
            //MethodDef handlebarHelpers at gallery.ceylon (51:1-95:1)
            gallery$.$6n9=function $6n9(){
                var gallery$=this;
                /*BEG dynblock*/
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'53:3-53:12','gallery.ceylon'):Handlebars).registerHelper("lower",(function ($6nj){
                    return $6nj.lowercased;
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'56:3-56:12','gallery.ceylon'):Handlebars).registerHelper("upper",(function ($6nk){
                    return $6nk.uppercased;
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'59:3-59:12','gallery.ceylon'):Handlebars).registerHelper("add",(function ($6nl,$6nm){
                    return $6nl.plus($6nm).string;
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'62:3-62:12','gallery.ceylon'):Handlebars).registerHelper("sub",(function ($6nn,$6no){
                    return $6nn.minus($6no).string;
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'65:3-65:12','gallery.ceylon'):Handlebars).registerHelper("eql",(function ($6np,$6nq,$6nr){
                    if($6np.equals($6nq)){
                        return $6nr.fn((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'67:21-67:24','gallery.ceylon'):this));
                    }else {
                        return $6nr.inverse((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'69:26-69:29','gallery.ceylon'):this));
                    }
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'72:3-72:12','gallery.ceylon'):Handlebars).registerHelper("nteql",(function ($6ns,$6nt,$6nu){
                    if((!$6ns.equals($6nt))){
                        return $6nu.fn((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'74:21-74:24','gallery.ceylon'):this));
                    }else {
                        return $6nu.inverse((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'76:26-76:29','gallery.ceylon'):this));
                    }
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'79:3-79:12','gallery.ceylon'):Handlebars).registerHelper("lt",(function ($6nv,$6nw,$6nx){
                    if(($6nv<$6nw)){
                        return $6nx.fn((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'81:21-81:24','gallery.ceylon'):this));
                    }else {
                        return $6nx.inverse((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'83:26-83:29','gallery.ceylon'):this));
                    }
                }));
                (typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'86:3-86:12','gallery.ceylon'):Handlebars).registerHelper("gt",(function ($6ny,$6nz,$6o0){
                    m$6mi.print("comparing if ".plus($6ny.string).plus(" is greater then ").plus($6nz.string));
                    if(($6ny>$6nz)){
                        return $6o0.fn((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'89:21-89:24','gallery.ceylon'):this));
                    }else {
                        return $6o0.inverse((typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'91:26-91:29','gallery.ceylon'):this));
                    }
                }));
                /*END dynblock*/
            };gallery$.$6n9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','handlebarHelpers$2hwb97']};};
            
            //MethodDef getCategory at gallery.ceylon (97:1-105:1)
            gallery$.$6o1=function $6o1($6o2){
                var gallery$=this;
                m$6mi.print("getting category: ".plus($6o2));
                //'for' statement at gallery.ceylon (99:2-103:2)
                var $6o4;for(var $6o3=gallery$.categories.iterator();($6o4=$6o3.next())!==m$6mi.getFinished();){
                    if($6o2.lowercased.equals($6o4.model.name.lowercased)){
                        return $6o4;
                    }
                }
                return null;
            };gallery$.$6o1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','getCategory$xu66r5']};};
            
            //MethodDef routeIndex at gallery.ceylon (107:1-113:1)
            gallery$.$6ne=function $6ne(){
                var gallery$=this;
                m$6mi.print("routing index");
                var $6o5;
                if(($6o5=gallery$.categories.$_get(0))!==null){
                    m$6mi.print("display first category");
                    $6o5.display(0,0);
                }
            };gallery$.$6ne.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routeIndex$zg3dno']};};
            
            //MethodDef routeCategory at gallery.ceylon (115:1-124:1)
            gallery$.$6nf=function $6nf($6o6){
                var gallery$=this;
                m$6mi.print("route category name: ".plus($6o6));
                var $6o7;
                if(($6o7=gallery$.$6o1($6o6))!==null){
                    m$6mi.print("display category");
                    $6o7.display(0,0);
                }else {
                    m$6mi.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$6nf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routeCategory$rgqfxy']};};
            
            //MethodDef routePage at gallery.ceylon (126:1-136:1)
            gallery$.$6ng=function $6ng($6o8,$6o9){
                var gallery$=this;
                
                //AttributeDecl pageNum at gallery.ceylon (127:2-127:31)
                var $6oa=m$6mi.Integer($6o9);
                m$6mi.print("route category name: ".plus($6o8).plus(" page num: ").plus($6oa.string));
                var $6ob;
                if(($6ob=gallery$.$6o1($6o8))!==null){
                    m$6mi.print("display category and page");
                    $6ob.display($6oa,0);
                }else {
                    m$6mi.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$6ng.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routePage$zgjivh']};};
            
            //MethodDef routePhoto at gallery.ceylon (138:1-149:1)
            gallery$.$6nh=function $6nh($6oc,$6od,$6oe){
                var gallery$=this;
                
                //AttributeDecl pageNum at gallery.ceylon (139:2-139:31)
                var $6of=m$6mi.Integer($6od);
                
                //AttributeDecl photoNum at gallery.ceylon (140:2-140:33)
                var $6og=m$6mi.Integer($6oe);
                m$6mi.print("route category name: ".plus($6oc).plus(" page num: ").plus($6of.string).plus(" photo num: ").plus($6oe.string));
                var $6oh;
                if(($6oh=gallery$.$6o1($6oc))!==null){
                    m$6mi.print("display category, page and photo");
                    $6oh.display($6of,$6og);
                }else {
                    m$6mi.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$6nh.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routePhoto$yxwdj8']};};
        })(Gallery.$$.prototype);
    }
    return Gallery;
}
ex$.$init$Gallery=$init$Gallery;
$init$Gallery();

//ClassDef GalleryModel at gallery.ceylon (153:0-171:0)
function GalleryModel(controller,dir,galleryModel$){
    $init$GalleryModel();
    if(galleryModel$===undefined)galleryModel$=new GalleryModel.$$;
    galleryModel$.controller_=controller;
    galleryModel$.dir_=dir;
    return galleryModel$;
}
GalleryModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$6mi.shared()];}},{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel']};};
ex$.GalleryModel=GalleryModel;
function $init$GalleryModel(){
    if(GalleryModel.$$===undefined){
        m$6mi.initTypeProto(GalleryModel,'com.openswimsoftware.ceylon.examples.photogallery::GalleryModel',m$6mi.Basic);
        (function(galleryModel$){
            
            //MethodDef loadJSON at gallery.ceylon (155:1-161:1)
            galleryModel$.loadJSON=function loadJSON(){
                var galleryModel$=this;
                m$6mi.print("loading local json");
                /*BEG dynblock*/
                m$6mj.jQueryGetJSON(galleryModel$.dir.plus("/images.json")).done(m$6mi.JsCallable(galleryModel$,galleryModel$.parseCategories)).fail((function (){
                    return (typeof alert==='undefined'||alert===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: alert"),'158:73-158:77','gallery.ceylon'):alert)("Error could not load image file");
                }));
                /*END dynblock*/
            };galleryModel$.loadJSON.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$m','loadJSON']};};
            
            //MethodDef parseCategories at gallery.ceylon (163:1-169:1)
            galleryModel$.parseCategories=function parseCategories($6oi,$6oj,$6ok){
                var galleryModel$=this;
                m$6mi.print("process category json");
                m$6mi.print("dir is:".plus(galleryModel$.dir));
                (galleryModel$.controller.categories=m$6mi.tpl$([],undefined,m$6mi.Comprehension(function(){
                    //Comprehension at gallery.ceylon (166:27-166:121)
                    var $6ol=$6oi.iterator();
                    var $6om=m$6mi.getFinished();
                    var next$6om=function(){return $6om=$6ol.next();}
                    next$6om();
                    return function(){
                        if($6om!==m$6mi.getFinished()){
                            var $6on=$6om;
                            var $6oo=Category(galleryModel$.controller).init($6on.name,$6on.photos,galleryModel$.dir);
                            next$6om();
                            return $6oo;
                        }
                        return m$6mi.getFinished();
                    }
                },{Element$Iterable:{t:Category},Absent$Iterable:{t:m$6mi.Null}})));
                galleryModel$.controller.loaded();
            };galleryModel$.parseCategories.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:CategoryJSON}}},$an:function(){return[];}},{$nm:'status',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'jqXHR',$mt:'prm',$t:{t:m$6mi.Anything},$an:function(){return[];}}],$cont:GalleryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$m','parseCategories']};};
            m$6mi.atr$(galleryModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:GalleryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$at','controller']};});
            m$6mi.atr$(galleryModel$,'dir',function(){return this.dir_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:GalleryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$at','dir']};});
        })(GalleryModel.$$.prototype);
    }
    return GalleryModel;
}
ex$.$init$GalleryModel=$init$GalleryModel;
$init$GalleryModel();

//ClassDef GalleryView at gallery.ceylon (173:0-222:0)
function GalleryView(controller,galleryView$){
    $init$GalleryView();
    if(galleryView$===undefined)galleryView$=new GalleryView.$$;
    galleryView$.controller_=controller;
    
    //AttributeDecl template at gallery.ceylon (174:1-174:26)
    galleryView$.$prop$get$6op={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:GalleryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','template$gjh3pu']};}};
    galleryView$.$prop$get$6op.get=function(){return $6op};
    
    //AttributeDecl tabsTemplate at gallery.ceylon (175:1-175:30)
    galleryView$.$prop$get$6oq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:GalleryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','tabsTemplate$2ov37k']};}};
    galleryView$.$prop$get$6oq.get=function(){return $6oq};
    
    //AttributeDecl categoryTabs at gallery.ceylon (177:1-177:53)
    galleryView$.$6or_="categoryTabs";
    galleryView$.$prop$getCategoryTabs={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:GalleryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};}};
    galleryView$.$prop$getCategoryTabs.get=function(){return categoryTabs};
    
    //AttributeDecl category at gallery.ceylon (178:1-178:45)
    galleryView$.$6os_="category";
    galleryView$.$prop$getCategory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:GalleryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','category']};}};
    galleryView$.$prop$getCategory.get=function(){return category};
    /*BEG dynblock*/
    galleryView$.$6op=(typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'181:13-181:22','gallery.ceylon'):Handlebars).compile(m$6mj.jq("#gallery-template").getHtml().$_native);galleryView$.$6oq=(typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'182:17-182:26','gallery.ceylon'):Handlebars).compile(m$6mj.jq("#gallery-tabs-template").getHtml().$_native);/*END dynblock*/
    return galleryView$;
}
GalleryView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView']};};
ex$.GalleryView=GalleryView;
function $init$GalleryView(){
    if(GalleryView.$$===undefined){
        m$6mi.initTypeProto(GalleryView,'com.openswimsoftware.ceylon.examples.photogallery::GalleryView',m$6mi.Basic);
        (function(galleryView$){
            
            //AttributeDecl template at gallery.ceylon (174:1-174:26)
            m$6mi.atr$(galleryView$,'$6op',function(){return this.$6op_;},function($6ot){return this.$6op_=$6ot;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:GalleryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','template$gjh3pu']};});
            
            //AttributeDecl tabsTemplate at gallery.ceylon (175:1-175:30)
            m$6mi.atr$(galleryView$,'$6oq',function(){return this.$6oq_;},function($6ou){return this.$6oq_=$6ou;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:GalleryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','tabsTemplate$2ov37k']};});
            
            //AttributeDecl categoryTabs at gallery.ceylon (177:1-177:53)
            m$6mi.atr$(galleryView$,'categoryTabs',function(){return this.$6or_;},function($6ov){return this.$6or_=$6ov;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:GalleryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};});
            
            //AttributeDecl category at gallery.ceylon (178:1-178:45)
            m$6mi.atr$(galleryView$,'category',function(){return this.$6os_;},function($6ow){return this.$6os_=$6ow;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:GalleryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','category']};});
            
            //MethodDef display at gallery.ceylon (185:1-193:1)
            galleryView$.display=function display(){
                var galleryView$=this;
                
                //AttributeDecl context at gallery.ceylon (186:2-189:6)
                var $6ox=($6oy=[m$6mi.Entry("categoryTabs",galleryView$.categoryTabs,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("category",galleryView$.category,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6oy));
                var $6oy;
                /*BEG dynblock*/
                m$6mj.jq("body").setHtml(($6oz=galleryView$.$6op($6ox.toJson().$_native),m$6mi.is$($6oz,{t:m$6mi.$_String})?$6oz:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 191:28-191:60)')}()));
                /*END dynblock*/
            };galleryView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','display']};};
            
            //MethodDef displayCategories at gallery.ceylon (195:1-209:1)
            galleryView$.displayCategories=function displayCategories(){
                var galleryView$=this;
                
                //AttributeDecl categories at gallery.ceylon (196:2-196:32)
                var $6p0=m$6mk.JSONArray();
                //'for' statement at gallery.ceylon (197:2-202:2)
                var $6p2;for(var $6p1=galleryView$.controller.categories.iterator();($6p2=$6p1.next())!==m$6mi.getFinished();){
                    /*BEG dynblock*/
                    $6p0.add(($6p3=[m$6mi.Entry("name",$6p2.model.name,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6p3)));
                    /*END dynblock*/
                    var $6p3;
                }
                
                //AttributeDecl context at gallery.ceylon (203:2-203:51)
                var $6p4=($6p5=[m$6mi.Entry("category",$6p0,{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6p5));
                var $6p5;
                /*BEG dynblock*/
                
                //AttributeDecl tabs at gallery.ceylon (205:3-205:32)
                var $6p6=$6p4.toJson();
                galleryView$.categoryTabs=($6p7=galleryView$.$6oq($6p6.$_native),m$6mi.is$($6p7,{t:m$6mi.$_String})?$6p7:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 206:18-206:42)')}());/*END dynblock*/
                galleryView$.display();
            };galleryView$.displayCategories.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','displayCategories']};};
            
            //MethodDef displayInvalidCategory at gallery.ceylon (211:1-213:1)
            galleryView$.displayInvalidCategory=function displayInvalidCategory(){
            };galleryView$.displayInvalidCategory.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','displayInvalidCategory']};};
            
            //MethodDef isMobile at gallery.ceylon (215:1-217:1)
            galleryView$.isMobile=function isMobile(){
                m$6mi.print("is mobile");
            };galleryView$.isMobile.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','isMobile']};};
            
            //MethodDef isDesktop at gallery.ceylon (219:1-221:1)
            galleryView$.isDesktop=function isDesktop(){
                m$6mi.print("is desktop");
            };galleryView$.isDesktop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','isDesktop']};};
            m$6mi.atr$(galleryView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:GalleryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','controller']};});
        })(GalleryView.$$.prototype);
    }
    return GalleryView;
}
ex$.$init$GalleryView=$init$GalleryView;
$init$GalleryView();

//ClassDef Category at gallery.ceylon (224:0-272:0)
function Category(parent,category$){
    $init$Category();
    if(category$===undefined)category$=new Category.$$;
    category$.parent_=parent;
    
    //AttributeDecl model at gallery.ceylon (225:1-225:32)
    category$.$6p8_=undefined;
    category$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};}};
    category$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (226:1-226:30)
    category$.$6p9_=undefined;
    category$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};}};
    category$.$prop$getView.get=function(){return view};
    
    //AttributeDecl pages at gallery.ceylon (227:1-227:34)
    category$.$6pa_=m$6mi.getEmpty();
    category$.$prop$getPages={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Page}}},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','pages']};}};
    category$.$prop$getPages.get=function(){return pages};
    return category$;
}
Category.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'parent',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category']};};
ex$.Category=Category;
function $init$Category(){
    if(Category.$$===undefined){
        m$6mi.initTypeProto(Category,'com.openswimsoftware.ceylon.examples.photogallery::Category',m$6mi.Basic);
        (function(category$){
            
            //AttributeDecl model at gallery.ceylon (225:1-225:32)
            m$6mi.atr$(category$,'model',function(){if(this.$6p8_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return this.$6p8_;},function($6pb){if(this.$6p8_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$6p8_=$6pb;},function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (226:1-226:30)
            m$6mi.atr$(category$,'view',function(){if(this.$6p9_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return this.$6p9_;},function($6pc){if(this.$6p9_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$6p9_=$6pc;},function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};});
            
            //AttributeDecl pages at gallery.ceylon (227:1-227:34)
            m$6mi.atr$(category$,'pages',function(){return this.$6pa_;},function($6pd){return this.$6pa_=$6pd;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Page}}},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','pages']};});
            
            //MethodDef init at gallery.ceylon (229:1-237:1)
            category$.init=function init($6pe,$6pf,$6pg){
                var category$=this;
                m$6mi.print("initalizing category");
                var model=CategoryModel(category$,$6pe);
                m$6mi.atr$(category$,'model',function(){if(model===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($6ph){if(model!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$6ph;},function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};});
                var view=CategoryView(category$);
                m$6mi.atr$(category$,'view',function(){if(view===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($6pi){if(view!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$6pi;},function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};});
                category$.setPages($6pf,$6pg);
                return category$;
            };category$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}},{$nm:'photos',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','init']};};
            
            //MethodDef updatePage at gallery.ceylon (239:1-242:1)
            category$.updatePage=function updatePage($6pj){
                var category$=this;
                (category$.view.page=$6pj);
                category$.view.display();
            };category$.updatePage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','updatePage']};};
            
            //MethodDef display at gallery.ceylon (244:1-255:1)
            category$.display=function display($6pk,$6pl){
                var category$=this;
                m$6mi.print("display category ".plus(category$.model.name).plus(" page ").plus($6pk.string).plus(" photo ").plus($6pl.string));
                category$.view.display();
                var $6pm;
                if(($6pm=category$.pages.$_get($6pk))!==null){
                    m$6mi.print("display page");
                    category$.view.displayPage($6pk);
                    $6pm.display($6pl);
                }else {
                    m$6mi.print("display invalid page");
                    category$.view.displayInvalidPage();
                }
            };category$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}},{$nm:'photoNum',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','display']};};
            
            //MethodDef displayPhoto at gallery.ceylon (257:1-265:1)
            category$.displayPhoto=function displayPhoto($6pn){
                var category$=this;
                var $6po;
                if(($6po=$6pn)!==null){
                    m$6mi.print("display photo");
                    category$.view.displayPhoto($6po);
                }else {
                    m$6mi.print("display no photo");
                    category$.view.displayNoPhoto();
                }
            };category$.displayPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{t:'u',l:[{t:m$6mi.Null},{t:Photo}]},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','displayPhoto']};};
            
            //MethodDef setPages at gallery.ceylon (267:1-271:1)
            category$.setPages=function setPages($6pp,$6pq){
                var category$=this;
                m$6mi.print("set category pages");
                
                //AttributeDecl end at gallery.ceylon (269:2-269:37)
                var $6pr=(1).plus($6pp.size.divided(6));
                category$.pages=m$6mi.tpl$([],undefined,m$6mi.Comprehension(function(){
                    //Comprehension at gallery.ceylon (270:11-270:103)
                    var $6ps=(function(){var $6pu=$6pr;
                    return $6pu>0?m$6mi.Range(0,0+$6pu-1,{Element$Sequential:{t:m$6mi.Integer}}):m$6mi.getEmpty();}()).iterator();
                    var $6pt=m$6mi.getFinished();
                    var next$6pt=function(){return $6pt=$6ps.next();}
                    next$6pt();
                    return function(){
                        if($6pt!==m$6mi.getFinished()){
                            var $6pw=$6pt;
                            var $6px=Page(category$,category$.model.uri.plus($6pw.string).plus("/")).init($6pp.segment($6pw.times(6),6),$6pq);
                            next$6pt();
                            return $6px;
                        }
                        return m$6mi.getFinished();
                    }
                },{Element$Iterable:{t:Page},Absent$Iterable:{t:m$6mi.Null}}));
            };category$.setPages.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','setPages']};};
            m$6mi.atr$(category$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:Category,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','parent']};});
        })(Category.$$.prototype);
    }
    return Category;
}
ex$.$init$Category=$init$Category;
$init$Category();

//ClassDef CategoryModel at gallery.ceylon (274:0-276:0)
function CategoryModel(controller,name,categoryModel$){
    $init$CategoryModel();
    if(categoryModel$===undefined)categoryModel$=new CategoryModel.$$;
    categoryModel$.controller_=controller;
    categoryModel$.name_=name;
    
    //AttributeDecl uri at gallery.ceylon (275:1-275:50)
    categoryModel$.$prop$getUri={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','uri']};}};
    categoryModel$.$prop$getUri.get=function(){return uri};
    return categoryModel$;
}
CategoryModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Category},$an:function(){return[m$6mi.shared()];}},{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel']};};
ex$.CategoryModel=CategoryModel;
function $init$CategoryModel(){
    if(CategoryModel.$$===undefined){
        m$6mi.initTypeProto(CategoryModel,'com.openswimsoftware.ceylon.examples.photogallery::CategoryModel',m$6mi.Basic);
        (function(categoryModel$){
            
            //AttributeDecl uri at gallery.ceylon (275:1-275:50)
            m$6mi.atr$(categoryModel$,'uri',function(){
                var categoryModel$=this;
                return "#/".plus(categoryModel$.name.lowercased).plus("/");
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','uri']};});
            m$6mi.atr$(categoryModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:CategoryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','controller']};});
            m$6mi.atr$(categoryModel$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','name']};});
        })(CategoryModel.$$.prototype);
    }
    return CategoryModel;
}
ex$.$init$CategoryModel=$init$CategoryModel;
$init$CategoryModel();

//ClassDef CategoryView at gallery.ceylon (278:0-356:0)
function CategoryView(controller,categoryView$){
    $init$CategoryView();
    if(categoryView$===undefined)categoryView$=new CategoryView.$$;
    categoryView$.controller_=controller;
    
    //AttributeDecl template at gallery.ceylon (279:1-279:26)
    categoryView$.$prop$get$6py={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:CategoryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','template$ttmu8y']};}};
    categoryView$.$prop$get$6py.get=function(){return $6py};
    
    //AttributeDecl paginationTemplate at gallery.ceylon (280:1-280:36)
    categoryView$.$prop$get$6pz={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:CategoryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','paginationTemplate$grci0']};}};
    categoryView$.$prop$get$6pz.get=function(){return $6pz};
    
    //AttributeDecl pagination at gallery.ceylon (282:1-282:49)
    categoryView$.$6q0_="pagination";
    categoryView$.$prop$getPagination={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','pagination']};}};
    categoryView$.$prop$getPagination.get=function(){return pagination};
    
    //AttributeDecl page at gallery.ceylon (283:1-283:37)
    categoryView$.$6q1_="page";
    categoryView$.$prop$getPage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','page']};}};
    categoryView$.$prop$getPage.get=function(){return page};
    
    //AttributeDecl title at gallery.ceylon (284:1-284:34)
    categoryView$.$6q2_="";
    categoryView$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','title']};}};
    categoryView$.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl src at gallery.ceylon (285:1-285:32)
    categoryView$.$6q3_="";
    categoryView$.$prop$getSrc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','src']};}};
    categoryView$.$prop$getSrc.get=function(){return src};
    
    //AttributeDecl alt at gallery.ceylon (286:1-286:32)
    categoryView$.$6q4_="";
    categoryView$.$prop$getAlt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','alt']};}};
    categoryView$.$prop$getAlt.get=function(){return alt};
    
    //AttributeDecl caption at gallery.ceylon (287:1-287:36)
    categoryView$.$6q5_="";
    categoryView$.$prop$getCaption={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','caption']};}};
    categoryView$.$prop$getCaption.get=function(){return caption};
    
    //AttributeDecl width at gallery.ceylon (288:1-288:34)
    categoryView$.$6q6_="";
    categoryView$.$prop$getWidth={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','width']};}};
    categoryView$.$prop$getWidth.get=function(){return width};
    
    //AttributeDecl height at gallery.ceylon (289:1-289:35)
    categoryView$.$6q7_="";
    categoryView$.$prop$getHeight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','height']};}};
    categoryView$.$prop$getHeight.get=function(){return height};
    /*BEG dynblock*/
    categoryView$.$6py=(typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'292:13-292:22','gallery.ceylon'):Handlebars).compile(m$6mj.jq("#category-template").getHtml().$_native);categoryView$.$6pz=(typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'293:23-293:32','gallery.ceylon'):Handlebars).compile(m$6mj.jq("#category-pagination-template").getHtml().$_native);/*END dynblock*/
    return categoryView$;
}
CategoryView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Category},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView']};};
ex$.CategoryView=CategoryView;
function $init$CategoryView(){
    if(CategoryView.$$===undefined){
        m$6mi.initTypeProto(CategoryView,'com.openswimsoftware.ceylon.examples.photogallery::CategoryView',m$6mi.Basic);
        (function(categoryView$){
            
            //AttributeDecl template at gallery.ceylon (279:1-279:26)
            m$6mi.atr$(categoryView$,'$6py',function(){return this.$6py_;},function($6q8){return this.$6py_=$6q8;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:CategoryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','template$ttmu8y']};});
            
            //AttributeDecl paginationTemplate at gallery.ceylon (280:1-280:36)
            m$6mi.atr$(categoryView$,'$6pz',function(){return this.$6pz_;},function($6q9){return this.$6pz_=$6q9;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:CategoryView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','paginationTemplate$grci0']};});
            
            //AttributeDecl pagination at gallery.ceylon (282:1-282:49)
            m$6mi.atr$(categoryView$,'pagination',function(){return this.$6q0_;},function($6qa){return this.$6q0_=$6qa;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','pagination']};});
            
            //AttributeDecl page at gallery.ceylon (283:1-283:37)
            m$6mi.atr$(categoryView$,'page',function(){return this.$6q1_;},function($6qb){return this.$6q1_=$6qb;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','page']};});
            
            //AttributeDecl title at gallery.ceylon (284:1-284:34)
            m$6mi.atr$(categoryView$,'title',function(){return this.$6q2_;},function($6qc){return this.$6q2_=$6qc;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','title']};});
            
            //AttributeDecl src at gallery.ceylon (285:1-285:32)
            m$6mi.atr$(categoryView$,'src',function(){return this.$6q3_;},function($6qd){return this.$6q3_=$6qd;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','src']};});
            
            //AttributeDecl alt at gallery.ceylon (286:1-286:32)
            m$6mi.atr$(categoryView$,'alt',function(){return this.$6q4_;},function($6qe){return this.$6q4_=$6qe;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','alt']};});
            
            //AttributeDecl caption at gallery.ceylon (287:1-287:36)
            m$6mi.atr$(categoryView$,'caption',function(){return this.$6q5_;},function($6qf){return this.$6q5_=$6qf;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','caption']};});
            
            //AttributeDecl width at gallery.ceylon (288:1-288:34)
            m$6mi.atr$(categoryView$,'width',function(){return this.$6q6_;},function($6qg){return this.$6q6_=$6qg;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','width']};});
            
            //AttributeDecl height at gallery.ceylon (289:1-289:35)
            m$6mi.atr$(categoryView$,'height',function(){return this.$6q7_;},function($6qh){return this.$6q7_=$6qh;},function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryView,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','height']};});
            
            //MethodDef display at gallery.ceylon (296:1-313:1)
            categoryView$.display=function display(){
                var categoryView$=this;
                m$6mi.print("display category");
                
                //AttributeDecl context at gallery.ceylon (298:2-306:3)
                var $6qi=($6qj=[m$6mi.Entry("title",categoryView$.title,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("width",categoryView$.width,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("src",categoryView$.src,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("alt",categoryView$.alt,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("caption",categoryView$.caption,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("page",categoryView$.page,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("pagination",categoryView$.pagination,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6qj));
                var $6qj;
                m$6mi.print("src: ".plus(categoryView$.src));
                /*BEG dynblock*/
                categoryView$.controller.parent.updateCategory(($6qk=categoryView$.$6py($6qi.toJson().$_native),m$6mi.is$($6qk,{t:m$6mi.$_String})?$6qk:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 309:36-309:68)')}()));
                m$6mj.jq(".category").each(m$6mi.$JsCallable((function ($6ql,$6qm){
                    return m$6mj.jqThis().removeClass("active");
                }),[{$nm:'index',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:m$6mi.Anything},$an:function(){return[];}}],{Arguments$Callable:{t:'T',l:[{t:m$6mi.Integer},{t:m$6mi.Anything}]},Return$Callable:{t:m$6mj.JQuery}}));
                m$6mj.jq(".category-".plus(categoryView$.controller.model.name.lowercased)).addClass("active");
                /*END dynblock*/
            };categoryView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','display']};};
            
            //MethodDef displayPhoto at gallery.ceylon (315:1-328:1)
            categoryView$.displayPhoto=function displayPhoto($6qn){
                var categoryView$=this;
                var $6qo;
                if(($6qo=$6qn.width)!==null){
                    categoryView$.width=$6qo.string;
                }
                var $6qp;
                if(($6qp=$6qn.height)!==null){
                    categoryView$.height=$6qp.string;
                }
                categoryView$.src=$6qn.src;
                categoryView$.alt=$6qn.alt;
                categoryView$.caption=$6qn.caption;
                categoryView$.title=$6qn.title;
                categoryView$.display();
                m$6mj.jq(".display-photo").stop(true,true).hide().fadeIn(800);
            };categoryView$.displayPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayPhoto']};};
            
            //MethodDef displayNoPhoto at gallery.ceylon (330:1-332:1)
            categoryView$.displayNoPhoto=function displayNoPhoto(){
            };categoryView$.displayNoPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayNoPhoto']};};
            
            //MethodDef displayInvalidPage at gallery.ceylon (334:1-336:1)
            categoryView$.displayInvalidPage=function displayInvalidPage(){
            };categoryView$.displayInvalidPage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayInvalidPage']};};
            
            //MethodDef displayPage at gallery.ceylon (338:1-355:1)
            categoryView$.displayPage=function displayPage($6qq){
                var categoryView$=this;
                
                //AttributeDecl pages at gallery.ceylon (339:2-339:27)
                var $6qr=m$6mk.JSONArray();
                //'for' statement at gallery.ceylon (340:2-342:2)
                var $6qt;for(var $6qs=categoryView$.controller.pages.iterator();($6qt=$6qs.next())!==m$6mi.getFinished();){
                    $6qr.add(($6qu=[m$6mi.Entry("uri",$6qt.uri,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6qu)));
                    var $6qu;
                }
                
                //AttributeDecl context at gallery.ceylon (343:2-348:6)
                var $6qv=($6qw=[m$6mi.Entry("uri",categoryView$.controller.model.uri,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("page",$6qq,{Item$Entry:{t:m$6mi.Integer},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("lastPage",categoryView$.controller.pages.size.minus(1),{Item$Entry:{t:m$6mi.Integer},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("pages",$6qr,{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:'u',l:[{t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}},{t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.Integer},Key$Entry:{t:m$6mi.$_String}}},{t:m$6mi.Entry,a:{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}}}]}),m$6mk.JSON($6qw));
                var $6qw;
                /*BEG dynblock*/
                m$6mi.print("displaying page with properties:".plus($6qv.string));
                categoryView$.pagination=($6qx=categoryView$.$6pz($6qv.toJson().$_native),m$6mi.is$($6qx,{t:m$6mi.$_String})?$6qx:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 352:22-352:64)')}());/*END dynblock*/
                categoryView$.display();
            };categoryView$.displayPage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayPage']};};
            m$6mi.atr$(categoryView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:CategoryView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','controller']};});
        })(CategoryView.$$.prototype);
    }
    return CategoryView;
}
ex$.$init$CategoryView=$init$CategoryView;
$init$CategoryView();

//ClassDef CategoryJSON at gallery.ceylon (358:0-358:74)
function CategoryJSON(name,photos,categoryJSON$){
    $init$CategoryJSON();
    if(categoryJSON$===undefined)categoryJSON$=new CategoryJSON.$$;
    categoryJSON$.name_=name;
    categoryJSON$.photos_=photos;
    return categoryJSON$;
}
CategoryJSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'photos',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON']};};
ex$.CategoryJSON=CategoryJSON;
function $init$CategoryJSON(){
    if(CategoryJSON.$$===undefined){
        m$6mi.initTypeProto(CategoryJSON,'com.openswimsoftware.ceylon.examples.photogallery::CategoryJSON',m$6mi.Basic);
        (function(categoryJSON$){
            m$6mi.atr$(categoryJSON$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:CategoryJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON','$at','name']};});
            m$6mi.atr$(categoryJSON$,'photos',function(){return this.photos_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$cont:CategoryJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON','$at','photos']};});
        })(CategoryJSON.$$.prototype);
    }
    return CategoryJSON;
}
ex$.$init$CategoryJSON=$init$CategoryJSON;
$init$CategoryJSON();

//ClassDef Page at gallery.ceylon (360:0-381:0)
function Page(parent,uri,page$){
    $init$Page();
    if(page$===undefined)page$=new Page.$$;
    page$.parent_=parent;
    page$.uri_=uri;
    
    //AttributeDecl model at gallery.ceylon (361:1-361:28)
    page$.$6qy_=undefined;
    page$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};}};
    page$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (362:1-362:26)
    page$.$6qz_=undefined;
    page$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};}};
    page$.$prop$getView.get=function(){return view};
    return page$;
}
Page.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'parent',$mt:'prm',$t:{t:Category},$an:function(){return[m$6mi.shared()];}},{$nm:'uri',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page']};};
ex$.Page=Page;
function $init$Page(){
    if(Page.$$===undefined){
        m$6mi.initTypeProto(Page,'com.openswimsoftware.ceylon.examples.photogallery::Page',m$6mi.Basic);
        (function(page$){
            
            //AttributeDecl model at gallery.ceylon (361:1-361:28)
            m$6mi.atr$(page$,'model',function(){if(this.$6qy_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return this.$6qy_;},function($6r0){if(this.$6qy_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$6qy_=$6r0;},function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (362:1-362:26)
            m$6mi.atr$(page$,'view',function(){if(this.$6qz_===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return this.$6qz_;},function($6r1){if(this.$6qz_!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$6qz_=$6r1;},function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};});
            
            //MethodDef init at gallery.ceylon (364:1-372:1)
            page$.init=function init($6r2,$6r3){
                var page$=this;
                m$6mi.print("initalize page: ".plus(page$.uri));
                var model=PageModel(page$);
                m$6mi.atr$(page$,'model',function(){if(model===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($6r4){if(model!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$6r4;},function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};});
                var view=PageView(page$);
                m$6mi.atr$(page$,'view',function(){if(view===undefined)throw m$6mi.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($6r5){if(view!==undefined)throw m$6mi.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$6r5;},function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$6mi.shared(),m$6mi.late(),m$6mi.shared(),m$6mi.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};});
                page$.model.parsePhotos($6r2,$6r3);
                return page$;
            };page$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:Page,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$m','init']};};
            
            //MethodDef display at gallery.ceylon (374:1-379:1)
            page$.display=function display($6r6){
                var page$=this;
                m$6mi.print("display page: ".plus(page$.uri));
                page$.view.display();
                m$6mi.print("display photo: ".plus($6r6.string));
                page$.parent.displayPhoto(page$.model.photos.$_get($6r6));
            };page$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photoNum',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:Page,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$m','display']};};
            m$6mi.atr$(page$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:Page,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','parent']};});
            m$6mi.atr$(page$,'uri',function(){return this.uri_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Page,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','uri']};});
        })(Page.$$.prototype);
    }
    return Page;
}
ex$.$init$Page=$init$Page;
$init$Page();

//ClassDef PageModel at gallery.ceylon (383:0-390:0)
function PageModel(controller,pageModel$){
    $init$PageModel();
    if(pageModel$===undefined)pageModel$=new PageModel.$$;
    pageModel$.controller_=controller;
    
    //AttributeDecl photos at gallery.ceylon (384:1-384:36)
    pageModel$.$6r7_=m$6mi.getEmpty();
    pageModel$.$prop$getPhotos={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Photo}}},$cont:PageModel,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','photos']};}};
    pageModel$.$prop$getPhotos.get=function(){return photos};
    return pageModel$;
}
PageModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Page},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel']};};
ex$.PageModel=PageModel;
function $init$PageModel(){
    if(PageModel.$$===undefined){
        m$6mi.initTypeProto(PageModel,'com.openswimsoftware.ceylon.examples.photogallery::PageModel',m$6mi.Basic);
        (function(pageModel$){
            
            //AttributeDecl photos at gallery.ceylon (384:1-384:36)
            m$6mi.atr$(pageModel$,'photos',function(){return this.$6r7_;},function($6r8){return this.$6r7_=$6r8;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:Photo}}},$cont:PageModel,$an:function(){return[m$6mi.shared(),m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','photos']};});
            
            //MethodDef parsePhotos at gallery.ceylon (386:1-389:1)
            pageModel$.parsePhotos=function parsePhotos($6r9,$6ra){
                var pageModel$=this;
                m$6mi.print("parsing photos");
                pageModel$.photos=m$6mi.tpl$([],undefined,m$6mi.Comprehension(function(){
                    //Comprehension at gallery.ceylon (388:14-388:159)
                    var $6rb=$6r9.iterator();
                    var $6rc=m$6mi.getFinished();
                    var next$6rc=function(){return $6rc=$6rb.next();}
                    next$6rc();
                    return function(){
                        if($6rc!==m$6mi.getFinished()){
                            var $6rd=$6rc;
                            var $6re=Photo($6rd.title,$6rd.caption,$6ra.plus("/").plus($6rd.src),$6ra.plus("/").plus($6rd.thumb),$6rd.height,$6rd.width,$6rd.alt);
                            next$6rc();
                            return $6re;
                        }
                        return m$6mi.getFinished();
                    }
                },{Element$Iterable:{t:Photo},Absent$Iterable:{t:m$6mi.Null}}));
            };pageModel$.parsePhotos.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:m$6mi.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$cont:PageModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$m','parsePhotos']};};
            m$6mi.atr$(pageModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Page},$cont:PageModel,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','controller']};});
        })(PageModel.$$.prototype);
    }
    return PageModel;
}
ex$.$init$PageModel=$init$PageModel;
$init$PageModel();

//ClassDef PageView at gallery.ceylon (392:0-431:0)
function PageView(controller,pageView$){
    $init$PageView();
    if(pageView$===undefined)pageView$=new PageView.$$;
    pageView$.controller_=controller;
    
    //AttributeDecl template at gallery.ceylon (393:1-393:26)
    pageView$.$prop$get$6rf={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:PageView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','template$dxvsy1']};}};
    pageView$.$prop$get$6rf.get=function(){return $6rf};
    /*BEG dynblock*/
    pageView$.$6rf=(typeof Handlebars==='undefined'||Handlebars===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: Handlebars"),'396:13-396:22','gallery.ceylon'):Handlebars).compile(m$6mj.jq("#page-template").getHtml().$_native);/*END dynblock*/
    return pageView$;
}
PageView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Page},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView']};};
ex$.PageView=PageView;
function $init$PageView(){
    if(PageView.$$===undefined){
        m$6mi.initTypeProto(PageView,'com.openswimsoftware.ceylon.examples.photogallery::PageView',m$6mi.Basic);
        (function(pageView$){
            
            //AttributeDecl template at gallery.ceylon (393:1-393:26)
            m$6mi.atr$(pageView$,'$6rf',function(){return this.$6rf_;},function($6rg){return this.$6rf_=$6rg;},function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$cont:PageView,$an:function(){return[m$6mi.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','template$dxvsy1']};});
            
            //MethodDef display at gallery.ceylon (399:1-422:1)
            pageView$.display=function display(){
                var pageView$=this;
                
                //AttributeDecl photos at gallery.ceylon (400:2-400:28)
                var $6rh=m$6mk.JSONArray();
                //'for' statement at gallery.ceylon (401:2-408:2)
                var $6rj;for(var $6ri=pageView$.controller.model.photos.iterator();($6rj=$6ri.next())!==m$6mi.getFinished();){
                    $6rh.add(($6rk=[m$6mi.Entry("title",$6rj.title,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("uri",pageView$.controller.uri,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("src",$6rj.thumb,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}),m$6mi.Entry("alt",$6rj.alt,{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mi.$_String},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6rk)));
                    var $6rk;
                }
                
                //AttributeDecl context at gallery.ceylon (409:2-411:6)
                var $6rl=($6rm=[m$6mi.Entry("photos",$6rh,{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}})].reifyCeylonType({t:m$6mi.Entry,a:{Item$Entry:{t:m$6mk.JSONArray},Key$Entry:{t:m$6mi.$_String}}}),m$6mk.JSON($6rm));
                var $6rm;
                /*BEG dynblock*/
                pageView$.controller.parent.updatePage(($6rn=pageView$.$6rf($6rl.toJson().$_native),m$6mi.is$($6rn,{t:m$6mi.$_String})?$6rn:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 413:32-413:64)')}()));
                /*END dynblock*/
                //'for' statement at gallery.ceylon (415:2-421:2)
                var $6rp=(0),$6rq=$6rh.size;for(var $6rr=0;$6rr<$6rq;$6rr++,($6rp=$6rp.successor)){
                    /*BEG dynblock*/
                    m$6mj.jq(".photo".plus($6rp.string)).hide();
                    m$6mj.jq(".photo".plus($6rp.string)).on("load",null,null,m$6mi.$JsCallable((function ($6rs){
                        return pageView$.$6rt($6rp);
                    }),[{$nm:'event',$mt:'prm',$t:{t:m$6mi.Anything},$an:function(){return[];}}],{Arguments$Callable:{t:'T',l:[{t:m$6mi.Anything}]},Return$Callable:{t:m$6mi.Anything}}));
                    spin(m$6mj.jq(".photo".plus($6rp.string)).parent()).spinPreset("small");
                    /*END dynblock*/
                }
            };pageView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[],$cont:PageView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$m','display']};};
            
            //MethodDef photoLoaded at gallery.ceylon (424:1-429:1)
            pageView$.$6rt=function $6rt($6ru){
                var pageView$=this;
                /*BEG dynblock*/
                spin(m$6mj.jq(($6rv=(typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'426:11-426:14','gallery.ceylon'):this),m$6mi.is$($6rv,{t:'u',l:[{t:m$6mi.$_String},{t:m$6mj.JQuery},{t:m$6ml.JSObject},{t:'u',l:[{t:m$6mi.Null},{t:m$6rw.Element}]}]})?$6rv:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 426:11-426:14)')}())).parent()).spinStop();
                m$6mj.jq(($6rx=(typeof this==='undefined'||this===null?m$6mi.throwexc(m$6mi.Exception("Undefined or null reference: this"),'427:6-427:9','gallery.ceylon'):this),m$6mi.is$($6rx,{t:'u',l:[{t:m$6mi.$_String},{t:m$6mj.JQuery},{t:m$6ml.JSObject},{t:'u',l:[{t:m$6mi.Null},{t:m$6rw.Element}]}]})?$6rx:function(){throw new Error('dynamic objects cannot be used here (gallery.ceylon 427:6-427:9)')}())).show();
                /*END dynblock*/
            };pageView$.$6rt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:m$6mi.Integer},$an:function(){return[];}}],$cont:PageView,d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$m','photoLoaded$s0bjlg']};};
            m$6mi.atr$(pageView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Page},$cont:PageView,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','controller']};});
        })(PageView.$$.prototype);
    }
    return PageView;
}
ex$.$init$PageView=$init$PageView;
$init$PageView();

//ClassDef Photo at gallery.ceylon (433:0-433:170)
function Photo(title,caption,src,thumb,height,width,alt,photo$){
    $init$Photo();
    if(photo$===undefined)photo$=new Photo.$$;
    photo$.title_=title;
    photo$.caption_=caption;
    photo$.src_=src;
    photo$.thumb_=thumb;
    photo$.height_=height;
    photo$.width_=width;
    photo$.alt_=alt;
    return photo$;
}
Photo.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'title',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'caption',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'src',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'thumb',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'height',$mt:'prm',$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$an:function(){return[m$6mi.shared()];}},{$nm:'width',$mt:'prm',$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$an:function(){return[m$6mi.shared()];}},{$nm:'alt',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo']};};
ex$.Photo=Photo;
function $init$Photo(){
    if(Photo.$$===undefined){
        m$6mi.initTypeProto(Photo,'com.openswimsoftware.ceylon.examples.photogallery::Photo',m$6mi.Basic);
        (function(photo$){
            m$6mi.atr$(photo$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','title']};});
            m$6mi.atr$(photo$,'caption',function(){return this.caption_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','caption']};});
            m$6mi.atr$(photo$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','src']};});
            m$6mi.atr$(photo$,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','thumb']};});
            m$6mi.atr$(photo$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','height']};});
            m$6mi.atr$(photo$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','width']};});
            m$6mi.atr$(photo$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:Photo,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','alt']};});
        })(Photo.$$.prototype);
    }
    return Photo;
}
ex$.$init$Photo=$init$Photo;
$init$Photo();

//ClassDef PhotoJSON at gallery.ceylon (435:0-435:173)
function PhotoJSON(title,caption,src,thumb,height,width,alt,photoJSON$){
    $init$PhotoJSON();
    if(photoJSON$===undefined)photoJSON$=new PhotoJSON.$$;
    photoJSON$.title_=title;
    photoJSON$.caption_=caption;
    photoJSON$.src_=src;
    photoJSON$.thumb_=thumb;
    photoJSON$.height_=height;
    photoJSON$.width_=width;
    photoJSON$.alt_=alt;
    return photoJSON$;
}
PhotoJSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$6mi.Basic},$ps:[{$nm:'title',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'caption',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'src',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'thumb',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}},{$nm:'height',$mt:'prm',$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$an:function(){return[m$6mi.shared()];}},{$nm:'width',$mt:'prm',$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$an:function(){return[m$6mi.shared()];}},{$nm:'alt',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[m$6mi.shared()];}}],$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON']};};
ex$.PhotoJSON=PhotoJSON;
function $init$PhotoJSON(){
    if(PhotoJSON.$$===undefined){
        m$6mi.initTypeProto(PhotoJSON,'com.openswimsoftware.ceylon.examples.photogallery::PhotoJSON',m$6mi.Basic);
        (function(photoJSON$){
            m$6mi.atr$(photoJSON$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','title']};});
            m$6mi.atr$(photoJSON$,'caption',function(){return this.caption_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','caption']};});
            m$6mi.atr$(photoJSON$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','src']};});
            m$6mi.atr$(photoJSON$,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','thumb']};});
            m$6mi.atr$(photoJSON$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','height']};});
            m$6mi.atr$(photoJSON$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$6mi.Null},{t:m$6mi.Integer}]},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','width']};});
            m$6mi.atr$(photoJSON$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$6mi.$_String},$cont:PhotoJSON,$an:function(){return[m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','alt']};});
        })(PhotoJSON.$$.prototype);
    }
    return PhotoJSON;
}
ex$.$init$PhotoJSON=$init$PhotoJSON;
$init$PhotoJSON();

//MethodDef init at run.ceylon (1:0-5:0)
function init($6ry){
    Gallery().init($6ry);
}
ex$.init=init;
init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$6mi.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:m$6mi.$_String},$an:function(){return[];}}],$an:function(){return[m$6mi.doc("Run the module `ceylon.examples.photogallery`."),m$6mi.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','init']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
