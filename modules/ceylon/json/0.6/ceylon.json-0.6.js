(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6","ceylon.collection\/0.6"],"$mod-name":"ceylon.json","$mod-version":"0.6","ceylon.json":{"$pkg-shared":"1","StringPrinter":{"super":{"$pk":"ceylon.json","$nm":"Printer"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"shared":[],"doc":["A JSON Printer that prints to a `String`"],"by":["Stéphane Épardaud"]},"$m":{"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Appends the given value to our `String` representation"],"actual":[]},"$nm":"print"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"default":[],"doc":["Returns the printed JSON"],"actual":[]},"$nm":"string"},"builder":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"StringBuilder"},"$mt":"attr","$nm":"builder"}},"$nm":"StringPrinter"},"Parser":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"str"}],"$mt":"cls","$m":{"parseArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"mthd","$nm":"parseArray"},"check":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"check"},"char":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"char"},"isDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"isDigit"},"eatSpacesUntil":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"eatSpacesUntil"},"eatSpaces":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"eatSpaces"},"parseDigit":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"parseDigit"},"parseNumber":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$mt":"mthd","$nm":"parseNumber"},"eatChar":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"eatChar"},"parseHex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseHex"},"parseString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"mthd","$nm":"parseString"},"parseExponent":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"mthd","$nm":"parseExponent"},"parseNull":{"$t":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"mthd","$nm":"parseNull"},"parseStringUnicode":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringUnicode"},"eat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"eat"},"parseFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseFalse"},"parseDigits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$nm":"parseDigits"},"parseTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$nm":"parseTrue"},"parseStringEscape":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"mthd","$nm":"parseStringEscape"},"isSpace":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$pt":"v","$nm":"c"}]],"$mt":"mthd","$nm":"isSpace"},"parseObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"mthd","$an":{"shared":[]},"$nm":"parseObject"},"parseValue":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"mthd","$nm":"parseValue"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"chars":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Character"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$nm":"chars"}},"$nm":"Parser"},"Array":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Array"],"by":["Stéphane Épardaud"]},"$m":{"checkArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkArray"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets the value at the given index, or `null` if it does not exist"],"actual":[]},"$nm":"get"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"set"},"segment":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"checkString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkString"},"checkBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkBoolean"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a new value at the end of this array"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"checkInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkInteger"},"spanTo":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"checkFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkFloat"},"checkObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"throws":["InvalidTypeException"]},"$nm":"checkObject"},"span":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"integers":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Integer]]."],"doc":["Returns this array as a sequence of [[Integer]] elements."]},"$nm":"integers"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"list":{"$t":{"$md":"ceylon.collection","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"LinkedList"},"$mt":"attr","$nm":"list"},"strings":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[String]]."],"doc":["Returns this array as a sequence of [[String]] elements."]},"$nm":"strings"},"booleans":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Boolean]]."],"doc":["Returns this array as a sequence of [[Boolean]] elements."]},"$nm":"booleans"},"floats":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Float"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not a [[Float]]."],"doc":["Returns this array as a sequence of [[Float]] elements."]},"$nm":"floats"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the number of elements in this array"],"actual":[]},"$nm":"size"},"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"reversed":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"rest":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"objects":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Object"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Object]]."],"doc":["Returns this array as a sequence of [[Object]] elements."]},"$nm":"objects"},"arrays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.json","$nm":"Array"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"gttr","$an":{"shared":[],"throws":["InvalidTypeException","If one element in this array is not an [[Array]]."],"doc":["Returns this array as a sequence of [[Array]] elements."]},"$nm":"arrays"}},"$nm":"Array"},"Printer":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"pretty"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A JSON Printer"],"by":["Stéphane Épardaud"]},"$m":{"printValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a JSON value"]},"$nm":"printValue"},"printString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"s"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `String`"]},"$nm":"printString"},"printBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$nm":"v"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints a `Boolean`"]},"$nm":"printBoolean"},"printObject":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Object`"]},"$nm":"printObject"},"indent":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"indent"},"leave":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"leave"},"printArray":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"o"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Array`"]},"$nm":"printArray"},"enter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"enter"},"printNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints `null`"]},"$nm":"printNull"},"printNumber":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Number"},"$mt":"prm","$pt":"v","$nm":"n"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Prints an `Integer|Float`"]},"$nm":"printNumber"},"print":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"string"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Override to implement the printing part"]},"$nm":"print"}},"$at":{"level":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"level"}},"$nm":"Printer"},"InvalidTypeException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the failure of a type conversion.  \nAn instance is typically thrown as a result of trying to get \nand convert an [[Object]] member or [[Array]] element which cannot be \nconverted to the requested or implied type."]},"$nm":"InvalidTypeException"},"parse":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"str"}]],"$mt":"mthd","$an":{"shared":[],"throws":["Exception","If the JSON string is invalid"],"doc":["Parses a JSON string into a JSON Object"],"by":["Stéphane Épardaud"]},"$nm":"parse"},"Object":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"satisfies":[{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a JSON Object"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$mt":"prm","$pt":"v","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"getBoolean":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Boolean]]."],"doc":["Returns an [[Boolean]] value."]},"$nm":"getBoolean"},"getObjectOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Object"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Object]] nor [[NullInstance]]."],"doc":["Returns an [[Object]] value, unless the key does not exist, or the value is null."]},"$nm":"getObjectOrNull"},"getFloatOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Float]] nor [[NullInstance]]."],"doc":["Returns an [[Float]] value, unless the key does not exist, or the value is null."]},"$nm":"getFloatOrNull"},"getArray":{"$t":{"$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Array]]."],"doc":["Returns an [[Array]] value."]},"$nm":"getArray"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"clear"},"getArrayOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.json","$nm":"Array"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Array]] nor [[NullInstance]]."],"doc":["Returns an [[Array]] value, unless the key does not exist, or the value is null."]},"$nm":"getArrayOrNull"},"getIntegerOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Integer]] nor [[NullInstance]]."],"doc":["Returns an [[Integer]] value, unless the key does not exist, or the value is null."]},"$nm":"getIntegerOrNull"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Integer]]."],"doc":["Returns an [[Integer]] value."]},"$nm":"getInteger"},"getStringOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[String]] nor [[NullInstance]]."],"doc":["Returns an [[String]] value, unless the key does not exist, or the value is null."]},"$nm":"getStringOrNull"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"putAll"},"getString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[String]]."],"doc":["Returns an [[String]] value."]},"$nm":"getString"},"getFloat":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Float]]."],"doc":["Returns an [[Float]] value."]},"$nm":"getFloat"},"getBooleanOrNull":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key points to a type that is neither [[Boolean]] nor [[NullInstance]]."],"doc":["Returns an [[Boolean]] value, unless the key does not exist, or the value is null."]},"$nm":"getBooleanOrNull"},"getObject":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"throws":["InvalidTypeException","If the key dot not exist or points to a type that is not [[Object]]."],"doc":["Returns an [[Object]] value."]},"$nm":"getObject"}},"$at":{"clone":{"$t":{"$pk":"ceylon.json","$nm":"Object"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"contents":{"$t":{"$md":"ceylon.collection","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},{"$pk":"ceylon.json","$nm":"Object"},{"$pk":"ceylon.json","$nm":"Array"},{"$pk":"ceylon.json","$nm":"NullInstance"}]}],"$pk":"ceylon.collection","$nm":"HashMap"},"$mt":"attr","$nm":"contents"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a serialised JSON representation"],"actual":[]},"$nm":"string"},"pretty":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a pretty-printed serialised JSON representation"]},"$nm":"pretty"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"Object"},"nil":{"super":{"$pk":"ceylon.json","$nm":"NullInstance"},"$mt":"obj","$an":{"shared":[],"doc":["The singleton that represents the `null` value in JSON`."]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"nil"},"NullInstance":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.json","$nm":"nil"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Represents the type of the `null` value in JSON."]},"$nm":"NullInstance"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var $$$cc565=require('ceylon/collection/0.6/ceylon.collection-0.6');
function Array(values$566, $$array){
    $init$Array();
    if ($$array===undefined)$$array=new Array.$$;
    $$array.$$targs$$={Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$566===undefined){values$566=$$$cl1.getEmpty();}
    $$$cc565.MutableList($$array);
    var list$567=$$$cc565.LinkedList(values$566,{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$$cl1.defineAttr($$array,'list$567',function(){return list$567;});
    var iterator=function (){
        return list$567.iterator();
    };
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['iterator']};
    $$array.iterator=iterator;
    function add(val$568){
        list$567.add(val$568);
    }
    $$array.add=add;
    add.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['add']};//add.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{t:$$$cl1.Anything}};
    function get(index$569){
        return list$567.get(index$569);
    }
    $$array.get=get;
    get.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance},{t:$$$cl1.Null}]},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['get']};//get.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance},{t:$$$cl1.Null}]}};
    $$$cl1.defineAttr($$array,'size',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return list$567.size;
    });
    $$$cl1.defineAttr($$array,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var p$570=StringPrinter();
        p$570.printArray($$array);
        return p$570.string;
    });
    $$$cl1.defineAttr($$array,'pretty',function()/*anotaciones:ceylon.language::Shared,*/{
        var p$571=StringPrinter(true);
        p$571.printArray($$array);
        return p$571.string;
    });
    $$$cl1.defineAttr($$array,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Array(list$567);
    });
    $$$cl1.defineAttr($$array,'lastIndex',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return list$567.lastIndex;
    });
    $$$cl1.defineAttr($$array,'reversed',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Array(list$567.reversed);
    });
    $$$cl1.defineAttr($$array,'rest',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Array(list$567.rest);
    });
    function segment(from$572,length$573){
        return Array(list$567.segment(from$572,length$573));
    }
    $$array.segment=segment;
    segment.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['segment']};//segment.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Array}};
    function span(from$574,to$575){
        return Array(list$567.span(from$574,to$575));
    }
    $$array.span=span;
    span.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['span']};//span.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Array}};
    function spanFrom(from$576){
        return Array(list$567.spanFrom(from$576));
    }
    $$array.spanFrom=spanFrom;
    spanFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['spanFrom']};//spanFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Array}};
    function spanTo(to$577){
        return Array(list$567.spanTo(to$577));
    }
    $$array.spanTo=spanTo;
    spanTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['spanTo']};//spanTo.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Array}};
    function addAll(values$578){
        list$567.addAll(values$578);
    }
    $$array.addAll=addAll;
    addAll.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['addAll']};//addAll.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Element:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},Return:{t:$$$cl1.Anything}};
    function clear(){
        list$567.clear();
    }
    $$array.clear=clear;
    clear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['clear']};//clear.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function insert(index$579,val$580){
        list$567.insert(index$579,val$580);
    }
    $$array.insert=insert;
    insert.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['insert']};//insert.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{t:$$$cl1.Anything}};
    function remove(index$581){
        list$567.remove(index$581);
    }
    $$array.remove=remove;
    remove.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['remove']};//remove.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function removeElement(val$582){
        list$567.removeElement(val$582);
    }
    $$array.removeElement=removeElement;
    removeElement.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['removeElement']};//removeElement.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{t:$$$cl1.Anything}};
    function set(index$583,val$584){
        list$567.set(index$583,val$584);
    }
    $$array.set=set;
    set.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['set']};//set.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{t:$$$cl1.Anything}};
    $$$cl1.defineAttr($$array,'hash',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return list$567.hash;
    });
    function equals(that$585){
        var that$586;
        if($$$cl1.isOfType((that$586=that$585),{t:Array})){
            return ((that$586===$$array)||list$567.equals(that$586.list$567));
        }
        return false;
    }
    $$array.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function checkObject$587(val$588){
        var val$589;
        if($$$cl1.isOfType((val$589=val$588),{t:Object})){
            return val$589;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Object but got ",25),val$588.string]).string);
    };checkObject$587.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkObject']};//checkObject$587.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:Object}};
    $$$cl1.defineAttr($$array,'objects',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$590=list$567.iterator();
            var elem$591=$$$cl1.getFinished();
            var next$elem$591=function(){return elem$591=it$590.next();}
            next$elem$591();
            return function(){
                if(elem$591!==$$$cl1.getFinished()){
                    var elem$591$592=elem$591;
                    var tmpvar$593=checkObject$587(elem$591$592);
                    next$elem$591();
                    return tmpvar$593;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Object}});
    });
    function checkString$594(val$595){
        var val$596;
        if($$$cl1.isOfType((val$596=val$595),{t:$$$cl1.String})){
            return val$596;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting String but got ",25),val$595.string]).string);
    };checkString$594.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkString']};//checkString$594.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.String}};
    $$$cl1.defineAttr($$array,'strings',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$597=list$567.iterator();
            var elem$598=$$$cl1.getFinished();
            var next$elem$598=function(){return elem$598=it$597.next();}
            next$elem$598();
            return function(){
                if(elem$598!==$$$cl1.getFinished()){
                    var elem$598$599=elem$598;
                    var tmpvar$600=checkString$594(elem$598$599);
                    next$elem$598();
                    return tmpvar$600;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}});
    });
    function checkInteger$601(val$602){
        var val$603;
        if($$$cl1.isOfType((val$603=val$602),{t:$$$cl1.Integer})){
            return val$603;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Integer but got ",26),val$602.string]).string);
    };checkInteger$601.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkInteger']};//checkInteger$601.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Integer}};
    $$$cl1.defineAttr($$array,'integers',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$604=list$567.iterator();
            var elem$605=$$$cl1.getFinished();
            var next$elem$605=function(){return elem$605=it$604.next();}
            next$elem$605();
            return function(){
                if(elem$605!==$$$cl1.getFinished()){
                    var elem$605$606=elem$605;
                    var tmpvar$607=checkInteger$601(elem$605$606);
                    next$elem$605();
                    return tmpvar$607;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Integer}});
    });
    function checkFloat$608(val$609){
        var val$610;
        if($$$cl1.isOfType((val$610=val$609),{t:$$$cl1.Float})){
            return val$610;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Float but got ",24),val$609.string]).string);
    };checkFloat$608.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkFloat']};//checkFloat$608.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Float}};
    $$$cl1.defineAttr($$array,'floats',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$611=list$567.iterator();
            var elem$612=$$$cl1.getFinished();
            var next$elem$612=function(){return elem$612=it$611.next();}
            next$elem$612();
            return function(){
                if(elem$612!==$$$cl1.getFinished()){
                    var elem$612$613=elem$612;
                    var tmpvar$614=checkFloat$608(elem$612$613);
                    next$elem$612();
                    return tmpvar$614;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Float}});
    });
    function checkBoolean$615(val$616){
        var val$617;
        if($$$cl1.isOfType((val$617=val$616),{t:$$$cl1.Boolean})){
            return val$617;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Boolean but got ",26),val$616.string]).string);
    };checkBoolean$615.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkBoolean']};//checkBoolean$615.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$array,'booleans',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$618=list$567.iterator();
            var elem$619=$$$cl1.getFinished();
            var next$elem$619=function(){return elem$619=it$618.next();}
            next$elem$619();
            return function(){
                if(elem$619!==$$$cl1.getFinished()){
                    var elem$619$620=elem$619;
                    var tmpvar$621=checkBoolean$615(elem$619$620);
                    next$elem$619();
                    return tmpvar$621;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Boolean}});
    });
    function checkArray$622(val$623){
        var val$624;
        if($$$cl1.isOfType((val$624=val$623),{t:Array})){
            return val$624;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting Array but got ",24),val$623.string]).string);
    };checkArray$622.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'val',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}))];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']['$m']['checkArray']};//checkArray$622.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:Array}};
    $$$cl1.defineAttr($$array,'arrays',function()/*anotaciones:ceylon.language::ThrownException,ceylon.language::Shared,*/{
        return $$$cl1.Comprehension(function(){
            var it$625=list$567.iterator();
            var elem$626=$$$cl1.getFinished();
            var next$elem$626=function(){return elem$626=it$625.next();}
            next$elem$626();
            return function(){
                if(elem$626!==$$$cl1.getFinished()){
                    var elem$626$627=elem$626;
                    var tmpvar$628=checkArray$622(elem$626$627);
                    next$elem$626();
                    return tmpvar$628;
                }
                return $$$cl1.getFinished();
            }
        },{Absent:{t:$$$cl1.Null},Element:{t:Array}});
    });
    return $$array;
}
Array.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc565.MutableList,a:{Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Array']};
exports.Array=Array;
function $init$Array(){
    if (Array.$$===undefined){
        $$$cl1.initTypeProto(Array,'ceylon.json::Array',$$$cl1.Basic,$$$cc565.$init$MutableList());
    }
    return Array;
}
exports.$init$Array=$init$Array;
$init$Array();
function InvalidTypeException(message$629, $$invalidTypeException){
    $init$InvalidTypeException();
    if ($$invalidTypeException===undefined)$$invalidTypeException=new InvalidTypeException.$$;
    $$$cl1.Exception(message$629,undefined,$$invalidTypeException);
    return $$invalidTypeException;
}
InvalidTypeException.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['InvalidTypeException']};
exports.InvalidTypeException=InvalidTypeException;
function $init$InvalidTypeException(){
    if (InvalidTypeException.$$===undefined){
        $$$cl1.initTypeProto(InvalidTypeException,'ceylon.json::InvalidTypeException',$$$cl1.Exception);
    }
    return InvalidTypeException;
}
exports.$init$InvalidTypeException=$init$InvalidTypeException;
$init$InvalidTypeException();
function NullInstance($$nullInstance){
    $init$NullInstance();
    if ($$nullInstance===undefined)$$nullInstance=new NullInstance.$$;
    return $$nullInstance;
}
NullInstance.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['NullInstance']};
exports.NullInstance=NullInstance;
function $init$NullInstance(){
    if (NullInstance.$$===undefined){
        $$$cl1.initTypeProto(NullInstance,'ceylon.json::NullInstance',$$$cl1.Basic);
    }
    return NullInstance;
}
exports.$init$NullInstance=$init$NullInstance;
$init$NullInstance();
function nil$630(){
    var $$nil=new nil$630.$$;
    NullInstance($$nil);
    var string=$$$cl1.String("null",4);
    $$$cl1.defineAttr($$nil,'string',function(){return string;});
    return $$nil;
}
function $init$nil$630(){
    if (nil$630.$$===undefined){
        $$$cl1.initTypeProto(nil$630,'ceylon.json::nil',NullInstance);
    }
    return nil$630;
}
exports.$init$nil$630=$init$nil$630;
$init$nil$630();
var nil$631=nil$630();
var getNil=function(){
    return nil$631;
}
exports.getNil=getNil;
function Object(values$632, $$object){
    $init$Object();
    if ($$object===undefined)$$object=new Object.$$;
    $$object.$$targs$$={Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    if(values$632===undefined){values$632=$$$cl1.getEmpty();}
    $$$cc565.MutableMap($$object);
    $$$cl1.add_type_arg($$object,'Key',{t:$$$cl1.String});
    var contents$633=$$$cc565.HashMap(values$632,{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}});
    $$$cl1.defineAttr($$object,'contents$633',function(){return contents$633;});
    $$$cl1.defineAttr($$object,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var p$634=StringPrinter();
        p$634.printObject($$object);
        return p$634.string;
    });
    $$$cl1.defineAttr($$object,'pretty',function()/*anotaciones:ceylon.language::Shared,*/{
        var p$635=StringPrinter(true);
        p$635.printObject($$object);
        return p$635.string;
    });
    function clear(){
        contents$633.clear();
    }
    $$object.clear=clear;
    clear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['clear']};//clear.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    $$$cl1.defineAttr($$object,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Object(contents$633);
    });
    function get(key$636){
        return contents$633.get(key$636);
    }
    $$object.get=get;
    get.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['get']};//get.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    function iterator(){
        return contents$633.iterator();
    }
    $$object.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}}};
    function put(key$637,item$638){
        return contents$633.put(key$637,item$638);
    }
    $$object.put=put;
    put.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'item',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['put']};//put.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    function putAll(entries$639){
        contents$633.putAll(entries$639);
    }
    $$object.putAll=putAll;
    putAll.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['putAll']};//putAll.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}},Element:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}}}}},Return:{t:$$$cl1.Anything}};
    function remove(key$640){
        return contents$633.remove(key$640);
    }
    $$object.remove=remove;
    remove.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['remove']};//remove.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    $$$cl1.defineAttr($$object,'size',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return contents$633.size;
    });
    $$$cl1.defineAttr($$object,'hash',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return contents$633.hash;
    });
    function equals(that$641){
        var that$642;
        if($$$cl1.isOfType((that$642=that$641),{t:Object})){
            return (($$object===that$642)||contents$633.equals(that$642.contents$633));
        }
        return false;
    }
    $$object.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function getInteger(key$643){
        var val$644=$$object.get(key$643);
        var val$645;
        if($$$cl1.isOfType((val$645=val$644),{t:$$$cl1.Integer})){
            return val$645;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$646=val$644,opt$646!==null?opt$646:$$$cl1.String("null",4)).string]).string);
        var opt$646;
    }
    $$object.getInteger=getInteger;
    getInteger.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[Integer]].",69)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getInteger']};//getInteger.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Integer}};
    function getFloat(key$647){
        var val$648=$$object.get(key$647);
        var val$649;
        if($$$cl1.isOfType((val$649=val$648),{t:$$$cl1.Float})){
            return val$649;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$650=val$648,opt$650!==null?opt$650:$$$cl1.String("null",4)).string]).string);
        var opt$650;
    }
    $$object.getFloat=getFloat;
    getFloat.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[Float]].",67)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getFloat']};//getFloat.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Float}};
    function getBoolean(key$651){
        var val$652=$$object.get(key$651);
        var val$653;
        if($$$cl1.isOfType((val$653=val$652),{t:$$$cl1.Boolean})){
            return val$653;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$654=val$652,opt$654!==null?opt$654:$$$cl1.String("null",4)).string]).string);
        var opt$654;
    }
    $$object.getBoolean=getBoolean;
    getBoolean.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[Boolean]].",69)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getBoolean']};//getBoolean.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Boolean}};
    function getString(key$655){
        var val$656=$$object.get(key$655);
        var val$657;
        if($$$cl1.isOfType((val$657=val$656),{t:$$$cl1.String})){
            return val$657;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$658=val$656,opt$658!==null?opt$658:$$$cl1.String("null",4)).string]).string);
        var opt$658;
    }
    $$object.getString=getString;
    getString.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[String]].",68)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getString']};//getString.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}};
    function getObject(key$659){
        var val$660=$$object.get(key$659);
        var val$661;
        if($$$cl1.isOfType((val$661=val$660),{t:Object})){
            return val$661;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$662=val$660,opt$662!==null?opt$662:$$$cl1.String("null",4)).string]).string);
        var opt$662;
    }
    $$object.getObject=getObject;
    getObject.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[Object]].",68)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getObject']};//getObject.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Object}};
    function getArray(key$663){
        var val$664=$$object.get(key$663);
        var val$665;
        if($$$cl1.isOfType((val$665=val$664),{t:Array})){
            return val$665;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$666=val$664,opt$666!==null?opt$666:$$$cl1.String("null",4)).string]).string);
        var opt$666;
    }
    $$object.getArray=getArray;
    getArray.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key dot not exist or points to a type that is not [[Array]].",67)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getArray']};//getArray.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Array}};
    function getIntegerOrNull(key$667){
        var val$668=$$object.get(key$667);
        var val$669;
        if($$$cl1.isOfType((val$669=val$668),{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Null}]})){
            return val$669;
        }
        var val$670;
        if($$$cl1.isOfType((val$670=val$668),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Integer but got: ",30),(opt$671=val$668,opt$671!==null?opt$671:$$$cl1.String("null",4)).string]).string);
        var opt$671;
    }
    $$object.getIntegerOrNull=getIntegerOrNull;
    getIntegerOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[Integer]] nor [[NullInstance]].",77)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getIntegerOrNull']};//getIntegerOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}};
    function getFloatOrNull(key$672){
        var val$673=$$object.get(key$672);
        var val$674;
        if($$$cl1.isOfType((val$674=val$673),{ t:'u', l:[{t:$$$cl1.Float},{t:$$$cl1.Null}]})){
            return val$674;
        }
        var val$675;
        if($$$cl1.isOfType((val$675=val$673),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Float but got: ",27),(opt$676=val$673,opt$676!==null?opt$676:$$$cl1.String("null",4)).string]).string);
        var opt$676;
    }
    $$object.getFloatOrNull=getFloatOrNull;
    getFloatOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[Float]] nor [[NullInstance]].",75)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getFloatOrNull']};//getFloatOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Float}]}};
    function getBooleanOrNull(key$677){
        var val$678=$$object.get(key$677);
        var val$679;
        if($$$cl1.isOfType((val$679=val$678),{ t:'u', l:[{t:$$$cl1.Boolean},{t:$$$cl1.Null}]})){
            return val$679;
        }
        var val$680;
        if($$$cl1.isOfType((val$680=val$678),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a Boolean but got: ",29),(opt$681=val$678,opt$681!==null?opt$681:$$$cl1.String("null",4)).string]).string);
        var opt$681;
    }
    $$object.getBooleanOrNull=getBooleanOrNull;
    getBooleanOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[Boolean]] nor [[NullInstance]].",77)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getBooleanOrNull']};//getBooleanOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Boolean}]}};
    function getStringOrNull(key$682){
        var val$683=$$object.get(key$682);
        var val$684;
        if($$$cl1.isOfType((val$684=val$683),{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Null}]})){
            return val$684;
        }
        var val$685;
        if($$$cl1.isOfType((val$685=val$683),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting a String but got: ",28),(opt$686=val$683,opt$686!==null?opt$686:$$$cl1.String("null",4)).string]).string);
        var opt$686;
    }
    $$object.getStringOrNull=getStringOrNull;
    getStringOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[String]] nor [[NullInstance]].",76)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getStringOrNull']};//getStringOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}};
    function getObjectOrNull(key$687){
        var val$688=$$object.get(key$687);
        var val$689;
        if($$$cl1.isOfType((val$689=val$688),{ t:'u', l:[{t:Object},{t:$$$cl1.Null}]})){
            return val$689;
        }
        var val$690;
        if($$$cl1.isOfType((val$690=val$688),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Object but got: ",29),(opt$691=val$688,opt$691!==null?opt$691:$$$cl1.String("null",4)).string]).string);
        var opt$691;
    }
    $$object.getObjectOrNull=getObjectOrNull;
    getObjectOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Object}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[Object]] nor [[NullInstance]].",76)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getObjectOrNull']};//getObjectOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Object}]}};
    function getArrayOrNull(key$692){
        var val$693=$$object.get(key$692);
        var val$694;
        if($$$cl1.isOfType((val$694=val$693),{ t:'u', l:[{t:Array},{t:$$$cl1.Null}]})){
            return val$694;
        }
        var val$695;
        if($$$cl1.isOfType((val$695=val$693),{t:NullInstance})){
            return null;
        }
        throw InvalidTypeException($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting an Array but got: ",28),(opt$696=val$693,opt$696!==null?opt$696:$$$cl1.String("null",4)).string]).string);
        var opt$696;
    }
    $$object.getArrayOrNull=getArrayOrNull;
    getArrayOrNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Array}]},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.$throws($$$cl1.$JsCallable(InvalidTypeException,[],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:InvalidTypeException}}),$$$cl1.String("If the key points to a type that is neither [[Array]] nor [[NullInstance]].",75)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']['$m']['getArrayOrNull']};//getArrayOrNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:Array}]}};
    return $$object;
}
Object.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cc565.MutableMap,a:{Key:{t:$$$cl1.String},Item:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Object']};
exports.Object=Object;
function $init$Object(){
    if (Object.$$===undefined){
        $$$cl1.initTypeProto(Object,'ceylon.json::Object',$$$cl1.Basic,$$$cc565.$init$MutableMap());
    }
    return Object;
}
exports.$init$Object=$init$Object;
$init$Object();
function Parser(str$697, $$parser){
    $init$Parser();
    if ($$parser===undefined)$$parser=new Parser.$$;
    var chars$698=str$697.characters;
    $$$cl1.defineAttr($$parser,'chars$698',function(){return chars$698;});
    var index$699=(0);
    $$$cl1.defineAttr($$parser,'index$699',function(){return index$699;},function(index$700){return index$699=index$700;});
    function parseObject(){
        var obj$701=(Object(undefined));
        eatSpacesUntil$702($$$cl1.Character(123));
        eatSpaces$703();
        if((!check$704($$$cl1.Character(125)))){
            while(true){
                var key$705=parseString$706();
                eatSpacesUntil$702($$$cl1.Character(58));
                var val$707=parseValue$708();
                obj$701.put(key$705,val$707);
                eatSpaces$703();
                if(check$704($$$cl1.Character(125))){
                    break;
                }
                if((!check$704($$$cl1.Character(44)))){
                    throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \'}\' or \',\' but got ",28),char$709().string.string]).string);
                }
            }
        }
        return obj$701;
    }
    $$parser.parseObject=parseObject;
    parseObject.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Object},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseObject']};//parseObject.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:Object}};
    function parseArray$710(){
        var arr$711=(Array(undefined));
        eatSpacesUntil$702($$$cl1.Character(91));
        eatSpaces$703();
        if((!check$704($$$cl1.Character(93)))){
            while(true){
                var val$712=parseValue$708();
                arr$711.add(val$712);
                eatSpaces$703();
                if(check$704($$$cl1.Character(93))){
                    break;
                }
                if((!check$704($$$cl1.Character(44)))){
                    throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected \']\' or \',\' but got ",28),char$709().string.string]).string);
                }
            }
        }
        return arr$711;
    };parseArray$710.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Array},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseArray']};//parseArray$710.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:Array}};
    function parseValue$708(){
        eatSpaces$703();
        var c$713=char$709();
        if(c$713.equals($$$cl1.Character(123))){
            return $$parser.parseObject();
        }
        if(c$713.equals($$$cl1.Character(91))){
            return parseArray$710();
        }
        if(c$713.equals($$$cl1.Character(34))){
            return parseString$706();
        }
        if(c$713.equals($$$cl1.Character(116))){
            return parseTrue$714();
        }
        if(c$713.equals($$$cl1.Character(102))){
            return parseFalse$715();
        }
        if(c$713.equals($$$cl1.Character(110))){
            return parseNull$716();
        }
        if((isDigit$717(c$713)||c$713.equals($$$cl1.Character(45)))){
            return parseNumber$718();
        }
        throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Invalid value: expecting object, array, string, number, true, false, null but got ",82),c$713.string.string]).string);
    };parseValue$708.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseValue']};//parseValue$708.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}};
    function parseNumber$718(){
        eatSpaces$703();
        var negative$719=check$704($$$cl1.Character(45));
        var wholePart$720=parseDigits$721();
        if(check$704($$$cl1.Character(46))){
            var start$722=index$699;
            var fractionPart$723=parseDigits$721();
            var digits$724=index$699.minus(start$722);
            var float$725=wholePart$720.$float.plus(fractionPart$723.$float.divided((10).power(digits$724).$float));
            var signedFloat$726=(opt$727=(negative$719?float$725.negativeValue:null),opt$727!==null?opt$727:float$725);
            var opt$727;
            var exp$728=parseExponent$729();
            var exp$730;
            if((exp$730=exp$728)!==null){
                return signedFloat$726.times((10).$float.power(exp$730.$float));
            }
            return signedFloat$726;
        }
        var signedInteger$731=(opt$732=(negative$719?wholePart$720.negativeValue:null),opt$732!==null?opt$732:wholePart$720);
        var opt$732;
        var exp$733=parseExponent$729();
        var exp$734;
        if((exp$734=exp$733)!==null){
            return signedInteger$731.$float.times((10).$float.power(exp$734.$float));
        }
        return signedInteger$731;
    };parseNumber$718.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseNumber']};//parseNumber$718.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$cl1.Float}]}};
    function parseExponent$729(){
        if((check$704($$$cl1.Character(101))||check$704($$$cl1.Character(69)))){
            var negativeExponent$735;
            if(check$704($$$cl1.Character(45))){
                negativeExponent$735=true;
            }else {
                if(check$704($$$cl1.Character(43))){
                    negativeExponent$735=false;
                }else {
                    negativeExponent$735=false;
                }
            }
            var exponentPart$736=parseDigits$721();
            return (opt$737=(negativeExponent$735?(-exponentPart$736):null),opt$737!==null?opt$737:exponentPart$736);
            var opt$737;
        }
        return null;
    };parseExponent$729.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseExponent']};//parseExponent$729.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]}};
    function parseDigits$721(){
        var c$738=eatChar$739();
        if((!isDigit$717(c$738))){
            throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected digit, got: ",21),c$738.string.string]).string);
        }
        var digits$740=parseDigit$741(c$738);
        var setDigits$740=function(digits$742){return digits$740=digits$742;};
        while(isDigit$717(char$709())){
            (digits$740=digits$740.times((10)));
            (digits$740=digits$740.plus(parseDigit$741(eatChar$739())));
        }
        return digits$740;
    };parseDigits$721.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseDigits']};//parseDigits$721.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Integer}};
    function parseDigit$741(c$743){
        return c$743.integer.minus($$$cl1.Character(48).integer);
    };parseDigit$741.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseDigit']};//parseDigit$741.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Integer}};
    function parseTrue$714(){
        eatSpacesUntil$702($$$cl1.Character(116));
        eat$744($$$cl1.Character(114));
        eat$744($$$cl1.Character(117));
        eat$744($$$cl1.Character(101));
        return true;
    };parseTrue$714.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseTrue']};//parseTrue$714.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Boolean}};
    function parseFalse$715(){
        eatSpacesUntil$702($$$cl1.Character(102));
        eat$744($$$cl1.Character(97));
        eat$744($$$cl1.Character(108));
        eat$744($$$cl1.Character(115));
        eat$744($$$cl1.Character(101));
        return false;
    };parseFalse$715.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseFalse']};//parseFalse$715.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Boolean}};
    function parseNull$716(){
        eatSpacesUntil$702($$$cl1.Character(110));
        eat$744($$$cl1.Character(117));
        eat$744($$$cl1.Character(108));
        eat$744($$$cl1.Character(108));
        return getNil();
    };parseNull$716.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:NullInstance},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseNull']};//parseNull$716.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:NullInstance}};
    function parseString$706(){
        eatSpacesUntil$702($$$cl1.Character(34));
        var buf$745=$$$cl1.StringBuilder();
        while((!check$704($$$cl1.Character(34)))){
            var c$746=eatChar$739();
            if(c$746.equals($$$cl1.Character(92))){
                buf$745.append(parseStringEscape$747().string);
            }else {
                buf$745.append(c$746.string);
            }
        }
        return buf$745.string;
    };parseString$706.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseString']};//parseString$706.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.String}};
    function parseStringEscape$747(){
        var c$748=eatChar$739();
        if(((c$748.equals($$$cl1.Character(34))||c$748.equals($$$cl1.Character(92)))||c$748.equals($$$cl1.Character(47)))){
            return c$748;
        }
        if(c$748.equals($$$cl1.Character(98))){
            return $$$cl1.Character(8);
        }
        if(c$748.equals($$$cl1.Character(102))){
            return $$$cl1.Character(12);
        }
        if(c$748.equals($$$cl1.Character(114))){
            return $$$cl1.Character(13);
        }
        if(c$748.equals($$$cl1.Character(110))){
            return $$$cl1.Character(10);
        }
        if(c$748.equals($$$cl1.Character(116))){
            return $$$cl1.Character(9);
        }
        if(c$748.equals($$$cl1.Character(117))){
            return parseStringUnicode$749();
        }
        throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected String escape sequence, got ",37),c$748.string,$$$cl1.String(" TERM ",6)]).string);
    };parseStringEscape$747.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseStringEscape']};//parseStringEscape$747.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Character}};
    function parseStringUnicode$749(){
        var codePoint$750=parseHex$751().times((16).power((3))).plus(parseHex$751().times((16).power((2)))).plus(parseHex$751().times((16))).plus(parseHex$751());
        return codePoint$750.character;
    };parseStringUnicode$749.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseStringUnicode']};//parseStringUnicode$749.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Character}};
    function parseHex$751(){
        var c$752=eatChar$739();
        var codePoint$753=c$752.integer;
        if(((codePoint$753.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$753.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()))){
            return codePoint$753.minus($$$cl1.Character(48).integer);
        }
        if(((codePoint$753.compare($$$cl1.Character(97).integer)!==$$$cl1.getSmaller())&&(codePoint$753.compare($$$cl1.Character(102).integer)!==$$$cl1.getLarger()))){
            return (10).plus(codePoint$753).minus($$$cl1.Character(97).integer);
        }
        if(((codePoint$753.compare($$$cl1.Character(65).integer)!==$$$cl1.getSmaller())&&(codePoint$753.compare($$$cl1.Character(70).integer)!==$$$cl1.getLarger()))){
            return (10).plus(codePoint$753).minus($$$cl1.Character(65).integer);
        }
        throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expecting hex number, got ",26),c$752.string.string]).string);
    };parseHex$751.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['parseHex']};//parseHex$751.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Integer}};
    function eatSpaces$703(){
        while((index$699.compare(chars$698.size).equals($$$cl1.getSmaller())&&isSpace$754(char$709()))){
            (oldindex$755=index$699,index$699=oldindex$755.successor,oldindex$755);
            var oldindex$755;
        }
    };eatSpaces$703.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['eatSpaces']};//eatSpaces$703.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function eatSpacesUntil$702(c$756){
        eatSpaces$703();
        eat$744(c$756);
    };eatSpacesUntil$702.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['eatSpacesUntil']};//eatSpacesUntil$702.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Anything}};
    function check$704(c$757){
        if((!char$709().equals(c$757))){
            return false;
        }
        (oldindex$758=index$699,index$699=oldindex$758.successor,oldindex$758);
        var oldindex$758;
        return true;
    };check$704.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['check']};//check$704.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Boolean}};
    function eat$744(c$759){
        if((!char$709().equals(c$759))){
            throw $$$cl1.Exception($$$cl1.StringBuilder().appendAll([$$$cl1.String("Expected ",9),c$759.string.string,$$$cl1.String(" but got ",9),char$709().string.string]).string);
        }
        (oldindex$760=index$699,index$699=oldindex$760.successor,oldindex$760);
        var oldindex$760;
    };eat$744.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['eat']};//eat$744.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Anything}};
    function char$709(){
        var c$761;
        if((c$761=chars$698.get(index$699))!==null){
            return c$761;
        }
        throw $$$cl1.Exception($$$cl1.String("Unexpected end of string",24));
    };char$709.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['char']};//char$709.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Character}};
    function eatChar$739(){
        var c$762=char$709();
        (oldindex$763=index$699,index$699=oldindex$763.successor,oldindex$763);
        var oldindex$763;
        return c$762;
    };eatChar$739.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['eatChar']};//eatChar$739.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Character}};
    function isSpace$754(c$764){
        return (((c$764.equals($$$cl1.Character(32))||c$764.equals($$$cl1.Character(10)))||c$764.equals($$$cl1.Character(13)))||c$764.equals($$$cl1.Character(9)));
    };isSpace$754.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['isSpace']};//isSpace$754.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Boolean}};
    function isDigit$717(c$765){
        var codePoint$766=c$765.integer;
        return ((codePoint$766.compare($$$cl1.Character(48).integer)!==$$$cl1.getSmaller())&&(codePoint$766.compare($$$cl1.Character(57).integer)!==$$$cl1.getLarger()));
    };isDigit$717.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'c',$mt:'prm',$t:{t:$$$cl1.Character}}],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']['$m']['isDigit']};//isDigit$717.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Character},Element:{t:$$$cl1.Character}}},Return:{t:$$$cl1.Boolean}};
    return $$parser;
}
Parser.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Parser']};
function $init$Parser(){
    if (Parser.$$===undefined){
        $$$cl1.initTypeProto(Parser,'ceylon.json::Parser',$$$cl1.Basic);
    }
    return Parser;
}
exports.$init$Parser=$init$Parser;
$init$Parser();
function parse(str$767){
    return Parser(str$767).parseObject();
}
exports.parse=parse;
parse.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Object},$ps:[{$nm:'str',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.$throws($$$cl1.$JsCallable($$$cl1.Exception,[],{Arguments:{ t:'u', l:[{t:$$$cl1.Empty},{t:$$$cl1.Tuple,a:{Rest:{ t:'u', l:[{t:$$$cl1.Empty},{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]}}}]},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String},{t:$$$cl1.Exception}]}}}]},Return:{t:$$$cl1.Exception}}),$$$cl1.String("If the JSON string is invalid",29)),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['parse']};//parse.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:Object}};
function Printer(pretty$768, $$printer){
    $init$Printer();
    if ($$printer===undefined)$$printer=new Printer.$$;
    if(pretty$768===undefined){pretty$768=false;}
    $$printer.pretty$768=pretty$768;
    var level$769=(0);
    $$$cl1.defineAttr($$printer,'level$769',function(){return level$769;},function(level$770){return level$769=level$770;});
    function enter$771(){
        (oldlevel$772=level$769,level$769=oldlevel$772.successor,oldlevel$772);
        var oldlevel$772;
    };enter$771.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['enter']};//enter$771.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function leave$773(){
        (oldlevel$774=level$769,level$769=oldlevel$774.predecessor,oldlevel$774);
        var oldlevel$774;
    };leave$773.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['leave']};//leave$773.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function indent$775(){
        if(pretty$768){
            $$printer.print($$$cl1.String("\n",1));
            if(level$769.compare((0)).equals($$$cl1.getLarger())){
                var it$776 = $$$cl1.Range((0),level$769.minus((1)),{Element:{t:$$$cl1.Integer}}).iterator();
                var i$777;while ((i$777=it$776.next())!==$$$cl1.getFinished()){
                    $$printer.print($$$cl1.String(" ",1));
                }
            }
        }
    };indent$775.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['indent']};//indent$775.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function printObject(o$778){
        $$printer.print($$$cl1.String("{",1));
        enter$771();
        var once$779=true;
        var setOnce$779=function(once$780){return once$779=once$780;};
        var it$781 = o$778.iterator();
        var entry$782;while ((entry$782=it$781.next())!==$$$cl1.getFinished()){
            if(once$779){
                once$779=false;
            }else {
                $$printer.print($$$cl1.String(",",1));
            }
            indent$775();
            $$printer.printString(entry$782.key);
            $$printer.print($$$cl1.String(":",1));
            if(pretty$768){
                $$printer.print($$$cl1.String(" ",1));
            }
            $$printer.printValue(entry$782.item);
        }
        leave$773();
        if((!once$779)){
            indent$775();
        }
        $$printer.print($$$cl1.String("}",1));
    }
    $$printer.printObject=printObject;
    printObject.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printObject']};//printObject.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Object},Element:{t:Object}}},Return:{t:$$$cl1.Anything}};
    function printArray(o$783){
        $$printer.print($$$cl1.String("[",1));
        enter$771();
        var once$784=true;
        var setOnce$784=function(once$785){return once$784=once$785;};
        var it$786 = o$783.iterator();
        var elem$787;while ((elem$787=it$786.next())!==$$$cl1.getFinished()){
            if(once$784){
                once$784=false;
            }else {
                $$printer.print($$$cl1.String(",",1));
            }
            indent$775();
            $$printer.printValue(elem$787);
        }
        leave$773();
        if((!once$784)){
            indent$775();
        }
        $$printer.print($$$cl1.String("]",1));
    }
    $$printer.printArray=printArray;
    printArray.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'o',$mt:'prm',$t:{t:Array}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printArray']};//printArray.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Array},Element:{t:Array}}},Return:{t:$$$cl1.Anything}};
    function printString(s$788){
        $$printer.print($$$cl1.String("\"",1));
        var it$789 = s$788.iterator();
        var c$790;while ((c$790=it$789.next())!==$$$cl1.getFinished()){
            if(c$790.equals($$$cl1.Character(34))){
                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("\"",1)));
            }else {
                if(c$790.equals($$$cl1.Character(92))){
                    $$printer.print($$$cl1.String("\\\\",2));
                }else {
                    if(c$790.equals($$$cl1.Character(47))){
                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("/",1)));
                    }else {
                        if(c$790.equals((8).character)){
                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("b",1)));
                        }else {
                            if(c$790.equals((12).character)){
                                $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("f",1)));
                            }else {
                                if(c$790.equals((10).character)){
                                    $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("n",1)));
                                }else {
                                    if(c$790.equals((13).character)){
                                        $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("r",1)));
                                    }else {
                                        if(c$790.equals((9).character)){
                                            $$printer.print($$$cl1.String("\\",1).plus($$$cl1.String("t",1)));
                                        }else {
                                            $$printer.print(c$790.string);
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
    printString.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'s',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printString']};//printString.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    function printNumber(n$791){
        $$printer.print(n$791.string);
    }
    $$printer.printNumber=printNumber;
    printNumber.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'n',$mt:'prm',$t:{t:$$$cl1.Number}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printNumber']};//printNumber.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Number},Element:{t:$$$cl1.Number}}},Return:{t:$$$cl1.Anything}};
    function printBoolean(v$792){
        $$printer.print(v$792.string);
    }
    $$printer.printBoolean=printBoolean;
    printBoolean.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'v',$mt:'prm',$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printBoolean']};//printBoolean.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Anything}};
    function printNull(){
        $$printer.print($$$cl1.String("null",4));
    }
    $$printer.printNull=printNull;
    printNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printNull']};//printNull.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function printValue(val$793){
        
        var case$794=val$793;
        if ($$$cl1.isOfType(val$793,{t:$$$cl1.String})) {
            $$printer.printString(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:$$$cl1.Integer})) {
            $$printer.printNumber(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:$$$cl1.Float})) {
            $$printer.printNumber(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:$$$cl1.Boolean})) {
            $$printer.printBoolean(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:Object})) {
            $$printer.printObject(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:Array})) {
            $$printer.printArray(case$794);
        }else if ($$$cl1.isOfType(val$793,{t:NullInstance})) {
            $$printer.printNull();
        }
    }
    $$printer.printValue=printValue;
    printValue.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']['$m']['printValue']};//printValue.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]},Element:{ t:'u', l:[{t:$$$cl1.String},{t:$$$cl1.Boolean},{t:$$$cl1.Integer},{t:$$$cl1.Float},{t:Object},{t:Array},{t:NullInstance}]}}},Return:{t:$$$cl1.Anything}};
    return $$printer;
}
Printer.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['Printer']};
exports.Printer=Printer;
function $init$Printer(){
    if (Printer.$$===undefined){
        $$$cl1.initTypeProto(Printer,'ceylon.json::Printer',$$$cl1.Basic);
    }
    return Printer;
}
exports.$init$Printer=$init$Printer;
$init$Printer();
function StringPrinter(pretty$795, $$stringPrinter){
    $init$StringPrinter();
    if ($$stringPrinter===undefined)$$stringPrinter=new StringPrinter.$$;
    if(pretty$795===undefined){pretty$795=false;}
    Printer(pretty$795,$$stringPrinter);
    var builder$796=$$$cl1.StringBuilder();
    $$$cl1.defineAttr($$stringPrinter,'builder$796',function(){return builder$796;});
    function print(string$797){
        builder$796.append(string$797);
    }
    $$stringPrinter.print=print;
    print.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'string',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['StringPrinter']['$m']['print']};//print.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
    $$$cl1.defineAttr($$stringPrinter,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,ceylon.language::Default,*/{
        return builder$796.string;
    });
    return $$stringPrinter;
}
StringPrinter.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:Printer},satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.json',d:$$METAMODEL$$['ceylon.json']['StringPrinter']};
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
