(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.collection","$mod-version":"0.6","ceylon.collection":{"Cell":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":"T","$mt":"prm","$pt":"v","$nm":"_car"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$mt":"prm","$pt":"v","$nm":"_cdr"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}],"$pk":"ceylon.language","$nm":"Cloneable"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$at":{"car":{"$t":{"$nm":"T"},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"car"},"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"cdr":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"variable":[]},"$nm":"cdr"}},"$nm":"Cell"},"MutableSet":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Set"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Mutable set"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes every element."]},"$nm":"clear"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds the elements to this set, unless already present. \n    \n    Returns true if any element was added, false if they were all already part of the Set."]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes an element from this set, if present.\n    \n    Returns true if the element was removed, false if it was not part of the Set."]},"$nm":"remove"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds an element to this set, if not already present. \n    \n    Returns true if the element was added, false if it was already part of the Set."]},"$nm":"add"}},"$nm":"MutableSet"},"CellIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"iter"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"cls","$tp":[{"$nm":"T"}],"$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"T"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"iter":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"T"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"iter"}},"$nm":"CellIterator"},"HashMap":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"initialValues"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.collection","$nm":"MutableMap"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Map implementation that uses hashing"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every key\/value mapping"],"actual":[]},"$nm":"clear"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":"Key","$mt":"prm","$pt":"v","$nm":"key"},{"$t":"Item","$mt":"prm","$pt":"v","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"put"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},"$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"count"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":"Key","$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes a key\/value mapping if it exists"],"actual":[]},"$nm":"remove"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"store"},{"$t":"Key","$mt":"prm","$pt":"v","$nm":"key"},{"$t":"Item","$mt":"prm","$pt":"v","$nm":"item"}]],"$mt":"mthd","$nm":"addToStore"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a collection of key\/value mappings to this map, may be used to change existing mappings"],"actual":[]},"$nm":"putAll"}},"$at":{"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"values":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Collection"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"values"},"inverse":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Item"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"}],"$pk":"ceylon.language","$nm":"Map"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"inverse"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashMap"},"$pkg-shared":"1","MutableList":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"}],"$mt":"ifc","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A mutable Linked List"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Remove every item"]},"$nm":"clear"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes all occurences of the given element"]},"$nm":"removeElement"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds the items at the end of this list"]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes the item at the specified index"]},"$nm":"remove"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Sets an item at the given index. List is expanded if index > size"]},"$nm":"set"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Inserts an item at specified index, list is expanded if index > size"]},"$nm":"insert"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds an item at the end of this list"]},"$nm":"add"}},"$nm":"MutableList"},"LinkedList":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableList"}],"$mt":"cls","$tp":[{"$nm":"Element"}],"$an":{"shared":[],"doc":["A mutable Linked List"],"by":["Stéphane Épardaud"]},"$m":{"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator"},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"values"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"count"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Removes the item at the specified index"],"actual":[]},"$nm":"remove"},"get":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Element"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"get"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"segment":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"length"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"segment"},"set":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Sets an item at the given index. List is expanded if index > size"],"actual":[]},"$nm":"set"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds an item at the end of this list"],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Remove every item"],"actual":[]},"$nm":"clear"},"_add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$nm":"_add"},"removeElement":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"removeElement"},"defines":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"defines"},"spanTo":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanTo"},"insert":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"index"},{"$t":"Element","$mt":"prm","$pt":"v","$nm":"val"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Inserts an item at specified index, list is expanded if index > size"],"actual":[]},"$nm":"insert"},"spanFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"spanFrom"},"span":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"from"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"to"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"span"}},"$at":{"lastIndex":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"lastIndex"},"clone":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"keys":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"keys"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"rest":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"rest"},"reversed":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"reversed"},"head":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"head"},"tail":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"tail"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"LinkedList"},"makeCellEntryArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"size"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$nm":"makeCellEntryArray"},"group":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Group"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$pk":"ceylon.collection","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$pk":"ceylon.language","$nm":"Map"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"elements"},{"$t":"Group","$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"prm","$pt":"f","$an":{"doc":["A function that returns the key under which to group the \nspecified element."]},"$nm":"grouping"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Group"},{"$nm":"Element"}],"$an":{"shared":[],"doc":["Creates a `Map` that contains the `Iterable`'s\n    elements, grouped in `Sequence`s under the\n    keys provided by the grouping function."]},"$m":{"fn":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Sequence"},"$ps":[[{"$t":"Group","$mt":"prm","$pt":"v","$nm":"key"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"prm","$pt":"v","$nm":"item"}]],"$mt":"mthd","$nm":"fn"}},"$nm":"group"},"makeCellElementArray":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"size"}]],"$mt":"mthd","$tp":[{"$nm":"Element"}],"$nm":"makeCellElementArray"},"eq":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$pt":"v","$nm":"a"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$pt":"v","$nm":"b"}]],"$mt":"mthd","$nm":"eq"},"HashSet":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$def":"1","$nm":"values"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"MutableSet"}],"$mt":"cls","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Set that uses a Hashing implementation."],"by":["Stéphane Épardaud"]},"$m":{"intersection":{"$t":{"$tp":[{"comp":"i","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$pt":"v","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"intersection"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"iterator","$o":{"iter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$nm":"Element"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"index":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"index"},"bucket":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"bucket"}},"$nm":"iter"}}},"addAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"elements"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"addAll"},"remove":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"remove"},"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"prm","$pt":"f","$nm":"selecting"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"count"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"contains":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"contains"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"add"},"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"doc":["Removes every element"],"actual":[]},"$nm":"clear"},"complement":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$pt":"v","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"complement"},"storeIndex":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"elem"},{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"store"}]],"$mt":"mthd","$nm":"storeIndex"},"checkRehash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"checkRehash"},"exclusiveUnion":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$pt":"v","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"exclusiveUnion"},"union":{"$t":{"$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$nm":"Element"},{"$nm":"Other"}]}],"$pk":"ceylon.collection","$nm":"HashSet"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Other"}],"$pk":"ceylon.language","$nm":"Set"},"$mt":"prm","$pt":"v","$nm":"set"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Other"}],"$an":{"shared":[],"actual":[]},"$nm":"union"},"addToStore":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"$mt":"prm","$pt":"v","$nm":"store"},{"$t":"Element","$mt":"prm","$pt":"v","$nm":"element"}]],"$mt":"mthd","$nm":"addToStore"}},"$at":{"clone":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"HashSet"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"clone"},"store":{"$t":{"$md":"ceylon.language","$tp":[{"comp":"u","$mt":"tpm","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.collection","$nm":"Cell"}]}],"$pk":"ceylon.language","$nm":"Array"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"store"},"hash":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hash"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"_size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"_size"},"loadFactor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"attr","$nm":"loadFactor"},"size":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"size"}},"$nm":"HashSet"},"MutableMap":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Map"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Key"},{"satisfies":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}],"$nm":"Item"}],"$an":{"shared":[],"doc":["Mutable map"],"by":["Stéphane Épardaud"]},"$m":{"clear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes every key\/value mapping."]},"$nm":"clear"},"put":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":"Key","$mt":"prm","$pt":"v","$nm":"key"},{"$t":"Item","$mt":"prm","$pt":"v","$nm":"item"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a key\/value mapping to this map, may be used to modify an existing mapping.\n    \n    Returns the previous value pointed to by `key`, or null."]},"$nm":"put"},"remove":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$nm":"Item"}]},"$ps":[[{"$t":"Key","$mt":"prm","$pt":"v","$nm":"key"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Removes a key\/value mapping if it exists.\n    \n    Returns the previous value pointed to by `key`, or null."]},"$nm":"remove"},"putAll":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Key"},{"$mt":"tpm","$nm":"Item"}],"$pk":"ceylon.language","$nm":"Entry"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$pt":"v","$nm":"entries"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds the key\/value mappings to this map, may be used to change existing mappings."]},"$nm":"putAll"}},"$nm":"MutableMap"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function Cell(_car$126, _cdr$127, $$targs$$,$$cell){
    $init$Cell();
    if ($$cell===undefined)$$cell=new Cell.$$;
    $$$cl1.set_type_args($$cell,$$targs$$);
    $$$cl1.Cloneable($$cell);
    $$$cl1.add_type_arg($$cell,'Clone',{t:Cell,a:{T:$$cell.$$targs$$.T}});
    var car=_car$126;
    $$$cl1.defineAttr($$cell,'car',function(){return car;},function(car$128){return car=car$128;});
    var cdr=_cdr$127;
    $$$cl1.defineAttr($$cell,'cdr',function(){return cdr;},function(cdr$129){return cdr=cdr$129;});
    $$$cl1.defineAttr($$cell,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Cell($$cell.car,(opt$130=$$cell.cdr,opt$130!==null?opt$130.clone:null),{T:$$cell.$$targs$$.T});
        var opt$130;
    });
    return $$cell;
}
Cell.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Cloneable,a:{Clone:{t:Cell,a:{T:'T'}}}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['Cell']};
function $init$Cell(){
    if (Cell.$$===undefined){
        $$$cl1.initTypeProto(Cell,'ceylon.collection::Cell',$$$cl1.Basic,$$$cl1.Cloneable);
    }
    return Cell;
}
exports.$init$Cell=$init$Cell;
$init$Cell();
function CellIterator(iter$131, $$targs$$,$$cellIterator){
    $init$CellIterator();
    if ($$cellIterator===undefined)$$cellIterator=new CellIterator.$$;
    $$$cl1.set_type_args($$cellIterator,$$targs$$);
    $$$cl1.Iterator($$cellIterator);
    var iter$132=iter$131;
    $$$cl1.defineAttr($$cellIterator,'iter$132',function(){return iter$132;},function(iter$133){return iter$132=iter$133;});
    function next(){
        var iter$134;
        if((iter$134=iter$132)!==null){
            ($$cellIterator.iter$132=iter$134.cdr);
            return iter$134.car;
        }
        return $$$cl1.getFinished();
    }
    $$cellIterator.next=next;
    next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:['T',{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['CellIterator']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[$$cellIterator.$$targs$$.T,{t:$$$cl1.Finished}]}};
    return $$cellIterator;
}
CellIterator.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{T:{}},satisfies:[{t:$$$cl1.Iterator,a:{Element:'T'}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['CellIterator']};
function $init$CellIterator(){
    if (CellIterator.$$===undefined){
        $$$cl1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',$$$cl1.Basic,$$$cl1.Iterator);
    }
    return CellIterator;
}
exports.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function eq(a$135,b$136){
    var a$137;
    if((a$137=a$135)!==null){
        var b$138;
        if((b$138=b$136)!==null){
            return a$137.equals(b$138);
        }
        return false;
    }
    return (!$$$cl1.exists(b$136));
};eq.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'a',$mt:'prm',$t:{t:$$$cl1.Anything}},{$nm:'b',$mt:'prm',$t:{t:$$$cl1.Anything}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['eq']};//eq.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Boolean}};
function group(elements$139,grouping$140,$$$mptypes){
    var map$141=HashMap(undefined,{Key:$$$mptypes.Group,Item:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}});
    var it$142 = elements$139.iterator();
    var element$143;while ((element$143=it$142.next())!==$$$cl1.getFinished()){
        var group$144=grouping$140(element$143);
        var sb$145=map$141.get(group$144);
        var sb$146;
        if($$$cl1.isOfType((sb$146=sb$145),{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}})){
            sb$146.append(element$143);
        }else {
            map$141.put(group$144,$$$cl1.SequenceBuilder({Element:$$$mptypes.Element}).append(element$143));
        }
    }
    function fn$147(key$148,item$149){
        var sequence$150=item$149.sequence;
        //assert at group.ceylon (29:8-29:33)
        var sequence$151;
        if (!($$$cl1.nonempty((sequence$151=sequence$150)))) { throw $$$cl1.AssertionException('Assertion failed: \'nonempty sequence\' at group.ceylon (29:14-29:32)'); }
        return sequence$151;
    };fn$147.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequence,a:{Element:'Element'}},$ps:[{$nm:'key',$mt:'prm',$t:'Group'},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['group']['$m']['fn']};//fn$147.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}},Element:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}}},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}};
    return map$141.mapItems($$$cl1.$JsCallable(fn$147,[{$nm:'key',$mt:'prm',$t:'Group'},{$nm:'item',$mt:'prm',$t:{t:$$$cl1.SequenceBuilder,a:{Element:'Element'}}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}},Element:{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}}},First:$$$mptypes.Group,Element:{ t:'u', l:[$$$mptypes.Group,{t:$$$cl1.SequenceBuilder,a:{Element:$$$mptypes.Element}}]}}},Return:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}}),{Result:{t:$$$cl1.Sequence,a:{Element:$$$mptypes.Element}}});
}
exports.group=group;
group.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Map,a:{Key:'Group',Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:'Element'}}}},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}},{$nm:'grouping',$mt:'prm',$t:'Group'}],$tp:{Group:{'satisfies':[{t:$$$cl1.Object}]},Element:{}},$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['group']};//group.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Group,Element:$$$mptypes.Group}},Return:{t:$$$cl1.Map,a:{Key:$$$mptypes.Group,Item:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Nothing},Element:$$$mptypes.Element}}}}};
function HashMap(initialValues$152, $$targs$$,$$hashMap){
    $init$HashMap();
    if ($$hashMap===undefined)$$hashMap=new HashMap.$$;
    $$$cl1.set_type_args($$hashMap,$$targs$$);
    if(initialValues$152===undefined){initialValues$152=$$$cl1.getEmpty();}
    MutableMap($$hashMap);
    var store$153=makeCellEntryArray((16),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
    $$$cl1.defineAttr($$hashMap,'store$153',function(){return store$153;},function(store$154){return store$153=store$154;});
    var _size$155=(0);
    $$$cl1.defineAttr($$hashMap,'_size$155',function(){return _size$155;},function(_size$156){return _size$155=_size$156;});
    var loadFactor$157=$$$cl1.Float(0.75);
    $$$cl1.defineAttr($$hashMap,'loadFactor$157',function(){return loadFactor$157;});
    function storeIndex$158(key$159,store$160){
        var i$161=key$159.hash.remainder(store$160.size);
        return (opt$162=(i$161.negative?i$161.negativeValue:null),opt$162!==null?opt$162:i$161);
        var opt$162;
    };storeIndex$158.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['storeIndex']};//storeIndex$158.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}}]}}},Element:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}}]}}}}},Return:{t:$$$cl1.Integer}};
    function addToStore$163(store$164,key$165,item$166){
        var index$167=storeIndex$158(key$165,store$164);
        var bucket$168=store$164.get(index$167);
        var setBucket$168=function(bucket$169){return bucket$168=bucket$169;};
        var cell$170;
        while((cell$170=bucket$168)!==null){
            if(cell$170.car.key.equals(key$165)){
                (cell$170.car=$$$cl1.Entry(key$165,item$166,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                return false;
            }
            bucket$168=cell$170.cdr;
        }
        store$164.set(index$167,Cell($$$cl1.Entry(key$165,item$166,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$164.get(index$167),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
        return true;
    };addToStore$163.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}}},{$nm:'key',$mt:'prm',$t:'Key'},{$nm:'item',$mt:'prm',$t:'Item'}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['addToStore']};//addToStore$163.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashMap.$$targs$$.Item,Element:$$hashMap.$$targs$$.Item}},Return:{t:$$$cl1.Boolean}};
    function checkRehash$171(){
        if(_size$155.compare(store$153.size.$float.times(loadFactor$157).integer).equals($$$cl1.getLarger())){
            var newStore$172=makeCellEntryArray(_size$155.times((2)),{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
            var index$173=(0);
            var setIndex$173=function(index$174){return index$173=index$174;};
            while(index$173.compare(store$153.size).equals($$$cl1.getSmaller())){
                var bucket$175=store$153.get(index$173);
                var setBucket$175=function(bucket$176){return bucket$175=bucket$176;};
                var cell$177;
                while((cell$177=bucket$175)!==null){
                    addToStore$163(newStore$172,cell$177.car.key,cell$177.car.item);
                    bucket$175=cell$177.cdr;
                }
                (oldindex$178=index$173,index$173=oldindex$178.successor,oldindex$178);
                var oldindex$178;
            }
            store$153=newStore$172;
        }
    };checkRehash$171.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['checkRehash']};//checkRehash$171.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    var it$179 = initialValues$152.iterator();
    var item$180;while ((item$180=it$179.next())!==$$$cl1.getFinished()){
        var key$181=item$180.key;
        var item$182=item$180.item;
        if(addToStore$163(store$153,key$181,item$182)){
            (old_size$183=_size$155,_size$155=old_size$183.successor,old_size$183);
            var old_size$183;
        }
    }
    checkRehash$171();
    function put(key$184,item$185){
        var index$186=storeIndex$158(key$184,store$153);
        var bucket$187=store$153.get(index$186);
        var setBucket$187=function(bucket$188){return bucket$187=bucket$188;};
        var cell$189;
        while((cell$189=bucket$187)!==null){
            if(cell$189.car.key.equals(key$184)){
                var oldValue$190=cell$189.car.item;
                (cell$189.car=$$$cl1.Entry(key$184,item$185,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
                return oldValue$190;
            }
            bucket$187=cell$189.cdr;
        }
        store$153.set(index$186,Cell($$$cl1.Entry(key$184,item$185,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}),store$153.get(index$186),{T:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}));
        (old_size$191=_size$155,_size$155=old_size$191.successor,old_size$191);
        var old_size$191;
        checkRehash$171();
        return null;
    }
    $$hashMap.put=put;
    put.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key'},{$nm:'item',$mt:'prm',$t:'Item'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['put']};//put.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashMap.$$targs$$.Item,Element:$$hashMap.$$targs$$.Item}},Return:{ t:'u', l:[{t:$$$cl1.Null},$$hashMap.$$targs$$.Item]}};
    function putAll(entries$192){
        var it$193 = entries$192.iterator();
        var entry$194;while ((entry$194=it$193.next())!==$$$cl1.getFinished()){
            if(addToStore$163(store$153,entry$194.key,entry$194.item)){
                (old_size$195=_size$155,_size$155=old_size$195.successor,old_size$195);
                var old_size$195;
            }
        }
        checkRehash$171();
    }
    $$hashMap.putAll=putAll;
    putAll.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'entries',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['putAll']};//putAll.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}},Element:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}}}},Return:{t:$$$cl1.Anything}};
    function remove(key$196){
        var index$197=storeIndex$158(key$196,store$153);
        var bucket$198=store$153.get(index$197);
        var setBucket$198=function(bucket$199){return bucket$198=bucket$199;};
        var prev$200=null;
        var setPrev$200=function(prev$201){return prev$200=prev$201;};
        var cell$202;
        while((cell$202=bucket$198)!==null){
            if(cell$202.car.key.equals(key$196)){
                var last$203;
                if((last$203=prev$200)!==null){
                    (last$203.cdr=cell$202.cdr);
                }else {
                    store$153.set(index$197,cell$202.cdr);
                }
                (old_size$204=_size$155,_size$155=old_size$204.predecessor,old_size$204);
                var old_size$204;
                return cell$202.car.item;
            }
            prev$200=cell$202;
            bucket$198=cell$202.cdr;
        }
        return null;
    }
    $$hashMap.remove=remove;
    remove.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:'Key'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['remove']};//remove.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashMap.$$targs$$.Key,Element:$$hashMap.$$targs$$.Key}},Return:{ t:'u', l:[{t:$$$cl1.Null},$$hashMap.$$targs$$.Item]}};
    function clear(){
        var index$205=(0);
        var setIndex$205=function(index$206){return index$205=index$206;};
        while(index$205.compare(store$153.size).equals($$$cl1.getSmaller())){
            store$153.set((oldindex$207=index$205,index$205=oldindex$207.successor,oldindex$207),null);
            var oldindex$207;
        }
        _size$155=(0);
    }
    $$hashMap.clear=clear;
    clear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['clear']};//clear.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    $$$cl1.defineAttr($$hashMap,'size',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return _size$155;
    });
    function get(key$208){
        if($$hashMap.empty){
            return null;
        }
        var index$209=storeIndex$158(key$208,store$153);
        var bucket$210=store$153.get(index$209);
        var setBucket$210=function(bucket$211){return bucket$210=bucket$211;};
        var cell$212;
        while((cell$212=bucket$210)!==null){
            if(cell$212.car.key.equals(key$208)){
                return cell$212.car.item;
            }
            bucket$210=cell$212.cdr;
        }
        return null;
    }
    $$hashMap.get=get;
    get.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Item']},$ps:[{$nm:'key',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['get']};//get.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{ t:'u', l:[{t:$$$cl1.Null},$$hashMap.$$targs$$.Item]}};
    $$$cl1.defineAttr($$hashMap,'values',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$213=LinkedList(undefined,{Element:$$hashMap.$$targs$$.Item});
        var index$214=(0);
        var setIndex$214=function(index$215){return index$214=index$215;};
        while(index$214.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$216=store$153.get(index$214);
            var setBucket$216=function(bucket$217){return bucket$216=bucket$217;};
            var cell$218;
            while((cell$218=bucket$216)!==null){
                ret$213.add(cell$218.car.item);
                bucket$216=cell$218.cdr;
            }
            (oldindex$219=index$214,index$214=oldindex$219.successor,oldindex$219);
            var oldindex$219;
        }
        return ret$213;
    });
    $$$cl1.defineAttr($$hashMap,'keys',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$220=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
        var index$221=(0);
        var setIndex$221=function(index$222){return index$221=index$222;};
        while(index$221.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$223=store$153.get(index$221);
            var setBucket$223=function(bucket$224){return bucket$223=bucket$224;};
            var cell$225;
            while((cell$225=bucket$223)!==null){
                ret$220.add(cell$225.car.key);
                bucket$223=cell$225.cdr;
            }
            (oldindex$226=index$221,index$221=oldindex$226.successor,oldindex$226);
            var oldindex$226;
        }
        return ret$220;
    });
    $$$cl1.defineAttr($$hashMap,'inverse',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$227=HashMap(undefined,{Key:$$hashMap.$$targs$$.Item,Item:{t:MutableSet,a:{Element:$$hashMap.$$targs$$.Key}}});
        var index$228=(0);
        var setIndex$228=function(index$229){return index$228=index$229;};
        while(index$228.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$230=store$153.get(index$228);
            var setBucket$230=function(bucket$231){return bucket$230=bucket$231;};
            var cell$232;
            while((cell$232=bucket$230)!==null){
                var keys$233=ret$227.get(cell$232.car.item);
                var keys$234;
                if((keys$234=keys$233)!==null){
                    keys$234.add(cell$232.car.key);
                }else {
                    var k$235=HashSet(undefined,{Element:$$hashMap.$$targs$$.Key});
                    ret$227.put(cell$232.car.item,k$235);
                    k$235.add(cell$232.car.key);
                }
                bucket$230=cell$232.cdr;
            }
            (oldindex$236=index$228,index$228=oldindex$236.successor,oldindex$236);
            var oldindex$236;
        }
        return ret$227;
    });
    function iterator(){
        function iter$237($$targs$$){
            var $$iter$237=new iter$237.$$;
            $$iter$237.$$targs$$=$$targs$$;
            $$$cl1.Iterator($$iter$237);
            $$$cl1.add_type_arg($$iter$237,'Element',{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}});
            var index$238=(0);
            $$$cl1.defineAttr($$iter$237,'index$238',function(){return index$238;},function(index$239){return index$238=index$239;});
            var bucket$240=store$153.get(index$238);
            $$$cl1.defineAttr($$iter$237,'bucket$240',function(){return bucket$240;},function(bucket$241){return bucket$240=bucket$241;});
            function next(){
                if((!$$$cl1.exists(bucket$240))){
                    while((index$238=index$238.successor).compare(store$153.size).equals($$$cl1.getSmaller())){
                        bucket$240=store$153.get(index$238);
                        if($$$cl1.exists(bucket$240)){
                            break;
                        }
                    }
                }
                var bucket$242;
                if((bucket$242=bucket$240)!==null){
                    var car$243=bucket$242.car;
                    ($$iter$237.bucket$240=bucket$242.cdr);
                    return car$243;
                }
                return $$$cl1.getFinished();
            }
            $$iter$237.next=next;
            next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}},{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['iterator']['$o']['iter']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}},{t:$$$cl1.Finished}]}};
            return $$iter$237;
        }
        function $init$iter$237(){
            if (iter$237.$$===undefined){
                $$$cl1.initTypeProto(iter$237,'ceylon.collection::HashMap.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return iter$237;
        }
        $init$iter$237();
        var iter$244=iter$237({Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}});
        var getIter$244=function(){
            return iter$244;
        }
        return getIter$244();
    }
    $$hashMap.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:{t:$$$cl1.Entry,a:{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}}}}};
    function count(selecting$245){
        var index$246=(0);
        var setIndex$246=function(index$247){return index$246=index$247;};
        var count$248=(0);
        var setCount$248=function(count$249){return count$248=count$249;};
        while(index$246.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$250=store$153.get(index$246);
            var setBucket$250=function(bucket$251){return bucket$250=bucket$251;};
            var cell$252;
            while((cell$252=bucket$250)!==null){
                if(selecting$245(cell$252.car)){
                    (oldcount$253=count$248,count$248=oldcount$253.successor,oldcount$253);
                    var oldcount$253;
                }
                bucket$250=cell$252.cdr;
            }
            (oldindex$254=index$246,index$246=oldindex$254.successor,oldindex$254);
            var oldindex$254;
        }
        return count$248;
    }
    $$hashMap.count=count;
    count.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['count']};//count.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Integer}};
    $$$cl1.defineAttr($$hashMap,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var index$255=(0);
        var setIndex$255=function(index$256){return index$255=index$256;};
        var ret$257=$$$cl1.StringBuilder();
        ret$257.append($$$cl1.String("{",1));
        var first$258=true;
        var setFirst$258=function(first$259){return first$258=first$259;};
        while(index$255.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$260=store$153.get(index$255);
            var setBucket$260=function(bucket$261){return bucket$260=bucket$261;};
            var cell$262;
            while((cell$262=bucket$260)!==null){
                if((!first$258)){
                    ret$257.append($$$cl1.String(", ",2));
                }else {
                    first$258=false;
                }
                ret$257.append(cell$262.car.key.string);
                ret$257.append($$$cl1.String("->",2));
                ret$257.append(cell$262.car.item.string);
                bucket$260=cell$262.cdr;
            }
            (oldindex$263=index$255,index$255=oldindex$263.successor,oldindex$263);
            var oldindex$263;
        }
        ret$257.append($$$cl1.String("}",1));
        return ret$257.string;
    });
    $$$cl1.defineAttr($$hashMap,'hash',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var index$264=(0);
        var setIndex$264=function(index$265){return index$264=index$265;};
        var hash$266=(17);
        var setHash$266=function(hash$267){return hash$266=hash$267;};
        while(index$264.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$268=store$153.get(index$264);
            var setBucket$268=function(bucket$269){return bucket$268=bucket$269;};
            var cell$270;
            while((cell$270=bucket$268)!==null){
                hash$266=hash$266.times((31)).plus(cell$270.car.hash);
                bucket$268=cell$270.cdr;
            }
            (oldindex$271=index$264,index$264=oldindex$271.successor,oldindex$271);
            var oldindex$271;
        }
        return hash$266;
    });
    function equals(that$272){
        var that$273;
        if($$$cl1.isOfType((that$273=that$272),{t:$$$cl1.Map,a:{Key:{t:$$$cl1.Object},Item:{t:$$$cl1.Object}}})&&$$hashMap.size.equals(that$273.size)){
            var index$274=(0);
            var setIndex$274=function(index$275){return index$274=index$275;};
            while(index$274.compare(store$153.size).equals($$$cl1.getSmaller())){
                var bucket$276=store$153.get(index$274);
                var setBucket$276=function(bucket$277){return bucket$276=bucket$277;};
                var cell$278;
                while((cell$278=bucket$276)!==null){
                    var item$279=that$273.get(cell$278.car.key);
                    var item$280;
                    if((item$280=item$279)!==null){
                        if((!item$280.equals(cell$278.car.item))){
                            return false;
                        }
                    }else {
                        return false;
                    }
                    bucket$276=cell$278.cdr;
                }
                (oldindex$281=index$274,index$274=oldindex$281.successor,oldindex$281);
                var oldindex$281;
            }
            return true;
        }
        return false;
    }
    $$hashMap.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$hashMap,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var clone$282=HashMap(undefined,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item});
        (clone$282._size$155=_size$155);
        (clone$282.store$153=makeCellEntryArray(store$153.size,{Key:$$hashMap.$$targs$$.Key,Item:$$hashMap.$$targs$$.Item}));
        var index$283=(0);
        var setIndex$283=function(index$284){return index$283=index$284;};
        while(index$283.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$285;
            if((bucket$285=store$153.get(index$283))!==null){
                clone$282.store$153.set(index$283,bucket$285.clone);
            }
            (oldindex$286=index$283,index$283=oldindex$286.successor,oldindex$286);
            var oldindex$286;
        }
        return clone$282;
    });
    function contains(element$287){
        var index$288=(0);
        var setIndex$288=function(index$289){return index$288=index$289;};
        while(index$288.compare(store$153.size).equals($$$cl1.getSmaller())){
            var bucket$290=store$153.get(index$288);
            var setBucket$290=function(bucket$291){return bucket$290=bucket$291;};
            var cell$292;
            while((cell$292=bucket$290)!==null){
                if(cell$292.car.item.equals(element$287)){
                    return true;
                }
                bucket$290=cell$292.cdr;
            }
            (oldindex$293=index$288,index$288=oldindex$293.successor,oldindex$293);
            var oldindex$293;
        }
        return false;
    }
    $$hashMap.contains=contains;
    contains.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']['$m']['contains']};//contains.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    return $$hashMap;
}
HashMap.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableMap,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashMap']};
exports.HashMap=HashMap;
function $init$HashMap(){
    if (HashMap.$$===undefined){
        $$$cl1.initTypeProto(HashMap,'ceylon.collection::HashMap',$$$cl1.Basic,$init$MutableMap());
    }
    return HashMap;
}
exports.$init$HashMap=$init$HashMap;
$init$HashMap();
function HashSet(values$294, $$targs$$,$$hashSet){
    $init$HashSet();
    if ($$hashSet===undefined)$$hashSet=new HashSet.$$;
    $$$cl1.set_type_args($$hashSet,$$targs$$);
    if(values$294===undefined){values$294=$$$cl1.getEmpty();}
    MutableSet($$hashSet);
    var store$295=makeCellElementArray((16),{Element:$$hashSet.$$targs$$.Element});
    $$$cl1.defineAttr($$hashSet,'store$295',function(){return store$295;},function(store$296){return store$295=store$296;});
    var _size$297=(0);
    $$$cl1.defineAttr($$hashSet,'_size$297',function(){return _size$297;},function(_size$298){return _size$297=_size$298;});
    var loadFactor$299=$$$cl1.Float(0.75);
    $$$cl1.defineAttr($$hashSet,'loadFactor$299',function(){return loadFactor$299;});
    function storeIndex$300(elem$301,store$302){
        var i$303=elem$301.hash.remainder(store$302.size);
        return (opt$304=(i$303.negative?i$303.negativeValue:null),opt$304!==null?opt$304:i$303);
        var opt$304;
    };storeIndex$300.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'elem',$mt:'prm',$t:{t:$$$cl1.Object}},{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}}}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['storeIndex']};//storeIndex$300.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$hashSet.$$targs$$.Element}}]}}},Element:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$hashSet.$$targs$$.Element}}]}}}}},Return:{t:$$$cl1.Integer}};
    function addToStore$305(store$306,element$307){
        var index$308=storeIndex$300(element$307,store$306);
        var bucket$309=store$306.get(index$308);
        var setBucket$309=function(bucket$310){return bucket$309=bucket$310;};
        var cell$311;
        while((cell$311=bucket$309)!==null){
            if(cell$311.car.equals(element$307)){
                (cell$311.car=element$307);
                return false;
            }
            bucket$309=cell$311.cdr;
        }
        store$306.set(index$308,Cell(element$307,store$306.get(index$308),{T:$$hashSet.$$targs$$.Element}));
        return true;
    };addToStore$305.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'store',$mt:'prm',$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}}},{$nm:'element',$mt:'prm',$t:'Element'}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['addToStore']};//addToStore$305.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashSet.$$targs$$.Element,Element:$$hashSet.$$targs$$.Element}},Return:{t:$$$cl1.Boolean}};
    function checkRehash$312(){
        if(_size$297.compare(store$295.size.$float.times(loadFactor$299).integer).equals($$$cl1.getLarger())){
            var newStore$313=makeCellElementArray(_size$297.times((2)),{Element:$$hashSet.$$targs$$.Element});
            var index$314=(0);
            var setIndex$314=function(index$315){return index$314=index$315;};
            while(index$314.compare(store$295.size).equals($$$cl1.getSmaller())){
                var bucket$316=store$295.get(index$314);
                var setBucket$316=function(bucket$317){return bucket$316=bucket$317;};
                var cell$318;
                while((cell$318=bucket$316)!==null){
                    addToStore$305(newStore$313,cell$318.car);
                    bucket$316=cell$318.cdr;
                }
                (oldindex$319=index$314,index$314=oldindex$319.successor,oldindex$319);
                var oldindex$319;
            }
            store$295=newStore$313;
        }
    };checkRehash$312.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['checkRehash']};//checkRehash$312.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    var it$320 = values$294.iterator();
    var val$321;while ((val$321=it$320.next())!==$$$cl1.getFinished()){
        if(addToStore$305(store$295,val$321)){
            (old_size$322=_size$297,_size$297=old_size$322.successor,old_size$322);
            var old_size$322;
        }
    }
    checkRehash$312();
    function add(element$323){
        if(addToStore$305(store$295,element$323)){
            (old_size$324=_size$297,_size$297=old_size$324.successor,old_size$324);
            var old_size$324;
            checkRehash$312();
            return true;
        }
        return false;
    }
    $$hashSet.add=add;
    add.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['add']};//add.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashSet.$$targs$$.Element,Element:$$hashSet.$$targs$$.Element}},Return:{t:$$$cl1.Boolean}};
    function addAll(elements$325){
        var ret$326=false;
        var setRet$326=function(ret$327){return ret$326=ret$327;};
        var it$328 = elements$325.iterator();
        var elem$329;while ((elem$329=it$328.next())!==$$$cl1.getFinished()){
            ret$326$$hashSet.add(elem$329);
        }
        checkRehash$312();
        return ret$326;
    }
    $$hashSet.addAll=addAll;
    addAll.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'elements',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['addAll']};//addAll.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:$$hashSet.$$targs$$.Element}},Element:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:$$hashSet.$$targs$$.Element}}}},Return:{t:$$$cl1.Boolean}};
    function remove(element$330){
        var index$331=storeIndex$300(element$330,store$295);
        var bucket$332=store$295.get(index$331);
        var setBucket$332=function(bucket$333){return bucket$332=bucket$333;};
        var prev$334=null;
        var setPrev$334=function(prev$335){return prev$334=prev$335;};
        var cell$336;
        while((cell$336=bucket$332)!==null){
            if(cell$336.car.equals(element$330)){
                var last$337;
                if((last$337=prev$334)!==null){
                    (last$337.cdr=cell$336.cdr);
                }else {
                    store$295.set(index$331,cell$336.cdr);
                }
                (old_size$338=_size$297,_size$297=old_size$338.predecessor,old_size$338);
                var old_size$338;
                return true;
            }
            prev$334=cell$336;
            bucket$332=cell$336.cdr;
        }
        return false;
    }
    $$hashSet.remove=remove;
    remove.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['remove']};//remove.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$hashSet.$$targs$$.Element,Element:$$hashSet.$$targs$$.Element}},Return:{t:$$$cl1.Boolean}};
    function clear(){
        var index$339=(0);
        var setIndex$339=function(index$340){return index$339=index$340;};
        while(index$339.compare(store$295.size).equals($$$cl1.getSmaller())){
            store$295.set((oldindex$341=index$339,index$339=oldindex$341.successor,oldindex$341),null);
            var oldindex$341;
        }
        _size$297=(0);
    }
    $$hashSet.clear=clear;
    clear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['clear']};//clear.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    $$$cl1.defineAttr($$hashSet,'size',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return _size$297;
    });
    function iterator(){
        function iter$342($$targs$$){
            var $$iter$342=new iter$342.$$;
            $$iter$342.$$targs$$=$$targs$$;
            $$$cl1.Iterator($$iter$342);
            var index$343=(0);
            $$$cl1.defineAttr($$iter$342,'index$343',function(){return index$343;},function(index$344){return index$343=index$344;});
            var bucket$345=store$295.get(index$343);
            $$$cl1.defineAttr($$iter$342,'bucket$345',function(){return bucket$345;},function(bucket$346){return bucket$345=bucket$346;});
            function next(){
                if((!$$$cl1.exists(bucket$345))){
                    while((index$343=index$343.successor).compare(store$295.size).equals($$$cl1.getSmaller())){
                        bucket$345=store$295.get(index$343);
                        if($$$cl1.exists(bucket$345)){
                            break;
                        }
                    }
                }
                var bucket$347;
                if((bucket$347=bucket$345)!==null){
                    var car$348=bucket$347.car;
                    ($$iter$342.bucket$345=bucket$347.cdr);
                    return car$348;
                }
                return $$$cl1.getFinished();
            }
            $$iter$342.next=next;
            next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:['Element',{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['iterator']['$o']['iter']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[$$hashSet.$$targs$$.Element,{t:$$$cl1.Finished}]}};
            return $$iter$342;
        }
        function $init$iter$342(){
            if (iter$342.$$===undefined){
                $$$cl1.initTypeProto(iter$342,'ceylon.collection::HashSet.iterator.iter',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return iter$342;
        }
        $init$iter$342();
        var iter$349=iter$342({Element:$$hashSet.$$targs$$.Element});
        var getIter$349=function(){
            return iter$349;
        }
        return getIter$349();
    }
    $$hashSet.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:$$hashSet.$$targs$$.Element}}};
    function count(selecting$350){
        var c$351=(0);
        var setC$351=function(c$352){return c$351=c$352;};
        var index$353=(0);
        var setIndex$353=function(index$354){return index$353=index$354;};
        while(index$353.compare(store$295.size).equals($$$cl1.getSmaller())){
            var bucket$355=store$295.get(index$353);
            var setBucket$355=function(bucket$356){return bucket$355=bucket$356;};
            var cell$357;
            while((cell$357=bucket$355)!==null){
                if(selecting$350(cell$357.car)){
                    (oldc$358=c$351,c$351=oldc$358.successor,oldc$358);
                    var oldc$358;
                }
                bucket$355=cell$357.cdr;
            }
            (oldindex$359=index$353,index$353=oldindex$359.successor,oldindex$359);
            var oldindex$359;
        }
        return c$351;
    }
    $$hashSet.count=count;
    count.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['count']};//count.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Integer}};
    $$$cl1.defineAttr($$hashSet,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var index$360=(0);
        var setIndex$360=function(index$361){return index$360=index$361;};
        var ret$362=$$$cl1.StringBuilder();
        ret$362.append($$$cl1.String("(",1));
        var first$363=true;
        var setFirst$363=function(first$364){return first$363=first$364;};
        while(index$360.compare(store$295.size).equals($$$cl1.getSmaller())){
            var bucket$365=store$295.get(index$360);
            var setBucket$365=function(bucket$366){return bucket$365=bucket$366;};
            var cell$367;
            while((cell$367=bucket$365)!==null){
                if((!first$363)){
                    ret$362.append($$$cl1.String(", ",2));
                }else {
                    first$363=false;
                }
                ret$362.append(cell$367.car.string);
                bucket$365=cell$367.cdr;
            }
            (oldindex$368=index$360,index$360=oldindex$368.successor,oldindex$368);
            var oldindex$368;
        }
        ret$362.append($$$cl1.String(")",1));
        return ret$362.string;
    });
    $$$cl1.defineAttr($$hashSet,'hash',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var index$369=(0);
        var setIndex$369=function(index$370){return index$369=index$370;};
        var hash$371=(17);
        var setHash$371=function(hash$372){return hash$371=hash$372;};
        while(index$369.compare(store$295.size).equals($$$cl1.getSmaller())){
            var bucket$373=store$295.get(index$369);
            var setBucket$373=function(bucket$374){return bucket$373=bucket$374;};
            var cell$375;
            while((cell$375=bucket$373)!==null){
                hash$371=hash$371.times((31)).plus(cell$375.car.hash);
                bucket$373=cell$375.cdr;
            }
            (oldindex$376=index$369,index$369=oldindex$376.successor,oldindex$376);
            var oldindex$376;
        }
        return hash$371;
    });
    function equals(that$377){
        var that$378;
        if($$$cl1.isOfType((that$378=that$377),{t:$$$cl1.Set,a:{Element:{t:$$$cl1.Object}}})&&$$hashSet.size.equals(that$378.size)){
            var index$379=(0);
            var setIndex$379=function(index$380){return index$379=index$380;};
            while(index$379.compare(store$295.size).equals($$$cl1.getSmaller())){
                var bucket$381=store$295.get(index$379);
                var setBucket$381=function(bucket$382){return bucket$381=bucket$382;};
                var cell$383;
                while((cell$383=bucket$381)!==null){
                    if((!that$378.contains(cell$383.car))){
                        return false;
                    }
                    bucket$381=cell$383.cdr;
                }
                (oldindex$384=index$379,index$379=oldindex$384.successor,oldindex$384);
                var oldindex$384;
            }
            return true;
        }
        return false;
    }
    $$hashSet.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$hashSet,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var clone$385=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
        (clone$385._size$297=_size$297);
        (clone$385.store$295=makeCellElementArray(store$295.size,{Element:$$hashSet.$$targs$$.Element}));
        var index$386=(0);
        var setIndex$386=function(index$387){return index$386=index$387;};
        while(index$386.compare(store$295.size).equals($$$cl1.getSmaller())){
            var bucket$388;
            if((bucket$388=store$295.get(index$386))!==null){
                clone$385.store$295.set(index$386,bucket$388.clone);
            }
            (oldindex$389=index$386,index$386=oldindex$389.successor,oldindex$389);
            var oldindex$389;
        }
        return clone$385;
    });
    function contains(element$390){
        var index$391=(0);
        var setIndex$391=function(index$392){return index$391=index$392;};
        while(index$391.compare(store$295.size).equals($$$cl1.getSmaller())){
            var bucket$393=store$295.get(index$391);
            var setBucket$393=function(bucket$394){return bucket$393=bucket$394;};
            var cell$395;
            while((cell$395=bucket$393)!==null){
                if(cell$395.car.equals(element$390)){
                    return true;
                }
                bucket$393=cell$395.cdr;
            }
            (oldindex$396=index$391,index$391=oldindex$396.successor,oldindex$396);
            var oldindex$396;
        }
        return false;
    }
    $$hashSet.contains=contains;
    contains.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['contains']};//contains.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function complement(set$397,$$$mptypes){
        var ret$398=HashSet(undefined,{Element:$$hashSet.$$targs$$.Element});
        var it$399 = $$hashSet.iterator();
        var elem$400;while ((elem$400=it$399.next())!==$$$cl1.getFinished()){
            if((!set$397.contains(elem$400))){
                ret$398.add(elem$400);
            }
        }
        return ret$398;
    }
    $$hashSet.complement=complement;
    complement.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:'Element'}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}}}],$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['complement']};//complement.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}},Element:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}}}},Return:{t:HashSet,a:{Element:$$hashSet.$$targs$$.Element}}};
    function exclusiveUnion(set$401,$$$mptypes){
        var ret$402=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        var it$403 = $$hashSet.iterator();
        var elem$404;while ((elem$404=it$403.next())!==$$$cl1.getFinished()){
            if((!set$401.contains(elem$404))){
                ret$402.add(elem$404);
            }
        }
        var it$405 = set$401.iterator();
        var elem$406;while ((elem$406=it$405.next())!==$$$cl1.getFinished()){
            if((!$$hashSet.contains(elem$406))){
                ret$402.add(elem$406);
            }
        }
        return ret$402;
    }
    $$hashSet.exclusiveUnion=exclusiveUnion;
    exclusiveUnion.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}}}],$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['exclusiveUnion']};//exclusiveUnion.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}},Element:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}}}},Return:{t:HashSet,a:{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}}}};
    function intersection(set$407,$$$mptypes){
        var ret$408=HashSet(undefined,{Element:{ t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        var it$409 = $$hashSet.iterator();
        var elem$410;while ((elem$410=it$409.next())!==$$$cl1.getFinished()){
            var elem$411;
            if(set$407.contains(elem$410)&&$$$cl1.isOfType((elem$411=elem$410),$$$mptypes.Other)){
                ret$408.add(elem$411);
            }
        }
        return ret$408;
    }
    $$hashSet.intersection=intersection;
    intersection.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'i', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}}}],$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['intersection']};//intersection.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}},Element:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}}}},Return:{t:HashSet,a:{Element:{ t:'i', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}}}};
    function union(set$412,$$$mptypes){
        var ret$413=HashSet(undefined,{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}});
        ret$413.addAll($$hashSet);
        ret$413.addAll(set$412);
        return ret$413;
    }
    $$hashSet.union=union;
    union.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:HashSet,a:{Element:{ t:'u', l:['Element','Other']}}},$ps:[{$nm:'set',$mt:'prm',$t:{t:$$$cl1.Set,a:{Element:'Other'}}}],$tp:{Other:{'satisfies':[{t:$$$cl1.Object}]}},$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']['$m']['union']};//union.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}},Element:{t:$$$cl1.Set,a:{Element:$$$mptypes.Other}}}},Return:{t:HashSet,a:{Element:{ t:'u', l:[$$hashSet.$$targs$$.Element,$$$mptypes.Other]}}}};
    return $$hashSet;
}
HashSet.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:MutableSet,a:{Element:'Element'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['HashSet']};
exports.HashSet=HashSet;
function $init$HashSet(){
    if (HashSet.$$===undefined){
        $$$cl1.initTypeProto(HashSet,'ceylon.collection::HashSet',$$$cl1.Basic,$init$MutableSet());
    }
    return HashSet;
}
exports.$init$HashSet=$init$HashSet;
$init$HashSet();
function LinkedList(values$414, $$targs$$,$$linkedList){
    $init$LinkedList();
    if ($$linkedList===undefined)$$linkedList=new LinkedList.$$;
    $$$cl1.set_type_args($$linkedList,$$targs$$);
    if(values$414===undefined){values$414=$$$cl1.getEmpty();}
    MutableList($$linkedList);
    var head$415=null;
    $$$cl1.defineAttr($$linkedList,'head$415',function(){return head$415;},function(head$416){return head$415=head$416;});
    var tail$417=null;
    $$$cl1.defineAttr($$linkedList,'tail$417',function(){return tail$417;},function(tail$418){return tail$417=tail$418;});
    var _size$419=(0);
    $$$cl1.defineAttr($$linkedList,'_size$419',function(){return _size$419;},function(_size$420){return _size$419=_size$420;});
    function _add$421(val$422){
        var newTail$423=Cell(val$422,null,{T:$$linkedList.$$targs$$.Element});
        var tail$424;
        if((tail$424=tail$417)!==null){
            (tail$424.cdr=newTail$423);
            ($$linkedList.tail$417=newTail$423);
        }else {
            tail$417=(head$415=newTail$423);
        }
        (old_size$425=_size$419,_size$419=old_size$425.successor,old_size$425);
        var old_size$425;
    };_add$421.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element'}],pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['_add']};//_add$421.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$linkedList.$$targs$$.Element,Element:$$linkedList.$$targs$$.Element}},Return:{t:$$$cl1.Anything}};
    var it$426 = values$414.iterator();
    var val$427;while ((val$427=it$426.next())!==$$$cl1.getFinished()){
        _add$421(val$427);
    }
    function set(index$428,val$429){
        if(index$428.compare(_size$419).equals($$$cl1.getSmaller())){
            var iter$430=head$415;
            var setIter$430=function(iter$431){return iter$430=iter$431;};
            var i$432=(0);
            var setI$432=function(i$433){return i$432=i$433;};
            var cell$434;
            while((cell$434=iter$430)!==null){
                if((oldi$435=i$432,i$432=oldi$435.successor,oldi$435).equals(index$428)){
                    (cell$434.car=val$429);
                    return ;
                }
                var oldi$435;
                iter$430=cell$434.cdr;
            }
        }else {
            var need$436=index$428.minus(_size$419);
            var setNeed$436=function(need$437){return need$436=need$437;};
            var newTail$438=Cell(val$429,null,{T:$$linkedList.$$targs$$.Element});
            var newHead$439=newTail$438;
            var setNewHead$439=function(newHead$440){return newHead$439=newHead$440;};
            while((oldneed$441=need$436,need$436=oldneed$441.predecessor,oldneed$441).compare((0)).equals($$$cl1.getLarger())){
                newHead$439=Cell(val$429,newHead$439,{T:$$linkedList.$$targs$$.Element});
            }
            var oldneed$441;
            var tail$442;
            if((tail$442=tail$417)!==null){
                (tail$442.cdr=newHead$439);
            }else {
                head$415=newHead$439;
            }
            tail$417=newTail$438;
            _size$419=index$428.plus((1));
        }
    }
    $$linkedList.set=set;
    set.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'val',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['set']};//set.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$linkedList.$$targs$$.Element,Element:$$linkedList.$$targs$$.Element}},Return:{t:$$$cl1.Anything}};
    function insert(index$443,val$444){
        if((index$443.compare(_size$419)!==$$$cl1.getSmaller())){
            $$linkedList.set(index$443,val$444);
        }else {
            var newCell$445=Cell(val$444,null,{T:$$linkedList.$$targs$$.Element});
            if(index$443.equals((0))){
                (newCell$445.cdr=head$415);
                head$415=newCell$445;
            }else {
                var iter$446=head$415;
                var setIter$446=function(iter$447){return iter$446=iter$447;};
                var prev$448=null;
                var setPrev$448=function(prev$449){return prev$448=prev$449;};
                var i$450=(0);
                var setI$450=function(i$451){return i$450=i$451;};
                var cell$452;
                while((cell$452=iter$446)!==null){
                    if((oldi$453=i$450,i$450=oldi$453.successor,oldi$453).equals(index$443)){
                        var prev2$454;
                        if((prev2$454=prev$448)!==null){
                            (prev2$454.cdr=newCell$445);
                            (newCell$445.cdr=cell$452);
                        }else {}
                        break;
                    }
                    var oldi$453;
                    prev$448=iter$446;
                    iter$446=cell$452.cdr;
                }
            }
            (old_size$455=_size$419,_size$419=old_size$455.successor,old_size$455);
            var old_size$455;
        }
    }
    $$linkedList.insert=insert;
    insert.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'val',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['insert']};//insert.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$linkedList.$$targs$$.Element,Element:$$linkedList.$$targs$$.Element}},Return:{t:$$$cl1.Anything}};
    function add(val$456){
        _add$421(val$456);
    }
    $$linkedList.add=add;
    add.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['add']};//add.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$linkedList.$$targs$$.Element,Element:$$linkedList.$$targs$$.Element}},Return:{t:$$$cl1.Anything}};
    function addAll(values$457){
        var it$458 = values$457.iterator();
        var val$459;while ((val$459=it$458.next())!==$$$cl1.getFinished()){
            $$linkedList.add(val$459);
        }
    }
    $$linkedList.addAll=addAll;
    addAll.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'values',$mt:'prm',$t:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['addAll']};//addAll.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:$$linkedList.$$targs$$.Element}},Element:{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:$$linkedList.$$targs$$.Element}}}},Return:{t:$$$cl1.Anything}};
    function remove(index$460){
        if(index$460.compare(_size$419).equals($$$cl1.getSmaller())){
            var iter$461=head$415;
            var setIter$461=function(iter$462){return iter$461=iter$462;};
            var prev$463=null;
            var setPrev$463=function(prev$464){return prev$463=prev$464;};
            var i$465=(0);
            var setI$465=function(i$466){return i$465=i$466;};
            var cell$467;
            while((cell$467=iter$461)!==null){
                if((oldi$468=i$465,i$465=oldi$468.successor,oldi$468).equals(index$460)){
                    var prev2$469;
                    if((prev2$469=prev$463)!==null){
                        (prev2$469.cdr=cell$467.cdr);
                    }else {
                        head$415=cell$467.cdr;
                    }
                    if((!$$$cl1.exists(cell$467.cdr))){
                        tail$417=prev$463;
                    }
                    (old_size$470=_size$419,_size$419=old_size$470.predecessor,old_size$470);
                    var old_size$470;
                    return ;
                }
                var oldi$468;
                prev$463=iter$461;
                iter$461=cell$467.cdr;
            }
        }else {
            throw $$$cl1.Exception();
        }
    }
    $$linkedList.remove=remove;
    remove.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['remove']};//remove.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Anything}};
    function removeElement(val$471){
        var iter$472=head$415;
        var setIter$472=function(iter$473){return iter$472=iter$473;};
        var prev$474=null;
        var setPrev$474=function(prev$475){return prev$474=prev$475;};
        var cell$476;
        while((cell$476=iter$472)!==null){
            if(eq(cell$476.car,val$471)){
                var prev2$477;
                if((prev2$477=prev$474)!==null){
                    (prev2$477.cdr=cell$476.cdr);
                }else {
                    head$415=cell$476.cdr;
                }
                if((!$$$cl1.exists(cell$476.cdr))){
                    tail$417=prev$474;
                }
                (old_size$478=_size$419,_size$419=old_size$478.predecessor,old_size$478);
                var old_size$478;
                iter$472=cell$476.cdr;
            }else {
                prev$474=iter$472;
                iter$472=cell$476.cdr;
            }
        }
    }
    $$linkedList.removeElement=removeElement;
    removeElement.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'val',$mt:'prm',$t:'Element'}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['removeElement']};//removeElement.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$linkedList.$$targs$$.Element,Element:$$linkedList.$$targs$$.Element}},Return:{t:$$$cl1.Anything}};
    function clear(){
        _size$419=(0);
        head$415=(tail$417=null);
    }
    $$linkedList.clear=clear;
    clear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['clear']};//clear.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}};
    function get(index$479){
        var iter$480=head$415;
        var setIter$480=function(iter$481){return iter$480=iter$481;};
        var i$482=(0);
        var setI$482=function(i$483){return i$482=i$483;};
        var cell$484;
        while((cell$484=iter$480)!==null){
            if((oldi$485=i$482,i$482=oldi$485.successor,oldi$485).equals(index$479)){
                return cell$484.car;
            }
            var oldi$485;
            iter$480=cell$484.cdr;
        }
        return null;
    }
    $$linkedList.get=get;
    get.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},'Element']},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['get']};//get.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{ t:'u', l:[{t:$$$cl1.Null},$$linkedList.$$targs$$.Element]}};
    function span(from$486,to$487){
        var ret$488=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        var iter$489=head$415;
        var setIter$489=function(iter$490){return iter$489=iter$490;};
        var i$491=(0);
        var setI$491=function(i$492){return i$491=i$492;};
        var cell$493;
        while((cell$493=iter$489)!==null){
            if(i$491.compare(to$487).equals($$$cl1.getLarger())){
                break;
            }
            if((i$491.compare(from$486)!==$$$cl1.getSmaller())){
                ret$488.add(cell$493.car);
            }
            (oldi$494=i$491,i$491=oldi$494.successor,oldi$494);
            var oldi$494;
            iter$489=cell$493.cdr;
        }
        return ret$488;
    }
    $$linkedList.span=span;
    span.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['span']};//span.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.List,a:{Element:$$linkedList.$$targs$$.Element}}};
    function spanFrom(from$495){
        var ret$496=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        var iter$497=head$415;
        var setIter$497=function(iter$498){return iter$497=iter$498;};
        var i$499=(0);
        var setI$499=function(i$500){return i$499=i$500;};
        var cell$501;
        while((cell$501=iter$497)!==null){
            if((i$499.compare(from$495)!==$$$cl1.getSmaller())){
                ret$496.add(cell$501.car);
            }
            (oldi$502=i$499,i$499=oldi$502.successor,oldi$502);
            var oldi$502;
            iter$497=cell$501.cdr;
        }
        return ret$496;
    }
    $$linkedList.spanFrom=spanFrom;
    spanFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['spanFrom']};//spanFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.List,a:{Element:$$linkedList.$$targs$$.Element}}};
    function spanTo(to$503){
        var ret$504=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        var iter$505=head$415;
        var setIter$505=function(iter$506){return iter$505=iter$506;};
        var i$507=(0);
        var setI$507=function(i$508){return i$507=i$508;};
        var cell$509;
        while((cell$509=iter$505)!==null){
            if(i$507.compare(to$503).equals($$$cl1.getLarger())){
                break;
            }
            ret$504.add(cell$509.car);
            (oldi$510=i$507,i$507=oldi$510.successor,oldi$510);
            var oldi$510;
            iter$505=cell$509.cdr;
        }
        return ret$504;
    }
    $$linkedList.spanTo=spanTo;
    spanTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'to',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['spanTo']};//spanTo.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.List,a:{Element:$$linkedList.$$targs$$.Element}}};
    function segment(from$511,length$512){
        var ret$513=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        if(length$512.equals((0))){
            return ret$513;
        }
        var iter$514=head$415;
        var setIter$514=function(iter$515){return iter$514=iter$515;};
        var i$516=(0);
        var setI$516=function(i$517){return i$516=i$517;};
        var cell$518;
        while((cell$518=iter$514)!==null){
            if((i$516.compare(from$511)!==$$$cl1.getSmaller())){
                if((ret$513._size$419.compare(length$512)!==$$$cl1.getSmaller())){
                    break;
                }
                ret$513.add(cell$518.car);
            }
            (oldi$519=i$516,i$516=oldi$519.successor,oldi$519);
            var oldi$519;
            iter$514=cell$518.cdr;
        }
        return ret$513;
    }
    $$linkedList.segment=segment;
    segment.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:'Element'}},$ps:[{$nm:'from',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'length',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['segment']};//segment.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.List,a:{Element:$$linkedList.$$targs$$.Element}}};
    function defines(index$520){
        return ((index$520.compare((0))!==$$$cl1.getSmaller())&&index$520.compare(_size$419).equals($$$cl1.getSmaller()));
    }
    $$linkedList.defines=defines;
    defines.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'index',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['defines']};//defines.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}};
    function contains(element$521){
        var iter$522=head$415;
        var setIter$522=function(iter$523){return iter$522=iter$523;};
        var cell$524;
        while((cell$524=iter$522)!==null){
            var elem$525;
            if($$$cl1.isOfType((elem$525=cell$524.car),{t:$$$cl1.Object})){
                if(elem$525.equals(element$521)){
                    return true;
                }
            }
            iter$522=cell$524.cdr;
        }
        return false;
    }
    $$linkedList.contains=contains;
    contains.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'element',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['contains']};//contains.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$linkedList,'size',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return _size$419;
    });
    function count(selecting$526){
        var iter$527=head$415;
        var setIter$527=function(iter$528){return iter$527=iter$528;};
        var c$529=(0);
        var setC$529=function(c$530){return c$529=c$530;};
        var cell$531;
        while((cell$531=iter$527)!==null){
            if(selecting$526(cell$531.car)){
                (oldc$532=c$529,c$529=oldc$532.successor,oldc$532);
                var oldc$532;
            }
            iter$527=cell$531.cdr;
        }
        return c$529;
    }
    $$linkedList.count=count;
    count.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'selecting',$mt:'prm',$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['count']};//count.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Integer}};
    $$$cl1.defineAttr($$linkedList,'lastIndex',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return ((!$$linkedList.empty)?_size$419.minus((1)):null);
    });
    function iterator(){
        return CellIterator(head$415,{T:$$linkedList.$$targs$$.Element});
    }
    $$linkedList.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:'Element'}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:$$linkedList.$$targs$$.Element}}};
    $$$cl1.defineAttr($$linkedList,'clone',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$533=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        (ret$533.head$415=head$415);
        (ret$533.tail$417=tail$417);
        (ret$533._size$419=$$linkedList.size);
        return ret$533;
    });
    $$$cl1.defineAttr($$linkedList,'keys',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return (opt$534=($$linkedList.empty?$$$cl1.getEmpty():null),opt$534!==null?opt$534:$$$cl1.Range((0),_size$419,{Element:{t:$$$cl1.Integer}}));
        var opt$534;
    });
    $$$cl1.defineAttr($$linkedList,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var b$535=$$$cl1.StringBuilder();
        b$535.append($$$cl1.String("[",1));
        var iter$536=head$415;
        var setIter$536=function(iter$537){return iter$536=iter$537;};
        var cell$538;
        while((cell$538=iter$536)!==null){
            var car$539;
            if($$$cl1.isOfType((car$539=cell$538.car),{t:$$$cl1.Object})){
                b$535.append(car$539.string);
            }else {
                b$535.append($$$cl1.String("null",4));
            }
            iter$536=cell$538.cdr;
            if($$$cl1.exists(iter$536)){
                b$535.append($$$cl1.String(", ",2));
            }
        }
        b$535.append($$$cl1.String("]",1));
        return b$535.string;
    });
    $$$cl1.defineAttr($$linkedList,'hash',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var h$540=(17);
        var setH$540=function(h$541){return h$540=h$541;};
        var iter$542=head$415;
        var setIter$542=function(iter$543){return iter$542=iter$543;};
        var cell$544;
        while((cell$544=iter$542)!==null){
            var car$545;
            if($$$cl1.isOfType((car$545=cell$544.car),{t:$$$cl1.Object})){
                h$540=h$540.times((31)).plus(car$545.hash);
            }else {
                h$540=h$540.times((31));
            }
            iter$542=cell$544.cdr;
        }
        return h$540;
    });
    function equals(that$546){
        var that$547;
        if($$$cl1.isOfType((that$547=that$546),{t:$$$cl1.List,a:{Element:{t:$$$cl1.Object}}})&&_size$419.equals(that$547.size)){
            var iter$548=head$415;
            var setIter$548=function(iter$549){return iter$548=iter$549;};
            var iter2$550=that$547.iterator();
            var setIter2$550=function(iter2$551){return iter2$550=iter2$551;};
            var cell$552;
            while((cell$552=iter$548)!==null){
                var thatElement$553;
                if(!$$$cl1.isOfType((thatElement$553=iter2$550.next()),{t:$$$cl1.Finished})){
                    if((!eq(cell$552.car,thatElement$553))){
                        return false;
                    }
                    iter$548=cell$552.cdr;
                }else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    $$linkedList.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$linkedList,'reversed',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$554=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        var iter$555=head$415;
        var setIter$555=function(iter$556){return iter$555=iter$556;};
        var cell$557;
        while((cell$557=iter$555)!==null){
            (ret$554.head$415=Cell(cell$557.car,ret$554.head$415,{T:$$linkedList.$$targs$$.Element}));
            if((!$$$cl1.exists(ret$554.tail$417))){
                (ret$554.tail$417=ret$554.head$415);
            }
            iter$555=cell$557.cdr;
        }
        (ret$554._size$419=_size$419);
        return ret$554;
    });
    $$$cl1.defineAttr($$linkedList,'rest',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var ret$558=LinkedList(undefined,{Element:$$linkedList.$$targs$$.Element});
        var iter$559=(opt$560=head$415,opt$560!==null?opt$560.cdr:null);
        var setIter$559=function(iter$561){return iter$559=iter$561;};
        var opt$560;
        var cell$562;
        while((cell$562=iter$559)!==null){
            ret$558.add(cell$562.car);
            iter$559=cell$562.cdr;
        }
        return ret$558;
    });
    return $$linkedList;
}
LinkedList.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$tp:{Element:{}},satisfies:[{t:MutableList,a:{Element:'Element'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['LinkedList']};
exports.LinkedList=LinkedList;
function $init$LinkedList(){
    if (LinkedList.$$===undefined){
        $$$cl1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',$$$cl1.Basic,$init$MutableList());
    }
    return LinkedList;
}
exports.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
function makeCellEntryArray(size$563,$$$mptypes){
    return $$$cl1.arrayOfSize(size$563,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}});
};makeCellEntryArray.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:'Key',Item:'Item'}}}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer}}],$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['makeCellEntryArray']};//makeCellEntryArray.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:{t:$$$cl1.Entry,a:{Key:$$$mptypes.Key,Item:$$$mptypes.Item}}}}]}}}};
function makeCellElementArray(size$564,$$$mptypes){
    return $$$cl1.arrayOfSize(size$564,null,{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}});
};makeCellElementArray.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:'Element'}}]}}},$ps:[{$nm:'size',$mt:'prm',$t:{t:$$$cl1.Integer}}],$tp:{Element:{}},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['makeCellElementArray']};//makeCellElementArray.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Array,a:{Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Cell,a:{T:$$$mptypes.Element}}]}}}};
function MutableList($$mutableList){
    $$$cl1.List($$mutableList);
}
MutableList.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{}},satisfies:[{t:$$$cl1.List,a:{Element:'Element'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['MutableList']};
exports.MutableList=MutableList;
function $init$MutableList(){
    if (MutableList.$$===undefined){
        $$$cl1.initTypeProto(MutableList,'ceylon.collection::MutableList',$$$cl1.List);
    }
    return MutableList;
}
exports.$init$MutableList=$init$MutableList;
$init$MutableList();
function MutableMap($$mutableMap){
    $$$cl1.Map($$mutableMap);
}
MutableMap.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Key:{'satisfies':[{t:$$$cl1.Object}]},Item:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Map,a:{Key:'Key',Item:'Item'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['MutableMap']};
exports.MutableMap=MutableMap;
function $init$MutableMap(){
    if (MutableMap.$$===undefined){
        $$$cl1.initTypeProto(MutableMap,'ceylon.collection::MutableMap',$$$cl1.Map);
    }
    return MutableMap;
}
exports.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function MutableSet($$mutableSet){
    $$$cl1.Set($$mutableSet);
}
MutableSet.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Object}]}},satisfies:[{t:$$$cl1.Set,a:{Element:'Element'}}],$an:function(){return[$$$cl1.by([$$$cl1.String("Stéphane Épardaud",17)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.collection',d:$$METAMODEL$$['ceylon.collection']['MutableSet']};
exports.MutableSet=MutableSet;
function $init$MutableSet(){
    if (MutableSet.$$===undefined){
        $$$cl1.initTypeProto(MutableSet,'ceylon.collection::MutableSet',$$$cl1.Set);
    }
    return MutableSet;
}
exports.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
