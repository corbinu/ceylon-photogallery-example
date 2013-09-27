(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.collection","$mod-version":"0.6.1","ceylon.collection":{"$pkg-shared":"1","MutableList":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"ifc","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[List]] supporting addition, insertion, removal, and \nmutation of its elements."],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every item from this list, leaving an empty list."]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove all occurrences of the given value from this\nlist."]},"$nm":"removeElement"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given items to the end of this list."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the item at the specified index."]},"$nm":"remove"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Set the item at the given index in this list. The list \nis expanded if `index > size`."]},"$nm":"set"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Insert the given item at the specified index. The list \nis expanded if `index > size`."]},"$nm":"insert"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given item to the end of this list."]},"$nm":"add"}},"$nm":"MutableList"},"Cell":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$nm":"T"},"$mt":"prm","$nm":"_car"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"prm","$nm":"_cdr"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$at":{"car":{"$t":{"$nm":"T"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"car"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"_cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"attr","$nm":"_cdr"},"cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"cdr"},"_car":{"$t":{"$nm":"T"},"$mt":"attr","$nm":"_car"}},"$nm":"Cell"},"CellIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$hdn":"1","$mt":"prm","$an":{"variable":[]},"$nm":"iter"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"T"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"iter"}},"$nm":"CellIterator"},"MutableSet":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[Set]] supporting addition of new elements and removal of \nexisting elements."],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every element from this set, leaving an empty set."]},"$nm":"clear"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given elements to this set, returning true if any \nof the given elements was not already element a member of\nthe set."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove an element from this set, returning true if the\nelement was previously a member of the set."]},"$nm":"remove"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an element to this set, returning true if the element\nwas already a member of the set, or false otherwise."]},"$nm":"add"}},"$nm":"MutableSet"},"HashMap":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"initialValues"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Map implementation that uses hashing"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every key\/value mapping"],"actual":[]},"$nm":"clear"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes a key\/value mapping if it exists"],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"addToStore"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a collection of key\/value mappings to this map, may be used to change existing mappings"],"actual":[]},"$nm":"putAll"}},"$at":{"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"initialValues":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"initialValues"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashMap"},"LinkedList":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A mutable Linked List"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes the item at the specified index"],"actual":[]},"$nm":"remove"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Sets an item at the given index. List is expanded if index > size"],"actual":[]},"$nm":"set"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds an item at the end of this list"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Remove every item"],"actual":[]},"$nm":"clear"},"_add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"_add"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"defines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Inserts an item at specified index, list is expanded if index > size"],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"rest":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"head":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"head"},"tail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tail"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LinkedList"},"makeCellEntryArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$nm":"makeCellEntryArray"},"group":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Group"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.collection","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"},{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Group"},{"$nm":"Element"}],"$an":{"shared":[],"doc":["Creates a `Map` that contains the `Iterable`'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function."]},"$m":{"grouping":{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"},"fn":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Group"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"fn"}},"$nm":"group"},"makeCellElementArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$nm":"makeCellElementArray"},"eq":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"eq"},"HashSet":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableSet"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Set that uses a Hashing implementation."],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every element"],"actual":[]},"$nm":"clear"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"elem"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"addToStore"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashSet"},"MutableMap":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Mutable map"],"by":["StÃ©phane Ã‰pardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every entry from this map, leaving an empty map."]},"$nm":"clear"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an entry to this map, overwriting any existing entry for \nthe given `key`, and returning the previous value associated \nwith the given `key`, if any, or null."]},"$nm":"put"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the entry associated with the given `key`, if any, from \nthis map, returning the value no longer associated with the \ngiven `key`, if any, or null."]},"$nm":"remove"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given entries to this map, overwriting any existing\nentries with the same keys."]},"$nm":"putAll"}},"$nm":"MutableMap"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
function Cell(_car$129, _cdr$130, $$targs$$,$$cell){
    $init$Cell();
    if ($$cell===undefined)$$cell=new Cell.$$;
    $$$cl1.set_type_args($$cell,$$targs$$);
    $$cell._car$129_=_car$129;
    $$cell._cdr$130_=_cdr$130;
    $$$cl1.Cloneable($$cell.$$targs$$===undefined?$$targs$$:{Clone:{t:Cell,a:{T:$$cell.$$targs$$.T}}},$$cell);
    $$$cl1.add_type_arg($$cell,'Clone',{t:Cell,a:{T:$$cell.$$targs$$.T}});
    $$cell.car$131_=$$cell._car$129;
    $$cell.$prop$getCar={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};}};
    $$cell.$prop$getCar.get=function(){return car};
    $$cell.cdr$132_=$$cell._cdr$130;
    $$cell.$prop$getCdr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};}};
    $$cell.$prop$getCdr.get=function(){return cdr};
    return $$cell;
}
Cell.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Cloneable,a:{Clone:{t:Cell,a:{T:'T'}}}}],d:['ceylon.collection','Cell']};};
function $init$Cell(){
    if (Cell.$$===undefined){
        $$$cl1.initTypeProto(Cell,'ceylon.collection::Cell',$$$cl1.Basic,$$$cl1.Cloneable);
        (function($$cell){
            $$$cl1.defineAttr($$cell,'car',function(){return this.car$131_;},function(car$133){return this.car$131_=car$133;},function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};});
            $$$cl1.defineAttr($$cell,'cdr',function(){return this.cdr$132_;},function(cdr$134){return this.cdr$132_=cdr$134;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};});
            $$$cl1.defineAttr($$cell,'clone',function(){
                var $$cell=this;
                return Cell($$cell.car,(opt$135=$$cell.cdr,opt$135!==null?opt$135.clone:null),{T:$$cell.$$targs$$.T});
                var opt$135;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'T'}},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','Cell','$at','clone']};});$$$cl1.defineAttr($$cell,'_car$129',function(){return this._car$129_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,d:['ceylon.collection','Cell','$at','_car']};});
            $$$cl1.defineAttr($$cell,'_cdr$130',function(){return this._cdr$130_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,d:['ceylon.collection','Cell','$at','_cdr']};});
        })(Cell.$$.prototype);
    }
    return Cell;
}
exports.$init$Cell=$init$Cell;
$init$Cell();
function MutableList($$targs$$,$$mutableList){
    $$$cl1.List($$mutableList.$$targs$$===undefined?$$targs$$:{Element:$$mutableList.$$targs$$.Element},$$mutableList);
    $$$cl1.set_type_args($$mutableList,$$targs$$);
}
MutableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{}},satisfies:[{t:$$$cl1.List,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[List]] supporting addition, insertion, removal, and \nmutation of its elements.",82)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableList']};};
exports.MutableList=MutableList;
function $init$MutableList(){
    if (MutableList.$$===undefined){
        $$$cl1.initTypeProto(MutableList,'ceylon.collection::MutableList',$$$cl1.List);
        (function($$mutableList){
        })(MutableList.$$.prototype);
    }
    return MutableList;
}
exports.$init$MutableList=$init$MutableList;
$init$MutableList();
function MutableMap($$targs$$,$$mutableMap){
    $$$cl1.Map($$mutableMap.$$targs$$===undefined?$$targs$$:{Key:$$mutableMap.$$targs$$.Key,Item:$$mutableMap.$$targs$$.Item},$$mutableMap);
    $$$cl1.set_type_args($$mutableMap,$$targs$$);
}
MutableMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Mutable map",11)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableMap']};};
exports.MutableMap=MutableMap;
function $init$MutableMap(){
    if (MutableMap.$$===undefined){
        $$$cl1.initTypeProto(MutableMap,'ceylon.collection::MutableMap',$$$cl1.Map);
        (function($$mutableMap){
        })(MutableMap.$$.prototype);
    }
    return MutableMap;
}
exports.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function makeCellEntryArray(size$136,$$$mptypes){
    return $$$cl1.arrayOfSize(size$136,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}});
};makeCellEntryArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},d:['ceylon.collection','makeCellEntryArray']};};
function makeCellElementArray(size$137,$$$mptypes){
    return $$$cl1.arrayOfSize(size$137,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}});
};makeCellElementArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Element:{}},d:['ceylon.collection','makeCellElementArray']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("A module for collections.\n\nYou can find here the following mutable collection types:\n\n- [[MutableList]]\n- [[MutableSet]]\n- [[MutableMap]]\n\nAlong with concrete implementations for each:\n\n- [[LinkedList]]\n- [[HashSet]]\n- [[HashMap]]\n",231)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
function MutableSet($$targs$$,$$mutableSet){
    $$$cl1.Set($$mutableSet.$$targs$$===undefined?$$targs$$:{Element:$$mutableSet.$$targs$$.Element},$$mutableSet);
    $$$cl1.set_type_args($$mutableSet,$$targs$$);
}
MutableSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Set,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[Set]] supporting addition of new elements and removal of \nexisting elements.",80)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableSet']};};
exports.MutableSet=MutableSet;
function $init$MutableSet(){
    if (MutableSet.$$===undefined){
        $$$cl1.initTypeProto(MutableSet,'ceylon.collection::MutableSet',$$$cl1.Set);
        (function($$mutableSet){
        })(MutableSet.$$.prototype);
    }
    return MutableSet;
}
exports.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
exports.$pkg$ans$ceylon$collection=function(){return[$$$cl1.shared()];};
function LinkedList(values$138, $$targs$$,$$linkedList){
    $init$LinkedList();
    if ($$linkedList===undefined)$$linkedList=new LinkedList.$$;
    $$$cl1.set_type_args($$linkedList,$$targs$$);
    if(values$138===undefined){values$138=$$$cl1.getEmpty();}
    $$linkedList.values$138_=values$138;
    MutableList($$linkedList.$$targs$$===undefined?$$targs$$:{Element:$$linkedList.$$targs$$.Element},$$linkedList);
    $$linkedList.head$139_=null;
    $$linkedList.$prop$getHead$139={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};}};
    $$linkedList.$prop$getHead$139.get=function(){return head$139};
    $$linkedList.tail$140_=null;
    $$linkedList.$prop$getTail$140={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};}};
    $$linkedList.$prop$getTail$140.get=function(){return tail$140};
    $$linkedList._size$141_=(0);
    $$linkedList.$prop$get_size$141={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};}};
    $$linkedList.$prop$get_size$141.get=function(){return _size$141};
    var it$142 = $$linkedList.values$138.iterator();
    var val$143;while ((val$143=it$142.next())!==$$$cl1.getFinished()){
        $$linkedList._add$144(val$143);
    }
    return $$linkedList;
}
LinkedList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{}},satisfies:[{t:MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A mutable Linked List",21)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','LinkedList']};};
exports.LinkedList=LinkedList;
function $init$LinkedList(){
    if (LinkedList.$$===undefined){
        $$$cl1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',$$$cl1.Basic,$init$MutableList());
        (function($$linkedList){
            $$$cl1.defineAttr($$linkedList,'head$139',function(){return this.head$139_;},function(head$145){return this.head$139_=head$145;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};});
            $$$cl1.defineAttr($$linkedList,'tail$140',function(){return this.tail$140_;},function(tail$146){return this.tail$140_=tail$146;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};});
            $$$cl1.defineAttr($$linkedList,'_size$141',function(){return this._size$141_;},function(_size$147){return this._size$141_=_size$147;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};});
            $$linkedList._add$144=function _add$144(val$148){
                var $$linkedList=this;
                var newTail$149=Cell(val$148,null,{T:$$linkedList.$$targs$$.Element});
                var tail$150;
                if((tail$150=$$linkedList.tail$140)!==null){
                    (tail$150.cdr=newTail$149);
                    ($$linkedList.tail$140=newTail$149);
                }else {
                    $$linkedList.tail$140=($$linkedList.head$139=newTail$149);
                }
                (old_size$151=$$linkedList._size$141,$$linkedList._size$141=old_size$151.successor,old_size$151);
                var old_size$151;
            };$$linkedList._add$144.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','_add']};};
            $$linkedList.set=function set(index$152,val$153){
                var $$linkedList=this;
                if(index$152.compare($$linkedList._size$141).equals($$$cl1.getSmaller())){
                    var iter$154=$$linkedList.head$139;
                    function setIter$154(iter$155){return iter$154=iter$155;};
                    $prop$getIter$154={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','iter']};}};
                    $prop$getIter$154.get=function(){return iter$154};
                    $prop$getIter$154.set=setIter$154;
                    if (setIter$154.$$metamodel$$===undefined)setIter$154.$$metamodel$$=$prop$getIter$154.$$metamodel$$;
                    var i$156=(0);
                    function setI$156(i$157){return i$156=i$157;};
                    $prop$getI$156={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','i']};}};
                    $prop$getI$156.get=function(){return i$156};
                    $prop$getI$156.set=setI$156;
                    if (setI$156.$$metamodel$$===undefined)setI$156.$$metamodel$$=$prop$getI$156.$$metamodel$$;
                    var cell$158;
                    while((cell$158=iter$154)!==null){
                        if((oldi$159=i$156,i$156=oldi$159.successor,oldi$159).equals(index$152)){
                            (cell$158.car=val$153);
                            return;
                        }
                        var oldi$159;
                        iter$154=cell$158.cdr;
                    }
                }else {
                    var need$160=index$152.minus($$linkedList._size$141);
                    function setNeed$160(need$161){return need$160=need$161;};
                    $prop$getNeed$160={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','need']};}};
                    $prop$getNeed$160.get=function(){return need$160};
                    $prop$getNeed$160.set=setNeed$160;
                    if (setNeed$160.$$metamodel$$===undefined)setNeed$160.$$metamodel$$=$prop$getNeed$160.$$metamodel$$;
                    var newTail$162=Cell(val$153,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewTail$162={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','set','$at','newTail']};}};
                    $prop$getNewTail$162.get=function(){return newTail$162};
                    var newHead$163=newTail$162;
                    function setNewHead$163(newHead$164){return newHead$163=newHead$164;};
                    $prop$getNewHead$163={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','newHead']};}};
                    $prop$getNewHead$163.get=function(){return newHead$163};
                    $prop$getNewHead$163.set=setNewHead$163;
                    if (setNewHead$163.$$metamodel$$===undefined)setNewHead$163.$$metamodel$$=$prop$getNewHead$163.$$metamodel$$;
                    while((oldneed$165=need$160,need$160=oldneed$165.predecessor,oldneed$165).compare((0)).equals($$$cl1.getLarger())){
                        newHead$163=Cell(val$153,newHead$163,{T:$$linkedList.$$targs$$.Element});
                    }
                    var oldneed$165;
                    var tail$166;
                    if((tail$166=$$linkedList.tail$140)!==null){
                        (tail$166.cdr=newHead$163);
                    }else {
                        $$linkedList.head$139=newHead$163;
                    }
                    $$linkedList.tail$140=newTail$162;
                    $$linkedList._size$141=index$152.plus((1));
                }
            };$$linkedList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Sets an item at the given index. List is expanded if index > size",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','set']};};
            $$linkedList.insert=function insert(index$167,val$168){
                var $$linkedList=this;
                if((index$167.compare($$linkedList._size$141)!==$$$cl1.getSmaller())){
                    $$linkedList.set(index$167,val$168);
                }else {
                    var newCell$169=Cell(val$168,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewCell$169={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','insert','$at','newCell']};}};
                    $prop$getNewCell$169.get=function(){return newCell$169};
                    if(index$167.equals((0))){
                        (newCell$169.cdr=$$linkedList.head$139);
                        $$linkedList.head$139=newCell$169;
                    }else {
                        var iter$170=$$linkedList.head$139;
                        function setIter$170(iter$171){return iter$170=iter$171;};
                        $prop$getIter$170={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','iter']};}};
                        $prop$getIter$170.get=function(){return iter$170};
                        $prop$getIter$170.set=setIter$170;
                        if (setIter$170.$$metamodel$$===undefined)setIter$170.$$metamodel$$=$prop$getIter$170.$$metamodel$$;
                        var prev$172=null;
                        function setPrev$172(prev$173){return prev$172=prev$173;};
                        $prop$getPrev$172={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','prev']};}};
                        $prop$getPrev$172.get=function(){return prev$172};
                        $prop$getPrev$172.set=setPrev$172;
                        if (setPrev$172.$$metamodel$$===undefined)setPrev$172.$$metamodel$$=$prop$getPrev$172.$$metamodel$$;
                        var i$174=(0);
                        function setI$174(i$175){return i$174=i$175;};
                        $prop$getI$174={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','i']};}};
                        $prop$getI$174.get=function(){return i$174};
                        $prop$getI$174.set=setI$174;
                        if (setI$174.$$metamodel$$===undefined)setI$174.$$metamodel$$=$prop$getI$174.$$metamodel$$;
                        var cell$176;
                        while((cell$176=iter$170)!==null){
                            if((oldi$177=i$174,i$174=oldi$177.successor,oldi$177).equals(index$167)){
                                var prev2$178;
                                if((prev2$178=prev$172)!==null){
                                    (prev2$178.cdr=newCell$169);
                                    (newCell$169.cdr=cell$176);
                                }else {}
                                break;
                            }
                            var oldi$177;
                            prev$172=iter$170;
                            iter$170=cell$176.cdr;
                        }
                    }
                    (old_size$179=$$linkedList._size$141,$$linkedList._size$141=old_size$179.successor,old_size$179);
                    var old_size$179;
                }
            };$$linkedList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Inserts an item at specified index, list is expanded if index > size",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','insert']};};
            $$linkedList.add=function add(val$180){
                var $$linkedList=this;
                $$linkedList._add$144(val$180);
            };$$linkedList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds an item at the end of this list",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','add']};};
            $$linkedList.addAll=function addAll(values$181){
                var $$linkedList=this;
                var it$182 = values$181.iterator();
                var val$183;while ((val$183=it$182.next())!==$$$cl1.getFinished()){
                    $$linkedList.add(val$183);
                }
            };$$linkedList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','addAll']};};
            $$linkedList.remove=function remove(index$184){
                var $$linkedList=this;
                if(index$184.compare($$linkedList._size$141).equals($$$cl1.getSmaller())){
                    var iter$185=$$linkedList.head$139;
                    function setIter$185(iter$186){return iter$185=iter$186;};
                    $prop$getIter$185={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','iter']};}};
                    $prop$getIter$185.get=function(){return iter$185};
                    $prop$getIter$185.set=setIter$185;
                    if (setIter$185.$$metamodel$$===undefined)setIter$185.$$metamodel$$=$prop$getIter$185.$$metamodel$$;
                    var prev$187=null;
                    function setPrev$187(prev$188){return prev$187=prev$188;};
                    $prop$getPrev$187={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','prev']};}};
                    $prop$getPrev$187.get=function(){return prev$187};
                    $prop$getPrev$187.set=setPrev$187;
                    if (setPrev$187.$$metamodel$$===undefined)setPrev$187.$$metamodel$$=$prop$getPrev$187.$$metamodel$$;
                    var i$189=(0);
                    function setI$189(i$190){return i$189=i$190;};
                    $prop$getI$189={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','i']};}};
                    $prop$getI$189.get=function(){return i$189};
                    $prop$getI$189.set=setI$189;
                    if (setI$189.$$metamodel$$===undefined)setI$189.$$metamodel$$=$prop$getI$189.$$metamodel$$;
                    var cell$191;
                    while((cell$191=iter$185)!==null){
                        if((oldi$192=i$189,i$189=oldi$192.successor,oldi$192).equals(index$184)){
                            var prev2$193;
                            if((prev2$193=prev$187)!==null){
                                (prev2$193.cdr=cell$191.cdr);
                            }else {
                                $$linkedList.head$139=cell$191.cdr;
                            }
                            if((!$$$cl1.exists(cell$191.cdr))){
                                $$linkedList.tail$140=prev$187;
                            }
                            (old_size$194=$$linkedList._size$141,$$linkedList._size$141=old_size$194.predecessor,old_size$194);
                            var old_size$194;
                            return;
                        }
                        var oldi$192;
                        prev$187=iter$185;
                        iter$185=cell$191.cdr;
                    }
                }else {
                    throw $$$cl1.wrapexc($$$cl1.Exception(),'137:12-137:17','ceylon/collection/LinkedList.ceylon');
                }
            };$$linkedList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes the item at the specified index",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','remove']};};
            $$linkedList.removeElement=function removeElement(val$195){
                var $$linkedList=this;
                var iter$196=$$linkedList.head$139;
                function setIter$196(iter$197){return iter$196=iter$197;};
                var prev$198=null;
                function setPrev$198(prev$199){return prev$198=prev$199;};
                var cell$200;
                while((cell$200=iter$196)!==null){
                    if(eq(cell$200.car,val$195)){
                        var prev2$201;
                        if((prev2$201=prev$198)!==null){
                            (prev2$201.cdr=cell$200.cdr);
                        }else {
                            $$linkedList.head$139=cell$200.cdr;
                        }
                        if((!$$$cl1.exists(cell$200.cdr))){
                            $$linkedList.tail$140=prev$198;
                        }
                        (old_size$202=$$linkedList._size$141,$$linkedList._size$141=old_size$202.predecessor,old_size$202);
                        var old_size$202;
                        iter$196=cell$200.cdr;
                    }else {
                        prev$198=iter$196;
                        iter$196=cell$200.cdr;
                    }
                }
            };$$linkedList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','removeElement']};};
            $$linkedList.clear=function clear(){
                var $$linkedList=this;
                $$linkedList._size$141=(0);
                $$linkedList.head$139=($$linkedList.tail$140=null);
            };$$linkedList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove every item",17)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','clear']};};
            $$linkedList.get=function get(index$203){
                var $$linkedList=this;
                var iter$204=$$linkedList.head$139;
                function setIter$204(iter$205){return iter$204=iter$205;};
                var i$206=(0);
                function setI$206(i$207){return i$206=i$207;};
                var cell$208;
                while((cell$208=iter$204)!==null){
                    if((oldi$209=i$206,i$206=oldi$209.successor,oldi$209).equals(index$203)){
                        return cell$208.car;
                    }
                    var oldi$209;
                    iter$204=cell$208.cdr;
                }
                return null;
            };$$linkedList.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','get']};};
            $$linkedList.span=function span(from$210,to$211){
                var $$linkedList=this;
                var ret$212=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$213=$$linkedList.head$139;
                function setIter$213(iter$214){return iter$213=iter$214;};
                var i$215=(0);
                function setI$215(i$216){return i$215=i$216;};
                var cell$217;
                while((cell$217=iter$213)!==null){
                    if(i$215.compare(to$211).equals($$$cl1.getLarger())){
                        break;
                    }
                    if((i$215.compare(from$210)!==$$$cl1.getSmaller())){
                        ret$212.add(cell$217.car);
                    }
                    (oldi$218=i$215,i$215=oldi$218.successor,oldi$218);
                    var oldi$218;
                    iter$213=cell$217.cdr;
                }
                return ret$212;
            };$$linkedList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','span']};};
            $$linkedList.spanFrom=function spanFrom(from$219){
                var $$linkedList=this;
                var ret$220=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$221=$$linkedList.head$139;
                function setIter$221(iter$222){return iter$221=iter$222;};
                var i$223=(0);
                function setI$223(i$224){return i$223=i$224;};
                var cell$225;
                while((cell$225=iter$221)!==null){
                    if((i$223.compare(from$219)!==$$$cl1.getSmaller())){
                        ret$220.add(cell$225.car);
                    }
                    (oldi$226=i$223,i$223=oldi$226.successor,oldi$226);
                    var oldi$226;
                    iter$221=cell$225.cdr;
                }
                return ret$220;
            };$$linkedList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanFrom']};};
            $$linkedList.spanTo=function spanTo(to$227){
                var $$linkedList=this;
                var ret$228=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$229=$$linkedList.head$139;
                function setIter$229(iter$230){return iter$229=iter$230;};
                var i$231=(0);
                function setI$231(i$232){return i$231=i$232;};
                var cell$233;
                while((cell$233=iter$229)!==null){
                    if(i$231.compare(to$227).equals($$$cl1.getLarger())){
                        break;
                    }
                    ret$228.add(cell$233.car);
                    (oldi$234=i$231,i$231=oldi$234.successor,oldi$234);
                    var oldi$234;
                    iter$229=cell$233.cdr;
                }
                return ret$228;
            };$$linkedList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanTo']};};
            $$linkedList.segment=function segment(from$235,length$236){
                var $$linkedList=this;
                var ret$237=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                if(length$236.equals((0))){
                    return ret$237;
                }
                var iter$238=$$linkedList.head$139;
                function setIter$238(iter$239){return iter$238=iter$239;};
                var i$240=(0);
                function setI$240(i$241){return i$240=i$241;};
                var cell$242;
                while((cell$242=iter$238)!==null){
                    if((i$240.compare(from$235)!==$$$cl1.getSmaller())){
                        if((ret$237._size$141.compare(length$236)!==$$$cl1.getSmaller())){
                            break;
                        }
                        ret$237.add(cell$242.car);
                    }
                    (oldi$243=i$240,i$240=oldi$243.successor,oldi$243);
                    var oldi$243;
                    iter$238=cell$242.cdr;
                }
                return ret$237;
            };$$linkedList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','segment']};};
            $$linkedList.defines=function defines(index$244){
                var $$linkedList=this;
                return ((index$244.compare((0))!==$$$cl1.getSmaller())&&index$244.compare($$linkedList._size$141).equals($$$cl1.getSmaller()));
            };$$linkedList.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','defines']};};
            $$linkedList.contains=function contains(element$245){
                var $$linkedList=this;
                var iter$246=$$linkedList.head$139;
                function setIter$246(iter$247){return iter$246=iter$247;};
                var cell$248;
                while((cell$248=iter$246)!==null){
                    var elem$249;
                    if($$$cl1.isOfType((elem$249=cell$248.car),{t:$$$cl1.Object})){
                        if(elem$249.equals(element$245)){
                            return true;
                        }
                    }
                    iter$246=cell$248.cdr;
                }
                return false;
            };$$linkedList.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','contains']};};
            $$$cl1.defineAttr($$linkedList,'size',function(){
                var $$linkedList=this;
                return $$linkedList._size$141;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','size']};});$$linkedList.count=function count(selecting$250){
                var $$linkedList=this;
                var iter$251=$$linkedList.head$139;
                function setIter$251(iter$252){return iter$251=iter$252;};
                var c$253=(0);
                function setC$253(c$254){return c$253=c$254;};
                var cell$255;
                while((cell$255=iter$251)!==null){
                    if(selecting$250(cell$255.car)){
                        (oldc$256=c$253,c$253=oldc$256.successor,oldc$256);
                        var oldc$256;
                    }
                    iter$251=cell$255.cdr;
                }
                return c$253;
            };$$linkedList.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','count']};};
            $$$cl1.defineAttr($$linkedList,'lastIndex',function(){
                var $$linkedList=this;
                return ((!$$linkedList.empty)?$$linkedList._size$141.minus((1)):null);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','lastIndex']};});$$linkedList.iterator=function iterator(){
                var $$linkedList=this;
                return CellIterator($$linkedList.head$139,{T:$$linkedList.$$targs$$.Element});
            };$$linkedList.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','iterator']};};
            $$$cl1.defineAttr($$linkedList,'clone',function(){
                var $$linkedList=this;
                var ret$257=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$257={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','clone','$at','ret']};}};
                $prop$getRet$257.get=function(){return ret$257};
                (ret$257.head$139=$$linkedList.head$139);
                (ret$257.tail$140=$$linkedList.tail$140);
                (ret$257._size$141=$$linkedList.size);
                return ret$257;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','clone']};});$$$cl1.defineAttr($$linkedList,'keys',function(){
                var $$linkedList=this;
                return (opt$258=($$linkedList.empty?$$$cl1.getEmpty():null),opt$258!==null?opt$258:$$$cl1.Range((0),$$linkedList._size$141,{Element:{t:$$$cl1.Integer}}));
                var opt$258;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','keys']};});$$$cl1.defineAttr($$linkedList,'string',function(){
                var $$linkedList=this;
                var b$259=$$$cl1.StringBuilder();
                $prop$getB$259={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','LinkedList','$at','string','$at','b']};}};
                $prop$getB$259.get=function(){return b$259};
                b$259.append($$$cl1.String("[",1));
                var iter$260=$$linkedList.head$139;
                function setIter$260(iter$261){return iter$260=iter$261;};
                $prop$getIter$260={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','string','$at','iter']};}};
                $prop$getIter$260.get=function(){return iter$260};
                $prop$getIter$260.set=setIter$260;
                if (setIter$260.$$metamodel$$===undefined)setIter$260.$$metamodel$$=$prop$getIter$260.$$metamodel$$;
                var cell$262;
                while((cell$262=iter$260)!==null){
                    var car$263;
                    if($$$cl1.isOfType((car$263=cell$262.car),{t:$$$cl1.Object})){
                        b$259.append(car$263.string);
                    }else {
                        b$259.append($$$cl1.String("null",4));
                    }
                    iter$260=cell$262.cdr;
                    if($$$cl1.exists(iter$260)){
                        b$259.append($$$cl1.String(", ",2));
                    }
                }
                b$259.append($$$cl1.String("]",1));
                return b$259.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','string']};});$$$cl1.defineAttr($$linkedList,'hash',function(){
                var $$linkedList=this;
                var h$264=(17);
                function setH$264(h$265){return h$264=h$265;};
                $prop$getH$264={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','h']};}};
                $prop$getH$264.get=function(){return h$264};
                $prop$getH$264.set=setH$264;
                if (setH$264.$$metamodel$$===undefined)setH$264.$$metamodel$$=$prop$getH$264.$$metamodel$$;
                var iter$266=$$linkedList.head$139;
                function setIter$266(iter$267){return iter$266=iter$267;};
                $prop$getIter$266={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','iter']};}};
                $prop$getIter$266.get=function(){return iter$266};
                $prop$getIter$266.set=setIter$266;
                if (setIter$266.$$metamodel$$===undefined)setIter$266.$$metamodel$$=$prop$getIter$266.$$metamodel$$;
                var cell$268;
                while((cell$268=iter$266)!==null){
                    var car$269;
                    if($$$cl1.isOfType((car$269=cell$268.car),{t:$$$cl1.Object})){
                        h$264=h$264.times((31)).plus(car$269.hash);
                    }else {
                        h$264=h$264.times((31));
                    }
                    iter$266=cell$268.cdr;
                }
                return h$264;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','hash']};});$$linkedList.equals=function equals(that$270){
                var $$linkedList=this;
                var that$271;
                if($$$cl1.isOfType((that$271=that$270),{t:$$$cl1.List,a:{Element:{t:$$$cl1.Object}}})&&$$linkedList._size$141.equals(that$271.size)){
                    var iter$272=$$linkedList.head$139;
                    function setIter$272(iter$273){return iter$272=iter$273;};
                    $prop$getIter$272={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter']};}};
                    $prop$getIter$272.get=function(){return iter$272};
                    $prop$getIter$272.set=setIter$272;
                    if (setIter$272.$$metamodel$$===undefined)setIter$272.$$metamodel$$=$prop$getIter$272.$$metamodel$$;
                    var iter2$274=that$271.iterator();
                    function setIter2$274(iter2$275){return iter2$274=iter2$275;};
                    $prop$getIter2$274={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Object}}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter2']};}};
                    $prop$getIter2$274.get=function(){return iter2$274};
                    $prop$getIter2$274.set=setIter2$274;
                    if (setIter2$274.$$metamodel$$===undefined)setIter2$274.$$metamodel$$=$prop$getIter2$274.$$metamodel$$;
                    var cell$276;
                    while((cell$276=iter$272)!==null){
                        var thatElement$277;
                        if(!$$$cl1.isOfType((thatElement$277=iter2$274.next()),{t:$$$cl1.Finished})){
                            if((!eq(cell$276.car,thatElement$277))){
                                return false;
                            }
                            iter$272=cell$276.cdr;
                        }else {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            };$$linkedList.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','equals']};};
            $$$cl1.defineAttr($$linkedList,'reversed',function(){
                var $$linkedList=this;
                var ret$278=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$278={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','reversed','$at','ret']};}};
                $prop$getRet$278.get=function(){return ret$278};
                var iter$279=$$linkedList.head$139;
                function setIter$279(iter$280){return iter$279=iter$280;};
                $prop$getIter$279={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','reversed','$at','iter']};}};
                $prop$getIter$279.get=function(){return iter$279};
                $prop$getIter$279.set=setIter$279;
                if (setIter$279.$$metamodel$$===undefined)setIter$279.$$metamodel$$=$prop$getIter$279.$$metamodel$$;
                var cell$281;
                while((cell$281=iter$279)!==null){
                    (ret$278.head$139=Cell(cell$281.car,ret$278.head$139,{T:$$linkedList.$$targs$$.Element}));
                    if((!$$$cl1.exists(ret$278.tail$140))){
                        (ret$278.tail$140=ret$278.head$139);
                    }
                    iter$279=cell$281.cdr;
                }
                (ret$278._size$141=$$linkedList._size$141);
                return ret$278;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','reversed']};});$$$cl1.defineAttr($$linkedList,'rest',function(){
                var $$linkedList=this;
                var ret$282=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$282={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','rest','$at','ret']};}};
                $prop$getRet$282.get=function(){return ret$282};
                var iter$283=(opt$284=$$linkedList.head$139,opt$284!==null?opt$284.cdr:null);
                function setIter$283(iter$285){return iter$283=iter$285;};
                $prop$getIter$283={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','rest','$at','iter']};}};
                $prop$getIter$283.get=function(){return iter$283};
                $prop$getIter$283.set=setIter$283;
                if (setIter$283.$$metamodel$$===undefined)setIter$283.$$metamodel$$=$prop$getIter$283.$$metamodel$$;
                var opt$284;
                var cell$286;
                while((cell$286=iter$283)!==null){
                    ret$282.add(cell$286.car);
                    iter$283=cell$286.cdr;
                }
                return ret$282;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','rest']};});$$$cl1.defineAttr($$linkedList,'values$138',function(){return this.values$138_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:LinkedList,d:['ceylon.collection','LinkedList','$at','values']};});
        })(LinkedList.$$.prototype);
    }
    return LinkedList;
}
exports.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
function CellIterator(iter$287, $$targs$$,$$cellIterator){
    $init$CellIterator();
    if ($$cellIterator===undefined)$$cellIterator=new CellIterator.$$;
    $$$cl1.set_type_args($$cellIterator,$$targs$$);
    $$$cl1.Iterator($$cellIterator.$$targs$$===undefined?$$targs$$:{Element:$$cellIterator.$$targs$$.T},$$cellIterator);
    $$cellIterator.iter$287_=iter$287;
    $$cellIterator.$prop$getIter$287={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};}};
    $$cellIterator.$prop$getIter$287.get=function(){return iter$287};
    return $$cellIterator;
}
CellIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Iterator,a:{Element:'T'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if (CellIterator.$$===undefined){
        $$$cl1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',$$$cl1.Basic,$$$cl1.Iterator);
        (function($$cellIterator){
            $$$cl1.defineAttr($$cellIterator,'iter$287',function(){return this.iter$287_;},function(iter$288){return this.iter$287_=iter$288;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};});
            $$cellIterator.next=function next(){
                var $$cellIterator=this;
                var iter$289;
                if((iter$289=$$cellIterator.iter$287)!==null){
                    ($$cellIterator.iter$287=iter$289.cdr);
                    return iter$289.car;
                }
                return $$$cl1.getFinished();
            };$$cellIterator.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['T',{t:$$$cl1.Finished}]},$ps:[],$cont:CellIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','CellIterator','$m','next']};};
        })(CellIterator.$$.prototype);
    }
    return CellIterator;
}
exports.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function HashMap(initialValues$290, $$targs$$,$$hashMap){
    $init$HashMap();
    if ($$hashMap===undefined)$$hashMap=new HashMap.$$;
    $$$cl1.set_type_args($$hashMap,$$targs$$);
    if(initialValues$290===undefined){initialValues$290=$$$cl1.getEmpty();}
    $$hashMap.initialValues$290_=initialValues$290;
    MutableMap($$hashMap.$$targs$$===undefined?$$targs$$:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item},$$hashMap);
    $$hashMap.store$291_=makeCellEntryArray((16),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
    $$hashMap.$prop$getStore$291={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};}};
    $$hashMap.$prop$getStore$291.get=function(){return store$291};
    $$hashMap._size$292_=(0);
    $$hashMap.$prop$get_size$292={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};}};
    $$hashMap.$prop$get_size$292.get=function(){return _size$292};
    $$hashMap.loadFactor$293_=$$$cl1.Float(0.75);
    $$hashMap.$prop$getLoadFactor$293={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};}};
    $$hashMap.$prop$getLoadFactor$293.get=function(){return loadFactor$293};
    var it$294 = $$hashMap.initialValues$290.iterator();
    var item$295;while ((item$295=it$294.next())!==$$$cl1.getFinished()){
        var key$296=item$295.key;
        var item$297=item$295.item;
        if($$hashMap.addToStore$298($$hashMap.store$291,key$296,item$297)){
            (old_size$299=$$hashMap._size$292,$$hashMap._size$292=old_size$299.successor,old_size$299);
            var old_size$299;
        }
    }
    $$hashMap.checkRehash$300();
    return $$hashMap;
}
HashMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableMap,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Map implementation that uses hashing",36)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashMap']};};
exports.HashMap=HashMap;
function $init$HashMap(){
    if (HashMap.$$===undefined){
        $$$cl1.initTypeProto(HashMap,'ceylon.collection::HashMap',$$$cl1.Basic,$init$MutableMap());
        (function($$hashMap){
            $$$cl1.defineAttr($$hashMap,'store$291',function(){return this.store$291_;},function(store$301){return this.store$291_=store$301;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};});
            $$$cl1.defineAttr($$hashMap,'_size$292',function(){return this._size$292_;},function(_size$302){return this._size$292_=_size$302;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};});
            $$$cl1.defineAttr($$hashMap,'loadFactor$293',function(){return this.loadFactor$293_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};});
            $$hashMap.storeIndex$303=function storeIndex$303(key$304,store$305){
                var $$hashMap=this;
                var i$306=key$304.hash.remainder(store$305.size);
                return (opt$307=(i$306.negative?i$306.negativeValue:null),opt$307!==null?opt$307:i$306);
                var opt$307;
            };$$hashMap.storeIndex$303.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex']};};
            $$hashMap.addToStore$298=function addToStore$298(store$308,key$309,item$310){
                var $$hashMap=this;
                var index$311=$$hashMap.storeIndex$303(key$309,store$308);
                var bucket$312=store$308.get(index$311);
                function setBucket$312(bucket$313){return bucket$312=bucket$313;};
                var cell$314;
                while((cell$314=bucket$312)!==null){
                    if(cell$314.car.key.equals(key$309)){
                        (cell$314.car=$$$cl1.Entry(key$309,item$310,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return false;
                    }
                    bucket$312=cell$314.cdr;
                }
                store$308.set(index$311,Cell($$$cl1.Entry(key$309,item$310,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$308.get(index$311),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                return true;
            };$$hashMap.addToStore$298.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore']};};
            $$hashMap.checkRehash$300=function checkRehash$300(){
                var $$hashMap=this;
                if($$hashMap._size$292.compare($$hashMap.store$291.size.$float.times($$hashMap.loadFactor$293).integer).equals($$$cl1.getLarger())){
                    var newStore$315=makeCellEntryArray($$hashMap._size$292.times((2)),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                    $prop$getNewStore$315={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},d:['ceylon.collection','HashMap','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$315.get=function(){return newStore$315};
                    var index$316=(0);
                    function setIndex$316(index$317){return index$316=index$317;};
                    $prop$getIndex$316={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$316.get=function(){return index$316};
                    $prop$getIndex$316.set=setIndex$316;
                    if (setIndex$316.$$metamodel$$===undefined)setIndex$316.$$metamodel$$=$prop$getIndex$316.$$metamodel$$;
                    while(index$316.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                        var bucket$318=$$hashMap.store$291.get(index$316);
                        function setBucket$318(bucket$319){return bucket$318=bucket$319;};
                        $prop$getBucket$318={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$318.get=function(){return bucket$318};
                        $prop$getBucket$318.set=setBucket$318;
                        if (setBucket$318.$$metamodel$$===undefined)setBucket$318.$$metamodel$$=$prop$getBucket$318.$$metamodel$$;
                        var cell$320;
                        while((cell$320=bucket$318)!==null){
                            $$hashMap.addToStore$298(newStore$315,cell$320.car.key,cell$320.car.item);
                            bucket$318=cell$320.cdr;
                        }
                        (oldindex$321=index$316,index$316=oldindex$321.successor,oldindex$321);
                        var oldindex$321;
                    }
                    $$hashMap.store$291=newStore$315;
                }
            };$$hashMap.checkRehash$300.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash']};};
            $$hashMap.put=function put(key$322,item$323){
                var $$hashMap=this;
                var index$324=$$hashMap.storeIndex$303(key$322,$$hashMap.store$291);
                var bucket$325=$$hashMap.store$291.get(index$324);
                function setBucket$325(bucket$326){return bucket$325=bucket$326;};
                var cell$327;
                while((cell$327=bucket$325)!==null){
                    if(cell$327.car.key.equals(key$322)){
                        var oldValue$328=cell$327.car.item;
                        $prop$getOldValue$328={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Item',d:['ceylon.collection','HashMap','$m','put','$at','oldValue']};}};
                        $prop$getOldValue$328.get=function(){return oldValue$328};
                        (cell$327.car=$$$cl1.Entry(key$322,item$323,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return oldValue$328;
                    }
                    bucket$325=cell$327.cdr;
                }
                $$hashMap.store$291.set(index$324,Cell($$$cl1.Entry(key$322,item$323,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),$$hashMap.store$291.get(index$324),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                (old_size$329=$$hashMap._size$292,$$hashMap._size$292=old_size$329.successor,old_size$329);
                var old_size$329;
                $$hashMap.checkRehash$300();
                return null;
            };$$hashMap.put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','put']};};
            $$hashMap.putAll=function putAll(entries$330){
                var $$hashMap=this;
                var it$331 = entries$330.iterator();
                var entry$332;while ((entry$332=it$331.next())!==$$$cl1.getFinished()){
                    if($$hashMap.addToStore$298($$hashMap.store$291,entry$332.key,entry$332.item)){
                        (old_size$333=$$hashMap._size$292,$$hashMap._size$292=old_size$333.successor,old_size$333);
                        var old_size$333;
                    }
                }
                $$hashMap.checkRehash$300();
            };$$hashMap.putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a collection of key/value mappings to this map, may be used to change existing mappings",92)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','putAll']};};
            $$hashMap.remove=function remove(key$334){
                var $$hashMap=this;
                var index$335=$$hashMap.storeIndex$303(key$334,$$hashMap.store$291);
                var bucket$336=$$hashMap.store$291.get(index$335);
                function setBucket$336(bucket$337){return bucket$336=bucket$337;};
                var prev$338=null;
                function setPrev$338(prev$339){return prev$338=prev$339;};
                var cell$340;
                while((cell$340=bucket$336)!==null){
                    if(cell$340.car.key.equals(key$334)){
                        var last$341;
                        if((last$341=prev$338)!==null){
                            (last$341.cdr=cell$340.cdr);
                        }else {
                            $$hashMap.store$291.set(index$335,cell$340.cdr);
                        }
                        (old_size$342=$$hashMap._size$292,$$hashMap._size$292=old_size$342.predecessor,old_size$342);
                        var old_size$342;
                        return cell$340.car.item;
                    }
                    prev$338=cell$340;
                    bucket$336=cell$340.cdr;
                }
                return null;
            };$$hashMap.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes a key/value mapping if it exists",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','remove']};};
            $$hashMap.clear=function clear(){
                var $$hashMap=this;
                var index$343=(0);
                function setIndex$343(index$344){return index$343=index$344;};
                while(index$343.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    $$hashMap.store$291.set((oldindex$345=index$343,index$343=oldindex$345.successor,oldindex$345),null);
                    var oldindex$345;
                }
                $$hashMap._size$292=(0);
            };$$hashMap.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every key/value mapping",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','clear']};};
            $$$cl1.defineAttr($$hashMap,'size',function(){
                var $$hashMap=this;
                return $$hashMap._size$292;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','size']};});$$hashMap.get=function get(key$346){
                var $$hashMap=this;
                if($$hashMap.empty){
                    return null;
                }
                var index$347=$$hashMap.storeIndex$303(key$346,$$hashMap.store$291);
                var bucket$348=$$hashMap.store$291.get(index$347);
                function setBucket$348(bucket$349){return bucket$348=bucket$349;};
                var cell$350;
                while((cell$350=bucket$348)!==null){
                    if(cell$350.car.key.equals(key$346)){
                        return cell$350.car.item;
                    }
                    bucket$348=cell$350.cdr;
                }
                return null;
            };$$hashMap.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','get']};};
            $$$cl1.defineAttr($$hashMap,'values',function(){
                var $$hashMap=this;
                var ret$351=LinkedList(undefined,{Element:$$hashMap.$$targs$$.Item});
                $prop$getRet$351={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableList,a:{Element:'Item'}},d:['ceylon.collection','HashMap','$at','values','$at','ret']};}};
                $prop$getRet$351.get=function(){return ret$351};
                var index$352=(0);
                function setIndex$352(index$353){return index$352=index$353;};
                $prop$getIndex$352={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','index']};}};
                $prop$getIndex$352.get=function(){return index$352};
                $prop$getIndex$352.set=setIndex$352;
                if (setIndex$352.$$metamodel$$===undefined)setIndex$352.$$metamodel$$=$prop$getIndex$352.$$metamodel$$;
                while(index$352.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$354=$$hashMap.store$291.get(index$352);
                    function setBucket$354(bucket$355){return bucket$354=bucket$355;};
                    $prop$getBucket$354={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','bucket']};}};
                    $prop$getBucket$354.get=function(){return bucket$354};
                    $prop$getBucket$354.set=setBucket$354;
                    if (setBucket$354.$$metamodel$$===undefined)setBucket$354.$$metamodel$$=$prop$getBucket$354.$$metamodel$$;
                    var cell$356;
                    while((cell$356=bucket$354)!==null){
                        ret$351.add(cell$356.car.item);
                        bucket$354=cell$356.cdr;
                    }
                    (oldindex$357=index$352,index$352=oldindex$357.successor,oldindex$357);
                    var oldindex$357;
                }
                return ret$351;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Collection,a:{Element:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','values']};});$$$cl1.defineAttr($$hashMap,'keys',function(){
                var $$hashMap=this;
                var ret$358=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                $prop$getRet$358={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','keys','$at','ret']};}};
                $prop$getRet$358.get=function(){return ret$358};
                var index$359=(0);
                function setIndex$359(index$360){return index$359=index$360;};
                $prop$getIndex$359={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','index']};}};
                $prop$getIndex$359.get=function(){return index$359};
                $prop$getIndex$359.set=setIndex$359;
                if (setIndex$359.$$metamodel$$===undefined)setIndex$359.$$metamodel$$=$prop$getIndex$359.$$metamodel$$;
                while(index$359.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$361=$$hashMap.store$291.get(index$359);
                    function setBucket$361(bucket$362){return bucket$361=bucket$362;};
                    $prop$getBucket$361={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','bucket']};}};
                    $prop$getBucket$361.get=function(){return bucket$361};
                    $prop$getBucket$361.set=setBucket$361;
                    if (setBucket$361.$$metamodel$$===undefined)setBucket$361.$$metamodel$$=$prop$getBucket$361.$$metamodel$$;
                    var cell$363;
                    while((cell$363=bucket$361)!==null){
                        ret$358.add(cell$363.car.key);
                        bucket$361=cell$363.cdr;
                    }
                    (oldindex$364=index$359,index$359=oldindex$364.successor,oldindex$364);
                    var oldindex$364;
                }
                return ret$358;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Set,a:{Element:'Key'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','keys']};});$$$cl1.defineAttr($$hashMap,'inverse',function(){
                var $$hashMap=this;
                var ret$365=HashMap(undefined,{Key:$$hashMap.$$targs$$.Item,Item:{t:MutableSet,a:{Element:$$hashMap.$$targs$$.Key}}});
                $prop$getRet$365={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableMap,a:{Key:'Item',Item:{t:MutableSet,a:{Element:'Key'}}}},d:['ceylon.collection','HashMap','$at','inverse','$at','ret']};}};
                $prop$getRet$365.get=function(){return ret$365};
                var index$366=(0);
                function setIndex$366(index$367){return index$366=index$367;};
                $prop$getIndex$366={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','index']};}};
                $prop$getIndex$366.get=function(){return index$366};
                $prop$getIndex$366.set=setIndex$366;
                if (setIndex$366.$$metamodel$$===undefined)setIndex$366.$$metamodel$$=$prop$getIndex$366.$$metamodel$$;
                while(index$366.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$368=$$hashMap.store$291.get(index$366);
                    function setBucket$368(bucket$369){return bucket$368=bucket$369;};
                    $prop$getBucket$368={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','bucket']};}};
                    $prop$getBucket$368.get=function(){return bucket$368};
                    $prop$getBucket$368.set=setBucket$368;
                    if (setBucket$368.$$metamodel$$===undefined)setBucket$368.$$metamodel$$=$prop$getBucket$368.$$metamodel$$;
                    var cell$370;
                    while((cell$370=bucket$368)!==null){
                        var keys$371=ret$365.get(cell$370.car.item);
                        $prop$getKeys$371={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:MutableSet,a:{Element:'Key'}}]},d:['ceylon.collection','HashMap','$at','inverse','$at','keys']};}};
                        $prop$getKeys$371.get=function(){return keys$371};
                        var keys$372;
                        if((keys$372=keys$371)!==null){
                            keys$372.add(cell$370.car.key);
                        }else {
                            var k$373=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                            $prop$getK$373={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','inverse','$at','k']};}};
                            $prop$getK$373.get=function(){return k$373};
                            ret$365.put(cell$370.car.item,k$373);
                            k$373.add(cell$370.car.key);
                        }
                        bucket$368=cell$370.cdr;
                    }
                    (oldindex$374=index$366,index$366=oldindex$374.successor,oldindex$374);
                    var oldindex$374;
                }
                return ret$365;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Item',Item:{t:$$$cl1.Set,a:{Element:'Key'}}}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','inverse']};});$$hashMap.iterator=function iterator(){
                var $$hashMap=this;
                function iter$375($$targs$$){
                    var $$iter$375=new iter$375.$$;
                    $$iter$375.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}},$$iter$375);
                    $$$cl1.add_type_arg($$iter$375,'Element',{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}});
                    $$iter$375.index$376_=(0);
                    $$iter$375.$prop$getIndex$376={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$375,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$375.$prop$getIndex$376.get=function(){return index$376};
                    $$iter$375.bucket$377_=$$hashMap.store$291.get($$iter$375.index$376);
                    $$iter$375.$prop$getBucket$377={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$375,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$375.$prop$getBucket$377.get=function(){return bucket$377};
                    return $$iter$375;
                }
                function $init$iter$375(){
                    if (iter$375.$$===undefined){
                        $$$cl1.initTypeProto(iter$375,'ceylon.collection::HashMap.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return iter$375;
                }
                $init$iter$375();
                (function($$iter$375){
                    $$$cl1.defineAttr($$iter$375,'index$376',function(){return this.index$376_;},function(index$378){return this.index$376_=index$378;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$375,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};});
                    $$$cl1.defineAttr($$iter$375,'bucket$377',function(){return this.bucket$377_;},function(bucket$379){return this.bucket$377_=bucket$379;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$375,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};});
                    $$iter$375.next=function next(){
                        var $$iter$375=this;
                        if((!$$$cl1.exists($$iter$375.bucket$377))){
                            while(($$iter$375.index$376=$$iter$375.index$376.successor).compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                                $$iter$375.bucket$377=$$hashMap.store$291.get($$iter$375.index$376);
                                if($$$cl1.exists($$iter$375.bucket$377)){
                                    break;
                                }
                            }
                        }
                        var bucket$380;
                        if((bucket$380=$$iter$375.bucket$377)!==null){
                            var car$381=bucket$380.car;
                            $prop$getCar$381={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next','$at','car']};}};
                            $prop$getCar$381.get=function(){return car$381};
                            ($$iter$375.bucket$377=bucket$380.cdr);
                            return car$381;
                        }
                        return $$$cl1.getFinished();
                    };$$iter$375.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},{t:$$$cl1.Finished}]},$ps:[],$cont:iter$375,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next']};};
                })(iter$375.$$.prototype);
                var iter$382;
                function getIter$382(){
                    if (iter$382===undefined)iter$382=$init$iter$375()({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}});
                    return iter$382;
                }
                getIter$382.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$375},d:['ceylon.collection','HashMap','$m','iterator','$at','iter']};};
                $prop$getIter$382={get:getIter$382,$$metamodel$$:getIter$382.$$metamodel$$};
                return getIter$382();
            };$$hashMap.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator']};};
            $$hashMap.count=function count(selecting$383){
                var $$hashMap=this;
                var index$384=(0);
                function setIndex$384(index$385){return index$384=index$385;};
                var count$386=(0);
                function setCount$386(count$387){return count$386=count$387;};
                while(index$384.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$388=$$hashMap.store$291.get(index$384);
                    function setBucket$388(bucket$389){return bucket$388=bucket$389;};
                    $prop$getBucket$388={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','bucket']};}};
                    $prop$getBucket$388.get=function(){return bucket$388};
                    $prop$getBucket$388.set=setBucket$388;
                    if (setBucket$388.$$metamodel$$===undefined)setBucket$388.$$metamodel$$=$prop$getBucket$388.$$metamodel$$;
                    var cell$390;
                    while((cell$390=bucket$388)!==null){
                        if(selecting$383(cell$390.car)){
                            (oldcount$391=count$386,count$386=oldcount$391.successor,oldcount$391);
                            var oldcount$391;
                        }
                        bucket$388=cell$390.cdr;
                    }
                    (oldindex$392=index$384,index$384=oldindex$392.successor,oldindex$392);
                    var oldindex$392;
                }
                return count$386;
            };$$hashMap.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','count']};};
            $$$cl1.defineAttr($$hashMap,'string',function(){
                var $$hashMap=this;
                var index$393=(0);
                function setIndex$393(index$394){return index$393=index$394;};
                $prop$getIndex$393={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','index']};}};
                $prop$getIndex$393.get=function(){return index$393};
                $prop$getIndex$393.set=setIndex$393;
                if (setIndex$393.$$metamodel$$===undefined)setIndex$393.$$metamodel$$=$prop$getIndex$393.$$metamodel$$;
                var ret$395=$$$cl1.StringBuilder();
                $prop$getRet$395={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashMap','$at','string','$at','ret']};}};
                $prop$getRet$395.get=function(){return ret$395};
                ret$395.append($$$cl1.String("{",1));
                var first$396=true;
                function setFirst$396(first$397){return first$396=first$397;};
                $prop$getFirst$396={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','first']};}};
                $prop$getFirst$396.get=function(){return first$396};
                $prop$getFirst$396.set=setFirst$396;
                if (setFirst$396.$$metamodel$$===undefined)setFirst$396.$$metamodel$$=$prop$getFirst$396.$$metamodel$$;
                while(index$393.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$398=$$hashMap.store$291.get(index$393);
                    function setBucket$398(bucket$399){return bucket$398=bucket$399;};
                    $prop$getBucket$398={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','bucket']};}};
                    $prop$getBucket$398.get=function(){return bucket$398};
                    $prop$getBucket$398.set=setBucket$398;
                    if (setBucket$398.$$metamodel$$===undefined)setBucket$398.$$metamodel$$=$prop$getBucket$398.$$metamodel$$;
                    var cell$400;
                    while((cell$400=bucket$398)!==null){
                        if((!first$396)){
                            ret$395.append($$$cl1.String(", ",2));
                        }else {
                            first$396=false;
                        }
                        ret$395.append(cell$400.car.key.string);
                        ret$395.append($$$cl1.String("->",2));
                        ret$395.append(cell$400.car.item.string);
                        bucket$398=cell$400.cdr;
                    }
                    (oldindex$401=index$393,index$393=oldindex$401.successor,oldindex$401);
                    var oldindex$401;
                }
                ret$395.append($$$cl1.String("}",1));
                return ret$395.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','string']};});$$$cl1.defineAttr($$hashMap,'hash',function(){
                var $$hashMap=this;
                var index$402=(0);
                function setIndex$402(index$403){return index$402=index$403;};
                $prop$getIndex$402={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','index']};}};
                $prop$getIndex$402.get=function(){return index$402};
                $prop$getIndex$402.set=setIndex$402;
                if (setIndex$402.$$metamodel$$===undefined)setIndex$402.$$metamodel$$=$prop$getIndex$402.$$metamodel$$;
                var hash$404=(17);
                function setHash$404(hash$405){return hash$404=hash$405;};
                $prop$getHash$404={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','hash']};}};
                $prop$getHash$404.get=function(){return hash$404};
                $prop$getHash$404.set=setHash$404;
                if (setHash$404.$$metamodel$$===undefined)setHash$404.$$metamodel$$=$prop$getHash$404.$$metamodel$$;
                while(index$402.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$406=$$hashMap.store$291.get(index$402);
                    function setBucket$406(bucket$407){return bucket$406=bucket$407;};
                    $prop$getBucket$406={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','bucket']};}};
                    $prop$getBucket$406.get=function(){return bucket$406};
                    $prop$getBucket$406.set=setBucket$406;
                    if (setBucket$406.$$metamodel$$===undefined)setBucket$406.$$metamodel$$=$prop$getBucket$406.$$metamodel$$;
                    var cell$408;
                    while((cell$408=bucket$406)!==null){
                        hash$404=hash$404.times((31)).plus(cell$408.car.hash);
                        bucket$406=cell$408.cdr;
                    }
                    (oldindex$409=index$402,index$402=oldindex$409.successor,oldindex$409);
                    var oldindex$409;
                }
                return hash$404;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','hash']};});$$hashMap.equals=function equals(that$410){
                var $$hashMap=this;
                var that$411;
                if($$$cl1.isOfType((that$411=that$410),{t:$$$cl1.Map,a:{Key:{t:$$$cl1.Object},Item:{t:$$$cl1.Object}}})&&$$hashMap.size.equals(that$411.size)){
                    var index$412=(0);
                    function setIndex$412(index$413){return index$412=index$413;};
                    $prop$getIndex$412={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','index']};}};
                    $prop$getIndex$412.get=function(){return index$412};
                    $prop$getIndex$412.set=setIndex$412;
                    if (setIndex$412.$$metamodel$$===undefined)setIndex$412.$$metamodel$$=$prop$getIndex$412.$$metamodel$$;
                    while(index$412.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                        var bucket$414=$$hashMap.store$291.get(index$412);
                        function setBucket$414(bucket$415){return bucket$414=bucket$415;};
                        $prop$getBucket$414={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','bucket']};}};
                        $prop$getBucket$414.get=function(){return bucket$414};
                        $prop$getBucket$414.set=setBucket$414;
                        if (setBucket$414.$$metamodel$$===undefined)setBucket$414.$$metamodel$$=$prop$getBucket$414.$$metamodel$$;
                        var cell$416;
                        while((cell$416=bucket$414)!==null){
                            var item$417=that$411.get(cell$416.car.key);
                            $prop$getItem$417={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},d:['ceylon.collection','HashMap','$m','equals','$at','item']};}};
                            $prop$getItem$417.get=function(){return item$417};
                            var item$418;
                            if((item$418=item$417)!==null){
                                if((!item$418.equals(cell$416.car.item))){
                                    return false;
                                }
                            }else {
                                return false;
                            }
                            bucket$414=cell$416.cdr;
                        }
                        (oldindex$419=index$412,index$412=oldindex$419.successor,oldindex$419);
                        var oldindex$419;
                    }
                    return true;
                }
                return false;
            };$$hashMap.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','equals']};};
            $$$cl1.defineAttr($$hashMap,'clone',function(){
                var $$hashMap=this;
                var clone$420=HashMap(undefined,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                $prop$getClone$420={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashMap,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$at','clone','$at','clone']};}};
                $prop$getClone$420.get=function(){return clone$420};
                (clone$420._size$292=$$hashMap._size$292);
                (clone$420.store$291=makeCellEntryArray($$hashMap.store$291.size,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                var index$421=(0);
                function setIndex$421(index$422){return index$421=index$422;};
                $prop$getIndex$421={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','clone','$at','index']};}};
                $prop$getIndex$421.get=function(){return index$421};
                $prop$getIndex$421.set=setIndex$421;
                if (setIndex$421.$$metamodel$$===undefined)setIndex$421.$$metamodel$$=$prop$getIndex$421.$$metamodel$$;
                while(index$421.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$423;
                    if((bucket$423=$$hashMap.store$291.get(index$421))!==null){
                        clone$420.store$291.set(index$421,bucket$423.clone);
                    }
                    (oldindex$424=index$421,index$421=oldindex$424.successor,oldindex$424);
                    var oldindex$424;
                }
                return clone$420;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','clone']};});$$hashMap.contains=function contains(element$425){
                var $$hashMap=this;
                var index$426=(0);
                function setIndex$426(index$427){return index$426=index$427;};
                while(index$426.compare($$hashMap.store$291.size).equals($$$cl1.getSmaller())){
                    var bucket$428=$$hashMap.store$291.get(index$426);
                    function setBucket$428(bucket$429){return bucket$428=bucket$429;};
                    $prop$getBucket$428={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','contains','$at','bucket']};}};
                    $prop$getBucket$428.get=function(){return bucket$428};
                    $prop$getBucket$428.set=setBucket$428;
                    if (setBucket$428.$$metamodel$$===undefined)setBucket$428.$$metamodel$$=$prop$getBucket$428.$$metamodel$$;
                    var cell$430;
                    while((cell$430=bucket$428)!==null){
                        if(cell$430.car.item.equals(element$425)){
                            return true;
                        }
                        bucket$428=cell$430.cdr;
                    }
                    (oldindex$431=index$426,index$426=oldindex$431.successor,oldindex$431);
                    var oldindex$431;
                }
                return false;
            };$$hashMap.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','contains']};};
            $$$cl1.defineAttr($$hashMap,'initialValues$290',function(){return this.initialValues$290_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$cont:HashMap,d:['ceylon.collection','HashMap','$at','initialValues']};});
        })(HashMap.$$.prototype);
    }
    return HashMap;
}
exports.$init$HashMap=$init$HashMap;
$init$HashMap();
function HashSet(values$432, $$targs$$,$$hashSet){
    $init$HashSet();
    if ($$hashSet===undefined)$$hashSet=new HashSet.$$;
    $$$cl1.set_type_args($$hashSet,$$targs$$);
    if(values$432===undefined){values$432=$$$cl1.getEmpty();}
    $$hashSet.values$432_=values$432;
    MutableSet($$hashSet.$$targs$$===undefined?$$targs$$:{Element:$$hashSet.$$targs$$.Element},$$hashSet);
    $$hashSet.store$433_=makeCellElementArray((16),{Element:$$hashSet.$$targs$$.Element});
    $$hashSet.$prop$getStore$433={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};}};
    $$hashSet.$prop$getStore$433.get=function(){return store$433};
    $$hashSet._size$434_=(0);
    $$hashSet.$prop$get_size$434={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};}};
    $$hashSet.$prop$get_size$434.get=function(){return _size$434};
    $$hashSet.loadFactor$435_=$$$cl1.Float(0.75);
    $$hashSet.$prop$getLoadFactor$435={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};}};
    $$hashSet.$prop$getLoadFactor$435.get=function(){return loadFactor$435};
    var it$436 = $$hashSet.values$432.iterator();
    var val$437;while ((val$437=it$436.next())!==$$$cl1.getFinished()){
        if($$hashSet.addToStore$438($$hashSet.store$433,val$437)){
            (old_size$439=$$hashSet._size$434,$$hashSet._size$434=old_size$439.successor,old_size$439);
            var old_size$439;
        }
    }
    $$hashSet.checkRehash$440();
    return $$hashSet;
}
HashSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableSet,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Set that uses a Hashing implementation.",39)),$$$cl1.by([$$$cl1.String("StÃ©phane Ã‰pardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashSet']};};
exports.HashSet=HashSet;
function $init$HashSet(){
    if (HashSet.$$===undefined){
        $$$cl1.initTypeProto(HashSet,'ceylon.collection::HashSet',$$$cl1.Basic,$init$MutableSet());
        (function($$hashSet){
            $$$cl1.defineAttr($$hashSet,'store$433',function(){return this.store$433_;},function(store$441){return this.store$433_=store$441;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};});
            $$$cl1.defineAttr($$hashSet,'_size$434',function(){return this._size$434_;},function(_size$442){return this._size$434_=_size$442;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};});
            $$$cl1.defineAttr($$hashSet,'loadFactor$435',function(){return this.loadFactor$435_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};});
            $$hashSet.storeIndex$443=function storeIndex$443(elem$444,store$445){
                var $$hashSet=this;
                var i$446=elem$444.hash.remainder(store$445.size);
                return (opt$447=(i$446.negative?i$446.negativeValue:null),opt$447!==null?opt$447:i$446);
                var opt$447;
            };$$hashSet.storeIndex$443.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex']};};
            $$hashSet.addToStore$438=function addToStore$438(store$448,element$449){
                var $$hashSet=this;
                var index$450=$$hashSet.storeIndex$443(element$449,store$448);
                var bucket$451=store$448.get(index$450);
                function setBucket$451(bucket$452){return bucket$451=bucket$452;};
                var cell$453;
                while((cell$453=bucket$451)!==null){
                    if(cell$453.car.equals(element$449)){
                        (cell$453.car=element$449);
                        return false;
                    }
                    bucket$451=cell$453.cdr;
                }
                store$448.set(index$450,Cell(element$449,store$448.get(index$450),{T:$$hashSet.$$targs$$.Element}));
                return true;
            };$$hashSet.addToStore$438.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore']};};
            $$hashSet.checkRehash$440=function checkRehash$440(){
                var $$hashSet=this;
                if($$hashSet._size$434.compare($$hashSet.store$433.size.$float.times($$hashSet.loadFactor$435).integer).equals($$$cl1.getLarger())){
                    var newStore$454=makeCellElementArray($$hashSet._size$434.times((2)),{Element:$$hashSet.$$targs$$.Element});
                    $prop$getNewStore$454={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},d:['ceylon.collection','HashSet','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$454.get=function(){return newStore$454};
                    var index$455=(0);
                    function setIndex$455(index$456){return index$455=index$456;};
                    $prop$getIndex$455={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$455.get=function(){return index$455};
                    $prop$getIndex$455.set=setIndex$455;
                    if (setIndex$455.$$metamodel$$===undefined)setIndex$455.$$metamodel$$=$prop$getIndex$455.$$metamodel$$;
                    while(index$455.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                        var bucket$457=$$hashSet.store$433.get(index$455);
                        function setBucket$457(bucket$458){return bucket$457=bucket$458;};
                        $prop$getBucket$457={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$457.get=function(){return bucket$457};
                        $prop$getBucket$457.set=setBucket$457;
                        if (setBucket$457.$$metamodel$$===undefined)setBucket$457.$$metamodel$$=$prop$getBucket$457.$$metamodel$$;
                        var cell$459;
                        while((cell$459=bucket$457)!==null){
                            $$hashSet.addToStore$438(newStore$454,cell$459.car);
                            bucket$457=cell$459.cdr;
                        }
                        (oldindex$460=index$455,index$455=oldindex$460.successor,oldindex$460);
                        var oldindex$460;
                    }
                    $$hashSet.store$433=newStore$454;
                }
            };$$hashSet.checkRehash$440.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash']};};
            $$hashSet.add=function add(element$461){
                var $$hashSet=this;
                if($$hashSet.addToStore$438($$hashSet.store$433,element$461)){
                    (old_size$462=$$hashSet._size$434,$$hashSet._size$434=old_size$462.successor,old_size$462);
                    var old_size$462;
                    $$hashSet.checkRehash$440();
                    return true;
                }
                return false;
            };$$hashSet.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','add']};};
            $$hashSet.addAll=function addAll(elements$463){
                var $$hashSet=this;
                var ret$464=false;
                function setRet$464(ret$465){return ret$464=ret$465;};
                var it$466 = elements$463.iterator();
                var elem$467;while ((elem$467=it$466.next())!==$$$cl1.getFinished()){
                    ret$464$$hashSet.add(elem$467);
                }
                $$hashSet.checkRehash$440();
                return ret$464;
            };$$hashSet.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','addAll']};};
            $$hashSet.remove=function remove(element$468){
                var $$hashSet=this;
                var index$469=$$hashSet.storeIndex$443(element$468,$$hashSet.store$433);
                var bucket$470=$$hashSet.store$433.get(index$469);
                function setBucket$470(bucket$471){return bucket$470=bucket$471;};
                var prev$472=null;
                function setPrev$472(prev$473){return prev$472=prev$473;};
                var cell$474;
                while((cell$474=bucket$470)!==null){
                    if(cell$474.car.equals(element$468)){
                        var last$475;
                        if((last$475=prev$472)!==null){
                            (last$475.cdr=cell$474.cdr);
                        }else {
                            $$hashSet.store$433.set(index$469,cell$474.cdr);
                        }
                        (old_size$476=$$hashSet._size$434,$$hashSet._size$434=old_size$476.predecessor,old_size$476);
                        var old_size$476;
                        return true;
                    }
                    prev$472=cell$474;
                    bucket$470=cell$474.cdr;
                }
                return false;
            };$$hashSet.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','remove']};};
            $$hashSet.clear=function clear(){
                var $$hashSet=this;
                var index$477=(0);
                function setIndex$477(index$478){return index$477=index$478;};
                while(index$477.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    $$hashSet.store$433.set((oldindex$479=index$477,index$477=oldindex$479.successor,oldindex$479),null);
                    var oldindex$479;
                }
                $$hashSet._size$434=(0);
            };$$hashSet.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every element",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','clear']};};
            $$$cl1.defineAttr($$hashSet,'size',function(){
                var $$hashSet=this;
                return $$hashSet._size$434;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','size']};});$$hashSet.iterator=function iterator(){
                var $$hashSet=this;
                function iter$480($$targs$$){
                    var $$iter$480=new iter$480.$$;
                    $$iter$480.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:$$hashSet.$$targs$$.Element},$$iter$480);
                    $$iter$480.index$481_=(0);
                    $$iter$480.$prop$getIndex$481={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$480,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$480.$prop$getIndex$481.get=function(){return index$481};
                    $$iter$480.bucket$482_=$$hashSet.store$433.get($$iter$480.index$481);
                    $$iter$480.$prop$getBucket$482={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$480,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$480.$prop$getBucket$482.get=function(){return bucket$482};
                    return $$iter$480;
                }
                function $init$iter$480(){
                    if (iter$480.$$===undefined){
                        $$$cl1.initTypeProto(iter$480,'ceylon.collection::HashSet.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return iter$480;
                }
                $init$iter$480();
                (function($$iter$480){
                    $$$cl1.defineAttr($$iter$480,'index$481',function(){return this.index$481_;},function(index$483){return this.index$481_=index$483;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$480,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};});
                    $$$cl1.defineAttr($$iter$480,'bucket$482',function(){return this.bucket$482_;},function(bucket$484){return this.bucket$482_=bucket$484;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$480,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};});
                    $$iter$480.next=function next(){
                        var $$iter$480=this;
                        if((!$$$cl1.exists($$iter$480.bucket$482))){
                            while(($$iter$480.index$481=$$iter$480.index$481.successor).compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                                $$iter$480.bucket$482=$$hashSet.store$433.get($$iter$480.index$481);
                                if($$$cl1.exists($$iter$480.bucket$482)){
                                    break;
                                }
                            }
                        }
                        var bucket$485;
                        if((bucket$485=$$iter$480.bucket$482)!==null){
                            var car$486=bucket$485.car;
                            $prop$getCar$486={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next','$at','car']};}};
                            $prop$getCar$486.get=function(){return car$486};
                            ($$iter$480.bucket$482=bucket$485.cdr);
                            return car$486;
                        }
                        return $$$cl1.getFinished();
                    };$$iter$480.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:$$$cl1.Finished}]},$ps:[],$cont:iter$480,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next']};};
                })(iter$480.$$.prototype);
                var iter$487;
                function getIter$487(){
                    if (iter$487===undefined)iter$487=$init$iter$480()({Element:$$hashSet.$$targs$$.Element});
                    return iter$487;
                }
                getIter$487.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$480},d:['ceylon.collection','HashSet','$m','iterator','$at','iter']};};
                $prop$getIter$487={get:getIter$487,$$metamodel$$:getIter$487.$$metamodel$$};
                return getIter$487();
            };$$hashSet.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator']};};
            $$hashSet.count=function count(selecting$488){
                var $$hashSet=this;
                var c$489=(0);
                function setC$489(c$490){return c$489=c$490;};
                var index$491=(0);
                function setIndex$491(index$492){return index$491=index$492;};
                while(index$491.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    var bucket$493=$$hashSet.store$433.get(index$491);
                    function setBucket$493(bucket$494){return bucket$493=bucket$494;};
                    $prop$getBucket$493={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','bucket']};}};
                    $prop$getBucket$493.get=function(){return bucket$493};
                    $prop$getBucket$493.set=setBucket$493;
                    if (setBucket$493.$$metamodel$$===undefined)setBucket$493.$$metamodel$$=$prop$getBucket$493.$$metamodel$$;
                    var cell$495;
                    while((cell$495=bucket$493)!==null){
                        if(selecting$488(cell$495.car)){
                            (oldc$496=c$489,c$489=oldc$496.successor,oldc$496);
                            var oldc$496;
                        }
                        bucket$493=cell$495.cdr;
                    }
                    (oldindex$497=index$491,index$491=oldindex$497.successor,oldindex$497);
                    var oldindex$497;
                }
                return c$489;
            };$$hashSet.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','count']};};
            $$$cl1.defineAttr($$hashSet,'string',function(){
                var $$hashSet=this;
                var index$498=(0);
                function setIndex$498(index$499){return index$498=index$499;};
                $prop$getIndex$498={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','index']};}};
                $prop$getIndex$498.get=function(){return index$498};
                $prop$getIndex$498.set=setIndex$498;
                if (setIndex$498.$$metamodel$$===undefined)setIndex$498.$$metamodel$$=$prop$getIndex$498.$$metamodel$$;
                var ret$500=$$$cl1.StringBuilder();
                $prop$getRet$500={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashSet','$at','string','$at','ret']};}};
                $prop$getRet$500.get=function(){return ret$500};
                ret$500.append($$$cl1.String("(",1));
                var first$501=true;
                function setFirst$501(first$502){return first$501=first$502;};
                $prop$getFirst$501={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','first']};}};
                $prop$getFirst$501.get=function(){return first$501};
                $prop$getFirst$501.set=setFirst$501;
                if (setFirst$501.$$metamodel$$===undefined)setFirst$501.$$metamodel$$=$prop$getFirst$501.$$metamodel$$;
                while(index$498.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    var bucket$503=$$hashSet.store$433.get(index$498);
                    function setBucket$503(bucket$504){return bucket$503=bucket$504;};
                    $prop$getBucket$503={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','bucket']};}};
                    $prop$getBucket$503.get=function(){return bucket$503};
                    $prop$getBucket$503.set=setBucket$503;
                    if (setBucket$503.$$metamodel$$===undefined)setBucket$503.$$metamodel$$=$prop$getBucket$503.$$metamodel$$;
                    var cell$505;
                    while((cell$505=bucket$503)!==null){
                        if((!first$501)){
                            ret$500.append($$$cl1.String(", ",2));
                        }else {
                            first$501=false;
                        }
                        ret$500.append(cell$505.car.string);
                        bucket$503=cell$505.cdr;
                    }
                    (oldindex$506=index$498,index$498=oldindex$506.successor,oldindex$506);
                    var oldindex$506;
                }
                ret$500.append($$$cl1.String(")",1));
                return ret$500.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','string']};});$$$cl1.defineAttr($$hashSet,'hash',function(){
                var $$hashSet=this;
                var index$507=(0);
                function setIndex$507(index$508){return index$507=index$508;};
                $prop$getIndex$507={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','index']};}};
                $prop$getIndex$507.get=function(){return index$507};
                $prop$getIndex$507.set=setIndex$507;
                if (setIndex$507.$$metamodel$$===undefined)setIndex$507.$$metamodel$$=$prop$getIndex$507.$$metamodel$$;
                var hash$509=(17);
                function setHash$509(hash$510){return hash$509=hash$510;};
                $prop$getHash$509={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','hash']};}};
                $prop$getHash$509.get=function(){return hash$509};
                $prop$getHash$509.set=setHash$509;
                if (setHash$509.$$metamodel$$===undefined)setHash$509.$$metamodel$$=$prop$getHash$509.$$metamodel$$;
                while(index$507.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    var bucket$511=$$hashSet.store$433.get(index$507);
                    function setBucket$511(bucket$512){return bucket$511=bucket$512;};
                    $prop$getBucket$511={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','bucket']};}};
                    $prop$getBucket$511.get=function(){return bucket$511};
                    $prop$getBucket$511.set=setBucket$511;
                    if (setBucket$511.$$metamodel$$===undefined)setBucket$511.$$metamodel$$=$prop$getBucket$511.$$metamodel$$;
                    var cell$513;
                    while((cell$513=bucket$511)!==null){
                        hash$509=hash$509.times((31)).plus(cell$513.car.hash);
                        bucket$511=cell$513.cdr;
                    }
                    (oldindex$514=index$507,index$507=oldindex$514.successor,oldindex$514);
                    var oldindex$514;
                }
                return hash$509;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','hash']};});$$hashSet.equals=function equals(that$515){
                var $$hashSet=this;
                var that$516;
                if($$$cl1.isOfType((that$516=that$515),{t:$$$cl1.Set,a:{Element:{t:$$$cl1.Object}}})&&$$hashSet.size.equals(that$516.size)){
                    var index$517=(0);
                    function setIndex$517(index$518){return index$517=index$518;};
                    $prop$getIndex$517={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','index']};}};
                    $prop$getIndex$517.get=function(){return index$517};
                    $prop$getIndex$517.set=setIndex$517;
                    if (setIndex$517.$$metamodel$$===undefined)setIndex$517.$$metamodel$$=$prop$getIndex$517.$$metamodel$$;
                    while(index$517.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                        var bucket$519=$$hashSet.store$433.get(index$517);
                        function setBucket$519(bucket$520){return bucket$519=bucket$520;};
                        $prop$getBucket$519={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','bucket']};}};
                        $prop$getBucket$519.get=function(){return bucket$519};
                        $prop$getBucket$519.set=setBucket$519;
                        if (setBucket$519.$$metamodel$$===undefined)setBucket$519.$$metamodel$$=$prop$getBucket$519.$$metamodel$$;
                        var cell$521;
                        while((cell$521=bucket$519)!==null){
                            if((!that$516.contains(cell$521.car))){
                                return false;
                            }
                            bucket$519=cell$521.cdr;
                        }
                        (oldindex$522=index$517,index$517=oldindex$522.successor,oldindex$522);
                        var oldindex$522;
                    }
                    return true;
                }
                return false;
            };$$hashSet.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','equals']};};
            $$$cl1.defineAttr($$hashSet,'clone',function(){
                var $$hashSet=this;
                var clone$523=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                $prop$getClone$523={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},d:['ceylon.collection','HashSet','$at','clone','$at','clone']};}};
                $prop$getClone$523.get=function(){return clone$523};
                (clone$523._size$434=$$hashSet._size$434);
                (clone$523.store$433=makeCellElementArray($$hashSet.store$433.size,{Element:$$hashSet.$$targs$$.Element}));
                var index$524=(0);
                function setIndex$524(index$525){return index$524=index$525;};
                $prop$getIndex$524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','clone','$at','index']};}};
                $prop$getIndex$524.get=function(){return index$524};
                $prop$getIndex$524.set=setIndex$524;
                if (setIndex$524.$$metamodel$$===undefined)setIndex$524.$$metamodel$$=$prop$getIndex$524.$$metamodel$$;
                while(index$524.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    var bucket$526;
                    if((bucket$526=$$hashSet.store$433.get(index$524))!==null){
                        clone$523.store$433.set(index$524,bucket$526.clone);
                    }
                    (oldindex$527=index$524,index$524=oldindex$527.successor,oldindex$527);
                    var oldindex$527;
                }
                return clone$523;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','clone']};});$$hashSet.contains=function contains(element$528){
                var $$hashSet=this;
                var index$529=(0);
                function setIndex$529(index$530){return index$529=index$530;};
                while(index$529.compare($$hashSet.store$433.size).equals($$$cl1.getSmaller())){
                    var bucket$531=$$hashSet.store$433.get(index$529);
                    function setBucket$531(bucket$532){return bucket$531=bucket$532;};
                    $prop$getBucket$531={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','contains','$at','bucket']};}};
                    $prop$getBucket$531.get=function(){return bucket$531};
                    $prop$getBucket$531.set=setBucket$531;
                    if (setBucket$531.$$metamodel$$===undefined)setBucket$531.$$metamodel$$=$prop$getBucket$531.$$metamodel$$;
                    var cell$533;
                    while((cell$533=bucket$531)!==null){
                        if(cell$533.car.equals(element$528)){
                            return true;
                        }
                        bucket$531=cell$533.cdr;
                    }
                    (oldindex$534=index$529,index$529=oldindex$534.successor,oldindex$534);
                    var oldindex$534;
                }
                return false;
            };$$hashSet.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','contains']};};
            $$hashSet.complement=function complement(set$535,$$$mptypes){
                var $$hashSet=this;
                var ret$536=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                var it$537 = $$hashSet.iterator();
                var elem$538;while ((elem$538=it$537.next())!==$$$cl1.getFinished()){
                    if((!set$535.contains(elem$538))){
                        ret$536.add(elem$538);
                    }
                }
                return ret$536;
            };$$hashSet.complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','complement']};};
            $$hashSet.exclusiveUnion=function exclusiveUnion(set$539,$$$mptypes){
                var $$hashSet=this;
                var ret$540=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$541 = $$hashSet.iterator();
                var elem$542;while ((elem$542=it$541.next())!==$$$cl1.getFinished()){
                    if((!set$539.contains(elem$542))){
                        ret$540.add(elem$542);
                    }
                }
                var it$543 = set$539.iterator();
                var elem$544;while ((elem$544=it$543.next())!==$$$cl1.getFinished()){
                    if((!$$hashSet.contains(elem$544))){
                        ret$540.add(elem$544);
                    }
                }
                return ret$540;
            };$$hashSet.exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
            $$hashSet.intersection=function intersection(set$545,$$$mptypes){
                var $$hashSet=this;
                var ret$546=HashSet(undefined,{Element:{ t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$547 = $$hashSet.iterator();
                var elem$548;while ((elem$548=it$547.next())!==$$$cl1.getFinished()){
                    var elem$549;
                    if(set$545.contains(elem$548)&&$$$cl1.isOfType((elem$549=elem$548),$$$mptypes.Other)){
                        ret$546.add(elem$549);
                    }
                }
                return ret$546;
            };$$hashSet.intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','intersection']};};
            $$hashSet.union=function union(set$550,$$$mptypes){
                var $$hashSet=this;
                var ret$551=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                ret$551.addAll($$hashSet);
                ret$551.addAll(set$550);
                return ret$551;
            };$$hashSet.union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','union']};};
            $$$cl1.defineAttr($$hashSet,'values$432',function(){return this.values$432_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:HashSet,d:['ceylon.collection','HashSet','$at','values']};});
        })(HashSet.$$.prototype);
    }
    return HashSet;
}
exports.$init$HashSet=$init$HashSet;
$init$HashSet();
function eq(a$552,b$553){
    var a$554;
    if((a$554=a$552)!==null){
        var b$555;
        if((b$555=b$553)!==null){
            return a$554.equals(b$555);
        }
        return false;
    }
    return (!$$$cl1.exists(b$553));
};eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'a',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'b',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],d:['ceylon.collection','eq']};};
function group(elements$556,grouping$557,$$$mptypes){
    var map$558=HashMap(undefined,{Key:$$$mptypes.Group,Item:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}});
    var it$559 = elements$556.iterator();
    var element$560;while ((element$560=it$559.next())!==$$$cl1.getFinished()){
        var group$561=grouping$557(element$560);
        $prop$getGroup$561={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Group',d:['ceylon.collection','group','$at','group']};}};
        $prop$getGroup$561.get=function(){return group$561};
        var sb$562=map$558.get(group$561);
        $prop$getSb$562={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}]},d:['ceylon.collection','group','$at','sb']};}};
        $prop$getSb$562.get=function(){return sb$562};
        var sb$563;
        if($$$cl1.isOfType((sb$563=sb$562),{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}})){
            sb$563.append(element$560);
        }else {
            map$558.put(group$561,$$$cl1.SequenceBuilder({Element:$$$mptypes.Element}).append(element$560));
        }
    }
    function fn$564(key$565,item$566){
        var sequence$567=item$566.sequence;
        //assert at group.ceylon (29:8-29:33)
        var sequence$568;
        if (!($$$cl1.nonempty((sequence$568=sequence$567)))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'nonempty sequence\' at group.ceylon (29:14-29:32)"),'29:8-29:33','group.ceylon'); }
        return sequence$568;
    };fn$564.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequence,a:{Element:'Element'}},$ps:[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],d:['ceylon.collection','group','$m','fn']};};
    return map$558.mapItems($$$cl1.$JsCallable(fn$564,[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}},Element:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}}},First:$$$mptypes.Group,Element:{ t:'u', l:[$$$mptypes.Group,{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}]}}},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}}),{Result:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}});
}
exports.group=group;
group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Group',Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:'Element'}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}},{$nm:'grouping',$mt:'prm',$pt:'f',$t:'Group',$an:function(){return[$$$cl1.doc("A function that returns the key under which to group the \nspecified element.")];}}],$tp:{Group:{'satisfies':[{t:$$$cl1.Object}]},Element:{}},$an:function(){return[$$$cl1.doc($$$cl1.String("Creates a `Map` that contains the `Iterable`\'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function.",137)),$$$cl1.shared()];},d:['ceylon.collection','group']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));