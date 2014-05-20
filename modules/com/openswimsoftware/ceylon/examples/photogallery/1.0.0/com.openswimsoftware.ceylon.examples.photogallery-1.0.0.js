(function(define) { define(function(require, ex$, module) {
var $CCMM$={"$mod-version":"1.0.0","$mod-deps":[{exp:1,path:"com.openswimsoftware.ceylon.js.jquery\/1.10.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.language\/1.8.0"},{exp:1,path:"com.openswimsoftware.ceylon.js.json\/1.0.0"},{exp:1,path:"ceylon.language\/1.1.0"}],"com.openswimsoftware.ceylon.examples.photogallery":{init:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[],doc:["Run the module `ceylon.examples.photogallery`."]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"galleryDir",$mt:"prm"}]],$mt:"m"},PageView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PageView",$ps:[{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},template$99k86u:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"}},$m:{display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},photoLoaded$4svigl:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"photoLoaded",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photo",$mt:"prm"}]],$mt:"m"}},$mt:"c"},Category:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Category",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"prm"}],$at:{parent:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"a"},view:{$t:{$nm:"CategoryView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},pages:{$t:{$tp:[{$nm:"Page",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"pages",var:1,$mt:"a"},model:{$t:{$nm:"CategoryModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"}},$m:{init:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photos",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},setPages:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"setPages",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photosJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},updatePage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"updatePage",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"}]],$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"pageNum",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photoNum",$mt:"prm"}]],$mt:"m"},displayPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPhoto",$ps:[[{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Photo",$pk:"."}]},$nm:"photoM",$mt:"prm"}]],$mt:"m"}},$mt:"c"},SpinOptions:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"SpinOptions",$ps:[{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"lines",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"length",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"width",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"radius",$mt:"prm"},{$def:1,$t:{$nm:"Float",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"corners",$mt:"prm"},{$def:1,$t:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"direction",$mt:"prm"},{$def:1,$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"color",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"Float",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"speed",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"trail",$mt:"prm"},{$def:1,$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"shadow",$mt:"prm"},{$def:1,$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"hardwareAccel",$mt:"prm"},{$def:1,$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"className",$mt:"prm"},{$def:1,$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"zIndex",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"top",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"left",$mt:"prm"}],$at:{color:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"color",$mt:"a"},shadow:{$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"shadow",$mt:"a"},length:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"length",$mt:"a"},className:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"className",$mt:"a"},speed:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"Float",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"speed",$mt:"a"},trail:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"trail",$mt:"a"},corners:{$t:{$nm:"Float",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"corners",$mt:"a"},top:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"top",$mt:"a"},left:{$t:{comp:"u",$ts:[{$nm:"Integer",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"left",$mt:"a"},hardwareAccel:{$t:{$nm:"Boolean",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"hardwareAccel",$mt:"a"},width:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"width",$mt:"a"},lines:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"lines",$mt:"a"},radius:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"radius",$mt:"a"},direction:{$t:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"direction",$mt:"a"},zIndex:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"zIndex",$mt:"a"}},$m:{toJson:{$t:{$nm:"JSJSON",$md:"com.openswimsoftware.ceylon.js.json",$pk:"com.openswimsoftware.ceylon.js.json"},$an:{shared:[]},$nm:"toJson",$mt:"m"}},$mt:"c"},clockwise:{super:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"clockwise",$mt:"o"},JQuerySpinAbs:{super:{$nm:"JQueryAbs",$md:"com.openswimsoftware.ceylon.js.jquery",$pk:"com.openswimsoftware.ceylon.js.jquery"},$an:{shared:[],abstract:[]},$nm:"JQuerySpinAbs",$m:{spinPreset:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinPreset",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$def:1,$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"String",$md:"ceylon.language",$pk:"$"}]},$nm:"color",$mt:"prm"}]],$mt:"m"},spin:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spin",$ps:[[{$def:1,$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"SpinOptions",$pk:"."}]},$nm:"options",$mt:"prm"}]],$mt:"m"},spinStop:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinStop",$mt:"m"},spinSetPreset:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"spinSetPreset",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"},{$t:{$nm:"SpinOptions",$pk:"."},$nm:"options",$mt:"prm"}]],$mt:"m"}},$mt:"c",abstract:1},CategoryJSON:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryJSON",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"prm"},{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"photos",$mt:"prm"}],$at:{name:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"a"},photos:{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"photos",$mt:"a"}},$mt:"c"},Page:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Page",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"prm"}],$at:{parent:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"parent",$mt:"a"},view:{$t:{$nm:"PageView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},model:{$t:{$nm:"PageModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"},uri:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"a"}},$m:{init:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photos",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photoNum",$mt:"prm"}]],$mt:"m"}},$mt:"c"},Photo:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Photo",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"prm"}],$at:{src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"a"},thumb:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"a"},width:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"a"},height:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"a"}},$mt:"c"},counterclockwise:{super:{$nm:"SpinDirection",$pk:"."},$an:{shared:[]},$nm:"counterclockwise",$mt:"o"},"$pkg-shared":1,spin:{$t:{$nm:"JQuerySpin",$pk:"."},$an:{shared:[]},$nm:"spin",$ps:[[{$t:{$nm:"JQuery",$md:"com.openswimsoftware.ceylon.js.jquery",$pk:"com.openswimsoftware.ceylon.js.jquery"},$nm:"jq",$mt:"prm"}]],$mt:"m"},Gallery:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"Gallery",$at:{view:{$t:{$nm:"GalleryView",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"view",$mt:"a"},currentCategory:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"currentCategory",$mt:"a"},model:{$t:{$nm:"GalleryModel",$pk:"."},$an:{shared:[],actual:[],late:[]},$nm:"model",$mt:"a"},categories:{$t:{$tp:[{$nm:"Category",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"categories",var:1,$mt:"a"}},$m:{loaded:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"loaded",$mt:"m"},init:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"init",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"},routePage$c93hqm:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routePage",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"}]],$mt:"m"},updateCategory:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"updateCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"category",$mt:"prm"}]],$mt:"m"},routeCategory$49aet3:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routeCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"}]],$mt:"m"},getCategory$amq5ma:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Category",$pk:"."}]},$nm:"getCategory",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"name",$mt:"prm"}]],$mt:"m"},routePhoto$bqgced:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routePhoto",$ps:[[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"categoryName",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"page",$mt:"prm"},{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"photo",$mt:"prm"}]],$mt:"m"},handlebarHelpers$kpjpvo:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"handlebarHelpers",$mt:"m"},routeIndex$c8ncit:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"routeIndex",$mt:"m"}},$mt:"c"},CategoryView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryView",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{paginationTemplate$no7dmv:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[],variable:[]},$nm:"paginationTemplate",var:1,$mt:"a"},controller:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},pagination:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"pagination",var:1,$mt:"a"},src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"src",var:1,$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"alt",var:1,$mt:"a"},width:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"width",var:1,$mt:"a"},template$6m6t43:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"caption",var:1,$mt:"a"},page:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"page",var:1,$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"title",var:1,$mt:"a"},height:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"height",var:1,$mt:"a"}},$m:{displayNoPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayNoPhoto",$mt:"m"},displayInvalidPage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayInvalidPage",$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},displayPage:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPage",$ps:[[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$nm:"pageNum",$mt:"prm"}]],$mt:"m"},displayPhoto:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayPhoto",$ps:[[{$t:{$nm:"Photo",$pk:"."},$nm:"photo",$mt:"prm"}]],$mt:"m"}},$mt:"c"},GalleryModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"GalleryModel",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"dir",$mt:"prm"}],$at:{controller:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},dir:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"dir",$mt:"a"}},$m:{loadJSON:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"loadJSON",$mt:"m"},parseCategories:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"parseCategories",$ps:[[{$t:{$tp:[{$nm:"CategoryJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"categoriesJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"status",$mt:"prm"},{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"jqXHR",$mt:"prm"}]],$mt:"m"}},$mt:"c"},JQuerySpin:{super:{$nm:"JQuerySpinAbs",$pk:"."},$an:{shared:[]},$nm:"JQuerySpin",$ps:[{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$nm:"n",$mt:"prm"}],$at:{n$npshx2:{$t:{$nm:"unknown",$pk:"."},$nm:"n",$mt:"a"},native:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[]},$nm:"native",$mt:"a"}},$mt:"c"},GalleryView:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"GalleryView",$ps:[{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Gallery",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},tabsTemplate$kikxxb:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[],variable:[]},$nm:"tabsTemplate",var:1,$mt:"a"},categoryTabs:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"categoryTabs",var:1,$mt:"a"},category:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[],variable:[]},$nm:"category",var:1,$mt:"a"},template$va6x4f:{$t:{$nm:"unknown",$pk:"."},$an:{shared:[],actual:[],variable:[]},$nm:"template",var:1,$mt:"a"}},$m:{displayCategories:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayCategories",$mt:"m"},isDesktop:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"isDesktop",$mt:"m"},displayInvalidCategory:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"displayInvalidCategory",$mt:"m"},display:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"display",$mt:"m"},isMobile:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"isMobile",$mt:"m"}},$mt:"c"},CategoryModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"CategoryModel",$ps:[{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"prm"}],$at:{controller:{$t:{$nm:"Category",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},name:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"name",$mt:"a"},uri:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"uri",$mt:"g"}},$mt:"c"},PageModel:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PageModel",$ps:[{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"prm"}],$at:{controller:{$t:{$nm:"Page",$pk:"."},$an:{shared:[]},$nm:"controller",$mt:"a"},photos:{$t:{$tp:[{$nm:"Photo",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$an:{shared:[],actual:[],variable:[]},$nm:"photos",var:1,$mt:"a"}},$m:{parsePhotos:{$t:{$nm:"Anything",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"parsePhotos",$ps:[[{$t:{$tp:[{$nm:"PhotoJSON",$mt:"tp",$pk:"."}],$nm:"Sequential",$md:"ceylon.language",$pk:"$"},$nm:"photosJSON",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$nm:"dir",$mt:"prm"}]],$mt:"m"}},$mt:"c"},PhotoJSON:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"PhotoJSON",$ps:[{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"prm"},{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"prm"},{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"prm"}],$at:{src:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"src",$mt:"a"},thumb:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"thumb",$mt:"a"},width:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"width",$mt:"a"},alt:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"alt",$mt:"a"},caption:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"caption",$mt:"a"},title:{$t:{$nm:"String",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"title",$mt:"a"},height:{$t:{comp:"u",$ts:[{$nm:"Null",$md:"ceylon.language",$pk:"$"},{$nm:"Integer",$md:"ceylon.language",$pk:"$"}]},$an:{shared:[]},$nm:"height",$mt:"a"}},$mt:"c"},SpinDirection:{super:{$nm:"Basic",$md:"ceylon.language",$pk:"$"},$an:{shared:[],abstract:[]},$nm:"SpinDirection",$ps:[{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"direc",$mt:"prm"}],of:[{$nm:"clockwise",$pk:"."},{$nm:"counterclockwise",$pk:"."}],$at:{direc:{$t:{$nm:"Integer",$md:"ceylon.language",$pk:"$"},$an:{shared:[]},$nm:"direc",$mt:"a"}},$mt:"c",abstract:1}},"$mod-bin":"7.0","$mod-name":"com.openswimsoftware.ceylon.examples.photogallery"};
ex$.$CCMM$=function(){return $CCMM$;};
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');

//MethodDef init at run.ceylon (1:0-5:0)
function init($2){
    Gallery().init($2);
}
ex$.init=init;
init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'galleryDir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$an:function(){return[m$1.doc("Run the module `ceylon.examples.photogallery`."),m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','init']};};
ex$.$pkg$ans$com$openswimsoftware$ceylon$examples$photogallery=function(){return[m$1.shared()];};
ex$.$mod$ans$=[];
ex$.$mod$imps=function(){return{
'com.openswimsoftware.ceylon.js.jquery/1.10.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.language/1.8.0':function(){return[m$1.shared()];},
'com.openswimsoftware.ceylon.js.json/1.0.0':function(){return[m$1.shared()];}
};};
var m$3=require('com/openswimsoftware/ceylon/js/jquery/1.10.0/com.openswimsoftware.ceylon.js.jquery-1.10.0');
m$1.$addmod$(m$3,'com.openswimsoftware.ceylon.js.jquery/1.10.0');
var m$4=require('com/openswimsoftware/ceylon/js/json/1.0.0/com.openswimsoftware.ceylon.js.json-1.0.0');
m$1.$addmod$(m$4,'com.openswimsoftware.ceylon.js.json/1.0.0');
var m$5=require('com/openswimsoftware/ceylon/js/language/1.8.0/com.openswimsoftware.ceylon.js.language-1.8.0');
m$1.$addmod$(m$5,'com.openswimsoftware.ceylon.js.language/1.8.0');

//MethodDef spin at jqueryspin.ceylon (6:0-10:0)
function spin($6){
    /*Begin dynamic block*/
    return JQuerySpin($6.$_native);
    /*End dynamic block*/
}
ex$.spin=spin;
spin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:JQuerySpin},$ps:[{$nm:'jq',$mt:'prm',$t:{t:m$3.JQuery},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','spin']};};

//ClassDef SpinDirection at jqueryspin.ceylon (12:0-12:91)
function SpinDirection(direc,spinDirection$){
    $init$SpinDirection();
    if(spinDirection$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    spinDirection$.direc_=direc;
    return spinDirection$;
}
SpinDirection.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'direc',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}}],of:[$prop$get$7,$prop$get$8],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinDirection']};};
ex$.SpinDirection=SpinDirection;
function $init$SpinDirection(){
    if(SpinDirection.$$===undefined){
        m$1.initTypeProto(SpinDirection,'com.openswimsoftware.ceylon.examples.photogallery::SpinDirection',m$1.Basic);
        (function(spinDirection$){
            m$1.atr$(spinDirection$,'direc',function(){return this.direc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinDirection,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinDirection','$at','direc']};});
        })(SpinDirection.$$.prototype);
    }
    return SpinDirection;
}
ex$.$init$SpinDirection=$init$SpinDirection;
$init$SpinDirection();

//ObjectDef clockwise at jqueryspin.ceylon (14:0-14:50)
function $7(){
    var clockwise$=new $7.$$;
    SpinDirection(1,clockwise$);
    return clockwise$;
};$7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SpinDirection},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','clockwise']};};
function $init$$7(){
    if($7.$$===undefined){
        m$1.initTypeProto($7,'com.openswimsoftware.ceylon.examples.photogallery::clockwise',$init$SpinDirection());
    }
    return $7;
}
ex$.$init$$7=$init$$7;
$init$$7();
var $9;
function getClockwise(){
    if($9===undefined){$9=$init$$7()();$9.$crtmm$=getClockwise.$crtmm$;}
    return $9;
}
ex$.getClockwise=getClockwise;
getClockwise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$7},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','clockwise']};};
$prop$getClockwise={get:getClockwise,$crtmm$:getClockwise.$crtmm$};
get$7=getClockwise;$prop$get$7=getClockwise;
ex$.$prop$getClockwise=$prop$getClockwise;

//ObjectDef counterclockwise at jqueryspin.ceylon (15:0-15:58)
function $8(){
    var counterclockwise$=new $8.$$;
    SpinDirection((-1),counterclockwise$);
    return counterclockwise$;
};$8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:SpinDirection},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','counterclockwise']};};
function $init$$8(){
    if($8.$$===undefined){
        m$1.initTypeProto($8,'com.openswimsoftware.ceylon.examples.photogallery::counterclockwise',$init$SpinDirection());
    }
    return $8;
}
ex$.$init$$8=$init$$8;
$init$$8();
var $a;
function getCounterclockwise(){
    if($a===undefined){$a=$init$$8()();$a.$crtmm$=getCounterclockwise.$crtmm$;}
    return $a;
}
ex$.getCounterclockwise=getCounterclockwise;
getCounterclockwise.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$8},$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','counterclockwise']};};
$prop$getCounterclockwise={get:getCounterclockwise,$crtmm$:getCounterclockwise.$crtmm$};
get$8=getCounterclockwise;$prop$get$8=getCounterclockwise;
ex$.$prop$getCounterclockwise=$prop$getCounterclockwise;

//ClassDef SpinOptions at jqueryspin.ceylon (18:0-44:0)
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
    if(corners===undefined){corners=m$1.Float(1.0);}
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
SpinOptions.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'lines',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'length',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'width',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'radius',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'corners',$mt:'prm',$def:1,$t:{t:m$1.Float},$an:function(){return[m$1.shared()];}},{$nm:'direction',$mt:'prm',$def:1,$t:{t:SpinDirection},$an:function(){return[m$1.shared()];}},{$nm:'color',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'speed',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},$an:function(){return[m$1.shared()];}},{$nm:'trail',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'shadow',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'hardwareAccel',$mt:'prm',$def:1,$t:{t:m$1.$_Boolean},$an:function(){return[m$1.shared()];}},{$nm:'className',$mt:'prm',$def:1,$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'zIndex',$mt:'prm',$def:1,$t:{t:m$1.Integer},$an:function(){return[m$1.shared()];}},{$nm:'top',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.String}]},$an:function(){return[m$1.shared()];}},{$nm:'left',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.String}]},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions']};};
ex$.SpinOptions=SpinOptions;
function $init$SpinOptions(){
    if(SpinOptions.$$===undefined){
        m$1.initTypeProto(SpinOptions,'com.openswimsoftware.ceylon.examples.photogallery::SpinOptions',m$1.Basic);
        (function(spinOptions$){
            
            //MethodDef toJson at jqueryspin.ceylon (24:1-43:1)
            spinOptions$.toJson=function toJson(){
                var spinOptions$=this;
                
                //AttributeDecl json at jqueryspin.ceylon (25:2-25:34)
                var $b=m$5.createJSObject();
                /*Begin dynamic block*/
                $b.$_native.lines=spinOptions$.lines;
                $b.$_native.length=spinOptions$.length;
                $b.$_native.width=spinOptions$.width;
                $b.$_native.radius=spinOptions$.radius;
                $b.$_native.corners=spinOptions$.corners.valueOf();
                $b.$_native.direction=spinOptions$.direction.direc;
                $b.$_native.color=spinOptions$.color.valueOf();
                $b.$_native.speed=spinOptions$.speed;
                $b.$_native.trail=spinOptions$.trail;
                $b.$_native.shadow=spinOptions$.shadow;
                $b.$_native.hwaccel=spinOptions$.hardwareAccel;
                $b.$_native.zIndex=spinOptions$.zIndex;
                $b.$_native.top=spinOptions$.top;
                $b.$_native.left=spinOptions$.left;
                return m$4.JSJSON($b.$_native);
                /*End dynamic block*/
            };spinOptions$.toJson.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$4.JSJSON},$ps:[],$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$m','toJson']};};
            m$1.atr$(spinOptions$,'lines',function(){return this.lines_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','lines']};});
            m$1.atr$(spinOptions$,'length',function(){return this.length_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','length']};});
            m$1.atr$(spinOptions$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','width']};});
            m$1.atr$(spinOptions$,'radius',function(){return this.radius_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','radius']};});
            m$1.atr$(spinOptions$,'corners',function(){return this.corners_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','corners']};});
            m$1.atr$(spinOptions$,'direction',function(){return this.direction_;},undefined,function(){return{mod:$CCMM$,$t:{t:SpinDirection},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','direction']};});
            m$1.atr$(spinOptions$,'color',function(){return this.color_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','color']};});
            m$1.atr$(spinOptions$,'speed',function(){return this.speed_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.Float}]},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','speed']};});
            m$1.atr$(spinOptions$,'trail',function(){return this.trail_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','trail']};});
            m$1.atr$(spinOptions$,'shadow',function(){return this.shadow_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','shadow']};});
            m$1.atr$(spinOptions$,'hardwareAccel',function(){return this.hardwareAccel_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','hardwareAccel']};});
            m$1.atr$(spinOptions$,'className',function(){return this.className_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','className']};});
            m$1.atr$(spinOptions$,'zIndex',function(){return this.zIndex_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','zIndex']};});
            m$1.atr$(spinOptions$,'top',function(){return this.top_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.String}]},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','top']};});
            m$1.atr$(spinOptions$,'left',function(){return this.left_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Integer},{t:m$1.String}]},$cont:SpinOptions,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','SpinOptions','$at','left']};});
        })(SpinOptions.$$.prototype);
    }
    return SpinOptions;
}
ex$.$init$SpinOptions=$init$SpinOptions;
$init$SpinOptions();

//ClassDef JQuerySpinAbs at jqueryspin.ceylon (46:0-76:0)
function JQuerySpinAbs(jQuerySpinAbs$){
    $init$JQuerySpinAbs();
    if(jQuerySpinAbs$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    m$3.JQueryAbs(jQuerySpinAbs$);
    return jQuerySpinAbs$;
}
JQuerySpinAbs.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$3.JQueryAbs},$ps:[],$an:function(){return[m$1.shared(),m$1.abstract()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs']};};
ex$.JQuerySpinAbs=JQuerySpinAbs;
function $init$JQuerySpinAbs(){
    if(JQuerySpinAbs.$$===undefined){
        m$1.initTypeProto(JQuerySpinAbs,'com.openswimsoftware.ceylon.examples.photogallery::JQuerySpinAbs',m$3.JQueryAbs);
        (function(jQuerySpinAbs$){
            
            //MethodDef spin at jqueryspin.ceylon (48:1-56:1)
            jQuerySpinAbs$.spin$defs$options=function($c){return null;};
            jQuerySpinAbs$.spin=function spin($c){
                var jQuerySpinAbs$=this;
                if($c===undefined){$c=jQuerySpinAbs$.spin$defs$options($c);}
                /*Begin dynamic block*/
                var $d;
                if(($d=$c)!==null&&$d!==undefined){
                    jQuerySpinAbs$.$_native.spin($d.toJson());
                }else {
                    jQuerySpinAbs$.$_native.spin();
                }/*End dynamic block*/
            };jQuerySpinAbs$.spin.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:SpinOptions}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spin']};};
            
            //MethodDef spinPreset at jqueryspin.ceylon (58:1-62:1)
            jQuerySpinAbs$.spinPreset$defs$color=function($e,$f){return null;};
            jQuerySpinAbs$.spinPreset=function spinPreset($e,$f){
                var jQuerySpinAbs$=this;
                if($f===undefined){$f=jQuerySpinAbs$.spinPreset$defs$color($e,$f);}
                /*Begin dynamic block*/
                jQuerySpinAbs$.$_native.spin($e.valueOf(),$f);
                /*End dynamic block*/
            };jQuerySpinAbs$.spinPreset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'color',$mt:'prm',$def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.String}]},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinPreset']};};
            
            //MethodDef spinStop at jqueryspin.ceylon (64:1-68:1)
            jQuerySpinAbs$.spinStop=function spinStop(){
                var jQuerySpinAbs$=this;
                /*Begin dynamic block*/
                jQuerySpinAbs$.$_native.spin(false);
                /*End dynamic block*/
            };jQuerySpinAbs$.spinStop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:JQuerySpinAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinStop']};};
            
            //MethodDef spinSetPreset at jqueryspin.ceylon (70:1-74:1)
            jQuerySpinAbs$.spinSetPreset=function spinSetPreset($g,$h){
                var jQuerySpinAbs$=this;
                /*Begin dynamic block*/
                (typeof objectDefineProperty==='undefined'||objectDefineProperty===null?m$1.throwexc(m$1.Exception("Undefined or null reference: objectDefineProperty"),'72:3-72:22','jqueryspin.ceylon'):objectDefineProperty)((typeof jQuery==='undefined'||jQuery===null?m$1.throwexc(m$1.Exception("Undefined or null reference: jQuery"),'72:24-72:29','jqueryspin.ceylon'):jQuery).spin.presets,$g.valueOf(),m$5.DataDescriptor(true,false,true,true,$h.toJson()));
                /*End dynamic block*/
            };jQuerySpinAbs$.spinSetPreset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:SpinOptions},$an:function(){return[];}}],$cont:JQuerySpinAbs,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpinAbs','$m','spinSetPreset']};};
        })(JQuerySpinAbs.$$.prototype);
    }
    return JQuerySpinAbs;
}
ex$.$init$JQuerySpinAbs=$init$JQuerySpinAbs;
$init$JQuerySpinAbs();

//ClassDef JQuerySpin at jqueryspin.ceylon (78:0-83:0)
function JQuerySpin($i,jQuerySpin$){
    $init$JQuerySpin();
    if(jQuerySpin$===undefined)jQuerySpin$=new JQuerySpin.$$;
    jQuerySpin$.$i_=$i;
    JQuerySpinAbs(jQuerySpin$);
    
    //AttributeDecl native at jqueryspin.ceylon (79:1-79:29)
    jQuerySpin$.$prop$getNative={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQuerySpin,$an:function(){return[m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin','$at','native']};}};
    /*Begin dynamic block*/
    jQuerySpin$.$_native=jQuerySpin$.$i;/*End dynamic block*/
    return jQuerySpin$;
}
JQuerySpin.$crtmm$=function(){return{mod:$CCMM$,'super':{t:JQuerySpinAbs},$ps:[{$nm:'n',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin']};};
ex$.JQuerySpin=JQuerySpin;
function $init$JQuerySpin(){
    if(JQuerySpin.$$===undefined){
        m$1.initTypeProto(JQuerySpin,'com.openswimsoftware.ceylon.examples.photogallery::JQuerySpin',$init$JQuerySpinAbs());
        (function(jQuerySpin$){
            
            //AttributeDecl native at jqueryspin.ceylon (79:1-79:29)
            m$1.atr$(jQuerySpin$,'$i',function(){return this.$i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:JQuerySpin,d:['com.openswimsoftware.ceylon.examples.photogallery','JQuerySpin','$at','n$npshx2']};});
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
    gallery$.$j_=m$1.getEmpty();
    gallery$.$prop$getCategories={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Category}}},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','categories']};}};
    gallery$.$prop$getCategories.get=function(){return categories};
    
    //AttributeDecl currentCategory at gallery.ceylon (7:1-7:35)
    gallery$.$k_="";
    gallery$.$prop$getCurrentCategory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Gallery,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','currentCategory']};}};
    gallery$.$prop$getCurrentCategory.get=function(){return currentCategory};
    
    //AttributeDecl model at gallery.ceylon (8:1-8:31)
    gallery$.$l_=undefined;
    gallery$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};}};
    gallery$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (9:1-9:29)
    gallery$.$m_=undefined;
    gallery$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};}};
    gallery$.$prop$getView.get=function(){return view};
    return gallery$;
}
Gallery.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery']};};
ex$.Gallery=Gallery;
function $init$Gallery(){
    if(Gallery.$$===undefined){
        m$1.initTypeProto(Gallery,'com.openswimsoftware.ceylon.examples.photogallery::Gallery',m$1.Basic);
        (function(gallery$){
            
            //AttributeDecl categories at gallery.ceylon (6:1-6:43)
            m$1.atr$(gallery$,'categories',function(){return this.$j_;},function($n){return this.$j_=$n;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Category}}},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','categories']};});
            
            //AttributeDecl currentCategory at gallery.ceylon (7:1-7:35)
            m$1.atr$(gallery$,'currentCategory',function(){return this.$k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Gallery,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','currentCategory']};});
            
            //AttributeDecl model at gallery.ceylon (8:1-8:31)
            m$1.atr$(gallery$,'model',function(){if(this.$l_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return this.$l_;},function($o){if(this.$l_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$l_=$o;},function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (9:1-9:29)
            m$1.atr$(gallery$,'view',function(){if(this.$m_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return this.$m_;},function($p){if(this.$m_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$m_=$p;},function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};});
            
            //MethodDef init at gallery.ceylon (11:1-31:1)
            gallery$.init=function init($q){
                var gallery$=this;
                m$1.print("initalizing gallery");
                var model=GalleryModel(gallery$,$q);
                m$1.atr$(gallery$,'model',function(){if(model===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($r){if(model!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$r;},function(){return{mod:$CCMM$,$t:{t:GalleryModel},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','model']};});
                var view=GalleryView(gallery$);
                m$1.atr$(gallery$,'view',function(){if(view===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($s){if(view!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$s;},function(){return{mod:$CCMM$,$t:{t:GalleryView},$cont:Gallery,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$at','view']};});
                gallery$.$t();
                gallery$.model.loadJSON();
                /*Begin dynamic block*/
                
                //AttributeDecl resize at gallery.ceylon (20:4-26:4)
                var $u=m$1.$JsCallable((function ($v){
                    if(m$3.jq(".visible-lg").getCss("display").equals("none !important")){
                        gallery$.view.isMobile();
                    }else {
                        gallery$.view.isDesktop();
                    }
                }),[{$nm:'p2',$mt:'prm',$t:{t:m$1.Anything}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Anything}]}});
                m$3.jq(m$5.JSObject((typeof window==='undefined'||window===null?m$1.throwexc(m$1.Exception("Undefined or null reference: window"),'27:15-27:20','gallery.ceylon'):window))).resize($u);
                /*End dynamic block*/
                return gallery$;
            };gallery$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Gallery},$ps:[{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','init']};};
            
            //MethodDef loaded at gallery.ceylon (33:1-44:1)
            gallery$.loaded=function loaded(){
                var gallery$=this;
                m$1.print("gallery loaded");
                /*Begin dynamic block*/
                
                //AttributeDecl router at gallery.ceylon (36:3-36:38)
                var $w=($x=(typeof Router==='undefined'?m$1.throwexc(m$1.Exception("Undefined type Router"),'36:20-36:25','gallery.ceylon'):Router),$x.$$===undefined?new $x():$x()).init("/".valueOf());
                $w.on("/".valueOf(),m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/gallery$,gallery$.$y),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}));
                $w.on("/:category".valueOf(),m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/gallery$,gallery$.$z),[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.String}]}}));
                $w.on("/:category/:page".valueOf(),m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/gallery$,gallery$.$10),[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.String},{t:m$1.Integer}]}}));
                $w.on("/:category/:page/:photo".valueOf(),m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/gallery$,gallery$.$11),[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.String},{t:m$1.Integer},{t:m$1.Integer}]}}));
                /*End dynamic block*/
                gallery$.view.displayCategories();
            };gallery$.loaded.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:Gallery,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','loaded']};};
            
            //MethodDef updateCategory at gallery.ceylon (46:1-49:1)
            gallery$.updateCategory=function updateCategory($12){
                var gallery$=this;
                (gallery$.view.category=$12);
                gallery$.view.display();
            };gallery$.updateCategory.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'category',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Gallery,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','updateCategory']};};
            
            //MethodDef handlebarHelpers at gallery.ceylon (51:1-95:1)
            gallery$.$t=function $t(){
                var gallery$=this;
                /*Begin dynamic block*/
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'53:3-53:12','gallery.ceylon'):Handlebars).registerHelper("lower".valueOf(),m$1.$JsCallable((function ($13){
                    return $13.lowercased;
                }),[{$nm:'string',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{t:m$1.String}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'56:3-56:12','gallery.ceylon'):Handlebars).registerHelper("upper".valueOf(),m$1.$JsCallable((function ($14){
                    return $14.uppercased;
                }),[{$nm:'string',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{t:m$1.String}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'59:3-59:12','gallery.ceylon'):Handlebars).registerHelper("add".valueOf(),m$1.$JsCallable((function ($15,$16){
                    return $15.plus($16).string;
                }),[{$nm:'int1',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'62:3-62:12','gallery.ceylon'):Handlebars).registerHelper("sub".valueOf(),m$1.$JsCallable((function ($17,$18){
                    return $17.minus($18).string;
                }),[{$nm:'int1',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],{Return$Callable:{t:m$1.String},Arguments$Callable:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'65:3-65:12','gallery.ceylon'):Handlebars).registerHelper("eql".valueOf(),m$1.$JsCallable((function ($19,$1a,$1b){
                    if($19.equals($1a)){
                        return ($1c=$1b.fn((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'67:21-67:24','gallery.ceylon'):this)),m$1.is$($1c,{t:m$1.Anything})?$1c:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'67:12-67:27','gallery.ceylon'));
                    }else {
                        return ($1d=$1b.inverse((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'69:26-69:29','gallery.ceylon'):this)),m$1.is$($1d,{t:m$1.Anything})?$1d:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'69:12-69:32','gallery.ceylon'));
                    }
                }),[{$nm:'obj1',$mt:'prm',$t:{t:m$1.$_Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:m$1.$_Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.$_Object},{t:m$1.$_Object},{t:m$1.Anything}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'72:3-72:12','gallery.ceylon'):Handlebars).registerHelper("nteql".valueOf(),m$1.$JsCallable((function ($1e,$1f,$1g){
                    if((!$1e.equals($1f))){
                        return ($1h=$1g.fn((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'74:21-74:24','gallery.ceylon'):this)),m$1.is$($1h,{t:m$1.Anything})?$1h:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'74:12-74:27','gallery.ceylon'));
                    }else {
                        return ($1i=$1g.inverse((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'76:26-76:29','gallery.ceylon'):this)),m$1.is$($1i,{t:m$1.Anything})?$1i:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'76:12-76:32','gallery.ceylon'));
                    }
                }),[{$nm:'obj1',$mt:'prm',$t:{t:m$1.$_Object},$an:function(){return[];}},{$nm:'obj2',$mt:'prm',$t:{t:m$1.$_Object},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.$_Object},{t:m$1.$_Object},{t:m$1.Anything}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'79:3-79:12','gallery.ceylon'):Handlebars).registerHelper("lt".valueOf(),m$1.$JsCallable((function ($1j,$1k,$1l){
                    if(($1j<$1k)){
                        return ($1m=$1l.fn((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'81:21-81:24','gallery.ceylon'):this)),m$1.is$($1m,{t:m$1.Anything})?$1m:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'81:12-81:27','gallery.ceylon'));
                    }else {
                        return ($1n=$1l.inverse((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'83:26-83:29','gallery.ceylon'):this)),m$1.is$($1n,{t:m$1.Anything})?$1n:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'83:12-83:32','gallery.ceylon'));
                    }
                }),[{$nm:'int1',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Anything}]}}));
                (typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'86:3-86:12','gallery.ceylon'):Handlebars).registerHelper("gt".valueOf(),m$1.$JsCallable((function ($1o,$1p,$1q){
                    m$1.print("comparing if ".plus($1o.string).plus(" is greater then ").plus($1p.string));
                    if(($1o>$1p)){
                        return ($1r=$1q.fn((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'89:21-89:24','gallery.ceylon'):this)),m$1.is$($1r,{t:m$1.Anything})?$1r:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'89:12-89:27','gallery.ceylon'));
                    }else {
                        return ($1s=$1q.inverse((typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'91:26-91:29','gallery.ceylon'):this)),m$1.is$($1s,{t:m$1.Anything})?$1s:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'91:12-91:32','gallery.ceylon'));
                    }
                }),[{$nm:'int1',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'int2',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'funcs',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.Anything}]}}));
                /*End dynamic block*/
            };gallery$.$t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','handlebarHelpers$kpjpvo']};};
            
            //MethodDef getCategory at gallery.ceylon (97:1-105:1)
            gallery$.$1t=function $1t($1u){
                var gallery$=this;
                m$1.print("getting category: ".plus($1u));
                //'for' statement at gallery.ceylon (99:2-103:2)
                var $1w;for(var $1v=gallery$.categories.iterator();($1w=$1v.next())!==m$1.getFinished();){
                    if($1u.lowercased.equals($1w.model.name.lowercased)){
                        return $1w;
                    }
                }
                return null;
            };gallery$.$1t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Category}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','getCategory$amq5ma']};};
            
            //MethodDef routeIndex at gallery.ceylon (107:1-113:1)
            gallery$.$y=function $y(){
                var gallery$=this;
                m$1.print("routing index");
                var $1x;
                if(($1x=gallery$.categories.$_get(0))!==null){
                    m$1.print("display first category");
                    $1x.display(0,0);
                }
            };gallery$.$y.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routeIndex$c8ncit']};};
            
            //MethodDef routeCategory at gallery.ceylon (115:1-124:1)
            gallery$.$z=function $z($1y){
                var gallery$=this;
                m$1.print("route category name: ".plus($1y));
                var $1z;
                if(($1z=gallery$.$1t($1y))!==null){
                    m$1.print("display category");
                    $1z.display(0,0);
                }else {
                    m$1.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routeCategory$49aet3']};};
            
            //MethodDef routePage at gallery.ceylon (126:1-136:1)
            gallery$.$10=function $10($20,$21){
                var gallery$=this;
                
                //AttributeDecl pageNum at gallery.ceylon (127:2-127:31)
                var $22=m$1.Integer($21);
                m$1.print("route category name: ".plus($20).plus(" page num: ").plus($22.string));
                var $23;
                if(($23=gallery$.$1t($20))!==null){
                    m$1.print("display category and page");
                    $23.display($22,0);
                }else {
                    m$1.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$10.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routePage$c93hqm']};};
            
            //MethodDef routePhoto at gallery.ceylon (138:1-149:1)
            gallery$.$11=function $11($24,$25,$26){
                var gallery$=this;
                
                //AttributeDecl pageNum at gallery.ceylon (139:2-139:31)
                var $27=m$1.Integer($25);
                
                //AttributeDecl photoNum at gallery.ceylon (140:2-140:33)
                var $28=m$1.Integer($26);
                m$1.print("route category name: ".plus($24).plus(" page num: ").plus($27.string).plus(" photo num: ").plus($26.string));
                var $29;
                if(($29=gallery$.$1t($24))!==null){
                    m$1.print("display category, page and photo");
                    $29.display($27,$28);
                }else {
                    m$1.print("display invalid category");
                    gallery$.view.displayInvalidCategory();
                }
            };gallery$.$11.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'categoryName',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'page',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'photo',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:Gallery,d:['com.openswimsoftware.ceylon.examples.photogallery','Gallery','$m','routePhoto$bqgced']};};
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
GalleryModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$1.shared()];}},{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel']};};
ex$.GalleryModel=GalleryModel;
function $init$GalleryModel(){
    if(GalleryModel.$$===undefined){
        m$1.initTypeProto(GalleryModel,'com.openswimsoftware.ceylon.examples.photogallery::GalleryModel',m$1.Basic);
        (function(galleryModel$){
            
            //MethodDef loadJSON at gallery.ceylon (155:1-161:1)
            galleryModel$.loadJSON=function loadJSON(){
                var galleryModel$=this;
                m$1.print("loading local json");
                /*Begin dynamic block*/
                m$3.jQueryGetJSON(galleryModel$.dir.plus("/images.json")).done(m$1.$JsCallable(m$1.JsCallable(/*ESTEMERO*/galleryModel$,galleryModel$.parseCategories),[{$nm:'categoriesJSON',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:CategoryJSON}}},$an:function(){return[];}},{$nm:'status',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'jqXHR',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:{t:CategoryJSON}}},{t:m$1.String},{t:m$1.Anything}]}})).fail(m$1.$JsCallable((function (){
                    return (typeof alert==='undefined'||alert===null?m$1.throwexc(m$1.Exception("Undefined or null reference: alert"),'158:73-158:77','gallery.ceylon'):alert)("Error could not load image file".valueOf());
                }),[],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:m$1.Empty}}));
                /*End dynamic block*/
            };galleryModel$.loadJSON.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$m','loadJSON']};};
            
            //MethodDef parseCategories at gallery.ceylon (163:1-169:1)
            galleryModel$.parseCategories=function parseCategories($2a,$2b,$2c){
                var galleryModel$=this;
                m$1.print("process category json");
                m$1.print("dir is:".plus(galleryModel$.dir));
                (galleryModel$.controller.categories=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (166:27-166:121)
                    var $2d=$2a.iterator();
                    var $2e=m$1.getFinished();
                    var next$2e=function(){return $2e=$2d.next();}
                    next$2e();
                    return function(){
                        if($2e!==m$1.getFinished()){
                            var $2f=$2e;
                            var $2g=Category(galleryModel$.controller).init($2f.name,$2f.photos,galleryModel$.dir);
                            next$2e();
                            return $2g;
                        }
                        return m$1.getFinished();
                    }
                },{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Category}})));
                galleryModel$.controller.loaded();
            };galleryModel$.parseCategories.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'categoriesJSON',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:CategoryJSON}}},$an:function(){return[];}},{$nm:'status',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'jqXHR',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],$cont:GalleryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$m','parseCategories']};};
            m$1.atr$(galleryModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:GalleryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$at','controller']};});
            m$1.atr$(galleryModel$,'dir',function(){return this.dir_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:GalleryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryModel','$at','dir']};});
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
    galleryView$.$prop$get$2h={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:GalleryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','template$va6x4f']};}};
    galleryView$.$prop$get$2h.get=function(){return $2h};
    
    //AttributeDecl tabsTemplate at gallery.ceylon (175:1-175:30)
    galleryView$.$prop$get$2i={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:GalleryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','tabsTemplate$kikxxb']};}};
    galleryView$.$prop$get$2i.get=function(){return $2i};
    
    //AttributeDecl categoryTabs at gallery.ceylon (177:1-177:53)
    galleryView$.$2j_="categoryTabs";
    galleryView$.$prop$getCategoryTabs={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:GalleryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};}};
    galleryView$.$prop$getCategoryTabs.get=function(){return categoryTabs};
    
    //AttributeDecl category at gallery.ceylon (178:1-178:45)
    galleryView$.$2k_="category";
    galleryView$.$prop$getCategory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:GalleryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','category']};}};
    galleryView$.$prop$getCategory.get=function(){return category};
    /*Begin dynamic block*/
    galleryView$.$2h=(typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'181:13-181:22','gallery.ceylon'):Handlebars).compile(m$3.jq("#gallery-template").getHtml().$_native);galleryView$.$2i=(typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'182:17-182:26','gallery.ceylon'):Handlebars).compile(m$3.jq("#gallery-tabs-template").getHtml().$_native);/*End dynamic block*/
    return galleryView$;
}
GalleryView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView']};};
ex$.GalleryView=GalleryView;
function $init$GalleryView(){
    if(GalleryView.$$===undefined){
        m$1.initTypeProto(GalleryView,'com.openswimsoftware.ceylon.examples.photogallery::GalleryView',m$1.Basic);
        (function(galleryView$){
            
            //AttributeDecl template at gallery.ceylon (174:1-174:26)
            m$1.atr$(galleryView$,'$2h',function(){return this.$2h_;},function($2l){return this.$2h_=$2l;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:GalleryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','template$va6x4f']};});
            
            //AttributeDecl tabsTemplate at gallery.ceylon (175:1-175:30)
            m$1.atr$(galleryView$,'$2i',function(){return this.$2i_;},function($2m){return this.$2i_=$2m;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:GalleryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','tabsTemplate$kikxxb']};});
            
            //AttributeDecl categoryTabs at gallery.ceylon (177:1-177:53)
            m$1.atr$(galleryView$,'categoryTabs',function(){return this.$2j_;},function($2n){return this.$2j_=$2n;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:GalleryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','categoryTabs']};});
            
            //AttributeDecl category at gallery.ceylon (178:1-178:45)
            m$1.atr$(galleryView$,'category',function(){return this.$2k_;},function($2o){return this.$2k_=$2o;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:GalleryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','category']};});
            
            //MethodDef display at gallery.ceylon (185:1-193:1)
            galleryView$.display=function display(){
                var galleryView$=this;
                
                //AttributeDecl context at gallery.ceylon (186:2-189:6)
                var $2p=($2q=[m$1.Entry("categoryTabs",galleryView$.categoryTabs,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("category",galleryView$.category,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}),m$4.JSON($2q));
                var $2q;
                /*Begin dynamic block*/
                m$3.jq("body").setHtml(($2r=galleryView$.$2h($2p.toJson().$_native),m$1.is$($2r,{t:m$1.String})?$2r:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'191:28-191:60','gallery.ceylon')));
                /*End dynamic block*/
            };galleryView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','display']};};
            
            //MethodDef displayCategories at gallery.ceylon (195:1-209:1)
            galleryView$.displayCategories=function displayCategories(){
                var galleryView$=this;
                
                //AttributeDecl categories at gallery.ceylon (196:2-196:32)
                var $2s=m$4.JSONArray();
                //'for' statement at gallery.ceylon (197:2-202:2)
                var $2u;for(var $2t=galleryView$.controller.categories.iterator();($2u=$2t.next())!==m$1.getFinished();){
                    /*Begin dynamic block*/
                    $2s.add(($2v=[m$1.Entry("name",$2u.model.name,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}),m$4.JSON($2v)));
                    /*End dynamic block*/
                    var $2v;
                }
                
                //AttributeDecl context at gallery.ceylon (203:2-203:51)
                var $2w=($2x=[m$1.Entry("category",$2s,{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}}}),m$4.JSON($2x));
                var $2x;
                /*Begin dynamic block*/
                
                //AttributeDecl tabs at gallery.ceylon (205:3-205:32)
                var $2y=$2w.toJson();
                galleryView$.categoryTabs=($2z=galleryView$.$2i($2y.$_native),m$1.is$($2z,{t:m$1.String})?$2z:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'206:18-206:42','gallery.ceylon'));/*End dynamic block*/
                galleryView$.display();
            };galleryView$.displayCategories.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','displayCategories']};};
            
            //MethodDef displayInvalidCategory at gallery.ceylon (211:1-213:1)
            galleryView$.displayInvalidCategory=function displayInvalidCategory(){
            };galleryView$.displayInvalidCategory.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','displayInvalidCategory']};};
            
            //MethodDef isMobile at gallery.ceylon (215:1-217:1)
            galleryView$.isMobile=function isMobile(){
                m$1.print("is mobile");
            };galleryView$.isMobile.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','isMobile']};};
            
            //MethodDef isDesktop at gallery.ceylon (219:1-221:1)
            galleryView$.isDesktop=function isDesktop(){
                m$1.print("is desktop");
            };galleryView$.isDesktop.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$m','isDesktop']};};
            m$1.atr$(galleryView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:GalleryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','GalleryView','$at','controller']};});
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
    category$.$30_=undefined;
    category$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};}};
    category$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (226:1-226:30)
    category$.$31_=undefined;
    category$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};}};
    category$.$prop$getView.get=function(){return view};
    
    //AttributeDecl pages at gallery.ceylon (227:1-227:34)
    category$.$32_=m$1.getEmpty();
    category$.$prop$getPages={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Page}}},$cont:Category,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','pages']};}};
    category$.$prop$getPages.get=function(){return pages};
    return category$;
}
Category.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'parent',$mt:'prm',$t:{t:Gallery},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category']};};
ex$.Category=Category;
function $init$Category(){
    if(Category.$$===undefined){
        m$1.initTypeProto(Category,'com.openswimsoftware.ceylon.examples.photogallery::Category',m$1.Basic);
        (function(category$){
            
            //AttributeDecl model at gallery.ceylon (225:1-225:32)
            m$1.atr$(category$,'model',function(){if(this.$30_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return this.$30_;},function($33){if(this.$30_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$30_=$33;},function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (226:1-226:30)
            m$1.atr$(category$,'view',function(){if(this.$31_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return this.$31_;},function($34){if(this.$31_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$31_=$34;},function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};});
            
            //AttributeDecl pages at gallery.ceylon (227:1-227:34)
            m$1.atr$(category$,'pages',function(){return this.$32_;},function($35){return this.$32_=$35;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Page}}},$cont:Category,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','pages']};});
            
            //MethodDef init at gallery.ceylon (229:1-237:1)
            category$.init=function init($36,$37,$38){
                var category$=this;
                m$1.print("initalizing category");
                var model=CategoryModel(category$,$36);
                m$1.atr$(category$,'model',function(){if(model===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($39){if(model!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$39;},function(){return{mod:$CCMM$,$t:{t:CategoryModel},$cont:Category,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','model']};});
                var view=CategoryView(category$);
                m$1.atr$(category$,'view',function(){if(view===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($3a){if(view!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$3a;},function(){return{mod:$CCMM$,$t:{t:CategoryView},$cont:Category,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','view']};});
                category$.setPages($37,$38);
                return category$;
            };category$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Category},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}},{$nm:'photos',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','init']};};
            
            //MethodDef updatePage at gallery.ceylon (239:1-242:1)
            category$.updatePage=function updatePage($3b){
                var category$=this;
                (category$.view.page=$3b);
                category$.view.display();
            };category$.updatePage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'page',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','updatePage']};};
            
            //MethodDef display at gallery.ceylon (244:1-255:1)
            category$.display=function display($3c,$3d){
                var category$=this;
                m$1.print("display category ".plus(category$.model.name).plus(" page ").plus($3c.string).plus(" photo ").plus($3d.string));
                category$.view.display();
                var $3e;
                if(($3e=category$.pages.$_get($3c))!==null){
                    m$1.print("display page");
                    category$.view.displayPage($3c);
                    $3e.display($3d);
                }else {
                    m$1.print("display invalid page");
                    category$.view.displayInvalidPage();
                }
            };category$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'photoNum',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','display']};};
            
            //MethodDef displayPhoto at gallery.ceylon (257:1-265:1)
            category$.displayPhoto=function displayPhoto($3f){
                var category$=this;
                var $3g;
                if(($3g=$3f)!==null){
                    m$1.print("display photo");
                    category$.view.displayPhoto($3g);
                }else {
                    m$1.print("display no photo");
                    category$.view.displayNoPhoto();
                }
            };category$.displayPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photoM',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Photo}]},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','displayPhoto']};};
            
            //MethodDef setPages at gallery.ceylon (267:1-271:1)
            category$.setPages=function setPages($3h,$3i){
                var category$=this;
                m$1.print("set category pages");
                
                //AttributeDecl end at gallery.ceylon (269:2-269:37)
                var $3j=(1).plus($3h.size.divided(6));
                category$.pages=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (270:11-270:103)
                    var $3k=(function(){var $3m=$3j;
                    return $3m>0?m$1.Range(0,0+$3m-1,{Element$Sequential:{t:m$1.Integer}}):m$1.getEmpty();}()).iterator();
                    var $3l=m$1.getFinished();
                    var next$3l=function(){return $3l=$3k.next();}
                    next$3l();
                    return function(){
                        if($3l!==m$1.getFinished()){
                            var $3o=$3l;
                            var $3p=Page(category$,category$.model.uri.plus($3o.string).plus("/")).init($3h.segment($3o.times(6),6),$3i);
                            next$3l();
                            return $3p;
                        }
                        return m$1.getFinished();
                    }
                },{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Page}}));
            };category$.setPages.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$m','setPages']};};
            m$1.atr$(category$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:Gallery},$cont:Category,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Category','$at','parent']};});
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
    categoryModel$.$prop$getUri={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','uri']};}};
    categoryModel$.$prop$getUri.get=function(){return uri};
    return categoryModel$;
}
CategoryModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Category},$an:function(){return[m$1.shared()];}},{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel']};};
ex$.CategoryModel=CategoryModel;
function $init$CategoryModel(){
    if(CategoryModel.$$===undefined){
        m$1.initTypeProto(CategoryModel,'com.openswimsoftware.ceylon.examples.photogallery::CategoryModel',m$1.Basic);
        (function(categoryModel$){
            
            //AttributeDecl uri at gallery.ceylon (275:1-275:50)
            m$1.atr$(categoryModel$,'uri',function(){
                var categoryModel$=this;
                return "#/".plus(categoryModel$.name.lowercased).plus("/");
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','uri']};});
            m$1.atr$(categoryModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:CategoryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','controller']};});
            m$1.atr$(categoryModel$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryModel','$at','name']};});
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
    categoryView$.$prop$get$3q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CategoryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','template$6m6t43']};}};
    categoryView$.$prop$get$3q.get=function(){return $3q};
    
    //AttributeDecl paginationTemplate at gallery.ceylon (280:1-280:36)
    categoryView$.$prop$get$3r={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CategoryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','paginationTemplate$no7dmv']};}};
    categoryView$.$prop$get$3r.get=function(){return $3r};
    
    //AttributeDecl pagination at gallery.ceylon (282:1-282:49)
    categoryView$.$3s_="pagination";
    categoryView$.$prop$getPagination={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','pagination']};}};
    categoryView$.$prop$getPagination.get=function(){return pagination};
    
    //AttributeDecl page at gallery.ceylon (283:1-283:37)
    categoryView$.$3t_="page";
    categoryView$.$prop$getPage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','page']};}};
    categoryView$.$prop$getPage.get=function(){return page};
    
    //AttributeDecl title at gallery.ceylon (284:1-284:34)
    categoryView$.$3u_="";
    categoryView$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','title']};}};
    categoryView$.$prop$getTitle.get=function(){return title};
    
    //AttributeDecl src at gallery.ceylon (285:1-285:32)
    categoryView$.$3v_="";
    categoryView$.$prop$getSrc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','src']};}};
    categoryView$.$prop$getSrc.get=function(){return src};
    
    //AttributeDecl alt at gallery.ceylon (286:1-286:32)
    categoryView$.$3w_="";
    categoryView$.$prop$getAlt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','alt']};}};
    categoryView$.$prop$getAlt.get=function(){return alt};
    
    //AttributeDecl caption at gallery.ceylon (287:1-287:36)
    categoryView$.$3x_="";
    categoryView$.$prop$getCaption={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','caption']};}};
    categoryView$.$prop$getCaption.get=function(){return caption};
    
    //AttributeDecl width at gallery.ceylon (288:1-288:34)
    categoryView$.$3y_="";
    categoryView$.$prop$getWidth={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','width']};}};
    categoryView$.$prop$getWidth.get=function(){return width};
    
    //AttributeDecl height at gallery.ceylon (289:1-289:35)
    categoryView$.$3z_="";
    categoryView$.$prop$getHeight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','height']};}};
    categoryView$.$prop$getHeight.get=function(){return height};
    /*Begin dynamic block*/
    categoryView$.$3q=(typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'292:13-292:22','gallery.ceylon'):Handlebars).compile(m$3.jq("#category-template").getHtml().$_native);categoryView$.$3r=(typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'293:23-293:32','gallery.ceylon'):Handlebars).compile(m$3.jq("#category-pagination-template").getHtml().$_native);/*End dynamic block*/
    return categoryView$;
}
CategoryView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Category},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView']};};
ex$.CategoryView=CategoryView;
function $init$CategoryView(){
    if(CategoryView.$$===undefined){
        m$1.initTypeProto(CategoryView,'com.openswimsoftware.ceylon.examples.photogallery::CategoryView',m$1.Basic);
        (function(categoryView$){
            
            //AttributeDecl template at gallery.ceylon (279:1-279:26)
            m$1.atr$(categoryView$,'$3q',function(){return this.$3q_;},function($40){return this.$3q_=$40;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CategoryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','template$6m6t43']};});
            
            //AttributeDecl paginationTemplate at gallery.ceylon (280:1-280:36)
            m$1.atr$(categoryView$,'$3r',function(){return this.$3r_;},function($41){return this.$3r_=$41;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:CategoryView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','paginationTemplate$no7dmv']};});
            
            //AttributeDecl pagination at gallery.ceylon (282:1-282:49)
            m$1.atr$(categoryView$,'pagination',function(){return this.$3s_;},function($42){return this.$3s_=$42;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','pagination']};});
            
            //AttributeDecl page at gallery.ceylon (283:1-283:37)
            m$1.atr$(categoryView$,'page',function(){return this.$3t_;},function($43){return this.$3t_=$43;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','page']};});
            
            //AttributeDecl title at gallery.ceylon (284:1-284:34)
            m$1.atr$(categoryView$,'title',function(){return this.$3u_;},function($44){return this.$3u_=$44;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','title']};});
            
            //AttributeDecl src at gallery.ceylon (285:1-285:32)
            m$1.atr$(categoryView$,'src',function(){return this.$3v_;},function($45){return this.$3v_=$45;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','src']};});
            
            //AttributeDecl alt at gallery.ceylon (286:1-286:32)
            m$1.atr$(categoryView$,'alt',function(){return this.$3w_;},function($46){return this.$3w_=$46;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','alt']};});
            
            //AttributeDecl caption at gallery.ceylon (287:1-287:36)
            m$1.atr$(categoryView$,'caption',function(){return this.$3x_;},function($47){return this.$3x_=$47;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','caption']};});
            
            //AttributeDecl width at gallery.ceylon (288:1-288:34)
            m$1.atr$(categoryView$,'width',function(){return this.$3y_;},function($48){return this.$3y_=$48;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','width']};});
            
            //AttributeDecl height at gallery.ceylon (289:1-289:35)
            m$1.atr$(categoryView$,'height',function(){return this.$3z_;},function($49){return this.$3z_=$49;},function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryView,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','height']};});
            
            //MethodDef display at gallery.ceylon (296:1-313:1)
            categoryView$.display=function display(){
                var categoryView$=this;
                m$1.print("display category");
                
                //AttributeDecl context at gallery.ceylon (298:2-306:3)
                var $4a=($4b=[m$1.Entry("title",categoryView$.title,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("width",categoryView$.width,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("src",categoryView$.src,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("alt",categoryView$.alt,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("caption",categoryView$.caption,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("page",categoryView$.page,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("pagination",categoryView$.pagination,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}),m$4.JSON($4b));
                var $4b;
                m$1.print("src: ".plus(categoryView$.src));
                /*Begin dynamic block*/
                categoryView$.controller.parent.updateCategory(($4c=categoryView$.$3q($4a.toJson().$_native),m$1.is$($4c,{t:m$1.String})?$4c:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'309:36-309:68','gallery.ceylon')));
                m$3.jq(".category").each(m$1.$JsCallable((function ($4d,$4e){
                    return m$3.jqThis().removeClass("active");
                }),[{$nm:'index',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$3.JQuery},Arguments$Callable:{t:'T',l:[{t:m$1.Integer},{t:m$1.Anything}]}}));
                m$3.jq(".category-".plus(categoryView$.controller.model.name.lowercased)).addClass("active");
                /*End dynamic block*/
            };categoryView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','display']};};
            
            //MethodDef displayPhoto at gallery.ceylon (315:1-328:1)
            categoryView$.displayPhoto=function displayPhoto($4f){
                var categoryView$=this;
                var $4g;
                if(($4g=$4f.width)!==null){
                    categoryView$.width=$4g.string;
                }
                var $4h;
                if(($4h=$4f.height)!==null){
                    categoryView$.height=$4h.string;
                }
                categoryView$.src=$4f.src;
                categoryView$.alt=$4f.alt;
                categoryView$.caption=$4f.caption;
                categoryView$.title=$4f.title;
                categoryView$.display();
                m$3.jq(".display-photo").stop(true,true).hide().fadeIn(800);
            };categoryView$.displayPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:Photo},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayPhoto']};};
            
            //MethodDef displayNoPhoto at gallery.ceylon (330:1-332:1)
            categoryView$.displayNoPhoto=function displayNoPhoto(){
            };categoryView$.displayNoPhoto.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayNoPhoto']};};
            
            //MethodDef displayInvalidPage at gallery.ceylon (334:1-336:1)
            categoryView$.displayInvalidPage=function displayInvalidPage(){
            };categoryView$.displayInvalidPage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayInvalidPage']};};
            
            //MethodDef displayPage at gallery.ceylon (338:1-355:1)
            categoryView$.displayPage=function displayPage($4i){
                var categoryView$=this;
                
                //AttributeDecl pages at gallery.ceylon (339:2-339:27)
                var $4j=m$4.JSONArray();
                //'for' statement at gallery.ceylon (340:2-342:2)
                var $4l;for(var $4k=categoryView$.controller.pages.iterator();($4l=$4k.next())!==m$1.getFinished();){
                    $4j.add(($4m=[m$1.Entry("uri",$4l.uri,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}),m$4.JSON($4m)));
                    var $4m;
                }
                
                //AttributeDecl context at gallery.ceylon (343:2-348:6)
                var $4n=($4o=[m$1.Entry("uri",categoryView$.controller.model.uri,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("page",$4i,{Item$Entry:{t:m$1.Integer},Key$Entry:{t:m$1.String}}),m$1.Entry("lastPage",categoryView$.controller.pages.size.minus(1),{Item$Entry:{t:m$1.Integer},Key$Entry:{t:m$1.String}}),m$1.Entry("pages",$4j,{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:'u',l:[{t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$1.Integer},Key$Entry:{t:m$1.String}}},{t:m$1.Entry,a:{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}}}]}),m$4.JSON($4o));
                var $4o;
                /*Begin dynamic block*/
                m$1.print("displaying page with properties:".plus($4n.string));
                categoryView$.pagination=($4p=categoryView$.$3r($4n.toJson().$_native),m$1.is$($4p,{t:m$1.String})?$4p:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'352:22-352:64','gallery.ceylon'));/*End dynamic block*/
                categoryView$.display();
            };categoryView$.displayPage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'pageNum',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$m','displayPage']};};
            m$1.atr$(categoryView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:CategoryView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryView','$at','controller']};});
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
CategoryJSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'name',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'photos',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON']};};
ex$.CategoryJSON=CategoryJSON;
function $init$CategoryJSON(){
    if(CategoryJSON.$$===undefined){
        m$1.initTypeProto(CategoryJSON,'com.openswimsoftware.ceylon.examples.photogallery::CategoryJSON',m$1.Basic);
        (function(categoryJSON$){
            m$1.atr$(categoryJSON$,'name',function(){return this.name_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:CategoryJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON','$at','name']};});
            m$1.atr$(categoryJSON$,'photos',function(){return this.photos_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$cont:CategoryJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','CategoryJSON','$at','photos']};});
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
    page$.$4q_=undefined;
    page$.$prop$getModel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};}};
    page$.$prop$getModel.get=function(){return model};
    
    //AttributeDecl view at gallery.ceylon (362:1-362:26)
    page$.$4r_=undefined;
    page$.$prop$getView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};}};
    page$.$prop$getView.get=function(){return view};
    return page$;
}
Page.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'parent',$mt:'prm',$t:{t:Category},$an:function(){return[m$1.shared()];}},{$nm:'uri',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page']};};
ex$.Page=Page;
function $init$Page(){
    if(Page.$$===undefined){
        m$1.initTypeProto(Page,'com.openswimsoftware.ceylon.examples.photogallery::Page',m$1.Basic);
        (function(page$){
            
            //AttributeDecl model at gallery.ceylon (361:1-361:28)
            m$1.atr$(page$,'model',function(){if(this.$4q_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return this.$4q_;},function($4s){if(this.$4q_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return this.$4q_=$4s;},function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};});
            
            //AttributeDecl view at gallery.ceylon (362:1-362:26)
            m$1.atr$(page$,'view',function(){if(this.$4r_===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return this.$4r_;},function($4t){if(this.$4r_!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return this.$4r_=$4t;},function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$1.shared(),m$1.late()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};});
            
            //MethodDef init at gallery.ceylon (364:1-372:1)
            page$.init=function init($4u,$4v){
                var page$=this;
                m$1.print("initalize page: ".plus(page$.uri));
                var model=PageModel(page$);
                m$1.atr$(page$,'model',function(){if(model===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?model?');return model;},function($4w){if(model!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?model?');return model=$4w;},function(){return{mod:$CCMM$,$t:{t:PageModel},$cont:Page,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','model']};});
                var view=PageView(page$);
                m$1.atr$(page$,'view',function(){if(view===undefined)throw m$1.InitializationError('Attempt to read unitialized attribute ?view?');return view;},function($4x){if(view!==undefined)throw m$1.InitializationError('Attempt to reassign immutable attribute ?view?');return view=$4x;},function(){return{mod:$CCMM$,$t:{t:PageView},$cont:Page,$an:function(){return[m$1.shared(),m$1.late(),m$1.shared(),m$1.actual()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','view']};});
                page$.model.parsePhotos($4u,$4v);
                return page$;
            };page$.init.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Page},$ps:[{$nm:'photos',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:Page,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$m','init']};};
            
            //MethodDef display at gallery.ceylon (374:1-379:1)
            page$.display=function display($4y){
                var page$=this;
                m$1.print("display page: ".plus(page$.uri));
                page$.view.display();
                m$1.print("display photo: ".plus($4y.string));
                page$.parent.displayPhoto(page$.model.photos.$_get($4y));
            };page$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photoNum',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:Page,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$m','display']};};
            m$1.atr$(page$,'parent',function(){return this.parent_;},undefined,function(){return{mod:$CCMM$,$t:{t:Category},$cont:Page,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','parent']};});
            m$1.atr$(page$,'uri',function(){return this.uri_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Page,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Page','$at','uri']};});
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
    pageModel$.$4z_=m$1.getEmpty();
    pageModel$.$prop$getPhotos={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Photo}}},$cont:PageModel,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','photos']};}};
    pageModel$.$prop$getPhotos.get=function(){return photos};
    return pageModel$;
}
PageModel.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Page},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel']};};
ex$.PageModel=PageModel;
function $init$PageModel(){
    if(PageModel.$$===undefined){
        m$1.initTypeProto(PageModel,'com.openswimsoftware.ceylon.examples.photogallery::PageModel',m$1.Basic);
        (function(pageModel$){
            
            //AttributeDecl photos at gallery.ceylon (384:1-384:36)
            m$1.atr$(pageModel$,'photos',function(){return this.$4z_;},function($50){return this.$4z_=$50;},function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:Photo}}},$cont:PageModel,$an:function(){return[m$1.shared(),m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','photos']};});
            
            //MethodDef parsePhotos at gallery.ceylon (386:1-389:1)
            pageModel$.parsePhotos=function parsePhotos($51,$52){
                var pageModel$=this;
                m$1.print("parsing photos");
                pageModel$.photos=m$1.tpl$([],undefined,m$1.Comprehension(function(){
                    //Comprehension at gallery.ceylon (388:14-388:159)
                    var $53=$51.iterator();
                    var $54=m$1.getFinished();
                    var next$54=function(){return $54=$53.next();}
                    next$54();
                    return function(){
                        if($54!==m$1.getFinished()){
                            var $55=$54;
                            var $56=Photo($55.title,$55.caption,$52.plus("/").plus($55.src),$52.plus("/").plus($55.thumb),$55.height,$55.width,$55.alt);
                            next$54();
                            return $56;
                        }
                        return m$1.getFinished();
                    }
                },{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:Photo}}));
            };pageModel$.parsePhotos.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photosJSON',$mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:PhotoJSON}}},$an:function(){return[];}},{$nm:'dir',$mt:'prm',$t:{t:m$1.String},$an:function(){return[];}}],$cont:PageModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$m','parsePhotos']};};
            m$1.atr$(pageModel$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Page},$cont:PageModel,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageModel','$at','controller']};});
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
    pageView$.$prop$get$57={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:PageView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','template$99k86u']};}};
    pageView$.$prop$get$57.get=function(){return $57};
    /*Begin dynamic block*/
    pageView$.$57=(typeof Handlebars==='undefined'||Handlebars===null?m$1.throwexc(m$1.Exception("Undefined or null reference: Handlebars"),'396:13-396:22','gallery.ceylon'):Handlebars).compile(m$3.jq("#page-template").getHtml().$_native);/*End dynamic block*/
    return pageView$;
}
PageView.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'controller',$mt:'prm',$t:{t:Page},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView']};};
ex$.PageView=PageView;
function $init$PageView(){
    if(PageView.$$===undefined){
        m$1.initTypeProto(PageView,'com.openswimsoftware.ceylon.examples.photogallery::PageView',m$1.Basic);
        (function(pageView$){
            
            //AttributeDecl template at gallery.ceylon (393:1-393:26)
            m$1.atr$(pageView$,'$57',function(){return this.$57_;},function($58){return this.$57_=$58;},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:PageView,$an:function(){return[m$1.variable()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','template$99k86u']};});
            
            //MethodDef display at gallery.ceylon (399:1-422:1)
            pageView$.display=function display(){
                var pageView$=this;
                
                //AttributeDecl photos at gallery.ceylon (400:2-400:28)
                var $59=m$4.JSONArray();
                //'for' statement at gallery.ceylon (401:2-408:2)
                var $5b;for(var $5a=pageView$.controller.model.photos.iterator();($5b=$5a.next())!==m$1.getFinished();){
                    $59.add(($5c=[m$1.Entry("title",$5b.title,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("uri",pageView$.controller.uri,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("src",$5b.thumb,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}),m$1.Entry("alt",$5b.alt,{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$1.String},Key$Entry:{t:m$1.String}}}),m$4.JSON($5c)));
                    var $5c;
                }
                
                //AttributeDecl context at gallery.ceylon (409:2-411:6)
                var $5d=($5e=[m$1.Entry("photos",$59,{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}})].reifyCeylonType({t:m$1.Entry,a:{Item$Entry:{t:m$4.JSONArray},Key$Entry:{t:m$1.String}}}),m$4.JSON($5e));
                var $5e;
                /*Begin dynamic block*/
                pageView$.controller.parent.updatePage(($5f=pageView$.$57($5d.toJson().$_native),m$1.is$($5f,{t:m$1.String})?$5f:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'413:32-413:64','gallery.ceylon')));
                /*End dynamic block*/
                //'for' statement at gallery.ceylon (415:2-421:2)
                var $5h=(0),$5i=$59.size;for(var $5j=0;$5j<$5i;$5j++,($5h=$5h.successor)){
                    /*Begin dynamic block*/
                    m$3.jq(".photo".plus($5h.string)).hide();
                    m$3.jq(".photo".plus($5h.string)).on("load",null,null,m$1.$JsCallable((function ($5k){
                        return pageView$.$5l($5h);
                    }),[{$nm:'event',$mt:'prm',$t:{t:m$1.Anything},$an:function(){return[];}}],{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:m$1.Anything}]}}));
                    spin(m$3.jq(".photo".plus($5h.string)).parent()).spinPreset("small");
                    /*End dynamic block*/
                }
            };pageView$.display.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[],$cont:PageView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$m','display']};};
            
            //MethodDef photoLoaded at gallery.ceylon (424:1-429:1)
            pageView$.$5l=function $5l($5m){
                var pageView$=this;
                /*Begin dynamic block*/
                spin(m$3.jq(($5n=(typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'426:11-426:14','gallery.ceylon'):this),m$1.is$($5n,{t:'u',l:[{t:m$1.String},{t:m$3.JQuery},{t:m$5.JSObject},{t:'u',l:[{t:m$1.Null},{t:m$5o.Element}]}]})?$5n:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'426:11-426:14','gallery.ceylon'))).parent()).spinStop();
                m$3.jq(($5p=(typeof this==='undefined'||this===null?m$1.throwexc(m$1.Exception("Undefined or null reference: this"),'427:6-427:9','gallery.ceylon'):this),m$1.is$($5p,{t:'u',l:[{t:m$1.String},{t:m$3.JQuery},{t:m$5.JSObject},{t:'u',l:[{t:m$1.Null},{t:m$5o.Element}]}]})?$5p:m$1.throwexc(m$1.Exception("dynamic objects cannot be used here"),'427:6-427:9','gallery.ceylon'))).show();
                /*End dynamic block*/
            };pageView$.$5l.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$ps:[{$nm:'photo',$mt:'prm',$t:{t:m$1.Integer},$an:function(){return[];}}],$cont:PageView,d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$m','photoLoaded$4svigl']};};
            m$1.atr$(pageView$,'controller',function(){return this.controller_;},undefined,function(){return{mod:$CCMM$,$t:{t:Page},$cont:PageView,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PageView','$at','controller']};});
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
Photo.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'title',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'caption',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'src',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'thumb',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'height',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[m$1.shared()];}},{$nm:'width',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[m$1.shared()];}},{$nm:'alt',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo']};};
ex$.Photo=Photo;
function $init$Photo(){
    if(Photo.$$===undefined){
        m$1.initTypeProto(Photo,'com.openswimsoftware.ceylon.examples.photogallery::Photo',m$1.Basic);
        (function(photo$){
            m$1.atr$(photo$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','title']};});
            m$1.atr$(photo$,'caption',function(){return this.caption_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','caption']};});
            m$1.atr$(photo$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','src']};});
            m$1.atr$(photo$,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','thumb']};});
            m$1.atr$(photo$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','height']};});
            m$1.atr$(photo$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','width']};});
            m$1.atr$(photo$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:Photo,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','Photo','$at','alt']};});
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
PhotoJSON.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$ps:[{$nm:'title',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'caption',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'src',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'thumb',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}},{$nm:'height',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[m$1.shared()];}},{$nm:'width',$mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$an:function(){return[m$1.shared()];}},{$nm:'alt',$mt:'prm',$t:{t:m$1.String},$an:function(){return[m$1.shared()];}}],$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON']};};
ex$.PhotoJSON=PhotoJSON;
function $init$PhotoJSON(){
    if(PhotoJSON.$$===undefined){
        m$1.initTypeProto(PhotoJSON,'com.openswimsoftware.ceylon.examples.photogallery::PhotoJSON',m$1.Basic);
        (function(photoJSON$){
            m$1.atr$(photoJSON$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','title']};});
            m$1.atr$(photoJSON$,'caption',function(){return this.caption_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','caption']};});
            m$1.atr$(photoJSON$,'src',function(){return this.src_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','src']};});
            m$1.atr$(photoJSON$,'thumb',function(){return this.thumb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','thumb']};});
            m$1.atr$(photoJSON$,'height',function(){return this.height_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','height']};});
            m$1.atr$(photoJSON$,'width',function(){return this.width_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','width']};});
            m$1.atr$(photoJSON$,'alt',function(){return this.alt_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.String},$cont:PhotoJSON,$an:function(){return[m$1.shared()];},d:['com.openswimsoftware.ceylon.examples.photogallery','PhotoJSON','$at','alt']};});
        })(PhotoJSON.$$.prototype);
    }
    return PhotoJSON;
}
ex$.$init$PhotoJSON=$init$PhotoJSON;
$init$PhotoJSON();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
