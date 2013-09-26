(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.collection","$mod-version":"0.6.1","ceylon.collection":{"Cell":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$nm":"T"},"$mt":"prm","$nm":"_car"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"prm","$nm":"_cdr"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$at":{"car":{"$t":{"$nm":"T"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"car"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"_cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"attr","$nm":"_cdr"},"cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"cdr"},"_car":{"$t":{"$nm":"T"},"$mt":"attr","$nm":"_car"}},"$nm":"Cell"},"MutableSet":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[Set]] supporting addition of new elements and removal of \nexisting elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every element from this set, leaving an empty set."]},"$nm":"clear"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given elements to this set, returning true if any \nof the given elements was not already element a member of\nthe set."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove an element from this set, returning true if the\nelement was previously a member of the set."]},"$nm":"remove"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an element to this set, returning true if the element\nwas already a member of the set, or false otherwise."]},"$nm":"add"}},"$nm":"MutableSet"},"CellIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$hdn":"1","$mt":"prm","$an":{"variable":[]},"$nm":"iter"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"T"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"iter"}},"$nm":"CellIterator"},"HashMap":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"initialValues"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Map implementation that uses hashing"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every key\/value mapping"],"actual":[]},"$nm":"clear"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes a key\/value mapping if it exists"],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"addToStore"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a collection of key\/value mappings to this map, may be used to change existing mappings"],"actual":[]},"$nm":"putAll"}},"$at":{"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"initialValues":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"initialValues"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashMap"},"$pkg-shared":"1","MutableList":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"ifc","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[List]] supporting addition, insertion, removal, and \nmutation of its elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every item from this list, leaving an empty list."]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove all occurrences of the given value from this\nlist."]},"$nm":"removeElement"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given items to the end of this list."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the item at the specified index."]},"$nm":"remove"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Set the item at the given index in this list. The list \nis expanded if `index > size`."]},"$nm":"set"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Insert the given item at the specified index. The list \nis expanded if `index > size`."]},"$nm":"insert"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given item to the end of this list."]},"$nm":"add"}},"$nm":"MutableList"},"LinkedList":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A mutable Linked List"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes the item at the specified index"],"actual":[]},"$nm":"remove"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Sets an item at the given index. List is expanded if index > size"],"actual":[]},"$nm":"set"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds an item at the end of this list"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Remove every item"],"actual":[]},"$nm":"clear"},"_add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"_add"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"defines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Inserts an item at specified index, list is expanded if index > size"],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"rest":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"head":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"head"},"tail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tail"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LinkedList"},"makeCellEntryArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$nm":"makeCellEntryArray"},"group":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Group"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.collection","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"},{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Group"},{"$nm":"Element"}],"$an":{"shared":[],"doc":["Creates a `Map` that contains the `Iterable`'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function."]},"$m":{"grouping":{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"},"fn":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Group"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"fn"}},"$nm":"group"},"makeCellElementArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$nm":"makeCellElementArray"},"eq":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"eq"},"HashSet":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableSet"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Set that uses a Hashing implementation."],"by":["Stéphane Épardaud"]},"$m":{"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every element"],"actual":[]},"$nm":"clear"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"elem"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"addToStore"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashSet"},"MutableMap":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Mutable map"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every entry from this map, leaving an empty map."]},"$nm":"clear"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an entry to this map, overwriting any existing entry for \nthe given `key`, and returning the previous value associated \nwith the given `key`, if any, or null."]},"$nm":"put"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the entry associated with the given `key`, if any, from \nthis map, returning the value no longer associated with the \ngiven `key`, if any, or null."]},"$nm":"remove"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given entries to this map, overwriting any existing\nentries with the same keys."]},"$nm":"putAll"}},"$nm":"MutableMap"}}};
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
function CellIterator(iter$136, $$targs$$,$$cellIterator){
    $init$CellIterator();
    if ($$cellIterator===undefined)$$cellIterator=new CellIterator.$$;
    $$$cl1.set_type_args($$cellIterator,$$targs$$);
    $$$cl1.Iterator($$cellIterator.$$targs$$===undefined?$$targs$$:{Element:$$cellIterator.$$targs$$.T},$$cellIterator);
    $$cellIterator.iter$136_=iter$136;
    $$cellIterator.$prop$getIter$136={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};}};
    $$cellIterator.$prop$getIter$136.get=function(){return iter$136};
    return $$cellIterator;
}
CellIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Iterator,a:{Element:'T'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if (CellIterator.$$===undefined){
        $$$cl1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',$$$cl1.Basic,$$$cl1.Iterator);
        (function($$cellIterator){
            $$$cl1.defineAttr($$cellIterator,'iter$136',function(){return this.iter$136_;},function(iter$137){return this.iter$136_=iter$137;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};});
            $$cellIterator.next=function next(){
                var $$cellIterator=this;
                var iter$138;
                if((iter$138=$$cellIterator.iter$136)!==null){
                    ($$cellIterator.iter$136=iter$138.cdr);
                    return iter$138.car;
                }
                return $$$cl1.getFinished();
            };$$cellIterator.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['T',{t:$$$cl1.Finished}]},$ps:[],$cont:CellIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','CellIterator','$m','next']};};
        })(CellIterator.$$.prototype);
    }
    return CellIterator;
}
exports.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function eq(a$139,b$140){
    var a$141;
    if((a$141=a$139)!==null){
        var b$142;
        if((b$142=b$140)!==null){
            return a$141.equals(b$142);
        }
        return false;
    }
    return (!$$$cl1.exists(b$140));
};eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'a',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'b',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],d:['ceylon.collection','eq']};};
function group(elements$143,grouping$144,$$$mptypes){
    var map$145=HashMap(undefined,{Key:$$$mptypes.Group,Item:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}});
    var it$146 = elements$143.iterator();
    var element$147;while ((element$147=it$146.next())!==$$$cl1.getFinished()){
        var group$148=grouping$144(element$147);
        $prop$getGroup$148={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Group',d:['ceylon.collection','group','$at','group']};}};
        $prop$getGroup$148.get=function(){return group$148};
        var sb$149=map$145.get(group$148);
        $prop$getSb$149={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}]},d:['ceylon.collection','group','$at','sb']};}};
        $prop$getSb$149.get=function(){return sb$149};
        var sb$150;
        if($$$cl1.isOfType((sb$150=sb$149),{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}})){
            sb$150.append(element$147);
        }else {
            map$145.put(group$148,$$$cl1.SequenceBuilder({Element:$$$mptypes.Element}).append(element$147));
        }
    }
    function fn$151(key$152,item$153){
        var sequence$154=item$153.sequence;
        //assert at group.ceylon (29:8-29:33)
        var sequence$155;
        if (!($$$cl1.nonempty((sequence$155=sequence$154)))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'nonempty sequence\' at group.ceylon (29:14-29:32)"),'29:8-29:33','group.ceylon'); }
        return sequence$155;
    };fn$151.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequence,a:{Element:'Element'}},$ps:[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],d:['ceylon.collection','group','$m','fn']};};
    return map$145.mapItems($$$cl1.$JsCallable(fn$151,[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}},Element:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}}},First:$$$mptypes.Group,Element:{ t:'u', l:[$$$mptypes.Group,{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}]}}},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}}),{Result:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}});
}
exports.group=group;
group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Group',Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:'Element'}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}},{$nm:'grouping',$mt:'prm',$pt:'f',$t:'Group',$an:function(){return[$$$cl1.doc("A function that returns the key under which to group the \nspecified element.")];}}],$tp:{Group:{'satisfies':[{t:$$$cl1.Object}]},Element:{}},$an:function(){return[$$$cl1.doc($$$cl1.String("Creates a `Map` that contains the `Iterable`\'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function.",137)),$$$cl1.shared()];},d:['ceylon.collection','group']};};
function HashMap(initialValues$156, $$targs$$,$$hashMap){
    $init$HashMap();
    if ($$hashMap===undefined)$$hashMap=new HashMap.$$;
    $$$cl1.set_type_args($$hashMap,$$targs$$);
    if(initialValues$156===undefined){initialValues$156=$$$cl1.getEmpty();}
    $$hashMap.initialValues$156_=initialValues$156;
    MutableMap($$hashMap.$$targs$$===undefined?$$targs$$:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item},$$hashMap);
    $$hashMap.store$157_=makeCellEntryArray((16),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
    $$hashMap.$prop$getStore$157={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};}};
    $$hashMap.$prop$getStore$157.get=function(){return store$157};
    $$hashMap._size$158_=(0);
    $$hashMap.$prop$get_size$158={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};}};
    $$hashMap.$prop$get_size$158.get=function(){return _size$158};
    $$hashMap.loadFactor$159_=$$$cl1.Float(0.75);
    $$hashMap.$prop$getLoadFactor$159={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};}};
    $$hashMap.$prop$getLoadFactor$159.get=function(){return loadFactor$159};
    var it$160 = $$hashMap.initialValues$156.iterator();
    var item$161;while ((item$161=it$160.next())!==$$$cl1.getFinished()){
        var key$162=item$161.key;
        var item$163=item$161.item;
        if($$hashMap.addToStore$164($$hashMap.store$157,key$162,item$163)){
            (old_size$165=$$hashMap._size$158,$$hashMap._size$158=old_size$165.successor,old_size$165);
            var old_size$165;
        }
    }
    $$hashMap.checkRehash$166();
    return $$hashMap;
}
HashMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableMap,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Map implementation that uses hashing",36)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashMap']};};
exports.HashMap=HashMap;
function $init$HashMap(){
    if (HashMap.$$===undefined){
        $$$cl1.initTypeProto(HashMap,'ceylon.collection::HashMap',$$$cl1.Basic,$init$MutableMap());
        (function($$hashMap){
            $$$cl1.defineAttr($$hashMap,'store$157',function(){return this.store$157_;},function(store$167){return this.store$157_=store$167;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};});
            $$$cl1.defineAttr($$hashMap,'_size$158',function(){return this._size$158_;},function(_size$168){return this._size$158_=_size$168;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};});
            $$$cl1.defineAttr($$hashMap,'loadFactor$159',function(){return this.loadFactor$159_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};});
            $$hashMap.storeIndex$169=function storeIndex$169(key$170,store$171){
                var $$hashMap=this;
                var i$172=key$170.hash.remainder(store$171.size);
                return (opt$173=(i$172.negative?i$172.negativeValue:null),opt$173!==null?opt$173:i$172);
                var opt$173;
            };$$hashMap.storeIndex$169.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex']};};
            $$hashMap.addToStore$164=function addToStore$164(store$174,key$175,item$176){
                var $$hashMap=this;
                var index$177=$$hashMap.storeIndex$169(key$175,store$174);
                var bucket$178=store$174.get(index$177);
                function setBucket$178(bucket$179){return bucket$178=bucket$179;};
                var cell$180;
                while((cell$180=bucket$178)!==null){
                    if(cell$180.car.key.equals(key$175)){
                        (cell$180.car=$$$cl1.Entry(key$175,item$176,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return false;
                    }
                    bucket$178=cell$180.cdr;
                }
                store$174.set(index$177,Cell($$$cl1.Entry(key$175,item$176,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$174.get(index$177),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                return true;
            };$$hashMap.addToStore$164.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore']};};
            $$hashMap.checkRehash$166=function checkRehash$166(){
                var $$hashMap=this;
                if($$hashMap._size$158.compare($$hashMap.store$157.size.$float.times($$hashMap.loadFactor$159).integer).equals($$$cl1.getLarger())){
                    var newStore$181=makeCellEntryArray($$hashMap._size$158.times((2)),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                    $prop$getNewStore$181={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},d:['ceylon.collection','HashMap','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$181.get=function(){return newStore$181};
                    var index$182=(0);
                    function setIndex$182(index$183){return index$182=index$183;};
                    $prop$getIndex$182={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$182.get=function(){return index$182};
                    $prop$getIndex$182.set=setIndex$182;
                    if (setIndex$182.$$metamodel$$===undefined)setIndex$182.$$metamodel$$=$prop$getIndex$182.$$metamodel$$;
                    while(index$182.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                        var bucket$184=$$hashMap.store$157.get(index$182);
                        function setBucket$184(bucket$185){return bucket$184=bucket$185;};
                        $prop$getBucket$184={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$184.get=function(){return bucket$184};
                        $prop$getBucket$184.set=setBucket$184;
                        if (setBucket$184.$$metamodel$$===undefined)setBucket$184.$$metamodel$$=$prop$getBucket$184.$$metamodel$$;
                        var cell$186;
                        while((cell$186=bucket$184)!==null){
                            $$hashMap.addToStore$164(newStore$181,cell$186.car.key,cell$186.car.item);
                            bucket$184=cell$186.cdr;
                        }
                        (oldindex$187=index$182,index$182=oldindex$187.successor,oldindex$187);
                        var oldindex$187;
                    }
                    $$hashMap.store$157=newStore$181;
                }
            };$$hashMap.checkRehash$166.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash']};};
            $$hashMap.put=function put(key$188,item$189){
                var $$hashMap=this;
                var index$190=$$hashMap.storeIndex$169(key$188,$$hashMap.store$157);
                var bucket$191=$$hashMap.store$157.get(index$190);
                function setBucket$191(bucket$192){return bucket$191=bucket$192;};
                var cell$193;
                while((cell$193=bucket$191)!==null){
                    if(cell$193.car.key.equals(key$188)){
                        var oldValue$194=cell$193.car.item;
                        $prop$getOldValue$194={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Item',d:['ceylon.collection','HashMap','$m','put','$at','oldValue']};}};
                        $prop$getOldValue$194.get=function(){return oldValue$194};
                        (cell$193.car=$$$cl1.Entry(key$188,item$189,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                        return oldValue$194;
                    }
                    bucket$191=cell$193.cdr;
                }
                $$hashMap.store$157.set(index$190,Cell($$$cl1.Entry(key$188,item$189,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),$$hashMap.store$157.get(index$190),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
                (old_size$195=$$hashMap._size$158,$$hashMap._size$158=old_size$195.successor,old_size$195);
                var old_size$195;
                $$hashMap.checkRehash$166();
                return null;
            };$$hashMap.put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','put']};};
            $$hashMap.putAll=function putAll(entries$196){
                var $$hashMap=this;
                var it$197 = entries$196.iterator();
                var entry$198;while ((entry$198=it$197.next())!==$$$cl1.getFinished()){
                    if($$hashMap.addToStore$164($$hashMap.store$157,entry$198.key,entry$198.item)){
                        (old_size$199=$$hashMap._size$158,$$hashMap._size$158=old_size$199.successor,old_size$199);
                        var old_size$199;
                    }
                }
                $$hashMap.checkRehash$166();
            };$$hashMap.putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a collection of key/value mappings to this map, may be used to change existing mappings",92)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','putAll']};};
            $$hashMap.remove=function remove(key$200){
                var $$hashMap=this;
                var index$201=$$hashMap.storeIndex$169(key$200,$$hashMap.store$157);
                var bucket$202=$$hashMap.store$157.get(index$201);
                function setBucket$202(bucket$203){return bucket$202=bucket$203;};
                var prev$204=null;
                function setPrev$204(prev$205){return prev$204=prev$205;};
                var cell$206;
                while((cell$206=bucket$202)!==null){
                    if(cell$206.car.key.equals(key$200)){
                        var last$207;
                        if((last$207=prev$204)!==null){
                            (last$207.cdr=cell$206.cdr);
                        }else {
                            $$hashMap.store$157.set(index$201,cell$206.cdr);
                        }
                        (old_size$208=$$hashMap._size$158,$$hashMap._size$158=old_size$208.predecessor,old_size$208);
                        var old_size$208;
                        return cell$206.car.item;
                    }
                    prev$204=cell$206;
                    bucket$202=cell$206.cdr;
                }
                return null;
            };$$hashMap.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes a key/value mapping if it exists",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','remove']};};
            $$hashMap.clear=function clear(){
                var $$hashMap=this;
                var index$209=(0);
                function setIndex$209(index$210){return index$209=index$210;};
                while(index$209.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    $$hashMap.store$157.set((oldindex$211=index$209,index$209=oldindex$211.successor,oldindex$211),null);
                    var oldindex$211;
                }
                $$hashMap._size$158=(0);
            };$$hashMap.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every key/value mapping",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','clear']};};
            $$$cl1.defineAttr($$hashMap,'size',function(){
                var $$hashMap=this;
                return $$hashMap._size$158;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','size']};});$$hashMap.get=function get(key$212){
                var $$hashMap=this;
                if($$hashMap.empty){
                    return null;
                }
                var index$213=$$hashMap.storeIndex$169(key$212,$$hashMap.store$157);
                var bucket$214=$$hashMap.store$157.get(index$213);
                function setBucket$214(bucket$215){return bucket$214=bucket$215;};
                var cell$216;
                while((cell$216=bucket$214)!==null){
                    if(cell$216.car.key.equals(key$212)){
                        return cell$216.car.item;
                    }
                    bucket$214=cell$216.cdr;
                }
                return null;
            };$$hashMap.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','get']};};
            $$$cl1.defineAttr($$hashMap,'values',function(){
                var $$hashMap=this;
                var ret$217=LinkedList(undefined,{Element:$$hashMap.$$targs$$.Item});
                $prop$getRet$217={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableList,a:{Element:'Item'}},d:['ceylon.collection','HashMap','$at','values','$at','ret']};}};
                $prop$getRet$217.get=function(){return ret$217};
                var index$218=(0);
                function setIndex$218(index$219){return index$218=index$219;};
                $prop$getIndex$218={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','index']};}};
                $prop$getIndex$218.get=function(){return index$218};
                $prop$getIndex$218.set=setIndex$218;
                if (setIndex$218.$$metamodel$$===undefined)setIndex$218.$$metamodel$$=$prop$getIndex$218.$$metamodel$$;
                while(index$218.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$220=$$hashMap.store$157.get(index$218);
                    function setBucket$220(bucket$221){return bucket$220=bucket$221;};
                    $prop$getBucket$220={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','bucket']};}};
                    $prop$getBucket$220.get=function(){return bucket$220};
                    $prop$getBucket$220.set=setBucket$220;
                    if (setBucket$220.$$metamodel$$===undefined)setBucket$220.$$metamodel$$=$prop$getBucket$220.$$metamodel$$;
                    var cell$222;
                    while((cell$222=bucket$220)!==null){
                        ret$217.add(cell$222.car.item);
                        bucket$220=cell$222.cdr;
                    }
                    (oldindex$223=index$218,index$218=oldindex$223.successor,oldindex$223);
                    var oldindex$223;
                }
                return ret$217;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Collection,a:{Element:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','values']};});$$$cl1.defineAttr($$hashMap,'keys',function(){
                var $$hashMap=this;
                var ret$224=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                $prop$getRet$224={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','keys','$at','ret']};}};
                $prop$getRet$224.get=function(){return ret$224};
                var index$225=(0);
                function setIndex$225(index$226){return index$225=index$226;};
                $prop$getIndex$225={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','index']};}};
                $prop$getIndex$225.get=function(){return index$225};
                $prop$getIndex$225.set=setIndex$225;
                if (setIndex$225.$$metamodel$$===undefined)setIndex$225.$$metamodel$$=$prop$getIndex$225.$$metamodel$$;
                while(index$225.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$227=$$hashMap.store$157.get(index$225);
                    function setBucket$227(bucket$228){return bucket$227=bucket$228;};
                    $prop$getBucket$227={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','bucket']};}};
                    $prop$getBucket$227.get=function(){return bucket$227};
                    $prop$getBucket$227.set=setBucket$227;
                    if (setBucket$227.$$metamodel$$===undefined)setBucket$227.$$metamodel$$=$prop$getBucket$227.$$metamodel$$;
                    var cell$229;
                    while((cell$229=bucket$227)!==null){
                        ret$224.add(cell$229.car.key);
                        bucket$227=cell$229.cdr;
                    }
                    (oldindex$230=index$225,index$225=oldindex$230.successor,oldindex$230);
                    var oldindex$230;
                }
                return ret$224;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Set,a:{Element:'Key'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','keys']};});$$$cl1.defineAttr($$hashMap,'inverse',function(){
                var $$hashMap=this;
                var ret$231=HashMap(undefined,{Key:$$hashMap.$$targs$$.Item,Item:{t:MutableSet,a:{Element:$$hashMap.$$targs$$.Key}}});
                $prop$getRet$231={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableMap,a:{Key:'Item',Item:{t:MutableSet,a:{Element:'Key'}}}},d:['ceylon.collection','HashMap','$at','inverse','$at','ret']};}};
                $prop$getRet$231.get=function(){return ret$231};
                var index$232=(0);
                function setIndex$232(index$233){return index$232=index$233;};
                $prop$getIndex$232={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','index']};}};
                $prop$getIndex$232.get=function(){return index$232};
                $prop$getIndex$232.set=setIndex$232;
                if (setIndex$232.$$metamodel$$===undefined)setIndex$232.$$metamodel$$=$prop$getIndex$232.$$metamodel$$;
                while(index$232.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$234=$$hashMap.store$157.get(index$232);
                    function setBucket$234(bucket$235){return bucket$234=bucket$235;};
                    $prop$getBucket$234={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','bucket']};}};
                    $prop$getBucket$234.get=function(){return bucket$234};
                    $prop$getBucket$234.set=setBucket$234;
                    if (setBucket$234.$$metamodel$$===undefined)setBucket$234.$$metamodel$$=$prop$getBucket$234.$$metamodel$$;
                    var cell$236;
                    while((cell$236=bucket$234)!==null){
                        var keys$237=ret$231.get(cell$236.car.item);
                        $prop$getKeys$237={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:MutableSet,a:{Element:'Key'}}]},d:['ceylon.collection','HashMap','$at','inverse','$at','keys']};}};
                        $prop$getKeys$237.get=function(){return keys$237};
                        var keys$238;
                        if((keys$238=keys$237)!==null){
                            keys$238.add(cell$236.car.key);
                        }else {
                            var k$239=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                            $prop$getK$239={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','inverse','$at','k']};}};
                            $prop$getK$239.get=function(){return k$239};
                            ret$231.put(cell$236.car.item,k$239);
                            k$239.add(cell$236.car.key);
                        }
                        bucket$234=cell$236.cdr;
                    }
                    (oldindex$240=index$232,index$232=oldindex$240.successor,oldindex$240);
                    var oldindex$240;
                }
                return ret$231;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Item',Item:{t:$$$cl1.Set,a:{Element:'Key'}}}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','inverse']};});$$hashMap.iterator=function iterator(){
                var $$hashMap=this;
                function iter$241($$targs$$){
                    var $$iter$241=new iter$241.$$;
                    $$iter$241.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}},$$iter$241);
                    $$$cl1.add_type_arg($$iter$241,'Element',{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}});
                    $$iter$241.index$242_=(0);
                    $$iter$241.$prop$getIndex$242={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$241,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$241.$prop$getIndex$242.get=function(){return index$242};
                    $$iter$241.bucket$243_=$$hashMap.store$157.get($$iter$241.index$242);
                    $$iter$241.$prop$getBucket$243={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$241,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$241.$prop$getBucket$243.get=function(){return bucket$243};
                    return $$iter$241;
                }
                function $init$iter$241(){
                    if (iter$241.$$===undefined){
                        $$$cl1.initTypeProto(iter$241,'ceylon.collection::HashMap.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return iter$241;
                }
                $init$iter$241();
                (function($$iter$241){
                    $$$cl1.defineAttr($$iter$241,'index$242',function(){return this.index$242_;},function(index$244){return this.index$242_=index$244;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$241,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};});
                    $$$cl1.defineAttr($$iter$241,'bucket$243',function(){return this.bucket$243_;},function(bucket$245){return this.bucket$243_=bucket$245;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$241,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};});
                    $$iter$241.next=function next(){
                        var $$iter$241=this;
                        if((!$$$cl1.exists($$iter$241.bucket$243))){
                            while(($$iter$241.index$242=$$iter$241.index$242.successor).compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                                $$iter$241.bucket$243=$$hashMap.store$157.get($$iter$241.index$242);
                                if($$$cl1.exists($$iter$241.bucket$243)){
                                    break;
                                }
                            }
                        }
                        var bucket$246;
                        if((bucket$246=$$iter$241.bucket$243)!==null){
                            var car$247=bucket$246.car;
                            $prop$getCar$247={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next','$at','car']};}};
                            $prop$getCar$247.get=function(){return car$247};
                            ($$iter$241.bucket$243=bucket$246.cdr);
                            return car$247;
                        }
                        return $$$cl1.getFinished();
                    };$$iter$241.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},{t:$$$cl1.Finished}]},$ps:[],$cont:iter$241,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next']};};
                })(iter$241.$$.prototype);
                var iter$248;
                function getIter$248(){
                    if (iter$248===undefined)iter$248=$init$iter$241()({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}});
                    return iter$248;
                }
                getIter$248.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$241},d:['ceylon.collection','HashMap','$m','iterator','$at','iter']};};
                $prop$getIter$248={get:getIter$248,$$metamodel$$:getIter$248.$$metamodel$$};
                return getIter$248();
            };$$hashMap.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator']};};
            $$hashMap.count=function count(selecting$249){
                var $$hashMap=this;
                var index$250=(0);
                function setIndex$250(index$251){return index$250=index$251;};
                var count$252=(0);
                function setCount$252(count$253){return count$252=count$253;};
                while(index$250.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$254=$$hashMap.store$157.get(index$250);
                    function setBucket$254(bucket$255){return bucket$254=bucket$255;};
                    $prop$getBucket$254={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','bucket']};}};
                    $prop$getBucket$254.get=function(){return bucket$254};
                    $prop$getBucket$254.set=setBucket$254;
                    if (setBucket$254.$$metamodel$$===undefined)setBucket$254.$$metamodel$$=$prop$getBucket$254.$$metamodel$$;
                    var cell$256;
                    while((cell$256=bucket$254)!==null){
                        if(selecting$249(cell$256.car)){
                            (oldcount$257=count$252,count$252=oldcount$257.successor,oldcount$257);
                            var oldcount$257;
                        }
                        bucket$254=cell$256.cdr;
                    }
                    (oldindex$258=index$250,index$250=oldindex$258.successor,oldindex$258);
                    var oldindex$258;
                }
                return count$252;
            };$$hashMap.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','count']};};
            $$$cl1.defineAttr($$hashMap,'string',function(){
                var $$hashMap=this;
                var index$259=(0);
                function setIndex$259(index$260){return index$259=index$260;};
                $prop$getIndex$259={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','index']};}};
                $prop$getIndex$259.get=function(){return index$259};
                $prop$getIndex$259.set=setIndex$259;
                if (setIndex$259.$$metamodel$$===undefined)setIndex$259.$$metamodel$$=$prop$getIndex$259.$$metamodel$$;
                var ret$261=$$$cl1.StringBuilder();
                $prop$getRet$261={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashMap','$at','string','$at','ret']};}};
                $prop$getRet$261.get=function(){return ret$261};
                ret$261.append($$$cl1.String("{",1));
                var first$262=true;
                function setFirst$262(first$263){return first$262=first$263;};
                $prop$getFirst$262={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','first']};}};
                $prop$getFirst$262.get=function(){return first$262};
                $prop$getFirst$262.set=setFirst$262;
                if (setFirst$262.$$metamodel$$===undefined)setFirst$262.$$metamodel$$=$prop$getFirst$262.$$metamodel$$;
                while(index$259.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$264=$$hashMap.store$157.get(index$259);
                    function setBucket$264(bucket$265){return bucket$264=bucket$265;};
                    $prop$getBucket$264={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','bucket']};}};
                    $prop$getBucket$264.get=function(){return bucket$264};
                    $prop$getBucket$264.set=setBucket$264;
                    if (setBucket$264.$$metamodel$$===undefined)setBucket$264.$$metamodel$$=$prop$getBucket$264.$$metamodel$$;
                    var cell$266;
                    while((cell$266=bucket$264)!==null){
                        if((!first$262)){
                            ret$261.append($$$cl1.String(", ",2));
                        }else {
                            first$262=false;
                        }
                        ret$261.append(cell$266.car.key.string);
                        ret$261.append($$$cl1.String("->",2));
                        ret$261.append(cell$266.car.item.string);
                        bucket$264=cell$266.cdr;
                    }
                    (oldindex$267=index$259,index$259=oldindex$267.successor,oldindex$267);
                    var oldindex$267;
                }
                ret$261.append($$$cl1.String("}",1));
                return ret$261.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','string']};});$$$cl1.defineAttr($$hashMap,'hash',function(){
                var $$hashMap=this;
                var index$268=(0);
                function setIndex$268(index$269){return index$268=index$269;};
                $prop$getIndex$268={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','index']};}};
                $prop$getIndex$268.get=function(){return index$268};
                $prop$getIndex$268.set=setIndex$268;
                if (setIndex$268.$$metamodel$$===undefined)setIndex$268.$$metamodel$$=$prop$getIndex$268.$$metamodel$$;
                var hash$270=(17);
                function setHash$270(hash$271){return hash$270=hash$271;};
                $prop$getHash$270={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','hash']};}};
                $prop$getHash$270.get=function(){return hash$270};
                $prop$getHash$270.set=setHash$270;
                if (setHash$270.$$metamodel$$===undefined)setHash$270.$$metamodel$$=$prop$getHash$270.$$metamodel$$;
                while(index$268.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$272=$$hashMap.store$157.get(index$268);
                    function setBucket$272(bucket$273){return bucket$272=bucket$273;};
                    $prop$getBucket$272={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','bucket']};}};
                    $prop$getBucket$272.get=function(){return bucket$272};
                    $prop$getBucket$272.set=setBucket$272;
                    if (setBucket$272.$$metamodel$$===undefined)setBucket$272.$$metamodel$$=$prop$getBucket$272.$$metamodel$$;
                    var cell$274;
                    while((cell$274=bucket$272)!==null){
                        hash$270=hash$270.times((31)).plus(cell$274.car.hash);
                        bucket$272=cell$274.cdr;
                    }
                    (oldindex$275=index$268,index$268=oldindex$275.successor,oldindex$275);
                    var oldindex$275;
                }
                return hash$270;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','hash']};});$$hashMap.equals=function equals(that$276){
                var $$hashMap=this;
                var that$277;
                if($$$cl1.isOfType((that$277=that$276),{t:$$$cl1.Map,a:{Key:{t:$$$cl1.Object},Item:{t:$$$cl1.Object}}})&&$$hashMap.size.equals(that$277.size)){
                    var index$278=(0);
                    function setIndex$278(index$279){return index$278=index$279;};
                    $prop$getIndex$278={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','index']};}};
                    $prop$getIndex$278.get=function(){return index$278};
                    $prop$getIndex$278.set=setIndex$278;
                    if (setIndex$278.$$metamodel$$===undefined)setIndex$278.$$metamodel$$=$prop$getIndex$278.$$metamodel$$;
                    while(index$278.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                        var bucket$280=$$hashMap.store$157.get(index$278);
                        function setBucket$280(bucket$281){return bucket$280=bucket$281;};
                        $prop$getBucket$280={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','bucket']};}};
                        $prop$getBucket$280.get=function(){return bucket$280};
                        $prop$getBucket$280.set=setBucket$280;
                        if (setBucket$280.$$metamodel$$===undefined)setBucket$280.$$metamodel$$=$prop$getBucket$280.$$metamodel$$;
                        var cell$282;
                        while((cell$282=bucket$280)!==null){
                            var item$283=that$277.get(cell$282.car.key);
                            $prop$getItem$283={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},d:['ceylon.collection','HashMap','$m','equals','$at','item']};}};
                            $prop$getItem$283.get=function(){return item$283};
                            var item$284;
                            if((item$284=item$283)!==null){
                                if((!item$284.equals(cell$282.car.item))){
                                    return false;
                                }
                            }else {
                                return false;
                            }
                            bucket$280=cell$282.cdr;
                        }
                        (oldindex$285=index$278,index$278=oldindex$285.successor,oldindex$285);
                        var oldindex$285;
                    }
                    return true;
                }
                return false;
            };$$hashMap.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','equals']};};
            $$$cl1.defineAttr($$hashMap,'clone',function(){
                var $$hashMap=this;
                var clone$286=HashMap(undefined,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
                $prop$getClone$286={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashMap,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$at','clone','$at','clone']};}};
                $prop$getClone$286.get=function(){return clone$286};
                (clone$286._size$158=$$hashMap._size$158);
                (clone$286.store$157=makeCellEntryArray($$hashMap.store$157.size,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                var index$287=(0);
                function setIndex$287(index$288){return index$287=index$288;};
                $prop$getIndex$287={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','clone','$at','index']};}};
                $prop$getIndex$287.get=function(){return index$287};
                $prop$getIndex$287.set=setIndex$287;
                if (setIndex$287.$$metamodel$$===undefined)setIndex$287.$$metamodel$$=$prop$getIndex$287.$$metamodel$$;
                while(index$287.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$289;
                    if((bucket$289=$$hashMap.store$157.get(index$287))!==null){
                        clone$286.store$157.set(index$287,bucket$289.clone);
                    }
                    (oldindex$290=index$287,index$287=oldindex$290.successor,oldindex$290);
                    var oldindex$290;
                }
                return clone$286;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','clone']};});$$hashMap.contains=function contains(element$291){
                var $$hashMap=this;
                var index$292=(0);
                function setIndex$292(index$293){return index$292=index$293;};
                while(index$292.compare($$hashMap.store$157.size).equals($$$cl1.getSmaller())){
                    var bucket$294=$$hashMap.store$157.get(index$292);
                    function setBucket$294(bucket$295){return bucket$294=bucket$295;};
                    $prop$getBucket$294={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','contains','$at','bucket']};}};
                    $prop$getBucket$294.get=function(){return bucket$294};
                    $prop$getBucket$294.set=setBucket$294;
                    if (setBucket$294.$$metamodel$$===undefined)setBucket$294.$$metamodel$$=$prop$getBucket$294.$$metamodel$$;
                    var cell$296;
                    while((cell$296=bucket$294)!==null){
                        if(cell$296.car.item.equals(element$291)){
                            return true;
                        }
                        bucket$294=cell$296.cdr;
                    }
                    (oldindex$297=index$292,index$292=oldindex$297.successor,oldindex$297);
                    var oldindex$297;
                }
                return false;
            };$$hashMap.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','contains']};};
            $$$cl1.defineAttr($$hashMap,'initialValues$156',function(){return this.initialValues$156_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$cont:HashMap,d:['ceylon.collection','HashMap','$at','initialValues']};});
        })(HashMap.$$.prototype);
    }
    return HashMap;
}
exports.$init$HashMap=$init$HashMap;
$init$HashMap();
function HashSet(values$298, $$targs$$,$$hashSet){
    $init$HashSet();
    if ($$hashSet===undefined)$$hashSet=new HashSet.$$;
    $$$cl1.set_type_args($$hashSet,$$targs$$);
    if(values$298===undefined){values$298=$$$cl1.getEmpty();}
    $$hashSet.values$298_=values$298;
    MutableSet($$hashSet.$$targs$$===undefined?$$targs$$:{Element:$$hashSet.$$targs$$.Element},$$hashSet);
    $$hashSet.store$299_=makeCellElementArray((16),{Element:$$hashSet.$$targs$$.Element});
    $$hashSet.$prop$getStore$299={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};}};
    $$hashSet.$prop$getStore$299.get=function(){return store$299};
    $$hashSet._size$300_=(0);
    $$hashSet.$prop$get_size$300={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};}};
    $$hashSet.$prop$get_size$300.get=function(){return _size$300};
    $$hashSet.loadFactor$301_=$$$cl1.Float(0.75);
    $$hashSet.$prop$getLoadFactor$301={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};}};
    $$hashSet.$prop$getLoadFactor$301.get=function(){return loadFactor$301};
    var it$302 = $$hashSet.values$298.iterator();
    var val$303;while ((val$303=it$302.next())!==$$$cl1.getFinished()){
        if($$hashSet.addToStore$304($$hashSet.store$299,val$303)){
            (old_size$305=$$hashSet._size$300,$$hashSet._size$300=old_size$305.successor,old_size$305);
            var old_size$305;
        }
    }
    $$hashSet.checkRehash$306();
    return $$hashSet;
}
HashSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableSet,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Set that uses a Hashing implementation.",39)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashSet']};};
exports.HashSet=HashSet;
function $init$HashSet(){
    if (HashSet.$$===undefined){
        $$$cl1.initTypeProto(HashSet,'ceylon.collection::HashSet',$$$cl1.Basic,$init$MutableSet());
        (function($$hashSet){
            $$$cl1.defineAttr($$hashSet,'store$299',function(){return this.store$299_;},function(store$307){return this.store$299_=store$307;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};});
            $$$cl1.defineAttr($$hashSet,'_size$300',function(){return this._size$300_;},function(_size$308){return this._size$300_=_size$308;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};});
            $$$cl1.defineAttr($$hashSet,'loadFactor$301',function(){return this.loadFactor$301_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};});
            $$hashSet.storeIndex$309=function storeIndex$309(elem$310,store$311){
                var $$hashSet=this;
                var i$312=elem$310.hash.remainder(store$311.size);
                return (opt$313=(i$312.negative?i$312.negativeValue:null),opt$313!==null?opt$313:i$312);
                var opt$313;
            };$$hashSet.storeIndex$309.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex']};};
            $$hashSet.addToStore$304=function addToStore$304(store$314,element$315){
                var $$hashSet=this;
                var index$316=$$hashSet.storeIndex$309(element$315,store$314);
                var bucket$317=store$314.get(index$316);
                function setBucket$317(bucket$318){return bucket$317=bucket$318;};
                var cell$319;
                while((cell$319=bucket$317)!==null){
                    if(cell$319.car.equals(element$315)){
                        (cell$319.car=element$315);
                        return false;
                    }
                    bucket$317=cell$319.cdr;
                }
                store$314.set(index$316,Cell(element$315,store$314.get(index$316),{T:$$hashSet.$$targs$$.Element}));
                return true;
            };$$hashSet.addToStore$304.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore']};};
            $$hashSet.checkRehash$306=function checkRehash$306(){
                var $$hashSet=this;
                if($$hashSet._size$300.compare($$hashSet.store$299.size.$float.times($$hashSet.loadFactor$301).integer).equals($$$cl1.getLarger())){
                    var newStore$320=makeCellElementArray($$hashSet._size$300.times((2)),{Element:$$hashSet.$$targs$$.Element});
                    $prop$getNewStore$320={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},d:['ceylon.collection','HashSet','$m','checkRehash','$at','newStore']};}};
                    $prop$getNewStore$320.get=function(){return newStore$320};
                    var index$321=(0);
                    function setIndex$321(index$322){return index$321=index$322;};
                    $prop$getIndex$321={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','index']};}};
                    $prop$getIndex$321.get=function(){return index$321};
                    $prop$getIndex$321.set=setIndex$321;
                    if (setIndex$321.$$metamodel$$===undefined)setIndex$321.$$metamodel$$=$prop$getIndex$321.$$metamodel$$;
                    while(index$321.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                        var bucket$323=$$hashSet.store$299.get(index$321);
                        function setBucket$323(bucket$324){return bucket$323=bucket$324;};
                        $prop$getBucket$323={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','bucket']};}};
                        $prop$getBucket$323.get=function(){return bucket$323};
                        $prop$getBucket$323.set=setBucket$323;
                        if (setBucket$323.$$metamodel$$===undefined)setBucket$323.$$metamodel$$=$prop$getBucket$323.$$metamodel$$;
                        var cell$325;
                        while((cell$325=bucket$323)!==null){
                            $$hashSet.addToStore$304(newStore$320,cell$325.car);
                            bucket$323=cell$325.cdr;
                        }
                        (oldindex$326=index$321,index$321=oldindex$326.successor,oldindex$326);
                        var oldindex$326;
                    }
                    $$hashSet.store$299=newStore$320;
                }
            };$$hashSet.checkRehash$306.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash']};};
            $$hashSet.add=function add(element$327){
                var $$hashSet=this;
                if($$hashSet.addToStore$304($$hashSet.store$299,element$327)){
                    (old_size$328=$$hashSet._size$300,$$hashSet._size$300=old_size$328.successor,old_size$328);
                    var old_size$328;
                    $$hashSet.checkRehash$306();
                    return true;
                }
                return false;
            };$$hashSet.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','add']};};
            $$hashSet.addAll=function addAll(elements$329){
                var $$hashSet=this;
                var ret$330=false;
                function setRet$330(ret$331){return ret$330=ret$331;};
                var it$332 = elements$329.iterator();
                var elem$333;while ((elem$333=it$332.next())!==$$$cl1.getFinished()){
                    ret$330$$hashSet.add(elem$333);
                }
                $$hashSet.checkRehash$306();
                return ret$330;
            };$$hashSet.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','addAll']};};
            $$hashSet.remove=function remove(element$334){
                var $$hashSet=this;
                var index$335=$$hashSet.storeIndex$309(element$334,$$hashSet.store$299);
                var bucket$336=$$hashSet.store$299.get(index$335);
                function setBucket$336(bucket$337){return bucket$336=bucket$337;};
                var prev$338=null;
                function setPrev$338(prev$339){return prev$338=prev$339;};
                var cell$340;
                while((cell$340=bucket$336)!==null){
                    if(cell$340.car.equals(element$334)){
                        var last$341;
                        if((last$341=prev$338)!==null){
                            (last$341.cdr=cell$340.cdr);
                        }else {
                            $$hashSet.store$299.set(index$335,cell$340.cdr);
                        }
                        (old_size$342=$$hashSet._size$300,$$hashSet._size$300=old_size$342.predecessor,old_size$342);
                        var old_size$342;
                        return true;
                    }
                    prev$338=cell$340;
                    bucket$336=cell$340.cdr;
                }
                return false;
            };$$hashSet.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','remove']};};
            $$hashSet.clear=function clear(){
                var $$hashSet=this;
                var index$343=(0);
                function setIndex$343(index$344){return index$343=index$344;};
                while(index$343.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    $$hashSet.store$299.set((oldindex$345=index$343,index$343=oldindex$345.successor,oldindex$345),null);
                    var oldindex$345;
                }
                $$hashSet._size$300=(0);
            };$$hashSet.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every element",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','clear']};};
            $$$cl1.defineAttr($$hashSet,'size',function(){
                var $$hashSet=this;
                return $$hashSet._size$300;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','size']};});$$hashSet.iterator=function iterator(){
                var $$hashSet=this;
                function iter$346($$targs$$){
                    var $$iter$346=new iter$346.$$;
                    $$iter$346.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:$$hashSet.$$targs$$.Element},$$iter$346);
                    $$iter$346.index$347_=(0);
                    $$iter$346.$prop$getIndex$347={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$346,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};}};
                    $$iter$346.$prop$getIndex$347.get=function(){return index$347};
                    $$iter$346.bucket$348_=$$hashSet.store$299.get($$iter$346.index$347);
                    $$iter$346.$prop$getBucket$348={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$346,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};}};
                    $$iter$346.$prop$getBucket$348.get=function(){return bucket$348};
                    return $$iter$346;
                }
                function $init$iter$346(){
                    if (iter$346.$$===undefined){
                        $$$cl1.initTypeProto(iter$346,'ceylon.collection::HashSet.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return iter$346;
                }
                $init$iter$346();
                (function($$iter$346){
                    $$$cl1.defineAttr($$iter$346,'index$347',function(){return this.index$347_;},function(index$349){return this.index$347_=index$349;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$346,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};});
                    $$$cl1.defineAttr($$iter$346,'bucket$348',function(){return this.bucket$348_;},function(bucket$350){return this.bucket$348_=bucket$350;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$346,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};});
                    $$iter$346.next=function next(){
                        var $$iter$346=this;
                        if((!$$$cl1.exists($$iter$346.bucket$348))){
                            while(($$iter$346.index$347=$$iter$346.index$347.successor).compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                                $$iter$346.bucket$348=$$hashSet.store$299.get($$iter$346.index$347);
                                if($$$cl1.exists($$iter$346.bucket$348)){
                                    break;
                                }
                            }
                        }
                        var bucket$351;
                        if((bucket$351=$$iter$346.bucket$348)!==null){
                            var car$352=bucket$351.car;
                            $prop$getCar$352={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next','$at','car']};}};
                            $prop$getCar$352.get=function(){return car$352};
                            ($$iter$346.bucket$348=bucket$351.cdr);
                            return car$352;
                        }
                        return $$$cl1.getFinished();
                    };$$iter$346.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:$$$cl1.Finished}]},$ps:[],$cont:iter$346,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next']};};
                })(iter$346.$$.prototype);
                var iter$353;
                function getIter$353(){
                    if (iter$353===undefined)iter$353=$init$iter$346()({Element:$$hashSet.$$targs$$.Element});
                    return iter$353;
                }
                getIter$353.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$346},d:['ceylon.collection','HashSet','$m','iterator','$at','iter']};};
                $prop$getIter$353={get:getIter$353,$$metamodel$$:getIter$353.$$metamodel$$};
                return getIter$353();
            };$$hashSet.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator']};};
            $$hashSet.count=function count(selecting$354){
                var $$hashSet=this;
                var c$355=(0);
                function setC$355(c$356){return c$355=c$356;};
                var index$357=(0);
                function setIndex$357(index$358){return index$357=index$358;};
                while(index$357.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    var bucket$359=$$hashSet.store$299.get(index$357);
                    function setBucket$359(bucket$360){return bucket$359=bucket$360;};
                    $prop$getBucket$359={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','bucket']};}};
                    $prop$getBucket$359.get=function(){return bucket$359};
                    $prop$getBucket$359.set=setBucket$359;
                    if (setBucket$359.$$metamodel$$===undefined)setBucket$359.$$metamodel$$=$prop$getBucket$359.$$metamodel$$;
                    var cell$361;
                    while((cell$361=bucket$359)!==null){
                        if(selecting$354(cell$361.car)){
                            (oldc$362=c$355,c$355=oldc$362.successor,oldc$362);
                            var oldc$362;
                        }
                        bucket$359=cell$361.cdr;
                    }
                    (oldindex$363=index$357,index$357=oldindex$363.successor,oldindex$363);
                    var oldindex$363;
                }
                return c$355;
            };$$hashSet.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','count']};};
            $$$cl1.defineAttr($$hashSet,'string',function(){
                var $$hashSet=this;
                var index$364=(0);
                function setIndex$364(index$365){return index$364=index$365;};
                $prop$getIndex$364={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','index']};}};
                $prop$getIndex$364.get=function(){return index$364};
                $prop$getIndex$364.set=setIndex$364;
                if (setIndex$364.$$metamodel$$===undefined)setIndex$364.$$metamodel$$=$prop$getIndex$364.$$metamodel$$;
                var ret$366=$$$cl1.StringBuilder();
                $prop$getRet$366={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashSet','$at','string','$at','ret']};}};
                $prop$getRet$366.get=function(){return ret$366};
                ret$366.append($$$cl1.String("(",1));
                var first$367=true;
                function setFirst$367(first$368){return first$367=first$368;};
                $prop$getFirst$367={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','first']};}};
                $prop$getFirst$367.get=function(){return first$367};
                $prop$getFirst$367.set=setFirst$367;
                if (setFirst$367.$$metamodel$$===undefined)setFirst$367.$$metamodel$$=$prop$getFirst$367.$$metamodel$$;
                while(index$364.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    var bucket$369=$$hashSet.store$299.get(index$364);
                    function setBucket$369(bucket$370){return bucket$369=bucket$370;};
                    $prop$getBucket$369={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','bucket']};}};
                    $prop$getBucket$369.get=function(){return bucket$369};
                    $prop$getBucket$369.set=setBucket$369;
                    if (setBucket$369.$$metamodel$$===undefined)setBucket$369.$$metamodel$$=$prop$getBucket$369.$$metamodel$$;
                    var cell$371;
                    while((cell$371=bucket$369)!==null){
                        if((!first$367)){
                            ret$366.append($$$cl1.String(", ",2));
                        }else {
                            first$367=false;
                        }
                        ret$366.append(cell$371.car.string);
                        bucket$369=cell$371.cdr;
                    }
                    (oldindex$372=index$364,index$364=oldindex$372.successor,oldindex$372);
                    var oldindex$372;
                }
                ret$366.append($$$cl1.String(")",1));
                return ret$366.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','string']};});$$$cl1.defineAttr($$hashSet,'hash',function(){
                var $$hashSet=this;
                var index$373=(0);
                function setIndex$373(index$374){return index$373=index$374;};
                $prop$getIndex$373={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','index']};}};
                $prop$getIndex$373.get=function(){return index$373};
                $prop$getIndex$373.set=setIndex$373;
                if (setIndex$373.$$metamodel$$===undefined)setIndex$373.$$metamodel$$=$prop$getIndex$373.$$metamodel$$;
                var hash$375=(17);
                function setHash$375(hash$376){return hash$375=hash$376;};
                $prop$getHash$375={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','hash']};}};
                $prop$getHash$375.get=function(){return hash$375};
                $prop$getHash$375.set=setHash$375;
                if (setHash$375.$$metamodel$$===undefined)setHash$375.$$metamodel$$=$prop$getHash$375.$$metamodel$$;
                while(index$373.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    var bucket$377=$$hashSet.store$299.get(index$373);
                    function setBucket$377(bucket$378){return bucket$377=bucket$378;};
                    $prop$getBucket$377={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','bucket']};}};
                    $prop$getBucket$377.get=function(){return bucket$377};
                    $prop$getBucket$377.set=setBucket$377;
                    if (setBucket$377.$$metamodel$$===undefined)setBucket$377.$$metamodel$$=$prop$getBucket$377.$$metamodel$$;
                    var cell$379;
                    while((cell$379=bucket$377)!==null){
                        hash$375=hash$375.times((31)).plus(cell$379.car.hash);
                        bucket$377=cell$379.cdr;
                    }
                    (oldindex$380=index$373,index$373=oldindex$380.successor,oldindex$380);
                    var oldindex$380;
                }
                return hash$375;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','hash']};});$$hashSet.equals=function equals(that$381){
                var $$hashSet=this;
                var that$382;
                if($$$cl1.isOfType((that$382=that$381),{t:$$$cl1.Set,a:{Element:{t:$$$cl1.Object}}})&&$$hashSet.size.equals(that$382.size)){
                    var index$383=(0);
                    function setIndex$383(index$384){return index$383=index$384;};
                    $prop$getIndex$383={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','index']};}};
                    $prop$getIndex$383.get=function(){return index$383};
                    $prop$getIndex$383.set=setIndex$383;
                    if (setIndex$383.$$metamodel$$===undefined)setIndex$383.$$metamodel$$=$prop$getIndex$383.$$metamodel$$;
                    while(index$383.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                        var bucket$385=$$hashSet.store$299.get(index$383);
                        function setBucket$385(bucket$386){return bucket$385=bucket$386;};
                        $prop$getBucket$385={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','bucket']};}};
                        $prop$getBucket$385.get=function(){return bucket$385};
                        $prop$getBucket$385.set=setBucket$385;
                        if (setBucket$385.$$metamodel$$===undefined)setBucket$385.$$metamodel$$=$prop$getBucket$385.$$metamodel$$;
                        var cell$387;
                        while((cell$387=bucket$385)!==null){
                            if((!that$382.contains(cell$387.car))){
                                return false;
                            }
                            bucket$385=cell$387.cdr;
                        }
                        (oldindex$388=index$383,index$383=oldindex$388.successor,oldindex$388);
                        var oldindex$388;
                    }
                    return true;
                }
                return false;
            };$$hashSet.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','equals']};};
            $$$cl1.defineAttr($$hashSet,'clone',function(){
                var $$hashSet=this;
                var clone$389=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                $prop$getClone$389={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},d:['ceylon.collection','HashSet','$at','clone','$at','clone']};}};
                $prop$getClone$389.get=function(){return clone$389};
                (clone$389._size$300=$$hashSet._size$300);
                (clone$389.store$299=makeCellElementArray($$hashSet.store$299.size,{Element:$$hashSet.$$targs$$.Element}));
                var index$390=(0);
                function setIndex$390(index$391){return index$390=index$391;};
                $prop$getIndex$390={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','clone','$at','index']};}};
                $prop$getIndex$390.get=function(){return index$390};
                $prop$getIndex$390.set=setIndex$390;
                if (setIndex$390.$$metamodel$$===undefined)setIndex$390.$$metamodel$$=$prop$getIndex$390.$$metamodel$$;
                while(index$390.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    var bucket$392;
                    if((bucket$392=$$hashSet.store$299.get(index$390))!==null){
                        clone$389.store$299.set(index$390,bucket$392.clone);
                    }
                    (oldindex$393=index$390,index$390=oldindex$393.successor,oldindex$393);
                    var oldindex$393;
                }
                return clone$389;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','clone']};});$$hashSet.contains=function contains(element$394){
                var $$hashSet=this;
                var index$395=(0);
                function setIndex$395(index$396){return index$395=index$396;};
                while(index$395.compare($$hashSet.store$299.size).equals($$$cl1.getSmaller())){
                    var bucket$397=$$hashSet.store$299.get(index$395);
                    function setBucket$397(bucket$398){return bucket$397=bucket$398;};
                    $prop$getBucket$397={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','contains','$at','bucket']};}};
                    $prop$getBucket$397.get=function(){return bucket$397};
                    $prop$getBucket$397.set=setBucket$397;
                    if (setBucket$397.$$metamodel$$===undefined)setBucket$397.$$metamodel$$=$prop$getBucket$397.$$metamodel$$;
                    var cell$399;
                    while((cell$399=bucket$397)!==null){
                        if(cell$399.car.equals(element$394)){
                            return true;
                        }
                        bucket$397=cell$399.cdr;
                    }
                    (oldindex$400=index$395,index$395=oldindex$400.successor,oldindex$400);
                    var oldindex$400;
                }
                return false;
            };$$hashSet.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','contains']};};
            $$hashSet.complement=function complement(set$401,$$$mptypes){
                var $$hashSet=this;
                var ret$402=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
                var it$403 = $$hashSet.iterator();
                var elem$404;while ((elem$404=it$403.next())!==$$$cl1.getFinished()){
                    if((!set$401.contains(elem$404))){
                        ret$402.add(elem$404);
                    }
                }
                return ret$402;
            };$$hashSet.complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','complement']};};
            $$hashSet.exclusiveUnion=function exclusiveUnion(set$405,$$$mptypes){
                var $$hashSet=this;
                var ret$406=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$407 = $$hashSet.iterator();
                var elem$408;while ((elem$408=it$407.next())!==$$$cl1.getFinished()){
                    if((!set$405.contains(elem$408))){
                        ret$406.add(elem$408);
                    }
                }
                var it$409 = set$405.iterator();
                var elem$410;while ((elem$410=it$409.next())!==$$$cl1.getFinished()){
                    if((!$$hashSet.contains(elem$410))){
                        ret$406.add(elem$410);
                    }
                }
                return ret$406;
            };$$hashSet.exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
            $$hashSet.intersection=function intersection(set$411,$$$mptypes){
                var $$hashSet=this;
                var ret$412=HashSet(undefined,{Element:{ t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                var it$413 = $$hashSet.iterator();
                var elem$414;while ((elem$414=it$413.next())!==$$$cl1.getFinished()){
                    var elem$415;
                    if(set$411.contains(elem$414)&&$$$cl1.isOfType((elem$415=elem$414),$$$mptypes.Other)){
                        ret$412.add(elem$415);
                    }
                }
                return ret$412;
            };$$hashSet.intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','intersection']};};
            $$hashSet.union=function union(set$416,$$$mptypes){
                var $$hashSet=this;
                var ret$417=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
                ret$417.addAll($$hashSet);
                ret$417.addAll(set$416);
                return ret$417;
            };$$hashSet.union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','union']};};
            $$$cl1.defineAttr($$hashSet,'values$298',function(){return this.values$298_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:HashSet,d:['ceylon.collection','HashSet','$at','values']};});
        })(HashSet.$$.prototype);
    }
    return HashSet;
}
exports.$init$HashSet=$init$HashSet;
$init$HashSet();
function LinkedList(values$418, $$targs$$,$$linkedList){
    $init$LinkedList();
    if ($$linkedList===undefined)$$linkedList=new LinkedList.$$;
    $$$cl1.set_type_args($$linkedList,$$targs$$);
    if(values$418===undefined){values$418=$$$cl1.getEmpty();}
    $$linkedList.values$418_=values$418;
    MutableList($$linkedList.$$targs$$===undefined?$$targs$$:{Element:$$linkedList.$$targs$$.Element},$$linkedList);
    $$linkedList.head$419_=null;
    $$linkedList.$prop$getHead$419={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};}};
    $$linkedList.$prop$getHead$419.get=function(){return head$419};
    $$linkedList.tail$420_=null;
    $$linkedList.$prop$getTail$420={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};}};
    $$linkedList.$prop$getTail$420.get=function(){return tail$420};
    $$linkedList._size$421_=(0);
    $$linkedList.$prop$get_size$421={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};}};
    $$linkedList.$prop$get_size$421.get=function(){return _size$421};
    var it$422 = $$linkedList.values$418.iterator();
    var val$423;while ((val$423=it$422.next())!==$$$cl1.getFinished()){
        $$linkedList._add$424(val$423);
    }
    return $$linkedList;
}
LinkedList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{}},satisfies:[{t:MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A mutable Linked List",21)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','LinkedList']};};
exports.LinkedList=LinkedList;
function $init$LinkedList(){
    if (LinkedList.$$===undefined){
        $$$cl1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',$$$cl1.Basic,$init$MutableList());
        (function($$linkedList){
            $$$cl1.defineAttr($$linkedList,'head$419',function(){return this.head$419_;},function(head$425){return this.head$419_=head$425;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};});
            $$$cl1.defineAttr($$linkedList,'tail$420',function(){return this.tail$420_;},function(tail$426){return this.tail$420_=tail$426;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};});
            $$$cl1.defineAttr($$linkedList,'_size$421',function(){return this._size$421_;},function(_size$427){return this._size$421_=_size$427;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};});
            $$linkedList._add$424=function _add$424(val$428){
                var $$linkedList=this;
                var newTail$429=Cell(val$428,null,{T:$$linkedList.$$targs$$.Element});
                var tail$430;
                if((tail$430=$$linkedList.tail$420)!==null){
                    (tail$430.cdr=newTail$429);
                    ($$linkedList.tail$420=newTail$429);
                }else {
                    $$linkedList.tail$420=($$linkedList.head$419=newTail$429);
                }
                (old_size$431=$$linkedList._size$421,$$linkedList._size$421=old_size$431.successor,old_size$431);
                var old_size$431;
            };$$linkedList._add$424.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','_add']};};
            $$linkedList.set=function set(index$432,val$433){
                var $$linkedList=this;
                if(index$432.compare($$linkedList._size$421).equals($$$cl1.getSmaller())){
                    var iter$434=$$linkedList.head$419;
                    function setIter$434(iter$435){return iter$434=iter$435;};
                    $prop$getIter$434={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','iter']};}};
                    $prop$getIter$434.get=function(){return iter$434};
                    $prop$getIter$434.set=setIter$434;
                    if (setIter$434.$$metamodel$$===undefined)setIter$434.$$metamodel$$=$prop$getIter$434.$$metamodel$$;
                    var i$436=(0);
                    function setI$436(i$437){return i$436=i$437;};
                    $prop$getI$436={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','i']};}};
                    $prop$getI$436.get=function(){return i$436};
                    $prop$getI$436.set=setI$436;
                    if (setI$436.$$metamodel$$===undefined)setI$436.$$metamodel$$=$prop$getI$436.$$metamodel$$;
                    var cell$438;
                    while((cell$438=iter$434)!==null){
                        if((oldi$439=i$436,i$436=oldi$439.successor,oldi$439).equals(index$432)){
                            (cell$438.car=val$433);
                            return;
                        }
                        var oldi$439;
                        iter$434=cell$438.cdr;
                    }
                }else {
                    var need$440=index$432.minus($$linkedList._size$421);
                    function setNeed$440(need$441){return need$440=need$441;};
                    $prop$getNeed$440={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','need']};}};
                    $prop$getNeed$440.get=function(){return need$440};
                    $prop$getNeed$440.set=setNeed$440;
                    if (setNeed$440.$$metamodel$$===undefined)setNeed$440.$$metamodel$$=$prop$getNeed$440.$$metamodel$$;
                    var newTail$442=Cell(val$433,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewTail$442={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','set','$at','newTail']};}};
                    $prop$getNewTail$442.get=function(){return newTail$442};
                    var newHead$443=newTail$442;
                    function setNewHead$443(newHead$444){return newHead$443=newHead$444;};
                    $prop$getNewHead$443={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','newHead']};}};
                    $prop$getNewHead$443.get=function(){return newHead$443};
                    $prop$getNewHead$443.set=setNewHead$443;
                    if (setNewHead$443.$$metamodel$$===undefined)setNewHead$443.$$metamodel$$=$prop$getNewHead$443.$$metamodel$$;
                    while((oldneed$445=need$440,need$440=oldneed$445.predecessor,oldneed$445).compare((0)).equals($$$cl1.getLarger())){
                        newHead$443=Cell(val$433,newHead$443,{T:$$linkedList.$$targs$$.Element});
                    }
                    var oldneed$445;
                    var tail$446;
                    if((tail$446=$$linkedList.tail$420)!==null){
                        (tail$446.cdr=newHead$443);
                    }else {
                        $$linkedList.head$419=newHead$443;
                    }
                    $$linkedList.tail$420=newTail$442;
                    $$linkedList._size$421=index$432.plus((1));
                }
            };$$linkedList.set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Sets an item at the given index. List is expanded if index > size",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','set']};};
            $$linkedList.insert=function insert(index$447,val$448){
                var $$linkedList=this;
                if((index$447.compare($$linkedList._size$421)!==$$$cl1.getSmaller())){
                    $$linkedList.set(index$447,val$448);
                }else {
                    var newCell$449=Cell(val$448,null,{T:$$linkedList.$$targs$$.Element});
                    $prop$getNewCell$449={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','insert','$at','newCell']};}};
                    $prop$getNewCell$449.get=function(){return newCell$449};
                    if(index$447.equals((0))){
                        (newCell$449.cdr=$$linkedList.head$419);
                        $$linkedList.head$419=newCell$449;
                    }else {
                        var iter$450=$$linkedList.head$419;
                        function setIter$450(iter$451){return iter$450=iter$451;};
                        $prop$getIter$450={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','iter']};}};
                        $prop$getIter$450.get=function(){return iter$450};
                        $prop$getIter$450.set=setIter$450;
                        if (setIter$450.$$metamodel$$===undefined)setIter$450.$$metamodel$$=$prop$getIter$450.$$metamodel$$;
                        var prev$452=null;
                        function setPrev$452(prev$453){return prev$452=prev$453;};
                        $prop$getPrev$452={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','prev']};}};
                        $prop$getPrev$452.get=function(){return prev$452};
                        $prop$getPrev$452.set=setPrev$452;
                        if (setPrev$452.$$metamodel$$===undefined)setPrev$452.$$metamodel$$=$prop$getPrev$452.$$metamodel$$;
                        var i$454=(0);
                        function setI$454(i$455){return i$454=i$455;};
                        $prop$getI$454={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','i']};}};
                        $prop$getI$454.get=function(){return i$454};
                        $prop$getI$454.set=setI$454;
                        if (setI$454.$$metamodel$$===undefined)setI$454.$$metamodel$$=$prop$getI$454.$$metamodel$$;
                        var cell$456;
                        while((cell$456=iter$450)!==null){
                            if((oldi$457=i$454,i$454=oldi$457.successor,oldi$457).equals(index$447)){
                                var prev2$458;
                                if((prev2$458=prev$452)!==null){
                                    (prev2$458.cdr=newCell$449);
                                    (newCell$449.cdr=cell$456);
                                }else {}
                                break;
                            }
                            var oldi$457;
                            prev$452=iter$450;
                            iter$450=cell$456.cdr;
                        }
                    }
                    (old_size$459=$$linkedList._size$421,$$linkedList._size$421=old_size$459.successor,old_size$459);
                    var old_size$459;
                }
            };$$linkedList.insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Inserts an item at specified index, list is expanded if index > size",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','insert']};};
            $$linkedList.add=function add(val$460){
                var $$linkedList=this;
                $$linkedList._add$424(val$460);
            };$$linkedList.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds an item at the end of this list",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','add']};};
            $$linkedList.addAll=function addAll(values$461){
                var $$linkedList=this;
                var it$462 = values$461.iterator();
                var val$463;while ((val$463=it$462.next())!==$$$cl1.getFinished()){
                    $$linkedList.add(val$463);
                }
            };$$linkedList.addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','addAll']};};
            $$linkedList.remove=function remove(index$464){
                var $$linkedList=this;
                if(index$464.compare($$linkedList._size$421).equals($$$cl1.getSmaller())){
                    var iter$465=$$linkedList.head$419;
                    function setIter$465(iter$466){return iter$465=iter$466;};
                    $prop$getIter$465={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','iter']};}};
                    $prop$getIter$465.get=function(){return iter$465};
                    $prop$getIter$465.set=setIter$465;
                    if (setIter$465.$$metamodel$$===undefined)setIter$465.$$metamodel$$=$prop$getIter$465.$$metamodel$$;
                    var prev$467=null;
                    function setPrev$467(prev$468){return prev$467=prev$468;};
                    $prop$getPrev$467={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','prev']};}};
                    $prop$getPrev$467.get=function(){return prev$467};
                    $prop$getPrev$467.set=setPrev$467;
                    if (setPrev$467.$$metamodel$$===undefined)setPrev$467.$$metamodel$$=$prop$getPrev$467.$$metamodel$$;
                    var i$469=(0);
                    function setI$469(i$470){return i$469=i$470;};
                    $prop$getI$469={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','i']};}};
                    $prop$getI$469.get=function(){return i$469};
                    $prop$getI$469.set=setI$469;
                    if (setI$469.$$metamodel$$===undefined)setI$469.$$metamodel$$=$prop$getI$469.$$metamodel$$;
                    var cell$471;
                    while((cell$471=iter$465)!==null){
                        if((oldi$472=i$469,i$469=oldi$472.successor,oldi$472).equals(index$464)){
                            var prev2$473;
                            if((prev2$473=prev$467)!==null){
                                (prev2$473.cdr=cell$471.cdr);
                            }else {
                                $$linkedList.head$419=cell$471.cdr;
                            }
                            if((!$$$cl1.exists(cell$471.cdr))){
                                $$linkedList.tail$420=prev$467;
                            }
                            (old_size$474=$$linkedList._size$421,$$linkedList._size$421=old_size$474.predecessor,old_size$474);
                            var old_size$474;
                            return;
                        }
                        var oldi$472;
                        prev$467=iter$465;
                        iter$465=cell$471.cdr;
                    }
                }else {
                    throw $$$cl1.wrapexc($$$cl1.Exception(),'137:12-137:17','ceylon/collection/LinkedList.ceylon');
                }
            };$$linkedList.remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes the item at the specified index",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','remove']};};
            $$linkedList.removeElement=function removeElement(val$475){
                var $$linkedList=this;
                var iter$476=$$linkedList.head$419;
                function setIter$476(iter$477){return iter$476=iter$477;};
                var prev$478=null;
                function setPrev$478(prev$479){return prev$478=prev$479;};
                var cell$480;
                while((cell$480=iter$476)!==null){
                    if(eq(cell$480.car,val$475)){
                        var prev2$481;
                        if((prev2$481=prev$478)!==null){
                            (prev2$481.cdr=cell$480.cdr);
                        }else {
                            $$linkedList.head$419=cell$480.cdr;
                        }
                        if((!$$$cl1.exists(cell$480.cdr))){
                            $$linkedList.tail$420=prev$478;
                        }
                        (old_size$482=$$linkedList._size$421,$$linkedList._size$421=old_size$482.predecessor,old_size$482);
                        var old_size$482;
                        iter$476=cell$480.cdr;
                    }else {
                        prev$478=iter$476;
                        iter$476=cell$480.cdr;
                    }
                }
            };$$linkedList.removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','removeElement']};};
            $$linkedList.clear=function clear(){
                var $$linkedList=this;
                $$linkedList._size$421=(0);
                $$linkedList.head$419=($$linkedList.tail$420=null);
            };$$linkedList.clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove every item",17)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','clear']};};
            $$linkedList.get=function get(index$483){
                var $$linkedList=this;
                var iter$484=$$linkedList.head$419;
                function setIter$484(iter$485){return iter$484=iter$485;};
                var i$486=(0);
                function setI$486(i$487){return i$486=i$487;};
                var cell$488;
                while((cell$488=iter$484)!==null){
                    if((oldi$489=i$486,i$486=oldi$489.successor,oldi$489).equals(index$483)){
                        return cell$488.car;
                    }
                    var oldi$489;
                    iter$484=cell$488.cdr;
                }
                return null;
            };$$linkedList.get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','get']};};
            $$linkedList.span=function span(from$490,to$491){
                var $$linkedList=this;
                var ret$492=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$493=$$linkedList.head$419;
                function setIter$493(iter$494){return iter$493=iter$494;};
                var i$495=(0);
                function setI$495(i$496){return i$495=i$496;};
                var cell$497;
                while((cell$497=iter$493)!==null){
                    if(i$495.compare(to$491).equals($$$cl1.getLarger())){
                        break;
                    }
                    if((i$495.compare(from$490)!==$$$cl1.getSmaller())){
                        ret$492.add(cell$497.car);
                    }
                    (oldi$498=i$495,i$495=oldi$498.successor,oldi$498);
                    var oldi$498;
                    iter$493=cell$497.cdr;
                }
                return ret$492;
            };$$linkedList.span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','span']};};
            $$linkedList.spanFrom=function spanFrom(from$499){
                var $$linkedList=this;
                var ret$500=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$501=$$linkedList.head$419;
                function setIter$501(iter$502){return iter$501=iter$502;};
                var i$503=(0);
                function setI$503(i$504){return i$503=i$504;};
                var cell$505;
                while((cell$505=iter$501)!==null){
                    if((i$503.compare(from$499)!==$$$cl1.getSmaller())){
                        ret$500.add(cell$505.car);
                    }
                    (oldi$506=i$503,i$503=oldi$506.successor,oldi$506);
                    var oldi$506;
                    iter$501=cell$505.cdr;
                }
                return ret$500;
            };$$linkedList.spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanFrom']};};
            $$linkedList.spanTo=function spanTo(to$507){
                var $$linkedList=this;
                var ret$508=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                var iter$509=$$linkedList.head$419;
                function setIter$509(iter$510){return iter$509=iter$510;};
                var i$511=(0);
                function setI$511(i$512){return i$511=i$512;};
                var cell$513;
                while((cell$513=iter$509)!==null){
                    if(i$511.compare(to$507).equals($$$cl1.getLarger())){
                        break;
                    }
                    ret$508.add(cell$513.car);
                    (oldi$514=i$511,i$511=oldi$514.successor,oldi$514);
                    var oldi$514;
                    iter$509=cell$513.cdr;
                }
                return ret$508;
            };$$linkedList.spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanTo']};};
            $$linkedList.segment=function segment(from$515,length$516){
                var $$linkedList=this;
                var ret$517=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                if(length$516.equals((0))){
                    return ret$517;
                }
                var iter$518=$$linkedList.head$419;
                function setIter$518(iter$519){return iter$518=iter$519;};
                var i$520=(0);
                function setI$520(i$521){return i$520=i$521;};
                var cell$522;
                while((cell$522=iter$518)!==null){
                    if((i$520.compare(from$515)!==$$$cl1.getSmaller())){
                        if((ret$517._size$421.compare(length$516)!==$$$cl1.getSmaller())){
                            break;
                        }
                        ret$517.add(cell$522.car);
                    }
                    (oldi$523=i$520,i$520=oldi$523.successor,oldi$523);
                    var oldi$523;
                    iter$518=cell$522.cdr;
                }
                return ret$517;
            };$$linkedList.segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','segment']};};
            $$linkedList.defines=function defines(index$524){
                var $$linkedList=this;
                return ((index$524.compare((0))!==$$$cl1.getSmaller())&&index$524.compare($$linkedList._size$421).equals($$$cl1.getSmaller()));
            };$$linkedList.defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','defines']};};
            $$linkedList.contains=function contains(element$525){
                var $$linkedList=this;
                var iter$526=$$linkedList.head$419;
                function setIter$526(iter$527){return iter$526=iter$527;};
                var cell$528;
                while((cell$528=iter$526)!==null){
                    var elem$529;
                    if($$$cl1.isOfType((elem$529=cell$528.car),{t:$$$cl1.Object})){
                        if(elem$529.equals(element$525)){
                            return true;
                        }
                    }
                    iter$526=cell$528.cdr;
                }
                return false;
            };$$linkedList.contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','contains']};};
            $$$cl1.defineAttr($$linkedList,'size',function(){
                var $$linkedList=this;
                return $$linkedList._size$421;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','size']};});$$linkedList.count=function count(selecting$530){
                var $$linkedList=this;
                var iter$531=$$linkedList.head$419;
                function setIter$531(iter$532){return iter$531=iter$532;};
                var c$533=(0);
                function setC$533(c$534){return c$533=c$534;};
                var cell$535;
                while((cell$535=iter$531)!==null){
                    if(selecting$530(cell$535.car)){
                        (oldc$536=c$533,c$533=oldc$536.successor,oldc$536);
                        var oldc$536;
                    }
                    iter$531=cell$535.cdr;
                }
                return c$533;
            };$$linkedList.count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','count']};};
            $$$cl1.defineAttr($$linkedList,'lastIndex',function(){
                var $$linkedList=this;
                return ((!$$linkedList.empty)?$$linkedList._size$421.minus((1)):null);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','lastIndex']};});$$linkedList.iterator=function iterator(){
                var $$linkedList=this;
                return CellIterator($$linkedList.head$419,{T:$$linkedList.$$targs$$.Element});
            };$$linkedList.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','iterator']};};
            $$$cl1.defineAttr($$linkedList,'clone',function(){
                var $$linkedList=this;
                var ret$537=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$537={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','clone','$at','ret']};}};
                $prop$getRet$537.get=function(){return ret$537};
                (ret$537.head$419=$$linkedList.head$419);
                (ret$537.tail$420=$$linkedList.tail$420);
                (ret$537._size$421=$$linkedList.size);
                return ret$537;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','clone']};});$$$cl1.defineAttr($$linkedList,'keys',function(){
                var $$linkedList=this;
                return (opt$538=($$linkedList.empty?$$$cl1.getEmpty():null),opt$538!==null?opt$538:$$$cl1.Range((0),$$linkedList._size$421,{Element:{t:$$$cl1.Integer}}));
                var opt$538;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','keys']};});$$$cl1.defineAttr($$linkedList,'string',function(){
                var $$linkedList=this;
                var b$539=$$$cl1.StringBuilder();
                $prop$getB$539={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','LinkedList','$at','string','$at','b']};}};
                $prop$getB$539.get=function(){return b$539};
                b$539.append($$$cl1.String("[",1));
                var iter$540=$$linkedList.head$419;
                function setIter$540(iter$541){return iter$540=iter$541;};
                $prop$getIter$540={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','string','$at','iter']};}};
                $prop$getIter$540.get=function(){return iter$540};
                $prop$getIter$540.set=setIter$540;
                if (setIter$540.$$metamodel$$===undefined)setIter$540.$$metamodel$$=$prop$getIter$540.$$metamodel$$;
                var cell$542;
                while((cell$542=iter$540)!==null){
                    var car$543;
                    if($$$cl1.isOfType((car$543=cell$542.car),{t:$$$cl1.Object})){
                        b$539.append(car$543.string);
                    }else {
                        b$539.append($$$cl1.String("null",4));
                    }
                    iter$540=cell$542.cdr;
                    if($$$cl1.exists(iter$540)){
                        b$539.append($$$cl1.String(", ",2));
                    }
                }
                b$539.append($$$cl1.String("]",1));
                return b$539.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','string']};});$$$cl1.defineAttr($$linkedList,'hash',function(){
                var $$linkedList=this;
                var h$544=(17);
                function setH$544(h$545){return h$544=h$545;};
                $prop$getH$544={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','h']};}};
                $prop$getH$544.get=function(){return h$544};
                $prop$getH$544.set=setH$544;
                if (setH$544.$$metamodel$$===undefined)setH$544.$$metamodel$$=$prop$getH$544.$$metamodel$$;
                var iter$546=$$linkedList.head$419;
                function setIter$546(iter$547){return iter$546=iter$547;};
                $prop$getIter$546={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','iter']};}};
                $prop$getIter$546.get=function(){return iter$546};
                $prop$getIter$546.set=setIter$546;
                if (setIter$546.$$metamodel$$===undefined)setIter$546.$$metamodel$$=$prop$getIter$546.$$metamodel$$;
                var cell$548;
                while((cell$548=iter$546)!==null){
                    var car$549;
                    if($$$cl1.isOfType((car$549=cell$548.car),{t:$$$cl1.Object})){
                        h$544=h$544.times((31)).plus(car$549.hash);
                    }else {
                        h$544=h$544.times((31));
                    }
                    iter$546=cell$548.cdr;
                }
                return h$544;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','hash']};});$$linkedList.equals=function equals(that$550){
                var $$linkedList=this;
                var that$551;
                if($$$cl1.isOfType((that$551=that$550),{t:$$$cl1.List,a:{Element:{t:$$$cl1.Object}}})&&$$linkedList._size$421.equals(that$551.size)){
                    var iter$552=$$linkedList.head$419;
                    function setIter$552(iter$553){return iter$552=iter$553;};
                    $prop$getIter$552={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter']};}};
                    $prop$getIter$552.get=function(){return iter$552};
                    $prop$getIter$552.set=setIter$552;
                    if (setIter$552.$$metamodel$$===undefined)setIter$552.$$metamodel$$=$prop$getIter$552.$$metamodel$$;
                    var iter2$554=that$551.iterator();
                    function setIter2$554(iter2$555){return iter2$554=iter2$555;};
                    $prop$getIter2$554={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Object}}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter2']};}};
                    $prop$getIter2$554.get=function(){return iter2$554};
                    $prop$getIter2$554.set=setIter2$554;
                    if (setIter2$554.$$metamodel$$===undefined)setIter2$554.$$metamodel$$=$prop$getIter2$554.$$metamodel$$;
                    var cell$556;
                    while((cell$556=iter$552)!==null){
                        var thatElement$557;
                        if(!$$$cl1.isOfType((thatElement$557=iter2$554.next()),{t:$$$cl1.Finished})){
                            if((!eq(cell$556.car,thatElement$557))){
                                return false;
                            }
                            iter$552=cell$556.cdr;
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
                var ret$558=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$558={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','reversed','$at','ret']};}};
                $prop$getRet$558.get=function(){return ret$558};
                var iter$559=$$linkedList.head$419;
                function setIter$559(iter$560){return iter$559=iter$560;};
                $prop$getIter$559={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','reversed','$at','iter']};}};
                $prop$getIter$559.get=function(){return iter$559};
                $prop$getIter$559.set=setIter$559;
                if (setIter$559.$$metamodel$$===undefined)setIter$559.$$metamodel$$=$prop$getIter$559.$$metamodel$$;
                var cell$561;
                while((cell$561=iter$559)!==null){
                    (ret$558.head$419=Cell(cell$561.car,ret$558.head$419,{T:$$linkedList.$$targs$$.Element}));
                    if((!$$$cl1.exists(ret$558.tail$420))){
                        (ret$558.tail$420=ret$558.head$419);
                    }
                    iter$559=cell$561.cdr;
                }
                (ret$558._size$421=$$linkedList._size$421);
                return ret$558;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','reversed']};});$$$cl1.defineAttr($$linkedList,'rest',function(){
                var $$linkedList=this;
                var ret$562=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
                $prop$getRet$562={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','rest','$at','ret']};}};
                $prop$getRet$562.get=function(){return ret$562};
                var iter$563=(opt$564=$$linkedList.head$419,opt$564!==null?opt$564.cdr:null);
                function setIter$563(iter$565){return iter$563=iter$565;};
                $prop$getIter$563={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','rest','$at','iter']};}};
                $prop$getIter$563.get=function(){return iter$563};
                $prop$getIter$563.set=setIter$563;
                if (setIter$563.$$metamodel$$===undefined)setIter$563.$$metamodel$$=$prop$getIter$563.$$metamodel$$;
                var opt$564;
                var cell$566;
                while((cell$566=iter$563)!==null){
                    ret$562.add(cell$566.car);
                    iter$563=cell$566.cdr;
                }
                return ret$562;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','rest']};});$$$cl1.defineAttr($$linkedList,'values$418',function(){return this.values$418_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:LinkedList,d:['ceylon.collection','LinkedList','$at','values']};});
        })(LinkedList.$$.prototype);
    }
    return LinkedList;
}
exports.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
function makeCellEntryArray(size$567,$$$mptypes){
    return $$$cl1.arrayOfSize(size$567,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}});
};makeCellEntryArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},d:['ceylon.collection','makeCellEntryArray']};};
function makeCellElementArray(size$568,$$$mptypes){
    return $$$cl1.arrayOfSize(size$568,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}});
};makeCellElementArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Element:{}},d:['ceylon.collection','makeCellElementArray']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("A module for collections.\n\nYou can find here the following mutable collection types:\n\n- [[MutableList]]\n- [[MutableSet]]\n- [[MutableMap]]\n\nAlong with concrete implementations for each:\n\n- [[LinkedList]]\n- [[HashSet]]\n- [[HashMap]]\n",231)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.license($$$cl1.String("Apache Software License",23))];};
function MutableList($$targs$$,$$mutableList){
    $$$cl1.List($$mutableList.$$targs$$===undefined?$$targs$$:{Element:$$mutableList.$$targs$$.Element},$$mutableList);
    $$$cl1.set_type_args($$mutableList,$$targs$$);
}
MutableList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{}},satisfies:[{t:$$$cl1.List,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[List]] supporting addition, insertion, removal, and \nmutation of its elements.",82)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableList']};};
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
MutableMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Mutable map",11)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableMap']};};
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
function MutableSet($$targs$$,$$mutableSet){
    $$$cl1.Set($$mutableSet.$$targs$$===undefined?$$targs$$:{Element:$$mutableSet.$$targs$$.Element},$$mutableSet);
    $$$cl1.set_type_args($$mutableSet,$$targs$$);
}
MutableSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Set,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[Set]] supporting addition of new elements and removal of \nexisting elements.",80)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','MutableSet']};};
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
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
