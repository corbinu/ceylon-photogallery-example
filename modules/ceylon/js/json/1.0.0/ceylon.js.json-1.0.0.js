(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.json\/0.6","ceylon.collection\/0.6"],"$mod-name":"ceylon.js.json","$mod-version":"1.0.0","ceylon.js.json":{"$pkg-shared":"1","jsonParseCallback":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"jsonParseCallback"},"JSONArray":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"cls","$an":{"shared":[]},"$nm":"JSONArray"},"JSJSON":{"super":{"$pk":"ceylon.js.json","$nm":"JSJSONAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSJSON"},"jsonParse":{"$t":{"$pk":"ceylon.js.json","$nm":"unknown"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonParse"},"JSON":{"super":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"$mt":"cls","$an":{"shared":[]},"$m":{"arrayToArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"ceylonArray"}]],"$mt":"mthd","$nm":"arrayToArray"},"toJson":{"$t":{"$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"},"objectToJson":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"ceylonJSON"}]],"$mt":"mthd","$nm":"objectToJson"}},"$at":{"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"}},"$nm":"JSON"},"JSJSONAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"JSJSONAbs"},"jsonStringify":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jsonStringify"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.json`."]},"$nm":"run"},"jsonStringifyReplacer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"replacer"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"space"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"replacer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"replacer"}},"$nm":"jsonStringifyReplacer"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
var $$$cj366=require('ceylon/json/0.6/ceylon.json-0.6');
$$$cl1.$addmod$($$$cj366,'ceylon.json/0.6');
function jsonParse(text$367){
    /*Begin dynamic block*/
    return (tmpvar$368=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'6:9-6:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$367.valueOf()),$$$cl1.isOfType(tmpvar$368,{t:$$$cl1.Anything})?tmpvar$368:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'6:9-6:26','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParse=jsonParse;
jsonParse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParse']};};
function jsonParseCallback(text$369,callback$370){
    /*Begin dynamic block*/
    return (tmpvar$371=(typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'12:9-12:12','json.ceylon'):JSON).parse(/*NULL PARAM!*/text$369.valueOf()/*NULL PARAM!*/,callback$370),$$$cl1.isOfType(tmpvar$371,{t:$$$cl1.Anything})?tmpvar$371:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'12:9-12:36','json.ceylon'));
    /*End dynamic block*/
}
exports.jsonParseCallback=jsonParseCallback;
jsonParseCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonParseCallback']};};
function jsonStringify(val$372,space$373){
    if(space$373===undefined){space$373=null;}
    
    var case$374=space$373;
    if ($$$cl1.isOfType(space$373,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'20:19-20:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$372/*NULL PARAM!*/,null/*NULL PARAM!*/,case$374));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$373,{ t:'u', l:[{t:$$$cjl167.JSString},{t:$$$cjl167.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'25:19-25:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$372/*NULL PARAM!*/,null/*NULL PARAM!*/,case$374.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$373,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'30:19-30:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$372));
        /*End dynamic block*/
    }
}
exports.jsonStringify=jsonStringify;
jsonStringify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringify']};};
function jsonStringifyReplacer(val$375,replacer$376,space$377){
    if(space$377===undefined){space$377=null;}
    
    var case$378=space$377;
    if ($$$cl1.isOfType(space$377,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'40:19-40:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$375/*NULL PARAM!*/,replacer$376/*NULL PARAM!*/,case$378));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$377,{ t:'u', l:[{t:$$$cjl167.JSString},{t:$$$cjl167.JSNumber}]})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'45:19-45:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$375/*NULL PARAM!*/,replacer$376/*NULL PARAM!*/,case$378.$native));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(space$377,{t:$$$cl1.Null})) {
        /*Begin dynamic block*/
        return $$$cjl167.JSString((typeof JSON==='undefined'||JSON===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: JSON")),'50:19-50:22','json.ceylon'):JSON).stringify(/*NULL PARAM!*/val$375));
        /*End dynamic block*/
    }
}
exports.jsonStringifyReplacer=jsonStringifyReplacer;
jsonStringifyReplacer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'replacer',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'space',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString},{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSNumber}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','jsonStringifyReplacer']};};
function JSJSON(n$379, $$jSJSON){
    $init$JSJSON();
    if ($$jSJSON===undefined)$$jSJSON=new JSJSON.$$;
    $$jSJSON.n$379_=n$379;
    JSJSONAbs($$jSJSON);
    $$$cl1.defineAttr($$jSJSON,'n$379',function(){return this.n$379_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,d:['ceylon.js.json','JSJSON','$at','n']};});
    $$jSJSON.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSJSON,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.json','JSJSON','$at','native']};}};
    /*Begin dynamic block*/
    $$jSJSON.$native=n$379;/*End dynamic block*/
    return $$jSJSON;
}
JSJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSJSONAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSJSON']};};
exports.JSJSON=JSJSON;
function $init$JSJSON(){
    if (JSJSON.$$===undefined){
        $$$cl1.initTypeProto(JSJSON,'ceylon.js.json::JSJSON',JSJSONAbs);
    }
    return JSJSON;
}
exports.$init$JSJSON=$init$JSJSON;
$init$JSJSON();
function JSJSONAbs($$jSJSONAbs){
    $init$JSJSONAbs();
    if ($$jSJSONAbs===undefined)$$jSJSONAbs=new JSJSONAbs.$$;
    $$$cjl167.JSObjectAbs($$jSJSONAbs);
    return $$jSJSONAbs;
}
JSJSONAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.json','JSJSONAbs']};};
exports.JSJSONAbs=JSJSONAbs;
function $init$JSJSONAbs(){
    if (JSJSONAbs.$$===undefined){
        $$$cl1.initTypeProto(JSJSONAbs,'ceylon.js.json::JSJSONAbs',$$$cjl167.JSObjectAbs);
    }
    return JSJSONAbs;
}
exports.$init$JSJSONAbs=$init$JSJSONAbs;
$init$JSJSONAbs();
function JSONArray($$jSONArray){
    $init$JSONArray();
    if ($$jSONArray===undefined)$$jSONArray=new JSONArray.$$;
    $$$cj366.Array(undefined,$$jSONArray);
    return $$jSONArray;
}
JSONArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj366.Array},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSONArray']};};
exports.JSONArray=JSONArray;
function $init$JSONArray(){
    if (JSONArray.$$===undefined){
        $$$cl1.initTypeProto(JSONArray,'ceylon.js.json::JSONArray',$$$cj366.Array);
    }
    return JSONArray;
}
exports.$init$JSONArray=$init$JSONArray;
$init$JSONArray();
function JSON(values$380, $$jSON){
    $init$JSON();
    if ($$jSON===undefined)$$jSON=new JSON.$$;
    if(values$380===undefined){values$380=$$$cl1.getEmpty();}
    $$jSON.values$380_=values$380;
    $$$cj366.Object(values$380,$$jSON);
    $$$cl1.defineAttr($$jSON,'values$380',function(){return this.values$380_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:$$$cj366.Object},{t:$$$cj366.Array},{t:$$$cj366.NullInstance}]}}}}},$cont:JSON,d:['ceylon.js.json','JSON','$at','values']};});
    function toJson(){
        /*Begin dynamic block*/
        return JSJSON(objectToJson$381($$jSON).$native);
        /*End dynamic block*/
    }
    $$jSON.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JSJSON},$ps:[],$cont:JSON,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON','$m','toJson']};};
    function objectToJson$381(ceylonJSON$382){
        var json$383=$$$cjl167.createJSObject();
        $prop$getJson$383={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.json','JSON','$m','objectToJson','$at','json']};}};
        $prop$getJson$383.get=function(){return json$383};
        var val$384;
        var setVal$384=function(val$385){return val$384=val$385;};
        $prop$getVal$384={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$an:function(){return[$$$cl1.variable()];},d:['ceylon.js.json','JSON','$m','objectToJson','$at','val']};}};
        $prop$getVal$384.get=function(){return val$384};
        $prop$getVal$384.set=setVal$384;
        if (setVal$384.$$metamodel$$===undefined)setVal$384.$$metamodel$$=$prop$getVal$384.$$metamodel$$;
        /*Begin dynamic block*/
        var it$386 = ceylonJSON$382.iterator();
        var item$387;while ((item$387=it$386.next())!==$$$cl1.getFinished()){
            var name$388=item$387.key;
            var entry$389=item$387.item;
            
            var case$390=entry$389;
            if ($$$cl1.isOfType(entry$389,{t:$$$cl1.String})) {
                val$384=case$390;
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cl1.Boolean})) {
                if(case$390){
                    val$384=true;
                }else {
                    val$384=false;
                }
            }else if ($$$cl1.isOfType(entry$389,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                val$384=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'91:11-91:16','json.ceylon'):Number)(/*NULL PARAM!*/case$390);
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj366.Object})) {
                val$384=objectToJson$381(case$390).$native;
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj366.Array})) {
                val$384=arrayToArray$391(case$390).$native;
            }else if ($$$cl1.isOfType(entry$389,{t:$$$cj366.NullInstance})) {
                val$384=null;
            }
            (typeof objectDefineProperty==='undefined'||objectDefineProperty===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: objectDefineProperty")),'102:4-102:23','json.ceylon'):objectDefineProperty)(/*NULL PARAM!*/json$383/*NULL PARAM!*/,name$388.valueOf()/*NULL PARAM!*/,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$392=val$384,$$$cl1.isOfType(tmpvar$392,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$392:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'102:77-102:79','json.ceylon'))));
        }return json$383;
        /*End dynamic block*/
    };objectToJson$381.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'ceylonJSON',$mt:'prm',$t:{t:$$$cj366.Object},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','objectToJson']};};
    function arrayToArray$391(ceylonArray$393){
        var array$394=$$$cjl167.createJSArray();
        $prop$getArray$394={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},d:['ceylon.js.json','JSON','$m','arrayToArray','$at','array']};}};
        $prop$getArray$394.get=function(){return array$394};
        /*Begin dynamic block*/
        var it$395 = ceylonArray$393.iterator();
        var entry$396;while ((entry$396=it$395.next())!==$$$cl1.getFinished()){
            
            var case$397=entry$396;
            if ($$$cl1.isOfType(entry$396,{t:$$$cl1.String})) {
                array$394.push([case$397].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}));
            }else if ($$$cl1.isOfType(entry$396,{t:$$$cl1.Boolean})) {
                if(case$397){
                    array$394.push([true].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.true$398}}));
                }else {
                    array$394.push([false].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.false$399}}));
                }
            }else if ($$$cl1.isOfType(entry$396,{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]})) {
                array$394.push([objectToJson$381((tmpvar$400=(typeof Number==='undefined'||Number===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Number")),'125:29-125:34','json.ceylon'):Number)(/*NULL PARAM!*/case$397),$$$cl1.isOfType(tmpvar$400,{t:$$$cj366.Object})?tmpvar$400:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'125:29-125:43','json.ceylon')))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cjl167.JSObject}}));
            }else if ($$$cl1.isOfType(entry$396,{t:$$$cj366.Object})) {
                (typeof val==='undefined'||val===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: val")),'128:5-128:7','json.ceylon'):val)=objectToJson$381(case$397).$native;
            }else if ($$$cl1.isOfType(entry$396,{t:$$$cj366.Array})) {
                (typeof val==='undefined'||val===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: val")),'131:5-131:7','json.ceylon'):val)=arrayToArray$391(case$397).$native;
            }else if ($$$cl1.isOfType(entry$396,{t:$$$cj366.NullInstance})) {
                array$394.push([null].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Null}}));
            }
        }return array$394;
        /*End dynamic block*/
    };arrayToArray$391.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'ceylonArray',$mt:'prm',$t:{t:$$$cj366.Array},$an:function(){return[];}}],$cont:JSON,d:['ceylon.js.json','JSON','$m','arrayToArray']};};
    return $$jSON;
}
JSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cj366.Object},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.json','JSON']};};
exports.JSON=JSON;
function $init$JSON(){
    if (JSON.$$===undefined){
        $$$cl1.initTypeProto(JSON,'ceylon.js.json::JSON',$$$cj366.Object);
    }
    return JSON;
}
exports.$init$JSON=$init$JSON;
$init$JSON();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$json=function(){return[$$$cl1.shared()];};
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.json`.",32))];},d:['ceylon.js.json','run']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
