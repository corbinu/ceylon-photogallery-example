(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0"],"$mod-name":"ceylon.js.html","$mod-version":"5.0.0","ceylon.js.html":{"WindowAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"WindowAbs"},"$pkg-shared":"1","HTMLFormElementAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"submit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"setAcceptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"acceptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAcceptCharset"},"getEncoding":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEncoding"},"setEnctype":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"enctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnctype"},"getTarget":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTarget"},"getMethod":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMethod"},"getAcceptCharset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAcceptCharset"},"checkValidity":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"checkValidity"},"setAutocomplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"autocomplete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAutocomplete"},"getAutocomplete":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAutocomplete"},"getAction":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAction"},"setEncoding":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"encoding"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEncoding"},"setTarget":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTarget"},"getEnctype":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getEnctype"},"setNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"noValidate"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNoValidate"},"getName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getName"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"reset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"reset"},"setMethod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMethod"},"setName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setName"},"setAction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"action"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAction"},"elements":{"$t":{"$pk":"ceylon.js.html","$nm":"HTMLFormControlsCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"elements"},"getNoValidate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNoValidate"}},"$nm":"HTMLFormElementAbs"},"HTMLFormControlsCollection":{"super":{"$pk":"ceylon.js.html","$nm":"HTMLFormControlsCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLFormControlsCollection"},"HTMLFormControlsCollectionAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"HTMLFormControlsCollectionAbs"},"LocationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replace"},"assignURL":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"assignURL"},"reload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"forcedReload"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reload"}},"$nm":"LocationAbs"},"Location":{"super":{"$pk":"ceylon.js.html","$nm":"LocationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Location"},"HTMLFormElement":{"super":{"$pk":"ceylon.js.html","$nm":"HTMLFormElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLFormElement"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.html`."]},"$nm":"run"},"Window":{"super":{"$pk":"ceylon.js.html","$nm":"WindowAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.html","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Window"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
var $$$cjd401=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd401,'ceylon.js.dom/4.0.0');
function HTMLFormControlsCollection(n$402, $$hTMLFormControlsCollection){
    $init$HTMLFormControlsCollection();
    if ($$hTMLFormControlsCollection===undefined)$$hTMLFormControlsCollection=new HTMLFormControlsCollection.$$;
    $$hTMLFormControlsCollection.n$402_=n$402;
    HTMLFormControlsCollectionAbs($$hTMLFormControlsCollection);
    $$$cl1.defineAttr($$hTMLFormControlsCollection,'n$402',function(){return this.n$402_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormControlsCollection,d:['ceylon.js.html','HTMLFormControlsCollection','$at','n']};});
    $$hTMLFormControlsCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormControlsCollection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','HTMLFormControlsCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLFormControlsCollection.$native=n$402;/*End dynamic block*/
    return $$hTMLFormControlsCollection;
}
HTMLFormControlsCollection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLFormControlsCollectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormControlsCollection']};};
exports.HTMLFormControlsCollection=HTMLFormControlsCollection;
function $init$HTMLFormControlsCollection(){
    if (HTMLFormControlsCollection.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormControlsCollection,'ceylon.js.html::HTMLFormControlsCollection',HTMLFormControlsCollectionAbs);
    }
    return HTMLFormControlsCollection;
}
exports.$init$HTMLFormControlsCollection=$init$HTMLFormControlsCollection;
$init$HTMLFormControlsCollection();
function HTMLFormControlsCollectionAbs($$hTMLFormControlsCollectionAbs){
    $init$HTMLFormControlsCollectionAbs();
    if ($$hTMLFormControlsCollectionAbs===undefined)$$hTMLFormControlsCollectionAbs=new HTMLFormControlsCollectionAbs.$$;
    $$$cjd401.HTMLCollectionAbs($$hTMLFormControlsCollectionAbs);
    return $$hTMLFormControlsCollectionAbs;
}
HTMLFormControlsCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd401.HTMLCollectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','HTMLFormControlsCollectionAbs']};};
exports.HTMLFormControlsCollectionAbs=HTMLFormControlsCollectionAbs;
function $init$HTMLFormControlsCollectionAbs(){
    if (HTMLFormControlsCollectionAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormControlsCollectionAbs,'ceylon.js.html::HTMLFormControlsCollectionAbs',$$$cjd401.HTMLCollectionAbs);
    }
    return HTMLFormControlsCollectionAbs;
}
exports.$init$HTMLFormControlsCollectionAbs=$init$HTMLFormControlsCollectionAbs;
$init$HTMLFormControlsCollectionAbs();
function HTMLFormElement(n$403, $$hTMLFormElement){
    $init$HTMLFormElement();
    if ($$hTMLFormElement===undefined)$$hTMLFormElement=new HTMLFormElement.$$;
    $$hTMLFormElement.n$403_=n$403;
    HTMLFormElementAbs($$hTMLFormElement);
    $$$cl1.defineAttr($$hTMLFormElement,'n$403',function(){return this.n$403_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLFormElement,d:['ceylon.js.html','HTMLFormElement','$at','n']};});
    /*Begin dynamic block*/
    $$hTMLFormElement.$native=n$403;/*End dynamic block*/
    return $$hTMLFormElement;
}
HTMLFormElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLFormElementAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElement']};};
exports.HTMLFormElement=HTMLFormElement;
function $init$HTMLFormElement(){
    if (HTMLFormElement.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElement,'ceylon.js.html::HTMLFormElement',HTMLFormElementAbs);
    }
    return HTMLFormElement;
}
exports.$init$HTMLFormElement=$init$HTMLFormElement;
$init$HTMLFormElement();
function HTMLFormElementAbs($$hTMLFormElementAbs){
    $init$HTMLFormElementAbs();
    if ($$hTMLFormElementAbs===undefined)$$hTMLFormElementAbs=new HTMLFormElementAbs.$$;
    $$$cjl167.JSObjectAbs($$hTMLFormElementAbs);
    function getAcceptCharset(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.acceptCharset);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAcceptCharset=getAcceptCharset;
    getAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAcceptCharset']};};
    function setAcceptCharset(acceptCharset$404){
        
        var case$405=acceptCharset$404;
        if ($$$cl1.isOfType(acceptCharset$404,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.acceptCharset=case$405.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(acceptCharset$404,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.acceptCharset=case$405.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAcceptCharset=setAcceptCharset;
    setAcceptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'acceptCharset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAcceptCharset']};};
    function getAction(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.action);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAction=getAction;
    getAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAction']};};
    function setAction(action$406){
        
        var case$407=action$406;
        if ($$$cl1.isOfType(action$406,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.action=case$407.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(action$406,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.action=case$407.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAction=setAction;
    setAction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'action',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAction']};};
    function getAutocomplete(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.autocomplete);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getAutocomplete=getAutocomplete;
    getAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getAutocomplete']};};
    function setAutocomplete(autocomplete$408){
        
        var case$409=autocomplete$408;
        if ($$$cl1.isOfType(autocomplete$408,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.autocomplete=case$409.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(autocomplete$408,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.autocomplete=case$409.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setAutocomplete=setAutocomplete;
    setAutocomplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'autocomplete',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setAutocomplete']};};
    function getEnctype(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.enctype);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getEnctype=getEnctype;
    getEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEnctype']};};
    function setEnctype(enctype$410){
        
        var case$411=enctype$410;
        if ($$$cl1.isOfType(enctype$410,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.enctype=case$411.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(enctype$410,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.enctype=case$411.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setEnctype=setEnctype;
    setEnctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'enctype',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEnctype']};};
    function getEncoding(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.encoding);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getEncoding=getEncoding;
    getEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getEncoding']};};
    function setEncoding(encoding$412){
        
        var case$413=encoding$412;
        if ($$$cl1.isOfType(encoding$412,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.encoding=case$413.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(encoding$412,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.encoding=case$413.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setEncoding=setEncoding;
    setEncoding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'encoding',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setEncoding']};};
    function getMethod(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.method);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getMethod=getMethod;
    getMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getMethod']};};
    function setMethod(method$414){
        
        var case$415=method$414;
        if ($$$cl1.isOfType(method$414,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.method=case$415.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(method$414,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.method=case$415.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setMethod=setMethod;
    setMethod.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setMethod']};};
    function getName(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.name);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getName=getName;
    getName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getName']};};
    function setName(name$416){
        
        var case$417=name$416;
        if ($$$cl1.isOfType(name$416,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.name=case$417.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$416,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.name=case$417.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setName=setName;
    setName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setName']};};
    function getNoValidate(){
        /*Begin dynamic block*/
        if($$hTMLFormElementAbs.$native.noValidate){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$hTMLFormElementAbs.getNoValidate=getNoValidate;
    getNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getNoValidate']};};
    function setNoValidate(noValidate$418){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.noValidate=noValidate$418;
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.setNoValidate=setNoValidate;
    setNoValidate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'noValidate',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setNoValidate']};};
    function getTarget(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$hTMLFormElementAbs.$native.target);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.getTarget=getTarget;
    getTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','getTarget']};};
    function setTarget(target$419){
        
        var case$420=target$419;
        if ($$$cl1.isOfType(target$419,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.target=case$420.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$419,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$hTMLFormElementAbs.$native.target=case$420.$native;
            /*End dynamic block*/
        }
    }
    $$hTMLFormElementAbs.setTarget=setTarget;
    setTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','setTarget']};};
    function elements(){
        /*Begin dynamic block*/
        return HTMLFormControlsCollection($$hTMLFormElementAbs.$native.elements);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.elements=elements;
    elements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLFormControlsCollection},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','elements']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$hTMLFormElementAbs.$native.length);
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','length']};};
    function checkValidity(){
        /*Begin dynamic block*/
        if($$hTMLFormElementAbs.$native.checkValidity()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$hTMLFormElementAbs.checkValidity=checkValidity;
    checkValidity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','checkValidity']};};
    function submit(){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.submit();
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.submit=submit;
    submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','submit']};};
    function reset(){
        /*Begin dynamic block*/
        $$hTMLFormElementAbs.$native.reset();
        /*End dynamic block*/
    }
    $$hTMLFormElementAbs.reset=reset;
    reset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HTMLFormElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','HTMLFormElementAbs','$m','reset']};};
    return $$hTMLFormElementAbs;
}
HTMLFormElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','HTMLFormElementAbs']};};
exports.HTMLFormElementAbs=HTMLFormElementAbs;
function $init$HTMLFormElementAbs(){
    if (HTMLFormElementAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLFormElementAbs,'ceylon.js.html::HTMLFormElementAbs',$$$cjl167.JSObjectAbs);
    }
    return HTMLFormElementAbs;
}
exports.$init$HTMLFormElementAbs=$init$HTMLFormElementAbs;
$init$HTMLFormElementAbs();
function Location(n$421, $$location){
    $init$Location();
    if ($$location===undefined)$$location=new Location.$$;
    $$location.n$421_=n$421;
    LocationAbs($$location);
    $$$cl1.defineAttr($$location,'n$421',function(){return this.n$421_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,d:['ceylon.js.html','Location','$at','n']};});
    $$location.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Location,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','Location','$at','native']};}};
    /*Begin dynamic block*/
    $$location.$native=n$421;/*End dynamic block*/
    return $$location;
}
Location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:LocationAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','Location']};};
exports.Location=Location;
function $init$Location(){
    if (Location.$$===undefined){
        $$$cl1.initTypeProto(Location,'ceylon.js.html::Location',LocationAbs);
    }
    return Location;
}
exports.$init$Location=$init$Location;
$init$Location();
function LocationAbs($$locationAbs){
    $init$LocationAbs();
    if ($$locationAbs===undefined)$$locationAbs=new LocationAbs.$$;
    $$$cjl167.JSObjectAbs($$locationAbs);
    function assignURL(url$422){
        
        var case$423=url$422;
        if ($$$cl1.isOfType(url$422,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.assign(/*NULL PARAM!*/case$423.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(url$422,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.assign(/*NULL PARAM!*/case$423.$native);
            /*End dynamic block*/
        }
    }
    $$locationAbs.assignURL=assignURL;
    assignURL.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','assignURL']};};
    $$locationAbs.reload$defs$forcedReload=function(forcedReload$424){return false;};
    function reload(forcedReload$424){
        if(forcedReload$424===undefined){forcedReload$424=$$locationAbs.reload$defs$forcedReload(forcedReload$424);}
        /*Begin dynamic block*/
        $$locationAbs.$native.reload(/*NULL PARAM!*/forcedReload$424);
        /*End dynamic block*/
    }
    $$locationAbs.reload=reload;
    reload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'forcedReload',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','reload']};};
    function replace(url$425){
        
        var case$426=url$425;
        if ($$$cl1.isOfType(url$425,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.replace(/*NULL PARAM!*/case$426.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(url$425,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$locationAbs.$native.replace(/*NULL PARAM!*/case$426.$native);
            /*End dynamic block*/
        }
    }
    $$locationAbs.replace=replace;
    replace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:LocationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','LocationAbs','$m','replace']};};
    return $$locationAbs;
}
LocationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','LocationAbs']};};
exports.LocationAbs=LocationAbs;
function $init$LocationAbs(){
    if (LocationAbs.$$===undefined){
        $$$cl1.initTypeProto(LocationAbs,'ceylon.js.html::LocationAbs',$$$cjl167.JSObjectAbs);
    }
    return LocationAbs;
}
exports.$init$LocationAbs=$init$LocationAbs;
$init$LocationAbs();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the HTML5 working draft",32))];};
exports.$pkg$ans$ceylon$js$html=function(){return[$$$cl1.shared()];};
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.html`.",32))];},d:['ceylon.js.html','run']};};
function Window(n$427, $$window){
    $init$Window();
    if ($$window===undefined)$$window=new Window.$$;
    $$window.n$427_=n$427;
    WindowAbs($$window);
    $$$cl1.defineAttr($$window,'n$427',function(){return this.n$427_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,d:['ceylon.js.html','Window','$at','n']};});
    $$window.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Window,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.html','Window','$at','native']};}};
    /*Begin dynamic block*/
    $$window.$native=n$427;/*End dynamic block*/
    return $$window;
}
Window.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:WindowAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.html','Window']};};
exports.Window=Window;
function $init$Window(){
    if (Window.$$===undefined){
        $$$cl1.initTypeProto(Window,'ceylon.js.html::Window',WindowAbs);
    }
    return Window;
}
exports.$init$Window=$init$Window;
$init$Window();
function WindowAbs($$windowAbs){
    $init$WindowAbs();
    if ($$windowAbs===undefined)$$windowAbs=new WindowAbs.$$;
    $$$cjl167.JSObjectAbs($$windowAbs);
    return $$windowAbs;
}
WindowAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.html','WindowAbs']};};
exports.WindowAbs=WindowAbs;
function $init$WindowAbs(){
    if (WindowAbs.$$===undefined){
        $$$cl1.initTypeProto(WindowAbs,'ceylon.js.html::WindowAbs',$$$cjl167.JSObjectAbs);
    }
    return WindowAbs;
}
exports.$init$WindowAbs=$init$WindowAbs;
$init$WindowAbs();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
