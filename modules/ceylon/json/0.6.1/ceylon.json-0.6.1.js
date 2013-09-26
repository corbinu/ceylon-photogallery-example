(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1","ceylon.collection\/0.6.1"],"$mod-name":"ceylon.json","$mod-version":"0.6.1","ceylon.json":{"$pkg-shared":"1","StringPrinter":{"super":{"$pk":"ceylon.json","$nm":"Printer"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"shared":[],"doc":["A JSON Printer that prints to a `String`"],"by":["Stéphane Épardaud"]},"$m":{"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Appends the given value to our `String` representation"],"actual":[]},"$nm":"print"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the printed JSON"],"actual":[]},"$nm":"string"},"builder":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"attr","$nm":"builder"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"StringPrinter"},"Parser":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}],"$mt":"cls","$m":{"parseArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"mthd","$nm":"parseArray"},"check":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"check"},"char":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"char"},"isDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isDigit"},"eatSpacesUntil":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eatSpacesUntil"},"eatSpaces":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"eatSpaces"},"parseDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"parseDigit"},"parseNumber":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"mthd","$nm":"parseNumber"},"eatChar":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"eatChar"},"parseHex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseHex"},"parseString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$nm":"parseString"},"parseExponent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"mthd","$nm":"parseExponent"},"parseNull":{"$t":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"mthd","$nm":"parseNull"},"parseStringUnicode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringUnicode"},"eat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eat"},"parseFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseFalse"},"parseDigits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseDigits"},"parseTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseTrue"},"parseStringEscape":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringEscape"},"isSpace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isSpace"},"parseObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parseObject"},"parseValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"mthd","$nm":"parseValue"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"str":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"str"},"chars":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"chars"}},"$nm":"Parser"},"Array":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Array"],"by":["Stéphane Épardaud"]},"$m":{"checkArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkArray"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets the value at the given index, or `null` if it does not exist"],"actual":[]},"$nm":"get"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"set"},"segment":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"checkString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkString"},"checkBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkBoolean"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a new value at the end of this array"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"checkInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkInteger"},"spanTo":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"checkFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkFloat"},"checkObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkObject"},"span":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"integers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Integer]]."],"doc":["Returns this array as a sequence of [[Integer]] elements."]},"$nm":"integers"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"list":{"$t":{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"LinkedList"},"$mt":"attr","$nm":"list"},"strings":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[String]]."],"doc":["Returns this array as a sequence of [[String]] elements."]},"$nm":"strings"},"booleans":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Boolean]]."],"doc":["Returns this array as a sequence of [[Boolean]] elements."]},"$nm":"booleans"},"floats":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Float]]."],"doc":["Returns this array as a sequence of [[Float]] elements."]},"$nm":"floats"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the number of elements in this array"],"actual":[]},"$nm":"size"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"reversed":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"objects":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Object]]."],"doc":["Returns this array as a sequence of [[Object]] elements."]},"$nm":"objects"},"arrays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Array]]."],"doc":["Returns this array as a sequence of [[Array]] elements."]},"$nm":"arrays"}},"$nm":"Array"},"Printer":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A JSON Printer"],"by":["Stéphane Épardaud"]},"$m":{"printValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a JSON value"]},"$nm":"printValue"},"printString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"s"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `String`"]},"$nm":"printString"},"printBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"v"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `Boolean`"]},"$nm":"printBoolean"},"printObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Object`"]},"$nm":"printObject"},"indent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"indent"},"leave":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"leave"},"printArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Array`"]},"$nm":"printArray"},"enter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"enter"},"printNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints `null`"]},"$nm":"printNull"},"printNumber":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Integer|Float`"]},"$nm":"printNumber"},"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Override to implement the printing part"]},"$nm":"print"}},"$at":{"level":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"level"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"Printer"},"InvalidTypeException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"InvalidTypeException"},"parse":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[],"throws":["Exception","If the JSON string is invalid"],"doc":["Parses a JSON string into a JSON Object"],"by":["Stéphane Épardaud"]},"$nm":"parse"},"Object":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Object"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"getBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Boolean]]."],"doc":["Returns an [[Boolean]] value."]},"$nm":"getBoolean"},"getObjectOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Object"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Object]] nor [[NullInstance]]."],"doc":["Returns an [[Object]] value, unless the key does not exist, or the value is null."]},"$nm":"getObjectOrNull"},"getFloatOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Float]] nor [[NullInstance]]."],"doc":["Returns an [[Float]] value, unless the key does not exist, or the value is null."]},"$nm":"getFloatOrNull"},"getArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Array]]."],"doc":["Returns an [[Array]] value."]},"$nm":"getArray"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"getArrayOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Array"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Array]] nor [[NullInstance]]."],"doc":["Returns an [[Array]] value, unless the key does not exist, or the value is null."]},"$nm":"getArrayOrNull"},"getIntegerOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Integer]] nor [[NullInstance]]."],"doc":["Returns an [[Integer]] value, unless the key does not exist, or the value is null."]},"$nm":"getIntegerOrNull"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Integer]]."],"doc":["Returns an [[Integer]] value."]},"$nm":"getInteger"},"getStringOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[String]] nor [[NullInstance]]."],"doc":["Returns an [[String]] value, unless the key does not exist, or the value is null."]},"$nm":"getStringOrNull"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"putAll"},"getString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[String]]."],"doc":["Returns an [[String]] value."]},"$nm":"getString"},"getFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Float]]."],"doc":["Returns an [[Float]] value."]},"$nm":"getFloat"},"getBooleanOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Boolean]] nor [[NullInstance]]."],"doc":["Returns an [[Boolean]] value, unless the key does not exist, or the value is null."]},"$nm":"getBooleanOrNull"},"getObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Object]]."],"doc":["Returns an [[Object]] value."]},"$nm":"getObject"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"contents":{"$t":{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"HashMap"},"$mt":"attr","$nm":"contents"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"Object"},"nil":{"super":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"obj","$an":{"shared":[],"doc":["The singleton that represents the `null` value in JSON`."]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nil"},"NullInstance":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.json","$nm":"nil"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Represents the type of the `null` value in JSON."]},"$nm":"NullInstance"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
var $$$cc569=require('ceylon/collection/0.6.1/ceylon.collection-0.6.1');
$$$cl1.$addmod$($$$cc569,'ceylon.collection/0.6.1');
function Array(values$570, $$array){
    $init$Array();
    if ($$array===undefined)$$array=new Array.$$;
    $$array.$$targs$$={Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$570===undefined){values$570=$$$cl1.getEmpty();}
    $$array.values$570_=values$570;
    $$$cc569.MutableList({Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$array);
    $$array.list$571_=$$$cc569.LinkedList($$array.values$570,{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$array.$prop$getList$571={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc569.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};}};
    $$array.$prop$getList$571.get=function(){return list$571};
    return $$array;
}
Array.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc569.MutableList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Array",23)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Array']};};
exports.Array=Array;
function $init$Array(){
    if (Array.$$===undefined){
        $$$cl1.initTypeProto(Array,'ceylon.json::Array',$$$cl1.Basic,$$$cc569.MutableList);
        (function($$array){
            $$$cl1.defineAttr($$array,'list$571',function(){return this.list$571_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc569.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};});
            $$array.iterator=function (){
                var $$array=this;
                return $$array.list$571.iterator();
            };
            $$array.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','iterator']};};
            $$array.add=function add(val$572){
                var $$array=this;
                $$array.list$571.add(val$572);
            };$$array.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a new value at the end of this array",41)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','add']};};
            $$array.get=function get(index$573){
                var $$array=this;
                return $$array.list$571.get(index$573);
            };$$array.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance},{t:$$$cl1.Null}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Gets the value at the given index, or `null` if it does not exist",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','get']};};
            $$$cl1.defineAttr($$array,'size',function(){
                var $$array=this;
                return $$array.list$571.size;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of elements in this array",44)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','size']};});$$$cl1.defineAttr($$array,'string',function(){
                var $$array=this;
                var p$574=StringPrinter();
                $prop$getP$574={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','string','$at','p']};}};
                $prop$getP$574.get=function(){return p$574};
                p$574.printArray($$array);
                return p$574.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','string']};});$$$cl1.defineAttr($$array,'pretty',function(){
                var $$array=this;
                var p$575=StringPrinter(true);
                $prop$getP$575={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','pretty','$at','p']};}};
                $prop$getP$575.get=function(){return p$575};
                p$575.printArray($$array);
                return p$575.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','pretty']};});$$$cl1.defineAttr($$array,'clone',function(){
                var $$array=this;
                return Array($$array.list$571);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','clone']};});$$$cl1.defineAttr($$array,'lastIndex',function(){
                var $$array=this;
                return $$array.list$571.lastIndex;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','lastIndex']};});$$$cl1.defineAttr($$array,'reversed',function(){
                var $$array=this;
                return Array($$array.list$571.reversed);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','reversed']};});$$$cl1.defineAttr($$array,'rest',function(){
                var $$array=this;
                return Array($$array.list$571.rest);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','rest']};});$$array.segment=function segment(from$576,length$577){
                var $$array=this;
                return Array($$array.list$571.segment(from$576,length$577));
            };$$array.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','segment']};};
            $$array.span=function span(from$578,to$579){
                var $$array=this;
                return Array($$array.list$571.span(from$578,to$579));
            };$$array.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','span']};};
            $$array.spanFrom=function spanFrom(from$580){
                var $$array=this;
                return Array($$array.list$571.spanFrom(from$580));
            };$$array.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanFrom']};};
            $$array.spanTo=function spanTo(to$581){
                var $$array=this;
                return Array($$array.list$571.spanTo(to$581));
            };$$array.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanTo']};};
            $$array.addAll=function addAll(values$582){
                var $$array=this;
                $$array.list$571.addAll(values$582);
            };$$array.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','addAll']};};
            $$array.clear=function clear(){
                var $$array=this;
                $$array.list$571.clear();
            };$$array.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','clear']};};
            $$array.insert=function insert(index$583,val$584){
                var $$array=this;
                $$array.list$571.insert(index$583,val$584);
            };$$array.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','insert']};};
            $$array.remove=function remove(index$585){
                var $$array=this;
                $$array.list$571.remove(index$585);
            };$$array.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','remove']};};
            $$array.removeElement=function removeElement(val$586){
                var $$array=this;
                $$array.list$571.removeElement(val$586);
            };$$array.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','removeElement']};};
            $$array.set=function set(index$587,val$588){
                var $$array=this;
                $$array.list$571.set(index$587,val$588);
            };$$array.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','set']};};
            $$$cl1.defineAttr($$array,'hash',function(){
                var $$array=this;
                return $$array.list$571.hash;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','hash']};});$$array.equals=function equals(that$589){
                var $$array=this;
                var that$590;
                if($$$cl1.isOfType((that$590=that$589),{t:Array})){
                    return ((that$590===$$array)||$$array.list$571.equals(that$590.list$571));
                }
                return false;
            };$$array.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','equals']};};
            $$array.checkObject$591=function checkObject$591(val$592){
                var $$array=this;
                var val$593;
                if($$$cl1.isOfType((val$593=val$592),{t:Object})){
                    return val$593;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Object but got ",25),val$592.string]).string),'116:8-116:72','ceylon/json/Array.ceylon');
            };$$array.checkObject$591.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkObject']};};
            $$$cl1.defineAttr($$array,'objects',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$594=$$array.list$571.iterator();
                    var elem$595=$$$cl1.getFinished();
                    var next$elem$595=function(){return elem$595=it$594.next();}
                    next$elem$595();
                    return function(){
                        if(elem$595!==$$$cl1.getFinished()){
                            var elem$595$596=elem$595;
                            var tmpvar$597=$$array.checkObject$591(elem$595$596);
                            next$elem$595();
                            return tmpvar$597;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Object}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Object}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Object]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Object]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','objects']};});$$array.checkString$598=function checkString$598(val$599){
                var $$array=this;
                var val$600;
                if($$$cl1.isOfType((val$600=val$599),{t:$$$cl1.String})){
                    return val$600;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting String but got ",25),val$599.string]).string),'131:8-131:72','ceylon/json/Array.ceylon');
            };$$array.checkString$598.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkString']};};
            $$$cl1.defineAttr($$array,'strings',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$601=$$array.list$571.iterator();
                    var elem$602=$$$cl1.getFinished();
                    var next$elem$602=function(){return elem$602=it$601.next();}
                    next$elem$602();
                    return function(){
                        if(elem$602!==$$$cl1.getFinished()){
                            var elem$602$603=elem$602;
                            var tmpvar$604=$$array.checkString$598(elem$602$603);
                            next$elem$602();
                            return tmpvar$604;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[String]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[String]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','strings']};});$$array.checkInteger$605=function checkInteger$605(val$606){
                var $$array=this;
                var val$607;
                if($$$cl1.isOfType((val$607=val$606),{t:$$$cl1.Integer})){
                    return val$607;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Integer but got ",26),val$606.string]).string),'146:8-146:73','ceylon/json/Array.ceylon');
            };$$array.checkInteger$605.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkInteger']};};
            $$$cl1.defineAttr($$array,'integers',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$608=$$array.list$571.iterator();
                    var elem$609=$$$cl1.getFinished();
                    var next$elem$609=function(){return elem$609=it$608.next();}
                    next$elem$609();
                    return function(){
                        if(elem$609!==$$$cl1.getFinished()){
                            var elem$609$610=elem$609;
                            var tmpvar$611=$$array.checkInteger$605(elem$609$610);
                            next$elem$609();
                            return tmpvar$611;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Integer]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Integer]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','integers']};});$$array.checkFloat$612=function checkFloat$612(val$613){
                var $$array=this;
                var val$614;
                if($$$cl1.isOfType((val$614=val$613),{t:$$$cl1.Float})){
                    return val$614;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Float but got ",24),val$613.string]).string),'161:8-161:71','ceylon/json/Array.ceylon');
            };$$array.checkFloat$612.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkFloat']};};
            $$$cl1.defineAttr($$array,'floats',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$615=$$array.list$571.iterator();
                    var elem$616=$$$cl1.getFinished();
                    var next$elem$616=function(){return elem$616=it$615.next();}
                    next$elem$616();
                    return function(){
                        if(elem$616!==$$$cl1.getFinished()){
                            var elem$616$617=elem$616;
                            var tmpvar$618=$$array.checkFloat$612(elem$616$617);
                            next$elem$616();
                            return tmpvar$618;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Float]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Float]].",48)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','floats']};});$$array.checkBoolean$619=function checkBoolean$619(val$620){
                var $$array=this;
                var val$621;
                if($$$cl1.isOfType((val$621=val$620),{t:$$$cl1.Boolean})){
                    return val$621;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Boolean but got ",26),val$620.string]).string),'176:8-176:73','ceylon/json/Array.ceylon');
            };$$array.checkBoolean$619.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkBoolean']};};
            $$$cl1.defineAttr($$array,'booleans',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$622=$$array.list$571.iterator();
                    var elem$623=$$$cl1.getFinished();
                    var next$elem$623=function(){return elem$623=it$622.next();}
                    next$elem$623();
                    return function(){
                        if(elem$623!==$$$cl1.getFinished()){
                            var elem$623$624=elem$623;
                            var tmpvar$625=$$array.checkBoolean$619(elem$623$624);
                            next$elem$623();
                            return tmpvar$625;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Boolean]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Boolean]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','booleans']};});$$array.checkArray$626=function checkArray$626(val$627){
                var $$array=this;
                var val$628;
                if($$$cl1.isOfType((val$628=val$627),{t:Array})){
                    return val$628;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Array but got ",24),val$627.string]).string),'191:8-191:71','ceylon/json/Array.ceylon');
            };$$array.checkArray$626.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkArray']};};
            $$$cl1.defineAttr($$array,'arrays',function(){
                var $$array=this;
                return $$$cl1.Comprehension(function(){
                    var it$629=$$array.list$571.iterator();
                    var elem$630=$$$cl1.getFinished();
                    var next$elem$630=function(){return elem$630=it$629.next();}
                    next$elem$630();
                    return function(){
                        if(elem$630!==$$$cl1.getFinished()){
                            var elem$630$631=elem$630;
                            var tmpvar$632=$$array.checkArray$626(elem$630$631);
                            next$elem$630();
                            return tmpvar$632;
                        }
                        return $$$cl1.getFinished();
                    }
                },{Absent:{t:$$$cl1.Null},Element:{t:Array}});
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Array}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Array]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Array]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','arrays']};});$$$cl1.defineAttr($$array,'values$570',function(){return this.values$570_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','values']};});
        })(Array.$$.prototype);
    }
    return Array;
}
exports.$init$Array=$init$Array;
$init$Array();
function InvalidTypeException(message$633, $$invalidTypeException){
    $init$InvalidTypeException();
    if ($$invalidTypeException===undefined)$$invalidTypeException=new InvalidTypeException.$$;
    $$invalidTypeException.message$633_=message$633;
    $$$cl1.Exception($$invalidTypeException.message$633,undefined,$$invalidTypeException);
    return $$invalidTypeException;
}
InvalidTypeException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type.",223)),$$$cl1.shared()];},d:['ceylon.json','InvalidTypeException']};};
exports.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
    if (InvalidTypeException.$$===undefined){
        $$$cl1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',$$$cl1.Exception);
        (function($$invalidTypeException){
            $$$cl1.defineAttr($$invalidTypeException,'message$633',function(){return this.message$633_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:InvalidTypeException,d:['ceylon.json','InvalidTypeException','$at','message']};});
        })(InvalidTypeException.$$.prototype);
    }
    return InvalidTypeException;
}
exports.$init$InvalidTypeException=$init$InvalidTypeException;
$init$InvalidTypeException();
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("Contains everything required to parse and serialise JSON data.\n\nSample usage for parsing and accessing JSON:\n\n    String getAuthor(String json){\n        value parsedJson = parse(json);\n        if(is String author = parsedJson.get(\"author\")){\n            return author;\n        }\n        throw Exception(\"Invalid JSON data\");\n    }\n\nOr if you\'re really sure that you should have a String value:\n\n    String getAuthor(String json){\n        value parsedJson = parse(json);\n        return parsedJson.getString(\"author\")){\n    }\n\nYou can iterate Json objects too::\n\n    {String*} getModules(String json){\n        value parsedJson = parse(json);\n        if(is Array modules = parsedJson.get(\"modules\")){\n            return { for (mod in modules) \n                       if(is Object mod, is String name = mod.get(\"name\")) \n                         name \n                   };\n        }\n        throw Exception(\"Invalid JSON data\");\n    }     \nSample usage for generating JSON data:\n\n    String getJSON(){\n        value json = Object {\n            \"name\" -> \"Introduction to Ceylon\",\n            \"authors\" -> Array {\n                \"Stef Epardaud\",\n                \"Emmanuel Bernard\"\n            }\n        };\n        return json.string;\n    }\n",1237)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
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
function nil$634(){
    var $$nil=new nil$634.$$;
    NullInstance($$nil);
    $$nil.string$635_=$$$cl1.String("null",4);
    $$nil.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$634,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};}};
    $$nil.$prop$getString.get=function(){return string};
    return $$nil;
}
function $init$nil$634(){
    if (nil$634.$$===undefined){
        $$$cl1.initTypeProto(nil$634,'ceylon.json::nil',$init$NullInstance());
    }
    return nil$634;
}
exports.$init$nil$634=$init$nil$634;
$init$nil$634();
(function($$nil){
    $$$cl1.defineAttr($$nil,'string',function(){return this.string$635_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$634,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};});
})(nil$634.$$.prototype);
var nil$636;
function getNil(){
    if (nil$636===undefined)nil$636=$init$nil$634()();
    return nil$636;
}
exports.getNil=getNil;
getNil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:nil$634},$an:function(){return[$$$cl1.doc($$$cl1.String("The singleton that represents the `null` value in JSON`.",56)),$$$cl1.shared()];},d:['ceylon.json','nil']};};
$prop$getNil={get:getNil,$$metamodel$$:getNil.$$metamodel$$};
exports.$prop$getNil=$prop$getNil;
function Object(values$637, $$object){
    $init$Object();
    if ($$object===undefined)$$object=new Object.$$;
    $$object.$$targs$$={Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$637===undefined){values$637=$$$cl1.getEmpty();}
    $$object.values$637_=values$637;
    $$$cc569.MutableMap({Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$object);
    $$$cl1.add_type_arg($$object,'Key',{t:$$$cl1.String});
    $$object.contents$638_=$$$cc569.HashMap($$object.values$637,{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$object.$prop$getContents$638={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc569.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};}};
    $$object.$prop$getContents$638.get=function(){return contents$638};
    return $$object;
}
Object.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc569.MutableMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Object",24)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Object']};};
exports.Object=Object;
function $init$Object(){
    if (Object.$$===undefined){
        $$$cl1.initTypeProto(Object,'ceylon.json::Object',$$$cl1.Basic,$$$cc569.MutableMap);
        (function($$object){
            $$$cl1.defineAttr($$object,'contents$638',function(){return this.contents$638_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc569.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};});
            $$$cl1.defineAttr($$object,'string',function(){
                var $$object=this;
                var p$639=StringPrinter();
                $prop$getP$639={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','string','$at','p']};}};
                $prop$getP$639.get=function(){return p$639};
                p$639.printObject($$object);
                return p$639.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','string']};});$$$cl1.defineAttr($$object,'pretty',function(){
                var $$object=this;
                var p$640=StringPrinter(true);
                $prop$getP$640={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','pretty','$at','p']};}};
                $prop$getP$640.get=function(){return p$640};
                p$640.printObject($$object);
                return p$640.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Object','$at','pretty']};});$$object.clear=function clear(){
                var $$object=this;
                $$object.contents$638.clear();
            };$$object.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','clear']};};
            $$$cl1.defineAttr($$object,'clone',function(){
                var $$object=this;
                return Object($$object.contents$638);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Object},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','clone']};});$$object.get=function get(key$641){
                var $$object=this;
                return $$object.contents$638.get(key$641);
            };$$object.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','get']};};
            $$object.iterator=function iterator(){
                var $$object=this;
                return $$object.contents$638.iterator();
            };$$object.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','iterator']};};
            $$object.put=function put(key$642,item$643){
                var $$object=this;
                return $$object.contents$638.put(key$642,item$643);
            };$$object.put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','put']};};
            $$object.putAll=function putAll(entries$644){
                var $$object=this;
                $$object.contents$638.putAll(entries$644);
            };$$object.putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','putAll']};};
            $$object.remove=function remove(key$645){
                var $$object=this;
                return $$object.contents$638.remove(key$645);
            };$$object.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','remove']};};
            $$$cl1.defineAttr($$object,'size',function(){
                var $$object=this;
                return $$object.contents$638.size;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','size']};});$$$cl1.defineAttr($$object,'hash',function(){
                var $$object=this;
                return $$object.contents$638.hash;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','hash']};});$$object.equals=function equals(that$646){
                var $$object=this;
                var that$647;
                if($$$cl1.isOfType((that$647=that$646),{t:Object})){
                    return (($$object===that$647)||$$object.contents$638.equals(that$647.contents$638));
                }
                return false;
            };$$object.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','equals']};};
            $$object.getInteger=function getInteger(key$648){
                var $$object=this;
                var val$649=$$object.get(key$648);
                var val$650;
                if($$$cl1.isOfType((val$650=val$649),{t:$$$cl1.Integer})){
                    return val$650;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$651=val$649,opt$651!==null?opt$651:$$$cl1.String("null",4)).string]).string),'78:8-78:89','ceylon/json/Object.ceylon');
                var opt$651;
            };$$object.getInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Integer]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getInteger']};};
            $$object.getFloat=function getFloat(key$652){
                var $$object=this;
                var val$653=$$object.get(key$652);
                var val$654;
                if($$$cl1.isOfType((val$654=val$653),{t:$$$cl1.Float})){
                    return val$654;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$655=val$653,opt$655!==null?opt$655:$$$cl1.String("null",4)).string]).string),'89:8-89:86','ceylon/json/Object.ceylon');
                var opt$655;
            };$$object.getFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Float]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloat']};};
            $$object.getBoolean=function getBoolean(key$656){
                var $$object=this;
                var val$657=$$object.get(key$656);
                var val$658;
                if($$$cl1.isOfType((val$658=val$657),{t:$$$cl1.Boolean})){
                    return val$658;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$659=val$657,opt$659!==null?opt$659:$$$cl1.String("null",4)).string]).string),'100:8-100:88','ceylon/json/Object.ceylon');
                var opt$659;
            };$$object.getBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Boolean]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBoolean']};};
            $$object.getString=function getString(key$660){
                var $$object=this;
                var val$661=$$object.get(key$660);
                var val$662;
                if($$$cl1.isOfType((val$662=val$661),{t:$$$cl1.String})){
                    return val$662;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$663=val$661,opt$663!==null?opt$663:$$$cl1.String("null",4)).string]).string),'111:8-111:87','ceylon/json/Object.ceylon');
                var opt$663;
            };$$object.getString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[String]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getString']};};
            $$object.getObject=function getObject(key$664){
                var $$object=this;
                var val$665=$$object.get(key$664);
                var val$666;
                if($$$cl1.isOfType((val$666=val$665),{t:Object})){
                    return val$666;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$667=val$665,opt$667!==null?opt$667:$$$cl1.String("null",4)).string]).string),'122:8-122:88','ceylon/json/Object.ceylon');
                var opt$667;
            };$$object.getObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Object]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObject']};};
            $$object.getArray=function getArray(key$668){
                var $$object=this;
                var val$669=$$object.get(key$668);
                var val$670;
                if($$$cl1.isOfType((val$670=val$669),{t:Array})){
                    return val$670;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$671=val$669,opt$671!==null?opt$671:$$$cl1.String("null",4)).string]).string),'133:8-133:87','ceylon/json/Object.ceylon');
                var opt$671;
            };$$object.getArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Array]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArray']};};
            $$object.getIntegerOrNull=function getIntegerOrNull(key$672){
                var $$object=this;
                var val$673=$$object.get(key$672);
                var val$674;
                if($$$cl1.isOfType((val$674=val$673),{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Null}]})){
                    return val$674;
                }
                var val$675;
                if($$$cl1.isOfType((val$675=val$673),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$676=val$673,opt$676!==null?opt$676:$$$cl1.String("null",4)).string]).string),'149:8-149:89','ceylon/json/Object.ceylon');
                var opt$676;
            };$$object.getIntegerOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Integer]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getIntegerOrNull']};};
            $$object.getFloatOrNull=function getFloatOrNull(key$677){
                var $$object=this;
                var val$678=$$object.get(key$677);
                var val$679;
                if($$$cl1.isOfType((val$679=val$678),{ t:'u', l:[{t:$$$cl1.Float},{t:$$$cl1.Null}]})){
                    return val$679;
                }
                var val$680;
                if($$$cl1.isOfType((val$680=val$678),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$681=val$678,opt$681!==null?opt$681:$$$cl1.String("null",4)).string]).string),'163:8-163:86','ceylon/json/Object.ceylon');
                var opt$681;
            };$$object.getFloatOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Float]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloatOrNull']};};
            $$object.getBooleanOrNull=function getBooleanOrNull(key$682){
                var $$object=this;
                var val$683=$$object.get(key$682);
                var val$684;
                if($$$cl1.isOfType((val$684=val$683),{ t:'u', l:[{t:$$$cl1.Boolean},{t:$$$cl1.Null}]})){
                    return val$684;
                }
                var val$685;
                if($$$cl1.isOfType((val$685=val$683),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$686=val$683,opt$686!==null?opt$686:$$$cl1.String("null",4)).string]).string),'177:8-177:88','ceylon/json/Object.ceylon');
                var opt$686;
            };$$object.getBooleanOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Boolean]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBooleanOrNull']};};
            $$object.getStringOrNull=function getStringOrNull(key$687){
                var $$object=this;
                var val$688=$$object.get(key$687);
                var val$689;
                if($$$cl1.isOfType((val$689=val$688),{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Null}]})){
                    return val$689;
                }
                var val$690;
                if($$$cl1.isOfType((val$690=val$688),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$691=val$688,opt$691!==null?opt$691:$$$cl1.String("null",4)).string]).string),'191:8-191:87','ceylon/json/Object.ceylon');
                var opt$691;
            };$$object.getStringOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[String]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getStringOrNull']};};
            $$object.getObjectOrNull=function getObjectOrNull(key$692){
                var $$object=this;
                var val$693=$$object.get(key$692);
                var val$694;
                if($$$cl1.isOfType((val$694=val$693),{ t:'u', l:[{t:Object},{t:$$$cl1.Null}]})){
                    return val$694;
                }
                var val$695;
                if($$$cl1.isOfType((val$695=val$693),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$696=val$693,opt$696!==null?opt$696:$$$cl1.String("null",4)).string]).string),'205:8-205:88','ceylon/json/Object.ceylon');
                var opt$696;
            };$$object.getObjectOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Object}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Object]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObjectOrNull']};};
            $$object.getArrayOrNull=function getArrayOrNull(key$697){
                var $$object=this;
                var val$698=$$object.get(key$697);
                var val$699;
                if($$$cl1.isOfType((val$699=val$698),{ t:'u', l:[{t:Array},{t:$$$cl1.Null}]})){
                    return val$699;
                }
                var val$700;
                if($$$cl1.isOfType((val$700=val$698),{t:NullInstance})){
                    return null;
                }
                throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$701=val$698,opt$701!==null?opt$701:$$$cl1.String("null",4)).string]).string),'219:8-219:87','ceylon/json/Object.ceylon');
                var opt$701;
            };$$object.getArrayOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Array}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6.1').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Array]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArrayOrNull']};};
            $$$cl1.defineAttr($$object,'values$637',function(){return this.values$637_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$cont:Object,d:['ceylon.json','Object','$at','values']};});
        })(Object.$$.prototype);
    }
    return Object;
}
exports.$init$Object=$init$Object;
$init$Object();
exports.$pkg$ans$ceylon$json=function(){return[$$$cl1.doc($$$cl1.String("A JSON parser / serialiser",26)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function Parser(str$702, $$parser){
    $init$Parser();
    if ($$parser===undefined)$$parser=new Parser.$$;
    $$parser.str$702_=str$702;
    $$parser.chars$703_=$$parser.str$702.characters.sequence;
    $$parser.$prop$getChars$703={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};}};
    $$parser.$prop$getChars$703.get=function(){return chars$703};
    $$parser.index$704_=(0);
    $$parser.$prop$getIndex$704={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};}};
    $$parser.$prop$getIndex$704.get=function(){return index$704};
    return $$parser;
}
Parser.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],d:['ceylon.json','Parser']};};
function $init$Parser(){
    if (Parser.$$===undefined){
        $$$cl1.initTypeProto(Parser,'ceylon.json::Parser',$$$cl1.Basic);
        (function($$parser){
            $$$cl1.defineAttr($$parser,'chars$703',function(){return this.chars$703_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};});
            $$$cl1.defineAttr($$parser,'index$704',function(){return this.index$704_;},function(index$705){return this.index$704_=index$705;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};});
            $$parser.parseObject=function parseObject(){
                var $$parser=this;
                var obj$706=(Object(undefined));
                $$parser.eatSpacesUntil$707($$$cl1.Character(123));
                $$parser.eatSpaces$708();
                if((!$$parser.check$709($$$cl1.Character(125)))){
                    while(true){
                        var key$710=$$parser.parseString$711();
                        $prop$getKey$710={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.json','Parser','$m','parseObject','$at','key']};}};
                        $prop$getKey$710.get=function(){return key$710};
                        $$parser.eatSpacesUntil$707($$$cl1.Character(58));
                        var val$712=$$parser.parseValue$713();
                        $prop$getVal$712={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseObject','$at','val']};}};
                        $prop$getVal$712.get=function(){return val$712};
                        obj$706.put(key$710,val$712);
                        $$parser.eatSpaces$708();
                        if($$parser.check$709($$$cl1.Character(125))){
                            break;
                        }
                        if((!$$parser.check$709($$$cl1.Character(44)))){
                            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \'}\' or \',\' but got ",28),$$parser.char$714().string.string]).string),'22:20-22:86','ceylon/json/parse.ceylon');
                        }
                    }
                }
                return obj$706;
            };$$parser.parseObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[],$cont:Parser,$an:function(){return[$$$cl1.shared()];},d:['ceylon.json','Parser','$m','parseObject']};};
            $$parser.parseArray$715=function parseArray$715(){
                var $$parser=this;
                var arr$716=(Array(undefined));
                $$parser.eatSpacesUntil$707($$$cl1.Character(91));
                $$parser.eatSpaces$708();
                if((!$$parser.check$709($$$cl1.Character(93)))){
                    while(true){
                        var val$717=$$parser.parseValue$713();
                        $prop$getVal$717={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseArray','$at','val']};}};
                        $prop$getVal$717.get=function(){return val$717};
                        arr$716.add(val$717);
                        $$parser.eatSpaces$708();
                        if($$parser.check$709($$$cl1.Character(93))){
                            break;
                        }
                        if((!$$parser.check$709($$$cl1.Character(44)))){
                            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \']\' or \',\' but got ",28),$$parser.char$714().string.string]).string),'44:20-44:86','ceylon/json/parse.ceylon');
                        }
                    }
                }
                return arr$716;
            };$$parser.parseArray$715.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseArray']};};
            $$parser.parseValue$713=function parseValue$713(){
                var $$parser=this;
                $$parser.eatSpaces$708();
                var c$718=$$parser.char$714();
                if(c$718.equals($$$cl1.Character(123))){
                    return $$parser.parseObject();
                }
                if(c$718.equals($$$cl1.Character(91))){
                    return $$parser.parseArray$715();
                }
                if(c$718.equals($$$cl1.Character(34))){
                    return $$parser.parseString$711();
                }
                if(c$718.equals($$$cl1.Character(116))){
                    return $$parser.parseTrue$719();
                }
                if(c$718.equals($$$cl1.Character(102))){
                    return $$parser.parseFalse$720();
                }
                if(c$718.equals($$$cl1.Character(110))){
                    return $$parser.parseNull$721();
                }
                if(($$parser.isDigit$722(c$718)||c$718.equals($$$cl1.Character(45)))){
                    return $$parser.parseNumber$723();
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Invalid value: expecting object, array, string, number, true, false, null but got ",82),c$718.string.string]).string),'76:8-76:123','ceylon/json/parse.ceylon');
            };$$parser.parseValue$713.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseValue']};};
            $$parser.parseNumber$723=function parseNumber$723(){
                var $$parser=this;
                $$parser.eatSpaces$708();
                var negative$724=$$parser.check$709($$$cl1.Character(45));
                var wholePart$725=$$parser.parseDigits$726();
                if($$parser.check$709($$$cl1.Character(46))){
                    var start$727=$$parser.index$704;
                    $prop$getStart$727={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','start']};}};
                    $prop$getStart$727.get=function(){return start$727};
                    var fractionPart$728=$$parser.parseDigits$726();
                    $prop$getFractionPart$728={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','fractionPart']};}};
                    $prop$getFractionPart$728.get=function(){return fractionPart$728};
                    var digits$729=$$parser.index$704.minus(start$727);
                    $prop$getDigits$729={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','digits']};}};
                    $prop$getDigits$729.get=function(){return digits$729};
                    var float$730=wholePart$725.$float.plus(fractionPart$728.$float.divided((10).power(digits$729).$float));
                    $prop$getFloat$730={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','float']};}};
                    $prop$getFloat$730.get=function(){return float$730};
                    var signedFloat$731=(opt$732=(negative$724?float$730.negativeValue:null),opt$732!==null?opt$732:float$730);
                    $prop$getSignedFloat$731={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','signedFloat']};}};
                    $prop$getSignedFloat$731.get=function(){return signedFloat$731};
                    var opt$732;
                    var exp$733=$$parser.parseExponent$734();
                    $prop$getExp$733={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.json','Parser','$m','parseNumber','$at','exp']};}};
                    $prop$getExp$733.get=function(){return exp$733};
                    var exp$735;
                    if((exp$735=exp$733)!==null){
                        return signedFloat$731.times((10).$float.power(exp$735.$float));
                    }
                    return signedFloat$731;
                }
                var signedInteger$736=(opt$737=(negative$724?wholePart$725.negativeValue:null),opt$737!==null?opt$737:wholePart$725);
                var opt$737;
                var exp$738=$$parser.parseExponent$734();
                var exp$739;
                if((exp$739=exp$738)!==null){
                    return signedInteger$736.$float.times((10).$float.power(exp$739.$float));
                }
                return signedInteger$736;
            };$$parser.parseNumber$723.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNumber']};};
            $$parser.parseExponent$734=function parseExponent$734(){
                var $$parser=this;
                if(($$parser.check$709($$$cl1.Character(101))||$$parser.check$709($$$cl1.Character(69)))){
                    var negativeExponent$740;
                    $prop$getNegativeExponent$740={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.json','Parser','$m','parseExponent','$at','negativeExponent']};}};
                    $prop$getNegativeExponent$740.get=function(){return negativeExponent$740};
                    if($$parser.check$709($$$cl1.Character(45))){
                        negativeExponent$740=true;
                    }else {
                        if($$parser.check$709($$$cl1.Character(43))){
                            negativeExponent$740=false;
                        }else {
                            negativeExponent$740=false;
                        }
                    }
                    var exponentPart$741=$$parser.parseDigits$726();
                    $prop$getExponentPart$741={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseExponent','$at','exponentPart']};}};
                    $prop$getExponentPart$741.get=function(){return exponentPart$741};
                    return (opt$742=(negativeExponent$740?(-exponentPart$741):null),opt$742!==null?opt$742:exponentPart$741);
                    var opt$742;
                }
                return null;
            };$$parser.parseExponent$734.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseExponent']};};
            $$parser.parseDigits$726=function parseDigits$726(){
                var $$parser=this;
                var c$743=$$parser.eatChar$744();
                if((!$$parser.isDigit$722(c$743))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected digit, got: ",21),c$743.string.string]).string),'125:12-125:66','ceylon/json/parse.ceylon');
                }
                var digits$745=$$parser.parseDigit$746(c$743);
                function setDigits$745(digits$747){return digits$745=digits$747;};
                while($$parser.isDigit$722($$parser.char$714())){
                    (digits$745=digits$745.times((10)));
                    (digits$745=digits$745.plus($$parser.parseDigit$746($$parser.eatChar$744())));
                }
                return digits$745;
            };$$parser.parseDigits$726.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigits']};};
            $$parser.parseDigit$746=function parseDigit$746(c$748){
                var $$parser=this;
                return c$748.integer.minus($$$cl1.Character(48).integer);
            };$$parser.parseDigit$746.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigit']};};
            $$parser.parseTrue$719=function parseTrue$719(){
                var $$parser=this;
                $$parser.eatSpacesUntil$707($$$cl1.Character(116));
                $$parser.eat$749($$$cl1.Character(114));
                $$parser.eat$749($$$cl1.Character(117));
                $$parser.eat$749($$$cl1.Character(101));
                return true;
            };$$parser.parseTrue$719.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseTrue']};};
            $$parser.parseFalse$720=function parseFalse$720(){
                var $$parser=this;
                $$parser.eatSpacesUntil$707($$$cl1.Character(102));
                $$parser.eat$749($$$cl1.Character(97));
                $$parser.eat$749($$$cl1.Character(108));
                $$parser.eat$749($$$cl1.Character(115));
                $$parser.eat$749($$$cl1.Character(101));
                return false;
            };$$parser.parseFalse$720.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseFalse']};};
            $$parser.parseNull$721=function parseNull$721(){
                var $$parser=this;
                $$parser.eatSpacesUntil$707($$$cl1.Character(110));
                $$parser.eat$749($$$cl1.Character(117));
                $$parser.eat$749($$$cl1.Character(108));
                $$parser.eat$749($$$cl1.Character(108));
                return getNil();
            };$$parser.parseNull$721.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NullInstance},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNull']};};
            $$parser.parseString$711=function parseString$711(){
                var $$parser=this;
                $$parser.eatSpacesUntil$707($$$cl1.Character(34));
                var buf$750=$$$cl1.StringBuilder();
                while((!$$parser.check$709($$$cl1.Character(34)))){
                    var c$751=$$parser.eatChar$744();
                    $prop$getC$751={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseString','$at','c']};}};
                    $prop$getC$751.get=function(){return c$751};
                    if(c$751.equals($$$cl1.Character(92))){
                        buf$750.append($$parser.parseStringEscape$752().string);
                    }else {
                        buf$750.append(c$751.string);
                    }
                }
                return buf$750.string;
            };$$parser.parseString$711.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseString']};};
            $$parser.parseStringEscape$752=function parseStringEscape$752(){
                var $$parser=this;
                var c$753=$$parser.eatChar$744();
                if(((c$753.equals($$$cl1.Character(34))||c$753.equals($$$cl1.Character(92)))||c$753.equals($$$cl1.Character(47)))){
                    return c$753;
                }
                if(c$753.equals($$$cl1.Character(98))){
                    return $$$cl1.Character(8);
                }
                if(c$753.equals($$$cl1.Character(102))){
                    return $$$cl1.Character(12);
                }
                if(c$753.equals($$$cl1.Character(114))){
                    return $$$cl1.Character(13);
                }
                if(c$753.equals($$$cl1.Character(110))){
                    return $$$cl1.Character(10);
                }
                if(c$753.equals($$$cl1.Character(116))){
                    return $$$cl1.Character(9);
                }
                if(c$753.equals($$$cl1.Character(117))){
                    return $$parser.parseStringUnicode$754();
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected String escape sequence, got ",37),c$753.string,$$$cl1.String(" TERM ",6)]).string),'203:8-203:77','ceylon/json/parse.ceylon');
            };$$parser.parseStringEscape$752.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringEscape']};};
            $$parser.parseStringUnicode$754=function parseStringUnicode$754(){
                var $$parser=this;
                var codePoint$755=$$parser.parseHex$756().times((16).power((3))).plus($$parser.parseHex$756().times((16).power((2)))).plus($$parser.parseHex$756().times((16))).plus($$parser.parseHex$756());
                return codePoint$755.character;
            };$$parser.parseStringUnicode$754.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringUnicode']};};
            $$parser.parseHex$756=function parseHex$756(){
                var $$parser=this;
                var c$757=$$parser.eatChar$744();
                var codePoint$758=c$757.integer;
                if(((codePoint$758.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$758.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()))){
                    return codePoint$758.minus($$$cl1.Character(48).integer);
                }
                if(((codePoint$758.compare($$$cl1.Character(97).integer)!==$$$cl1.getSmaller())&&(codePoint$758.compare($$$cl1.Character(102).integer)!==$$$cl1.getLarger()))){
                    return (10).plus(codePoint$758).minus($$$cl1.Character(97).integer);
                }
                if(((codePoint$758.compare($$$cl1.Character(65).integer)!==$$$cl1.getSmaller())&&(codePoint$758.compare($$$cl1.Character(70).integer)!==$$$cl1.getLarger()))){
                    return (10).plus(codePoint$758).minus($$$cl1.Character(65).integer);
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting hex number, got ",26),c$757.string.string]).string),'227:8-227:67','ceylon/json/parse.ceylon');
            };$$parser.parseHex$756.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseHex']};};
            $$parser.eatSpaces$708=function eatSpaces$708(){
                var $$parser=this;
                while(($$parser.index$704.compare($$parser.chars$703.size).equals($$$cl1.getSmaller())&&$$parser.isSpace$759($$parser.char$714()))){
                    (oldindex$760=$$parser.index$704,$$parser.index$704=oldindex$760.successor,oldindex$760);
                    var oldindex$760;
                }
            };$$parser.eatSpaces$708.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpaces']};};
            $$parser.eatSpacesUntil$707=function eatSpacesUntil$707(c$761){
                var $$parser=this;
                $$parser.eatSpaces$708();
                $$parser.eat$749(c$761);
            };$$parser.eatSpacesUntil$707.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpacesUntil']};};
            $$parser.check$709=function check$709(c$762){
                var $$parser=this;
                if((!$$parser.char$714().equals(c$762))){
                    return false;
                }
                (oldindex$763=$$parser.index$704,$$parser.index$704=oldindex$763.successor,oldindex$763);
                var oldindex$763;
                return true;
            };$$parser.check$709.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','check']};};
            $$parser.eat$749=function eat$749(c$764){
                var $$parser=this;
                if((!$$parser.char$714().equals(c$764))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected ",9),c$764.string.string,$$$cl1.String(" but got ",9),$$parser.char$714().string.string]).string),'252:12-252:82','ceylon/json/parse.ceylon');
                }
                (oldindex$765=$$parser.index$704,$$parser.index$704=oldindex$765.successor,oldindex$765);
                var oldindex$765;
            };$$parser.eat$749.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eat']};};
            $$parser.char$714=function char$714(){
                var $$parser=this;
                var c$766;
                if((c$766=$$parser.chars$703.get($$parser.index$704))!==null){
                    return c$766;
                }
                throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.String("Unexpected end of string",24)),'261:8-261:51','ceylon/json/parse.ceylon');
            };$$parser.char$714.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','char']};};
            $$parser.eatChar$744=function eatChar$744(){
                var $$parser=this;
                var c$767=$$parser.char$714();
                (oldindex$768=$$parser.index$704,$$parser.index$704=oldindex$768.successor,oldindex$768);
                var oldindex$768;
                return c$767;
            };$$parser.eatChar$744.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatChar']};};
            $$parser.isSpace$759=function isSpace$759(c$769){
                var $$parser=this;
                return (((c$769.equals($$$cl1.Character(32))||c$769.equals($$$cl1.Character(10)))||c$769.equals($$$cl1.Character(13)))||c$769.equals($$$cl1.Character(9)));
            };$$parser.isSpace$759.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isSpace']};};
            $$parser.isDigit$722=function isDigit$722(c$770){
                var $$parser=this;
                var codePoint$771=c$770.integer;
                return ((codePoint$771.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$771.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()));
            };$$parser.isDigit$722.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isDigit']};};
            $$$cl1.defineAttr($$parser,'str$702',function(){return this.str$702_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Parser,d:['ceylon.json','Parser','$at','str']};});
        })(Parser.$$.prototype);
    }
    return Parser;
}
exports.$init$Parser=$init$Parser;
$init$Parser();
function parse(str$772){
    return Parser(str$772).parseObject();
}
exports.parse=parse;
parse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Parses a JSON string into a JSON Object",39)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','0.6.1').findPackage('ceylon.language'),$$$cl1.Exception),$$$cl1.String("If the JSON string is invalid",29)),$$$cl1.shared()];},d:['ceylon.json','parse']};};
function Printer(pretty$773, $$printer){
    $init$Printer();
    if ($$printer===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    if(pretty$773===undefined){pretty$773=false;}
    $$printer.pretty$773_=pretty$773;
    $$printer.level$774_=(0);
    $$printer.$prop$getLevel$774={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};}};
    $$printer.$prop$getLevel$774.get=function(){return level$774};
    return $$printer;
}
Printer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer",14)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.json','Printer']};};
exports.Printer=Printer;
function $init$Printer(){
    if (Printer.$$===undefined){
        $$$cl1.initTypeProto(Printer,'ceylon.json::Printer',$$$cl1.Basic);
        (function($$printer){
            $$$cl1.defineAttr($$printer,'level$774',function(){return this.level$774_;},function(level$775){return this.level$774_=level$775;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};});
            $$printer.enter$776=function enter$776(){
                var $$printer=this;
                (oldlevel$777=$$printer.level$774,$$printer.level$774=oldlevel$777.successor,oldlevel$777);
                var oldlevel$777;
            };$$printer.enter$776.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','enter']};};
            $$printer.leave$778=function leave$778(){
                var $$printer=this;
                (oldlevel$779=$$printer.level$774,$$printer.level$774=oldlevel$779.predecessor,oldlevel$779);
                var oldlevel$779;
            };$$printer.leave$778.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','leave']};};
            $$printer.indent$780=function indent$780(){
                var $$printer=this;
                if($$printer.pretty$773){
                    $$printer.print($$$cl1.String("\n",1));
                    if($$printer.level$774.compare((0)).equals($$$cl1.getLarger())){
                        var it$781 = $$$cl1.Range((0),$$printer.level$774.minus((1)),{Element:{t:$$$cl1.Integer}}).iterator();
                        var i$782;while ((i$782=it$781.next())!==$$$cl1.getFinished()){
                            $$printer.print($$$cl1.String(" ",1));
                        }
                    }
                }
            };$$printer.indent$780.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','indent']};};
            $$printer.printObject=function printObject(o$783){
                var $$printer=this;
                $$printer.print($$$cl1.String("{",1));
                $$printer.enter$776();
                var once$784=true;
                function setOnce$784(once$785){return once$784=once$785;};
                var it$786 = o$783.iterator();
                var entry$787;while ((entry$787=it$786.next())!==$$$cl1.getFinished()){
                    if(once$784){
                        once$784=false;
                    }else {
                        $$printer.print($$$cl1.String(",",1));
                    }
                    $$printer.indent$780();
                    $$printer.printString(entry$787.key);
                    $$printer.print($$$cl1.String(":",1));
                    if($$printer.pretty$773){
                        $$printer.print($$$cl1.String(" ",1));
                    }
                    $$printer.printValue(entry$787.item);
                }
                $$printer.leave$778();
                if((!once$784)){
                    $$printer.indent$780();
                }
                $$printer.print($$$cl1.String("}",1));
            };$$printer.printObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Object},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Object`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printObject']};};
            $$printer.printArray=function printArray(o$788){
                var $$printer=this;
                $$printer.print($$$cl1.String("[",1));
                $$printer.enter$776();
                var once$789=true;
                function setOnce$789(once$790){return once$789=once$790;};
                var it$791 = o$788.iterator();
                var elem$792;while ((elem$792=it$791.next())!==$$$cl1.getFinished()){
                    if(once$789){
                        once$789=false;
                    }else {
                        $$printer.print($$$cl1.String(",",1));
                    }
                    $$printer.indent$780();
                    $$printer.printValue(elem$792);
                }
                $$printer.leave$778();
                if((!once$789)){
                    $$printer.indent$780();
                }
                $$printer.print($$$cl1.String("]",1));
            };$$printer.printArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Array},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Array`",17)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printArray']};};
            $$printer.printString=function printString(s$793){
                var $$printer=this;
                $$printer.print($$$cl1.String("\"",1));
                var it$794 = s$793.iterator();
                var c$795;while ((c$795=it$794.next())!==$$$cl1.getFinished()){
                    if(c$795.equals($$$cl1.Character(34))){
                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("\"",1)));
                    }else {
                        if(c$795.equals($$$cl1.Character(92))){
                            $$printer.print($$$cl1.String("\\\\",2));
                        }else {
                            if(c$795.equals($$$cl1.Character(47))){
                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("/",1)));
                            }else {
                                if(c$795.equals((8).character)){
                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("b",1)));
                                }else {
                                    if(c$795.equals((12).character)){
                                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("f",1)));
                                    }else {
                                        if(c$795.equals((10).character)){
                                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("n",1)));
                                        }else {
                                            if(c$795.equals((13).character)){
                                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("r",1)));
                                            }else {
                                                if(c$795.equals((9).character)){
                                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("t",1)));
                                                }else {
                                                    $$printer.print(c$795.string);
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
            $$printer.printNumber=function printNumber(n$796){
                var $$printer=this;
                $$printer.print(n$796.string);
            };$$printer.printNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Number},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Integer|Float`",25)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNumber']};};
            $$printer.printBoolean=function printBoolean(v$797){
                var $$printer=this;
                $$printer.print(v$797.string);
            };$$printer.printBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'v',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a `Boolean`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printBoolean']};};
            $$printer.printNull=function printNull(){
                var $$printer=this;
                $$printer.print($$$cl1.String("null",4));
            };$$printer.printNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints `null`",13)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNull']};};
            $$printer.printValue=function printValue(val$798){
                var $$printer=this;
                
                var case$799=val$798;
                if ($$$cl1.isOfType(val$798,{t:$$$cl1.String})) {
                    $$printer.printString(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:$$$cl1.Integer})) {
                    $$printer.printNumber(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:$$$cl1.Float})) {
                    $$printer.printNumber(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:$$$cl1.Boolean})) {
                    $$printer.printBoolean(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:Object})) {
                    $$printer.printObject(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:Array})) {
                    $$printer.printArray(case$799);
                }else if ($$$cl1.isOfType(val$798,{t:NullInstance})) {
                    $$printer.printNull();
                }
            };$$printer.printValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a JSON value",19)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printValue']};};
            $$$cl1.defineAttr($$printer,'pretty$773',function(){return this.pretty$773_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:Printer,d:['ceylon.json','Printer','$at','pretty']};});
        })(Printer.$$.prototype);
    }
    return Printer;
}
exports.$init$Printer=$init$Printer;
$init$Printer();
function StringPrinter(pretty$800, $$stringPrinter){
    $init$StringPrinter();
    if ($$stringPrinter===undefined)$$stringPrinter=new StringPrinter.$$;
    if(pretty$800===undefined){pretty$800=false;}
    $$stringPrinter.pretty$800_=pretty$800;
    Printer($$stringPrinter.pretty$800,$$stringPrinter);
    $$stringPrinter.builder$801_=$$$cl1.StringBuilder();
    $$stringPrinter.$prop$getBuilder$801={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};}};
    $$stringPrinter.$prop$getBuilder$801.get=function(){return builder$801};
    return $$stringPrinter;
}
StringPrinter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Printer},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer that prints to a `String`",40)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','StringPrinter']};};
exports.StringPrinter=StringPrinter;
function $init$StringPrinter(){
    if (StringPrinter.$$===undefined){
        $$$cl1.initTypeProto(StringPrinter,'ceylon.json::StringPrinter',$init$Printer());
        (function($$stringPrinter){
            $$$cl1.defineAttr($$stringPrinter,'builder$801',function(){return this.builder$801_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};});
            $$stringPrinter.print=function print(string$802){
                var $$stringPrinter=this;
                $$stringPrinter.builder$801.append(string$802);
            };$$stringPrinter.print.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Appends the given value to our `String` representation",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','StringPrinter','$m','print']};};
            $$$cl1.defineAttr($$stringPrinter,'string',function(){
                var $$stringPrinter=this;
                return $$stringPrinter.builder$801.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the printed JSON",24)),$$$cl1.shared(),$$$cl1.actual(),$$$cl1.$default()];},d:['ceylon.json','StringPrinter','$at','string']};});$$$cl1.defineAttr($$stringPrinter,'pretty$800',function(){return this.pretty$800_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','pretty']};});
        })(StringPrinter.$$.prototype);
    }
    return StringPrinter;
}
exports.$init$StringPrinter=$init$StringPrinter;
$init$StringPrinter();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
