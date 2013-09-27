(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.collection\/0.6.1"],"$mod-name":"ceylon.json","$mod-version":"0.6.1","ceylon.json":{"$pkg-shared":"1","StringPrinter":{"super":{"$pk":"ceylon.json","$nm":"Printer"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"shared":[],"doc":["A JSON Printer that prints to a `String`"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Appends the given value to our `String` representation"],"actual":[]},"$nm":"print"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the printed JSON"],"actual":[]},"$nm":"string"},"builder":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"attr","$nm":"builder"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"StringPrinter"},"Parser":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}],"$mt":"cls","$m":{"parseArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"mthd","$nm":"parseArray"},"check":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"check"},"char":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"char"},"isDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isDigit"},"eatSpacesUntil":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eatSpacesUntil"},"eatSpaces":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"eatSpaces"},"parseDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"parseDigit"},"parseNumber":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"mthd","$nm":"parseNumber"},"eatChar":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"eatChar"},"parseHex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseHex"},"parseString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$nm":"parseString"},"parseExponent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"mthd","$nm":"parseExponent"},"parseNull":{"$t":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"mthd","$nm":"parseNull"},"parseStringUnicode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringUnicode"},"eat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eat"},"parseFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseFalse"},"parseDigits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseDigits"},"parseTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseTrue"},"parseStringEscape":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringEscape"},"isSpace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isSpace"},"parseObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parseObject"},"parseValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"mthd","$nm":"parseValue"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"str":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"str"},"chars":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"chars"}},"$nm":"Parser"},"Array":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Array"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"checkArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkArray"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets the value at the given index, or `null` if it does not exist"],"actual":[]},"$nm":"get"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"set"},"segment":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"checkString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkString"},"checkBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkBoolean"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a new value at the end of this array"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"checkInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkInteger"},"spanTo":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"checkFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkFloat"},"checkObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkObject"},"span":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"integers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Integer]]."],"doc":["Returns this array as a sequence of [[Integer]] elements."]},"$nm":"integers"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"list":{"$t":{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"LinkedList"},"$mt":"attr","$nm":"list"},"strings":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[String]]."],"doc":["Returns this array as a sequence of [[String]] elements."]},"$nm":"strings"},"booleans":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Boolean]]."],"doc":["Returns this array as a sequence of [[Boolean]] elements."]},"$nm":"booleans"},"floats":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Float]]."],"doc":["Returns this array as a sequence of [[Float]] elements."]},"$nm":"floats"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the number of elements in this array"],"actual":[]},"$nm":"size"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"reversed":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"objects":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Object]]."],"doc":["Returns this array as a sequence of [[Object]] elements."]},"$nm":"objects"},"arrays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Array]]."],"doc":["Returns this array as a sequence of [[Array]] elements."]},"$nm":"arrays"}},"$nm":"Array"},"Printer":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A JSON Printer"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"printValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a JSON value"]},"$nm":"printValue"},"printString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"s"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `String`"]},"$nm":"printString"},"printBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"v"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `Boolean`"]},"$nm":"printBoolean"},"printObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Object`"]},"$nm":"printObject"},"indent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"indent"},"leave":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"leave"},"printArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Array`"]},"$nm":"printArray"},"enter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"enter"},"printNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints `null`"]},"$nm":"printNull"},"printNumber":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Integer|Float`"]},"$nm":"printNumber"},"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Override to implement the printing part"]},"$nm":"print"}},"$at":{"level":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"level"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"Printer"},"InvalidTypeException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"InvalidTypeException"},"parse":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[],"throws":["Exception","If the JSON string is invalid"],"doc":["Parses a JSON string into a JSON Object"],"by":["StÃ©phane Ã‰pardaud"]},"$nm":"parse"},"Object":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Object"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"getBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Boolean]]."],"doc":["Returns an [[Boolean]] value."]},"$nm":"getBoolean"},"getObjectOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Object"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Object]] nor [[NullInstance]]."],"doc":["Returns an [[Object]] value, unless the key does not exist, or the value is null."]},"$nm":"getObjectOrNull"},"getFloatOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Float]] nor [[NullInstance]]."],"doc":["Returns an [[Float]] value, unless the key does not exist, or the value is null."]},"$nm":"getFloatOrNull"},"getArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Array]]."],"doc":["Returns an [[Array]] value."]},"$nm":"getArray"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"getArrayOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Array"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Array]] nor [[NullInstance]]."],"doc":["Returns an [[Array]] value, unless the key does not exist, or the value is null."]},"$nm":"getArrayOrNull"},"getIntegerOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Integer]] nor [[NullInstance]]."],"doc":["Returns an [[Integer]] value, unless the key does not exist, or the value is null."]},"$nm":"getIntegerOrNull"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Integer]]."],"doc":["Returns an [[Integer]] value."]},"$nm":"getInteger"},"getStringOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[String]] nor [[NullInstance]]."],"doc":["Returns an [[String]] value, unless the key does not exist, or the value is null."]},"$nm":"getStringOrNull"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"putAll"},"getString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[String]]."],"doc":["Returns an [[String]] value."]},"$nm":"getString"},"getFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Float]]."],"doc":["Returns an [[Float]] value."]},"$nm":"getFloat"},"getBooleanOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Boolean]] nor [[NullInstance]]."],"doc":["Returns an [[Boolean]] value, unless the key does not exist, or the value is null."]},"$nm":"getBooleanOrNull"},"getObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Object]]."],"doc":["Returns an [[Object]] value."]},"$nm":"getObject"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"contents":{"$t":{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"HashMap"},"$mt":"attr","$nm":"contents"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"Object"},"nil":{"super":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"obj","$an":{"shared":[],"doc":["The singleton that represents the `null` value in JSON`."]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nil"},"NullInstance":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.json","$nm":"nil"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Represents the type of the `null` value in JSON."]},"$nm":"NullInstance"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
function InvalidTypeException(message$569, $$invalidTypeException){
    $init$InvalidTypeException();
    if ($$invalidTypeException===undefined)$$invalidTypeException=new InvalidTypeException.$$;
    $$invalidTypeException.message$569_=message$569;
    $$$cl1.Exception($$invalidTypeException.message$569,undefined,$$invalidTypeException);
    return $$invalidTypeException;
}
InvalidTypeException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type.",223)),$$$cl1.shared()];},d:['ceylon.json','InvalidTypeException']};};
exports.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
    if (InvalidTypeException.$$===undefined){
        $$$cl1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',$$$cl1.Exception);
        (function($$invalidTypeException){
            $$$cl1.defineAttr($$invalidTypeException,'message$569',function(){return this.message$569_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:InvalidTypeException,d:['ceylon.json','InvalidTypeException','$at','message']};});
        })(InvalidTypeException.$$.prototype);
    }
    return InvalidTypeException;
}
exports.$init$InvalidTypeException=$init$InvalidTypeException;
$init$InvalidTypeException();
var $$$cc570=require('ceylon/collection/0.6.1/ceylon.collection-0.6.1');
$$$cl1.$addmod$($$$cc570,'ceylon.collection/0.6.1');
function Array(values$571, $$array){
    $init$Array();
    if ($$array===undefined)$$array=new Array.$$;
    $$array.$$targs$$={Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$571===undefined){values$571=$$$cl1.getEmpty();}
    $$array.values$571_=values$571;
    $$$cc570.MutableList({Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$array);
    $$array.list$572_=$$$cc570.LinkedList($$array.values$571,{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$array.$prop$getList$572={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc570.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};}};
    $$array.$prop$getList$572.get=function(){return list$572};
    return $$array;
}
Array.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc570.MutableList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Array",23)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Array']};};
exports.Array=Array;
function $init$Array(){
    if (Array.$$===undefined){
        $$$cl1.initTypeProto(Array,'ceylon.json::Array',$$$cl1.Basic,$$$cc570.MutableList);
        (function($$array){
            $$$cl1.defineAttr($$array,'list$572',function(){return this.list$572_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc570.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};});
            $$array.iterator=function (){
                var $$array=this;
                return $$array.list$572.iterator();
            };
            $$array.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','iterator']};};
            $$array.add=function add(val$573){
                var $$array=this;
                $$array.list$572.add(val$573);
            };$$array.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a new value at the end of this array",41)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','add']};};
            $$array.get=function get(index$574){
                var $$array=this;
                return $$array.list$572.get(index$574);
            };$$array.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance},{t:$$$cl1.Null}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Gets the value at the given index, or `null` if it does not exist",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','get']};};
            $$$cl1.defineAttr($$array,'size',function(){
                var $$array=this;
                return $$array.list$572.size;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of elements in this array",44)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','size']};});$$$cl1.defineAttr($$array,'string',function(){
                var $$array=this;
                var p$575=StringPrinter();
                $prop$getP$575={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','string','$at','p']};}};
                $prop$getP$575.get=function(){return p$575};
                p$575.printArray($$array);
                return p$575.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','string']};});$$$cl1.defineAttr($$array,'pretty',function(){
                var $$array=this;
                var p$576=StringPrinter(true);
                $prop$getP$576={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','pretty','$at','p']};}};
                $prop$getP$576.get=function(){return p$576};
                p$576.printArray($$array);
                return p$576.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','pretty']};});$$$cl1.defineAttr($$array,'clone',function(){
                var $$array=this;
                return Array($$array.list$572);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','clone']};});$$$cl1.defineAttr($$array,'lastIndex',function(){
                var $$array=this;
                return $$array.list$572.lastIndex;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','lastIndex']};});$$$cl1.defineAttr($$array,'reversed',function(){
                var $$array=this;
                return Array($$array.list$572.reversed);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','reversed']};});$$$cl1.defineAttr($$array,'rest',function(){
                var $$array=this;
                return Array($$array.list$572.rest);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','rest']};});$$array.segment=function segment(from$577,length$578){
                var $$array=this;
                return Array($$array.list$572.segment(from$577,length$578));
            };$$array.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','segment']};};
            $$array.span=function span(from$579,to$580){
                var $$array=this;
                return Array($$array.list$572.span(from$579,to$580));
            };$$array.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','span']};};
            $$array.spanFrom=function spanFrom(from$581){
                var $$array=this;
                return Array($$array.list$572.spanFrom(from$581));
            };$$array.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanFrom']};};
            $$array.spanTo=function spanTo(to$582){
                var $$array=this;
                return Array($$array.list$572.spanTo(to$582));
            };$$array.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanTo']};};
            $$array.addAll=function addAll(values$583){
                var $$array=this;
                $$array.list$572.addAll(values$583);
            };$$array.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','addAll']};};
            $$array.clear=function clear(){
                var $$array=this;
                $$array.list$572.clear();
            };$$array.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','clear']};};
            $$array.insert=function insert(index$584,val$585){
                var $$array=this;
                $$array.list$572.insert(index$584,val$585);
            };$$array.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','insert']};};
            $$array.remove=function remove(index$586){
                var $$array=this;
                $$array.list$572.remove(index$586);
            };$$array.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','remove']};};
            $$array.removeElement=function removeElement(val$587){
                var $$array=this;
                $$array.list$572.removeElement(val$587);
            };$$array.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','removeElement']};};
            $$array.set=function set(index$588,val$589){
                var $$array=this;
                $$array.list$572.set(index$588,val$589);
            };$$array.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','set']};};
            $$$cl1.defineAttr($$array,'hash',function(){
                var $$array=this;
                return $$array.list$572.hash;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','hash']};});$$array.equals=function equals(that$590){
                var $$array=this;
                var that$591;
                if($$$cl1.isOfType((that$591=that$590),{t:Array})){
                    return ((that$591===$$array)||$$array.list$572.equals(that$591.list$572));
                }
                return false;
            };$$array.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','equals']};};
            $$array.checkObject$592=function checkObject$592(val$593){
                var $$array=this;
                var val$594;
                if($$$cl1.isOfType((val$594=val$593),{t:Object})){
                    return val$594;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Object but got ",25),val$593.string]).string),'116:8-116:72','ceylon/json/Array.ceylon');
            };$$array.checkObject$592.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkObject']};};
            $$$cl1.defineAttr($$array,'objects',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$595=$$array.list$572.iterator();
                    var elem$596=$$$cl1.getFinished();
                    var next$elem$596=function(){return elem$596=it$595.next();}
                    next$elem$596();
                    return function(){
                        if(elem$596!==$$$cl1.getFinished()){
                            var elem$596$597=elem$596;
                            var tmpvar$598=$$array.checkObject$592(elem$596$597);
                            next$elem$596();
                            return tmpvar$598;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Object}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Object}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Object]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Object]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','objects']};});$$array.checkString$599=function checkString$599(val$600){
                var $$array=this;
                var val$601;
                if($$$cl1.isOfType((val$601=val$600),{t:$$$cl1.String})){
                    return val$601;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting String but got ",25),val$600.string]).string),'131:8-131:72','ceylon/json/Array.ceylon');
            };$$array.checkString$599.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkString']};};
            $$$cl1.defineAttr($$array,'strings',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$602=$$array.list$572.iterator();
                    var elem$603=$$$cl1.getFinished();
                    var next$elem$603=function(){return elem$603=it$602.next();}
                    next$elem$603();
                    return function(){
                        if(elem$603!==$$$cl1.getFinished()){
                            var elem$603$604=elem$603;
                            var tmpvar$605=$$array.checkString$599(elem$603$604);
                            next$elem$603();
                            return tmpvar$605;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[String]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[String]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','strings']};});$$array.checkInteger$606=function checkInteger$606(val$607){
                var $$array=this;
                var val$608;
                if($$$cl1.isOfType((val$608=val$607),{t:$$$cl1.Integer})){
                    return val$608;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Integer but got ",26),val$607.string]).string),'146:8-146:73','ceylon/json/Array.ceylon');
            };$$array.checkInteger$606.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkInteger']};};
            $$$cl1.defineAttr($$array,'integers',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$609=$$array.list$572.iterator();
                    var elem$610=$$$cl1.getFinished();
                    var next$elem$610=function(){return elem$610=it$609.next();}
                    next$elem$610();
                    return function(){
                        if(elem$610!==$$$cl1.getFinished()){
                            var elem$610$611=elem$610;
                            var tmpvar$612=$$array.checkInteger$606(elem$610$611);
                            next$elem$610();
                            return tmpvar$612;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Integer]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Integer]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','integers']};});$$array.checkFloat$613=function checkFloat$613(val$614){
                var $$array=this;
                var val$615;
                if($$$cl1.isOfType((val$615=val$614),{t:$$$cl1.Float})){
                    return val$615;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Float but got ",24),val$614.string]).string),'161:8-161:71','ceylon/json/Array.ceylon');
            };$$array.checkFloat$613.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkFloat']};};
            $$$cl1.defineAttr($$array,'floats',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$616=$$array.list$572.iterator();
                    var elem$617=$$$cl1.getFinished();
                    var next$elem$617=function(){return elem$617=it$616.next();}
                    next$elem$617();
                    return function(){
                        if(elem$617!==$$$cl1.getFinished()){
                            var elem$617$618=elem$617;
                            var tmpvar$619=$$array.checkFloat$613(elem$617$618);
                            next$elem$617();
                            return tmpvar$619;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Float]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Float]].",48)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','floats']};});$$array.checkBoolean$620=function checkBoolean$620(val$621){
                var $$array=this;
                var val$622;
                if($$$cl1.isOfType((val$622=val$621),{t:$$$cl1.Boolean})){
                    return val$622;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Boolean but got ",26),val$621.string]).string),'176:8-176:73','ceylon/json/Array.ceylon');
            };$$array.checkBoolean$620.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkBoolean']};};
            $$$cl1.defineAttr($$array,'booleans',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$623=$$array.list$572.iterator();
                    var elem$624=$$$cl1.getFinished();
                    var next$elem$624=function(){return elem$624=it$623.next();}
                    next$elem$624();
                    return function(){
                        if(elem$624!==$$$cl1.getFinished()){
                            var elem$624$625=elem$624;
                            var tmpvar$626=$$array.checkBoolean$620(elem$624$625);
                            next$elem$624();
                            return tmpvar$626;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Boolean]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Boolean]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','booleans']};});$$array.checkArray$627=function checkArray$627(val$628){
                var $$array=this;
                var val$629;
                if($$$cl1.isOfType((val$629=val$628),{t:Array})){
                    return val$629;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Array but got ",24),val$628.string]).string),'191:8-191:71','ceylon/json/Array.ceylon');
            };$$array.checkArray$627.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkArray']};};
            $$$cl1.defineAttr($$array,'arrays',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$630=$$array.list$572.iterator();
                    var elem$631=$$$cl1.getFinished();
                    var next$elem$631=function(){return elem$631=it$630.next();}
                    next$elem$631();
                    return function(){
                        if(elem$631!==$$$cl1.getFinished()){
                            var elem$631$632=elem$631;
                            var tmpvar$633=$$array.checkArray$627(elem$631$632);
                            next$elem$631();
                            return tmpvar$633;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Array}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Array}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Array]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Array]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','arrays']};});$$$cl1.defineAttr($$array,'values$571',function(){return this.values$571_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','values']};});
        })(Array.$$.prototype);
    }
    return Array;
}
exports.$init$Array=$init$Array;
$init$Array();
function Printer(pretty$634, $$printer){
    $init$Printer();
    if ($$printer===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    if(pretty$634===undefined){pretty$634=false;}
    $$printer.pretty$634_=pretty$634;
    $$printer.level$635_=(0);
    $$printer.$prop$getLevel$635={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};}};
    $$printer.$prop$getLevel$635.get=function(){return level$635};
    return $$printer;
}
Printer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer",14)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.json','Printer']};};
exports.Printer=Printer;
function $init$Printer(){
    if (Printer.$$===undefined){
        $$$cl1.initTypeProto(Printer,'ceylon.json::Printer',$$$cl1.Basic);
        (function($$printer){
            $$$cl1.defineAttr($$printer,'level$635',function(){return this.level$635_;},function(level$636){return this.level$635_=level$636;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};});
            $$printer.enter$637=function enter$637(){
                var $$printer=this;
                (oldlevel$638=$$printer.level$635,$$printer.level$635=oldlevel$638.successor,oldlevel$638);
                var oldlevel$638;
            };$$printer.enter$637.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','enter']};};
            $$printer.leave$639=function leave$639(){
                var $$printer=this;
                (oldlevel$640=$$printer.level$635,$$printer.level$635=oldlevel$640.predecessor,oldlevel$640);
                var oldlevel$640;
            };$$printer.leave$639.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','leave']};};
            $$printer.indent$641=function indent$641(){
                var $$printer=this;
                if($$printer.pretty$634){
                    $$printer.print($$$cl1.String("\n",1));
                    if($$printer.level$635.compare((0)).equals($$$cl1.getLarger())){
                        var it$642 = $$$cl1.Range((0),$$printer.level$635.minus((1)),{Element:{t:$$$cl1.Integer}}).iterator();
                        var i$643;while ((i$643=it$642.next())!==$$$cl1.getFinished()){
                            $$printer.print($$$cl1.String(" ",1));
                        }
                    }
                }
            };$$printer.indent$641.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','indent']};};
            $$printer.printObject=function printObject(o$644){
                var $$printer=this;
                $$printer.print($$$cl1.String("{",1));
                $$printer.enter$637();
                var once$645=true;
                function setOnce$645(once$646){return once$645=once$646;};
                var it$647 = o$644.iterator();
                var entry$648;while ((entry$648=it$647.next())!==$$$cl1.getFinished()){
                    if(once$645){
                        once$645=false;
                    }else {
                        $$printer.print($$$cl1.String(",",1));
                    }
                    $$printer.indent$641();
                    $$printer.printString(entry$648.key);
                    $$printer.print($$$cl1.String(":",1));
                    if($$printer.pretty$634){
                        $$printer.print($$$cl1.String(" ",1));
                    }
                    $$printer.printValue(entry$648.item);
                }
                $$printer.leave$639();
                if((!once$645)){
                    $$printer.indent$641();
                }
                $$printer.print($$$cl1.String("}",1));
            };$$printer.printObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Object},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Object`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printObject']};};
            $$printer.printArray=function printArray(o$649){
                var $$printer=this;
                $$printer.print($$$cl1.String("[",1));
                $$printer.enter$637();
                var once$650=true;
                function setOnce$650(once$651){return once$650=once$651;};
                var it$652 = o$649.iterator();
                var elem$653;while ((elem$653=it$652.next())!==$$$cl1.getFinished()){
                    if(once$650){
                        once$650=false;
                    }else {
                        $$printer.print($$$cl1.String(",",1));
                    }
                    $$printer.indent$641();
                    $$printer.printValue(elem$653);
                }
                $$printer.leave$639();
                if((!once$650)){
                    $$printer.indent$641();
                }
                $$printer.print($$$cl1.String("]",1));
            };$$printer.printArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Array},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Array`",17)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printArray']};};
            $$printer.printString=function printString(s$654){
                var $$printer=this;
                $$printer.print($$$cl1.String("\"",1));
                var it$655 = s$654.iterator();
                var c$656;while ((c$656=it$655.next())!==$$$cl1.getFinished()){
                    if(c$656.equals($$$cl1.Character(34))){
                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("\"",1)));
                    }else {
                        if(c$656.equals($$$cl1.Character(92))){
                            $$printer.print($$$cl1.String("\\\\",2));
                        }else {
                            if(c$656.equals($$$cl1.Character(47))){
                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("/",1)));
                            }else {
                                if(c$656.equals((8).character)){
                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("b",1)));
                                }else {
                                    if(c$656.equals((12).character)){
                                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("f",1)));
                                    }else {
                                        if(c$656.equals((10).character)){
                                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("n",1)));
                                        }else {
                                            if(c$656.equals((13).character)){
                                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("r",1)));
                                            }else {
                                                if(c$656.equals((9).character)){
                                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("t",1)));
                                                }else {
                                                    $$printer.print(c$656.string);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $$printer.print($$$cl1.String("\"",1));
            };$$printer.printString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'s',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a `String`",17)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printString']};};
            $$printer.printNumber=function printNumber(n$657){
                var $$printer=this;
                $$printer.print(n$657.string);
            };$$printer.printNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Number},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Integer|Float`",25)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNumber']};};
            $$printer.printBoolean=function printBoolean(v$658){
                var $$printer=this;
                $$printer.print(v$658.string);
            };$$printer.printBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'v',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a `Boolean`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printBoolean']};};
            $$printer.printNull=function printNull(){
                var $$printer=this;
                $$printer.print($$$cl1.String("null",4));
            };$$printer.printNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints `null`",13)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNull']};};
            $$printer.printValue=function printValue(val$659){
                var $$printer=this;
                
                var case$660=val$659;
                if ($$$cl1.isOfType(val$659,{t:$$$cl1.String})) {
                    $$printer.printString(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:$$$cl1.Integer})) {
                    $$printer.printNumber(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:$$$cl1.Float})) {
                    $$printer.printNumber(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:$$$cl1.Boolean})) {
                    $$printer.printBoolean(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:Object})) {
                    $$printer.printObject(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:Array})) {
                    $$printer.printArray(case$660);
                }else if ($$$cl1.isOfType(val$659,{t:NullInstance})) {
                    $$printer.printNull();
                }
            };$$printer.printValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a JSON value",19)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printValue']};};
            $$$cl1.defineAttr($$printer,'pretty$634',function(){return this.pretty$634_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:Printer,d:['ceylon.json','Printer','$at','pretty']};});
        })(Printer.$$.prototype);
    }
    return Printer;
}
exports.$init$Printer=$init$Printer;
$init$Printer();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("Contains everything required to parse and serialise JSON data.\n\nSample usage for parsing and accessing JSON:\n\n    String getAuthor(String json){\n        value parsedJson = parse(json);\n        if(is String author = parsedJson.get(\"author\")){\n            return author;\n        }\n        throw Exception(\"Invalid JSON data\");\n    }\n\nOr if you\'re really sure that you should have a String value:\n\n    String getAuthor(String json){\n        value parsedJson = parse(json);\n        return parsedJson.getString(\"author\")){\n    }\n\nYou can iterate Json objects too::\n\n    {String*} getModules(String json){\n        value parsedJson = parse(json);\n        if(is Array modules = parsedJson.get(\"modules\")){\n            return { for (mod in modules) \n                       if(is Object mod, is String name = mod.get(\"name\")) \n                         name \n                   };\n        }\n        throw Exception(\"Invalid JSON data\");\n    }     \nSample usage for generating JSON data:\n\n    String getJSON(){\n        value json = Object {\n            \"name\" -> \"Introduction to Ceylon\",\n            \"authors\" -> Array {\n                \"Stef Epardaud\",\n                \"Emmanuel Bernard\"\n            }\n        };\n        return json.string;\n    }\n",1237)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
function StringPrinter(pretty$661, $$stringPrinter){
    $init$StringPrinter();
    if ($$stringPrinter===undefined)$$stringPrinter=new StringPrinter.$$;
    if(pretty$661===undefined){pretty$661=false;}
    $$stringPrinter.pretty$661_=pretty$661;
    Printer($$stringPrinter.pretty$661,$$stringPrinter);
    $$stringPrinter.builder$662_=$$$cl1.StringBuilder();
    $$stringPrinter.$prop$getBuilder$662={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};}};
    $$stringPrinter.$prop$getBuilder$662.get=function(){return builder$662};
    return $$stringPrinter;
}
StringPrinter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Printer},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer that prints to a `String`",40)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','StringPrinter']};};
exports.StringPrinter=StringPrinter;
function $init$StringPrinter(){
    if (StringPrinter.$$===undefined){
        $$$cl1.initTypeProto(StringPrinter,'ceylon.json::StringPrinter',$init$Printer());
        (function($$stringPrinter){
            $$$cl1.defineAttr($$stringPrinter,'builder$662',function(){return this.builder$662_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};});
            $$stringPrinter.print=function print(string$663){
                var $$stringPrinter=this;
                $$stringPrinter.builder$662.append(string$663);
            };$$stringPrinter.print.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Appends the given value to our `String` representation",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','StringPrinter','$m','print']};};
            $$$cl1.defineAttr($$stringPrinter,'string',function(){
                var $$stringPrinter=this;
                return $$stringPrinter.builder$662.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the printed JSON",24)),$$$cl1.shared(),$$$cl1.actual(),$$$cl1.$default()];},d:['ceylon.json','StringPrinter','$at','string']};});$$$cl1.defineAttr($$stringPrinter,'pretty$661',function(){return this.pretty$661_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','pretty']};});
        })(StringPrinter.$$.prototype);
    }
    return StringPrinter;
}
exports.$init$StringPrinter=$init$StringPrinter;
$init$StringPrinter();
exports.$pkg$ans$ceylon$json=function(){return[$$$cl1.doc($$$cl1.String("A JSON parser / serialiser",26)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function NullInstance($$nullInstance){
    $init$NullInstance();
    if ($$nullInstance===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    return $$nullInstance;
}
NullInstance.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the type of the `null` value in JSON.",48)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.json','NullInstance']};};
exports.NullInstance=NullInstance;
function $init$NullInstance(){
    if (NullInstance.$$===undefined){
        $$$cl1.initTypeProto(NullInstance,'ceylon.json::NullInstance',$$$cl1.Basic);
    }
    return NullInstance;
}
exports.$init$NullInstance=$init$NullInstance;
$init$NullInstance();
function nil$664(){
    var $$nil=new nil$664.$$;
    NullInstance($$nil);
    $$nil.string$665_=$$$cl1.String("null",4);
    $$nil.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$664,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};}};
    $$nil.$prop$getString.get=function(){return string};
    return $$nil;
}
function $init$nil$664(){
    if (nil$664.$$===undefined){
        $$$cl1.initTypeProto(nil$664,'ceylon.json::nil',$init$NullInstance());
    }
    return nil$664;
}
exports.$init$nil$664=$init$nil$664;
$init$nil$664();
(function($$nil){
    $$$cl1.defineAttr($$nil,'string',function(){return this.string$665_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$664,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};});
})(nil$664.$$.prototype);
var nil$666;
function getNil(){
    if (nil$666===undefined)nil$666=$init$nil$664()();
    return nil$666;
}
exports.getNil=getNil;
getNil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:nil$664},$an:function(){return[$$$cl1.doc($$$cl1.String("The singleton that represents the `null` value in JSON`.",56)),$$$cl1.shared()];},d:['ceylon.json','nil']};};
$prop$getNil={get:getNil,$$metamodel$$:getNil.$$metamodel$$};
exports.$prop$getNil=$prop$getNil;
function Object(values$667, $$object){
    $init$Object();
    if ($$object===undefined)$$object=new Object.$$;
    $$object.$$targs$$={Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$667===undefined){values$667=$$$cl1.getEmpty();}
    $$object.values$667_=values$667;
    $$$cc570.MutableMap({Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$object);
    $$$cl1.add_type_arg($$object,'Key',{t:$$$cl1.String});
    $$object.contents$668_=$$$cc570.HashMap($$object.values$667,{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$object.$prop$getContents$668={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc570.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};}};
    $$object.$prop$getContents$668.get=function(){return contents$668};
    return $$object;
}
Object.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc570.MutableMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Object",24)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Object']};};
exports.Object=Object;
function $init$Object(){
    if (Object.$$===undefined){
        $$$cl1.initTypeProto(Object,'ceylon.json::Object',$$$cl1.Basic,$$$cc570.MutableMap);
        (function($$object){
            $$$cl1.defineAttr($$object,'contents$668',function(){return this.contents$668_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc570.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};});
            $$$cl1.defineAttr($$object,'string',function(){
                var $$object=this;
                var p$669=StringPrinter();
                $prop$getP$669={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','string','$at','p']};}};
                $prop$getP$669.get=function(){return p$669};
                p$669.printObject($$object);
                return p$669.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','string']};});$$$cl1.defineAttr($$object,'pretty',function(){
                var $$object=this;
                var p$670=StringPrinter(true);
                $prop$getP$670={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','pretty','$at','p']};}};
                $prop$getP$670.get=function(){return p$670};
                p$670.printObject($$object);
                return p$670.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Object','$at','pretty']};});$$object.clear=function clear(){
                var $$object=this;
                $$object.contents$668.clear();
            };$$object.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','clear']};};
            $$$cl1.defineAttr($$object,'clone',function(){
                var $$object=this;
                return Object($$object.contents$668);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Object},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','clone']};});$$object.get=function get(key$671){
                var $$object=this;
                return $$object.contents$668.get(key$671);
            };$$object.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','get']};};
            $$object.iterator=function iterator(){
                var $$object=this;
                return $$object.contents$668.iterator();
            };$$object.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','iterator']};};
            $$object.put=function put(key$672,item$673){
                var $$object=this;
                return $$object.contents$668.put(key$672,item$673);
            };$$object.put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','put']};};
            $$object.putAll=function putAll(entries$674){
                var $$object=this;
                $$object.contents$668.putAll(entries$674);
            };$$object.putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','putAll']};};
            $$object.remove=function remove(key$675){
                var $$object=this;
                return $$object.contents$668.remove(key$675);
            };$$object.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','remove']};};
            $$$cl1.defineAttr($$object,'size',function(){
                var $$object=this;
                return $$object.contents$668.size;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','size']};});$$$cl1.defineAttr($$object,'hash',function(){
                var $$object=this;
                return $$object.contents$668.hash;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','hash']};});$$object.equals=function equals(that$676){
                var $$object=this;
                var that$677;
                if($$$cl1.isOfType((that$677=that$676),{t:Object})){
                    return (($$object===that$677)||$$object.contents$668.equals(that$677.contents$668));
                }
                return false;
            };$$object.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','equals']};};
            $$object.getInteger=function getInteger(key$678){
                var $$object=this;
                var val$679=$$object.get(key$678);
                var val$680;
                if($$$cl1.isOfType((val$680=val$679),{t:$$$cl1.Integer})){
                    return val$680;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$681=val$679,opt$681!==null?opt$681:$$$cl1.String("null",4)).string]).string),'78:8-78:89','ceylon/json/Object.ceylon');
                var opt$681;
            };$$object.getInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Integer]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getInteger']};};
            $$object.getFloat=function getFloat(key$682){
                var $$object=this;
                var val$683=$$object.get(key$682);
                var val$684;
                if($$$cl1.isOfType((val$684=val$683),{t:$$$cl1.Float})){
                    return val$684;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$685=val$683,opt$685!==null?opt$685:$$$cl1.String("null",4)).string]).string),'89:8-89:86','ceylon/json/Object.ceylon');
                var opt$685;
            };$$object.getFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Float]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloat']};};
            $$object.getBoolean=function getBoolean(key$686){
                var $$object=this;
                var val$687=$$object.get(key$686);
                var val$688;
                if($$$cl1.isOfType((val$688=val$687),{t:$$$cl1.Boolean})){
                    return val$688;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$689=val$687,opt$689!==null?opt$689:$$$cl1.String("null",4)).string]).string),'100:8-100:88','ceylon/json/Object.ceylon');
                var opt$689;
            };$$object.getBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Boolean]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBoolean']};};
            $$object.getString=function getString(key$690){
                var $$object=this;
                var val$691=$$object.get(key$690);
                var val$692;
                if($$$cl1.isOfType((val$692=val$691),{t:$$$cl1.String})){
                    return val$692;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$693=val$691,opt$693!==null?opt$693:$$$cl1.String("null",4)).string]).string),'111:8-111:87','ceylon/json/Object.ceylon');
                var opt$693;
            };$$object.getString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[String]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getString']};};
            $$object.getObject=function getObject(key$694){
                var $$object=this;
                var val$695=$$object.get(key$694);
                var val$696;
                if($$$cl1.isOfType((val$696=val$695),{t:Object})){
                    return val$696;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$697=val$695,opt$697!==null?opt$697:$$$cl1.String("null",4)).string]).string),'122:8-122:88','ceylon/json/Object.ceylon');
                var opt$697;
            };$$object.getObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Object]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObject']};};
            $$object.getArray=function getArray(key$698){
                var $$object=this;
                var val$699=$$object.get(key$698);
                var val$700;
                if($$$cl1.isOfType((val$700=val$699),{t:Array})){
                    return val$700;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$701=val$699,opt$701!==null?opt$701:$$$cl1.String("null",4)).string]).string),'133:8-133:87','ceylon/json/Object.ceylon');
                var opt$701;
            };$$object.getArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Array]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArray']};};
            $$object.getIntegerOrNull=function getIntegerOrNull(key$702){
                var $$object=this;
                var val$703=$$object.get(key$702);
                var val$704;
                if($$$cl1.isOfType((val$704=val$703),{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Null}]})){
                    return val$704;
                }
                var val$705;
                if($$$cl1.isOfType((val$705=val$703),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$706=val$703,opt$706!==null?opt$706:$$$cl1.String("null",4)).string]).string),'149:8-149:89','ceylon/json/Object.ceylon');
                var opt$706;
            };$$object.getIntegerOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Integer]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getIntegerOrNull']};};
            $$object.getFloatOrNull=function getFloatOrNull(key$707){
                var $$object=this;
                var val$708=$$object.get(key$707);
                var val$709;
                if($$$cl1.isOfType((val$709=val$708),{ t:'u', l:[{t:$$$cl1.Float},{t:$$$cl1.Null}]})){
                    return val$709;
                }
                var val$710;
                if($$$cl1.isOfType((val$710=val$708),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$711=val$708,opt$711!==null?opt$711:$$$cl1.String("null",4)).string]).string),'163:8-163:86','ceylon/json/Object.ceylon');
                var opt$711;
            };$$object.getFloatOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Float]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloatOrNull']};};
            $$object.getBooleanOrNull=function getBooleanOrNull(key$712){
                var $$object=this;
                var val$713=$$object.get(key$712);
                var val$714;
                if($$$cl1.isOfType((val$714=val$713),{ t:'u', l:[{t:$$$cl1.Boolean},{t:$$$cl1.Null}]})){
                    return val$714;
                }
                var val$715;
                if($$$cl1.isOfType((val$715=val$713),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$716=val$713,opt$716!==null?opt$716:$$$cl1.String("null",4)).string]).string),'177:8-177:88','ceylon/json/Object.ceylon');
                var opt$716;
            };$$object.getBooleanOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Boolean]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBooleanOrNull']};};
            $$object.getStringOrNull=function getStringOrNull(key$717){
                var $$object=this;
                var val$718=$$object.get(key$717);
                var val$719;
                if($$$cl1.isOfType((val$719=val$718),{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Null}]})){
                    return val$719;
                }
                var val$720;
                if($$$cl1.isOfType((val$720=val$718),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$721=val$718,opt$721!==null?opt$721:$$$cl1.String("null",4)).string]).string),'191:8-191:87','ceylon/json/Object.ceylon');
                var opt$721;
            };$$object.getStringOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[String]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getStringOrNull']};};
            $$object.getObjectOrNull=function getObjectOrNull(key$722){
                var $$object=this;
                var val$723=$$object.get(key$722);
                var val$724;
                if($$$cl1.isOfType((val$724=val$723),{ t:'u', l:[{t:Object},{t:$$$cl1.Null}]})){
                    return val$724;
                }
                var val$725;
                if($$$cl1.isOfType((val$725=val$723),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$726=val$723,opt$726!==null?opt$726:$$$cl1.String("null",4)).string]).string),'205:8-205:88','ceylon/json/Object.ceylon');
                var opt$726;
            };$$object.getObjectOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Object}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Object]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObjectOrNull']};};
            $$object.getArrayOrNull=function getArrayOrNull(key$727){
                var $$object=this;
                var val$728=$$object.get(key$727);
                var val$729;
                if($$$cl1.isOfType((val$729=val$728),{ t:'u', l:[{t:Array},{t:$$$cl1.Null}]})){
                    return val$729;
                }
                var val$730;
                if($$$cl1.isOfType((val$730=val$728),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$731=val$728,opt$731!==null?opt$731:$$$cl1.String("null",4)).string]).string),'219:8-219:87','ceylon/json/Object.ceylon');
                var opt$731;
            };$$object.getArrayOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Array}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Array]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArrayOrNull']};};
            $$$cl1.defineAttr($$object,'values$667',function(){return this.values$667_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$cont:Object,d:['ceylon.json','Object','$at','values']};});
        })(Object.$$.prototype);
    }
    return Object;
}
exports.$init$Object=$init$Object;
$init$Object();
function Parser(str$732, $$parser){
    $init$Parser();
    if ($$parser===undefined)$$parser=new Parser.$$;
    $$parser.str$732_=str$732;
    $$parser.chars$733_=$$parser.str$732.characters.sequence;
    $$parser.$prop$getChars$733={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};}};
    $$parser.$prop$getChars$733.get=function(){return chars$733};
    $$parser.index$734_=(0);
    $$parser.$prop$getIndex$734={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};}};
    $$parser.$prop$getIndex$734.get=function(){return index$734};
    return $$parser;
}
Parser.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],d:['ceylon.json','Parser']};};
function $init$Parser(){
    if (Parser.$$===undefined){
        $$$cl1.initTypeProto(Parser,'ceylon.json::Parser',$$$cl1.Basic);
        (function($$parser){
            $$$cl1.defineAttr($$parser,'chars$733',function(){return this.chars$733_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};});
            $$$cl1.defineAttr($$parser,'index$734',function(){return this.index$734_;},function(index$735){return this.index$734_=index$735;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};});
            $$parser.parseObject=function parseObject(){
                var $$parser=this;
                var obj$736=(Object(undefined));
                $$parser.eatSpacesUntil$737($$$cl1.Character(123));
                $$parser.eatSpaces$738();
                if((!$$parser.check$739($$$cl1.Character(125)))){
                    while(true){
                        var key$740=$$parser.parseString$741();
                        $prop$getKey$740={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.json','Parser','$m','parseObject','$at','key']};}};
                        $prop$getKey$740.get=function(){return key$740};
                        $$parser.eatSpacesUntil$737($$$cl1.Character(58));
                        var val$742=$$parser.parseValue$743();
                        $prop$getVal$742={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseObject','$at','val']};}};
                        $prop$getVal$742.get=function(){return val$742};
                        obj$736.put(key$740,val$742);
                        $$parser.eatSpaces$738();
                        if($$parser.check$739($$$cl1.Character(125))){
                            break;
                        }
                        if((!$$parser.check$739($$$cl1.Character(44)))){
                            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \'}\' or \',\' but got ",28),$$parser.char$744().string.string]).string),'22:20-22:86','ceylon/json/parse.ceylon');
                        }
                    }
                }
                return obj$736;
            };$$parser.parseObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[],$cont:Parser,$an:function(){return[$$$cl1.shared()];},d:['ceylon.json','Parser','$m','parseObject']};};
            $$parser.parseArray$745=function parseArray$745(){
                var $$parser=this;
                var arr$746=(Array(undefined));
                $$parser.eatSpacesUntil$737($$$cl1.Character(91));
                $$parser.eatSpaces$738();
                if((!$$parser.check$739($$$cl1.Character(93)))){
                    while(true){
                        var val$747=$$parser.parseValue$743();
                        $prop$getVal$747={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseArray','$at','val']};}};
                        $prop$getVal$747.get=function(){return val$747};
                        arr$746.add(val$747);
                        $$parser.eatSpaces$738();
                        if($$parser.check$739($$$cl1.Character(93))){
                            break;
                        }
                        if((!$$parser.check$739($$$cl1.Character(44)))){
                            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \']\' or \',\' but got ",28),$$parser.char$744().string.string]).string),'44:20-44:86','ceylon/json/parse.ceylon');
                        }
                    }
                }
                return arr$746;
            };$$parser.parseArray$745.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseArray']};};
            $$parser.parseValue$743=function parseValue$743(){
                var $$parser=this;
                $$parser.eatSpaces$738();
                var c$748=$$parser.char$744();
                if(c$748.equals($$$cl1.Character(123))){
                    return $$parser.parseObject();
                }
                if(c$748.equals($$$cl1.Character(91))){
                    return $$parser.parseArray$745();
                }
                if(c$748.equals($$$cl1.Character(34))){
                    return $$parser.parseString$741();
                }
                if(c$748.equals($$$cl1.Character(116))){
                    return $$parser.parseTrue$749();
                }
                if(c$748.equals($$$cl1.Character(102))){
                    return $$parser.parseFalse$750();
                }
                if(c$748.equals($$$cl1.Character(110))){
                    return $$parser.parseNull$751();
                }
                if(($$parser.isDigit$752(c$748)||c$748.equals($$$cl1.Character(45)))){
                    return $$parser.parseNumber$753();
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Invalid value: expecting object, array, string, number, true, false, null but got ",82),c$748.string.string]).string),'76:8-76:123','ceylon/json/parse.ceylon');
            };$$parser.parseValue$743.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseValue']};};
            $$parser.parseNumber$753=function parseNumber$753(){
                var $$parser=this;
                $$parser.eatSpaces$738();
                var negative$754=$$parser.check$739($$$cl1.Character(45));
                var wholePart$755=$$parser.parseDigits$756();
                if($$parser.check$739($$$cl1.Character(46))){
                    var start$757=$$parser.index$734;
                    $prop$getStart$757={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','start']};}};
                    $prop$getStart$757.get=function(){return start$757};
                    var fractionPart$758=$$parser.parseDigits$756();
                    $prop$getFractionPart$758={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','fractionPart']};}};
                    $prop$getFractionPart$758.get=function(){return fractionPart$758};
                    var digits$759=$$parser.index$734.minus(start$757);
                    $prop$getDigits$759={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','digits']};}};
                    $prop$getDigits$759.get=function(){return digits$759};
                    var float$760=wholePart$755.$float.plus(fractionPart$758.$float.divided((10).power(digits$759).$float));
                    $prop$getFloat$760={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','float']};}};
                    $prop$getFloat$760.get=function(){return float$760};
                    var signedFloat$761=(opt$762=(negative$754?float$760.negativeValue:null),opt$762!==null?opt$762:float$760);
                    $prop$getSignedFloat$761={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','signedFloat']};}};
                    $prop$getSignedFloat$761.get=function(){return signedFloat$761};
                    var opt$762;
                    var exp$763=$$parser.parseExponent$764();
                    $prop$getExp$763={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.json','Parser','$m','parseNumber','$at','exp']};}};
                    $prop$getExp$763.get=function(){return exp$763};
                    var exp$765;
                    if((exp$765=exp$763)!==null){
                        return signedFloat$761.times((10).$float.power(exp$765.$float));
                    }
                    return signedFloat$761;
                }
                var signedInteger$766=(opt$767=(negative$754?wholePart$755.negativeValue:null),opt$767!==null?opt$767:wholePart$755);
                var opt$767;
                var exp$768=$$parser.parseExponent$764();
                var exp$769;
                if((exp$769=exp$768)!==null){
                    return signedInteger$766.$float.times((10).$float.power(exp$769.$float));
                }
                return signedInteger$766;
            };$$parser.parseNumber$753.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNumber']};};
            $$parser.parseExponent$764=function parseExponent$764(){
                var $$parser=this;
                if(($$parser.check$739($$$cl1.Character(101))||$$parser.check$739($$$cl1.Character(69)))){
                    var negativeExponent$770;
                    $prop$getNegativeExponent$770={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.json','Parser','$m','parseExponent','$at','negativeExponent']};}};
                    $prop$getNegativeExponent$770.get=function(){return negativeExponent$770};
                    if($$parser.check$739($$$cl1.Character(45))){
                        negativeExponent$770=true;
                    }else {
                        if($$parser.check$739($$$cl1.Character(43))){
                            negativeExponent$770=false;
                        }else {
                            negativeExponent$770=false;
                        }
                    }
                    var exponentPart$771=$$parser.parseDigits$756();
                    $prop$getExponentPart$771={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseExponent','$at','exponentPart']};}};
                    $prop$getExponentPart$771.get=function(){return exponentPart$771};
                    return (opt$772=(negativeExponent$770?(-exponentPart$771):null),opt$772!==null?opt$772:exponentPart$771);
                    var opt$772;
                }
                return null;
            };$$parser.parseExponent$764.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseExponent']};};
            $$parser.parseDigits$756=function parseDigits$756(){
                var $$parser=this;
                var c$773=$$parser.eatChar$774();
                if((!$$parser.isDigit$752(c$773))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected digit, got: ",21),c$773.string.string]).string),'125:12-125:66','ceylon/json/parse.ceylon');
                }
                var digits$775=$$parser.parseDigit$776(c$773);
                function setDigits$775(digits$777){return digits$775=digits$777;};
                while($$parser.isDigit$752($$parser.char$744())){
                    (digits$775=digits$775.times((10)));
                    (digits$775=digits$775.plus($$parser.parseDigit$776($$parser.eatChar$774())));
                }
                return digits$775;
            };$$parser.parseDigits$756.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigits']};};
            $$parser.parseDigit$776=function parseDigit$776(c$778){
                var $$parser=this;
                return c$778.integer.minus($$$cl1.Character(48).integer);
            };$$parser.parseDigit$776.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigit']};};
            $$parser.parseTrue$749=function parseTrue$749(){
                var $$parser=this;
                $$parser.eatSpacesUntil$737($$$cl1.Character(116));
                $$parser.eat$779($$$cl1.Character(114));
                $$parser.eat$779($$$cl1.Character(117));
                $$parser.eat$779($$$cl1.Character(101));
                return true;
            };$$parser.parseTrue$749.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseTrue']};};
            $$parser.parseFalse$750=function parseFalse$750(){
                var $$parser=this;
                $$parser.eatSpacesUntil$737($$$cl1.Character(102));
                $$parser.eat$779($$$cl1.Character(97));
                $$parser.eat$779($$$cl1.Character(108));
                $$parser.eat$779($$$cl1.Character(115));
                $$parser.eat$779($$$cl1.Character(101));
                return false;
            };$$parser.parseFalse$750.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseFalse']};};
            $$parser.parseNull$751=function parseNull$751(){
                var $$parser=this;
                $$parser.eatSpacesUntil$737($$$cl1.Character(110));
                $$parser.eat$779($$$cl1.Character(117));
                $$parser.eat$779($$$cl1.Character(108));
                $$parser.eat$779($$$cl1.Character(108));
                return getNil();
            };$$parser.parseNull$751.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NullInstance},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNull']};};
            $$parser.parseString$741=function parseString$741(){
                var $$parser=this;
                $$parser.eatSpacesUntil$737($$$cl1.Character(34));
                var buf$780=$$$cl1.StringBuilder();
                while((!$$parser.check$739($$$cl1.Character(34)))){
                    var c$781=$$parser.eatChar$774();
                    $prop$getC$781={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseString','$at','c']};}};
                    $prop$getC$781.get=function(){return c$781};
                    if(c$781.equals($$$cl1.Character(92))){
                        buf$780.append($$parser.parseStringEscape$782().string);
                    }else {
                        buf$780.append(c$781.string);
                    }
                }
                return buf$780.string;
            };$$parser.parseString$741.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseString']};};
            $$parser.parseStringEscape$782=function parseStringEscape$782(){
                var $$parser=this;
                var c$783=$$parser.eatChar$774();
                if(((c$783.equals($$$cl1.Character(34))||c$783.equals($$$cl1.Character(92)))||c$783.equals($$$cl1.Character(47)))){
                    return c$783;
                }
                if(c$783.equals($$$cl1.Character(98))){
                    return $$$cl1.Character(8);
                }
                if(c$783.equals($$$cl1.Character(102))){
                    return $$$cl1.Character(12);
                }
                if(c$783.equals($$$cl1.Character(114))){
                    return $$$cl1.Character(13);
                }
                if(c$783.equals($$$cl1.Character(110))){
                    return $$$cl1.Character(10);
                }
                if(c$783.equals($$$cl1.Character(116))){
                    return $$$cl1.Character(9);
                }
                if(c$783.equals($$$cl1.Character(117))){
                    return $$parser.parseStringUnicode$784();
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected String escape sequence, got ",37),c$783.string,$$$cl1.String(" TERM ",6)]).string),'203:8-203:77','ceylon/json/parse.ceylon');
            };$$parser.parseStringEscape$782.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringEscape']};};
            $$parser.parseStringUnicode$784=function parseStringUnicode$784(){
                var $$parser=this;
                var codePoint$785=$$parser.parseHex$786().times((16).power((3))).plus($$parser.parseHex$786().times((16).power((2)))).plus($$parser.parseHex$786().times((16))).plus($$parser.parseHex$786());
                return codePoint$785.character;
            };$$parser.parseStringUnicode$784.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringUnicode']};};
            $$parser.parseHex$786=function parseHex$786(){
                var $$parser=this;
                var c$787=$$parser.eatChar$774();
                var codePoint$788=c$787.integer;
                if(((codePoint$788.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$788.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()))){
                    return codePoint$788.minus($$$cl1.Character(48).integer);
                }
                if(((codePoint$788.compare($$$cl1.Character(97).integer)!==$$$cl1.getSmaller())&&(codePoint$788.compare($$$cl1.Character(102).integer)!==$$$cl1.getLarger()))){
                    return (10).plus(codePoint$788).minus($$$cl1.Character(97).integer);
                }
                if(((codePoint$788.compare($$$cl1.Character(65).integer)!==$$$cl1.getSmaller())&&(codePoint$788.compare($$$cl1.Character(70).integer)!==$$$cl1.getLarger()))){
                    return (10).plus(codePoint$788).minus($$$cl1.Character(65).integer);
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting hex number, got ",26),c$787.string.string]).string),'227:8-227:67','ceylon/json/parse.ceylon');
            };$$parser.parseHex$786.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseHex']};};
            $$parser.eatSpaces$738=function eatSpaces$738(){
                var $$parser=this;
                while(($$parser.index$734.compare($$parser.chars$733.size).equals($$$cl1.getSmaller())&&$$parser.isSpace$789($$parser.char$744()))){
                    (oldindex$790=$$parser.index$734,$$parser.index$734=oldindex$790.successor,oldindex$790);
                    var oldindex$790;
                }
            };$$parser.eatSpaces$738.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpaces']};};
            $$parser.eatSpacesUntil$737=function eatSpacesUntil$737(c$791){
                var $$parser=this;
                $$parser.eatSpaces$738();
                $$parser.eat$779(c$791);
            };$$parser.eatSpacesUntil$737.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpacesUntil']};};
            $$parser.check$739=function check$739(c$792){
                var $$parser=this;
                if((!$$parser.char$744().equals(c$792))){
                    return false;
                }
                (oldindex$793=$$parser.index$734,$$parser.index$734=oldindex$793.successor,oldindex$793);
                var oldindex$793;
                return true;
            };$$parser.check$739.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','check']};};
            $$parser.eat$779=function eat$779(c$794){
                var $$parser=this;
                if((!$$parser.char$744().equals(c$794))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected ",9),c$794.string.string,$$$cl1.String(" but got ",9),$$parser.char$744().string.string]).string),'252:12-252:82','ceylon/json/parse.ceylon');
                }
                (oldindex$795=$$parser.index$734,$$parser.index$734=oldindex$795.successor,oldindex$795);
                var oldindex$795;
            };$$parser.eat$779.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eat']};};
            $$parser.char$744=function char$744(){
                var $$parser=this;
                var c$796;
                if((c$796=$$parser.chars$733.get($$parser.index$734))!==null){
                    return c$796;
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.String("Unexpected end of string",24)),'261:8-261:51','ceylon/json/parse.ceylon');
            };$$parser.char$744.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','char']};};
            $$parser.eatChar$774=function eatChar$774(){
                var $$parser=this;
                var c$797=$$parser.char$744();
                (oldindex$798=$$parser.index$734,$$parser.index$734=oldindex$798.successor,oldindex$798);
                var oldindex$798;
                return c$797;
            };$$parser.eatChar$774.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatChar']};};
            $$parser.isSpace$789=function isSpace$789(c$799){
                var $$parser=this;
                return (((c$799.equals($$$cl1.Character(32))||c$799.equals($$$cl1.Character(10)))||c$799.equals($$$cl1.Character(13)))||c$799.equals($$$cl1.Character(9)));
            };$$parser.isSpace$789.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isSpace']};};
            $$parser.isDigit$752=function isDigit$752(c$800){
                var $$parser=this;
                var codePoint$801=c$800.integer;
                return ((codePoint$801.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$801.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()));
            };$$parser.isDigit$752.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isDigit']};};
            $$$cl1.defineAttr($$parser,'str$732',function(){return this.str$732_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Parser,d:['ceylon.json','Parser','$at','str']};});
        })(Parser.$$.prototype);
    }
    return Parser;
}
exports.$init$Parser=$init$Parser;
$init$Parser();
function parse(str$802){
    return Parser(str$802).parseObject();
}
exports.parse=parse;
parse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Parses a JSON string into a JSON Object",39)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','0.6.1').findPackage('ceylon.language'),$$$cl1.Exception),$$$cl1.String("If the JSON string is invalid",29)),$$$cl1.shared()];},d:['ceylon.json','parse']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));