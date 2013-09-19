(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.js.dom\/4.0.0","ceylon.js.json\/1.0.0","ceylon.js.xmlhttprequest\/0.6.0"],"$mod-name":"ceylon.js.jquery","$mod-version":"1.10.0","ceylon.js.jquery":{"TweenAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOff"},"setOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"off"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOff"},"test":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"test"},"getInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getInterval"},"setInterval":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"interval"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setInterval"}},"$nm":"TweenAbs"},"DataType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"dataTypeXML"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeHtml"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeScript"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJson"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeJsonp"},{"$pk":"ceylon.js.jquery","$nm":"dataTypeText"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DataType"},"JQueryEventAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"metaKey":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"metaKey"},"result":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"result"},"which":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"which"},"isPropagationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isPropagationStopped"},"isDefaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultPrevented"},"delegateTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateTarget"},"data":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"data"},"relatedTarget":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"relatedTarget"},"isImmediatePropogationStopped":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isImmediatePropogationStopped"},"pageX":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageX"},"pageY":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"pageY"},"namespace":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"namespace"}},"$nm":"JQueryEventAbs"},"visibleSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"visibleSelector"},"dataTypeXML":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeXML"},"targetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"targetSelector"},"enabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"enabledSelector"},"getJQ":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$nm":"getJQ"},"fileSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"fileSelector"},"jQueryType":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryType"},"onlyChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyChildSelector"},"jQueryError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryError"},"jQueryAjaxPrefilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataTypes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxPrefilter"},"jQueryHasData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHasData"},"passwordSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"passwordSelector"},"jQueryParseHTML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"keepScripts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseHTML"},"lastChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastChildSelector"},"jQueryUnique":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"arr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryUnique"},"getjQueryElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elems","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getjQueryElements"},"Callbacks":{"super":{"$pk":"ceylon.js.jquery","$nm":"CallbacksAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Callbacks"},"JQXHR":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQXHRAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQXHR"},"lastSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastSelector"},"jQueryInArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"val"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"fromIndex"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryInArray"},"lastOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"lastOfTypeSelector"},"CallbacksAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"fired":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"fired"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"fireWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fireWith"},"lock":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lock"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"disable":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disable"},"locked":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"locked"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"has":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"fire":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fire"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"CallbacksAbs"},"jQueryExtendDeep":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtendDeep"},"jQueryMerge":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMerge"},"jQueryAjax":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"}]},"$mt":"prm","$def":"1","$nm":"settings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjax"},"submitSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"submitSelector"},"jQuerySetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetData"},"dataTypeHtml":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeHtml"},"AnimateOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"specialEasing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"step"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"progress"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"complete"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"done"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"fail"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"always"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"progress":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"progress"},"queue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"queue"},"duration":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"duration"},"easing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"easing"},"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"fail"},"specialEasing":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"specialEasing"},"complete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"complete"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Promise"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"always"},"step":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Tween"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Tween"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"step"}},"$nm":"AnimateOptions"},"JSONPSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JSONPSettings"},"JQueryAjaxSettings":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryAjaxSettings"},"JQuery":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQuery"},"focusSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"focusSelector"},"emptySelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"emptySelector"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.jquery`."]},"$nm":"run"},"createJSONPSettings":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"jsonpCallback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createJSONPSettings"},"inputSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"inputSelector"},"jQueryIsArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsArray"},"jQuerySetQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"callbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQuerySetQueue"},"jQueryIsNumeric":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsNumeric"},"jQueryGrep":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"invert"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGrep"},"JQueryAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"nextAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextAll"},"setPropEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropEntries"},"animate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animate"},"appendHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendHTML"},"ready":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ready"},"undelegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateEvents"},"hide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hide"},"prevAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevAll"},"wrapInnerCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInnerCallback"},"setOffsetCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.js.jquery","$nm":"Coordinates"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Coordinates"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffsetCallback"},"showOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"showOptions"},"clone":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"withDataAndEvents"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"deepWithDataAndEvents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clone"},"removeProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeProp"},"prependHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependHTML"},"contents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"contents"},"serialize":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serialize"},"parent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parent"},"outerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerWidth"},"prev":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prev"},"wrapInner":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapInner"},"removeAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttr"},"setOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setOffset"},"addBack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addBack"},"mouseenter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseenter"},"load":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.xmlhttprequest","$mt":"tpm","$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},{"$md":"ceylon.js.xmlhttprequest","$mt":"tpm","$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"load"},"each":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"each"},"replaceAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceAll"},"toggleClassName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassName"},"getVal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getVal"},"setCss":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCss"},"before":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"before"},"next":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"next"},"fadeOut":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOut"},"setCssJson":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCssJson"},"ajaxError":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Exception"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxError"},"isSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isSelector"},"getAttr":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttr"},"mousemove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousemove"},"prependTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependTo"},"map":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"map"},"getHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHtml"},"outerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"includeMargin"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"outerHeight"},"fadeTo":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"opacity"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeTo"},"ajaxStart":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStart"},"stopName":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stopName"},"closestjQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"prm","$nm":"jq"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestjQuery"},"slice":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"start"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slice"},"ajaxComplete":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxComplete"},"eq":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"eq"},"focusout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusout"},"keyup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keyup"},"change":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"change"},"setVal":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setVal"},"has":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"has"},"after":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"after"},"removeClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClassCallback"},"slideUp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUp"},"fadeIn":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeIn"},"closest":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closest"},"setValCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValCallback"},"getProp":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getProp"},"append":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"index":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"index"},"mousedown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mousedown"},"get":{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"get"},"submit":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"submit"},"select":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"select"},"keydown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keydown"},"toggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleOptions"},"ajaxSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSend"},"finish":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"queue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"finish"},"dblclick":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dblclick"},"afterJQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterJQuery"},"pushStack":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"elements"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"pushStack"},"bindEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindEvents"},"mouseup":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseup"},"setWidthCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidthCallback"},"wrapAll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapAll"},"setQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"newQueue"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueue"},"children":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"children"},"closestElement":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"elem"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"closestElement"},"mouseleave":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseleave"},"dequeue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dequeue"},"setScrollTop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollTop"},"getHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeight"},"animateOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"properties"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"animateOptions"},"setCssCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"property"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"setCssCallback"},"prepend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prepend"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"setAttr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttr"},"siblings":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"siblings"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"siblings"},"removeClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeClass"},"off":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"off"},"bind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"preventBubble"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bind"},"toggleShowOrHide":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"showOrHide"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleShowOrHide"},"addElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$mt":"prm","seq":"1","$nm":"elements","$min1":"1"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addElements"},"clearQueue":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"clearQueue"},"toggleClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClassCallback"},"setPropCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPropCallback"},"slideToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggle"},"empty":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"empty"},"setAttrEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrEntries"},"setProp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"propertyName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProp"},"on":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"on"},"focus":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focus"},"focusin":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"focusin"},"setDataEntries":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataEntries"},"resizeTrigger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"resizeTrigger"},"setHtml":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"html"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtml"},"hoverSingle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerInOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hoverSingle"},"removeData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeData"},"not":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"not"},"innerWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerWidth"},"delegateEvents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"events"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegateEvents"},"delay":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"duration"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delay"},"afterElements":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"afterElements"},"isCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isCallback"},"addClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addClass"},"position":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"position"},"remove":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"remove"},"click":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"click"},"nextUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"nextUntil"},"delegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"delegate"},"appendCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendCallback"},"setAttrCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attributeName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttrCallback"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"slideUpOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideUpOptions"},"end":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"end"},"serializeArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"serializeArray"},"trigger":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"event"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"extraParameters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"trigger"},"toArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toArray"},"insertBefore":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"mouseout":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseout"},"slideToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideToggleOptions"},"filterCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filterCallback"},"innerHeight":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"innerHeight"},"ajaxStop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxStop"},"setTextCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextCallback"},"prevUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prevUntil"},"mouseover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"mouseover"},"setHeightCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeightCallback"},"slideDownOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDownOptions"},"unwrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"unwrap"},"last":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"last"},"show":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"show"},"setText":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"textString"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setText"},"jquery":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jquery"},"toggleClass":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"swit"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggleClass"},"resize":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resize"},"fadeToggleOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggleOptions"},"getScrollLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollLeft"},"getWidth":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWidth"},"fadeOutOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeOutOptions"},"ajaxSuccess":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"ajaxSuccess"},"getQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns an array of functions"]},"$nm":"getQueue"},"replaceWithCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.js.dom","$mt":"tpm","$pk":"ceylon.js.dom","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWithCallback"},"wrap":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"wrappingElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrap"},"detach":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"wrapCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"wrapCallback"},"scroll":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"scroll"},"unbind":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},{"$pk":"ceylon.js.jquery","$nm":"JQueryEvent"}]},"$mt":"prm","$nm":"eventType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbind"},"fadeToggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeToggle"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"keypress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"keypress"},"setHeight":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeight"},"bindCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"eventData"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"bindCallback"},"replaceWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$nm":"newContent"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceWith"},"filter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"undelegateCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegateCallback"},"stop":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"clearQueue"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"jumpToEnd"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"stop"},"beforeCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeCallback"},"parents":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parents"},"slideDown":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"slideDown"},"unbindCallaback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"eventType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"unbindCallaback"},"getCss":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"}]},"$mt":"prm","$nm":"properties"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getCss"},"one":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"events"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"one"},"setScrollLeft":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScrollLeft"},"blur":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"blur"},"add":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"append"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"getText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getText"},"toggle":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]}]},"$mt":"prm","$def":"1","$nm":"duration"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"easing"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toggle"},"parentsUntil":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]}]},"$mt":"prm","$def":"1","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"parentsUntil"},"getScrollTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScrollTop"},"die":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"die"},"setWidth":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"width"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWidth"},"setHtmlCallback":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHtmlCallback"},"undelegate":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"namespace"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"undelegate"},"find":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"selector"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"find"},"error":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"eventData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"error"},"appendTo":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendTo"},"insertAfter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]},"$mt":"prm","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertAfter"},"hideOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hideOptions"},"hover":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerIn"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryEvent"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"handlerOut"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hover"},"fadeInOptions":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"AnimateOptions"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fadeInOptions"},"setData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"hasClass":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"className"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasClass"},"addSelector":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"addSelector"},"beforeHTML":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"beforeHTML"},"offsetParent":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"offsetParent"},"addClassCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"prm","$pt":"f","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"currentClass"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addClassCallback"},"getOffset":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getOffset"},"setQueueCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"next"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setQueueCallback"},"first":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"first"},"prependCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"prependCallback"}},"$nm":"JQueryAbs"},"textSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"textSelector"},"jQueryProxyName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxyName"},"evenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"evenSelector"},"jQueryPost":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryPost"},"jQueryGetQueue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[],"doc":["returns JSFunctions[]"]},"$nm":"jQueryGetQueue"},"jQueryEach":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"collection"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryEach"},"jQueryDeferred":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"beforeStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDeferred"},"parentSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"parentSelector"},"JQueryAjaxSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getXhr":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything()?"]},"$nm":"getXhr"},"setCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cache"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCache"},"setContext":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContext"},"getContents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContents"},"getJsonp":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getJsonp"},"setDataFilter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataFilter"},"getContext":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContext"},"setIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"local"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsLocal"},"setContentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"contentType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContentType"},"getProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getProcessData"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"setError":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"datafilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setError"},"getComplete":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns array of Anything(JQXHR, String) or null"]},"$nm":"getComplete"},"getDataType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDataType"},"setHeaders":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$nm":"headers"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setHeaders"},"setScriptCharset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"scriptCharset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setScriptCharset"},"setContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"contents"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setContents"},"setCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"crossDomain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCrossDomain"},"setType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"type"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setType"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"setStatusCode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSNumber"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"statusCodes"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStatusCode"},"getPassword":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getPassword"},"getIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIfModified"},"setDataType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDataType"},"getJsonpCallback":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns String|String()?"]},"$nm":"getJsonpCallback"},"setMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"mimeType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMimeType"},"setXhrFields":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"xhrFields"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhrFields"},"getData":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"getBeforeSend":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Boolean(JQXHR, JQueryAjaxSettings)?"]},"$nm":"getBeforeSend"},"setBeforeSend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"beforeSend"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setBeforeSend"},"getTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTraditional"},"getUsername":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUsername"},"getXhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getXhrFields"},"getStatusCode":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)"]},"$nm":"getStatusCode"},"getMimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMimeType"},"getContentType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getContentType"},"getDataFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(String, String)?"]},"$nm":"getDataFilter"},"setUsername":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"username"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUsername"},"getSuccess":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(Anything, String, JQXHR)[]"]},"$nm":"getSuccess"},"getType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getType"},"getError":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"}]},"$mt":"mthd","$an":{"shared":[],"doc":["returns Anything(JQXHR, String?, String?)[]"]},"$nm":"getError"},"setUrl":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setUrl"},"getHeaders":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getHeaders"},"setIfModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"modified"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIfModified"},"getAccepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAccepts"},"setComplete":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"complete"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setComplete"},"setPassword":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setPassword"},"getCache":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCache"},"setConverters":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"converters"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setConverters"},"setSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSuccess"},"getCrossDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCrossDomain"},"getIsLocal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsLocal"},"setXhr":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"xhr"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setXhr"},"getConverters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getConverters"},"setJsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonpCallback"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"},"getScriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getScriptCharset"},"setGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"global"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setGlobal"},"getUrl":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getUrl"},"setTraditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTraditional"},"getTimeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"setAccepts":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSString"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"accepts"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAccepts"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"getGlobal":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getGlobal"},"setJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPSettings"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setJsonp"},"setProcessData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"processData"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setProcessData"}},"$nm":"JQueryAjaxSettingsAbs"},"dataTypeJson":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJson"},"rootSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"rootSelector"},"jQueryGetData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetData"},"jQueryGetJSON":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetJSON"},"JQueryEvent":{"super":{"$pk":"ceylon.js.jquery","$nm":"JQueryEventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"JQueryEvent"},"Promise":{"super":{"$pk":"ceylon.js.jquery","$nm":"PromiseAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Promise"},"radioSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"radioSelector"},"jQueryIsPlainObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsPlainObject"},"disabledSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"disabledSelector"},"getjQuery":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getjQuery"},"selectedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"selectedSelector"},"jQueryWhen":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"Deferred"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"deferreds"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryWhen"},"jQueryIsFunction":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsFunction"},"jQueryNoConflict":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"removeAll"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoConflict"},"JQueryAjaxSettingsBuilder":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"cache"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"contentType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"context"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"crossDomain"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"data"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"dataType"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"global"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"ifModified"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"isLocal"},{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"mimeType"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"processData"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"scriptCharset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"timeout"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"traditional"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"type"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"username"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toNative":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toNative"}},"$at":{"headers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"headers"},"data":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"data"},"xhrFields":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhrFields"},"contentType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"contentType"},"type":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"type"},"password":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"password"},"statusCode":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"statusCode"},"username":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"username"},"complete":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"complete"},"dataFilter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"dataFilter"},"processData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"processData"},"crossDomain":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"crossDomain"},"accepts":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"accepts"},"mimeType":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"mimeType"},"jsonpCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]}]},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"},"error":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"error"},"cache":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"cache"},"contents":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"RegExp"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"contents"},"global":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"global"},"scriptCharset":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"scriptCharset"},"traditional":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"traditional"},"converters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$mt":"tpm","$pk":"ceylon.js.language","$nm":"JSObject"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"converters"},"async":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"async"},"url":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"url"},"ifModified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"ifModified"},"dataType":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"DataType"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"dataType"},"jsonp":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JSONPOptions"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"context":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"context"},"beforeSend":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"beforeSend"},"xhr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"xhr"},"isLocal":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"isLocal"},"success":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"success"},"timeout":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"attr","$an":{"shared":[]},"$nm":"timeout"}},"$nm":"JQueryAjaxSettingsBuilder"},"DeferredAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"progress":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"progressCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"progress"},"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"resolve":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolve"},"rejectWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"rejectWith"},"reject":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"reject"},"notifyWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notifyWith"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"resolveWith":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"resolveWith"},"notify":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"args"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"notify"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"state":{"$t":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"state"},"promise":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"}]},"$mt":"prm","$def":"1","$nm":"target"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"promise"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Deferred"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"DeferredAbs"},"animatedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"animatedSelector"},"Coordinates":{"super":{"$pk":"ceylon.js.jquery","$nm":"CoordinatesAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Coordinates"},"$pkg-shared":"1","jQueryFxOff":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxOff"},"jQueryDequeue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"queueName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryDequeue"},"jQueryProxy":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSFunction"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"func"},{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"context"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"additionalArguments"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryProxy"},"checkedSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkedSelector"},"firstOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstOfTypeSelector"},"jQueryTrim":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryTrim"},"resetSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"resetSelector"},"jQueryNow":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNow"},"oddSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"oddSelector"},"Deferred":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Deferred"},"hiddenSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"hiddenSelector"},"jQueryGlobalEval":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"code"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGlobalEval"},"jQueryHoldReady":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"hold"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryHoldReady"},"JSONPSettingsAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"jsonp"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setIsJsonp"},"getCallback":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCallback"},"getIsJsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getIsJsonp"},"setCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCallback"}},"$nm":"JSONPSettingsAbs"},"jQueryExtend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"objects"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryExtend"},"jQueryMapObject":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapObject"},"jQueryCallbacks":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Callbacks"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"flags"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCallbacks"},"JQXHRAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"statusCode":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusCode"},"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"readyState":{"$t":{"$md":"ceylon.js.xmlhttprequest","$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$at":{"fail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"fail"},"done":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"done"},"doThen":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"doThen"},"always":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"always"}},"$nm":"JQXHRAbs"},"jQueryAjaxSetup":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettingsBuilder"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxSetup"},"createCoordinates":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Coordinates"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"top"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCoordinates"},"getjQuerySelector":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"selector"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.jquery","$nm":"JQuery"}]}]},"$mt":"prm","$def":"1","$nm":"context"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getjQuerySelector"},"buttonSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"buttonSelector"},"jQueryContains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"container"},{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"contained"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryContains"},"jQueryMapArray":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"prm","$nm":"array"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryMapArray"},"jQueryNoop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryNoop"},"allSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"allSelector"},"jQueryAjaxTransport":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dataType"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQueryAjaxSettings"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callback"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryAjaxTransport"},"JSONPOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonp"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"jsonpCallback"}],"$mt":"cls","$an":{"shared":[]},"$at":{"jsonp":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonp"},"jsonpCallback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"jsonpCallback"}},"$nm":"JSONPOptions"},"deferredStateResolved":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateResolved"},"deferredStatePending":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStatePending"},"jQueryFxInterval":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFxInterval"},"deferredStateRejected":{"super":{"$pk":"ceylon.js.jquery","$nm":"DeferredState"},"$mt":"obj","$an":{"shared":[]},"$nm":"deferredStateRejected"},"checkboxSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"checkboxSelector"},"jQueryIsXMLDoc":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsXMLDoc"},"jQueryParam":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$mt":"prm","$nm":"obj"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"traditional"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParam"},"jQueryIsWindow":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsWindow"},"dataTypeText":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeText"},"firstSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstSelector"},"jQueryParseJSON":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseJSON"},"jQueryGet":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"data"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"dataType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGet"},"jQueryCssHooks":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryCssHooks"},"jQueryRemoveData":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQuery"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"prm","$nm":"element"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryRemoveData"},"jQueryParseXML":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryParseXML"},"jQueryFnExtend":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryFnExtend"},"CoordinatesAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setTop":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"top"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTop"},"getLeft":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getLeft"},"setLeft":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"prm","$nm":"left"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setLeft"},"getTop":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTop"}},"$nm":"CoordinatesAbs"},"onlyOfTypeSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"onlyOfTypeSelector"},"DeferredState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.jquery","$nm":"deferredStatePending"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateResolved"},{"$pk":"ceylon.js.jquery","$nm":"deferredStateRejected"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DeferredState"},"dataTypeJsonp":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeJsonp"},"PromiseAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"thenFilter":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"doneFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"failFilter"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"progressFilter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"thenFilter"},"fail":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"failCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fail"},"done":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"doneCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"done"},"always":{"$t":{"$pk":"ceylon.js.jquery","$nm":"Promise"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"alwaysCallbacks"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"always"}},"$nm":"PromiseAbs"},"Tween":{"super":{"$pk":"ceylon.js.jquery","$nm":"TweenAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.jquery","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Tween"},"imageSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"imageSelector"},"firstChildSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"firstChildSelector"},"jQueryIsEmptyObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryIsEmptyObject"},"dataTypeScript":{"super":{"$pk":"ceylon.js.jquery","$nm":"DataType"},"$mt":"obj","$an":{"shared":[]},"$nm":"dataTypeScript"},"jQueryGetScript":{"$t":{"$pk":"ceylon.js.jquery","$nm":"JQXHR"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"url"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$pk":"ceylon.js.jquery","$nm":"JQXHR"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$mt":"tpm","$pk":"ceylon.js.jquery","$nm":"JQXHR"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Callable"}]},"$mt":"prm","$def":"1","$nm":"success"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"jQueryGetScript"},"headerSelector":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"headerSelector"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
function AnimateOptions(duration, easing, queue, specialEasing, step, progress, complete, done, fail, always, $$animateOptions){
    $init$AnimateOptions();
    if ($$animateOptions===undefined)$$animateOptions=new AnimateOptions.$$;
    if(duration===undefined){duration=null;}
    $$animateOptions.duration_=duration;
    if(easing===undefined){easing=null;}
    $$animateOptions.easing_=easing;
    if(queue===undefined){queue=null;}
    $$animateOptions.queue_=queue;
    if(specialEasing===undefined){specialEasing=null;}
    $$animateOptions.specialEasing_=specialEasing;
    if(step===undefined){step=null;}
    $$animateOptions.step_=step;
    if(progress===undefined){progress=null;}
    $$animateOptions.progress_=progress;
    if(complete===undefined){complete=null;}
    $$animateOptions.complete_=complete;
    if(done===undefined){done=null;}
    $$animateOptions.done_=done;
    if(fail===undefined){fail=null;}
    $$animateOptions.fail_=fail;
    if(always===undefined){always=null;}
    $$animateOptions.always_=always;
    $$$cl1.defineAttr($$animateOptions,'duration',function(){return this.duration_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','duration']};});
    $$$cl1.defineAttr($$animateOptions,'easing',function(){return this.easing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','easing']};});
    $$$cl1.defineAttr($$animateOptions,'queue',function(){return this.queue_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Boolean},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','queue']};});
    $$$cl1.defineAttr($$animateOptions,'specialEasing',function(){return this.specialEasing_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','specialEasing']};});
    $$$cl1.defineAttr($$animateOptions,'step',function(){return this.step_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Tween},Element:{t:Tween}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Tween}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','step']};});
    $$$cl1.defineAttr($$animateOptions,'progress',function(){return this.progress_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Integer}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','progress']};});
    $$$cl1.defineAttr($$animateOptions,'complete',function(){return this.complete_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','complete']};});
    $$$cl1.defineAttr($$animateOptions,'done',function(){return this.done_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','done']};});
    $$$cl1.defineAttr($$animateOptions,'fail',function(){return this.fail_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','fail']};});
    $$$cl1.defineAttr($$animateOptions,'always',function(){return this.always_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:Promise},Element:{ t:'u', l:[{t:Promise},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$at','always']};});
    function toNative(){
        var native$1104;
        $prop$getNative$1104={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','AnimateOptions','$m','toNative','$at','native']};}};
        $prop$getNative$1104.get=function(){return native$1104};
        /*Begin dynamic block*/
        native$1104=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'13:12-13:17','animateoptions.ceylon'):Object)();var d$1105;
        if((d$1105=$$animateOptions.duration)!==null){
            native$1104.duration=d$1105;
        }var e$1106;
        if((e$1106=$$animateOptions.easing)!==null){
            native$1104.easing=e$1106.valueOf();
        }var q$1107;
        if((q$1107=$$animateOptions.queue)!==null){
            native$1104.queue=(typeof e==='undefined'||e===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: e")),'21:19-21:19','animateoptions.ceylon'):e);
        }var sE$1108;
        if((sE$1108=$$animateOptions.specialEasing)!==null){
            var specialEasingNative$1109=$$$cjl167.createJSObject();
            $prop$getSpecialEasingNative$1109={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','AnimateOptions','$m','toNative','$at','specialEasingNative']};}};
            $prop$getSpecialEasingNative$1109.get=function(){return specialEasingNative$1109};
            var it$1110 = sE$1108.iterator();
            var item$1111;while ((item$1111=it$1110.next())!==$$$cl1.getFinished()){
                var key$1112=item$1111.key;
                var val$1113=item$1111.item;
                $$$cjl167.objectDefineProperty(specialEasingNative$1109,(tmpvar$1114=$$$cjl167.createJSString(key$1112),$$$cl1.isOfType(tmpvar$1114,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1114:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'27:48-27:66','animateoptions.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,val$1113));
            }
            native$1104.specialEasing=specialEasingNative$1109;
        }var s$1115;
        if((s$1115=$$animateOptions.step)!==null){
            native$1104.step=$$$cl1.$JsCallable(s$1115/*TODO: callable targs 6*/);
        }var p$1116;
        if((p$1116=$$animateOptions.progress)!==null){
            native$1104.progress=$$$cl1.$JsCallable(p$1116/*TODO: callable targs 6*/);
        }var c$1117;
        if((c$1117=$$animateOptions.complete)!==null){
            native$1104.complete=$$$cl1.$JsCallable(c$1117/*TODO: callable targs 6*/);
        }var d$1118;
        if((d$1118=$$animateOptions.done)!==null){
            native$1104.done=$$$cl1.$JsCallable(d$1118/*TODO: callable targs 6*/);
        }var f$1119;
        if((f$1119=$$animateOptions.fail)!==null){
            native$1104.fail=$$$cl1.$JsCallable(f$1119/*TODO: callable targs 6*/);
        }var a$1120;
        if((a$1120=$$animateOptions.always)!==null){
            native$1104.always=$$$cl1.$JsCallable(a$1120/*TODO: callable targs 6*/);
        }return $$$cjl167.JSObject(native$1104);
        /*End dynamic block*/
    }
    $$animateOptions.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[],$cont:AnimateOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions','$m','toNative']};};
    return $$animateOptions;
}
AnimateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','AnimateOptions']};};
exports.AnimateOptions=AnimateOptions;
function $init$AnimateOptions(){
    if (AnimateOptions.$$===undefined){
        $$$cl1.initTypeProto(AnimateOptions,'ceylon.js.jquery::AnimateOptions',$$$cl1.Basic);
    }
    return AnimateOptions;
}
exports.$init$AnimateOptions=$init$AnimateOptions;
$init$AnimateOptions();
function Callbacks(n$1121, $$callbacks){
    $init$Callbacks();
    if ($$callbacks===undefined)$$callbacks=new Callbacks.$$;
    $$callbacks.n$1121_=n$1121;
    CallbacksAbs($$callbacks);
    $$$cl1.defineAttr($$callbacks,'n$1121',function(){return this.n$1121_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,d:['ceylon.js.jquery','Callbacks','$at','n']};});
    $$callbacks.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Callbacks,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Callbacks','$at','native']};}};
    /*Begin dynamic block*/
    $$callbacks.$native=n$1121;/*End dynamic block*/
    return $$callbacks;
}
Callbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CallbacksAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Callbacks']};};
exports.Callbacks=Callbacks;
function $init$Callbacks(){
    if (Callbacks.$$===undefined){
        $$$cl1.initTypeProto(Callbacks,'ceylon.js.jquery::Callbacks',CallbacksAbs);
    }
    return Callbacks;
}
exports.$init$Callbacks=$init$Callbacks;
$init$Callbacks();
function CallbacksAbs($$callbacksAbs){
    $init$CallbacksAbs();
    if ($$callbacksAbs===undefined)$$callbacksAbs=new CallbacksAbs.$$;
    $$$cjl167.JSObjectAbs($$callbacksAbs);
    function add(callbacks$1122){
        if(callbacks$1122===undefined){callbacks$1122=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.add(/*NULL PARAM!*/callbacks$1122));
        /*End dynamic block*/
    }
    $$callbacksAbs.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','add']};};
    function disable(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.disable());
        /*End dynamic block*/
    }
    $$callbacksAbs.disable=disable;
    disable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disable']};};
    function disabled(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.disabled()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.disabled=disabled;
    disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','disabled']};};
    function empty(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.empty());
        /*End dynamic block*/
    }
    $$callbacksAbs.empty=empty;
    empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','empty']};};
    function fire(args$1123){
        if(args$1123===undefined){args$1123=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fire(/*NULL PARAM!*/args$1123));
        /*End dynamic block*/
    }
    $$callbacksAbs.fire=fire;
    fire.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fire']};};
    function fired(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.fired()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.fired=fired;
    fired.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fired']};};
    $$callbacksAbs.fireWith$defs$context=function(context$1124,args$1125){return null;};
    function fireWith(context$1124,args$1125){
        if(context$1124===undefined){context$1124=$$callbacksAbs.fireWith$defs$context(context$1124,args$1125);}
        if(args$1125===undefined){args$1125=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.fireWith(/*NULL PARAM!*/context$1124/*NULL PARAM!*/,args$1125));
        /*End dynamic block*/
    }
    $$callbacksAbs.fireWith=fireWith;
    fireWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','fireWith']};};
    function has(callback$1126){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.has(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1126,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.has=has;
    has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','has']};};
    function lock(){
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.lock());
        /*End dynamic block*/
    }
    $$callbacksAbs.lock=lock;
    lock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','lock']};};
    function locked(){
        /*Begin dynamic block*/
        if($$callbacksAbs.$native.locked()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$callbacksAbs.locked=locked;
    locked.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','locked']};};
    function remove(callbacks$1127){
        if(callbacks$1127===undefined){callbacks$1127=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Callbacks($$callbacksAbs.$native.remove(/*NULL PARAM!*/callbacks$1127));
        /*End dynamic block*/
    }
    $$callbacksAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:CallbacksAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CallbacksAbs','$m','remove']};};
    return $$callbacksAbs;
}
CallbacksAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CallbacksAbs']};};
exports.CallbacksAbs=CallbacksAbs;
function $init$CallbacksAbs(){
    if (CallbacksAbs.$$===undefined){
        $$$cl1.initTypeProto(CallbacksAbs,'ceylon.js.jquery::CallbacksAbs',$$$cjl167.JSObjectAbs);
    }
    return CallbacksAbs;
}
exports.$init$CallbacksAbs=$init$CallbacksAbs;
$init$CallbacksAbs();
function createCoordinates(top$1128,left$1129){
    /*Begin dynamic block*/
    var coor$1130=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'5:17-5:22','coordinates.ceylon'):Object)();
    $prop$getCoor$1130={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','createCoordinates','$at','coor']};}};
    $prop$getCoor$1130.get=function(){return coor$1130};
    var t$1131;
    if((t$1131=top$1128)!==null){
        coor$1130.top=t$1131;
    }var l$1132;
    if((l$1132=left$1129)!==null){
        coor$1130.left=l$1132;
    }return Coordinates(coor$1130);
    /*End dynamic block*/
}
exports.createCoordinates=createCoordinates;
createCoordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}},{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createCoordinates']};};
function Coordinates(n$1133, $$coordinates){
    $init$Coordinates();
    if ($$coordinates===undefined)$$coordinates=new Coordinates.$$;
    $$coordinates.n$1133_=n$1133;
    CoordinatesAbs($$coordinates);
    $$$cl1.defineAttr($$coordinates,'n$1133',function(){return this.n$1133_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,d:['ceylon.js.jquery','Coordinates','$at','n']};});
    $$coordinates.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Coordinates,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Coordinates','$at','native']};}};
    /*Begin dynamic block*/
    $$coordinates.$native=n$1133;/*End dynamic block*/
    return $$coordinates;
}
Coordinates.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CoordinatesAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Coordinates']};};
exports.Coordinates=Coordinates;
function $init$Coordinates(){
    if (Coordinates.$$===undefined){
        $$$cl1.initTypeProto(Coordinates,'ceylon.js.jquery::Coordinates',CoordinatesAbs);
    }
    return Coordinates;
}
exports.$init$Coordinates=$init$Coordinates;
$init$Coordinates();
function CoordinatesAbs($$coordinatesAbs){
    $init$CoordinatesAbs();
    if ($$coordinatesAbs===undefined)$$coordinatesAbs=new CoordinatesAbs.$$;
    $$$cjl167.JSObjectAbs($$coordinatesAbs);
    function getTop(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$coordinatesAbs.$native.top);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getTop=getTop;
    getTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getTop']};};
    function setTop(top$1134){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.top=top$1134;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setTop=setTop;
    setTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'top',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setTop']};};
    function getLeft(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$coordinatesAbs.$native.left);
        /*End dynamic block*/
    }
    $$coordinatesAbs.getLeft=getLeft;
    getLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','getLeft']};};
    function setLeft(left$1135){
        /*Begin dynamic block*/
        $$coordinatesAbs.$native.left=left$1135;
        /*End dynamic block*/
    }
    $$coordinatesAbs.setLeft=setLeft;
    setLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'left',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$an:function(){return[];}}],$cont:CoordinatesAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','CoordinatesAbs','$m','setLeft']};};
    return $$coordinatesAbs;
}
CoordinatesAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','CoordinatesAbs']};};
exports.CoordinatesAbs=CoordinatesAbs;
function $init$CoordinatesAbs(){
    if (CoordinatesAbs.$$===undefined){
        $$$cl1.initTypeProto(CoordinatesAbs,'ceylon.js.jquery::CoordinatesAbs',$$$cjl167.JSObjectAbs);
    }
    return CoordinatesAbs;
}
exports.$init$CoordinatesAbs=$init$CoordinatesAbs;
$init$CoordinatesAbs();
function DeferredState(name$1136, $$deferredState){
    $init$DeferredState();
    if ($$deferredState===undefined)$$deferredState=new DeferredState.$$;
    $$deferredState.name$1136_=name$1136;
    $$$cl1.defineAttr($$deferredState,'name$1136',function(){return this.name$1136_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DeferredState,d:['ceylon.js.jquery','DeferredState','$at','name']};});
    return $$deferredState;
}
DeferredState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DeferredState']};};
exports.DeferredState=DeferredState;
function $init$DeferredState(){
    if (DeferredState.$$===undefined){
        $$$cl1.initTypeProto(DeferredState,'ceylon.js.jquery::DeferredState',$$$cl1.Basic);
    }
    return DeferredState;
}
exports.$init$DeferredState=$init$DeferredState;
$init$DeferredState();
function deferredStatePending$1137(){
    var $$deferredStatePending=new deferredStatePending$1137.$$;
    DeferredState($$$cl1.String("pending",7),$$deferredStatePending);
    return $$deferredStatePending;
}
function $init$deferredStatePending$1137(){
    if (deferredStatePending$1137.$$===undefined){
        $$$cl1.initTypeProto(deferredStatePending$1137,'ceylon.js.jquery::deferredStatePending',DeferredState);
    }
    return deferredStatePending$1137;
}
exports.$init$deferredStatePending$1137=$init$deferredStatePending$1137;
$init$deferredStatePending$1137();
var deferredStatePending$1138=deferredStatePending$1137();
var getDeferredStatePending=function(){
    return deferredStatePending$1138;
}
exports.getDeferredStatePending=getDeferredStatePending;
getDeferredStatePending.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStatePending$1137},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStatePending']};};
$prop$getDeferredStatePending={get:getDeferredStatePending,$$metamodel$$:getDeferredStatePending.$$metamodel$$};
exports.$prop$getDeferredStatePending=$prop$getDeferredStatePending;
function deferredStateResolved$1139(){
    var $$deferredStateResolved=new deferredStateResolved$1139.$$;
    DeferredState($$$cl1.String("resolved",8),$$deferredStateResolved);
    return $$deferredStateResolved;
}
function $init$deferredStateResolved$1139(){
    if (deferredStateResolved$1139.$$===undefined){
        $$$cl1.initTypeProto(deferredStateResolved$1139,'ceylon.js.jquery::deferredStateResolved',DeferredState);
    }
    return deferredStateResolved$1139;
}
exports.$init$deferredStateResolved$1139=$init$deferredStateResolved$1139;
$init$deferredStateResolved$1139();
var deferredStateResolved$1140=deferredStateResolved$1139();
var getDeferredStateResolved=function(){
    return deferredStateResolved$1140;
}
exports.getDeferredStateResolved=getDeferredStateResolved;
getDeferredStateResolved.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateResolved$1139},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateResolved']};};
$prop$getDeferredStateResolved={get:getDeferredStateResolved,$$metamodel$$:getDeferredStateResolved.$$metamodel$$};
exports.$prop$getDeferredStateResolved=$prop$getDeferredStateResolved;
function deferredStateRejected$1141(){
    var $$deferredStateRejected=new deferredStateRejected$1141.$$;
    DeferredState($$$cl1.String("rejected",8),$$deferredStateRejected);
    return $$deferredStateRejected;
}
function $init$deferredStateRejected$1141(){
    if (deferredStateRejected$1141.$$===undefined){
        $$$cl1.initTypeProto(deferredStateRejected$1141,'ceylon.js.jquery::deferredStateRejected',DeferredState);
    }
    return deferredStateRejected$1141;
}
exports.$init$deferredStateRejected$1141=$init$deferredStateRejected$1141;
$init$deferredStateRejected$1141();
var deferredStateRejected$1142=deferredStateRejected$1141();
var getDeferredStateRejected=function(){
    return deferredStateRejected$1142;
}
exports.getDeferredStateRejected=getDeferredStateRejected;
getDeferredStateRejected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:deferredStateRejected$1141},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','deferredStateRejected']};};
$prop$getDeferredStateRejected={get:getDeferredStateRejected,$$metamodel$$:getDeferredStateRejected.$$metamodel$$};
exports.$prop$getDeferredStateRejected=$prop$getDeferredStateRejected;
function Deferred(n$1143, $$deferred){
    $init$Deferred();
    if ($$deferred===undefined)$$deferred=new Deferred.$$;
    $$deferred.n$1143_=n$1143;
    DeferredAbs($$deferred);
    $$$cl1.defineAttr($$deferred,'n$1143',function(){return this.n$1143_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,d:['ceylon.js.jquery','Deferred','$at','n']};});
    $$deferred.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Deferred,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Deferred','$at','native']};}};
    /*Begin dynamic block*/
    $$deferred.$native=n$1143;/*End dynamic block*/
    return $$deferred;
}
Deferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DeferredAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Deferred']};};
exports.Deferred=Deferred;
function $init$Deferred(){
    if (Deferred.$$===undefined){
        $$$cl1.initTypeProto(Deferred,'ceylon.js.jquery::Deferred',DeferredAbs);
    }
    return Deferred;
}
exports.$init$Deferred=$init$Deferred;
$init$Deferred();
function DeferredAbs($$deferredAbs){
    $init$DeferredAbs();
    if ($$deferredAbs===undefined)$$deferredAbs=new DeferredAbs.$$;
    $$$cjl167.JSObjectAbs($$deferredAbs);
    function always(alwaysCallbacks$1144){
        if(alwaysCallbacks$1144===undefined){alwaysCallbacks$1144=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1144));
        /*End dynamic block*/
    }
    $$deferredAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','always']};};
    function done(doneCallbacks$1145){
        if(doneCallbacks$1145===undefined){doneCallbacks$1145=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1145));
        /*End dynamic block*/
    }
    $$deferredAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','done']};};
    function fail(failCallbacks$1146){
        if(failCallbacks$1146===undefined){failCallbacks$1146=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1146));
        /*End dynamic block*/
    }
    $$deferredAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','fail']};};
    $$deferredAbs.thenFilter$defs$failFilter=function(doneFilter$1147,failFilter$1148,progressFilter$1149){return null;};
    $$deferredAbs.thenFilter$defs$progressFilter=function(doneFilter$1147,failFilter$1148,progressFilter$1149){return null;};
    function thenFilter(doneFilter$1147,failFilter$1148,progressFilter$1149){
        if(failFilter$1148===undefined){failFilter$1148=$$deferredAbs.thenFilter$defs$failFilter(doneFilter$1147,failFilter$1148,progressFilter$1149);}
        if(progressFilter$1149===undefined){progressFilter$1149=$$deferredAbs.thenFilter$defs$progressFilter(doneFilter$1147,failFilter$1148,progressFilter$1149);}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1147,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1148/*NULL PARAM!*/,progressFilter$1149));
        /*End dynamic block*/
    }
    $$deferredAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','thenFilter']};};
    function notify(args$1150){
        if(args$1150===undefined){args$1150=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notify(/*NULL PARAM!*/args$1150));
        /*End dynamic block*/
    }
    $$deferredAbs.notify=notify;
    notify.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notify']};};
    function notifyWith(context$1151,args$1152){
        if(args$1152===undefined){args$1152=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.notifyWith(/*NULL PARAM!*/context$1151/*NULL PARAM!*/,args$1152));
        /*End dynamic block*/
    }
    $$deferredAbs.notifyWith=notifyWith;
    notifyWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','notifyWith']};};
    function progress(progressCallbacks$1153){
        if(progressCallbacks$1153===undefined){progressCallbacks$1153=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.progress(/*NULL PARAM!*/progressCallbacks$1153));
        /*End dynamic block*/
    }
    $$deferredAbs.progress=progress;
    progress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'progressCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','progress']};};
    $$deferredAbs.promise$defs$target=function(target$1154){return null;};
    function promise(target$1154){
        if(target$1154===undefined){target$1154=$$deferredAbs.promise$defs$target(target$1154);}
        /*Begin dynamic block*/
        return Promise($$deferredAbs.$native.promise(/*NULL PARAM!*/target$1154));
        /*End dynamic block*/
    }
    $$deferredAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','promise']};};
    function reject(args$1155){
        if(args$1155===undefined){args$1155=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.reject(/*NULL PARAM!*/args$1155));
        /*End dynamic block*/
    }
    $$deferredAbs.reject=reject;
    reject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','reject']};};
    function rejectWith(context$1156,args$1157){
        if(args$1157===undefined){args$1157=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.rejectWith(/*NULL PARAM!*/context$1156/*NULL PARAM!*/,args$1157));
        /*End dynamic block*/
    }
    $$deferredAbs.rejectWith=rejectWith;
    rejectWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','rejectWith']};};
    function resolve(args$1158){
        if(args$1158===undefined){args$1158=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolve(/*NULL PARAM!*/args$1158));
        /*End dynamic block*/
    }
    $$deferredAbs.resolve=resolve;
    resolve.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolve']};};
    function resolveWith(context$1159,args$1160){
        if(args$1160===undefined){args$1160=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Deferred($$deferredAbs.$native.resolveWith(/*NULL PARAM!*/context$1159/*NULL PARAM!*/,args$1160));
        /*End dynamic block*/
    }
    $$deferredAbs.resolveWith=resolveWith;
    resolveWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'args',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','resolveWith']};};
    function state(){
        /*Begin dynamic block*/
        if((tmpvar$1161=$$deferredAbs.$native.state,tmpvar$1162=$$$cl1.String("pending",7),(tmpvar$1161.equals&&tmpvar$1161.equals(tmpvar$1162))||tmpvar$1161===tmpvar$1162)){
            return getDeferredStatePending();
        }else {
            if((tmpvar$1163=$$deferredAbs.$native.state,tmpvar$1164=$$$cl1.String("resolved",8),(tmpvar$1163.equals&&tmpvar$1163.equals(tmpvar$1164))||tmpvar$1163===tmpvar$1164)){
                return getDeferredStateResolved();
            }else {
                return getDeferredStateResolved();
            }
        }/*End dynamic block*/
    }
    $$deferredAbs.state=state;
    state.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DeferredState},$ps:[],$cont:DeferredAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','DeferredAbs','$m','state']};};
    return $$deferredAbs;
}
DeferredAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DeferredAbs']};};
exports.DeferredAbs=DeferredAbs;
function $init$DeferredAbs(){
    if (DeferredAbs.$$===undefined){
        $$$cl1.initTypeProto(DeferredAbs,'ceylon.js.jquery::DeferredAbs',$$$cjl167.JSObjectAbs);
    }
    return DeferredAbs;
}
exports.$init$DeferredAbs=$init$DeferredAbs;
$init$DeferredAbs();
var $$$cjd401=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd401,'ceylon.js.dom/4.0.0');
var $$$cjj672=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj672,'ceylon.js.json/1.0.0');
var $$$cjx1165=require('ceylon/js/xmlhttprequest/0.6.0/ceylon.js.xmlhttprequest-0.6.0');
$$$cl1.$addmod$($$$cjx1165,'ceylon.js.xmlhttprequest/0.6.0');
var allSelector$1166=$$$cl1.String("*",1);
var getAllSelector=function(){return allSelector$1166;};
exports.getAllSelector=getAllSelector;
var $prop$getAllSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','allSelector']};}};
exports.$prop$getAllSelector=$prop$getAllSelector;
$prop$getAllSelector.get=getAllSelector;
getAllSelector.$$metamodel$$=$prop$getAllSelector.$$metamodel$$;
var animatedSelector$1167=$$$cl1.String(":animated",9);
var getAnimatedSelector=function(){return animatedSelector$1167;};
exports.getAnimatedSelector=getAnimatedSelector;
var $prop$getAnimatedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','animatedSelector']};}};
exports.$prop$getAnimatedSelector=$prop$getAnimatedSelector;
$prop$getAnimatedSelector.get=getAnimatedSelector;
getAnimatedSelector.$$metamodel$$=$prop$getAnimatedSelector.$$metamodel$$;
var buttonSelector$1168=$$$cl1.String(":button",7);
var getButtonSelector=function(){return buttonSelector$1168;};
exports.getButtonSelector=getButtonSelector;
var $prop$getButtonSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','buttonSelector']};}};
exports.$prop$getButtonSelector=$prop$getButtonSelector;
$prop$getButtonSelector.get=getButtonSelector;
getButtonSelector.$$metamodel$$=$prop$getButtonSelector.$$metamodel$$;
var checkboxSelector$1169=$$$cl1.String(":checkbox",9);
var getCheckboxSelector=function(){return checkboxSelector$1169;};
exports.getCheckboxSelector=getCheckboxSelector;
var $prop$getCheckboxSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkboxSelector']};}};
exports.$prop$getCheckboxSelector=$prop$getCheckboxSelector;
$prop$getCheckboxSelector.get=getCheckboxSelector;
getCheckboxSelector.$$metamodel$$=$prop$getCheckboxSelector.$$metamodel$$;
var checkedSelector$1170=$$$cl1.String(":checked",8);
var getCheckedSelector=function(){return checkedSelector$1170;};
exports.getCheckedSelector=getCheckedSelector;
var $prop$getCheckedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','checkedSelector']};}};
exports.$prop$getCheckedSelector=$prop$getCheckedSelector;
$prop$getCheckedSelector.get=getCheckedSelector;
getCheckedSelector.$$metamodel$$=$prop$getCheckedSelector.$$metamodel$$;
var disabledSelector$1171=$$$cl1.String(":disabled",9);
var getDisabledSelector=function(){return disabledSelector$1171;};
exports.getDisabledSelector=getDisabledSelector;
var $prop$getDisabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','disabledSelector']};}};
exports.$prop$getDisabledSelector=$prop$getDisabledSelector;
$prop$getDisabledSelector.get=getDisabledSelector;
getDisabledSelector.$$metamodel$$=$prop$getDisabledSelector.$$metamodel$$;
var emptySelector$1172=$$$cl1.String(":empty",6);
var getEmptySelector=function(){return emptySelector$1172;};
exports.getEmptySelector=getEmptySelector;
var $prop$getEmptySelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','emptySelector']};}};
exports.$prop$getEmptySelector=$prop$getEmptySelector;
$prop$getEmptySelector.get=getEmptySelector;
getEmptySelector.$$metamodel$$=$prop$getEmptySelector.$$metamodel$$;
var enabledSelector$1173=$$$cl1.String(":enabled",8);
var getEnabledSelector=function(){return enabledSelector$1173;};
exports.getEnabledSelector=getEnabledSelector;
var $prop$getEnabledSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','enabledSelector']};}};
exports.$prop$getEnabledSelector=$prop$getEnabledSelector;
$prop$getEnabledSelector.get=getEnabledSelector;
getEnabledSelector.$$metamodel$$=$prop$getEnabledSelector.$$metamodel$$;
var evenSelector$1174=$$$cl1.String(":even",5);
var getEvenSelector=function(){return evenSelector$1174;};
exports.getEvenSelector=getEvenSelector;
var $prop$getEvenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','evenSelector']};}};
exports.$prop$getEvenSelector=$prop$getEvenSelector;
$prop$getEvenSelector.get=getEvenSelector;
getEvenSelector.$$metamodel$$=$prop$getEvenSelector.$$metamodel$$;
var fileSelector$1175=$$$cl1.String(":file",5);
var getFileSelector=function(){return fileSelector$1175;};
exports.getFileSelector=getFileSelector;
var $prop$getFileSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','fileSelector']};}};
exports.$prop$getFileSelector=$prop$getFileSelector;
$prop$getFileSelector.get=getFileSelector;
getFileSelector.$$metamodel$$=$prop$getFileSelector.$$metamodel$$;
var firstChildSelector$1176=$$$cl1.String(":first-child",12);
var getFirstChildSelector=function(){return firstChildSelector$1176;};
exports.getFirstChildSelector=getFirstChildSelector;
var $prop$getFirstChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstChildSelector']};}};
exports.$prop$getFirstChildSelector=$prop$getFirstChildSelector;
$prop$getFirstChildSelector.get=getFirstChildSelector;
getFirstChildSelector.$$metamodel$$=$prop$getFirstChildSelector.$$metamodel$$;
var firstOfTypeSelector$1177=$$$cl1.String(":first-of-type",14);
var getFirstOfTypeSelector=function(){return firstOfTypeSelector$1177;};
exports.getFirstOfTypeSelector=getFirstOfTypeSelector;
var $prop$getFirstOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstOfTypeSelector']};}};
exports.$prop$getFirstOfTypeSelector=$prop$getFirstOfTypeSelector;
$prop$getFirstOfTypeSelector.get=getFirstOfTypeSelector;
getFirstOfTypeSelector.$$metamodel$$=$prop$getFirstOfTypeSelector.$$metamodel$$;
var firstSelector$1178=$$$cl1.String(":first",6);
var getFirstSelector=function(){return firstSelector$1178;};
exports.getFirstSelector=getFirstSelector;
var $prop$getFirstSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','firstSelector']};}};
exports.$prop$getFirstSelector=$prop$getFirstSelector;
$prop$getFirstSelector.get=getFirstSelector;
getFirstSelector.$$metamodel$$=$prop$getFirstSelector.$$metamodel$$;
var focusSelector$1179=$$$cl1.String(":focus",6);
var getFocusSelector=function(){return focusSelector$1179;};
exports.getFocusSelector=getFocusSelector;
var $prop$getFocusSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','focusSelector']};}};
exports.$prop$getFocusSelector=$prop$getFocusSelector;
$prop$getFocusSelector.get=getFocusSelector;
getFocusSelector.$$metamodel$$=$prop$getFocusSelector.$$metamodel$$;
var headerSelector$1180=$$$cl1.String(":header",7);
var getHeaderSelector=function(){return headerSelector$1180;};
exports.getHeaderSelector=getHeaderSelector;
var $prop$getHeaderSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','headerSelector']};}};
exports.$prop$getHeaderSelector=$prop$getHeaderSelector;
$prop$getHeaderSelector.get=getHeaderSelector;
getHeaderSelector.$$metamodel$$=$prop$getHeaderSelector.$$metamodel$$;
var hiddenSelector$1181=$$$cl1.String(":hidden",7);
var getHiddenSelector=function(){return hiddenSelector$1181;};
exports.getHiddenSelector=getHiddenSelector;
var $prop$getHiddenSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','hiddenSelector']};}};
exports.$prop$getHiddenSelector=$prop$getHiddenSelector;
$prop$getHiddenSelector.get=getHiddenSelector;
getHiddenSelector.$$metamodel$$=$prop$getHiddenSelector.$$metamodel$$;
var imageSelector$1182=$$$cl1.String(":image",6);
var getImageSelector=function(){return imageSelector$1182;};
exports.getImageSelector=getImageSelector;
var $prop$getImageSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','imageSelector']};}};
exports.$prop$getImageSelector=$prop$getImageSelector;
$prop$getImageSelector.get=getImageSelector;
getImageSelector.$$metamodel$$=$prop$getImageSelector.$$metamodel$$;
var inputSelector$1183=$$$cl1.String(":input",6);
var getInputSelector=function(){return inputSelector$1183;};
exports.getInputSelector=getInputSelector;
var $prop$getInputSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','inputSelector']};}};
exports.$prop$getInputSelector=$prop$getInputSelector;
$prop$getInputSelector.get=getInputSelector;
getInputSelector.$$metamodel$$=$prop$getInputSelector.$$metamodel$$;
var lastChildSelector$1184=$$$cl1.String(":last-child",11);
var getLastChildSelector=function(){return lastChildSelector$1184;};
exports.getLastChildSelector=getLastChildSelector;
var $prop$getLastChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastChildSelector']};}};
exports.$prop$getLastChildSelector=$prop$getLastChildSelector;
$prop$getLastChildSelector.get=getLastChildSelector;
getLastChildSelector.$$metamodel$$=$prop$getLastChildSelector.$$metamodel$$;
var lastOfTypeSelector$1185=$$$cl1.String(":last-of-type",13);
var getLastOfTypeSelector=function(){return lastOfTypeSelector$1185;};
exports.getLastOfTypeSelector=getLastOfTypeSelector;
var $prop$getLastOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastOfTypeSelector']};}};
exports.$prop$getLastOfTypeSelector=$prop$getLastOfTypeSelector;
$prop$getLastOfTypeSelector.get=getLastOfTypeSelector;
getLastOfTypeSelector.$$metamodel$$=$prop$getLastOfTypeSelector.$$metamodel$$;
var lastSelector$1186=$$$cl1.String(":last",5);
var getLastSelector=function(){return lastSelector$1186;};
exports.getLastSelector=getLastSelector;
var $prop$getLastSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','lastSelector']};}};
exports.$prop$getLastSelector=$prop$getLastSelector;
$prop$getLastSelector.get=getLastSelector;
getLastSelector.$$metamodel$$=$prop$getLastSelector.$$metamodel$$;
var oddSelector$1187=$$$cl1.String(":odd",4);
var getOddSelector=function(){return oddSelector$1187;};
exports.getOddSelector=getOddSelector;
var $prop$getOddSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','oddSelector']};}};
exports.$prop$getOddSelector=$prop$getOddSelector;
$prop$getOddSelector.get=getOddSelector;
getOddSelector.$$metamodel$$=$prop$getOddSelector.$$metamodel$$;
var onlyChildSelector$1188=$$$cl1.String(":only-child",11);
var getOnlyChildSelector=function(){return onlyChildSelector$1188;};
exports.getOnlyChildSelector=getOnlyChildSelector;
var $prop$getOnlyChildSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyChildSelector']};}};
exports.$prop$getOnlyChildSelector=$prop$getOnlyChildSelector;
$prop$getOnlyChildSelector.get=getOnlyChildSelector;
getOnlyChildSelector.$$metamodel$$=$prop$getOnlyChildSelector.$$metamodel$$;
var onlyOfTypeSelector$1189=$$$cl1.String(":only-of-type",13);
var getOnlyOfTypeSelector=function(){return onlyOfTypeSelector$1189;};
exports.getOnlyOfTypeSelector=getOnlyOfTypeSelector;
var $prop$getOnlyOfTypeSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','onlyOfTypeSelector']};}};
exports.$prop$getOnlyOfTypeSelector=$prop$getOnlyOfTypeSelector;
$prop$getOnlyOfTypeSelector.get=getOnlyOfTypeSelector;
getOnlyOfTypeSelector.$$metamodel$$=$prop$getOnlyOfTypeSelector.$$metamodel$$;
var parentSelector$1190=$$$cl1.String(":parent",7);
var getParentSelector=function(){return parentSelector$1190;};
exports.getParentSelector=getParentSelector;
var $prop$getParentSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','parentSelector']};}};
exports.$prop$getParentSelector=$prop$getParentSelector;
$prop$getParentSelector.get=getParentSelector;
getParentSelector.$$metamodel$$=$prop$getParentSelector.$$metamodel$$;
var passwordSelector$1191=$$$cl1.String(":password",9);
var getPasswordSelector=function(){return passwordSelector$1191;};
exports.getPasswordSelector=getPasswordSelector;
var $prop$getPasswordSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','passwordSelector']};}};
exports.$prop$getPasswordSelector=$prop$getPasswordSelector;
$prop$getPasswordSelector.get=getPasswordSelector;
getPasswordSelector.$$metamodel$$=$prop$getPasswordSelector.$$metamodel$$;
var radioSelector$1192=$$$cl1.String(":radio",6);
var getRadioSelector=function(){return radioSelector$1192;};
exports.getRadioSelector=getRadioSelector;
var $prop$getRadioSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','radioSelector']};}};
exports.$prop$getRadioSelector=$prop$getRadioSelector;
$prop$getRadioSelector.get=getRadioSelector;
getRadioSelector.$$metamodel$$=$prop$getRadioSelector.$$metamodel$$;
var resetSelector$1193=$$$cl1.String(":reset",6);
var getResetSelector=function(){return resetSelector$1193;};
exports.getResetSelector=getResetSelector;
var $prop$getResetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','resetSelector']};}};
exports.$prop$getResetSelector=$prop$getResetSelector;
$prop$getResetSelector.get=getResetSelector;
getResetSelector.$$metamodel$$=$prop$getResetSelector.$$metamodel$$;
var rootSelector$1194=$$$cl1.String(":root",5);
var getRootSelector=function(){return rootSelector$1194;};
exports.getRootSelector=getRootSelector;
var $prop$getRootSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','rootSelector']};}};
exports.$prop$getRootSelector=$prop$getRootSelector;
$prop$getRootSelector.get=getRootSelector;
getRootSelector.$$metamodel$$=$prop$getRootSelector.$$metamodel$$;
var selectedSelector$1195=$$$cl1.String(":selected",9);
var getSelectedSelector=function(){return selectedSelector$1195;};
exports.getSelectedSelector=getSelectedSelector;
var $prop$getSelectedSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','selectedSelector']};}};
exports.$prop$getSelectedSelector=$prop$getSelectedSelector;
$prop$getSelectedSelector.get=getSelectedSelector;
getSelectedSelector.$$metamodel$$=$prop$getSelectedSelector.$$metamodel$$;
var submitSelector$1196=$$$cl1.String(":submit",7);
var getSubmitSelector=function(){return submitSelector$1196;};
exports.getSubmitSelector=getSubmitSelector;
var $prop$getSubmitSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','submitSelector']};}};
exports.$prop$getSubmitSelector=$prop$getSubmitSelector;
$prop$getSubmitSelector.get=getSubmitSelector;
getSubmitSelector.$$metamodel$$=$prop$getSubmitSelector.$$metamodel$$;
var targetSelector$1197=$$$cl1.String(":target",7);
var getTargetSelector=function(){return targetSelector$1197;};
exports.getTargetSelector=getTargetSelector;
var $prop$getTargetSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','targetSelector']};}};
exports.$prop$getTargetSelector=$prop$getTargetSelector;
$prop$getTargetSelector.get=getTargetSelector;
getTargetSelector.$$metamodel$$=$prop$getTargetSelector.$$metamodel$$;
var textSelector$1198=$$$cl1.String(":text",5);
var getTextSelector=function(){return textSelector$1198;};
exports.getTextSelector=getTextSelector;
var $prop$getTextSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','textSelector']};}};
exports.$prop$getTextSelector=$prop$getTextSelector;
$prop$getTextSelector.get=getTextSelector;
getTextSelector.$$metamodel$$=$prop$getTextSelector.$$metamodel$$;
var visibleSelector$1199=$$$cl1.String(":visible",8);
var getVisibleSelector=function(){return visibleSelector$1199;};
exports.getVisibleSelector=getVisibleSelector;
var $prop$getVisibleSelector={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','visibleSelector']};}};
exports.$prop$getVisibleSelector=$prop$getVisibleSelector;
$prop$getVisibleSelector.get=getVisibleSelector;
getVisibleSelector.$$metamodel$$=$prop$getVisibleSelector.$$metamodel$$;
function getJQ(){
    /*Begin dynamic block*/
    var jq$1200=(typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'43:15-43:20','jquery.ceylon'):jQuery);
    $prop$getJq$1200={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','getJQ','$at','jq']};}};
    $prop$getJq$1200.get=function(){return jq$1200};
    if(((tmpvar$1201=jq$1200,tmpvar$1202=(typeof undefined==='undefined'||undefined===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: undefined")),'44:12-44:20','jquery.ceylon'):undefined),(tmpvar$1201.equals&&tmpvar$1201.equals(tmpvar$1202))||tmpvar$1201===tmpvar$1202)||(tmpvar$1203=jq$1200,tmpvar$1204=null,(tmpvar$1203.equals&&tmpvar$1203.equals(tmpvar$1204))||tmpvar$1203===tmpvar$1204))){
        throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.String("jQuery Library was not found. Did you make sure to include jQuery?",66)),'45:3-45:88','ceylon/js/jquery/jquery.ceylon');
    }else {
        return (tmpvar$1205=jq$1200,$$$cl1.isOfType(tmpvar$1205,{t:$$$cl1.Anything})?tmpvar$1205:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'47:10-47:11','jquery.ceylon'));
    }/*End dynamic block*/
};getJQ.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],d:['ceylon.js.jquery','getJQ']};};
function jQueryAjax(url$1206,settings$1207){
    if(url$1206===undefined){url$1206=null;}
    if(settings$1207===undefined){settings$1207=null;}
    /*Begin dynamic block*/
    var u$1208;
    if((u$1208=url$1206)!==null){
        var s$1209;
        if((s$1209=settings$1207)!==null){
            return JQXHR(getJQ().ajax(/*NULL PARAM!*/u$1208.valueOf()/*NULL PARAM!*/,s$1209.toNative()));
        }else {
            return JQXHR(getJQ().ajax(/*NULL PARAM!*/u$1208.valueOf()));
        }
    }else {
        var s$1210;
        if((s$1210=settings$1207)!==null){
            return JQXHR(getJQ().ajax(/*NULL PARAM!*/s$1210.toNative()));
        }else {
            return JQXHR(getJQ().ajax());
        }
    }/*End dynamic block*/
}
exports.jQueryAjax=jQueryAjax;
jQueryAjax.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'settings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JQueryAjaxSettingsBuilder}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjax']};};
function jQueryAjaxPrefilter(callback$1211,dataTypes$1212){
    if(dataTypes$1212===undefined){dataTypes$1212=null;}
    /*Begin dynamic block*/
    var dT$1213;
    if((dT$1213=dataTypes$1212)!==null){
        getJQ().ajaxPrefilter(/*NULL PARAM!*/dT$1213.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1211,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }else {
        getJQ().ajaxPrefilter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1211,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    }/*End dynamic block*/
}
exports.jQueryAjaxPrefilter=jQueryAjaxPrefilter;
jQueryAjaxPrefilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'dataTypes',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxPrefilter']};};
function jQueryAjaxSetup(options$1214){
    /*Begin dynamic block*/
    getJQ().ajaxSetup(/*NULL PARAM!*/options$1214.toNative());
    /*End dynamic block*/
}
exports.jQueryAjaxSetup=jQueryAjaxSetup;
jQueryAjaxSetup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'options',$mt:'prm',$t:{t:JQueryAjaxSettingsBuilder},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxSetup']};};
function jQueryAjaxTransport(dataType$1215,callback$1216){
    /*Begin dynamic block*/
    getJQ().ajaxTransport(/*NULL PARAM!*/dataType$1215.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1216,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}));
    /*End dynamic block*/
}
exports.jQueryAjaxTransport=jQueryAjaxTransport;
jQueryAjaxTransport.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryAjaxTransport']};};
function jQueryCallbacks(flags$1217){
    if(flags$1217===undefined){flags$1217=$$$cl1.String("",0);}
    /*Begin dynamic block*/
    return Callbacks(getJQ().Callbacks(/*NULL PARAM!*/flags$1217.valueOf()));
    /*End dynamic block*/
}
exports.jQueryCallbacks=jQueryCallbacks;
jQueryCallbacks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Callbacks},$ps:[{$nm:'flags',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCallbacks']};};
function jQueryContains(container$1218,contained$1219){
    /*Begin dynamic block*/
    if(getJQ().contains(/*NULL PARAM!*/container$1218/*NULL PARAM!*/,contained$1219)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryContains=jQueryContains;
jQueryContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'container',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'contained',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryContains']};};
function jQueryCssHooks(){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject(getJQ().cssHooks);
    /*End dynamic block*/
}
exports.jQueryCssHooks=jQueryCssHooks;
jQueryCssHooks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryCssHooks']};};
function jQuerySetData(element$1220,key$1221,data$1222){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject(getJQ().data(/*NULL PARAM!*/element$1220/*NULL PARAM!*/,key$1221.valueOf()/*NULL PARAM!*/,data$1222));
    /*End dynamic block*/
}
exports.jQuerySetData=jQuerySetData;
jQuerySetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetData']};};
function jQueryGetData(element$1223,key$1224){
    if(key$1224===undefined){key$1224=null;}
    /*Begin dynamic block*/
    return $$$cjl167.JSObject(getJQ().data(/*NULL PARAM!*/element$1223/*NULL PARAM!*/,key$1224));
    /*End dynamic block*/
}
exports.jQueryGetData=jQueryGetData;
jQueryGetData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetData']};};
function jQueryDeferred(beforeStart$1225){
    if(beforeStart$1225===undefined){beforeStart$1225=null;}
    /*Begin dynamic block*/
    return Deferred(getJQ().Deferred(/*NULL PARAM!*/beforeStart$1225));
    /*End dynamic block*/
}
exports.jQueryDeferred=jQueryDeferred;
jQueryDeferred.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Deferred},$ps:[{$nm:'beforeStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Deferred},Element:{t:Deferred}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDeferred']};};
function jQueryDequeue(element$1226,queueName$1227){
    if(queueName$1227===undefined){queueName$1227=null;}
    /*Begin dynamic block*/
    getJQ().dequeue(/*NULL PARAM!*/element$1226/*NULL PARAM!*/,queueName$1227);
    /*End dynamic block*/
}
exports.jQueryDequeue=jQueryDequeue;
jQueryDequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryDequeue']};};
function jQueryEach(collection$1228,callback$1229){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject(getJQ().each(/*NULL PARAM!*/collection$1228/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1229,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryEach=jQueryEach;
jQueryEach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'collection',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryEach']};};
function jQueryError(message$1230){
    /*Begin dynamic block*/
    getJQ().error(/*NULL PARAM!*/message$1230.valueOf());
    /*End dynamic block*/
}
exports.jQueryError=jQueryError;
jQueryError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryError']};};
function jQueryExtend(target$1231,objects$1232){
    if(objects$1232===undefined){objects$1232=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    getJQ().extend(/*NULL PARAM!*/target$1231/*NULL PARAM!*/,objects$1232);
    /*End dynamic block*/
}
exports.jQueryExtend=jQueryExtend;
jQueryExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtend']};};
function jQueryExtendDeep(deep$1233,target$1234,objects$1235){
    if(objects$1235===undefined){objects$1235=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    getJQ().extend(/*NULL PARAM!*/target$1234/*NULL PARAM!*/,objects$1235);
    /*End dynamic block*/
}
exports.jQueryExtendDeep=jQueryExtendDeep;
jQueryExtendDeep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'deep',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'target',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'objects',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryExtendDeep']};};
function jQueryFnExtend(obj$1236){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'164:18-164:23','jquery.ceylon'):jQuery).fn.extend(/*NULL PARAM!*/obj$1236));
    /*End dynamic block*/
}
exports.jQueryFnExtend=jQueryFnExtend;
jQueryFnExtend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFnExtend']};};
function jQueryFxInterval(){
    /*Begin dynamic block*/
    return $$$cjl167.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'170:18-170:23','jquery.ceylon'):jQuery).fx.interval);
    /*End dynamic block*/
}
exports.jQueryFxInterval=jQueryFxInterval;
jQueryFxInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFxInterval']};};
function jQueryFxOff(){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'176:6-176:11','jquery.ceylon'):jQuery).fx.off){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryFxOff=jQueryFxOff;
jQueryFxOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryFxOff']};};
function jQueryGet(url$1237,data$1238,success$1239,dataType$1240){
    if(data$1238===undefined){data$1238=null;}
    if(success$1239===undefined){success$1239=null;}
    if(dataType$1240===undefined){dataType$1240=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'186:15-186:20','jquery.ceylon'):jQuery).get(/*NULL PARAM!*/url$1237.valueOf()/*NULL PARAM!*/,data$1238/*NULL PARAM!*/,success$1239/*NULL PARAM!*/,dataType$1240));
    /*End dynamic block*/
}
exports.jQueryGet=jQueryGet;
jQueryGet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGet']};};
function jQueryGetJSON(url$1241,data$1242,success$1243){
    if(data$1242===undefined){data$1242=null;}
    if(success$1243===undefined){success$1243=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'192:15-192:20','jquery.ceylon'):jQuery).getJSON(/*NULL PARAM!*/url$1241.valueOf()/*NULL PARAM!*/,data$1242/*NULL PARAM!*/,success$1243));
    /*End dynamic block*/
}
exports.jQueryGetJSON=jQueryGetJSON;
jQueryGetJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetJSON']};};
function jQueryGetScript(url$1244,success$1245){
    if(success$1245===undefined){success$1245=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'198:15-198:20','jquery.ceylon'):jQuery).getScript(/*NULL PARAM!*/url$1244.valueOf()/*NULL PARAM!*/,success$1245));
    /*End dynamic block*/
}
exports.jQueryGetScript=jQueryGetScript;
jQueryGetScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetScript']};};
function jQueryGlobalEval(code$1246){
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'204:15-204:20','jquery.ceylon'):jQuery).globalEval(/*NULL PARAM!*/code$1246.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGlobalEval=jQueryGlobalEval;
jQueryGlobalEval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'code',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGlobalEval']};};
function jQueryGrep(array$1247,callback$1248,invert$1249){
    if(invert$1249===undefined){invert$1249=null;}
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'210:17-210:22','jquery.ceylon'):jQuery).grep(/*NULL PARAM!*/array$1247.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1248,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,invert$1249));
    /*End dynamic block*/
}
exports.jQueryGrep=jQueryGrep;
jQueryGrep.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'invert',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGrep']};};
function jQueryHasData(element$1250){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'216:6-216:11','jquery.ceylon'):jQuery).hasData(/*NULL PARAM!*/element$1250)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryHasData=jQueryHasData;
jQueryHasData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHasData']};};
function jQueryHoldReady(hold$1251){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'226:2-226:7','jquery.ceylon'):jQuery).holdReady(/*NULL PARAM!*/hold$1251);
    /*End dynamic block*/
}
exports.jQueryHoldReady=jQueryHoldReady;
jQueryHoldReady.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'hold',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryHoldReady']};};
function jQueryInArray(val$1252,array$1253,fromIndex$1254){
    if(fromIndex$1254===undefined){fromIndex$1254=null;}
    /*Begin dynamic block*/
    return $$$cjl167.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'232:18-232:23','jquery.ceylon'):jQuery).inArray(/*NULL PARAM!*/val$1252.$native/*NULL PARAM!*/,array$1253.$native/*NULL PARAM!*/,fromIndex$1254));
    /*End dynamic block*/
}
exports.jQueryInArray=jQueryInArray;
jQueryInArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}},{$nm:'array',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}},{$nm:'fromIndex',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryInArray']};};
function jQueryIsArray(obj$1255){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'238:6-238:11','jquery.ceylon'):jQuery).isArray(/*NULL PARAM!*/obj$1255.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsArray=jQueryIsArray;
jQueryIsArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsArray']};};
function jQueryIsEmptyObject(obj$1256){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'248:6-248:11','jquery.ceylon'):jQuery).isEmptyObject(/*NULL PARAM!*/obj$1256.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsEmptyObject=jQueryIsEmptyObject;
jQueryIsEmptyObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsEmptyObject']};};
function jQueryIsFunction(obj$1257){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'258:6-258:11','jquery.ceylon'):jQuery).isFunction(/*NULL PARAM!*/obj$1257.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsFunction=jQueryIsFunction;
jQueryIsFunction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsFunction']};};
function jQueryIsNumeric(obj$1258){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'268:6-268:11','jquery.ceylon'):jQuery).isNumeric(/*NULL PARAM!*/obj$1258.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsNumeric=jQueryIsNumeric;
jQueryIsNumeric.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsNumeric']};};
function jQueryIsPlainObject(obj$1259){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'278:6-278:11','jquery.ceylon'):jQuery).isPlainObject(/*NULL PARAM!*/obj$1259.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsPlainObject=jQueryIsPlainObject;
jQueryIsPlainObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsPlainObject']};};
function jQueryIsWindow(obj$1260){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'288:6-288:11','jquery.ceylon'):jQuery).isWindow(/*NULL PARAM!*/obj$1260.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsWindow=jQueryIsWindow;
jQueryIsWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsWindow']};};
function jQueryIsXMLDoc(node$1261){
    /*Begin dynamic block*/
    if((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'298:6-298:11','jquery.ceylon'):jQuery).isXMLDoc(/*NULL PARAM!*/node$1261.$native)){
        return true;
    }else {
        return false;
    }/*End dynamic block*/
}
exports.jQueryIsXMLDoc=jQueryIsXMLDoc;
jQueryIsXMLDoc.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryIsXMLDoc']};};
function jQueryMapArray(array$1262,callback$1263){
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'308:17-308:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/array$1262.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1263,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapArray=jQueryMapArray;
jQueryMapArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'array',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapArray']};};
function jQueryMapObject(obj$1264,callback$1265){
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'314:17-314:22','jquery.ceylon'):jQuery).mapArray(/*NULL PARAM!*/obj$1264.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1265,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
    /*End dynamic block*/
}
exports.jQueryMapObject=jQueryMapObject;
jQueryMapObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMapObject']};};
function jQueryMerge(first$1266,second$1267){
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'320:17-320:22','jquery.ceylon'):jQuery).merge(/*NULL PARAM!*/first$1266/*NULL PARAM!*/,second$1267));
    /*End dynamic block*/
}
exports.jQueryMerge=jQueryMerge;
jQueryMerge.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryMerge']};};
function jQueryNoConflict(removeAll$1268){
    if(removeAll$1268===undefined){removeAll$1268=null;}
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'326:17-326:22','jquery.ceylon'):jQuery).noConflict(/*NULL PARAM!*/removeAll$1268));
    /*End dynamic block*/
}
exports.jQueryNoConflict=jQueryNoConflict;
jQueryNoConflict.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'removeAll',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoConflict']};};
function jQueryNoop(){
    /*Begin dynamic block*/
    (typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'332:2-332:7','jquery.ceylon'):jQuery).noop();
    /*End dynamic block*/
}
exports.jQueryNoop=jQueryNoop;
jQueryNoop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNoop']};};
function jQueryNow(){
    /*Begin dynamic block*/
    return $$$cjl167.JSNumber((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'338:18-338:23','jquery.ceylon'):jQuery).now());
    /*End dynamic block*/
}
exports.jQueryNow=jQueryNow;
jQueryNow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryNow']};};
function jQueryParam(obj$1269,traditional$1270){
    if(traditional$1270===undefined){traditional$1270=false;}
    /*Begin dynamic block*/
    return $$$cjl167.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'344:18-344:23','jquery.ceylon'):jQuery).param(/*NULL PARAM!*/obj$1269/*NULL PARAM!*/,traditional$1270));
    /*End dynamic block*/
}
exports.jQueryParam=jQueryParam;
jQueryParam.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cjl167.JSArray},{t:$$$cjl167.JSObject}]},$an:function(){return[];}},{$nm:'traditional',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParam']};};
function jQueryParseHTML(data$1271,context$1272,keepScripts$1273){
    if(context$1272===undefined){context$1272=null;}
    if(keepScripts$1273===undefined){keepScripts$1273=false;}
    /*Begin dynamic block*/
    return $$$cjl167.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'350:18-350:23','jquery.ceylon'):jQuery).parseHTML(/*NULL PARAM!*/data$1271.valueOf()/*NULL PARAM!*/,context$1272/*NULL PARAM!*/,keepScripts$1273));
    /*End dynamic block*/
}
exports.jQueryParseHTML=jQueryParseHTML;
jQueryParseHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]},$an:function(){return[];}},{$nm:'keepScripts',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseHTML']};};
function jQueryParseJSON(json$1274){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'356:18-356:23','jquery.ceylon'):jQuery).parseJSON(/*NULL PARAM!*/(typeof data==='undefined'||data===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: data")),'356:35-356:38','jquery.ceylon'):data)/*NULL PARAM!*/,(typeof context==='undefined'||context===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: context")),'356:41-356:47','jquery.ceylon'):context)/*NULL PARAM!*/,(typeof keepScripts==='undefined'||keepScripts===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: keepScripts")),'356:50-356:60','jquery.ceylon'):keepScripts)));
    /*End dynamic block*/
}
exports.jQueryParseJSON=jQueryParseJSON;
jQueryParseJSON.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseJSON']};};
function jQueryParseXML(data$1275){
    /*Begin dynamic block*/
    return $$$cjl167.JSObject((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'362:18-362:23','jquery.ceylon'):jQuery).parseXML(/*NULL PARAM!*/data$1275.valueOf()));
    /*End dynamic block*/
}
exports.jQueryParseXML=jQueryParseXML;
jQueryParseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'data',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryParseXML']};};
function jQueryPost(url$1276,data$1277,success$1278,dataType$1279){
    if(data$1277===undefined){data$1277=null;}
    if(success$1278===undefined){success$1278=null;}
    if(dataType$1279===undefined){dataType$1279=null;}
    /*Begin dynamic block*/
    return JQXHR((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'368:15-368:20','jquery.ceylon'):jQuery).post(/*NULL PARAM!*/url$1276.valueOf()/*NULL PARAM!*/,data$1277/*NULL PARAM!*/,success$1278/*NULL PARAM!*/,dataType$1279));
    /*End dynamic block*/
}
exports.jQueryPost=jQueryPost;
jQueryPost.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQXHR},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'success',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'dataType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryPost']};};
function jQueryProxy(func$1280,context$1281,additionalArguments$1282){
    if(additionalArguments$1282===undefined){additionalArguments$1282=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl167.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'374:20-374:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/$$$cl1.$JsCallable(func$1280,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,context$1281/*NULL PARAM!*/,additionalArguments$1282));
    /*End dynamic block*/
}
exports.jQueryProxy=jQueryProxy;
jQueryProxy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSFunction},$ps:[{$nm:'func',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'context',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxy']};};
function jQueryProxyName(context$1283,name$1284,additionalArguments$1285){
    if(additionalArguments$1285===undefined){additionalArguments$1285=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return $$$cjl167.JSFunction((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'380:20-380:25','jquery.ceylon'):jQuery).proxy(/*NULL PARAM!*/context$1283/*NULL PARAM!*/,(typeof func==='undefined'||func===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: func")),'380:42-380:45','jquery.ceylon'):func)/*NULL PARAM!*/,additionalArguments$1285));
    /*End dynamic block*/
}
exports.jQueryProxyName=jQueryProxyName;
jQueryProxyName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSFunction},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'additionalArguments',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryProxyName']};};
function jQueryGetQueue(element$1286,queueName$1287){
    if(queueName$1287===undefined){queueName$1287=$$$cl1.String("fx",2);}
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'387:17-387:22','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1286/*NULL PARAM!*/,queueName$1287.valueOf()));
    /*End dynamic block*/
}
exports.jQueryGetQueue=jQueryGetQueue;
jQueryGetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("returns JSFunctions[]",21)),$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryGetQueue']};};
function jQuerySetQueue(element$1288,queueName$1289,callbacks$1290){
    if(queueName$1289===undefined){queueName$1289=$$$cl1.String("fx",2);}
    if(callbacks$1290===undefined){callbacks$1290=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'393:16-393:21','jquery.ceylon'):jQuery).queue(/*NULL PARAM!*/element$1288/*NULL PARAM!*/,queueName$1289.valueOf()/*NULL PARAM!*/,callbacks$1290));
    /*End dynamic block*/
}
exports.jQuerySetQueue=jQuerySetQueue;
jQuerySetQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQuerySetQueue']};};
function jQueryRemoveData(element$1291,name$1292){
    if(name$1292===undefined){name$1292=null;}
    /*Begin dynamic block*/
    return JQuery((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'399:16-399:21','jquery.ceylon'):jQuery).removeData(/*NULL PARAM!*/element$1291/*NULL PARAM!*/,name$1292));
    /*End dynamic block*/
}
exports.jQueryRemoveData=jQueryRemoveData;
jQueryRemoveData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryRemoveData']};};
function jQueryTrim(str$1293){
    /*Begin dynamic block*/
    return $$$cjl167.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'405:18-405:23','jquery.ceylon'):jQuery).trim(/*NULL PARAM!*/str$1293.$native));
    /*End dynamic block*/
}
exports.jQueryTrim=jQueryTrim;
jQueryTrim.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cjl167.JSString},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryTrim']};};
function jQueryType(obj$1294){
    /*Begin dynamic block*/
    return $$$cjl167.JSString((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'411:18-411:23','jquery.ceylon'):jQuery).type(/*NULL PARAM!*/obj$1294.$native));
    /*End dynamic block*/
}
exports.jQueryType=jQueryType;
jQueryType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'obj',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryType']};};
function jQueryUnique(arr$1295){
    /*Begin dynamic block*/
    return $$$cjl167.JSArray((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'417:17-417:22','jquery.ceylon'):jQuery).unique(/*NULL PARAM!*/arr$1295.$native));
    /*End dynamic block*/
}
exports.jQueryUnique=jQueryUnique;
jQueryUnique.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'arr',$mt:'prm',$t:{t:$$$cjl167.JSArray},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryUnique']};};
function jQueryWhen(deferreds$1296){
    if(deferreds$1296===undefined){deferreds$1296=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    return Promise((typeof jQuery==='undefined'||jQuery===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: jQuery")),'423:17-423:22','jquery.ceylon'):jQuery).when(/*NULL PARAM!*/(function(){
        var lst$1297=[];
        var it$1298=deferreds$1296.iterator();
        var elem$1299;
        while ((elem$1299=it$1298.next())!==$$$cl1.getFinished()){
            lst$1297.push(elem$1299.$native);
        }
        return $$$cl1.ArraySequence(lst$1297);
    }())));
    /*End dynamic block*/
}
exports.jQueryWhen=jQueryWhen;
jQueryWhen.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'deferreds',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:Deferred}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','jQueryWhen']};};
function getjQuery(){
    /*Begin dynamic block*/
    return JQuery(getJQ());
    /*End dynamic block*/
}
exports.getjQuery=getjQuery;
getjQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','getjQuery']};};
function getjQuerySelector(selector$1300,context$1301){
    if(context$1301===undefined){context$1301=null;}
    /*Begin dynamic block*/
    var jq$1302=getJQ();
    $prop$getJq$1302={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','getjQuerySelector','$at','jq']};}};
    $prop$getJq$1302.get=function(){return jq$1302};
    
    var case$1303=context$1301;
    if ($$$cl1.isOfType(context$1301,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
        return JQuery(jq$1302(/*NULL PARAM!*/selector$1300.valueOf()/*NULL PARAM!*/,case$1303.$native));
    }else if ($$$cl1.isOfType(context$1301,{t:$$$cl1.Null})) {
        return JQuery(jq$1302(/*NULL PARAM!*/selector$1300.valueOf()));
    }/*End dynamic block*/
}
exports.getjQuerySelector=getjQuerySelector;
getjQuerySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjd401.Element},{ t:'u', l:[{t:$$$cl1.Null},{t:JQuery}]}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','getjQuerySelector']};};
function getjQueryElements(elems$1304){
    if(elems$1304===undefined){elems$1304=$$$cl1.getEmpty();}
    /*Begin dynamic block*/
    var jq$1305=getJQ();
    $prop$getJq$1305={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','getjQueryElements','$at','jq']};}};
    $prop$getJq$1305.get=function(){return jq$1305};
    return JQuery(jq$1305(/*NULL PARAM!*/(function(){
        var lst$1306=[];
        var it$1307=elems$1304.iterator();
        var elem$1308;
        while ((elem$1308=it$1307.next())!==$$$cl1.getFinished()){
            lst$1306.push(elem$1308.$native);
        }
        return $$$cl1.ArraySequence(lst$1306);
    }())));
    /*End dynamic block*/
}
exports.getjQueryElements=getjQueryElements;
getjQueryElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elems',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd401.Element}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','getjQueryElements']};};
function JQuery(n$1309, $$jQuery){
    $init$JQuery();
    if ($$jQuery===undefined)$$jQuery=new JQuery.$$;
    $$jQuery.n$1309_=n$1309;
    JQueryAbs($$jQuery);
    $$$cl1.defineAttr($$jQuery,'n$1309',function(){return this.n$1309_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,d:['ceylon.js.jquery','JQuery','$at','n']};});
    $$jQuery.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQuery,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQuery','$at','native']};}};
    /*Begin dynamic block*/
    $$jQuery.$native=n$1309;/*End dynamic block*/
    return $$jQuery;
}
JQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQuery']};};
exports.JQuery=JQuery;
function $init$JQuery(){
    if (JQuery.$$===undefined){
        $$$cl1.initTypeProto(JQuery,'ceylon.js.jquery::JQuery',JQueryAbs);
    }
    return JQuery;
}
exports.$init$JQuery=$init$JQuery;
$init$JQuery();
function JQueryAbs($$jQueryAbs){
    $init$JQueryAbs();
    if ($$jQueryAbs===undefined)$$jQueryAbs=new JQueryAbs.$$;
    $$$cjl167.JSObjectAbs($$jQueryAbs);
    function add(append$1310){
        
        var case$1311=append$1310;
        if ($$$cl1.isOfType(append$1310,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1311.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(append$1310,{t:JQuery})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/case$1311.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'append',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','add']};};
    function addElements(elements$1312){
        if(elements$1312===undefined){elements$1312=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/(function(){
            var lst$1313=[];
            var it$1314=elements$1312.iterator();
            var elem$1315;
            while ((elem$1315=it$1314.next())!==$$$cl1.getFinished()){
                lst$1313.push(elem$1315.$native);
            }
            return $$$cl1.ArraySequence(lst$1313);
        }())));
        /*End dynamic block*/
    }
    $$jQueryAbs.addElements=addElements;
    addElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequence,a:{Element:{t:$$$cjd401.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addElements']};};
    $$jQueryAbs.addSelector$defs$context=function(selector$1316,context$1317){return null;};
    function addSelector(selector$1316,context$1317){
        if(context$1317===undefined){context$1317=$$jQueryAbs.addSelector$defs$context(selector$1316,context$1317);}
        /*Begin dynamic block*/
        var c$1318;
        if((c$1318=context$1317)!==null){
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1316.valueOf()/*NULL PARAM!*/,c$1318));
        }else {
            return JQuery($$jQueryAbs.$native.add(/*NULL PARAM!*/selector$1316.valueOf()));
        }/*End dynamic block*/
    }
    $$jQueryAbs.addSelector=addSelector;
    addSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addSelector']};};
    $$jQueryAbs.addBack$defs$selector=function(selector$1319){return null;};
    function addBack(selector$1319){
        if(selector$1319===undefined){selector$1319=$$jQueryAbs.addBack$defs$selector(selector$1319);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addBack(/*NULL PARAM!*/selector$1319));
        /*End dynamic block*/
    }
    $$jQueryAbs.addBack=addBack;
    addBack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addBack']};};
    function addClass(className$1320){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/className$1320.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClass=addClass;
    addClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClass']};};
    function addClassCallback(callback$1321){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.addClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1321,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'currentClass',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.addClassCallback=addClassCallback;
    addClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','addClassCallback']};};
    function after(content$1322){
        if(content$1322===undefined){content$1322=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.after).apply(null,content$1322));
        /*End dynamic block*/
    }
    $$jQueryAbs.after=after;
    after.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','after']};};
    function afterElements(content$1323){
        if(content$1323===undefined){content$1323=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.after).apply(null,(tmpvar$1324=(function(){
            var lst$1325=[];
            var it$1326=content$1323.iterator();
            var elem$1327;
            while ((elem$1327=it$1326.next())!==$$$cl1.getFinished()){
                lst$1325.push(elem$1327.$native);
            }
            return $$$cl1.ArraySequence(lst$1325);
        }()),$$$cl1.isOfType(tmpvar$1324,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1324:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'519:54-519:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterElements=afterElements;
    afterElements.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd401.Element}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterElements']};};
    function afterJQuery(content$1328){
        if(content$1328===undefined){content$1328=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.after).apply(null,(tmpvar$1329=(function(){
            var lst$1330=[];
            var it$1331=content$1328.iterator();
            var elem$1332;
            while ((elem$1332=it$1331.next())!==$$$cl1.getFinished()){
                lst$1330.push(elem$1332.$native);
            }
            return $$$cl1.ArraySequence(lst$1330);
        }()),$$$cl1.isOfType(tmpvar$1329,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1329:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'526:54-526:68','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.afterJQuery=afterJQuery;
    afterJQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:JQuery}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','afterJQuery']};};
    function ajaxComplete(handler$1333){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxComplete(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1333,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxComplete=ajaxComplete;
    ajaxComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxComplete']};};
    function ajaxError(handler$1334){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxError(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1334,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Exception},Element:{t:$$$cl1.Exception}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxError=ajaxError;
    ajaxError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Exception},Element:{t:$$$cl1.Exception}}},First:{t:JQueryAjaxSettings},Element:{ t:'u', l:[{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings},{t:$$$cl1.Exception}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxError']};};
    function ajaxSend(handler$1335){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSend(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1335,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSend=ajaxSend;
    ajaxSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSend']};};
    function ajaxStart(handler$1336){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStart(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1336,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStart=ajaxStart;
    ajaxStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStart']};};
    function ajaxStop(handler$1337){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxStop(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1337,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxStop=ajaxStop;
    ajaxStop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxStop']};};
    function ajaxSuccess(handler$1338){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ajaxSuccess(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1338,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ajaxSuccess=ajaxSuccess;
    ajaxSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},First:{t:JQueryEvent},Element:{ t:'u', l:[{t:JQueryEvent},{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ajaxSuccess']};};
    $$jQueryAbs.animate$defs$duration=function(properties$1339,duration$1340,easing$1341,complete$1342){return null;};
    $$jQueryAbs.animate$defs$easing=function(properties$1339,duration$1340,easing$1341,complete$1342){return null;};
    $$jQueryAbs.animate$defs$complete=function(properties$1339,duration$1340,easing$1341,complete$1342){return null;};
    function animate(properties$1339,duration$1340,easing$1341,complete$1342){
        if(duration$1340===undefined){duration$1340=$$jQueryAbs.animate$defs$duration(properties$1339,duration$1340,easing$1341,complete$1342);}
        if(easing$1341===undefined){easing$1341=$$jQueryAbs.animate$defs$easing(properties$1339,duration$1340,easing$1341,complete$1342);}
        if(complete$1342===undefined){complete$1342=$$jQueryAbs.animate$defs$complete(properties$1339,duration$1340,easing$1341,complete$1342);}
        var propertiesNative$1343=$$$cjl167.createJSObject();
        $prop$getPropertiesNative$1343={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','animate','$at','propertiesNative']};}};
        $prop$getPropertiesNative$1343.get=function(){return propertiesNative$1343};
        var it$1344 = properties$1339.iterator();
        var item$1345;while ((item$1345=it$1344.next())!==$$$cl1.getFinished()){
            var key$1346=item$1345.key;
            var val$1347=item$1345.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(propertiesNative$1343,(tmpvar$1348=$$$cjl167.createJSString(key$1346),$$$cl1.isOfType(tmpvar$1348,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1348:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'571:43-571:61','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,val$1347));
            /*End dynamic block*/
        }
        
        var case$1349=duration$1340;
        if ($$$cl1.isOfType(duration$1340,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]})) {
            
            var case$1350=easing$1341;
            if ($$$cl1.isOfType(easing$1341,{t:$$$cl1.String})) {
                var c$1351;
                if((c$1351=complete$1342)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,case$1349/*NULL PARAM!*/,case$1350.valueOf()/*NULL PARAM!*/,complete$1342));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,case$1349/*NULL PARAM!*/,case$1350.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1341,{t:$$$cl1.Null})) {
                var c$1352;
                if((c$1352=complete$1342)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,case$1349/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1342));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,case$1349));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(duration$1340,{t:$$$cl1.Null})) {
            
            var case$1353=easing$1341;
            if ($$$cl1.isOfType(easing$1341,{t:$$$cl1.String})) {
                var c$1354;
                if((c$1354=complete$1342)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1353.valueOf()/*NULL PARAM!*/,complete$1342));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1353.valueOf()));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(easing$1341,{t:$$$cl1.Null})) {
                var c$1355;
                if((c$1355=complete$1342)!==null){
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native/*NULL PARAM!*/,null/*NULL PARAM!*/,null/*NULL PARAM!*/,complete$1342));
                    /*End dynamic block*/
                }else {
                    /*Begin dynamic block*/
                    return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1343.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$jQueryAbs.animate=animate;
    animate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animate']};};
    function animateOptions(properties$1356,options$1357){
        var propertiesNative$1358=$$$cjl167.createJSObject();
        $prop$getPropertiesNative$1358={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','animateOptions','$at','propertiesNative']};}};
        $prop$getPropertiesNative$1358.get=function(){return propertiesNative$1358};
        var it$1359 = properties$1356.iterator();
        var item$1360;while ((item$1360=it$1359.next())!==$$$cl1.getFinished()){
            var key$1361=item$1360.key;
            var val$1362=item$1360.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(propertiesNative$1358,(tmpvar$1363=$$$cjl167.createJSString(key$1361),$$$cl1.isOfType(tmpvar$1363,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1363:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'631:43-631:61','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,val$1362));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.animate(/*NULL PARAM!*/propertiesNative$1358.$native/*NULL PARAM!*/,options$1357.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.animateOptions=animateOptions;
    animateOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','animateOptions']};};
    function append(content$1364){
        if(content$1364===undefined){content$1364=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.append).apply(null,(tmpvar$1365=(function(){
            var lst$1366=[];
            var it$1367=content$1364.iterator();
            var elem$1368;
            while ((elem$1368=it$1367.next())!==$$$cl1.getFinished()){
                lst$1366.push(elem$1368.$native);
            }
            return $$$cl1.ArraySequence(lst$1366);
        }()),$$$cl1.isOfType(tmpvar$1365,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1365:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'641:55-641:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.append=append;
    append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','append']};};
    function appendHTML(content$1369){
        if(content$1369===undefined){content$1369=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/content$1369));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendHTML=appendHTML;
    appendHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendHTML']};};
    function appendCallback(callback$1370){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.append(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1370,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.appendCallback=appendCallback;
    appendCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendCallback']};};
    function appendTo(target$1371){
        
        var case$1372=target$1371;
        if ($$$cl1.isOfType(target$1371,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1372.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1371,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.appendTo(/*NULL PARAM!*/case$1372.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.appendTo=appendTo;
    appendTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','appendTo']};};
    function getAttr(attributeName$1373){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1373.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getAttr=getAttr;
    getAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getAttr']};};
    function setAttr(attributeName$1374,val$1375){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/attributeName$1374.valueOf()/*NULL PARAM!*/,val$1375));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttr=setAttr;
    setAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttr']};};
    function setAttrEntries(entries$1376){
        if(entries$1376===undefined){entries$1376=$$$cl1.getEmpty();}
        var entriesNative$1377=$$$cjl167.createJSObject();
        $prop$getEntriesNative$1377={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrEntries','$at','entriesNative']};}};
        $prop$getEntriesNative$1377.get=function(){return entriesNative$1377};
        var it$1378 = entries$1376.iterator();
        var item$1379;while ((item$1379=it$1378.next())!==$$$cl1.getFinished()){
            var key$1380=item$1379.key;
            var val$1381=item$1379.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(entriesNative$1377,(tmpvar$1382=$$$cjl167.createJSString(key$1380),$$$cl1.isOfType(tmpvar$1382,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1382:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'687:40-687:58','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,val$1381));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/entriesNative$1377));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrEntries=setAttrEntries;
    setAttrEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'entries',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrEntries']};};
    function setAttrCallback(attributeName$1383,callback$1384){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.attr(/*NULL PARAM!*/(typeof entriesNative==='undefined'||entriesNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: entriesNative")),'697:29-697:41','jquery.ceylon'):entriesNative)/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1384,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setAttrCallback=setAttrCallback;
    setAttrCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setAttrCallback']};};
    function before(content$1385){
        if(content$1385===undefined){content$1385=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.before).apply(null,(tmpvar$1386=(function(){
            var lst$1387=[];
            var it$1388=content$1385.iterator();
            var elem$1389;
            while ((elem$1389=it$1388.next())!==$$$cl1.getFinished()){
                lst$1387.push(elem$1389.$native);
            }
            return $$$cl1.ArraySequence(lst$1387);
        }()),$$$cl1.isOfType(tmpvar$1386,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1386:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'703:55-703:69','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.before=before;
    before.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','before']};};
    function beforeHTML(content$1390){
        if(content$1390===undefined){content$1390=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/content$1390));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeHTML=beforeHTML;
    beforeHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeHTML']};};
    function beforeCallback(callback$1391){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.before(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1391,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.beforeCallback=beforeCallback;
    beforeCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','beforeCallback']};};
    $$jQueryAbs.bind$defs$eventData=function(eventType$1392,eventData$1393,preventBubble$1394){return null;};
    $$jQueryAbs.bind$defs$preventBubble=function(eventType$1392,eventData$1393,preventBubble$1394){return true;};
    function bind(eventType$1392,eventData$1393,preventBubble$1394){
        if(eventData$1393===undefined){eventData$1393=$$jQueryAbs.bind$defs$eventData(eventType$1392,eventData$1393,preventBubble$1394);}
        if(preventBubble$1394===undefined){preventBubble$1394=$$jQueryAbs.bind$defs$preventBubble(eventType$1392,eventData$1393,preventBubble$1394);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1392.valueOf()/*NULL PARAM!*/,eventData$1393/*NULL PARAM!*/,preventBubble$1394));
        /*End dynamic block*/
    }
    $$jQueryAbs.bind=bind;
    bind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'preventBubble',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bind']};};
    function bindCallback(eventType$1395,eventData$1396,handler$1397){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventType$1395.valueOf()/*NULL PARAM!*/,eventData$1396/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1397,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindCallback=bindCallback;
    bindCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindCallback']};};
    function bindEvents(events$1398){
        if(events$1398===undefined){events$1398=$$$cl1.getEmpty();}
        var eventsNative$1399=$$$cjl167.createJSObject();
        $prop$getEventsNative$1399={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','bindEvents','$at','eventsNative']};}};
        $prop$getEventsNative$1399.get=function(){return eventsNative$1399};
        var it$1400 = events$1398.iterator();
        var item$1401;while ((item$1401=it$1400.next())!==$$$cl1.getFinished()){
            var key$1402=item$1401.key;
            var val$1403=item$1401.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(eventsNative$1399,(tmpvar$1404=$$$cjl167.createJSString(key$1402),$$$cl1.isOfType(tmpvar$1404,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1404:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'735:39-735:57','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1403,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.bind(/*NULL PARAM!*/eventsNative$1399));
        /*End dynamic block*/
    }
    $$jQueryAbs.bindEvents=bindEvents;
    bindEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','bindEvents']};};
    $$jQueryAbs.blur$defs$eventData=function(eventData$1405,handler$1406){return null;};
    $$jQueryAbs.blur$defs$handler=function(eventData$1405,handler$1406){return null;};
    function blur(eventData$1405,handler$1406){
        if(eventData$1405===undefined){eventData$1405=$$jQueryAbs.blur$defs$eventData(eventData$1405,handler$1406);}
        if(handler$1406===undefined){handler$1406=$$jQueryAbs.blur$defs$handler(eventData$1405,handler$1406);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1405/*NULL PARAM!*/,handler$1406));
        /*End dynamic block*/
    }
    $$jQueryAbs.blur=blur;
    blur.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','blur']};};
    $$jQueryAbs.change$defs$eventData=function(eventData$1407,handler$1408){return null;};
    $$jQueryAbs.change$defs$handler=function(eventData$1407,handler$1408){return null;};
    function change(eventData$1407,handler$1408){
        if(eventData$1407===undefined){eventData$1407=$$jQueryAbs.change$defs$eventData(eventData$1407,handler$1408);}
        if(handler$1408===undefined){handler$1408=$$jQueryAbs.change$defs$handler(eventData$1407,handler$1408);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1407/*NULL PARAM!*/,handler$1408));
        /*End dynamic block*/
    }
    $$jQueryAbs.change=change;
    change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','change']};};
    $$jQueryAbs.children$defs$selector=function(selector$1409){return null;};
    function children(selector$1409){
        if(selector$1409===undefined){selector$1409=$$jQueryAbs.children$defs$selector(selector$1409);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.children(/*NULL PARAM!*/selector$1409));
        /*End dynamic block*/
    }
    $$jQueryAbs.children=children;
    children.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','children']};};
    $$jQueryAbs.clearQueue$defs$queueName=function(queueName$1410){return $$$cl1.String("fx",2);};
    function clearQueue(queueName$1410){
        if(queueName$1410===undefined){queueName$1410=$$jQueryAbs.clearQueue$defs$queueName(queueName$1410);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.clearQueue(/*NULL PARAM!*/queueName$1410.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.clearQueue=clearQueue;
    clearQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clearQueue']};};
    $$jQueryAbs.click$defs$eventData=function(eventData$1411,handler$1412){return null;};
    $$jQueryAbs.click$defs$handler=function(eventData$1411,handler$1412){return null;};
    function click(eventData$1411,handler$1412){
        if(eventData$1411===undefined){eventData$1411=$$jQueryAbs.click$defs$eventData(eventData$1411,handler$1412);}
        if(handler$1412===undefined){handler$1412=$$jQueryAbs.click$defs$handler(eventData$1411,handler$1412);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.click(/*NULL PARAM!*/eventData$1411/*NULL PARAM!*/,handler$1412));
        /*End dynamic block*/
    }
    $$jQueryAbs.click=click;
    click.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','click']};};
    $$jQueryAbs.clone$defs$withDataAndEvents=function(withDataAndEvents$1413,deepWithDataAndEvents$1414){return false;};
    $$jQueryAbs.clone$defs$deepWithDataAndEvents=function(withDataAndEvents$1413,deepWithDataAndEvents$1414){return null;};
    function clone(withDataAndEvents$1413,deepWithDataAndEvents$1414){
        if(withDataAndEvents$1413===undefined){withDataAndEvents$1413=$$jQueryAbs.clone$defs$withDataAndEvents(withDataAndEvents$1413,deepWithDataAndEvents$1414);}
        if(deepWithDataAndEvents$1414===undefined){deepWithDataAndEvents$1414=$$jQueryAbs.clone$defs$deepWithDataAndEvents(withDataAndEvents$1413,deepWithDataAndEvents$1414);}
        var deep$1415;
        if((deep$1415=deepWithDataAndEvents$1414)!==null){
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1413/*NULL PARAM!*/,deep$1415));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.clone(/*NULL PARAM!*/withDataAndEvents$1413));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.clone=clone;
    clone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'withDataAndEvents',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'deepWithDataAndEvents',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','clone']};};
    $$jQueryAbs.closest$defs$context=function(selector$1416,context$1417){return null;};
    function closest(selector$1416,context$1417){
        if(context$1417===undefined){context$1417=$$jQueryAbs.closest$defs$context(selector$1416,context$1417);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/selector$1416.valueOf()/*NULL PARAM!*/,context$1417));
        /*End dynamic block*/
    }
    $$jQueryAbs.closest=closest;
    closest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'context',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closest']};};
    function closestElement(elem$1418){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/elem$1418.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.closestElement=closestElement;
    closestElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cjd401.Element},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestElement']};};
    function closestjQuery(jq$1419){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.closest(/*NULL PARAM!*/jq$1419.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.closestjQuery=closestjQuery;
    closestjQuery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'jq',$mt:'prm',$t:{t:JQuery},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','closestjQuery']};};
    function contents(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.contents());
        /*End dynamic block*/
    }
    $$jQueryAbs.contents=contents;
    contents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','contents']};};
    function getCss(properties$1420){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.css(/*NULL PARAM!*/properties$1420));
        /*End dynamic block*/
    }
    $$jQueryAbs.getCss=getCss;
    getCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'properties',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getCss']};};
    function setCss(property$1421,val$1422){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1421.valueOf()/*NULL PARAM!*/,val$1422));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCss=setCss;
    setCss.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Number}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCss']};};
    function setCssCallback(property$1423,callback$1424){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1423.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1424,[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssCallback=setCssCallback;
    setCssCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssCallback']};};
    function setCssJson(property$1425,val$1426){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.css(/*NULL PARAM!*/property$1425.valueOf()/*NULL PARAM!*/,val$1426.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setCssJson=setCssJson;
    setCssJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'property',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjj672.JSJSON},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setCssJson']};};
    function setData(key$1427,data$1428){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1427.valueOf()/*NULL PARAM!*/,data$1428.$native));
        /*End dynamic block*/
    }
    $$jQueryAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setData']};};
    function setDataEntries(events$1429){
        if(events$1429===undefined){events$1429=$$$cl1.getEmpty();}
        var dataNative$1430=$$$cjl167.createJSObject();
        $prop$getDataNative$1430={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','setDataEntries','$at','dataNative']};}};
        $prop$getDataNative$1430.get=function(){return dataNative$1430};
        var it$1431 = events$1429.iterator();
        var item$1432;while ((item$1432=it$1431.next())!==$$$cl1.getFinished()){
            var key$1433=item$1432.key;
            var val$1434=item$1432.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(dataNative$1430,(tmpvar$1435=$$$cjl167.createJSString(key$1433),$$$cl1.isOfType(tmpvar$1435,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1435:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'843:37-843:55','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1436=val$1434.$native,$$$cl1.isOfType(tmpvar$1436,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1436:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'843:98-843:107','jquery.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.data(/*NULL PARAM!*/dataNative$1430));
        /*End dynamic block*/
    }
    $$jQueryAbs.setDataEntries=setDataEntries;
    setDataEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setDataEntries']};};
    $$jQueryAbs.getData$defs$key=function(key$1437){return null;};
    function getData(key$1437){
        if(key$1437===undefined){key$1437=$$jQueryAbs.getData$defs$key(key$1437);}
        var k$1438;
        if((k$1438=key$1437)!==null){
            /*Begin dynamic block*/
            return $$$cjl167.JSObject($$jQueryAbs.$native.data(/*NULL PARAM!*/key$1437));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return $$$cjl167.JSObject($$jQueryAbs.$native.data());
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},$ps:[{$nm:'key',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getData']};};
    $$jQueryAbs.dblclick$defs$eventData=function(eventData$1439,handler$1440){return null;};
    $$jQueryAbs.dblclick$defs$handler=function(eventData$1439,handler$1440){return null;};
    function dblclick(eventData$1439,handler$1440){
        if(eventData$1439===undefined){eventData$1439=$$jQueryAbs.dblclick$defs$eventData(eventData$1439,handler$1440);}
        if(handler$1440===undefined){handler$1440=$$jQueryAbs.dblclick$defs$handler(eventData$1439,handler$1440);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.blur(/*NULL PARAM!*/eventData$1439/*NULL PARAM!*/,handler$1440));
        /*End dynamic block*/
    }
    $$jQueryAbs.dblclick=dblclick;
    dblclick.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dblclick']};};
    $$jQueryAbs.delay$defs$queueName=function(duration$1441,queueName$1442){return $$$cl1.String("fx",2);};
    function delay(duration$1441,queueName$1442){
        if(queueName$1442===undefined){queueName$1442=$$jQueryAbs.delay$defs$queueName(duration$1441,queueName$1442);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delay(/*NULL PARAM!*/duration$1441/*NULL PARAM!*/,queueName$1442.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.delay=delay;
    delay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delay']};};
    $$jQueryAbs.delegate$defs$eventData=function(selector$1443,eventType$1444,eventData$1445,handler$1446){return null;};
    $$jQueryAbs.delegate$defs$handler=function(selector$1443,eventType$1444,eventData$1445,handler$1446){return null;};
    function delegate(selector$1443,eventType$1444,eventData$1445,handler$1446){
        if(eventData$1445===undefined){eventData$1445=$$jQueryAbs.delegate$defs$eventData(selector$1443,eventType$1444,eventData$1445,handler$1446);}
        if(handler$1446===undefined){handler$1446=$$jQueryAbs.delegate$defs$handler(selector$1443,eventType$1444,eventData$1445,handler$1446);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1443.valueOf()/*NULL PARAM!*/,eventType$1444.valueOf()/*NULL PARAM!*/,eventData$1445/*NULL PARAM!*/,handler$1446));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegate=delegate;
    delegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegate']};};
    function delegateEvents(selector$1447,events$1448){
        if(events$1448===undefined){events$1448=$$$cl1.getEmpty();}
        var eventsNative$1449=$$$cjl167.createJSObject();
        $prop$getEventsNative$1449={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','delegateEvents','$at','eventsNative']};}};
        $prop$getEventsNative$1449.get=function(){return eventsNative$1449};
        var it$1450 = events$1448.iterator();
        var item$1451;while ((item$1451=it$1450.next())!==$$$cl1.getFinished()){
            var key$1452=item$1451.key;
            var val$1453=item$1451.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(eventsNative$1449,(tmpvar$1454=$$$cjl167.createJSString(key$1452),$$$cl1.isOfType(tmpvar$1454,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1454:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'885:39-885:57','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1453,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.delegate(/*NULL PARAM!*/selector$1447.valueOf()/*NULL PARAM!*/,eventsNative$1449));
        /*End dynamic block*/
    }
    $$jQueryAbs.delegateEvents=delegateEvents;
    delegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','delegateEvents']};};
    $$jQueryAbs.dequeue$defs$queueName=function(queueName$1455){return null;};
    function dequeue(queueName$1455){
        if(queueName$1455===undefined){queueName$1455=$$jQueryAbs.dequeue$defs$queueName(queueName$1455);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.dequeue(/*NULL PARAM!*/queueName$1455));
        /*End dynamic block*/
    }
    $$jQueryAbs.dequeue=dequeue;
    dequeue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','dequeue']};};
    $$jQueryAbs.detach$defs$selector=function(selector$1456){return null;};
    function detach(selector$1456){
        if(selector$1456===undefined){selector$1456=$$jQueryAbs.detach$defs$selector(selector$1456);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.detach(/*NULL PARAM!*/selector$1456));
        /*End dynamic block*/
    }
    $$jQueryAbs.detach=detach;
    detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','detach']};};
    $$jQueryAbs.die$defs$eventData=function(eventData$1457,handler$1458){return null;};
    $$jQueryAbs.die$defs$handler=function(eventData$1457,handler$1458){return null;};
    function die(eventData$1457,handler$1458){
        if(eventData$1457===undefined){eventData$1457=$$jQueryAbs.die$defs$eventData(eventData$1457,handler$1458);}
        if(handler$1458===undefined){handler$1458=$$jQueryAbs.die$defs$handler(eventData$1457,handler$1458);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.die(/*NULL PARAM!*/eventData$1457/*NULL PARAM!*/,handler$1458));
        /*End dynamic block*/
    }
    $$jQueryAbs.die=die;
    die.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','die']};};
    function each(handler$1459){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.each(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1459,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.each=each;
    each.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','each']};};
    function empty(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.empty());
        /*End dynamic block*/
    }
    $$jQueryAbs.empty=empty;
    empty.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','empty']};};
    function end(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.end());
        /*End dynamic block*/
    }
    $$jQueryAbs.end=end;
    end.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','end']};};
    function eq(index$1460){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.eq(/*NULL PARAM!*/index$1460));
        /*End dynamic block*/
    }
    $$jQueryAbs.eq=eq;
    eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','eq']};};
    $$jQueryAbs.error$defs$eventData=function(eventData$1461,handler$1462){return null;};
    $$jQueryAbs.error$defs$handler=function(eventData$1461,handler$1462){return null;};
    function error(eventData$1461,handler$1462){
        if(eventData$1461===undefined){eventData$1461=$$jQueryAbs.error$defs$eventData(eventData$1461,handler$1462);}
        if(handler$1462===undefined){handler$1462=$$jQueryAbs.error$defs$handler(eventData$1461,handler$1462);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.error(/*NULL PARAM!*/eventData$1461/*NULL PARAM!*/,handler$1462));
        /*End dynamic block*/
    }
    $$jQueryAbs.error=error;
    error.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','error']};};
    $$jQueryAbs.fadeIn$defs$duration=function(duration$1463,easing$1464,complete$1465){return null;};
    $$jQueryAbs.fadeIn$defs$easing=function(duration$1463,easing$1464,complete$1465){return null;};
    $$jQueryAbs.fadeIn$defs$complete=function(duration$1463,easing$1464,complete$1465){return null;};
    function fadeIn(duration$1463,easing$1464,complete$1465){
        if(duration$1463===undefined){duration$1463=$$jQueryAbs.fadeIn$defs$duration(duration$1463,easing$1464,complete$1465);}
        if(easing$1464===undefined){easing$1464=$$jQueryAbs.fadeIn$defs$easing(duration$1463,easing$1464,complete$1465);}
        if(complete$1465===undefined){complete$1465=$$jQueryAbs.fadeIn$defs$complete(duration$1463,easing$1464,complete$1465);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeIn(/*NULL PARAM!*/duration$1463/*NULL PARAM!*/,easing$1464/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'943:49-943:55','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeIn=fadeIn;
    fadeIn.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeIn']};};
    function fadeInOptions(options$1466){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1466.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeInOptions=fadeInOptions;
    fadeInOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeInOptions']};};
    $$jQueryAbs.fadeOut$defs$duration=function(duration$1467,easing$1468,complete$1469){return null;};
    $$jQueryAbs.fadeOut$defs$easing=function(duration$1467,easing$1468,complete$1469){return null;};
    $$jQueryAbs.fadeOut$defs$complete=function(duration$1467,easing$1468,complete$1469){return null;};
    function fadeOut(duration$1467,easing$1468,complete$1469){
        if(duration$1467===undefined){duration$1467=$$jQueryAbs.fadeOut$defs$duration(duration$1467,easing$1468,complete$1469);}
        if(easing$1468===undefined){easing$1468=$$jQueryAbs.fadeOut$defs$easing(duration$1467,easing$1468,complete$1469);}
        if(complete$1469===undefined){complete$1469=$$jQueryAbs.fadeOut$defs$complete(duration$1467,easing$1468,complete$1469);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1467/*NULL PARAM!*/,easing$1468/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'955:50-955:56','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOut=fadeOut;
    fadeOut.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOut']};};
    function fadeOutOptions(options$1470){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1470.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeOutOptions=fadeOutOptions;
    fadeOutOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeOutOptions']};};
    $$jQueryAbs.fadeTo$defs$easing=function(duration$1471,opacity$1472,easing$1473,complete$1474){return null;};
    $$jQueryAbs.fadeTo$defs$complete=function(duration$1471,opacity$1472,easing$1473,complete$1474){return null;};
    function fadeTo(duration$1471,opacity$1472,easing$1473,complete$1474){
        if(easing$1473===undefined){easing$1473=$$jQueryAbs.fadeTo$defs$easing(duration$1471,opacity$1472,easing$1473,complete$1474);}
        if(complete$1474===undefined){complete$1474=$$jQueryAbs.fadeTo$defs$complete(duration$1471,opacity$1472,easing$1473,complete$1474);}
        /*Begin dynamic block*/
        $$jQueryAbs.$native.fadeTo(/*NULL PARAM!*/duration$1471/*NULL PARAM!*/,opacity$1472.valueOf()/*NULL PARAM!*/,easing$1473/*NULL PARAM!*/,complete$1474);
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeTo=fadeTo;
    fadeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'duration',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}},{$nm:'opacity',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeTo']};};
    $$jQueryAbs.fadeToggle$defs$duration=function(duration$1475,easing$1476,complete$1477){return null;};
    $$jQueryAbs.fadeToggle$defs$easing=function(duration$1475,easing$1476,complete$1477){return null;};
    $$jQueryAbs.fadeToggle$defs$complete=function(duration$1475,easing$1476,complete$1477){return null;};
    function fadeToggle(duration$1475,easing$1476,complete$1477){
        if(duration$1475===undefined){duration$1475=$$jQueryAbs.fadeToggle$defs$duration(duration$1475,easing$1476,complete$1477);}
        if(easing$1476===undefined){easing$1476=$$jQueryAbs.fadeToggle$defs$easing(duration$1475,easing$1476,complete$1477);}
        if(complete$1477===undefined){complete$1477=$$jQueryAbs.fadeToggle$defs$complete(duration$1475,easing$1476,complete$1477);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/duration$1475/*NULL PARAM!*/,easing$1476/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'973:50-973:56','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggle=fadeToggle;
    fadeToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggle']};};
    function fadeToggleOptions(options$1478){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.fadeOut(/*NULL PARAM!*/options$1478.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.fadeToggleOptions=fadeToggleOptions;
    fadeToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','fadeToggleOptions']};};
    function filter(selector$1479){
        
        var case$1480=selector$1479;
        if ($$$cl1.isOfType(selector$1479,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1480.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1479,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/case$1480.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filter']};};
    function filterCallback(callback$1481){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.filter(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1481,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.filterCallback=filterCallback;
    filterCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','filterCallback']};};
    function find(selector$1482){
        
        var case$1483=selector$1482;
        if ($$$cl1.isOfType(selector$1482,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1483.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1482,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.find(/*NULL PARAM!*/case$1483.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.find=find;
    find.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','find']};};
    function finish(queue$1484){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.finish(/*NULL PARAM!*/(typeof ueue==='undefined'||ueue===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: ueue")),'1019:31-1019:34','jquery.ceylon'):ueue)));
        /*End dynamic block*/
    }
    $$jQueryAbs.finish=finish;
    finish.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','finish']};};
    function first(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.first());
        /*End dynamic block*/
    }
    $$jQueryAbs.first=first;
    first.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','first']};};
    $$jQueryAbs.focus$defs$eventData=function(eventData$1485,handler$1486){return null;};
    $$jQueryAbs.focus$defs$handler=function(eventData$1485,handler$1486){return null;};
    function focus(eventData$1485,handler$1486){
        if(eventData$1485===undefined){eventData$1485=$$jQueryAbs.focus$defs$eventData(eventData$1485,handler$1486);}
        if(handler$1486===undefined){handler$1486=$$jQueryAbs.focus$defs$handler(eventData$1485,handler$1486);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focus(/*NULL PARAM!*/eventData$1485/*NULL PARAM!*/,handler$1486));
        /*End dynamic block*/
    }
    $$jQueryAbs.focus=focus;
    focus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focus']};};
    $$jQueryAbs.focusin$defs$eventData=function(eventData$1487,handler$1488){return null;};
    $$jQueryAbs.focusin$defs$handler=function(eventData$1487,handler$1488){return null;};
    function focusin(eventData$1487,handler$1488){
        if(eventData$1487===undefined){eventData$1487=$$jQueryAbs.focusin$defs$eventData(eventData$1487,handler$1488);}
        if(handler$1488===undefined){handler$1488=$$jQueryAbs.focusin$defs$handler(eventData$1487,handler$1488);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusin(/*NULL PARAM!*/eventData$1487/*NULL PARAM!*/,handler$1488));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusin=focusin;
    focusin.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusin']};};
    $$jQueryAbs.focusout$defs$eventData=function(eventData$1489,handler$1490){return null;};
    $$jQueryAbs.focusout$defs$handler=function(eventData$1489,handler$1490){return null;};
    function focusout(eventData$1489,handler$1490){
        if(eventData$1489===undefined){eventData$1489=$$jQueryAbs.focusout$defs$eventData(eventData$1489,handler$1490);}
        if(handler$1490===undefined){handler$1490=$$jQueryAbs.focusout$defs$handler(eventData$1489,handler$1490);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.focusout(/*NULL PARAM!*/eventData$1489/*NULL PARAM!*/,handler$1490));
        /*End dynamic block*/
    }
    $$jQueryAbs.focusout=focusout;
    focusout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','focusout']};};
    $$jQueryAbs.get$defs$index=function(index$1491){return null;};
    function get(index$1491){
        if(index$1491===undefined){index$1491=$$jQueryAbs.get$defs$index(index$1491);}
        /*Begin dynamic block*/
        return $$$cjd401.Element($$jQueryAbs.$native.get(/*NULL PARAM!*/index$1491));
        /*End dynamic block*/
    }
    $$jQueryAbs.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd401.Element},$ps:[{$nm:'index',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','get']};};
    function has(selector$1492){
        
        var case$1493=selector$1492;
        if ($$$cl1.isOfType(selector$1492,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1493.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1492,{t:$$$cjd401.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.has(/*NULL PARAM!*/case$1493.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.has=has;
    has.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','has']};};
    function hasClass(className$1494){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.hasClass(/*NULL PARAM!*/className$1494.valueOf())){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.hasClass=hasClass;
    hasClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hasClass']};};
    function getHeight(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.height());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHeight=getHeight;
    getHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHeight']};};
    function setHeight(val$1495){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/val$1495));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeight=setHeight;
    setHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeight']};};
    function setHeightCallback(callback$1496){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.height(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1496,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHeightCallback=setHeightCallback;
    setHeightCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHeightCallback']};};
    $$jQueryAbs.hide$defs$duration=function(duration$1497,easing$1498,complete$1499){return null;};
    $$jQueryAbs.hide$defs$easing=function(duration$1497,easing$1498,complete$1499){return null;};
    $$jQueryAbs.hide$defs$complete=function(duration$1497,easing$1498,complete$1499){return null;};
    function hide(duration$1497,easing$1498,complete$1499){
        if(duration$1497===undefined){duration$1497=$$jQueryAbs.hide$defs$duration(duration$1497,easing$1498,complete$1499);}
        if(easing$1498===undefined){easing$1498=$$jQueryAbs.hide$defs$easing(duration$1497,easing$1498,complete$1499);}
        if(complete$1499===undefined){complete$1499=$$jQueryAbs.hide$defs$complete(duration$1497,easing$1498,complete$1499);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/duration$1497/*NULL PARAM!*/,easing$1498/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1097:47-1097:53','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.hide=hide;
    hide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hide']};};
    function hideOptions(options$1500){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hide(/*NULL PARAM!*/options$1500.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.hideOptions=hideOptions;
    hideOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hideOptions']};};
    function hover(handlerIn$1501,handlerOut$1502){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerIn$1501,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,$$$cl1.$JsCallable(handlerOut$1502,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hover=hover;
    hover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerIn',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'handlerOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hover']};};
    function hoverSingle(handlerInOut$1503){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.hover(/*NULL PARAM!*/$$$cl1.$JsCallable(handlerInOut$1503,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.hoverSingle=hoverSingle;
    hoverSingle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handlerInOut',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','hoverSingle']};};
    function getHtml(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.html());
        /*End dynamic block*/
    }
    $$jQueryAbs.getHtml=getHtml;
    getHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getHtml']};};
    function setHtml(html$1504){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/html$1504.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtml=setHtml;
    setHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'html',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtml']};};
    function setHtmlCallback(callback$1505){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.html(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1505,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setHtmlCallback=setHtmlCallback;
    setHtmlCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setHtmlCallback']};};
    function index(selector$1506){
        
        var case$1507=selector$1506;
        if ($$$cl1.isOfType(selector$1506,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return $$$cjl167.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1507.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1506,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return $$$cjl167.JSNumber($$jQueryAbs.$native.index(/*NULL PARAM!*/case$1507.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.index=index;
    index.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','index']};};
    function innerHeight(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.innerHeight());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerHeight=innerHeight;
    innerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerHeight']};};
    function innerWidth(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.innerWidth());
        /*End dynamic block*/
    }
    $$jQueryAbs.innerWidth=innerWidth;
    innerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','innerWidth']};};
    function insertAfter(target$1508){
        
        var case$1509=target$1508;
        if ($$$cl1.isOfType(target$1508,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1509.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1508,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertAfter(/*NULL PARAM!*/case$1509.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertAfter=insertAfter;
    insertAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertAfter']};};
    function insertBefore(target$1510){
        
        var case$1511=target$1510;
        if ($$$cl1.isOfType(target$1510,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1511.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1510,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.insertBefore(/*NULL PARAM!*/case$1511.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','insertBefore']};};
    function isSelector(selector$1512){
        
        var case$1513=selector$1512;
        if ($$$cl1.isOfType(selector$1512,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1513.valueOf())){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1512,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            if($$jQueryAbs.$native.is(/*NULL PARAM!*/case$1513.$native)){
                return true;
            }else {
                return false;
            }/*End dynamic block*/
        }
    }
    $$jQueryAbs.isSelector=isSelector;
    isSelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isSelector']};};
    function isCallback(callback$1514){
        /*Begin dynamic block*/
        if($$jQueryAbs.$native.is(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1514,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAbs.isCallback=isCallback;
    isCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','isCallback']};};
    function jquery(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.jquery);
        /*End dynamic block*/
    }
    $$jQueryAbs.jquery=jquery;
    jquery.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','jquery']};};
    $$jQueryAbs.keydown$defs$eventData=function(eventData$1515,handler$1516){return null;};
    $$jQueryAbs.keydown$defs$handler=function(eventData$1515,handler$1516){return null;};
    function keydown(eventData$1515,handler$1516){
        if(eventData$1515===undefined){eventData$1515=$$jQueryAbs.keydown$defs$eventData(eventData$1515,handler$1516);}
        if(handler$1516===undefined){handler$1516=$$jQueryAbs.keydown$defs$handler(eventData$1515,handler$1516);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keydown(/*NULL PARAM!*/eventData$1515/*NULL PARAM!*/,handler$1516));
        /*End dynamic block*/
    }
    $$jQueryAbs.keydown=keydown;
    keydown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keydown']};};
    $$jQueryAbs.keypress$defs$eventData=function(eventData$1517,handler$1518){return null;};
    $$jQueryAbs.keypress$defs$handler=function(eventData$1517,handler$1518){return null;};
    function keypress(eventData$1517,handler$1518){
        if(eventData$1517===undefined){eventData$1517=$$jQueryAbs.keypress$defs$eventData(eventData$1517,handler$1518);}
        if(handler$1518===undefined){handler$1518=$$jQueryAbs.keypress$defs$handler(eventData$1517,handler$1518);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keypress(/*NULL PARAM!*/eventData$1517/*NULL PARAM!*/,handler$1518));
        /*End dynamic block*/
    }
    $$jQueryAbs.keypress=keypress;
    keypress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keypress']};};
    $$jQueryAbs.keyup$defs$eventData=function(eventData$1519,handler$1520){return null;};
    $$jQueryAbs.keyup$defs$handler=function(eventData$1519,handler$1520){return null;};
    function keyup(eventData$1519,handler$1520){
        if(eventData$1519===undefined){eventData$1519=$$jQueryAbs.keyup$defs$eventData(eventData$1519,handler$1520);}
        if(handler$1520===undefined){handler$1520=$$jQueryAbs.keyup$defs$handler(eventData$1519,handler$1520);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.keyup(/*NULL PARAM!*/eventData$1519/*NULL PARAM!*/,handler$1520));
        /*End dynamic block*/
    }
    $$jQueryAbs.keyup=keyup;
    keyup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','keyup']};};
    function last(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.last());
        /*End dynamic block*/
    }
    $$jQueryAbs.last=last;
    last.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','last']};};
    function resizeTrigger(){
        /*Begin dynamic block*/
        $$jQueryAbs.$native.resize();
        /*End dynamic block*/
    }
    $$jQueryAbs.resizeTrigger=resizeTrigger;
    resizeTrigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resizeTrigger']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.length);
        /*End dynamic block*/
    }
    $$jQueryAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','length']};};
    function load(url$1521,data$1522,complete$1523){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.load(/*NULL PARAM!*/url$1521.valueOf()/*NULL PARAM!*/,data$1522/*NULL PARAM!*/,$$$cl1.$JsCallable(complete$1523,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjx1165.XMLHttpRequest},Element:{t:$$$cjx1165.XMLHttpRequest}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjx1165.XMLHttpRequest}]}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjx1165.XMLHttpRequest}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.load=load;
    load.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjx1165.XMLHttpRequest},Element:{t:$$$cjx1165.XMLHttpRequest}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjx1165.XMLHttpRequest}]}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjx1165.XMLHttpRequest}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','load']};};
    function map(callback$1524){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.map(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1524,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd401.Element},Element:{t:$$$cjd401.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd401.Element}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.map=map;
    map.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cjd401.Element},Element:{t:$$$cjd401.Element}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjd401.Element}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','map']};};
    $$jQueryAbs.mousedown$defs$eventData=function(eventData$1525,handler$1526){return null;};
    $$jQueryAbs.mousedown$defs$handler=function(eventData$1525,handler$1526){return null;};
    function mousedown(eventData$1525,handler$1526){
        if(eventData$1525===undefined){eventData$1525=$$jQueryAbs.mousedown$defs$eventData(eventData$1525,handler$1526);}
        if(handler$1526===undefined){handler$1526=$$jQueryAbs.mousedown$defs$handler(eventData$1525,handler$1526);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousedown(/*NULL PARAM!*/eventData$1525/*NULL PARAM!*/,handler$1526));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousedown=mousedown;
    mousedown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousedown']};};
    $$jQueryAbs.mouseenter$defs$eventData=function(eventData$1527,handler$1528){return null;};
    $$jQueryAbs.mouseenter$defs$handler=function(eventData$1527,handler$1528){return null;};
    function mouseenter(eventData$1527,handler$1528){
        if(eventData$1527===undefined){eventData$1527=$$jQueryAbs.mouseenter$defs$eventData(eventData$1527,handler$1528);}
        if(handler$1528===undefined){handler$1528=$$jQueryAbs.mouseenter$defs$handler(eventData$1527,handler$1528);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseenter(/*NULL PARAM!*/eventData$1527/*NULL PARAM!*/,handler$1528));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseenter=mouseenter;
    mouseenter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseenter']};};
    $$jQueryAbs.mouseleave$defs$eventData=function(eventData$1529,handler$1530){return null;};
    $$jQueryAbs.mouseleave$defs$handler=function(eventData$1529,handler$1530){return null;};
    function mouseleave(eventData$1529,handler$1530){
        if(eventData$1529===undefined){eventData$1529=$$jQueryAbs.mouseleave$defs$eventData(eventData$1529,handler$1530);}
        if(handler$1530===undefined){handler$1530=$$jQueryAbs.mouseleave$defs$handler(eventData$1529,handler$1530);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseleave(/*NULL PARAM!*/eventData$1529/*NULL PARAM!*/,handler$1530));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseleave=mouseleave;
    mouseleave.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseleave']};};
    $$jQueryAbs.mousemove$defs$eventData=function(eventData$1531,handler$1532){return null;};
    $$jQueryAbs.mousemove$defs$handler=function(eventData$1531,handler$1532){return null;};
    function mousemove(eventData$1531,handler$1532){
        if(eventData$1531===undefined){eventData$1531=$$jQueryAbs.mousemove$defs$eventData(eventData$1531,handler$1532);}
        if(handler$1532===undefined){handler$1532=$$jQueryAbs.mousemove$defs$handler(eventData$1531,handler$1532);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mousemove(/*NULL PARAM!*/eventData$1531/*NULL PARAM!*/,handler$1532));
        /*End dynamic block*/
    }
    $$jQueryAbs.mousemove=mousemove;
    mousemove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mousemove']};};
    $$jQueryAbs.mouseout$defs$eventData=function(eventData$1533,handler$1534){return null;};
    $$jQueryAbs.mouseout$defs$handler=function(eventData$1533,handler$1534){return null;};
    function mouseout(eventData$1533,handler$1534){
        if(eventData$1533===undefined){eventData$1533=$$jQueryAbs.mouseout$defs$eventData(eventData$1533,handler$1534);}
        if(handler$1534===undefined){handler$1534=$$jQueryAbs.mouseout$defs$handler(eventData$1533,handler$1534);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseout(/*NULL PARAM!*/eventData$1533/*NULL PARAM!*/,handler$1534));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseout=mouseout;
    mouseout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseout']};};
    $$jQueryAbs.mouseover$defs$eventData=function(eventData$1535,handler$1536){return null;};
    $$jQueryAbs.mouseover$defs$handler=function(eventData$1535,handler$1536){return null;};
    function mouseover(eventData$1535,handler$1536){
        if(eventData$1535===undefined){eventData$1535=$$jQueryAbs.mouseover$defs$eventData(eventData$1535,handler$1536);}
        if(handler$1536===undefined){handler$1536=$$jQueryAbs.mouseover$defs$handler(eventData$1535,handler$1536);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/eventData$1535/*NULL PARAM!*/,handler$1536));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseover=mouseover;
    mouseover.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseover']};};
    $$jQueryAbs.mouseup$defs$eventData=function(eventData$1537,handler$1538){return null;};
    $$jQueryAbs.mouseup$defs$handler=function(eventData$1537,handler$1538){return null;};
    function mouseup(eventData$1537,handler$1538){
        if(eventData$1537===undefined){eventData$1537=$$jQueryAbs.mouseup$defs$eventData(eventData$1537,handler$1538);}
        if(handler$1538===undefined){handler$1538=$$jQueryAbs.mouseup$defs$handler(eventData$1537,handler$1538);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseup(/*NULL PARAM!*/eventData$1537/*NULL PARAM!*/,handler$1538));
        /*End dynamic block*/
    }
    $$jQueryAbs.mouseup=mouseup;
    mouseup.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','mouseup']};};
    $$jQueryAbs.next$defs$selector=function(selector$1539){return null;};
    function next(selector$1539){
        if(selector$1539===undefined){selector$1539=$$jQueryAbs.next$defs$selector(selector$1539);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.next(/*NULL PARAM!*/selector$1539));
        /*End dynamic block*/
    }
    $$jQueryAbs.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','next']};};
    $$jQueryAbs.nextAll$defs$selector=function(selector$1540){return null;};
    function nextAll(selector$1540){
        if(selector$1540===undefined){selector$1540=$$jQueryAbs.nextAll$defs$selector(selector$1540);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.nextAll(/*NULL PARAM!*/selector$1540));
        /*End dynamic block*/
    }
    $$jQueryAbs.nextAll=nextAll;
    nextAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextAll']};};
    $$jQueryAbs.nextUntil$defs$selector=function(selector$1541,filter$1542){return null;};
    $$jQueryAbs.nextUntil$defs$filter=function(selector$1541,filter$1542){return null;};
    function nextUntil(selector$1541,filter$1542){
        if(selector$1541===undefined){selector$1541=$$jQueryAbs.nextUntil$defs$selector(selector$1541,filter$1542);}
        if(filter$1542===undefined){filter$1542=$$jQueryAbs.nextUntil$defs$filter(selector$1541,filter$1542);}
        
        var case$1543=selector$1541;
        if ($$$cl1.isOfType(selector$1541,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1543.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1335:45-1335:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1541,{t:$$$cjd401.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/case$1543.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1340:52-1340:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1541,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.nextUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1345:41-1345:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.nextUntil=nextUntil;
    nextUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','nextUntil']};};
    function not(selector$1544){
        
        var case$1545=selector$1544;
        if ($$$cl1.isOfType(selector$1544,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1545.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1544,{ t:'u', l:[{t:JQuery},{t:$$$cjd401.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.not(/*NULL PARAM!*/case$1545.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.not=not;
    not.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','not']};};
    $$jQueryAbs.off$defs$handler=function(events$1546,selector$1547,handler$1548){return null;};
    function off(events$1546,selector$1547,handler$1548){
        if(handler$1548===undefined){handler$1548=$$jQueryAbs.off$defs$handler(events$1546,selector$1547,handler$1548);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.mouseover(/*NULL PARAM!*/(typeof eventData==='undefined'||eventData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: eventData")),'1366:34-1366:42','jquery.ceylon'):eventData)/*NULL PARAM!*/,handler$1548));
        /*End dynamic block*/
    }
    $$jQueryAbs.off=off;
    off.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','off']};};
    function getOffset(){
        /*Begin dynamic block*/
        return (tmpvar$1549=(/*NULL PARAM!*/tmpvar$1550=$$jQueryAbs.$native.offset(),tmpvar$1551=(typeof Offset==='undefined'?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined type Offset")),'1372:10-1372:15','jquery.ceylon'):Offset),tmpvar$1551.$$===undefined?new tmpvar$1551(tmpvar$1550):tmpvar$1551(tmpvar$1550)),$$$cl1.isOfType(tmpvar$1549,{t:$$$cl1.Anything})?tmpvar$1549:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1372:10-1372:32','jquery.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAbs.getOffset=getOffset;
    getOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getOffset']};};
    function setOffset(offset$1552){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offset());
        /*End dynamic block*/
    }
    $$jQueryAbs.setOffset=setOffset;
    setOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:Coordinates},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffset']};};
    function setOffsetCallback(offset$1553){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offset(/*NULL PARAM!*/$$$cl1.$JsCallable(offset$1553,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setOffsetCallback=setOffsetCallback;
    setOffsetCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Coordinates},Element:{t:Coordinates}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Coordinates}]}}},Return:{t:Coordinates}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setOffsetCallback']};};
    function offsetParent(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.offsetParent());
        /*End dynamic block*/
    }
    $$jQueryAbs.offsetParent=offsetParent;
    offsetParent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','offsetParent']};};
    $$jQueryAbs.on$defs$selector=function(events$1554,selector$1555,data$1556,handler$1557){return null;};
    $$jQueryAbs.on$defs$data=function(events$1554,selector$1555,data$1556,handler$1557){return null;};
    $$jQueryAbs.on$defs$handler=function(events$1554,selector$1555,data$1556,handler$1557){return null;};
    function on(events$1554,selector$1555,data$1556,handler$1557){
        if(selector$1555===undefined){selector$1555=$$jQueryAbs.on$defs$selector(events$1554,selector$1555,data$1556,handler$1557);}
        if(data$1556===undefined){data$1556=$$jQueryAbs.on$defs$data(events$1554,selector$1555,data$1556,handler$1557);}
        if(handler$1557===undefined){handler$1557=$$jQueryAbs.on$defs$handler(events$1554,selector$1555,data$1556,handler$1557);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.on(/*NULL PARAM!*/events$1554.valueOf()/*NULL PARAM!*/,selector$1555/*NULL PARAM!*/,data$1556/*NULL PARAM!*/,handler$1557));
        /*End dynamic block*/
    }
    $$jQueryAbs.on=on;
    on.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','on']};};
    $$jQueryAbs.one$defs$selector=function(events$1558,selector$1559,data$1560,handler$1561){return null;};
    $$jQueryAbs.one$defs$data=function(events$1558,selector$1559,data$1560,handler$1561){return null;};
    $$jQueryAbs.one$defs$handler=function(events$1558,selector$1559,data$1560,handler$1561){return null;};
    function one(events$1558,selector$1559,data$1560,handler$1561){
        if(selector$1559===undefined){selector$1559=$$jQueryAbs.one$defs$selector(events$1558,selector$1559,data$1560,handler$1561);}
        if(data$1560===undefined){data$1560=$$jQueryAbs.one$defs$data(events$1558,selector$1559,data$1560,handler$1561);}
        if(handler$1561===undefined){handler$1561=$$jQueryAbs.one$defs$handler(events$1558,selector$1559,data$1560,handler$1561);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.one(/*NULL PARAM!*/events$1558.valueOf()/*NULL PARAM!*/,selector$1559/*NULL PARAM!*/,data$1560/*NULL PARAM!*/,handler$1561));
        /*End dynamic block*/
    }
    $$jQueryAbs.one=one;
    one.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'events',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryEvent},Element:{t:JQueryEvent}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','one']};};
    $$jQueryAbs.outerHeight$defs$includeMargin=function(includeMargin$1562){return null;};
    function outerHeight(includeMargin$1562){
        if(includeMargin$1562===undefined){includeMargin$1562=$$jQueryAbs.outerHeight$defs$includeMargin(includeMargin$1562);}
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.outerHeight(/*NULL PARAM!*/includeMargin$1562));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerHeight=outerHeight;
    outerHeight.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerHeight']};};
    $$jQueryAbs.outerWidth$defs$includeMargin=function(includeMargin$1563){return null;};
    function outerWidth(includeMargin$1563){
        if(includeMargin$1563===undefined){includeMargin$1563=$$jQueryAbs.outerWidth$defs$includeMargin(includeMargin$1563);}
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.outerWidth(/*NULL PARAM!*/includeMargin$1563));
        /*End dynamic block*/
    }
    $$jQueryAbs.outerWidth=outerWidth;
    outerWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[{$nm:'includeMargin',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','outerWidth']};};
    $$jQueryAbs.parent$defs$selector=function(selector$1564){return null;};
    function parent(selector$1564){
        if(selector$1564===undefined){selector$1564=$$jQueryAbs.parent$defs$selector(selector$1564);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parent(/*NULL PARAM!*/selector$1564));
        /*End dynamic block*/
    }
    $$jQueryAbs.parent=parent;
    parent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parent']};};
    $$jQueryAbs.parents$defs$selector=function(selector$1565){return null;};
    function parents(selector$1565){
        if(selector$1565===undefined){selector$1565=$$jQueryAbs.parents$defs$selector(selector$1565);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/selector$1565));
        /*End dynamic block*/
    }
    $$jQueryAbs.parents=parents;
    parents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parents']};};
    $$jQueryAbs.parentsUntil$defs$selector=function(selector$1566,filter$1567){return null;};
    $$jQueryAbs.parentsUntil$defs$filter=function(selector$1566,filter$1567){return null;};
    function parentsUntil(selector$1566,filter$1567){
        if(selector$1566===undefined){selector$1566=$$jQueryAbs.parentsUntil$defs$selector(selector$1566,filter$1567);}
        if(filter$1567===undefined){filter$1567=$$jQueryAbs.parentsUntil$defs$filter(selector$1566,filter$1567);}
        
        var case$1568=selector$1566;
        if ($$$cl1.isOfType(selector$1566,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1568.valueOf()/*NULL PARAM!*/,filter$1567));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1566,{t:$$$cjd401.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/case$1568.$native/*NULL PARAM!*/,filter$1567));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1566,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.parents(/*NULL PARAM!*/null/*NULL PARAM!*/,filter$1567));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.parentsUntil=parentsUntil;
    parentsUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','parentsUntil']};};
    function position(){
        /*Begin dynamic block*/
        return Coordinates($$jQueryAbs.$native.position());
        /*End dynamic block*/
    }
    $$jQueryAbs.position=position;
    position.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Coordinates},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','position']};};
    function prepend(content$1569){
        if(content$1569===undefined){content$1569=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$$cjl167.JSFunction($$jQueryAbs.$native.prepend).apply(null,(tmpvar$1570=(function(){
            var lst$1571=[];
            var it$1572=content$1569.iterator();
            var elem$1573;
            while ((elem$1573=it$1572.next())!==$$$cl1.getFinished()){
                lst$1571.push(elem$1573.$native);
            }
            return $$$cl1.ArraySequence(lst$1571);
        }()),$$$cl1.isOfType(tmpvar$1570,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1570:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1457:56-1457:70','jquery.ceylon'))));
        /*End dynamic block*/
    }
    $$jQueryAbs.prepend=prepend;
    prepend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prepend']};};
    function prependHTML(content$1574){
        if(content$1574===undefined){content$1574=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/content$1574));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependHTML=prependHTML;
    prependHTML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'content',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependHTML']};};
    function prependCallback(callback$1575){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prepend(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1575,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.prependCallback=prependCallback;
    prependCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependCallback']};};
    function prependTo(target$1576){
        
        var case$1577=target$1576;
        if ($$$cl1.isOfType(target$1576,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1577.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1576,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prependTo(/*NULL PARAM!*/case$1577.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prependTo=prependTo;
    prependTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prependTo']};};
    $$jQueryAbs.prev$defs$selector=function(selector$1578){return null;};
    function prev(selector$1578){
        if(selector$1578===undefined){selector$1578=$$jQueryAbs.prev$defs$selector(selector$1578);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prev(/*NULL PARAM!*/selector$1578));
        /*End dynamic block*/
    }
    $$jQueryAbs.prev=prev;
    prev.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prev']};};
    $$jQueryAbs.prevAll$defs$selector=function(selector$1579){return null;};
    function prevAll(selector$1579){
        if(selector$1579===undefined){selector$1579=$$jQueryAbs.prevAll$defs$selector(selector$1579);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prevAll(/*NULL PARAM!*/selector$1579));
        /*End dynamic block*/
    }
    $$jQueryAbs.prevAll=prevAll;
    prevAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevAll']};};
    $$jQueryAbs.prevUntil$defs$selector=function(selector$1580,filter$1581){return null;};
    $$jQueryAbs.prevUntil$defs$filter=function(selector$1580,filter$1581){return null;};
    function prevUntil(selector$1580,filter$1581){
        if(selector$1580===undefined){selector$1580=$$jQueryAbs.prevUntil$defs$selector(selector$1580,filter$1581);}
        if(filter$1581===undefined){filter$1581=$$jQueryAbs.prevUntil$defs$filter(selector$1580,filter$1581);}
        
        var case$1582=selector$1580;
        if ($$$cl1.isOfType(selector$1580,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1582.valueOf()/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1503:45-1503:45','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1580,{t:$$$cjd401.Element})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/case$1582.$native/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1508:52-1508:52','jquery.ceylon'):f)));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selector$1580,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.prevUntil(/*NULL PARAM!*/null/*NULL PARAM!*/,(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'1513:41-1513:41','jquery.ceylon'):f)));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.prevUntil=prevUntil;
    prevUntil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Element}]}]},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','prevUntil']};};
    $$jQueryAbs.promise$defs$type=function(type$1583,target$1584){return $$$cl1.String("fx",2);};
    $$jQueryAbs.promise$defs$target=function(type$1583,target$1584){return null;};
    function promise(type$1583,target$1584){
        if(type$1583===undefined){type$1583=$$jQueryAbs.promise$defs$type(type$1583,target$1584);}
        if(target$1584===undefined){target$1584=$$jQueryAbs.promise$defs$target(type$1583,target$1584);}
        var t$1585;
        if((t$1585=target$1584)!==null){
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1583.valueOf()/*NULL PARAM!*/,t$1585.$native));
            /*End dynamic block*/
        }else {
            /*Begin dynamic block*/
            return Promise($$jQueryAbs.$native.promise(/*NULL PARAM!*/type$1583.valueOf()));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.promise=promise;
    promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'type',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'target',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSObject}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','promise']};};
    function getProp(name$1586){
        /*Begin dynamic block*/
        var prop$1587=$$jQueryAbs.$native.prop(/*NULL PARAM!*/name$1586.valueOf());
        $prop$getProp$1587={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getProp','$at','prop']};}};
        $prop$getProp$1587.get=function(){return prop$1587};
        if(prop$1587.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1533:25-1533:30','jquery.ceylon'):String))){
            return $$$cjl167.JSString(prop$1587);
        }else {
            if(prop$1587){
                return true;
            }else {
                return false;
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getProp=getProp;
    getProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl167.JSString},{t:$$$cl1.Boolean}]},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getProp']};};
    function setProp(propertyName$1588,val$1589){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1588.valueOf()/*NULL PARAM!*/,val$1589));
        /*End dynamic block*/
    }
    $$jQueryAbs.setProp=setProp;
    setProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setProp']};};
    function setPropEntries(properties$1590){
        if(properties$1590===undefined){properties$1590=$$$cl1.getEmpty();}
        var propertiesNative$1591=$$$cjl167.createJSObject();
        $prop$getPropertiesNative$1591={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAbs','$m','setPropEntries','$at','propertiesNative']};}};
        $prop$getPropertiesNative$1591.get=function(){return propertiesNative$1591};
        var it$1592 = properties$1590.iterator();
        var item$1593;while ((item$1593=it$1592.next())!==$$$cl1.getFinished()){
            var key$1594=item$1593.key;
            var val$1595=item$1593.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(propertiesNative$1591,(tmpvar$1596=$$$cjl167.createJSString(key$1594),$$$cl1.isOfType(tmpvar$1596,{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]})?tmpvar$1596:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'1553:43-1553:61','jquery.ceylon')),$$$cjl167.DataDescriptor(true,false,true,true,val$1595));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertiesNative$1591));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropEntries=setPropEntries;
    setPropEntries.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'properties',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer},{t:$$$cl1.Boolean}]}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropEntries']};};
    function setPropCallback(propertyName$1597,callback$1598){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.prop(/*NULL PARAM!*/propertyName$1597.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$1598,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setPropCallback=setPropCallback;
    setPropCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setPropCallback']};};
    $$jQueryAbs.pushStack$defs$name=function(elements$1599,name$1600,arguments$1601){return null;};
    $$jQueryAbs.pushStack$defs$arguments=function(elements$1599,name$1600,arguments$1601){return null;};
    function pushStack(elements$1599,name$1600,arguments$1601){
        if(name$1600===undefined){name$1600=$$jQueryAbs.pushStack$defs$name(elements$1599,name$1600,arguments$1601);}
        if(arguments$1601===undefined){arguments$1601=$$jQueryAbs.pushStack$defs$arguments(elements$1599,name$1600,arguments$1601);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.pushStack(/*NULL PARAM!*/(function(){
            var lst$1602=[];
            var it$1603=elements$1599.iterator();
            var elem$1604;
            while ((elem$1604=it$1603.next())!==$$$cl1.getFinished()){
                lst$1602.push(elem$1604.$native);
            }
            return $$$cl1.ArraySequence(lst$1602);
        }())/*NULL PARAM!*/,name$1600/*NULL PARAM!*/,arguments$1601));
        /*End dynamic block*/
    }
    $$jQueryAbs.pushStack=pushStack;
    pushStack.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cjd401.Element}}},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','pushStack']};};
    $$jQueryAbs.getQueue$defs$queueName=function(queueName$1605){return $$$cl1.String("fx",2);};
    function getQueue(queueName$1605){
        if(queueName$1605===undefined){queueName$1605=$$jQueryAbs.getQueue$defs$queueName(queueName$1605);}
        /*Begin dynamic block*/
        return $$$cjl167.JSArray($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1605.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.getQueue=getQueue;
    getQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns an array of functions",29)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getQueue']};};
    $$jQueryAbs.setQueue$defs$queueName=function(queueName$1606,newQueue$1607){return $$$cl1.String("fx",2);};
    function setQueue(queueName$1606,newQueue$1607){
        if(queueName$1606===undefined){queueName$1606=$$jQueryAbs.setQueue$defs$queueName(queueName$1606,newQueue$1607);}
        if(newQueue$1607===undefined){newQueue$1607=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1606.valueOf()/*NULL PARAM!*/,newQueue$1607));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueue=setQueue;
    setQueue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'newQueue',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueue']};};
    $$jQueryAbs.setQueueCallback$defs$queueName=function(next$1608,queueName$1609){return $$$cl1.String("fx",2);};
    function setQueueCallback(next$1608,queueName$1609){
        if(queueName$1609===undefined){queueName$1609=$$jQueryAbs.setQueueCallback$defs$queueName(next$1608,queueName$1609);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.queue(/*NULL PARAM!*/queueName$1609.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(next$1608,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setQueueCallback=setQueueCallback;
    setQueueCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'next',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'queueName',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setQueueCallback']};};
    function ready(handler$1610){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.ready(/*NULL PARAM!*/$$$cl1.$JsCallable(handler$1610,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.ready=ready;
    ready.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','ready']};};
    $$jQueryAbs.remove$defs$selector=function(selector$1611){return null;};
    function remove(selector$1611){
        if(selector$1611===undefined){selector$1611=$$jQueryAbs.remove$defs$selector(selector$1611);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.remove(/*NULL PARAM!*/selector$1611));
        /*End dynamic block*/
    }
    $$jQueryAbs.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','remove']};};
    function removeAttr(attributeName$1612){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeAttr(/*NULL PARAM!*/attributeName$1612.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeAttr=removeAttr;
    removeAttr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'attributeName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeAttr']};};
    function removeClass(className$1613){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/(typeof clasName==='undefined'||clasName===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: clasName")),'1612:36-1612:43','jquery.ceylon'):clasName)));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClass=removeClass;
    removeClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClass']};};
    function removeClassCallback(callback$1614){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1614,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeClassCallback=removeClassCallback;
    removeClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeClassCallback']};};
    function removeData(names$1615){
        if(names$1615===undefined){names$1615=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeData(/*NULL PARAM!*/names$1615));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeData=removeData;
    removeData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'names',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeData']};};
    function removeProp(propertyName$1616){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.removeProp(/*NULL PARAM!*/propertyName$1616.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.removeProp=removeProp;
    removeProp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'propertyName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','removeProp']};};
    function replaceAll(target$1617){
        
        var case$1618=target$1617;
        if ($$$cl1.isOfType(target$1617,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1618.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(target$1617,{ t:'u', l:[{t:JQuery},{t:$$$cjd401.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceAll(/*NULL PARAM!*/case$1618.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceAll=replaceAll;
    replaceAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceAll']};};
    function replaceWith(newContent$1619){
        
        var case$1620=newContent$1619;
        if ($$$cl1.isOfType(newContent$1619,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1620.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newContent$1619,{ t:'u', l:[{t:JQuery},{t:$$$cjd401.Element}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/case$1620.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.replaceWith=replaceWith;
    replaceWith.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'newContent',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cjd401.Element}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWith']};};
    function replaceWithCallback(callback$1621){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.replaceWith(/*NULL PARAM!*/callback$1621));
        /*End dynamic block*/
    }
    $$jQueryAbs.replaceWithCallback=replaceWithCallback;
    replaceWithCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQuery},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cjd401.Element}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','replaceWithCallback']};};
    $$jQueryAbs.resize$defs$eventData=function(handler$1622,eventData$1623){return null;};
    function resize(handler$1622,eventData$1623){
        if(eventData$1623===undefined){eventData$1623=$$jQueryAbs.resize$defs$eventData(handler$1622,eventData$1623);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.resize(/*NULL PARAM!*/eventData$1623/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1622,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.resize=resize;
    resize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','resize']};};
    $$jQueryAbs.scroll$defs$eventData=function(handler$1624,eventData$1625){return null;};
    function scroll(handler$1624,eventData$1625){
        if(eventData$1625===undefined){eventData$1625=$$jQueryAbs.scroll$defs$eventData(handler$1624,eventData$1625);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scroll(/*NULL PARAM!*/eventData$1625/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1624,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.scroll=scroll;
    scroll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','scroll']};};
    function getScrollLeft(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.scrollLeft());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollLeft=getScrollLeft;
    getScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollLeft']};};
    function setScrollLeft(val$1626){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollLeft(/*NULL PARAM!*/val$1626));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollLeft=setScrollLeft;
    setScrollLeft.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollLeft']};};
    function getScrollTop(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.scrollTop());
        /*End dynamic block*/
    }
    $$jQueryAbs.getScrollTop=getScrollTop;
    getScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getScrollTop']};};
    function setScrollTop(val$1627){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.scrollTop(/*NULL PARAM!*/val$1627));
        /*End dynamic block*/
    }
    $$jQueryAbs.setScrollTop=setScrollTop;
    setScrollTop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setScrollTop']};};
    $$jQueryAbs.select$defs$eventData=function(handler$1628,eventData$1629){return null;};
    function select(handler$1628,eventData$1629){
        if(eventData$1629===undefined){eventData$1629=$$jQueryAbs.select$defs$eventData(handler$1628,eventData$1629);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.select(/*NULL PARAM!*/eventData$1629/*NULL PARAM!*/,$$$cl1.$JsCallable(handler$1628,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.select=select;
    select.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'handler',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','select']};};
    function serialize(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.serialize());
        /*End dynamic block*/
    }
    $$jQueryAbs.serialize=serialize;
    serialize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serialize']};};
    function serializeArray(){
        /*Begin dynamic block*/
        return $$$cjl167.JSArray($$jQueryAbs.$native.serializeArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.serializeArray=serializeArray;
    serializeArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','serializeArray']};};
    $$jQueryAbs.show$defs$duration=function(duration$1630,easing$1631,complete$1632){return null;};
    $$jQueryAbs.show$defs$easing=function(duration$1630,easing$1631,complete$1632){return null;};
    $$jQueryAbs.show$defs$complete=function(duration$1630,easing$1631,complete$1632){return null;};
    function show(duration$1630,easing$1631,complete$1632){
        if(duration$1630===undefined){duration$1630=$$jQueryAbs.show$defs$duration(duration$1630,easing$1631,complete$1632);}
        if(easing$1631===undefined){easing$1631=$$jQueryAbs.show$defs$easing(duration$1630,easing$1631,complete$1632);}
        if(complete$1632===undefined){complete$1632=$$jQueryAbs.show$defs$complete(duration$1630,easing$1631,complete$1632);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/duration$1630/*NULL PARAM!*/,easing$1631/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1724:47-1724:53','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.show=show;
    show.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','show']};};
    function showOptions(options$1633){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.show(/*NULL PARAM!*/options$1633.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.showOptions=showOptions;
    showOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','showOptions']};};
    $$jQueryAbs.siblings$defs$siblings=function(siblings$1634){return null;};
    function siblings(siblings$1634){
        if(siblings$1634===undefined){siblings$1634=$$jQueryAbs.siblings$defs$siblings(siblings$1634);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.siblings(/*NULL PARAM!*/siblings$1634));
        /*End dynamic block*/
    }
    $$jQueryAbs.siblings=siblings;
    siblings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'siblings',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','siblings']};};
    $$jQueryAbs.slice$defs$end=function(start$1635,end$1636){return null;};
    function slice(start$1635,end$1636){
        if(end$1636===undefined){end$1636=$$jQueryAbs.slice$defs$end(start$1635,end$1636);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slice(/*NULL PARAM!*/start$1635/*NULL PARAM!*/,end$1636));
        /*End dynamic block*/
    }
    $$jQueryAbs.slice=slice;
    slice.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'end',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slice']};};
    $$jQueryAbs.slideDown$defs$duration=function(duration$1637,easing$1638,complete$1639){return null;};
    $$jQueryAbs.slideDown$defs$easing=function(duration$1637,easing$1638,complete$1639){return null;};
    $$jQueryAbs.slideDown$defs$complete=function(duration$1637,easing$1638,complete$1639){return null;};
    function slideDown(duration$1637,easing$1638,complete$1639){
        if(duration$1637===undefined){duration$1637=$$jQueryAbs.slideDown$defs$duration(duration$1637,easing$1638,complete$1639);}
        if(easing$1638===undefined){easing$1638=$$jQueryAbs.slideDown$defs$easing(duration$1637,easing$1638,complete$1639);}
        if(complete$1639===undefined){complete$1639=$$jQueryAbs.slideDown$defs$complete(duration$1637,easing$1638,complete$1639);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/duration$1637/*NULL PARAM!*/,easing$1638/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1748:52-1748:58','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDown=slideDown;
    slideDown.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDown']};};
    function slideDownOptions(options$1640){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideDown(/*NULL PARAM!*/options$1640.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideDownOptions=slideDownOptions;
    slideDownOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideDownOptions']};};
    $$jQueryAbs.slideToggle$defs$duration=function(duration$1641,easing$1642,complete$1643){return null;};
    $$jQueryAbs.slideToggle$defs$easing=function(duration$1641,easing$1642,complete$1643){return null;};
    $$jQueryAbs.slideToggle$defs$complete=function(duration$1641,easing$1642,complete$1643){return null;};
    function slideToggle(duration$1641,easing$1642,complete$1643){
        if(duration$1641===undefined){duration$1641=$$jQueryAbs.slideToggle$defs$duration(duration$1641,easing$1642,complete$1643);}
        if(easing$1642===undefined){easing$1642=$$jQueryAbs.slideToggle$defs$easing(duration$1641,easing$1642,complete$1643);}
        if(complete$1643===undefined){complete$1643=$$jQueryAbs.slideToggle$defs$complete(duration$1641,easing$1642,complete$1643);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/duration$1641/*NULL PARAM!*/,easing$1642/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1760:54-1760:60','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggle=slideToggle;
    slideToggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggle']};};
    function slideToggleOptions(options$1644){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideToggle(/*NULL PARAM!*/options$1644.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideToggleOptions=slideToggleOptions;
    slideToggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideToggleOptions']};};
    $$jQueryAbs.slideUp$defs$duration=function(duration$1645,easing$1646,complete$1647){return null;};
    $$jQueryAbs.slideUp$defs$easing=function(duration$1645,easing$1646,complete$1647){return null;};
    $$jQueryAbs.slideUp$defs$complete=function(duration$1645,easing$1646,complete$1647){return null;};
    function slideUp(duration$1645,easing$1646,complete$1647){
        if(duration$1645===undefined){duration$1645=$$jQueryAbs.slideUp$defs$duration(duration$1645,easing$1646,complete$1647);}
        if(easing$1646===undefined){easing$1646=$$jQueryAbs.slideUp$defs$easing(duration$1645,easing$1646,complete$1647);}
        if(complete$1647===undefined){complete$1647=$$jQueryAbs.slideUp$defs$complete(duration$1645,easing$1646,complete$1647);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/duration$1645/*NULL PARAM!*/,easing$1646/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1772:50-1772:56','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUp=slideUp;
    slideUp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUp']};};
    function slideUpOptions(options$1648){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.slideUp(/*NULL PARAM!*/options$1648.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.slideUpOptions=slideUpOptions;
    slideUpOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','slideUpOptions']};};
    $$jQueryAbs.stop$defs$clearQueue=function(clearQueue$1649,jumpToEnd$1650){return null;};
    $$jQueryAbs.stop$defs$jumpToEnd=function(clearQueue$1649,jumpToEnd$1650){return null;};
    function stop(clearQueue$1649,jumpToEnd$1650){
        if(clearQueue$1649===undefined){clearQueue$1649=$$jQueryAbs.stop$defs$clearQueue(clearQueue$1649,jumpToEnd$1650);}
        if(jumpToEnd$1650===undefined){jumpToEnd$1650=$$jQueryAbs.stop$defs$jumpToEnd(clearQueue$1649,jumpToEnd$1650);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/clearQueue$1649/*NULL PARAM!*/,jumpToEnd$1650));
        /*End dynamic block*/
    }
    $$jQueryAbs.stop=stop;
    stop.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stop']};};
    $$jQueryAbs.stopName$defs$clearQueue=function(queue$1651,clearQueue$1652,jumpToEnd$1653){return null;};
    $$jQueryAbs.stopName$defs$jumpToEnd=function(queue$1651,clearQueue$1652,jumpToEnd$1653){return null;};
    function stopName(queue$1651,clearQueue$1652,jumpToEnd$1653){
        if(clearQueue$1652===undefined){clearQueue$1652=$$jQueryAbs.stopName$defs$clearQueue(queue$1651,clearQueue$1652,jumpToEnd$1653);}
        if(jumpToEnd$1653===undefined){jumpToEnd$1653=$$jQueryAbs.stopName$defs$jumpToEnd(queue$1651,clearQueue$1652,jumpToEnd$1653);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.stop(/*NULL PARAM!*/queue$1651.valueOf()/*NULL PARAM!*/,clearQueue$1652/*NULL PARAM!*/,jumpToEnd$1653));
        /*End dynamic block*/
    }
    $$jQueryAbs.stopName=stopName;
    stopName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'queue',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'clearQueue',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}},{$nm:'jumpToEnd',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','stopName']};};
    $$jQueryAbs.submit$defs$eventData=function(eventData$1654,handler$1655){return null;};
    $$jQueryAbs.submit$defs$handler=function(eventData$1654,handler$1655){return null;};
    function submit(eventData$1654,handler$1655){
        if(eventData$1654===undefined){eventData$1654=$$jQueryAbs.submit$defs$eventData(eventData$1654,handler$1655);}
        if(handler$1655===undefined){handler$1655=$$jQueryAbs.submit$defs$handler(eventData$1654,handler$1655);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.submit(/*NULL PARAM!*/eventData$1654/*NULL PARAM!*/,handler$1655));
        /*End dynamic block*/
    }
    $$jQueryAbs.submit=submit;
    submit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventData',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'handler',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','submit']};};
    function getText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryAbs.$native.text());
        /*End dynamic block*/
    }
    $$jQueryAbs.getText=getText;
    getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getText']};};
    function setText(textString$1656){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/textString$1656.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.setText=setText;
    setText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'textString',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setText']};};
    function setTextCallback(callback$1657){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.text(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1657,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setTextCallback=setTextCallback;
    setTextCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setTextCallback']};};
    function toArray(){
        /*Begin dynamic block*/
        return $$$cjl167.JSArray($$jQueryAbs.$native.toArray());
        /*End dynamic block*/
    }
    $$jQueryAbs.toArray=toArray;
    toArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toArray']};};
    $$jQueryAbs.toggle$defs$duration=function(duration$1658,easing$1659,complete$1660){return null;};
    $$jQueryAbs.toggle$defs$easing=function(duration$1658,easing$1659,complete$1660){return null;};
    $$jQueryAbs.toggle$defs$complete=function(duration$1658,easing$1659,complete$1660){return null;};
    function toggle(duration$1658,easing$1659,complete$1660){
        if(duration$1658===undefined){duration$1658=$$jQueryAbs.toggle$defs$duration(duration$1658,easing$1659,complete$1660);}
        if(easing$1659===undefined){easing$1659=$$jQueryAbs.toggle$defs$easing(duration$1658,easing$1659,complete$1660);}
        if(complete$1660===undefined){complete$1660=$$jQueryAbs.toggle$defs$complete(duration$1658,easing$1659,complete$1660);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/duration$1658/*NULL PARAM!*/,easing$1659/*NULL PARAM!*/,(typeof handler==='undefined'||handler===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: handler")),'1826:49-1826:55','jquery.ceylon'):handler)));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggle=toggle;
    toggle.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'duration',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}]},$an:function(){return[];}},{$nm:'easing',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'complete',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggle']};};
    function toggleOptions(options$1661){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/options$1661.toNative()));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleOptions=toggleOptions;
    toggleOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'options',$mt:'prm',$t:{t:AnimateOptions},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleOptions']};};
    function toggleShowOrHide(showOrHide$1662){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggle(/*NULL PARAM!*/showOrHide$1662));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleShowOrHide=toggleShowOrHide;
    toggleShowOrHide.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'showOrHide',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleShowOrHide']};};
    $$jQueryAbs.toggleClass$defs$swit=function(swit$1663){return null;};
    function toggleClass(swit$1663){
        if(swit$1663===undefined){swit$1663=$$jQueryAbs.toggleClass$defs$swit(swit$1663);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/swit$1663));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClass=toggleClass;
    toggleClass.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClass']};};
    $$jQueryAbs.toggleClassName$defs$swit=function(className$1664,swit$1665){return null;};
    function toggleClassName(className$1664,swit$1665){
        if(swit$1665===undefined){swit$1665=$$jQueryAbs.toggleClassName$defs$swit(className$1664,swit$1665);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/className$1664.valueOf()/*NULL PARAM!*/,swit$1665));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassName=toggleClassName;
    toggleClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'className',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassName']};};
    $$jQueryAbs.toggleClassCallback$defs$swit=function(callback$1666,swit$1667){return null;};
    function toggleClassCallback(callback$1666,swit$1667){
        if(swit$1667===undefined){swit$1667=$$jQueryAbs.toggleClassCallback$defs$swit(callback$1666,swit$1667);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.toggleClass(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1666,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}})/*NULL PARAM!*/,swit$1667));
        /*End dynamic block*/
    }
    $$jQueryAbs.toggleClassCallback=toggleClassCallback;
    toggleClassCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String},{t:$$$cl1.Boolean}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}},{$nm:'swit',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','toggleClassCallback']};};
    function trigger(event$1668,extraParameters$1669){
        if(extraParameters$1669===undefined){extraParameters$1669=$$$cl1.getEmpty();}
        
        var case$1670=event$1668;
        if ($$$cl1.isOfType(event$1668,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1670.valueOf()/*NULL PARAM!*/,extraParameters$1669));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(event$1668,{t:JQueryEvent})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.trigger(/*NULL PARAM!*/case$1670.$native/*NULL PARAM!*/,extraParameters$1669));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.trigger=trigger;
    trigger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'event',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:JQueryEvent}]},$an:function(){return[];}},{$nm:'extraParameters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','trigger']};};
    function unbind(eventType$1671){
        
        var case$1672=eventType$1671;
        if ($$$cl1.isOfType(eventType$1671,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1672.valueOf()/*NULL PARAM!*/,false));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(eventType$1671,{ t:'u', l:[{t:$$$cjd401.Event},{t:JQueryEvent}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/case$1672));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.unbind=unbind;
    unbind.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Event},{t:JQueryEvent}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbind']};};
    $$jQueryAbs.unbindCallaback$defs$eventType=function(eventType$1673,callback$1674){return null;};
    $$jQueryAbs.unbindCallaback$defs$callback=function(eventType$1673,callback$1674){return null;};
    function unbindCallaback(eventType$1673,callback$1674){
        if(eventType$1673===undefined){eventType$1673=$$jQueryAbs.unbindCallaback$defs$eventType(eventType$1673,callback$1674);}
        if(callback$1674===undefined){callback$1674=$$jQueryAbs.unbindCallaback$defs$callback(eventType$1673,callback$1674);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.unbind(/*NULL PARAM!*/eventType$1673/*NULL PARAM!*/,callback$1674));
        /*End dynamic block*/
    }
    $$jQueryAbs.unbindCallaback=unbindCallaback;
    unbindCallaback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'eventType',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unbindCallaback']};};
    $$jQueryAbs.undelegate$defs$namespace=function(namespace$1675){return null;};
    function undelegate(namespace$1675){
        if(namespace$1675===undefined){namespace$1675=$$jQueryAbs.undelegate$defs$namespace(namespace$1675);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/namespace$1675));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegate=undelegate;
    undelegate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'namespace',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegate']};};
    $$jQueryAbs.undelegateCallback$defs$callback=function(selector$1676,eventType$1677,callback$1678){return null;};
    function undelegateCallback(selector$1676,eventType$1677,callback$1678){
        if(callback$1678===undefined){callback$1678=$$jQueryAbs.undelegateCallback$defs$callback(selector$1676,eventType$1677,callback$1678);}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate(/*NULL PARAM!*/selector$1676.valueOf()/*NULL PARAM!*/,eventType$1677.valueOf()/*NULL PARAM!*/,callback$1678));
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegateCallback=undelegateCallback;
    undelegateCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'eventType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateCallback']};};
    function undelegateEvents(selector$1679,events$1680){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.undelegate());
        /*End dynamic block*/
    }
    $$jQueryAbs.undelegateEvents=undelegateEvents;
    undelegateEvents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'selector',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'events',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','undelegateEvents']};};
    function unwrap(){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.unwrap());
        /*End dynamic block*/
    }
    $$jQueryAbs.unwrap=unwrap;
    unwrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','unwrap']};};
    function getVal(){
        /*Begin dynamic block*/
        var val$1681=$$jQueryAbs.$native.val();
        $prop$getVal$1681={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAbs','$m','getVal','$at','val']};}};
        $prop$getVal$1681.get=function(){return val$1681};
        if(val$1681.nstanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'1922:23-1922:28','jquery.ceylon'):String))){
            return $$$cjl167.JSString(val$1681);
        }else {
            if($$$cjl167.arrayIsArray(val$1681)){
                return $$$cjl167.JSArray(val$1681);
            }else {
                return $$$cjl167.JSNumber(val$1681);
            }
        }/*End dynamic block*/
    }
    $$jQueryAbs.getVal=getVal;
    getVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl167.JSString},{t:$$$cjl167.JSNumber},{t:$$$cjl167.JSArray}]},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getVal']};};
    function setVal(val$1682){
        if(val$1682===undefined){val$1682=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/val$1682));
        /*End dynamic block*/
    }
    $$jQueryAbs.setVal=setVal;
    setVal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'val',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setVal']};};
    function setValCallback(callback$1683){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.val(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1683,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.setValCallback=setValCallback;
    setValCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.Integer},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setValCallback']};};
    function getWidth(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryAbs.$native.width());
        /*End dynamic block*/
    }
    $$jQueryAbs.getWidth=getWidth;
    getWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','getWidth']};};
    function setWidth(width$1684){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/width$1684));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidth=setWidth;
    setWidth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'width',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidth']};};
    function setWidthCallback(callback$1685){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.width(/*NULL PARAM!*/callback$1685));
        /*End dynamic block*/
    }
    $$jQueryAbs.setWidthCallback=setWidthCallback;
    setWidthCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','setWidthCallback']};};
    function wrap(wrappingElement$1686){
        
        var case$1687=wrappingElement$1686;
        if ($$$cl1.isOfType(wrappingElement$1686,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1687.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1686,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/case$1687.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrap=wrap;
    wrap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrap']};};
    function wrapCallback(callback$1688){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrap(/*NULL PARAM!*/callback$1688));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapCallback=wrapCallback;
    wrapCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:JQuery}}}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapCallback']};};
    function wrapAll(wrappingElement$1689){
        
        var case$1690=wrappingElement$1689;
        if ($$$cl1.isOfType(wrappingElement$1689,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1690.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(wrappingElement$1689,{ t:'u', l:[{t:$$$cjd401.Element},{t:JQuery}]})) {
            /*Begin dynamic block*/
            return JQuery($$jQueryAbs.$native.wrapAll(/*NULL PARAM!*/case$1690.$native));
            /*End dynamic block*/
        }
    }
    $$jQueryAbs.wrapAll=wrapAll;
    wrapAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjd401.Element},{t:JQuery}]},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapAll']};};
    function wrapInner(wrappingElement$1691){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/wrappingElement$1691.valueOf()));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInner=wrapInner;
    wrapInner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'wrappingElement',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInner']};};
    function wrapInnerCallback(callback$1692){
        /*Begin dynamic block*/
        return JQuery($$jQueryAbs.$native.wrapInner(/*NULL PARAM!*/$$$cl1.$JsCallable(callback$1692,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}})));
        /*End dynamic block*/
    }
    $$jQueryAbs.wrapInnerCallback=wrapInnerCallback;
    wrapInnerCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQuery},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.String}}},$an:function(){return[];}}],$cont:JQueryAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAbs','$m','wrapInnerCallback']};};
    return $$jQueryAbs;
}
JQueryAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAbs']};};
exports.JQueryAbs=JQueryAbs;
function $init$JQueryAbs(){
    if (JQueryAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAbs,'ceylon.js.jquery::JQueryAbs',$$$cjl167.JSObjectAbs);
    }
    return JQueryAbs;
}
exports.$init$JQueryAbs=$init$JQueryAbs;
$init$JQueryAbs();
function DataType(name$1693, $$dataType){
    $init$DataType();
    if ($$dataType===undefined)$$dataType=new DataType.$$;
    $$dataType.name$1693_=name$1693;
    $$$cl1.defineAttr($$dataType,'name$1693',function(){return this.name$1693_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DataType,d:['ceylon.js.jquery','DataType','$at','name']};});
    return $$dataType;
}
DataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','DataType']};};
exports.DataType=DataType;
function $init$DataType(){
    if (DataType.$$===undefined){
        $$$cl1.initTypeProto(DataType,'ceylon.js.jquery::DataType',$$$cl1.Basic);
    }
    return DataType;
}
exports.$init$DataType=$init$DataType;
$init$DataType();
function dataTypeXML$1694(){
    var $$dataTypeXML=new dataTypeXML$1694.$$;
    DataType($$$cl1.String("dataTypeXML",11),$$dataTypeXML);
    return $$dataTypeXML;
}
function $init$dataTypeXML$1694(){
    if (dataTypeXML$1694.$$===undefined){
        $$$cl1.initTypeProto(dataTypeXML$1694,'ceylon.js.jquery::dataTypeXML',DataType);
    }
    return dataTypeXML$1694;
}
exports.$init$dataTypeXML$1694=$init$dataTypeXML$1694;
$init$dataTypeXML$1694();
var dataTypeXML$1695=dataTypeXML$1694();
var getDataTypeXML=function(){
    return dataTypeXML$1695;
}
exports.getDataTypeXML=getDataTypeXML;
getDataTypeXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeXML$1694},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeXML']};};
$prop$getDataTypeXML={get:getDataTypeXML,$$metamodel$$:getDataTypeXML.$$metamodel$$};
exports.$prop$getDataTypeXML=$prop$getDataTypeXML;
function dataTypeHtml$1696(){
    var $$dataTypeHtml=new dataTypeHtml$1696.$$;
    DataType($$$cl1.String("dataTypeHtml",12),$$dataTypeHtml);
    return $$dataTypeHtml;
}
function $init$dataTypeHtml$1696(){
    if (dataTypeHtml$1696.$$===undefined){
        $$$cl1.initTypeProto(dataTypeHtml$1696,'ceylon.js.jquery::dataTypeHtml',DataType);
    }
    return dataTypeHtml$1696;
}
exports.$init$dataTypeHtml$1696=$init$dataTypeHtml$1696;
$init$dataTypeHtml$1696();
var dataTypeHtml$1697=dataTypeHtml$1696();
var getDataTypeHtml=function(){
    return dataTypeHtml$1697;
}
exports.getDataTypeHtml=getDataTypeHtml;
getDataTypeHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeHtml$1696},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeHtml']};};
$prop$getDataTypeHtml={get:getDataTypeHtml,$$metamodel$$:getDataTypeHtml.$$metamodel$$};
exports.$prop$getDataTypeHtml=$prop$getDataTypeHtml;
function dataTypeScript$1698(){
    var $$dataTypeScript=new dataTypeScript$1698.$$;
    DataType($$$cl1.String("dataTypeScript",14),$$dataTypeScript);
    return $$dataTypeScript;
}
function $init$dataTypeScript$1698(){
    if (dataTypeScript$1698.$$===undefined){
        $$$cl1.initTypeProto(dataTypeScript$1698,'ceylon.js.jquery::dataTypeScript',DataType);
    }
    return dataTypeScript$1698;
}
exports.$init$dataTypeScript$1698=$init$dataTypeScript$1698;
$init$dataTypeScript$1698();
var dataTypeScript$1699=dataTypeScript$1698();
var getDataTypeScript=function(){
    return dataTypeScript$1699;
}
exports.getDataTypeScript=getDataTypeScript;
getDataTypeScript.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeScript$1698},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeScript']};};
$prop$getDataTypeScript={get:getDataTypeScript,$$metamodel$$:getDataTypeScript.$$metamodel$$};
exports.$prop$getDataTypeScript=$prop$getDataTypeScript;
function dataTypeJson$1700(){
    var $$dataTypeJson=new dataTypeJson$1700.$$;
    DataType($$$cl1.String("dataTypeJson",12),$$dataTypeJson);
    return $$dataTypeJson;
}
function $init$dataTypeJson$1700(){
    if (dataTypeJson$1700.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJson$1700,'ceylon.js.jquery::dataTypeJson',DataType);
    }
    return dataTypeJson$1700;
}
exports.$init$dataTypeJson$1700=$init$dataTypeJson$1700;
$init$dataTypeJson$1700();
var dataTypeJson$1701=dataTypeJson$1700();
var getDataTypeJson=function(){
    return dataTypeJson$1701;
}
exports.getDataTypeJson=getDataTypeJson;
getDataTypeJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJson$1700},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJson']};};
$prop$getDataTypeJson={get:getDataTypeJson,$$metamodel$$:getDataTypeJson.$$metamodel$$};
exports.$prop$getDataTypeJson=$prop$getDataTypeJson;
function dataTypeJsonp$1702(){
    var $$dataTypeJsonp=new dataTypeJsonp$1702.$$;
    DataType($$$cl1.String("dataTypeJsonp",13),$$dataTypeJsonp);
    return $$dataTypeJsonp;
}
function $init$dataTypeJsonp$1702(){
    if (dataTypeJsonp$1702.$$===undefined){
        $$$cl1.initTypeProto(dataTypeJsonp$1702,'ceylon.js.jquery::dataTypeJsonp',DataType);
    }
    return dataTypeJsonp$1702;
}
exports.$init$dataTypeJsonp$1702=$init$dataTypeJsonp$1702;
$init$dataTypeJsonp$1702();
var dataTypeJsonp$1703=dataTypeJsonp$1702();
var getDataTypeJsonp=function(){
    return dataTypeJsonp$1703;
}
exports.getDataTypeJsonp=getDataTypeJsonp;
getDataTypeJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeJsonp$1702},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeJsonp']};};
$prop$getDataTypeJsonp={get:getDataTypeJsonp,$$metamodel$$:getDataTypeJsonp.$$metamodel$$};
exports.$prop$getDataTypeJsonp=$prop$getDataTypeJsonp;
function dataTypeText$1704(){
    var $$dataTypeText=new dataTypeText$1704.$$;
    DataType($$$cl1.String("dataTypeText",12),$$dataTypeText);
    return $$dataTypeText;
}
function $init$dataTypeText$1704(){
    if (dataTypeText$1704.$$===undefined){
        $$$cl1.initTypeProto(dataTypeText$1704,'ceylon.js.jquery::dataTypeText',DataType);
    }
    return dataTypeText$1704;
}
exports.$init$dataTypeText$1704=$init$dataTypeText$1704;
$init$dataTypeText$1704();
var dataTypeText$1705=dataTypeText$1704();
var getDataTypeText=function(){
    return dataTypeText$1705;
}
exports.getDataTypeText=getDataTypeText;
getDataTypeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:dataTypeText$1704},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','dataTypeText']};};
$prop$getDataTypeText={get:getDataTypeText,$$metamodel$$:getDataTypeText.$$metamodel$$};
exports.$prop$getDataTypeText=$prop$getDataTypeText;
function createJSONPSettings(jsonp$1706,jsonpCallback$1707){
    if(jsonp$1706===undefined){jsonp$1706=true;}
    if(jsonpCallback$1707===undefined){jsonpCallback$1707=$$$cl1.String("callback",8);}
    /*Begin dynamic block*/
    if(jsonp$1706.equals(true)){
        if(jsonpCallback$1707.equals($$$cl1.String("callback",8))){
            return null;
        }else {
            return JSONPSettings(jsonpCallback$1707);
        }
    }else {
        if(jsonpCallback$1707.equals($$$cl1.String("callback",8))){
            return JSONPSettings(false);
        }else {
            var json$1708=(values$1709=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("jsonp",5),false,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$399}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("jsonpCallback",13),jsonpCallback$1707,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.false$399}}},{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}]}}),$$$cjj672.JSON(values$1709));
            $prop$getJson$1708={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSON},d:['ceylon.js.jquery','createJSONPSettings','$at','json']};}};
            $prop$getJson$1708.get=function(){return json$1708};
            var values$1709;
            return JSONPSettings(json$1708.toJson());
        }
    }/*End dynamic block*/
}
exports.createJSONPSettings=createJSONPSettings;
createJSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSONPSettings}]},$ps:[{$nm:'jsonp',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'jsonpCallback',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','createJSONPSettings']};};
function JSONPSettings(n$1710, $$jSONPSettings){
    $init$JSONPSettings();
    if ($$jSONPSettings===undefined)$$jSONPSettings=new JSONPSettings.$$;
    $$jSONPSettings.n$1710_=n$1710;
    JSONPSettingsAbs($$jSONPSettings);
    $$$cl1.defineAttr($$jSONPSettings,'n$1710',function(){return this.n$1710_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,d:['ceylon.js.jquery','JSONPSettings','$at','n']};});
    $$jSONPSettings.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JSONPSettings,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JSONPSettings','$at','native']};}};
    /*Begin dynamic block*/
    $$jSONPSettings.$native=n$1710;/*End dynamic block*/
    return $$jSONPSettings;
}
JSONPSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JSONPSettingsAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettings']};};
exports.JSONPSettings=JSONPSettings;
function $init$JSONPSettings(){
    if (JSONPSettings.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettings,'ceylon.js.jquery::JSONPSettings',JSONPSettingsAbs);
    }
    return JSONPSettings;
}
exports.$init$JSONPSettings=$init$JSONPSettings;
$init$JSONPSettings();
function JSONPSettingsAbs($$jSONPSettingsAbs){
    $init$JSONPSettingsAbs();
    if ($$jSONPSettingsAbs===undefined)$$jSONPSettingsAbs=new JSONPSettingsAbs.$$;
    $$$cjl167.JSObjectAbs($$jSONPSettingsAbs);
    function getIsJsonp(){
        /*Begin dynamic block*/
        if(((tmpvar$1711=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1712=true,(tmpvar$1711.equals&&tmpvar$1711.equals(tmpvar$1712))||tmpvar$1711===tmpvar$1712)||(tmpvar$1713=$$jSONPSettingsAbs.$native.jsonp,tmpvar$1714=null,(tmpvar$1713.equals&&!tmpvar$1713.equals(tmpvar$1714))||tmpvar$1713!==tmpvar$1714))){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getIsJsonp=getIsJsonp;
    getIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getIsJsonp']};};
    function setIsJsonp(jsonp$1715){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.jsonp=jsonp$1715;
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setIsJsonp=setIsJsonp;
    setIsJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setIsJsonp']};};
    function getCallback(){
        /*Begin dynamic block*/
        var callback$1716=$$jSONPSettingsAbs.$native.callback;
        $prop$getCallback$1716={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback','$at','callback']};}};
        $prop$getCallback$1716.get=function(){return callback$1716};
        if((tmpvar$1717=callback$1716,tmpvar$1718=null,(tmpvar$1717.equals&&!tmpvar$1717.equals(tmpvar$1718))||tmpvar$1717!==tmpvar$1718)){
            return $$$cjl167.JSString($$jSONPSettingsAbs.$native.callback);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jSONPSettingsAbs.getCallback=getCallback;
    getCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','getCallback']};};
    function setCallback(callback$1719){
        /*Begin dynamic block*/
        $$jSONPSettingsAbs.$native.callback=callback$1719.valueOf();
        /*End dynamic block*/
    }
    $$jSONPSettingsAbs.setCallback=setCallback;
    setCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JSONPSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPSettingsAbs','$m','setCallback']};};
    return $$jSONPSettingsAbs;
}
JSONPSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JSONPSettingsAbs']};};
exports.JSONPSettingsAbs=JSONPSettingsAbs;
function $init$JSONPSettingsAbs(){
    if (JSONPSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JSONPSettingsAbs,'ceylon.js.jquery::JSONPSettingsAbs',$$$cjl167.JSObjectAbs);
    }
    return JSONPSettingsAbs;
}
exports.$init$JSONPSettingsAbs=$init$JSONPSettingsAbs;
$init$JSONPSettingsAbs();
function JQueryAjaxSettings(n$1720, $$jQueryAjaxSettings){
    $init$JQueryAjaxSettings();
    if ($$jQueryAjaxSettings===undefined)$$jQueryAjaxSettings=new JQueryAjaxSettings.$$;
    $$jQueryAjaxSettings.n$1720_=n$1720;
    JQueryAjaxSettingsAbs($$jQueryAjaxSettings);
    $$$cl1.defineAttr($$jQueryAjaxSettings,'n$1720',function(){return this.n$1720_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryAjaxSettings,d:['ceylon.js.jquery','JQueryAjaxSettings','$at','n']};});
    /*Begin dynamic block*/
    $$jQueryAjaxSettings.$native=n$1720;/*End dynamic block*/
    return $$jQueryAjaxSettings;
}
JQueryAjaxSettings.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryAjaxSettingsAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettings']};};
exports.JQueryAjaxSettings=JQueryAjaxSettings;
function $init$JQueryAjaxSettings(){
    if (JQueryAjaxSettings.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettings,'ceylon.js.jquery::JQueryAjaxSettings',JQueryAjaxSettingsAbs);
    }
    return JQueryAjaxSettings;
}
exports.$init$JQueryAjaxSettings=$init$JQueryAjaxSettings;
$init$JQueryAjaxSettings();
function JQueryAjaxSettingsAbs($$jQueryAjaxSettingsAbs){
    $init$JQueryAjaxSettingsAbs();
    if ($$jQueryAjaxSettingsAbs===undefined)$$jQueryAjaxSettingsAbs=new JQueryAjaxSettingsAbs.$$;
    $$$cjl167.JSObjectAbs($$jQueryAjaxSettingsAbs);
    function getAccepts(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1721=$$jQueryAjaxSettingsAbs.$native.accepts.iterator();
            var key$1722,val$1723;
            var next$val$1723=function(){
                var entry$1724;
                if((entry$1724=it$1721.next())!==$$$cl1.getFinished()){
                    key$1722=entry$1724.key;
                    val$1723=entry$1724.item;
                    return entry$1724;
                }
                val$1723=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1723();
            return function(){
                if(val$1723!==undefined){
                    var key$1722$1725=key$1722;
                    var val$1723$1726=val$1723;
                    var tmpvar$1727=$$$cl1.Entry($$$cjl167.JSString(key$1722$1725),$$$cjl167.JSString(val$1723$1726),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}});
                    next$val$1723();
                    return tmpvar$1727;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getAccepts=getAccepts;
    getAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAccepts']};};
    function setAccepts(accepts$1728){
        if(accepts$1728===undefined){accepts$1728=$$$cl1.getEmpty();}
        var acceptNative$1729=$$$cjl167.createJSObject();
        $prop$getAcceptNative$1729={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts','$at','acceptNative']};}};
        $prop$getAcceptNative$1729.get=function(){return acceptNative$1729};
        var it$1730 = accepts$1728.iterator();
        var item$1731;while ((item$1731=it$1730.next())!==$$$cl1.getFinished()){
            var key$1732=item$1731.key;
            var val$1733=item$1731.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(acceptNative$1729,key$1732,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1734=val$1733.$native,$$$cl1.isOfType(tmpvar$1734,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1734:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'97:84-97:93','jqueryajaxsettings.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.accepts=acceptNative$1729.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAccepts=setAccepts;
    setAccepts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'accepts',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAccepts']};};
    function getAsync(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.async){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getAsync=getAsync;
    getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getAsync']};};
    function setAsync(async$1735){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.async=async$1735;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setAsync=setAsync;
    setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setAsync']};};
    function getBeforeSend(){
        /*Begin dynamic block*/
        return (tmpvar$1736=$$jQueryAjaxSettingsAbs.$native.beforeSend=(typeof beforeSend==='undefined'||beforeSend===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: beforeSend")),'124:30-124:39','jqueryajaxsettings.ceylon'):beforeSend),$$$cl1.isOfType(tmpvar$1736,{t:$$$cl1.Anything})?tmpvar$1736:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'124:10-124:39','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getBeforeSend=getBeforeSend;
    getBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Boolean(JQXHR, JQueryAjaxSettings)?",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getBeforeSend']};};
    function setBeforeSend(beforeSend$1737){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.beforeSend=$$$cl1.$JsCallable(beforeSend$1737/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setBeforeSend=setBeforeSend;
    setBeforeSend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'beforeSend',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Boolean}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setBeforeSend']};};
    function getCache(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.cache){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getCache=getCache;
    getCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCache']};};
    function setCache(cache$1738){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.cache=cache$1738;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCache=setCache;
    setCache.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cache',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCache']};};
    function getComplete(){
        /*Begin dynamic block*/
        var complete$1739=$$jQueryAjaxSettingsAbs.$native.complete;
        $prop$getComplete$1739={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete','$at','complete']};}};
        $prop$getComplete$1739.get=function(){return complete$1739};
        if((tmpvar$1740=complete$1739,tmpvar$1741=null,(tmpvar$1740.equals&&tmpvar$1740.equals(tmpvar$1741))||tmpvar$1740===tmpvar$1741)){
            return null;
        }else {
            if($$$cjl167.arrayIsArray(complete$1739)){
                return $$$cjl167.JSArray(complete$1739);
            }else {
                return $$$cjl167.createJSArray([(tmpvar$1742=complete$1739,$$$cl1.isOfType(tmpvar$1742,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1742:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'159:25-159:32','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}}));
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getComplete=getComplete;
    getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns array of Anything(JQXHR, String) or null",48)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getComplete']};};
    function setComplete(complete$1743){
        if(complete$1743===undefined){complete$1743=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.complete=complete$1743;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setComplete=setComplete;
    setComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'complete',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setComplete']};};
    function getContents(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1744=$$jQueryAjaxSettingsAbs.$native.contents.iterator();
            var key$1745,val$1746;
            var next$val$1746=function(){
                var entry$1747;
                if((entry$1747=it$1744.next())!==$$$cl1.getFinished()){
                    key$1745=entry$1747.key;
                    val$1746=entry$1747.item;
                    return entry$1747;
                }
                val$1746=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1746();
            return function(){
                if(val$1746!==undefined){
                    var key$1745$1748=key$1745;
                    var val$1746$1749=val$1746;
                    var tmpvar$1750=$$$cl1.Entry($$$cjl167.JSString(key$1745$1748),$$$cjl167.RegExp(val$1746$1749),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}});
                    next$val$1746();
                    return tmpvar$1750;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContents=getContents;
    getContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContents']};};
    function setContents(contents$1751){
        if(contents$1751===undefined){contents$1751=$$$cl1.getEmpty();}
        var contNative$1752=$$$cjl167.createJSObject();
        $prop$getContNative$1752={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents','$at','contNative']};}};
        $prop$getContNative$1752.get=function(){return contNative$1752};
        var it$1753 = contents$1751.iterator();
        var item$1754;while ((item$1754=it$1753.next())!==$$$cl1.getFinished()){
            var key$1755=item$1754.key;
            var val$1756=item$1754.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(contNative$1752,key$1755,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1757=val$1756.$native,$$$cl1.isOfType(tmpvar$1757,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1757:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'181:82-181:91','jqueryajaxsettings.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contents=contNative$1752;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContents=setContents;
    setContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contents',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContents']};};
    function getContentType(){
        /*Begin dynamic block*/
        if((tmpvar$1758=$$jQueryAjaxSettingsAbs.$native.contentType,tmpvar$1759=null,(tmpvar$1758.equals&&!tmpvar$1758.equals(tmpvar$1759))||tmpvar$1758!==tmpvar$1759)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.contentType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContentType=getContentType;
    getContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContentType']};};
    function setContentType(contentType$1760){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.contentType=contentType$1760.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContentType=setContentType;
    setContentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'contentType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContentType']};};
    function getContext(){
        /*Begin dynamic block*/
        if((tmpvar$1761=$$jQueryAjaxSettingsAbs.$native.context,tmpvar$1762=null,(tmpvar$1761.equals&&!tmpvar$1761.equals(tmpvar$1762))||tmpvar$1761!==tmpvar$1762)){
            return $$$cjl167.JSObject($$jQueryAjaxSettingsAbs.$native.context);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getContext=getContext;
    getContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSObject}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getContext']};};
    function setContext(context$1763){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.context=context$1763.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setContext=setContext;
    setContext.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'context',$mt:'prm',$t:{t:$$$cjl167.JSObject},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setContext']};};
    function getConverters(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1764=$$jQueryAjaxSettingsAbs.$native.converters.iterator();
            var key$1765,val$1766;
            var next$val$1766=function(){
                var entry$1767;
                if((entry$1767=it$1764.next())!==$$$cl1.getFinished()){
                    key$1765=entry$1767.key;
                    val$1766=entry$1767.item;
                    return entry$1767;
                }
                val$1766=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1766();
            return function(){
                if(val$1766!==undefined){
                    var key$1765$1768=key$1765;
                    var val$1766$1769=val$1766;
                    var tmpvar$1770=$$$cl1.Entry($$$cjl167.JSString(key$1765$1768),$$$cjl167.JSObject(val$1766$1769),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}});
                    next$val$1766();
                    return tmpvar$1770;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getConverters=getConverters;
    getConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getConverters']};};
    function setConverters(converters$1771){
        if(converters$1771===undefined){converters$1771=$$$cl1.getEmpty();}
        var convNative$1772=$$$cjl167.createJSObject();
        $prop$getConvNative$1772={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters','$at','convNative']};}};
        $prop$getConvNative$1772.get=function(){return convNative$1772};
        var it$1773 = converters$1771.iterator();
        var item$1774;while ((item$1774=it$1773.next())!==$$$cl1.getFinished()){
            var key$1775=item$1774.key;
            var val$1776=item$1774.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(convNative$1772,key$1775,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1777=val$1776.$native,$$$cl1.isOfType(tmpvar$1777,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1777:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'231:82-231:91','jqueryajaxsettings.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.converters=convNative$1772.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setConverters=setConverters;
    setConverters.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'converters',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setConverters']};};
    function getCrossDomain(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.crossDomain){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getCrossDomain=getCrossDomain;
    getCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getCrossDomain']};};
    function setCrossDomain(crossDomain$1778){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.crossDomain=crossDomain$1778;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setCrossDomain=setCrossDomain;
    setCrossDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'crossDomain',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setCrossDomain']};};
    function getData(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.data.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'257:32-257:37','jqueryajaxsettings.ceylon'):String))){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.data);
        }else {
            if((tmpvar$1779=$$jQueryAjaxSettingsAbs.$native.data,tmpvar$1780=null,(tmpvar$1779.equals&&!tmpvar$1779.equals(tmpvar$1780))||tmpvar$1779!==tmpvar$1780)){
                return $$$cjl167.JSObject($$jQueryAjaxSettingsAbs.$native.data);
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cjl167.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSObject}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getData']};};
    function setData(data$1781){
        
        var case$1782=data$1781;
        if ($$$cl1.isOfType(data$1781,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1782.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1781,{t:$$$cjl167.JSObject})) {
            /*Begin dynamic block*/
            $$jQueryAjaxSettingsAbs.$native.data=case$1782.$native;
            /*End dynamic block*/
        }
    }
    $$jQueryAjaxSettingsAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSObject}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setData']};};
    function getDataFilter(){
        /*Begin dynamic block*/
        return (tmpvar$1783=$$jQueryAjaxSettingsAbs.$native.dataFilter,$$$cl1.isOfType(tmpvar$1783,{t:$$$cl1.Anything})?tmpvar$1783:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'284:10-284:26','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataFilter=getDataFilter;
    getDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(String, String)?",33)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataFilter']};};
    function setDataFilter(datafilter$1784){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=$$$cl1.$JsCallable(datafilter$1784/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataFilter=setDataFilter;
    setDataFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataFilter']};};
    function getDataType(){
        /*Begin dynamic block*/
        if((tmpvar$1785=$$jQueryAjaxSettingsAbs.$native.dataType,tmpvar$1786=null,(tmpvar$1785.equals&&!tmpvar$1785.equals(tmpvar$1786))||tmpvar$1785!==tmpvar$1786)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.dataType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getDataType=getDataType;
    getDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getDataType']};};
    function setDataType(dataType$1787){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataType=dataType$1787.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setDataType=setDataType;
    setDataType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dataType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setDataType']};};
    function getError(){
        /*Begin dynamic block*/
        if($$$cjl167.arrayIsArray($$jQueryAjaxSettingsAbs.$native.error)){
            return $$$cjl167.JSArray($$jQueryAjaxSettingsAbs.$native.error);
        }else {
            if((tmpvar$1788=$$jQueryAjaxSettingsAbs.$native.error,tmpvar$1789=null,(tmpvar$1788.equals&&!tmpvar$1788.equals(tmpvar$1789))||tmpvar$1788!==tmpvar$1789)){
                return $$$cjl167.createJSArray([(tmpvar$1790=$$jQueryAjaxSettingsAbs.$native.error,$$$cl1.isOfType(tmpvar$1790,{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}})?tmpvar$1790:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'316:25-316:36','jqueryajaxsettings.ceylon'))].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}}));
            }else {
                return null;
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getError=getError;
    getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(JQXHR, String?, String?)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getError']};};
    function setError(datafilter$1791){
        if(datafilter$1791===undefined){datafilter$1791=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.dataFilter=datafilter$1791;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setError=setError;
    setError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'datafilter',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setError']};};
    function getGlobal(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.global){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getGlobal=getGlobal;
    getGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getGlobal']};};
    function setGlobal(global$1792){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.global=global$1792;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setGlobal=setGlobal;
    setGlobal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'global',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setGlobal']};};
    function getHeaders(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1793=$$jQueryAjaxSettingsAbs.$native.headers.iterator();
            var key$1794,val$1795;
            var next$val$1795=function(){
                var entry$1796;
                if((entry$1796=it$1793.next())!==$$$cl1.getFinished()){
                    key$1794=entry$1796.key;
                    val$1795=entry$1796.item;
                    return entry$1796;
                }
                val$1795=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1795();
            return function(){
                if(val$1795!==undefined){
                    var key$1794$1797=key$1794;
                    var val$1795$1798=val$1795;
                    var tmpvar$1799=$$$cl1.Entry($$$cjl167.JSString(key$1794$1797),$$$cjl167.JSString(val$1795$1798),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}});
                    next$val$1795();
                    return tmpvar$1799;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getHeaders=getHeaders;
    getHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getHeaders']};};
    function setHeaders(headers$1800){
        var headNative$1801=$$$cjl167.createJSObject();
        $prop$getHeadNative$1801={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders','$at','headNative']};}};
        $prop$getHeadNative$1801.get=function(){return headNative$1801};
        var it$1802 = headers$1800.iterator();
        var item$1803;while ((item$1803=it$1802.next())!==$$$cl1.getFinished()){
            var key$1804=item$1803.key;
            var val$1805=item$1803.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(headNative$1801,key$1804,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1806=val$1805.$native,$$$cl1.isOfType(tmpvar$1806,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1806:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'355:82-355:91','jqueryajaxsettings.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.headers=headNative$1801.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setHeaders=setHeaders;
    setHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'headers',$mt:'prm',$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setHeaders']};};
    function getIfModified(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.ifModified){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getIfModified=getIfModified;
    getIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIfModified']};};
    function setIfModified(modified$1807){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.ifModified=modified$1807;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setIfModified=setIfModified;
    setIfModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'modified',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIfModified']};};
    function getIsLocal(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.isLocal){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getIsLocal=getIsLocal;
    getIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getIsLocal']};};
    function setIsLocal(local$1808){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.isLocal=local$1808;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setIsLocal=setIsLocal;
    setIsLocal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'local',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setIsLocal']};};
    function getJsonp(){
        var jsonp$1809;
        $prop$getJsonp$1809={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp','$at','jsonp']};}};
        $prop$getJsonp$1809.get=function(){return jsonp$1809};
        /*Begin dynamic block*/
        jsonp$1809=$$$cjl167.JSObject($$jQueryAjaxSettingsAbs.$native.jsonp);if((tmpvar$1810=$$jQueryAjaxSettingsAbs.$native.jsonp,tmpvar$1811=null,(tmpvar$1810.equals&&tmpvar$1810.equals(tmpvar$1811))||tmpvar$1810===tmpvar$1811)){
            return null;
        }else {
            if((jsonp$1809.hasOwnProperty($$$cl1.String("jsonp",5))||jsonp$1809.hasOwnProperty($$$cl1.String("jsonpCallback",13)))){
                return JSONPSettings(jsonp$1809.$native);
            }else {
                if(jsonp$1809.$native.instanceof(/*NULL PARAM!*/(typeof String==='undefined'||String===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: String")),'403:40-403:45','jqueryajaxsettings.ceylon'):String))){
                    return $$$cjl167.JSString(jsonp$1809.$native);
                }else {
                    if(jsonp$1809.$native){
                        return true;
                    }else {
                        return false;
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonp=getJsonp;
    getJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:JSONPSettings},{t:$$$cjl167.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonp']};};
    function setJsonp(jsonp$1812){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonp=jsonp$1812.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonp=setJsonp;
    setJsonp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'jsonp',$mt:'prm',$t:{t:JSONPSettings},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonp']};};
    function getJsonpCallback(){
        /*Begin dynamic block*/
        return (tmpvar$1813=$$jQueryAjaxSettingsAbs.$native.jsonpCallback,$$$cl1.isOfType(tmpvar$1813,{t:$$$cl1.Anything})?tmpvar$1813:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'424:10-424:29','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getJsonpCallback=getJsonpCallback;
    getJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns String|String()?",24)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getJsonpCallback']};};
    function setJsonpCallback(callback$1814){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.jsonpCallback=callback$1814;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setJsonpCallback=setJsonpCallback;
    setJsonpCallback.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'callback',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setJsonpCallback']};};
    function getMimeType(){
        /*Begin dynamic block*/
        if((tmpvar$1815=$$jQueryAjaxSettingsAbs.$native.mimeType,tmpvar$1816=null,(tmpvar$1815.equals&&!tmpvar$1815.equals(tmpvar$1816))||tmpvar$1815!==tmpvar$1816)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.mimeType);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getMimeType=getMimeType;
    getMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getMimeType']};};
    function setMimeType(mimeType$1817){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.mimeType=mimeType$1817.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setMimeType=setMimeType;
    setMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mimeType',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setMimeType']};};
    function getPassword(){
        /*Begin dynamic block*/
        if((tmpvar$1818=$$jQueryAjaxSettingsAbs.$native.password,tmpvar$1819=null,(tmpvar$1818.equals&&!tmpvar$1818.equals(tmpvar$1819))||tmpvar$1818!==tmpvar$1819)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.password);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getPassword=getPassword;
    getPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getPassword']};};
    function setPassword(password$1820){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.password=password$1820.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setPassword=setPassword;
    setPassword.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'password',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setPassword']};};
    function getProcessData(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.password){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getProcessData=getProcessData;
    getProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getProcessData']};};
    function setProcessData(processData$1821){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.processData=processData$1821;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setProcessData=setProcessData;
    setProcessData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'processData',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setProcessData']};};
    function getScriptCharset(){
        /*Begin dynamic block*/
        if((tmpvar$1822=$$jQueryAjaxSettingsAbs.$native.scriptCharset,tmpvar$1823=null,(tmpvar$1822.equals&&!tmpvar$1822.equals(tmpvar$1823))||tmpvar$1822!==tmpvar$1823)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.scriptCharset);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getScriptCharset=getScriptCharset;
    getScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getScriptCharset']};};
    function setScriptCharset(scriptCharset$1824){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.scriptCharset=scriptCharset$1824.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setScriptCharset=setScriptCharset;
    setScriptCharset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'scriptCharset',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setScriptCharset']};};
    function getStatusCode(){
        /*Begin dynamic block*/
        return (tmpvar$1825=(typeof statusNative==='undefined'||statusNative===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: statusNative")),'501:10-501:21','jqueryajaxsettings.ceylon'):statusNative),$$$cl1.isOfType(tmpvar$1825,{t:$$$cl1.Anything})?tmpvar$1825:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'501:10-501:21','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getStatusCode=getStatusCode;
    getStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Object: JSNumber -> Anything(JQXHR, String?, String?)|Anything(JQXHR, String?, String?)",95)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getStatusCode']};};
    function setStatusCode(statusCodes$1826){
        if(statusCodes$1826===undefined){statusCodes$1826=$$$cl1.getEmpty();}
        var statusNative$1827=$$$cjl167.createJSObject();
        $prop$getStatusNative$1827={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode','$at','statusNative']};}};
        $prop$getStatusNative$1827.get=function(){return statusNative$1827};
        var it$1828 = statusCodes$1826.iterator();
        var item$1829;while ((item$1829=it$1828.next())!==$$$cl1.getFinished()){
            var key$1830=item$1829.key;
            var val$1831=item$1829.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(statusNative$1827,key$1830.string,$$$cjl167.DataDescriptor(true,false,true,true,$$$cl1.$JsCallable(val$1831,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}})));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.statusNative=statusNative$1827.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setStatusCode=setStatusCode;
    setStatusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'statusCodes',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setStatusCode']};};
    function getSuccess(){
        /*Begin dynamic block*/
        if((tmpvar$1832=$$jQueryAjaxSettingsAbs.$native.success,tmpvar$1833=null,(tmpvar$1832.equals&&!tmpvar$1832.equals(tmpvar$1833))||tmpvar$1832!==tmpvar$1833)){
            return $$$cjl167.JSArray($$jQueryAjaxSettingsAbs.$native.success);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getSuccess=getSuccess;
    getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSArray}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything(Anything, String, JQXHR)[]",43)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getSuccess']};};
    function setSuccess(success$1834){
        if(success$1834===undefined){success$1834=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.success=success$1834;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setSuccess=setSuccess;
    setSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'success',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setSuccess']};};
    function getTimeout(){
        /*Begin dynamic block*/
        if((tmpvar$1835=$$jQueryAjaxSettingsAbs.$native.timeout,tmpvar$1836=null,(tmpvar$1835.equals&&!tmpvar$1835.equals(tmpvar$1836))||tmpvar$1835!==tmpvar$1836)){
            return $$$cjl167.JSNumber($$jQueryAjaxSettingsAbs.$native.timeout);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getTimeout=getTimeout;
    getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSNumber}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTimeout']};};
    function setTimeout(timeout$1837){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.timeout=timeout$1837;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setTimeout=setTimeout;
    setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTimeout']};};
    function getTraditional(){
        /*Begin dynamic block*/
        if($$jQueryAjaxSettingsAbs.$native.traditional){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getTraditional=getTraditional;
    getTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getTraditional']};};
    function setTraditional(traditional$1838){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.traditional=traditional$1838;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setTraditional=setTraditional;
    setTraditional.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'traditional',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setTraditional']};};
    function getType(){
        /*Begin dynamic block*/
        if((tmpvar$1839=$$jQueryAjaxSettingsAbs.$native.type,tmpvar$1840=null,(tmpvar$1839.equals&&!tmpvar$1839.equals(tmpvar$1840))||tmpvar$1839!==tmpvar$1840)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.type);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getType=getType;
    getType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getType']};};
    function setType(type$1841){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.type=type$1841.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setType=setType;
    setType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setType']};};
    function getUrl(){
        /*Begin dynamic block*/
        if((tmpvar$1842=$$jQueryAjaxSettingsAbs.$native.url,tmpvar$1843=null,(tmpvar$1842.equals&&!tmpvar$1842.equals(tmpvar$1843))||tmpvar$1842!==tmpvar$1843)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.url);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUrl=getUrl;
    getUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUrl']};};
    function setUrl(url$1844){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.url=url$1844.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUrl=setUrl;
    setUrl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'url',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUrl']};};
    function getUsername(){
        /*Begin dynamic block*/
        if((tmpvar$1845=$$jQueryAjaxSettingsAbs.$native.username,tmpvar$1846=null,(tmpvar$1845.equals&&!tmpvar$1845.equals(tmpvar$1846))||tmpvar$1845!==tmpvar$1846)){
            return $$$cjl167.JSString($$jQueryAjaxSettingsAbs.$native.username);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getUsername=getUsername;
    getUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getUsername']};};
    function setUsername(username$1847){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.username=username$1847.valueOf();
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setUsername=setUsername;
    setUsername.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'username',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setUsername']};};
    function getXhr(){
        /*Begin dynamic block*/
        return (tmpvar$1848=$$jQueryAjaxSettingsAbs.$native.xhr,$$$cl1.isOfType(tmpvar$1848,{t:$$$cl1.Anything})?tmpvar$1848:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'617:10-617:19','jqueryajaxsettings.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhr=getXhr;
    getXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns Anything()?",19)),$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhr']};};
    function setXhr(xhr$1849){
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhr=$$$cl1.$JsCallable(xhr$1849/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhr=setXhr;
    setXhr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhr',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhr']};};
    function getXhrFields(){
        /*Begin dynamic block*/
        return $$$cl1.Comprehension(function(){
            var it$1850=$$jQueryAjaxSettingsAbs.$native.xhrFields.iterator();
            var key$1851,val$1852;
            var next$val$1852=function(){
                var entry$1853;
                if((entry$1853=it$1850.next())!==$$$cl1.getFinished()){
                    key$1851=entry$1853.key;
                    val$1852=entry$1853.item;
                    return entry$1853;
                }
                val$1852=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1852();
            return function(){
                if(val$1852!==undefined){
                    var key$1851$1854=key$1851;
                    var val$1852$1855=val$1852;
                    var tmpvar$1856=$$$cl1.Entry($$$cjl167.JSString(key$1851$1854),$$$cjl167.JSObject(val$1852$1855),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}});
                    next$val$1852();
                    return tmpvar$1856;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}).sequence;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.getXhrFields=getXhrFields;
    getXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},$ps:[],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','getXhrFields']};};
    function setXhrFields(xhrFields$1857){
        if(xhrFields$1857===undefined){xhrFields$1857=$$$cl1.getEmpty();}
        var xhrNative$1858=$$$cjl167.createJSObject();
        $prop$getXhrNative$1858={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSObject},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields','$at','xhrNative']};}};
        $prop$getXhrNative$1858.get=function(){return xhrNative$1858};
        var it$1859 = xhrFields$1857.iterator();
        var item$1860;while ((item$1860=it$1859.next())!==$$$cl1.getFinished()){
            var key$1861=item$1860.key;
            var val$1862=item$1860.item;
            /*Begin dynamic block*/
            $$$cjl167.objectDefineProperty(xhrNative$1858,key$1861,$$$cjl167.DataDescriptor(true,false,true,true,(tmpvar$1863=val$1862.$native,$$$cl1.isOfType(tmpvar$1863,{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Anything}]})?tmpvar$1863:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'637:81-637:90','jqueryajaxsettings.ceylon'))));
            /*End dynamic block*/
        }
        /*Begin dynamic block*/
        $$jQueryAjaxSettingsAbs.$native.xhrFields=xhrNative$1858.$native;
        /*End dynamic block*/
    }
    $$jQueryAjaxSettingsAbs.setXhrFields=setXhrFields;
    setXhrFields.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'xhrFields',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},$an:function(){return[];}}],$cont:JQueryAjaxSettingsAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs','$m','setXhrFields']};};
    return $$jQueryAjaxSettingsAbs;
}
JQueryAjaxSettingsAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryAjaxSettingsAbs']};};
exports.JQueryAjaxSettingsAbs=JQueryAjaxSettingsAbs;
function $init$JQueryAjaxSettingsAbs(){
    if (JQueryAjaxSettingsAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsAbs,'ceylon.js.jquery::JQueryAjaxSettingsAbs',$$$cjl167.JSObjectAbs);
    }
    return JQueryAjaxSettingsAbs;
}
exports.$init$JQueryAjaxSettingsAbs=$init$JQueryAjaxSettingsAbs;
$init$JQueryAjaxSettingsAbs();
function JSONPOptions(jsonp, jsonpCallback, $$jSONPOptions){
    $init$JSONPOptions();
    if ($$jSONPOptions===undefined)$$jSONPOptions=new JSONPOptions.$$;
    if(jsonp===undefined){jsonp=true;}
    $$jSONPOptions.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=$$$cl1.String("callback",8);}
    $$jSONPOptions.jsonpCallback_=jsonpCallback;
    $$$cl1.defineAttr($$jSONPOptions,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonp']};});
    $$$cl1.defineAttr($$jSONPOptions,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JSONPOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions','$at','jsonpCallback']};});
    return $$jSONPOptions;
}
JSONPOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JSONPOptions']};};
exports.JSONPOptions=JSONPOptions;
function $init$JSONPOptions(){
    if (JSONPOptions.$$===undefined){
        $$$cl1.initTypeProto(JSONPOptions,'ceylon.js.jquery::JSONPOptions',$$$cl1.Basic);
    }
    return JSONPOptions;
}
exports.$init$JSONPOptions=$init$JSONPOptions;
$init$JSONPOptions();
function JQueryAjaxSettingsBuilder(async, cache, contentType, context, crossDomain, data, dataType, global, ifModified, isLocal, jsonp, jsonpCallback, mimeType, password, processData, scriptCharset, timeout, traditional, type, url, username, $$jQueryAjaxSettingsBuilder){
    $init$JQueryAjaxSettingsBuilder();
    if ($$jQueryAjaxSettingsBuilder===undefined)$$jQueryAjaxSettingsBuilder=new JQueryAjaxSettingsBuilder.$$;
    if(async===undefined){async=true;}
    $$jQueryAjaxSettingsBuilder.async_=async;
    if(cache===undefined){cache=null;}
    $$jQueryAjaxSettingsBuilder.cache_=cache;
    if(contentType===undefined){contentType=$$$cl1.String("application/x-www-form-urlencoded; charset=UTF-8",48);}
    $$jQueryAjaxSettingsBuilder.contentType_=contentType;
    if(context===undefined){context=null;}
    $$jQueryAjaxSettingsBuilder.context_=context;
    if(crossDomain===undefined){crossDomain=null;}
    $$jQueryAjaxSettingsBuilder.crossDomain_=crossDomain;
    if(data===undefined){data=$$$cl1.String("",0);}
    $$jQueryAjaxSettingsBuilder.data_=data;
    if(dataType===undefined){dataType=$$$cl1.getEmpty();}
    $$jQueryAjaxSettingsBuilder.dataType_=dataType;
    if(global===undefined){global=true;}
    $$jQueryAjaxSettingsBuilder.global_=global;
    if(ifModified===undefined){ifModified=true;}
    $$jQueryAjaxSettingsBuilder.ifModified_=ifModified;
    if(isLocal===undefined){isLocal=null;}
    $$jQueryAjaxSettingsBuilder.isLocal_=isLocal;
    if(jsonp===undefined){jsonp=JSONPOptions();}
    $$jQueryAjaxSettingsBuilder.jsonp_=jsonp;
    if(jsonpCallback===undefined){jsonpCallback=null;}
    $$jQueryAjaxSettingsBuilder.jsonpCallback_=jsonpCallback;
    if(mimeType===undefined){mimeType=null;}
    $$jQueryAjaxSettingsBuilder.mimeType_=mimeType;
    if(password===undefined){password=null;}
    $$jQueryAjaxSettingsBuilder.password_=password;
    if(processData===undefined){processData=true;}
    $$jQueryAjaxSettingsBuilder.processData_=processData;
    if(scriptCharset===undefined){scriptCharset=null;}
    $$jQueryAjaxSettingsBuilder.scriptCharset_=scriptCharset;
    if(timeout===undefined){timeout=null;}
    $$jQueryAjaxSettingsBuilder.timeout_=timeout;
    if(traditional===undefined){traditional=false;}
    $$jQueryAjaxSettingsBuilder.traditional_=traditional;
    if(type===undefined){type=$$$cl1.String("GET",3);}
    $$jQueryAjaxSettingsBuilder.type_=type;
    if(url===undefined){url=null;}
    $$jQueryAjaxSettingsBuilder.url_=url;
    if(username===undefined){username=null;}
    $$jQueryAjaxSettingsBuilder.username_=username;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'async',function(){return this.async_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','async']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'cache',function(){return this.cache_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','cache']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contentType',function(){return this.contentType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contentType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'context',function(){return this.context_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','context']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'crossDomain',function(){return this.crossDomain_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','crossDomain']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'data',function(){return this.data_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSObject}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','data']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataType',function(){return this.dataType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DataType}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'global',function(){return this.global_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','global']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'ifModified',function(){return this.ifModified_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','ifModified']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'isLocal',function(){return this.isLocal_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','isLocal']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonp',function(){return this.jsonp_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:JSONPOptions},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonp']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'jsonpCallback',function(){return this.jsonpCallback_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}}}]}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','jsonpCallback']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'mimeType',function(){return this.mimeType_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','mimeType']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'password',function(){return this.password_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','password']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'processData',function(){return this.processData_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','processData']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'scriptCharset',function(){return this.scriptCharset_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','scriptCharset']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'timeout',function(){return this.timeout_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','timeout']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'traditional',function(){return this.traditional_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','traditional']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'type',function(){return this.type_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','type']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'url',function(){return this.url_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','url']};});
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'username',function(){return this.username_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','username']};});
    var beforeSend=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'beforeSend',function(){return beforeSend;},function(beforeSend$1864){return beforeSend=beforeSend$1864;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};});
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Boolean}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','beforeSend']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getBeforeSend.get=function(){return beforeSend};
    var dataFilter=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'dataFilter',function(){return dataFilter;},function(dataFilter$1865){return dataFilter=dataFilter$1865;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};});
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','dataFilter']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getDataFilter.get=function(){return dataFilter};
    var xhr=null;
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhr',function(){return xhr;},function(xhr$1866){return xhr=xhr$1866;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}]},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhr']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhr.get=function(){return xhr};
    var complete=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'complete',function(){return complete;},function(complete$1867){return complete=complete$1867;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};});
    $$jQueryAjaxSettingsBuilder.$prop$getComplete={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','complete']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getComplete.get=function(){return complete};
    var error=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'error',function(){return error;},function(error$1868){return error=error$1868;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};});
    $$jQueryAjaxSettingsBuilder.$prop$getError={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','error']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getError.get=function(){return error};
    var success=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'success',function(){return success;},function(success$1869){return success=success$1869;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};});
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','success']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getSuccess.get=function(){return success};
    var accepts=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'accepts',function(){return accepts;},function(accepts$1870){return accepts=accepts$1870;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};});
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','accepts']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getAccepts.get=function(){return accepts};
    var contents=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'contents',function(){return contents;},function(contents$1871){return contents=contents$1871;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};});
    $$jQueryAjaxSettingsBuilder.$prop$getContents={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.RegExp}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','contents']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getContents.get=function(){return contents};
    var headers=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'headers',function(){return headers;},function(headers$1872){return headers=headers$1872;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};});
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.String}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','headers']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getHeaders.get=function(){return headers};
    var converters=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'converters',function(){return converters;},function(converters$1873){return converters=converters$1873;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};});
    $$jQueryAjaxSettingsBuilder.$prop$getConverters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','converters']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getConverters.get=function(){return converters};
    var xhrFields=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'xhrFields',function(){return xhrFields;},function(xhrFields$1874){return xhrFields=xhrFields$1874;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};});
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cjl167.JSObject}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','xhrFields']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getXhrFields.get=function(){return xhrFields};
    var statusCode=$$$cl1.getEmpty();
    $$$cl1.defineAttr($$jQueryAjaxSettingsBuilder,'statusCode',function(){return statusCode;},function(statusCode$1875){return statusCode=statusCode$1875;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};});
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.Integer},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$at','statusCode']};}};
    $$jQueryAjaxSettingsBuilder.$prop$getStatusCode.get=function(){return statusCode};
    function toNative(){
        var settings$1876;
        $prop$getSettings$1876={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:JQueryAjaxSettings},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','settings']};}};
        $prop$getSettings$1876.get=function(){return settings$1876};
        /*Begin dynamic block*/
        settings$1876=JQueryAjaxSettings((typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'38:33-38:38','jqueryajaxsettingsbuilder.ceylon'):Object));/*End dynamic block*/
        var acceptsNative$1877;
        $prop$getAcceptsNative$1877={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','acceptsNative']};}};
        $prop$getAcceptsNative$1877.get=function(){return acceptsNative$1877};
        /*Begin dynamic block*/
        acceptsNative$1877=$$$cl1.Comprehension(function(){
            var it$1878=$$jQueryAjaxSettingsBuilder.accepts.iterator();
            var key$1879,val$1880;
            var next$val$1880=function(){
                var entry$1881;
                if((entry$1881=it$1878.next())!==$$$cl1.getFinished()){
                    key$1879=entry$1881.key;
                    val$1880=entry$1881.item;
                    return entry$1881;
                }
                val$1880=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1880();
            return function(){
                if(val$1880!==undefined){
                    var key$1879$1882=key$1879;
                    var val$1880$1883=val$1880;
                    var tmpvar$1884=$$$cl1.Entry((tmpvar$1885=$$$cjl167.createJSString(key$1879$1882),$$$cl1.isOfType(tmpvar$1885,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1885:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'42:74-42:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1886=$$$cjl167.createJSString(val$1880$1883),$$$cl1.isOfType(tmpvar$1886,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1886:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'42:95-42:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}});
                    next$val$1880();
                    return tmpvar$1884;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}).sequence;/*End dynamic block*/
        settings$1876.setAccepts(acceptsNative$1877);
        settings$1876.setAsync($$jQueryAjaxSettingsBuilder.async);
        var bS$1887;
        if((bS$1887=$$jQueryAjaxSettingsBuilder.beforeSend)!==null){
            settings$1876.setBeforeSend($$$cl1.$JsCallable(bS$1887,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQueryAjaxSettings},Element:{t:JQueryAjaxSettings}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:JQueryAjaxSettings}]}}},Return:{t:$$$cl1.Boolean}}));
        }
        var c$1888;
        if((c$1888=$$jQueryAjaxSettingsBuilder.cache)!==null){
            settings$1876.setCache(c$1888);
        }
        settings$1876.setComplete($$jQueryAjaxSettingsBuilder.complete);
        var contentsNative$1889;
        $prop$getContentsNative$1889={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','contentsNative']};}};
        $prop$getContentsNative$1889.get=function(){return contentsNative$1889};
        /*Begin dynamic block*/
        contentsNative$1889=$$$cl1.Comprehension(function(){
            var it$1890=$$jQueryAjaxSettingsBuilder.contents.iterator();
            var key$1891,val$1892;
            var next$val$1892=function(){
                var entry$1893;
                if((entry$1893=it$1890.next())!==$$$cl1.getFinished()){
                    key$1891=entry$1893.key;
                    val$1892=entry$1893.item;
                    return entry$1893;
                }
                val$1892=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1892();
            return function(){
                if(val$1892!==undefined){
                    var key$1891$1894=key$1891;
                    var val$1892$1895=val$1892;
                    var tmpvar$1896=$$$cl1.Entry((tmpvar$1897=$$$cjl167.createJSString(key$1891$1894),$$$cl1.isOfType(tmpvar$1897,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1897:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'55:74-55:92','jqueryajaxsettingsbuilder.ceylon')),val$1892$1895,{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}});
                    next$val$1892();
                    return tmpvar$1896;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.RegExp}}}}).sequence;/*End dynamic block*/
        settings$1876.setContents(contentsNative$1889);
        settings$1876.setContentType($$jQueryAjaxSettingsBuilder.contentType);
        var c$1898;
        if((c$1898=$$jQueryAjaxSettingsBuilder.context)!==null){
            settings$1876.setContext(c$1898);
        }
        var convertersNative$1899;
        $prop$getConvertersNative$1899={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','convertersNative']};}};
        $prop$getConvertersNative$1899.get=function(){return convertersNative$1899};
        /*Begin dynamic block*/
        convertersNative$1899=$$$cl1.Comprehension(function(){
            var it$1900=$$jQueryAjaxSettingsBuilder.converters.iterator();
            var key$1901,val$1902;
            var next$val$1902=function(){
                var entry$1903;
                if((entry$1903=it$1900.next())!==$$$cl1.getFinished()){
                    key$1901=entry$1903.key;
                    val$1902=entry$1903.item;
                    return entry$1903;
                }
                val$1902=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1902();
            return function(){
                if(val$1902!==undefined){
                    var key$1901$1904=key$1901;
                    var val$1902$1905=val$1902;
                    var tmpvar$1906=$$$cl1.Entry((tmpvar$1907=$$$cjl167.createJSString(key$1901$1904),$$$cl1.isOfType(tmpvar$1907,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1907:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'64:80-64:98','jqueryajaxsettingsbuilder.ceylon')),val$1902$1905,{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}});
                    next$val$1902();
                    return tmpvar$1906;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1876.setConverters(convertersNative$1899);
        var cD$1908;
        if((cD$1908=$$jQueryAjaxSettingsBuilder.crossDomain)!==null){
            settings$1876.setCrossDomain(cD$1908);
        }
        settings$1876.setData($$jQueryAjaxSettingsBuilder.data);
        var dF$1909;
        if((dF$1909=$$jQueryAjaxSettingsBuilder.dataFilter)!==null){
            settings$1876.setDataFilter($$$cl1.$JsCallable(dF$1909,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}}));
        }
        var dataTypeS$1910=$$$cl1.String("",0);
        var setDataTypeS$1910=function(dataTypeS$1911){return dataTypeS$1910=dataTypeS$1911;};
        $prop$getDataTypeS$1910={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$an:function(){return[$$$cl1.variable()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','dataTypeS']};}};
        $prop$getDataTypeS$1910.get=function(){return dataTypeS$1910};
        $prop$getDataTypeS$1910.set=setDataTypeS$1910;
        if (setDataTypeS$1910.$$metamodel$$===undefined)setDataTypeS$1910.$$metamodel$$=$prop$getDataTypeS$1910.$$metamodel$$;
        var it$1912 = $$jQueryAjaxSettingsBuilder.dataType.iterator();
        var dT$1913;while ((dT$1913=it$1912.next())!==$$$cl1.getFinished()){
            (dataTypeS$1910=dataTypeS$1910.plus($$$cl1.String(" ",1).plus(dT$1913.string)));
        }
        settings$1876.setDataType(dataTypeS$1910);
        settings$1876.setError($$jQueryAjaxSettingsBuilder.error);
        settings$1876.setGlobal($$jQueryAjaxSettingsBuilder.global);
        var headersNative$1914;
        $prop$getHeadersNative$1914={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','headersNative']};}};
        $prop$getHeadersNative$1914.get=function(){return headersNative$1914};
        /*Begin dynamic block*/
        headersNative$1914=$$$cl1.Comprehension(function(){
            var it$1915=$$jQueryAjaxSettingsBuilder.headers.iterator();
            var key$1916,val$1917;
            var next$val$1917=function(){
                var entry$1918;
                if((entry$1918=it$1915.next())!==$$$cl1.getFinished()){
                    key$1916=entry$1918.key;
                    val$1917=entry$1918.item;
                    return entry$1918;
                }
                val$1917=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1917();
            return function(){
                if(val$1917!==undefined){
                    var key$1916$1919=key$1916;
                    var val$1917$1920=val$1917;
                    var tmpvar$1921=$$$cl1.Entry((tmpvar$1922=$$$cjl167.createJSString(key$1916$1919),$$$cl1.isOfType(tmpvar$1922,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1922:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'83:74-83:92','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1923=$$$cjl167.createJSString(val$1917$1920),$$$cl1.isOfType(tmpvar$1923,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1923:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'83:95-83:113','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}});
                    next$val$1917();
                    return tmpvar$1921;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSString}}}}).sequence;/*End dynamic block*/
        settings$1876.setHeaders(headersNative$1914);
        settings$1876.setIfModified($$jQueryAjaxSettingsBuilder.ifModified);
        var iL$1924;
        if((iL$1924=$$jQueryAjaxSettingsBuilder.isLocal)!==null){
            settings$1876.setIsLocal(iL$1924);
        }
        var settingsNative$1925=createJSONPSettings($$jQueryAjaxSettingsBuilder.jsonp.jsonp,$$jQueryAjaxSettingsBuilder.jsonp.jsonpCallback);
        $prop$getSettingsNative$1925={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:JSONPSettings}]},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','settingsNative']};}};
        $prop$getSettingsNative$1925.get=function(){return settingsNative$1925};
        var sN$1926;
        if((sN$1926=settingsNative$1925)!==null){
            settings$1876.setJsonp(sN$1926);
        }
        var jC$1927;
        if((jC$1927=$$jQueryAjaxSettingsBuilder.jsonpCallback)!==null){
            settings$1876.setJsonpCallback(jC$1927);
        }
        var mT$1928;
        if((mT$1928=$$jQueryAjaxSettingsBuilder.mimeType)!==null){
            settings$1876.setMimeType(mT$1928);
        }
        var p$1929;
        if((p$1929=$$jQueryAjaxSettingsBuilder.password)!==null){
            settings$1876.setPassword(p$1929);
        }
        settings$1876.setProcessData($$jQueryAjaxSettingsBuilder.processData);
        var sC$1930;
        if((sC$1930=$$jQueryAjaxSettingsBuilder.scriptCharset)!==null){
            settings$1876.setScriptCharset(sC$1930);
        }
        var statusCodeNative$1931;
        $prop$getStatusCodeNative$1931={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','statusCodeNative']};}};
        $prop$getStatusCodeNative$1931.get=function(){return statusCodeNative$1931};
        /*Begin dynamic block*/
        statusCodeNative$1931=$$$cl1.Comprehension(function(){
            var it$1932=$$jQueryAjaxSettingsBuilder.statusCode.iterator();
            var key$1933,val$1934;
            var next$val$1934=function(){
                var entry$1935;
                if((entry$1935=it$1932.next())!==$$$cl1.getFinished()){
                    key$1933=entry$1935.key;
                    val$1934=entry$1935.item;
                    return entry$1935;
                }
                val$1934=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1934();
            return function(){
                if(val$1934!==undefined){
                    var key$1933$1936=key$1933;
                    var val$1934$1937=val$1934;
                    var tmpvar$1938=$$$cl1.Entry((tmpvar$1939=$$$cjl167.createJSString(key$1933$1936),$$$cl1.isOfType(tmpvar$1939,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1939:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'109:139-109:157','jqueryajaxsettingsbuilder.ceylon')),$$$cl1.$JsCallable(val$1934$1937,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}),{Key:{t:$$$cjl167.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}});
                    next$val$1934();
                    return tmpvar$1938;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSNumber},Item:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}}).sequence;/*End dynamic block*/
        settings$1876.setStatusCode(statusCodeNative$1931);
        settings$1876.setSuccess($$jQueryAjaxSettingsBuilder.success);
        var t$1940;
        if((t$1940=$$jQueryAjaxSettingsBuilder.timeout)!==null){
            settings$1876.setTimeout(t$1940);
        }
        settings$1876.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1876.setType($$jQueryAjaxSettingsBuilder.type);
        settings$1876.setTraditional($$jQueryAjaxSettingsBuilder.traditional);
        settings$1876.setType($$jQueryAjaxSettingsBuilder.type);
        var u$1941;
        if((u$1941=$$jQueryAjaxSettingsBuilder.url)!==null){
            settings$1876.setUrl(u$1941);
        }
        var user$1942;
        if((user$1942=$$jQueryAjaxSettingsBuilder.username)!==null){
            settings$1876.setUsername(user$1942);
        }
        var x$1943;
        if((x$1943=$$jQueryAjaxSettingsBuilder.xhr)!==null){
            settings$1876.setXhr($$$cl1.$JsCallable(x$1943,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
        }
        var xhrFieldsNative$1944;
        $prop$getXhrFieldsNative$1944={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative','$at','xhrFieldsNative']};}};
        $prop$getXhrFieldsNative$1944.get=function(){return xhrFieldsNative$1944};
        /*Begin dynamic block*/
        xhrFieldsNative$1944=$$$cl1.Comprehension(function(){
            var it$1945=$$jQueryAjaxSettingsBuilder.xhrFields.iterator();
            var key$1946,val$1947;
            var next$val$1947=function(){
                var entry$1948;
                if((entry$1948=it$1945.next())!==$$$cl1.getFinished()){
                    key$1946=entry$1948.key;
                    val$1947=entry$1948.item;
                    return entry$1948;
                }
                val$1947=undefined;
                return $$$cl1.getFinished();
            }
            next$val$1947();
            return function(){
                if(val$1947!==undefined){
                    var key$1946$1949=key$1946;
                    var val$1947$1950=val$1947;
                    var tmpvar$1951=$$$cl1.Entry((tmpvar$1952=$$$cjl167.createJSString(key$1946$1949),$$$cl1.isOfType(tmpvar$1952,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1952:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'131:78-131:96','jqueryajaxsettingsbuilder.ceylon')),(tmpvar$1953=$$$cjl167.createJSString(val$1947$1950),$$$cl1.isOfType(tmpvar$1953,{/*NO PARENT*/t:$$$cl1.Anything})?tmpvar$1953:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'131:99-131:117','jqueryajaxsettingsbuilder.ceylon')),{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}});
                    next$val$1947();
                    return tmpvar$1951;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cjl167.JSString},Item:{t:$$$cjl167.JSObject}}}}).sequence;/*End dynamic block*/
        settings$1876.setXhrFields(xhrFieldsNative$1944);
        return settings$1876;
    }
    $$jQueryAjaxSettingsBuilder.toNative=toNative;
    toNative.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:JQueryAjaxSettings},$ps:[],$cont:JQueryAjaxSettingsBuilder,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder','$m','toNative']};};
    return $$jQueryAjaxSettingsBuilder;
}
JQueryAjaxSettingsBuilder.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryAjaxSettingsBuilder']};};
exports.JQueryAjaxSettingsBuilder=JQueryAjaxSettingsBuilder;
function $init$JQueryAjaxSettingsBuilder(){
    if (JQueryAjaxSettingsBuilder.$$===undefined){
        $$$cl1.initTypeProto(JQueryAjaxSettingsBuilder,'ceylon.js.jquery::JQueryAjaxSettingsBuilder',$$$cl1.Basic);
    }
    return JQueryAjaxSettingsBuilder;
}
exports.$init$JQueryAjaxSettingsBuilder=$init$JQueryAjaxSettingsBuilder;
$init$JQueryAjaxSettingsBuilder();
function JQueryEvent(n$1954, $$jQueryEvent){
    $init$JQueryEvent();
    if ($$jQueryEvent===undefined)$$jQueryEvent=new JQueryEvent.$$;
    $$jQueryEvent.n$1954_=n$1954;
    JQueryEventAbs($$jQueryEvent);
    $$$cl1.defineAttr($$jQueryEvent,'n$1954',function(){return this.n$1954_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,d:['ceylon.js.jquery','JQueryEvent','$at','n']};});
    $$jQueryEvent.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQueryEvent,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQueryEvent','$at','native']};}};
    /*Begin dynamic block*/
    $$jQueryEvent.$native=n$1954;/*End dynamic block*/
    return $$jQueryEvent;
}
JQueryEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQueryEventAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEvent']};};
exports.JQueryEvent=JQueryEvent;
function $init$JQueryEvent(){
    if (JQueryEvent.$$===undefined){
        $$$cl1.initTypeProto(JQueryEvent,'ceylon.js.jquery::JQueryEvent',JQueryEventAbs);
    }
    return JQueryEvent;
}
exports.$init$JQueryEvent=$init$JQueryEvent;
$init$JQueryEvent();
function JQueryEventAbs($$jQueryEventAbs){
    $init$JQueryEventAbs();
    if ($$jQueryEventAbs===undefined)$$jQueryEventAbs=new JQueryEventAbs.$$;
    $$$cjd401.EventAbs($$jQueryEventAbs);
    function data(){
        /*Begin dynamic block*/
        return (tmpvar$1955=$$jQueryEventAbs.$native.data,$$$cl1.isOfType(tmpvar$1955,{t:$$$cl1.Anything})?tmpvar$1955:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'15:10-15:20','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.data=data;
    data.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','data']};};
    function delegateTarget(){
        /*Begin dynamic block*/
        return $$$cjd401.Element($$jQueryEventAbs.$native.delegateTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.delegateTarget=delegateTarget;
    delegateTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd401.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','delegateTarget']};};
    function isDefaultPrevented(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isDefaultPrevented()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isDefaultPrevented=isDefaultPrevented;
    isDefaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isDefaultPrevented']};};
    function isImmediatePropogationStopped(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isImmediatePropogationStopped()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isImmediatePropogationStopped=isImmediatePropogationStopped;
    isImmediatePropogationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isImmediatePropogationStopped']};};
    function isPropagationStopped(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.isPropagationStopped()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.isPropagationStopped=isPropagationStopped;
    isPropagationStopped.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','isPropagationStopped']};};
    function namespace(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQueryEventAbs.$native.namespace);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.namespace=namespace;
    namespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','namespace']};};
    function relatedTarget(){
        /*Begin dynamic block*/
        return $$$cjd401.Element($$jQueryEventAbs.$native.relatedTarget);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.relatedTarget=relatedTarget;
    relatedTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd401.Element},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','relatedTarget']};};
    function result(){
        /*Begin dynamic block*/
        return (tmpvar$1956=$$jQueryEventAbs.$native.result,$$$cl1.isOfType(tmpvar$1956,{t:$$$cl1.Anything})?tmpvar$1956:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'69:10-69:22','jqueryevent.ceylon'));
        /*End dynamic block*/
    }
    $$jQueryEventAbs.result=result;
    result.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','result']};};
    function pageX(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryEventAbs.$native.pageX);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageX=pageX;
    pageX.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageX']};};
    function pageY(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryEventAbs.$native.pageY);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.pageY=pageY;
    pageY.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','pageY']};};
    function metaKey(){
        /*Begin dynamic block*/
        if($$jQueryEventAbs.$native.metaKey){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$jQueryEventAbs.metaKey=metaKey;
    metaKey.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','metaKey']};};
    function which(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQueryEventAbs.$native.which);
        /*End dynamic block*/
    }
    $$jQueryEventAbs.which=which;
    which.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQueryEventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQueryEventAbs','$m','which']};};
    return $$jQueryEventAbs;
}
JQueryEventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd401.EventAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQueryEventAbs']};};
exports.JQueryEventAbs=JQueryEventAbs;
function $init$JQueryEventAbs(){
    if (JQueryEventAbs.$$===undefined){
        $$$cl1.initTypeProto(JQueryEventAbs,'ceylon.js.jquery::JQueryEventAbs',$$$cjd401.EventAbs);
    }
    return JQueryEventAbs;
}
exports.$init$JQueryEventAbs=$init$JQueryEventAbs;
$init$JQueryEventAbs();
function JQXHR(n$1957, $$jQXHR){
    $init$JQXHR();
    if ($$jQXHR===undefined)$$jQXHR=new JQXHR.$$;
    $$jQXHR.n$1957_=n$1957;
    JQXHRAbs($$jQXHR);
    $$$cl1.defineAttr($$jQXHR,'n$1957',function(){return this.n$1957_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,d:['ceylon.js.jquery','JQXHR','$at','n']};});
    $$jQXHR.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:JQXHR,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','JQXHR','$at','native']};}};
    /*Begin dynamic block*/
    $$jQXHR.$native=n$1957;/*End dynamic block*/
    return $$jQXHR;
}
JQXHR.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:JQXHRAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHR']};};
exports.JQXHR=JQXHR;
function $init$JQXHR(){
    if (JQXHR.$$===undefined){
        $$$cl1.initTypeProto(JQXHR,'ceylon.js.jquery::JQXHR',JQXHRAbs);
    }
    return JQXHR;
}
exports.$init$JQXHR=$init$JQXHR;
$init$JQXHR();
function JQXHRAbs($$jQXHRAbs){
    $init$JQXHRAbs();
    if ($$jQXHRAbs===undefined)$$jQXHRAbs=new JQXHRAbs.$$;
    $$$cjl167.JSObjectAbs($$jQXHRAbs);
    var done=null;
    $$$cl1.defineAttr($$jQXHRAbs,'done',function(){return done;},function(done$1958){return done=done$1958;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','done']};});
    $$jQXHRAbs.$prop$getDone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','done']};}};
    $$jQXHRAbs.$prop$getDone.get=function(){return done};
    var fail=null;
    $$$cl1.defineAttr($$jQXHRAbs,'fail',function(){return fail;},function(fail$1959){return fail=fail$1959;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','fail']};});
    $$jQXHRAbs.$prop$getFail={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','fail']};}};
    $$jQXHRAbs.$prop$getFail.get=function(){return fail};
    var always=null;
    $$$cl1.defineAttr($$jQXHRAbs,'always',function(){return always;},function(always$1960){return always=always$1960;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','always']};});
    $$jQXHRAbs.$prop$getAlways={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.String},Element:{t:$$$cl1.Anything}}},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','always']};}};
    $$jQXHRAbs.$prop$getAlways.get=function(){return always};
    var doThen=null;
    $$$cl1.defineAttr($$jQXHRAbs,'doThen',function(){return doThen;},function(doThen$1961){return doThen=doThen$1961;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},First:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},Element:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','doThen']};});
    $$jQXHRAbs.$prop$getDoThen={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}},Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}}},First:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},Element:{ t:'u', l:[{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:JQXHR},Element:{t:JQXHR}}},First:{t:$$$cl1.String},Element:{ t:'u', l:[{t:$$$cl1.String},{t:JQXHR}]}}},First:{t:$$$cl1.Anything},Element:{ t:'u', l:[{t:$$$cl1.Anything},{t:JQXHR}]}}},Return:{t:$$$cl1.Anything}}},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}}},First:{t:JQXHR},Element:{ t:'u', l:[{t:JQXHR},{t:$$$cl1.Null},{t:$$$cl1.String}]}}},Return:{t:$$$cl1.Anything}}}]}}}]},$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.js.jquery','JQXHRAbs','$at','doThen']};}};
    $$jQXHRAbs.$prop$getDoThen.get=function(){return doThen};
    function overrideMimeType(mime$1962){
        
        var case$1963=mime$1962;
        if ($$$cl1.isOfType(mime$1962,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1963.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(mime$1962,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$jQXHRAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1963.$native);
            /*End dynamic block*/
        }
    }
    $$jQXHRAbs.overrideMimeType=overrideMimeType;
    overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','overrideMimeType']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$1964=$$jQXHRAbs.$native.readyState;
        $prop$getReadyState$1964={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$1964.get=function(){return readyState$1964};
        if((tmpvar$1965=readyState$1964,tmpvar$1966=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'35:21-35:34','jqxhr.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1965.equals&&tmpvar$1965.equals(tmpvar$1966))||tmpvar$1965===tmpvar$1966)){
            return $$$cjx1165.getReadyStateUnsent();
        }else {
            if((tmpvar$1967=readyState$1964,tmpvar$1968=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'37:28-37:41','jqxhr.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1967.equals&&tmpvar$1967.equals(tmpvar$1968))||tmpvar$1967===tmpvar$1968)){
                return $$$cjx1165.getReadyStateOpened();
            }else {
                if((tmpvar$1969=readyState$1964,tmpvar$1970=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'39:28-39:41','jqxhr.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1969.equals&&tmpvar$1969.equals(tmpvar$1970))||tmpvar$1969===tmpvar$1970)){
                    return $$$cjx1165.getReadyStateHeadersReceived();
                }else {
                    if((tmpvar$1971=readyState$1964,tmpvar$1972=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'41:28-41:41','jqxhr.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1971.equals&&tmpvar$1971.equals(tmpvar$1972))||tmpvar$1971===tmpvar$1972)){
                        return $$$cjx1165.getReadyStateLoading();
                    }else {
                        return (tmpvar$1973=(typeof readyStateDone==='undefined'||readyStateDone===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: readyStateDone")),'44:11-44:24','jqxhr.ceylon'):readyStateDone),$$$cl1.isOfType(tmpvar$1973,{t:$$$cl1.Anything})?tmpvar$1973:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'44:11-44:24','jqxhr.ceylon'));
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$jQXHRAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjx1165.ReadyState},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','readyState']};};
    function status(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQXHRAbs.$native.status);
        /*End dynamic block*/
    }
    $$jQXHRAbs.status=status;
    status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','status']};};
    function statusText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQXHRAbs.$native.statusText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusText=statusText;
    statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusText']};};
    function responseText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$jQXHRAbs.$native.responseText);
        /*End dynamic block*/
    }
    $$jQXHRAbs.responseText=responseText;
    responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseText']};};
    function responseXML(){
        /*Begin dynamic block*/
        var responseXML$1974=$$jQXHRAbs.$native.responseXML;
        $prop$getResponseXML$1974={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML','$at','responseXML']};}};
        $prop$getResponseXML$1974.get=function(){return responseXML$1974};
        if((tmpvar$1975=responseXML$1974,tmpvar$1976=null,(tmpvar$1975.equals&&!tmpvar$1975.equals(tmpvar$1976))||tmpvar$1975!==tmpvar$1976)){
            return $$$cjd401.Document(responseXML$1974);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.responseXML=responseXML;
    responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Document}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','responseXML']};};
    function setRequestHeader(header$1977,val$1978){
        
        var case$1979=header$1977;
        if ($$$cl1.isOfType(header$1977,{t:$$$cl1.String})) {
            
            var case$1980=val$1978;
            if ($$$cl1.isOfType(val$1978,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1979.valueOf()/*NULL PARAM!*/,case$1980.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1978,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1979.valueOf()/*NULL PARAM!*/,case$1980.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(header$1977,{t:$$$cjl167.JSString})) {
            
            var case$1981=val$1978;
            if ($$$cl1.isOfType(val$1978,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1979.$native/*NULL PARAM!*/,case$1981.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1978,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$jQXHRAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1979.$native/*NULL PARAM!*/,case$1981.$native);
                /*End dynamic block*/
            }
        }
    }
    $$jQXHRAbs.setRequestHeader=setRequestHeader;
    setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','setRequestHeader']};};
    function getAllResponseHeaders(){
        /*Begin dynamic block*/
        var rheaders$1982=$$jQXHRAbs.$native.getAllResponseHeaders();
        $prop$getRheaders$1982={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
        $prop$getRheaders$1982.get=function(){return rheaders$1982};
        if((tmpvar$1983=rheaders$1982,tmpvar$1984=null,(tmpvar$1983.equals&&!tmpvar$1983.equals(tmpvar$1984))||tmpvar$1983!==tmpvar$1984)){
            return $$$cjl167.JSString(rheaders$1982);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getAllResponseHeaders=getAllResponseHeaders;
    getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getAllResponseHeaders']};};
    function getResponseHeader(header$1985){
        /*Begin dynamic block*/
        var rheader$1986;
        $prop$getRheader$1986={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader','$at','rheader']};}};
        $prop$getRheader$1986.get=function(){return rheader$1986};
        
        var case$1987=header$1985;
        if ($$$cl1.isOfType(header$1985,{t:$$$cl1.String})) {
            rheader$1986=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1987.valueOf());
        }else if ($$$cl1.isOfType(header$1985,{t:$$$cjl167.JSString})) {
            rheader$1986=$$jQXHRAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1987.$native);
        }if((tmpvar$1988=rheader$1986,tmpvar$1989=null,(tmpvar$1988.equals&&!tmpvar$1988.equals(tmpvar$1989))||tmpvar$1988!==tmpvar$1989)){
            return $$$cjl167.JSString(rheader$1986);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$jQXHRAbs.getResponseHeader=getResponseHeader;
    getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','getResponseHeader']};};
    function abort(){
        /*Begin dynamic block*/
        $$jQXHRAbs.$native.abort();
        /*End dynamic block*/
    }
    $$jQXHRAbs.abort=abort;
    abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','abort']};};
    function statusCode(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$jQXHRAbs.$native.statusCode());
        /*End dynamic block*/
    }
    $$jQXHRAbs.statusCode=statusCode;
    statusCode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:JQXHRAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','JQXHRAbs','$m','statusCode']};};
    return $$jQXHRAbs;
}
JQXHRAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','JQXHRAbs']};};
exports.JQXHRAbs=JQXHRAbs;
function $init$JQXHRAbs(){
    if (JQXHRAbs.$$===undefined){
        $$$cl1.initTypeProto(JQXHRAbs,'ceylon.js.jquery::JQXHRAbs',$$$cjl167.JSObjectAbs);
    }
    return JQXHRAbs;
}
exports.$init$JQXHRAbs=$init$JQXHRAbs;
$init$JQXHRAbs();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on jQuery 1.10.X and 2.0.X",32))];};
exports.$pkg$ans$ceylon$js$jquery=function(){return[$$$cl1.shared()];};
function Promise(n$1990, $$promise){
    $init$Promise();
    if ($$promise===undefined)$$promise=new Promise.$$;
    $$promise.n$1990_=n$1990;
    PromiseAbs($$promise);
    $$$cl1.defineAttr($$promise,'n$1990',function(){return this.n$1990_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,d:['ceylon.js.jquery','Promise','$at','n']};});
    $$promise.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Promise,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Promise','$at','native']};}};
    /*Begin dynamic block*/
    $$promise.$native=n$1990;/*End dynamic block*/
    return $$promise;
}
Promise.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:PromiseAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Promise']};};
exports.Promise=Promise;
function $init$Promise(){
    if (Promise.$$===undefined){
        $$$cl1.initTypeProto(Promise,'ceylon.js.jquery::Promise',PromiseAbs);
    }
    return Promise;
}
exports.$init$Promise=$init$Promise;
$init$Promise();
function PromiseAbs($$promiseAbs){
    $init$PromiseAbs();
    if ($$promiseAbs===undefined)$$promiseAbs=new PromiseAbs.$$;
    $$$cjl167.JSObjectAbs($$promiseAbs);
    function always(alwaysCallbacks$1991){
        if(alwaysCallbacks$1991===undefined){alwaysCallbacks$1991=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.always(/*NULL PARAM!*/alwaysCallbacks$1991));
        /*End dynamic block*/
    }
    $$promiseAbs.always=always;
    always.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'alwaysCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','always']};};
    function done(doneCallbacks$1992){
        if(doneCallbacks$1992===undefined){doneCallbacks$1992=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.done(/*NULL PARAM!*/doneCallbacks$1992));
        /*End dynamic block*/
    }
    $$promiseAbs.done=done;
    done.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','done']};};
    function fail(failCallbacks$1993){
        if(failCallbacks$1993===undefined){failCallbacks$1993=$$$cl1.getEmpty();}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.fail(/*NULL PARAM!*/failCallbacks$1993));
        /*End dynamic block*/
    }
    $$promiseAbs.fail=fail;
    fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'failCallbacks',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}}},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','fail']};};
    $$promiseAbs.thenFilter$defs$failFilter=function(doneFilter$1994,failFilter$1995,progressFilter$1996){return null;};
    $$promiseAbs.thenFilter$defs$progressFilter=function(doneFilter$1994,failFilter$1995,progressFilter$1996){return null;};
    function thenFilter(doneFilter$1994,failFilter$1995,progressFilter$1996){
        if(failFilter$1995===undefined){failFilter$1995=$$promiseAbs.thenFilter$defs$failFilter(doneFilter$1994,failFilter$1995,progressFilter$1996);}
        if(progressFilter$1996===undefined){progressFilter$1996=$$promiseAbs.thenFilter$defs$progressFilter(doneFilter$1994,failFilter$1995,progressFilter$1996);}
        /*Begin dynamic block*/
        return Promise($$promiseAbs.$native.then(/*NULL PARAM!*/$$$cl1.$JsCallable(doneFilter$1994,[],{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,failFilter$1995/*NULL PARAM!*/,progressFilter$1996));
        /*End dynamic block*/
    }
    $$promiseAbs.thenFilter=thenFilter;
    thenFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Promise},$ps:[{$nm:'doneFilter',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}},{$nm:'failFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}},{$nm:'progressFilter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}}}]},$an:function(){return[];}}],$cont:PromiseAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','PromiseAbs','$m','thenFilter']};};
    return $$promiseAbs;
}
PromiseAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','PromiseAbs']};};
exports.PromiseAbs=PromiseAbs;
function $init$PromiseAbs(){
    if (PromiseAbs.$$===undefined){
        $$$cl1.initTypeProto(PromiseAbs,'ceylon.js.jquery::PromiseAbs',$$$cjl167.JSObjectAbs);
    }
    return PromiseAbs;
}
exports.$init$PromiseAbs=$init$PromiseAbs;
$init$PromiseAbs();
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.jquery`.",34))];},d:['ceylon.js.jquery','run']};};
function Tween(n$1997, $$tween){
    $init$Tween();
    if ($$tween===undefined)$$tween=new Tween.$$;
    $$tween.n$1997_=n$1997;
    TweenAbs($$tween);
    $$$cl1.defineAttr($$tween,'n$1997',function(){return this.n$1997_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,d:['ceylon.js.jquery','Tween','$at','n']};});
    $$tween.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Tween,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.jquery','Tween','$at','native']};}};
    /*Begin dynamic block*/
    $$tween.$native=n$1997;/*End dynamic block*/
    return $$tween;
}
Tween.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TweenAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','Tween']};};
exports.Tween=Tween;
function $init$Tween(){
    if (Tween.$$===undefined){
        $$$cl1.initTypeProto(Tween,'ceylon.js.jquery::Tween',TweenAbs);
    }
    return Tween;
}
exports.$init$Tween=$init$Tween;
$init$Tween();
function TweenAbs($$tweenAbs){
    $init$TweenAbs();
    if ($$tweenAbs===undefined)$$tweenAbs=new TweenAbs.$$;
    $$$cjl167.JSObjectAbs($$tweenAbs);
    function getInterval(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$tweenAbs.$native.interval);
        /*End dynamic block*/
    }
    $$tweenAbs.getInterval=getInterval;
    getInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getInterval']};};
    function test(test$1998){
        if(test$1998===undefined){test$1998=$$$cl1.getEmpty();}
    }
    $$tweenAbs.test=test;
    test.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','test']};};
    function setInterval(interval$1999){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=interval$1999;
        /*End dynamic block*/
    }
    $$tweenAbs.setInterval=setInterval;
    setInterval.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'interval',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setInterval']};};
    function getOff(){
        /*Begin dynamic block*/
        if($$tweenAbs.$native.off){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$tweenAbs.getOff=getOff;
    getOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','getOff']};};
    function setOff(off$2000){
        /*Begin dynamic block*/
        $$tweenAbs.$native.interval=(typeof interval==='undefined'||interval===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: interval")),'40:21-40:28','tween.ceylon'):interval);
        /*End dynamic block*/
    }
    $$tweenAbs.setOff=setOff;
    setOff.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'off',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:TweenAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.jquery','TweenAbs','$m','setOff']};};
    return $$tweenAbs;
}
TweenAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.jquery','TweenAbs']};};
exports.TweenAbs=TweenAbs;
function $init$TweenAbs(){
    if (TweenAbs.$$===undefined){
        $$$cl1.initTypeProto(TweenAbs,'ceylon.js.jquery::TweenAbs',$$$cjl167.JSObjectAbs);
    }
    return TweenAbs;
}
exports.$init$TweenAbs=$init$TweenAbs;
$init$TweenAbs();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
