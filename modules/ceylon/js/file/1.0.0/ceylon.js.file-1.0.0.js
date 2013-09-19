(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.file","$mod-version":"1.0.0","ceylon.js.file":{"createBlobBlobs":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.file","$nm":"Blob"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobBlobs"},"createBlobJS":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlobJS"},"$pkg-shared":"1","BlobPropertyBag":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"type":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"type"}},"$nm":"BlobPropertyBag"},"BlobAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"slice":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]}]},"$mt":"prm","$def":"1","$nm":"end"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"size":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"size"}},"$nm":"BlobAbs"},"Blob":{"super":{"$pk":"ceylon.js.file","$nm":"BlobAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.file","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Blob"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.blob`."]},"$nm":"run"},"createBlob":{"$t":{"$pk":"ceylon.js.file","$nm":"Blob"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$nm":"parts"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.file","$nm":"BlobPropertyBag"}]},"$mt":"prm","$def":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createBlob"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
var $$$cjj672=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj672,'ceylon.js.json/1.0.0');
function createBlob(parts$938,properties$939){
    if(parts$938===undefined){parts$938=null;}
    if(properties$939===undefined){properties$939=null;}
    /*Begin dynamic block*/
    var props$940;
    if((props$940=properties$939)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'7:15-7:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$938/*NULL PARAM!*/,props$940.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'9:15-9:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$938));
    }/*End dynamic block*/
}
exports.createBlob=createBlob;
createBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlob']};};
function createBlobJS(parts$941,properties$942){
    if(properties$942===undefined){properties$942=null;}
    /*Begin dynamic block*/
    var props$943;
    if((props$943=properties$942)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'17:15-17:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            var lst$944=[];
            var it$945=parts$941.iterator();
            var elem$946;
            while ((elem$946=it$945.next())!==$$$cl1.getFinished()){
                lst$944.push(elem$946.$native);
            }
            return $$$cl1.ArraySequence(lst$944);
        }())/*NULL PARAM!*/,props$943.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'19:15-19:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$941));
    }/*End dynamic block*/
}
exports.createBlobJS=createBlobJS;
createBlobJS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjl167.JSString}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlobJS']};};
function createBlobBlobs(parts$947,properties$948){
    if(properties$948===undefined){properties$948=null;}
    /*Begin dynamic block*/
    var props$949;
    if((props$949=properties$948)!==null){
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'27:15-27:18','blob.ceylon'):Blob)(/*NULL PARAM!*/(function(){
            var lst$950=[];
            var it$951=parts$947.iterator();
            var elem$952;
            while ((elem$952=it$951.next())!==$$$cl1.getFinished()){
                lst$950.push(elem$952.$native);
            }
            return $$$cl1.ArraySequence(lst$950);
        }())/*NULL PARAM!*/,props$949.toJson()));
    }else {
        return Blob((typeof Blob==='undefined'||Blob===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Blob")),'29:15-29:18','blob.ceylon'):Blob)(/*NULL PARAM!*/parts$947));
    }/*End dynamic block*/
}
exports.createBlobBlobs=createBlobBlobs;
createBlobBlobs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'parts',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:Blob}}},$an:function(){return[];}},{$nm:'properties',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:BlobPropertyBag}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','createBlobBlobs']};};
function BlobPropertyBag(type, $$blobPropertyBag){
    $init$BlobPropertyBag();
    if ($$blobPropertyBag===undefined)$$blobPropertyBag=new BlobPropertyBag.$$;
    if(type===undefined){type=$$$cl1.String("",0);}
    $$blobPropertyBag.type_=type;
    $$$cl1.defineAttr($$blobPropertyBag,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$cont:BlobPropertyBag,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag','$at','type']};});
    function toJson(){
        var t$953;
        $prop$getT$953={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.file','BlobPropertyBag','$m','toJson','$at','t']};}};
        $prop$getT$953.get=function(){return t$953};
        var json$954;
        $prop$getJson$954={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSON},d:['ceylon.js.file','BlobPropertyBag','$m','toJson','$at','json']};}};
        $prop$getJson$954.get=function(){return json$954};
        /*Begin dynamic block*/
        
        var case$955=$$blobPropertyBag.type;
        if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cl1.String})) {
            t$953=case$955;
        }else if ($$$cl1.isOfType($$blobPropertyBag.type,{t:$$$cjl167.JSString})) {
            t$953=case$955.$native;
        }json$954=(values$956=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("type",4),t$953,{})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Anything}}),$$$cjj672.JSON(values$956));/*End dynamic block*/
        var values$956;
        return json$954.toJson();
    }
    $$blobPropertyBag.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSJSON},$ps:[],$cont:BlobPropertyBag,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag','$m','toJson']};};
    return $$blobPropertyBag;
}
BlobPropertyBag.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobPropertyBag']};};
exports.BlobPropertyBag=BlobPropertyBag;
function $init$BlobPropertyBag(){
    if (BlobPropertyBag.$$===undefined){
        $$$cl1.initTypeProto(BlobPropertyBag,'ceylon.js.file::BlobPropertyBag',$$$cl1.Basic);
    }
    return BlobPropertyBag;
}
exports.$init$BlobPropertyBag=$init$BlobPropertyBag;
$init$BlobPropertyBag();
function Blob(n$957, $$blob){
    $init$Blob();
    if ($$blob===undefined)$$blob=new Blob.$$;
    $$blob.n$957_=n$957;
    BlobAbs($$blob);
    $$$cl1.defineAttr($$blob,'n$957',function(){return this.n$957_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,d:['ceylon.js.file','Blob','$at','n']};});
    $$blob.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Blob,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.file','Blob','$at','native']};}};
    /*Begin dynamic block*/
    $$blob.$native=n$957;/*End dynamic block*/
    return $$blob;
}
Blob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:BlobAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','Blob']};};
exports.Blob=Blob;
function $init$Blob(){
    if (Blob.$$===undefined){
        $$$cl1.initTypeProto(Blob,'ceylon.js.file::Blob',BlobAbs);
    }
    return Blob;
}
exports.$init$Blob=$init$Blob;
$init$Blob();
function BlobAbs($$blobAbs){
    $init$BlobAbs();
    if ($$blobAbs===undefined)$$blobAbs=new BlobAbs.$$;
    $$$cjl167.JSObjectAbs($$blobAbs);
    function size(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$blobAbs.$native.size);
        /*End dynamic block*/
    }
    $$blobAbs.size=size;
    size.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','size']};};
    function type(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$blobAbs.$native.type);
        /*End dynamic block*/
    }
    $$blobAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','type']};};
    $$blobAbs.slice$defs$start=function(start$958,end$959,contentType$960){return null;};
    $$blobAbs.slice$defs$end=function(start$958,end$959,contentType$960){return null;};
    $$blobAbs.slice$defs$contentType=function(start$958,end$959,contentType$960){return null;};
    function slice(start$958,end$959,contentType$960){
        if(start$958===undefined){start$958=$$blobAbs.slice$defs$start(start$958,end$959,contentType$960);}
        if(end$959===undefined){end$959=$$blobAbs.slice$defs$end(start$958,end$959,contentType$960);}
        if(contentType$960===undefined){contentType$960=$$blobAbs.slice$defs$contentType(start$958,end$959,contentType$960);}
        
        var case$961=start$958;
        if ($$$cl1.isOfType(start$958,{t:$$$cl1.Integer})) {
            
            var case$962=end$959;
            if ($$$cl1.isOfType(end$959,{t:$$$cl1.Integer})) {
                
                var case$963=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962/*NULL PARAM!*/,case$963.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962/*NULL PARAM!*/,case$963.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cjl167.JSNumber})) {
                
                var case$964=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962.$native/*NULL PARAM!*/,case$964.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962.$native/*NULL PARAM!*/,case$964.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,case$962.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cl1.Null})) {
                
                var case$965=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,null/*NULL PARAM!*/,case$965.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961/*NULL PARAM!*/,null/*NULL PARAM!*/,case$965.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(start$958,{t:$$$cjl167.JSNumber})) {
            
            var case$966=end$959;
            if ($$$cl1.isOfType(end$959,{t:$$$cl1.Integer})) {
                
                var case$967=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966/*NULL PARAM!*/,case$967.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966/*NULL PARAM!*/,case$967.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cjl167.JSNumber})) {
                
                var case$968=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966.$native/*NULL PARAM!*/,case$968.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966.$native/*NULL PARAM!*/,case$968.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,case$966.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cl1.Null})) {
                
                var case$969=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$969.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$969.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/case$961.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(start$958,{t:$$$cl1.Null})) {
            
            var case$970=end$959;
            if ($$$cl1.isOfType(end$959,{t:$$$cl1.Integer})) {
                
                var case$971=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970/*NULL PARAM!*/,case$971.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970/*NULL PARAM!*/,case$971.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cjl167.JSNumber})) {
                
                var case$972=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970.$native/*NULL PARAM!*/,case$972.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970.$native/*NULL PARAM!*/,case$972.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,case$970.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(end$959,{t:$$$cl1.Null})) {
                
                var case$973=contentType$960;
                if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$973.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice(/*NULL PARAM!*/null/*NULL PARAM!*/,null/*NULL PARAM!*/,case$973.$native));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(contentType$960,{t:$$$cl1.Null})) {
                    /*Begin dynamic block*/
                    return Blob($$blobAbs.$native.slice());
                    /*End dynamic block*/
                }
            }
        }
    }
    $$blobAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Blob},$ps:[{$nm:'start',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSNumber}]}]},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSNumber}]}]},$an:function(){return[];}},{$nm:'contentType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}}],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','slice']};};
    function close(){
        /*Begin dynamic block*/
        $$blobAbs.$native.close();
        /*End dynamic block*/
    }
    $$blobAbs.close=close;
    close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:BlobAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.file','BlobAbs','$m','close']};};
    return $$blobAbs;
}
BlobAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.file','BlobAbs']};};
exports.BlobAbs=BlobAbs;
function $init$BlobAbs(){
    if (BlobAbs.$$===undefined){
        $$$cl1.initTypeProto(BlobAbs,'ceylon.js.file::BlobAbs',$$$cjl167.JSObjectAbs);
    }
    return BlobAbs;
}
exports.$init$BlobAbs=$init$BlobAbs;
$init$BlobAbs();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$file=function(){return[$$$cl1.shared()];};
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.blob`.",32))];},d:['ceylon.js.file','run']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
