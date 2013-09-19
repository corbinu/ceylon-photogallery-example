(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.collection","$mod-version":"0.6","ceylon.collection":{"Cell":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$nm":"T"},"$mt":"prm","$nm":"_car"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"prm","$nm":"_cdr"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$at":{"car":{"$t":{"$nm":"T"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"car"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"_cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"attr","$nm":"_cdr"},"cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"cdr"},"_car":{"$t":{"$nm":"T"},"$mt":"attr","$nm":"_car"}},"$nm":"Cell"},"MutableSet":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[Set]] supporting addition of new elements and removal of \nexisting elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every element from this set, leaving an empty set."]},"$nm":"clear"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given elements to this set, returning true if any \nof the given elements was not already element a member of\nthe set."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove an element from this set, returning true if the\nelement was previously a member of the set."]},"$nm":"remove"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an element to this set, returning true if the element\nwas already a member of the set, or false otherwise."]},"$nm":"add"}},"$nm":"MutableSet"},"CellIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$hdn":"1","$mt":"prm","$an":{"variable":[]},"$nm":"iter"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"T"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"iter"}},"$nm":"CellIterator"},"HashMap":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"initialValues"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Map implementation that uses hashing"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every key\/value mapping"],"actual":[]},"$nm":"clear"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes a key\/value mapping if it exists"],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"addToStore"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a collection of key\/value mappings to this map, may be used to change existing mappings"],"actual":[]},"$nm":"putAll"}},"$at":{"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"initialValues":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"initialValues"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashMap"},"$pkg-shared":"1","MutableList":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"ifc","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A [[List]] supporting addition, insertion, removal, and \nmutation of its elements."],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every item from this list, leaving an empty list."]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove all occurrences of the given value from this\nlist."]},"$nm":"removeElement"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given items to the end of this list."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the item at the specified index."]},"$nm":"remove"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Set the item at the given index in this list. The list \nis expanded if `index > size`."]},"$nm":"set"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Insert the given item at the specified index. The list \nis expanded if `index > size`."]},"$nm":"insert"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given item to the end of this list."]},"$nm":"add"}},"$nm":"MutableList"},"LinkedList":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A mutable Linked List"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes the item at the specified index"],"actual":[]},"$nm":"remove"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Sets an item at the given index. List is expanded if index > size"],"actual":[]},"$nm":"set"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds an item at the end of this list"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Remove every item"],"actual":[]},"$nm":"clear"},"_add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$nm":"_add"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"defines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Inserts an item at specified index, list is expanded if index > size"],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"rest":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"head":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"head"},"tail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tail"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LinkedList"},"makeCellEntryArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$nm":"makeCellEntryArray"},"group":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Group"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.collection","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"},{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Group"},{"$nm":"Element"}],"$an":{"shared":[],"doc":["Creates a `Map` that contains the `Iterable`'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function."]},"$m":{"grouping":{"$t":{"$nm":"Group"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"},"fn":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":{"$nm":"Group"},"$mt":"prm","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$nm":"fn"}},"$nm":"group"},"makeCellElementArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"size"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$nm":"makeCellElementArray"},"eq":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"b"}]],"$mt":"mthd","$nm":"eq"},"HashSet":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableSet"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Set that uses a Hashing implementation."],"by":["Stéphane Épardaud"]},"$m":{"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$m":{"selecting":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"selecting"}},"$nm":"count"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every element"],"actual":[]},"$nm":"clear"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"elem"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$nm":"store"},{"$t":{"$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$nm":"addToStore"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"attr","$nm":"values"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashSet"},"MutableMap":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Mutable map"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every entry from this map, leaving an empty map."]},"$nm":"clear"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"},{"$t":{"$nm":"Item"},"$mt":"prm","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add an entry to this map, overwriting any existing entry for \nthe given `key`, and returning the previous value associated \nwith the given `key`, if any, or null."]},"$nm":"put"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$nm":"Key"},"$mt":"prm","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove the entry associated with the given `key`, if any, from \nthis map, returning the value no longer associated with the \ngiven `key`, if any, or null."]},"$nm":"remove"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Add the given entries to this map, overwriting any existing\nentries with the same keys."]},"$nm":"putAll"}},"$nm":"MutableMap"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
function Cell(_car$122, _cdr$123, $$targs$$,$$cell){
    $init$Cell();
    if ($$cell===undefined)$$cell=new Cell.$$;
    $$$cl1.set_type_args($$cell,$$targs$$);
    $$cell._car$122_=_car$122;
    $$cell._cdr$123_=_cdr$123;
    $$$cl1.Cloneable($$cell.$$targs$$===undefined?$$targs$$:{Clone:{t:Cell,a:{T:$$cell.$$targs$$.T}}},$$cell);
    $$$cl1.add_type_arg($$cell,'Clone',{t:Cell,a:{T:$$cell.$$targs$$.T}});
    $$$cl1.defineAttr($$cell,'_car$122',function(){return this._car$122_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,d:['ceylon.collection','Cell','$at','_car']};});
    $$$cl1.defineAttr($$cell,'_cdr$123',function(){return this._cdr$123_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,d:['ceylon.collection','Cell','$at','_cdr']};});
    var car=_car$122;
    $$$cl1.defineAttr($$cell,'car',function(){return car;},function(car$124){return car=car$124;},function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};});
    $$cell.$prop$getCar={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'T',$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','car']};}};
    $$cell.$prop$getCar.get=function(){return car};
    var cdr=_cdr$123;
    $$$cl1.defineAttr($$cell,'cdr',function(){return cdr;},function(cdr$125){return cdr=cdr$125;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};});
    $$cell.$prop$getCdr={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.collection','Cell','$at','cdr']};}};
    $$cell.$prop$getCdr.get=function(){return cdr};
    $$$cl1.defineAttr($$cell,'clone',function(){
        return Cell($$cell.car,(opt$126=$$cell.cdr,opt$126!==null?opt$126.clone:null),{T:$$cell.$$targs$$.T});
        var opt$126;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'T'}},$cont:Cell,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','Cell','$at','clone']};});
    return $$cell;
}
Cell.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Cloneable,a:{Clone:{t:Cell,a:{T:'T'}}}}],d:['ceylon.collection','Cell']};};
function $init$Cell(){
    if (Cell.$$===undefined){
        $$$cl1.initTypeProto(Cell,'ceylon.collection::Cell',$$$cl1.Basic,$$$cl1.Cloneable);
    }
    return Cell;
}
exports.$init$Cell=$init$Cell;
$init$Cell();
function CellIterator(iter$127, $$targs$$,$$cellIterator){
    $init$CellIterator();
    if ($$cellIterator===undefined)$$cellIterator=new CellIterator.$$;
    $$$cl1.set_type_args($$cellIterator,$$targs$$);
    $$$cl1.Iterator($$cellIterator.$$targs$$===undefined?$$targs$$:{Element:$$cellIterator.$$targs$$.T},$$cellIterator);
    var iter$127=iter$127;
    $$$cl1.defineAttr($$cellIterator,'iter$127',function(){return iter$127;},function(iter$128){return iter$127=iter$128;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};});
    $$cellIterator.$prop$getIter$127={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'T'}}]},$cont:CellIterator,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','CellIterator','$at','iter']};}};
    $$cellIterator.$prop$getIter$127.get=function(){return iter$127};
    function next(){
        var iter$129;
        if((iter$129=iter$127)!==null){
            ($$cellIterator.iter$127=iter$129.cdr);
            return iter$129.car;
        }
        return $$$cl1.getFinished();
    }
    $$cellIterator.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['T',{t:$$$cl1.Finished}]},$ps:[],$cont:CellIterator,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','CellIterator','$m','next']};};
    return $$cellIterator;
}
CellIterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Iterator,a:{Element:'T'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if (CellIterator.$$===undefined){
        $$$cl1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',$$$cl1.Basic,$$$cl1.Iterator);
    }
    return CellIterator;
}
exports.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function eq(a$130,b$131){
    var a$132;
    if((a$132=a$130)!==null){
        var b$133;
        if((b$133=b$131)!==null){
            return a$132.equals(b$133);
        }
        return false;
    }
    return (!$$$cl1.exists(b$131));
};eq.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'a',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'b',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],d:['ceylon.collection','eq']};};
function group(elements$134,grouping$135,$$$mptypes){
    var map$136=HashMap(undefined,{Key:$$$mptypes.Group,Item:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}});
    $prop$getMap$136={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashMap,a:{Key:'Group',Item:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}}},d:['ceylon.collection','group','$at','map']};}};
    $prop$getMap$136.get=function(){return map$136};
    var it$137 = elements$134.iterator();
    var element$138;while ((element$138=it$137.next())!==$$$cl1.getFinished()){
        var group$139=grouping$135(element$138);
        $prop$getGroup$139={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Group',d:['ceylon.collection','group','$at','group']};}};
        $prop$getGroup$139.get=function(){return group$139};
        var sb$140=map$136.get(group$139);
        $prop$getSb$140={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}]},d:['ceylon.collection','group','$at','sb']};}};
        $prop$getSb$140.get=function(){return sb$140};
        var sb$141;
        if($$$cl1.isOfType((sb$141=sb$140),{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}})){
            sb$141.append(element$138);
        }else {
            map$136.put(group$139,$$$cl1.SequenceBuilder({Element:$$$mptypes.Element}).append(element$138));
        }
    }
    function fn$142(key$143,item$144){
        var sequence$145=item$144.sequence;
        $prop$getSequence$145={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:'Element'}},d:['ceylon.collection','group','$m','fn','$at','sequence']};}};
        $prop$getSequence$145.get=function(){return sequence$145};
        //assert at group.ceylon (29:8-29:33)
        var sequence$146;
        if (!($$$cl1.nonempty((sequence$146=sequence$145)))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'nonempty sequence\' at group.ceylon (29:14-29:32)"),'29:8-29:33','group.ceylon'); }
        return sequence$146;
    };fn$142.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequence,a:{Element:'Element'}},$ps:[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],d:['ceylon.collection','group','$m','fn']};};
    return map$136.mapItems($$$cl1.$JsCallable(fn$142,[{$nm:'key',$mt:'prm',$t:'Group',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}},Element:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}}},First:$$$mptypes.Group,Element:{ t:'u', l:[$$$mptypes.Group,{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}]}}},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}}),{Result:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}});
}
exports.group=group;
group.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Group',Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:'Element'}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}},{$nm:'grouping',$mt:'prm',$pt:'f',$t:'Group',$an:function(){return[$$$cl1.doc("A function that returns the key under which to group the \nspecified element.")];}}],$tp:{Group:{'satisfies':[{t:$$$cl1.Object}]},Element:{}},$an:function(){return[$$$cl1.doc($$$cl1.String("Creates a `Map` that contains the `Iterable`\'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function.",137)),$$$cl1.shared()];},d:['ceylon.collection','group']};};
function HashMap(initialValues$147, $$targs$$,$$hashMap){
    $init$HashMap();
    if ($$hashMap===undefined)$$hashMap=new HashMap.$$;
    $$$cl1.set_type_args($$hashMap,$$targs$$);
    if(initialValues$147===undefined){initialValues$147=$$$cl1.getEmpty();}
    $$hashMap.initialValues$147_=initialValues$147;
    MutableMap($$hashMap.$$targs$$===undefined?$$targs$$:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item},$$hashMap);
    $$$cl1.defineAttr($$hashMap,'initialValues$147',function(){return this.initialValues$147_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$cont:HashMap,d:['ceylon.collection','HashMap','$at','initialValues']};});
    var store$148=makeCellEntryArray((16),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
    $$$cl1.defineAttr($$hashMap,'store$148',function(){return store$148;},function(store$149){return store$148=store$149;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};});
    $$hashMap.$prop$getStore$148={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','store']};}};
    $$hashMap.$prop$getStore$148.get=function(){return store$148};
    var _size$150=(0);
    $$$cl1.defineAttr($$hashMap,'_size$150',function(){return _size$150;},function(_size$151){return _size$150=_size$151;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};});
    $$hashMap.$prop$get_size$150={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','_size']};}};
    $$hashMap.$prop$get_size$150.get=function(){return _size$150};
    var loadFactor$152=$$$cl1.Float(0.75);
    $$$cl1.defineAttr($$hashMap,'loadFactor$152',function(){return loadFactor$152;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};});
    $$hashMap.$prop$getLoadFactor$152={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashMap,d:['ceylon.collection','HashMap','$at','loadFactor']};}};
    $$hashMap.$prop$getLoadFactor$152.get=function(){return loadFactor$152};
    function storeIndex$153(key$154,store$155){
        var i$156=key$154.hash.remainder(store$155.size);
        $prop$getI$156={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashMap','$m','storeIndex','$at','i']};}};
        $prop$getI$156.get=function(){return i$156};
        return (opt$157=(i$156.negative?i$156.negativeValue:null),opt$157!==null?opt$157:i$156);
        var opt$157;
    };storeIndex$153.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex']};};
    function addToStore$158(store$159,key$160,item$161){
        var index$162=storeIndex$153(key$160,store$159);
        $prop$getIndex$162={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashMap','$m','addToStore','$at','index']};}};
        $prop$getIndex$162.get=function(){return index$162};
        var bucket$163=store$159.get(index$162);
        var setBucket$163=function(bucket$164){return bucket$163=bucket$164;};
        $prop$getBucket$163={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','addToStore','$at','bucket']};}};
        $prop$getBucket$163.get=function(){return bucket$163};
        $prop$getBucket$163.set=setBucket$163;
        if (setBucket$163.$$metamodel$$===undefined)setBucket$163.$$metamodel$$=$prop$getBucket$163.$$metamodel$$;
        var cell$165;
        while((cell$165=bucket$163)!==null){
            if(cell$165.car.key.equals(key$160)){
                (cell$165.car=$$$cl1.Entry(key$160,item$161,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                return false;
            }
            bucket$163=cell$165.cdr;
        }
        store$159.set(index$162,Cell($$$cl1.Entry(key$160,item$161,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$159.get(index$162),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
        return true;
    };addToStore$158.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$an:function(){return[];}},{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore']};};
    function checkRehash$166(){
        if(_size$150.compare(store$148.size.$float.times(loadFactor$152).integer).equals($$$cl1.getLarger())){
            var newStore$167=makeCellEntryArray(_size$150.times((2)),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
            $prop$getNewStore$167={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},d:['ceylon.collection','HashMap','$m','checkRehash','$at','newStore']};}};
            $prop$getNewStore$167.get=function(){return newStore$167};
            var index$168=(0);
            var setIndex$168=function(index$169){return index$168=index$169;};
            $prop$getIndex$168={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','index']};}};
            $prop$getIndex$168.get=function(){return index$168};
            $prop$getIndex$168.set=setIndex$168;
            if (setIndex$168.$$metamodel$$===undefined)setIndex$168.$$metamodel$$=$prop$getIndex$168.$$metamodel$$;
            while(index$168.compare(store$148.size).equals($$$cl1.getSmaller())){
                var bucket$170=store$148.get(index$168);
                var setBucket$170=function(bucket$171){return bucket$170=bucket$171;};
                $prop$getBucket$170={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','checkRehash','$at','bucket']};}};
                $prop$getBucket$170.get=function(){return bucket$170};
                $prop$getBucket$170.set=setBucket$170;
                if (setBucket$170.$$metamodel$$===undefined)setBucket$170.$$metamodel$$=$prop$getBucket$170.$$metamodel$$;
                var cell$172;
                while((cell$172=bucket$170)!==null){
                    addToStore$158(newStore$167,cell$172.car.key,cell$172.car.item);
                    bucket$170=cell$172.cdr;
                }
                (oldindex$173=index$168,index$168=oldindex$173.successor,oldindex$173);
                var oldindex$173;
            }
            store$148=newStore$167;
        }
    };checkRehash$166.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash']};};
    var it$174 = initialValues$147.iterator();
    var item$175;while ((item$175=it$174.next())!==$$$cl1.getFinished()){
        var key$176=item$175.key;
        var item$177=item$175.item;
        if(addToStore$158(store$148,key$176,item$177)){
            (old_size$178=_size$150,_size$150=old_size$178.successor,old_size$178);
            var old_size$178;
        }
    }
    checkRehash$166();
    function put(key$179,item$180){
        var index$181=storeIndex$153(key$179,store$148);
        $prop$getIndex$181={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashMap','$m','put','$at','index']};}};
        $prop$getIndex$181.get=function(){return index$181};
        var bucket$182=store$148.get(index$181);
        var setBucket$182=function(bucket$183){return bucket$182=bucket$183;};
        $prop$getBucket$182={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','put','$at','bucket']};}};
        $prop$getBucket$182.get=function(){return bucket$182};
        $prop$getBucket$182.set=setBucket$182;
        if (setBucket$182.$$metamodel$$===undefined)setBucket$182.$$metamodel$$=$prop$getBucket$182.$$metamodel$$;
        var cell$184;
        while((cell$184=bucket$182)!==null){
            if(cell$184.car.key.equals(key$179)){
                var oldValue$185=cell$184.car.item;
                $prop$getOldValue$185={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Item',d:['ceylon.collection','HashMap','$m','put','$at','oldValue']};}};
                $prop$getOldValue$185.get=function(){return oldValue$185};
                (cell$184.car=$$$cl1.Entry(key$179,item$180,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                return oldValue$185;
            }
            bucket$182=cell$184.cdr;
        }
        store$148.set(index$181,Cell($$$cl1.Entry(key$179,item$180,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$148.get(index$181),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
        (old_size$186=_size$150,_size$150=old_size$186.successor,old_size$186);
        var old_size$186;
        checkRehash$166();
        return null;
    }
    $$hashMap.put=put;
    put.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}},{$nm:'item',$mt:'prm',$t:'Item',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','put']};};
    function putAll(entries$187){
        var it$188 = entries$187.iterator();
        var entry$189;while ((entry$189=it$188.next())!==$$$cl1.getFinished()){
            if(addToStore$158(store$148,entry$189.key,entry$189.item)){
                (old_size$190=_size$150,_size$150=old_size$190.successor,old_size$190);
                var old_size$190;
            }
        }
        checkRehash$166();
    }
    $$hashMap.putAll=putAll;
    putAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a collection of key/value mappings to this map, may be used to change existing mappings",92)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','putAll']};};
    function remove(key$191){
        var index$192=storeIndex$153(key$191,store$148);
        $prop$getIndex$192={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashMap','$m','remove','$at','index']};}};
        $prop$getIndex$192.get=function(){return index$192};
        var bucket$193=store$148.get(index$192);
        var setBucket$193=function(bucket$194){return bucket$193=bucket$194;};
        $prop$getBucket$193={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','remove','$at','bucket']};}};
        $prop$getBucket$193.get=function(){return bucket$193};
        $prop$getBucket$193.set=setBucket$193;
        if (setBucket$193.$$metamodel$$===undefined)setBucket$193.$$metamodel$$=$prop$getBucket$193.$$metamodel$$;
        var prev$195=null;
        var setPrev$195=function(prev$196){return prev$195=prev$196;};
        $prop$getPrev$195={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','remove','$at','prev']};}};
        $prop$getPrev$195.get=function(){return prev$195};
        $prop$getPrev$195.set=setPrev$195;
        if (setPrev$195.$$metamodel$$===undefined)setPrev$195.$$metamodel$$=$prop$getPrev$195.$$metamodel$$;
        var cell$197;
        while((cell$197=bucket$193)!==null){
            if(cell$197.car.key.equals(key$191)){
                var last$198;
                if((last$198=prev$195)!==null){
                    (last$198.cdr=cell$197.cdr);
                }else {
                    store$148.set(index$192,cell$197.cdr);
                }
                (old_size$199=_size$150,_size$150=old_size$199.predecessor,old_size$199);
                var old_size$199;
                return cell$197.car.item;
            }
            prev$195=cell$197;
            bucket$193=cell$197.cdr;
        }
        return null;
    }
    $$hashMap.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key',$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes a key/value mapping if it exists",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','remove']};};
    function clear(){
        var index$200=(0);
        var setIndex$200=function(index$201){return index$200=index$201;};
        $prop$getIndex$200={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','clear','$at','index']};}};
        $prop$getIndex$200.get=function(){return index$200};
        $prop$getIndex$200.set=setIndex$200;
        if (setIndex$200.$$metamodel$$===undefined)setIndex$200.$$metamodel$$=$prop$getIndex$200.$$metamodel$$;
        while(index$200.compare(store$148.size).equals($$$cl1.getSmaller())){
            store$148.set((oldindex$202=index$200,index$200=oldindex$202.successor,oldindex$202),null);
            var oldindex$202;
        }
        _size$150=(0);
    }
    $$hashMap.clear=clear;
    clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every key/value mapping",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','clear']};};
    $$$cl1.defineAttr($$hashMap,'size',function(){
        return _size$150;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','size']};});
    function get(key$203){
        if($$hashMap.empty){
            return null;
        }
        var index$204=storeIndex$153(key$203,store$148);
        $prop$getIndex$204={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashMap','$m','get','$at','index']};}};
        $prop$getIndex$204.get=function(){return index$204};
        var bucket$205=store$148.get(index$204);
        var setBucket$205=function(bucket$206){return bucket$205=bucket$206;};
        $prop$getBucket$205={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','get','$at','bucket']};}};
        $prop$getBucket$205.get=function(){return bucket$205};
        $prop$getBucket$205.set=setBucket$205;
        if (setBucket$205.$$metamodel$$===undefined)setBucket$205.$$metamodel$$=$prop$getBucket$205.$$metamodel$$;
        var cell$207;
        while((cell$207=bucket$205)!==null){
            if(cell$207.car.key.equals(key$203)){
                return cell$207.car.item;
            }
            bucket$205=cell$207.cdr;
        }
        return null;
    }
    $$hashMap.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','get']};};
    $$$cl1.defineAttr($$hashMap,'values',function(){
        var ret$208=LinkedList(undefined,{Element:$$hashMap.$$targs$$.Item});
        $prop$getRet$208={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableList,a:{Element:'Item'}},d:['ceylon.collection','HashMap','$at','values','$at','ret']};}};
        $prop$getRet$208.get=function(){return ret$208};
        var index$209=(0);
        var setIndex$209=function(index$210){return index$209=index$210;};
        $prop$getIndex$209={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','index']};}};
        $prop$getIndex$209.get=function(){return index$209};
        $prop$getIndex$209.set=setIndex$209;
        if (setIndex$209.$$metamodel$$===undefined)setIndex$209.$$metamodel$$=$prop$getIndex$209.$$metamodel$$;
        while(index$209.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$211=store$148.get(index$209);
            var setBucket$211=function(bucket$212){return bucket$211=bucket$212;};
            $prop$getBucket$211={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','values','$at','bucket']};}};
            $prop$getBucket$211.get=function(){return bucket$211};
            $prop$getBucket$211.set=setBucket$211;
            if (setBucket$211.$$metamodel$$===undefined)setBucket$211.$$metamodel$$=$prop$getBucket$211.$$metamodel$$;
            var cell$213;
            while((cell$213=bucket$211)!==null){
                ret$208.add(cell$213.car.item);
                bucket$211=cell$213.cdr;
            }
            (oldindex$214=index$209,index$209=oldindex$214.successor,oldindex$214);
            var oldindex$214;
        }
        return ret$208;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Collection,a:{Element:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','values']};});
    $$$cl1.defineAttr($$hashMap,'keys',function(){
        var ret$215=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
        $prop$getRet$215={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','keys','$at','ret']};}};
        $prop$getRet$215.get=function(){return ret$215};
        var index$216=(0);
        var setIndex$216=function(index$217){return index$216=index$217;};
        $prop$getIndex$216={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','index']};}};
        $prop$getIndex$216.get=function(){return index$216};
        $prop$getIndex$216.set=setIndex$216;
        if (setIndex$216.$$metamodel$$===undefined)setIndex$216.$$metamodel$$=$prop$getIndex$216.$$metamodel$$;
        while(index$216.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$218=store$148.get(index$216);
            var setBucket$218=function(bucket$219){return bucket$218=bucket$219;};
            $prop$getBucket$218={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','keys','$at','bucket']};}};
            $prop$getBucket$218.get=function(){return bucket$218};
            $prop$getBucket$218.set=setBucket$218;
            if (setBucket$218.$$metamodel$$===undefined)setBucket$218.$$metamodel$$=$prop$getBucket$218.$$metamodel$$;
            var cell$220;
            while((cell$220=bucket$218)!==null){
                ret$215.add(cell$220.car.key);
                bucket$218=cell$220.cdr;
            }
            (oldindex$221=index$216,index$216=oldindex$221.successor,oldindex$221);
            var oldindex$221;
        }
        return ret$215;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Set,a:{Element:'Key'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','keys']};});
    $$$cl1.defineAttr($$hashMap,'inverse',function(){
        var ret$222=HashMap(undefined,{Key:$$hashMap.$$targs$$.Item,Item:{t:MutableSet,a:{Element:$$hashMap.$$targs$$.Key}}});
        $prop$getRet$222={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableMap,a:{Key:'Item',Item:{t:MutableSet,a:{Element:'Key'}}}},d:['ceylon.collection','HashMap','$at','inverse','$at','ret']};}};
        $prop$getRet$222.get=function(){return ret$222};
        var index$223=(0);
        var setIndex$223=function(index$224){return index$223=index$224;};
        $prop$getIndex$223={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','index']};}};
        $prop$getIndex$223.get=function(){return index$223};
        $prop$getIndex$223.set=setIndex$223;
        if (setIndex$223.$$metamodel$$===undefined)setIndex$223.$$metamodel$$=$prop$getIndex$223.$$metamodel$$;
        while(index$223.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$225=store$148.get(index$223);
            var setBucket$225=function(bucket$226){return bucket$225=bucket$226;};
            $prop$getBucket$225={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','inverse','$at','bucket']};}};
            $prop$getBucket$225.get=function(){return bucket$225};
            $prop$getBucket$225.set=setBucket$225;
            if (setBucket$225.$$metamodel$$===undefined)setBucket$225.$$metamodel$$=$prop$getBucket$225.$$metamodel$$;
            var cell$227;
            while((cell$227=bucket$225)!==null){
                var keys$228=ret$222.get(cell$227.car.item);
                $prop$getKeys$228={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:MutableSet,a:{Element:'Key'}}]},d:['ceylon.collection','HashMap','$at','inverse','$at','keys']};}};
                $prop$getKeys$228.get=function(){return keys$228};
                var keys$229;
                if((keys$229=keys$228)!==null){
                    keys$229.add(cell$227.car.key);
                }else {
                    var k$230=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                    $prop$getK$230={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:MutableSet,a:{Element:'Key'}},d:['ceylon.collection','HashMap','$at','inverse','$at','k']};}};
                    $prop$getK$230.get=function(){return k$230};
                    ret$222.put(cell$227.car.item,k$230);
                    k$230.add(cell$227.car.key);
                }
                bucket$225=cell$227.cdr;
            }
            (oldindex$231=index$223,index$223=oldindex$231.successor,oldindex$231);
            var oldindex$231;
        }
        return ret$222;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Item',Item:{t:$$$cl1.Set,a:{Element:'Key'}}}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','inverse']};});
    function iterator(){
        function iter$232($$targs$$){
            var $$iter$232=new iter$232.$$;
            $$iter$232.$$targs$$=$$targs$$;
            $$$cl1.Iterator({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}},$$iter$232);
            $$$cl1.add_type_arg($$iter$232,'Element',{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}});
            var index$233=(0);
            $$$cl1.defineAttr($$iter$232,'index$233',function(){return index$233;},function(index$234){return index$233=index$234;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$232,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};});
            $$iter$232.$prop$getIndex$233={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$232,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','index']};}};
            $$iter$232.$prop$getIndex$233.get=function(){return index$233};
            var bucket$235=store$148.get(index$233);
            $$$cl1.defineAttr($$iter$232,'bucket$235',function(){return bucket$235;},function(bucket$236){return bucket$235=bucket$236;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$232,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};});
            $$iter$232.$prop$getBucket$235={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$cont:iter$232,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$at','bucket']};}};
            $$iter$232.$prop$getBucket$235.get=function(){return bucket$235};
            function next(){
                if((!$$$cl1.exists(bucket$235))){
                    while((index$233=index$233.successor).compare(store$148.size).equals($$$cl1.getSmaller())){
                        bucket$235=store$148.get(index$233);
                        if($$$cl1.exists(bucket$235)){
                            break;
                        }
                    }
                }
                var bucket$237;
                if((bucket$237=bucket$235)!==null){
                    var car$238=bucket$237.car;
                    $prop$getCar$238={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next','$at','car']};}};
                    $prop$getCar$238.get=function(){return car$238};
                    ($$iter$232.bucket$235=bucket$237.cdr);
                    return car$238;
                }
                return $$$cl1.getFinished();
            }
            $$iter$232.next=next;
            next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},{t:$$$cl1.Finished}]},$ps:[],$cont:iter$232,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator','$o','iter','$m','next']};};
            return $$iter$232;
        }
        function $init$iter$232(){
            if (iter$232.$$===undefined){
                $$$cl1.initTypeProto(iter$232,'ceylon.collection::HashMap.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return iter$232;
        }
        $init$iter$232();
        var iter$239=iter$232({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}});
        var getIter$239=function(){
            return iter$239;
        }
        getIter$239.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$232},d:['ceylon.collection','HashMap','$m','iterator','$at','iter']};};
        $prop$getIter$239={get:getIter$239,$$metamodel$$:getIter$239.$$metamodel$$};
        return getIter$239();
    }
    $$hashMap.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','iterator']};};
    function count(selecting$240){
        var index$241=(0);
        var setIndex$241=function(index$242){return index$241=index$242;};
        $prop$getIndex$241={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','index']};}};
        $prop$getIndex$241.get=function(){return index$241};
        $prop$getIndex$241.set=setIndex$241;
        if (setIndex$241.$$metamodel$$===undefined)setIndex$241.$$metamodel$$=$prop$getIndex$241.$$metamodel$$;
        var count$243=(0);
        var setCount$243=function(count$244){return count$243=count$244;};
        $prop$getCount$243={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','count']};}};
        $prop$getCount$243.get=function(){return count$243};
        $prop$getCount$243.set=setCount$243;
        if (setCount$243.$$metamodel$$===undefined)setCount$243.$$metamodel$$=$prop$getCount$243.$$metamodel$$;
        while(index$241.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$245=store$148.get(index$241);
            var setBucket$245=function(bucket$246){return bucket$245=bucket$246;};
            $prop$getBucket$245={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','count','$at','bucket']};}};
            $prop$getBucket$245.get=function(){return bucket$245};
            $prop$getBucket$245.set=setBucket$245;
            if (setBucket$245.$$metamodel$$===undefined)setBucket$245.$$metamodel$$=$prop$getBucket$245.$$metamodel$$;
            var cell$247;
            while((cell$247=bucket$245)!==null){
                if(selecting$240(cell$247.car)){
                    (oldcount$248=count$243,count$243=oldcount$248.successor,oldcount$248);
                    var oldcount$248;
                }
                bucket$245=cell$247.cdr;
            }
            (oldindex$249=index$241,index$241=oldindex$249.successor,oldindex$249);
            var oldindex$249;
        }
        return count$243;
    }
    $$hashMap.count=count;
    count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','count']};};
    $$$cl1.defineAttr($$hashMap,'string',function(){
        var index$250=(0);
        var setIndex$250=function(index$251){return index$250=index$251;};
        $prop$getIndex$250={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','index']};}};
        $prop$getIndex$250.get=function(){return index$250};
        $prop$getIndex$250.set=setIndex$250;
        if (setIndex$250.$$metamodel$$===undefined)setIndex$250.$$metamodel$$=$prop$getIndex$250.$$metamodel$$;
        var ret$252=$$$cl1.StringBuilder();
        $prop$getRet$252={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashMap','$at','string','$at','ret']};}};
        $prop$getRet$252.get=function(){return ret$252};
        ret$252.append($$$cl1.String("{",1));
        var first$253=true;
        var setFirst$253=function(first$254){return first$253=first$254;};
        $prop$getFirst$253={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','first']};}};
        $prop$getFirst$253.get=function(){return first$253};
        $prop$getFirst$253.set=setFirst$253;
        if (setFirst$253.$$metamodel$$===undefined)setFirst$253.$$metamodel$$=$prop$getFirst$253.$$metamodel$$;
        while(index$250.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$255=store$148.get(index$250);
            var setBucket$255=function(bucket$256){return bucket$255=bucket$256;};
            $prop$getBucket$255={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','string','$at','bucket']};}};
            $prop$getBucket$255.get=function(){return bucket$255};
            $prop$getBucket$255.set=setBucket$255;
            if (setBucket$255.$$metamodel$$===undefined)setBucket$255.$$metamodel$$=$prop$getBucket$255.$$metamodel$$;
            var cell$257;
            while((cell$257=bucket$255)!==null){
                if((!first$253)){
                    ret$252.append($$$cl1.String(", ",2));
                }else {
                    first$253=false;
                }
                ret$252.append(cell$257.car.key.string);
                ret$252.append($$$cl1.String("->",2));
                ret$252.append(cell$257.car.item.string);
                bucket$255=cell$257.cdr;
            }
            (oldindex$258=index$250,index$250=oldindex$258.successor,oldindex$258);
            var oldindex$258;
        }
        ret$252.append($$$cl1.String("}",1));
        return ret$252.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','string']};});
    $$$cl1.defineAttr($$hashMap,'hash',function(){
        var index$259=(0);
        var setIndex$259=function(index$260){return index$259=index$260;};
        $prop$getIndex$259={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','index']};}};
        $prop$getIndex$259.get=function(){return index$259};
        $prop$getIndex$259.set=setIndex$259;
        if (setIndex$259.$$metamodel$$===undefined)setIndex$259.$$metamodel$$=$prop$getIndex$259.$$metamodel$$;
        var hash$261=(17);
        var setHash$261=function(hash$262){return hash$261=hash$262;};
        $prop$getHash$261={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','hash']};}};
        $prop$getHash$261.get=function(){return hash$261};
        $prop$getHash$261.set=setHash$261;
        if (setHash$261.$$metamodel$$===undefined)setHash$261.$$metamodel$$=$prop$getHash$261.$$metamodel$$;
        while(index$259.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$263=store$148.get(index$259);
            var setBucket$263=function(bucket$264){return bucket$263=bucket$264;};
            $prop$getBucket$263={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','hash','$at','bucket']};}};
            $prop$getBucket$263.get=function(){return bucket$263};
            $prop$getBucket$263.set=setBucket$263;
            if (setBucket$263.$$metamodel$$===undefined)setBucket$263.$$metamodel$$=$prop$getBucket$263.$$metamodel$$;
            var cell$265;
            while((cell$265=bucket$263)!==null){
                hash$261=hash$261.times((31)).plus(cell$265.car.hash);
                bucket$263=cell$265.cdr;
            }
            (oldindex$266=index$259,index$259=oldindex$266.successor,oldindex$266);
            var oldindex$266;
        }
        return hash$261;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','hash']};});
    function equals(that$267){
        var that$268;
        if($$$cl1.isOfType((that$268=that$267),{t:$$$cl1.Map,a:{Key:{t:$$$cl1.Object},Item:{t:$$$cl1.Object}}})&&$$hashMap.size.equals(that$268.size)){
            var index$269=(0);
            var setIndex$269=function(index$270){return index$269=index$270;};
            $prop$getIndex$269={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','index']};}};
            $prop$getIndex$269.get=function(){return index$269};
            $prop$getIndex$269.set=setIndex$269;
            if (setIndex$269.$$metamodel$$===undefined)setIndex$269.$$metamodel$$=$prop$getIndex$269.$$metamodel$$;
            while(index$269.compare(store$148.size).equals($$$cl1.getSmaller())){
                var bucket$271=store$148.get(index$269);
                var setBucket$271=function(bucket$272){return bucket$271=bucket$272;};
                $prop$getBucket$271={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','equals','$at','bucket']};}};
                $prop$getBucket$271.get=function(){return bucket$271};
                $prop$getBucket$271.set=setBucket$271;
                if (setBucket$271.$$metamodel$$===undefined)setBucket$271.$$metamodel$$=$prop$getBucket$271.$$metamodel$$;
                var cell$273;
                while((cell$273=bucket$271)!==null){
                    var item$274=that$268.get(cell$273.car.key);
                    $prop$getItem$274={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},d:['ceylon.collection','HashMap','$m','equals','$at','item']};}};
                    $prop$getItem$274.get=function(){return item$274};
                    var item$275;
                    if((item$275=item$274)!==null){
                        if((!item$275.equals(cell$273.car.item))){
                            return false;
                        }
                    }else {
                        return false;
                    }
                    bucket$271=cell$273.cdr;
                }
                (oldindex$276=index$269,index$269=oldindex$276.successor,oldindex$276);
                var oldindex$276;
            }
            return true;
        }
        return false;
    }
    $$hashMap.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','equals']};};
    $$$cl1.defineAttr($$hashMap,'clone',function(){
        var clone$277=HashMap(undefined,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
        $prop$getClone$277={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashMap,a:{Key:'Key',Item:'Item'}},d:['ceylon.collection','HashMap','$at','clone','$at','clone']};}};
        $prop$getClone$277.get=function(){return clone$277};
        (clone$277._size$150=_size$150);
        (clone$277.store$148=makeCellEntryArray(store$148.size,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
        var index$278=(0);
        var setIndex$278=function(index$279){return index$278=index$279;};
        $prop$getIndex$278={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$at','clone','$at','index']};}};
        $prop$getIndex$278.get=function(){return index$278};
        $prop$getIndex$278.set=setIndex$278;
        if (setIndex$278.$$metamodel$$===undefined)setIndex$278.$$metamodel$$=$prop$getIndex$278.$$metamodel$$;
        while(index$278.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$280;
            if((bucket$280=store$148.get(index$278))!==null){
                clone$277.store$148.set(index$278,bucket$280.clone);
            }
            (oldindex$281=index$278,index$278=oldindex$281.successor,oldindex$281);
            var oldindex$281;
        }
        return clone$277;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}},$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$at','clone']};});
    function contains(element$282){
        var index$283=(0);
        var setIndex$283=function(index$284){return index$283=index$284;};
        $prop$getIndex$283={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','contains','$at','index']};}};
        $prop$getIndex$283.get=function(){return index$283};
        $prop$getIndex$283.set=setIndex$283;
        if (setIndex$283.$$metamodel$$===undefined)setIndex$283.$$metamodel$$=$prop$getIndex$283.$$metamodel$$;
        while(index$283.compare(store$148.size).equals($$$cl1.getSmaller())){
            var bucket$285=store$148.get(index$283);
            var setBucket$285=function(bucket$286){return bucket$285=bucket$286;};
            $prop$getBucket$285={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashMap','$m','contains','$at','bucket']};}};
            $prop$getBucket$285.get=function(){return bucket$285};
            $prop$getBucket$285.set=setBucket$285;
            if (setBucket$285.$$metamodel$$===undefined)setBucket$285.$$metamodel$$=$prop$getBucket$285.$$metamodel$$;
            var cell$287;
            while((cell$287=bucket$285)!==null){
                if(cell$287.car.item.equals(element$282)){
                    return true;
                }
                bucket$285=cell$287.cdr;
            }
            (oldindex$288=index$283,index$283=oldindex$288.successor,oldindex$288);
            var oldindex$288;
        }
        return false;
    }
    $$hashMap.contains=contains;
    contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashMap,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashMap','$m','contains']};};
    return $$hashMap;
}
HashMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableMap,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Map implementation that uses hashing",36)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashMap']};};
exports.HashMap=HashMap;
function $init$HashMap(){
    if (HashMap.$$===undefined){
        $$$cl1.initTypeProto(HashMap,'ceylon.collection::HashMap',$$$cl1.Basic,$init$MutableMap());
    }
    return HashMap;
}
exports.$init$HashMap=$init$HashMap;
$init$HashMap();
function HashSet(values$289, $$targs$$,$$hashSet){
    $init$HashSet();
    if ($$hashSet===undefined)$$hashSet=new HashSet.$$;
    $$$cl1.set_type_args($$hashSet,$$targs$$);
    if(values$289===undefined){values$289=$$$cl1.getEmpty();}
    $$hashSet.values$289_=values$289;
    MutableSet($$hashSet.$$targs$$===undefined?$$targs$$:{Element:$$hashSet.$$targs$$.Element},$$hashSet);
    $$$cl1.defineAttr($$hashSet,'values$289',function(){return this.values$289_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:HashSet,d:['ceylon.collection','HashSet','$at','values']};});
    var store$290=makeCellElementArray((16),{Element:$$hashSet.$$targs$$.Element});
    $$$cl1.defineAttr($$hashSet,'store$290',function(){return store$290;},function(store$291){return store$290=store$291;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};});
    $$hashSet.$prop$getStore$290={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','store']};}};
    $$hashSet.$prop$getStore$290.get=function(){return store$290};
    var _size$292=(0);
    $$$cl1.defineAttr($$hashSet,'_size$292',function(){return _size$292;},function(_size$293){return _size$292=_size$293;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};});
    $$hashSet.$prop$get_size$292={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','_size']};}};
    $$hashSet.$prop$get_size$292.get=function(){return _size$292};
    var loadFactor$294=$$$cl1.Float(0.75);
    $$$cl1.defineAttr($$hashSet,'loadFactor$294',function(){return loadFactor$294;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};});
    $$hashSet.$prop$getLoadFactor$294={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},$cont:HashSet,d:['ceylon.collection','HashSet','$at','loadFactor']};}};
    $$hashSet.$prop$getLoadFactor$294.get=function(){return loadFactor$294};
    function storeIndex$295(elem$296,store$297){
        var i$298=elem$296.hash.remainder(store$297.size);
        $prop$getI$298={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashSet','$m','storeIndex','$at','i']};}};
        $prop$getI$298.get=function(){return i$298};
        return (opt$299=(i$298.negative?i$298.negativeValue:null),opt$299!==null?opt$299:i$298);
        var opt$299;
    };storeIndex$295.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex']};};
    function addToStore$300(store$301,element$302){
        var index$303=storeIndex$295(element$302,store$301);
        $prop$getIndex$303={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashSet','$m','addToStore','$at','index']};}};
        $prop$getIndex$303.get=function(){return index$303};
        var bucket$304=store$301.get(index$303);
        var setBucket$304=function(bucket$305){return bucket$304=bucket$305;};
        $prop$getBucket$304={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','addToStore','$at','bucket']};}};
        $prop$getBucket$304.get=function(){return bucket$304};
        $prop$getBucket$304.set=setBucket$304;
        if (setBucket$304.$$metamodel$$===undefined)setBucket$304.$$metamodel$$=$prop$getBucket$304.$$metamodel$$;
        var cell$306;
        while((cell$306=bucket$304)!==null){
            if(cell$306.car.equals(element$302)){
                (cell$306.car=element$302);
                return false;
            }
            bucket$304=cell$306.cdr;
        }
        store$301.set(index$303,Cell(element$302,store$301.get(index$303),{T:$$hashSet.$$targs$$.Element}));
        return true;
    };addToStore$300.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore']};};
    function checkRehash$307(){
        if(_size$292.compare(store$290.size.$float.times(loadFactor$294).integer).equals($$$cl1.getLarger())){
            var newStore$308=makeCellElementArray(_size$292.times((2)),{Element:$$hashSet.$$targs$$.Element});
            $prop$getNewStore$308={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},d:['ceylon.collection','HashSet','$m','checkRehash','$at','newStore']};}};
            $prop$getNewStore$308.get=function(){return newStore$308};
            var index$309=(0);
            var setIndex$309=function(index$310){return index$309=index$310;};
            $prop$getIndex$309={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','index']};}};
            $prop$getIndex$309.get=function(){return index$309};
            $prop$getIndex$309.set=setIndex$309;
            if (setIndex$309.$$metamodel$$===undefined)setIndex$309.$$metamodel$$=$prop$getIndex$309.$$metamodel$$;
            while(index$309.compare(store$290.size).equals($$$cl1.getSmaller())){
                var bucket$311=store$290.get(index$309);
                var setBucket$311=function(bucket$312){return bucket$311=bucket$312;};
                $prop$getBucket$311={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','checkRehash','$at','bucket']};}};
                $prop$getBucket$311.get=function(){return bucket$311};
                $prop$getBucket$311.set=setBucket$311;
                if (setBucket$311.$$metamodel$$===undefined)setBucket$311.$$metamodel$$=$prop$getBucket$311.$$metamodel$$;
                var cell$313;
                while((cell$313=bucket$311)!==null){
                    addToStore$300(newStore$308,cell$313.car);
                    bucket$311=cell$313.cdr;
                }
                (oldindex$314=index$309,index$309=oldindex$314.successor,oldindex$314);
                var oldindex$314;
            }
            store$290=newStore$308;
        }
    };checkRehash$307.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash']};};
    var it$315 = values$289.iterator();
    var val$316;while ((val$316=it$315.next())!==$$$cl1.getFinished()){
        if(addToStore$300(store$290,val$316)){
            (old_size$317=_size$292,_size$292=old_size$317.successor,old_size$317);
            var old_size$317;
        }
    }
    checkRehash$307();
    function add(element$318){
        if(addToStore$300(store$290,element$318)){
            (old_size$319=_size$292,_size$292=old_size$319.successor,old_size$319);
            var old_size$319;
            checkRehash$307();
            return true;
        }
        return false;
    }
    $$hashSet.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','add']};};
    function addAll(elements$320){
        var ret$321=false;
        var setRet$321=function(ret$322){return ret$321=ret$322;};
        $prop$getRet$321={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','addAll','$at','ret']};}};
        $prop$getRet$321.get=function(){return ret$321};
        $prop$getRet$321.set=setRet$321;
        if (setRet$321.$$metamodel$$===undefined)setRet$321.$$metamodel$$=$prop$getRet$321.$$metamodel$$;
        var it$323 = elements$320.iterator();
        var elem$324;while ((elem$324=it$323.next())!==$$$cl1.getFinished()){
            ret$321$$hashSet.add(elem$324);
        }
        checkRehash$307();
        return ret$321;
    }
    $$hashSet.addAll=addAll;
    addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','addAll']};};
    function remove(element$325){
        var index$326=storeIndex$295(element$325,store$290);
        $prop$getIndex$326={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.collection','HashSet','$m','remove','$at','index']};}};
        $prop$getIndex$326.get=function(){return index$326};
        var bucket$327=store$290.get(index$326);
        var setBucket$327=function(bucket$328){return bucket$327=bucket$328;};
        $prop$getBucket$327={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','remove','$at','bucket']};}};
        $prop$getBucket$327.get=function(){return bucket$327};
        $prop$getBucket$327.set=setBucket$327;
        if (setBucket$327.$$metamodel$$===undefined)setBucket$327.$$metamodel$$=$prop$getBucket$327.$$metamodel$$;
        var prev$329=null;
        var setPrev$329=function(prev$330){return prev$329=prev$330;};
        $prop$getPrev$329={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','remove','$at','prev']};}};
        $prop$getPrev$329.get=function(){return prev$329};
        $prop$getPrev$329.set=setPrev$329;
        if (setPrev$329.$$metamodel$$===undefined)setPrev$329.$$metamodel$$=$prop$getPrev$329.$$metamodel$$;
        var cell$331;
        while((cell$331=bucket$327)!==null){
            if(cell$331.car.equals(element$325)){
                var last$332;
                if((last$332=prev$329)!==null){
                    (last$332.cdr=cell$331.cdr);
                }else {
                    store$290.set(index$326,cell$331.cdr);
                }
                (old_size$333=_size$292,_size$292=old_size$333.predecessor,old_size$333);
                var old_size$333;
                return true;
            }
            prev$329=cell$331;
            bucket$327=cell$331.cdr;
        }
        return false;
    }
    $$hashSet.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','remove']};};
    function clear(){
        var index$334=(0);
        var setIndex$334=function(index$335){return index$334=index$335;};
        $prop$getIndex$334={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','clear','$at','index']};}};
        $prop$getIndex$334.get=function(){return index$334};
        $prop$getIndex$334.set=setIndex$334;
        if (setIndex$334.$$metamodel$$===undefined)setIndex$334.$$metamodel$$=$prop$getIndex$334.$$metamodel$$;
        while(index$334.compare(store$290.size).equals($$$cl1.getSmaller())){
            store$290.set((oldindex$336=index$334,index$334=oldindex$336.successor,oldindex$336),null);
            var oldindex$336;
        }
        _size$292=(0);
    }
    $$hashSet.clear=clear;
    clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes every element",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','clear']};};
    $$$cl1.defineAttr($$hashSet,'size',function(){
        return _size$292;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','size']};});
    function iterator(){
        function iter$337($$targs$$){
            var $$iter$337=new iter$337.$$;
            $$iter$337.$$targs$$=$$targs$$;
            $$$cl1.Iterator({Element:$$hashSet.$$targs$$.Element},$$iter$337);
            var index$338=(0);
            $$$cl1.defineAttr($$iter$337,'index$338',function(){return index$338;},function(index$339){return index$338=index$339;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$337,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};});
            $$iter$337.$prop$getIndex$338={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:iter$337,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','index']};}};
            $$iter$337.$prop$getIndex$338.get=function(){return index$338};
            var bucket$340=store$290.get(index$338);
            $$$cl1.defineAttr($$iter$337,'bucket$340',function(){return bucket$340;},function(bucket$341){return bucket$340=bucket$341;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$337,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};});
            $$iter$337.$prop$getBucket$340={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:iter$337,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$at','bucket']};}};
            $$iter$337.$prop$getBucket$340.get=function(){return bucket$340};
            function next(){
                if((!$$$cl1.exists(bucket$340))){
                    while((index$338=index$338.successor).compare(store$290.size).equals($$$cl1.getSmaller())){
                        bucket$340=store$290.get(index$338);
                        if($$$cl1.exists(bucket$340)){
                            break;
                        }
                    }
                }
                var bucket$342;
                if((bucket$342=bucket$340)!==null){
                    var car$343=bucket$342.car;
                    $prop$getCar$343={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next','$at','car']};}};
                    $prop$getCar$343.get=function(){return car$343};
                    ($$iter$337.bucket$340=bucket$342.cdr);
                    return car$343;
                }
                return $$$cl1.getFinished();
            }
            $$iter$337.next=next;
            next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:$$$cl1.Finished}]},$ps:[],$cont:iter$337,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator','$o','iter','$m','next']};};
            return $$iter$337;
        }
        function $init$iter$337(){
            if (iter$337.$$===undefined){
                $$$cl1.initTypeProto(iter$337,'ceylon.collection::HashSet.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return iter$337;
        }
        $init$iter$337();
        var iter$344=iter$337({Element:$$hashSet.$$targs$$.Element});
        var getIter$344=function(){
            return iter$344;
        }
        getIter$344.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:iter$337},d:['ceylon.collection','HashSet','$m','iterator','$at','iter']};};
        $prop$getIter$344={get:getIter$344,$$metamodel$$:getIter$344.$$metamodel$$};
        return getIter$344();
    }
    $$hashSet.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','iterator']};};
    function count(selecting$345){
        var c$346=(0);
        var setC$346=function(c$347){return c$346=c$347;};
        $prop$getC$346={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','c']};}};
        $prop$getC$346.get=function(){return c$346};
        $prop$getC$346.set=setC$346;
        if (setC$346.$$metamodel$$===undefined)setC$346.$$metamodel$$=$prop$getC$346.$$metamodel$$;
        var index$348=(0);
        var setIndex$348=function(index$349){return index$348=index$349;};
        $prop$getIndex$348={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','index']};}};
        $prop$getIndex$348.get=function(){return index$348};
        $prop$getIndex$348.set=setIndex$348;
        if (setIndex$348.$$metamodel$$===undefined)setIndex$348.$$metamodel$$=$prop$getIndex$348.$$metamodel$$;
        while(index$348.compare(store$290.size).equals($$$cl1.getSmaller())){
            var bucket$350=store$290.get(index$348);
            var setBucket$350=function(bucket$351){return bucket$350=bucket$351;};
            $prop$getBucket$350={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','count','$at','bucket']};}};
            $prop$getBucket$350.get=function(){return bucket$350};
            $prop$getBucket$350.set=setBucket$350;
            if (setBucket$350.$$metamodel$$===undefined)setBucket$350.$$metamodel$$=$prop$getBucket$350.$$metamodel$$;
            var cell$352;
            while((cell$352=bucket$350)!==null){
                if(selecting$345(cell$352.car)){
                    (oldc$353=c$346,c$346=oldc$353.successor,oldc$353);
                    var oldc$353;
                }
                bucket$350=cell$352.cdr;
            }
            (oldindex$354=index$348,index$348=oldindex$354.successor,oldindex$354);
            var oldindex$354;
        }
        return c$346;
    }
    $$hashSet.count=count;
    count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','count']};};
    $$$cl1.defineAttr($$hashSet,'string',function(){
        var index$355=(0);
        var setIndex$355=function(index$356){return index$355=index$356;};
        $prop$getIndex$355={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','index']};}};
        $prop$getIndex$355.get=function(){return index$355};
        $prop$getIndex$355.set=setIndex$355;
        if (setIndex$355.$$metamodel$$===undefined)setIndex$355.$$metamodel$$=$prop$getIndex$355.$$metamodel$$;
        var ret$357=$$$cl1.StringBuilder();
        $prop$getRet$357={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','HashSet','$at','string','$at','ret']};}};
        $prop$getRet$357.get=function(){return ret$357};
        ret$357.append($$$cl1.String("(",1));
        var first$358=true;
        var setFirst$358=function(first$359){return first$358=first$359;};
        $prop$getFirst$358={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','first']};}};
        $prop$getFirst$358.get=function(){return first$358};
        $prop$getFirst$358.set=setFirst$358;
        if (setFirst$358.$$metamodel$$===undefined)setFirst$358.$$metamodel$$=$prop$getFirst$358.$$metamodel$$;
        while(index$355.compare(store$290.size).equals($$$cl1.getSmaller())){
            var bucket$360=store$290.get(index$355);
            var setBucket$360=function(bucket$361){return bucket$360=bucket$361;};
            $prop$getBucket$360={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','string','$at','bucket']};}};
            $prop$getBucket$360.get=function(){return bucket$360};
            $prop$getBucket$360.set=setBucket$360;
            if (setBucket$360.$$metamodel$$===undefined)setBucket$360.$$metamodel$$=$prop$getBucket$360.$$metamodel$$;
            var cell$362;
            while((cell$362=bucket$360)!==null){
                if((!first$358)){
                    ret$357.append($$$cl1.String(", ",2));
                }else {
                    first$358=false;
                }
                ret$357.append(cell$362.car.string);
                bucket$360=cell$362.cdr;
            }
            (oldindex$363=index$355,index$355=oldindex$363.successor,oldindex$363);
            var oldindex$363;
        }
        ret$357.append($$$cl1.String(")",1));
        return ret$357.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','string']};});
    $$$cl1.defineAttr($$hashSet,'hash',function(){
        var index$364=(0);
        var setIndex$364=function(index$365){return index$364=index$365;};
        $prop$getIndex$364={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','index']};}};
        $prop$getIndex$364.get=function(){return index$364};
        $prop$getIndex$364.set=setIndex$364;
        if (setIndex$364.$$metamodel$$===undefined)setIndex$364.$$metamodel$$=$prop$getIndex$364.$$metamodel$$;
        var hash$366=(17);
        var setHash$366=function(hash$367){return hash$366=hash$367;};
        $prop$getHash$366={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','hash']};}};
        $prop$getHash$366.get=function(){return hash$366};
        $prop$getHash$366.set=setHash$366;
        if (setHash$366.$$metamodel$$===undefined)setHash$366.$$metamodel$$=$prop$getHash$366.$$metamodel$$;
        while(index$364.compare(store$290.size).equals($$$cl1.getSmaller())){
            var bucket$368=store$290.get(index$364);
            var setBucket$368=function(bucket$369){return bucket$368=bucket$369;};
            $prop$getBucket$368={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','hash','$at','bucket']};}};
            $prop$getBucket$368.get=function(){return bucket$368};
            $prop$getBucket$368.set=setBucket$368;
            if (setBucket$368.$$metamodel$$===undefined)setBucket$368.$$metamodel$$=$prop$getBucket$368.$$metamodel$$;
            var cell$370;
            while((cell$370=bucket$368)!==null){
                hash$366=hash$366.times((31)).plus(cell$370.car.hash);
                bucket$368=cell$370.cdr;
            }
            (oldindex$371=index$364,index$364=oldindex$371.successor,oldindex$371);
            var oldindex$371;
        }
        return hash$366;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','hash']};});
    function equals(that$372){
        var that$373;
        if($$$cl1.isOfType((that$373=that$372),{t:$$$cl1.Set,a:{Element:{t:$$$cl1.Object}}})&&$$hashSet.size.equals(that$373.size)){
            var index$374=(0);
            var setIndex$374=function(index$375){return index$374=index$375;};
            $prop$getIndex$374={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','index']};}};
            $prop$getIndex$374.get=function(){return index$374};
            $prop$getIndex$374.set=setIndex$374;
            if (setIndex$374.$$metamodel$$===undefined)setIndex$374.$$metamodel$$=$prop$getIndex$374.$$metamodel$$;
            while(index$374.compare(store$290.size).equals($$$cl1.getSmaller())){
                var bucket$376=store$290.get(index$374);
                var setBucket$376=function(bucket$377){return bucket$376=bucket$377;};
                $prop$getBucket$376={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','equals','$at','bucket']};}};
                $prop$getBucket$376.get=function(){return bucket$376};
                $prop$getBucket$376.set=setBucket$376;
                if (setBucket$376.$$metamodel$$===undefined)setBucket$376.$$metamodel$$=$prop$getBucket$376.$$metamodel$$;
                var cell$378;
                while((cell$378=bucket$376)!==null){
                    if((!that$373.contains(cell$378.car))){
                        return false;
                    }
                    bucket$376=cell$378.cdr;
                }
                (oldindex$379=index$374,index$374=oldindex$379.successor,oldindex$379);
                var oldindex$379;
            }
            return true;
        }
        return false;
    }
    $$hashSet.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','equals']};};
    $$$cl1.defineAttr($$hashSet,'clone',function(){
        var clone$380=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
        $prop$getClone$380={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},d:['ceylon.collection','HashSet','$at','clone','$at','clone']};}};
        $prop$getClone$380.get=function(){return clone$380};
        (clone$380._size$292=_size$292);
        (clone$380.store$290=makeCellElementArray(store$290.size,{Element:$$hashSet.$$targs$$.Element}));
        var index$381=(0);
        var setIndex$381=function(index$382){return index$381=index$382;};
        $prop$getIndex$381={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$at','clone','$at','index']};}};
        $prop$getIndex$381.get=function(){return index$381};
        $prop$getIndex$381.set=setIndex$381;
        if (setIndex$381.$$metamodel$$===undefined)setIndex$381.$$metamodel$$=$prop$getIndex$381.$$metamodel$$;
        while(index$381.compare(store$290.size).equals($$$cl1.getSmaller())){
            var bucket$383;
            if((bucket$383=store$290.get(index$381))!==null){
                clone$380.store$290.set(index$381,bucket$383.clone);
            }
            (oldindex$384=index$381,index$381=oldindex$384.successor,oldindex$384);
            var oldindex$384;
        }
        return clone$380;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$at','clone']};});
    function contains(element$385){
        var index$386=(0);
        var setIndex$386=function(index$387){return index$386=index$387;};
        $prop$getIndex$386={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','contains','$at','index']};}};
        $prop$getIndex$386.get=function(){return index$386};
        $prop$getIndex$386.set=setIndex$386;
        if (setIndex$386.$$metamodel$$===undefined)setIndex$386.$$metamodel$$=$prop$getIndex$386.$$metamodel$$;
        while(index$386.compare(store$290.size).equals($$$cl1.getSmaller())){
            var bucket$388=store$290.get(index$386);
            var setBucket$388=function(bucket$389){return bucket$388=bucket$389;};
            $prop$getBucket$388={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','HashSet','$m','contains','$at','bucket']};}};
            $prop$getBucket$388.get=function(){return bucket$388};
            $prop$getBucket$388.set=setBucket$388;
            if (setBucket$388.$$metamodel$$===undefined)setBucket$388.$$metamodel$$=$prop$getBucket$388.$$metamodel$$;
            var cell$390;
            while((cell$390=bucket$388)!==null){
                if(cell$390.car.equals(element$385)){
                    return true;
                }
                bucket$388=cell$390.cdr;
            }
            (oldindex$391=index$386,index$386=oldindex$391.successor,oldindex$391);
            var oldindex$391;
        }
        return false;
    }
    $$hashSet.contains=contains;
    contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:HashSet,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','contains']};};
    function complement(set$392,$$$mptypes){
        var ret$393=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
        $prop$getRet$393={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},d:['ceylon.collection','HashSet','$m','complement','$at','ret']};}};
        $prop$getRet$393.get=function(){return ret$393};
        var it$394 = $$hashSet.iterator();
        var elem$395;while ((elem$395=it$394.next())!==$$$cl1.getFinished()){
            if((!set$392.contains(elem$395))){
                ret$393.add(elem$395);
            }
        }
        return ret$393;
    }
    $$hashSet.complement=complement;
    complement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','complement']};};
    function exclusiveUnion(set$396,$$$mptypes){
        var ret$397=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        $prop$getRet$397={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},d:['ceylon.collection','HashSet','$m','exclusiveUnion','$at','ret']};}};
        $prop$getRet$397.get=function(){return ret$397};
        var it$398 = $$hashSet.iterator();
        var elem$399;while ((elem$399=it$398.next())!==$$$cl1.getFinished()){
            if((!set$396.contains(elem$399))){
                ret$397.add(elem$399);
            }
        }
        var it$400 = set$396.iterator();
        var elem$401;while ((elem$401=it$400.next())!==$$$cl1.getFinished()){
            if((!$$hashSet.contains(elem$401))){
                ret$397.add(elem$401);
            }
        }
        return ret$397;
    }
    $$hashSet.exclusiveUnion=exclusiveUnion;
    exclusiveUnion.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
    function intersection(set$402,$$$mptypes){
        var ret$403=HashSet(undefined,{Element:{ t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        $prop$getRet$403={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'i', l:['Element','Other']}}},d:['ceylon.collection','HashSet','$m','intersection','$at','ret']};}};
        $prop$getRet$403.get=function(){return ret$403};
        var it$404 = $$hashSet.iterator();
        var elem$405;while ((elem$405=it$404.next())!==$$$cl1.getFinished()){
            var elem$406;
            if(set$402.contains(elem$405)&&$$$cl1.isOfType((elem$406=elem$405),$$$mptypes.Other)){
                ret$403.add(elem$406);
            }
        }
        return ret$403;
    }
    $$hashSet.intersection=intersection;
    intersection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','intersection']};};
    function union(set$407,$$$mptypes){
        var ret$408=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        $prop$getRet$408={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},d:['ceylon.collection','HashSet','$m','union','$at','ret']};}};
        $prop$getRet$408.get=function(){return ret$408};
        ret$408.addAll($$hashSet);
        ret$408.addAll(set$407);
        return ret$408;
    }
    $$hashSet.union=union;
    union.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}},$an:function(){return[];}}],$cont:HashSet,$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','HashSet','$m','union']};};
    return $$hashSet;
}
HashSet.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableSet,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Set that uses a Hashing implementation.",39)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','HashSet']};};
exports.HashSet=HashSet;
function $init$HashSet(){
    if (HashSet.$$===undefined){
        $$$cl1.initTypeProto(HashSet,'ceylon.collection::HashSet',$$$cl1.Basic,$init$MutableSet());
    }
    return HashSet;
}
exports.$init$HashSet=$init$HashSet;
$init$HashSet();
function LinkedList(values$409, $$targs$$,$$linkedList){
    $init$LinkedList();
    if ($$linkedList===undefined)$$linkedList=new LinkedList.$$;
    $$$cl1.set_type_args($$linkedList,$$targs$$);
    if(values$409===undefined){values$409=$$$cl1.getEmpty();}
    $$linkedList.values$409_=values$409;
    MutableList($$linkedList.$$targs$$===undefined?$$targs$$:{Element:$$linkedList.$$targs$$.Element},$$linkedList);
    $$$cl1.defineAttr($$linkedList,'values$409',function(){return this.values$409_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$cont:LinkedList,d:['ceylon.collection','LinkedList','$at','values']};});
    var head$410=null;
    $$$cl1.defineAttr($$linkedList,'head$410',function(){return head$410;},function(head$411){return head$410=head$411;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};});
    $$linkedList.$prop$getHead$410={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','head']};}};
    $$linkedList.$prop$getHead$410.get=function(){return head$410};
    var tail$412=null;
    $$$cl1.defineAttr($$linkedList,'tail$412',function(){return tail$412;},function(tail$413){return tail$412=tail$413;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};});
    $$linkedList.$prop$getTail$412={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','tail']};}};
    $$linkedList.$prop$getTail$412.get=function(){return tail$412};
    var _size$414=(0);
    $$$cl1.defineAttr($$linkedList,'_size$414',function(){return _size$414;},function(_size$415){return _size$414=_size$415;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};});
    $$linkedList.$prop$get_size$414={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','_size']};}};
    $$linkedList.$prop$get_size$414.get=function(){return _size$414};
    function _add$416(val$417){
        var newTail$418=Cell(val$417,null,{T:$$linkedList.$$targs$$.Element});
        $prop$getNewTail$418={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','_add','$at','newTail']};}};
        $prop$getNewTail$418.get=function(){return newTail$418};
        var tail$419;
        if((tail$419=tail$412)!==null){
            (tail$419.cdr=newTail$418);
            ($$linkedList.tail$412=newTail$418);
        }else {
            tail$412=(head$410=newTail$418);
        }
        (old_size$420=_size$414,_size$414=old_size$420.successor,old_size$420);
        var old_size$420;
    };_add$416.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','_add']};};
    var it$421 = values$409.iterator();
    var val$422;while ((val$422=it$421.next())!==$$$cl1.getFinished()){
        _add$416(val$422);
    }
    function set(index$423,val$424){
        if(index$423.compare(_size$414).equals($$$cl1.getSmaller())){
            var iter$425=head$410;
            var setIter$425=function(iter$426){return iter$425=iter$426;};
            $prop$getIter$425={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','iter']};}};
            $prop$getIter$425.get=function(){return iter$425};
            $prop$getIter$425.set=setIter$425;
            if (setIter$425.$$metamodel$$===undefined)setIter$425.$$metamodel$$=$prop$getIter$425.$$metamodel$$;
            var i$427=(0);
            var setI$427=function(i$428){return i$427=i$428;};
            $prop$getI$427={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','i']};}};
            $prop$getI$427.get=function(){return i$427};
            $prop$getI$427.set=setI$427;
            if (setI$427.$$metamodel$$===undefined)setI$427.$$metamodel$$=$prop$getI$427.$$metamodel$$;
            var cell$429;
            while((cell$429=iter$425)!==null){
                if((oldi$430=i$427,i$427=oldi$430.successor,oldi$430).equals(index$423)){
                    (cell$429.car=val$424);
                    return ;
                }
                var oldi$430;
                iter$425=cell$429.cdr;
            }
        }else {
            var need$431=index$423.minus(_size$414);
            var setNeed$431=function(need$432){return need$431=need$432;};
            $prop$getNeed$431={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','need']};}};
            $prop$getNeed$431.get=function(){return need$431};
            $prop$getNeed$431.set=setNeed$431;
            if (setNeed$431.$$metamodel$$===undefined)setNeed$431.$$metamodel$$=$prop$getNeed$431.$$metamodel$$;
            var newTail$433=Cell(val$424,null,{T:$$linkedList.$$targs$$.Element});
            $prop$getNewTail$433={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','set','$at','newTail']};}};
            $prop$getNewTail$433.get=function(){return newTail$433};
            var newHead$434=newTail$433;
            var setNewHead$434=function(newHead$435){return newHead$434=newHead$435;};
            $prop$getNewHead$434={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','set','$at','newHead']};}};
            $prop$getNewHead$434.get=function(){return newHead$434};
            $prop$getNewHead$434.set=setNewHead$434;
            if (setNewHead$434.$$metamodel$$===undefined)setNewHead$434.$$metamodel$$=$prop$getNewHead$434.$$metamodel$$;
            while((oldneed$436=need$431,need$431=oldneed$436.predecessor,oldneed$436).compare((0)).equals($$$cl1.getLarger())){
                newHead$434=Cell(val$424,newHead$434,{T:$$linkedList.$$targs$$.Element});
            }
            var oldneed$436;
            var tail$437;
            if((tail$437=tail$412)!==null){
                (tail$437.cdr=newHead$434);
            }else {
                head$410=newHead$434;
            }
            tail$412=newTail$433;
            _size$414=index$423.plus((1));
        }
    }
    $$linkedList.set=set;
    set.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Sets an item at the given index. List is expanded if index > size",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','set']};};
    function insert(index$438,val$439){
        if((index$438.compare(_size$414)!==$$$cl1.getSmaller())){
            $$linkedList.set(index$438,val$439);
        }else {
            var newCell$440=Cell(val$439,null,{T:$$linkedList.$$targs$$.Element});
            $prop$getNewCell$440={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Cell,a:{T:'Element'}},d:['ceylon.collection','LinkedList','$m','insert','$at','newCell']};}};
            $prop$getNewCell$440.get=function(){return newCell$440};
            if(index$438.equals((0))){
                (newCell$440.cdr=head$410);
                head$410=newCell$440;
            }else {
                var iter$441=head$410;
                var setIter$441=function(iter$442){return iter$441=iter$442;};
                $prop$getIter$441={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','iter']};}};
                $prop$getIter$441.get=function(){return iter$441};
                $prop$getIter$441.set=setIter$441;
                if (setIter$441.$$metamodel$$===undefined)setIter$441.$$metamodel$$=$prop$getIter$441.$$metamodel$$;
                var prev$443=null;
                var setPrev$443=function(prev$444){return prev$443=prev$444;};
                $prop$getPrev$443={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','prev']};}};
                $prop$getPrev$443.get=function(){return prev$443};
                $prop$getPrev$443.set=setPrev$443;
                if (setPrev$443.$$metamodel$$===undefined)setPrev$443.$$metamodel$$=$prop$getPrev$443.$$metamodel$$;
                var i$445=(0);
                var setI$445=function(i$446){return i$445=i$446;};
                $prop$getI$445={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','insert','$at','i']};}};
                $prop$getI$445.get=function(){return i$445};
                $prop$getI$445.set=setI$445;
                if (setI$445.$$metamodel$$===undefined)setI$445.$$metamodel$$=$prop$getI$445.$$metamodel$$;
                var cell$447;
                while((cell$447=iter$441)!==null){
                    if((oldi$448=i$445,i$445=oldi$448.successor,oldi$448).equals(index$438)){
                        var prev2$449;
                        if((prev2$449=prev$443)!==null){
                            (prev2$449.cdr=newCell$440);
                            (newCell$440.cdr=cell$447);
                        }else {}
                        break;
                    }
                    var oldi$448;
                    prev$443=iter$441;
                    iter$441=cell$447.cdr;
                }
            }
            (old_size$450=_size$414,_size$414=old_size$450.successor,old_size$450);
            var old_size$450;
        }
    }
    $$linkedList.insert=insert;
    insert.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Inserts an item at specified index, list is expanded if index > size",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','insert']};};
    function add(val$451){
        _add$416(val$451);
    }
    $$linkedList.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds an item at the end of this list",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','add']};};
    function addAll(values$452){
        var it$453 = values$452.iterator();
        var val$454;while ((val$454=it$453.next())!==$$$cl1.getFinished()){
            $$linkedList.add(val$454);
        }
    }
    $$linkedList.addAll=addAll;
    addAll.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','addAll']};};
    function remove(index$455){
        if(index$455.compare(_size$414).equals($$$cl1.getSmaller())){
            var iter$456=head$410;
            var setIter$456=function(iter$457){return iter$456=iter$457;};
            $prop$getIter$456={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','iter']};}};
            $prop$getIter$456.get=function(){return iter$456};
            $prop$getIter$456.set=setIter$456;
            if (setIter$456.$$metamodel$$===undefined)setIter$456.$$metamodel$$=$prop$getIter$456.$$metamodel$$;
            var prev$458=null;
            var setPrev$458=function(prev$459){return prev$458=prev$459;};
            $prop$getPrev$458={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','prev']};}};
            $prop$getPrev$458.get=function(){return prev$458};
            $prop$getPrev$458.set=setPrev$458;
            if (setPrev$458.$$metamodel$$===undefined)setPrev$458.$$metamodel$$=$prop$getPrev$458.$$metamodel$$;
            var i$460=(0);
            var setI$460=function(i$461){return i$460=i$461;};
            $prop$getI$460={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','remove','$at','i']};}};
            $prop$getI$460.get=function(){return i$460};
            $prop$getI$460.set=setI$460;
            if (setI$460.$$metamodel$$===undefined)setI$460.$$metamodel$$=$prop$getI$460.$$metamodel$$;
            var cell$462;
            while((cell$462=iter$456)!==null){
                if((oldi$463=i$460,i$460=oldi$463.successor,oldi$463).equals(index$455)){
                    var prev2$464;
                    if((prev2$464=prev$458)!==null){
                        (prev2$464.cdr=cell$462.cdr);
                    }else {
                        head$410=cell$462.cdr;
                    }
                    if((!$$$cl1.exists(cell$462.cdr))){
                        tail$412=prev$458;
                    }
                    (old_size$465=_size$414,_size$414=old_size$465.predecessor,old_size$465);
                    var old_size$465;
                    return ;
                }
                var oldi$463;
                prev$458=iter$456;
                iter$456=cell$462.cdr;
            }
        }else {
            throw $$$cl1.wrapexc($$$cl1.Exception(),'137:12-137:17','ceylon/collection/LinkedList.ceylon');
        }
    }
    $$linkedList.remove=remove;
    remove.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Removes the item at the specified index",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','remove']};};
    function removeElement(val$466){
        var iter$467=head$410;
        var setIter$467=function(iter$468){return iter$467=iter$468;};
        $prop$getIter$467={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','removeElement','$at','iter']};}};
        $prop$getIter$467.get=function(){return iter$467};
        $prop$getIter$467.set=setIter$467;
        if (setIter$467.$$metamodel$$===undefined)setIter$467.$$metamodel$$=$prop$getIter$467.$$metamodel$$;
        var prev$469=null;
        var setPrev$469=function(prev$470){return prev$469=prev$470;};
        $prop$getPrev$469={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','removeElement','$at','prev']};}};
        $prop$getPrev$469.get=function(){return prev$469};
        $prop$getPrev$469.set=setPrev$469;
        if (setPrev$469.$$metamodel$$===undefined)setPrev$469.$$metamodel$$=$prop$getPrev$469.$$metamodel$$;
        var cell$471;
        while((cell$471=iter$467)!==null){
            if(eq(cell$471.car,val$466)){
                var prev2$472;
                if((prev2$472=prev$469)!==null){
                    (prev2$472.cdr=cell$471.cdr);
                }else {
                    head$410=cell$471.cdr;
                }
                if((!$$$cl1.exists(cell$471.cdr))){
                    tail$412=prev$469;
                }
                (old_size$473=_size$414,_size$414=old_size$473.predecessor,old_size$473);
                var old_size$473;
                iter$467=cell$471.cdr;
            }else {
                prev$469=iter$467;
                iter$467=cell$471.cdr;
            }
        }
    }
    $$linkedList.removeElement=removeElement;
    removeElement.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element',$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','removeElement']};};
    function clear(){
        _size$414=(0);
        head$410=(tail$412=null);
    }
    $$linkedList.clear=clear;
    clear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.doc($$$cl1.String("Remove every item",17)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','clear']};};
    function get(index$474){
        var iter$475=head$410;
        var setIter$475=function(iter$476){return iter$475=iter$476;};
        $prop$getIter$475={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','get','$at','iter']};}};
        $prop$getIter$475.get=function(){return iter$475};
        $prop$getIter$475.set=setIter$475;
        if (setIter$475.$$metamodel$$===undefined)setIter$475.$$metamodel$$=$prop$getIter$475.$$metamodel$$;
        var i$477=(0);
        var setI$477=function(i$478){return i$477=i$478;};
        $prop$getI$477={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','get','$at','i']};}};
        $prop$getI$477.get=function(){return i$477};
        $prop$getI$477.set=setI$477;
        if (setI$477.$$metamodel$$===undefined)setI$477.$$metamodel$$=$prop$getI$477.$$metamodel$$;
        var cell$479;
        while((cell$479=iter$475)!==null){
            if((oldi$480=i$477,i$477=oldi$480.successor,oldi$480).equals(index$474)){
                return cell$479.car;
            }
            var oldi$480;
            iter$475=cell$479.cdr;
        }
        return null;
    }
    $$linkedList.get=get;
    get.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','get']};};
    function span(from$481,to$482){
        var ret$483=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$483={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$m','span','$at','ret']};}};
        $prop$getRet$483.get=function(){return ret$483};
        var iter$484=head$410;
        var setIter$484=function(iter$485){return iter$484=iter$485;};
        $prop$getIter$484={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','span','$at','iter']};}};
        $prop$getIter$484.get=function(){return iter$484};
        $prop$getIter$484.set=setIter$484;
        if (setIter$484.$$metamodel$$===undefined)setIter$484.$$metamodel$$=$prop$getIter$484.$$metamodel$$;
        var i$486=(0);
        var setI$486=function(i$487){return i$486=i$487;};
        $prop$getI$486={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','span','$at','i']};}};
        $prop$getI$486.get=function(){return i$486};
        $prop$getI$486.set=setI$486;
        if (setI$486.$$metamodel$$===undefined)setI$486.$$metamodel$$=$prop$getI$486.$$metamodel$$;
        var cell$488;
        while((cell$488=iter$484)!==null){
            if(i$486.compare(to$482).equals($$$cl1.getLarger())){
                break;
            }
            if((i$486.compare(from$481)!==$$$cl1.getSmaller())){
                ret$483.add(cell$488.car);
            }
            (oldi$489=i$486,i$486=oldi$489.successor,oldi$489);
            var oldi$489;
            iter$484=cell$488.cdr;
        }
        return ret$483;
    }
    $$linkedList.span=span;
    span.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','span']};};
    function spanFrom(from$490){
        var ret$491=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$491={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$m','spanFrom','$at','ret']};}};
        $prop$getRet$491.get=function(){return ret$491};
        var iter$492=head$410;
        var setIter$492=function(iter$493){return iter$492=iter$493;};
        $prop$getIter$492={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','spanFrom','$at','iter']};}};
        $prop$getIter$492.get=function(){return iter$492};
        $prop$getIter$492.set=setIter$492;
        if (setIter$492.$$metamodel$$===undefined)setIter$492.$$metamodel$$=$prop$getIter$492.$$metamodel$$;
        var i$494=(0);
        var setI$494=function(i$495){return i$494=i$495;};
        $prop$getI$494={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','spanFrom','$at','i']};}};
        $prop$getI$494.get=function(){return i$494};
        $prop$getI$494.set=setI$494;
        if (setI$494.$$metamodel$$===undefined)setI$494.$$metamodel$$=$prop$getI$494.$$metamodel$$;
        var cell$496;
        while((cell$496=iter$492)!==null){
            if((i$494.compare(from$490)!==$$$cl1.getSmaller())){
                ret$491.add(cell$496.car);
            }
            (oldi$497=i$494,i$494=oldi$497.successor,oldi$497);
            var oldi$497;
            iter$492=cell$496.cdr;
        }
        return ret$491;
    }
    $$linkedList.spanFrom=spanFrom;
    spanFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanFrom']};};
    function spanTo(to$498){
        var ret$499=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$499={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$m','spanTo','$at','ret']};}};
        $prop$getRet$499.get=function(){return ret$499};
        var iter$500=head$410;
        var setIter$500=function(iter$501){return iter$500=iter$501;};
        $prop$getIter$500={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','spanTo','$at','iter']};}};
        $prop$getIter$500.get=function(){return iter$500};
        $prop$getIter$500.set=setIter$500;
        if (setIter$500.$$metamodel$$===undefined)setIter$500.$$metamodel$$=$prop$getIter$500.$$metamodel$$;
        var i$502=(0);
        var setI$502=function(i$503){return i$502=i$503;};
        $prop$getI$502={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','spanTo','$at','i']};}};
        $prop$getI$502.get=function(){return i$502};
        $prop$getI$502.set=setI$502;
        if (setI$502.$$metamodel$$===undefined)setI$502.$$metamodel$$=$prop$getI$502.$$metamodel$$;
        var cell$504;
        while((cell$504=iter$500)!==null){
            if(i$502.compare(to$498).equals($$$cl1.getLarger())){
                break;
            }
            ret$499.add(cell$504.car);
            (oldi$505=i$502,i$502=oldi$505.successor,oldi$505);
            var oldi$505;
            iter$500=cell$504.cdr;
        }
        return ret$499;
    }
    $$linkedList.spanTo=spanTo;
    spanTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','spanTo']};};
    function segment(from$506,length$507){
        var ret$508=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$508={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$m','segment','$at','ret']};}};
        $prop$getRet$508.get=function(){return ret$508};
        if(length$507.equals((0))){
            return ret$508;
        }
        var iter$509=head$410;
        var setIter$509=function(iter$510){return iter$509=iter$510;};
        $prop$getIter$509={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','segment','$at','iter']};}};
        $prop$getIter$509.get=function(){return iter$509};
        $prop$getIter$509.set=setIter$509;
        if (setIter$509.$$metamodel$$===undefined)setIter$509.$$metamodel$$=$prop$getIter$509.$$metamodel$$;
        var i$511=(0);
        var setI$511=function(i$512){return i$511=i$512;};
        $prop$getI$511={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','segment','$at','i']};}};
        $prop$getI$511.get=function(){return i$511};
        $prop$getI$511.set=setI$511;
        if (setI$511.$$metamodel$$===undefined)setI$511.$$metamodel$$=$prop$getI$511.$$metamodel$$;
        var cell$513;
        while((cell$513=iter$509)!==null){
            if((i$511.compare(from$506)!==$$$cl1.getSmaller())){
                if((ret$508._size$414.compare(length$507)!==$$$cl1.getSmaller())){
                    break;
                }
                ret$508.add(cell$513.car);
            }
            (oldi$514=i$511,i$511=oldi$514.successor,oldi$514);
            var oldi$514;
            iter$509=cell$513.cdr;
        }
        return ret$508;
    }
    $$linkedList.segment=segment;
    segment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','segment']};};
    function defines(index$515){
        return ((index$515.compare((0))!==$$$cl1.getSmaller())&&index$515.compare(_size$414).equals($$$cl1.getSmaller()));
    }
    $$linkedList.defines=defines;
    defines.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','defines']};};
    function contains(element$516){
        var iter$517=head$410;
        var setIter$517=function(iter$518){return iter$517=iter$518;};
        $prop$getIter$517={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','contains','$at','iter']};}};
        $prop$getIter$517.get=function(){return iter$517};
        $prop$getIter$517.set=setIter$517;
        if (setIter$517.$$metamodel$$===undefined)setIter$517.$$metamodel$$=$prop$getIter$517.$$metamodel$$;
        var cell$519;
        while((cell$519=iter$517)!==null){
            var elem$520;
            if($$$cl1.isOfType((elem$520=cell$519.car),{t:$$$cl1.Object})){
                if(elem$520.equals(element$516)){
                    return true;
                }
            }
            iter$517=cell$519.cdr;
        }
        return false;
    }
    $$linkedList.contains=contains;
    contains.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','contains']};};
    $$$cl1.defineAttr($$linkedList,'size',function(){
        return _size$414;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','size']};});
    function count(selecting$521){
        var iter$522=head$410;
        var setIter$522=function(iter$523){return iter$522=iter$523;};
        $prop$getIter$522={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','count','$at','iter']};}};
        $prop$getIter$522.get=function(){return iter$522};
        $prop$getIter$522.set=setIter$522;
        if (setIter$522.$$metamodel$$===undefined)setIter$522.$$metamodel$$=$prop$getIter$522.$$metamodel$$;
        var c$524=(0);
        var setC$524=function(c$525){return c$524=c$525;};
        $prop$getC$524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','count','$at','c']};}};
        $prop$getC$524.get=function(){return c$524};
        $prop$getC$524.set=setC$524;
        if (setC$524.$$metamodel$$===undefined)setC$524.$$metamodel$$=$prop$getC$524.$$metamodel$$;
        var cell$526;
        while((cell$526=iter$522)!==null){
            if(selecting$521(cell$526.car)){
                (oldc$527=c$524,c$524=oldc$527.successor,oldc$527);
                var oldc$527;
            }
            iter$522=cell$526.cdr;
        }
        return c$524;
    }
    $$linkedList.count=count;
    count.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','count']};};
    $$$cl1.defineAttr($$linkedList,'lastIndex',function(){
        return ((!$$linkedList.empty)?_size$414.minus((1)):null);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Integer}]},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','lastIndex']};});
    function iterator(){
        return CellIterator(head$410,{T:$$linkedList.$$targs$$.Element});
    }
    $$linkedList.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','iterator']};};
    $$$cl1.defineAttr($$linkedList,'clone',function(){
        var ret$528=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$528={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','clone','$at','ret']};}};
        $prop$getRet$528.get=function(){return ret$528};
        (ret$528.head$410=head$410);
        (ret$528.tail$412=tail$412);
        (ret$528._size$414=$$linkedList.size);
        return ret$528;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','clone']};});
    $$$cl1.defineAttr($$linkedList,'keys',function(){
        return (opt$529=($$linkedList.empty?$$$cl1.getEmpty():null),opt$529!==null?opt$529:$$$cl1.Range((0),_size$414,{Element:{t:$$$cl1.Integer}}));
        var opt$529;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','keys']};});
    $$$cl1.defineAttr($$linkedList,'string',function(){
        var b$530=$$$cl1.StringBuilder();
        $prop$getB$530={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.collection','LinkedList','$at','string','$at','b']};}};
        $prop$getB$530.get=function(){return b$530};
        b$530.append($$$cl1.String("[",1));
        var iter$531=head$410;
        var setIter$531=function(iter$532){return iter$531=iter$532;};
        $prop$getIter$531={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','string','$at','iter']};}};
        $prop$getIter$531.get=function(){return iter$531};
        $prop$getIter$531.set=setIter$531;
        if (setIter$531.$$metamodel$$===undefined)setIter$531.$$metamodel$$=$prop$getIter$531.$$metamodel$$;
        var cell$533;
        while((cell$533=iter$531)!==null){
            var car$534;
            if($$$cl1.isOfType((car$534=cell$533.car),{t:$$$cl1.Object})){
                b$530.append(car$534.string);
            }else {
                b$530.append($$$cl1.String("null",4));
            }
            iter$531=cell$533.cdr;
            if($$$cl1.exists(iter$531)){
                b$530.append($$$cl1.String(", ",2));
            }
        }
        b$530.append($$$cl1.String("]",1));
        return b$530.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','string']};});
    $$$cl1.defineAttr($$linkedList,'hash',function(){
        var h$535=(17);
        var setH$535=function(h$536){return h$535=h$536;};
        $prop$getH$535={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','h']};}};
        $prop$getH$535.get=function(){return h$535};
        $prop$getH$535.set=setH$535;
        if (setH$535.$$metamodel$$===undefined)setH$535.$$metamodel$$=$prop$getH$535.$$metamodel$$;
        var iter$537=head$410;
        var setIter$537=function(iter$538){return iter$537=iter$538;};
        $prop$getIter$537={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','hash','$at','iter']};}};
        $prop$getIter$537.get=function(){return iter$537};
        $prop$getIter$537.set=setIter$537;
        if (setIter$537.$$metamodel$$===undefined)setIter$537.$$metamodel$$=$prop$getIter$537.$$metamodel$$;
        var cell$539;
        while((cell$539=iter$537)!==null){
            var car$540;
            if($$$cl1.isOfType((car$540=cell$539.car),{t:$$$cl1.Object})){
                h$535=h$535.times((31)).plus(car$540.hash);
            }else {
                h$535=h$535.times((31));
            }
            iter$537=cell$539.cdr;
        }
        return h$535;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','hash']};});
    function equals(that$541){
        var that$542;
        if($$$cl1.isOfType((that$542=that$541),{t:$$$cl1.List,a:{Element:{t:$$$cl1.Object}}})&&_size$414.equals(that$542.size)){
            var iter$543=head$410;
            var setIter$543=function(iter$544){return iter$543=iter$544;};
            $prop$getIter$543={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter']};}};
            $prop$getIter$543.get=function(){return iter$543};
            $prop$getIter$543.set=setIter$543;
            if (setIter$543.$$metamodel$$===undefined)setIter$543.$$metamodel$$=$prop$getIter$543.$$metamodel$$;
            var iter2$545=that$542.iterator();
            var setIter2$545=function(iter2$546){return iter2$545=iter2$546;};
            $prop$getIter2$545={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Object}}},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$m','equals','$at','iter2']};}};
            $prop$getIter2$545.get=function(){return iter2$545};
            $prop$getIter2$545.set=setIter2$545;
            if (setIter2$545.$$metamodel$$===undefined)setIter2$545.$$metamodel$$=$prop$getIter2$545.$$metamodel$$;
            var cell$547;
            while((cell$547=iter$543)!==null){
                var thatElement$548;
                if(!$$$cl1.isOfType((thatElement$548=iter2$545.next()),{t:$$$cl1.Finished})){
                    if((!eq(cell$547.car,thatElement$548))){
                        return false;
                    }
                    iter$543=cell$547.cdr;
                }else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    $$linkedList.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$m','equals']};};
    $$$cl1.defineAttr($$linkedList,'reversed',function(){
        var ret$549=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$549={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','reversed','$at','ret']};}};
        $prop$getRet$549.get=function(){return ret$549};
        var iter$550=head$410;
        var setIter$550=function(iter$551){return iter$550=iter$551;};
        $prop$getIter$550={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','reversed','$at','iter']};}};
        $prop$getIter$550.get=function(){return iter$550};
        $prop$getIter$550.set=setIter$550;
        if (setIter$550.$$metamodel$$===undefined)setIter$550.$$metamodel$$=$prop$getIter$550.$$metamodel$$;
        var cell$552;
        while((cell$552=iter$550)!==null){
            (ret$549.head$410=Cell(cell$552.car,ret$549.head$410,{T:$$linkedList.$$targs$$.Element}));
            if((!$$$cl1.exists(ret$549.tail$412))){
                (ret$549.tail$412=ret$549.head$410);
            }
            iter$550=cell$552.cdr;
        }
        (ret$549._size$414=_size$414);
        return ret$549;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','reversed']};});
    $$$cl1.defineAttr($$linkedList,'rest',function(){
        var ret$553=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        $prop$getRet$553={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:LinkedList,a:{Element:'Element'}},d:['ceylon.collection','LinkedList','$at','rest','$at','ret']};}};
        $prop$getRet$553.get=function(){return ret$553};
        var iter$554=(opt$555=head$410,opt$555!==null?opt$555.cdr:null);
        var setIter$554=function(iter$556){return iter$554=iter$556;};
        $prop$getIter$554={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]},$an:function(){return[$$$cl1.variable()];},d:['ceylon.collection','LinkedList','$at','rest','$at','iter']};}};
        $prop$getIter$554.get=function(){return iter$554};
        $prop$getIter$554.set=setIter$554;
        if (setIter$554.$$metamodel$$===undefined)setIter$554.$$metamodel$$=$prop$getIter$554.$$metamodel$$;
        var opt$555;
        var cell$557;
        while((cell$557=iter$554)!==null){
            ret$553.add(cell$557.car);
            iter$554=cell$557.cdr;
        }
        return ret$553;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$cont:LinkedList,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.collection','LinkedList','$at','rest']};});
    return $$linkedList;
}
LinkedList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{}},satisfies:[{t:MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A mutable Linked List",21)),$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},d:['ceylon.collection','LinkedList']};};
exports.LinkedList=LinkedList;
function $init$LinkedList(){
    if (LinkedList.$$===undefined){
        $$$cl1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',$$$cl1.Basic,$init$MutableList());
    }
    return LinkedList;
}
exports.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
function makeCellEntryArray(size$558,$$$mptypes){
    return $$$cl1.arrayOfSize(size$558,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}});
};makeCellEntryArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},d:['ceylon.collection','makeCellEntryArray']};};
function makeCellElementArray(size$559,$$$mptypes){
    return $$$cl1.arrayOfSize(size$559,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}});
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
