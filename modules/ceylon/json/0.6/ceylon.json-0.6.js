(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.collection\/0.6"],"$mod-name":"ceylon.json","$mod-version":"0.6","ceylon.json":{"$pkg-shared":"1","StringPrinter":{"super":{"$pk":"ceylon.json","$nm":"Printer"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"shared":[],"doc":["A JSON Printer that prints to a `String`"],"by":["Stéphane Épardaud"]},"$m":{"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Appends the given value to our `String` representation"],"actual":[]},"$nm":"print"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the printed JSON"],"actual":[]},"$nm":"string"},"builder":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"attr","$nm":"builder"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"StringPrinter"},"Parser":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}],"$mt":"cls","$m":{"parseArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"mthd","$nm":"parseArray"},"check":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"check"},"char":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"char"},"isDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isDigit"},"eatSpacesUntil":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eatSpacesUntil"},"eatSpaces":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"eatSpaces"},"parseDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"parseDigit"},"parseNumber":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"mthd","$nm":"parseNumber"},"eatChar":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"eatChar"},"parseHex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseHex"},"parseString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$nm":"parseString"},"parseExponent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"mthd","$nm":"parseExponent"},"parseNull":{"$t":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"mthd","$nm":"parseNull"},"parseStringUnicode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringUnicode"},"eat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"eat"},"parseFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseFalse"},"parseDigits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseDigits"},"parseTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseTrue"},"parseStringEscape":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringEscape"},"isSpace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"c"}]],"$mt":"mthd","$nm":"isSpace"},"parseObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parseObject"},"parseValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"mthd","$nm":"parseValue"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"str":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"str"},"chars":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"chars"}},"$nm":"Parser"},"Array":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Array"],"by":["Stéphane Épardaud"]},"$m":{"checkArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkArray"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets the value at the given index, or `null` if it does not exist"],"actual":[]},"$nm":"get"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"set"},"segment":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"checkString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkString"},"checkBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkBoolean"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a new value at the end of this array"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"checkInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkInteger"},"spanTo":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"checkFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkFloat"},"checkObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkObject"},"span":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"integers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Integer]]."],"doc":["Returns this array as a sequence of [[Integer]] elements."]},"$nm":"integers"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"list":{"$t":{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"LinkedList"},"$mt":"attr","$nm":"list"},"strings":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[String]]."],"doc":["Returns this array as a sequence of [[String]] elements."]},"$nm":"strings"},"booleans":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Boolean]]."],"doc":["Returns this array as a sequence of [[Boolean]] elements."]},"$nm":"booleans"},"floats":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Float]]."],"doc":["Returns this array as a sequence of [[Float]] elements."]},"$nm":"floats"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the number of elements in this array"],"actual":[]},"$nm":"size"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"reversed":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"objects":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Object]]."],"doc":["Returns this array as a sequence of [[Object]] elements."]},"$nm":"objects"},"arrays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Array]]."],"doc":["Returns this array as a sequence of [[Array]] elements."]},"$nm":"arrays"}},"$nm":"Array"},"Printer":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A JSON Printer"],"by":["Stéphane Épardaud"]},"$m":{"printValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a JSON value"]},"$nm":"printValue"},"printString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"s"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `String`"]},"$nm":"printString"},"printBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"v"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `Boolean`"]},"$nm":"printBoolean"},"printObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Object`"]},"$nm":"printObject"},"indent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"indent"},"leave":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"leave"},"printArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Array`"]},"$nm":"printArray"},"enter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"enter"},"printNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints `null`"]},"$nm":"printNull"},"printNumber":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"},"$mt":"prm","$nm":"n"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Integer|Float`"]},"$nm":"printNumber"},"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Override to implement the printing part"]},"$nm":"print"}},"$at":{"level":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"level"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$nm":"pretty"}},"$nm":"Printer"},"InvalidTypeException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"InvalidTypeException"},"parse":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[],"throws":["Exception","If the JSON string is invalid"],"doc":["Parses a JSON string into a JSON Object"],"by":["Stéphane Épardaud"]},"$nm":"parse"},"Object":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Object"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"getBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Boolean]]."],"doc":["Returns an [[Boolean]] value."]},"$nm":"getBoolean"},"getObjectOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Object"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Object]] nor [[NullInstance]]."],"doc":["Returns an [[Object]] value, unless the key does not exist, or the value is null."]},"$nm":"getObjectOrNull"},"getFloatOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Float]] nor [[NullInstance]]."],"doc":["Returns an [[Float]] value, unless the key does not exist, or the value is null."]},"$nm":"getFloatOrNull"},"getArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Array]]."],"doc":["Returns an [[Array]] value."]},"$nm":"getArray"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"getArrayOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Array"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Array]] nor [[NullInstance]]."],"doc":["Returns an [[Array]] value, unless the key does not exist, or the value is null."]},"$nm":"getArrayOrNull"},"getIntegerOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Integer]] nor [[NullInstance]]."],"doc":["Returns an [[Integer]] value, unless the key does not exist, or the value is null."]},"$nm":"getIntegerOrNull"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Integer]]."],"doc":["Returns an [[Integer]] value."]},"$nm":"getInteger"},"getStringOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[String]] nor [[NullInstance]]."],"doc":["Returns an [[String]] value, unless the key does not exist, or the value is null."]},"$nm":"getStringOrNull"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"putAll"},"getString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[String]]."],"doc":["Returns an [[String]] value."]},"$nm":"getString"},"getFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Float]]."],"doc":["Returns an [[Float]] value."]},"$nm":"getFloat"},"getBooleanOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Boolean]] nor [[NullInstance]]."],"doc":["Returns an [[Boolean]] value, unless the key does not exist, or the value is null."]},"$nm":"getBooleanOrNull"},"getObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Object]]."],"doc":["Returns an [[Object]] value."]},"$nm":"getObject"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"contents":{"$t":{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"HashMap"},"$mt":"attr","$nm":"contents"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"Object"},"nil":{"super":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"obj","$an":{"shared":[],"doc":["The singleton that represents the `null` value in JSON`."]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nil"},"NullInstance":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.json","$nm":"nil"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Represents the type of the `null` value in JSON."]},"$nm":"NullInstance"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$cc560=require('ceylon/collection/0.6/ceylon.collection-0.6');
$$$cl1.$addmod$($$$cc560,'ceylon.collection/0.6');
function Array(values$561, $$array){
    $init$Array();
    if ($$array===undefined)$$array=new Array.$$;
    $$array.$$targs$$={Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$561===undefined){values$561=$$$cl1.getEmpty();}
    $$array.values$561_=values$561;
    $$$cc560.MutableList({Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$array);
    $$$cl1.defineAttr($$array,'values$561',function(){return this.values$561_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','values']};});
    var list$562=$$$cc560.LinkedList(values$561,{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$$cl1.defineAttr($$array,'list$562',function(){return list$562;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc560.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};});
    $$array.$prop$getList$562={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc560.LinkedList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Array,d:['ceylon.json','Array','$at','list']};}};
    $$array.$prop$getList$562.get=function(){return list$562};
    var iterator=function (){
        return list$562.iterator();
    };
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','iterator']};};
    $$array.iterator=iterator;
    function add(val$563){
        list$562.add(val$563);
    }
    $$array.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a new value at the end of this array",41)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','add']};};
    function get(index$564){
        return list$562.get(index$564);
    }
    $$array.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance},{t:$$$cl1.Null}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Gets the value at the given index, or `null` if it does not exist",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','get']};};
    $$$cl1.defineAttr($$array,'size',function(){
        return list$562.size;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of elements in this array",44)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','size']};});
    $$$cl1.defineAttr($$array,'string',function(){
        var p$565=StringPrinter();
        $prop$getP$565={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','string','$at','p']};}};
        $prop$getP$565.get=function(){return p$565};
        p$565.printArray($$array);
        return p$565.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','string']};});
    $$$cl1.defineAttr($$array,'pretty',function(){
        var p$566=StringPrinter(true);
        $prop$getP$566={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Array','$at','pretty','$at','p']};}};
        $prop$getP$566.get=function(){return p$566};
        p$566.printArray($$array);
        return p$566.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','pretty']};});
    $$$cl1.defineAttr($$array,'clone',function(){
        return Array(list$562);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','clone']};});
    $$$cl1.defineAttr($$array,'lastIndex',function(){
        return list$562.lastIndex;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','lastIndex']};});
    $$$cl1.defineAttr($$array,'reversed',function(){
        return Array(list$562.reversed);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','reversed']};});
    $$$cl1.defineAttr($$array,'rest',function(){
        return Array(list$562.rest);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Array},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','rest']};});
    function segment(from$567,length$568){
        return Array(list$562.segment(from$567,length$568));
    }
    $$array.segment=segment;
    segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','segment']};};
    function span(from$569,to$570){
        return Array(list$562.span(from$569,to$570));
    }
    $$array.span=span;
    span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','span']};};
    function spanFrom(from$571){
        return Array(list$562.spanFrom(from$571));
    }
    $$array.spanFrom=spanFrom;
    spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanFrom']};};
    function spanTo(to$572){
        return Array(list$562.spanTo(to$572));
    }
    $$array.spanTo=spanTo;
    spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','spanTo']};};
    function addAll(values$573){
        list$562.addAll(values$573);
    }
    $$array.addAll=addAll;
    addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','addAll']};};
    function clear(){
        list$562.clear();
    }
    $$array.clear=clear;
    clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','clear']};};
    function insert(index$574,val$575){
        list$562.insert(index$574,val$575);
    }
    $$array.insert=insert;
    insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','insert']};};
    function remove(index$576){
        list$562.remove(index$576);
    }
    $$array.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','remove']};};
    function removeElement(val$577){
        list$562.removeElement(val$577);
    }
    $$array.removeElement=removeElement;
    removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','removeElement']};};
    function set(index$578,val$579){
        list$562.set(index$578,val$579);
    }
    $$array.set=set;
    set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','set']};};
    $$$cl1.defineAttr($$array,'hash',function(){
        return list$562.hash;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$at','hash']};});
    function equals(that$580){
        var that$581;
        if($$$cl1.isOfType((that$581=that$580),{t:Array})){
            return ((that$581===$$array)||list$562.equals(that$581.list$562));
        }
        return false;
    }
    $$array.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Array','$m','equals']};};
    function checkObject$582(val$583){
        var val$584;
        if($$$cl1.isOfType((val$584=val$583),{t:Object})){
            return val$584;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Object but got ",25),val$583.string]).string),'116:8-116:72','ceylon/json/Array.ceylon');
    };checkObject$582.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkObject']};};
    $$$cl1.defineAttr($$array,'objects',function(){
        return $$$cl1.Comprehension(function(){
            var it$585=list$562.iterator();
            var elem$586=$$$cl1.getFinished();
            var next$elem$586=function(){return elem$586=it$585.next();}
            next$elem$586();
            return function(){
                if(elem$586!==$$$cl1.getFinished()){
                    var elem$586$587=elem$586;
                    var tmpvar$588=checkObject$582(elem$586$587);
                    next$elem$586();
                    return tmpvar$588;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Object}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Object}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Object]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Object]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','objects']};});
    function checkString$589(val$590){
        var val$591;
        if($$$cl1.isOfType((val$591=val$590),{t:$$$cl1.String})){
            return val$591;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting String but got ",25),val$590.string]).string),'131:8-131:72','ceylon/json/Array.ceylon');
    };checkString$589.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkString']};};
    $$$cl1.defineAttr($$array,'strings',function(){
        return $$$cl1.Comprehension(function(){
            var it$592=list$562.iterator();
            var elem$593=$$$cl1.getFinished();
            var next$elem$593=function(){return elem$593=it$592.next();}
            next$elem$593();
            return function(){
                if(elem$593!==$$$cl1.getFinished()){
                    var elem$593$594=elem$593;
                    var tmpvar$595=checkString$589(elem$593$594);
                    next$elem$593();
                    return tmpvar$595;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[String]] elements.",56)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[String]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','strings']};});
    function checkInteger$596(val$597){
        var val$598;
        if($$$cl1.isOfType((val$598=val$597),{t:$$$cl1.Integer})){
            return val$598;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Integer but got ",26),val$597.string]).string),'146:8-146:73','ceylon/json/Array.ceylon');
    };checkInteger$596.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkInteger']};};
    $$$cl1.defineAttr($$array,'integers',function(){
        return $$$cl1.Comprehension(function(){
            var it$599=list$562.iterator();
            var elem$600=$$$cl1.getFinished();
            var next$elem$600=function(){return elem$600=it$599.next();}
            next$elem$600();
            return function(){
                if(elem$600!==$$$cl1.getFinished()){
                    var elem$600$601=elem$600;
                    var tmpvar$602=checkInteger$596(elem$600$601);
                    next$elem$600();
                    return tmpvar$602;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Integer]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Integer]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','integers']};});
    function checkFloat$603(val$604){
        var val$605;
        if($$$cl1.isOfType((val$605=val$604),{t:$$$cl1.Float})){
            return val$605;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Float but got ",24),val$604.string]).string),'161:8-161:71','ceylon/json/Array.ceylon');
    };checkFloat$603.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkFloat']};};
    $$$cl1.defineAttr($$array,'floats',function(){
        return $$$cl1.Comprehension(function(){
            var it$606=list$562.iterator();
            var elem$607=$$$cl1.getFinished();
            var next$elem$607=function(){return elem$607=it$606.next();}
            next$elem$607();
            return function(){
                if(elem$607!==$$$cl1.getFinished()){
                    var elem$607$608=elem$607;
                    var tmpvar$609=checkFloat$603(elem$607$608);
                    next$elem$607();
                    return tmpvar$609;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Float]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Float]].",48)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','floats']};});
    function checkBoolean$610(val$611){
        var val$612;
        if($$$cl1.isOfType((val$612=val$611),{t:$$$cl1.Boolean})){
            return val$612;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Boolean but got ",26),val$611.string]).string),'176:8-176:73','ceylon/json/Array.ceylon');
    };checkBoolean$610.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkBoolean']};};
    $$$cl1.defineAttr($$array,'booleans',function(){
        return $$$cl1.Comprehension(function(){
            var it$613=list$562.iterator();
            var elem$614=$$$cl1.getFinished();
            var next$elem$614=function(){return elem$614=it$613.next();}
            next$elem$614();
            return function(){
                if(elem$614!==$$$cl1.getFinished()){
                    var elem$614$615=elem$614;
                    var tmpvar$616=checkBoolean$610(elem$614$615);
                    next$elem$614();
                    return tmpvar$616;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Boolean]] elements.",57)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not a [[Boolean]].",50)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','booleans']};});
    function checkArray$617(val$618){
        var val$619;
        if($$$cl1.isOfType((val$619=val$618),{t:Array})){
            return val$619;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Array but got ",24),val$618.string]).string),'191:8-191:71','ceylon/json/Array.ceylon');
    };checkArray$617.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Array,$an:function(){return[$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException))];},d:['ceylon.json','Array','$m','checkArray']};};
    $$$cl1.defineAttr($$array,'arrays',function(){
        return $$$cl1.Comprehension(function(){
            var it$620=list$562.iterator();
            var elem$621=$$$cl1.getFinished();
            var next$elem$621=function(){return elem$621=it$620.next();}
            next$elem$621();
            return function(){
                if(elem$621!==$$$cl1.getFinished()){
                    var elem$621$622=elem$621;
                    var tmpvar$623=checkArray$617(elem$621$622);
                    next$elem$621();
                    return tmpvar$623;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Array}});
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:Array}}},$cont:Array,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this array as a sequence of [[Array]] elements.",55)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If one element in this array is not an [[Array]].",49)),$$$cl1.shared()];},d:['ceylon.json','Array','$at','arrays']};});
    return $$array;
}
Array.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc560.MutableList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Array",23)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Array']};};
exports.Array=Array;
function $init$Array(){
    if (Array.$$===undefined){
        $$$cl1.initTypeProto(Array,'ceylon.json::Array',$$$cl1.Basic,$$$cc560.$init$MutableList());
    }
    return Array;
}
exports.$init$Array=$init$Array;
$init$Array();
function InvalidTypeException(message$624, $$invalidTypeException){
    $init$InvalidTypeException();
    if ($$invalidTypeException===undefined)$$invalidTypeException=new InvalidTypeException.$$;
    $$invalidTypeException.message$624_=message$624;
    $$$cl1.Exception(message$624,undefined,$$invalidTypeException);
    $$$cl1.defineAttr($$invalidTypeException,'message$624',function(){return this.message$624_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:InvalidTypeException,d:['ceylon.json','InvalidTypeException','$at','message']};});
    return $$invalidTypeException;
}
InvalidTypeException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type.",223)),$$$cl1.shared()];},d:['ceylon.json','InvalidTypeException']};};
exports.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
    if (InvalidTypeException.$$===undefined){
        $$$cl1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',$$$cl1.Exception);
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
function nil$625(){
    var $$nil=new nil$625.$$;
    NullInstance($$nil);
    var string=$$$cl1.String("null",4);
    $$$cl1.defineAttr($$nil,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$625,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};});
    $$nil.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:nil$625,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','nil','$at','string']};}};
    $$nil.$prop$getString.get=function(){return string};
    return $$nil;
}
function $init$nil$625(){
    if (nil$625.$$===undefined){
        $$$cl1.initTypeProto(nil$625,'ceylon.json::nil',NullInstance);
    }
    return nil$625;
}
exports.$init$nil$625=$init$nil$625;
$init$nil$625();
var nil$626=nil$625();
var getNil=function(){
    return nil$626;
}
exports.getNil=getNil;
getNil.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:nil$625},$an:function(){return[$$$cl1.doc($$$cl1.String("The singleton that represents the `null` value in JSON`.",56)),$$$cl1.shared()];},d:['ceylon.json','nil']};};
$prop$getNil={get:getNil,$$metamodel$$:getNil.$$metamodel$$};
exports.$prop$getNil=$prop$getNil;
function Object(values$627, $$object){
    $init$Object();
    if ($$object===undefined)$$object=new Object.$$;
    $$object.$$targs$$={Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$627===undefined){values$627=$$$cl1.getEmpty();}
    $$object.values$627_=values$627;
    $$$cc560.MutableMap({Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}},$$object);
    $$$cl1.add_type_arg($$object,'Key',{t:$$$cl1.String});
    $$$cl1.defineAttr($$object,'values$627',function(){return this.values$627_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$cont:Object,d:['ceylon.json','Object','$at','values']};});
    var contents$628=$$$cc560.HashMap(values$627,{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$$cl1.defineAttr($$object,'contents$628',function(){return contents$628;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc560.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};});
    $$object.$prop$getContents$628={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cc560.HashMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$cont:Object,d:['ceylon.json','Object','$at','contents']};}};
    $$object.$prop$getContents$628.get=function(){return contents$628};
    $$$cl1.defineAttr($$object,'string',function(){
        var p$629=StringPrinter();
        $prop$getP$629={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','string','$at','p']};}};
        $prop$getP$629.get=function(){return p$629};
        p$629.printObject($$object);
        return p$629.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a serialised JSON representation",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','string']};});
    $$$cl1.defineAttr($$object,'pretty',function(){
        var p$630=StringPrinter(true);
        $prop$getP$630={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:StringPrinter},d:['ceylon.json','Object','$at','pretty','$at','p']};}};
        $prop$getP$630.get=function(){return p$630};
        p$630.printObject($$object);
        return p$630.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a pretty-printed serialised JSON representation",55)),$$$cl1.shared()];},d:['ceylon.json','Object','$at','pretty']};});
    function clear(){
        contents$628.clear();
    }
    $$object.clear=clear;
    clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','clear']};};
    $$$cl1.defineAttr($$object,'clone',function(){
        return Object(contents$628);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Object},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','clone']};});
    function get(key$631){
        return contents$628.get(key$631);
    }
    $$object.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','get']};};
    function iterator(){
        return contents$628.iterator();
    }
    $$object.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$ps:[],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','iterator']};};
    function put(key$632,item$633){
        return contents$628.put(key$632,item$633);
    }
    $$object.put=put;
    put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','put']};};
    function putAll(entries$634){
        contents$628.putAll(entries$634);
    }
    $$object.putAll=putAll;
    putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','putAll']};};
    function remove(key$635){
        return contents$628.remove(key$635);
    }
    $$object.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','remove']};};
    $$$cl1.defineAttr($$object,'size',function(){
        return contents$628.size;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','size']};});
    $$$cl1.defineAttr($$object,'hash',function(){
        return contents$628.hash;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$at','hash']};});
    function equals(that$636){
        var that$637;
        if($$$cl1.isOfType((that$637=that$636),{t:Object})){
            return (($$object===that$637)||contents$628.equals(that$637.contents$628));
        }
        return false;
    }
    $$object.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','Object','$m','equals']};};
    function getInteger(key$638){
        var val$639=$$object.get(key$638);
        $prop$getVal$639={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getInteger','$at','val']};}};
        $prop$getVal$639.get=function(){return val$639};
        var val$640;
        if($$$cl1.isOfType((val$640=val$639),{t:$$$cl1.Integer})){
            return val$640;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$641=val$639,opt$641!==null?opt$641:$$$cl1.String("null",4)).string]).string),'78:8-78:89','ceylon/json/Object.ceylon');
        var opt$641;
    }
    $$object.getInteger=getInteger;
    getInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Integer]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getInteger']};};
    function getFloat(key$642){
        var val$643=$$object.get(key$642);
        $prop$getVal$643={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getFloat','$at','val']};}};
        $prop$getVal$643.get=function(){return val$643};
        var val$644;
        if($$$cl1.isOfType((val$644=val$643),{t:$$$cl1.Float})){
            return val$644;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$645=val$643,opt$645!==null?opt$645:$$$cl1.String("null",4)).string]).string),'89:8-89:86','ceylon/json/Object.ceylon');
        var opt$645;
    }
    $$object.getFloat=getFloat;
    getFloat.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Float]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloat']};};
    function getBoolean(key$646){
        var val$647=$$object.get(key$646);
        $prop$getVal$647={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getBoolean','$at','val']};}};
        $prop$getVal$647.get=function(){return val$647};
        var val$648;
        if($$$cl1.isOfType((val$648=val$647),{t:$$$cl1.Boolean})){
            return val$648;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$649=val$647,opt$649!==null?opt$649:$$$cl1.String("null",4)).string]).string),'100:8-100:88','ceylon/json/Object.ceylon');
        var opt$649;
    }
    $$object.getBoolean=getBoolean;
    getBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value.",29)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Boolean]].",69)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBoolean']};};
    function getString(key$650){
        var val$651=$$object.get(key$650);
        $prop$getVal$651={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getString','$at','val']};}};
        $prop$getVal$651.get=function(){return val$651};
        var val$652;
        if($$$cl1.isOfType((val$652=val$651),{t:$$$cl1.String})){
            return val$652;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$653=val$651,opt$653!==null?opt$653:$$$cl1.String("null",4)).string]).string),'111:8-111:87','ceylon/json/Object.ceylon');
        var opt$653;
    }
    $$object.getString=getString;
    getString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[String]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getString']};};
    function getObject(key$654){
        var val$655=$$object.get(key$654);
        $prop$getVal$655={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getObject','$at','val']};}};
        $prop$getVal$655.get=function(){return val$655};
        var val$656;
        if($$$cl1.isOfType((val$656=val$655),{t:Object})){
            return val$656;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$657=val$655,opt$657!==null?opt$657:$$$cl1.String("null",4)).string]).string),'122:8-122:88','ceylon/json/Object.ceylon');
        var opt$657;
    }
    $$object.getObject=getObject;
    getObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value.",28)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Object]].",68)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObject']};};
    function getArray(key$658){
        var val$659=$$object.get(key$658);
        $prop$getVal$659={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getArray','$at','val']};}};
        $prop$getVal$659.get=function(){return val$659};
        var val$660;
        if($$$cl1.isOfType((val$660=val$659),{t:Array})){
            return val$660;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$661=val$659,opt$661!==null?opt$661:$$$cl1.String("null",4)).string]).string),'133:8-133:87','ceylon/json/Object.ceylon');
        var opt$661;
    }
    $$object.getArray=getArray;
    getArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value.",27)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key dot not exist or points to a type that is not [[Array]].",67)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArray']};};
    function getIntegerOrNull(key$662){
        var val$663=$$object.get(key$662);
        $prop$getVal$663={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getIntegerOrNull','$at','val']};}};
        $prop$getVal$663.get=function(){return val$663};
        var val$664;
        if($$$cl1.isOfType((val$664=val$663),{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Null}]})){
            return val$664;
        }
        var val$665;
        if($$$cl1.isOfType((val$665=val$663),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$666=val$663,opt$666!==null?opt$666:$$$cl1.String("null",4)).string]).string),'149:8-149:89','ceylon/json/Object.ceylon');
        var opt$666;
    }
    $$object.getIntegerOrNull=getIntegerOrNull;
    getIntegerOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Integer]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Integer]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getIntegerOrNull']};};
    function getFloatOrNull(key$667){
        var val$668=$$object.get(key$667);
        $prop$getVal$668={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getFloatOrNull','$at','val']};}};
        $prop$getVal$668.get=function(){return val$668};
        var val$669;
        if($$$cl1.isOfType((val$669=val$668),{ t:'u', l:[{t:$$$cl1.Float},{t:$$$cl1.Null}]})){
            return val$669;
        }
        var val$670;
        if($$$cl1.isOfType((val$670=val$668),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$671=val$668,opt$671!==null?opt$671:$$$cl1.String("null",4)).string]).string),'163:8-163:86','ceylon/json/Object.ceylon');
        var opt$671;
    }
    $$object.getFloatOrNull=getFloatOrNull;
    getFloatOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Float]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Float]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getFloatOrNull']};};
    function getBooleanOrNull(key$672){
        var val$673=$$object.get(key$672);
        $prop$getVal$673={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getBooleanOrNull','$at','val']};}};
        $prop$getVal$673.get=function(){return val$673};
        var val$674;
        if($$$cl1.isOfType((val$674=val$673),{ t:'u', l:[{t:$$$cl1.Boolean},{t:$$$cl1.Null}]})){
            return val$674;
        }
        var val$675;
        if($$$cl1.isOfType((val$675=val$673),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$676=val$673,opt$676!==null?opt$676:$$$cl1.String("null",4)).string]).string),'177:8-177:88','ceylon/json/Object.ceylon');
        var opt$676;
    }
    $$object.getBooleanOrNull=getBooleanOrNull;
    getBooleanOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Boolean]] value, unless the key does not exist, or the value is null.",82)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Boolean]] nor [[NullInstance]].",77)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getBooleanOrNull']};};
    function getStringOrNull(key$677){
        var val$678=$$object.get(key$677);
        $prop$getVal$678={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getStringOrNull','$at','val']};}};
        $prop$getVal$678.get=function(){return val$678};
        var val$679;
        if($$$cl1.isOfType((val$679=val$678),{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Null}]})){
            return val$679;
        }
        var val$680;
        if($$$cl1.isOfType((val$680=val$678),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$681=val$678,opt$681!==null?opt$681:$$$cl1.String("null",4)).string]).string),'191:8-191:87','ceylon/json/Object.ceylon');
        var opt$681;
    }
    $$object.getStringOrNull=getStringOrNull;
    getStringOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[String]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[String]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getStringOrNull']};};
    function getObjectOrNull(key$682){
        var val$683=$$object.get(key$682);
        $prop$getVal$683={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getObjectOrNull','$at','val']};}};
        $prop$getVal$683.get=function(){return val$683};
        var val$684;
        if($$$cl1.isOfType((val$684=val$683),{ t:'u', l:[{t:Object},{t:$$$cl1.Null}]})){
            return val$684;
        }
        var val$685;
        if($$$cl1.isOfType((val$685=val$683),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$686=val$683,opt$686!==null?opt$686:$$$cl1.String("null",4)).string]).string),'205:8-205:88','ceylon/json/Object.ceylon');
        var opt$686;
    }
    $$object.getObjectOrNull=getObjectOrNull;
    getObjectOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Object}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Object]] value, unless the key does not exist, or the value is null.",81)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Object]] nor [[NullInstance]].",76)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getObjectOrNull']};};
    function getArrayOrNull(key$687){
        var val$688=$$object.get(key$687);
        $prop$getVal$688={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Object','$m','getArrayOrNull','$at','val']};}};
        $prop$getVal$688.get=function(){return val$688};
        var val$689;
        if($$$cl1.isOfType((val$689=val$688),{ t:'u', l:[{t:Array},{t:$$$cl1.Null}]})){
            return val$689;
        }
        var val$690;
        if($$$cl1.isOfType((val$690=val$688),{t:NullInstance})){
            return null;
        }
        throw $$$cl1.wrapexc(InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$691=val$688,opt$691!==null?opt$691:$$$cl1.String("null",4)).string]).string),'219:8-219:87','ceylon/json/Object.ceylon');
        var opt$691;
    }
    $$object.getArrayOrNull=getArrayOrNull;
    getArrayOrNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Array}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Object,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an [[Array]] value, unless the key does not exist, or the value is null.",80)),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.json','0.6').findPackage('ceylon.json'),InvalidTypeException),$$$cl1.String("If the key points to a type that is neither [[Array]] nor [[NullInstance]].",75)),$$$cl1.shared()];},d:['ceylon.json','Object','$m','getArrayOrNull']};};
    return $$object;
}
Object.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc560.MutableMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents a JSON Object",24)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','Object']};};
exports.Object=Object;
function $init$Object(){
    if (Object.$$===undefined){
        $$$cl1.initTypeProto(Object,'ceylon.json::Object',$$$cl1.Basic,$$$cc560.$init$MutableMap());
    }
    return Object;
}
exports.$init$Object=$init$Object;
$init$Object();
exports.$pkg$ans$ceylon$json=function(){return[$$$cl1.doc($$$cl1.String("A JSON parser / serialiser",26)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function Parser(str$692, $$parser){
    $init$Parser();
    if ($$parser===undefined)$$parser=new Parser.$$;
    $$parser.str$692_=str$692;
    $$$cl1.defineAttr($$parser,'str$692',function(){return this.str$692_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Parser,d:['ceylon.json','Parser','$at','str']};});
    var chars$693=str$692.characters.sequence;
    $$$cl1.defineAttr($$parser,'chars$693',function(){return chars$693;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};});
    $$parser.$prop$getChars$693={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Character}}},$cont:Parser,d:['ceylon.json','Parser','$at','chars']};}};
    $$parser.$prop$getChars$693.get=function(){return chars$693};
    var index$694=(0);
    $$$cl1.defineAttr($$parser,'index$694',function(){return index$694;},function(index$695){return index$694=index$695;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};});
    $$parser.$prop$getIndex$694={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Parser,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$at','index']};}};
    $$parser.$prop$getIndex$694.get=function(){return index$694};
    function parseObject(){
        var obj$696=(Object(undefined));
        $prop$getObj$696={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Object},d:['ceylon.json','Parser','$m','parseObject','$at','obj']};}};
        $prop$getObj$696.get=function(){return obj$696};
        eatSpacesUntil$697($$$cl1.Character(123));
        eatSpaces$698();
        if((!check$699($$$cl1.Character(125)))){
            while(true){
                var key$700=parseString$701();
                $prop$getKey$700={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.json','Parser','$m','parseObject','$at','key']};}};
                $prop$getKey$700.get=function(){return key$700};
                eatSpacesUntil$697($$$cl1.Character(58));
                var val$702=parseValue$703();
                $prop$getVal$702={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseObject','$at','val']};}};
                $prop$getVal$702.get=function(){return val$702};
                obj$696.put(key$700,val$702);
                eatSpaces$698();
                if(check$699($$$cl1.Character(125))){
                    break;
                }
                if((!check$699($$$cl1.Character(44)))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \'}\' or \',\' but got ",28),char$704().string.string]).string),'22:20-22:86','ceylon/json/parse.ceylon');
                }
            }
        }
        return obj$696;
    }
    $$parser.parseObject=parseObject;
    parseObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[],$cont:Parser,$an:function(){return[$$$cl1.shared()];},d:['ceylon.json','Parser','$m','parseObject']};};
    function parseArray$705(){
        var arr$706=(Array(undefined));
        $prop$getArr$706={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Array},d:['ceylon.json','Parser','$m','parseArray','$at','arr']};}};
        $prop$getArr$706.get=function(){return arr$706};
        eatSpacesUntil$697($$$cl1.Character(91));
        eatSpaces$698();
        if((!check$699($$$cl1.Character(93)))){
            while(true){
                var val$707=parseValue$703();
                $prop$getVal$707={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},d:['ceylon.json','Parser','$m','parseArray','$at','val']};}};
                $prop$getVal$707.get=function(){return val$707};
                arr$706.add(val$707);
                eatSpaces$698();
                if(check$699($$$cl1.Character(93))){
                    break;
                }
                if((!check$699($$$cl1.Character(44)))){
                    throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \']\' or \',\' but got ",28),char$704().string.string]).string),'44:20-44:86','ceylon/json/parse.ceylon');
                }
            }
        }
        return arr$706;
    };parseArray$705.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Array},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseArray']};};
    function parseValue$703(){
        eatSpaces$698();
        var c$708=char$704();
        $prop$getC$708={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseValue','$at','c']};}};
        $prop$getC$708.get=function(){return c$708};
        if(c$708.equals($$$cl1.Character(123))){
            return $$parser.parseObject();
        }
        if(c$708.equals($$$cl1.Character(91))){
            return parseArray$705();
        }
        if(c$708.equals($$$cl1.Character(34))){
            return parseString$701();
        }
        if(c$708.equals($$$cl1.Character(116))){
            return parseTrue$709();
        }
        if(c$708.equals($$$cl1.Character(102))){
            return parseFalse$710();
        }
        if(c$708.equals($$$cl1.Character(110))){
            return parseNull$711();
        }
        if((isDigit$712(c$708)||c$708.equals($$$cl1.Character(45)))){
            return parseNumber$713();
        }
        throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Invalid value: expecting object, array, string, number, true, false, null but got ",82),c$708.string.string]).string),'76:8-76:123','ceylon/json/parse.ceylon');
    };parseValue$703.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseValue']};};
    function parseNumber$713(){
        eatSpaces$698();
        var negative$714=check$699($$$cl1.Character(45));
        $prop$getNegative$714={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.json','Parser','$m','parseNumber','$at','negative']};}};
        $prop$getNegative$714.get=function(){return negative$714};
        var wholePart$715=parseDigits$716();
        $prop$getWholePart$715={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','wholePart']};}};
        $prop$getWholePart$715.get=function(){return wholePart$715};
        if(check$699($$$cl1.Character(46))){
            var start$717=index$694;
            $prop$getStart$717={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','start']};}};
            $prop$getStart$717.get=function(){return start$717};
            var fractionPart$718=parseDigits$716();
            $prop$getFractionPart$718={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','fractionPart']};}};
            $prop$getFractionPart$718.get=function(){return fractionPart$718};
            var digits$719=index$694.minus(start$717);
            $prop$getDigits$719={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','digits']};}};
            $prop$getDigits$719.get=function(){return digits$719};
            var float$720=wholePart$715.$float.plus(fractionPart$718.$float.divided((10).power(digits$719).$float));
            $prop$getFloat$720={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','float']};}};
            $prop$getFloat$720.get=function(){return float$720};
            var signedFloat$721=(opt$722=(negative$714?float$720.negativeValue:null),opt$722!==null?opt$722:float$720);
            $prop$getSignedFloat$721={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.json','Parser','$m','parseNumber','$at','signedFloat']};}};
            $prop$getSignedFloat$721.get=function(){return signedFloat$721};
            var opt$722;
            var exp$723=parseExponent$724();
            $prop$getExp$723={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.json','Parser','$m','parseNumber','$at','exp']};}};
            $prop$getExp$723.get=function(){return exp$723};
            var exp$725;
            if((exp$725=exp$723)!==null){
                return signedFloat$721.times((10).$float.power(exp$725.$float));
            }
            return signedFloat$721;
        }
        var signedInteger$726=(opt$727=(negative$714?wholePart$715.negativeValue:null),opt$727!==null?opt$727:wholePart$715);
        $prop$getSignedInteger$726={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseNumber','$at','signedInteger']};}};
        $prop$getSignedInteger$726.get=function(){return signedInteger$726};
        var opt$727;
        var exp$728=parseExponent$724();
        $prop$getExp$728={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},d:['ceylon.json','Parser','$m','parseNumber','$at','exp']};}};
        $prop$getExp$728.get=function(){return exp$728};
        var exp$729;
        if((exp$729=exp$728)!==null){
            return signedInteger$726.$float.times((10).$float.power(exp$729.$float));
        }
        return signedInteger$726;
    };parseNumber$713.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNumber']};};
    function parseExponent$724(){
        if((check$699($$$cl1.Character(101))||check$699($$$cl1.Character(69)))){
            var negativeExponent$730;
            $prop$getNegativeExponent$730={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.json','Parser','$m','parseExponent','$at','negativeExponent']};}};
            $prop$getNegativeExponent$730.get=function(){return negativeExponent$730};
            if(check$699($$$cl1.Character(45))){
                negativeExponent$730=true;
            }else {
                if(check$699($$$cl1.Character(43))){
                    negativeExponent$730=false;
                }else {
                    negativeExponent$730=false;
                }
            }
            var exponentPart$731=parseDigits$716();
            $prop$getExponentPart$731={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseExponent','$at','exponentPart']};}};
            $prop$getExponentPart$731.get=function(){return exponentPart$731};
            return (opt$732=(negativeExponent$730?(-exponentPart$731):null),opt$732!==null?opt$732:exponentPart$731);
            var opt$732;
        }
        return null;
    };parseExponent$724.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseExponent']};};
    function parseDigits$716(){
        var c$733=eatChar$734();
        $prop$getC$733={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseDigits','$at','c']};}};
        $prop$getC$733.get=function(){return c$733};
        if((!isDigit$712(c$733))){
            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected digit, got: ",21),c$733.string.string]).string),'125:12-125:66','ceylon/json/parse.ceylon');
        }
        var digits$735=parseDigit$736(c$733);
        var setDigits$735=function(digits$737){return digits$735=digits$737;};
        $prop$getDigits$735={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Parser','$m','parseDigits','$at','digits']};}};
        $prop$getDigits$735.get=function(){return digits$735};
        $prop$getDigits$735.set=setDigits$735;
        if (setDigits$735.$$metamodel$$===undefined)setDigits$735.$$metamodel$$=$prop$getDigits$735.$$metamodel$$;
        while(isDigit$712(char$704())){
            (digits$735=digits$735.times((10)));
            (digits$735=digits$735.plus(parseDigit$736(eatChar$734())));
        }
        return digits$735;
    };parseDigits$716.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigits']};};
    function parseDigit$736(c$738){
        return c$738.integer.minus($$$cl1.Character(48).integer);
    };parseDigit$736.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','parseDigit']};};
    function parseTrue$709(){
        eatSpacesUntil$697($$$cl1.Character(116));
        eat$739($$$cl1.Character(114));
        eat$739($$$cl1.Character(117));
        eat$739($$$cl1.Character(101));
        return true;
    };parseTrue$709.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseTrue']};};
    function parseFalse$710(){
        eatSpacesUntil$697($$$cl1.Character(102));
        eat$739($$$cl1.Character(97));
        eat$739($$$cl1.Character(108));
        eat$739($$$cl1.Character(115));
        eat$739($$$cl1.Character(101));
        return false;
    };parseFalse$710.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseFalse']};};
    function parseNull$711(){
        eatSpacesUntil$697($$$cl1.Character(110));
        eat$739($$$cl1.Character(117));
        eat$739($$$cl1.Character(108));
        eat$739($$$cl1.Character(108));
        return getNil();
    };parseNull$711.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:NullInstance},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseNull']};};
    function parseString$701(){
        eatSpacesUntil$697($$$cl1.Character(34));
        var buf$740=$$$cl1.StringBuilder();
        $prop$getBuf$740={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.json','Parser','$m','parseString','$at','buf']};}};
        $prop$getBuf$740.get=function(){return buf$740};
        while((!check$699($$$cl1.Character(34)))){
            var c$741=eatChar$734();
            $prop$getC$741={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseString','$at','c']};}};
            $prop$getC$741.get=function(){return c$741};
            if(c$741.equals($$$cl1.Character(92))){
                buf$740.append(parseStringEscape$742().string);
            }else {
                buf$740.append(c$741.string);
            }
        }
        return buf$740.string;
    };parseString$701.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseString']};};
    function parseStringEscape$742(){
        var c$743=eatChar$734();
        $prop$getC$743={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseStringEscape','$at','c']};}};
        $prop$getC$743.get=function(){return c$743};
        if(((c$743.equals($$$cl1.Character(34))||c$743.equals($$$cl1.Character(92)))||c$743.equals($$$cl1.Character(47)))){
            return c$743;
        }
        if(c$743.equals($$$cl1.Character(98))){
            return $$$cl1.Character(8);
        }
        if(c$743.equals($$$cl1.Character(102))){
            return $$$cl1.Character(12);
        }
        if(c$743.equals($$$cl1.Character(114))){
            return $$$cl1.Character(13);
        }
        if(c$743.equals($$$cl1.Character(110))){
            return $$$cl1.Character(10);
        }
        if(c$743.equals($$$cl1.Character(116))){
            return $$$cl1.Character(9);
        }
        if(c$743.equals($$$cl1.Character(117))){
            return parseStringUnicode$744();
        }
        throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected String escape sequence, got ",37),c$743.string,$$$cl1.String(" TERM ",6)]).string),'203:8-203:77','ceylon/json/parse.ceylon');
    };parseStringEscape$742.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringEscape']};};
    function parseStringUnicode$744(){
        var codePoint$745=parseHex$746().times((16).power((3))).plus(parseHex$746().times((16).power((2)))).plus(parseHex$746().times((16))).plus(parseHex$746());
        $prop$getCodePoint$745={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseStringUnicode','$at','codePoint']};}};
        $prop$getCodePoint$745.get=function(){return codePoint$745};
        return codePoint$745.character;
    };parseStringUnicode$744.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseStringUnicode']};};
    function parseHex$746(){
        var c$747=eatChar$734();
        $prop$getC$747={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','parseHex','$at','c']};}};
        $prop$getC$747.get=function(){return c$747};
        var codePoint$748=c$747.integer;
        $prop$getCodePoint$748={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','parseHex','$at','codePoint']};}};
        $prop$getCodePoint$748.get=function(){return codePoint$748};
        if(((codePoint$748.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$748.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()))){
            return codePoint$748.minus($$$cl1.Character(48).integer);
        }
        if(((codePoint$748.compare($$$cl1.Character(97).integer)!==$$$cl1.getSmaller())&&(codePoint$748.compare($$$cl1.Character(102).integer)!==$$$cl1.getLarger()))){
            return (10).plus(codePoint$748).minus($$$cl1.Character(97).integer);
        }
        if(((codePoint$748.compare($$$cl1.Character(65).integer)!==$$$cl1.getSmaller())&&(codePoint$748.compare($$$cl1.Character(70).integer)!==$$$cl1.getLarger()))){
            return (10).plus(codePoint$748).minus($$$cl1.Character(65).integer);
        }
        throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting hex number, got ",26),c$747.string.string]).string),'227:8-227:67','ceylon/json/parse.ceylon');
    };parseHex$746.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','parseHex']};};
    function eatSpaces$698(){
        while((index$694.compare(chars$693.size).equals($$$cl1.getSmaller())&&isSpace$749(char$704()))){
            (oldindex$750=index$694,index$694=oldindex$750.successor,oldindex$750);
            var oldindex$750;
        }
    };eatSpaces$698.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpaces']};};
    function eatSpacesUntil$697(c$751){
        eatSpaces$698();
        eat$739(c$751);
    };eatSpacesUntil$697.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eatSpacesUntil']};};
    function check$699(c$752){
        if((!char$704().equals(c$752))){
            return false;
        }
        (oldindex$753=index$694,index$694=oldindex$753.successor,oldindex$753);
        var oldindex$753;
        return true;
    };check$699.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','check']};};
    function eat$739(c$754){
        if((!char$704().equals(c$754))){
            throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected ",9),c$754.string.string,$$$cl1.String(" but got ",9),char$704().string.string]).string),'252:12-252:82','ceylon/json/parse.ceylon');
        }
        (oldindex$755=index$694,index$694=oldindex$755.successor,oldindex$755);
        var oldindex$755;
    };eat$739.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','eat']};};
    function char$704(){
        var c$756;
        if((c$756=chars$693.get(index$694))!==null){
            return c$756;
        }
        throw $$$cl1.wrapexc($$$cl1.Exception($$$cl1.String("Unexpected end of string",24)),'261:8-261:51','ceylon/json/parse.ceylon');
    };char$704.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','char']};};
    function eatChar$734(){
        var c$757=char$704();
        $prop$getC$757={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.json','Parser','$m','eatChar','$at','c']};}};
        $prop$getC$757.get=function(){return c$757};
        (oldindex$758=index$694,index$694=oldindex$758.successor,oldindex$758);
        var oldindex$758;
        return c$757;
    };eatChar$734.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],$cont:Parser,d:['ceylon.json','Parser','$m','eatChar']};};
    function isSpace$749(c$759){
        return (((c$759.equals($$$cl1.Character(32))||c$759.equals($$$cl1.Character(10)))||c$759.equals($$$cl1.Character(13)))||c$759.equals($$$cl1.Character(9)));
    };isSpace$749.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isSpace']};};
    function isDigit$712(c$760){
        var codePoint$761=c$760.integer;
        $prop$getCodePoint$761={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.json','Parser','$m','isDigit','$at','codePoint']};}};
        $prop$getCodePoint$761.get=function(){return codePoint$761};
        return ((codePoint$761.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$761.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()));
    };isDigit$712.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],$cont:Parser,d:['ceylon.json','Parser','$m','isDigit']};};
    return $$parser;
}
Parser.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],d:['ceylon.json','Parser']};};
function $init$Parser(){
    if (Parser.$$===undefined){
        $$$cl1.initTypeProto(Parser,'ceylon.json::Parser',$$$cl1.Basic);
    }
    return Parser;
}
exports.$init$Parser=$init$Parser;
$init$Parser();
function parse(str$762){
    return Parser(str$762).parseObject();
}
exports.parse=parse;
parse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Parses a JSON string into a JSON Object",39)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.$throws($$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.language','0.6').findPackage('ceylon.language'),$$$cl1.Exception),$$$cl1.String("If the JSON string is invalid",29)),$$$cl1.shared()];},d:['ceylon.json','parse']};};
function Printer(pretty$763, $$printer){
    $init$Printer();
    if ($$printer===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    if(pretty$763===undefined){pretty$763=false;}
    $$printer.pretty$763_=pretty$763;
    $$$cl1.defineAttr($$printer,'pretty$763',function(){return this.pretty$763_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:Printer,d:['ceylon.json','Printer','$at','pretty']};});
    var level$764=(0);
    $$$cl1.defineAttr($$printer,'level$764',function(){return level$764;},function(level$765){return level$764=level$765;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};});
    $$printer.$prop$getLevel$764={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Printer,$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$at','level']};}};
    $$printer.$prop$getLevel$764.get=function(){return level$764};
    function enter$766(){
        (oldlevel$767=level$764,level$764=oldlevel$767.successor,oldlevel$767);
        var oldlevel$767;
    };enter$766.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','enter']};};
    function leave$768(){
        (oldlevel$769=level$764,level$764=oldlevel$769.predecessor,oldlevel$769);
        var oldlevel$769;
    };leave$768.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','leave']};};
    function indent$770(){
        if(pretty$763){
            $$printer.print($$$cl1.String("\n",1));
            if(level$764.compare((0)).equals($$$cl1.getLarger())){
                var it$771 = $$$cl1.Range((0),level$764.minus((1)),{Element:{t:$$$cl1.Integer}}).iterator();
                var i$772;while ((i$772=it$771.next())!==$$$cl1.getFinished()){
                    $$printer.print($$$cl1.String(" ",1));
                }
            }
        }
    };indent$770.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,d:['ceylon.json','Printer','$m','indent']};};
    function printObject(o$773){
        $$printer.print($$$cl1.String("{",1));
        enter$766();
        var once$774=true;
        var setOnce$774=function(once$775){return once$774=once$775;};
        $prop$getOnce$774={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$m','printObject','$at','once']};}};
        $prop$getOnce$774.get=function(){return once$774};
        $prop$getOnce$774.set=setOnce$774;
        if (setOnce$774.$$metamodel$$===undefined)setOnce$774.$$metamodel$$=$prop$getOnce$774.$$metamodel$$;
        var it$776 = o$773.iterator();
        var entry$777;while ((entry$777=it$776.next())!==$$$cl1.getFinished()){
            if(once$774){
                once$774=false;
            }else {
                $$printer.print($$$cl1.String(",",1));
            }
            indent$770();
            $$printer.printString(entry$777.key);
            $$printer.print($$$cl1.String(":",1));
            if(pretty$763){
                $$printer.print($$$cl1.String(" ",1));
            }
            $$printer.printValue(entry$777.item);
        }
        leave$768();
        if((!once$774)){
            indent$770();
        }
        $$printer.print($$$cl1.String("}",1));
    }
    $$printer.printObject=printObject;
    printObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Object},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Object`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printObject']};};
    function printArray(o$778){
        $$printer.print($$$cl1.String("[",1));
        enter$766();
        var once$779=true;
        var setOnce$779=function(once$780){return once$779=once$780;};
        $prop$getOnce$779={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.json','Printer','$m','printArray','$at','once']};}};
        $prop$getOnce$779.get=function(){return once$779};
        $prop$getOnce$779.set=setOnce$779;
        if (setOnce$779.$$metamodel$$===undefined)setOnce$779.$$metamodel$$=$prop$getOnce$779.$$metamodel$$;
        var it$781 = o$778.iterator();
        var elem$782;while ((elem$782=it$781.next())!==$$$cl1.getFinished()){
            if(once$779){
                once$779=false;
            }else {
                $$printer.print($$$cl1.String(",",1));
            }
            indent$770();
            $$printer.printValue(elem$782);
        }
        leave$768();
        if((!once$779)){
            indent$770();
        }
        $$printer.print($$$cl1.String("]",1));
    }
    $$printer.printArray=printArray;
    printArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Array},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Array`",17)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printArray']};};
    function printString(s$783){
        $$printer.print($$$cl1.String("\"",1));
        var it$784 = s$783.iterator();
        var c$785;while ((c$785=it$784.next())!==$$$cl1.getFinished()){
            if(c$785.equals($$$cl1.Character(34))){
                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("\"",1)));
            }else {
                if(c$785.equals($$$cl1.Character(92))){
                    $$printer.print($$$cl1.String("\\\\",2));
                }else {
                    if(c$785.equals($$$cl1.Character(47))){
                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("/",1)));
                    }else {
                        if(c$785.equals((8).character)){
                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("b",1)));
                        }else {
                            if(c$785.equals((12).character)){
                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("f",1)));
                            }else {
                                if(c$785.equals((10).character)){
                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("n",1)));
                                }else {
                                    if(c$785.equals((13).character)){
                                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("r",1)));
                                    }else {
                                        if(c$785.equals((9).character)){
                                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("t",1)));
                                        }else {
                                            $$printer.print(c$785.string);
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
    }
    $$printer.printString=printString;
    printString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'s',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a `String`",17)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printString']};};
    function printNumber(n$786){
        $$printer.print(n$786.string);
    }
    $$printer.printNumber=printNumber;
    printNumber.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Number},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints an `Integer|Float`",25)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNumber']};};
    function printBoolean(v$787){
        $$printer.print(v$787.string);
    }
    $$printer.printBoolean=printBoolean;
    printBoolean.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'v',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a `Boolean`",18)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printBoolean']};};
    function printNull(){
        $$printer.print($$$cl1.String("null",4));
    }
    $$printer.printNull=printNull;
    printNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints `null`",13)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printNull']};};
    function printValue(val$788){
        
        var case$789=val$788;
        if ($$$cl1.isOfType(val$788,{t:$$$cl1.String})) {
            $$printer.printString(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:$$$cl1.Integer})) {
            $$printer.printNumber(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:$$$cl1.Float})) {
            $$printer.printNumber(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:$$$cl1.Boolean})) {
            $$printer.printBoolean(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:Object})) {
            $$printer.printObject(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:Array})) {
            $$printer.printArray(case$789);
        }else if ($$$cl1.isOfType(val$788,{t:NullInstance})) {
            $$printer.printNull();
        }
    }
    $$printer.printValue=printValue;
    printValue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$an:function(){return[];}}],$cont:Printer,$an:function(){return[$$$cl1.doc($$$cl1.String("Prints a JSON value",19)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.json','Printer','$m','printValue']};};
    return $$printer;
}
Printer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer",14)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.json','Printer']};};
exports.Printer=Printer;
function $init$Printer(){
    if (Printer.$$===undefined){
        $$$cl1.initTypeProto(Printer,'ceylon.json::Printer',$$$cl1.Basic);
    }
    return Printer;
}
exports.$init$Printer=$init$Printer;
$init$Printer();
function StringPrinter(pretty$790, $$stringPrinter){
    $init$StringPrinter();
    if ($$stringPrinter===undefined)$$stringPrinter=new StringPrinter.$$;
    if(pretty$790===undefined){pretty$790=false;}
    $$stringPrinter.pretty$790_=pretty$790;
    Printer(pretty$790,$$stringPrinter);
    $$$cl1.defineAttr($$stringPrinter,'pretty$790',function(){return this.pretty$790_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','pretty']};});
    var builder$791=$$$cl1.StringBuilder();
    $$$cl1.defineAttr($$stringPrinter,'builder$791',function(){return builder$791;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};});
    $$stringPrinter.$prop$getBuilder$791={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},$cont:StringPrinter,d:['ceylon.json','StringPrinter','$at','builder']};}};
    $$stringPrinter.$prop$getBuilder$791.get=function(){return builder$791};
    function print(string$792){
        builder$791.append(string$792);
    }
    $$stringPrinter.print=print;
    print.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Appends the given value to our `String` representation",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.json','StringPrinter','$m','print']};};
    $$$cl1.defineAttr($$stringPrinter,'string',function(){
        return builder$791.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:StringPrinter,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the printed JSON",24)),$$$cl1.shared(),$$$cl1.actual(),$$$cl1.$default()];},d:['ceylon.json','StringPrinter','$at','string']};});
    return $$stringPrinter;
}
StringPrinter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Printer},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A JSON Printer that prints to a `String`",40)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.json','StringPrinter']};};
exports.StringPrinter=StringPrinter;
function $init$StringPrinter(){
    if (StringPrinter.$$===undefined){
        $$$cl1.initTypeProto(StringPrinter,'ceylon.json::StringPrinter',Printer);
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
