(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.test","$mod-version":"0.6.1","ceylon.test":{"assertTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is false"]},"$nm":"assertTrue"},"assertNotNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is null"]},"$nm":"assertNotNull"},"nullSafeEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$an":{"see":["assertEquals"],"doc":["A compare function for `assertEquals()`"]},"$nm":"nullSafeEquals"},"error":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is in error if it propgates any exception which is not an [[AssertException]]"]},"$nm":"error"},"TestResult":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}],"$mt":"cls","$an":{"shared":[],"doc":["Holds the results of running the tests held by the given `runner`."]},"$c":{"TestResultListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$nm":"TestResultListener"}},"$at":{"errorCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"errorCounter"},"runCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The numer of tests which were started."]},"$nm":"runCount"},"successCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"successCounter"},"runCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"runCounter"},"isFailure":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether any of the tests didn't succeed.'"]},"$nm":"isFailure"},"failureCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[failed|failure]]."]},"$nm":"failureCount"},"failureCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"failureCounter"},"errorCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[errored|error]]."]},"$nm":"errorCount"},"isSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether all the tests succeeded."]},"$nm":"isSuccess"},"runner":{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"attr","$nm":"runner"},"successCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[succeeded|success]]."]},"$nm":"successCount"}},"$nm":"TestResult"},"TestRunner":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"doc":["Capable of running tests, notifying [[TestListener]]s about each test"]},"$m":{"runTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$nm":"runTest"},"addTestListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test listener to be notified about the execution of tests"]},"$nm":"addTestListener"},"run":{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"mthd","$an":{"shared":[],"doc":["Runs the [[tests]]"]},"$nm":"run"},"addTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callable"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test to be run"]},"$nm":"addTest"},"fire":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"prm","$pt":"f","$nm":"fireCallable"}]],"$mt":"mthd","$m":{"fireCallable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"mthd","$nm":"fireCallable"}},"$nm":"fire"}},"$at":{"tests":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"doc":["The tests held by this instance"]},"$nm":"tests"},"testListenerList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testListenerList"},"testList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testList"}},"$nm":"TestRunner"},"PrintingTestListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$an":{"shared":[],"doc":["A [[TestListener]] which prints information about test execution to the \nstandard output."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStarted"},"banner":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"doc":["Generates a banner with the given text, like this:\n\n```\n============ banner ============\n```\n"]},"$nm":"banner"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$at":{"errAndFail":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"errAndFail"}},"$nm":"PrintingTestListener"},"running":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is running if it has been started, but has not yet completed execution."]},"$nm":"running"},"TestState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.test","$nm":"undefined"},{"$pk":"ceylon.test","$nm":"running"},{"$pk":"ceylon.test","$nm":"success"},{"$pk":"ceylon.test","$nm":"failure"},{"$pk":"ceylon.test","$nm":"error"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"string"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Enumerates the possible states of a [[TestUnit]]"]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"TestState"},"$pkg-shared":"1","failure":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it propgates an [[AssertException]]"]},"$nm":"failure"},"TestListener":{"$mt":"ifc","$an":{"shared":[],"doc":["Contract for things needing to be informed about the execution of tests \nby a [[TestRunner]]."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunStarted"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testStarted"}},"$nm":"TestListener"},"fail":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test."]},"$nm":"fail"},"assertEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are not equal according to the given `compare` function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"assertEquals"},"nullSafeString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"doc":["Like `Object.string`, but handles null."]},"$nm":"nullSafeString"},"undefined":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test which has not yet started execution."]},"$nm":"undefined"},"assertFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is true"]},"$nm":"assertFalse"},"AssertComparisonException":{"super":{"$pk":"ceylon.test","$nm":"AssertException"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"expectedValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"actualValue"}],"$mt":"cls","$an":{"shared":[],"see":["assertEquals"],"doc":["Subclass of `AssertException` for assertion failures dues to two things \n    not being equal"]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"},"expectedValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"expectedValue"},"actualValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"actualValue"}},"$nm":"AssertComparisonException"},"suite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"suiteName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"tests"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Configure a [[TestRunner]] with the given tests and run it"]},"$nm":"suite"},"TestUnit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The name of this test."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The test code."]},"$nm":"callable"}],"$mt":"cls","$an":{"shared":[],"doc":["A named piece of test code, and it's state."]},"$at":{"callable":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"attr","$an":{"shared":[],"doc":["The test code."]},"$nm":"callable"},"elapsedTimeInMilis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The time it took to execute this unit."],"variable":[]},"$nm":"elapsedTimeInMilis"},"exception":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The exception thrown by this unit, if any."],"variable":[]},"$nm":"exception"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The name of this test."]},"$nm":"name"},"state":{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The [[state|TestState]] of this unit."],"variable":[]},"$nm":"state"}},"$nm":"TestUnit"},"assertNotEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are equal according to the given `compare` function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"assertNotEquals"},"success":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it complete normally, (that is, does not throw an exception)."]},"$nm":"success"},"assertNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is not null"]},"$nm":"assertNull"},"AssertException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when assertion failures"]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"AssertException"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
function AssertException(message$2, $$assertException){
    $init$AssertException();
    if ($$assertException===undefined)$$assertException=new AssertException.$$;
    $$assertException.message$2_=message$2;
    $$$cl1.Exception($$assertException.message$2,null,$$assertException);
    return $$assertException;
}
AssertException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Thrown when assertion failures",30)),$$$cl1.shared()];},d:['ceylon.test','AssertException']};};
exports.AssertException=AssertException;
function $init$AssertException(){
    if (AssertException.$$===undefined){
        $$$cl1.initTypeProto(AssertException,'ceylon.test::AssertException',$$$cl1.Exception);
        (function($$assertException){
            $$$cl1.defineAttr($$assertException,'message$2',function(){return this.message$2_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertException,d:['ceylon.test','AssertException','$at','message']};});
        })(AssertException.$$.prototype);
    }
    return AssertException;
}
exports.$init$AssertException=$init$AssertException;
$init$AssertException();
function AssertComparisonException(message$3, expectedValue, actualValue, $$assertComparisonException){
    $init$AssertComparisonException();
    if ($$assertComparisonException===undefined)$$assertComparisonException=new AssertComparisonException.$$;
    $$assertComparisonException.message$3_=message$3;
    AssertException($$assertComparisonException.message$3,$$assertComparisonException);
    $$assertComparisonException.expectedValue$4_=expectedValue;
    $$assertComparisonException.$prop$getExpectedValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','expectedValue']};}};
    $$assertComparisonException.$prop$getExpectedValue.get=function(){return expectedValue};
    $$assertComparisonException.actualValue$5_=actualValue;
    $$assertComparisonException.$prop$getActualValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','actualValue']};}};
    $$assertComparisonException.$prop$getActualValue.get=function(){return actualValue};
    return $$assertComparisonException;
}
AssertComparisonException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AssertException},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Subclass of `AssertException` for assertion failures dues to two things \n    not being equal",92)),$$$cl1.see([$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','0.6.1').findPackage('ceylon.test'),assertEquals)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException']};};
exports.AssertComparisonException=AssertComparisonException;
function $init$AssertComparisonException(){
    if (AssertComparisonException.$$===undefined){
        $$$cl1.initTypeProto(AssertComparisonException,'ceylon.test::AssertComparisonException',$init$AssertException());
        (function($$assertComparisonException){
            $$$cl1.defineAttr($$assertComparisonException,'expectedValue',function(){return this.expectedValue$4_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','expectedValue']};});
            $$$cl1.defineAttr($$assertComparisonException,'actualValue',function(){return this.actualValue$5_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','actualValue']};});
            $$$cl1.defineAttr($$assertComparisonException,'message$3',function(){return this.message$3_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,d:['ceylon.test','AssertComparisonException','$at','message']};});
        })(AssertComparisonException.$$.prototype);
    }
    return AssertComparisonException;
}
exports.$init$AssertComparisonException=$init$AssertComparisonException;
$init$AssertComparisonException();
function fail(message$6){
    if(message$6===undefined){message$6=$$$cl1.String("Failed",6);}
    throw $$$cl1.wrapexc(AssertException(message$6),'17:4-17:34','ceylon/test/assertions.ceylon');
}
exports.fail=fail;
fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test.",15)),$$$cl1.shared()];},d:['ceylon.test','fail']};};
function assertTrue(condition$7,message$8){
    if(message$8===undefined){message$8=$$$cl1.String(" expected ",10).plus(condition$7.string);}
    if((!condition$7)){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$8.string]).string),'23:8-23:64','ceylon/test/assertions.ceylon');
    }
}
exports.assertTrue=assertTrue;
assertTrue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the assertion is false",40)),$$$cl1.shared()];},d:['ceylon.test','assertTrue']};};
function assertFalse(condition$9,message$10){
    if(message$10===undefined){message$10=$$$cl1.String(" expected ",10).plus(condition$9.string);}
    if(condition$9){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$10.string]).string),'30:8-30:64','ceylon/test/assertions.ceylon');
    }
}
exports.assertFalse=assertFalse;
assertFalse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the assertion is true",39)),$$$cl1.shared()];},d:['ceylon.test','assertFalse']};};
function assertNull(got$11,message$12){
    if(message$12===undefined){message$12=$$$cl1.String("",0);}
    var got$13;
    if((got$13=got$11)!==null){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("accertion failed: expected null but got ",40),got$13.string]).string),'37:8-37:82','ceylon/test/assertions.ceylon');
    }
}
exports.assertNull=assertNull;
assertNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given result is not null",46)),$$$cl1.shared()];},d:['ceylon.test','assertNull']};};
function assertNotNull(got$14,message$15){
    if(message$15===undefined){message$15=$$$cl1.String("",0);}
    if((!$$$cl1.exists(got$14))){
        throw $$$cl1.wrapexc(AssertException($$$cl1.String("accertion failed: expected not null but got null",48)),'44:8-44:81','ceylon/test/assertions.ceylon');
    }
}
exports.assertNotNull=assertNotNull;
assertNotNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given result is null",42)),$$$cl1.shared()];},d:['ceylon.test','assertNotNull']};};
function assertEquals(expected$16,actual$17,message$18,compare$19){
    if(message$18===undefined){message$18=null;}
    if(compare$19===undefined){compare$19=function (expected$20,actual$21){
        return nullSafeEquals(expected$20,actual$21);
    };}
    if((!compare$19(expected$16,actual$17))){
        var expectedText$22=nullSafeString(expected$16);
        $prop$getExpectedText$22={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','expectedText']};}};
        $prop$getExpectedText$22.get=function(){return expectedText$22};
        var actualText$23=nullSafeString(actual$17);
        $prop$getActualText$23={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','actualText']};}};
        $prop$getActualText$23.get=function(){return actualText$23};
        var message$24;
        if((message$24=message$18)!==null){
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$22.string,$$$cl1.String(" != ",4),actualText$23.string,$$$cl1.String(": \"",3),message$24.string,$$$cl1.String("\"",1)]).string,expectedText$22,actualText$23),'55:12-55:148','ceylon/test/assertions.ceylon');
        }else {
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$22.string,$$$cl1.String(" != ",4),actualText$23.string]).string,expectedText$22,actualText$23),'58:12-58:129','ceylon/test/assertions.ceylon');
        }
    }
}
exports.assertEquals=assertEquals;
assertEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given objects are not equal according to the given `compare` function.",92)),$$$cl1.shared()];},d:['ceylon.test','assertEquals']};};
function assertNotEquals(expected$25,actual$26,message$27,compare$28){
    if(message$27===undefined){message$27=null;}
    if(compare$28===undefined){compare$28=function (expected$29,actual$30){
        return nullSafeEquals(expected$29,actual$30);
    };}
    if(compare$28(expected$25,actual$26)){
        var expectedText$31=nullSafeString(expected$25);
        $prop$getExpectedText$31={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','expectedText']};}};
        $prop$getExpectedText$31.get=function(){return expectedText$31};
        var actualText$32=nullSafeString(actual$26);
        $prop$getActualText$32={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','actualText']};}};
        $prop$getActualText$32.get=function(){return actualText$32};
        var message$33;
        if((message$33=message$27)!==null){
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$31.string,$$$cl1.String(" == ",4),actualText$32.string,$$$cl1.String(": \"",3),message$33.string,$$$cl1.String("\"",1)]).string,expectedText$31,actualText$32),'70:12-70:148','ceylon/test/assertions.ceylon');
        }else {
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$31.string,$$$cl1.String(" == ",4),actualText$32.string]).string,expectedText$31,actualText$32),'73:12-73:129','ceylon/test/assertions.ceylon');
        }
    }
}
exports.assertNotEquals=assertNotEquals;
assertNotEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given objects are equal according to the given `compare` function.",88)),$$$cl1.shared()];},d:['ceylon.test','assertNotEquals']};};
function nullSafeEquals(expected$34,actual$35){
    var expected$36;
    if((expected$36=expected$34)!==null){
        var actual$37;
        if((actual$37=actual$35)!==null){
            return expected$36.equals(actual$37);
        }
    }
    return $$$cl1.exists(actual$35).equals($$$cl1.exists(expected$34));
};nullSafeEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A compare function for `assertEquals()`",39)),$$$cl1.see([$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','0.6.1').findPackage('ceylon.test'),assertEquals)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}}))];},d:['ceylon.test','nullSafeEquals']};};
function nullSafeString(obj$38){
    var obj$39;
    if((obj$39=obj$38)!==null){
        return obj$39.string;
    }
    return $$$cl1.String("null",4);
};nullSafeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Like `Object.string`, but handles null.",39))];},d:['ceylon.test','nullSafeString']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("A framework for software testing",32)),$$$cl1.by([$$$cl1.String("Tom Bentley",11),$$$cl1.String("Tomáš Hradec",12)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}))];};
exports.$pkg$ans$ceylon$test=function(){return[$$$cl1.shared()];};
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
suite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'suiteName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'tests',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Configure a [[TestRunner]] with the given tests and run it",58)),$$$cl1.shared()];},d:['ceylon.test','suite']};};
function TestListener($$testListener){
}
TestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Contract for things needing to be informed about the execution of tests \nby a [[TestRunner]].",93)),$$$cl1.shared()];},d:['ceylon.test','TestListener']};};
exports.TestListener=TestListener;
function $init$TestListener(){
    if (TestListener.$$===undefined){
        $$$cl1.initTypeProto(TestListener,'ceylon.test::TestListener');
        (function($$testListener){
            $$testListener.testRunStarted=function testRunStarted(runner$47){
                var $$testListener=this;
            };$$testListener.testRunStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunStarted']};};
            $$testListener.testRunFinished=function testRunFinished(runner$48,result$49){
                var $$testListener=this;
            };$$testListener.testRunFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}},{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunFinished']};};
            $$testListener.testStarted=function testStarted(test$50){
                var $$testListener=this;
            };$$testListener.testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testStarted']};};
            $$testListener.testFinished=function testFinished(test$51){
                var $$testListener=this;
            };$$testListener.testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testFinished']};};
        })(TestListener.$$.prototype);
    }
    return TestListener;
}
exports.$init$TestListener=$init$TestListener;
$init$TestListener();
function PrintingTestListener($$printingTestListener){
    $init$PrintingTestListener();
    if ($$printingTestListener===undefined)$$printingTestListener=new PrintingTestListener.$$;
    TestListener($$printingTestListener);
    $$printingTestListener.errAndFail$52_=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$printingTestListener.$prop$getErrAndFail$52={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:PrintingTestListener,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','PrintingTestListener','$at','errAndFail']};}};
    $$printingTestListener.$prop$getErrAndFail$52.get=function(){return errAndFail$52};
    return $$printingTestListener;
}
PrintingTestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TestListener}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[TestListener]] which prints information about test execution to the \nstandard output.",89)),$$$cl1.shared()];},d:['ceylon.test','PrintingTestListener']};};
exports.PrintingTestListener=PrintingTestListener;
function $init$PrintingTestListener(){
    if (PrintingTestListener.$$===undefined){
        $$$cl1.initTypeProto(PrintingTestListener,'ceylon.test::PrintingTestListener',$$$cl1.Basic,$init$TestListener());
        (function($$printingTestListener){
            $$$cl1.defineAttr($$printingTestListener,'errAndFail$52',function(){return this.errAndFail$52_;},function(errAndFail$53){return this.errAndFail$52_=errAndFail$53;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:PrintingTestListener,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','PrintingTestListener','$at','errAndFail']};});
            $$printingTestListener.testRunStarted=function testRunStarted(runner$54){
                var $$printingTestListener=this;
                $$$cl1.print($$printingTestListener.banner$55($$$cl1.String("TESTS STARTED",13)));
            };$$printingTestListener.testRunStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testRunStarted']};};
            $$printingTestListener.testRunFinished=function testRunFinished(runner$56,result$57){
                var $$printingTestListener=this;
                if(result$57.runCount.equals((0))){
                    $$$cl1.print($$printingTestListener.banner$55($$$cl1.String("NO TESTS",8)));
                    $$$cl1.print($$$cl1.String("There were no tests!",20));
                }else {
                    $$$cl1.print($$printingTestListener.banner$55($$$cl1.String("TESTS RESULT",12)));
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("run:     ",9),result$57.runCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("success: ",9),result$57.successCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("failure: ",9),result$57.failureCount.string]).string);
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("error:   ",9),result$57.errorCount.string]).string);
                    if($$printingTestListener.errAndFail$52.size.compare((0)).equals($$$cl1.getLarger())){
                        $$$cl1.print($$$cl1.String("errors & failures:",18));
                        var it$58 = $$printingTestListener.errAndFail$52.sequence.iterator();
                        var errorOrFailure$59;while ((errorOrFailure$59=it$58.next())!==$$$cl1.getFinished()){
                            $$$cl1.print($$$cl1.StringBuilder().appendAll([errorOrFailure$59.state.string,$$$cl1.String(": ",2),errorOrFailure$59.name.string]).string);
                            var ex$60;
                            if((ex$60=errorOrFailure$59.exception)!==null){
                                ex$60.printStackTrace();
                            }
                        }
                    }
                    if(result$57.isSuccess){
                        $$$cl1.print($$printingTestListener.banner$55($$$cl1.String("TESTS SUCCESS",13)));
                    }else {
                        $$$cl1.print($$printingTestListener.banner$55($$$cl1.String("TESTS FAILED",12)));
                    }
                }
                $$printingTestListener.errAndFail$52=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
            };$$printingTestListener.testRunFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}},{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testRunFinished']};};
            $$printingTestListener.testStarted=function testStarted(test$61){
                var $$printingTestListener=this;
                $$$cl1.print(test$61.name);
            };$$printingTestListener.testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testStarted']};};
            $$printingTestListener.testFinished=function testFinished(test$62){
                var $$printingTestListener=this;
                
                var case$63=test$62.state;
                if (case$63===getFailure() || case$63===getError()) {
                    $$printingTestListener.errAndFail$52.append(test$62);
                }else {}
            };$$printingTestListener.testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testFinished']};};
            $$printingTestListener.banner$55=function banner$55(text$64){
                var $$printingTestListener=this;
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
            };$$printingTestListener.banner$55.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Generates a banner with the given text, like this:\n\n```\n============ banner ============\n```\n",93))];},d:['ceylon.test','PrintingTestListener','$m','banner']};};
        })(PrintingTestListener.$$.prototype);
    }
    return PrintingTestListener;
}
exports.$init$PrintingTestListener=$init$PrintingTestListener;
$init$PrintingTestListener();
function TestResult(runner$73, $$testResult){
    $init$TestResult();
    if ($$testResult===undefined)$$testResult=new TestResult.$$;
    $$testResult.runner$73_=runner$73;
    $$testResult.runCounter$74_=(0);
    $$testResult.$prop$getRunCounter$74={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','runCounter']};}};
    $$testResult.$prop$getRunCounter$74.get=function(){return runCounter$74};
    $$testResult.successCounter$75_=(0);
    $$testResult.$prop$getSuccessCounter$75={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','successCounter']};}};
    $$testResult.$prop$getSuccessCounter$75.get=function(){return successCounter$75};
    $$testResult.failureCounter$76_=(0);
    $$testResult.$prop$getFailureCounter$76={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','failureCounter']};}};
    $$testResult.$prop$getFailureCounter$76.get=function(){return failureCounter$76};
    $$testResult.errorCounter$77_=(0);
    $$testResult.$prop$getErrorCounter$77={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','errorCounter']};}};
    $$testResult.$prop$getErrorCounter$77.get=function(){return errorCounter$77};
    $$testResult.runner$73.addTestListener($$testResult.TestResultListener$78());
    return $$testResult;
}
TestResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Holds the results of running the tests held by the given `runner`.",66)),$$$cl1.shared()];},d:['ceylon.test','TestResult']};};
exports.TestResult=TestResult;
function $init$TestResult(){
    if (TestResult.$$===undefined){
        $$$cl1.initTypeProto(TestResult,'ceylon.test::TestResult',$$$cl1.Basic);
        (function($$testResult){
            $$$cl1.defineAttr($$testResult,'runCounter$74',function(){return this.runCounter$74_;},function(runCounter$79){return this.runCounter$74_=runCounter$79;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','runCounter']};});
            $$$cl1.defineAttr($$testResult,'successCounter$75',function(){return this.successCounter$75_;},function(successCounter$80){return this.successCounter$75_=successCounter$80;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','successCounter']};});
            $$$cl1.defineAttr($$testResult,'failureCounter$76',function(){return this.failureCounter$76_;},function(failureCounter$81){return this.failureCounter$76_=failureCounter$81;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','failureCounter']};});
            $$$cl1.defineAttr($$testResult,'errorCounter$77',function(){return this.errorCounter$77_;},function(errorCounter$82){return this.errorCounter$77_=errorCounter$82;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','errorCounter']};});
            $$$cl1.defineAttr($$testResult,'isSuccess',function(){
                var $$testResult=this;
                return $$testResult.runCounter$74.equals($$testResult.successCounter$75);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("Whether all the tests succeeded.",32)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','isSuccess']};});$$$cl1.defineAttr($$testResult,'isFailure',function(){
                var $$testResult=this;
                return (!$$testResult.isSuccess);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("Whether any of the tests didn\'t succeed.\'",41)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','isFailure']};});$$$cl1.defineAttr($$testResult,'runCount',function(){
                var $$testResult=this;
                return $$testResult.runCounter$74;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The numer of tests which were started.",38)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','runCount']};});$$$cl1.defineAttr($$testResult,'successCount',function(){
                var $$testResult=this;
                return $$testResult.successCounter$75;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[succeeded|success]].",48)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','successCount']};});$$$cl1.defineAttr($$testResult,'failureCount',function(){
                var $$testResult=this;
                return $$testResult.failureCounter$76;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[failed|failure]].",45)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','failureCount']};});$$$cl1.defineAttr($$testResult,'errorCount',function(){
                var $$testResult=this;
                return $$testResult.errorCounter$77;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[errored|error]].",44)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','errorCount']};});function TestResultListener$78($$testResultListener$78){
                $init$TestResultListener$78();
                if ($$testResultListener$78===undefined)$$testResultListener$78=new this.TestResultListener$78.$$;
                $$testResultListener$78.$$outer=this;
                TestListener($$testResultListener$78);
                return $$testResultListener$78;
            }
            TestResultListener$78.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$cont:TestResult,satisfies:[{t:TestListener}],d:['ceylon.test','TestResult','$c','TestResultListener']};};
            function $init$TestResultListener$78(){
                if (TestResultListener$78.$$===undefined){
                    $$$cl1.initTypeProto(TestResultListener$78,'ceylon.test::TestResult.TestResultListener',$$$cl1.Basic,$init$TestListener());
                    TestResult.TestResultListener$78=TestResultListener$78;
                    (function($$testResultListener$78){
                        $$testResultListener$78.testStarted=function testStarted(test$83){
                            var $$testResultListener$78=this;
                            (oldrunCounter$84=$$testResultListener$78.$$outer.runCounter$74,$$testResultListener$78.$$outer.runCounter$74=oldrunCounter$84.successor,oldrunCounter$84);
                            var oldrunCounter$84;
                        };$$testResultListener$78.testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestResultListener$78,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestResult','$c','TestResultListener','$m','testStarted']};};
                        $$testResultListener$78.testFinished=function testFinished(test$85){
                            var $$testResultListener$78=this;
                            if(test$85.state.equals(getSuccess())){
                                (oldsuccessCounter$86=$$testResultListener$78.$$outer.successCounter$75,$$testResultListener$78.$$outer.successCounter$75=oldsuccessCounter$86.successor,oldsuccessCounter$86);
                                var oldsuccessCounter$86;
                            }else {
                                if(test$85.state.equals(getFailure())){
                                    (oldfailureCounter$87=$$testResultListener$78.$$outer.failureCounter$76,$$testResultListener$78.$$outer.failureCounter$76=oldfailureCounter$87.successor,oldfailureCounter$87);
                                    var oldfailureCounter$87;
                                }else {
                                    if(test$85.state.equals(getError())){
                                        (olderrorCounter$88=$$testResultListener$78.$$outer.errorCounter$77,$$testResultListener$78.$$outer.errorCounter$77=olderrorCounter$88.successor,olderrorCounter$88);
                                        var olderrorCounter$88;
                                    }
                                }
                            }
                        };$$testResultListener$78.testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestResultListener$78,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestResult','$c','TestResultListener','$m','testFinished']};};
                    })(TestResultListener$78.$$.prototype);
                }
                return TestResultListener$78;
            }
            $$testResult.$init$TestResultListener$78=$init$TestResultListener$78;
            $init$TestResultListener$78();
            $$testResult.TestResultListener$78=TestResultListener$78;
            $$$cl1.defineAttr($$testResult,'runner$73',function(){return this.runner$73_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestRunner},$cont:TestResult,d:['ceylon.test','TestResult','$at','runner']};});
        })(TestResult.$$.prototype);
    }
    return TestResult;
}
exports.$init$TestResult=$init$TestResult;
$init$TestResult();
function TestRunner($$testRunner){
    $init$TestRunner();
    if ($$testRunner===undefined)$$testRunner=new TestRunner.$$;
    $$testRunner.testList$89_=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$testRunner.$prop$getTestList$89={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testList']};}};
    $$testRunner.$prop$getTestList$89.get=function(){return testList$89};
    $$testRunner.testListenerList$90_=$$$cl1.SequenceBuilder({Element:{t:TestListener}});
    $$testRunner.$prop$getTestListenerList$90={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestListener}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testListenerList']};}};
    $$testRunner.$prop$getTestListenerList$90.get=function(){return testListenerList$90};
    return $$testRunner;
}
TestRunner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Capable of running tests, notifying [[TestListener]]s about each test",69)),$$$cl1.shared()];},d:['ceylon.test','TestRunner']};};
exports.TestRunner=TestRunner;
function $init$TestRunner(){
    if (TestRunner.$$===undefined){
        $$$cl1.initTypeProto(TestRunner,'ceylon.test::TestRunner',$$$cl1.Basic);
        (function($$testRunner){
            $$$cl1.defineAttr($$testRunner,'testList$89',function(){return this.testList$89_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testList']};});
            $$$cl1.defineAttr($$testRunner,'testListenerList$90',function(){return this.testListenerList$90_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestListener}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testListenerList']};});
            $$$cl1.defineAttr($$testRunner,'tests',function(){
                var $$testRunner=this;
                return $$testRunner.testList$89.sequence;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:{t:TestUnit}}},$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("The tests held by this instance",31)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$at','tests']};});$$testRunner.addTest=function addTest(name$91,callable$92){
                var $$testRunner=this;
                $$testRunner.testList$89.append(TestUnit(name$91,$$$cl1.$JsCallable(callable$92,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
            };$$testRunner.addTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callable',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a test to be run",21)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','addTest']};};
            $$testRunner.addTestListener=function addTestListener(testListener$93){
                var $$testRunner=this;
                $$testRunner.testListenerList$90.append(testListener$93);
            };$$testRunner.addTestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'testListener',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a test listener to be notified about the execution of tests",64)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','addTestListener']};};
            $$testRunner.run=function run(){
                var $$testRunner=this;
                var runner$94=$$testRunner;
                var result$95=TestResult($$testRunner);
                $$testRunner.fire$96($$$cl1.$JsCallable(function (l$97){
                    return l$97.testRunStarted(runner$94);
                },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
                var it$98 = $$testRunner.testList$89.sequence.iterator();
                var test$99;while ((test$99=it$98.next())!==$$$cl1.getFinished()){
                    $$testRunner.runTest$100(test$99);
                }
                $$testRunner.fire$96($$$cl1.$JsCallable(function (l$101){
                    return l$101.testRunFinished(runner$94,result$95);
                },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
                return result$95;
            };$$testRunner.run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TestResult},$ps:[],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Runs the [[tests]]",18)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','run']};};
            $$testRunner.runTest$100=function runTest$100(test$102){
                var $$testRunner=this;
                var startTime$103=$$$cl1.getProcess().milliseconds;
                (test$102.state=getRunning());
                $$testRunner.fire$96($$$cl1.$JsCallable(function (l$104){
                    return l$104.testStarted(test$102);
                },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
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
                    $prop$getFinishTime$106={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.test','TestRunner','$m','runTest','$at','finishTime']};}};
                    $prop$getFinishTime$106.get=function(){return finishTime$106};
                    (test$102.elapsedTimeInMilis=finishTime$106.minus(startTime$103));
                }
                $$testRunner.fire$96($$$cl1.$JsCallable(function (l$107){
                    return l$107.testFinished(test$102);
                },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
            };$$testRunner.runTest$100.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestRunner,d:['ceylon.test','TestRunner','$m','runTest']};};
            $$testRunner.fire$96=function fire$96(fireCallable$108){
                var $$testRunner=this;
                var it$109 = $$testRunner.testListenerList$90.sequence.iterator();
                var testListener$110;while ((testListener$110=it$109.next())!==$$$cl1.getFinished()){
                    fireCallable$108(testListener$110);
                }
            };$$testRunner.fire$96.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'fireCallable',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:TestRunner,d:['ceylon.test','TestRunner','$m','fire']};};
        })(TestRunner.$$.prototype);
    }
    return TestRunner;
}
exports.$init$TestRunner=$init$TestRunner;
$init$TestRunner();
function TestState(string, $$testState){
    $init$TestState();
    if ($$testState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$testState.string_=string;
    return $$testState;
}
TestState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Enumerates the possible states of a [[TestUnit]]",48)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.test','TestState']};};
exports.TestState=TestState;
function $init$TestState(){
    if (TestState.$$===undefined){
        $$$cl1.initTypeProto(TestState,'ceylon.test::TestState',$$$cl1.Basic);
        (function($$testState){
            $$$cl1.defineAttr($$testState,'string',function(){return this.string_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestState,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestState','$at','string']};});
        })(TestState.$$.prototype);
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
        $$$cl1.initTypeProto(undefined$111,'ceylon.test::undefined',$init$TestState());
    }
    return undefined$111;
}
exports.$init$undefined$111=$init$undefined$111;
$init$undefined$111();
var undefined$112;
function getUndefined(){
    if (undefined$112===undefined)undefined$112=$init$undefined$111()();
    return undefined$112;
}
exports.getUndefined=getUndefined;
getUndefined.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:undefined$111},$an:function(){return[$$$cl1.doc($$$cl1.String("A test which has not yet started execution.",43)),$$$cl1.shared()];},d:['ceylon.test','undefined']};};
$prop$getUndefined={get:getUndefined,$$metamodel$$:getUndefined.$$metamodel$$};
exports.$prop$getUndefined=$prop$getUndefined;
function running$113(){
    var $$running=new running$113.$$;
    TestState($$$cl1.String("running",7),$$running);
    return $$running;
}
function $init$running$113(){
    if (running$113.$$===undefined){
        $$$cl1.initTypeProto(running$113,'ceylon.test::running',$init$TestState());
    }
    return running$113;
}
exports.$init$running$113=$init$running$113;
$init$running$113();
var running$114;
function getRunning(){
    if (running$114===undefined)running$114=$init$running$113()();
    return running$114;
}
exports.getRunning=getRunning;
getRunning.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:running$113},$an:function(){return[$$$cl1.doc($$$cl1.String("A test is running if it has been started, but has not yet completed execution.",78)),$$$cl1.shared()];},d:['ceylon.test','running']};};
$prop$getRunning={get:getRunning,$$metamodel$$:getRunning.$$metamodel$$};
exports.$prop$getRunning=$prop$getRunning;
function success$115(){
    var $$success=new success$115.$$;
    TestState($$$cl1.String("success",7),$$success);
    return $$success;
}
function $init$success$115(){
    if (success$115.$$===undefined){
        $$$cl1.initTypeProto(success$115,'ceylon.test::success',$init$TestState());
    }
    return success$115;
}
exports.$init$success$115=$init$success$115;
$init$success$115();
var success$116;
function getSuccess(){
    if (success$116===undefined)success$116=$init$success$115()();
    return success$116;
}
exports.getSuccess=getSuccess;
getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:success$115},$an:function(){return[$$$cl1.doc($$$cl1.String("A test fails if it complete normally, (that is, does not throw an exception).",77)),$$$cl1.shared()];},d:['ceylon.test','success']};};
$prop$getSuccess={get:getSuccess,$$metamodel$$:getSuccess.$$metamodel$$};
exports.$prop$getSuccess=$prop$getSuccess;
function failure$117(){
    var $$failure=new failure$117.$$;
    TestState($$$cl1.String("failure",7),$$failure);
    return $$failure;
}
function $init$failure$117(){
    if (failure$117.$$===undefined){
        $$$cl1.initTypeProto(failure$117,'ceylon.test::failure',$init$TestState());
    }
    return failure$117;
}
exports.$init$failure$117=$init$failure$117;
$init$failure$117();
var failure$118;
function getFailure(){
    if (failure$118===undefined)failure$118=$init$failure$117()();
    return failure$118;
}
exports.getFailure=getFailure;
getFailure.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:failure$117},$an:function(){return[$$$cl1.doc($$$cl1.String("A test fails if it propgates an [[AssertException]]",51)),$$$cl1.shared()];},d:['ceylon.test','failure']};};
$prop$getFailure={get:getFailure,$$metamodel$$:getFailure.$$metamodel$$};
exports.$prop$getFailure=$prop$getFailure;
function error$119(){
    var $$error=new error$119.$$;
    TestState($$$cl1.String("error",5),$$error);
    return $$error;
}
function $init$error$119(){
    if (error$119.$$===undefined){
        $$$cl1.initTypeProto(error$119,'ceylon.test::error',$init$TestState());
    }
    return error$119;
}
exports.$init$error$119=$init$error$119;
$init$error$119();
var error$120;
function getError(){
    if (error$120===undefined)error$120=$init$error$119()();
    return error$120;
}
exports.getError=getError;
getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:error$119},$an:function(){return[$$$cl1.doc($$$cl1.String("A test is in error if it propgates any exception which is not an [[AssertException]]",84)),$$$cl1.shared()];},d:['ceylon.test','error']};};
$prop$getError={get:getError,$$metamodel$$:getError.$$metamodel$$};
exports.$prop$getError=$prop$getError;
function TestUnit(name, callable, $$testUnit){
    $init$TestUnit();
    if ($$testUnit===undefined)$$testUnit=new TestUnit.$$;
    $$testUnit.name$121_=name;
    $$testUnit.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The name of this test.",22)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','name']};}};
    $$testUnit.$prop$getName.get=function(){return name};
    $$testUnit.callable$122_=callable;
    $$testUnit.$prop$getCallable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The test code.",14)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','callable']};}};
    $$testUnit.$prop$getCallable.get=function(){return callable};
    $$testUnit.state$123_=getUndefined();
    $$testUnit.$prop$getState={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The [[state|TestState]] of this unit.",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','state']};}};
    $$testUnit.$prop$getState.get=function(){return state};
    $$testUnit.exception$124_=null;
    $$testUnit.$prop$getException={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The exception thrown by this unit, if any.",42)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','exception']};}};
    $$testUnit.$prop$getException.get=function(){return exception};
    $$testUnit.elapsedTimeInMilis$125_=(-(1));
    $$testUnit.$prop$getElapsedTimeInMilis={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The time it took to execute this unit.",38)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','elapsedTimeInMilis']};}};
    $$testUnit.$prop$getElapsedTimeInMilis.get=function(){return elapsedTimeInMilis};
    return $$testUnit;
}
TestUnit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A named piece of test code, and it\'s state.",43)),$$$cl1.shared()];},d:['ceylon.test','TestUnit']};};
exports.TestUnit=TestUnit;
function $init$TestUnit(){
    if (TestUnit.$$===undefined){
        $$$cl1.initTypeProto(TestUnit,'ceylon.test::TestUnit',$$$cl1.Basic);
        (function($$testUnit){
            $$$cl1.defineAttr($$testUnit,'name',function(){return this.name$121_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The name of this test.",22)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','name']};});
            $$$cl1.defineAttr($$testUnit,'callable',function(){return this.callable$122_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The test code.",14)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','callable']};});
            $$$cl1.defineAttr($$testUnit,'state',function(){return this.state$123_;},function(state$126){return this.state$123_=state$126;},function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The [[state|TestState]] of this unit.",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','state']};});
            $$$cl1.defineAttr($$testUnit,'exception',function(){return this.exception$124_;},function(exception$127){return this.exception$124_=exception$127;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The exception thrown by this unit, if any.",42)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','exception']};});
            $$$cl1.defineAttr($$testUnit,'elapsedTimeInMilis',function(){return this.elapsedTimeInMilis$125_;},function(elapsedTimeInMilis$128){return this.elapsedTimeInMilis$125_=elapsedTimeInMilis$128;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The time it took to execute this unit.",38)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','elapsedTimeInMilis']};});
        })(TestUnit.$$.prototype);
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
