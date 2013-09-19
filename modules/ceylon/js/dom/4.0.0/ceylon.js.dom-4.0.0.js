(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.js.language\/1.8.5","ceylon.js.html\/5.0.0","ceylon.js.json\/1.0.0"],"$mod-name":"ceylon.js.dom","ceylon.js.dom":{"attributeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"endToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToStart"},"Attr":{"super":{"$pk":"ceylon.js.dom","$nm":"AttrAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"ltr":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"ltr"},"TextAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"wholeText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"wholeText"},"splitText":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"splitText"}},"$nm":"TextAbs"},"notationNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"capturePhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"capturePhase"},"ProcessingInstructionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"target":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"ProcessingInstructionAbs"},"filterSkip":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterSkip"},"filterAccept":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterAccept"},"$pkg-shared":"1","documentPositionFollowing":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionFollowing"},"css1Compat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"css1Compat"},"EventInit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$an":{"shared":[]},"$nm":"cancelable"}],"$mt":"cls","$an":{"shared":[]},"$m":{"toJson":{"$t":{"$md":"ceylon.js.json","$pk":"ceylon.js.json","$nm":"JSJSON"},"$mt":"mthd","$an":{"shared":[]},"$nm":"toJson"}},"$at":{"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"bubbles"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[]},"$nm":"cancelable"}},"$nm":"EventInit"},"EventTargetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"addEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"addEventListener"},"dispatchEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"dispatchEvent"},"removeEventListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"prm","$pt":"f","$nm":"callback"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"capture"}]],"$mt":"mthd","$an":{"shared":[]},"$m":{"callback":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$mt":"prm","$nm":"event"}]],"$mt":"mthd","$nm":"callback"}},"$nm":"removeEventListener"}},"$nm":"EventTargetAbs"},"CDATASectionAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CDATASectionAbs"},"none":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"none"},"filterReject":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$mt":"obj","$an":{"shared":[]},"$nm":"filterReject"},"DocumentTypeAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"publicId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"systemId"}},"$nm":"DocumentTypeAbs"},"NodeListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"NodeListAbs"},"EntityReference":{"super":{"$pk":"ceylon.js.dom","$nm":"EntityReferenceAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EntityReference"},"documentPositionImplementationSpecific":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionImplementationSpecific"},"ElementAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"getElementsByTagNameNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttributeNS"},"tagName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"tagName"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attrName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeAttribute"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAttribute"},"getAttribute":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attributeName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"attName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasAttributeNS"}},"$nm":"ElementAbs"},"startToStart":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToStart"},"CompatMode":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"css1Compat"},{"$pk":"ceylon.js.dom","$nm":"backCompat"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"CompatMode"},"rtl":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"obj","$an":{"shared":[]},"$nm":"rtl"},"DocumentFragment":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentFragmentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentFragment"},"loading":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"loading"},"documentPositionContainedBy":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContainedBy"},"Event":{"super":{"$pk":"ceylon.js.dom","$nm":"EventAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Event"},"Comment":{"super":{"$pk":"ceylon.js.dom","$nm":"CommentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Comment"},"EventAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"defaultPrevented":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultPrevented"},"timeStamp":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSDate"},"$mt":"mthd","$an":{"shared":[]},"$nm":"timeStamp"},"stopPropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopPropagation"},"eventPhase":{"$t":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"mthd","$an":{"shared":[]},"$nm":"eventPhase"},"currentTarget":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentTarget"},"bubbles":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"bubbles"},"stopImmediatePropagation":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"stopImmediatePropagation"},"target":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"EventTarget"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"target"},"isTrusted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isTrusted"},"cancelable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cancelable"},"preventDefault":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"preventDefault"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"initEvent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"bubbles"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"cancelable"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"initEvent"}},"$nm":"EventAbs"},"NodeFilterResult":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"filterAccept"},{"$pk":"ceylon.js.dom","$nm":"filterReject"},{"$pk":"ceylon.js.dom","$nm":"filterSkip"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeFilterResult"},"documentPositionPreceding":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionPreceding"},"DocumentDirection":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"rtl"},{"$pk":"ceylon.js.dom","$nm":"ltr"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentDirection"},"createEvent":{"$t":{"$pk":"ceylon.js.dom","$nm":"Event"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"type"},{"$t":{"$pk":"ceylon.js.dom","$nm":"EventInit"},"$mt":"prm","$nm":"options"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createEvent"},"DocumentFragmentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"DocumentFragmentAbs"},"RangeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"extractContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"extractContents"},"detach":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"detach"},"compareBoundaryPoints":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"prm","$nm":"how"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"prm","$nm":"sourceRange"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareBoundaryPoints"},"selectNodeContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNodeContents"},"insertNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertNode"},"deleteContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteContents"},"setStartAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartAfter"},"startOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startOffset"},"collapsed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"collapsed"},"cloneRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneRange"},"surroundContents":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"surroundContents"},"cloneContents":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneContents"},"selectNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"selectNode"},"endOffset":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endOffset"},"setStart":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"startNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"startOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStart"},"isPointInRange":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isPointInRange"},"commonAncestorContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"commonAncestorContainer"},"startContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"startContainer"},"endContainer":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"endContainer"},"setEndAfter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndAfter"},"setStartBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setStartBefore"},"setEndBefore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"refNode"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEndBefore"},"setEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"endNode"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"endOffset"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setEnd"},"collapse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$mt":"prm","$def":"1","$nm":"toStart"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"collapse"}},"$nm":"RangeAbs"},"Node":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"attributeNode"},{"$pk":"ceylon.js.dom","$nm":"cdataSectionNode"},{"$pk":"ceylon.js.dom","$nm":"commentNode"},{"$pk":"ceylon.js.dom","$nm":"documentFragmentNode"},{"$pk":"ceylon.js.dom","$nm":"documentNode"},{"$pk":"ceylon.js.dom","$nm":"documentTypeNode"},{"$pk":"ceylon.js.dom","$nm":"elementNode"},{"$pk":"ceylon.js.dom","$nm":"entityNode"},{"$pk":"ceylon.js.dom","$nm":"entityReferenceNode"},{"$pk":"ceylon.js.dom","$nm":"notationNode"},{"$pk":"ceylon.js.dom","$nm":"processingInstructionNode"},{"$pk":"ceylon.js.dom","$nm":"textNode"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"endToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"endToEnd"},"CharacterDataAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceData"},"getData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteData"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendData"},"substringData":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"offset"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"substringData"},"setData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setData"}},"$nm":"CharacterDataAbs"},"commentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeList"},"documentPositionContains":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionContains"},"TreeWalkerAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"firstChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"currentNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"currentNode"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"}},"$nm":"TreeWalkerAbs"},"CharacterData":{"super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CharacterData"},"DOMImplementationAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"createDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"prm","$def":"1","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentType"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"publicId"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"feature"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFeature"}},"$nm":"DOMImplementationAbs"},"documentFragmentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"DocumentPosition":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"documentPositionContainedBy"},{"$pk":"ceylon.js.dom","$nm":"documentPositionContains"},{"$pk":"ceylon.js.dom","$nm":"documentPositionDisconnected"},{"$pk":"ceylon.js.dom","$nm":"documentPositionFollowing"},{"$pk":"ceylon.js.dom","$nm":"documentPositionImplementationSpecific"},{"$pk":"ceylon.js.dom","$nm":"documentPositionPreceding"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentPosition"},"HTMLCollectionAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"namedItem":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObject"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"namedItem"}},"$nm":"HTMLCollectionAbs"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `ceylon.js.dom`."]},"$nm":"run"},"RangeCompareHow":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"endToEnd"},{"$pk":"ceylon.js.dom","$nm":"endToStart"},{"$pk":"ceylon.js.dom","$nm":"startToEnd"},{"$pk":"ceylon.js.dom","$nm":"startToStart"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"RangeCompareHow"},"NodeIteratorAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"whatToShow":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"mthd","$an":{"shared":[]},"$nm":"whatToShow"},"root":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"root"},"nextNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextNode"},"filter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"filter"},"previousNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousNode"}},"$nm":"NodeIteratorAbs"},"entityNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"backCompat":{"super":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"obj","$an":{"shared":[]},"$nm":"backCompat"},"HTMLCollection":{"super":{"$pk":"ceylon.js.dom","$nm":"HTMLCollectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"HTMLCollection"},"textNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"interactive":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"interactive"},"complete":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"obj","$an":{"shared":[]},"$nm":"complete"},"NodeIterator":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeIteratorAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"NodeIterator"},"startToEnd":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeCompareHow"},"$mt":"obj","$an":{"shared":[]},"$nm":"startToEnd"},"DOMImplementation":{"super":{"$pk":"ceylon.js.dom","$nm":"DOMImplementationAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DOMImplementation"},"cdataSectionNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"DocumentType":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentTypeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"DocumentType"},"CommentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"CharacterDataAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"CommentAbs"},"Range":{"super":{"$pk":"ceylon.js.dom","$nm":"RangeAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Range"},"Document":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"atTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"atTarget"},"EntityReferenceAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$nm":"EntityReferenceAbs"},"AttrAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"getValue":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getValue"},"name":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"name"},"setValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setValue"},"isId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"isId"}},"$nm":"AttrAbs"},"elementNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"NodeFilter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"prm","$pt":"f","$nm":"acceptNode"}],"$mt":"cls","$an":{"shared":[]},"$m":{"acceptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeFilterResult"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$nm":"acceptNode"}},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"}},"$nm":"NodeFilter"},"documentPositionDisconnected":{"super":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentPositionDisconnected"},"getWindow":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getWindow"},"Text":{"super":{"$pk":"ceylon.js.dom","$nm":"TextAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Text"},"CDATASection":{"super":{"$pk":"ceylon.js.dom","$nm":"CDATASectionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"CDATASection"},"documentNode":{"super":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"TreeWalker":{"super":{"$pk":"ceylon.js.dom","$nm":"TreeWalkerAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"TreeWalker"},"EventPhase":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"none"},{"$pk":"ceylon.js.dom","$nm":"capturePhase"},{"$pk":"ceylon.js.dom","$nm":"atTarget"},{"$pk":"ceylon.js.dom","$nm":"bubblingPhase"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$an":{"shared":[]},"$nm":"num"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"num":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"num"}},"$nm":"EventPhase"},"bubblingPhase":{"super":{"$pk":"ceylon.js.dom","$nm":"EventPhase"},"$mt":"obj","$an":{"shared":[]},"$nm":"bubblingPhase"},"NodeAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"firstChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"firstChild"},"nodeName":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeName"},"childNodes":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"childNodes"},"baseURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"baseURI"},"replaceChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"replaceChild"},"setTextContent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"content"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setTextContent"},"lastChild":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastChild"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"normalize"},"lookupPrefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"lookupPrefix"},"previousSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"previousSibling"},"parentNode":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentNode"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasChildNodes"},"nodeType":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeType"},"$mt":"mthd","$an":{"shared":[]},"$nm":"nodeType"},"cloneNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"bool"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"cloneNode"},"nextSibling":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"nextSibling"},"isDefaultNamespace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isDefaultNamespace"},"insertBefore":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"newElement"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Node"}]},"$mt":"prm","$nm":"referenceElement"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"insertBefore"},"appendChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendChild"},"setNodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setNodeValue"},"compareDocumentPosition":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentPosition"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"compareDocumentPosition"},"removeChild":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"removeChild"},"prefix":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"prefix"},"getTextContent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getTextContent"},"isEqualNode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"isEqualNode"},"getNodeValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"getNodeValue"}},"$at":{"ownerDocument":{"$t":{"$pk":"ceylon.js.dom","$nm":"Document"},"$mt":"gttr","$an":{"shared":[]},"$nm":"ownerDocument"}},"$nm":"NodeAbs"},"EventTarget":{"super":{"$pk":"ceylon.js.dom","$nm":"EventTargetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"EventTarget"},"ProcessingInstruction":{"super":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstructionAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"ProcessingInstruction"},"DocumentReadyState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.js.dom","$nm":"loading"},{"$pk":"ceylon.js.dom","$nm":"interactive"},{"$pk":"ceylon.js.dom","$nm":"complete"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$at":{"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"name"}},"$nm":"DocumentReadyState"},"DocumentAbs":{"abstract":"1","super":{"$pk":"ceylon.js.dom","$nm":"NodeAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"writeln":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"writeln"},"body":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"body"},"getElementsByName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByName"},"createNodeIterator":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeIterator"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createNodeIterator"},"location":{"$t":{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Location"},"$mt":"mthd","$an":{"shared":[]},"$nm":"location"},"hasFocus":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"hasFocus"},"defaultView":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.html","$pk":"ceylon.js.html","$nm":"Window"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"defaultView"},"close":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"close"},"open":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"open"},"scripts":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"scripts"},"createAttributeNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttributeNS"},"getElementsByClassName":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"names"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByClassName"},"createAttribute":{"$t":{"$pk":"ceylon.js.dom","$nm":"Attr"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createAttribute"},"querySelector":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelector"},"activeElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"activeElement"},"head":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$mt":"mthd","$an":{"shared":[]},"$nm":"head"},"documentElement":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentElement"},"setAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"async"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setAsync"},"getElementById":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"Element"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"id"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementById"},"releaseCapture":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[]},"$nm":"releaseCapture"},"styleSheetSets":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSArray"},"$mt":"mthd","$an":{"shared":[],"doc":["Array of Strings"]},"$nm":"styleSheetSets"},"getElementsByTagNameNS":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespace"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagNameNS"},"getAsync":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getAsync"},"getCookie":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getCookie"},"getDir":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDir"},"setDir":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentDirection"},"$mt":"prm","$nm":"dir"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDir"},"elementFromPoint":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"x"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"elementFromPoint"},"getSelectedStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getSelectedStyleSheetSet"},"preferredStyleSheetSet":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"preferredStyleSheetSet"},"url":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"url"},"createComment":{"$t":{"$pk":"ceylon.js.dom","$nm":"Comment"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createComment"},"referrer":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"referrer"},"documentURI":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"documentURI"},"setSelectedStyleSheetSet":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"sheet"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setSelectedStyleSheetSet"},"images":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"images"},"styleSheets":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"styleSheets"},"doctype":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"DocumentType"}]},"$mt":"mthd","$an":{"shared":[]},"$nm":"doctype"},"createCDATASection":{"$t":{"$pk":"ceylon.js.dom","$nm":"CDATASection"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createCDATASection"},"getDomain":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDomain"},"importNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"externalNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"importNode"},"adoptNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"node"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"adoptNode"},"getDesignMode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getDesignMode"},"plugins":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"plugins"},"compatMode":{"$t":{"$pk":"ceylon.js.dom","$nm":"CompatMode"},"$mt":"mthd","$an":{"shared":[]},"$nm":"compatMode"},"createTextNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Text"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElementNS"},"querySelectorAll":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"selectors"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"querySelectorAll"},"createDocumentFragment":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createDocumentFragment"},"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"getElementsByTagName":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},{"$pk":"ceylon.js.dom","$nm":"NodeList"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$def":"1","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getElementsByTagName"},"write":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"line"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"write"},"setDomain":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"domain"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setDomain"},"forms":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"forms"},"characterSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"characterSet"},"lastModified":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastModified"},"links":{"$t":{"$pk":"ceylon.js.dom","$nm":"HTMLCollection"},"$mt":"mthd","$an":{"shared":[]},"$nm":"links"},"readyState":{"$t":{"$pk":"ceylon.js.dom","$nm":"DocumentReadyState"},"$mt":"mthd","$an":{"shared":[]},"$nm":"readyState"},"createRange":{"$t":{"$pk":"ceylon.js.dom","$nm":"Range"},"$mt":"mthd","$an":{"shared":[]},"$nm":"createRange"},"anchors":{"$t":{"$pk":"ceylon.js.dom","$nm":"NodeList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"anchors"},"implementation":{"$t":{"$pk":"ceylon.js.dom","$nm":"DOMImplementation"},"$mt":"mthd","$an":{"shared":[]},"$nm":"implementation"},"setCookie":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"cookie"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setCookie"},"lastStyleSheetSet":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"lastStyleSheetSet"},"createTreeWalker":{"$t":{"$pk":"ceylon.js.dom","$nm":"TreeWalker"},"$ps":[[{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"prm","$nm":"root"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$def":"1","$nm":"whatToShow"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom","$nm":"NodeFilter"}]},"$mt":"prm","$def":"1","$nm":"filter"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createTreeWalker"},"createElement":{"$t":{"$pk":"ceylon.js.dom","$nm":"Element"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"ceylon.js.dom","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"target"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"createProcessingInstruction"}},"$nm":"DocumentAbs"},"Element":{"super":{"$pk":"ceylon.js.dom","$nm":"ElementAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"Element"}},"$mod-version":"4.0.0","ceylon.js.dom.stylesheets":{"StyleSheetAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"title":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"title"},"ownerNode":{"$t":{"$pk":"ceylon.js.dom","$nm":"Node"},"$mt":"mthd","$an":{"shared":[]},"$nm":"ownerNode"},"type":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"type"},"media":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaList"},"$mt":"mthd","$an":{"shared":[]},"$nm":"media"},"href":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"href"},"parentStyleSheet":{"$t":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parentStyleSheet"},"disabled":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[]},"$nm":"disabled"}},"$nm":"StyleSheetAbs"},"MediaListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"appendMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"newMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"appendMedium"},"setMediaText":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"setMediaText"},"item":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"},"deleteMedium":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"}]},"$mt":"prm","$nm":"oldMedium"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"deleteMedium"},"getMediaText":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSString"},"$mt":"mthd","$an":{"shared":[]},"$nm":"getMediaText"}},"$nm":"MediaListAbs"},"$pkg-shared":"1","MediaList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"MediaListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"MediaList"},"StyleSheet":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheet"},"StyleSheetListAbs":{"abstract":"1","super":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSObjectAbs"},"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"item":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheet"}]},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"}]},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"item"},"length":{"$t":{"$md":"ceylon.js.language","$pk":"ceylon.js.language","$nm":"JSNumber"},"$mt":"mthd","$an":{"shared":[]},"$nm":"length"}},"$nm":"StyleSheetListAbs"},"StyleSheetList":{"super":{"$pk":"ceylon.js.dom.stylesheets","$nm":"StyleSheetListAbs"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"n"}],"$mt":"cls","$an":{"shared":[]},"$at":{"native":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"native"},"n":{"$t":{"$pk":"ceylon.js.dom","$nm":"unknown"},"$mt":"attr","$nm":"n"}},"$nm":"StyleSheetList"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cjl167=require('ceylon/js/language/1.8.5/ceylon.js.language-1.8.5');
$$$cl1.$addmod$($$$cjl167,'ceylon.js.language/1.8.5');
function Attr(n$428, $$attr){
    $init$Attr();
    if ($$attr===undefined)$$attr=new Attr.$$;
    $$attr.n$428_=n$428;
    AttrAbs($$attr);
    $$$cl1.defineAttr($$attr,'n$428',function(){return this.n$428_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,d:['ceylon.js.dom','Attr','$at','n']};});
    $$attr.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Attr,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Attr','$at','native']};}};
    /*Begin dynamic block*/
    $$attr.$native=n$428;/*End dynamic block*/
    return $$attr;
}
Attr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AttrAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Attr']};};
exports.Attr=Attr;
function $init$Attr(){
    if (Attr.$$===undefined){
        $$$cl1.initTypeProto(Attr,'ceylon.js.dom::Attr',AttrAbs);
    }
    return Attr;
}
exports.$init$Attr=$init$Attr;
$init$Attr();
function AttrAbs($$attrAbs){
    $init$AttrAbs();
    if ($$attrAbs===undefined)$$attrAbs=new AttrAbs.$$;
    $$$cjl167.JSObjectAbs($$attrAbs);
    function isId(){
        /*Begin dynamic block*/
        if($$attrAbs.$native.isId){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$attrAbs.isId=isId;
    isId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','isId']};};
    function name(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$attrAbs.$native.name);
        /*End dynamic block*/
    }
    $$attrAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','name']};};
    function getValue(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$attrAbs.$native.value);
        /*End dynamic block*/
    }
    $$attrAbs.getValue=getValue;
    getValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','getValue']};};
    function setValue(val$429){
        
        var case$430=val$429;
        if ($$$cl1.isOfType(val$429,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$430.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$429,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$attrAbs.$native.value=case$430.$native;
            /*End dynamic block*/
        }
    }
    $$attrAbs.setValue=setValue;
    setValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:AttrAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','AttrAbs','$m','setValue']};};
    return $$attrAbs;
}
AttrAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','AttrAbs']};};
exports.AttrAbs=AttrAbs;
function $init$AttrAbs(){
    if (AttrAbs.$$===undefined){
        $$$cl1.initTypeProto(AttrAbs,'ceylon.js.dom::AttrAbs',$$$cjl167.JSObjectAbs);
    }
    return AttrAbs;
}
exports.$init$AttrAbs=$init$AttrAbs;
$init$AttrAbs();
function Comment(n$431, $$comment){
    $init$Comment();
    if ($$comment===undefined)$$comment=new Comment.$$;
    $$comment.n$431_=n$431;
    CommentAbs($$comment);
    $$$cl1.defineAttr($$comment,'n$431',function(){return this.n$431_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,d:['ceylon.js.dom','Comment','$at','n']};});
    $$comment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Comment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Comment','$at','native']};}};
    /*Begin dynamic block*/
    $$comment.$native=n$431;/*End dynamic block*/
    return $$comment;
}
Comment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CommentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Comment']};};
exports.Comment=Comment;
function $init$Comment(){
    if (Comment.$$===undefined){
        $$$cl1.initTypeProto(Comment,'ceylon.js.dom::Comment',CommentAbs);
    }
    return Comment;
}
exports.$init$Comment=$init$Comment;
$init$Comment();
function CommentAbs($$commentAbs){
    $init$CommentAbs();
    if ($$commentAbs===undefined)$$commentAbs=new CommentAbs.$$;
    CharacterDataAbs($$commentAbs);
    return $$commentAbs;
}
CommentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CommentAbs']};};
exports.CommentAbs=CommentAbs;
function $init$CommentAbs(){
    if (CommentAbs.$$===undefined){
        $$$cl1.initTypeProto(CommentAbs,'ceylon.js.dom::CommentAbs',CharacterDataAbs);
    }
    return CommentAbs;
}
exports.$init$CommentAbs=$init$CommentAbs;
$init$CommentAbs();
function CharacterData(n$432, $$characterData){
    $init$CharacterData();
    if ($$characterData===undefined)$$characterData=new CharacterData.$$;
    $$characterData.n$432_=n$432;
    CharacterDataAbs($$characterData);
    $$$cl1.defineAttr($$characterData,'n$432',function(){return this.n$432_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CharacterData,d:['ceylon.js.dom','CharacterData','$at','n']};});
    /*Begin dynamic block*/
    $$characterData.$native=n$432;/*End dynamic block*/
    return $$characterData;
}
CharacterData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterData']};};
exports.CharacterData=CharacterData;
function $init$CharacterData(){
    if (CharacterData.$$===undefined){
        $$$cl1.initTypeProto(CharacterData,'ceylon.js.dom::CharacterData',CharacterDataAbs);
    }
    return CharacterData;
}
exports.$init$CharacterData=$init$CharacterData;
$init$CharacterData();
function CharacterDataAbs($$characterDataAbs){
    $init$CharacterDataAbs();
    if ($$characterDataAbs===undefined)$$characterDataAbs=new CharacterDataAbs.$$;
    NodeAbs($$characterDataAbs);
    function getData(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$characterDataAbs.$native.data);
        /*End dynamic block*/
    }
    $$characterDataAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','getData']};};
    function setData(data$433){
        
        var case$434=data$433;
        if ($$$cl1.isOfType(data$433,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$434.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$433,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.data=case$434.$native;
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','setData']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$characterDataAbs.$native.length);
        /*End dynamic block*/
    }
    $$characterDataAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','length']};};
    function substringData(offset$435,count$436){
        
        var case$437=offset$435;
        if ($$$cl1.isOfType(offset$435,{t:$$$cl1.Integer})) {
            
            var case$438=count$436;
            if ($$$cl1.isOfType(count$436,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl167.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$437/*NULL PARAM!*/,case$438));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$436,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl167.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$437/*NULL PARAM!*/,case$438.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$435,{t:$$$cjl167.JSNumber})) {
            
            var case$439=count$436;
            if ($$$cl1.isOfType(count$436,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return $$$cjl167.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$437.$native/*NULL PARAM!*/,case$439));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$436,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                return $$$cjl167.JSString($$characterDataAbs.$native.substringData(/*NULL PARAM!*/case$437.$native/*NULL PARAM!*/,case$439.$native));
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.substringData=substringData;
    substringData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','substringData']};};
    function appendData(data$440){
        
        var case$441=data$440;
        if ($$$cl1.isOfType(data$440,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$441.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$440,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$characterDataAbs.$native.appendData(/*NULL PARAM!*/case$441.$native);
            /*End dynamic block*/
        }
    }
    $$characterDataAbs.appendData=appendData;
    appendData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','appendData']};};
    function insertData(offset$442,data$443){
        
        var case$444=offset$442;
        if ($$$cl1.isOfType(offset$442,{t:$$$cl1.Integer})) {
            
            var case$445=data$443;
            if ($$$cl1.isOfType(data$443,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$444/*NULL PARAM!*/,case$445.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$443,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$444/*NULL PARAM!*/,case$445.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$442,{t:$$$cjl167.JSNumber})) {
            
            var case$446=data$443;
            if ($$$cl1.isOfType(data$443,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$444.$native/*NULL PARAM!*/,case$446.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$443,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.insertData(/*NULL PARAM!*/case$444.$native/*NULL PARAM!*/,case$446.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.insertData=insertData;
    insertData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','insertData']};};
    function deleteData(offset$447,count$448){
        
        var case$449=offset$447;
        if ($$$cl1.isOfType(offset$447,{t:$$$cl1.Integer})) {
            
            var case$450=count$448;
            if ($$$cl1.isOfType(count$448,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$449/*NULL PARAM!*/,case$450);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$448,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$449/*NULL PARAM!*/,case$450.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(offset$447,{t:$$$cjl167.JSNumber})) {
            
            var case$451=count$448;
            if ($$$cl1.isOfType(count$448,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$449.$native/*NULL PARAM!*/,case$451);
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(count$448,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                $$characterDataAbs.$native.deleteData(/*NULL PARAM!*/case$449.$native/*NULL PARAM!*/,case$451.$native);
                /*End dynamic block*/
            }
        }
    }
    $$characterDataAbs.deleteData=deleteData;
    deleteData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','deleteData']};};
    function replaceData(offset$452,count$453,data$454){
        
        var case$455=offset$452;
        if ($$$cl1.isOfType(offset$452,{t:$$$cl1.Integer})) {
            
            var case$456=count$453;
            if ($$$cl1.isOfType(count$453,{t:$$$cl1.Integer})) {
                
                var case$457=data$454;
                if ($$$cl1.isOfType(data$454,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455/*NULL PARAM!*/,case$456/*NULL PARAM!*/,case$457.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$454,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455/*NULL PARAM!*/,case$456/*NULL PARAM!*/,case$457.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$453,{t:$$$cjl167.JSNumber})) {
                
                var case$458=data$454;
                if ($$$cl1.isOfType(data$454,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455/*NULL PARAM!*/,case$456.$native/*NULL PARAM!*/,case$458.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$454,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455/*NULL PARAM!*/,case$456.$native/*NULL PARAM!*/,case$458.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(offset$452,{t:$$$cjl167.JSNumber})) {
            
            var case$459=count$453;
            if ($$$cl1.isOfType(count$453,{t:$$$cl1.Integer})) {
                
                var case$460=data$454;
                if ($$$cl1.isOfType(data$454,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455.$native/*NULL PARAM!*/,case$459/*NULL PARAM!*/,case$460.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$454,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455.$native/*NULL PARAM!*/,case$459/*NULL PARAM!*/,case$460.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(count$453,{t:$$$cjl167.JSNumber})) {
                
                var case$461=data$454;
                if ($$$cl1.isOfType(data$454,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455.$native/*NULL PARAM!*/,case$459.$native/*NULL PARAM!*/,case$461.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(data$454,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$characterDataAbs.$native.replaceData(/*NULL PARAM!*/case$455.$native/*NULL PARAM!*/,case$459.$native/*NULL PARAM!*/,case$461.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$characterDataAbs.replaceData=replaceData;
    replaceData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'count',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:CharacterDataAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CharacterDataAbs','$m','replaceData']};};
    return $$characterDataAbs;
}
CharacterDataAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CharacterDataAbs']};};
exports.CharacterDataAbs=CharacterDataAbs;
function $init$CharacterDataAbs(){
    if (CharacterDataAbs.$$===undefined){
        $$$cl1.initTypeProto(CharacterDataAbs,'ceylon.js.dom::CharacterDataAbs',NodeAbs);
    }
    return CharacterDataAbs;
}
exports.$init$CharacterDataAbs=$init$CharacterDataAbs;
$init$CharacterDataAbs();
var $$$cjh462=require('ceylon/js/html/5.0.0/ceylon.js.html-5.0.0');
$$$cl1.$addmod$($$$cjh462,'ceylon.js.html/5.0.0');
var $$$cjd401=require('ceylon/js/dom/4.0.0/ceylon.js.dom-4.0.0');
$$$cl1.$addmod$($$$cjd401,'ceylon.js.dom/4.0.0');
function DocumentPosition(name$463, $$documentPosition){
    $init$DocumentPosition();
    if ($$documentPosition===undefined)$$documentPosition=new DocumentPosition.$$;
    $$documentPosition.name$463_=name$463;
    $$$cl1.defineAttr($$documentPosition,'name$463',function(){return this.name$463_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentPosition,d:['ceylon.js.dom','DocumentPosition','$at','name']};});
    return $$documentPosition;
}
DocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentPosition']};};
exports.DocumentPosition=DocumentPosition;
function $init$DocumentPosition(){
    if (DocumentPosition.$$===undefined){
        $$$cl1.initTypeProto(DocumentPosition,'ceylon.js.dom::DocumentPosition',$$$cl1.Basic);
    }
    return DocumentPosition;
}
exports.$init$DocumentPosition=$init$DocumentPosition;
$init$DocumentPosition();
function documentPositionContainedBy$464(){
    var $$documentPositionContainedBy=new documentPositionContainedBy$464.$$;
    DocumentPosition($$$cl1.String("documentPositionContainedBy",27),$$documentPositionContainedBy);
    return $$documentPositionContainedBy;
}
function $init$documentPositionContainedBy$464(){
    if (documentPositionContainedBy$464.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContainedBy$464,'ceylon.js.dom::documentPositionContainedBy',DocumentPosition);
    }
    return documentPositionContainedBy$464;
}
exports.$init$documentPositionContainedBy$464=$init$documentPositionContainedBy$464;
$init$documentPositionContainedBy$464();
var documentPositionContainedBy$465=documentPositionContainedBy$464();
var getDocumentPositionContainedBy=function(){
    return documentPositionContainedBy$465;
}
exports.getDocumentPositionContainedBy=getDocumentPositionContainedBy;
getDocumentPositionContainedBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContainedBy$464},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContainedBy']};};
$prop$getDocumentPositionContainedBy={get:getDocumentPositionContainedBy,$$metamodel$$:getDocumentPositionContainedBy.$$metamodel$$};
exports.$prop$getDocumentPositionContainedBy=$prop$getDocumentPositionContainedBy;
function documentPositionContains$466(){
    var $$documentPositionContains=new documentPositionContains$466.$$;
    DocumentPosition($$$cl1.String("documentPositionContains",24),$$documentPositionContains);
    return $$documentPositionContains;
}
function $init$documentPositionContains$466(){
    if (documentPositionContains$466.$$===undefined){
        $$$cl1.initTypeProto(documentPositionContains$466,'ceylon.js.dom::documentPositionContains',DocumentPosition);
    }
    return documentPositionContains$466;
}
exports.$init$documentPositionContains$466=$init$documentPositionContains$466;
$init$documentPositionContains$466();
var documentPositionContains$467=documentPositionContains$466();
var getDocumentPositionContains=function(){
    return documentPositionContains$467;
}
exports.getDocumentPositionContains=getDocumentPositionContains;
getDocumentPositionContains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionContains$466},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionContains']};};
$prop$getDocumentPositionContains={get:getDocumentPositionContains,$$metamodel$$:getDocumentPositionContains.$$metamodel$$};
exports.$prop$getDocumentPositionContains=$prop$getDocumentPositionContains;
function documentPositionDisconnected$468(){
    var $$documentPositionDisconnected=new documentPositionDisconnected$468.$$;
    DocumentPosition($$$cl1.String("documentPositionDisconnected",28),$$documentPositionDisconnected);
    return $$documentPositionDisconnected;
}
function $init$documentPositionDisconnected$468(){
    if (documentPositionDisconnected$468.$$===undefined){
        $$$cl1.initTypeProto(documentPositionDisconnected$468,'ceylon.js.dom::documentPositionDisconnected',DocumentPosition);
    }
    return documentPositionDisconnected$468;
}
exports.$init$documentPositionDisconnected$468=$init$documentPositionDisconnected$468;
$init$documentPositionDisconnected$468();
var documentPositionDisconnected$469=documentPositionDisconnected$468();
var getDocumentPositionDisconnected=function(){
    return documentPositionDisconnected$469;
}
exports.getDocumentPositionDisconnected=getDocumentPositionDisconnected;
getDocumentPositionDisconnected.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionDisconnected$468},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionDisconnected']};};
$prop$getDocumentPositionDisconnected={get:getDocumentPositionDisconnected,$$metamodel$$:getDocumentPositionDisconnected.$$metamodel$$};
exports.$prop$getDocumentPositionDisconnected=$prop$getDocumentPositionDisconnected;
function documentPositionFollowing$470(){
    var $$documentPositionFollowing=new documentPositionFollowing$470.$$;
    DocumentPosition($$$cl1.String("documentPositionFollowing",25),$$documentPositionFollowing);
    return $$documentPositionFollowing;
}
function $init$documentPositionFollowing$470(){
    if (documentPositionFollowing$470.$$===undefined){
        $$$cl1.initTypeProto(documentPositionFollowing$470,'ceylon.js.dom::documentPositionFollowing',DocumentPosition);
    }
    return documentPositionFollowing$470;
}
exports.$init$documentPositionFollowing$470=$init$documentPositionFollowing$470;
$init$documentPositionFollowing$470();
var documentPositionFollowing$471=documentPositionFollowing$470();
var getDocumentPositionFollowing=function(){
    return documentPositionFollowing$471;
}
exports.getDocumentPositionFollowing=getDocumentPositionFollowing;
getDocumentPositionFollowing.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionFollowing$470},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionFollowing']};};
$prop$getDocumentPositionFollowing={get:getDocumentPositionFollowing,$$metamodel$$:getDocumentPositionFollowing.$$metamodel$$};
exports.$prop$getDocumentPositionFollowing=$prop$getDocumentPositionFollowing;
function documentPositionImplementationSpecific$472(){
    var $$documentPositionImplementationSpecific=new documentPositionImplementationSpecific$472.$$;
    DocumentPosition($$$cl1.String("documentPositionImplementationSpecific",38),$$documentPositionImplementationSpecific);
    return $$documentPositionImplementationSpecific;
}
function $init$documentPositionImplementationSpecific$472(){
    if (documentPositionImplementationSpecific$472.$$===undefined){
        $$$cl1.initTypeProto(documentPositionImplementationSpecific$472,'ceylon.js.dom::documentPositionImplementationSpecific',DocumentPosition);
    }
    return documentPositionImplementationSpecific$472;
}
exports.$init$documentPositionImplementationSpecific$472=$init$documentPositionImplementationSpecific$472;
$init$documentPositionImplementationSpecific$472();
var documentPositionImplementationSpecific$473=documentPositionImplementationSpecific$472();
var getDocumentPositionImplementationSpecific=function(){
    return documentPositionImplementationSpecific$473;
}
exports.getDocumentPositionImplementationSpecific=getDocumentPositionImplementationSpecific;
getDocumentPositionImplementationSpecific.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionImplementationSpecific$472},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionImplementationSpecific']};};
$prop$getDocumentPositionImplementationSpecific={get:getDocumentPositionImplementationSpecific,$$metamodel$$:getDocumentPositionImplementationSpecific.$$metamodel$$};
exports.$prop$getDocumentPositionImplementationSpecific=$prop$getDocumentPositionImplementationSpecific;
function documentPositionPreceding$474(){
    var $$documentPositionPreceding=new documentPositionPreceding$474.$$;
    DocumentPosition($$$cl1.String("documentPositionPreceding",25),$$documentPositionPreceding);
    return $$documentPositionPreceding;
}
function $init$documentPositionPreceding$474(){
    if (documentPositionPreceding$474.$$===undefined){
        $$$cl1.initTypeProto(documentPositionPreceding$474,'ceylon.js.dom::documentPositionPreceding',DocumentPosition);
    }
    return documentPositionPreceding$474;
}
exports.$init$documentPositionPreceding$474=$init$documentPositionPreceding$474;
$init$documentPositionPreceding$474();
var documentPositionPreceding$475=documentPositionPreceding$474();
var getDocumentPositionPreceding=function(){
    return documentPositionPreceding$475;
}
exports.getDocumentPositionPreceding=getDocumentPositionPreceding;
getDocumentPositionPreceding.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentPositionPreceding$474},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentPositionPreceding']};};
$prop$getDocumentPositionPreceding={get:getDocumentPositionPreceding,$$metamodel$$:getDocumentPositionPreceding.$$metamodel$$};
exports.$prop$getDocumentPositionPreceding=$prop$getDocumentPositionPreceding;
function CompatMode(name$476, $$compatMode){
    $init$CompatMode();
    if ($$compatMode===undefined)$$compatMode=new CompatMode.$$;
    $$compatMode.name$476_=name$476;
    $$$cl1.defineAttr($$compatMode,'name$476',function(){return this.name$476_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:CompatMode,d:['ceylon.js.dom','CompatMode','$at','name']};});
    return $$compatMode;
}
CompatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CompatMode']};};
exports.CompatMode=CompatMode;
function $init$CompatMode(){
    if (CompatMode.$$===undefined){
        $$$cl1.initTypeProto(CompatMode,'ceylon.js.dom::CompatMode',$$$cl1.Basic);
    }
    return CompatMode;
}
exports.$init$CompatMode=$init$CompatMode;
$init$CompatMode();
function css1Compat$477(){
    var $$css1Compat=new css1Compat$477.$$;
    CompatMode($$$cl1.String("CSS1Compat",10),$$css1Compat);
    return $$css1Compat;
}
function $init$css1Compat$477(){
    if (css1Compat$477.$$===undefined){
        $$$cl1.initTypeProto(css1Compat$477,'ceylon.js.dom::css1Compat',CompatMode);
    }
    return css1Compat$477;
}
exports.$init$css1Compat$477=$init$css1Compat$477;
$init$css1Compat$477();
var css1Compat$478=css1Compat$477();
var getCss1Compat=function(){
    return css1Compat$478;
}
exports.getCss1Compat=getCss1Compat;
getCss1Compat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:css1Compat$477},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','css1Compat']};};
$prop$getCss1Compat={get:getCss1Compat,$$metamodel$$:getCss1Compat.$$metamodel$$};
exports.$prop$getCss1Compat=$prop$getCss1Compat;
function backCompat$479(){
    var $$backCompat=new backCompat$479.$$;
    CompatMode($$$cl1.String("BackCompat",10),$$backCompat);
    return $$backCompat;
}
function $init$backCompat$479(){
    if (backCompat$479.$$===undefined){
        $$$cl1.initTypeProto(backCompat$479,'ceylon.js.dom::backCompat',CompatMode);
    }
    return backCompat$479;
}
exports.$init$backCompat$479=$init$backCompat$479;
$init$backCompat$479();
var backCompat$480=backCompat$479();
var getBackCompat=function(){
    return backCompat$480;
}
exports.getBackCompat=getBackCompat;
getBackCompat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:backCompat$479},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','backCompat']};};
$prop$getBackCompat={get:getBackCompat,$$metamodel$$:getBackCompat.$$metamodel$$};
exports.$prop$getBackCompat=$prop$getBackCompat;
function DocumentDirection(name$481, $$documentDirection){
    $init$DocumentDirection();
    if ($$documentDirection===undefined)$$documentDirection=new DocumentDirection.$$;
    $$documentDirection.name$481_=name$481;
    $$$cl1.defineAttr($$documentDirection,'name$481',function(){return this.name$481_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentDirection,d:['ceylon.js.dom','DocumentDirection','$at','name']};});
    return $$documentDirection;
}
DocumentDirection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentDirection']};};
exports.DocumentDirection=DocumentDirection;
function $init$DocumentDirection(){
    if (DocumentDirection.$$===undefined){
        $$$cl1.initTypeProto(DocumentDirection,'ceylon.js.dom::DocumentDirection',$$$cl1.Basic);
    }
    return DocumentDirection;
}
exports.$init$DocumentDirection=$init$DocumentDirection;
$init$DocumentDirection();
function rtl$482(){
    var $$rtl=new rtl$482.$$;
    DocumentDirection($$$cl1.String("rtl",3),$$rtl);
    return $$rtl;
}
function $init$rtl$482(){
    if (rtl$482.$$===undefined){
        $$$cl1.initTypeProto(rtl$482,'ceylon.js.dom::rtl',DocumentDirection);
    }
    return rtl$482;
}
exports.$init$rtl$482=$init$rtl$482;
$init$rtl$482();
var rtl$483=rtl$482();
var getRtl=function(){
    return rtl$483;
}
exports.getRtl=getRtl;
getRtl.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:rtl$482},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','rtl']};};
$prop$getRtl={get:getRtl,$$metamodel$$:getRtl.$$metamodel$$};
exports.$prop$getRtl=$prop$getRtl;
function ltr$484(){
    var $$ltr=new ltr$484.$$;
    DocumentDirection($$$cl1.String("ltr",3),$$ltr);
    return $$ltr;
}
function $init$ltr$484(){
    if (ltr$484.$$===undefined){
        $$$cl1.initTypeProto(ltr$484,'ceylon.js.dom::ltr',DocumentDirection);
    }
    return ltr$484;
}
exports.$init$ltr$484=$init$ltr$484;
$init$ltr$484();
var ltr$485=ltr$484();
var getLtr=function(){
    return ltr$485;
}
exports.getLtr=getLtr;
getLtr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ltr$484},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ltr']};};
$prop$getLtr={get:getLtr,$$metamodel$$:getLtr.$$metamodel$$};
exports.$prop$getLtr=$prop$getLtr;
function DocumentReadyState(name$486, $$documentReadyState){
    $init$DocumentReadyState();
    if ($$documentReadyState===undefined)$$documentReadyState=new DocumentReadyState.$$;
    $$documentReadyState.name$486_=name$486;
    $$$cl1.defineAttr($$documentReadyState,'name$486',function(){return this.name$486_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:DocumentReadyState,d:['ceylon.js.dom','DocumentReadyState','$at','name']};});
    return $$documentReadyState;
}
DocumentReadyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentReadyState']};};
exports.DocumentReadyState=DocumentReadyState;
function $init$DocumentReadyState(){
    if (DocumentReadyState.$$===undefined){
        $$$cl1.initTypeProto(DocumentReadyState,'ceylon.js.dom::DocumentReadyState',$$$cl1.Basic);
    }
    return DocumentReadyState;
}
exports.$init$DocumentReadyState=$init$DocumentReadyState;
$init$DocumentReadyState();
function loading$487(){
    var $$loading=new loading$487.$$;
    DocumentReadyState($$$cl1.String("loading",7),$$loading);
    return $$loading;
}
function $init$loading$487(){
    if (loading$487.$$===undefined){
        $$$cl1.initTypeProto(loading$487,'ceylon.js.dom::loading',DocumentReadyState);
    }
    return loading$487;
}
exports.$init$loading$487=$init$loading$487;
$init$loading$487();
var loading$488=loading$487();
var getLoading=function(){
    return loading$488;
}
exports.getLoading=getLoading;
getLoading.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:loading$487},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','loading']};};
$prop$getLoading={get:getLoading,$$metamodel$$:getLoading.$$metamodel$$};
exports.$prop$getLoading=$prop$getLoading;
function interactive$489(){
    var $$interactive=new interactive$489.$$;
    DocumentReadyState($$$cl1.String("interactive",11),$$interactive);
    return $$interactive;
}
function $init$interactive$489(){
    if (interactive$489.$$===undefined){
        $$$cl1.initTypeProto(interactive$489,'ceylon.js.dom::interactive',DocumentReadyState);
    }
    return interactive$489;
}
exports.$init$interactive$489=$init$interactive$489;
$init$interactive$489();
var interactive$490=interactive$489();
var getInteractive=function(){
    return interactive$490;
}
exports.getInteractive=getInteractive;
getInteractive.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:interactive$489},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','interactive']};};
$prop$getInteractive={get:getInteractive,$$metamodel$$:getInteractive.$$metamodel$$};
exports.$prop$getInteractive=$prop$getInteractive;
function complete$491(){
    var $$complete=new complete$491.$$;
    DocumentReadyState($$$cl1.String("complete",8),$$complete);
    return $$complete;
}
function $init$complete$491(){
    if (complete$491.$$===undefined){
        $$$cl1.initTypeProto(complete$491,'ceylon.js.dom::complete',DocumentReadyState);
    }
    return complete$491;
}
exports.$init$complete$491=$init$complete$491;
$init$complete$491();
var complete$492=complete$491();
var getComplete=function(){
    return complete$492;
}
exports.getComplete=getComplete;
getComplete.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:complete$491},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','complete']};};
$prop$getComplete={get:getComplete,$$metamodel$$:getComplete.$$metamodel$$};
exports.$prop$getComplete=$prop$getComplete;
function Document(n$493, $$document){
    $init$Document();
    if ($$document===undefined)$$document=new Document.$$;
    $$document.n$493_=n$493;
    DocumentAbs($$document);
    $$$cl1.defineAttr($$document,'n$493',function(){return this.n$493_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,d:['ceylon.js.dom','Document','$at','n']};});
    $$document.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Document,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Document','$at','native']};}};
    /*Begin dynamic block*/
    $$document.$native=n$493;/*End dynamic block*/
    return $$document;
}
Document.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Document']};};
exports.Document=Document;
function $init$Document(){
    if (Document.$$===undefined){
        $$$cl1.initTypeProto(Document,'ceylon.js.dom::Document',DocumentAbs);
    }
    return Document;
}
exports.$init$Document=$init$Document;
$init$Document();
function DocumentAbs($$documentAbs){
    $init$DocumentAbs();
    if ($$documentAbs===undefined)$$documentAbs=new DocumentAbs.$$;
    NodeAbs($$documentAbs);
    function activeElement(){
        /*Begin dynamic block*/
        return Element($$documentAbs.$native.activeElement);
        /*End dynamic block*/
    }
    $$documentAbs.activeElement=activeElement;
    activeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','activeElement']};};
    function adoptNode(node$494){
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.adoptNode(/*NULL PARAM!*/node$494.$native));
        /*End dynamic block*/
    }
    $$documentAbs.adoptNode=adoptNode;
    adoptNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','adoptNode']};};
    function createRange(){
        /*Begin dynamic block*/
        return Range($$documentAbs.$native.createRange());
        /*End dynamic block*/
    }
    $$documentAbs.createRange=createRange;
    createRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createRange']};};
    function createAttribute(name$495){
        
        var case$496=name$495;
        if ($$$cl1.isOfType(name$495,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$496.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$495,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return Attr($$documentAbs.$native.createAttribute(/*NULL PARAM!*/case$496.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createAttribute=createAttribute;
    createAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttribute']};};
    function url(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.URL);
        /*End dynamic block*/
    }
    $$documentAbs.url=url;
    url.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','url']};};
    function createAttributeNS(namespace$497,name$498){
        
        var case$499=namespace$497;
        if ($$$cl1.isOfType(namespace$497,{t:$$$cl1.String})) {
            
            var case$500=name$498;
            if ($$$cl1.isOfType(name$498,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$499.valueOf()/*NULL PARAM!*/,case$500.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$498,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$499.valueOf()/*NULL PARAM!*/,case$500.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$497,{t:$$$cjl167.JSString})) {
            
            var case$501=name$498;
            if ($$$cl1.isOfType(name$498,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$499.$native/*NULL PARAM!*/,case$501.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$498,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/case$499.$native/*NULL PARAM!*/,case$501.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$497,{t:$$$cl1.Null})) {
            
            var case$502=name$498;
            if ($$$cl1.isOfType(name$498,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$502.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(name$498,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Attr($$documentAbs.$native.createAttributeNS(/*NULL PARAM!*/null/*NULL PARAM!*/,case$502.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createAttributeNS=createAttributeNS;
    createAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Attr},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createAttributeNS']};};
    function createCDATASection(data$503){
        
        var case$504=data$503;
        if ($$$cl1.isOfType(data$503,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$504.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$503,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return CDATASection($$documentAbs.$native.createCDATASection(/*NULL PARAM!*/case$504.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createCDATASection=createCDATASection;
    createCDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CDATASection},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createCDATASection']};};
    function createComment(data$505){
        
        var case$506=data$505;
        if ($$$cl1.isOfType(data$505,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$506.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$505,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return Comment($$documentAbs.$native.createComment(/*NULL PARAM!*/case$506.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createComment=createComment;
    createComment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Comment},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createComment']};};
    function createDocumentFragment(){
        /*Begin dynamic block*/
        return DocumentFragment($$documentAbs.$native.createDocumentFragment());
        /*End dynamic block*/
    }
    $$documentAbs.createDocumentFragment=createDocumentFragment;
    createDocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createDocumentFragment']};};
    function createElement(tagName$507){
        
        var case$508=tagName$507;
        if ($$$cl1.isOfType(tagName$507,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$508.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$507,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.createElement(/*NULL PARAM!*/case$508.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createElement=createElement;
    createElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'tagName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElement']};};
    function createElementNS(namespaceURI$509,qualifiedName$510){
        
        var case$511=namespaceURI$509;
        if ($$$cl1.isOfType(namespaceURI$509,{t:$$$cl1.String})) {
            
            var case$512=qualifiedName$510;
            if ($$$cl1.isOfType(qualifiedName$510,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$511.valueOf()/*NULL PARAM!*/,case$512.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$510,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$511.valueOf()/*NULL PARAM!*/,case$512.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespaceURI$509,{t:$$$cjl167.JSString})) {
            
            var case$513=qualifiedName$510;
            if ($$$cl1.isOfType(qualifiedName$510,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$511/*NULL PARAM!*/,case$513.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$510,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.createElementNS(/*NULL PARAM!*/case$511.$native/*NULL PARAM!*/,case$513.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createElementNS=createElementNS;
    createElementNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createElementNS']};};
    function createProcessingInstruction(target$514,data$515){
        
        var case$516=target$514;
        if ($$$cl1.isOfType(target$514,{t:$$$cl1.String})) {
            
            var case$517=data$515;
            if ($$$cl1.isOfType(data$515,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$516.valueOf()/*NULL PARAM!*/,case$517.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$515,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$516.valueOf()/*NULL PARAM!*/,case$517.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(target$514,{t:$$$cjl167.JSString})) {
            
            var case$518=data$515;
            if ($$$cl1.isOfType(data$515,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$516.$native/*NULL PARAM!*/,case$518.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(data$515,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return ProcessingInstruction($$documentAbs.$native.createProcessingInstruction(/*NULL PARAM!*/case$516.$native/*NULL PARAM!*/,case$518.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.createProcessingInstruction=createProcessingInstruction;
    createProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ProcessingInstruction},$ps:[{$nm:'target',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createProcessingInstruction']};};
    function createTextNode(data$519){
        
        var case$520=data$519;
        if ($$$cl1.isOfType(data$519,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$520.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$519,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return Text($$documentAbs.$native.createTextNode(/*NULL PARAM!*/case$520.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.createTextNode=createTextNode;
    createTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTextNode']};};
    function doctype(){
        /*Begin dynamic block*/
        var doctype$521=$$documentAbs.$native.doctype;
        $prop$getDoctype$521={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','doctype','$at','doctype']};}};
        $prop$getDoctype$521.get=function(){return doctype$521};
        if((tmpvar$522=doctype$521,tmpvar$523=null,(tmpvar$522.equals&&!tmpvar$522.equals(tmpvar$523))||tmpvar$522!==tmpvar$523)){
            return DocumentType(doctype$521);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.doctype=doctype;
    doctype.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','doctype']};};
    function documentElement(){
        /*Begin dynamic block*/
        var element$524=$$documentAbs.$native.documentElement;
        $prop$getElement$524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','documentElement','$at','element']};}};
        $prop$getElement$524.get=function(){return element$524};
        if((tmpvar$525=element$524,tmpvar$526=null,(tmpvar$525.equals&&!tmpvar$525.equals(tmpvar$526))||tmpvar$525!==tmpvar$526)){
            return Element(element$524);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.documentElement=documentElement;
    documentElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentElement']};};
    function documentURI(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.documentURI);
        /*End dynamic block*/
    }
    $$documentAbs.documentURI=documentURI;
    documentURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','documentURI']};};
    function compatMode(){
        /*Begin dynamic block*/
        if((tmpvar$527=$$documentAbs.$native.compatMode,tmpvar$528=$$$cl1.String("BackCompat",10),(tmpvar$527.equals&&tmpvar$527.equals(tmpvar$528))||tmpvar$527===tmpvar$528)){
            return getBackCompat();
        }else {
            return getCss1Compat();
        }/*End dynamic block*/
    }
    $$documentAbs.compatMode=compatMode;
    compatMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:CompatMode},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','compatMode']};};
    function characterSet(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.characterSet);
        /*End dynamic block*/
    }
    $$documentAbs.characterSet=characterSet;
    characterSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','characterSet']};};
    function getElementById(id$529){
        var element$530;
        $prop$getElement$530={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','getElementById','$at','element']};}};
        $prop$getElement$530.get=function(){return element$530};
        
        var case$531=id$529;
        if ($$$cl1.isOfType(id$529,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            element$530=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$531.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(id$529,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            element$530=$$documentAbs.$native.getElementById(/*NULL PARAM!*/case$531.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$532=element$530,tmpvar$533=null,(tmpvar$532.equals&&!tmpvar$532.equals(tmpvar$533))||tmpvar$532!==tmpvar$533)){
            return Element(element$530);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.getElementById=getElementById;
    getElementById.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'id',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementById']};};
    $$documentAbs.getElementsByTagName$defs$name=function(name$534){return $$$cl1.String("*",1);};
    function getElementsByTagName(name$534){
        if(name$534===undefined){name$534=$$documentAbs.getElementsByTagName$defs$name(name$534);}
        var elems$535;
        $prop$getElems$535={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagName','$at','elems']};}};
        $prop$getElems$535.get=function(){return elems$535};
        
        var case$536=name$534;
        if ($$$cl1.isOfType(name$534,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            elems$535=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$536.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$534,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            elems$535=$$documentAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$536.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(elems$535.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'325:26-325:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$535);
        }else {
            return NodeList(elems$535);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagName']};};
    $$documentAbs.getElementsByTagNameNS$defs$name=function(namespace$537,name$538){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$537,name$538){
        if(name$538===undefined){name$538=$$documentAbs.getElementsByTagNameNS$defs$name(namespace$537,name$538);}
        var elems$539;
        $prop$getElems$539={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS','$at','elems']};}};
        $prop$getElems$539.get=function(){return elems$539};
        
        var case$540=namespace$537;
        if ($$$cl1.isOfType(namespace$537,{t:$$$cl1.String})) {
            
            var case$541=name$538;
            if ($$$cl1.isOfType(name$538,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$539=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$540.valueOf()/*NULL PARAM!*/,case$541.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$538,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                elems$539=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$540.valueOf()/*NULL PARAM!*/,case$541.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$537,{t:$$$cjl167.JSString})) {
            
            var case$542=name$538;
            if ($$$cl1.isOfType(name$538,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                elems$539=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$540/*NULL PARAM!*/,case$542.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(name$538,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                elems$539=$$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$540.$native/*NULL PARAM!*/,case$542.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(elems$539.instanceof(/*NULL PARAM!*/(typeof HTMLCollection==='undefined'||HTMLCollection===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: HTMLCollection")),'363:26-363:39','document.ceylon'):HTMLCollection))){
            return HTMLCollection(elems$539);
        }else {
            return NodeList(elems$539);
        }/*End dynamic block*/
    }
    $$documentAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:HTMLCollection},{t:NodeList}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByTagNameNS']};};
    function getElementsByClassName(names$543){
        
        var case$544=names$543;
        if ($$$cl1.isOfType(names$543,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$544.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(names$543,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$544.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByClassName=getElementsByClassName;
    getElementsByClassName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'names',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByClassName']};};
    function implementation(){
        /*Begin dynamic block*/
        return DOMImplementation($$documentAbs.$native.implementation);
        /*End dynamic block*/
    }
    $$documentAbs.implementation=implementation;
    implementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DOMImplementation},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','implementation']};};
    $$documentAbs.importNode$defs$deep=function(externalNode$545,deep$546){return true;};
    function importNode(externalNode$545,deep$546){
        if(deep$546===undefined){deep$546=$$documentAbs.importNode$defs$deep(externalNode$545,deep$546);}
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.importNode(/*NULL PARAM!*/externalNode$545/*NULL PARAM!*/,deep$546));
        /*End dynamic block*/
    }
    $$documentAbs.importNode=importNode;
    importNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'externalNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'deep',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','importNode']};};
    $$documentAbs.createNodeIterator$defs$whatToShow=function(root$547,whatToShow$548,filter$549){return null;};
    $$documentAbs.createNodeIterator$defs$filter=function(root$547,whatToShow$548,filter$549){return null;};
    function createNodeIterator(root$547,whatToShow$548,filter$549){
        if(whatToShow$548===undefined){whatToShow$548=$$documentAbs.createNodeIterator$defs$whatToShow(root$547,whatToShow$548,filter$549);}
        if(filter$549===undefined){filter$549=$$documentAbs.createNodeIterator$defs$filter(root$547,whatToShow$548,filter$549);}
        /*Begin dynamic block*/
        return NodeIterator($$documentAbs.$native.createNodeIterator(/*NULL PARAM!*/root$547/*NULL PARAM!*/,whatToShow$548/*NULL PARAM!*/,filter$549));
        /*End dynamic block*/
    }
    $$documentAbs.createNodeIterator=createNodeIterator;
    createNodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeIterator},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createNodeIterator']};};
    $$documentAbs.createTreeWalker$defs$whatToShow=function(root$550,whatToShow$551,filter$552){return null;};
    $$documentAbs.createTreeWalker$defs$filter=function(root$550,whatToShow$551,filter$552){return null;};
    function createTreeWalker(root$550,whatToShow$551,filter$552){
        if(whatToShow$551===undefined){whatToShow$551=$$documentAbs.createTreeWalker$defs$whatToShow(root$550,whatToShow$551,filter$552);}
        if(filter$552===undefined){filter$552=$$documentAbs.createTreeWalker$defs$filter(root$550,whatToShow$551,filter$552);}
        /*Begin dynamic block*/
        return TreeWalker($$documentAbs.$native.createTreeWalker(/*NULL PARAM!*/root$550/*NULL PARAM!*/,whatToShow$551/*NULL PARAM!*/,filter$552));
        /*End dynamic block*/
    }
    $$documentAbs.createTreeWalker=createTreeWalker;
    createTreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TreeWalker},$ps:[{$nm:'root',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'whatToShow',$mt:'prm',$def:1,$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'filter',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','createTreeWalker']};};
    function anchors(){
        /*Begin dynamic block*/
        return NodeList($$documentAbs.$native.anchors);
        /*End dynamic block*/
    }
    $$documentAbs.anchors=anchors;
    anchors.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','anchors']};};
    function getAsync(){
        /*Begin dynamic block*/
        if($$documentAbs.$native.async){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.getAsync=getAsync;
    getAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getAsync']};};
    function setAsync(async$553){
        /*Begin dynamic block*/
        $$documentAbs.$native.async=async$553;
        /*End dynamic block*/
    }
    $$documentAbs.setAsync=setAsync;
    setAsync.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'async',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setAsync']};};
    function body(){
        /*Begin dynamic block*/
        return Node($$documentAbs.$native.body);
        /*End dynamic block*/
    }
    $$documentAbs.body=body;
    body.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','body']};};
    function getCookie(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.cookie);
        /*End dynamic block*/
    }
    $$documentAbs.getCookie=getCookie;
    getCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getCookie']};};
    function setCookie(cookie$554){
        
        var case$555=cookie$554;
        if ($$$cl1.isOfType(cookie$554,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$555.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(cookie$554,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.cookie=case$555.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setCookie=setCookie;
    setCookie.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'cookie',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setCookie']};};
    function defaultView(){
        /*Begin dynamic block*/
        var view$556=$$documentAbs.$native.defaultView;
        $prop$getView$556={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','defaultView','$at','view']};}};
        $prop$getView$556.get=function(){return view$556};
        if((tmpvar$557=view$556,tmpvar$558=null,(tmpvar$557.equals&&!tmpvar$557.equals(tmpvar$558))||tmpvar$557!==tmpvar$558)){
            return $$$cjh462.Window(view$556);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.defaultView=defaultView;
    defaultView.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjh462.Window}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','defaultView']};};
    function getDesignMode(){
        /*Begin dynamic block*/
        if((tmpvar$559=$$documentAbs.$native.designMode,tmpvar$560=$$$cl1.String("on",2),(tmpvar$559.equals&&tmpvar$559.equals(tmpvar$560))||tmpvar$559===tmpvar$560)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.getDesignMode=getDesignMode;
    getDesignMode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDesignMode']};};
    function getDir(){
        /*Begin dynamic block*/
        if((tmpvar$561=$$documentAbs.$native.dir,tmpvar$562=$$$cl1.String("ltr",3),(tmpvar$561.equals&&tmpvar$561.equals(tmpvar$562))||tmpvar$561===tmpvar$562)){
            return getLtr();
        }else {
            return getRtl();
        }/*End dynamic block*/
    }
    $$documentAbs.getDir=getDir;
    getDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentDirection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDir']};};
    function setDir(dir$563){
        /*Begin dynamic block*/
        $$documentAbs.$native.dir=dir$563.string.valueOf();
        /*End dynamic block*/
    }
    $$documentAbs.setDir=setDir;
    setDir.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'dir',$mt:'prm',$t:{t:DocumentDirection},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDir']};};
    function getDomain(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.domain);
        /*End dynamic block*/
    }
    $$documentAbs.getDomain=getDomain;
    getDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getDomain']};};
    function setDomain(domain$564){
        
        var case$565=domain$564;
        if ($$$cl1.isOfType(domain$564,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$565.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(domain$564,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.domain=case$565.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setDomain=setDomain;
    setDomain.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'domain',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setDomain']};};
    function forms(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.forms);
        /*End dynamic block*/
    }
    $$documentAbs.forms=forms;
    forms.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','forms']};};
    function head(){
        /*Begin dynamic block*/
        return Element($$documentAbs.$native.head);
        /*End dynamic block*/
    }
    $$documentAbs.head=head;
    head.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','head']};};
    function images(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.images);
        /*End dynamic block*/
    }
    $$documentAbs.images=images;
    images.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','images']};};
    function lastModified(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.lastModified);
        /*End dynamic block*/
    }
    $$documentAbs.lastModified=lastModified;
    lastModified.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastModified']};};
    function lastStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.lastStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.lastStyleSheetSet=lastStyleSheetSet;
    lastStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','lastStyleSheetSet']};};
    function links(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.links);
        /*End dynamic block*/
    }
    $$documentAbs.links=links;
    links.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','links']};};
    function location(){
        /*Begin dynamic block*/
        return $$$cjh462.Location($$documentAbs.$native.location);
        /*End dynamic block*/
    }
    $$documentAbs.location=location;
    location.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh462.Location},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','location']};};
    function plugins(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.plugins);
        /*End dynamic block*/
    }
    $$documentAbs.plugins=plugins;
    plugins.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','plugins']};};
    function preferredStyleSheetSet(){
        /*Begin dynamic block*/
        var preferred$566=(typeof document==='undefined'||document===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: document")),'564:23-564:30','document.ceylon'):document).preferredStyleSheetSet;
        $prop$getPreferred$566={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet','$at','preferred']};}};
        $prop$getPreferred$566.get=function(){return preferred$566};
        if((tmpvar$567=preferred$566,tmpvar$568=null,(tmpvar$567.equals&&!tmpvar$567.equals(tmpvar$568))||tmpvar$567!==tmpvar$568)){
            return $$$cjl167.JSString(preferred$566);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$documentAbs.preferredStyleSheetSet=preferredStyleSheetSet;
    preferredStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','preferredStyleSheetSet']};};
    function readyState(){
        /*Begin dynamic block*/
        var readyState$569=$$documentAbs.$native.readyState;
        $prop$getReadyState$569={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DocumentAbs','$m','readyState','$at','readyState']};}};
        $prop$getReadyState$569.get=function(){return readyState$569};
        if((tmpvar$570=readyState$569,tmpvar$571=$$$cl1.String("loading",7),(tmpvar$570.equals&&tmpvar$570.equals(tmpvar$571))||tmpvar$570===tmpvar$571)){
            return getLoading();
        }else {
            if((tmpvar$572=readyState$569,tmpvar$573=$$$cl1.String("interactive",11),(tmpvar$572.equals&&tmpvar$572.equals(tmpvar$573))||tmpvar$572===tmpvar$573)){
                return getInteractive();
            }else {
                return getComplete();
            }
        }/*End dynamic block*/
    }
    $$documentAbs.readyState=readyState;
    readyState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentReadyState},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','readyState']};};
    function referrer(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.referrer);
        /*End dynamic block*/
    }
    $$documentAbs.referrer=referrer;
    referrer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','referrer']};};
    function scripts(){
        /*Begin dynamic block*/
        return HTMLCollection($$documentAbs.$native.scripts);
        /*End dynamic block*/
    }
    $$documentAbs.scripts=scripts;
    scripts.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','scripts']};};
    function getSelectedStyleSheetSet(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.selectedStyleSheetSet);
        /*End dynamic block*/
    }
    $$documentAbs.getSelectedStyleSheetSet=getSelectedStyleSheetSet;
    getSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getSelectedStyleSheetSet']};};
    function setSelectedStyleSheetSet(sheet$574){
        
        var case$575=sheet$574;
        if ($$$cl1.isOfType(sheet$574,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$575.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(sheet$574,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.selectedStyleSheetSet=case$575.$native;
            /*End dynamic block*/
        }
    }
    $$documentAbs.setSelectedStyleSheetSet=setSelectedStyleSheetSet;
    setSelectedStyleSheetSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'sheet',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','setSelectedStyleSheetSet']};};
    function styleSheets(){
        /*Begin dynamic block*/
        return $$$cjd401.StyleSheetList$stylesheets($$documentAbs.$native.styleSheets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheets=styleSheets;
    styleSheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd401.StyleSheetList$stylesheets},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheets']};};
    function styleSheetSets(){
        /*Begin dynamic block*/
        return $$$cjl167.JSArray($$documentAbs.$native.styleSheetSets);
        /*End dynamic block*/
    }
    $$documentAbs.styleSheetSets=styleSheetSets;
    styleSheetSets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSArray},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.doc($$$cl1.String("Array of Strings",16)),$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','styleSheetSets']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentAbs.$native.title);
        /*End dynamic block*/
    }
    $$documentAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','title']};};
    function open(){
        /*Begin dynamic block*/
        $$documentAbs.$native.open();
        /*End dynamic block*/
    }
    $$documentAbs.open=open;
    open.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','open']};};
    function close(){
        /*Begin dynamic block*/
        $$documentAbs.$native.close();
        /*End dynamic block*/
    }
    $$documentAbs.close=close;
    close.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','close']};};
    function elementFromPoint(x$576,y$577){
        
        var case$578=x$576;
        if ($$$cl1.isOfType(x$576,{t:$$$cl1.Integer})) {
            
            var case$579=y$577;
            if ($$$cl1.isOfType(y$577,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$578/*NULL PARAM!*/,case$579));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$577,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$578/*NULL PARAM!*/,case$579.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(x$576,{t:$$$cjl167.JSNumber})) {
            
            var case$580=y$577;
            if ($$$cl1.isOfType(y$577,{t:$$$cl1.Integer})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$578.$native/*NULL PARAM!*/,case$580));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(y$577,{t:$$$cjl167.JSNumber})) {
                /*Begin dynamic block*/
                return Element($$documentAbs.$native.elementFromPoint(/*NULL PARAM!*/case$578.$native/*NULL PARAM!*/,case$580.$native));
                /*End dynamic block*/
            }
        }
    }
    $$documentAbs.elementFromPoint=elementFromPoint;
    elementFromPoint.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'x',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','elementFromPoint']};};
    function getElementsByName(name$581){
        
        var case$582=name$581;
        if ($$$cl1.isOfType(name$581,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$582.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(name$581,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$documentAbs.$native.getElementsByName(/*NULL PARAM!*/case$582.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.getElementsByName=getElementsByName;
    getElementsByName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','getElementsByName']};};
    function hasFocus(){
        /*Begin dynamic block*/
        if($$documentAbs.$native.hasFocus()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$documentAbs.hasFocus=hasFocus;
    hasFocus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','hasFocus']};};
    function querySelector(selectors$583){
        
        var case$584=selectors$583;
        if ($$$cl1.isOfType(selectors$583,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$584.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$583,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return Element($$documentAbs.$native.querySelector(/*NULL PARAM!*/case$584.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelector=querySelector;
    querySelector.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Element},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelector']};};
    function querySelectorAll(selectors$585){
        
        var case$586=selectors$585;
        if ($$$cl1.isOfType(selectors$585,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$586.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(selectors$585,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return NodeList($$documentAbs.$native.querySelectorAll(/*NULL PARAM!*/case$586.$native));
            /*End dynamic block*/
        }
    }
    $$documentAbs.querySelectorAll=querySelectorAll;
    querySelectorAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[{$nm:'selectors',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','querySelectorAll']};};
    function releaseCapture(){
        /*Begin dynamic block*/
        $$documentAbs.$native.releaseCapture();
        /*End dynamic block*/
    }
    $$documentAbs.releaseCapture=releaseCapture;
    releaseCapture.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','releaseCapture']};};
    function write(line$587){
        
        var case$588=line$587;
        if ($$$cl1.isOfType(line$587,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$588.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$587,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.write(/*NULL PARAM!*/case$588.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.write=write;
    write.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','write']};};
    function writeln(line$589){
        
        var case$590=line$589;
        if ($$$cl1.isOfType(line$589,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$590.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(line$589,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$documentAbs.$native.writeln(/*NULL PARAM!*/case$590.$native);
            /*End dynamic block*/
        }
    }
    $$documentAbs.writeln=writeln;
    writeln.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'line',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DocumentAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentAbs','$m','writeln']};};
    return $$documentAbs;
}
DocumentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentAbs']};};
exports.DocumentAbs=DocumentAbs;
function $init$DocumentAbs(){
    if (DocumentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentAbs,'ceylon.js.dom::DocumentAbs',NodeAbs);
    }
    return DocumentAbs;
}
exports.$init$DocumentAbs=$init$DocumentAbs;
$init$DocumentAbs();
function DocumentType(n$591, $$documentType){
    $init$DocumentType();
    if ($$documentType===undefined)$$documentType=new DocumentType.$$;
    $$documentType.n$591_=n$591;
    DocumentTypeAbs($$documentType);
    $$$cl1.defineAttr($$documentType,'n$591',function(){return this.n$591_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,d:['ceylon.js.dom','DocumentType','$at','n']};});
    $$documentType.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentType,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentType','$at','native']};}};
    /*Begin dynamic block*/
    $$documentType.$native=n$591;/*End dynamic block*/
    return $$documentType;
}
DocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentTypeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentType']};};
exports.DocumentType=DocumentType;
function $init$DocumentType(){
    if (DocumentType.$$===undefined){
        $$$cl1.initTypeProto(DocumentType,'ceylon.js.dom::DocumentType',DocumentTypeAbs);
    }
    return DocumentType;
}
exports.$init$DocumentType=$init$DocumentType;
$init$DocumentType();
function DocumentTypeAbs($$documentTypeAbs){
    $init$DocumentTypeAbs();
    if ($$documentTypeAbs===undefined)$$documentTypeAbs=new DocumentTypeAbs.$$;
    NodeAbs($$documentTypeAbs);
    function name(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentTypeAbs.$native.name);
        /*End dynamic block*/
    }
    $$documentTypeAbs.name=name;
    name.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','name']};};
    function publicId(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentTypeAbs.$native.publicId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.publicId=publicId;
    publicId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','publicId']};};
    function systemId(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$documentTypeAbs.$native.systemId);
        /*End dynamic block*/
    }
    $$documentTypeAbs.systemId=systemId;
    systemId.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:DocumentTypeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentTypeAbs','$m','systemId']};};
    return $$documentTypeAbs;
}
DocumentTypeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentTypeAbs']};};
exports.DocumentTypeAbs=DocumentTypeAbs;
function $init$DocumentTypeAbs(){
    if (DocumentTypeAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentTypeAbs,'ceylon.js.dom::DocumentTypeAbs',NodeAbs);
    }
    return DocumentTypeAbs;
}
exports.$init$DocumentTypeAbs=$init$DocumentTypeAbs;
$init$DocumentTypeAbs();
function DOMImplementation(n$592, $$dOMImplementation){
    $init$DOMImplementation();
    if ($$dOMImplementation===undefined)$$dOMImplementation=new DOMImplementation.$$;
    $$dOMImplementation.n$592_=n$592;
    DOMImplementationAbs($$dOMImplementation);
    $$$cl1.defineAttr($$dOMImplementation,'n$592',function(){return this.n$592_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,d:['ceylon.js.dom','DOMImplementation','$at','n']};});
    $$dOMImplementation.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DOMImplementation,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DOMImplementation','$at','native']};}};
    /*Begin dynamic block*/
    $$dOMImplementation.$native=n$592;/*End dynamic block*/
    return $$dOMImplementation;
}
DOMImplementation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DOMImplementationAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementation']};};
exports.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
    if (DOMImplementation.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementation,'ceylon.js.dom::DOMImplementation',DOMImplementationAbs);
    }
    return DOMImplementation;
}
exports.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
function DOMImplementationAbs($$dOMImplementationAbs){
    $init$DOMImplementationAbs();
    if ($$dOMImplementationAbs===undefined)$$dOMImplementationAbs=new DOMImplementationAbs.$$;
    $$$cjl167.JSObjectAbs($$dOMImplementationAbs);
    $$dOMImplementationAbs.createDocument$defs$qualifiedName=function(namespace$593,qualifiedName$594,doctype$595){return $$$cl1.String("",0);};
    $$dOMImplementationAbs.createDocument$defs$doctype=function(namespace$593,qualifiedName$594,doctype$595){return null;};
    function createDocument(namespace$593,qualifiedName$594,doctype$595){
        if(qualifiedName$594===undefined){qualifiedName$594=$$dOMImplementationAbs.createDocument$defs$qualifiedName(namespace$593,qualifiedName$594,doctype$595);}
        if(doctype$595===undefined){doctype$595=$$dOMImplementationAbs.createDocument$defs$doctype(namespace$593,qualifiedName$594,doctype$595);}
        
        var case$596=namespace$593;
        if ($$$cl1.isOfType(namespace$593,{t:$$$cl1.String})) {
            
            var case$597=qualifiedName$594;
            if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$596.valueOf()/*NULL PARAM!*/,case$597.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'18:69-18:70','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$596.valueOf()/*NULL PARAM!*/,case$597.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'23:76-23:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$593,{t:$$$cjl167.JSString})) {
            
            var case$598=qualifiedName$594;
            if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$596.$native/*NULL PARAM!*/,case$598.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'31:76-31:77','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/case$596.$native/*NULL PARAM!*/,case$598.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'36:83-36:84','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$593,{t:$$$cl1.Null})) {
            
            var case$599=qualifiedName$594;
            if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$599.valueOf()/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'44:64-44:65','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(qualifiedName$594,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return Document($$dOMImplementationAbs.$native.createDocument(/*NULL PARAM!*/null/*NULL PARAM!*/,case$599.$native/*NULL PARAM!*/,(typeof dt==='undefined'||dt===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: dt")),'49:71-49:72','domimplementation.ceylon'):dt).native));
                /*End dynamic block*/
            }
        }
    }
    $$dOMImplementationAbs.createDocument=createDocument;
    createDocument.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Document},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}},{$nm:'qualifiedName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'doctype',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:DocumentType}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocument']};};
    function createDocumentType(qualifiedName$600,publicId$601,systemId$602){
        
        var case$603=qualifiedName$600;
        if ($$$cl1.isOfType(qualifiedName$600,{t:$$$cl1.String})) {
            
            var case$604=publicId$601;
            if ($$$cl1.isOfType(publicId$601,{t:$$$cl1.String})) {
                
                var case$605=systemId$602;
                if ($$$cl1.isOfType(systemId$602,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.valueOf()/*NULL PARAM!*/,case$604.valueOf()/*NULL PARAM!*/,case$605.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$602,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.valueOf()/*NULL PARAM!*/,case$604.valueOf()/*NULL PARAM!*/,case$605.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$601,{t:$$$cjl167.JSString})) {
                
                var case$606=systemId$602;
                if ($$$cl1.isOfType(systemId$602,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.valueOf()/*NULL PARAM!*/,case$604.$native/*NULL PARAM!*/,case$606.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$602,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.valueOf()/*NULL PARAM!*/,case$604.$native/*NULL PARAM!*/,case$606.$native));
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(qualifiedName$600,{t:$$$cjl167.JSString})) {
            
            var case$607=publicId$601;
            if ($$$cl1.isOfType(publicId$601,{t:$$$cl1.String})) {
                
                var case$608=systemId$602;
                if ($$$cl1.isOfType(systemId$602,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.$native/*NULL PARAM!*/,case$607.valueOf()/*NULL PARAM!*/,case$608.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$602,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.$native/*NULL PARAM!*/,case$607.valueOf()/*NULL PARAM!*/,case$608.$native));
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(publicId$601,{t:$$$cjl167.JSString})) {
                
                var case$609=systemId$602;
                if ($$$cl1.isOfType(systemId$602,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.$native/*NULL PARAM!*/,case$607.$native/*NULL PARAM!*/,case$609.valueOf()));
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(systemId$602,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    return DocumentType($$dOMImplementationAbs.$native.createDocumentType(/*NULL PARAM!*/case$603.$native/*NULL PARAM!*/,case$607.$native/*NULL PARAM!*/,case$609.$native));
                    /*End dynamic block*/
                }
            }
        }
    }
    $$dOMImplementationAbs.createDocumentType=createDocumentType;
    createDocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$ps:[{$nm:'qualifiedName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'publicId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'systemId',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','createDocumentType']};};
    $$dOMImplementationAbs.hasFeature$defs$version=function(feature$610,version$611){return $$$cl1.String("",0);};
    function hasFeature(feature$610,version$611){
        if(version$611===undefined){version$611=$$dOMImplementationAbs.hasFeature$defs$version(feature$610,version$611);}
        var has$612;
        $prop$getHas$612={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','DOMImplementationAbs','$m','hasFeature','$at','has']};}};
        $prop$getHas$612.get=function(){return has$612};
        
        var case$613=feature$610;
        if ($$$cl1.isOfType(feature$610,{t:$$$cl1.String})) {
            
            var case$614=version$611;
            if ($$$cl1.isOfType(version$611,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$612=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$613.valueOf()/*NULL PARAM!*/,case$614.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$611,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                has$612=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$613.valueOf()/*NULL PARAM!*/,case$614.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(feature$610,{t:$$$cjl167.JSString})) {
            
            var case$615=version$611;
            if ($$$cl1.isOfType(version$611,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$612=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$613.$native/*NULL PARAM!*/,case$615.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(version$611,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                has$612=$$dOMImplementationAbs.$native.hasFeature(/*NULL PARAM!*/case$613.$native/*NULL PARAM!*/,case$615.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$612){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$dOMImplementationAbs.hasFeature=hasFeature;
    hasFeature.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'feature',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'version',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:DOMImplementationAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DOMImplementationAbs','$m','hasFeature']};};
    return $$dOMImplementationAbs;
}
DOMImplementationAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DOMImplementationAbs']};};
exports.DOMImplementationAbs=DOMImplementationAbs;
function $init$DOMImplementationAbs(){
    if (DOMImplementationAbs.$$===undefined){
        $$$cl1.initTypeProto(DOMImplementationAbs,'ceylon.js.dom::DOMImplementationAbs',$$$cjl167.JSObjectAbs);
    }
    return DOMImplementationAbs;
}
exports.$init$DOMImplementationAbs=$init$DOMImplementationAbs;
$init$DOMImplementationAbs();
function Element(n$616, $$element){
    $init$Element();
    if ($$element===undefined)$$element=new Element.$$;
    $$element.n$616_=n$616;
    ElementAbs($$element);
    $$$cl1.defineAttr($$element,'n$616',function(){return this.n$616_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,d:['ceylon.js.dom','Element','$at','n']};});
    $$element.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Element,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Element','$at','native']};}};
    /*Begin dynamic block*/
    $$element.$native=n$616;/*End dynamic block*/
    return $$element;
}
Element.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ElementAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Element']};};
exports.Element=Element;
function $init$Element(){
    if (Element.$$===undefined){
        $$$cl1.initTypeProto(Element,'ceylon.js.dom::Element',ElementAbs);
    }
    return Element;
}
exports.$init$Element=$init$Element;
$init$Element();
function ElementAbs($$elementAbs){
    $init$ElementAbs();
    if ($$elementAbs===undefined)$$elementAbs=new ElementAbs.$$;
    NodeAbs($$elementAbs);
    function getAttribute(attributeName$617){
        var attr$618;
        $prop$getAttr$618={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','ElementAbs','$m','getAttribute','$at','attr']};}};
        $prop$getAttr$618.get=function(){return attr$618};
        
        var case$619=attributeName$617;
        if ($$$cl1.isOfType(attributeName$617,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            attr$618=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$619.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attributeName$617,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            attr$618=$$elementAbs.$native.getAttribute(/*NULL PARAM!*/case$619.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(((tmpvar$620=attr$618,tmpvar$621=null,(tmpvar$620.equals&&!tmpvar$620.equals(tmpvar$621))||tmpvar$620!==tmpvar$621)||(tmpvar$622=attr$618,tmpvar$623=$$$cl1.String("",0),(tmpvar$622.equals&&!tmpvar$622.equals(tmpvar$623))||tmpvar$622!==tmpvar$623))){
            return $$$cjl167.JSString(attr$618);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttribute=getAttribute;
    getAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttribute']};};
    function getAttributeNS(namespace$624,attributeName$625){
        var attr$626;
        $prop$getAttr$626={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','ElementAbs','$m','getAttributeNS','$at','attr']};}};
        $prop$getAttr$626.get=function(){return attr$626};
        
        var case$627=namespace$624;
        if ($$$cl1.isOfType(namespace$624,{t:$$$cl1.String})) {
            
            var case$628=attributeName$625;
            if ($$$cl1.isOfType(attributeName$625,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$626=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$627.valueOf()/*NULL PARAM!*/,case$628.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$625,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                attr$626=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$627.valueOf()/*NULL PARAM!*/,case$628.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$624,{t:$$$cjl167.JSString})) {
            
            var case$629=attributeName$625;
            if ($$$cl1.isOfType(attributeName$625,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                attr$626=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$627.$native/*NULL PARAM!*/,case$629.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attributeName$625,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                attr$626=$$elementAbs.$native.getAttributeNS(/*NULL PARAM!*/case$627.$native/*NULL PARAM!*/,case$629.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(((tmpvar$630=attr$626,tmpvar$631=null,(tmpvar$630.equals&&!tmpvar$630.equals(tmpvar$631))||tmpvar$630!==tmpvar$631)||(tmpvar$632=attr$626,tmpvar$633=$$$cl1.String("",0),(tmpvar$632.equals&&!tmpvar$632.equals(tmpvar$633))||tmpvar$632!==tmpvar$633))){
            return $$$cjl167.JSString(attr$626);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$elementAbs.getAttributeNS=getAttributeNS;
    getAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'attributeName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getAttributeNS']};};
    $$elementAbs.getElementsByTagName$defs$tagName=function(tagName$634){return $$$cl1.String("*",1);};
    function getElementsByTagName(tagName$634){
        if(tagName$634===undefined){tagName$634=$$elementAbs.getElementsByTagName$defs$tagName(tagName$634);}
        
        var case$635=tagName$634;
        if ($$$cl1.isOfType(tagName$634,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$635.valueOf()));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(tagName$634,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            return HTMLCollection($$elementAbs.$native.getElementsByTagName(/*NULL PARAM!*/case$635.$native));
            /*End dynamic block*/
        }
    }
    $$elementAbs.getElementsByTagName=getElementsByTagName;
    getElementsByTagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagName']};};
    $$elementAbs.getElementsByTagNameNS$defs$tagName=function(namespace$636,tagName$637){return $$$cl1.String("*",1);};
    function getElementsByTagNameNS(namespace$636,tagName$637){
        if(tagName$637===undefined){tagName$637=$$elementAbs.getElementsByTagNameNS$defs$tagName(namespace$636,tagName$637);}
        
        var case$638=namespace$636;
        if ($$$cl1.isOfType(namespace$636,{t:$$$cl1.String})) {
            
            var case$639=tagName$637;
            if ($$$cl1.isOfType(tagName$637,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$638.valueOf()/*NULL PARAM!*/,case$639.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$637,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$638.valueOf()/*NULL PARAM!*/,case$639.$native));
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$636,{t:$$$cjl167.JSString})) {
            
            var case$640=tagName$637;
            if ($$$cl1.isOfType(tagName$637,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$638.$native/*NULL PARAM!*/,case$640.valueOf()));
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(tagName$637,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                return HTMLCollection($$elementAbs.$native.getElementsByTagNameNS(/*NULL PARAM!*/case$638.$native/*NULL PARAM!*/,case$640.$native));
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.getElementsByTagNameNS=getElementsByTagNameNS;
    getElementsByTagNameNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HTMLCollection},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'tagName',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','getElementsByTagNameNS']};};
    function hasAttribute(attName$641){
        var has$642;
        $prop$getHas$642={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','ElementAbs','$m','hasAttribute','$at','has']};}};
        $prop$getHas$642.get=function(){return has$642};
        
        var case$643=attName$641;
        if ($$$cl1.isOfType(attName$641,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            has$642=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$643.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(attName$641,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            has$642=$$elementAbs.$native.hasAttribute(/*NULL PARAM!*/case$643.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(has$642){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttribute=hasAttribute;
    hasAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttribute']};};
    function hasAttributeNS(namespace$644,attName$645){
        var has$646;
        $prop$getHas$646={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','ElementAbs','$m','hasAttributeNS','$at','has']};}};
        $prop$getHas$646.get=function(){return has$646};
        
        var case$647=namespace$644;
        if ($$$cl1.isOfType(namespace$644,{t:$$$cl1.String})) {
            
            var case$648=attName$645;
            if ($$$cl1.isOfType(attName$645,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$646=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$647.valueOf()/*NULL PARAM!*/,case$648.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$645,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                has$646=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$647.valueOf()/*NULL PARAM!*/,case$648.$native);/*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$644,{t:$$$cjl167.JSString})) {
            
            var case$649=attName$645;
            if ($$$cl1.isOfType(attName$645,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                has$646=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$647.$native/*NULL PARAM!*/,case$649.valueOf());/*End dynamic block*/
            }else if ($$$cl1.isOfType(attName$645,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                has$646=$$elementAbs.$native.hasAttributeNS(/*NULL PARAM!*/case$647.$native/*NULL PARAM!*/,case$649.$native);/*End dynamic block*/
            }
        }
        /*Begin dynamic block*/
        if(has$646){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$elementAbs.hasAttributeNS=hasAttributeNS;
    hasAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'attName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','hasAttributeNS']};};
    function removeAttribute(attrName$650){
        
        var case$651=attrName$650;
        if ($$$cl1.isOfType(attrName$650,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$651.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(attrName$650,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$651.$native);
            /*End dynamic block*/
        }
    }
    $$elementAbs.removeAttribute=removeAttribute;
    removeAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttribute']};};
    function removeAttributeNS(namespace$652,attrName$653){
        
        var case$654=namespace$652;
        if ($$$cl1.isOfType(namespace$652,{t:$$$cl1.String})) {
            
            var case$655=attrName$653;
            if ($$$cl1.isOfType(attrName$653,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$654.valueOf()/*NULL PARAM!*/,case$655.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$653,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$654.valueOf()/*NULL PARAM!*/,case$655.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(namespace$652,{t:$$$cjl167.JSString})) {
            
            var case$656=attrName$653;
            if ($$$cl1.isOfType(attrName$653,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$654.$native/*NULL PARAM!*/,case$656.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(attrName$653,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.removeAttribute(/*NULL PARAM!*/case$654.$native/*NULL PARAM!*/,case$656.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.removeAttributeNS=removeAttributeNS;
    removeAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'attrName',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','removeAttributeNS']};};
    function setAttribute(name$657,val$658){
        
        var case$659=name$657;
        if ($$$cl1.isOfType(name$657,{t:$$$cl1.String})) {
            
            var case$660=val$658;
            if ($$$cl1.isOfType(val$658,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$659.valueOf()/*NULL PARAM!*/,case$660.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$658,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$659.valueOf()/*NULL PARAM!*/,case$660.$native);
                /*End dynamic block*/
            }
        }else if ($$$cl1.isOfType(name$657,{t:$$$cjl167.JSString})) {
            
            var case$661=val$658;
            if ($$$cl1.isOfType(val$658,{t:$$$cl1.String})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$659.$native/*NULL PARAM!*/,case$661.valueOf());
                /*End dynamic block*/
            }else if ($$$cl1.isOfType(val$658,{t:$$$cjl167.JSString})) {
                /*Begin dynamic block*/
                $$elementAbs.$native.setAttribute(/*NULL PARAM!*/case$659.$native/*NULL PARAM!*/,case$661.$native);
                /*End dynamic block*/
            }
        }
    }
    $$elementAbs.setAttribute=setAttribute;
    setAttribute.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttribute']};};
    function setAttributeNS(namespace$662,name$663,val$664){
        
        var case$665=namespace$662;
        if ($$$cl1.isOfType(namespace$662,{t:$$$cl1.String})) {
            
            var case$666=name$663;
            if ($$$cl1.isOfType(name$663,{t:$$$cl1.String})) {
                
                var case$667=val$664;
                if ($$$cl1.isOfType(val$664,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.valueOf()/*NULL PARAM!*/,case$666.valueOf()/*NULL PARAM!*/,case$667.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$664,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.valueOf()/*NULL PARAM!*/,case$666.valueOf()/*NULL PARAM!*/,case$667.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$663,{t:$$$cjl167.JSString})) {
                
                var case$668=val$664;
                if ($$$cl1.isOfType(val$664,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.valueOf()/*NULL PARAM!*/,case$666.$native/*NULL PARAM!*/,case$668.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$664,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.valueOf()/*NULL PARAM!*/,case$666.$native/*NULL PARAM!*/,case$668.$native);
                    /*End dynamic block*/
                }
            }
        }else if ($$$cl1.isOfType(namespace$662,{t:$$$cjl167.JSString})) {
            
            var case$669=name$663;
            if ($$$cl1.isOfType(name$663,{t:$$$cl1.String})) {
                
                var case$670=val$664;
                if ($$$cl1.isOfType(val$664,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.$native/*NULL PARAM!*/,case$669.valueOf()/*NULL PARAM!*/,case$670.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$664,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.$native/*NULL PARAM!*/,case$669.valueOf()/*NULL PARAM!*/,case$670.$native);
                    /*End dynamic block*/
                }
            }else if ($$$cl1.isOfType(name$663,{t:$$$cjl167.JSString})) {
                
                var case$671=val$664;
                if ($$$cl1.isOfType(val$664,{t:$$$cl1.String})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.$native/*NULL PARAM!*/,case$669.$native/*NULL PARAM!*/,case$671.valueOf());
                    /*End dynamic block*/
                }else if ($$$cl1.isOfType(val$664,{t:$$$cjl167.JSString})) {
                    /*Begin dynamic block*/
                    $$elementAbs.$native.setAttributeNS(/*NULL PARAM!*/case$665.$native/*NULL PARAM!*/,case$669.$native/*NULL PARAM!*/,case$671.$native);
                    /*End dynamic block*/
                }
            }
        }
    }
    $$elementAbs.setAttributeNS=setAttributeNS;
    setAttributeNS.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'namespace',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','setAttributeNS']};};
    function tagName(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$elementAbs.$native.tagName);
        /*End dynamic block*/
    }
    $$elementAbs.tagName=tagName;
    tagName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:ElementAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ElementAbs','$m','tagName']};};
    return $$elementAbs;
}
ElementAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','ElementAbs']};};
exports.ElementAbs=ElementAbs;
function $init$ElementAbs(){
    if (ElementAbs.$$===undefined){
        $$$cl1.initTypeProto(ElementAbs,'ceylon.js.dom::ElementAbs',NodeAbs);
    }
    return ElementAbs;
}
exports.$init$ElementAbs=$init$ElementAbs;
$init$ElementAbs();
var $$$cjj672=require('ceylon/js/json/1.0.0/ceylon.js.json-1.0.0');
$$$cl1.$addmod$($$$cjj672,'ceylon.js.json/1.0.0');
function EventPhase(num, $$eventPhase){
    $init$EventPhase();
    if ($$eventPhase===undefined)$$eventPhase=new EventPhase.$$;
    $$eventPhase.num_=num;
    $$$cl1.defineAttr($$eventPhase,'num',function(){return this.num_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:EventPhase,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventPhase','$at','num']};});
    return $$eventPhase;
}
EventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventPhase']};};
exports.EventPhase=EventPhase;
function $init$EventPhase(){
    if (EventPhase.$$===undefined){
        $$$cl1.initTypeProto(EventPhase,'ceylon.js.dom::EventPhase',$$$cl1.Basic);
    }
    return EventPhase;
}
exports.$init$EventPhase=$init$EventPhase;
$init$EventPhase();
function none$673(){
    var $$none=new none$673.$$;
    EventPhase((0),$$none);
    return $$none;
}
function $init$none$673(){
    if (none$673.$$===undefined){
        $$$cl1.initTypeProto(none$673,'ceylon.js.dom::none',EventPhase);
    }
    return none$673;
}
exports.$init$none$673=$init$none$673;
$init$none$673();
var none$674=none$673();
var getNone=function(){
    return none$674;
}
exports.getNone=getNone;
getNone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:none$673},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','none']};};
$prop$getNone={get:getNone,$$metamodel$$:getNone.$$metamodel$$};
exports.$prop$getNone=$prop$getNone;
function capturePhase$675(){
    var $$capturePhase=new capturePhase$675.$$;
    EventPhase((1),$$capturePhase);
    return $$capturePhase;
}
function $init$capturePhase$675(){
    if (capturePhase$675.$$===undefined){
        $$$cl1.initTypeProto(capturePhase$675,'ceylon.js.dom::capturePhase',EventPhase);
    }
    return capturePhase$675;
}
exports.$init$capturePhase$675=$init$capturePhase$675;
$init$capturePhase$675();
var capturePhase$676=capturePhase$675();
var getCapturePhase=function(){
    return capturePhase$676;
}
exports.getCapturePhase=getCapturePhase;
getCapturePhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:capturePhase$675},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','capturePhase']};};
$prop$getCapturePhase={get:getCapturePhase,$$metamodel$$:getCapturePhase.$$metamodel$$};
exports.$prop$getCapturePhase=$prop$getCapturePhase;
function atTarget$677(){
    var $$atTarget=new atTarget$677.$$;
    EventPhase((2),$$atTarget);
    return $$atTarget;
}
function $init$atTarget$677(){
    if (atTarget$677.$$===undefined){
        $$$cl1.initTypeProto(atTarget$677,'ceylon.js.dom::atTarget',EventPhase);
    }
    return atTarget$677;
}
exports.$init$atTarget$677=$init$atTarget$677;
$init$atTarget$677();
var atTarget$678=atTarget$677();
var getAtTarget=function(){
    return atTarget$678;
}
exports.getAtTarget=getAtTarget;
getAtTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:atTarget$677},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','atTarget']};};
$prop$getAtTarget={get:getAtTarget,$$metamodel$$:getAtTarget.$$metamodel$$};
exports.$prop$getAtTarget=$prop$getAtTarget;
function bubblingPhase$679(){
    var $$bubblingPhase=new bubblingPhase$679.$$;
    EventPhase((3),$$bubblingPhase);
    return $$bubblingPhase;
}
function $init$bubblingPhase$679(){
    if (bubblingPhase$679.$$===undefined){
        $$$cl1.initTypeProto(bubblingPhase$679,'ceylon.js.dom::bubblingPhase',EventPhase);
    }
    return bubblingPhase$679;
}
exports.$init$bubblingPhase$679=$init$bubblingPhase$679;
$init$bubblingPhase$679();
var bubblingPhase$680=bubblingPhase$679();
var getBubblingPhase=function(){
    return bubblingPhase$680;
}
exports.getBubblingPhase=getBubblingPhase;
getBubblingPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:bubblingPhase$679},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','bubblingPhase']};};
$prop$getBubblingPhase={get:getBubblingPhase,$$metamodel$$:getBubblingPhase.$$metamodel$$};
exports.$prop$getBubblingPhase=$prop$getBubblingPhase;
function EventInit(bubbles, cancelable, $$eventInit){
    $init$EventInit();
    if ($$eventInit===undefined)$$eventInit=new EventInit.$$;
    $$eventInit.bubbles_=bubbles;
    $$eventInit.cancelable_=cancelable;
    $$$cl1.defineAttr($$eventInit,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$at','bubbles']};});
    $$$cl1.defineAttr($$eventInit,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$at','cancelable']};});
    function toJson(){
        var json$681=(values$682=/*NULL PARAM!*/[$$$cl1.Entry($$$cl1.String("bubbles",7),$$eventInit.bubbles,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})/*NULL PARAM!*/,$$$cl1.Entry($$$cl1.String("cancelable",10),$$eventInit.cancelable,{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}})].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Boolean}}}}),$$$cjj672.JSON(values$682));
        $prop$getJson$681={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSON},d:['ceylon.js.dom','EventInit','$m','toJson','$at','json']};}};
        $prop$getJson$681.get=function(){return json$681};
        var values$682;
        return json$681.toJson();
    }
    $$eventInit.toJson=toJson;
    toJson.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjj672.JSJSON},$ps:[],$cont:EventInit,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit','$m','toJson']};};
    return $$eventInit;
}
EventInit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventInit']};};
exports.EventInit=EventInit;
function $init$EventInit(){
    if (EventInit.$$===undefined){
        $$$cl1.initTypeProto(EventInit,'ceylon.js.dom::EventInit',$$$cl1.Basic);
    }
    return EventInit;
}
exports.$init$EventInit=$init$EventInit;
$init$EventInit();
function createEvent(type$683,options$684){
    
    var case$685=type$683;
    if ($$$cl1.isOfType(type$683,{t:$$$cl1.String})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'25:16-25:20','event.ceylon'):Event)(/*NULL PARAM!*/case$685.valueOf()/*NULL PARAM!*/,options$684.toJson()));
        /*End dynamic block*/
    }else if ($$$cl1.isOfType(type$683,{t:$$$cjl167.JSString})) {
        /*Begin dynamic block*/
        return Event((typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'30:16-30:20','event.ceylon'):Event)(/*NULL PARAM!*/case$685.$native/*NULL PARAM!*/,options$684.toJson()));
        /*End dynamic block*/
    }
}
exports.createEvent=createEvent;
createEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Event},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'options',$mt:'prm',$t:{t:EventInit},$an:function(){return[];}}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','createEvent']};};
function Event(n$686, $$event){
    $init$Event();
    if ($$event===undefined)$$event=new Event.$$;
    $$event.n$686_=n$686;
    EventAbs($$event);
    $$$cl1.defineAttr($$event,'n$686',function(){return this.n$686_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,d:['ceylon.js.dom','Event','$at','n']};});
    $$event.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Event,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Event','$at','native']};}};
    /*Begin dynamic block*/
    $$event.$native=n$686;/*End dynamic block*/
    return $$event;
}
Event.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Event']};};
exports.Event=Event;
function $init$Event(){
    if (Event.$$===undefined){
        $$$cl1.initTypeProto(Event,'ceylon.js.dom::Event',EventAbs);
    }
    return Event;
}
exports.$init$Event=$init$Event;
$init$Event();
function EventAbs($$eventAbs){
    $init$EventAbs();
    if ($$eventAbs===undefined)$$eventAbs=new EventAbs.$$;
    $$$cjl167.JSObjectAbs($$eventAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$eventAbs.$native.type);
        /*End dynamic block*/
    }
    $$eventAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','type']};};
    function target(){
        var target$687;
        $prop$getTarget$687={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','EventAbs','$m','target','$at','target']};}};
        $prop$getTarget$687.get=function(){return target$687};
        /*Begin dynamic block*/
        target$687=$$eventAbs.$native.target;if((tmpvar$688=target$687,tmpvar$689=null,(tmpvar$688.equals&&!tmpvar$688.equals(tmpvar$689))||tmpvar$688!==tmpvar$689)){
            return EventTarget(target$687);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','target']};};
    function currentTarget(){
        var target$690;
        $prop$getTarget$690={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','EventAbs','$m','currentTarget','$at','target']};}};
        $prop$getTarget$690.get=function(){return target$690};
        /*Begin dynamic block*/
        target$690=$$eventAbs.$native.currentTarget;if((tmpvar$691=target$690,tmpvar$692=null,(tmpvar$691.equals&&!tmpvar$691.equals(tmpvar$692))||tmpvar$691!==tmpvar$692)){
            return EventTarget(target$690);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$eventAbs.currentTarget=currentTarget;
    currentTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:EventTarget}]},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','currentTarget']};};
    function eventPhase(){
        /*Begin dynamic block*/
        var eventPhase$693=$$eventAbs.$native.eventPhase;
        $prop$getEventPhase$693={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','EventAbs','$m','eventPhase','$at','eventPhase']};}};
        $prop$getEventPhase$693.get=function(){return eventPhase$693};
        if((tmpvar$694=eventPhase$693,tmpvar$695=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'78:30-78:34','event.ceylon'):Event).NONE,(tmpvar$694.equals&&tmpvar$694.equals(tmpvar$695))||tmpvar$694===tmpvar$695)){
            return getNone();
        }else {
            if((tmpvar$696=eventPhase$693,tmpvar$697=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'80:37-80:41','event.ceylon'):Event).CAPTURING_PHASE,(tmpvar$696.equals&&tmpvar$696.equals(tmpvar$697))||tmpvar$696===tmpvar$697)){
                return getCapturePhase();
            }else {
                if((tmpvar$698=eventPhase$693,tmpvar$699=(typeof Event==='undefined'||Event===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Event")),'82:37-82:41','event.ceylon'):Event).AT_TARGET,(tmpvar$698.equals&&tmpvar$698.equals(tmpvar$699))||tmpvar$698===tmpvar$699)){
                    return getAtTarget();
                }else {
                    return getBubblingPhase();
                }
            }
        }/*End dynamic block*/
    }
    $$eventAbs.eventPhase=eventPhase;
    eventPhase.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:EventPhase},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','eventPhase']};};
    function stopPropagation(){
        /*Begin dynamic block*/
        $$eventAbs.$native.stopPropagation();
        /*End dynamic block*/
    }
    $$eventAbs.stopPropagation=stopPropagation;
    stopPropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopPropagation']};};
    function stopImmediatePropagation(){
        /*Begin dynamic block*/
        $$eventAbs.$native.stopImmediatePropagation();
        /*End dynamic block*/
    }
    $$eventAbs.stopImmediatePropagation=stopImmediatePropagation;
    stopImmediatePropagation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','stopImmediatePropagation']};};
    function bubbles(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.bubbles){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.bubbles=bubbles;
    bubbles.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','bubbles']};};
    function cancelable(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.cancelable){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.cancelable=cancelable;
    cancelable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','cancelable']};};
    function preventDefault(){
        /*Begin dynamic block*/
        $$eventAbs.$native.preventDefault();
        /*End dynamic block*/
    }
    $$eventAbs.preventDefault=preventDefault;
    preventDefault.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','preventDefault']};};
    function defaultPrevented(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.defaultPrevented){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.defaultPrevented=defaultPrevented;
    defaultPrevented.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','defaultPrevented']};};
    function isTrusted(){
        /*Begin dynamic block*/
        if($$eventAbs.$native.isTrusted){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventAbs.isTrusted=isTrusted;
    isTrusted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','isTrusted']};};
    function timeStamp(){
        /*Begin dynamic block*/
        return $$$cjl167.JSDate($$eventAbs.$native.timeStamp);
        /*End dynamic block*/
    }
    $$eventAbs.timeStamp=timeStamp;
    timeStamp.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSDate},$ps:[],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','timeStamp']};};
    function initEvent(type$700,bubbles$701,cancelable$702){
        
        var case$703=type$700;
        if ($$$cl1.isOfType(type$700,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$703.valueOf()/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'158:36-158:43','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'158:46-158:52','event.ceylon'):capture));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$700,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$eventAbs.$native.initEvent(/*NULL PARAM!*/case$703.$native/*NULL PARAM!*/,(typeof callback==='undefined'||callback===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: callback")),'163:43-163:50','event.ceylon'):callback)/*NULL PARAM!*/,(typeof capture==='undefined'||capture===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: capture")),'163:53-163:59','event.ceylon'):capture));
            /*End dynamic block*/
        }
    }
    $$eventAbs.initEvent=initEvent;
    initEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'bubbles',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'cancelable',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventAbs','$m','initEvent']};};
    return $$eventAbs;
}
EventAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventAbs']};};
exports.EventAbs=EventAbs;
function $init$EventAbs(){
    if (EventAbs.$$===undefined){
        $$$cl1.initTypeProto(EventAbs,'ceylon.js.dom::EventAbs',$$$cjl167.JSObjectAbs);
    }
    return EventAbs;
}
exports.$init$EventAbs=$init$EventAbs;
$init$EventAbs();
function EventTarget(n$704, $$eventTarget){
    $init$EventTarget();
    if ($$eventTarget===undefined)$$eventTarget=new EventTarget.$$;
    $$eventTarget.n$704_=n$704;
    EventTargetAbs($$eventTarget);
    $$$cl1.defineAttr($$eventTarget,'n$704',function(){return this.n$704_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,d:['ceylon.js.dom','EventTarget','$at','n']};});
    $$eventTarget.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EventTarget,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','EventTarget','$at','native']};}};
    /*Begin dynamic block*/
    $$eventTarget.$native=n$704;/*End dynamic block*/
    return $$eventTarget;
}
EventTarget.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EventTargetAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTarget']};};
exports.EventTarget=EventTarget;
function $init$EventTarget(){
    if (EventTarget.$$===undefined){
        $$$cl1.initTypeProto(EventTarget,'ceylon.js.dom::EventTarget',EventTargetAbs);
    }
    return EventTarget;
}
exports.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
function EventTargetAbs($$eventTargetAbs){
    $init$EventTargetAbs();
    if ($$eventTargetAbs===undefined)$$eventTargetAbs=new EventTargetAbs.$$;
    $$$cjl167.JSObjectAbs($$eventTargetAbs);
    $$eventTargetAbs.addEventListener$defs$capture=function(type$705,callback$706,capture$707){return false;};
    function addEventListener(type$705,callback$706,capture$707){
        if(capture$707===undefined){capture$707=$$eventTargetAbs.addEventListener$defs$capture(type$705,callback$706,capture$707);}
        
        var case$708=type$705;
        if ($$$cl1.isOfType(type$705,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$708.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$706,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$707);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$705,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.addEventListener(/*NULL PARAM!*/case$708.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$706,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$707);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.addEventListener=addEventListener;
    addEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','addEventListener']};};
    $$eventTargetAbs.removeEventListener$defs$capture=function(type$709,callback$710,capture$711){return false;};
    function removeEventListener(type$709,callback$710,capture$711){
        if(capture$711===undefined){capture$711=$$eventTargetAbs.removeEventListener$defs$capture(type$709,callback$710,capture$711);}
        
        var case$712=type$709;
        if ($$$cl1.isOfType(type$709,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$712.valueOf()/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$710,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$711);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(type$709,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$eventTargetAbs.$native.removeEventListener(/*NULL PARAM!*/case$712.$native/*NULL PARAM!*/,$$$cl1.$JsCallable(callback$710,[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Event},Element:{t:Event}}},Return:{t:$$$cl1.Anything}})/*NULL PARAM!*/,capture$711);
            /*End dynamic block*/
        }
    }
    $$eventTargetAbs.removeEventListener=removeEventListener;
    removeEventListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'type',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}},{$nm:'callback',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'capture',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','removeEventListener']};};
    function dispatchEvent(event$713){
        /*Begin dynamic block*/
        if($$eventTargetAbs.$native.dispatchEvent(/*NULL PARAM!*/event$713)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$eventTargetAbs.dispatchEvent=dispatchEvent;
    dispatchEvent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'event',$mt:'prm',$t:{t:Event},$an:function(){return[];}}],$cont:EventTargetAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EventTargetAbs','$m','dispatchEvent']};};
    return $$eventTargetAbs;
}
EventTargetAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EventTargetAbs']};};
exports.EventTargetAbs=EventTargetAbs;
function $init$EventTargetAbs(){
    if (EventTargetAbs.$$===undefined){
        $$$cl1.initTypeProto(EventTargetAbs,'ceylon.js.dom::EventTargetAbs',$$$cjl167.JSObjectAbs);
    }
    return EventTargetAbs;
}
exports.$init$EventTargetAbs=$init$EventTargetAbs;
$init$EventTargetAbs();
function HTMLCollection(n$714, $$hTMLCollection){
    $init$HTMLCollection();
    if ($$hTMLCollection===undefined)$$hTMLCollection=new HTMLCollection.$$;
    $$hTMLCollection.n$714_=n$714;
    HTMLCollectionAbs($$hTMLCollection);
    $$$cl1.defineAttr($$hTMLCollection,'n$714',function(){return this.n$714_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,d:['ceylon.js.dom','HTMLCollection','$at','n']};});
    $$hTMLCollection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:HTMLCollection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','HTMLCollection','$at','native']};}};
    /*Begin dynamic block*/
    $$hTMLCollection.$native=n$714;/*End dynamic block*/
    return $$hTMLCollection;
}
HTMLCollection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:HTMLCollectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollection']};};
exports.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
    if (HTMLCollection.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollection,'ceylon.js.dom::HTMLCollection',HTMLCollectionAbs);
    }
    return HTMLCollection;
}
exports.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();
function HTMLCollectionAbs($$hTMLCollectionAbs){
    $init$HTMLCollectionAbs();
    if ($$hTMLCollectionAbs===undefined)$$hTMLCollectionAbs=new HTMLCollectionAbs.$$;
    $$$cjl167.JSObjectAbs($$hTMLCollectionAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$hTMLCollectionAbs.$native.length);
        /*End dynamic block*/
    }
    $$hTMLCollectionAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','length']};};
    function item(index$715){
        var item$716;
        $prop$getItem$716={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','HTMLCollectionAbs','$m','item','$at','item']};}};
        $prop$getItem$716.get=function(){return item$716};
        
        var case$717=index$715;
        if ($$$cl1.isOfType(index$715,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$716=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$717);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$715,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            item$716=$$hTMLCollectionAbs.$native.item(/*NULL PARAM!*/case$717.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$718=item$716,tmpvar$719=null,(tmpvar$718.equals&&!tmpvar$718.equals(tmpvar$719))||tmpvar$718!==tmpvar$719)){
            return Element(item$716);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Element}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','item']};};
    function namedItem(name$720){
        var namedItem$721;
        $prop$getNamedItem$721={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','HTMLCollectionAbs','$m','namedItem','$at','namedItem']};}};
        $prop$getNamedItem$721.get=function(){return namedItem$721};
        
        var case$722=name$720;
        if ($$$cl1.isOfType(name$720,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            namedItem$721=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$722.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(name$720,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            namedItem$721=$$hTMLCollectionAbs.$native.namedItem(/*NULL PARAM!*/case$722.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$723=namedItem$721,tmpvar$724=null,(tmpvar$723.equals&&tmpvar$723.equals(tmpvar$724))||tmpvar$723===tmpvar$724)){
            return $$$cjl167.JSObject(namedItem$721);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$hTMLCollectionAbs.namedItem=namedItem;
    namedItem.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSObject}]},$ps:[{$nm:'name',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:HTMLCollectionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','HTMLCollectionAbs','$m','namedItem']};};
    return $$hTMLCollectionAbs;
}
HTMLCollectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','HTMLCollectionAbs']};};
exports.HTMLCollectionAbs=HTMLCollectionAbs;
function $init$HTMLCollectionAbs(){
    if (HTMLCollectionAbs.$$===undefined){
        $$$cl1.initTypeProto(HTMLCollectionAbs,'ceylon.js.dom::HTMLCollectionAbs',$$$cjl167.JSObjectAbs);
    }
    return HTMLCollectionAbs;
}
exports.$init$HTMLCollectionAbs=$init$HTMLCollectionAbs;
$init$HTMLCollectionAbs();
function getWindow(){
    /*Begin dynamic block*/
    return $$$cjh462.Window((typeof window==='undefined'||window===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: window")),'5:16-5:21','main.ceylon'):window));
    /*End dynamic block*/
}
exports.getWindow=getWindow;
getWindow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjh462.Window},$ps:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','getWindow']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("based on the DOM 4 working draft and",36))];};
function NodeType(name$725, $$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$nodeType=new NodeType.$$;
    $$nodeType.name$725_=name$725;
    $$$cl1.defineAttr($$nodeType,'name$725',function(){return this.name$725_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeType,d:['ceylon.js.dom','NodeType','$at','name']};});
    return $$nodeType;
}
NodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeType']};};
exports.NodeType=NodeType;
function $init$NodeType(){
    if (NodeType.$$===undefined){
        $$$cl1.initTypeProto(NodeType,'ceylon.js.dom::NodeType',$$$cl1.Basic);
    }
    return NodeType;
}
exports.$init$NodeType=$init$NodeType;
$init$NodeType();
function attributeNode$726(){
    var $$attributeNode=new attributeNode$726.$$;
    NodeType($$$cl1.String("attributeNode",13),$$attributeNode);
    return $$attributeNode;
}
function $init$attributeNode$726(){
    if (attributeNode$726.$$===undefined){
        $$$cl1.initTypeProto(attributeNode$726,'ceylon.js.dom::attributeNode',NodeType);
    }
    return attributeNode$726;
}
exports.$init$attributeNode$726=$init$attributeNode$726;
$init$attributeNode$726();
var attributeNode$727=attributeNode$726();
var getAttributeNode=function(){
    return attributeNode$727;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$726},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;
function cdataSectionNode$728(){
    var $$cdataSectionNode=new cdataSectionNode$728.$$;
    NodeType($$$cl1.String("cdataSectionNode",16),$$cdataSectionNode);
    return $$cdataSectionNode;
}
function $init$cdataSectionNode$728(){
    if (cdataSectionNode$728.$$===undefined){
        $$$cl1.initTypeProto(cdataSectionNode$728,'ceylon.js.dom::cdataSectionNode',NodeType);
    }
    return cdataSectionNode$728;
}
exports.$init$cdataSectionNode$728=$init$cdataSectionNode$728;
$init$cdataSectionNode$728();
var cdataSectionNode$729=cdataSectionNode$728();
var getCdataSectionNode=function(){
    return cdataSectionNode$729;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$728},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;
function commentNode$730(){
    var $$commentNode=new commentNode$730.$$;
    NodeType($$$cl1.String("commentNode",11),$$commentNode);
    return $$commentNode;
}
function $init$commentNode$730(){
    if (commentNode$730.$$===undefined){
        $$$cl1.initTypeProto(commentNode$730,'ceylon.js.dom::commentNode',NodeType);
    }
    return commentNode$730;
}
exports.$init$commentNode$730=$init$commentNode$730;
$init$commentNode$730();
var commentNode$731=commentNode$730();
var getCommentNode=function(){
    return commentNode$731;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$730},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;
function documentFragmentNode$732(){
    var $$documentFragmentNode=new documentFragmentNode$732.$$;
    NodeType($$$cl1.String("documentFragmentNode",20),$$documentFragmentNode);
    return $$documentFragmentNode;
}
function $init$documentFragmentNode$732(){
    if (documentFragmentNode$732.$$===undefined){
        $$$cl1.initTypeProto(documentFragmentNode$732,'ceylon.js.dom::documentFragmentNode',NodeType);
    }
    return documentFragmentNode$732;
}
exports.$init$documentFragmentNode$732=$init$documentFragmentNode$732;
$init$documentFragmentNode$732();
var documentFragmentNode$733=documentFragmentNode$732();
var getDocumentFragmentNode=function(){
    return documentFragmentNode$733;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$732},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;
function documentNode$734(){
    var $$documentNode=new documentNode$734.$$;
    NodeType($$$cl1.String("documentNode",12),$$documentNode);
    return $$documentNode;
}
function $init$documentNode$734(){
    if (documentNode$734.$$===undefined){
        $$$cl1.initTypeProto(documentNode$734,'ceylon.js.dom::documentNode',NodeType);
    }
    return documentNode$734;
}
exports.$init$documentNode$734=$init$documentNode$734;
$init$documentNode$734();
var documentNode$735=documentNode$734();
var getDocumentNode=function(){
    return documentNode$735;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$734},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;
function documentTypeNode$736(){
    var $$documentTypeNode=new documentTypeNode$736.$$;
    NodeType($$$cl1.String("documentTypeNode",16),$$documentTypeNode);
    return $$documentTypeNode;
}
function $init$documentTypeNode$736(){
    if (documentTypeNode$736.$$===undefined){
        $$$cl1.initTypeProto(documentTypeNode$736,'ceylon.js.dom::documentTypeNode',NodeType);
    }
    return documentTypeNode$736;
}
exports.$init$documentTypeNode$736=$init$documentTypeNode$736;
$init$documentTypeNode$736();
var documentTypeNode$737=documentTypeNode$736();
var getDocumentTypeNode=function(){
    return documentTypeNode$737;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$736},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;
function elementNode$738(){
    var $$elementNode=new elementNode$738.$$;
    NodeType($$$cl1.String("elementNode",11),$$elementNode);
    return $$elementNode;
}
function $init$elementNode$738(){
    if (elementNode$738.$$===undefined){
        $$$cl1.initTypeProto(elementNode$738,'ceylon.js.dom::elementNode',NodeType);
    }
    return elementNode$738;
}
exports.$init$elementNode$738=$init$elementNode$738;
$init$elementNode$738();
var elementNode$739=elementNode$738();
var getElementNode=function(){
    return elementNode$739;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$738},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;
function entityNode$740(){
    var $$entityNode=new entityNode$740.$$;
    NodeType($$$cl1.String("entityNode",10),$$entityNode);
    return $$entityNode;
}
function $init$entityNode$740(){
    if (entityNode$740.$$===undefined){
        $$$cl1.initTypeProto(entityNode$740,'ceylon.js.dom::entityNode',NodeType);
    }
    return entityNode$740;
}
exports.$init$entityNode$740=$init$entityNode$740;
$init$entityNode$740();
var entityNode$741=entityNode$740();
var getEntityNode=function(){
    return entityNode$741;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$740},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;
function entityReferenceNode$742(){
    var $$entityReferenceNode=new entityReferenceNode$742.$$;
    NodeType($$$cl1.String("entityReferenceNode",19),$$entityReferenceNode);
    return $$entityReferenceNode;
}
function $init$entityReferenceNode$742(){
    if (entityReferenceNode$742.$$===undefined){
        $$$cl1.initTypeProto(entityReferenceNode$742,'ceylon.js.dom::entityReferenceNode',NodeType);
    }
    return entityReferenceNode$742;
}
exports.$init$entityReferenceNode$742=$init$entityReferenceNode$742;
$init$entityReferenceNode$742();
var entityReferenceNode$743=entityReferenceNode$742();
var getEntityReferenceNode=function(){
    return entityReferenceNode$743;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$742},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;
function notationNode$744(){
    var $$notationNode=new notationNode$744.$$;
    NodeType($$$cl1.String("notationNode",12),$$notationNode);
    return $$notationNode;
}
function $init$notationNode$744(){
    if (notationNode$744.$$===undefined){
        $$$cl1.initTypeProto(notationNode$744,'ceylon.js.dom::notationNode',NodeType);
    }
    return notationNode$744;
}
exports.$init$notationNode$744=$init$notationNode$744;
$init$notationNode$744();
var notationNode$745=notationNode$744();
var getNotationNode=function(){
    return notationNode$745;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$744},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;
function processingInstructionNode$746(){
    var $$processingInstructionNode=new processingInstructionNode$746.$$;
    NodeType($$$cl1.String("processingInstructionNode",25),$$processingInstructionNode);
    return $$processingInstructionNode;
}
function $init$processingInstructionNode$746(){
    if (processingInstructionNode$746.$$===undefined){
        $$$cl1.initTypeProto(processingInstructionNode$746,'ceylon.js.dom::processingInstructionNode',NodeType);
    }
    return processingInstructionNode$746;
}
exports.$init$processingInstructionNode$746=$init$processingInstructionNode$746;
$init$processingInstructionNode$746();
var processingInstructionNode$747=processingInstructionNode$746();
var getProcessingInstructionNode=function(){
    return processingInstructionNode$747;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$746},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;
function textNode$748(){
    var $$textNode=new textNode$748.$$;
    NodeType($$$cl1.String("textNode",8),$$textNode);
    return $$textNode;
}
function $init$textNode$748(){
    if (textNode$748.$$===undefined){
        $$$cl1.initTypeProto(textNode$748,'ceylon.js.dom::textNode',NodeType);
    }
    return textNode$748;
}
exports.$init$textNode$748=$init$textNode$748;
$init$textNode$748();
var textNode$749=textNode$748();
var getTextNode=function(){
    return textNode$749;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$748},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','textNode']};};
$prop$getTextNode={get:getTextNode,$$metamodel$$:getTextNode.$$metamodel$$};
exports.$prop$getTextNode=$prop$getTextNode;
function DocumentFragment(n$750, $$documentFragment){
    $init$DocumentFragment();
    if ($$documentFragment===undefined)$$documentFragment=new DocumentFragment.$$;
    $$documentFragment.n$750_=n$750;
    DocumentFragmentAbs($$documentFragment);
    $$$cl1.defineAttr($$documentFragment,'n$750',function(){return this.n$750_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,d:['ceylon.js.dom','DocumentFragment','$at','n']};});
    $$documentFragment.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:DocumentFragment,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','DocumentFragment','$at','native']};}};
    /*Begin dynamic block*/
    $$documentFragment.$native=n$750;/*End dynamic block*/
    return $$documentFragment;
}
DocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:DocumentFragmentAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','DocumentFragment']};};
exports.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if (DocumentFragment.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragment,'ceylon.js.dom::DocumentFragment',DocumentFragmentAbs);
    }
    return DocumentFragment;
}
exports.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();
function DocumentFragmentAbs($$documentFragmentAbs){
    $init$DocumentFragmentAbs();
    if ($$documentFragmentAbs===undefined)$$documentFragmentAbs=new DocumentFragmentAbs.$$;
    NodeAbs($$documentFragmentAbs);
    return $$documentFragmentAbs;
}
DocumentFragmentAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','DocumentFragmentAbs']};};
exports.DocumentFragmentAbs=DocumentFragmentAbs;
function $init$DocumentFragmentAbs(){
    if (DocumentFragmentAbs.$$===undefined){
        $$$cl1.initTypeProto(DocumentFragmentAbs,'ceylon.js.dom::DocumentFragmentAbs',NodeAbs);
    }
    return DocumentFragmentAbs;
}
exports.$init$DocumentFragmentAbs=$init$DocumentFragmentAbs;
$init$DocumentFragmentAbs();
function EntityReference(n$751, $$entityReference){
    $init$EntityReference();
    if ($$entityReference===undefined)$$entityReference=new EntityReference.$$;
    $$entityReference.n$751_=n$751;
    EntityReferenceAbs($$entityReference);
    $$$cl1.defineAttr($$entityReference,'n$751',function(){return this.n$751_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:EntityReference,d:['ceylon.js.dom','EntityReference','$at','n']};});
    /*Begin dynamic block*/
    $$entityReference.$native=n$751;/*End dynamic block*/
    return $$entityReference;
}
EntityReference.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:EntityReferenceAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','EntityReference']};};
exports.EntityReference=EntityReference;
function $init$EntityReference(){
    if (EntityReference.$$===undefined){
        $$$cl1.initTypeProto(EntityReference,'ceylon.js.dom::EntityReference',EntityReferenceAbs);
    }
    return EntityReference;
}
exports.$init$EntityReference=$init$EntityReference;
$init$EntityReference();
function EntityReferenceAbs($$entityReferenceAbs){
    $init$EntityReferenceAbs();
    if ($$entityReferenceAbs===undefined)$$entityReferenceAbs=new EntityReferenceAbs.$$;
    NodeAbs($$entityReferenceAbs);
    return $$entityReferenceAbs;
}
EntityReferenceAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','EntityReferenceAbs']};};
exports.EntityReferenceAbs=EntityReferenceAbs;
function $init$EntityReferenceAbs(){
    if (EntityReferenceAbs.$$===undefined){
        $$$cl1.initTypeProto(EntityReferenceAbs,'ceylon.js.dom::EntityReferenceAbs',NodeAbs);
    }
    return EntityReferenceAbs;
}
exports.$init$EntityReferenceAbs=$init$EntityReferenceAbs;
$init$EntityReferenceAbs();
function Node(n$752, $$node){
    $init$Node();
    if ($$node===undefined)$$node=new Node.$$;
    $$node.n$752_=n$752;
    NodeAbs($$node);
    $$$cl1.defineAttr($$node,'n$752',function(){return this.n$752_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Node,d:['ceylon.js.dom','Node','$at','n']};});
    /*Begin dynamic block*/
    $$node.$native=n$752;/*End dynamic block*/
    return $$node;
}
Node.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Node']};};
exports.Node=Node;
function $init$Node(){
    if (Node.$$===undefined){
        $$$cl1.initTypeProto(Node,'ceylon.js.dom::Node',NodeAbs);
    }
    return Node;
}
exports.$init$Node=$init$Node;
$init$Node();
function NodeAbs($$nodeAbs){
    $init$NodeAbs();
    if ($$nodeAbs===undefined)$$nodeAbs=new NodeAbs.$$;
    $$$cjl167.JSObjectAbs($$nodeAbs);
    function appendChild(node$753){
        /*Begin dynamic block*/
        return Node(node$753.$native.appendChild(/*NULL PARAM!*/node$753));
        /*End dynamic block*/
    }
    $$nodeAbs.appendChild=appendChild;
    appendChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','appendChild']};};
    function baseURI(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$nodeAbs.$native.baseURL);
        /*End dynamic block*/
    }
    $$nodeAbs.baseURI=baseURI;
    baseURI.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','baseURI']};};
    function childNodes(){
        /*Begin dynamic block*/
        return NodeList($$nodeAbs.$native.childNodes);
        /*End dynamic block*/
    }
    $$nodeAbs.childNodes=childNodes;
    childNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','childNodes']};};
    $$nodeAbs.cloneNode$defs$bool=function(bool$754){return true;};
    function cloneNode(bool$754){
        if(bool$754===undefined){bool$754=$$nodeAbs.cloneNode$defs$bool(bool$754);}
        /*Begin dynamic block*/
        return Node((typeof node==='undefined'||node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: node")),'67:15-67:18','node.ceylon'):node).native.cloneNode(/*NULL PARAM!*/bool$754));
        /*End dynamic block*/
    }
    $$nodeAbs.cloneNode=cloneNode;
    cloneNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'bool',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','cloneNode']};};
    function compareDocumentPosition(node$755){
        /*Begin dynamic block*/
        var pos$756=node$755.$native.compareDocumentPosition(/*NULL PARAM!*/node$755);
        $prop$getPos$756={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition','$at','pos']};}};
        $prop$getPos$756.get=function(){return pos$756};
        if((tmpvar$757=pos$756,tmpvar$758=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'73:23-73:26','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINED_BY,(tmpvar$757.equals&&tmpvar$757.equals(tmpvar$758))||tmpvar$757===tmpvar$758)){
            return getDocumentPositionContainedBy();
        }else {
            if((tmpvar$759=pos$756,tmpvar$760=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'75:30-75:33','node.ceylon'):Node).DOCUMENT_POSITION_CONTAINS,(tmpvar$759.equals&&tmpvar$759.equals(tmpvar$760))||tmpvar$759===tmpvar$760)){
                return getDocumentPositionContains();
            }else {
                if((tmpvar$761=pos$756,tmpvar$762=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'77:27-77:30','node.ceylon'):Node).DOCUMENT_POSITION_DISCONNECTED,(tmpvar$761.equals&&tmpvar$761.equals(tmpvar$762))||tmpvar$761===tmpvar$762)){
                    return getDocumentPositionDisconnected();
                }else {
                    if((tmpvar$763=pos$756,tmpvar$764=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'79:27-79:30','node.ceylon'):Node).DOCUMENT_POSITION_FOLLOWING,(tmpvar$763.equals&&tmpvar$763.equals(tmpvar$764))||tmpvar$763===tmpvar$764)){
                        return getDocumentPositionFollowing();
                    }else {
                        if((tmpvar$765=pos$756,tmpvar$766=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'81:27-81:30','node.ceylon'):Node).DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC,(tmpvar$765.equals&&tmpvar$765.equals(tmpvar$766))||tmpvar$765===tmpvar$766)){
                            return getDocumentPositionImplementationSpecific();
                        }else {
                            return getDocumentPositionPreceding();
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$nodeAbs.compareDocumentPosition=compareDocumentPosition;
    compareDocumentPosition.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentPosition},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','compareDocumentPosition']};};
    function firstChild(){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.firstChild);
        /*End dynamic block*/
    }
    $$nodeAbs.firstChild=firstChild;
    firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','firstChild']};};
    function hasChildNodes(){
        /*Begin dynamic block*/
        if($$nodeAbs.$native.hasAttributes()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.hasChildNodes=hasChildNodes;
    hasChildNodes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','hasChildNodes']};};
    function insertBefore(newElement$767,referenceElement$768){
        /*Begin dynamic block*/
        var ref$769;
        if((ref$769=referenceElement$768)!==null){
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$767.$native/*NULL PARAM!*/,ref$769.$native));
        }else {
            return Node($$nodeAbs.$native.insertBefore(/*NULL PARAM!*/newElement$767.$native));
        }/*End dynamic block*/
    }
    $$nodeAbs.insertBefore=insertBefore;
    insertBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newElement',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'referenceElement',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','insertBefore']};};
    function isDefaultNamespace(namespaceURI$770){
        var isDefault$771;
        $prop$getIsDefault$771={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','isDefaultNamespace','$at','isDefault']};}};
        $prop$getIsDefault$771.get=function(){return isDefault$771};
        
        var case$772=namespaceURI$770;
        if ($$$cl1.isOfType(namespaceURI$770,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            isDefault$771=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$772.valueOf());/*End dynamic block*/
        }else if ($$$cl1.isOfType(namespaceURI$770,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            isDefault$771=$$nodeAbs.$native.isDefaultNamespace(/*NULL PARAM!*/case$772.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(isDefault$771){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isDefaultNamespace=isDefaultNamespace;
    isDefaultNamespace.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isDefaultNamespace']};};
    function isEqualNode(node$773){
        /*Begin dynamic block*/
        if($$nodeAbs.$native.isEqualNode(/*NULL PARAM!*/node$773)){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$nodeAbs.isEqualNode=isEqualNode;
    isEqualNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','isEqualNode']};};
    function lastChild(){
        /*Begin dynamic block*/
        var lastChild$774=$$nodeAbs.$native.lastChild;
        $prop$getLastChild$774={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','lastChild','$at','lastChild']};}};
        $prop$getLastChild$774.get=function(){return lastChild$774};
        if((tmpvar$775=lastChild$774,tmpvar$776=null,(tmpvar$775.equals&&!tmpvar$775.equals(tmpvar$776))||tmpvar$775!==tmpvar$776)){
            return Node(lastChild$774);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lastChild']};};
    function lookupPrefix(namespaceURI$777){
        var prefix$778;
        $prop$getPrefix$778={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','lookupPrefix','$at','prefix']};}};
        $prop$getPrefix$778.get=function(){return prefix$778};
        /*Begin dynamic block*/
        
        var case$779=namespaceURI$777;
        if ($$$cl1.isOfType(namespaceURI$777,{t:$$$cl1.String})) {
            prefix$778=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$779.valueOf());
        }else if ($$$cl1.isOfType(namespaceURI$777,{t:$$$cjl167.JSString})) {
            prefix$778=$$nodeAbs.$native.lookupPrefix(/*NULL PARAM!*/case$779.$native);
        }else if ($$$cl1.isOfType(namespaceURI$777,{t:$$$cl1.Null})) {
            prefix$778=$$nodeAbs.$native.lookupPrefix();
        }if((tmpvar$780=prefix$778,tmpvar$781=null,(tmpvar$780.equals&&!tmpvar$780.equals(tmpvar$781))||tmpvar$780!==tmpvar$781)){
            return $$$cjl167.JSString(prefix$778);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.lookupPrefix=lookupPrefix;
    lookupPrefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[{$nm:'namespaceURI',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','lookupPrefix']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var nextSibling$782=$$nodeAbs.$native.nextSibling();
        $prop$getNextSibling$782={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','nextSibling','$at','nextSibling']};}};
        $prop$getNextSibling$782.get=function(){return nextSibling$782};
        if((tmpvar$783=nextSibling$782,tmpvar$784=null,(tmpvar$783.equals&&!tmpvar$783.equals(tmpvar$784))||tmpvar$783!==tmpvar$784)){
            return Node(nextSibling$782);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nextSibling']};};
    function nodeName(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$nodeAbs.$native.nodeName);
        /*End dynamic block*/
    }
    $$nodeAbs.nodeName=nodeName;
    nodeName.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeName']};};
    function nodeType(){
        /*Begin dynamic block*/
        if((tmpvar$785=$$nodeAbs.$native.nodeType,tmpvar$786=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'200:26-200:29','node.ceylon'):Node).ELEMENT_NODE,(tmpvar$785.equals&&tmpvar$785.equals(tmpvar$786))||tmpvar$785===tmpvar$786)){
            return getElementNode();
        }else {
            if((tmpvar$787=$$nodeAbs.$native.nodeType,tmpvar$788=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'202:33-202:36','node.ceylon'):Node).ATTRIBUTE_NODE,(tmpvar$787.equals&&tmpvar$787.equals(tmpvar$788))||tmpvar$787===tmpvar$788)){
                return getAttributeNode();
            }else {
                if((tmpvar$789=$$nodeAbs.$native.nodeType,tmpvar$790=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'204:33-204:36','node.ceylon'):Node).TEXT_NODE,(tmpvar$789.equals&&tmpvar$789.equals(tmpvar$790))||tmpvar$789===tmpvar$790)){
                    return getTextNode();
                }else {
                    if((tmpvar$791=$$nodeAbs.$native.nodeType,tmpvar$792=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'206:33-206:36','node.ceylon'):Node).CDATA_SECTION_NODE,(tmpvar$791.equals&&tmpvar$791.equals(tmpvar$792))||tmpvar$791===tmpvar$792)){
                        return getCdataSectionNode();
                    }else {
                        if((tmpvar$793=$$nodeAbs.$native.nodeType,tmpvar$794=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'208:33-208:36','node.ceylon'):Node).ENTITY_REFERENCE_NODE,(tmpvar$793.equals&&tmpvar$793.equals(tmpvar$794))||tmpvar$793===tmpvar$794)){
                            return getEntityReferenceNode();
                        }else {
                            if((tmpvar$795=$$nodeAbs.$native.nodeType,tmpvar$796=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'210:33-210:36','node.ceylon'):Node).ENTITY_NODE,(tmpvar$795.equals&&tmpvar$795.equals(tmpvar$796))||tmpvar$795===tmpvar$796)){
                                return getEntityNode();
                            }else {
                                if((tmpvar$797=$$nodeAbs.$native.nodeType,tmpvar$798=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'212:33-212:36','node.ceylon'):Node).PROCESSING_INSTRUCTION_NODE,(tmpvar$797.equals&&tmpvar$797.equals(tmpvar$798))||tmpvar$797===tmpvar$798)){
                                    return getProcessingInstructionNode();
                                }else {
                                    if((tmpvar$799=$$nodeAbs.$native.nodeType,tmpvar$800=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'214:33-214:36','node.ceylon'):Node).COMMENT_NODE,(tmpvar$799.equals&&tmpvar$799.equals(tmpvar$800))||tmpvar$799===tmpvar$800)){
                                        return getCommentNode();
                                    }else {
                                        if((tmpvar$801=$$nodeAbs.$native.nodeType,tmpvar$802=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'216:33-216:36','node.ceylon'):Node).DOCUMENT_NODE,(tmpvar$801.equals&&tmpvar$801.equals(tmpvar$802))||tmpvar$801===tmpvar$802)){
                                            return getDocumentNode();
                                        }else {
                                            if((tmpvar$803=$$nodeAbs.$native.nodeType,tmpvar$804=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'218:33-218:36','node.ceylon'):Node).DOCUMENT_TYPE_NODE,(tmpvar$803.equals&&tmpvar$803.equals(tmpvar$804))||tmpvar$803===tmpvar$804)){
                                                return getDocumentTypeNode();
                                            }else {
                                                if((tmpvar$805=$$nodeAbs.$native.nodeType,tmpvar$806=(typeof Node==='undefined'||Node===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Node")),'220:33-220:36','node.ceylon'):Node).DOCUMENT_FRAGMENT_NODE,(tmpvar$805.equals&&tmpvar$805.equals(tmpvar$806))||tmpvar$805===tmpvar$806)){
                                                    return getDocumentFragmentNode();
                                                }else {
                                                    return getNotationNode();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }/*End dynamic block*/
    }
    $$nodeAbs.nodeType=nodeType;
    nodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NodeType},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','nodeType']};};
    function getNodeValue(){
        /*Begin dynamic block*/
        var val$807=$$nodeAbs.$native.nodeValue;
        $prop$getVal$807={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue','$at','val']};}};
        $prop$getVal$807.get=function(){return val$807};
        if((tmpvar$808=val$807,tmpvar$809=null,(tmpvar$808.equals&&!tmpvar$808.equals(tmpvar$809))||tmpvar$808!==tmpvar$809)){
            return $$$cjl167.JSString(val$807);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getNodeValue=getNodeValue;
    getNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getNodeValue']};};
    function setNodeValue(val$810){
        
        var case$811=val$810;
        if ($$$cl1.isOfType(val$810,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$811.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(val$810,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.nodeValue=case$811.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setNodeValue=setNodeValue;
    setNodeValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setNodeValue']};};
    function normalize(){
        /*Begin dynamic block*/
        $$nodeAbs.$native.normalize();
        /*End dynamic block*/
    }
    $$nodeAbs.normalize=normalize;
    normalize.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','normalize']};};
    $$$cl1.defineAttr($$nodeAbs,'ownerDocument',function(){
        /*Begin dynamic block*/
        return Document($$nodeAbs.$native.ownerDocument);
        /*End dynamic block*/
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$at','ownerDocument']};});
    function parentNode(){
        /*Begin dynamic block*/
        var parent$812=$$nodeAbs.parentNode();
        $prop$getParent$812={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$812.get=function(){return parent$812};
        if((tmpvar$813=parent$812,tmpvar$814=null,(tmpvar$813.equals&&!tmpvar$813.equals(tmpvar$814))||tmpvar$813!==tmpvar$814)){
            return Node(parent$812);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','parentNode']};};
    function prefix(){
        /*Begin dynamic block*/
        var prefix$815=$$nodeAbs.$native.prefix;
        $prop$getPrefix$815={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','prefix','$at','prefix']};}};
        $prop$getPrefix$815.get=function(){return prefix$815};
        if((tmpvar$816=prefix$815,tmpvar$817=null,(tmpvar$816.equals&&!tmpvar$816.equals(tmpvar$817))||tmpvar$816!==tmpvar$817)){
            return $$$cjl167.JSString(prefix$815);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.prefix=prefix;
    prefix.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','prefix']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previousSibling$818=$$nodeAbs.$native.previousSibling();
        $prop$getPreviousSibling$818={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','previousSibling','$at','previousSibling']};}};
        $prop$getPreviousSibling$818.get=function(){return previousSibling$818};
        if((tmpvar$819=previousSibling$818,tmpvar$820=null,(tmpvar$819.equals&&!tmpvar$819.equals(tmpvar$820))||tmpvar$819!==tmpvar$820)){
            return Node(previousSibling$818);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','previousSibling']};};
    function removeChild(node$821){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.removeChild(/*NULL PARAM!*/node$821.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.removeChild=removeChild;
    removeChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','removeChild']};};
    function replaceChild(newChild$822,oldChild$823){
        /*Begin dynamic block*/
        return Node($$nodeAbs.$native.replaceChild(/*NULL PARAM!*/newChild$822.$native/*NULL PARAM!*/,oldChild$823.$native));
        /*End dynamic block*/
    }
    $$nodeAbs.replaceChild=replaceChild;
    replaceChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[{$nm:'newChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'oldChild',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','replaceChild']};};
    function getTextContent(){
        /*Begin dynamic block*/
        var content$824=$$nodeAbs.$native.textContent();
        $prop$getContent$824={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeAbs','$m','getTextContent','$at','content']};}};
        $prop$getContent$824.get=function(){return content$824};
        if((tmpvar$825=content$824,tmpvar$826=null,(tmpvar$825.equals&&!tmpvar$825.equals(tmpvar$826))||tmpvar$825!==tmpvar$826)){
            return $$$cjl167.JSString(content$824);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeAbs.getTextContent=getTextContent;
    getTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cjl167.JSString}]},$ps:[],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','getTextContent']};};
    function setTextContent(content$827){
        
        var case$828=content$827;
        if ($$$cl1.isOfType(content$827,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$828.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(content$827,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$nodeAbs.$native.textContent=case$828.$native;
            /*End dynamic block*/
        }
    }
    $$nodeAbs.setTextContent=setTextContent;
    setTextContent.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'content',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:NodeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeAbs','$m','setTextContent']};};
    return $$nodeAbs;
}
NodeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeAbs']};};
exports.NodeAbs=NodeAbs;
function $init$NodeAbs(){
    if (NodeAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeAbs,'ceylon.js.dom::NodeAbs',$$$cjl167.JSObjectAbs);
    }
    return NodeAbs;
}
exports.$init$NodeAbs=$init$NodeAbs;
$init$NodeAbs();
function NodeFilterResult(name$829, $$nodeFilterResult){
    $init$NodeFilterResult();
    if ($$nodeFilterResult===undefined)$$nodeFilterResult=new NodeFilterResult.$$;
    $$nodeFilterResult.name$829_=name$829;
    $$$cl1.defineAttr($$nodeFilterResult,'name$829',function(){return this.name$829_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:NodeFilterResult,d:['ceylon.js.dom','NodeFilterResult','$at','name']};});
    return $$nodeFilterResult;
}
NodeFilterResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeFilterResult']};};
exports.NodeFilterResult=NodeFilterResult;
function $init$NodeFilterResult(){
    if (NodeFilterResult.$$===undefined){
        $$$cl1.initTypeProto(NodeFilterResult,'ceylon.js.dom::NodeFilterResult',$$$cl1.Basic);
    }
    return NodeFilterResult;
}
exports.$init$NodeFilterResult=$init$NodeFilterResult;
$init$NodeFilterResult();
function filterAccept$830(){
    var $$filterAccept=new filterAccept$830.$$;
    NodeFilterResult($$$cl1.String("filterAccept",12),$$filterAccept);
    return $$filterAccept;
}
function $init$filterAccept$830(){
    if (filterAccept$830.$$===undefined){
        $$$cl1.initTypeProto(filterAccept$830,'ceylon.js.dom::filterAccept',NodeFilterResult);
    }
    return filterAccept$830;
}
exports.$init$filterAccept$830=$init$filterAccept$830;
$init$filterAccept$830();
var filterAccept$831=filterAccept$830();
var getFilterAccept=function(){
    return filterAccept$831;
}
exports.getFilterAccept=getFilterAccept;
getFilterAccept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterAccept$830},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterAccept']};};
$prop$getFilterAccept={get:getFilterAccept,$$metamodel$$:getFilterAccept.$$metamodel$$};
exports.$prop$getFilterAccept=$prop$getFilterAccept;
function filterReject$832(){
    var $$filterReject=new filterReject$832.$$;
    NodeFilterResult($$$cl1.String("filterReject",12),$$filterReject);
    return $$filterReject;
}
function $init$filterReject$832(){
    if (filterReject$832.$$===undefined){
        $$$cl1.initTypeProto(filterReject$832,'ceylon.js.dom::filterReject',NodeFilterResult);
    }
    return filterReject$832;
}
exports.$init$filterReject$832=$init$filterReject$832;
$init$filterReject$832();
var filterReject$833=filterReject$832();
var getFilterReject=function(){
    return filterReject$833;
}
exports.getFilterReject=getFilterReject;
getFilterReject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterReject$832},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterReject']};};
$prop$getFilterReject={get:getFilterReject,$$metamodel$$:getFilterReject.$$metamodel$$};
exports.$prop$getFilterReject=$prop$getFilterReject;
function filterSkip$834(){
    var $$filterSkip=new filterSkip$834.$$;
    NodeFilterResult($$$cl1.String("filterSkip",10),$$filterSkip);
    return $$filterSkip;
}
function $init$filterSkip$834(){
    if (filterSkip$834.$$===undefined){
        $$$cl1.initTypeProto(filterSkip$834,'ceylon.js.dom::filterSkip',NodeFilterResult);
    }
    return filterSkip$834;
}
exports.$init$filterSkip$834=$init$filterSkip$834;
$init$filterSkip$834();
var filterSkip$835=filterSkip$834();
var getFilterSkip=function(){
    return filterSkip$835;
}
exports.getFilterSkip=getFilterSkip;
getFilterSkip.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:filterSkip$834},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','filterSkip']};};
$prop$getFilterSkip={get:getFilterSkip,$$metamodel$$:getFilterSkip.$$metamodel$$};
exports.$prop$getFilterSkip=$prop$getFilterSkip;
function NodeFilter(acceptNode$836, $$nodeFilter){
    $init$NodeFilter();
    if ($$nodeFilter===undefined)$$nodeFilter=new NodeFilter.$$;
    $$nodeFilter.acceptNode$836_=acceptNode$836;
    $$$cl1.defineAttr($$nodeFilter,'acceptNode$836',function(){return this.acceptNode$836_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:NodeFilterResult},$ps:[{$nm:'n',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:NodeFilter,d:['ceylon.js.dom','NodeFilter','$m','acceptNode']};});
    $$nodeFilter.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeFilter,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeFilter','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeFilter.$native=(typeof Object==='undefined'||Object===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Object")),'11:11-11:16','nodefilter.ceylon'):Object)();$$nodeFilter.$native.acceptNode=$$$cl1.$JsCallable(acceptNode$836/*TODO: callable targs 6*/);
    /*End dynamic block*/
    return $$nodeFilter;
}
NodeFilter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeFilter']};};
exports.NodeFilter=NodeFilter;
function $init$NodeFilter(){
    if (NodeFilter.$$===undefined){
        $$$cl1.initTypeProto(NodeFilter,'ceylon.js.dom::NodeFilter',$$$cl1.Basic);
    }
    return NodeFilter;
}
exports.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();
function NodeIterator(n$837, $$nodeIterator){
    $init$NodeIterator();
    if ($$nodeIterator===undefined)$$nodeIterator=new NodeIterator.$$;
    $$nodeIterator.n$837_=n$837;
    NodeIteratorAbs($$nodeIterator);
    $$$cl1.defineAttr($$nodeIterator,'n$837',function(){return this.n$837_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,d:['ceylon.js.dom','NodeIterator','$at','n']};});
    $$nodeIterator.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeIterator','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeIterator.$native=n$837;/*End dynamic block*/
    return $$nodeIterator;
}
NodeIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeIteratorAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIterator']};};
exports.NodeIterator=NodeIterator;
function $init$NodeIterator(){
    if (NodeIterator.$$===undefined){
        $$$cl1.initTypeProto(NodeIterator,'ceylon.js.dom::NodeIterator',NodeIteratorAbs);
    }
    return NodeIterator;
}
exports.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();
function NodeIteratorAbs($$nodeIteratorAbs){
    $init$NodeIteratorAbs();
    if ($$nodeIteratorAbs===undefined)$$nodeIteratorAbs=new NodeIteratorAbs.$$;
    $$$cjl167.JSObjectAbs($$nodeIteratorAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$nodeIteratorAbs.$native.root);
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$838=$$nodeIteratorAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$838,{t:$$$cl1.Anything})?tmpvar$838:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'20:19-20:35','nodeiterator.ceylon'));
        /*End dynamic block*/
    }
    $$nodeIteratorAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$839=$$nodeIteratorAbs.$native.filter;
        $prop$getFilter$839={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$839.get=function(){return filter$839};
        if((tmpvar$840=filter$839,tmpvar$841=null,(tmpvar$840.equals&&!tmpvar$840.equals(tmpvar$841))||tmpvar$840!==tmpvar$841)){
            return NodeFilter((tmpvar$842=filter$839,$$$cl1.isOfType(tmpvar$842,{t:NodeFilterResult})?tmpvar$842:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'28:34-28:39','nodeiterator.ceylon')));
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','filter']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$843=$$nodeIteratorAbs.$native.nextNode();
        $prop$getNext$843={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$843.get=function(){return next$843};
        if((tmpvar$844=next$843,tmpvar$845=null,(tmpvar$844.equals&&!tmpvar$844.equals(tmpvar$845))||tmpvar$844!==tmpvar$845)){
            return Node(next$843);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','nextNode']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$846=$$nodeIteratorAbs.$native.previousNode();
        $prop$getPrevious$846={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$846.get=function(){return previous$846};
        if((tmpvar$847=previous$846,tmpvar$848=null,(tmpvar$847.equals&&!tmpvar$847.equals(tmpvar$848))||tmpvar$847!==tmpvar$848)){
            return Node(previous$846);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeIteratorAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:NodeIteratorAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeIteratorAbs','$m','previousNode']};};
    return $$nodeIteratorAbs;
}
NodeIteratorAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeIteratorAbs']};};
exports.NodeIteratorAbs=NodeIteratorAbs;
function $init$NodeIteratorAbs(){
    if (NodeIteratorAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeIteratorAbs,'ceylon.js.dom::NodeIteratorAbs',$$$cjl167.JSObjectAbs);
    }
    return NodeIteratorAbs;
}
exports.$init$NodeIteratorAbs=$init$NodeIteratorAbs;
$init$NodeIteratorAbs();
function NodeList(n$849, $$nodeList){
    $init$NodeList();
    if ($$nodeList===undefined)$$nodeList=new NodeList.$$;
    $$nodeList.n$849_=n$849;
    NodeListAbs($$nodeList);
    $$$cl1.defineAttr($$nodeList,'n$849',function(){return this.n$849_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,d:['ceylon.js.dom','NodeList','$at','n']};});
    $$nodeList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:NodeList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','NodeList','$at','native']};}};
    /*Begin dynamic block*/
    $$nodeList.$native=n$849;/*End dynamic block*/
    return $$nodeList;
}
NodeList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeListAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeList']};};
exports.NodeList=NodeList;
function $init$NodeList(){
    if (NodeList.$$===undefined){
        $$$cl1.initTypeProto(NodeList,'ceylon.js.dom::NodeList',NodeListAbs);
    }
    return NodeList;
}
exports.$init$NodeList=$init$NodeList;
$init$NodeList();
function NodeListAbs($$nodeListAbs){
    $init$NodeListAbs();
    if ($$nodeListAbs===undefined)$$nodeListAbs=new NodeListAbs.$$;
    $$$cjl167.JSObjectAbs($$nodeListAbs);
    function item(index$850){
        var item$851;
        $prop$getItem$851={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','NodeListAbs','$m','item','$at','item']};}};
        $prop$getItem$851.get=function(){return item$851};
        
        var case$852=index$850;
        if ($$$cl1.isOfType(index$850,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            item$851=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$852);/*End dynamic block*/
        }else if ($$$cl1.isOfType(index$850,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            item$851=$$nodeListAbs.$native.item(/*NULL PARAM!*/case$852.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if((tmpvar$853=item$851,tmpvar$854=null,(tmpvar$853.equals&&!tmpvar$853.equals(tmpvar$854))||tmpvar$853!==tmpvar$854)){
            return Node(item$851);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$nodeListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','item']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$nodeListAbs.$native.length);
        /*End dynamic block*/
    }
    $$nodeListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:NodeListAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','NodeListAbs','$m','length']};};
    return $$nodeListAbs;
}
NodeListAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','NodeListAbs']};};
exports.NodeListAbs=NodeListAbs;
function $init$NodeListAbs(){
    if (NodeListAbs.$$===undefined){
        $$$cl1.initTypeProto(NodeListAbs,'ceylon.js.dom::NodeListAbs',$$$cjl167.JSObjectAbs);
    }
    return NodeListAbs;
}
exports.$init$NodeListAbs=$init$NodeListAbs;
$init$NodeListAbs();
exports.$pkg$ans$ceylon$js$dom=function(){return[$$$cl1.shared()];};
function ProcessingInstruction(n$855, $$processingInstruction){
    $init$ProcessingInstruction();
    if ($$processingInstruction===undefined)$$processingInstruction=new ProcessingInstruction.$$;
    $$processingInstruction.n$855_=n$855;
    ProcessingInstructionAbs($$processingInstruction);
    $$$cl1.defineAttr($$processingInstruction,'n$855',function(){return this.n$855_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,d:['ceylon.js.dom','ProcessingInstruction','$at','n']};});
    $$processingInstruction.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:ProcessingInstruction,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','ProcessingInstruction','$at','native']};}};
    /*Begin dynamic block*/
    $$processingInstruction.$native=n$855;/*End dynamic block*/
    return $$processingInstruction;
}
ProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:ProcessingInstructionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstruction']};};
exports.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if (ProcessingInstruction.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstruction,'ceylon.js.dom::ProcessingInstruction',ProcessingInstructionAbs);
    }
    return ProcessingInstruction;
}
exports.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();
function ProcessingInstructionAbs($$processingInstructionAbs){
    $init$ProcessingInstructionAbs();
    if ($$processingInstructionAbs===undefined)$$processingInstructionAbs=new ProcessingInstructionAbs.$$;
    NodeAbs($$processingInstructionAbs);
    function getData(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$processingInstructionAbs.$native.data);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.getData=getData;
    getData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','getData']};};
    function setData(data$856){
        
        var case$857=data$856;
        if ($$$cl1.isOfType(data$856,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$857.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(data$856,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$processingInstructionAbs.$native.data=case$857.$native;
            /*End dynamic block*/
        }
    }
    $$processingInstructionAbs.setData=setData;
    setData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'data',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','setData']};};
    function target(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$processingInstructionAbs.$native.target);
        /*End dynamic block*/
    }
    $$processingInstructionAbs.target=target;
    target.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:ProcessingInstructionAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','ProcessingInstructionAbs','$m','target']};};
    return $$processingInstructionAbs;
}
ProcessingInstructionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:NodeAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','ProcessingInstructionAbs']};};
exports.ProcessingInstructionAbs=ProcessingInstructionAbs;
function $init$ProcessingInstructionAbs(){
    if (ProcessingInstructionAbs.$$===undefined){
        $$$cl1.initTypeProto(ProcessingInstructionAbs,'ceylon.js.dom::ProcessingInstructionAbs',NodeAbs);
    }
    return ProcessingInstructionAbs;
}
exports.$init$ProcessingInstructionAbs=$init$ProcessingInstructionAbs;
$init$ProcessingInstructionAbs();
function RangeCompareHow(name$858, $$rangeCompareHow){
    $init$RangeCompareHow();
    if ($$rangeCompareHow===undefined)$$rangeCompareHow=new RangeCompareHow.$$;
    $$rangeCompareHow.name$858_=name$858;
    $$$cl1.defineAttr($$rangeCompareHow,'name$858',function(){return this.name$858_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:RangeCompareHow,d:['ceylon.js.dom','RangeCompareHow','$at','name']};});
    return $$rangeCompareHow;
}
RangeCompareHow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','RangeCompareHow']};};
exports.RangeCompareHow=RangeCompareHow;
function $init$RangeCompareHow(){
    if (RangeCompareHow.$$===undefined){
        $$$cl1.initTypeProto(RangeCompareHow,'ceylon.js.dom::RangeCompareHow',$$$cl1.Basic);
    }
    return RangeCompareHow;
}
exports.$init$RangeCompareHow=$init$RangeCompareHow;
$init$RangeCompareHow();
function endToEnd$859(){
    var $$endToEnd=new endToEnd$859.$$;
    RangeCompareHow($$$cl1.String("endToEnd",8),$$endToEnd);
    return $$endToEnd;
}
function $init$endToEnd$859(){
    if (endToEnd$859.$$===undefined){
        $$$cl1.initTypeProto(endToEnd$859,'ceylon.js.dom::endToEnd',RangeCompareHow);
    }
    return endToEnd$859;
}
exports.$init$endToEnd$859=$init$endToEnd$859;
$init$endToEnd$859();
var endToEnd$860=endToEnd$859();
var getEndToEnd=function(){
    return endToEnd$860;
}
exports.getEndToEnd=getEndToEnd;
getEndToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToEnd$859},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToEnd']};};
$prop$getEndToEnd={get:getEndToEnd,$$metamodel$$:getEndToEnd.$$metamodel$$};
exports.$prop$getEndToEnd=$prop$getEndToEnd;
function endToStart$861(){
    var $$endToStart=new endToStart$861.$$;
    RangeCompareHow($$$cl1.String("endToStart",10),$$endToStart);
    return $$endToStart;
}
function $init$endToStart$861(){
    if (endToStart$861.$$===undefined){
        $$$cl1.initTypeProto(endToStart$861,'ceylon.js.dom::endToStart',RangeCompareHow);
    }
    return endToStart$861;
}
exports.$init$endToStart$861=$init$endToStart$861;
$init$endToStart$861();
var endToStart$862=endToStart$861();
var getEndToStart=function(){
    return endToStart$862;
}
exports.getEndToStart=getEndToStart;
getEndToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:endToStart$861},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','endToStart']};};
$prop$getEndToStart={get:getEndToStart,$$metamodel$$:getEndToStart.$$metamodel$$};
exports.$prop$getEndToStart=$prop$getEndToStart;
function startToEnd$863(){
    var $$startToEnd=new startToEnd$863.$$;
    RangeCompareHow($$$cl1.String("startToEnd",10),$$startToEnd);
    return $$startToEnd;
}
function $init$startToEnd$863(){
    if (startToEnd$863.$$===undefined){
        $$$cl1.initTypeProto(startToEnd$863,'ceylon.js.dom::startToEnd',RangeCompareHow);
    }
    return startToEnd$863;
}
exports.$init$startToEnd$863=$init$startToEnd$863;
$init$startToEnd$863();
var startToEnd$864=startToEnd$863();
var getStartToEnd=function(){
    return startToEnd$864;
}
exports.getStartToEnd=getStartToEnd;
getStartToEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToEnd$863},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToEnd']};};
$prop$getStartToEnd={get:getStartToEnd,$$metamodel$$:getStartToEnd.$$metamodel$$};
exports.$prop$getStartToEnd=$prop$getStartToEnd;
function startToStart$865(){
    var $$startToStart=new startToStart$865.$$;
    RangeCompareHow($$$cl1.String("startToStart",12),$$startToStart);
    return $$startToStart;
}
function $init$startToStart$865(){
    if (startToStart$865.$$===undefined){
        $$$cl1.initTypeProto(startToStart$865,'ceylon.js.dom::startToStart',RangeCompareHow);
    }
    return startToStart$865;
}
exports.$init$startToStart$865=$init$startToStart$865;
$init$startToStart$865();
var startToStart$866=startToStart$865();
var getStartToStart=function(){
    return startToStart$866;
}
exports.getStartToStart=getStartToStart;
getStartToStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:startToStart$865},$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','startToStart']};};
$prop$getStartToStart={get:getStartToStart,$$metamodel$$:getStartToStart.$$metamodel$$};
exports.$prop$getStartToStart=$prop$getStartToStart;
function Range(n$867, $$range){
    $init$Range();
    if ($$range===undefined)$$range=new Range.$$;
    $$range.n$867_=n$867;
    RangeAbs($$range);
    $$$cl1.defineAttr($$range,'n$867',function(){return this.n$867_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,d:['ceylon.js.dom','Range','$at','n']};});
    $$range.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Range,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','Range','$at','native']};}};
    /*Begin dynamic block*/
    $$range.$native=n$867;/*End dynamic block*/
    return $$range;
}
Range.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:RangeAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Range']};};
exports.Range=Range;
function $init$Range(){
    if (Range.$$===undefined){
        $$$cl1.initTypeProto(Range,'ceylon.js.dom::Range',RangeAbs);
    }
    return Range;
}
exports.$init$Range=$init$Range;
$init$Range();
function RangeAbs($$rangeAbs){
    $init$RangeAbs();
    if ($$rangeAbs===undefined)$$rangeAbs=new RangeAbs.$$;
    $$$cjl167.JSObjectAbs($$rangeAbs);
    function startContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.startContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.startContainer=startContainer;
    startContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startContainer']};};
    function endContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.endContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.endContainer=endContainer;
    endContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endContainer']};};
    function startOffset(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$rangeAbs.$native.startOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.startOffset=startOffset;
    startOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','startOffset']};};
    function endOffset(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$rangeAbs.$native.endOffset);
        /*End dynamic block*/
    }
    $$rangeAbs.endOffset=endOffset;
    endOffset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','endOffset']};};
    function collapsed(){
        /*Begin dynamic block*/
        if($$rangeAbs.$native.collapsed()){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$rangeAbs.collapsed=collapsed;
    collapsed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapsed']};};
    function commonAncestorContainer(){
        /*Begin dynamic block*/
        return Node($$rangeAbs.$native.commonAncestorContainer);
        /*End dynamic block*/
    }
    $$rangeAbs.commonAncestorContainer=commonAncestorContainer;
    commonAncestorContainer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','commonAncestorContainer']};};
    function setStart(startNode$868,startOffset$869){
        
        var case$870=startOffset$869;
        if ($$$cl1.isOfType(startOffset$869,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$868/*NULL PARAM!*/,case$870);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(startOffset$869,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setStart(/*NULL PARAM!*/startNode$868/*NULL PARAM!*/,case$870.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setStart=setStart;
    setStart.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'startNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'startOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStart']};};
    function setEnd(endNode$871,endOffset$872){
        
        var case$873=endOffset$872;
        if ($$$cl1.isOfType(endOffset$872,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$871/*NULL PARAM!*/,case$873);
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(endOffset$872,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            $$rangeAbs.$native.setEnd(/*NULL PARAM!*/endNode$871/*NULL PARAM!*/,case$873.$native);
            /*End dynamic block*/
        }
    }
    $$rangeAbs.setEnd=setEnd;
    setEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'endNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'endOffset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEnd']};};
    function setStartBefore(refNode$874){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartBefore(/*NULL PARAM!*/refNode$874);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartBefore=setStartBefore;
    setStartBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartBefore']};};
    function setStartAfter(refNode$875){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setStartAfter(/*NULL PARAM!*/refNode$875);
        /*End dynamic block*/
    }
    $$rangeAbs.setStartAfter=setStartAfter;
    setStartAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setStartAfter']};};
    function setEndBefore(refNode$876){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndBefore(/*NULL PARAM!*/refNode$876);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndBefore=setEndBefore;
    setEndBefore.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndBefore']};};
    function setEndAfter(refNode$877){
        /*Begin dynamic block*/
        $$rangeAbs.$native.setEndAfter(/*NULL PARAM!*/refNode$877);
        /*End dynamic block*/
    }
    $$rangeAbs.setEndAfter=setEndAfter;
    setEndAfter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','setEndAfter']};};
    $$rangeAbs.collapse$defs$toStart=function(toStart$878){return null;};
    function collapse(toStart$878){
        if(toStart$878===undefined){toStart$878=$$rangeAbs.collapse$defs$toStart(toStart$878);}
        /*Begin dynamic block*/
        var s$879;
        if((s$879=toStart$878)!==null){
            $$rangeAbs.$native.collapse(/*NULL PARAM!*/s$879);
        }else {
            $$rangeAbs.$native.collapse();
        }/*End dynamic block*/
    }
    $$rangeAbs.collapse=collapse;
    collapse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'toStart',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','collapse']};};
    function selectNode(refNode$880){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNode(/*NULL PARAM!*/refNode$880);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNode=selectNode;
    selectNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNode']};};
    function selectNodeContents(refNode$881){
        /*Begin dynamic block*/
        $$rangeAbs.$native.selectNodeContents(/*NULL PARAM!*/refNode$881);
        /*End dynamic block*/
    }
    $$rangeAbs.selectNodeContents=selectNodeContents;
    selectNodeContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'refNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','selectNodeContents']};};
    function compareBoundaryPoints(how$882,sourceRange$883){
        /*Begin dynamic block*/
        
        var case$884=how$882;
        if (case$884===getEndToEnd()) {
            return $$$cjl167.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'137:61-137:65','range.ceylon'):Range).START_TO_START/*NULL PARAM!*/,sourceRange$883));
        }else if (case$884===getEndToStart()) {
            return $$$cjl167.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'140:61-140:65','range.ceylon'):Range).START_TO_END/*NULL PARAM!*/,sourceRange$883));
        }else if (case$884===getStartToEnd()) {
            return $$$cjl167.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'143:61-143:65','range.ceylon'):Range).END_TO_END/*NULL PARAM!*/,sourceRange$883));
        }else if (case$884===getStartToStart()) {
            return $$$cjl167.JSNumber($$rangeAbs.$native.compareBoundaryPoints(/*NULL PARAM!*/(typeof Range==='undefined'||Range===null?$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("Undefined or null reference: Range")),'146:61-146:65','range.ceylon'):Range).END_TO_START/*NULL PARAM!*/,sourceRange$883));
        }/*End dynamic block*/
    }
    $$rangeAbs.compareBoundaryPoints=compareBoundaryPoints;
    compareBoundaryPoints.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[{$nm:'how',$mt:'prm',$t:{t:RangeCompareHow},$an:function(){return[];}},{$nm:'sourceRange',$mt:'prm',$t:{t:Range},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','compareBoundaryPoints']};};
    function deleteContents(){
        /*Begin dynamic block*/
        $$rangeAbs.$native.deleteContents();
        /*End dynamic block*/
    }
    $$rangeAbs.deleteContents=deleteContents;
    deleteContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','deleteContents']};};
    function extractContents(){
        /*Begin dynamic block*/
        return DocumentFragment($$rangeAbs.$native.extractContents());
        /*End dynamic block*/
    }
    $$rangeAbs.extractContents=extractContents;
    extractContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','extractContents']};};
    function cloneContents(){
        /*Begin dynamic block*/
        return DocumentFragment($$rangeAbs.$native.cloneContents());
        /*End dynamic block*/
    }
    $$rangeAbs.cloneContents=cloneContents;
    cloneContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DocumentFragment},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneContents']};};
    function insertNode(newNode$885){
        /*Begin dynamic block*/
        $$rangeAbs.$native.insertNode(/*NULL PARAM!*/newNode$885);
        /*End dynamic block*/
    }
    $$rangeAbs.insertNode=insertNode;
    insertNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','insertNode']};};
    function surroundContents(newNode$886){
        /*Begin dynamic block*/
        $$rangeAbs.$native.surroundContents(/*NULL PARAM!*/newNode$886);
        /*End dynamic block*/
    }
    $$rangeAbs.surroundContents=surroundContents;
    surroundContents.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newNode',$mt:'prm',$t:{t:Node},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','surroundContents']};};
    function cloneRange(){
        /*Begin dynamic block*/
        return (tmpvar$887=$$rangeAbs.$native.cloneRange(),$$$cl1.isOfType(tmpvar$887,{t:$$$cl1.Anything})?tmpvar$887:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'183:19-183:37','range.ceylon'));
        /*End dynamic block*/
    }
    $$rangeAbs.cloneRange=cloneRange;
    cloneRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Range},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','cloneRange']};};
    function detach(){
        /*Begin dynamic block*/
        $$rangeAbs.$native.detach();
        /*End dynamic block*/
    }
    $$rangeAbs.detach=detach;
    detach.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','detach']};};
    function isPointInRange(node$888,offset$889){
        var inRange$890;
        $prop$getInRange$890={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','RangeAbs','$m','isPointInRange','$at','inRange']};}};
        $prop$getInRange$890.get=function(){return inRange$890};
        
        var case$891=offset$889;
        if ($$$cl1.isOfType(offset$889,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            inRange$890=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$888/*NULL PARAM!*/,case$891);/*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$889,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            inRange$890=$$rangeAbs.$native.isPointInRange(/*NULL PARAM!*/node$888/*NULL PARAM!*/,case$891.$native);/*End dynamic block*/
        }
        /*Begin dynamic block*/
        if(inRange$890){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$rangeAbs.isPointInRange=isPointInRange;
    isPointInRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'node',$mt:'prm',$t:{t:Node},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:RangeAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','RangeAbs','$m','isPointInRange']};};
    return $$rangeAbs;
}
RangeAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','RangeAbs']};};
exports.RangeAbs=RangeAbs;
function $init$RangeAbs(){
    if (RangeAbs.$$===undefined){
        $$$cl1.initTypeProto(RangeAbs,'ceylon.js.dom::RangeAbs',$$$cjl167.JSObjectAbs);
    }
    return RangeAbs;
}
exports.$init$RangeAbs=$init$RangeAbs;
$init$RangeAbs();
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Run the module `ceylon.js.dom`.",31))];},d:['ceylon.js.dom','run']};};
function MediaList$stylesheets(n$892, $$mediaList){
    $init$MediaList$stylesheets();
    if ($$mediaList===undefined)$$mediaList=new MediaList$stylesheets.$$;
    $$mediaList.n$892_=n$892;
    MediaListAbs$stylesheets($$mediaList);
    $$$cl1.defineAttr($$mediaList,'n$892',function(){return this.n$892_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,d:['ceylon.js.dom.stylesheets','MediaList','$at','n']};});
    $$mediaList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:MediaList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','MediaList','$at','native']};}};
    /*Begin dynamic block*/
    $$mediaList.$native=n$892;/*End dynamic block*/
    return $$mediaList;
}
MediaList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:MediaListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaList']};};
exports.MediaList$stylesheets=MediaList$stylesheets;
function $init$MediaList$stylesheets(){
    if (MediaList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaList$stylesheets,'ceylon.js.dom.stylesheets::MediaList',MediaListAbs$stylesheets);
    }
    return MediaList$stylesheets;
}
exports.$init$MediaList$stylesheets=$init$MediaList$stylesheets;
$init$MediaList$stylesheets();
function MediaListAbs$stylesheets($$mediaListAbs){
    $init$MediaListAbs$stylesheets();
    if ($$mediaListAbs===undefined)$$mediaListAbs=new MediaListAbs$stylesheets.$$;
    $$$cjl167.JSObjectAbs($$mediaListAbs);
    function getMediaText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$mediaListAbs.$native.mediaText);
        /*End dynamic block*/
    }
    $$mediaListAbs.getMediaText=getMediaText;
    getMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','getMediaText']};};
    function setMediaText(text$893){
        
        var case$894=text$893;
        if ($$$cl1.isOfType(text$893,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$894.valueOf();
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(text$893,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.mediaText=case$894.$native;
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.setMediaText=setMediaText;
    setMediaText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'text',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','setMediaText']};};
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$mediaListAbs.$native.length);
        /*End dynamic block*/
    }
    $$mediaListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','length']};};
    function item(index$895){
        
        var case$896=index$895;
        if ($$$cl1.isOfType(index$895,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return $$$cjl167.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$896));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(index$895,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            return $$$cjl167.JSString($$mediaListAbs.$native.item(/*NULL PARAM!*/case$896.$native));
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','item']};};
    function deleteMedium(oldMedium$897){
        
        var case$898=oldMedium$897;
        if ($$$cl1.isOfType(oldMedium$897,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$898.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(oldMedium$897,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.deleteMedium(/*NULL PARAM!*/case$898.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.deleteMedium=deleteMedium;
    deleteMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'oldMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','deleteMedium']};};
    function appendMedium(newMedium$899){
        
        var case$900=newMedium$899;
        if ($$$cl1.isOfType(newMedium$899,{t:$$$cl1.String})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$900.valueOf());
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(newMedium$899,{t:$$$cjl167.JSString})) {
            /*Begin dynamic block*/
            $$mediaListAbs.$native.appendMedium(/*NULL PARAM!*/case$900.$native);
            /*End dynamic block*/
        }
    }
    $$mediaListAbs.appendMedium=appendMedium;
    appendMedium.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'newMedium',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cjl167.JSString}]},$an:function(){return[];}}],$cont:MediaListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','MediaListAbs','$m','appendMedium']};};
    return $$mediaListAbs;
}
MediaListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','MediaListAbs']};};
exports.MediaListAbs$stylesheets=MediaListAbs$stylesheets;
function $init$MediaListAbs$stylesheets(){
    if (MediaListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(MediaListAbs$stylesheets,'ceylon.js.dom.stylesheets::MediaListAbs',$$$cjl167.JSObjectAbs);
    }
    return MediaListAbs$stylesheets;
}
exports.$init$MediaListAbs$stylesheets=$init$MediaListAbs$stylesheets;
$init$MediaListAbs$stylesheets();
exports.$pkg$ans$ceylon$js$dom$stylesheets=function(){return[$$$cl1.shared()];};
function StyleSheet$stylesheets(n$901, $$styleSheet){
    $init$StyleSheet$stylesheets();
    if ($$styleSheet===undefined)$$styleSheet=new StyleSheet$stylesheets.$$;
    $$styleSheet.n$901_=n$901;
    StyleSheetAbs$stylesheets($$styleSheet);
    $$$cl1.defineAttr($$styleSheet,'n$901',function(){return this.n$901_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheet','$at','n']};});
    $$styleSheet.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheet$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheet','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheet.$native=n$901;/*End dynamic block*/
    return $$styleSheet;
}
StyleSheet$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheet']};};
exports.StyleSheet$stylesheets=StyleSheet$stylesheets;
function $init$StyleSheet$stylesheets(){
    if (StyleSheet$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheet$stylesheets,'ceylon.js.dom.stylesheets::StyleSheet',StyleSheetAbs$stylesheets);
    }
    return StyleSheet$stylesheets;
}
exports.$init$StyleSheet$stylesheets=$init$StyleSheet$stylesheets;
$init$StyleSheet$stylesheets();
function StyleSheetAbs$stylesheets($$styleSheetAbs){
    $init$StyleSheetAbs$stylesheets();
    if ($$styleSheetAbs===undefined)$$styleSheetAbs=new StyleSheetAbs$stylesheets.$$;
    $$$cjl167.JSObjectAbs($$styleSheetAbs);
    function type(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$styleSheetAbs.$native.type);
        /*End dynamic block*/
    }
    $$styleSheetAbs.type=type;
    type.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','type']};};
    function disabled(){
        /*Begin dynamic block*/
        if($$styleSheetAbs.$native.disabled){
            return true;
        }else {
            return false;
        }/*End dynamic block*/
    }
    $$styleSheetAbs.disabled=disabled;
    disabled.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','disabled']};};
    function ownerNode(){
        /*Begin dynamic block*/
        return $$$cjd401.Node($$styleSheetAbs.$native.ownerNode);
        /*End dynamic block*/
    }
    $$styleSheetAbs.ownerNode=ownerNode;
    ownerNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjd401.Node},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','ownerNode']};};
    function parentStyleSheet(){
        /*Begin dynamic block*/
        return StyleSheet$stylesheets($$styleSheetAbs.$native.parentStyleSheet);
        /*End dynamic block*/
    }
    $$styleSheetAbs.parentStyleSheet=parentStyleSheet;
    parentStyleSheet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:StyleSheet$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','parentStyleSheet']};};
    function href(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$styleSheetAbs.$native.href);
        /*End dynamic block*/
    }
    $$styleSheetAbs.href=href;
    href.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','href']};};
    function title(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$styleSheetAbs.$native.title);
        /*End dynamic block*/
    }
    $$styleSheetAbs.title=title;
    title.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','title']};};
    function media(){
        /*Begin dynamic block*/
        return MediaList$stylesheets($$styleSheetAbs.$native.media);
        /*End dynamic block*/
    }
    $$styleSheetAbs.media=media;
    media.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:MediaList$stylesheets},$ps:[],$cont:StyleSheetAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs','$m','media']};};
    return $$styleSheetAbs;
}
StyleSheetAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetAbs']};};
exports.StyleSheetAbs$stylesheets=StyleSheetAbs$stylesheets;
function $init$StyleSheetAbs$stylesheets(){
    if (StyleSheetAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetAbs',$$$cjl167.JSObjectAbs);
    }
    return StyleSheetAbs$stylesheets;
}
exports.$init$StyleSheetAbs$stylesheets=$init$StyleSheetAbs$stylesheets;
$init$StyleSheetAbs$stylesheets();
function StyleSheetList$stylesheets(n$902, $$styleSheetList){
    $init$StyleSheetList$stylesheets();
    if ($$styleSheetList===undefined)$$styleSheetList=new StyleSheetList$stylesheets.$$;
    $$styleSheetList.n$902_=n$902;
    StyleSheetListAbs$stylesheets($$styleSheetList);
    $$$cl1.defineAttr($$styleSheetList,'n$902',function(){return this.n$902_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','n']};});
    $$styleSheetList.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:StyleSheetList$stylesheets,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom.stylesheets','StyleSheetList','$at','native']};}};
    /*Begin dynamic block*/
    $$styleSheetList.$native=n$902;/*End dynamic block*/
    return $$styleSheetList;
}
StyleSheetList$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:StyleSheetListAbs$stylesheets},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetList']};};
exports.StyleSheetList$stylesheets=StyleSheetList$stylesheets;
function $init$StyleSheetList$stylesheets(){
    if (StyleSheetList$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetList$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetList',StyleSheetListAbs$stylesheets);
    }
    return StyleSheetList$stylesheets;
}
exports.$init$StyleSheetList$stylesheets=$init$StyleSheetList$stylesheets;
$init$StyleSheetList$stylesheets();
function StyleSheetListAbs$stylesheets($$styleSheetListAbs){
    $init$StyleSheetListAbs$stylesheets();
    if ($$styleSheetListAbs===undefined)$$styleSheetListAbs=new StyleSheetListAbs$stylesheets.$$;
    $$$cjl167.JSObjectAbs($$styleSheetListAbs);
    function length(){
        /*Begin dynamic block*/
        return $$$cjl167.JSNumber($$styleSheetListAbs.$native.length);
        /*End dynamic block*/
    }
    $$styleSheetListAbs.length=length;
    length.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSNumber},$ps:[],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','length']};};
    function item(index$903){
        /*Begin dynamic block*/
        var element$904=$$styleSheetListAbs.$native.item(/*NULL PARAM!*/index$903);
        $prop$getElement$904={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item','$at','element']};}};
        $prop$getElement$904.get=function(){return element$904};
        if((tmpvar$905=element$904,tmpvar$906=null,(tmpvar$905.equals&&!tmpvar$905.equals(tmpvar$906))||tmpvar$905!==tmpvar$906)){
            return StyleSheet$stylesheets(element$904);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$styleSheetListAbs.item=item;
    item.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:StyleSheet$stylesheets}]},$ps:[{$nm:'index',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:StyleSheetListAbs$stylesheets,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs','$m','item']};};
    return $$styleSheetListAbs;
}
StyleSheetListAbs$stylesheets.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom.stylesheets','StyleSheetListAbs']};};
exports.StyleSheetListAbs$stylesheets=StyleSheetListAbs$stylesheets;
function $init$StyleSheetListAbs$stylesheets(){
    if (StyleSheetListAbs$stylesheets.$$===undefined){
        $$$cl1.initTypeProto(StyleSheetListAbs$stylesheets,'ceylon.js.dom.stylesheets::StyleSheetListAbs',$$$cjl167.JSObjectAbs);
    }
    return StyleSheetListAbs$stylesheets;
}
exports.$init$StyleSheetListAbs$stylesheets=$init$StyleSheetListAbs$stylesheets;
$init$StyleSheetListAbs$stylesheets();
function CDATASection(n$907, $$cDATASection){
    $init$CDATASection();
    if ($$cDATASection===undefined)$$cDATASection=new CDATASection.$$;
    $$cDATASection.n$907_=n$907;
    CDATASectionAbs($$cDATASection);
    $$$cl1.defineAttr($$cDATASection,'n$907',function(){return this.n$907_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,d:['ceylon.js.dom','CDATASection','$at','n']};});
    $$cDATASection.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:CDATASection,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','CDATASection','$at','native']};}};
    /*Begin dynamic block*/
    $$cDATASection.$native=n$907;/*End dynamic block*/
    return $$cDATASection;
}
CDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CDATASectionAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','CDATASection']};};
exports.CDATASection=CDATASection;
function $init$CDATASection(){
    if (CDATASection.$$===undefined){
        $$$cl1.initTypeProto(CDATASection,'ceylon.js.dom::CDATASection',CDATASectionAbs);
    }
    return CDATASection;
}
exports.$init$CDATASection=$init$CDATASection;
$init$CDATASection();
function CDATASectionAbs($$cDATASectionAbs){
    $init$CDATASectionAbs();
    if ($$cDATASectionAbs===undefined)$$cDATASectionAbs=new CDATASectionAbs.$$;
    TextAbs($$cDATASectionAbs);
    return $$cDATASectionAbs;
}
CDATASectionAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','CDATASectionAbs']};};
exports.CDATASectionAbs=CDATASectionAbs;
function $init$CDATASectionAbs(){
    if (CDATASectionAbs.$$===undefined){
        $$$cl1.initTypeProto(CDATASectionAbs,'ceylon.js.dom::CDATASectionAbs',TextAbs);
    }
    return CDATASectionAbs;
}
exports.$init$CDATASectionAbs=$init$CDATASectionAbs;
$init$CDATASectionAbs();
function Text(n$908, $$text){
    $init$Text();
    if ($$text===undefined)$$text=new Text.$$;
    $$text.n$908_=n$908;
    TextAbs($$text);
    $$$cl1.defineAttr($$text,'n$908',function(){return this.n$908_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:Text,d:['ceylon.js.dom','Text','$at','n']};});
    /*Begin dynamic block*/
    $$text.$native=n$908;/*End dynamic block*/
    return $$text;
}
Text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TextAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','Text']};};
exports.Text=Text;
function $init$Text(){
    if (Text.$$===undefined){
        $$$cl1.initTypeProto(Text,'ceylon.js.dom::Text',TextAbs);
    }
    return Text;
}
exports.$init$Text=$init$Text;
$init$Text();
function TextAbs($$textAbs){
    $init$TextAbs();
    if ($$textAbs===undefined)$$textAbs=new TextAbs.$$;
    CharacterDataAbs($$textAbs);
    function splitText(offset$909){
        
        var case$910=offset$909;
        if ($$$cl1.isOfType(offset$909,{t:$$$cl1.Integer})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$910));
            /*End dynamic block*/
        }else if ($$$cl1.isOfType(offset$909,{t:$$$cjl167.JSNumber})) {
            /*Begin dynamic block*/
            return Text($$textAbs.$native.splitText(/*NULL PARAM!*/case$910.$native));
            /*End dynamic block*/
        }
    }
    $$textAbs.splitText=splitText;
    splitText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Text},$ps:[{$nm:'offset',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cjl167.JSNumber}]},$an:function(){return[];}}],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','splitText']};};
    function wholeText(){
        /*Begin dynamic block*/
        return $$$cjl167.JSString($$textAbs.$native.wholeText);
        /*End dynamic block*/
    }
    $$textAbs.wholeText=wholeText;
    wholeText.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cjl167.JSString},$ps:[],$cont:TextAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TextAbs','$m','wholeText']};};
    return $$textAbs;
}
TextAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:CharacterDataAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','TextAbs']};};
exports.TextAbs=TextAbs;
function $init$TextAbs(){
    if (TextAbs.$$===undefined){
        $$$cl1.initTypeProto(TextAbs,'ceylon.js.dom::TextAbs',CharacterDataAbs);
    }
    return TextAbs;
}
exports.$init$TextAbs=$init$TextAbs;
$init$TextAbs();
function TreeWalker(n$911, $$treeWalker){
    $init$TreeWalker();
    if ($$treeWalker===undefined)$$treeWalker=new TreeWalker.$$;
    $$treeWalker.n$911_=n$911;
    TreeWalkerAbs($$treeWalker);
    $$$cl1.defineAttr($$treeWalker,'n$911',function(){return this.n$911_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,d:['ceylon.js.dom','TreeWalker','$at','n']};});
    $$treeWalker.$prop$getNative={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$cont:TreeWalker,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.js.dom','TreeWalker','$at','native']};}};
    /*Begin dynamic block*/
    $$treeWalker.$native=n$911;/*End dynamic block*/
    return $$treeWalker;
}
TreeWalker.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:TreeWalkerAbs},satisfies:[],$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalker']};};
exports.TreeWalker=TreeWalker;
function $init$TreeWalker(){
    if (TreeWalker.$$===undefined){
        $$$cl1.initTypeProto(TreeWalker,'ceylon.js.dom::TreeWalker',TreeWalkerAbs);
    }
    return TreeWalker;
}
exports.$init$TreeWalker=$init$TreeWalker;
$init$TreeWalker();
function TreeWalkerAbs($$treeWalkerAbs){
    $init$TreeWalkerAbs();
    if ($$treeWalkerAbs===undefined)$$treeWalkerAbs=new TreeWalkerAbs.$$;
    $$$cjl167.JSObjectAbs($$treeWalkerAbs);
    function root(){
        /*Begin dynamic block*/
        return Node($$treeWalkerAbs.$native.root);
        /*End dynamic block*/
    }
    $$treeWalkerAbs.root=root;
    root.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','root']};};
    function whatToShow(){
        /*Begin dynamic block*/
        return (tmpvar$912=$$treeWalkerAbs.$native.whatToShow,$$$cl1.isOfType(tmpvar$912,{t:$$$cl1.Anything})?tmpvar$912:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'20:19-20:35','treewalker.ceylon'));
        /*End dynamic block*/
    }
    $$treeWalkerAbs.whatToShow=whatToShow;
    whatToShow.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','whatToShow']};};
    function filter(){
        /*Begin dynamic block*/
        var filter$913=$$treeWalkerAbs.$native.filter;
        $prop$getFilter$913={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter','$at','filter']};}};
        $prop$getFilter$913.get=function(){return filter$913};
        if((tmpvar$914=filter$913,tmpvar$915=null,(tmpvar$914.equals&&!tmpvar$914.equals(tmpvar$915))||tmpvar$914!==tmpvar$915)){
            return NodeFilter((tmpvar$916=filter$913,$$$cl1.isOfType(tmpvar$916,{t:NodeFilterResult})?tmpvar$916:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'28:34-28:39','treewalker.ceylon')));
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.filter=filter;
    filter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:NodeFilter}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','filter']};};
    function currentNode(){
        /*Begin dynamic block*/
        return Node($$treeWalkerAbs.$native.currentNode());
        /*End dynamic block*/
    }
    $$treeWalkerAbs.currentNode=currentNode;
    currentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Node},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','currentNode']};};
    function parentNode(){
        /*Begin dynamic block*/
        var parent$917=$$treeWalkerAbs.$native.parentNode();
        $prop$getParent$917={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode','$at','parent']};}};
        $prop$getParent$917.get=function(){return parent$917};
        if((tmpvar$918=parent$917,tmpvar$919=null,(tmpvar$918.equals&&!tmpvar$918.equals(tmpvar$919))||tmpvar$918!==tmpvar$919)){
            return Node(parent$917);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.parentNode=parentNode;
    parentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','parentNode']};};
    function firstChild(){
        /*Begin dynamic block*/
        var first$920=$$treeWalkerAbs.$native.firstChild();
        $prop$getFirst$920={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild','$at','first']};}};
        $prop$getFirst$920.get=function(){return first$920};
        if((tmpvar$921=first$920,tmpvar$922=null,(tmpvar$921.equals&&!tmpvar$921.equals(tmpvar$922))||tmpvar$921!==tmpvar$922)){
            return Node(first$920);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.firstChild=firstChild;
    firstChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','firstChild']};};
    function lastChild(){
        /*Begin dynamic block*/
        var last$923=$$treeWalkerAbs.$native.lastChild();
        $prop$getLast$923={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild','$at','last']};}};
        $prop$getLast$923.get=function(){return last$923};
        if((tmpvar$924=last$923,tmpvar$925=null,(tmpvar$924.equals&&!tmpvar$924.equals(tmpvar$925))||tmpvar$924!==tmpvar$925)){
            return Node(last$923);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.lastChild=lastChild;
    lastChild.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','lastChild']};};
    function previousSibling(){
        /*Begin dynamic block*/
        var previous$926=$$treeWalkerAbs.$native.previousSibling();
        $prop$getPrevious$926={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling','$at','previous']};}};
        $prop$getPrevious$926.get=function(){return previous$926};
        if((tmpvar$927=previous$926,tmpvar$928=null,(tmpvar$927.equals&&!tmpvar$927.equals(tmpvar$928))||tmpvar$927!==tmpvar$928)){
            return Node(previous$926);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousSibling=previousSibling;
    previousSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousSibling']};};
    function nextSibling(){
        /*Begin dynamic block*/
        var next$929=$$treeWalkerAbs.$native.nextSibling();
        $prop$getNext$929={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling','$at','next']};}};
        $prop$getNext$929.get=function(){return next$929};
        if((tmpvar$930=next$929,tmpvar$931=null,(tmpvar$930.equals&&!tmpvar$930.equals(tmpvar$931))||tmpvar$930!==tmpvar$931)){
            return Node(next$929);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextSibling=nextSibling;
    nextSibling.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextSibling']};};
    function previousNode(){
        /*Begin dynamic block*/
        var previous$932=$$treeWalkerAbs.$native.previousNode();
        $prop$getPrevious$932={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode','$at','previous']};}};
        $prop$getPrevious$932.get=function(){return previous$932};
        if((tmpvar$933=previous$932,tmpvar$934=null,(tmpvar$933.equals&&!tmpvar$933.equals(tmpvar$934))||tmpvar$933!==tmpvar$934)){
            return Node(previous$932);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.previousNode=previousNode;
    previousNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','previousNode']};};
    function nextNode(){
        /*Begin dynamic block*/
        var next$935=$$treeWalkerAbs.$native.nextNode();
        $prop$getNext$935={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode','$at','next']};}};
        $prop$getNext$935.get=function(){return next$935};
        if((tmpvar$936=next$935,tmpvar$937=null,(tmpvar$936.equals&&!tmpvar$936.equals(tmpvar$937))||tmpvar$936!==tmpvar$937)){
            return Node(next$935);
        }else {
            return null;
        }/*End dynamic block*/
    }
    $$treeWalkerAbs.nextNode=nextNode;
    nextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Node}]},$ps:[],$cont:TreeWalkerAbs,$an:function(){return[$$$cl1.shared()];},d:['ceylon.js.dom','TreeWalkerAbs','$m','nextNode']};};
    return $$treeWalkerAbs;
}
TreeWalkerAbs.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cjl167.JSObjectAbs},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.js.dom','TreeWalkerAbs']};};
exports.TreeWalkerAbs=TreeWalkerAbs;
function $init$TreeWalkerAbs(){
    if (TreeWalkerAbs.$$===undefined){
        $$$cl1.initTypeProto(TreeWalkerAbs,'ceylon.js.dom::TreeWalkerAbs',$$$cjl167.JSObjectAbs);
    }
    return TreeWalkerAbs;
}
exports.$init$TreeWalkerAbs=$init$TreeWalkerAbs;
$init$TreeWalkerAbs();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
