(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.test","$mod-version":"0.6","ceylon.test":{"assertTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is false"]},"$nm":"assertTrue"},"assertNotNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is null"]},"$nm":"assertNotNull"},"nullSafeEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"actual"}]],"$mt":"mthd","$an":{"doc":["A compare function for `assertEquals()`"]},"$nm":"nullSafeEquals"},"error":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is in error if it propgates any exception which is not an [[AssertException]]"]},"$nm":"error"},"TestResult":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$pt":"v","$nm":"runner"}],"$mt":"cls","$an":{"shared":[],"doc":["Holds the results of running the tests held by the given `runner`."]},"$c":{"TestResultListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$nm":"TestResultListener"}},"$at":{"errorCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"errorCounter"},"runCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The numer of tests which were started."]},"$nm":"runCount"},"successCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"successCounter"},"runCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"runCounter"},"isFailure":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether any of the tests didn't succeed.'"]},"$nm":"isFailure"},"failureCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[failed|failure]]."]},"$nm":"failureCount"},"failureCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"failureCounter"},"errorCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[errored|error]]."]},"$nm":"errorCount"},"isSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether all the tests succeeded."]},"$nm":"isSuccess"},"successCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[succeeded|success]]."]},"$nm":"successCount"}},"$nm":"TestResult"},"TestRunner":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"doc":["Capable of running tests, notifying [[TestListener]]s about each test"]},"$m":{"runTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$nm":"runTest"},"addTestListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$pt":"v","$nm":"testListener"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test listener to be notified about the execution of tests"]},"$nm":"addTestListener"},"run":{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"mthd","$an":{"shared":[],"doc":["Runs the [[tests]]"]},"$nm":"run"},"addTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$pt":"v","$nm":"callable"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test to be run"]},"$nm":"addTest"},"fire":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$pt":"v","$nm":"testListener"}]],"$mt":"prm","$pt":"f","$nm":"fireCallable"}]],"$mt":"mthd","$nm":"fire"}},"$at":{"tests":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"doc":["The tests held by this instance"]},"$nm":"tests"},"testListenerList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testListenerList"},"testList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testList"}},"$nm":"TestRunner"},"PrintingTestListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$an":{"shared":[],"doc":["A [[TestListener]] which prints information about test execution to the \nstandard output."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$pt":"v","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$pt":"v","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$pt":"v","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStarted"},"banner":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"text"}]],"$mt":"mthd","$an":{"doc":["Generates a banner with the given text, like this:\n\n```\n============ banner ============\n```\n"]},"$nm":"banner"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$at":{"errAndFail":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"errAndFail"}},"$nm":"PrintingTestListener"},"running":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is running if it has been started, but has not yet completed execution."]},"$nm":"running"},"TestState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.test","$nm":"undefined"},{"$pk":"ceylon.test","$nm":"running"},{"$pk":"ceylon.test","$nm":"success"},{"$pk":"ceylon.test","$nm":"failure"},{"$pk":"ceylon.test","$nm":"error"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"string"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Enumerates the possible states of a [[TestUnit]]"]},"$nm":"TestState"},"$pkg-shared":"1","failure":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it propgates an [[AssertException]]"]},"$nm":"failure"},"TestListener":{"$mt":"ifc","$an":{"shared":[],"doc":["Contract for things needing to be informed about the execution of tests \nby a [[TestRunner]]."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$pt":"v","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$pt":"v","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$pt":"v","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunStarted"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$pt":"v","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testStarted"}},"$nm":"TestListener"},"fail":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test."]},"$nm":"fail"},"assertEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are not equal according to the given `compare` function."]},"$nm":"assertEquals"},"nullSafeString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"obj"}]],"$mt":"mthd","$an":{"doc":["Like `Object.string`, but handles null."]},"$nm":"nullSafeString"},"undefined":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test which has not yet started execution."]},"$nm":"undefined"},"assertFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is true"]},"$nm":"assertFalse"},"AssertComparisonException":{"super":{"$pk":"ceylon.test","$nm":"AssertException"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$pt":"v","$nm":"expectedValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$pt":"v","$nm":"actualValue"}],"$mt":"cls","$an":{"shared":[],"doc":["Subclass of `AssertException` for assertion failures dues to two things \n    not being equal"]},"$at":{"expectedValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"expectedValue"},"actualValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"actualValue"}},"$nm":"AssertComparisonException"},"suite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"suiteName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$pt":"v","$nm":"tests"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Configure a [[TestRunner]] with the given tests and run it"]},"$nm":"suite"},"TestUnit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$pt":"v","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$hdn":"1","$mt":"prm","$pt":"v","$nm":"callable"}],"$mt":"cls","$an":{"shared":[],"doc":["A named piece of test code, and it's state."]},"$at":{"callable":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"attr","$an":{"shared":[],"doc":["The test code."]},"$nm":"callable"},"elapsedTimeInMilis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The time it took to execute this unit."],"variable":[]},"$nm":"elapsedTimeInMilis"},"exception":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The exception thrown by this unit, if any."],"variable":[]},"$nm":"exception"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The name of this test."]},"$nm":"name"},"state":{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The [[state|TestState]] of this unit."],"variable":[]},"$nm":"state"}},"$nm":"TestUnit"},"assertNotEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are equal according to the given `compare` function."]},"$nm":"assertNotEquals"},"success":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it complete normally, (that is, does not throw an exception)."]},"$nm":"success"},"assertNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$pt":"v","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is not null"]},"$nm":"assertNull"},"AssertException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when assertion failures"]},"$nm":"AssertException"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
function AssertException(message$2, $$assertException){
    $init$AssertException();
    if ($$assertException===undefined)$$assertException=new AssertException.$$;
    $$$cl1.Exception(message$2,null,$$assertException);
    return $$assertException;
}
AssertException.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['AssertException']};
exports.AssertException=AssertException;
function $init$AssertException(){
    if (AssertException.$$===undefined){
        $$$cl1.initTypeProto(AssertException,'ceylon.test::AssertException',$$$cl1.Exception);
    }
    return AssertException;
}
exports.$init$AssertException=$init$AssertException;
$init$AssertException();
function AssertComparisonException(message$3, expectedValue$4, actualValue$5, $$assertComparisonException){
    $init$AssertComparisonException();
    if ($$assertComparisonException===undefined)$$assertComparisonException=new AssertComparisonException.$$;
    AssertException(message$3,$$assertComparisonException);
    var expectedValue=expectedValue$4;
    $$$cl1.defineAttr($$assertComparisonException,'expectedValue',function(){return expectedValue;});
    var actualValue=actualValue$5;
    $$$cl1.defineAttr($$assertComparisonException,'actualValue',function(){return actualValue;});
    return $$assertComparisonException;
}
AssertComparisonException.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:AssertException},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['AssertComparisonException']};
exports.AssertComparisonException=AssertComparisonException;
function $init$AssertComparisonException(){
    if (AssertComparisonException.$$===undefined){
        $$$cl1.initTypeProto(AssertComparisonException,'ceylon.test::AssertComparisonException',AssertException);
    }
    return AssertComparisonException;
}
exports.$init$AssertComparisonException=$init$AssertComparisonException;
$init$AssertComparisonException();
function fail(message$6){
    if(message$6===undefined){message$6=$$$cl1.String("Failed",6);}
    throw AssertException(message$6);
}
exports.fail=fail;
fail.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['fail']};//fail.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function assertTrue(condition$7,message$8){
    if(message$8===undefined){message$8=$$$cl1.String(" expected ",10).plus(condition$7.string);}
    if((!condition$7)){
        throw AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$8.string]).string);
    }
}
exports.assertTrue=assertTrue;
assertTrue.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertTrue']};//assertTrue.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function assertFalse(condition$9,message$10){
    if(message$10===undefined){message$10=$$$cl1.String(" expected ",10).plus(condition$9.string);}
    if(condition$9){
        throw AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$10.string]).string);
    }
}
exports.assertFalse=assertFalse;
assertFalse.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertFalse']};//assertFalse.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function assertNull(got$11,message$12){
    if(message$12===undefined){message$12=$$$cl1.String("",0);}
    var got$13;
    if((got$13=got$11)!==null){
        throw AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("accertion failed: expected null but got ",40),got$13.string]).string);
    }
}
exports.assertNull=assertNull;
assertNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertNull']};//assertNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function assertNotNull(got$14,message$15){
    if(message$15===undefined){message$15=$$$cl1.String("",0);}
    if((!$$$cl1.exists(got$14))){
        throw AssertException($$$cl1.String("accertion failed: expected not null but got null",48));
    }
}
exports.assertNotNull=assertNotNull;
assertNotNull.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertNotNull']};//assertNotNull.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.Anything}};
function assertEquals(expected$16,actual$17,message$18,compare$19){
    if(message$18===undefined){message$18=null;}
    if(compare$19===undefined){compare$19=function (expected$20,actual$21){
        return nullSafeEquals(expected$20,actual$21);
    };}
    if((!compare$19(expected$16,actual$17))){
        var expectedText$22=nullSafeString(expected$16);
        var actualText$23=nullSafeString(actual$17);
        var message$24;
        if((message$24=message$18)!==null){
            throw AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$22.string,$$$cl1.String(" != ",4),actualText$23.string,$$$cl1.String(": \"",3),message$24.string,$$$cl1.String("\"",1)]).string,expectedText$22,actualText$23);
        }else {
            throw AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$22.string,$$$cl1.String(" != ",4),actualText$23.string]).string,expectedText$22,actualText$23);
        }
    }
}
exports.assertEquals=assertEquals;
assertEquals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}},{$nm:'compare',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertEquals']};//assertEquals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Anything}};
function assertNotEquals(expected$25,actual$26,message$27,compare$28){
    if(message$27===undefined){message$27=null;}
    if(compare$28===undefined){compare$28=function (expected$29,actual$30){
        return nullSafeEquals(expected$29,actual$30);
    };}
    if(compare$28(expected$25,actual$26)){
        var expectedText$31=nullSafeString(expected$25);
        var actualText$32=nullSafeString(actual$26);
        var message$33;
        if((message$33=message$27)!==null){
            throw AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$31.string,$$$cl1.String(" == ",4),actualText$32.string,$$$cl1.String(": \"",3),message$33.string,$$$cl1.String("\"",1)]).string,expectedText$31,actualText$32);
        }else {
            throw AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$31.string,$$$cl1.String(" == ",4),actualText$32.string]).string,expectedText$31,actualText$32);
        }
    }
}
exports.assertNotEquals=assertNotEquals;
assertNotEquals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]}},{$nm:'compare',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['assertNotEquals']};//assertNotEquals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Anything}};
function nullSafeEquals(expected$34,actual$35){
    var expected$36;
    if((expected$36=expected$34)!==null){
        var actual$37;
        if((actual$37=actual$35)!==null){
            return expected$36.equals(actual$37);
        }
    }
    return $$$cl1.exists(actual$35).equals($$$cl1.exists(expected$34));
};nullSafeEquals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['nullSafeEquals']};//nullSafeEquals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}}},Return:{t:$$$cl1.Boolean}};
function nullSafeString(obj$38){
    var obj$39;
    if((obj$39=obj$38)!==null){
        return obj$39.string;
    }
    return $$$cl1.String("null",4);
};nullSafeString.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['nullSafeString']};//nullSafeString.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]}}},Return:{t:$$$cl1.String}};
function suite(suiteName$40,tests$41){
    if(tests$41===undefined){tests$41=$$$cl1.getEmpty();}
    var runner$42=TestRunner();
    runner$42.addTestListener(PrintingTestListener());
    var it$43 = tests$41.iterator();
    var item$44;while ((item$44=it$43.next())!==$$$cl1.getFinished()){
        var name$45=item$44.key;
        var test$46=item$44.item;
        runner$42.addTest(name$45,$$$cl1.$JsCallable(test$46,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
    }
    runner$42.run();
}
exports.suite=suite;
suite.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'suiteName',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'tests',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['suite']};//suite.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}},Element:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}}}},Return:{t:$$$cl1.Anything}};
function TestListener($$testListener){
    function testRunStarted(runner$47){
    }
    $$testListener.testRunStarted=testRunStarted;
    testRunStarted.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestListener']['$m']['testRunStarted']};//testRunStarted.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestRunner},Element:{t:TestRunner}}},Return:{t:$$$cl1.Anything}};
    function testRunFinished(runner$48,result$49){
    }
    $$testListener.testRunFinished=testRunFinished;
    testRunFinished.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner}},{$nm:'result',$mt:'prm',$t:{t:TestResult}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestListener']['$m']['testRunFinished']};//testRunFinished.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestResult},Element:{t:TestResult}}},Return:{t:$$$cl1.Anything}};
    function testStarted(test$50){
    }
    $$testListener.testStarted=testStarted;
    testStarted.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestListener']['$m']['testStarted']};//testStarted.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
    function testFinished(test$51){
    }
    $$testListener.testFinished=testFinished;
    testFinished.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestListener']['$m']['testFinished']};//testFinished.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
}
TestListener.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestListener']};
exports.TestListener=TestListener;
function $init$TestListener(){
    if (TestListener.$$===undefined){
        $$$cl1.initTypeProto(TestListener,'ceylon.test::TestListener');
    }
    return TestListener;
}
exports.$init$TestListener=$init$TestListener;
$init$TestListener();
function PrintingTestListener($$printingTestListener){
    $init$PrintingTestListener();
    if ($$printingTestListener===undefined)$$printingTestListener=new PrintingTestListener.$$;
    TestListener($$printingTestListener);
    var errAndFail$52=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$$cl1.defineAttr($$printingTestListener,'errAndFail$52',function(){return errAndFail$52;},function(errAndFail$53){return errAndFail$52=errAndFail$53;});
    function testRunStarted(runner$54){
        $$$cl1.print(banner$55($$$cl1.String("TESTS STARTED",13)));
    }
    $$printingTestListener.testRunStarted=testRunStarted;
    testRunStarted.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']['$m']['testRunStarted']};//testRunStarted.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestRunner},Element:{t:TestRunner}}},Return:{t:$$$cl1.Anything}};
    function testRunFinished(runner$56,result$57){
        if(result$57.runCount.equals((0))){
            $$$cl1.print(banner$55($$$cl1.String("NO TESTS",8)));
            $$$cl1.print($$$cl1.String("There were no tests!",20));
        }else {
            $$$cl1.print(banner$55($$$cl1.String("TESTS RESULT",12)));
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("run:     ",9),result$57.runCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("success: ",9),result$57.successCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("failure: ",9),result$57.failureCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("error:   ",9),result$57.errorCount.string]).string);
            if(errAndFail$52.size.compare((0)).equals($$$cl1.getLarger())){
                $$$cl1.print($$$cl1.String("errors & failures:",18));
                var it$58 = errAndFail$52.sequence.iterator();
                var errorOrFailure$59;while ((errorOrFailure$59=it$58.next())!==$$$cl1.getFinished()){
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([errorOrFailure$59.state.string,$$$cl1.String(": ",2),errorOrFailure$59.name.string]).string);
                    var ex$60;
                    if((ex$60=errorOrFailure$59.exception)!==null){
                        ex$60.printStackTrace();
                    }
                }
            }
            if(result$57.isSuccess){
                $$$cl1.print(banner$55($$$cl1.String("TESTS SUCCESS",13)));
            }else {
                $$$cl1.print(banner$55($$$cl1.String("TESTS FAILED",12)));
            }
        }
        errAndFail$52=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    }
    $$printingTestListener.testRunFinished=testRunFinished;
    testRunFinished.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner}},{$nm:'result',$mt:'prm',$t:{t:TestResult}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']['$m']['testRunFinished']};//testRunFinished.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestResult},Element:{t:TestResult}}},Return:{t:$$$cl1.Anything}};
    function testStarted(test$61){
        $$$cl1.print(test$61.name);
    }
    $$printingTestListener.testStarted=testStarted;
    testStarted.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']['$m']['testStarted']};//testStarted.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
    function testFinished(test$62){
        
        var case$63=test$62.state;
        if (case$63===getFailure() || case$63===getError()) {
            errAndFail$52.append(test$62);
        }else {}
    }
    $$printingTestListener.testFinished=testFinished;
    testFinished.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']['$m']['testFinished']};//testFinished.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
    function banner$55(text$64){
        var ch$65=$$$cl1.Character(61);
        var sb$66=$$$cl1.StringBuilder();
        var totalWith$67=(60);
        var bannerWidth$68=totalWith$67.minus(text$64.size).minus((2));
        var it$69 = $$$cl1.Range((0),bannerWidth$68.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
        var ii$70;while ((ii$70=it$69.next())!==$$$cl1.getFinished()){
            sb$66.appendCharacter(ch$65);
        }
        if(bannerWidth$68.remainder((2)).equals((1))){
            sb$66.appendCharacter(ch$65);
        }
        sb$66.append($$$cl1.String(" ",1)).append(text$64).append($$$cl1.String(" ",1));
        var it$71 = $$$cl1.Range((0),bannerWidth$68.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
        var ii$72;while ((ii$72=it$71.next())!==$$$cl1.getFinished()){
            sb$66.appendCharacter(ch$65);
        }
        return sb$66.string;
    };banner$55.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String}}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']['$m']['banner']};//banner$55.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}};
    return $$printingTestListener;
}
PrintingTestListener.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TestListener}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['PrintingTestListener']};
exports.PrintingTestListener=PrintingTestListener;
function $init$PrintingTestListener(){
    if (PrintingTestListener.$$===undefined){
        $$$cl1.initTypeProto(PrintingTestListener,'ceylon.test::PrintingTestListener',$$$cl1.Basic,$init$TestListener());
    }
    return PrintingTestListener;
}
exports.$init$PrintingTestListener=$init$PrintingTestListener;
$init$PrintingTestListener();
function TestResult(runner$73, $$testResult){
    $init$TestResult();
    if ($$testResult===undefined)$$testResult=new TestResult.$$;
    var runCounter$74=(0);
    $$$cl1.defineAttr($$testResult,'runCounter$74',function(){return runCounter$74;},function(runCounter$75){return runCounter$74=runCounter$75;});
    var successCounter$76=(0);
    $$$cl1.defineAttr($$testResult,'successCounter$76',function(){return successCounter$76;},function(successCounter$77){return successCounter$76=successCounter$77;});
    var failureCounter$78=(0);
    $$$cl1.defineAttr($$testResult,'failureCounter$78',function(){return failureCounter$78;},function(failureCounter$79){return failureCounter$78=failureCounter$79;});
    var errorCounter$80=(0);
    $$$cl1.defineAttr($$testResult,'errorCounter$80',function(){return errorCounter$80;},function(errorCounter$81){return errorCounter$80=errorCounter$81;});
    $$$cl1.defineAttr($$testResult,'isSuccess',function()/*anotaciones:ceylon.language::Shared,*/{
        return runCounter$74.equals(successCounter$76);
    });
    $$$cl1.defineAttr($$testResult,'isFailure',function()/*anotaciones:ceylon.language::Shared,*/{
        return (!$$testResult.isSuccess);
    });
    $$$cl1.defineAttr($$testResult,'runCount',function()/*anotaciones:ceylon.language::Shared,*/{
        return runCounter$74;
    });
    $$$cl1.defineAttr($$testResult,'successCount',function()/*anotaciones:ceylon.language::Shared,*/{
        return successCounter$76;
    });
    $$$cl1.defineAttr($$testResult,'failureCount',function()/*anotaciones:ceylon.language::Shared,*/{
        return failureCounter$78;
    });
    $$$cl1.defineAttr($$testResult,'errorCount',function()/*anotaciones:ceylon.language::Shared,*/{
        return errorCounter$80;
    });
    function TestResultListener$82($$testResultListener$82){
        $init$TestResultListener$82();
        if ($$testResultListener$82===undefined)$$testResultListener$82=new TestResultListener$82.$$;
        $$testResultListener$82.$$outer=this;
        TestListener($$testResultListener$82);
        function testStarted(test$83){
            (oldrunCounter$84=runCounter$74,runCounter$74=oldrunCounter$84.successor,oldrunCounter$84);
            var oldrunCounter$84;
        }
        $$testResultListener$82.testStarted=testStarted;
        testStarted.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestResult']['$c']['TestResultListener']['$m']['testStarted']};//testStarted.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
        function testFinished(test$85){
            if(test$85.state.equals(getSuccess())){
                (oldsuccessCounter$86=successCounter$76,successCounter$76=oldsuccessCounter$86.successor,oldsuccessCounter$86);
                var oldsuccessCounter$86;
            }else {
                if(test$85.state.equals(getFailure())){
                    (oldfailureCounter$87=failureCounter$78,failureCounter$78=oldfailureCounter$87.successor,oldfailureCounter$87);
                    var oldfailureCounter$87;
                }else {
                    if(test$85.state.equals(getError())){
                        (olderrorCounter$88=errorCounter$80,errorCounter$80=olderrorCounter$88.successor,olderrorCounter$88);
                        var olderrorCounter$88;
                    }
                }
            }
        }
        $$testResultListener$82.testFinished=testFinished;
        testFinished.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestResult']['$c']['TestResultListener']['$m']['testFinished']};//testFinished.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
        return $$testResultListener$82;
    }
    TestResultListener$82.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TestListener}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestResult']['$c']['TestResultListener']};
    function $init$TestResultListener$82(){
        if (TestResultListener$82.$$===undefined){
            $$$cl1.initTypeProto(TestResultListener$82,'ceylon.test::TestResult.TestResultListener',$$$cl1.Basic,$init$TestListener());
            TestResult.TestResultListener$82=TestResultListener$82;
        }
        return TestResultListener$82;
    }
    $$testResult.$init$TestResultListener$82=$init$TestResultListener$82;
    $init$TestResultListener$82();
    runner$73.addTestListener(TestResultListener$82());
    return $$testResult;
}
TestResult.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestResult']};
exports.TestResult=TestResult;
function $init$TestResult(){
    if (TestResult.$$===undefined){
        $$$cl1.initTypeProto(TestResult,'ceylon.test::TestResult',$$$cl1.Basic);
    }
    return TestResult;
}
exports.$init$TestResult=$init$TestResult;
$init$TestResult();
function TestRunner($$testRunner){
    $init$TestRunner();
    if ($$testRunner===undefined)$$testRunner=new TestRunner.$$;
    var testList$89=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$$cl1.defineAttr($$testRunner,'testList$89',function(){return testList$89;});
    var testListenerList$90=$$$cl1.SequenceBuilder({Element:{t:TestListener}});
    $$$cl1.defineAttr($$testRunner,'testListenerList$90',function(){return testListenerList$90;});
    $$$cl1.defineAttr($$testRunner,'tests',function()/*anotaciones:ceylon.language::Shared,*/{
        return testList$89.sequence;
    });
    function addTest(name$91,callable$92){
        testList$89.append(TestUnit(name$91,$$$cl1.$JsCallable(callable$92,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
    }
    $$testRunner.addTest=addTest;
    addTest.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String}},{$nm:'callable',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']['$m']['addTest']};//addTest.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},Element:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}},Return:{t:$$$cl1.Anything}};
    function addTestListener(testListener$93){
        testListenerList$90.append(testListener$93);
    }
    $$testRunner.addTestListener=addTestListener;
    addTestListener.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'testListener',$mt:'prm',$t:{t:TestListener}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']['$m']['addTestListener']};//addTestListener.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}};
    function run(){
        var runner$94=$$testRunner;
        var result$95=TestResult($$testRunner);
        fire$96($$$cl1.$JsCallable(function (l$97){
            return l$97.testRunStarted(runner$94);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        var it$98 = testList$89.sequence.iterator();
        var test$99;while ((test$99=it$98.next())!==$$$cl1.getFinished()){
            runTest$100(test$99);
        }
        fire$96($$$cl1.$JsCallable(function (l$101){
            return l$101.testRunFinished(runner$94,result$95);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        return result$95;
    }
    $$testRunner.run=run;
    run.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:TestResult},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']['$m']['run']};//run.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:TestResult}};
    function runTest$100(test$102){
        var startTime$103=$$$cl1.getProcess().milliseconds;
        (test$102.state=getRunning());
        fire$96($$$cl1.$JsCallable(function (l$104){
            return l$104.testStarted(test$102);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        try{
            test$102.callable();
            (test$102.state=getSuccess());
        }catch(ex$105){
            if (ex$105.getT$name === undefined) ex$105=$$$cl1.NativeException(ex$105);
            if($$$cl1.isOfType(ex$105,{t:AssertException})){
                (test$102.state=getFailure());
                (test$102.exception=ex$105);
            }
            else if($$$cl1.isOfType(ex$105,{t:$$$cl1.Exception})){
                (test$102.state=getError());
                (test$102.exception=ex$105);
            }
            else{throw ex$105}
        }
        finally{
            var finishTime$106=$$$cl1.getProcess().milliseconds;
            (test$102.elapsedTimeInMilis=finishTime$106.minus(startTime$103));
        }
        fire$96($$$cl1.$JsCallable(function (l$107){
            return l$107.testFinished(test$102);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
    };runTest$100.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit}}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']['$m']['runTest']};//runTest$100.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestUnit},Element:{t:TestUnit}}},Return:{t:$$$cl1.Anything}};
    function fire$96(fireCallable$108){
        var it$109 = testListenerList$90.sequence.iterator();
        var testListener$110;while ((testListener$110=it$109.next())!==$$$cl1.getFinished()){
            fireCallable$108(testListener$110);
        }
    };fire$96.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'fireCallable',$mt:'prm',$t:{t:$$$cl1.Anything}}],pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']['$m']['fire']};//fire$96.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Anything},Element:{t:$$$cl1.Anything}}},Return:{t:$$$cl1.Anything}};
    return $$testRunner;
}
TestRunner.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestRunner']};
exports.TestRunner=TestRunner;
function $init$TestRunner(){
    if (TestRunner.$$===undefined){
        $$$cl1.initTypeProto(TestRunner,'ceylon.test::TestRunner',$$$cl1.Basic);
    }
    return TestRunner;
}
exports.$init$TestRunner=$init$TestRunner;
$init$TestRunner();
function TestState(string, $$testState){
    $init$TestState();
    if ($$testState===undefined)$$testState=new TestState.$$;
    return $$testState;
}
TestState.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestState']};
exports.TestState=TestState;
function $init$TestState(){
    if (TestState.$$===undefined){
        $$$cl1.initTypeProto(TestState,'ceylon.test::TestState',$$$cl1.Basic);
    }
    return TestState;
}
exports.$init$TestState=$init$TestState;
$init$TestState();
function undefined$111(){
    var $$undefined=new undefined$111.$$;
    TestState($$$cl1.String("undefined",9),$$undefined);
    return $$undefined;
}
function $init$undefined$111(){
    if (undefined$111.$$===undefined){
        $$$cl1.initTypeProto(undefined$111,'ceylon.test::undefined',TestState);
    }
    return undefined$111;
}
exports.$init$undefined$111=$init$undefined$111;
$init$undefined$111();
var undefined$112=undefined$111();
var getUndefined=function(){
    return undefined$112;
}
exports.getUndefined=getUndefined;
function running$113(){
    var $$running=new running$113.$$;
    TestState($$$cl1.String("running",7),$$running);
    return $$running;
}
function $init$running$113(){
    if (running$113.$$===undefined){
        $$$cl1.initTypeProto(running$113,'ceylon.test::running',TestState);
    }
    return running$113;
}
exports.$init$running$113=$init$running$113;
$init$running$113();
var running$114=running$113();
var getRunning=function(){
    return running$114;
}
exports.getRunning=getRunning;
function success$115(){
    var $$success=new success$115.$$;
    TestState($$$cl1.String("success",7),$$success);
    return $$success;
}
function $init$success$115(){
    if (success$115.$$===undefined){
        $$$cl1.initTypeProto(success$115,'ceylon.test::success',TestState);
    }
    return success$115;
}
exports.$init$success$115=$init$success$115;
$init$success$115();
var success$116=success$115();
var getSuccess=function(){
    return success$116;
}
exports.getSuccess=getSuccess;
function failure$117(){
    var $$failure=new failure$117.$$;
    TestState($$$cl1.String("failure",7),$$failure);
    return $$failure;
}
function $init$failure$117(){
    if (failure$117.$$===undefined){
        $$$cl1.initTypeProto(failure$117,'ceylon.test::failure',TestState);
    }
    return failure$117;
}
exports.$init$failure$117=$init$failure$117;
$init$failure$117();
var failure$118=failure$117();
var getFailure=function(){
    return failure$118;
}
exports.getFailure=getFailure;
function error$119(){
    var $$error=new error$119.$$;
    TestState($$$cl1.String("error",5),$$error);
    return $$error;
}
function $init$error$119(){
    if (error$119.$$===undefined){
        $$$cl1.initTypeProto(error$119,'ceylon.test::error',TestState);
    }
    return error$119;
}
exports.$init$error$119=$init$error$119;
$init$error$119();
var error$120=error$119();
var getError=function(){
    return error$120;
}
exports.getError=getError;
function TestUnit(name$121, callable$122, $$testUnit){
    $init$TestUnit();
    if ($$testUnit===undefined)$$testUnit=new TestUnit.$$;
    var name=name$121;
    $$$cl1.defineAttr($$testUnit,'name',function(){return name;});
    var callable=callable$122;
    $$$cl1.defineAttr($$testUnit,'callable',function(){return callable;});
    var state=getUndefined();
    $$$cl1.defineAttr($$testUnit,'state',function(){return state;},function(state$123){return state=state$123;});
    var exception=null;
    $$$cl1.defineAttr($$testUnit,'exception',function(){return exception;},function(exception$124){return exception=exception$124;});
    var elapsedTimeInMilis=(-(1));
    $$$cl1.defineAttr($$testUnit,'elapsedTimeInMilis',function(){return elapsedTimeInMilis;},function(elapsedTimeInMilis$125){return elapsedTimeInMilis=elapsedTimeInMilis$125;});
    return $$testUnit;
}
TestUnit.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.test',d:$$METAMODEL$$['ceylon.test']['TestUnit']};
exports.TestUnit=TestUnit;
function $init$TestUnit(){
    if (TestUnit.$$===undefined){
        $$$cl1.initTypeProto(TestUnit,'ceylon.test::TestUnit',$$$cl1.Basic);
    }
    return TestUnit;
}
exports.$init$TestUnit=$init$TestUnit;
$init$TestUnit();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
