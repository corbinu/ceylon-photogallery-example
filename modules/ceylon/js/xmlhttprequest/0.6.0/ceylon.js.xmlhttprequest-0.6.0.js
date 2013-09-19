(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.js.file\/1.0.0","ceylon.js.dom\/4.0.0","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.xmlhttprequest","$mod-version":"0.6.0","ceylon.js.xmlhttprequest":{"arraybuffer":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"arraybuffer"},"readyStateHeadersReceived":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateHeadersReceived"},"XMLHttpRequestOptions":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$an":{"shared":[]},"$nm":"anon"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"anon":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"anon"}},"$nm":"XMLHttpRequestOptions"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.xmlhttprequest`."]},"$nm":"run"},"$pkg-shared":"1","document":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"document"},"XMLHttpRequest":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequest"},"XMLHttpRequestUpload":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUploadAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestUpload"},"json":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"json"},"XMLHttpRequestEventTarget":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"XMLHttpRequestEventTarget"},"createFormData":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"HTMLFormElement"}]},"$mt":"prm","$def":"1","$nm":"form"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createFormData"},"readyStateUnsent":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateUnsent"},"ReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateUnsent"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateOpened"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateHeadersReceived"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateLoading"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"readyStateDone"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"num"}},"$nm":"ReadyState"},"FormDataAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"append":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"append"},"appendBlob":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},"$mt":"prm","$nm":"val"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"filename"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendBlob"}},"$nm":"FormDataAbs"},"text":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"text"},"blank":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blank"},"readyStateLoading":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateLoading"},"readyStateOpened":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateOpened"},"FormData":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"FormData"},"readyStateDone":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"readyStateDone"},"XMLHttpRequestEventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setOnprogress":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnprogress"},"getOnload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnload"},"setOnloadend":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadend"},"getOnloadend":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadend"},"setOnloadstart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnloadstart"},"getOntimeout":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOntimeout"},"setOnerror":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnerror"},"setOntimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOntimeout"},"getOnerror":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnerror"},"getOnloadstart":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnloadstart"},"getOnprogress":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnprogress"},"getOnabort":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnabort"},"setOnabort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnabort"},"setOnload":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnload"}},"$nm":"XMLHttpRequestEventTargetAbs"},"XMLHttpRequestResponseType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.xmlhttprequest","$nm":"blank"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"arraybuffer"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"blob"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"document"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"json"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"text"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"XMLHttpRequestResponseType"},"blob":{"super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"obj","$an":{"shared":[]},"$nm":"blob"},"createXMLHttpRequest":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequest"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestOptions"}]},"$mt":"prm","$def":"1","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createXMLHttpRequest"},"XMLHttpRequestUploadAbs":{"abstract":"1","super":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestEventTargetAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"XMLHttpRequestUploadAbs"},"XMLHttpRequestAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"setResponseType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"prm","$nm":"responseType"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setResponseType"},"getWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWithCredentials"},"getAllResponseHeaders":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAllResponseHeaders"},"send":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.js.file","$pk":"ceylon.js.file","$nm":"Blob"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.xmlhttprequest","$nm":"FormData"}]}]},"$mt":"prm","$def":"1","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"send"},"responseXML":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Document"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseXML"},"status":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"status"},"getOnreadystatechange":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[],"doc":["returns a function Anything(Event event)"]},"$nm":"getOnreadystatechange"},"responseText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"responseText"},"statusText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"statusText"},"readyState":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"ReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"overrideMimeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"mime"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"overrideMimeType"},"upload":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestUpload"},"$mt":"mthd","$an":{"shared":[]},"$nm":"upload"},"response":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"response"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"method"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"url"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"async"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"user"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$def":"1","$nm":"password"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"getResponseHeader":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseHeader"},"setRequestHeader":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"header"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setRequestHeader"},"getTimeout":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTimeout"},"getResponseType":{"$t":{"$pk":"ceylon.js.xmlhttprequest","$nm":"XMLHttpRequestResponseType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getResponseType"},"setTimeout":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"timeout"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTimeout"},"setOnreadystatechange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"handler"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"handler":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.js.dom","$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"handler"}},"$nm":"setOnreadystatechange"},"setWithCredentials":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"credentials"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setWithCredentials"},"abort":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"abort"}},"$nm":"XMLHttpRequestAbs"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
var $$$cjf974=require('ceylon/js/file/1.0.0/ceylon.js.file-1.0.0');
$$$cl1.$addmod$($$$cjf974,'ceylon.js.file/1.0.0');
var $$$cjh462=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cjh462,'ceylon.js.html/5.0.0');
function createFormData(form$975){
    if(form$975===undefined){form$975=null;}
    /*Begin dynamic block*/
    return FormData((typeof FormData==='undefined'||FormData===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: FormData")),'7:18-7:25','formdata.ceylon'):FormData)(/*NULL PARAM!*/(typeof f==='undefined'||f===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: f")),'7:29-7:29','formdata.ceylon'):f)));
    /*End dynamic block*/
}
exports.createFormData=createFormData;
createFormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:FormData},$ps:[{$nm:'form',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjh462.HTMLFormElement}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','createFormData']};};
function FormData(n$976, $$formData){
    $init$FormData();
    if ($$formData===undefined)$$formData=new FormData.$$;
    $$formData.n$976_=n$976;
    FormDataAbs($$formData);
    $$$cl1.defineAttr($$formData,'n$976',function(){return this.n$976_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,d:['ceylon.js.xmlhttprequest','FormData','$at','n']};});
    $$formData.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:FormData,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','FormData','$at','native']};}};
    /*Begin dynamic block*/
    $$formData.$native=n$976;/*End dynamic block*/
    return $$formData;
}
FormData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:FormDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormData']};};
exports.FormData=FormData;
function $init$FormData(){
    if (FormData.$$===undefined){
        $$$cl1.initTypeProto(FormData,'ceylon.js.xmlhttprequest::FormData',FormDataAbs);
    }
    return FormData;
}
exports.$init$FormData=$init$FormData;
$init$FormData();
function FormDataAbs($$formDataAbs){
    $init$FormDataAbs();
    if ($$formDataAbs===undefined)$$formDataAbs=new FormDataAbs.$$;
    $$$cjl167.JSObjectAbs($$formDataAbs);
    function append(name$977,val$978){
        
        var case$979=name$977;
        if ($$$cl1.isOfType(name$977,{t:$$$cl1.String})) {
            
            var case$980=val$978;
            if ($$$cl1.isOfType(val$978,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$979.valueOf()/*NULL PARAM!*/,case$980.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$978,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$979.valueOf()/*NULL PARAM!*/,case$980.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$977,{t:$$$cjl167.JSString})) {
            
            var case$981=val$978;
            if ($$$cl1.isOfType(val$978,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$979.$native/*NULL PARAM!*/,case$981.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$978,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$979.$native/*NULL PARAM!*/,case$981.$native);
                /*End dynamic block*/
            }
        }
    }
    $$formDataAbs.append=append;
    append.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','append']};};
    function appendBlob(name$982,val$983,filename$984){
        
        var case$985=name$982;
        if ($$$cl1.isOfType(name$982,{t:$$$cl1.String})) {
            
            var case$986=filename$984;
            if ($$$cl1.isOfType(filename$984,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.valueOf()/*NULL PARAM!*/,val$983.$native/*NULL PARAM!*/,case$986.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$984,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.valueOf()/*NULL PARAM!*/,val$983.$native/*NULL PARAM!*/,case$986.$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$984,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.valueOf()/*NULL PARAM!*/,val$983.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$982,{t:$$$cjl167.JSString})) {
            
            var case$987=filename$984;
            if ($$$cl1.isOfType(filename$984,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.$native/*NULL PARAM!*/,val$983.$native/*NULL PARAM!*/,case$987.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$984,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.$native/*NULL PARAM!*/,val$983.$native/*NULL PARAM!*/,case$987.$native);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(filename$984,{t:$$$cl1.Null})) {
                /*Begin dynamic block*/
                $$formDataAbs.$native.append(/*NULL PARAM!*/case$985.$native/*NULL PARAM!*/,val$983.$native);
                /*End dynamic block*/
            }
        }
    }
    $$formDataAbs.appendBlob=appendBlob;
    appendBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{t:$$$cjf974.Blob},$an:function(){return[];}},{$nm:'filename',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}}],$cont:FormDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','FormDataAbs','$m','appendBlob']};};
    return $$formDataAbs;
}
FormDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','FormDataAbs']};};
exports.FormDataAbs=FormDataAbs;
function $init$FormDataAbs(){
    if (FormDataAbs.$$===undefined){
        $$$cl1.initTypeProto(FormDataAbs,'ceylon.js.xmlhttprequest::FormDataAbs',$$$cjl167.JSObjectAbs);
    }
    return FormDataAbs;
}
exports.$init$FormDataAbs=$init$FormDataAbs;
$init$FormDataAbs();
exports.$mod$ans$=[];
exports.$pkg$ans$ceylon$js$xmlhttprequest=function(){return[$$$cl1.shared()];};
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.xmlhttprequest`.",42))];},d:['ceylon.js.xmlhttprequest','run']};};
var $$$cjd401=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd401,'ceylon.js.dom/4.0.0');
var $$$cjj672=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj672,'ceylon.js.json/1.0.0');
function XMLHttpRequestResponseType(name$988, $$xMLHttpRequestResponseType){
    $init$XMLHttpRequestResponseType();
    if ($$xMLHttpRequestResponseType===undefined)$$xMLHttpRequestResponseType=new XMLHttpRequestResponseType.$$;
    $$xMLHttpRequestResponseType.name$988_=name$988;
    $$$cl1.defineAttr($$xMLHttpRequestResponseType,'name$988',function(){return this.name$988_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:XMLHttpRequestResponseType,d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType','$at','name']};});
    return $$xMLHttpRequestResponseType;
}
XMLHttpRequestResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestResponseType']};};
exports.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
    if (XMLHttpRequestResponseType.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestResponseType,'ceylon.js.xmlhttprequest::XMLHttpRequestResponseType',$$$cl1.Basic);
    }
    return XMLHttpRequestResponseType;
}
exports.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();
function blank$989(){
    var $$blank=new blank$989.$$;
    XMLHttpRequestResponseType($$$cl1.String("",0),$$blank);
    return $$blank;
}
function $init$blank$989(){
    if (blank$989.$$===undefined){
        $$$cl1.initTypeProto(blank$989,'ceylon.js.xmlhttprequest::blank',XMLHttpRequestResponseType);
    }
    return blank$989;
}
exports.$init$blank$989=$init$blank$989;
$init$blank$989();
var blank$990=blank$989();
var getBlank=function(){
    return blank$990;
}
exports.getBlank=getBlank;
getBlank.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blank$989},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','blank']};};
$prop$getBlank={get:getBlank,$$metamodel$$:getBlank.$$metamodel$$};
exports.$prop$getBlank=$prop$getBlank;
function arraybuffer$991(){
    var $$arraybuffer=new arraybuffer$991.$$;
    XMLHttpRequestResponseType($$$cl1.String("arraybuffer",11),$$arraybuffer);
    return $$arraybuffer;
}
function $init$arraybuffer$991(){
    if (arraybuffer$991.$$===undefined){
        $$$cl1.initTypeProto(arraybuffer$991,'ceylon.js.xmlhttprequest::arraybuffer',XMLHttpRequestResponseType);
    }
    return arraybuffer$991;
}
exports.$init$arraybuffer$991=$init$arraybuffer$991;
$init$arraybuffer$991();
var arraybuffer$992=arraybuffer$991();
var getArraybuffer=function(){
    return arraybuffer$992;
}
exports.getArraybuffer=getArraybuffer;
getArraybuffer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:arraybuffer$991},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','arraybuffer']};};
$prop$getArraybuffer={get:getArraybuffer,$$metamodel$$:getArraybuffer.$$metamodel$$};
exports.$prop$getArraybuffer=$prop$getArraybuffer;
function blob$993(){
    var $$blob=new blob$993.$$;
    XMLHttpRequestResponseType($$$cl1.String("blob",4),$$blob);
    return $$blob;
}
function $init$blob$993(){
    if (blob$993.$$===undefined){
        $$$cl1.initTypeProto(blob$993,'ceylon.js.xmlhttprequest::blob',XMLHttpRequestResponseType);
    }
    return blob$993;
}
exports.$init$blob$993=$init$blob$993;
$init$blob$993();
var blob$994=blob$993();
var getBlob=function(){
    return blob$994;
}
exports.getBlob=getBlob;
getBlob.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:blob$993},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','blob']};};
$prop$getBlob={get:getBlob,$$metamodel$$:getBlob.$$metamodel$$};
exports.$prop$getBlob=$prop$getBlob;
function document$995(){
    var $$document=new document$995.$$;
    XMLHttpRequestResponseType($$$cl1.String("document",8),$$document);
    return $$document;
}
function $init$document$995(){
    if (document$995.$$===undefined){
        $$$cl1.initTypeProto(document$995,'ceylon.js.xmlhttprequest::document',XMLHttpRequestResponseType);
    }
    return document$995;
}
exports.$init$document$995=$init$document$995;
$init$document$995();
var document$996=document$995();
var getDocument=function(){
    return document$996;
}
exports.getDocument=getDocument;
getDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:document$995},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','document']};};
$prop$getDocument={get:getDocument,$$metamodel$$:getDocument.$$metamodel$$};
exports.$prop$getDocument=$prop$getDocument;
function json$997(){
    var $$json=new json$997.$$;
    XMLHttpRequestResponseType($$$cl1.String("json",4),$$json);
    return $$json;
}
function $init$json$997(){
    if (json$997.$$===undefined){
        $$$cl1.initTypeProto(json$997,'ceylon.js.xmlhttprequest::json',XMLHttpRequestResponseType);
    }
    return json$997;
}
exports.$init$json$997=$init$json$997;
$init$json$997();
var json$998=json$997();
var getJson=function(){
    return json$998;
}
exports.getJson=getJson;
getJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:json$997},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','json']};};
$prop$getJson={get:getJson,$$metamodel$$:getJson.$$metamodel$$};
exports.$prop$getJson=$prop$getJson;
function text$999(){
    var $$text=new text$999.$$;
    XMLHttpRequestResponseType($$$cl1.String("text",4),$$text);
    return $$text;
}
function $init$text$999(){
    if (text$999.$$===undefined){
        $$$cl1.initTypeProto(text$999,'ceylon.js.xmlhttprequest::text',XMLHttpRequestResponseType);
    }
    return text$999;
}
exports.$init$text$999=$init$text$999;
$init$text$999();
var text$1000=text$999();
var getText=function(){
    return text$1000;
}
exports.getText=getText;
getText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:text$999},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','text']};};
$prop$getText={get:getText,$$metamodel$$:getText.$$metamodel$$};
exports.$prop$getText=$prop$getText;
function ReadyState(num$1001, $$readyState){
    $init$ReadyState();
    if ($$readyState===undefined)$$readyState=new ReadyState.$$;
    $$readyState.num$1001_=num$1001;
    $$$cl1.defineAttr($$readyState,'num$1001',function(){return this.num$1001_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadyState,d:['ceylon.js.xmlhttprequest','ReadyState','$at','num']};});
    return $$readyState;
}
ReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','ReadyState']};};
exports.ReadyState=ReadyState;
function $init$ReadyState(){
    if (ReadyState.$$===undefined){
        $$$cl1.initTypeProto(ReadyState,'ceylon.js.xmlhttprequest::ReadyState',$$$cl1.Basic);
    }
    return ReadyState;
}
exports.$init$ReadyState=$init$ReadyState;
$init$ReadyState();
function readyStateUnsent$1002(){
    var $$readyStateUnsent=new readyStateUnsent$1002.$$;
    ReadyState((0),$$readyStateUnsent);
    return $$readyStateUnsent;
}
function $init$readyStateUnsent$1002(){
    if (readyStateUnsent$1002.$$===undefined){
        $$$cl1.initTypeProto(readyStateUnsent$1002,'ceylon.js.xmlhttprequest::readyStateUnsent',ReadyState);
    }
    return readyStateUnsent$1002;
}
exports.$init$readyStateUnsent$1002=$init$readyStateUnsent$1002;
$init$readyStateUnsent$1002();
var readyStateUnsent$1003=readyStateUnsent$1002();
var getReadyStateUnsent=function(){
    return readyStateUnsent$1003;
}
exports.getReadyStateUnsent=getReadyStateUnsent;
getReadyStateUnsent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateUnsent$1002},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateUnsent']};};
$prop$getReadyStateUnsent={get:getReadyStateUnsent,$$metamodel$$:getReadyStateUnsent.$$metamodel$$};
exports.$prop$getReadyStateUnsent=$prop$getReadyStateUnsent;
function readyStateOpened$1004(){
    var $$readyStateOpened=new readyStateOpened$1004.$$;
    ReadyState((1),$$readyStateOpened);
    return $$readyStateOpened;
}
function $init$readyStateOpened$1004(){
    if (readyStateOpened$1004.$$===undefined){
        $$$cl1.initTypeProto(readyStateOpened$1004,'ceylon.js.xmlhttprequest::readyStateOpened',ReadyState);
    }
    return readyStateOpened$1004;
}
exports.$init$readyStateOpened$1004=$init$readyStateOpened$1004;
$init$readyStateOpened$1004();
var readyStateOpened$1005=readyStateOpened$1004();
var getReadyStateOpened=function(){
    return readyStateOpened$1005;
}
exports.getReadyStateOpened=getReadyStateOpened;
getReadyStateOpened.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateOpened$1004},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateOpened']};};
$prop$getReadyStateOpened={get:getReadyStateOpened,$$metamodel$$:getReadyStateOpened.$$metamodel$$};
exports.$prop$getReadyStateOpened=$prop$getReadyStateOpened;
function readyStateHeadersReceived$1006(){
    var $$readyStateHeadersReceived=new readyStateHeadersReceived$1006.$$;
    ReadyState((2),$$readyStateHeadersReceived);
    return $$readyStateHeadersReceived;
}
function $init$readyStateHeadersReceived$1006(){
    if (readyStateHeadersReceived$1006.$$===undefined){
        $$$cl1.initTypeProto(readyStateHeadersReceived$1006,'ceylon.js.xmlhttprequest::readyStateHeadersReceived',ReadyState);
    }
    return readyStateHeadersReceived$1006;
}
exports.$init$readyStateHeadersReceived$1006=$init$readyStateHeadersReceived$1006;
$init$readyStateHeadersReceived$1006();
var readyStateHeadersReceived$1007=readyStateHeadersReceived$1006();
var getReadyStateHeadersReceived=function(){
    return readyStateHeadersReceived$1007;
}
exports.getReadyStateHeadersReceived=getReadyStateHeadersReceived;
getReadyStateHeadersReceived.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateHeadersReceived$1006},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateHeadersReceived']};};
$prop$getReadyStateHeadersReceived={get:getReadyStateHeadersReceived,$$metamodel$$:getReadyStateHeadersReceived.$$metamodel$$};
exports.$prop$getReadyStateHeadersReceived=$prop$getReadyStateHeadersReceived;
function readyStateLoading$1008(){
    var $$readyStateLoading=new readyStateLoading$1008.$$;
    ReadyState((3),$$readyStateLoading);
    return $$readyStateLoading;
}
function $init$readyStateLoading$1008(){
    if (readyStateLoading$1008.$$===undefined){
        $$$cl1.initTypeProto(readyStateLoading$1008,'ceylon.js.xmlhttprequest::readyStateLoading',ReadyState);
    }
    return readyStateLoading$1008;
}
exports.$init$readyStateLoading$1008=$init$readyStateLoading$1008;
$init$readyStateLoading$1008();
var readyStateLoading$1009=readyStateLoading$1008();
var getReadyStateLoading=function(){
    return readyStateLoading$1009;
}
exports.getReadyStateLoading=getReadyStateLoading;
getReadyStateLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateLoading$1008},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateLoading']};};
$prop$getReadyStateLoading={get:getReadyStateLoading,$$metamodel$$:getReadyStateLoading.$$metamodel$$};
exports.$prop$getReadyStateLoading=$prop$getReadyStateLoading;
function readyStateDone$1010(){
    var $$readyStateDone=new readyStateDone$1010.$$;
    ReadyState((4),$$readyStateDone);
    return $$readyStateDone;
}
function $init$readyStateDone$1010(){
    if (readyStateDone$1010.$$===undefined){
        $$$cl1.initTypeProto(readyStateDone$1010,'ceylon.js.xmlhttprequest::readyStateDone',ReadyState);
    }
    return readyStateDone$1010;
}
exports.$init$readyStateDone$1010=$init$readyStateDone$1010;
$init$readyStateDone$1010();
var readyStateDone$1011=readyStateDone$1010();
var getReadyStateDone=function(){
    return readyStateDone$1011;
}
exports.getReadyStateDone=getReadyStateDone;
getReadyStateDone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:readyStateDone$1010},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','readyStateDone']};};
$prop$getReadyStateDone={get:getReadyStateDone,$$metamodel$$:getReadyStateDone.$$metamodel$$};
exports.$prop$getReadyStateDone=$prop$getReadyStateDone;
function XMLHttpRequestOptions(anon, $$xMLHttpRequestOptions){
    $init$XMLHttpRequestOptions();
    if ($$xMLHttpRequestOptions===undefined)$$xMLHttpRequestOptions=new XMLHttpRequestOptions.$$;
    if(anon===undefined){anon=false;}
    $$xMLHttpRequestOptions.anon_=anon;
    $$$cl1.defineAttr($$xMLHttpRequestOptions,'anon',function(){return this.anon_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$at','anon']};});
    function toJson(){
        var json$1012=(values$1013=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("anon",4),$$xMLHttpRequestOptions.anon,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cjj672.JSON(values$1013));
        $prop$getJson$1012={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSON},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson','$at','json']};}};
        $prop$getJson$1012.get=function(){return json$1012};
        var values$1013;
        return json$1012.toJson();
    }
    $$xMLHttpRequestOptions.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSJSON},$ps:[],$cont:XMLHttpRequestOptions,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions','$m','toJson']};};
    return $$xMLHttpRequestOptions;
}
XMLHttpRequestOptions.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestOptions']};};
exports.XMLHttpRequestOptions=XMLHttpRequestOptions;
function $init$XMLHttpRequestOptions(){
    if (XMLHttpRequestOptions.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestOptions,'ceylon.js.xmlhttprequest::XMLHttpRequestOptions',$$$cl1.Basic);
    }
    return XMLHttpRequestOptions;
}
exports.$init$XMLHttpRequestOptions=$init$XMLHttpRequestOptions;
$init$XMLHttpRequestOptions();
function createXMLHttpRequest(options$1014){
    if(options$1014===undefined){options$1014=null;}
    var o$1015;
    if((o$1015=options$1014)!==null){
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'34:25-34:38','xmlhttprequest.ceylon'):XMLHttpRequest)(/*NULL PARAM!*/$$$cl1.$JsCallable((opt$1016=o$1015,$$$cl1.JsCallable(opt$1016,opt$1016!==null?opt$1016.toJson:null)),[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cjj672.JSJSON}})));
        /*End dynamic block*/
        var opt$1016;
    }else {
        /*Begin dynamic block*/
        return XMLHttpRequest((typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'38:25-38:38','xmlhttprequest.ceylon'):XMLHttpRequest)());
        /*End dynamic block*/
    }
}
exports.createXMLHttpRequest=createXMLHttpRequest;
createXMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequest},$ps:[{$nm:'options',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:XMLHttpRequestOptions}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','createXMLHttpRequest']};};
function XMLHttpRequest(n$1017, $$xMLHttpRequest){
    $init$XMLHttpRequest();
    if ($$xMLHttpRequest===undefined)$$xMLHttpRequest=new XMLHttpRequest.$$;
    $$xMLHttpRequest.n$1017_=n$1017;
    XMLHttpRequestAbs($$xMLHttpRequest);
    $$$cl1.defineAttr($$xMLHttpRequest,'n$1017',function(){return this.n$1017_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','n']};});
    $$xMLHttpRequest.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequest,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequest.$native=n$1017;/*End dynamic block*/
    return $$xMLHttpRequest;
}
XMLHttpRequest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequest']};};
exports.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
    if (XMLHttpRequest.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequest,'ceylon.js.xmlhttprequest::XMLHttpRequest',XMLHttpRequestAbs);
    }
    return XMLHttpRequest;
}
exports.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
function XMLHttpRequestAbs($$xMLHttpRequestAbs){
    $init$XMLHttpRequestAbs();
    if ($$xMLHttpRequestAbs===undefined)$$xMLHttpRequestAbs=new XMLHttpRequestAbs.$$;
    $$$cjl167.JSObjectAbs($$xMLHttpRequestAbs);
    function getOnreadystatechange(){
        /*Begin dynamic block*/
        return (tmpvar$1018=$$xMLHttpRequestAbs.$native.onreadystatechange,$$$cl1.isOfType(tmpvar$1018,{t:$$$cl1.Anything})?tmpvar$1018:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'55:10-55:34','xmlhttprequest.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getOnreadystatechange=getOnreadystatechange;
    getOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getOnreadystatechange']};};
    function setOnreadystatechange(handler$1019){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.onreadystatechange=$$$cl1.$JsCallable(handler$1019/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setOnreadystatechange=setOnreadystatechange;
    setOnreadystatechange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setOnreadystatechange']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$1020=$$xMLHttpRequestAbs.$native.readyState;
        $prop$getReadyState$1020={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$1020.get=function(){return readyState$1020};
        if((tmpvar$1021=readyState$1020,tmpvar$1022=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'68:21-68:34','xmlhttprequest.ceylon'):XMLHttpRequest).UNSENT,(tmpvar$1021.equals&&tmpvar$1021.equals(tmpvar$1022))||tmpvar$1021===tmpvar$1022)){
            return getReadyStateUnsent();
        }else {
            if((tmpvar$1023=readyState$1020,tmpvar$1024=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'70:28-70:41','xmlhttprequest.ceylon'):XMLHttpRequest).OPENED,(tmpvar$1023.equals&&tmpvar$1023.equals(tmpvar$1024))||tmpvar$1023===tmpvar$1024)){
                return getReadyStateOpened();
            }else {
                if((tmpvar$1025=readyState$1020,tmpvar$1026=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'72:28-72:41','xmlhttprequest.ceylon'):XMLHttpRequest).HEADERS_RECEIVED,(tmpvar$1025.equals&&tmpvar$1025.equals(tmpvar$1026))||tmpvar$1025===tmpvar$1026)){
                    return getReadyStateHeadersReceived();
                }else {
                    if((tmpvar$1027=readyState$1020,tmpvar$1028=(typeof XMLHttpRequest==='undefined'||XMLHttpRequest===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: XMLHttpRequest")),'74:28-74:41','xmlhttprequest.ceylon'):XMLHttpRequest).LOADING,(tmpvar$1027.equals&&tmpvar$1027.equals(tmpvar$1028))||tmpvar$1027===tmpvar$1028)){
                        return getReadyStateLoading();
                    }else {
                        return getReadyStateDone();
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ReadyState},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','readyState']};};
    $$xMLHttpRequestAbs.open$defs$async=function(method$1029,url$1030,async$1031,user$1032,password$1033){return true;};
    $$xMLHttpRequestAbs.open$defs$user=function(method$1029,url$1030,async$1031,user$1032,password$1033){return null;};
    $$xMLHttpRequestAbs.open$defs$password=function(method$1029,url$1030,async$1031,user$1032,password$1033){return null;};
    function open(method$1029,url$1030,async$1031,user$1032,password$1033){
        if(async$1031===undefined){async$1031=$$xMLHttpRequestAbs.open$defs$async(method$1029,url$1030,async$1031,user$1032,password$1033);}
        if(user$1032===undefined){user$1032=$$xMLHttpRequestAbs.open$defs$user(method$1029,url$1030,async$1031,user$1032,password$1033);}
        if(password$1033===undefined){password$1033=$$xMLHttpRequestAbs.open$defs$password(method$1029,url$1030,async$1031,user$1032,password$1033);}
        
        var case$1034=method$1029;
        if ($$$cl1.isOfType(method$1029,{t:$$$cl1.String})) {
            
            var case$1035=url$1030;
            if ($$$cl1.isOfType(url$1030,{t:$$$cl1.String})) {
                
                var case$1036=user$1032;
                if ($$$cl1.isOfType(user$1032,{t:$$$cl1.String})) {
                    
                    var case$1037=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.valueOf()/*NULL PARAM!*/,case$1037.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.valueOf()/*NULL PARAM!*/,case$1037.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cjl167.JSString})) {
                    
                    var case$1038=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.$native/*NULL PARAM!*/,case$1038.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.$native/*NULL PARAM!*/,case$1038.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1036.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cl1.Null})) {
                    
                    var case$1039=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1039.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1039.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.valueOf()/*NULL PARAM!*/,async$1031);
                        /*End dynamic block*/
                    }
                }
            }else if ($$$cl1.isOfType(url$1030,{t:$$$cjl167.JSString})) {
                
                var case$1040=user$1032;
                if ($$$cl1.isOfType(user$1032,{t:$$$cl1.String})) {
                    
                    var case$1041=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.valueOf()/*NULL PARAM!*/,case$1041.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.valueOf()/*NULL PARAM!*/,case$1041.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cjl167.JSString})) {
                    
                    var case$1042=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.$native/*NULL PARAM!*/,case$1042.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.$native/*NULL PARAM!*/,case$1042.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1040.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cl1.Null})) {
                    
                    var case$1043=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1043.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1043.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.valueOf()/*NULL PARAM!*/,case$1035.$native/*NULL PARAM!*/,async$1031);
                        /*End dynamic block*/
                    }
                }
            }
        }else if ($$$cl1.isOfType(method$1029,{t:$$$cjl167.JSString})) {
            
            var case$1044=url$1030;
            if ($$$cl1.isOfType(url$1030,{t:$$$cl1.String})) {
                
                var case$1045=user$1032;
                if ($$$cl1.isOfType(user$1032,{t:$$$cl1.String})) {
                    
                    var case$1046=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.valueOf()/*NULL PARAM!*/,case$1046.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.valueOf()/*NULL PARAM!*/,case$1046.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cjl167.JSString})) {
                    
                    var case$1047=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.$native/*NULL PARAM!*/,case$1047.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.$native/*NULL PARAM!*/,case$1047.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1045.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cl1.Null})) {
                    
                    var case$1048=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1048.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1048.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.valueOf()/*NULL PARAM!*/,async$1031);
                        /*End dynamic block*/
                    }
                }
            }else if ($$$cl1.isOfType(url$1030,{t:$$$cjl167.JSString})) {
                
                var case$1049=user$1032;
                if ($$$cl1.isOfType(user$1032,{t:$$$cl1.String})) {
                    
                    var case$1050=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.valueOf()/*NULL PARAM!*/,case$1050.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.valueOf()/*NULL PARAM!*/,case$1050.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.valueOf());
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cjl167.JSString})) {
                    
                    var case$1051=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.$native/*NULL PARAM!*/,case$1051.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.$native/*NULL PARAM!*/,case$1051.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,case$1049.$native);
                        /*End dynamic block*/
                    }
                }else if ($$$cl1.isOfType(user$1032,{t:$$$cl1.Null})) {
                    
                    var case$1052=password$1033;
                    if ($$$cl1.isOfType(password$1033,{t:$$$cl1.String})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1052.valueOf());
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cjl167.JSString})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031/*NULL PARAM!*/,null/*NULL PARAM!*/,case$1052.$native);
                        /*End dynamic block*/
                    }else if ($$$cl1.isOfType(password$1033,{t:$$$cl1.Null})) {
                        /*Begin dynamic block*/
                        $$xMLHttpRequestAbs.$native.open(/*NULL PARAM!*/case$1034.$native/*NULL PARAM!*/,case$1044.$native/*NULL PARAM!*/,async$1031);
                        /*End dynamic block*/
                    }
                }
            }
        }
    }
    $$xMLHttpRequestAbs.open=open;
    open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'method',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'url',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'async',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'user',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}},{$nm:'password',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','open']};};
    function setRequestHeader(header$1053,val$1054){
        
        var case$1055=header$1053;
        if ($$$cl1.isOfType(header$1053,{t:$$$cl1.String})) {
            
            var case$1056=val$1054;
            if ($$$cl1.isOfType(val$1054,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1055.valueOf()/*NULL PARAM!*/,case$1056.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1054,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1055.valueOf()/*NULL PARAM!*/,case$1056.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(header$1053,{t:$$$cjl167.JSString})) {
            
            var case$1057=val$1054;
            if ($$$cl1.isOfType(val$1054,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1055.$native/*NULL PARAM!*/,case$1057.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$1054,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$xMLHttpRequestAbs.$native.setRequestHeader(/*NULL PARAM!*/case$1055.$native/*NULL PARAM!*/,case$1057.$native);
                /*End dynamic block*/
            }
        }
    }
    $$xMLHttpRequestAbs.setRequestHeader=setRequestHeader;
    setRequestHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setRequestHeader']};};
    function getTimeout(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$xMLHttpRequestAbs.$native.timeout);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getTimeout=getTimeout;
    getTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getTimeout']};};
    function setTimeout(timeout$1058){
        
        var case$1059=timeout$1058;
        if ($$$cl1.isOfType(timeout$1058,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.timeout=case$1059;
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(timeout$1058,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.timeout=case$1059.$native;
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.setTimeout=setTimeout;
    setTimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'timeout',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setTimeout']};};
    function getWithCredentials(){
        /*Begin dynamic block*/
        if($$xMLHttpRequestAbs.$native.withCredentials){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getWithCredentials=getWithCredentials;
    getWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getWithCredentials']};};
    function setWithCredentials(credentials$1060){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.withCredentials=credentials$1060;
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setWithCredentials=setWithCredentials;
    setWithCredentials.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'credentials',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setWithCredentials']};};
    function upload(){
        /*Begin dynamic block*/
        return XMLHttpRequestUpload($$xMLHttpRequestAbs.$native.upload);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.upload=upload;
    upload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestUpload},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','upload']};};
    $$xMLHttpRequestAbs.send$defs$data=function(data$1061){return null;};
    function send(data$1061){
        if(data$1061===undefined){data$1061=$$xMLHttpRequestAbs.send$defs$data(data$1061);}
        
        var case$1062=data$1061;
        if ($$$cl1.isOfType(data$1061,{t:$$$cjf974.Blob})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1062.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1061,{t:$$$cjd401.Document})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1062.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1061,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1062.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1061,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1062.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1061,{t:FormData})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send(/*NULL PARAM!*/case$1062.$native);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$1061,{t:$$$cl1.Null})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.send();
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.send=send;
    send.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cjf974.Blob},{t:$$$cjd401.Document},{t:$$$cl1.String},{t:$$$cjl167.JSString},{ t:'u', l:[{t:$$$cl1.Null},{t:FormData}]}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','send']};};
    function abort(){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.abort();
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.abort=abort;
    abort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','abort']};};
    function status(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$xMLHttpRequestAbs.$native.status);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.status=status;
    status.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','status']};};
    function statusText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$xMLHttpRequestAbs.$native.statusText);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.statusText=statusText;
    statusText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','statusText']};};
    function getResponseHeader(header$1063){
        /*Begin dynamic block*/
        var rheader$1064;
        $prop$getRheader$1064={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader','$at','rheader']};}};
        $prop$getRheader$1064.get=function(){return rheader$1064};
        
        var case$1065=header$1063;
        if ($$$cl1.isOfType(header$1063,{t:$$$cl1.String})) {
            rheader$1064=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1065.valueOf());
        }else if ($$$cl1.isOfType(header$1063,{t:$$$cjl167.JSString})) {
            rheader$1064=$$xMLHttpRequestAbs.$native.getResponseHeader(/*NULL PARAM!*/case$1065.$native);
        }if((tmpvar$1066=rheader$1064,tmpvar$1067=null,(tmpvar$1066.equals&&!tmpvar$1066.equals(tmpvar$1067))||tmpvar$1066!==tmpvar$1067)){
            return $$$cjl167.JSString(rheader$1064);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getResponseHeader=getResponseHeader;
    getResponseHeader.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[{$nm:'header',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseHeader']};};
    function getAllResponseHeaders(){
        /*Begin dynamic block*/
        var rheaders$1068=$$xMLHttpRequestAbs.$native.getAllResponseHeaders();
        $prop$getRheaders$1068={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders','$at','rheaders']};}};
        $prop$getRheaders$1068.get=function(){return rheaders$1068};
        if((tmpvar$1069=rheaders$1068,tmpvar$1070=null,(tmpvar$1069.equals&&!tmpvar$1069.equals(tmpvar$1070))||tmpvar$1069!==tmpvar$1070)){
            return $$$cjl167.JSString(rheaders$1068);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getAllResponseHeaders=getAllResponseHeaders;
    getAllResponseHeaders.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getAllResponseHeaders']};};
    function overrideMimeType(mime$1071){
        
        var case$1072=mime$1071;
        if ($$$cl1.isOfType(mime$1071,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1072.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(mime$1071,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$xMLHttpRequestAbs.$native.overrideMimeType(/*NULL PARAM!*/case$1072.$native);
            /*End dynamic block*/
        }
    }
    $$xMLHttpRequestAbs.overrideMimeType=overrideMimeType;
    overrideMimeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'mime',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','overrideMimeType']};};
    function getResponseType(){
        /*Begin dynamic block*/
        if((tmpvar$1073=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1074=$$$cl1.String("",0),(tmpvar$1073.equals&&tmpvar$1073.equals(tmpvar$1074))||tmpvar$1073===tmpvar$1074)){
            return getBlank();
        }else {
            if((tmpvar$1075=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1076=$$$cl1.String("arraybuffer",11),(tmpvar$1075.equals&&tmpvar$1075.equals(tmpvar$1076))||tmpvar$1075===tmpvar$1076)){
                return getArraybuffer();
            }else {
                if((tmpvar$1077=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1078=$$$cl1.String("blob",4),(tmpvar$1077.equals&&tmpvar$1077.equals(tmpvar$1078))||tmpvar$1077===tmpvar$1078)){
                    return getBlob();
                }else {
                    if((tmpvar$1079=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1080=$$$cl1.String("document",8),(tmpvar$1079.equals&&tmpvar$1079.equals(tmpvar$1080))||tmpvar$1079===tmpvar$1080)){
                        return getDocument();
                    }else {
                        if((tmpvar$1081=$$xMLHttpRequestAbs.$native.responseType,tmpvar$1082=$$$cl1.String("json",4),(tmpvar$1081.equals&&tmpvar$1081.equals(tmpvar$1082))||tmpvar$1081===tmpvar$1082)){
                            return getJson();
                        }else {
                            return getText();
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.getResponseType=getResponseType;
    getResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:XMLHttpRequestResponseType},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','getResponseType']};};
    function setResponseType(responseType$1083){
        /*Begin dynamic block*/
        $$xMLHttpRequestAbs.$native.responseType=responseType$1083.string.valueOf();
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.setResponseType=setResponseType;
    setResponseType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'responseType',$mt:'prm',$t:{t:XMLHttpRequestResponseType},$an:function(){return[];}}],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','setResponseType']};};
    function response(){
        /*Begin dynamic block*/
        return (tmpvar$1084=$$xMLHttpRequestAbs.$native.response,$$$cl1.isOfType(tmpvar$1084,{t:$$$cl1.Anything})?tmpvar$1084:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'513:10-513:24','xmlhttprequest.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.response=response;
    response.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','response']};};
    function responseText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$xMLHttpRequestAbs.$native.responseText);
        /*End dynamic block*/
    }
    $$xMLHttpRequestAbs.responseText=responseText;
    responseText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseText']};};
    function responseXML(){
        /*Begin dynamic block*/
        var responseXML$1085=$$xMLHttpRequestAbs.$native.responseXML;
        $prop$getResponseXML$1085={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML','$at','responseXML']};}};
        $prop$getResponseXML$1085.get=function(){return responseXML$1085};
        if((tmpvar$1086=responseXML$1085,tmpvar$1087=null,(tmpvar$1086.equals&&!tmpvar$1086.equals(tmpvar$1087))||tmpvar$1086!==tmpvar$1087)){
            return $$$cjd401.Document(responseXML$1085);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$xMLHttpRequestAbs.responseXML=responseXML;
    responseXML.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjd401.Document}]},$ps:[],$cont:XMLHttpRequestAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs','$m','responseXML']};};
    return $$xMLHttpRequestAbs;
}
XMLHttpRequestAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestAbs']};};
exports.XMLHttpRequestAbs=XMLHttpRequestAbs;
function $init$XMLHttpRequestAbs(){
    if (XMLHttpRequestAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestAbs',$$$cjl167.JSObjectAbs);
    }
    return XMLHttpRequestAbs;
}
exports.$init$XMLHttpRequestAbs=$init$XMLHttpRequestAbs;
$init$XMLHttpRequestAbs();
function XMLHttpRequestUpload(n$1088, $$xMLHttpRequestUpload){
    $init$XMLHttpRequestUpload();
    if ($$xMLHttpRequestUpload===undefined)$$xMLHttpRequestUpload=new XMLHttpRequestUpload.$$;
    $$xMLHttpRequestUpload.n$1088_=n$1088;
    XMLHttpRequestUploadAbs($$xMLHttpRequestUpload);
    $$$cl1.defineAttr($$xMLHttpRequestUpload,'n$1088',function(){return this.n$1088_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestUpload,d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','n']};});
    $$xMLHttpRequestUpload.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestUpload,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload','$at','native']};}};
    /*Begin dynamic block*/
    $$xMLHttpRequestUpload.$native=n$1088;/*End dynamic block*/
    return $$xMLHttpRequestUpload;
}
XMLHttpRequestUpload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestUploadAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUpload']};};
exports.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
    if (XMLHttpRequestUpload.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUpload,'ceylon.js.xmlhttprequest::XMLHttpRequestUpload',XMLHttpRequestUploadAbs);
    }
    return XMLHttpRequestUpload;
}
exports.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;
$init$XMLHttpRequestUpload();
function XMLHttpRequestUploadAbs($$xMLHttpRequestUploadAbs){
    $init$XMLHttpRequestUploadAbs();
    if ($$xMLHttpRequestUploadAbs===undefined)$$xMLHttpRequestUploadAbs=new XMLHttpRequestUploadAbs.$$;
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestUploadAbs);
    return $$xMLHttpRequestUploadAbs;
}
XMLHttpRequestUploadAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestUploadAbs']};};
exports.XMLHttpRequestUploadAbs=XMLHttpRequestUploadAbs;
function $init$XMLHttpRequestUploadAbs(){
    if (XMLHttpRequestUploadAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestUploadAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestUploadAbs',XMLHttpRequestEventTargetAbs);
    }
    return XMLHttpRequestUploadAbs;
}
exports.$init$XMLHttpRequestUploadAbs=$init$XMLHttpRequestUploadAbs;
$init$XMLHttpRequestUploadAbs();
function XMLHttpRequestEventTarget(n$1089, $$xMLHttpRequestEventTarget){
    $init$XMLHttpRequestEventTarget();
    if ($$xMLHttpRequestEventTarget===undefined)$$xMLHttpRequestEventTarget=new XMLHttpRequestEventTarget.$$;
    $$xMLHttpRequestEventTarget.n$1089_=n$1089;
    XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTarget);
    $$$cl1.defineAttr($$xMLHttpRequestEventTarget,'n$1089',function(){return this.n$1089_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:XMLHttpRequestEventTarget,d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget','$at','n']};});
    /*Begin dynamic block*/
    $$xMLHttpRequestEventTarget.$native=n$1089;/*End dynamic block*/
    return $$xMLHttpRequestEventTarget;
}
XMLHttpRequestEventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:XMLHttpRequestEventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTarget']};};
exports.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
    if (XMLHttpRequestEventTarget.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTarget,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTarget',XMLHttpRequestEventTargetAbs);
    }
    return XMLHttpRequestEventTarget;
}
exports.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;
$init$XMLHttpRequestEventTarget();
function XMLHttpRequestEventTargetAbs($$xMLHttpRequestEventTargetAbs){
    $init$XMLHttpRequestEventTargetAbs();
    if ($$xMLHttpRequestEventTargetAbs===undefined)$$xMLHttpRequestEventTargetAbs=new XMLHttpRequestEventTargetAbs.$$;
    $$$cjd401.EventTargetAbs($$xMLHttpRequestEventTargetAbs);
    function getOnloadstart(){
        /*Begin dynamic block*/
        return (tmpvar$1090=$$xMLHttpRequestEventTargetAbs.$native.onloadstart,$$$cl1.isOfType(tmpvar$1090,{t:$$$cl1.Anything})?tmpvar$1090:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'24:10-24:27','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnloadstart=getOnloadstart;
    getOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadstart']};};
    function setOnloadstart(handler$1091){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onloadstart=$$$cl1.$JsCallable(handler$1091/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnloadstart=setOnloadstart;
    setOnloadstart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadstart']};};
    function getOnprogress(){
        /*Begin dynamic block*/
        return (tmpvar$1092=$$xMLHttpRequestEventTargetAbs.$native.onprogress,$$$cl1.isOfType(tmpvar$1092,{t:$$$cl1.Anything})?tmpvar$1092:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'37:10-37:26','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnprogress=getOnprogress;
    getOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnprogress']};};
    function setOnprogress(handler$1093){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onprogress=$$$cl1.$JsCallable(handler$1093/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnprogress=setOnprogress;
    setOnprogress.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnprogress']};};
    function getOnabort(){
        /*Begin dynamic block*/
        return (tmpvar$1094=$$xMLHttpRequestEventTargetAbs.$native.onabort,$$$cl1.isOfType(tmpvar$1094,{t:$$$cl1.Anything})?tmpvar$1094:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'50:10-50:23','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnabort=getOnabort;
    getOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnabort']};};
    function setOnabort(handler$1095){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onabort=$$$cl1.$JsCallable(handler$1095/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnabort=setOnabort;
    setOnabort.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnabort']};};
    function getOnerror(){
        /*Begin dynamic block*/
        return (tmpvar$1096=$$xMLHttpRequestEventTargetAbs.$native.onerror,$$$cl1.isOfType(tmpvar$1096,{t:$$$cl1.Anything})?tmpvar$1096:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'63:10-63:23','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnerror=getOnerror;
    getOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnerror']};};
    function setOnerror(handler$1097){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onerror=$$$cl1.$JsCallable(handler$1097/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnerror=setOnerror;
    setOnerror.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnerror']};};
    function getOnload(){
        /*Begin dynamic block*/
        return (tmpvar$1098=$$xMLHttpRequestEventTargetAbs.$native.onload,$$$cl1.isOfType(tmpvar$1098,{t:$$$cl1.Anything})?tmpvar$1098:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'76:10-76:22','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnload=getOnload;
    getOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnload']};};
    function setOnload(handler$1099){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onload=$$$cl1.$JsCallable(handler$1099/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnload=setOnload;
    setOnload.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnload']};};
    function getOntimeout(){
        /*Begin dynamic block*/
        return (tmpvar$1100=$$xMLHttpRequestEventTargetAbs.$native.ontimeout,$$$cl1.isOfType(tmpvar$1100,{t:$$$cl1.Anything})?tmpvar$1100:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'89:10-89:25','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOntimeout=getOntimeout;
    getOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOntimeout']};};
    function setOntimeout(handler$1101){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.ontimeout=$$$cl1.$JsCallable(handler$1101/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOntimeout=setOntimeout;
    setOntimeout.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOntimeout']};};
    function getOnloadend(){
        /*Begin dynamic block*/
        return (tmpvar$1102=$$xMLHttpRequestEventTargetAbs.$native.onloadend,$$$cl1.isOfType(tmpvar$1102,{t:$$$cl1.Anything})?tmpvar$1102:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'102:10-102:25','xmlhttprequestevent.ceylon'));
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.getOnloadend=getOnloadend;
    getOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("returns a function Anything(Event event)",40)),$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','getOnloadend']};};
    function setOnloadend(handler$1103){
        /*Begin dynamic block*/
        $$xMLHttpRequestEventTargetAbs.$native.onloadend=$$$cl1.$JsCallable(handler$1103/*TODO: callable targs 6*/);
        /*End dynamic block*/
    }
    $$xMLHttpRequestEventTargetAbs.setOnloadend=setOnloadend;
    setOnloadend.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'handler',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:XMLHttpRequestEventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs','$m','setOnloadend']};};
    return $$xMLHttpRequestEventTargetAbs;
}
XMLHttpRequestEventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjd401.EventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.xmlhttprequest','XMLHttpRequestEventTargetAbs']};};
exports.XMLHttpRequestEventTargetAbs=XMLHttpRequestEventTargetAbs;
function $init$XMLHttpRequestEventTargetAbs(){
    if (XMLHttpRequestEventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(XMLHttpRequestEventTargetAbs,'ceylon.js.xmlhttprequest::XMLHttpRequestEventTargetAbs',$$$cjd401.EventTargetAbs);
    }
    return XMLHttpRequestEventTargetAbs;
}
exports.$init$XMLHttpRequestEventTargetAbs=$init$XMLHttpRequestEventTargetAbs;
$init$XMLHttpRequestEventTargetAbs();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
