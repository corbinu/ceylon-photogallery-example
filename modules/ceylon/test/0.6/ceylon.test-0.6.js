(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.test","$mod-version":"0.6","ceylon.test":{"assertTrue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is false"]},"$nm":"assertTrue"},"assertNotNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is null"]},"$nm":"assertNotNull"},"nullSafeEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$an":{"see":["assertEquals"],"doc":["A compare function for `assertEquals()`"]},"$nm":"nullSafeEquals"},"error":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is in error if it propgates any exception which is not an [[AssertException]]"]},"$nm":"error"},"TestResult":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}],"$mt":"cls","$an":{"shared":[],"doc":["Holds the results of running the tests held by the given `runner`."]},"$c":{"TestResultListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$nm":"TestResultListener"}},"$at":{"errorCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"errorCounter"},"runCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The numer of tests which were started."]},"$nm":"runCount"},"successCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"successCounter"},"runCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"runCounter"},"isFailure":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether any of the tests didn't succeed.'"]},"$nm":"isFailure"},"failureCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[failed|failure]]."]},"$nm":"failureCount"},"failureCounter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"failureCounter"},"errorCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[errored|error]]."]},"$nm":"errorCount"},"isSuccess":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Whether all the tests succeeded."]},"$nm":"isSuccess"},"runner":{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"attr","$nm":"runner"},"successCount":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of tests which [[succeeded|success]]."]},"$nm":"successCount"}},"$nm":"TestResult"},"TestRunner":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"cls","$an":{"shared":[],"doc":["Capable of running tests, notifying [[TestListener]]s about each test"]},"$m":{"runTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$nm":"runTest"},"addTestListener":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test listener to be notified about the execution of tests"]},"$nm":"addTestListener"},"run":{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"mthd","$an":{"shared":[],"doc":["Runs the [[tests]]"]},"$nm":"run"},"addTest":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"prm","$nm":"callable"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a test to be run"]},"$nm":"addTest"},"fire":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"prm","$pt":"f","$nm":"fireCallable"}]],"$mt":"mthd","$m":{"fireCallable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestListener"},"$mt":"prm","$nm":"testListener"}]],"$mt":"mthd","$nm":"fireCallable"}},"$nm":"fire"}},"$at":{"tests":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"List"},"$mt":"gttr","$an":{"shared":[],"doc":["The tests held by this instance"]},"$nm":"tests"},"testListenerList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestListener"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testListenerList"},"testList":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"$mt":"attr","$nm":"testList"}},"$nm":"TestRunner"},"PrintingTestListener":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.test","$nm":"TestListener"}],"$mt":"cls","$an":{"shared":[],"doc":["A [[TestListener]] which prints information about test execution to the \nstandard output."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testRunStarted"},"banner":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"text"}]],"$mt":"mthd","$an":{"doc":["Generates a banner with the given text, like this:\n\n```\n============ banner ============\n```\n"]},"$nm":"banner"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"testStarted"}},"$at":{"errAndFail":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.test","$nm":"TestUnit"}],"$pk":"ceylon.language","$nm":"SequenceBuilder"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"errAndFail"}},"$nm":"PrintingTestListener"},"running":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test is running if it has been started, but has not yet completed execution."]},"$nm":"running"},"TestState":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.test","$nm":"undefined"},{"$pk":"ceylon.test","$nm":"running"},{"$pk":"ceylon.test","$nm":"success"},{"$pk":"ceylon.test","$nm":"failure"},{"$pk":"ceylon.test","$nm":"error"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"string"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Enumerates the possible states of a [[TestUnit]]"]},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"TestState"},"$pkg-shared":"1","failure":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it propgates an [[AssertException]]"]},"$nm":"failure"},"TestListener":{"$mt":"ifc","$an":{"shared":[],"doc":["Contract for things needing to be informed about the execution of tests \nby a [[TestRunner]]."]},"$m":{"testFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testFinished"},"testRunFinished":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"},{"$t":{"$pk":"ceylon.test","$nm":"TestResult"},"$mt":"prm","$nm":"result"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunFinished"},"testRunStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestRunner"},"$mt":"prm","$nm":"runner"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testRunStarted"},"testStarted":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$pk":"ceylon.test","$nm":"TestUnit"},"$mt":"prm","$nm":"test"}]],"$mt":"mthd","$an":{"shared":[],"default":[]},"$nm":"testStarted"}},"$nm":"TestListener"},"fail":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test."]},"$nm":"fail"},"assertEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are not equal according to the given `compare` function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"assertEquals"},"nullSafeString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"obj"}]],"$mt":"mthd","$an":{"doc":["Like `Object.string`, but handles null."]},"$nm":"nullSafeString"},"undefined":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test which has not yet started execution."]},"$nm":"undefined"},"assertFalse":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"condition"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the assertion is true"]},"$nm":"assertFalse"},"AssertComparisonException":{"super":{"$pk":"ceylon.test","$nm":"AssertException"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"expectedValue"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"actualValue"}],"$mt":"cls","$an":{"shared":[],"see":["assertEquals"],"doc":["Subclass of `AssertException` for assertion failures dues to two things \n    not being equal"]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"},"expectedValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"expectedValue"},"actualValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"actualValue"}},"$nm":"AssertComparisonException"},"suite":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"suiteName"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"}],"$pk":"ceylon.language","$nm":"Entry"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"prm","seq":"1","$nm":"tests"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Configure a [[TestRunner]] with the given tests and run it"]},"$nm":"suite"},"TestUnit":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The name of this test."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The test code."]},"$nm":"callable"}],"$mt":"cls","$an":{"shared":[],"doc":["A named piece of test code, and it's state."]},"$at":{"callable":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Callable"},"$mt":"attr","$an":{"shared":[],"doc":["The test code."]},"$nm":"callable"},"elapsedTimeInMilis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The time it took to execute this unit."],"variable":[]},"$nm":"elapsedTimeInMilis"},"exception":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"}]},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The exception thrown by this unit, if any."],"variable":[]},"$nm":"exception"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The name of this test."]},"$nm":"name"},"state":{"$t":{"$pk":"ceylon.test","$nm":"TestState"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The [[state|TestState]] of this unit."],"variable":[]},"$nm":"state"}},"$nm":"TestUnit"},"assertNotEquals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"}]},"$mt":"prm","$def":"1","$nm":"message"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"prm","$pt":"f","$def":"1","$nm":"compare"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given objects are equal according to the given `compare` function."]},"$m":{"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"expected"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"actual"}]],"$mt":"mthd","$nm":"compare"}},"$nm":"assertNotEquals"},"success":{"super":{"$pk":"ceylon.test","$nm":"TestState"},"$mt":"obj","$an":{"shared":[],"doc":["A test fails if it complete normally, (that is, does not throw an exception)."]},"$nm":"success"},"assertNull":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"}]},"$mt":"prm","$nm":"got"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"message"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Fails the test if the given result is not null"]},"$nm":"assertNull"},"AssertException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Thrown when assertion failures"]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"AssertException"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
function AssertException(message$2, $$assertException){
    $init$AssertException();
    if ($$assertException===undefined)$$assertException=new AssertException.$$;
    $$assertException.message$2_=message$2;
    $$$cl1.Exception(message$2,null,$$assertException);
    $$$cl1.defineAttr($$assertException,'message$2',function(){return this.message$2_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertException,d:['ceylon.test','AssertException','$at','message']};});
    return $$assertException;
}
AssertException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Thrown when assertion failures",30)),$$$cl1.shared()];},d:['ceylon.test','AssertException']};};
exports.AssertException=AssertException;
function $init$AssertException(){
    if (AssertException.$$===undefined){
        $$$cl1.initTypeProto(AssertException,'ceylon.test::AssertException',$$$cl1.Exception);
    }
    return AssertException;
}
exports.$init$AssertException=$init$AssertException;
$init$AssertException();
function AssertComparisonException(message$3, expectedValue, actualValue, $$assertComparisonException){
    $init$AssertComparisonException();
    if ($$assertComparisonException===undefined)$$assertComparisonException=new AssertComparisonException.$$;
    $$assertComparisonException.message$3_=message$3;
    AssertException(message$3,$$assertComparisonException);
    $$$cl1.defineAttr($$assertComparisonException,'message$3',function(){return this.message$3_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,d:['ceylon.test','AssertComparisonException','$at','message']};});
    var expectedValue=expectedValue;
    $$$cl1.defineAttr($$assertComparisonException,'expectedValue',function(){return expectedValue;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','expectedValue']};});
    $$assertComparisonException.$prop$getExpectedValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','expectedValue']};}};
    $$assertComparisonException.$prop$getExpectedValue.get=function(){return expectedValue};
    var actualValue=actualValue;
    $$$cl1.defineAttr($$assertComparisonException,'actualValue',function(){return actualValue;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','actualValue']};});
    $$assertComparisonException.$prop$getActualValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:AssertComparisonException,$an:function(){return[$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException','$at','actualValue']};}};
    $$assertComparisonException.$prop$getActualValue.get=function(){return actualValue};
    return $$assertComparisonException;
}
AssertComparisonException.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AssertException},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Subclass of `AssertException` for assertion failures dues to two things \n    not being equal",92)),$$$cl1.see([$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','0.6').findPackage('ceylon.test'),assertEquals)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.test','AssertComparisonException']};};
exports.AssertComparisonException=AssertComparisonException;
function $init$AssertComparisonException(){
    if (AssertComparisonException.$$===undefined){
        $$$cl1.initTypeProto(AssertComparisonException,'ceylon.test::AssertComparisonException',AssertException);
    }
    return AssertComparisonException;
}
exports.$init$AssertComparisonException=$init$AssertComparisonException;
$init$AssertComparisonException();
function fail(message$4){
    if(message$4===undefined){message$4=$$$cl1.String("Failed",6);}
    throw $$$cl1.wrapexc(AssertException(message$4),'17:4-17:34','ceylon/test/assertions.ceylon');
}
exports.fail=fail;
fail.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test.",15)),$$$cl1.shared()];},d:['ceylon.test','fail']};};
function assertTrue(condition$5,message$6){
    if(message$6===undefined){message$6=$$$cl1.String(" expected ",10).plus(condition$5.string);}
    if((!condition$5)){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$6.string]).string),'23:8-23:64','ceylon/test/assertions.ceylon');
    }
}
exports.assertTrue=assertTrue;
assertTrue.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the assertion is false",40)),$$$cl1.shared()];},d:['ceylon.test','assertTrue']};};
function assertFalse(condition$7,message$8){
    if(message$8===undefined){message$8=$$$cl1.String(" expected ",10).plus(condition$7.string);}
    if(condition$7){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),message$8.string]).string),'30:8-30:64','ceylon/test/assertions.ceylon');
    }
}
exports.assertFalse=assertFalse;
assertFalse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'condition',$mt:'prm',$t:{t:$$$cl1.Boolean},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the assertion is true",39)),$$$cl1.shared()];},d:['ceylon.test','assertFalse']};};
function assertNull(got$9,message$10){
    if(message$10===undefined){message$10=$$$cl1.String("",0);}
    var got$11;
    if((got$11=got$9)!==null){
        throw $$$cl1.wrapexc(AssertException($$$cl1.StringBuilder().appendAll([$$$cl1.String("accertion failed: expected null but got ",40),got$11.string]).string),'37:8-37:82','ceylon/test/assertions.ceylon');
    }
}
exports.assertNull=assertNull;
assertNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given result is not null",46)),$$$cl1.shared()];},d:['ceylon.test','assertNull']};};
function assertNotNull(got$12,message$13){
    if(message$13===undefined){message$13=$$$cl1.String("",0);}
    if((!$$$cl1.exists(got$12))){
        throw $$$cl1.wrapexc(AssertException($$$cl1.String("accertion failed: expected not null but got null",48)),'44:8-44:81','ceylon/test/assertions.ceylon');
    }
}
exports.assertNotNull=assertNotNull;
assertNotNull.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'got',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given result is null",42)),$$$cl1.shared()];},d:['ceylon.test','assertNotNull']};};
function assertEquals(expected$14,actual$15,message$16,compare$17){
    if(message$16===undefined){message$16=null;}
    if(compare$17===undefined){compare$17=function (expected$18,actual$19){
        return nullSafeEquals(expected$18,actual$19);
    };}
    if((!compare$17(expected$14,actual$15))){
        var expectedText$20=nullSafeString(expected$14);
        $prop$getExpectedText$20={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','expectedText']};}};
        $prop$getExpectedText$20.get=function(){return expectedText$20};
        var actualText$21=nullSafeString(actual$15);
        $prop$getActualText$21={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertEquals','$at','actualText']};}};
        $prop$getActualText$21.get=function(){return actualText$21};
        var message$22;
        if((message$22=message$16)!==null){
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$20.string,$$$cl1.String(" != ",4),actualText$21.string,$$$cl1.String(": \"",3),message$22.string,$$$cl1.String("\"",1)]).string,expectedText$20,actualText$21),'55:12-55:148','ceylon/test/assertions.ceylon');
        }else {
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$20.string,$$$cl1.String(" != ",4),actualText$21.string]).string,expectedText$20,actualText$21),'58:12-58:129','ceylon/test/assertions.ceylon');
        }
    }
}
exports.assertEquals=assertEquals;
assertEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given objects are not equal according to the given `compare` function.",92)),$$$cl1.shared()];},d:['ceylon.test','assertEquals']};};
function assertNotEquals(expected$23,actual$24,message$25,compare$26){
    if(message$25===undefined){message$25=null;}
    if(compare$26===undefined){compare$26=function (expected$27,actual$28){
        return nullSafeEquals(expected$27,actual$28);
    };}
    if(compare$26(expected$23,actual$24)){
        var expectedText$29=nullSafeString(expected$23);
        $prop$getExpectedText$29={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','expectedText']};}};
        $prop$getExpectedText$29.get=function(){return expectedText$29};
        var actualText$30=nullSafeString(actual$24);
        $prop$getActualText$30={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.test','assertNotEquals','$at','actualText']};}};
        $prop$getActualText$30.get=function(){return actualText$30};
        var message$31;
        if((message$31=message$25)!==null){
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$29.string,$$$cl1.String(" == ",4),actualText$30.string,$$$cl1.String(": \"",3),message$31.string,$$$cl1.String("\"",1)]).string,expectedText$29,actualText$30),'70:12-70:148','ceylon/test/assertions.ceylon');
        }else {
            throw $$$cl1.wrapexc(AssertComparisonException($$$cl1.StringBuilder().appendAll([$$$cl1.String("assertion failed: ",18),expectedText$29.string,$$$cl1.String(" == ",4),actualText$30.string]).string,expectedText$29,actualText$30),'73:12-73:129','ceylon/test/assertions.ceylon');
        }
    }
}
exports.assertNotEquals=assertNotEquals;
assertNotEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'message',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.String}]},$an:function(){return[];}},{$nm:'compare',$mt:'prm',$pt:'f',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Fails the test if the given objects are equal according to the given `compare` function.",88)),$$$cl1.shared()];},d:['ceylon.test','assertNotEquals']};};
function nullSafeEquals(expected$32,actual$33){
    var expected$34;
    if((expected$34=expected$32)!==null){
        var actual$35;
        if((actual$35=actual$33)!==null){
            return expected$34.equals(actual$35);
        }
    }
    return $$$cl1.exists(actual$33).equals($$$cl1.exists(expected$32));
};nullSafeEquals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'expected',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}},{$nm:'actual',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A compare function for `assertEquals()`",39)),$$$cl1.see([$$$cl1.$init$OpenFunction()($$$cl1.getModules$meta().find('ceylon.test','0.6').findPackage('ceylon.test'),assertEquals)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.FunctionDeclaration$meta$declaration}}))];},d:['ceylon.test','nullSafeEquals']};};
function nullSafeString(obj$36){
    var obj$37;
    if((obj$37=obj$36)!==null){
        return obj$37.string;
    }
    return $$$cl1.String("null",4);
};nullSafeString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'obj',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Object}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Like `Object.string`, but handles null.",39))];},d:['ceylon.test','nullSafeString']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("A framework for software testing",32)),$$$cl1.by([$$$cl1.String("Tom Bentley",11),$$$cl1.String("Tomáš Hradec",12)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}))];};
exports.$pkg$ans$ceylon$test=function(){return[$$$cl1.shared()];};
function suite(suiteName$38,tests$39){
    if(tests$39===undefined){tests$39=$$$cl1.getEmpty();}
    var runner$40=TestRunner();
    $prop$getRunner$40={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestRunner},d:['ceylon.test','suite','$at','runner']};}};
    $prop$getRunner$40.get=function(){return runner$40};
    runner$40.addTestListener(PrintingTestListener());
    var it$41 = tests$39.iterator();
    var item$42;while ((item$42=it$41.next())!==$$$cl1.getFinished()){
        var name$43=item$42.key;
        var test$44=item$42.item;
        runner$40.addTest(name$43,$$$cl1.$JsCallable(test$44,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}));
    }
    runner$40.run();
}
exports.suite=suite;
suite.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'suiteName',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'tests',$mt:'prm',seq:1,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Entry,a:{Key:{t:$$$cl1.String},Item:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}}}}}},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Configure a [[TestRunner]] with the given tests and run it",58)),$$$cl1.shared()];},d:['ceylon.test','suite']};};
function TestListener($$testListener){
    function testRunStarted(runner$45){
    }
    $$testListener.testRunStarted=testRunStarted;
    testRunStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunStarted']};};
    function testRunFinished(runner$46,result$47){
    }
    $$testListener.testRunFinished=testRunFinished;
    testRunFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}},{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testRunFinished']};};
    function testStarted(test$48){
    }
    $$testListener.testStarted=testStarted;
    testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testStarted']};};
    function testFinished(test$49){
    }
    $$testListener.testFinished=testFinished;
    testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.test','TestListener','$m','testFinished']};};
}
TestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Contract for things needing to be informed about the execution of tests \nby a [[TestRunner]].",93)),$$$cl1.shared()];},d:['ceylon.test','TestListener']};};
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
    var errAndFail$50=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$$cl1.defineAttr($$printingTestListener,'errAndFail$50',function(){return errAndFail$50;},function(errAndFail$51){return errAndFail$50=errAndFail$51;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:PrintingTestListener,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','PrintingTestListener','$at','errAndFail']};});
    $$printingTestListener.$prop$getErrAndFail$50={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:PrintingTestListener,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','PrintingTestListener','$at','errAndFail']};}};
    $$printingTestListener.$prop$getErrAndFail$50.get=function(){return errAndFail$50};
    function testRunStarted(runner$52){
        $$$cl1.print(banner$53($$$cl1.String("TESTS STARTED",13)));
    }
    $$printingTestListener.testRunStarted=testRunStarted;
    testRunStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testRunStarted']};};
    function testRunFinished(runner$54,result$55){
        if(result$55.runCount.equals((0))){
            $$$cl1.print(banner$53($$$cl1.String("NO TESTS",8)));
            $$$cl1.print($$$cl1.String("There were no tests!",20));
        }else {
            $$$cl1.print(banner$53($$$cl1.String("TESTS RESULT",12)));
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("run:     ",9),result$55.runCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("success: ",9),result$55.successCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("failure: ",9),result$55.failureCount.string]).string);
            $$$cl1.print($$$cl1.StringBuilder().appendAll([$$$cl1.String("error:   ",9),result$55.errorCount.string]).string);
            if(errAndFail$50.size.compare((0)).equals($$$cl1.getLarger())){
                $$$cl1.print($$$cl1.String("errors & failures:",18));
                var it$56 = errAndFail$50.sequence.iterator();
                var errorOrFailure$57;while ((errorOrFailure$57=it$56.next())!==$$$cl1.getFinished()){
                    $$$cl1.print($$$cl1.StringBuilder().appendAll([errorOrFailure$57.state.string,$$$cl1.String(": ",2),errorOrFailure$57.name.string]).string);
                    var ex$58;
                    if((ex$58=errorOrFailure$57.exception)!==null){
                        ex$58.printStackTrace();
                    }
                }
            }
            if(result$55.isSuccess){
                $$$cl1.print(banner$53($$$cl1.String("TESTS SUCCESS",13)));
            }else {
                $$$cl1.print(banner$53($$$cl1.String("TESTS FAILED",12)));
            }
        }
        errAndFail$50=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    }
    $$printingTestListener.testRunFinished=testRunFinished;
    testRunFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'runner',$mt:'prm',$t:{t:TestRunner},$an:function(){return[];}},{$nm:'result',$mt:'prm',$t:{t:TestResult},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testRunFinished']};};
    function testStarted(test$59){
        $$$cl1.print(test$59.name);
    }
    $$printingTestListener.testStarted=testStarted;
    testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testStarted']};};
    function testFinished(test$60){
        
        var case$61=test$60.state;
        if (case$61===getFailure() || case$61===getError()) {
            errAndFail$50.append(test$60);
        }else {}
    }
    $$printingTestListener.testFinished=testFinished;
    testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','PrintingTestListener','$m','testFinished']};};
    function banner$53(text$62){
        var ch$63=$$$cl1.Character(61);
        $prop$getCh$63={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},d:['ceylon.test','PrintingTestListener','$m','banner','$at','ch']};}};
        $prop$getCh$63.get=function(){return ch$63};
        var sb$64=$$$cl1.StringBuilder();
        $prop$getSb$64={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.test','PrintingTestListener','$m','banner','$at','sb']};}};
        $prop$getSb$64.get=function(){return sb$64};
        var totalWith$65=(60);
        $prop$getTotalWith$65={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.test','PrintingTestListener','$m','banner','$at','totalWith']};}};
        $prop$getTotalWith$65.get=function(){return totalWith$65};
        var bannerWidth$66=totalWith$65.minus(text$62.size).minus((2));
        $prop$getBannerWidth$66={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.test','PrintingTestListener','$m','banner','$at','bannerWidth']};}};
        $prop$getBannerWidth$66.get=function(){return bannerWidth$66};
        var it$67 = $$$cl1.Range((0),bannerWidth$66.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
        var ii$68;while ((ii$68=it$67.next())!==$$$cl1.getFinished()){
            sb$64.appendCharacter(ch$63);
        }
        if(bannerWidth$66.remainder((2)).equals((1))){
            sb$64.appendCharacter(ch$63);
        }
        sb$64.append($$$cl1.String(" ",1)).append(text$62).append($$$cl1.String(" ",1));
        var it$69 = $$$cl1.Range((0),bannerWidth$66.divided((2)),{Element:{t:$$$cl1.Integer}}).iterator();
        var ii$70;while ((ii$70=it$69.next())!==$$$cl1.getFinished()){
            sb$64.appendCharacter(ch$63);
        }
        return sb$64.string;
    };banner$53.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'text',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:PrintingTestListener,$an:function(){return[$$$cl1.doc($$$cl1.String("Generates a banner with the given text, like this:\n\n```\n============ banner ============\n```\n",93))];},d:['ceylon.test','PrintingTestListener','$m','banner']};};
    return $$printingTestListener;
}
PrintingTestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TestListener}],$an:function(){return[$$$cl1.doc($$$cl1.String("A [[TestListener]] which prints information about test execution to the \nstandard output.",89)),$$$cl1.shared()];},d:['ceylon.test','PrintingTestListener']};};
exports.PrintingTestListener=PrintingTestListener;
function $init$PrintingTestListener(){
    if (PrintingTestListener.$$===undefined){
        $$$cl1.initTypeProto(PrintingTestListener,'ceylon.test::PrintingTestListener',$$$cl1.Basic,$init$TestListener());
    }
    return PrintingTestListener;
}
exports.$init$PrintingTestListener=$init$PrintingTestListener;
$init$PrintingTestListener();
function TestResult(runner$71, $$testResult){
    $init$TestResult();
    if ($$testResult===undefined)$$testResult=new TestResult.$$;
    $$testResult.runner$71_=runner$71;
    $$$cl1.defineAttr($$testResult,'runner$71',function(){return this.runner$71_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TestRunner},$cont:TestResult,d:['ceylon.test','TestResult','$at','runner']};});
    var runCounter$72=(0);
    $$$cl1.defineAttr($$testResult,'runCounter$72',function(){return runCounter$72;},function(runCounter$73){return runCounter$72=runCounter$73;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','runCounter']};});
    $$testResult.$prop$getRunCounter$72={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','runCounter']};}};
    $$testResult.$prop$getRunCounter$72.get=function(){return runCounter$72};
    var successCounter$74=(0);
    $$$cl1.defineAttr($$testResult,'successCounter$74',function(){return successCounter$74;},function(successCounter$75){return successCounter$74=successCounter$75;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','successCounter']};});
    $$testResult.$prop$getSuccessCounter$74={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','successCounter']};}};
    $$testResult.$prop$getSuccessCounter$74.get=function(){return successCounter$74};
    var failureCounter$76=(0);
    $$$cl1.defineAttr($$testResult,'failureCounter$76',function(){return failureCounter$76;},function(failureCounter$77){return failureCounter$76=failureCounter$77;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','failureCounter']};});
    $$testResult.$prop$getFailureCounter$76={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','failureCounter']};}};
    $$testResult.$prop$getFailureCounter$76.get=function(){return failureCounter$76};
    var errorCounter$78=(0);
    $$$cl1.defineAttr($$testResult,'errorCounter$78',function(){return errorCounter$78;},function(errorCounter$79){return errorCounter$78=errorCounter$79;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','errorCounter']};});
    $$testResult.$prop$getErrorCounter$78={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.variable()];},d:['ceylon.test','TestResult','$at','errorCounter']};}};
    $$testResult.$prop$getErrorCounter$78.get=function(){return errorCounter$78};
    $$$cl1.defineAttr($$testResult,'isSuccess',function(){
        return runCounter$72.equals(successCounter$74);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("Whether all the tests succeeded.",32)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','isSuccess']};});
    $$$cl1.defineAttr($$testResult,'isFailure',function(){
        return (!$$testResult.isSuccess);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("Whether any of the tests didn\'t succeed.\'",41)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','isFailure']};});
    $$$cl1.defineAttr($$testResult,'runCount',function(){
        return runCounter$72;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The numer of tests which were started.",38)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','runCount']};});
    $$$cl1.defineAttr($$testResult,'successCount',function(){
        return successCounter$74;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[succeeded|success]].",48)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','successCount']};});
    $$$cl1.defineAttr($$testResult,'failureCount',function(){
        return failureCounter$76;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[failed|failure]].",45)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','failureCount']};});
    $$$cl1.defineAttr($$testResult,'errorCount',function(){
        return errorCounter$78;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestResult,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of tests which [[errored|error]].",44)),$$$cl1.shared()];},d:['ceylon.test','TestResult','$at','errorCount']};});
    function TestResultListener$80($$testResultListener$80){
        $init$TestResultListener$80();
        if ($$testResultListener$80===undefined)$$testResultListener$80=new TestResultListener$80.$$;
        $$testResultListener$80.$$outer=this;
        TestListener($$testResultListener$80);
        function testStarted(test$81){
            (oldrunCounter$82=runCounter$72,runCounter$72=oldrunCounter$82.successor,oldrunCounter$82);
            var oldrunCounter$82;
        }
        $$testResultListener$80.testStarted=testStarted;
        testStarted.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestResultListener$80,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestResult','$c','TestResultListener','$m','testStarted']};};
        function testFinished(test$83){
            if(test$83.state.equals(getSuccess())){
                (oldsuccessCounter$84=successCounter$74,successCounter$74=oldsuccessCounter$84.successor,oldsuccessCounter$84);
                var oldsuccessCounter$84;
            }else {
                if(test$83.state.equals(getFailure())){
                    (oldfailureCounter$85=failureCounter$76,failureCounter$76=oldfailureCounter$85.successor,oldfailureCounter$85);
                    var oldfailureCounter$85;
                }else {
                    if(test$83.state.equals(getError())){
                        (olderrorCounter$86=errorCounter$78,errorCounter$78=olderrorCounter$86.successor,olderrorCounter$86);
                        var olderrorCounter$86;
                    }
                }
            }
        }
        $$testResultListener$80.testFinished=testFinished;
        testFinished.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestResultListener$80,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestResult','$c','TestResultListener','$m','testFinished']};};
        return $$testResultListener$80;
    }
    TestResultListener$80.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$cont:TestResult,satisfies:[{t:TestListener}],d:['ceylon.test','TestResult','$c','TestResultListener']};};
    function $init$TestResultListener$80(){
        if (TestResultListener$80.$$===undefined){
            $$$cl1.initTypeProto(TestResultListener$80,'ceylon.test::TestResult.TestResultListener',$$$cl1.Basic,$init$TestListener());
            TestResult.TestResultListener$80=TestResultListener$80;
        }
        return TestResultListener$80;
    }
    $$testResult.$init$TestResultListener$80=$init$TestResultListener$80;
    $init$TestResultListener$80();
    runner$71.addTestListener(TestResultListener$80());
    return $$testResult;
}
TestResult.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Holds the results of running the tests held by the given `runner`.",66)),$$$cl1.shared()];},d:['ceylon.test','TestResult']};};
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
    var testList$87=$$$cl1.SequenceBuilder({Element:{t:TestUnit}});
    $$$cl1.defineAttr($$testRunner,'testList$87',function(){return testList$87;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testList']};});
    $$testRunner.$prop$getTestList$87={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestUnit}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testList']};}};
    $$testRunner.$prop$getTestList$87.get=function(){return testList$87};
    var testListenerList$88=$$$cl1.SequenceBuilder({Element:{t:TestListener}});
    $$$cl1.defineAttr($$testRunner,'testListenerList$88',function(){return testListenerList$88;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestListener}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testListenerList']};});
    $$testRunner.$prop$getTestListenerList$88={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.SequenceBuilder,a:{Element:{t:TestListener}}},$cont:TestRunner,d:['ceylon.test','TestRunner','$at','testListenerList']};}};
    $$testRunner.$prop$getTestListenerList$88.get=function(){return testListenerList$88};
    $$$cl1.defineAttr($$testRunner,'tests',function(){
        return testList$87.sequence;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.List,a:{Element:{t:TestUnit}}},$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("The tests held by this instance",31)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$at','tests']};});
    function addTest(name$89,callable$90){
        testList$87.append(TestUnit(name$89,$$$cl1.$JsCallable(callable$90,[],{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}})));
    }
    $$testRunner.addTest=addTest;
    addTest.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'name',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}},{$nm:'callable',$mt:'prm',$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$an:function(){return[];}}],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a test to be run",21)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','addTest']};};
    function addTestListener(testListener$91){
        testListenerList$88.append(testListener$91);
    }
    $$testRunner.addTestListener=addTestListener;
    addTestListener.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'testListener',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a test listener to be notified about the execution of tests",64)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','addTestListener']};};
    function run(){
        var runner$92=$$testRunner;
        $prop$getRunner$92={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestRunner},d:['ceylon.test','TestRunner','$m','run','$at','runner']};}};
        $prop$getRunner$92.get=function(){return runner$92};
        var result$93=TestResult($$testRunner);
        $prop$getResult$93={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestResult},d:['ceylon.test','TestRunner','$m','run','$at','result']};}};
        $prop$getResult$93.get=function(){return result$93};
        fire$94($$$cl1.$JsCallable(function (l$95){
            return l$95.testRunStarted(runner$92);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        var it$96 = testList$87.sequence.iterator();
        var test$97;while ((test$97=it$96.next())!==$$$cl1.getFinished()){
            runTest$98(test$97);
        }
        fire$94($$$cl1.$JsCallable(function (l$99){
            return l$99.testRunFinished(runner$92,result$93);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        return result$93;
    }
    $$testRunner.run=run;
    run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TestResult},$ps:[],$cont:TestRunner,$an:function(){return[$$$cl1.doc($$$cl1.String("Runs the [[tests]]",18)),$$$cl1.shared()];},d:['ceylon.test','TestRunner','$m','run']};};
    function runTest$98(test$100){
        var startTime$101=$$$cl1.getProcess().milliseconds;
        $prop$getStartTime$101={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.test','TestRunner','$m','runTest','$at','startTime']};}};
        $prop$getStartTime$101.get=function(){return startTime$101};
        (test$100.state=getRunning());
        fire$94($$$cl1.$JsCallable(function (l$102){
            return l$102.testStarted(test$100);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
        try{
            test$100.callable();
            (test$100.state=getSuccess());
        }catch(ex$103){
            if (ex$103.getT$name === undefined) ex$103=$$$cl1.NativeException(ex$103);
            if($$$cl1.isOfType(ex$103,{t:AssertException})){
                (test$100.state=getFailure());
                (test$100.exception=ex$103);
            }
            else if($$$cl1.isOfType(ex$103,{t:$$$cl1.Exception})){
                (test$100.state=getError());
                (test$100.exception=ex$103);
            }
            else{throw ex$103}
        }
        finally{
            var finishTime$104=$$$cl1.getProcess().milliseconds;
            $prop$getFinishTime$104={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.test','TestRunner','$m','runTest','$at','finishTime']};}};
            $prop$getFinishTime$104.get=function(){return finishTime$104};
            (test$100.elapsedTimeInMilis=finishTime$104.minus(startTime$101));
        }
        fire$94($$$cl1.$JsCallable(function (l$105){
            return l$105.testFinished(test$100);
        },[{$nm:'l',$mt:'prm',$t:{t:TestListener},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TestListener},Element:{t:TestListener}}},Return:{t:$$$cl1.Anything}}));
    };runTest$98.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'test',$mt:'prm',$t:{t:TestUnit},$an:function(){return[];}}],$cont:TestRunner,d:['ceylon.test','TestRunner','$m','runTest']};};
    function fire$94(fireCallable$106){
        var it$107 = testListenerList$88.sequence.iterator();
        var testListener$108;while ((testListener$108=it$107.next())!==$$$cl1.getFinished()){
            fireCallable$106(testListener$108);
        }
    };fire$94.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'fireCallable',$mt:'prm',$pt:'f',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$cont:TestRunner,d:['ceylon.test','TestRunner','$m','fire']};};
    return $$testRunner;
}
TestRunner.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Capable of running tests, notifying [[TestListener]]s about each test",69)),$$$cl1.shared()];},d:['ceylon.test','TestRunner']};};
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
    if ($$testState===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$testState.string_=string;
    $$$cl1.defineAttr($$testState,'string',function(){return this.string_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestState,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.test','TestState','$at','string']};});
    return $$testState;
}
TestState.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Enumerates the possible states of a [[TestUnit]]",48)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.test','TestState']};};
exports.TestState=TestState;
function $init$TestState(){
    if (TestState.$$===undefined){
        $$$cl1.initTypeProto(TestState,'ceylon.test::TestState',$$$cl1.Basic);
    }
    return TestState;
}
exports.$init$TestState=$init$TestState;
$init$TestState();
function undefined$109(){
    var $$undefined=new undefined$109.$$;
    TestState($$$cl1.String("undefined",9),$$undefined);
    return $$undefined;
}
function $init$undefined$109(){
    if (undefined$109.$$===undefined){
        $$$cl1.initTypeProto(undefined$109,'ceylon.test::undefined',TestState);
    }
    return undefined$109;
}
exports.$init$undefined$109=$init$undefined$109;
$init$undefined$109();
var undefined$110=undefined$109();
var getUndefined=function(){
    return undefined$110;
}
exports.getUndefined=getUndefined;
getUndefined.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:undefined$109},$an:function(){return[$$$cl1.doc($$$cl1.String("A test which has not yet started execution.",43)),$$$cl1.shared()];},d:['ceylon.test','undefined']};};
$prop$getUndefined={get:getUndefined,$$metamodel$$:getUndefined.$$metamodel$$};
exports.$prop$getUndefined=$prop$getUndefined;
function running$111(){
    var $$running=new running$111.$$;
    TestState($$$cl1.String("running",7),$$running);
    return $$running;
}
function $init$running$111(){
    if (running$111.$$===undefined){
        $$$cl1.initTypeProto(running$111,'ceylon.test::running',TestState);
    }
    return running$111;
}
exports.$init$running$111=$init$running$111;
$init$running$111();
var running$112=running$111();
var getRunning=function(){
    return running$112;
}
exports.getRunning=getRunning;
getRunning.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:running$111},$an:function(){return[$$$cl1.doc($$$cl1.String("A test is running if it has been started, but has not yet completed execution.",78)),$$$cl1.shared()];},d:['ceylon.test','running']};};
$prop$getRunning={get:getRunning,$$metamodel$$:getRunning.$$metamodel$$};
exports.$prop$getRunning=$prop$getRunning;
function success$113(){
    var $$success=new success$113.$$;
    TestState($$$cl1.String("success",7),$$success);
    return $$success;
}
function $init$success$113(){
    if (success$113.$$===undefined){
        $$$cl1.initTypeProto(success$113,'ceylon.test::success',TestState);
    }
    return success$113;
}
exports.$init$success$113=$init$success$113;
$init$success$113();
var success$114=success$113();
var getSuccess=function(){
    return success$114;
}
exports.getSuccess=getSuccess;
getSuccess.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:success$113},$an:function(){return[$$$cl1.doc($$$cl1.String("A test fails if it complete normally, (that is, does not throw an exception).",77)),$$$cl1.shared()];},d:['ceylon.test','success']};};
$prop$getSuccess={get:getSuccess,$$metamodel$$:getSuccess.$$metamodel$$};
exports.$prop$getSuccess=$prop$getSuccess;
function failure$115(){
    var $$failure=new failure$115.$$;
    TestState($$$cl1.String("failure",7),$$failure);
    return $$failure;
}
function $init$failure$115(){
    if (failure$115.$$===undefined){
        $$$cl1.initTypeProto(failure$115,'ceylon.test::failure',TestState);
    }
    return failure$115;
}
exports.$init$failure$115=$init$failure$115;
$init$failure$115();
var failure$116=failure$115();
var getFailure=function(){
    return failure$116;
}
exports.getFailure=getFailure;
getFailure.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:failure$115},$an:function(){return[$$$cl1.doc($$$cl1.String("A test fails if it propgates an [[AssertException]]",51)),$$$cl1.shared()];},d:['ceylon.test','failure']};};
$prop$getFailure={get:getFailure,$$metamodel$$:getFailure.$$metamodel$$};
exports.$prop$getFailure=$prop$getFailure;
function error$117(){
    var $$error=new error$117.$$;
    TestState($$$cl1.String("error",5),$$error);
    return $$error;
}
function $init$error$117(){
    if (error$117.$$===undefined){
        $$$cl1.initTypeProto(error$117,'ceylon.test::error',TestState);
    }
    return error$117;
}
exports.$init$error$117=$init$error$117;
$init$error$117();
var error$118=error$117();
var getError=function(){
    return error$118;
}
exports.getError=getError;
getError.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:error$117},$an:function(){return[$$$cl1.doc($$$cl1.String("A test is in error if it propgates any exception which is not an [[AssertException]]",84)),$$$cl1.shared()];},d:['ceylon.test','error']};};
$prop$getError={get:getError,$$metamodel$$:getError.$$metamodel$$};
exports.$prop$getError=$prop$getError;
function TestUnit(name, callable, $$testUnit){
    $init$TestUnit();
    if ($$testUnit===undefined)$$testUnit=new TestUnit.$$;
    var name=name;
    $$$cl1.defineAttr($$testUnit,'name',function(){return name;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The name of this test.",22)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','name']};});
    $$testUnit.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The name of this test.",22)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','name']};}};
    $$testUnit.$prop$getName.get=function(){return name};
    var callable=callable;
    $$$cl1.defineAttr($$testUnit,'callable',function(){return callable;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The test code.",14)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','callable']};});
    $$testUnit.$prop$getCallable={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Callable,a:{Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Anything}}},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The test code.",14)),$$$cl1.shared()];},d:['ceylon.test','TestUnit','$at','callable']};}};
    $$testUnit.$prop$getCallable.get=function(){return callable};
    var state=getUndefined();
    $$$cl1.defineAttr($$testUnit,'state',function(){return state;},function(state$119){return state=state$119;},function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The [[state|TestState]] of this unit.",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','state']};});
    $$testUnit.$prop$getState={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TestState},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The [[state|TestState]] of this unit.",37)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','state']};}};
    $$testUnit.$prop$getState.get=function(){return state};
    var exception=null;
    $$$cl1.defineAttr($$testUnit,'exception',function(){return exception;},function(exception$120){return exception=exception$120;},function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The exception thrown by this unit, if any.",42)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','exception']};});
    $$testUnit.$prop$getException={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$cl1.Exception}]},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The exception thrown by this unit, if any.",42)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','exception']};}};
    $$testUnit.$prop$getException.get=function(){return exception};
    var elapsedTimeInMilis=(-(1));
    $$$cl1.defineAttr($$testUnit,'elapsedTimeInMilis',function(){return elapsedTimeInMilis;},function(elapsedTimeInMilis$121){return elapsedTimeInMilis=elapsedTimeInMilis$121;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The time it took to execute this unit.",38)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','elapsedTimeInMilis']};});
    $$testUnit.$prop$getElapsedTimeInMilis={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TestUnit,$an:function(){return[$$$cl1.doc($$$cl1.String("The time it took to execute this unit.",38)),$$$cl1.shared(),$$$cl1.variable()];},d:['ceylon.test','TestUnit','$at','elapsedTimeInMilis']};}};
    $$testUnit.$prop$getElapsedTimeInMilis.get=function(){return elapsedTimeInMilis};
    return $$testUnit;
}
TestUnit.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A named piece of test code, and it\'s state.",43)),$$$cl1.shared()];},d:['ceylon.test','TestUnit']};};
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
