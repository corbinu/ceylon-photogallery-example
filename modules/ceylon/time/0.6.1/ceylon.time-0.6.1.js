(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"ceylon.time","ceylon.time.internal.math":{"floorDiv":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns floored division of the two integers."]},"$nm":"floorDiv"},"$pkg-shared":"1","floor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the largest integer less than or equal to _x_."]},"$nm":"floor"},"round":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"f"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns nearest integer to x"]},"$nm":"round"},"adjustedMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an _adjusted remainder_ of the two integers.\n\n   value moduli = [for (x in 4..-4) amod(x, 4)];\n   assert( moduli == [4, 3, 2, 1, 4, 3, 2, 1, 4] );\n"]},"$nm":"adjustedMod"},"floorMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the floor remainder (modulus) of the two integers.\n\n    value moduli = [for (x in 4..-4) mod(x, 4)] \n    assert( moduli == [0, 3, 2, 1, 0, 3, 2, 1, 0] );\n"]},"$nm":"floorMod"}},"$mod-version":"0.6.1","ceylon.time.timezone":{"Input":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.timezone","$nm":"Chunk"},{"$pk":"ceylon.time.timezone","$nm":"EOF"}],"$mt":"cls","$an":{"abstract":[],"doc":["Represents each elelment or the end of the parser"]},"$nm":"Input"},"OffsetTimeZone":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["The value that represents this constant offset."]},"$nm":"offsetMilliseconds"}],"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}],"$mt":"cls","$an":{"shared":[],"doc":["A simple time zone with a constant offset from UTC."]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type and offset milliseconds."],"actual":[]},"$nm":"equals"},"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Always returns a constant offset."],"actual":[]},"$nm":"offset"}},"$at":{"offsetMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"doc":["The value that represents this constant offset."]},"$nm":"offsetMilliseconds"}},"$nm":"OffsetTimeZone"},"parseTimeZone":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},{"$pk":"ceylon.time.timezone","$nm":"ParserError"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n  &plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`"]},"$nm":"parseTimeZone"},"ZoneDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"DateTimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["Instant of time in a specific time zone."]},"$at":{"timeZone":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Time zone information of this date and time value."]},"$nm":"timeZone"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Instant used as base."]},"$nm":"instant"}},"$nm":"ZoneDateTime"},"Hours":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$nm":"digits"}],"$mt":"cls","$an":{"doc":["Represents the hours, the accepted pattern is two digit hours"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"},"digits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"digits"}},"$nm":"Hours"},"timeZone":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"doc":["This constant represents common operations for time zone.\n\nAt same time it hold objects references for most commons used time zones around world.\n\nExamples:\n* UTC\n* System (current machine offset)"]},"$m":{"offset":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Represents fixed timeZone created based on given values."]},"$nm":"offset"},"parse":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},{"$pk":"ceylon.time.timezone","$nm":"ParserError"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n&plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`.\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`."]},"$nm":"parse"}},"$nm":"timeZone","$o":{"system":{"super":{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},"$mt":"obj","$an":{"shared":[],"doc":["Represents machine offset based on current VM."]},"$nm":"system"},"utc":{"super":{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},"$mt":"obj","$an":{"shared":[],"doc":["Represents Coordinated Universal Time."]},"$nm":"utc"}}},"characterToInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"digit"}]],"$mt":"mthd","$nm":"characterToInteger"},"Error":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"message"}],"$mt":"cls","$an":{"doc":["Represents the parser unsuccessfully finished and hold the error message"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"message"}},"$nm":"Error"},"$pkg-shared":"1","Final":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"}],"$mt":"cls","$an":{"doc":["Rrepresents the parser successfully finished"]},"$m":{"evaluate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[]},"$nm":"evaluate"},"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"}},"$nm":"Final"},"Colon":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}],"$mt":"cls","$an":{"doc":["Represents the colon as some patterns accepts for example 'hh:mm'"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"}},"$nm":"Colon"},"State":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.timezone","$nm":"Initial"},{"$pk":"ceylon.time.timezone","$nm":"Zulu"},{"$pk":"ceylon.time.timezone","$nm":"Sign"},{"$pk":"ceylon.time.timezone","$nm":"Hours"},{"$pk":"ceylon.time.timezone","$nm":"Minutes"},{"$pk":"ceylon.time.timezone","$nm":"Final"},{"$pk":"ceylon.time.timezone","$nm":"Error"},{"$pk":"ceylon.time.timezone","$nm":"Colon"}],"$mt":"cls","$an":{"abstract":[],"doc":["All states avaiable for the parser"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Each state is responsible to check if the next state is valid and call it"]},"$nm":"next"}},"$nm":"State"},"Sign":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"}],"$mt":"cls","$an":{"doc":["Represents +1 case the time is ahead of UTC, otherwise its -1"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"}},"$nm":"Sign"},"EOF":{"abstract":"1","super":{"$pk":"ceylon.time.timezone","$nm":"Input"},"of":[{"$pk":"ceylon.time.timezone","$nm":"eof"}],"$mt":"cls","$an":{"abstract":[],"doc":["Represents the end of the parser"]},"$nm":"EOF"},"zoneDateTime":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$nm":"timeZone"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millis"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a [[ZoneDateTime]] based on the specified [[TimeZone]], year, month, day of month, hour, minute, second and millisecond values."]},"$nm":"zoneDateTime"},"ParserError":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the problem that occured while parsing. It can be recovered from _message_ field"]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"}},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"message"}},"$nm":"ParserError"},"TimeZone":{"of":[{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},{"$pk":"ceylon.time.timezone","$nm":"RuleBasedTimezone"}],"$mt":"ifc","$an":{"shared":[],"doc":["The interface representing a timezone."]},"$m":{"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns offset in milliseconds of the specified instant according to this time zone."]},"$nm":"offset"}},"$nm":"TimeZone"},"eof":{"super":{"$pk":"ceylon.time.timezone","$nm":"EOF"},"$mt":"obj","$an":{"doc":["Singleton implementation to represent the end of the parser"]},"$nm":"eof"},"Minutes":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$nm":"digits"}],"$mt":"cls","$an":{"doc":["Represents the minutes, the accepted pattern is two digit minutes"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"},"digits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"digits"}},"$nm":"Minutes"},"Initial":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$mt":"cls","$an":{"doc":["Represents the init of the parser"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"Initial"},"RuleBasedTimezone":{"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}],"$mt":"ifc","$an":{"shared":[],"doc":["This represents offsets based on daylight saving time."]},"$nm":"RuleBasedTimezone"},"Zulu":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$mt":"cls","$an":{"doc":["Represents the UTC"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"Zulu"},"Chunk":{"super":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"character"}],"$mt":"cls","$an":{"doc":["Represents each character"]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"}},"$at":{"character":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[]},"$nm":"character"}},"$nm":"Chunk"}},"ceylon.time.internal":{"$pkg-shared":"1","GregorianZonedDateTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["All operations of this implementations is based in this Instant."],"actual":[]},"$nm":"instant"},{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["TimeZone to be applied in this implementation."],"actual":[]},"$nm":"timeZone"}],"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of gregorian calendar thats makes use of a [[TimeZone]] for it´s operations.\n\nThis means that making some operations like _plusDays_ takes into \naccount the result Instant generated to reapply all the rules of the current TimeZone."]},"$m":{"withMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note 01:** It should be a valid _millisecond_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusDays"},"withMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _minute_ value set to the specified value.\n\n**Note 01:** It should be a valid _minute_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMinutes"},"withMonth":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMonth"},"minusHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusHours"},"adjust":{"$t":{"$pk":"ceylon.time.internal","$nm":"GregorianZonedDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"resolved"}]],"$mt":"mthd","$an":{"doc":["Fix [[DateTime]] zone absence."]},"$nm":"adjust"},"plusSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _second_ value set to the specified value.\n\n**Note 01:** It should be a valid _second_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusMinutes"},"withDay":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _day of month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withDay"},"minusSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusSeconds"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Comparing [[ZoneDateTime]] is based on [[Instant]] and should not be \ncompared as it´s human representation as they are adjusted based on geographic and regional (DST) \nlocations and do not represent a comparison correct."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusDays"},"minusMonths":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusWeeks"},"plusMonths":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this _zoned date and time_ and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusMilliseconds"},"plusWeeks":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusWeeks"},"plusYears":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _hour_ value set to the specified value.\n\n**Note 01:** It should be a valid _hour_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withHours"},"withYear":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _year_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withYear"}},"$at":{"successor":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"timeZone":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"attr","$an":{"shared":[],"doc":["TimeZone to be applied in this implementation."],"actual":[]},"$nm":"timeZone"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`, if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns [[Date]] representation of current zoned _date and time_."],"actual":[]},"$nm":"date"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"},"predecessor":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns [[Time]] representation of current zoned _date and time_."],"actual":[]},"$nm":"time"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Time_offsets_from_UTC"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _milliseconds of epoch_ as it enumerable value."],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$nm":"weekOfYear"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfEra"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$an":{"shared":[],"doc":["All operations of this implementations is based in this Instant."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"}},"$nm":"GregorianZonedDateTime"},"AbstractDate":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology."],"actual":[]},"$nm":"dayOfEra"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Date"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Common behaviors for _Date_ types."]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Dates from same chronology can be considered equal if they have same _day of era_."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Dates from same chronology can be compared if they have same _day of era_."],"actual":[]},"$nm":"compare"}},"$at":{"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology."],"actual":[]},"$nm":"dayOfEra"}},"$nm":"AbstractDate"},"overlap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns the inclusive overlap between two ordinal ranges.\n\nThe range of the overlap will be returned in the natural order of the values regardless of their original order in input tuples.\n\nExamples:\n\n    assert(overlap([1, 3], [2, 4]) == [2, 3]);\n    assert(overlap([4, 2], [1, 3]) == [2, 3]);\n    assert(is Empty o = overlap([1, 2], [3, 4]));\n"]},"$nm":"overlap"},"TimeOfDay":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Time"}],"$mt":"cls","$an":{"shared":[],"doc":["Basic implementation of [[Time]] interface, representing an abstract \n_time of day_ such as _10am_ or _3.20pm_ with a precision of milliseconds."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified time period to this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"plus"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _milliseconds_ value.\n\n**Note:** It should be a valid _millisecond_."],"actual":[]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of seconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusSeconds"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified time period from this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\n\nIf this time is after the given time then return zero period."],"actual":[]},"$nm":"periodTo"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return _true_ if it have same type and milliseconds of day."],"actual":[]},"$nm":"equals"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _minutes_ value.\n\n**Note:** It should be a valid _minute_."],"actual":[]},"$nm":"withMinutes"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare two instances of _time of day_."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of minutes from this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"minusMinutes"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of hours to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusHours"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\n\nIf this time is before the given time then return zero period."],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of hours from this time of day \nand returns the resul as new time of day."],"actual":[]},"$nm":"minusHours"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[TimeRange]] between this and given Time."],"actual":[]},"$nm":"rangeTo"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of seconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusSeconds"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of milliseconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusMilliseconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of milliseconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusMilliseconds"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _hours_ value.\n\n**Note:** It should be a valid _hour_."],"actual":[]},"$nm":"withHours"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _seconds_ value.\n\n**Note:** It should be a valid _second_."],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of minutes to this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"plusMinutes"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond."],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond."],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Times"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _milliseconds of day_ as it enumerable value"],"actual":[]},"$nm":"integerValue"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"}},"$nm":"TimeOfDay"},"GregorianDate":{"super":{"$pk":"ceylon.time.internal","$nm":"AbstractDate"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfEra"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified date period to this date and returns the new [[Date]]."],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified date period from this date and returns the new [[Date]]."],"actual":[]},"$nm":"minus"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days to this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\n\nIf this date is after the given date then return negative period."],"actual":[]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] value."],"actual":[]},"$nm":"at"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior."]},"$nm":"addPeriod"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n"],"actual":[]},"$nm":"minusYears"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the month set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withMonth"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"minusDays"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\n\nIf this date is before the given date then return negative period."],"actual":[]},"$nm":"periodFrom"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"minusWeeks"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateRange]] between this and given Date."],"actual":[]},"$nm":"rangeTo"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks to this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"plusWeeks"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusYears"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the specified year value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withYear"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withDay"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day."],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day."],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this date.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Dates"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of era_ as it enumerable value"],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$m":{"normalizeLastWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeLastWeek"},"normalizeFirstWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeFirstWeek"}},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"dayOfEra"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`, if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"}},"$nm":"GregorianDate"},"intersect":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"start"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"end"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"otherStart"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"otherEnd"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns if two ranges has intersection."]},"$nm":"intersect"},"gregorianDate":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Year number of the date"]},"$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$hdn":"1","$mt":"prm","$an":{"doc":["Month of the year"]},"$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Day of month"]},"$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian calendar date according to the specified year, month and date values."]},"$nm":"gregorianDate"},"leftPad":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"padding"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return padded value of the number as a string."]},"$nm":"leftPad"},"gap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns a tuple representing an exclusive gap between two disjoint ranges of ordinal values.\n\nValues in the tuple are returned always in their natural order regardless of their original ordering in the input tuples. \nIf input ranges are overlapping, this function will return an empty value.\n\nExamples:\n\n    assert(gap([1, 2], [5, 6]) == [3, 4]);\n    assert(gap([6, 5], [1, 2]) == [3, 4]);\n    assert(is Empty g = gap([1, 3], [2, 4]));\n"]},"$nm":"gap"},"GregorianDateTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Returns [[Date]] representation of current _date and time_."],"actual":[]},"$nm":"date"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Returns [[Time]] representation of current _date and time_."],"actual":[]},"$nm":"time"}],"satisfies":[{"$pk":"ceylon.time","$nm":"DateTime"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note:** It should be a valid _millisecond_.\n"],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days to this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is after the given [[DateTime]] then return negative period."],"actual":[]},"$nm":"periodTo"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _minutes_ value set to the specified value.\n\n**Note:** It should be a valid _minute_.\n"],"actual":[]},"$nm":"withMinutes"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior."]},"$nm":"addPeriod"},"fromTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millis"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"signal"}]],"$mt":"mthd","$an":{"doc":["Calculates the based in given time, consuming it for each day if necessary."]},"$nm":"fromTime"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withMonth"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is before the given [[DateTime]] then return negative period."],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of hours from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of seconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of milliseconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _seconds_ value set to the specified value.\n\n**Note:** It should be a valid _second_.\n"],"actual":[]},"$nm":"withSeconds"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["[[DateTime]] does not know anything about [[TimeZone]] and it should be supplied to\ncreate a [[Instant]]."],"actual":[]},"$nm":"instant"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of minutes from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusMinutes"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withDay"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified date period to this date and returns the new [[DateTime]]."],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified date period from this date and returns the new [[DateTime]]."],"actual":[]},"$nm":"minus"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of seconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type, date and time."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Comparing [[DateTime]] is based on [[Date]] and [[Time]] comparision."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of minutes from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n"],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of hours from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusDays"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusWeeks"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateTimeRange]] between this and given DateTime."],"actual":[]},"$nm":"rangeTo"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks to this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusWeeks"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of milliseconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _hours_ value set to the specified value.\n\n**Note:** It should be a valid _hour_.\n"],"actual":[]},"$nm":"withHours"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _year_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withYear"}},"$at":{"successor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n"],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true` if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["Returns [[Date]] representation of current _date and time_."],"actual":[]},"$nm":"date"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"},"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n"],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["Returns [[Time]] representation of current _date and time_."],"actual":[]},"$nm":"time"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _Date and Time of day_.\n\nhttps:\/\/en.wikipedia.org\/wiki\/ISO_8601#Combined_date_and_time_representations"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone."],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfEra"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$nm":"weekOfYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"}},"$nm":"GregorianDateTime"}},"ceylon.time.base":{"monday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Monday_ is the day of the week that follows Sunday and preceeds Tuesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"monday"},"ReadableTime":{"$mt":"ifc","$an":{"shared":[],"see":["Time","DateTime","ZoneDateTime"],"doc":["Common interface capable of representing _time of day_."]},"$at":{"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since the beginning of the day."]},"$nm":"millisecondsOfDay"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since last full hour."]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since last minute."]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Hour of day."]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since the beginning of the day."]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since last second."]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since the beginning of the day."]},"$nm":"minutesOfDay"}},"$nm":"ReadableTime"},"Month":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"january"},{"$pk":"ceylon.time.base","$nm":"february"},{"$pk":"ceylon.time.base","$nm":"march"},{"$pk":"ceylon.time.base","$nm":"april"},{"$pk":"ceylon.time.base","$nm":"may"},{"$pk":"ceylon.time.base","$nm":"june"},{"$pk":"ceylon.time.base","$nm":"july"},{"$pk":"ceylon.time.base","$nm":"august"},{"$pk":"ceylon.time.base","$nm":"september"},{"$pk":"ceylon.time.base","$nm":"october"},{"$pk":"ceylon.time.base","$nm":"november"},{"$pk":"ceylon.time.base","$nm":"december"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12"]},"$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A month in a Gregorian or Julian calendar system."]},"$m":{"fisrtDayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns the _day of year_ value for first of this month."]},"$nm":"fisrtDayOfYear"},"minusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months before this month."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months after this month."]},"$nm":"plusMonths"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares ordinal numbers of two instances of `Month`."],"actual":[]},"$nm":"compare"},"add":{"$t":{"$pk":"ceylon.time.base","$nm":"Overflow"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"numberOfMonths"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this month and returns the result of \nas new month value and number of times the operation overflowed."]},"$nm":"add"},"numberOfDays":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns number of days in this month."]},"$nm":"numberOfDays"}},"$c":{"Overflow":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["New month value."]},"$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of years overflowed by calculation."]},"$nm":"years"}],"$mt":"cls","$an":{"shared":[],"doc":["A result of adding or subtracting a month to another amount."]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"doc":["New month value."]},"$nm":"month"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of years overflowed by calculation."]},"$nm":"years"}},"$nm":"Overflow"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12"]},"$nm":"integer"}},"$nm":"Month"},"parseWeekday":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Parses a string into a DayOfWeek."]},"$nm":"parseWeekday"},"DayOfWeek":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"monday"},{"$pk":"ceylon.time.base","$nm":"tuesday"},{"$pk":"ceylon.time.base","$nm":"wednesday"},{"$pk":"ceylon.time.base","$nm":"thursday"},{"$pk":"ceylon.time.base","$nm":"friday"},{"$pk":"ceylon.time.base","$nm":"saturday"},{"$pk":"ceylon.time.base","$nm":"sunday"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Numeric value of the DayOfWeek."]},"$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A day of week, such as 'tuesday'."]},"$m":{"plusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes specified number of days after this DayOfWeek."]},"$nm":"plusDays"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare days of week."],"actual":[]},"$nm":"compare"},"minusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes number of days before this DayOfWeek."]},"$nm":"minusDays"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Numeric value of the DayOfWeek."]},"$nm":"integer"}},"$nm":"DayOfWeek"},"$pkg-shared":"1","UnitOfHour":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfHour"},"march":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["March. The third month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"march"},"ReadableInstant":{"$mt":"ifc","$an":{"shared":[],"see":["Instant"],"doc":["An abstraction for data that can represent an instant of time."]},"$at":{"millisecondsOfEpoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Internal value of an instant as a number of milliseconds \nsince beginning of an _epoch_ (january 1st 1970 UTC)"]},"$nm":"millisecondsOfEpoch"}},"$nm":"ReadableInstant"},"january":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["January. The first month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"january"},"saturday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Saturday_ is the day of the week that follows Friday and preceeds Sunday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"saturday"},"july":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["July. The seventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"july"},"UnitOfMonth":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMonth"},"friday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Friday_ is the day of the week that follows Thursday and preceeds Saturday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"friday"},"milliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _millisecond_ time unit."]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Milliseconds per minute."]},"$nm":"perMinute"},"perSecond":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds per second."]},"$nm":"perSecond"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per hour."]},"$nm":"perHour"}},"$nm":"milliseconds"},"ReadableDuration":{"$mt":"ifc","$an":{"shared":[],"see":["Duration"],"doc":["An abstraction of data representing a specific duration of time.\n\nA duration is a fixed delta of time between two instants \nmeasured in number of milliseconds."]},"$at":{"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds."]},"$nm":"milliseconds"}},"$nm":"ReadableDuration"},"november":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["November. The eleventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"november"},"DateBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for date types."]},"$m":{"minusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks subtracted."]},"$nm":"minusWeeks"},"plusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"plusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks added."]},"$nm":"plusWeeks"},"minusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withMonth":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified month of year."]},"$nm":"withMonth"},"withYear":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified year."]},"$nm":"withYear"},"minusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"withDay":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDay"}},"$nm":"DateBehavior","$st":"Element"},"hours":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _hour_ time unit."]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of hours per day."]},"$nm":"perDay"}},"$nm":"hours"},"thursday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Thursday_ is the day of the week that follows Wednesday and preceeds Friday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"thursday"},"monthOf":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year specified by the input argument.\n\nIf input is an Integer, this method returns a month according to the integer \nvalue of the [[MonthOfYear]] (i.e. 1=[[january]], 2=[[february]], ... 12=[[december]])\nAny invalid values will throw an exception.\n\nIf the imput value is a [[MonthOfYear]], the input value is returned as is."]},"$nm":"monthOf"},"PeriodBehavior":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"}],"$nm":"Self"}],"$an":{"shared":[],"doc":["Common behavior of objects representing a period."]},"$m":{"normalized":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date-time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and nanoseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\n\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."]},"$nm":"normalized"},"withMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."]},"$nm":"withMilliseconds"},"withYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of years."]},"$nm":"withYears"},"minusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"plusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"withDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"daysOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDays"},"withMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"minusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"},"minusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"minusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of months."]},"$nm":"withMonths"},"minusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."]},"$nm":"minusMilliseconds"},"plusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"}},"$nm":"PeriodBehavior","$st":"Self"},"UnitOfYear":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfYear"},"ReadableTimePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of _hours_, _minutes_, _seconds_ and _milliseconds_."]},"$at":{"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of minutes"]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of seconds"]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of hours"]},"$nm":"hours"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of milliseconds"]},"$nm":"milliseconds"}},"$nm":"ReadableTimePeriod"},"DateTimeBehavior":{"of":[{"$nm":"Element"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"}],"$nm":"Element"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"variance":"out","$nm":"DateType"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"variance":"out","$nm":"TimeType"}],"$an":{"shared":[],"doc":["Common behavior of the [[DateTime]] types."]},"$at":{"time":{"$t":{"$nm":"TimeType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Time portion of this [[DateTime]] value."]},"$nm":"time"},"date":{"$t":{"$nm":"DateType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Date portion of this [[DateTime]] value."]},"$nm":"date"}},"$nm":"DateTimeBehavior","$st":"Element"},"december":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["December. The twelveth (last) month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"december"},"february":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["February. The second month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"february"},"sunday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Sunday_ is the day of the week that follows Saturday and preceeds Monday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"sunday"},"ReadablePeriod":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"}],"$mt":"ifc","$an":{"shared":[],"doc":["A Period of time represented as number of _years_, _months_, _days_, \n_hours_, _minutes_, _seconds_ and\/or _milliseconds_."]},"$at":{"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_years_, _months_ and _days_."]},"$nm":"dateOnly"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_hours_, _minutes_, _seconds_ and _milliseconds_."]},"$nm":"timeOnly"}},"$nm":"ReadablePeriod"},"firstDayOfMonth":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"doc":["Table of _day of year_ values for the first day of each month."]},"$nm":"firstDayOfMonth"},"years":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _year_ unit."]},"$at":{"minimum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The minimum supported year for instances of `Date`, -283_457."]},"$nm":"minimum"},"maximum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The maximum supported year for instances of `Date`, 999,999,999."]},"$nm":"maximum"}},"$nm":"years"},"ReadableDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$mt":"ifc","$an":{"shared":[],"doc":["Common interface that can represent particular time of day on a specific date."]},"$nm":"ReadableDateTime"},"UnitOfTime":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"},{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"},{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"},{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Time"]},"$nm":"UnitOfTime"},"june":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["June. The sixth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"june"},"UnitOfDate":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"},{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"},{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Date"]},"$nm":"UnitOfDate"},"weekdays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["List of all available weekdays."]},"$nm":"weekdays"},"ReadableDate":{"$mt":"ifc","$an":{"shared":[],"see":["Date","Time","DateTime","ZoneDateTime"],"doc":["A common interface of all date like objects.\n\nThis interface is common to all data types that\neither partially or fully represent information \nthat can be interpreted as _date_."]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Month of the year value of the date."]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of calendar days since ERA."]},"$nm":"dayOfEra"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the week of the date."]},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The year of the date."]},"$nm":"year"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the year of the date is a leap year."]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of month value of the date."]},"$nm":"day"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the day in year."]},"$nm":"dayOfYear"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of the week."]},"$nm":"dayOfWeek"}},"$nm":"ReadableDate"},"UnitOfMillisecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMillisecond"},"august":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["August. The eighth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"august"},"ReadableDatePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of _days_, _months_ and _years_."]},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of months."]},"$nm":"months"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of days."]},"$nm":"days"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of years."]},"$nm":"years"}},"$nm":"ReadableDatePeriod"},"UnitOfDay":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfDay"},"tuesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Tuesday_ is the day of the week that follows Monday and preceeds Wednesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"tuesday"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"DayOfWeek"}]},"$mt":"prm","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns [[DayOfWeek]] from the input."]},"$nm":"dayOfWeek"},"september":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["September. The nineth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"september"},"may":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["May. The fifth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"may"},"Range":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Element"},{"$nm":"StepBy"}],"$an":{"shared":[],"doc":["An interface to represent a Range between same kinds of _Date_ or _DateTime_ or _Time_."]},"$m":{"overlap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"stepBy":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$ps":[[{"$t":{"$nm":"StepBy"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Define how this Range will get next or previous element while iterating."]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"]},"$nm":"gap"}},"$at":{"to":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."]},"$nm":"duration"},"from":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."]},"$nm":"step"}},"$nm":"Range"},"minutes":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _minute_ time unit."]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of minutes per hour."]},"$nm":"perHour"}},"$nm":"minutes"},"april":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["April. The fourth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"april"},"WeekdayParseError":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["An exception that is thrown when parsing a DayOfWeek fails."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"WeekdayParseError"},"UnitOfSecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfSecond"},"months":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of months."]},"$at":{"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of months per year."]},"$nm":"perYear"},"all":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["Ordered list of all months of Gregorian and Julian calendar system from January to December."]},"$nm":"all"}},"$nm":"months"},"wednesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Wednesday_ is the day of the week that follows Tuesday and preceeds Thursday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"wednesday"},"days":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _day_ unit."]},"$m":{"toMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days from the start of the year to the first of the month."]},"$nm":"toMonth"},"fromMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millisecondsIn"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns number of days from the number of milliseconds."]},"$nm":"fromMilliseconds"},"perMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days per month."]},"$nm":"perMonth"}},"$at":{"inFourYears":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days in four years."]},"$nm":"inFourYears"},"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of days per normal year."]},"$nm":"perYear"},"ofWeek":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"ofWeek"},"perCentury":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of of per century (100 years)."]},"$nm":"perCentury"},"perFourCenturies":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perFourCenturies"},"perLeapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of days per leap year."]},"$nm":"perLeapYear"},"perCycle":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perCycle"},"perWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days per week (7)."]},"$nm":"perWeek"}},"$nm":"days"},"seconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _second_ time unit."]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of seconds per minute."]},"$nm":"perMinute"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per hour."]},"$nm":"perHour"}},"$nm":"seconds"},"october":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["October. The tenth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"october"},"UnitOfMinute":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMinute"},"TimeBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for the types that represent time."]},"$m":{"minusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"withMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"plusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."]},"$nm":"minusMilliseconds"},"minusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"plusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."]},"$nm":"plusMilliseconds"},"withHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours.\n\nResult must be a valid time of day."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"},"plusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"}},"$nm":"TimeBehavior","$st":"Element"}},"ceylon.time.chronology":{"$pkg-shared":"1","LeapYear":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Fields"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"}],"$nm":"Self"},{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["An interface for calendar system that defines leap year rules.\n\n*Note:* This interface is meant to convey a Calendar that has some sort of leap year syntax."]},"$m":{"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns true if the specified year is a leap year according to the leap year rules of the given chronology."]},"$nm":"leapYear"}},"$nm":"LeapYear","$st":"Self"},"unixTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _Unix time_."]},"$m":{"fixedFromTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a _fixed date_ from the _unix time_ value."]},"$nm":"fixedFromTime"},"timeOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _time of day_ in milliseconds for the specified _unix time_ value."]},"$nm":"timeOfDay"},"timeFromFixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return milliseconds elapsed from 1970-01-01 00:00:00."]},"$nm":"timeFromFixed"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Fixed date value of the _Unix time_ epoch (1970-01-01)."]},"$nm":"epoch"}},"$nm":"unixTime"},"gregorian":{"super":{"$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},"$mt":"obj","$an":{"shared":[],"doc":["Represents the implementation of all calculations for\nthe rules based on Gregorian Calendar."]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return the _day of era_ from a given date."],"actual":[]},"$nm":"fixedFrom"},"yearEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the last day of the gregorian year."]},"$nm":"yearEnd"},"dayOfWeekFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _day of week_ value for the specified fixed date value."]},"$nm":"dayOfWeekFrom"},"monthFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Retunrs the month number of the gregorian calendar from the fixed date value."]},"$nm":"monthFrom"},"newYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the first day of the gregorian year."]},"$nm":"newYear"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Assert that specified date has it conjunction of year, month and day as valid gregorian values."],"actual":[]},"$nm":"checkDate"},"yearFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian year number of the fixed date value."]},"$nm":"yearFrom"},"dayFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns day of month value of the fixed date value."]},"$nm":"dayFrom"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gregorian leap year rule states that every fourth year\nis a leap year except cenury years not divisible by 400."],"actual":[]},"$nm":"leapYear"},"dateFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts the fixed date value to an equivalent gregorian date."],"actual":[]},"$nm":"dateFrom"},"fixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"doc":["Return the _day of era_ from a given date."]},"$nm":"fixed"}},"$at":{"december":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"december"},"november":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"november"},"may":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"may"},"march":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"march"},"april":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"april"},"february":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"february"},"june":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"june"},"january":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"january"},"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Epoch of the gregorian calendar."],"actual":[]},"$nm":"epoch"},"august":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"august"},"july":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"july"},"october":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"october"},"september":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"september"}},"$nm":"gregorian"},"Chronology":{"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["Generic base interface of a _calendar system_.\nChronology serves as a computational backend to \na Date representation of the same calendar system."]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$nm":"Fields"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts date tuple of this calendar system to an equivalent _fixed date_\nrepresentation of the day of era."]},"$nm":"fixedFrom"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Fields"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Validate the given date."]},"$nm":"checkDate"},"dateFrom":{"$t":{"$nm":"Fields"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts a _fixed day_ number to a calendar date tuple."]},"$nm":"dateFrom"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Epoch is the offset of the _fixed date_ day number that defines \nthe beginning of the calendar."]},"$nm":"epoch"}},"$nm":"Chronology"},"rd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"t"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts _Rata Die_ day number to a fixed date value.\n\n_Rata Die_ is fixed at Monday, January 1st, 1. (Gregorian)."]},"$nm":"rd"},"GregorianCalendar":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.chronology","$nm":"gregorian"}],"satisfies":[{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"LeapYear"}],"$mt":"cls","$an":{"shared":[],"abstract":[],"doc":["Base class for a gregorian calendar chronology."]},"$nm":"GregorianCalendar"}},"ceylon.time":{"Period":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of years."],"actual":[]},"$nm":"years"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of months."],"actual":[]},"$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of days."],"actual":[]},"$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of hours."],"actual":[]},"$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of minutes."],"actual":[]},"$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of seconds."],"actual":[]},"$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of milliseconds."],"actual":[]},"$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Summable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Scalable"}],"$mt":"cls","$an":{"shared":[],"doc":["An immutable period consisting of the ISO-8601 _years_, _months_, _days_, _hours_,\n_minutes_, _seconds_ and _milliseconds_, such as '3 Months, 4 Days and 7 Hours'.\n\nA period is a human-scale description of an amount of time.\n"]},"$m":{"scale":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"scale"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Each field will be scalable independently, and the result will _not_ be normalized"],"actual":[]},"$nm":"scale"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days added."],"actual":[]},"$nm":"plusDays"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of minutes."],"actual":[]},"$nm":"withMinutes"},"withDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of days."],"actual":[]},"$nm":"withDays"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds added."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of seconds."],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes added."],"actual":[]},"$nm":"plusMinutes"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a new period that is a sum of the two periods."],"actual":[]},"$nm":"plus"},"normalized":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date\/time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and milliseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."],"actual":[]},"$nm":"normalized"},"withYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of years."],"actual":[]},"$nm":"withYears"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is equal to another period."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return the result of comparing this period to the _other_ period."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years subtracted."],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours added."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days subtracted."],"actual":[]},"$nm":"minusDays"},"withMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of months."],"actual":[]},"$nm":"withMonths"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months subtracted."],"actual":[]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months added."],"actual":[]},"$nm":"plusMonths"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years added."],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of hours."],"actual":[]},"$nm":"withHours"},"isZero":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is zero-length."]},"$nm":"isZero"}},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of months."],"actual":[]},"$nm":"months"},"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a date only view of this period."],"actual":[]},"$nm":"dateOnly"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of minutes."],"actual":[]},"$nm":"minutes"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days."],"actual":[]},"$nm":"days"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of seconds."],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of hours."],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the ISO-8601 formatted string for this period."],"actual":[]},"$nm":"string"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a time only view of this period."],"actual":[]},"$nm":"timeOnly"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of years."],"actual":[]},"$nm":"years"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of milliseconds."],"actual":[]},"$nm":"milliseconds"}},"$nm":"Period"},"DateRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"see":["Range"],"doc":["Implementation of [[Range]] and allows easy iteration between [[Date]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateRange]] types\n* Recover the gap between [[DateRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Date"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"DateRange"},"Instant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z."],"actual":[]},"$nm":"millisecondsOfEpoch"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableInstant"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Instant"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"shared":[],"doc":["A specific instant of time on a continuous time-scale.\n\nAn instant represents a single point in time irrespective of \nany time-zone offsets or geographical locations."]},"$m":{"durationFrom":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from other instant to this instant."]},"$nm":"durationFrom"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a period to this instant."]},"$nm":"plus"},"durationTo":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from this instant to the other instant."]},"$nm":"durationTo"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _time of day_ for this instant."]},"$nm":"time"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts a period to this instant."]},"$nm":"minus"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type and milliseconds of epoch."],"actual":[]},"$nm":"equals"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[DateTime]] value."]},"$nm":"dateTime"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares this instant to the _other_ instant."],"actual":[]},"$nm":"compare"},"zoneDateTime":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns ZoneDateTime value for this instant."]},"$nm":"zoneDateTime"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[Date]] value."]},"$nm":"date"}},"$at":{"millisecondsOfEpoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z."],"actual":[]},"$nm":"millisecondsOfEpoch"}},"$nm":"Instant"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day of month values."]},"$nm":"dateTime"},"FixedMilliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixedMilliseconds"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the instant from the fixed milliseconds."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed milliseconds."],"actual":[]},"$nm":"milliseconds"}},"$at":{"fixedMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"fixedMilliseconds"}},"$nm":"FixedMilliseconds"},"today":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$def":"1","$nm":"clock"},{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns current date according to the provided system clock and time zone."]},"$nm":"today"},"Clock":{"$mt":"ifc","$an":{"shared":[],"doc":["A clock providing access to the current instant, date and time using a time-zone.\n\nInstances of this class are used to find the current instant, which can be\ninterpreted using the stored time-zone to find the current date and time.\nAs such, a clock can be used instead of `process.milliseconds`.\n\nThe primary purpose of this abstraction is to allow alternate clocks to be\nplugged in as and when required. Applications use an object to obtain the\ncurrent time rather than a static method. This can simplify testing.\n\nApplications should _avoid_ using the top level objects directly.\nInstead, they should pass a [[Clock]] into any method that requires it.\nA dependency injection framework is one way to achieve this.\n\nThis approach allows an alternate clock, such as [[fixedTime]] to be used during testing.\n\nThe [[systemTime]] top level factory method offers clocks based on the best available \nsystem clock, such as `process.milliseconds`."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current instant of the clock."]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current millisecond instant of the clock."]},"$nm":"milliseconds"}},"$nm":"Clock"},"zero":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"doc":["A period of zero length."]},"$nm":"zero"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day of month values."]},"$nm":"date"},"offsetTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an implementation of a clock that always returns a \nconstant offset from the value of the provided clock."]},"$nm":"offsetTime"},"fixedTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Instant"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets a clock that always returns the same instant in the UTC time-zone."]},"$nm":"fixedTime"},"$pkg-shared":"1","TimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"see":["Range"],"doc":["Implementation of [[Range]] and allows easy iteration between [[Time]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[TimeRange]] types\n* Recover the gap between [[TimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfTime]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Time"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"TimeRange"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Hours of the day (0..23)."]},"$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Minutes of the hour (0..59)."]},"$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"doc":["Seconds of the minute (0..59)."]},"$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"doc":["Milliseconds of the second (0..999)."]},"$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Creates new instance of [[Time]]."]},"$nm":"time"},"systemTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"obj","$an":{"shared":[],"doc":["Gets a clock that obtains the current instant using the best available system clock."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Return current instant from system time."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Return number of milliseconds from system time."],"actual":[]},"$nm":"milliseconds"}},"$nm":"systemTime"},"Time":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["Time of day like _6pm_ or _8.30am_.\n\nThis type contains only information about an abstract _time of day_ without \nreferencing any date or timezone.\n\nYou use Time to specify something that has to occur on a specific time of day\nlike _\"lunch hour starts at 1pm\"_ or _\"shop opens at 10am\"_.\n"]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[TimeRange]] between this and given Time."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is after the given time then return zero period."]},"$nm":"periodTo"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is before the given time then return zero period."]},"$nm":"periodFrom"}},"$nm":"Time"},"now":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time","$nm":"Clock"}]},"$mt":"prm","$def":"1","$nm":"clock"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Obtains the current instant from the system clock."]},"$nm":"now"},"DateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"DateTimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Enumerable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An abstract moment in time (like _4pm, October 21. 2012_).\n\nDateTime does not contain a time zone information, so You can not use it to record or \nschedule events."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date and time."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date and time."]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateTimeRange]] between this and given [[DateTime]]."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\n\nIf this DateTime is after the given DateTime then return zero period."]},"$nm":"periodTo"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns an instant from this [[DateTime]]."]},"$nm":"instant"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\n\nIf this date is before the given date then return zero period."]},"$nm":"periodFrom"}},"$nm":"DateTime"},"Date":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An interface for date objects in the ISO-8601 calendar system.\n\nA date is often viewed as triple of year-month-day values. \nThis interface also defines access to other date fields such as \nday-of-year, day-of-week and week-of-year."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date."]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateRange]] between this and given [[Date]]."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\n\nIf this date is after the given date then return zero period."]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns new DateTime value based on this date and a specified time."]},"$nm":"at"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\n\nIf this date is before the given date then return zero period."]},"$nm":"periodFrom"}},"$nm":"Date"},"Duration":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of milliseconds of this duration."],"actual":[]},"$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDuration"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Duration"}],"$pk":"ceylon.language","$nm":"Scalable"}],"$mt":"cls","$an":{"shared":[],"doc":["Duration specifies a discreet amount of milliseconds between two instances of time."]},"$m":{"scale":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"scale"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a new [[Duration]] with it´s milliseconds scaled."],"actual":[]},"$nm":"scale"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Duration is considered equal when type and milliseconds are the same."],"actual":[]},"$nm":"equals"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the string representation of this duration."],"actual":[]},"$nm":"string"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns this duration as a period of milliseconds."]},"$nm":"period"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds of this duration."],"actual":[]},"$nm":"milliseconds"}},"$nm":"Duration"},"DateTimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"doc":["Implementation of [[Range]] and allows easy iteration between [[DateTime]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateTimeRange]] types\n* Recover the gap between [[DateTimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] or [[UnitOfTime]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTime"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"DateTimeRange"},"FixedInstant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"fixedInstant"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed instant."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns milliseconds from the fixed instant."],"actual":[]},"$nm":"milliseconds"}},"$at":{"fixedInstant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$nm":"fixedInstant"}},"$nm":"FixedInstant"},"OffsetClock":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["An implementation of a [[Clock]] that returns tilem with a constant \noffset from the provided clock."]},"$m":{"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"milliseconds"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"instant"}},"$at":{"baseClock":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"attr","$nm":"baseClock"},"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"offset"}},"$nm":"OffsetClock"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6.1');
function UnitOfDate$base($$unitOfDate){
}
UnitOfDate$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents units of Date",24)),$$$cl1.shared()];},d:['ceylon.time.base','UnitOfDate']};};
exports.UnitOfDate$base=UnitOfDate$base;
function $init$UnitOfDate$base(){
    if (UnitOfDate$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfDate$base,'ceylon.time.base::UnitOfDate');
    }
    return UnitOfDate$base;
}
exports.$init$UnitOfDate$base=$init$UnitOfDate$base;
$init$UnitOfDate$base();
function UnitOfYear$base($$unitOfYear){
    UnitOfDate$base($$unitOfYear);
}
UnitOfYear$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfYear']};};
exports.UnitOfYear$base=UnitOfYear$base;
function $init$UnitOfYear$base(){
    if (UnitOfYear$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfYear$base,'ceylon.time.base::UnitOfYear',$init$UnitOfDate$base());
    }
    return UnitOfYear$base;
}
exports.$init$UnitOfYear$base=$init$UnitOfYear$base;
$init$UnitOfYear$base();
function UnitOfMonth$base($$unitOfMonth){
    UnitOfDate$base($$unitOfMonth);
}
UnitOfMonth$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfMonth']};};
exports.UnitOfMonth$base=UnitOfMonth$base;
function $init$UnitOfMonth$base(){
    if (UnitOfMonth$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfMonth$base,'ceylon.time.base::UnitOfMonth',$init$UnitOfDate$base());
    }
    return UnitOfMonth$base;
}
exports.$init$UnitOfMonth$base=$init$UnitOfMonth$base;
$init$UnitOfMonth$base();
function UnitOfDay$base($$unitOfDay){
    UnitOfDate$base($$unitOfDay);
}
UnitOfDay$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfDay']};};
exports.UnitOfDay$base=UnitOfDay$base;
function $init$UnitOfDay$base(){
    if (UnitOfDay$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfDay$base,'ceylon.time.base::UnitOfDay',$init$UnitOfDate$base());
    }
    return UnitOfDay$base;
}
exports.$init$UnitOfDay$base=$init$UnitOfDay$base;
$init$UnitOfDay$base();
function UnitOfTime$base($$unitOfTime){
}
UnitOfTime$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents units of Time",24)),$$$cl1.shared()];},d:['ceylon.time.base','UnitOfTime']};};
exports.UnitOfTime$base=UnitOfTime$base;
function $init$UnitOfTime$base(){
    if (UnitOfTime$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfTime$base,'ceylon.time.base::UnitOfTime');
    }
    return UnitOfTime$base;
}
exports.$init$UnitOfTime$base=$init$UnitOfTime$base;
$init$UnitOfTime$base();
function UnitOfHour$base($$unitOfHour){
    UnitOfTime$base($$unitOfHour);
}
UnitOfHour$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfHour']};};
exports.UnitOfHour$base=UnitOfHour$base;
function $init$UnitOfHour$base(){
    if (UnitOfHour$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfHour$base,'ceylon.time.base::UnitOfHour',$init$UnitOfTime$base());
    }
    return UnitOfHour$base;
}
exports.$init$UnitOfHour$base=$init$UnitOfHour$base;
$init$UnitOfHour$base();
function UnitOfMinute$base($$unitOfMinute){
    UnitOfTime$base($$unitOfMinute);
}
UnitOfMinute$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfMinute']};};
exports.UnitOfMinute$base=UnitOfMinute$base;
function $init$UnitOfMinute$base(){
    if (UnitOfMinute$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfMinute$base,'ceylon.time.base::UnitOfMinute',$init$UnitOfTime$base());
    }
    return UnitOfMinute$base;
}
exports.$init$UnitOfMinute$base=$init$UnitOfMinute$base;
$init$UnitOfMinute$base();
function UnitOfSecond$base($$unitOfSecond){
    UnitOfTime$base($$unitOfSecond);
}
UnitOfSecond$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfSecond']};};
exports.UnitOfSecond$base=UnitOfSecond$base;
function $init$UnitOfSecond$base(){
    if (UnitOfSecond$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfSecond$base,'ceylon.time.base::UnitOfSecond',$init$UnitOfTime$base());
    }
    return UnitOfSecond$base;
}
exports.$init$UnitOfSecond$base=$init$UnitOfSecond$base;
$init$UnitOfSecond$base();
function UnitOfMillisecond$base($$unitOfMillisecond){
    UnitOfTime$base($$unitOfMillisecond);
}
UnitOfMillisecond$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','UnitOfMillisecond']};};
exports.UnitOfMillisecond$base=UnitOfMillisecond$base;
function $init$UnitOfMillisecond$base(){
    if (UnitOfMillisecond$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfMillisecond$base,'ceylon.time.base::UnitOfMillisecond',$init$UnitOfTime$base());
    }
    return UnitOfMillisecond$base;
}
exports.$init$UnitOfMillisecond$base=$init$UnitOfMillisecond$base;
$init$UnitOfMillisecond$base();
function years$803$base(){
    var $$years=new years$803$base.$$;
    UnitOfYear$base($$years);
    $$years.minimum$804_=(-(283456));
    $$years.$prop$getMinimum={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$803$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The minimum supported year for instances of `Date`, -283_457.",61)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','minimum']};}};
    $$years.$prop$getMinimum.get=function(){return minimum};
    $$years.maximum$805_=(287396);
    $$years.$prop$getMaximum={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$803$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The maximum supported year for instances of `Date`, 999,999,999.",64)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','maximum']};}};
    $$years.$prop$getMaximum.get=function(){return maximum};
    return $$years;
}
function $init$years$803$base(){
    if (years$803$base.$$===undefined){
        $$$cl1.initTypeProto(years$803$base,'ceylon.time.base::years',$$$cl1.Basic,$init$UnitOfYear$base());
    }
    return years$803$base;
}
exports.$init$years$803$base=$init$years$803$base;
$init$years$803$base();
(function($$years){
    $$$cl1.defineAttr($$years,'minimum',function(){return this.minimum$804_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$803$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The minimum supported year for instances of `Date`, -283_457.",61)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','minimum']};});
    $$$cl1.defineAttr($$years,'maximum',function(){return this.maximum$805_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$803$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The maximum supported year for instances of `Date`, 999,999,999.",64)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','maximum']};});
})(years$803$base.$$.prototype);
var years$806$base;
function getYears$base(){
    if (years$806$base===undefined)years$806$base=$init$years$803$base()();
    return years$806$base;
}
exports.getYears$base=getYears$base;
getYears$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:years$803$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of _year_ unit.",49)),$$$cl1.shared()];},d:['ceylon.time.base','years']};};
$prop$getYears$base={get:getYears$base,$$metamodel$$:getYears$base.$$metamodel$$};
exports.$prop$getYears$base=$prop$getYears$base;
function months$807$base(){
    var $$months=new months$807$base.$$;
    UnitOfMonth$base($$months);
    $$months.all$808_=$$$cl1.Tuple(getJanuary$base(),$$$cl1.Tuple(getFebruary$base(),$$$cl1.Tuple(getMarch$base(),$$$cl1.Tuple(getApril$base(),$$$cl1.Tuple(getMay$base(),$$$cl1.Tuple(getJune$base(),$$$cl1.Tuple(getJuly$base(),$$$cl1.Tuple(getAugust$base(),$$$cl1.Tuple(getSeptember$base(),$$$cl1.Tuple(getOctober$base(),$$$cl1.Tuple(getNovember$base(),$$$cl1.Tuple(getDecember$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}});
    $$months.$prop$getAll={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Month$base}}},$cont:months$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordered list of all months of Gregorian and Julian calendar system from January to December.",92)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','all']};}};
    $$months.$prop$getAll.get=function(){return all};
    $$months.perYear$809_=$$months.all.size;
    $$months.$prop$getPerYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:months$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of months per year.",26)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','perYear']};}};
    $$months.$prop$getPerYear.get=function(){return perYear};
    return $$months;
}
function $init$months$807$base(){
    if (months$807$base.$$===undefined){
        $$$cl1.initTypeProto(months$807$base,'ceylon.time.base::months',$$$cl1.Basic,$init$UnitOfMonth$base());
    }
    return months$807$base;
}
exports.$init$months$807$base=$init$months$807$base;
$init$months$807$base();
(function($$months){
    $$$cl1.defineAttr($$months,'all',function(){return this.all$808_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Month$base}}},$cont:months$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordered list of all months of Gregorian and Julian calendar system from January to December.",92)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','all']};});
    $$$cl1.defineAttr($$months,'perYear',function(){return this.perYear$809_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:months$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of months per year.",26)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','perYear']};});
})(months$807$base.$$.prototype);
var months$810$base;
function getMonths$base(){
    if (months$810$base===undefined)months$810$base=$init$months$807$base()();
    return months$810$base;
}
exports.getMonths$base=getMonths$base;
getMonths$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:months$807$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of months.",44)),$$$cl1.shared()];},d:['ceylon.time.base','months']};};
$prop$getMonths$base={get:getMonths$base,$$metamodel$$:getMonths$base.$$metamodel$$};
exports.$prop$getMonths$base=$prop$getMonths$base;
function days$811$base(){
    var $$days=new days$811$base.$$;
    UnitOfDay$base($$days);
    $$days.$prop$getPerYear.get=function(){return perYear};
    $$days.$prop$getPerLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per leap year.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perLeapYear']};}};
    $$days.$prop$getPerLeapYear.get=function(){return perLeapYear};
    $$days.ofWeek$812_=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});
    $$days.$prop$getOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$cont:days$811$base,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','days','$at','ofWeek']};}};
    $$days.$prop$getOfWeek.get=function(){return ofWeek};
    $$days.perWeek$813_=$$days.ofWeek.size;
    $$days.$prop$getPerWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per week (7).",28)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perWeek']};}};
    $$days.$prop$getPerWeek.get=function(){return perWeek};
    $$days.perCycle$814_=(146097);
    $$days.$prop$getPerCycle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCycle']};}};
    $$days.$prop$getPerCycle.get=function(){return perCycle};
    $$days.$prop$getPerFourCenturies={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perFourCenturies']};}};
    $$days.$prop$getPerFourCenturies.get=function(){return perFourCenturies};
    $$days.inFourYears$815_=(1461);
    $$days.$prop$getInFourYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days in four years.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','inFourYears']};}};
    $$days.$prop$getInFourYears.get=function(){return inFourYears};
    $$days.perCentury$816_=(36524);
    $$days.$prop$getPerCentury={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of of per century (100 years).",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCentury']};}};
    $$days.$prop$getPerCentury.get=function(){return perCentury};
    return $$days;
}
function $init$days$811$base(){
    if (days$811$base.$$===undefined){
        $$$cl1.initTypeProto(days$811$base,'ceylon.time.base::days',$$$cl1.Basic,$init$UnitOfDay$base());
    }
    return days$811$base;
}
exports.$init$days$811$base=$init$days$811$base;
$init$days$811$base();
(function($$days){
    $$$cl1.defineAttr($$days,'perYear',function(){
        var $$days=this;
        return (365);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per normal year.",31)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perYear']};});
    $$$cl1.defineAttr($$days,'perLeapYear',function(){
        var $$days=this;
        return (366);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per leap year.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perLeapYear']};});
    $$days.perMonth$defs$leapYear=function(month$817,leapYear$818){var $$days=this;
    return false;};
    $$days.perMonth=function (month$817,leapYear$818){
        var $$days=this;
        if(leapYear$818===undefined){leapYear$818=$$days.perMonth$defs$leapYear(month$817,leapYear$818);}
        return month$817.numberOfDays(leapYear$818);
    };
    $$days.perMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of days per month.",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','perMonth']};};
    $$days.toMonth$defs$leapYear=function(month$819,leapYear$820){var $$days=this;
    return false;};
    $$days.toMonth=function (month$819,leapYear$820){
        var $$days=this;
        if(leapYear$820===undefined){leapYear$820=$$days.toMonth$defs$leapYear(month$819,leapYear$820);}
        return month$819.fisrtDayOfYear(leapYear$820).minus((1));
    };
    $$days.toMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of days from the start of the year to the first of the month.",80)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','toMonth']};};
    $$$cl1.defineAttr($$days,'ofWeek',function(){return this.ofWeek$812_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$cont:days$811$base,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','days','$at','ofWeek']};});
    $$$cl1.defineAttr($$days,'perWeek',function(){return this.perWeek$813_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per week (7).",28)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perWeek']};});
    $$$cl1.defineAttr($$days,'perCycle',function(){return this.perCycle$814_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCycle']};});
    $$$cl1.defineAttr($$days,'perFourCenturies',function(){
        var $$days=this;
        return $$days.perCycle;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perFourCenturies']};});
    $$$cl1.defineAttr($$days,'inFourYears',function(){return this.inFourYears$815_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days in four years.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','inFourYears']};});
    $$$cl1.defineAttr($$days,'perCentury',function(){return this.perCentury$816_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of of per century (100 years).",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCentury']};});
    $$days.fromMilliseconds$defs$millisecondsIn=function(millisecondsIn$821){var $$days=this;
    return (0);};
    $$days.fromMilliseconds=function (millisecondsIn$821){
        var $$days=this;
        if(millisecondsIn$821===undefined){millisecondsIn$821=$$days.fromMilliseconds$defs$millisecondsIn(millisecondsIn$821);}
        return floorDiv$internal$math(millisecondsIn$821,getMilliseconds$base().perDay);
    };
    $$days.fromMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'millisecondsIn',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:days$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns number of days from the number of milliseconds.",55)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','fromMilliseconds']};};
})(days$811$base.$$.prototype);
var days$822$base;
function getDays$base(){
    if (days$822$base===undefined)days$822$base=$init$days$811$base()();
    return days$822$base;
}
exports.getDays$base=getDays$base;
getDays$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:days$811$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of _day_ unit.",48)),$$$cl1.shared()];},d:['ceylon.time.base','days']};};
$prop$getDays$base={get:getDays$base,$$metamodel$$:getDays$base.$$metamodel$$};
exports.$prop$getDays$base=$prop$getDays$base;
function hours$823$base(){
    var $$hours=new hours$823$base.$$;
    UnitOfHour$base($$hours);
    $$hours.perDay$824_=(24);
    $$hours.$prop$getPerDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:hours$823$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of hours per day.",24)),$$$cl1.shared()];},d:['ceylon.time.base','hours','$at','perDay']};}};
    $$hours.$prop$getPerDay.get=function(){return perDay};
    return $$hours;
}
function $init$hours$823$base(){
    if (hours$823$base.$$===undefined){
        $$$cl1.initTypeProto(hours$823$base,'ceylon.time.base::hours',$$$cl1.Basic,$init$UnitOfHour$base());
    }
    return hours$823$base;
}
exports.$init$hours$823$base=$init$hours$823$base;
$init$hours$823$base();
(function($$hours){
    $$$cl1.defineAttr($$hours,'perDay',function(){return this.perDay$824_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:hours$823$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of hours per day.",24)),$$$cl1.shared()];},d:['ceylon.time.base','hours','$at','perDay']};});
})(hours$823$base.$$.prototype);
var hours$825$base;
function getHours$base(){
    if (hours$825$base===undefined)hours$825$base=$init$hours$823$base()();
    return hours$825$base;
}
exports.getHours$base=getHours$base;
getHours$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:hours$823$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _hour_ time unit.",38)),$$$cl1.shared()];},d:['ceylon.time.base','hours']};};
$prop$getHours$base={get:getHours$base,$$metamodel$$:getHours$base.$$metamodel$$};
exports.$prop$getHours$base=$prop$getHours$base;
function minutes$826$base(){
    var $$minutes=new minutes$826$base.$$;
    UnitOfMinute$base($$minutes);
    $$minutes.perHour$827_=(60);
    $$minutes.$prop$getPerHour={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$826$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perHour']};}};
    $$minutes.$prop$getPerHour.get=function(){return perHour};
    $$minutes.$prop$getPerDay.get=function(){return perDay};
    return $$minutes;
}
function $init$minutes$826$base(){
    if (minutes$826$base.$$===undefined){
        $$$cl1.initTypeProto(minutes$826$base,'ceylon.time.base::minutes',$$$cl1.Basic,$init$UnitOfMinute$base());
    }
    return minutes$826$base;
}
exports.$init$minutes$826$base=$init$minutes$826$base;
$init$minutes$826$base();
(function($$minutes){
    $$$cl1.defineAttr($$minutes,'perHour',function(){return this.perHour$827_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$826$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perHour']};});
    $$$cl1.defineAttr($$minutes,'perDay',function(){
        var $$minutes=this;
        return getHours$base().perDay.times(getMinutes$base().perHour);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$826$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per day.",26)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perDay']};});
})(minutes$826$base.$$.prototype);
var minutes$828$base;
function getMinutes$base(){
    if (minutes$828$base===undefined)minutes$828$base=$init$minutes$826$base()();
    return minutes$828$base;
}
exports.getMinutes$base=getMinutes$base;
getMinutes$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:minutes$826$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _minute_ time unit.",40)),$$$cl1.shared()];},d:['ceylon.time.base','minutes']};};
$prop$getMinutes$base={get:getMinutes$base,$$metamodel$$:getMinutes$base.$$metamodel$$};
exports.$prop$getMinutes$base=$prop$getMinutes$base;
function seconds$829$base(){
    var $$seconds=new seconds$829$base.$$;
    UnitOfSecond$base($$seconds);
    $$seconds.perMinute$830_=(60);
    $$seconds.$prop$getPerMinute={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$829$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per minute.",29)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perMinute']};}};
    $$seconds.$prop$getPerMinute.get=function(){return perMinute};
    $$seconds.$prop$getPerHour.get=function(){return perHour};
    $$seconds.$prop$getPerDay.get=function(){return perDay};
    return $$seconds;
}
function $init$seconds$829$base(){
    if (seconds$829$base.$$===undefined){
        $$$cl1.initTypeProto(seconds$829$base,'ceylon.time.base::seconds',$$$cl1.Basic,$init$UnitOfSecond$base());
    }
    return seconds$829$base;
}
exports.$init$seconds$829$base=$init$seconds$829$base;
$init$seconds$829$base();
(function($$seconds){
    $$$cl1.defineAttr($$seconds,'perMinute',function(){return this.perMinute$830_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$829$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per minute.",29)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perMinute']};});
    $$$cl1.defineAttr($$seconds,'perHour',function(){
        var $$seconds=this;
        return getMinutes$base().perHour.times(getSeconds$base().perMinute);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$829$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perHour']};});
    $$$cl1.defineAttr($$seconds,'perDay',function(){
        var $$seconds=this;
        return getHours$base().perDay.times(getSeconds$base().perHour);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$829$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per day.",26)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perDay']};});
})(seconds$829$base.$$.prototype);
var seconds$831$base;
function getSeconds$base(){
    if (seconds$831$base===undefined)seconds$831$base=$init$seconds$829$base()();
    return seconds$831$base;
}
exports.getSeconds$base=getSeconds$base;
getSeconds$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:seconds$829$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _second_ time unit.",40)),$$$cl1.shared()];},d:['ceylon.time.base','seconds']};};
$prop$getSeconds$base={get:getSeconds$base,$$metamodel$$:getSeconds$base.$$metamodel$$};
exports.$prop$getSeconds$base=$prop$getSeconds$base;
function milliseconds$832$base(){
    var $$milliseconds=new milliseconds$832$base.$$;
    UnitOfMillisecond$base($$milliseconds);
    $$milliseconds.perSecond$833_=(1000);
    $$milliseconds.$prop$getPerSecond={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$832$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per second.",34)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perSecond']};}};
    $$milliseconds.$prop$getPerSecond.get=function(){return perSecond};
    $$milliseconds.$prop$getPerMinute.get=function(){return perMinute};
    $$milliseconds.$prop$getPerHour.get=function(){return perHour};
    $$milliseconds.$prop$getPerDay.get=function(){return perDay};
    return $$milliseconds;
}
function $init$milliseconds$832$base(){
    if (milliseconds$832$base.$$===undefined){
        $$$cl1.initTypeProto(milliseconds$832$base,'ceylon.time.base::milliseconds',$$$cl1.Basic,$init$UnitOfMillisecond$base());
    }
    return milliseconds$832$base;
}
exports.$init$milliseconds$832$base=$init$milliseconds$832$base;
$init$milliseconds$832$base();
(function($$milliseconds){
    $$$cl1.defineAttr($$milliseconds,'perSecond',function(){return this.perSecond$833_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$832$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per second.",34)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perSecond']};});
    $$$cl1.defineAttr($$milliseconds,'perMinute',function(){
        var $$milliseconds=this;
        return getSeconds$base().perMinute.times(getMilliseconds$base().perSecond);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$832$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Milliseconds per minute.",24)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perMinute']};});
    $$$cl1.defineAttr($$milliseconds,'perHour',function(){
        var $$milliseconds=this;
        return getMinutes$base().perHour.times(getMilliseconds$base().perMinute);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$832$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per hour.",32)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perHour']};});
    $$$cl1.defineAttr($$milliseconds,'perDay',function(){
        var $$milliseconds=this;
        return getHours$base().perDay.times(getMilliseconds$base().perHour);
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$832$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per day.",31)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perDay']};});
})(milliseconds$832$base.$$.prototype);
var milliseconds$834$base;
function getMilliseconds$base(){
    if (milliseconds$834$base===undefined)milliseconds$834$base=$init$milliseconds$832$base()();
    return milliseconds$834$base;
}
exports.getMilliseconds$base=getMilliseconds$base;
getMilliseconds$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:milliseconds$832$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _millisecond_ time unit.",45)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds']};};
$prop$getMilliseconds$base={get:getMilliseconds$base,$$metamodel$$:getMilliseconds$base.$$metamodel$$};
exports.$prop$getMilliseconds$base=$prop$getMilliseconds$base;
function DateBehavior$base($$targs$$,$$dateBehavior){
    $$$cl1.set_type_args($$dateBehavior,$$targs$$);
}
DateBehavior$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableDate$base}]}},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behavior for date types.",31)),$$$cl1.shared()];},d:['ceylon.time.base','DateBehavior']};};
exports.DateBehavior$base=DateBehavior$base;
function $init$DateBehavior$base(){
    if (DateBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(DateBehavior$base,'ceylon.time.base::DateBehavior');
        (function($$dateBehavior){
        })(DateBehavior$base.$$.prototype);
    }
    return DateBehavior$base;
}
exports.$init$DateBehavior$base=$init$DateBehavior$base;
$init$DateBehavior$base();
function DateTimeBehavior$base($$targs$$,$$dateTimeBehavior){
    DateBehavior$base($$dateTimeBehavior.$$targs$$===undefined?$$targs$$:{Element:$$dateTimeBehavior.$$targs$$.Element},$$dateTimeBehavior);
    TimeBehavior$base($$dateTimeBehavior.$$targs$$===undefined?$$targs$$:{Element:$$dateTimeBehavior.$$targs$$.Element},$$dateTimeBehavior);
    $$$cl1.set_type_args($$dateTimeBehavior,$$targs$$);
}
DateTimeBehavior$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableDateTime$base}]},DateType:{'var':'out','satisfies':[{t:ReadableDate$base}]},TimeType:{'var':'out','satisfies':[{t:ReadableTime$base}]}},satisfies:[{t:DateBehavior$base,a:{Element:'Element'}},{t:TimeBehavior$base,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behavior of the [[DateTime]] types.",42)),$$$cl1.shared()];},d:['ceylon.time.base','DateTimeBehavior']};};
exports.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
    if (DateTimeBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
        (function($$dateTimeBehavior){
            $$dateTimeBehavior.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'TimeType',$cont:DateTimeBehavior$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns Time portion of this [[DateTime]] value.",48)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','DateTimeBehavior','$at','time']};}};
            $$dateTimeBehavior.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'DateType',$cont:DateTimeBehavior$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns Date portion of this [[DateTime]] value.",48)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','DateTimeBehavior','$at','date']};}};
        })(DateTimeBehavior$base.$$.prototype);
    }
    return DateTimeBehavior$base;
}
exports.$init$DateTimeBehavior$base=$init$DateTimeBehavior$base;
$init$DateTimeBehavior$base();
function DayOfWeek$base(integer, $$dayOfWeek){
    $init$DayOfWeek$base();
    if ($$dayOfWeek===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$dayOfWeek.$$targs$$={Other:{t:DayOfWeek$base}};
    $$dayOfWeek.$$targs$$={Other:{t:DayOfWeek$base}};
    $$$cl1.Ordinal({Other:{t:DayOfWeek$base}},$$dayOfWeek);
    $$$cl1.add_type_arg($$dayOfWeek,'Other',{t:DayOfWeek$base});
    $$$cl1.Comparable({Other:{t:DayOfWeek$base}},$$dayOfWeek);
    $$$cl1.add_type_arg($$dayOfWeek,'Other',{t:DayOfWeek$base});
    $$dayOfWeek.integer$835_=integer;
    $$dayOfWeek.$prop$getInteger={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Numeric value of the DayOfWeek.",31)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$at','integer']};}};
    $$dayOfWeek.$prop$getInteger.get=function(){return integer};
    return $$dayOfWeek;
}
DayOfWeek$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:DayOfWeek$base}}},{t:$$$cl1.Comparable,a:{Other:{t:DayOfWeek$base}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A day of week, such as \'tuesday\'.",33)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.base','DayOfWeek']};};
exports.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
    if (DayOfWeek$base.$$===undefined){
        $$$cl1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
        (function($$dayOfWeek){
            $$$cl1.defineAttr($$dayOfWeek,'integer',function(){return this.integer$835_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Numeric value of the DayOfWeek.",31)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$at','integer']};});
            $$dayOfWeek.plusDays=function plusDays(number$836){
                var $$dayOfWeek=this;
                var wd$837=$$dayOfWeek.integer.plus(number$836).remainder((7));
                //assert at DayOfWeek.ceylon (12:8-12:42)
                var dow$838;
                if (!((dow$838=getWeekdays$base().get(wd$837))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists dow = weekdays[wd]\' at DayOfWeek.ceylon (12:15-12:41)"),'12:8-12:42','DayOfWeek.ceylon'); }
                return dow$838;
            };$$dayOfWeek.plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a day of week that comes specified number of days after this DayOfWeek.",79)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$m','plusDays']};};
            $$dayOfWeek.minusDays=function (number$839){
                var $$dayOfWeek=this;
                return $$dayOfWeek.plusDays((-number$839));
            };
            $$dayOfWeek.minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a day of week that comes number of days before this DayOfWeek.",70)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$m','minusDays']};};
            $$dayOfWeek.compare=function (other$840){
                var $$dayOfWeek=this;
                return $$dayOfWeek.integer.compare(other$840.integer);
            };
            $$dayOfWeek.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:DayOfWeek$base},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Compare days of week.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','DayOfWeek','$m','compare']};};
        })(DayOfWeek$base.$$.prototype);
    }
    return DayOfWeek$base;
}
exports.$init$DayOfWeek$base=$init$DayOfWeek$base;
$init$DayOfWeek$base();
var weekdays$841$base;function $valinit$weekdays$841$base(){if (weekdays$841$base===undefined)weekdays$841$base=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});return weekdays$841$base;};$valinit$weekdays$841$base();
function getWeekdays$base(){return $valinit$weekdays$841$base();}
exports.getWeekdays$base=getWeekdays$base;
var $prop$getWeekdays$base={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$an:function(){return[$$$cl1.doc($$$cl1.String("List of all available weekdays.",31)),$$$cl1.shared()];},d:['ceylon.time.base','weekdays']};}};
exports.$prop$getWeekdays$base=$prop$getWeekdays$base;
$prop$getWeekdays$base.get=getWeekdays$base;
getWeekdays$base.$$metamodel$$=$prop$getWeekdays$base.$$metamodel$$;
function dayOfWeek$base(dayOfWeek$842){
    
    var case$843=dayOfWeek$842;
    if ($$$cl1.isOfType(dayOfWeek$842,{t:DayOfWeek$base})) {
        return case$843;
    }else if ($$$cl1.isOfType(dayOfWeek$842,{t:$$$cl1.Integer})) {
        //assert at DayOfWeek.ceylon (32:8-32:48)
        if (!((((0).compare(case$843)!==$$$cl1.getLarger())&&case$843.compare((7)).equals($$$cl1.getSmaller())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'0 <= dayOfWeek && dayOfWeek < 7\' at DayOfWeek.ceylon (32:15-32:47)"),'32:8-32:48','DayOfWeek.ceylon'); }
        //assert at DayOfWeek.ceylon (33:8-33:59)
        var dow$844;
        if (!((dow$844=getWeekdays$base().get(case$843))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists DayOfWeek dow = weekdays[dayOfWeek]\' at DayOfWeek.ceylon (33:15-33:58)"),'33:8-33:59','DayOfWeek.ceylon'); }
        return dow$844;
    }
}
exports.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:DayOfWeek$base}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[DayOfWeek]] from the input.",37)),$$$cl1.shared()];},d:['ceylon.time.base','dayOfWeek']};};
function WeekdayParseError$base(message$845, $$weekdayParseError){
    $init$WeekdayParseError$base();
    if ($$weekdayParseError===undefined)$$weekdayParseError=new WeekdayParseError$base.$$;
    $$weekdayParseError.message$845_=message$845;
    $$$cl1.Exception($$weekdayParseError.message$845,undefined,$$weekdayParseError);
    return $$weekdayParseError;
}
WeekdayParseError$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An exception that is thrown when parsing a DayOfWeek fails.",59)),$$$cl1.shared()];},d:['ceylon.time.base','WeekdayParseError']};};
exports.WeekdayParseError$base=WeekdayParseError$base;
function $init$WeekdayParseError$base(){
    if (WeekdayParseError$base.$$===undefined){
        $$$cl1.initTypeProto(WeekdayParseError$base,'ceylon.time.base::WeekdayParseError',$$$cl1.Exception);
        (function($$weekdayParseError){
            $$$cl1.defineAttr($$weekdayParseError,'message$845',function(){return this.message$845_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:WeekdayParseError$base,d:['ceylon.time.base','WeekdayParseError','$at','message']};});
        })(WeekdayParseError$base.$$.prototype);
    }
    return WeekdayParseError$base;
}
exports.$init$WeekdayParseError$base=$init$WeekdayParseError$base;
$init$WeekdayParseError$base();
function parseWeekday$base(dayOfWeek$846){
    var wd$847=dayOfWeek$846.lowercased;
    var it$848 = getWeekdays$base().iterator();
    var dow$849;while ((dow$849=it$848.next())!==$$$cl1.getFinished()){
        if(dow$849.string.lowercased.equals(wd$847)){
            return dow$849;
        }
    }
    throw $$$cl1.wrapexc(WeekdayParseError$base($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unrecognized DayOfWeek: ",24),dayOfWeek$846.string,$$$cl1.String(" .",2)]).string),'51:4-51:71','ceylon/time/base/DayOfWeek.ceylon');
}
exports.parseWeekday$base=parseWeekday$base;
parseWeekday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Parses a string into a DayOfWeek.",33)),$$$cl1.shared()];},d:['ceylon.time.base','parseWeekday']};};
function sunday$850$base(){
    var $$sunday=new sunday$850$base.$$;
    DayOfWeek$base((0),$$sunday);
    $$sunday.string$851_=$$$cl1.String("sunday",6);
    $$sunday.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','string']};}};
    $$sunday.$prop$getString.get=function(){return string};
    $$sunday.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','predecessor']};}};
    $$sunday.$prop$getPredecessor.get=function(){return predecessor};
    $$sunday.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','successor']};}};
    $$sunday.$prop$getSuccessor.get=function(){return successor};
    return $$sunday;
}
function $init$sunday$850$base(){
    if (sunday$850$base.$$===undefined){
        $$$cl1.initTypeProto(sunday$850$base,'ceylon.time.base::sunday',$init$DayOfWeek$base());
    }
    return sunday$850$base;
}
exports.$init$sunday$850$base=$init$sunday$850$base;
$init$sunday$850$base();
(function($$sunday){
    $$$cl1.defineAttr($$sunday,'string',function(){return this.string$851_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','string']};});
    $$$cl1.defineAttr($$sunday,'predecessor',function(){
        var $$sunday=this;
        return getSaturday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','predecessor']};});
    $$$cl1.defineAttr($$sunday,'successor',function(){
        var $$sunday=this;
        return getMonday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$850$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','successor']};});
})(sunday$850$base.$$.prototype);
var sunday$852$base;
function getSunday$base(){
    if (sunday$852$base===undefined)sunday$852$base=$init$sunday$850$base()();
    return sunday$852$base;
}
exports.getSunday$base=getSunday$base;
getSunday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:sunday$850$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Sunday_ is the day of the week that follows Saturday and preceeds Monday.",74)),$$$cl1.shared()];},d:['ceylon.time.base','sunday']};};
$prop$getSunday$base={get:getSunday$base,$$metamodel$$:getSunday$base.$$metamodel$$};
exports.$prop$getSunday$base=$prop$getSunday$base;
function monday$853$base(){
    var $$monday=new monday$853$base.$$;
    DayOfWeek$base((1),$$monday);
    $$monday.string$854_=$$$cl1.String("monday",6);
    $$monday.$prop$getString.get=function(){return string};
    $$monday.$prop$getPredecessor.get=function(){return predecessor};
    $$monday.$prop$getSuccessor.get=function(){return successor};
    return $$monday;
}
function $init$monday$853$base(){
    if (monday$853$base.$$===undefined){
        $$$cl1.initTypeProto(monday$853$base,'ceylon.time.base::monday',$init$DayOfWeek$base());
    }
    return monday$853$base;
}
exports.$init$monday$853$base=$init$monday$853$base;
$init$monday$853$base();
(function($$monday){
    $$$cl1.defineAttr($$monday,'string',function(){return this.string$854_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:monday$853$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','string']};});
    $$$cl1.defineAttr($$monday,'predecessor',function(){
        var $$monday=this;
        return getSunday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:monday$853$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','predecessor']};});
    $$$cl1.defineAttr($$monday,'successor',function(){
        var $$monday=this;
        return getTuesday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:monday$853$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','successor']};});
})(monday$853$base.$$.prototype);
var monday$855$base;
function getMonday$base(){
    if (monday$855$base===undefined)monday$855$base=$init$monday$853$base()();
    return monday$855$base;
}
exports.getMonday$base=getMonday$base;
getMonday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:monday$853$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Monday_ is the day of the week that follows Sunday and preceeds Tuesday.",73)),$$$cl1.shared()];},d:['ceylon.time.base','monday']};};
$prop$getMonday$base={get:getMonday$base,$$metamodel$$:getMonday$base.$$metamodel$$};
exports.$prop$getMonday$base=$prop$getMonday$base;
function tuesday$856$base(){
    var $$tuesday=new tuesday$856$base.$$;
    DayOfWeek$base((2),$$tuesday);
    $$tuesday.string$857_=$$$cl1.String("tuesday",7);
    $$tuesday.$prop$getString.get=function(){return string};
    $$tuesday.$prop$getPredecessor.get=function(){return predecessor};
    $$tuesday.$prop$getSuccessor.get=function(){return successor};
    return $$tuesday;
}
function $init$tuesday$856$base(){
    if (tuesday$856$base.$$===undefined){
        $$$cl1.initTypeProto(tuesday$856$base,'ceylon.time.base::tuesday',$init$DayOfWeek$base());
    }
    return tuesday$856$base;
}
exports.$init$tuesday$856$base=$init$tuesday$856$base;
$init$tuesday$856$base();
(function($$tuesday){
    $$$cl1.defineAttr($$tuesday,'string',function(){return this.string$857_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:tuesday$856$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','string']};});
    $$$cl1.defineAttr($$tuesday,'predecessor',function(){
        var $$tuesday=this;
        return getMonday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:tuesday$856$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','predecessor']};});
    $$$cl1.defineAttr($$tuesday,'successor',function(){
        var $$tuesday=this;
        return getWednesday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:tuesday$856$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','successor']};});
})(tuesday$856$base.$$.prototype);
var tuesday$858$base;
function getTuesday$base(){
    if (tuesday$858$base===undefined)tuesday$858$base=$init$tuesday$856$base()();
    return tuesday$858$base;
}
exports.getTuesday$base=getTuesday$base;
getTuesday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:tuesday$856$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Tuesday_ is the day of the week that follows Monday and preceeds Wednesday.",76)),$$$cl1.shared()];},d:['ceylon.time.base','tuesday']};};
$prop$getTuesday$base={get:getTuesday$base,$$metamodel$$:getTuesday$base.$$metamodel$$};
exports.$prop$getTuesday$base=$prop$getTuesday$base;
function wednesday$859$base(){
    var $$wednesday=new wednesday$859$base.$$;
    DayOfWeek$base((3),$$wednesday);
    $$wednesday.string$860_=$$$cl1.String("wednesday",9);
    $$wednesday.$prop$getString.get=function(){return string};
    $$wednesday.$prop$getPredecessor.get=function(){return predecessor};
    $$wednesday.$prop$getSuccessor.get=function(){return successor};
    return $$wednesday;
}
function $init$wednesday$859$base(){
    if (wednesday$859$base.$$===undefined){
        $$$cl1.initTypeProto(wednesday$859$base,'ceylon.time.base::wednesday',$init$DayOfWeek$base());
    }
    return wednesday$859$base;
}
exports.$init$wednesday$859$base=$init$wednesday$859$base;
$init$wednesday$859$base();
(function($$wednesday){
    $$$cl1.defineAttr($$wednesday,'string',function(){return this.string$860_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:wednesday$859$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','string']};});
    $$$cl1.defineAttr($$wednesday,'predecessor',function(){
        var $$wednesday=this;
        return getTuesday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:wednesday$859$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','predecessor']};});
    $$$cl1.defineAttr($$wednesday,'successor',function(){
        var $$wednesday=this;
        return getThursday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:wednesday$859$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','successor']};});
})(wednesday$859$base.$$.prototype);
var wednesday$861$base;
function getWednesday$base(){
    if (wednesday$861$base===undefined)wednesday$861$base=$init$wednesday$859$base()();
    return wednesday$861$base;
}
exports.getWednesday$base=getWednesday$base;
getWednesday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:wednesday$859$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Wednesday_ is the day of the week that follows Tuesday and preceeds Thursday.",78)),$$$cl1.shared()];},d:['ceylon.time.base','wednesday']};};
$prop$getWednesday$base={get:getWednesday$base,$$metamodel$$:getWednesday$base.$$metamodel$$};
exports.$prop$getWednesday$base=$prop$getWednesday$base;
function thursday$862$base(){
    var $$thursday=new thursday$862$base.$$;
    DayOfWeek$base((4),$$thursday);
    $$thursday.string$863_=$$$cl1.String("thursday",8);
    $$thursday.$prop$getString.get=function(){return string};
    $$thursday.$prop$getPredecessor.get=function(){return predecessor};
    $$thursday.$prop$getSuccessor.get=function(){return successor};
    return $$thursday;
}
function $init$thursday$862$base(){
    if (thursday$862$base.$$===undefined){
        $$$cl1.initTypeProto(thursday$862$base,'ceylon.time.base::thursday',$init$DayOfWeek$base());
    }
    return thursday$862$base;
}
exports.$init$thursday$862$base=$init$thursday$862$base;
$init$thursday$862$base();
(function($$thursday){
    $$$cl1.defineAttr($$thursday,'string',function(){return this.string$863_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:thursday$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','string']};});
    $$$cl1.defineAttr($$thursday,'predecessor',function(){
        var $$thursday=this;
        return getWednesday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:thursday$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','predecessor']};});
    $$$cl1.defineAttr($$thursday,'successor',function(){
        var $$thursday=this;
        return getFriday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:thursday$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','successor']};});
})(thursday$862$base.$$.prototype);
var thursday$864$base;
function getThursday$base(){
    if (thursday$864$base===undefined)thursday$864$base=$init$thursday$862$base()();
    return thursday$864$base;
}
exports.getThursday$base=getThursday$base;
getThursday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:thursday$862$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Thursday_ is the day of the week that follows Wednesday and preceeds Friday.",77)),$$$cl1.shared()];},d:['ceylon.time.base','thursday']};};
$prop$getThursday$base={get:getThursday$base,$$metamodel$$:getThursday$base.$$metamodel$$};
exports.$prop$getThursday$base=$prop$getThursday$base;
function friday$865$base(){
    var $$friday=new friday$865$base.$$;
    DayOfWeek$base((5),$$friday);
    $$friday.string$866_=$$$cl1.String("friday",6);
    $$friday.$prop$getString.get=function(){return string};
    $$friday.$prop$getPredecessor.get=function(){return predecessor};
    $$friday.$prop$getSuccessor.get=function(){return successor};
    return $$friday;
}
function $init$friday$865$base(){
    if (friday$865$base.$$===undefined){
        $$$cl1.initTypeProto(friday$865$base,'ceylon.time.base::friday',$init$DayOfWeek$base());
    }
    return friday$865$base;
}
exports.$init$friday$865$base=$init$friday$865$base;
$init$friday$865$base();
(function($$friday){
    $$$cl1.defineAttr($$friday,'string',function(){return this.string$866_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:friday$865$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','string']};});
    $$$cl1.defineAttr($$friday,'predecessor',function(){
        var $$friday=this;
        return getThursday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:friday$865$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','predecessor']};});
    $$$cl1.defineAttr($$friday,'successor',function(){
        var $$friday=this;
        return getSaturday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:friday$865$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','successor']};});
})(friday$865$base.$$.prototype);
var friday$867$base;
function getFriday$base(){
    if (friday$867$base===undefined)friday$867$base=$init$friday$865$base()();
    return friday$867$base;
}
exports.getFriday$base=getFriday$base;
getFriday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:friday$865$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Friday_ is the day of the week that follows Thursday and preceeds Saturday.",76)),$$$cl1.shared()];},d:['ceylon.time.base','friday']};};
$prop$getFriday$base={get:getFriday$base,$$metamodel$$:getFriday$base.$$metamodel$$};
exports.$prop$getFriday$base=$prop$getFriday$base;
function saturday$868$base(){
    var $$saturday=new saturday$868$base.$$;
    DayOfWeek$base((6),$$saturday);
    $$saturday.string$869_=$$$cl1.String("saturday",8);
    $$saturday.$prop$getString.get=function(){return string};
    $$saturday.$prop$getPredecessor.get=function(){return predecessor};
    $$saturday.$prop$getSuccessor.get=function(){return successor};
    return $$saturday;
}
function $init$saturday$868$base(){
    if (saturday$868$base.$$===undefined){
        $$$cl1.initTypeProto(saturday$868$base,'ceylon.time.base::saturday',$init$DayOfWeek$base());
    }
    return saturday$868$base;
}
exports.$init$saturday$868$base=$init$saturday$868$base;
$init$saturday$868$base();
(function($$saturday){
    $$$cl1.defineAttr($$saturday,'string',function(){return this.string$869_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:saturday$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','string']};});
    $$$cl1.defineAttr($$saturday,'predecessor',function(){
        var $$saturday=this;
        return getFriday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:saturday$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','predecessor']};});
    $$$cl1.defineAttr($$saturday,'successor',function(){
        var $$saturday=this;
        return getSunday$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:saturday$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','successor']};});
})(saturday$868$base.$$.prototype);
var saturday$870$base;
function getSaturday$base(){
    if (saturday$870$base===undefined)saturday$870$base=$init$saturday$868$base()();
    return saturday$870$base;
}
exports.getSaturday$base=getSaturday$base;
getSaturday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:saturday$868$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Saturday_ is the day of the week that follows Friday and preceeds Sunday.",74)),$$$cl1.shared()];},d:['ceylon.time.base','saturday']};};
$prop$getSaturday$base={get:getSaturday$base,$$metamodel$$:getSaturday$base.$$metamodel$$};
exports.$prop$getSaturday$base=$prop$getSaturday$base;
function Month$base(integer, $$month){
    $init$Month$base();
    if ($$month===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$month.$$targs$$={Other:{t:Month$base}};
    $$month.$$targs$$={Other:{t:Month$base}};
    $$$cl1.Ordinal({Other:{t:Month$base}},$$month);
    $$$cl1.add_type_arg($$month,'Other',{t:Month$base});
    $$$cl1.Comparable({Other:{t:Month$base}},$$month);
    $$$cl1.add_type_arg($$month,'Other',{t:Month$base});
    $$month.integer$871_=integer;
    $$month.$prop$getInteger={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12",99)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$at','integer']};}};
    $$month.$prop$getInteger.get=function(){return integer};
    return $$month;
}
Month$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:Month$base}}},{t:$$$cl1.Comparable,a:{Other:{t:Month$base}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A month in a Gregorian or Julian calendar system.",49)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.base','Month']};};
exports.Month$base=Month$base;
function $init$Month$base(){
    if (Month$base.$$===undefined){
        $$$cl1.initTypeProto(Month$base,'ceylon.time.base::Month',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
        (function($$month){
            $$$cl1.defineAttr($$month,'integer',function(){return this.integer$871_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12",99)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$at','integer']};});
            $$month.numberOfDays$defs$leapYear=function(leapYear$872){var $$month=this;
            return false;};
            $$month.numberOfDays=function numberOfDays(leapYear$872){
                var $$month=this;
                if(leapYear$872===undefined){leapYear$872=$$month.numberOfDays$defs$leapYear(leapYear$872);}
                
                var case$873=$$month;
                if (case$873===getFebruary$base()) {
                    return (opt$874=(leapYear$872?(29):null),opt$874!==null?opt$874:(28));
                    var opt$874;
                }else if (case$873===getApril$base() || case$873===getJune$base() || case$873===getSeptember$base() || case$873===getNovember$base()) {
                    return (30);
                }else if (case$873===getJanuary$base() || case$873===getMarch$base() || case$873===getMay$base() || case$873===getJuly$base() || case$873===getAugust$base() || case$873===getOctober$base() || case$873===getDecember$base()) {
                    return (31);
                }
            };$$month.numberOfDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns number of days in this month.",37)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.time.base','Month','$m','numberOfDays']};};
            $$month.fisrtDayOfYear$defs$leapYear=function(leapYear$875){var $$month=this;
            return false;};
            $$month.fisrtDayOfYear=function fisrtDayOfYear(leapYear$875){
                var $$month=this;
                if(leapYear$875===undefined){leapYear$875=$$month.fisrtDayOfYear$defs$leapYear(leapYear$875);}
                //assert at Month.ceylon (28:8-28:60)
                var day$876;
                if (!((day$876=getFirstDayOfMonth$base().get($$month.integer.minus((1))))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists day = firstDayOfMonth[this.integer-1]\' at Month.ceylon (28:14-28:59)"),'28:8-28:60','Month.ceylon'); }
                if((leapYear$875&&$$month.compare(getFebruary$base()).equals($$$cl1.getLarger()))){
                    return day$876.plus((1));
                }
                return day$876;
            };$$month.fisrtDayOfYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the _day of year_ value for first of this month.",56)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.time.base','Month','$m','fisrtDayOfYear']};};
            $$month.compare=function (other$877){
                var $$month=this;
                return $$month.integer.compare(other$877.integer);
            };
            $$month.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Compares ordinal numbers of two instances of `Month`.",53)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','Month','$m','compare']};};
            $$month.plusMonths=function (number$878){
                var $$month=this;
                return (opt$879=(number$878.equals((0))?$$month:null),opt$879!==null?opt$879:$$month.add(number$878).month);
            };
            $$month.plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year that comes specified number of months after this month.",77)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','plusMonths']};};
            $$month.minusMonths=function (number$880){
                var $$month=this;
                return (opt$881=(number$880.equals((0))?$$month:null),opt$881!==null?opt$881:$$month.add((-number$880)).month);
            };
            $$month.minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year that comes specified number of months before this month.",78)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','minusMonths']};};
            function Overflow$Month(month, years, $$overflow$Month){
                $init$Overflow$Month();
                if ($$overflow$Month===undefined)$$overflow$Month=new this.Overflow$Month.$$;
                $$overflow$Month.$$outer=this;
                $$overflow$Month.month$882_=month;
                $$overflow$Month.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("New month value.",16)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};}};
                $$overflow$Month.$prop$getMonth.get=function(){return month};
                $$overflow$Month.years$883_=years;
                $$overflow$Month.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of years overflowed by calculation.",42)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};}};
                $$overflow$Month.$prop$getYears.get=function(){return years};
                return $$overflow$Month;
            }
            Overflow$Month.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$cont:Month$base,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A result of adding or subtracting a month to another amount.",60)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow']};};
            function $init$Overflow$Month(){
                if (Overflow$Month.$$===undefined){
                    $$$cl1.initTypeProto(Overflow$Month,'ceylon.time.base::Month.Overflow',$$$cl1.Basic);
                    Month$base.Overflow$Month=Overflow$Month;
                    (function($$overflow$Month){
                        $$$cl1.defineAttr($$overflow$Month,'month',function(){return this.month$882_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("New month value.",16)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};});
                        $$$cl1.defineAttr($$overflow$Month,'years',function(){return this.years$883_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of years overflowed by calculation.",42)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};});
                    })(Overflow$Month.$$.prototype);
                }
                return Overflow$Month;
            }
            $$month.$init$Overflow$Month=$init$Overflow$Month;
            $init$Overflow$Month();
            $$month.Overflow$Month=Overflow$Month;
            $$month.add=function add(numberOfMonths$884){
                var $$month=this;
                var next$885=$$month.integer.minus((1)).plus(numberOfMonths$884);
                var nextMonth$886=floorMod$internal$math(next$885,getMonths$base().perYear);
                //assert at Month.ceylon (61:8-61:53)
                var month$887;
                if (!((month$887=getMonths$base().all.get(nextMonth$886))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists month = months.all[nextMonth]\' at Month.ceylon (61:15-61:52)"),'61:8-61:53','Month.ceylon'); }
                var years$888=floorDiv$internal$math(next$885,(12));
                $prop$getYears$888={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.base','Month','$m','add','$at','years']};}};
                $prop$getYears$888.get=function(){return years$888};
                return $$month.Overflow$Month(month$887,years$888);
            };$$month.add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base.Overflow$Month},$ps:[{$nm:'numberOfMonths',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this month and returns the result of \nas new month value and number of times the operation overflowed.",127)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','add']};};
        })(Month$base.$$.prototype);
    }
    return Month$base;
}
exports.$init$Month$base=$init$Month$base;
$init$Month$base();
var opt$879,opt$881;
var firstDayOfMonth$889$base;function $valinit$firstDayOfMonth$889$base(){if (firstDayOfMonth$889$base===undefined)firstDayOfMonth$889$base=$$$cl1.Tuple((1),$$$cl1.Tuple((32),$$$cl1.Tuple((60),$$$cl1.Tuple((91),$$$cl1.Tuple((121),$$$cl1.Tuple((152),$$$cl1.Tuple((182),$$$cl1.Tuple((213),$$$cl1.Tuple((244),$$$cl1.Tuple((274),$$$cl1.Tuple((305),$$$cl1.Tuple((335),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});return firstDayOfMonth$889$base;};$valinit$firstDayOfMonth$889$base();
function getFirstDayOfMonth$base(){return $valinit$firstDayOfMonth$889$base();}
exports.getFirstDayOfMonth$base=getFirstDayOfMonth$base;
var $prop$getFirstDayOfMonth$base={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$an:function(){return[$$$cl1.doc($$$cl1.String("Table of _day of year_ values for the first day of each month.",62))];},d:['ceylon.time.base','firstDayOfMonth']};}};
exports.$prop$getFirstDayOfMonth$base=$prop$getFirstDayOfMonth$base;
$prop$getFirstDayOfMonth$base.get=getFirstDayOfMonth$base;
getFirstDayOfMonth$base.$$metamodel$$=$prop$getFirstDayOfMonth$base.$$metamodel$$;
function monthOf$base(month$890){
    
    var case$891=month$890;
    if ($$$cl1.isOfType(month$890,{t:Month$base})) {
        return case$891;
    }else if ($$$cl1.isOfType(month$890,{t:$$$cl1.Integer})) {
        //assert at Month.ceylon (82:8-83:72)
        if (!(((getJanuary$base().integer.compare(case$891)!==$$$cl1.getLarger())&&(case$891.compare(getDecember$base().integer)!==$$$cl1.getLarger())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid month.: \' january.integer <= month && month <= december.integer \' at Month.ceylon (83:15-83:71)"),'82:8-83:72','Month.ceylon'); }
        //assert at Month.ceylon (84:8-84:49)
        var m$892;
        if (!((m$892=getMonths$base().all.get(case$891.minus((1))))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' exists m = months.all[month-1] \' at Month.ceylon (84:15-84:48)"),'84:8-84:49','Month.ceylon'); }
        return m$892;
    }
}
exports.monthOf$base=monthOf$base;
monthOf$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year specified by the input argument.\n\nIf input is an Integer, this method returns a month according to the integer \nvalue of the [[MonthOfYear]] (i.e. 1=[[january]], 2=[[february]], ... 12=[[december]])\nAny invalid values will throw an exception.\n\nIf the imput value is a [[MonthOfYear]], the input value is returned as is.",341)),$$$cl1.shared()];},d:['ceylon.time.base','monthOf']};};
function january$893$base(){
    var $$january=new january$893$base.$$;
    Month$base(getGregorian$chronology().january,$$january);
    $$january.string$894_=$$$cl1.String("january",7);
    $$january.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','string']};}};
    $$january.$prop$getString.get=function(){return string};
    $$january.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','predecessor']};}};
    $$january.$prop$getPredecessor.get=function(){return predecessor};
    $$january.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','successor']};}};
    $$january.$prop$getSuccessor.get=function(){return successor};
    return $$january;
}
function $init$january$893$base(){
    if (january$893$base.$$===undefined){
        $$$cl1.initTypeProto(january$893$base,'ceylon.time.base::january',$init$Month$base());
    }
    return january$893$base;
}
exports.$init$january$893$base=$init$january$893$base;
$init$january$893$base();
(function($$january){
    $$$cl1.defineAttr($$january,'string',function(){return this.string$894_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','string']};});
    $$$cl1.defineAttr($$january,'predecessor',function(){
        var $$january=this;
        return getDecember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','predecessor']};});
    $$$cl1.defineAttr($$january,'successor',function(){
        var $$january=this;
        return getFebruary$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$893$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','successor']};});
})(january$893$base.$$.prototype);
var january$895$base;
function getJanuary$base(){
    if (january$895$base===undefined)january$895$base=$init$january$893$base()();
    return january$895$base;
}
exports.getJanuary$base=getJanuary$base;
getJanuary$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:january$893$base},$an:function(){return[$$$cl1.doc($$$cl1.String("January. The first month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','january']};};
$prop$getJanuary$base={get:getJanuary$base,$$metamodel$$:getJanuary$base.$$metamodel$$};
exports.$prop$getJanuary$base=$prop$getJanuary$base;
function february$896$base(){
    var $$february=new february$896$base.$$;
    Month$base(getGregorian$chronology().february,$$february);
    $$february.string$897_=$$$cl1.String("february",8);
    $$february.$prop$getString.get=function(){return string};
    $$february.$prop$getPredecessor.get=function(){return predecessor};
    $$february.$prop$getSuccessor.get=function(){return successor};
    return $$february;
}
function $init$february$896$base(){
    if (february$896$base.$$===undefined){
        $$$cl1.initTypeProto(february$896$base,'ceylon.time.base::february',$init$Month$base());
    }
    return february$896$base;
}
exports.$init$february$896$base=$init$february$896$base;
$init$february$896$base();
(function($$february){
    $$$cl1.defineAttr($$february,'string',function(){return this.string$897_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:february$896$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','string']};});
    $$$cl1.defineAttr($$february,'predecessor',function(){
        var $$february=this;
        return getJanuary$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:february$896$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','predecessor']};});
    $$$cl1.defineAttr($$february,'successor',function(){
        var $$february=this;
        return getMarch$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:february$896$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','successor']};});
})(february$896$base.$$.prototype);
var february$898$base;
function getFebruary$base(){
    if (february$898$base===undefined)february$898$base=$init$february$896$base()();
    return february$898$base;
}
exports.getFebruary$base=getFebruary$base;
getFebruary$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:february$896$base},$an:function(){return[$$$cl1.doc($$$cl1.String("February. The second month of a gregorian calendar system.",58)),$$$cl1.shared()];},d:['ceylon.time.base','february']};};
$prop$getFebruary$base={get:getFebruary$base,$$metamodel$$:getFebruary$base.$$metamodel$$};
exports.$prop$getFebruary$base=$prop$getFebruary$base;
function march$899$base(){
    var $$march=new march$899$base.$$;
    Month$base(getGregorian$chronology().march,$$march);
    $$march.string$900_=$$$cl1.String("march",5);
    $$march.$prop$getString.get=function(){return string};
    $$march.$prop$getPredecessor.get=function(){return predecessor};
    $$march.$prop$getSuccessor.get=function(){return successor};
    return $$march;
}
function $init$march$899$base(){
    if (march$899$base.$$===undefined){
        $$$cl1.initTypeProto(march$899$base,'ceylon.time.base::march',$init$Month$base());
    }
    return march$899$base;
}
exports.$init$march$899$base=$init$march$899$base;
$init$march$899$base();
(function($$march){
    $$$cl1.defineAttr($$march,'string',function(){return this.string$900_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:march$899$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','string']};});
    $$$cl1.defineAttr($$march,'predecessor',function(){
        var $$march=this;
        return getFebruary$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:march$899$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','predecessor']};});
    $$$cl1.defineAttr($$march,'successor',function(){
        var $$march=this;
        return getApril$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:march$899$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','successor']};});
})(march$899$base.$$.prototype);
var march$901$base;
function getMarch$base(){
    if (march$901$base===undefined)march$901$base=$init$march$899$base()();
    return march$901$base;
}
exports.getMarch$base=getMarch$base;
getMarch$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:march$899$base},$an:function(){return[$$$cl1.doc($$$cl1.String("March. The third month of a gregorian calendar system.",54)),$$$cl1.shared()];},d:['ceylon.time.base','march']};};
$prop$getMarch$base={get:getMarch$base,$$metamodel$$:getMarch$base.$$metamodel$$};
exports.$prop$getMarch$base=$prop$getMarch$base;
function april$902$base(){
    var $$april=new april$902$base.$$;
    Month$base(getGregorian$chronology().april,$$april);
    $$april.string$903_=$$$cl1.String("april",5);
    $$april.$prop$getString.get=function(){return string};
    $$april.$prop$getPredecessor.get=function(){return predecessor};
    $$april.$prop$getSuccessor.get=function(){return successor};
    return $$april;
}
function $init$april$902$base(){
    if (april$902$base.$$===undefined){
        $$$cl1.initTypeProto(april$902$base,'ceylon.time.base::april',$init$Month$base());
    }
    return april$902$base;
}
exports.$init$april$902$base=$init$april$902$base;
$init$april$902$base();
(function($$april){
    $$$cl1.defineAttr($$april,'string',function(){return this.string$903_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:april$902$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','string']};});
    $$$cl1.defineAttr($$april,'predecessor',function(){
        var $$april=this;
        return getMarch$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:april$902$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','predecessor']};});
    $$$cl1.defineAttr($$april,'successor',function(){
        var $$april=this;
        return getMay$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:april$902$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','successor']};});
})(april$902$base.$$.prototype);
var april$904$base;
function getApril$base(){
    if (april$904$base===undefined)april$904$base=$init$april$902$base()();
    return april$904$base;
}
exports.getApril$base=getApril$base;
getApril$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:april$902$base},$an:function(){return[$$$cl1.doc($$$cl1.String("April. The fourth month of a gregorian calendar system.",55)),$$$cl1.shared()];},d:['ceylon.time.base','april']};};
$prop$getApril$base={get:getApril$base,$$metamodel$$:getApril$base.$$metamodel$$};
exports.$prop$getApril$base=$prop$getApril$base;
function may$905$base(){
    var $$may=new may$905$base.$$;
    Month$base((5),$$may);
    $$may.string$906_=$$$cl1.String("may",3);
    $$may.$prop$getString.get=function(){return string};
    $$may.$prop$getPredecessor.get=function(){return predecessor};
    $$may.$prop$getSuccessor.get=function(){return successor};
    return $$may;
}
function $init$may$905$base(){
    if (may$905$base.$$===undefined){
        $$$cl1.initTypeProto(may$905$base,'ceylon.time.base::may',$init$Month$base());
    }
    return may$905$base;
}
exports.$init$may$905$base=$init$may$905$base;
$init$may$905$base();
(function($$may){
    $$$cl1.defineAttr($$may,'string',function(){return this.string$906_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:may$905$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','string']};});
    $$$cl1.defineAttr($$may,'predecessor',function(){
        var $$may=this;
        return getApril$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:may$905$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','predecessor']};});
    $$$cl1.defineAttr($$may,'successor',function(){
        var $$may=this;
        return getJune$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:may$905$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','successor']};});
})(may$905$base.$$.prototype);
var may$907$base;
function getMay$base(){
    if (may$907$base===undefined)may$907$base=$init$may$905$base()();
    return may$907$base;
}
exports.getMay$base=getMay$base;
getMay$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:may$905$base},$an:function(){return[$$$cl1.doc($$$cl1.String("May. The fifth month of a gregorian calendar system.",52)),$$$cl1.shared()];},d:['ceylon.time.base','may']};};
$prop$getMay$base={get:getMay$base,$$metamodel$$:getMay$base.$$metamodel$$};
exports.$prop$getMay$base=$prop$getMay$base;
function june$908$base(){
    var $$june=new june$908$base.$$;
    Month$base(getGregorian$chronology().june,$$june);
    $$june.string$909_=$$$cl1.String("june",4);
    $$june.$prop$getString.get=function(){return string};
    $$june.$prop$getPredecessor.get=function(){return predecessor};
    $$june.$prop$getSuccessor.get=function(){return successor};
    return $$june;
}
function $init$june$908$base(){
    if (june$908$base.$$===undefined){
        $$$cl1.initTypeProto(june$908$base,'ceylon.time.base::june',$init$Month$base());
    }
    return june$908$base;
}
exports.$init$june$908$base=$init$june$908$base;
$init$june$908$base();
(function($$june){
    $$$cl1.defineAttr($$june,'string',function(){return this.string$909_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:june$908$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','string']};});
    $$$cl1.defineAttr($$june,'predecessor',function(){
        var $$june=this;
        return getMay$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:june$908$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','predecessor']};});
    $$$cl1.defineAttr($$june,'successor',function(){
        var $$june=this;
        return getJuly$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:june$908$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','successor']};});
})(june$908$base.$$.prototype);
var june$910$base;
function getJune$base(){
    if (june$910$base===undefined)june$910$base=$init$june$908$base()();
    return june$910$base;
}
exports.getJune$base=getJune$base;
getJune$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:june$908$base},$an:function(){return[$$$cl1.doc($$$cl1.String("June. The sixth month of a gregorian calendar system.",53)),$$$cl1.shared()];},d:['ceylon.time.base','june']};};
$prop$getJune$base={get:getJune$base,$$metamodel$$:getJune$base.$$metamodel$$};
exports.$prop$getJune$base=$prop$getJune$base;
function july$911$base(){
    var $$july=new july$911$base.$$;
    Month$base(getGregorian$chronology().july,$$july);
    $$july.string$912_=$$$cl1.String("july",4);
    $$july.$prop$getString.get=function(){return string};
    $$july.$prop$getPredecessor.get=function(){return predecessor};
    $$july.$prop$getSuccessor.get=function(){return successor};
    return $$july;
}
function $init$july$911$base(){
    if (july$911$base.$$===undefined){
        $$$cl1.initTypeProto(july$911$base,'ceylon.time.base::july',$init$Month$base());
    }
    return july$911$base;
}
exports.$init$july$911$base=$init$july$911$base;
$init$july$911$base();
(function($$july){
    $$$cl1.defineAttr($$july,'string',function(){return this.string$912_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:july$911$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','string']};});
    $$$cl1.defineAttr($$july,'predecessor',function(){
        var $$july=this;
        return getJune$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:july$911$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','predecessor']};});
    $$$cl1.defineAttr($$july,'successor',function(){
        var $$july=this;
        return getAugust$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:july$911$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','successor']};});
})(july$911$base.$$.prototype);
var july$913$base;
function getJuly$base(){
    if (july$913$base===undefined)july$913$base=$init$july$911$base()();
    return july$913$base;
}
exports.getJuly$base=getJuly$base;
getJuly$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:july$911$base},$an:function(){return[$$$cl1.doc($$$cl1.String("July. The seventh month of a gregorian calendar system.",55)),$$$cl1.shared()];},d:['ceylon.time.base','july']};};
$prop$getJuly$base={get:getJuly$base,$$metamodel$$:getJuly$base.$$metamodel$$};
exports.$prop$getJuly$base=$prop$getJuly$base;
function august$914$base(){
    var $$august=new august$914$base.$$;
    Month$base(getGregorian$chronology().august,$$august);
    $$august.string$915_=$$$cl1.String("august",6);
    $$august.$prop$getString.get=function(){return string};
    $$august.$prop$getPredecessor.get=function(){return predecessor};
    $$august.$prop$getSuccessor.get=function(){return successor};
    return $$august;
}
function $init$august$914$base(){
    if (august$914$base.$$===undefined){
        $$$cl1.initTypeProto(august$914$base,'ceylon.time.base::august',$init$Month$base());
    }
    return august$914$base;
}
exports.$init$august$914$base=$init$august$914$base;
$init$august$914$base();
(function($$august){
    $$$cl1.defineAttr($$august,'string',function(){return this.string$915_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:august$914$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','string']};});
    $$$cl1.defineAttr($$august,'predecessor',function(){
        var $$august=this;
        return getJuly$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:august$914$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','predecessor']};});
    $$$cl1.defineAttr($$august,'successor',function(){
        var $$august=this;
        return getSeptember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:august$914$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','successor']};});
})(august$914$base.$$.prototype);
var august$916$base;
function getAugust$base(){
    if (august$916$base===undefined)august$916$base=$init$august$914$base()();
    return august$916$base;
}
exports.getAugust$base=getAugust$base;
getAugust$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:august$914$base},$an:function(){return[$$$cl1.doc($$$cl1.String("August. The eighth month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','august']};};
$prop$getAugust$base={get:getAugust$base,$$metamodel$$:getAugust$base.$$metamodel$$};
exports.$prop$getAugust$base=$prop$getAugust$base;
function september$917$base(){
    var $$september=new september$917$base.$$;
    Month$base(getGregorian$chronology().september,$$september);
    $$september.string$918_=$$$cl1.String("september",9);
    $$september.$prop$getString.get=function(){return string};
    $$september.$prop$getPredecessor.get=function(){return predecessor};
    $$september.$prop$getSuccessor.get=function(){return successor};
    return $$september;
}
function $init$september$917$base(){
    if (september$917$base.$$===undefined){
        $$$cl1.initTypeProto(september$917$base,'ceylon.time.base::september',$init$Month$base());
    }
    return september$917$base;
}
exports.$init$september$917$base=$init$september$917$base;
$init$september$917$base();
(function($$september){
    $$$cl1.defineAttr($$september,'string',function(){return this.string$918_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:september$917$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','string']};});
    $$$cl1.defineAttr($$september,'predecessor',function(){
        var $$september=this;
        return getAugust$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:september$917$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','predecessor']};});
    $$$cl1.defineAttr($$september,'successor',function(){
        var $$september=this;
        return getOctober$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:september$917$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','successor']};});
})(september$917$base.$$.prototype);
var september$919$base;
function getSeptember$base(){
    if (september$919$base===undefined)september$919$base=$init$september$917$base()();
    return september$919$base;
}
exports.getSeptember$base=getSeptember$base;
getSeptember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:september$917$base},$an:function(){return[$$$cl1.doc($$$cl1.String("September. The nineth month of a gregorian calendar system.",59)),$$$cl1.shared()];},d:['ceylon.time.base','september']};};
$prop$getSeptember$base={get:getSeptember$base,$$metamodel$$:getSeptember$base.$$metamodel$$};
exports.$prop$getSeptember$base=$prop$getSeptember$base;
function october$920$base(){
    var $$october=new october$920$base.$$;
    Month$base(getGregorian$chronology().october,$$october);
    $$october.string$921_=$$$cl1.String("october",7);
    $$october.$prop$getString.get=function(){return string};
    $$october.$prop$getPredecessor.get=function(){return predecessor};
    $$october.$prop$getSuccessor.get=function(){return successor};
    return $$october;
}
function $init$october$920$base(){
    if (october$920$base.$$===undefined){
        $$$cl1.initTypeProto(october$920$base,'ceylon.time.base::october',$init$Month$base());
    }
    return october$920$base;
}
exports.$init$october$920$base=$init$october$920$base;
$init$october$920$base();
(function($$october){
    $$$cl1.defineAttr($$october,'string',function(){return this.string$921_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:october$920$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','string']};});
    $$$cl1.defineAttr($$october,'predecessor',function(){
        var $$october=this;
        return getSeptember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:october$920$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','predecessor']};});
    $$$cl1.defineAttr($$october,'successor',function(){
        var $$october=this;
        return getNovember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:october$920$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','successor']};});
})(october$920$base.$$.prototype);
var october$922$base;
function getOctober$base(){
    if (october$922$base===undefined)october$922$base=$init$october$920$base()();
    return october$922$base;
}
exports.getOctober$base=getOctober$base;
getOctober$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:october$920$base},$an:function(){return[$$$cl1.doc($$$cl1.String("October. The tenth month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','october']};};
$prop$getOctober$base={get:getOctober$base,$$metamodel$$:getOctober$base.$$metamodel$$};
exports.$prop$getOctober$base=$prop$getOctober$base;
function november$923$base(){
    var $$november=new november$923$base.$$;
    Month$base(getGregorian$chronology().november,$$november);
    $$november.string$924_=$$$cl1.String("november",8);
    $$november.$prop$getString.get=function(){return string};
    $$november.$prop$getPredecessor.get=function(){return predecessor};
    $$november.$prop$getSuccessor.get=function(){return successor};
    return $$november;
}
function $init$november$923$base(){
    if (november$923$base.$$===undefined){
        $$$cl1.initTypeProto(november$923$base,'ceylon.time.base::november',$init$Month$base());
    }
    return november$923$base;
}
exports.$init$november$923$base=$init$november$923$base;
$init$november$923$base();
(function($$november){
    $$$cl1.defineAttr($$november,'string',function(){return this.string$924_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:november$923$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','string']};});
    $$$cl1.defineAttr($$november,'predecessor',function(){
        var $$november=this;
        return getOctober$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:november$923$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','predecessor']};});
    $$$cl1.defineAttr($$november,'successor',function(){
        var $$november=this;
        return getDecember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:november$923$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','successor']};});
})(november$923$base.$$.prototype);
var november$925$base;
function getNovember$base(){
    if (november$925$base===undefined)november$925$base=$init$november$923$base()();
    return november$925$base;
}
exports.getNovember$base=getNovember$base;
getNovember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:november$923$base},$an:function(){return[$$$cl1.doc($$$cl1.String("November. The eleventh month of a gregorian calendar system.",60)),$$$cl1.shared()];},d:['ceylon.time.base','november']};};
$prop$getNovember$base={get:getNovember$base,$$metamodel$$:getNovember$base.$$metamodel$$};
exports.$prop$getNovember$base=$prop$getNovember$base;
function december$926$base(){
    var $$december=new december$926$base.$$;
    Month$base(getGregorian$chronology().december,$$december);
    $$december.string$927_=$$$cl1.String("december",8);
    $$december.$prop$getString.get=function(){return string};
    $$december.$prop$getPredecessor.get=function(){return predecessor};
    $$december.$prop$getSuccessor.get=function(){return successor};
    return $$december;
}
function $init$december$926$base(){
    if (december$926$base.$$===undefined){
        $$$cl1.initTypeProto(december$926$base,'ceylon.time.base::december',$init$Month$base());
    }
    return december$926$base;
}
exports.$init$december$926$base=$init$december$926$base;
$init$december$926$base();
(function($$december){
    $$$cl1.defineAttr($$december,'string',function(){return this.string$927_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:december$926$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','string']};});
    $$$cl1.defineAttr($$december,'predecessor',function(){
        var $$december=this;
        return getNovember$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:december$926$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','predecessor']};});
    $$$cl1.defineAttr($$december,'successor',function(){
        var $$december=this;
        return getJanuary$base();
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:december$926$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','successor']};});
})(december$926$base.$$.prototype);
var december$928$base;
function getDecember$base(){
    if (december$928$base===undefined)december$928$base=$init$december$926$base()();
    return december$928$base;
}
exports.getDecember$base=getDecember$base;
getDecember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:december$926$base},$an:function(){return[$$$cl1.doc($$$cl1.String("December. The twelveth (last) month of a gregorian calendar system.",67)),$$$cl1.shared()];},d:['ceylon.time.base','december']};};
$prop$getDecember$base={get:getDecember$base,$$metamodel$$:getDecember$base.$$metamodel$$};
exports.$prop$getDecember$base=$prop$getDecember$base;
exports.$pkg$ans$ceylon$time$base=function(){return[$$$cl1.doc($$$cl1.String("Base classes and interfaces of the Date/Time library.",53)),$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function PeriodBehavior$base($$targs$$,$$periodBehavior){
    $$$cl1.set_type_args($$periodBehavior,$$targs$$);
}
PeriodBehavior$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Self:{'satisfies':[{t:PeriodBehavior$base,a:{Self:'Self'}},{t:ReadablePeriod$base}]}},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behavior of objects representing a period.",49)),$$$cl1.shared()];},d:['ceylon.time.base','PeriodBehavior']};};
exports.PeriodBehavior$base=PeriodBehavior$base;
function $init$PeriodBehavior$base(){
    if (PeriodBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(PeriodBehavior$base,'ceylon.time.base::PeriodBehavior');
        (function($$periodBehavior){
        })(PeriodBehavior$base.$$.prototype);
    }
    return PeriodBehavior$base;
}
exports.$init$PeriodBehavior$base=$init$PeriodBehavior$base;
$init$PeriodBehavior$base();
function Range$base($$targs$$,$$range){
    $$$cl1.Iterable($$range.$$targs$$===undefined?$$targs$$:{Absent:{t:$$$cl1.Null},Element:$$range.$$targs$$.Element},$$range);
    $$$cl1.add_type_arg($$range,'Absent',{t:$$$cl1.Null});
    $$$cl1.set_type_args($$range,$$targs$$);
}
Range$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Element'}},{t:$$$cl1.Ordinal,a:{Other:'Element'}}]},StepBy:{}},satisfies:[{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An interface to represent a Range between same kinds of _Date_ or _DateTime_ or _Time_.",87)),$$$cl1.shared()];},d:['ceylon.time.base','Range']};};
exports.Range$base=Range$base;
function $init$Range$base(){
    if (Range$base.$$===undefined){
        $$$cl1.initTypeProto(Range$base,'ceylon.time.base::Range',$$$cl1.Iterable);
        (function($$range){
            $$range.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','from']};}};
            $$range.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','to']};}};
            $$range.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','step']};}};
            $$range.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','duration']};}};
            $$range.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','period']};}};
            $$range.equals=function equals(other$929){
                var $$range=this;
                var other$930;
                if($$$cl1.isOfType((other$930=other$929),{t:Range$base,a:{StepBy:$$range.$$targs$$.StepBy,Element:$$range.$$targs$$.Element}})){
                    return ($$range.from.equals(other$930.from)&&$$range.to.equals(other$930.to));
                }
                return false;
            };$$range.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.$default(),$$$cl1.actual()];},d:['ceylon.time.base','Range','$m','equals']};};
        })(Range$base.$$.prototype);
    }
    return Range$base;
}
exports.$init$Range$base=$init$Range$base;
$init$Range$base();
function ReadableDate$base($$readableDate){
}
ReadableDate$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A common interface of all date like objects.\n\nThis interface is common to all data types that\neither partially or fully represent information \nthat can be interpreted as _date_.",177)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),$Date),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),Time),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),DateTime),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time.timezone'),ZoneDateTime$timezone)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDate']};};
exports.ReadableDate$base=ReadableDate$base;
function $init$ReadableDate$base(){
    if (ReadableDate$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDate$base,'ceylon.time.base::ReadableDate');
        (function($$readableDate){
            $$readableDate.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The year of the date.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','year']};}};
            $$readableDate.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Month of the year value of the date.",36)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','month']};}};
            $$readableDate.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Day of month value of the date.",31)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','day']};}};
            $$readableDate.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Day of the week.",16)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfWeek']};}};
            $$readableDate.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of the week of the date.",31)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','weekOfYear']};}};
            $$readableDate.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of the day in year.",26)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfYear']};}};
            $$readableDate.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of calendar days since ERA.",34)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfEra']};}};
            $$readableDate.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("True if the year of the date is a leap year.",44)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','leapYear']};}};
        })(ReadableDate$base.$$.prototype);
    }
    return ReadableDate$base;
}
exports.$init$ReadableDate$base=$init$ReadableDate$base;
$init$ReadableDate$base();
function ReadableDateTime$base($$readableDateTime){
    ReadableDate$base($$readableDateTime);
    ReadableTime$base($$readableDateTime);
}
ReadableDateTime$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDate$base},{t:ReadableTime$base}],$an:function(){return[$$$cl1.doc($$$cl1.String("Common interface that can represent particular time of day on a specific date.",78)),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDateTime']};};
exports.ReadableDateTime$base=ReadableDateTime$base;
function $init$ReadableDateTime$base(){
    if (ReadableDateTime$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDateTime$base,'ceylon.time.base::ReadableDateTime',$init$ReadableDate$base(),$init$ReadableTime$base());
    }
    return ReadableDateTime$base;
}
exports.$init$ReadableDateTime$base=$init$ReadableDateTime$base;
$init$ReadableDateTime$base();
function ReadableDuration$base($$readableDuration){
}
ReadableDuration$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstraction of data representing a specific duration of time.\n\nA duration is a fixed delta of time between two instants \nmeasured in number of milliseconds.",159)),$$$cl1.see([$$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),Duration)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.ClassDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDuration']};};
exports.ReadableDuration$base=ReadableDuration$base;
function $init$ReadableDuration$base(){
    if (ReadableDuration$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDuration$base,'ceylon.time.base::ReadableDuration');
        (function($$readableDuration){
            $$readableDuration.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDuration$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds.",23)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDuration','$at','milliseconds']};}};
        })(ReadableDuration$base.$$.prototype);
    }
    return ReadableDuration$base;
}
exports.$init$ReadableDuration$base=$init$ReadableDuration$base;
$init$ReadableDuration$base();
function ReadableInstant$base($$readableInstant){
}
ReadableInstant$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstraction for data that can represent an instant of time.",62)),$$$cl1.see([$$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),Instant)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.ClassDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableInstant']};};
exports.ReadableInstant$base=ReadableInstant$base;
function $init$ReadableInstant$base(){
    if (ReadableInstant$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableInstant$base,'ceylon.time.base::ReadableInstant');
        (function($$readableInstant){
            $$readableInstant.$prop$getMillisecondsOfEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableInstant$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds \nsince beginning of an _epoch_ (january 1st 1970 UTC)",110)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableInstant','$at','millisecondsOfEpoch']};}};
        })(ReadableInstant$base.$$.prototype);
    }
    return ReadableInstant$base;
}
exports.$init$ReadableInstant$base=$init$ReadableInstant$base;
$init$ReadableInstant$base();
function ReadablePeriod$base($$readablePeriod){
    ReadableDatePeriod$base($$readablePeriod);
    ReadableTimePeriod$base($$readablePeriod);
}
ReadablePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],$an:function(){return[$$$cl1.doc($$$cl1.String("A Period of time represented as number of _years_, _months_, _days_, \n_hours_, _minutes_, _seconds_ and/or _milliseconds_.",122)),$$$cl1.shared()];},d:['ceylon.time.base','ReadablePeriod']};};
exports.ReadablePeriod$base=ReadablePeriod$base;
function $init$ReadablePeriod$base(){
    if (ReadablePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadablePeriod$base,'ceylon.time.base::ReadablePeriod',$init$ReadableDatePeriod$base(),$init$ReadableTimePeriod$base());
        (function($$readablePeriod){
            $$readablePeriod.$prop$getDateOnly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ReadableDatePeriod$base},$cont:ReadablePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a truncated view of this period that only contains number of \n_years_, _months_ and _days_.",99)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadablePeriod','$at','dateOnly']};}};
            $$readablePeriod.$prop$getTimeOnly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ReadableTimePeriod$base},$cont:ReadablePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a truncated view of this period that only contains number of \n_hours_, _minutes_, _seconds_ and _milliseconds_.",119)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadablePeriod','$at','timeOnly']};}};
        })(ReadablePeriod$base.$$.prototype);
    }
    return ReadablePeriod$base;
}
exports.$init$ReadablePeriod$base=$init$ReadablePeriod$base;
$init$ReadablePeriod$base();
function ReadableDatePeriod$base($$readableDatePeriod){
}
ReadableDatePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A period of _days_, _months_ and _years_.",41)),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDatePeriod']};};
exports.ReadableDatePeriod$base=ReadableDatePeriod$base;
function $init$ReadableDatePeriod$base(){
    if (ReadableDatePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDatePeriod$base,'ceylon.time.base::ReadableDatePeriod');
        (function($$readableDatePeriod){
            $$readableDatePeriod.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','years']};}};
            $$readableDatePeriod.$prop$getMonths={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','months']};}};
            $$readableDatePeriod.$prop$getDays={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','days']};}};
        })(ReadableDatePeriod$base.$$.prototype);
    }
    return ReadableDatePeriod$base;
}
exports.$init$ReadableDatePeriod$base=$init$ReadableDatePeriod$base;
$init$ReadableDatePeriod$base();
function ReadableTimePeriod$base($$readableTimePeriod){
}
ReadableTimePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A period of _hours_, _minutes_, _seconds_ and _milliseconds_.",61)),$$$cl1.shared()];},d:['ceylon.time.base','ReadableTimePeriod']};};
exports.ReadableTimePeriod$base=ReadableTimePeriod$base;
function $init$ReadableTimePeriod$base(){
    if (ReadableTimePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableTimePeriod$base,'ceylon.time.base::ReadableTimePeriod');
        (function($$readableTimePeriod){
            $$readableTimePeriod.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours",19)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','hours']};}};
            $$readableTimePeriod.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','minutes']};}};
            $$readableTimePeriod.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','seconds']};}};
            $$readableTimePeriod.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds",26)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','milliseconds']};}};
        })(ReadableTimePeriod$base.$$.prototype);
    }
    return ReadableTimePeriod$base;
}
exports.$init$ReadableTimePeriod$base=$init$ReadableTimePeriod$base;
$init$ReadableTimePeriod$base();
function ReadableTime$base($$readableTime){
}
ReadableTime$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Common interface capable of representing _time of day_.",55)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),Time),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time'),DateTime),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time.timezone'),ZoneDateTime$timezone)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableTime']};};
exports.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
    if (ReadableTime$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableTime$base,'ceylon.time.base::ReadableTime');
        (function($$readableTime){
            $$readableTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Hour of day.",12)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','hours']};}};
            $$readableTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','minutes']};}};
            $$readableTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','seconds']};}};
            $$readableTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last second.",41)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','milliseconds']};}};
            $$readableTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since the beginning of the day.",49)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','minutesOfDay']};}};
            $$readableTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since the beginning of the day.",49)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','secondsOfDay']};}};
            $$readableTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since the beginning of the day.",54)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','millisecondsOfDay']};}};
        })(ReadableTime$base.$$.prototype);
    }
    return ReadableTime$base;
}
exports.$init$ReadableTime$base=$init$ReadableTime$base;
$init$ReadableTime$base();
function TimeBehavior$base($$targs$$,$$timeBehavior){
    $$$cl1.set_type_args($$timeBehavior,$$targs$$);
}
TimeBehavior$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableTime$base}]}},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behavior for the types that represent time.",50)),$$$cl1.shared()];},d:['ceylon.time.base','TimeBehavior']};};
exports.TimeBehavior$base=TimeBehavior$base;
function $init$TimeBehavior$base(){
    if (TimeBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(TimeBehavior$base,'ceylon.time.base::TimeBehavior');
        (function($$timeBehavior){
        })(TimeBehavior$base.$$.prototype);
    }
    return TimeBehavior$base;
}
exports.$init$TimeBehavior$base=$init$TimeBehavior$base;
$init$TimeBehavior$base();
function rd$chronology(t$931){
    var epoch$932=(0);
    return t$931.minus(epoch$932);
}
exports.rd$chronology=rd$chronology;
rd$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'t',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Converts _Rata Die_ day number to a fixed date value.\n\n_Rata Die_ is fixed at Monday, January 1st, 1. (Gregorian).",114)),$$$cl1.shared()];},d:['ceylon.time.chronology','rd']};};
function unixTime$933$chronology(){
    var $$unixTime=new unixTime$933$chronology.$$;
    $$unixTime.$prop$getEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:unixTime$933$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Fixed date value of the _Unix time_ epoch (1970-01-01).",55)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$at','epoch']};}};
    $$unixTime.$prop$getEpoch.get=function(){return epoch};
    return $$unixTime;
}
function $init$unixTime$933$chronology(){
    if (unixTime$933$chronology.$$===undefined){
        $$$cl1.initTypeProto(unixTime$933$chronology,'ceylon.time.chronology::unixTime',$$$cl1.Basic);
    }
    return unixTime$933$chronology;
}
exports.$init$unixTime$933$chronology=$init$unixTime$933$chronology;
$init$unixTime$933$chronology();
(function($$unixTime){
    $$$cl1.defineAttr($$unixTime,'epoch',function(){
        var $$unixTime=this;
        return getGregorian$chronology().fixedFrom($$$cl1.Tuple((1970),$$$cl1.Tuple((1),$$$cl1.Tuple((1),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:unixTime$933$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Fixed date value of the _Unix time_ epoch (1970-01-01).",55)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$at','epoch']};});
    $$unixTime.fixedFromTime=function fixedFromTime(time$934){
        var $$unixTime=this;
        return floorDiv$internal$math(time$934,getMilliseconds$base().perDay).plus($$unixTime.epoch);
    };$$unixTime.fixedFromTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$933$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a _fixed date_ from the _unix time_ value.",50)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','fixedFromTime']};};
    $$unixTime.timeFromFixed=function timeFromFixed(date$935){
        var $$unixTime=this;
        return date$935.minus($$unixTime.epoch).times(getMilliseconds$base().perDay);
    };$$unixTime.timeFromFixed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$933$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return milliseconds elapsed from 1970-01-01 00:00:00.",53)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','timeFromFixed']};};
    $$unixTime.timeOfDay=function timeOfDay(time$936){
        var $$unixTime=this;
        return floorMod$internal$math(time$936,getMilliseconds$base().perDay);
    };$$unixTime.timeOfDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$933$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _time of day_ in milliseconds for the specified _unix time_ value.",74)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','timeOfDay']};};
})(unixTime$933$chronology.$$.prototype);
var unixTime$937$chronology;
function getUnixTime$chronology(){
    if (unixTime$937$chronology===undefined)unixTime$937$chronology=$init$unixTime$933$chronology()();
    return unixTime$937$chronology;
}
exports.getUnixTime$chronology=getUnixTime$chronology;
getUnixTime$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:unixTime$933$chronology},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _Unix time_.",33)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime']};};
$prop$getUnixTime$chronology={get:getUnixTime$chronology,$$metamodel$$:getUnixTime$chronology.$$metamodel$$};
exports.$prop$getUnixTime$chronology=$prop$getUnixTime$chronology;
function Chronology$chronology($$targs$$,$$chronology){
    $$$cl1.set_type_args($$chronology,$$targs$$);
}
Chronology$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Fields:{'satisfies':[{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}]}},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Generic base interface of a _calendar system_.\nChronology serves as a computational backend to \na Date representation of the same calendar system.",146)),$$$cl1.shared()];},d:['ceylon.time.chronology','Chronology']};};
exports.Chronology$chronology=Chronology$chronology;
function $init$Chronology$chronology(){
    if (Chronology$chronology.$$===undefined){
        $$$cl1.initTypeProto(Chronology$chronology,'ceylon.time.chronology::Chronology');
        (function($$chronology){
        })(Chronology$chronology.$$.prototype);
    }
    return Chronology$chronology;
}
exports.$init$Chronology$chronology=$init$Chronology$chronology;
$init$Chronology$chronology();
function LeapYear$chronology($$targs$$,$$leapYear){
    $$$cl1.set_type_args($$leapYear,$$targs$$);
}
LeapYear$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Self:{'satisfies':[{t:Chronology$chronology,a:{Fields:'Fields'}}]},Fields:{'satisfies':[{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}]}},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An interface for calendar system that defines leap year rules.\n\n*Note:* This interface is meant to convey a Calendar that has some sort of leap year syntax.",156)),$$$cl1.shared()];},d:['ceylon.time.chronology','LeapYear']};};
exports.LeapYear$chronology=LeapYear$chronology;
function $init$LeapYear$chronology(){
    if (LeapYear$chronology.$$===undefined){
        $$$cl1.initTypeProto(LeapYear$chronology,'ceylon.time.chronology::LeapYear');
        (function($$leapYear){
        })(LeapYear$chronology.$$.prototype);
    }
    return LeapYear$chronology;
}
exports.$init$LeapYear$chronology=$init$LeapYear$chronology;
$init$LeapYear$chronology();
function GregorianCalendar$chronology($$gregorianCalendar){
    $init$GregorianCalendar$chronology();
    if ($$gregorianCalendar===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$gregorianCalendar.$$targs$$={Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}};
    $$gregorianCalendar.$$targs$$={Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Self:{t:GregorianCalendar$chronology}};
    Chronology$chronology({Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}},$$gregorianCalendar);
    $$$cl1.add_type_arg($$gregorianCalendar,'Fields',{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}});
    LeapYear$chronology({Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Self:{t:GregorianCalendar$chronology}},$$gregorianCalendar);
    $$$cl1.add_type_arg($$gregorianCalendar,'Fields',{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}});
    $$$cl1.add_type_arg($$gregorianCalendar,'Self',{t:GregorianCalendar$chronology});
    return $$gregorianCalendar;
}
GregorianCalendar$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Chronology$chronology,a:{Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}},{t:LeapYear$chronology,a:{Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Self:{t:GregorianCalendar$chronology}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Base class for a gregorian calendar chronology.",47)),$$$cl1.abstract(),$$$cl1.shared()];},d:['ceylon.time.chronology','GregorianCalendar']};};
exports.GregorianCalendar$chronology=GregorianCalendar$chronology;
function $init$GregorianCalendar$chronology(){
    if (GregorianCalendar$chronology.$$===undefined){
        $$$cl1.initTypeProto(GregorianCalendar$chronology,'ceylon.time.chronology::GregorianCalendar',$$$cl1.Basic,$init$Chronology$chronology(),$init$LeapYear$chronology());
    }
    return GregorianCalendar$chronology;
}
exports.$init$GregorianCalendar$chronology=$init$GregorianCalendar$chronology;
$init$GregorianCalendar$chronology();
function gregorian$938$chronology(){
    var $$gregorian=new gregorian$938$chronology.$$;
    GregorianCalendar$chronology($$gregorian);
    $$gregorian.epoch$939_=rd$chronology((1));
    $$gregorian.$prop$getEpoch.get=function(){return epoch};
    $$gregorian.january$940_=(1);
    $$gregorian.$prop$getJanuary={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','january']};}};
    $$gregorian.$prop$getJanuary.get=function(){return january};
    $$gregorian.february$941_=(2);
    $$gregorian.$prop$getFebruary={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','february']};}};
    $$gregorian.$prop$getFebruary.get=function(){return february};
    $$gregorian.march$942_=(3);
    $$gregorian.$prop$getMarch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','march']};}};
    $$gregorian.$prop$getMarch.get=function(){return march};
    $$gregorian.april$943_=(4);
    $$gregorian.$prop$getApril={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','april']};}};
    $$gregorian.$prop$getApril.get=function(){return april};
    $$gregorian.may$944_=(5);
    $$gregorian.$prop$getMay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','may']};}};
    $$gregorian.$prop$getMay.get=function(){return may};
    $$gregorian.june$945_=(6);
    $$gregorian.$prop$getJune={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','june']};}};
    $$gregorian.$prop$getJune.get=function(){return june};
    $$gregorian.july$946_=(7);
    $$gregorian.$prop$getJuly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','july']};}};
    $$gregorian.$prop$getJuly.get=function(){return july};
    $$gregorian.august$947_=(8);
    $$gregorian.$prop$getAugust={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','august']};}};
    $$gregorian.$prop$getAugust.get=function(){return august};
    $$gregorian.september$948_=(9);
    $$gregorian.$prop$getSeptember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','september']};}};
    $$gregorian.$prop$getSeptember.get=function(){return september};
    $$gregorian.october$949_=(10);
    $$gregorian.$prop$getOctober={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','october']};}};
    $$gregorian.$prop$getOctober.get=function(){return october};
    $$gregorian.november$950_=(11);
    $$gregorian.$prop$getNovember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','november']};}};
    $$gregorian.$prop$getNovember.get=function(){return november};
    $$gregorian.december$951_=(12);
    $$gregorian.$prop$getDecember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','december']};}};
    $$gregorian.$prop$getDecember.get=function(){return december};
    return $$gregorian;
}
function $init$gregorian$938$chronology(){
    if (gregorian$938$chronology.$$===undefined){
        $$$cl1.initTypeProto(gregorian$938$chronology,'ceylon.time.chronology::gregorian',$init$GregorianCalendar$chronology());
    }
    return gregorian$938$chronology;
}
exports.$init$gregorian$938$chronology=$init$gregorian$938$chronology;
$init$gregorian$938$chronology();
(function($$gregorian){
    $$$cl1.defineAttr($$gregorian,'epoch',function(){return this.epoch$939_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Epoch of the gregorian calendar.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$at','epoch']};});
    $$$cl1.defineAttr($$gregorian,'january',function(){return this.january$940_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','january']};});
    $$$cl1.defineAttr($$gregorian,'february',function(){return this.february$941_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','february']};});
    $$$cl1.defineAttr($$gregorian,'march',function(){return this.march$942_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','march']};});
    $$$cl1.defineAttr($$gregorian,'april',function(){return this.april$943_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','april']};});
    $$$cl1.defineAttr($$gregorian,'may',function(){return this.may$944_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','may']};});
    $$$cl1.defineAttr($$gregorian,'june',function(){return this.june$945_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','june']};});
    $$$cl1.defineAttr($$gregorian,'july',function(){return this.july$946_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','july']};});
    $$$cl1.defineAttr($$gregorian,'august',function(){return this.august$947_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','august']};});
    $$$cl1.defineAttr($$gregorian,'september',function(){return this.september$948_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','september']};});
    $$$cl1.defineAttr($$gregorian,'october',function(){return this.october$949_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','october']};});
    $$$cl1.defineAttr($$gregorian,'november',function(){return this.november$950_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','november']};});
    $$$cl1.defineAttr($$gregorian,'december',function(){return this.december$951_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','december']};});
    $$gregorian.leapYear=function leapYear(year$952){
        var $$gregorian=this;
        return (opt$953=(year$952.remainder((100)).equals((0))?year$952.remainder((400)).equals((0)):null),opt$953!==null?opt$953:year$952.remainder((4)).equals((0)));
        var opt$953;
    };$$gregorian.leapYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Gregorian leap year rule states that every fourth year\nis a leap year except cenury years not divisible by 400.",111)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','leapYear']};};
    $$gregorian.fixed$954=function fixed$954(year$955,month$956,day$957){
        var $$gregorian=this;
        return $$gregorian.epoch.minus((1)).plus((365).times(year$955.minus((1)))).plus(floor$internal$math(year$955.minus((1)).divided($$$cl1.Float(4.0)))).minus(floor$internal$math(year$955.minus((1)).divided($$$cl1.Float(100.0)))).plus(floor$internal$math(year$955.minus((1)).divided($$$cl1.Float(400.0)))).plus(floor$internal$math((367).times(month$956).minus((362)).divided($$$cl1.Float(12.0)))).plus((opt$958=(month$956.compare((2)).equals($$$cl1.getLarger())?(opt$959=($$gregorian.leapYear(year$955)?(-(1)):null),opt$959!==null?opt$959:(-(2))):null),opt$958!==null?opt$958:(0))).plus(day$957);
        var opt$958,opt$959;
    };$$gregorian.fixed$954.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the _day of era_ from a given date.",42))];},d:['ceylon.time.chronology','gregorian','$m','fixed']};};
    $$gregorian.fixedFrom=function fixedFrom(date$960){
        var $$gregorian=this;
        return $$gregorian.fixed$954(date$960.get((0)),date$960.get((1)),date$960.get((2)));
    };$$gregorian.fixedFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the _day of era_ from a given date.",42)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','fixedFrom']};};
    $$gregorian.checkDate=function checkDate(date$961){
        var $$gregorian=this;
        //assert at Chronology.ceylon (115:8-116:68)
        if (!(((getYears$base().minimum.compare(date$961.get((0)))!==$$$cl1.getLarger())&&(date$961.get((0)).compare(getYears$base().maximum)!==$$$cl1.getLarger())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid year value: \'years.minimum <= date[0] && date[0] <= years.maximum\' at Chronology.ceylon (116:14-116:67)"),'115:8-116:68','Chronology.ceylon'); }
        //assert at Chronology.ceylon (118:8-119:53)
        if (!(date$961.equals($$gregorian.dateFrom($$gregorian.fixedFrom(date$961))))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid date value: \' date == dateFrom( fixedFrom(date) ) \' at Chronology.ceylon (119:14-119:52)"),'118:8-119:53','Chronology.ceylon'); }
    };$$gregorian.checkDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Assert that specified date has it conjunction of year, month and day as valid gregorian values.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','checkDate']};};
    $$gregorian.newYear=function newYear(year$962){
        var $$gregorian=this;
        return $$gregorian.fixed$954(year$962,$$gregorian.january,(1));
    };$$gregorian.newYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns fixed date value of the first day of the gregorian year.",64)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','newYear']};};
    $$gregorian.yearEnd=function yearEnd(year$963){
        var $$gregorian=this;
        return $$gregorian.fixed$954(year$963,$$gregorian.december,(31));
    };$$gregorian.yearEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns fixed date value of the last day of the gregorian year.",63)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','yearEnd']};};
    $$gregorian.yearFrom=function yearFrom(fixed$964){
        var $$gregorian=this;
        var d0$965=fixed$964.minus($$gregorian.epoch);
        var n400$966=floorDiv$internal$math(d0$965,getDays$base().perFourCenturies);
        var d1$967=floorMod$internal$math(d0$965,getDays$base().perFourCenturies);
        var n100$968=floorDiv$internal$math(d1$967,getDays$base().perCentury);
        var d2$969=floorMod$internal$math(d1$967,getDays$base().perCentury);
        var n4$970=floorDiv$internal$math(d2$969,getDays$base().inFourYears);
        var d3$971=floorMod$internal$math(d2$969,getDays$base().inFourYears);
        var n1$972=floorDiv$internal$math(d3$971,getDays$base().perYear);
        var year$973=(400).times(n400$966).plus((100).times(n100$968)).plus((4).times(n4$970)).plus(n1$972);
        return (opt$974=((n100$968.equals((4))||n1$972.equals((4)))?year$973:null),opt$974!==null?opt$974:year$973.plus((1)));
        var opt$974;
    };$$gregorian.yearFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'fixed',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a gregorian year number of the fixed date value.",56)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','yearFrom']};};
    $$gregorian.dateFrom=function dateFrom(date$975){
        var $$gregorian=this;
        var year$976=$$gregorian.yearFrom(date$975);
        var priorDays$977=date$975.minus($$gregorian.newYear(year$976));
        var correction$978=(opt$979=(date$975.compare($$gregorian.fixed$954(year$976,$$gregorian.march,(1))).equals($$$cl1.getSmaller())?(0):null),opt$979!==null?opt$979:(opt$980=($$gregorian.leapYear(year$976)?(1):null),opt$980!==null?opt$980:(2)));
        var opt$979,opt$980;
        var month$981=floorDiv$internal$math((12).times(priorDays$977.plus(correction$978)).plus((373)),(367));
        var day$982=(1).plus(date$975).minus($$gregorian.fixed$954(year$976,month$981,(1)));
        return $$$cl1.Tuple(year$976,$$$cl1.Tuple(month$981,$$$cl1.Tuple(day$982,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});
    };$$gregorian.dateFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Converts the fixed date value to an equivalent gregorian date.",62)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','dateFrom']};};
    $$gregorian.monthFrom=function monthFrom(date$983){
        var $$gregorian=this;
        return $$gregorian.dateFrom(date$983).get((1));
    };$$gregorian.monthFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Retunrs the month number of the gregorian calendar from the fixed date value.",77)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','monthFrom']};};
    $$gregorian.dayFrom=function dayFrom(date$984){
        var $$gregorian=this;
        return $$gregorian.dateFrom(date$984).get((2));
    };$$gregorian.dayFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns day of month value of the fixed date value.",51)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','dayFrom']};};
    $$gregorian.dayOfWeekFrom=function dayOfWeekFrom(date$985){
        var $$gregorian=this;
        return floorMod$internal$math(date$985,(7));
    };$$gregorian.dayOfWeekFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$938$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of week_ value for the specified fixed date value.",63)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','dayOfWeekFrom']};};
})(gregorian$938$chronology.$$.prototype);
var gregorian$986$chronology;
function getGregorian$chronology(){
    if (gregorian$986$chronology===undefined)gregorian$986$chronology=$init$gregorian$938$chronology()();
    return gregorian$986$chronology;
}
exports.getGregorian$chronology=getGregorian$chronology;
getGregorian$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:gregorian$938$chronology},$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the implementation of all calculations for\nthe rules based on Gregorian Calendar.",92)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian']};};
$prop$getGregorian$chronology={get:getGregorian$chronology,$$metamodel$$:getGregorian$chronology.$$metamodel$$};
exports.$prop$getGregorian$chronology=$prop$getGregorian$chronology;
exports.$pkg$ans$ceylon$time$chronology=function(){return[$$$cl1.doc($$$cl1.String("Package containing supported chronologies in ceylon.time library.\n\nA _Chronology_ is a set of functions and methods that define the calendar system. \nA Chronology is tightly coupled to the actual date implementation of that chronology.\n\nGenerally speaking, a chronology is an implementation detail of a calendar system that \nshould not be overly visible to the users of the library unless they wish to implement \ntheir own calendrical systems.\n\nInitial implementation contains only implementation for gregorian (and julian) chronologies. \nThis API is considered experimental and can change significantly between releases, so dependency \non this package is not advisable for general use.\n",687)),$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function Clock($$clock){
}
Clock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A clock providing access to the current instant, date and time using a time-zone.\n\nInstances of this class are used to find the current instant, which can be\ninterpreted using the stored time-zone to find the current date and time.\nAs such, a clock can be used instead of `process.milliseconds`.\n\nThe primary purpose of this abstraction is to allow alternate clocks to be\nplugged in as and when required. Applications use an object to obtain the\ncurrent time rather than a static method. This can simplify testing.\n\nApplications should _avoid_ using the top level objects directly.\nInstead, they should pass a [[Clock]] into any method that requires it.\nA dependency injection framework is one way to achieve this.\n\nThis approach allows an alternate clock, such as [[fixedTime]] to be used during testing.\n\nThe [[systemTime]] top level factory method offers clocks based on the best available \nsystem clock, such as `process.milliseconds`.",939)),$$$cl1.shared()];},d:['ceylon.time','Clock']};};
exports.Clock=Clock;
function $init$Clock(){
    if (Clock.$$===undefined){
        $$$cl1.initTypeProto(Clock,'ceylon.time::Clock');
        (function($$clock){
        })(Clock.$$.prototype);
    }
    return Clock;
}
exports.$init$Clock=$init$Clock;
$init$Clock();
function systemTime$987(){
    var $$systemTime=new systemTime$987.$$;
    Clock($$systemTime);
    return $$systemTime;
}
function $init$systemTime$987(){
    if (systemTime$987.$$===undefined){
        $$$cl1.initTypeProto(systemTime$987,'ceylon.time::systemTime',$$$cl1.Basic,$init$Clock());
    }
    return systemTime$987;
}
exports.$init$systemTime$987=$init$systemTime$987;
$init$systemTime$987();
(function($$systemTime){
    $$systemTime.milliseconds=function (){
        var $$systemTime=this;
        return $$$cl1.getProcess().milliseconds;
    };
    $$systemTime.milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:systemTime$987,$an:function(){return[$$$cl1.doc($$$cl1.String("Return number of milliseconds from system time.",47)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','systemTime','$m','milliseconds']};};
    $$systemTime.instant=function (){
        var $$systemTime=this;
        return Instant($$systemTime.milliseconds());
    };
    $$systemTime.instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:systemTime$987,$an:function(){return[$$$cl1.doc($$$cl1.String("Return current instant from system time.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','systemTime','$m','instant']};};
})(systemTime$987.$$.prototype);
var systemTime$988;
function getSystemTime(){
    if (systemTime$988===undefined)systemTime$988=$init$systemTime$987()();
    return systemTime$988;
}
exports.getSystemTime=getSystemTime;
getSystemTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:systemTime$987},$an:function(){return[$$$cl1.doc($$$cl1.String("Gets a clock that obtains the current instant using the best available system clock.",84)),$$$cl1.shared()];},d:['ceylon.time','systemTime']};};
$prop$getSystemTime={get:getSystemTime,$$metamodel$$:getSystemTime.$$metamodel$$};
exports.$prop$getSystemTime=$prop$getSystemTime;
function fixedTime(instant$989){
    
    var case$990=instant$989;
    if ($$$cl1.isOfType(instant$989,{t:Instant})) {
        return FixedInstant(case$990);
    }else if ($$$cl1.isOfType(instant$989,{t:$$$cl1.Integer})) {
        return FixedMilliseconds(case$990);
    }
}
exports.fixedTime=fixedTime;
fixedTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'instant',$mt:'prm',$t:{ t:'u', l:[{t:Instant},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Gets a clock that always returns the same instant in the UTC time-zone.",71)),$$$cl1.shared()];},d:['ceylon.time','fixedTime']};};
function FixedInstant(fixedInstant$991, $$fixedInstant){
    $init$FixedInstant();
    if ($$fixedInstant===undefined)$$fixedInstant=new FixedInstant.$$;
    $$fixedInstant.fixedInstant$991_=fixedInstant$991;
    Clock($$fixedInstant);
    return $$fixedInstant;
}
FixedInstant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing.",100))];},d:['ceylon.time','FixedInstant']};};
function $init$FixedInstant(){
    if (FixedInstant.$$===undefined){
        $$$cl1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',$$$cl1.Basic,$init$Clock());
        (function($$fixedInstant){
            $$fixedInstant.milliseconds=function (){
                var $$fixedInstant=this;
                return $$fixedInstant.fixedInstant$991.millisecondsOfEpoch;
            };
            $$fixedInstant.milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:FixedInstant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns milliseconds from the fixed instant.",44)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedInstant','$m','milliseconds']};};
            $$fixedInstant.instant=function (){
                var $$fixedInstant=this;
                return $$fixedInstant.fixedInstant$991;
            };
            $$fixedInstant.instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:FixedInstant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the fixed instant.",26)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedInstant','$m','instant']};};
            $$$cl1.defineAttr($$fixedInstant,'fixedInstant$991',function(){return this.fixedInstant$991_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$cont:FixedInstant,d:['ceylon.time','FixedInstant','$at','fixedInstant']};});
        })(FixedInstant.$$.prototype);
    }
    return FixedInstant;
}
exports.$init$FixedInstant=$init$FixedInstant;
$init$FixedInstant();
function FixedMilliseconds(fixedMilliseconds$992, $$fixedMilliseconds){
    $init$FixedMilliseconds();
    if ($$fixedMilliseconds===undefined)$$fixedMilliseconds=new FixedMilliseconds.$$;
    $$fixedMilliseconds.fixedMilliseconds$992_=fixedMilliseconds$992;
    Clock($$fixedMilliseconds);
    return $$fixedMilliseconds;
}
FixedMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing.",100))];},d:['ceylon.time','FixedMilliseconds']};};
function $init$FixedMilliseconds(){
    if (FixedMilliseconds.$$===undefined){
        $$$cl1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',$$$cl1.Basic,$init$Clock());
        (function($$fixedMilliseconds){
            $$fixedMilliseconds.milliseconds=function (){
                var $$fixedMilliseconds=this;
                return $$fixedMilliseconds.fixedMilliseconds$992;
            };
            $$fixedMilliseconds.milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:FixedMilliseconds,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the fixed milliseconds.",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedMilliseconds','$m','milliseconds']};};
            $$fixedMilliseconds.instant=function (){
                var $$fixedMilliseconds=this;
                return Instant($$fixedMilliseconds.fixedMilliseconds$992);
            };
            $$fixedMilliseconds.instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:FixedMilliseconds,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the instant from the fixed milliseconds.",48)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedMilliseconds','$m','instant']};};
            $$$cl1.defineAttr($$fixedMilliseconds,'fixedMilliseconds$992',function(){return this.fixedMilliseconds$992_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:FixedMilliseconds,d:['ceylon.time','FixedMilliseconds','$at','fixedMilliseconds']};});
        })(FixedMilliseconds.$$.prototype);
    }
    return FixedMilliseconds;
}
exports.$init$FixedMilliseconds=$init$FixedMilliseconds;
$init$FixedMilliseconds();
var offsetTime=function (baseClock$993,offset$994){
    return OffsetClock(baseClock$993,offset$994);
};
offsetTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'baseClock',$mt:'prm',$t:{t:Clock},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an implementation of a clock that always returns a \nconstant offset from the value of the provided clock.",113)),$$$cl1.shared()];},d:['ceylon.time','offsetTime']};};
exports.offsetTime=offsetTime;
function OffsetClock(baseClock$995, offset$996, $$offsetClock){
    $init$OffsetClock();
    if ($$offsetClock===undefined)$$offsetClock=new OffsetClock.$$;
    $$offsetClock.baseClock$995_=baseClock$995;
    $$offsetClock.offset$996_=offset$996;
    Clock($$offsetClock);
    return $$offsetClock;
}
OffsetClock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("An implementation of a [[Clock]] that returns tilem with a constant \noffset from the provided clock.",100))];},d:['ceylon.time','OffsetClock']};};
function $init$OffsetClock(){
    if (OffsetClock.$$===undefined){
        $$$cl1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',$$$cl1.Basic,$init$Clock());
        (function($$offsetClock){
            $$offsetClock.instant=function (){
                var $$offsetClock=this;
                return Instant($$offsetClock.milliseconds());
            };
            $$offsetClock.instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:OffsetClock,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','OffsetClock','$m','instant']};};
            $$offsetClock.milliseconds=function (){
                var $$offsetClock=this;
                return $$offsetClock.baseClock$995.milliseconds().plus($$offsetClock.offset$996);
            };
            $$offsetClock.milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:OffsetClock,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','OffsetClock','$m','milliseconds']};};
            $$$cl1.defineAttr($$offsetClock,'baseClock$995',function(){return this.baseClock$995_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','baseClock']};});
            $$$cl1.defineAttr($$offsetClock,'offset$996',function(){return this.offset$996_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','offset']};});
        })(OffsetClock.$$.prototype);
    }
    return OffsetClock;
}
exports.$init$OffsetClock=$init$OffsetClock;
$init$OffsetClock();
function $Date($$date){
    ReadableDate$base($$date);
    DateBehavior$base({Element:{t:$Date}},$$date);
    $$$cl1.add_type_arg($$date,'Element',{t:$Date});
    $$$cl1.Ordinal({Other:{t:$Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:$Date});
    $$$cl1.Comparable({Other:{t:$Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:$Date});
    $$$cl1.Enumerable({Other:{t:$Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:$Date});
}
$Date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDate$base},{t:DateBehavior$base,a:{Element:{t:$Date}}},{t:$$$cl1.Ordinal,a:{Other:{t:$Date}}},{t:$$$cl1.Comparable,a:{Other:{t:$Date}}},{t:$$$cl1.Enumerable,a:{Other:{t:$Date}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An interface for date objects in the ISO-8601 calendar system.\n\nA date is often viewed as triple of year-month-day values. \nThis interface also defines access to other date fields such as \nday-of-year, day-of-week and week-of-year.",231)),$$$cl1.shared()];},d:['ceylon.time','Date']};};
exports.$Date=$Date;
function $init$$Date(){
    if ($Date.$$===undefined){
        $$$cl1.initTypeProto($Date,'ceylon.time::Date',$init$ReadableDate$base(),$init$DateBehavior$base(),$$$cl1.Ordinal,$$$cl1.Comparable,$$$cl1.Enumerable);
        (function($$date){
        })($Date.$$.prototype);
    }
    return $Date;
}
exports.$init$$Date=$init$$Date;
$init$$Date();
function today(clock$997,timeZone$998){
    if(clock$997===undefined){clock$997=getSystemTime();}
    if(timeZone$998===undefined){timeZone$998=getTimeZone$timezone().system;}
    return clock$997.instant().date(timeZone$998);
}
exports.today=today;
today.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{t:Clock},$an:function(){return[];}},{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current date according to the provided system clock and time zone.",74)),$$$cl1.shared()];},d:['ceylon.time','today']};};
function date(year$999,month$1000,day$1001){
    return gregorianDate$internal(year$999,month$1000,day$1001);
}
exports.date=date;
date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date based on the specified year, month and day of month values.",74)),$$$cl1.shared()];},d:['ceylon.time','date']};};
function DateRange(from, to, step, $$dateRange){
    $init$DateRange();
    if ($$dateRange===undefined)$$dateRange=new DateRange.$$;
    $$dateRange.$$targs$$={StepBy:{t:UnitOfDate$base},Element:{t:$Date}};
    if(step===undefined){step=getDays$base();}
    Range$base({StepBy:{t:UnitOfDate$base},Element:{t:$Date}},$$dateRange);
    $$$cl1.add_type_arg($$dateRange,'StepBy',{t:UnitOfDate$base});
    $$$cl1.add_type_arg($$dateRange,'Element',{t:$Date});
    $$dateRange.from$1002_=from;
    $$dateRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','from']};}};
    $$dateRange.$prop$getFrom.get=function(){return from};
    $$dateRange.to$1003_=to;
    $$dateRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','to']};}};
    $$dateRange.$prop$getTo.get=function(){return to};
    $$dateRange.step$1004_=step;
    $$dateRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:UnitOfDate$base},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','step']};}};
    $$dateRange.$prop$getStep.get=function(){return step};
    $$dateRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','period']};}};
    $$dateRange.$prop$getPeriod.get=function(){return period};
    $$dateRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','duration']};}};
    $$dateRange.$prop$getDuration.get=function(){return duration};
    return $$dateRange;
}
DateRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Range$base,a:{StepBy:{t:UnitOfDate$base},Element:{t:$Date}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[Date]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateRange]] types\n* Recover the gap between [[DateRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] cases\n",394)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time.base'),Range$base)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time','DateRange']};};
exports.DateRange=DateRange;
function $init$DateRange(){
    if (DateRange.$$===undefined){
        $$$cl1.initTypeProto(DateRange,'ceylon.time::DateRange',$$$cl1.Basic,$init$Range$base());
        (function($$dateRange){
            $$$cl1.defineAttr($$dateRange,'from',function(){return this.from$1002_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','from']};});
            $$$cl1.defineAttr($$dateRange,'to',function(){return this.to$1003_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','to']};});
            $$$cl1.defineAttr($$dateRange,'step',function(){return this.step$1004_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:UnitOfDate$base},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','step']};});
            $$$cl1.defineAttr($$dateRange,'period',function(){
                var $$dateRange=this;
                return $$dateRange.from.periodTo($$dateRange.to);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','period']};});
            $$$cl1.defineAttr($$dateRange,'duration',function(){
                var $$dateRange=this;
                return Duration($$dateRange.to.dayOfEra.minus($$dateRange.from.dayOfEra).times(getMilliseconds$base().perDay));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','duration']};});
            $$dateRange.equals=function (other$1005){
                var $$dateRange=this;
                return $$dateRange.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(this,other$1005);
            };
            $$dateRange.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','equals']};};
            $$dateRange.overlap=function overlap(other$1006){
                var $$dateRange=this;
                var response$1007=overlap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}),$$$cl1.Tuple(other$1006.from,$$$cl1.Tuple(other$1006.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}),{Value:{t:$Date}});
                var response$1008;
                if($$$cl1.isOfType((response$1008=response$1007),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}})){
                    return DateRange(response$1008.get((0)),response$1008.get((1)));
                }
                //assert at DateRange.ceylon (81:8-81:34)
                var response$1009;
                if (!($$$cl1.isOfType((response$1009=response$1007),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at DateRange.ceylon (81:14-81:33)"),'81:8-81:34','DateRange.ceylon'); }
                return response$1009;
            };$$dateRange.overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{t:UnitOfDate$base},Element:{t:$Date}}},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','overlap']};};
            $$dateRange.gap=function gap(other$1010){
                var $$dateRange=this;
                var response$1011=gap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}),$$$cl1.Tuple(other$1010.from,$$$cl1.Tuple(other$1010.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}),{Value:{t:$Date}});
                
                var case$1012=response$1011;
                if ($$$cl1.isOfType(response$1011,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$Date},Element:{t:$Date}}},First:{t:$Date},Element:{t:$Date}}})) {
                    return (opt$1013=(case$1012.get((0)).successor.compare(case$1012.get((1))).equals($$$cl1.getSmaller())?DateRange(case$1012.get((0)).successor,case$1012.get((1)).predecessor):null),opt$1013!==null?opt$1013:$$$cl1.getEmpty());
                    var opt$1013;
                }else if ($$$cl1.isOfType(response$1011,{t:$$$cl1.Empty})) {
                    return case$1012;
                }
            };$$dateRange.gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{t:UnitOfDate$base},Element:{t:$Date}}},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','gap']};};
            $$dateRange.iterator=function iterator(){
                var $$dateRange=this;
                function listIterator$1014($$targs$$){
                    var $$listIterator$1014=new listIterator$1014.$$;
                    $$listIterator$1014.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:$Date}},$$listIterator$1014);
                    $$$cl1.add_type_arg($$listIterator$1014,'Element',{t:$Date});
                    $$listIterator$1014.count$1015_=(0);
                    $$listIterator$1014.$prop$getCount$1015={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1014,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$at','count']};}};
                    $$listIterator$1014.$prop$getCount$1015.get=function(){return count$1015};
                    return $$listIterator$1014;
                }
                function $init$listIterator$1014(){
                    if (listIterator$1014.$$===undefined){
                        $$$cl1.initTypeProto(listIterator$1014,'ceylon.time::DateRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return listIterator$1014;
                }
                $init$listIterator$1014();
                (function($$listIterator$1014){
                    $$$cl1.defineAttr($$listIterator$1014,'count$1015',function(){return this.count$1015_;},function(count$1016){return this.count$1015_=count$1016;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1014,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$at','count']};});
                    $$listIterator$1014.next=function next(){
                        var $$listIterator$1014=this;
                        var date$1017=(opt$1018=($$dateRange.from.compare($$dateRange.to).equals($$$cl1.getLarger())?$$dateRange.previousByStep$1019((oldcount$1020=$$listIterator$1014.count$1015,$$listIterator$1014.count$1015=oldcount$1020.successor,oldcount$1020)):null),opt$1018!==null?opt$1018:$$dateRange.nextByStep$1021((oldcount$1022=$$listIterator$1014.count$1015,$$listIterator$1014.count$1015=oldcount$1022.successor,oldcount$1022)));
                        var opt$1018,oldcount$1020,oldcount$1022;
                        var continueLoop$1023=(opt$1024=(($$dateRange.from.compare($$dateRange.to)!==$$$cl1.getLarger())?(date$1017.compare($$dateRange.to)!==$$$cl1.getLarger()):null),opt$1024!==null?opt$1024:(date$1017.compare($$dateRange.to)!==$$$cl1.getSmaller()));
                        var opt$1024;
                        return (opt$1025=(continueLoop$1023?date$1017:null),opt$1025!==null?opt$1025:$$$cl1.getFinished());
                        var opt$1025;
                    };$$listIterator$1014.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$Date},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$1014,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$m','next']};};
                })(listIterator$1014.$$.prototype);
                var listIterator$1026;
                function getListIterator$1026(){
                    if (listIterator$1026===undefined)listIterator$1026=$init$listIterator$1014()({Element:{t:$Date}});
                    return listIterator$1026;
                }
                getListIterator$1026.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$1014},d:['ceylon.time','DateRange','$m','iterator','$at','listIterator']};};
                $prop$getListIterator$1026={get:getListIterator$1026,$$metamodel$$:getListIterator$1026.$$metamodel$$};
                return getListIterator$1026();
            };$$dateRange.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:$Date}}},$ps:[],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','iterator']};};
            $$dateRange.stepBy=function stepBy(step$1027){
                var $$dateRange=this;
                return (opt$1028=(step$1027.equals($$dateRange.step)?$$dateRange:null),opt$1028!==null?opt$1028:DateRange($$dateRange.from,$$dateRange.to,step$1027));
                var opt$1028;
            };$$dateRange.stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:UnitOfDate$base},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','stepBy']};};
            $$dateRange.nextByStep$1021$defs$jump=function(jump$1029){var $$dateRange=this;
            return (1);};
            $$dateRange.nextByStep$1021=function nextByStep$1021(jump$1029){
                var $$dateRange=this;
                if(jump$1029===undefined){jump$1029=$$dateRange.nextByStep$1021$defs$jump(jump$1029);}
                
                var case$1030=$$dateRange.step;
                if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfYear$base})) {
                    return $$dateRange.from.plusYears(jump$1029);
                }else if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfMonth$base})) {
                    return $$dateRange.from.plusMonths(jump$1029);
                }else if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfDay$base})) {
                    return $$dateRange.from.plusDays(jump$1029);
                }
            };$$dateRange.nextByStep$1021.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateRange','$m','nextByStep']};};
            $$dateRange.previousByStep$1019$defs$jump=function(jump$1031){var $$dateRange=this;
            return (1);};
            $$dateRange.previousByStep$1019=function previousByStep$1019(jump$1031){
                var $$dateRange=this;
                if(jump$1031===undefined){jump$1031=$$dateRange.previousByStep$1019$defs$jump(jump$1031);}
                
                var case$1032=$$dateRange.step;
                if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfYear$base})) {
                    return $$dateRange.from.minusYears(jump$1031);
                }else if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfMonth$base})) {
                    return $$dateRange.from.minusMonths(jump$1031);
                }else if ($$$cl1.isOfType($$dateRange.step,{t:UnitOfDay$base})) {
                    return $$dateRange.from.minusDays(jump$1031);
                }
            };$$dateRange.previousByStep$1019.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateRange','$m','previousByStep']};};
        })(DateRange.$$.prototype);
    }
    return DateRange;
}
exports.$init$DateRange=$init$DateRange;
$init$DateRange();
function DateTime($$dateTime){
    ReadableDateTime$base($$dateTime);
    DateTimeBehavior$base({TimeType:{t:Time},DateType:{t:$Date},Element:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'TimeType',{t:Time});
    $$$cl1.add_type_arg($$dateTime,'DateType',{t:$Date});
    $$$cl1.add_type_arg($$dateTime,'Element',{t:DateTime});
    $$$cl1.Ordinal({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$$cl1.Enumerable({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$$cl1.Comparable({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$dateTime.instant$defs$timeZone=function(timeZone$1033){return getTimeZone$timezone().system;};
}
DateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDateTime$base},{t:DateTimeBehavior$base,a:{TimeType:{t:Time},DateType:{t:$Date},Element:{t:DateTime}}},{t:$$$cl1.Ordinal,a:{Other:{t:DateTime}}},{t:$$$cl1.Enumerable,a:{Other:{t:DateTime}}},{t:$$$cl1.Comparable,a:{Other:{t:DateTime}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstract moment in time (like _4pm, October 21. 2012_).\n\nDateTime does not contain a time zone information, so You can not use it to record or \nschedule events.",163)),$$$cl1.shared()];},d:['ceylon.time','DateTime']};};
exports.DateTime=DateTime;
function $init$DateTime(){
    if (DateTime.$$===undefined){
        $$$cl1.initTypeProto(DateTime,'ceylon.time::DateTime',$init$ReadableDateTime$base(),$init$DateTimeBehavior$base(),$$$cl1.Ordinal,$$$cl1.Enumerable,$$$cl1.Comparable);
        (function($$dateTime){
        })(DateTime.$$.prototype);
    }
    return DateTime;
}
exports.$init$DateTime=$init$DateTime;
$init$DateTime();
function dateTime(year$1034,month$1035,day$1036,hours$1037,minutes$1038,seconds$1039,milliseconds$1040){
    if(hours$1037===undefined){hours$1037=(0);}
    if(minutes$1038===undefined){minutes$1038=(0);}
    if(seconds$1039===undefined){seconds$1039=(0);}
    if(milliseconds$1040===undefined){milliseconds$1040=(0);}
    return GregorianDateTime$internal(date(year$1034,month$1035,day$1036),time(hours$1037,minutes$1038,seconds$1039,milliseconds$1040));
}
exports.dateTime=dateTime;
dateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hours',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date based on the specified year, month and day of month values.",74)),$$$cl1.shared()];},d:['ceylon.time','dateTime']};};
function DateTimeRange(from, to, step, $$dateTimeRange){
    $init$DateTimeRange();
    if ($$dateTimeRange===undefined)$$dateTimeRange=new DateTimeRange.$$;
    $$dateTimeRange.$$targs$$={StepBy:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element:{t:DateTime}};
    if(step===undefined){step=getMilliseconds$base();}
    Range$base({StepBy:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element:{t:DateTime}},$$dateTimeRange);
    $$$cl1.add_type_arg($$dateTimeRange,'Element',{t:DateTime});
    $$dateTimeRange.from$1041_=from;
    $$dateTimeRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','from']};}};
    $$dateTimeRange.$prop$getFrom.get=function(){return from};
    $$dateTimeRange.to$1042_=to;
    $$dateTimeRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','to']};}};
    $$dateTimeRange.$prop$getTo.get=function(){return to};
    $$dateTimeRange.step$1043_=step;
    $$dateTimeRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','step']};}};
    $$dateTimeRange.$prop$getStep.get=function(){return step};
    $$dateTimeRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','period']};}};
    $$dateTimeRange.$prop$getPeriod.get=function(){return period};
    $$dateTimeRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','duration']};}};
    $$dateTimeRange.$prop$getDuration.get=function(){return duration};
    return $$dateTimeRange;
}
DateTimeRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Range$base,a:{StepBy:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element:{t:DateTime}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[DateTime]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateTimeRange]] types\n* Recover the gap between [[DateTimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] or [[UnitOfTime]] cases\n",424)),$$$cl1.shared()];},d:['ceylon.time','DateTimeRange']};};
exports.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
    if (DateTimeRange.$$===undefined){
        $$$cl1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',$$$cl1.Basic,$init$Range$base());
        (function($$dateTimeRange){
            $$$cl1.defineAttr($$dateTimeRange,'from',function(){return this.from$1041_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','from']};});
            $$$cl1.defineAttr($$dateTimeRange,'to',function(){return this.to$1042_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','to']};});
            $$$cl1.defineAttr($$dateTimeRange,'step',function(){return this.step$1043_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','step']};});
            $$$cl1.defineAttr($$dateTimeRange,'period',function(){
                var $$dateTimeRange=this;
                return $$dateTimeRange.from.periodTo($$dateTimeRange.to);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','period']};});
            $$$cl1.defineAttr($$dateTimeRange,'duration',function(){
                var $$dateTimeRange=this;
                return Duration($$dateTimeRange.to.instant().millisecondsOfEpoch.minus($$dateTimeRange.from.instant().millisecondsOfEpoch));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','duration']};});
            $$dateTimeRange.equals=function (other$1044){
                var $$dateTimeRange=this;
                return $$dateTimeRange.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(this,other$1044);
            };
            $$dateTimeRange.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','equals']};};
            $$dateTimeRange.overlap=function overlap(other$1045){
                var $$dateTimeRange=this;
                var response$1046=overlap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$1045.from,$$$cl1.Tuple(other$1045.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
                var response$1047;
                if($$$cl1.isOfType((response$1047=response$1046),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})){
                    return DateTimeRange(response$1047.get(0),response$1047.get(1)||undefined,response$1047.get(2)||undefined);
                }
                //assert at DateTimeRange.ceylon (80:8-80:34)
                var response$1048;
                if (!($$$cl1.isOfType((response$1048=response$1046),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at DateTimeRange.ceylon (80:14-80:33)"),'80:8-80:34','DateTimeRange.ceylon'); }
                return response$1048;
            };$$dateTimeRange.overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element:{t:DateTime}}},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','overlap']};};
            $$dateTimeRange.gap=function gap(other$1049){
                var $$dateTimeRange=this;
                var response$1050=gap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$1049.from,$$$cl1.Tuple(other$1049.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
                
                var case$1051=response$1050;
                if ($$$cl1.isOfType(response$1050,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})) {
                    return (opt$1052=(case$1051.get((0)).successor.compare(case$1051.get((1))).equals($$$cl1.getSmaller())?DateTimeRange(case$1051.get((0)).successor,case$1051.get((1)).predecessor):null),opt$1052!==null?opt$1052:$$$cl1.getEmpty());
                    var opt$1052;
                }else if ($$$cl1.isOfType(response$1050,{t:$$$cl1.Empty})) {
                    return case$1051;
                }
            };$$dateTimeRange.gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},Element:{t:DateTime}}},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','gap']};};
            $$dateTimeRange.iterator=function iterator(){
                var $$dateTimeRange=this;
                function listIterator$1053($$targs$$){
                    var $$listIterator$1053=new listIterator$1053.$$;
                    $$listIterator$1053.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:DateTime}},$$listIterator$1053);
                    $$$cl1.add_type_arg($$listIterator$1053,'Element',{t:DateTime});
                    $$listIterator$1053.count$1054_=(0);
                    $$listIterator$1053.$prop$getCount$1054={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1053,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$at','count']};}};
                    $$listIterator$1053.$prop$getCount$1054.get=function(){return count$1054};
                    return $$listIterator$1053;
                }
                function $init$listIterator$1053(){
                    if (listIterator$1053.$$===undefined){
                        $$$cl1.initTypeProto(listIterator$1053,'ceylon.time::DateTimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return listIterator$1053;
                }
                $init$listIterator$1053();
                (function($$listIterator$1053){
                    $$$cl1.defineAttr($$listIterator$1053,'count$1054',function(){return this.count$1054_;},function(count$1055){return this.count$1054_=count$1055;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1053,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$at','count']};});
                    $$listIterator$1053.next=function next(){
                        var $$listIterator$1053=this;
                        var date$1056=(opt$1057=($$dateTimeRange.from.compare($$dateTimeRange.to).equals($$$cl1.getLarger())?$$dateTimeRange.previousByStep$1058((oldcount$1059=$$listIterator$1053.count$1054,$$listIterator$1053.count$1054=oldcount$1059.successor,oldcount$1059)):null),opt$1057!==null?opt$1057:$$dateTimeRange.nextByStep$1060((oldcount$1061=$$listIterator$1053.count$1054,$$listIterator$1053.count$1054=oldcount$1061.successor,oldcount$1061)));
                        var opt$1057,oldcount$1059,oldcount$1061;
                        var continueLoop$1062=(opt$1063=(($$dateTimeRange.from.compare($$dateTimeRange.to)!==$$$cl1.getLarger())?(date$1056.compare($$dateTimeRange.to)!==$$$cl1.getLarger()):null),opt$1063!==null?opt$1063:(date$1056.compare($$dateTimeRange.to)!==$$$cl1.getSmaller()));
                        var opt$1063;
                        return (opt$1064=(continueLoop$1062?date$1056:null),opt$1064!==null?opt$1064:$$$cl1.getFinished());
                        var opt$1064;
                    };$$listIterator$1053.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTime},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$1053,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$m','next']};};
                })(listIterator$1053.$$.prototype);
                var listIterator$1065;
                function getListIterator$1065(){
                    if (listIterator$1065===undefined)listIterator$1065=$init$listIterator$1053()({Element:{t:DateTime}});
                    return listIterator$1065;
                }
                getListIterator$1065.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$1053},d:['ceylon.time','DateTimeRange','$m','iterator','$at','listIterator']};};
                $prop$getListIterator$1065={get:getListIterator$1065,$$metamodel$$:getListIterator$1065.$$metamodel$$};
                return getListIterator$1065();
            };$$dateTimeRange.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:DateTime}}},$ps:[],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','iterator']};};
            $$dateTimeRange.stepBy=function stepBy(step$1066){
                var $$dateTimeRange=this;
                return (opt$1067=(step$1066.equals($$dateTimeRange.step)?$$dateTimeRange:null),opt$1067!==null?opt$1067:DateTimeRange($$dateTimeRange.from,$$dateTimeRange.to,step$1066));
                var opt$1067;
            };$$dateTimeRange.stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','stepBy']};};
            $$dateTimeRange.nextByStep$1060$defs$jump=function(jump$1068){var $$dateTimeRange=this;
            return (1);};
            $$dateTimeRange.nextByStep$1060=function nextByStep$1060(jump$1068){
                var $$dateTimeRange=this;
                if(jump$1068===undefined){jump$1068=$$dateTimeRange.nextByStep$1060$defs$jump(jump$1068);}
                var step$1069;
                if($$$cl1.isOfType((step$1069=$$dateTimeRange.step),{t:UnitOfDate$base})){
                    
                    var case$1070=step$1069;
                    if ($$$cl1.isOfType(step$1069,{t:UnitOfYear$base})) {
                        return $$dateTimeRange.from.plusYears(jump$1068);
                    }else if ($$$cl1.isOfType(step$1069,{t:UnitOfMonth$base})) {
                        return $$dateTimeRange.from.plusMonths(jump$1068);
                    }else if ($$$cl1.isOfType(step$1069,{t:UnitOfDay$base})) {
                        return $$dateTimeRange.from.plusDays(jump$1068);
                    }
                }
                var step$1071;
                if($$$cl1.isOfType((step$1071=$$dateTimeRange.step),{t:UnitOfTime$base})){
                    
                    var case$1072=step$1071;
                    if ($$$cl1.isOfType(step$1071,{t:UnitOfHour$base})) {
                        return $$dateTimeRange.from.plusHours(jump$1068);
                    }else if ($$$cl1.isOfType(step$1071,{t:UnitOfMinute$base})) {
                        return $$dateTimeRange.from.plusMinutes(jump$1068);
                    }else if ($$$cl1.isOfType(step$1071,{t:UnitOfSecond$base})) {
                        return $$dateTimeRange.from.plusSeconds(jump$1068);
                    }else if ($$$cl1.isOfType(step$1071,{t:UnitOfMillisecond$base})) {
                        return $$dateTimeRange.from.plusMilliseconds(jump$1068);
                    }
                }
                throw $$$cl1.wrapexc($$$cl1.Exception(),'150:8-150:13','ceylon/time/DateTimeRange.ceylon');
            };$$dateTimeRange.nextByStep$1060.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateTimeRange','$m','nextByStep']};};
            $$dateTimeRange.previousByStep$1058$defs$jump=function(jump$1073){var $$dateTimeRange=this;
            return (1);};
            $$dateTimeRange.previousByStep$1058=function previousByStep$1058(jump$1073){
                var $$dateTimeRange=this;
                if(jump$1073===undefined){jump$1073=$$dateTimeRange.previousByStep$1058$defs$jump(jump$1073);}
                var step$1074;
                if($$$cl1.isOfType((step$1074=$$dateTimeRange.step),{t:UnitOfDate$base})){
                    
                    var case$1075=step$1074;
                    if ($$$cl1.isOfType(step$1074,{t:UnitOfYear$base})) {
                        return $$dateTimeRange.from.minusYears(jump$1073);
                    }else if ($$$cl1.isOfType(step$1074,{t:UnitOfMonth$base})) {
                        return $$dateTimeRange.from.minusMonths(jump$1073);
                    }else if ($$$cl1.isOfType(step$1074,{t:UnitOfDay$base})) {
                        return $$dateTimeRange.from.minusDays(jump$1073);
                    }
                }
                var step$1076;
                if($$$cl1.isOfType((step$1076=$$dateTimeRange.step),{t:UnitOfTime$base})){
                    
                    var case$1077=step$1076;
                    if ($$$cl1.isOfType(step$1076,{t:UnitOfHour$base})) {
                        return $$dateTimeRange.from.minusHours(jump$1073);
                    }else if ($$$cl1.isOfType(step$1076,{t:UnitOfMinute$base})) {
                        return $$dateTimeRange.from.minusMinutes(jump$1073);
                    }else if ($$$cl1.isOfType(step$1076,{t:UnitOfSecond$base})) {
                        return $$dateTimeRange.from.minusSeconds(jump$1073);
                    }else if ($$$cl1.isOfType(step$1076,{t:UnitOfMillisecond$base})) {
                        return $$dateTimeRange.from.minusMilliseconds(jump$1073);
                    }
                }
                throw $$$cl1.wrapexc($$$cl1.Exception(),'169:8-169:13','ceylon/time/DateTimeRange.ceylon');
            };$$dateTimeRange.previousByStep$1058.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateTimeRange','$m','previousByStep']};};
        })(DateTimeRange.$$.prototype);
    }
    return DateTimeRange;
}
exports.$init$DateTimeRange=$init$DateTimeRange;
$init$DateTimeRange();
function Duration(milliseconds, $$duration){
    $init$Duration();
    if ($$duration===undefined)$$duration=new Duration.$$;
    $$duration.$$targs$$={Value:{t:Duration},Scale:{t:$$$cl1.Integer}};
    ReadableDuration$base($$duration);
    $$$cl1.Scalable({Value:{t:Duration},Scale:{t:$$$cl1.Integer}},$$duration);
    $$$cl1.add_type_arg($$duration,'Value',{t:Duration});
    $$$cl1.add_type_arg($$duration,'Scale',{t:$$$cl1.Integer});
    $$duration.milliseconds$1078_=milliseconds;
    $$duration.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds of this duration.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','milliseconds']};}};
    $$duration.$prop$getMilliseconds.get=function(){return milliseconds};
    $$duration.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this duration as a period of milliseconds.",50)),$$$cl1.shared()];},d:['ceylon.time','Duration','$at','period']};}};
    $$duration.$prop$getPeriod.get=function(){return period};
    $$duration.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the string representation of this duration.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','string']};}};
    $$duration.$prop$getString.get=function(){return string};
    return $$duration;
}
Duration.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:ReadableDuration$base},{t:$$$cl1.Scalable,a:{Value:{t:Duration},Scale:{t:$$$cl1.Integer}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Duration specifies a discreet amount of milliseconds between two instances of time.",83)),$$$cl1.shared()];},d:['ceylon.time','Duration']};};
exports.Duration=Duration;
function $init$Duration(){
    if (Duration.$$===undefined){
        $$$cl1.initTypeProto(Duration,'ceylon.time::Duration',$$$cl1.Basic,$init$ReadableDuration$base(),$$$cl1.Scalable);
        (function($$duration){
            $$$cl1.defineAttr($$duration,'milliseconds',function(){return this.milliseconds$1078_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds of this duration.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','milliseconds']};});
            $$$cl1.defineAttr($$duration,'period',function(){
                var $$duration=this;
                return (milliseconds$1079=$$duration.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,milliseconds$1079));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this duration as a period of milliseconds.",50)),$$$cl1.shared()];},d:['ceylon.time','Duration','$at','period']};});
            $$$cl1.defineAttr($$duration,'string',function(){
                var $$duration=this;
                return $$$cl1.StringBuilder().appendAll([$$duration.milliseconds.string,$$$cl1.String("ms",2)]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the string representation of this duration.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','string']};});
            $$duration.equals=function equals(other$1080){
                var $$duration=this;
                var other$1081;
                if($$$cl1.isOfType((other$1081=other$1080),{t:Duration})){
                    return $$duration.milliseconds.equals(other$1081.milliseconds);
                }
                return false;
            };$$duration.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Duration is considered equal when type and milliseconds are the same.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$m','equals']};};
            $$duration.scale=function (scale$1082){
                var $$duration=this;
                return Duration(scale$1082.times($$duration.milliseconds));
            };
            $$duration.scale.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'scale',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a new [[Duration]] with it´s milliseconds scaled.",57)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$m','scale']};};
        })(Duration.$$.prototype);
    }
    return Duration;
}
exports.$init$Duration=$init$Duration;
$init$Duration();
var milliseconds$1079;
function now(clock$1083){
    if(clock$1083===undefined){clock$1083=null;}
    var clock$1084;
    if((clock$1084=clock$1083)!==null){
        return clock$1084.instant();
    }
    return getSystemTime().instant();
}
exports.now=now;
now.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Clock}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Obtains the current instant from the system clock.",50)),$$$cl1.shared()];},d:['ceylon.time','now']};};
function Instant(millisecondsOfEpoch, $$instant){
    $init$Instant();
    if ($$instant===undefined)$$instant=new Instant.$$;
    $$instant.$$targs$$={Other:{t:Instant}};
    ReadableInstant$base($$instant);
    $$$cl1.Comparable({Other:{t:Instant}},$$instant);
    $$$cl1.add_type_arg($$instant,'Other',{t:Instant});
    $$instant.millisecondsOfEpoch$1085_=millisecondsOfEpoch;
    $$instant.$prop$getMillisecondsOfEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};}};
    $$instant.$prop$getMillisecondsOfEpoch.get=function(){return millisecondsOfEpoch};
    return $$instant;
}
Instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:ReadableInstant$base},{t:$$$cl1.Comparable,a:{Other:{t:Instant}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A specific instant of time on a continuous time-scale.\n\nAn instant represents a single point in time irrespective of \nany time-zone offsets or geographical locations.",166)),$$$cl1.shared()];},d:['ceylon.time','Instant']};};
exports.Instant=Instant;
function $init$Instant(){
    if (Instant.$$===undefined){
        $$$cl1.initTypeProto(Instant,'ceylon.time::Instant',$$$cl1.Basic,$init$ReadableInstant$base(),$$$cl1.Comparable);
        (function($$instant){
            $$$cl1.defineAttr($$instant,'millisecondsOfEpoch',function(){return this.millisecondsOfEpoch$1085_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};});
            $$instant.plus=function plus(other$1086){
                var $$instant=this;
                
                var case$1087=other$1086;
                if ($$$cl1.isOfType(other$1086,{t:Duration})) {
                    return Instant($$instant.millisecondsOfEpoch.plus(case$1087.milliseconds));
                }else if ($$$cl1.isOfType(other$1086,{t:Period})) {
                    return $$instant.dateTime().plus(case$1087).instant();
                }
            };$$instant.plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a period to this instant.",30)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','plus']};};
            $$instant.minus=function minus(other$1088){
                var $$instant=this;
                
                var case$1089=other$1088;
                if ($$$cl1.isOfType(other$1088,{t:Duration})) {
                    return Instant($$instant.millisecondsOfEpoch.minus(case$1089.milliseconds));
                }else if ($$$cl1.isOfType(other$1088,{t:Period})) {
                    return $$instant.dateTime().minus(case$1089).instant();
                }
            };$$instant.minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts a period to this instant.",35)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','minus']};};
            $$instant.compare=function compare(other$1090){
                var $$instant=this;
                return $$instant.millisecondsOfEpoch.compare(other$1090.millisecondsOfEpoch);
            };$$instant.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Compares this instant to the _other_ instant.",45)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$m','compare']};};
            $$instant.dateTime$defs$timeZone=function(timeZone$1091){var $$instant=this;
            return getTimeZone$timezone().system;};
            $$instant.dateTime=function dateTime(timeZone$1091){
                var $$instant=this;
                if(timeZone$1091===undefined){timeZone$1091=$$instant.dateTime$defs$timeZone(timeZone$1091);}
                return GregorianDateTime$internal($$instant.date(timeZone$1091),$$instant.time(timeZone$1091));
            };$$instant.dateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this instant as a [[DateTime]] value.",45)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','dateTime']};};
            $$instant.date$defs$timeZone=function(timeZone$1092){var $$instant=this;
            return getTimeZone$timezone().system;};
            $$instant.date=function date(timeZone$1092){
                var $$instant=this;
                if(timeZone$1092===undefined){timeZone$1092=$$instant.date$defs$timeZone(timeZone$1092);}
                return GregorianDate$internal(getUnixTime$chronology().fixedFromTime($$instant.millisecondsOfEpoch.plus(timeZone$1092.offset($$instant))));
            };$$instant.date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this instant as a [[Date]] value.",41)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','date']};};
            $$instant.time$defs$timeZone=function(timeZone$1093){var $$instant=this;
            return getTimeZone$timezone().system;};
            $$instant.time=function time(timeZone$1093){
                var $$instant=this;
                if(timeZone$1093===undefined){timeZone$1093=$$instant.time$defs$timeZone(timeZone$1093);}
                return TimeOfDay$internal(getUnixTime$chronology().timeOfDay($$instant.millisecondsOfEpoch.plus(timeZone$1093.offset($$instant))));
            };$$instant.time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _time of day_ for this instant.",39)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','time']};};
            $$instant.zoneDateTime$defs$timeZone=function(timeZone$1094){var $$instant=this;
            return getTimeZone$timezone().system;};
            $$instant.zoneDateTime=function zoneDateTime(timeZone$1094){
                var $$instant=this;
                if(timeZone$1094===undefined){timeZone$1094=$$instant.zoneDateTime$defs$timeZone(timeZone$1094);}
                return GregorianZonedDateTime$internal($$instant,timeZone$1094);
            };$$instant.zoneDateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ZoneDateTime value for this instant.",44)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','zoneDateTime']};};
            $$instant.durationTo=function durationTo(other$1095){
                var $$instant=this;
                return Duration(other$1095.millisecondsOfEpoch.minus($$instant.millisecondsOfEpoch));
            };$$instant.durationTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns duration in milliseconds from this instant to the other instant.",72)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','durationTo']};};
            $$instant.durationFrom=function durationFrom(other$1096){
                var $$instant=this;
                return Duration($$instant.millisecondsOfEpoch.minus(other$1096.millisecondsOfEpoch));
            };$$instant.durationFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns duration in milliseconds from other instant to this instant.",68)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','durationFrom']};};
            $$instant.equals=function equals(other$1097){
                var $$instant=this;
                var other$1098;
                if($$$cl1.isOfType((other$1098=other$1097),{t:Instant})){
                    return $$instant.millisecondsOfEpoch.equals(other$1098.millisecondsOfEpoch);
                }
                return false;
            };$$instant.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type and milliseconds of epoch.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$m','equals']};};
        })(Instant.$$.prototype);
    }
    return Instant;
}
exports.$init$Instant=$init$Instant;
$init$Instant();
function AbstractDate$internal(dayOfEra, $$abstractDate){
    $init$AbstractDate$internal();
    if ($$abstractDate===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $Date($$abstractDate);
    $$abstractDate.dayOfEra$1099_=dayOfEra;
    $$abstractDate.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$at','dayOfEra']};}};
    $$abstractDate.$prop$getDayOfEra.get=function(){return dayOfEra};
    return $$abstractDate;
}
AbstractDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$Date}],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behaviors for _Date_ types.",34)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.internal','AbstractDate']};};
exports.AbstractDate$internal=AbstractDate$internal;
function $init$AbstractDate$internal(){
    if (AbstractDate$internal.$$===undefined){
        $$$cl1.initTypeProto(AbstractDate$internal,'ceylon.time.internal::AbstractDate',$$$cl1.Basic,$init$$Date());
        (function($$abstractDate){
            $$$cl1.defineAttr($$abstractDate,'dayOfEra',function(){return this.dayOfEra$1099_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$at','dayOfEra']};});
            $$abstractDate.compare=function compare(other$1100){
                var $$abstractDate=this;
                return $$abstractDate.dayOfEra.compare(other$1100.dayOfEra);
            };$$abstractDate.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$Date},$an:function(){return[];}}],$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Dates from same chronology can be compared if they have same _day of era_.",74)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$m','compare']};};
            $$abstractDate.equals=function equals(other$1101){
                var $$abstractDate=this;
                var other$1102;
                if($$$cl1.isOfType((other$1102=other$1101),{t:AbstractDate$internal})){
                    return $$abstractDate.dayOfEra.equals(other$1102.dayOfEra);
                }
                return false;
            };$$abstractDate.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Dates from same chronology can be considered equal if they have same _day of era_.",82)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$m','equals']};};
        })(AbstractDate$internal.$$.prototype);
    }
    return AbstractDate$internal;
}
exports.$init$AbstractDate$internal=$init$AbstractDate$internal;
$init$AbstractDate$internal();
function GregorianDate$internal(dayOfEra$1103, $$gregorianDate){
    $init$GregorianDate$internal();
    if ($$gregorianDate===undefined)$$gregorianDate=new GregorianDate$internal.$$;
    $$gregorianDate.dayOfEra$1103_=dayOfEra$1103;
    AbstractDate$internal($$gregorianDate.dayOfEra$1103,$$gregorianDate);
    $$gregorianDate.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','year']};}};
    $$gregorianDate.$prop$getYear.get=function(){return year};
    $$gregorianDate.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','month']};}};
    $$gregorianDate.$prop$getMonth.get=function(){return month};
    $$gregorianDate.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','day']};}};
    $$gregorianDate.$prop$getDay.get=function(){return day};
    $$gregorianDate.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};}};
    $$gregorianDate.$prop$getLeapYear.get=function(){return leapYear};
    $$gregorianDate.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};}};
    $$gregorianDate.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$gregorianDate.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day.",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};}};
    $$gregorianDate.$prop$getPredecessor.get=function(){return predecessor};
    $$gregorianDate.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day.",212)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','successor']};}};
    $$gregorianDate.$prop$getSuccessor.get=function(){return successor};
    $$gregorianDate.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};}};
    $$gregorianDate.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    $$gregorianDate.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of era_ as it enumerable value",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','integerValue']};}};
    $$gregorianDate.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianDate;
}
GregorianDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AbstractDate$internal},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of a gregorian calendar",46)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianDate']};};
exports.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
    if (GregorianDate$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',$init$AbstractDate$internal());
        (function($$gregorianDate){
            $$$cl1.defineAttr($$gregorianDate,'year',function(){
                var $$gregorianDate=this;
                return getGregorian$chronology().yearFrom($$gregorianDate.dayOfEra$1103);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','year']};});
            $$$cl1.defineAttr($$gregorianDate,'month',function(){
                var $$gregorianDate=this;
                return monthOf$base(getGregorian$chronology().monthFrom($$gregorianDate.dayOfEra$1103));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','month']};});
            $$$cl1.defineAttr($$gregorianDate,'day',function(){
                var $$gregorianDate=this;
                return getGregorian$chronology().dayFrom($$gregorianDate.dayOfEra$1103);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','day']};});
            $$$cl1.defineAttr($$gregorianDate,'leapYear',function(){
                var $$gregorianDate=this;
                return getGregorian$chronology().leapYear($$gregorianDate.year);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};});
            $$$cl1.defineAttr($$gregorianDate,'dayOfYear',function(){
                var $$gregorianDate=this;
                return $$gregorianDate.month.fisrtDayOfYear($$gregorianDate.leapYear).plus($$gregorianDate.day).minus((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};});
            $$$cl1.defineAttr($$gregorianDate,'predecessor',function(){
                var $$gregorianDate=this;
                return $$gregorianDate.minusDays((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day.",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};});
            $$$cl1.defineAttr($$gregorianDate,'successor',function(){
                var $$gregorianDate=this;
                return $$gregorianDate.plusDays((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day.",212)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','successor']};});
            $$$cl1.defineAttr($$gregorianDate,'dayOfWeek',function(){
                var $$gregorianDate=this;
                return dayOfWeek$base(getGregorian$chronology().dayOfWeekFrom($$gregorianDate.dayOfEra$1103));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};});
            $$gregorianDate.plusDays=function plusDays(days$1104){
                var $$gregorianDate=this;
                if(days$1104.equals((0))){
                    return $$gregorianDate;
                }
                return GregorianDate$internal($$gregorianDate.dayOfEra$1103.plus(days$1104));
            };$$gregorianDate.plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days to this date and returns the resulting [[Date]].",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusDays']};};
            $$gregorianDate.minusDays=function (days$1105){
                var $$gregorianDate=this;
                return $$gregorianDate.plusDays((-days$1105));
            };
            $$gregorianDate.minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this date and returns the resulting [[Date]].",75)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusDays']};};
            $$gregorianDate.plusWeeks=function (weeks$1106){
                var $$gregorianDate=this;
                return $$gregorianDate.plusDays(weeks$1106.times(getDays$base().perWeek));
            };
            $$gregorianDate.plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks to this date and returns the resulting [[Date]].",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusWeeks']};};
            $$gregorianDate.minusWeeks=function (weeks$1107){
                var $$gregorianDate=this;
                return $$gregorianDate.plusWeeks((-weeks$1107));
            };
            $$gregorianDate.minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this date and returns the resulting [[Date]].",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusWeeks']};};
            $$gregorianDate.plusMonths=function plusMonths(months$1108){
                var $$gregorianDate=this;
                if(months$1108.equals((0))){
                    return $$gregorianDate;
                }
                var o$1109=$$gregorianDate.month.add(months$1108);
                var newYear$1110=$$gregorianDate.year.plus(o$1109.years);
                var monthDay$1111=monthOf$base(o$1109.month.integer).numberOfDays(getGregorian$chronology().leapYear(newYear$1110));
                return GregorianDate$internal(getGregorian$chronology().fixedFrom($$$cl1.Tuple(newYear$1110,$$$cl1.Tuple(o$1109.month.integer,$$$cl1.Tuple($$$cl1.min($$$cl1.Tuple(monthDay$1111,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Value:{t:$$$cl1.Integer},Absent:{t:$$$cl1.Nothing}}),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
            };$$gregorianDate.plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",320)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusMonths']};};
            $$gregorianDate.minusMonths=function (months$1112){
                var $$gregorianDate=this;
                return $$gregorianDate.plusMonths((-months$1112));
            };
            $$gregorianDate.minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",328)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusMonths']};};
            $$gregorianDate.plusYears=function plusYears(years$1113){
                var $$gregorianDate=this;
                if(years$1113.equals((0))){
                    return $$gregorianDate;
                }
                var newDay$1114=(opt$1115=(($$gregorianDate.day.equals((29))&&$$gregorianDate.month.equals(getFebruary$base()))?(28):null),opt$1115!==null?opt$1115:$$gregorianDate.day);
                var opt$1115;
                return GregorianDate$internal(getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year.plus(years$1113),$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(newDay$1114,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
            };$$gregorianDate.plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",326)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusYears']};};
            $$gregorianDate.minusYears=function (years$1116){
                var $$gregorianDate=this;
                return $$gregorianDate.plusYears((-years$1116));
            };
            $$gregorianDate.minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n",342)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusYears']};};
            $$gregorianDate.withDay=function withDay(day$1117){
                var $$gregorianDate=this;
                if(day$1117.equals($$gregorianDate.day)){
                    return $$gregorianDate;
                }
                getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(day$1117,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
                return GregorianDate$internal($$gregorianDate.dayOfEra$1103.minus($$gregorianDate.day).plus(day$1117));
            };$$gregorianDate.withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withDay']};};
            $$gregorianDate.withMonth=function withMonth(month$1118){
                var $$gregorianDate=this;
                var newMonth$1119=monthOf$base(month$1118);
                if(newMonth$1119.equals($$gregorianDate.month)){
                    return $$gregorianDate;
                }
                getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1119.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
                return GregorianDate$internal(getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1119.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
            };$$gregorianDate.withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the month set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",115)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withMonth']};};
            $$gregorianDate.withYear=function withYear(year$1120){
                var $$gregorianDate=this;
                if(year$1120.equals($$gregorianDate.year)){
                    return $$gregorianDate;
                }
                getGregorian$chronology().checkDate($$$cl1.Tuple(year$1120,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
                return GregorianDate$internal(getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1120,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
            };$$gregorianDate.withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the specified year value.\n\n**Note:** It should result in a valid gregorian date.\n",103)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withYear']};};
            $$gregorianDate.plus=function plus(amount$1121){
                var $$gregorianDate=this;
                return (months$1122=amount$1121.years.times(getMonths$base().perYear).plus(amount$1121.months),days$1123=amount$1121.days,$$gregorianDate.addPeriod$1124(months$1122,days$1123));
                var months$1122,days$1123;
            };$$gregorianDate.plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:ReadableDatePeriod$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified date period to this date and returns the new [[Date]].",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plus']};};
            $$gregorianDate.minus=function minus(amount$1125){
                var $$gregorianDate=this;
                return (months$1126=amount$1125.years.negativeValue.times(getMonths$base().perYear).plus(amount$1125.months.negativeValue),days$1127=amount$1125.days.negativeValue,$$gregorianDate.addPeriod$1124(months$1126,days$1127));
                var months$1126,days$1127;
            };$$gregorianDate.minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:ReadableDatePeriod$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified date period from this date and returns the new [[Date]].",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minus']};};
            $$gregorianDate.addPeriod$1124=function addPeriod$1124(months$1128,days$1129){
                var $$gregorianDate=this;
                var _this$1130=$$gregorianDate;
                function set_this$1130(_this$1131){return _this$1130=_this$1131;};
                if(days$1129.compare((0)).equals($$$cl1.getSmaller())){
                    _this$1130=_this$1130.minusDays(days$1129.negativeValue);
                }
                if(months$1128.compare((0)).equals($$$cl1.getSmaller())){
                    _this$1130=_this$1130.minusMonths(months$1128.negativeValue);
                }
                if(months$1128.compare((0)).equals($$$cl1.getLarger())){
                    _this$1130=_this$1130.plusMonths(months$1128);
                }
                if(days$1129.compare((0)).equals($$$cl1.getLarger())){
                    _this$1130=_this$1130.plusDays(days$1129);
                }
                return _this$1130;
            };$$gregorianDate.addPeriod$1124.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior.",176))];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod']};};
            $$$cl1.defineAttr($$gregorianDate,'weekOfYear',function(){
                var $$gregorianDate=this;
                var weekFromYearBefore$1132=(0);
                $prop$getWeekFromYearBefore$1132={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','weekFromYearBefore']};}};
                $prop$getWeekFromYearBefore$1132.get=function(){return weekFromYearBefore$1132};
                var possibleNextYearWeek$1133=(53);
                $prop$getPossibleNextYearWeek$1133={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','possibleNextYearWeek']};}};
                $prop$getPossibleNextYearWeek$1133.get=function(){return possibleNextYearWeek$1133};
                function normalizeFirstWeek$1134(weekNumber$1135){
                    var result$1136=weekNumber$1135;
                    function setResult$1136(result$1137){return result$1136=result$1137;};
                    var jan1$1138=$$gregorianDate.withDay((1)).withMonth(getJanuary$base());
                    var jan1WeekDay$1139=(opt$1140=(jan1$1138.dayOfWeek.equals(getSunday$base())?(7):null),opt$1140!==null?opt$1140:jan1$1138.dayOfWeek.integer);
                    var opt$1140;
                    if((($$gregorianDate.dayOfYear.compare((8).minus(jan1WeekDay$1139))!==$$$cl1.getLarger())&&jan1WeekDay$1139.compare((4)).equals($$$cl1.getLarger()))){
                        if((jan1WeekDay$1139.equals((5))||(jan1WeekDay$1139.equals((6))&&$$gregorianDate.minusYears((1)).leapYear))){
                            result$1136=(53);
                        }else {
                            result$1136=(52);
                        }
                    }
                    return result$1136;
                };normalizeFirstWeek$1134.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek']};};
                function normalizeLastWeek$1141(weekNumber$1142){
                    var result$1143=weekNumber$1142;
                    function setResult$1143(result$1144){return result$1143=result$1144;};
                    var weekDay$1145=adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
                    var totalDaysInYear$1146=(opt$1147=($$gregorianDate.leapYear?(366):null),opt$1147!==null?opt$1147:(365));
                    var opt$1147;
                    if(totalDaysInYear$1146.minus($$gregorianDate.dayOfYear).compare((4).minus(weekDay$1145)).equals($$$cl1.getSmaller())){
                        result$1143=(1);
                    }
                    return result$1143;
                };normalizeLastWeek$1141.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek']};};
                var dayOfWeekNumber$1148=adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
                $prop$getDayOfWeekNumber$1148={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','dayOfWeekNumber']};}};
                $prop$getDayOfWeekNumber$1148.get=function(){return dayOfWeekNumber$1148};
                var weekNumber$1149=$$gregorianDate.dayOfYear.minus(dayOfWeekNumber$1148).plus((10)).divided((7));
                function setWeekNumber$1149(weekNumber$1150){return weekNumber$1149=weekNumber$1150;};
                $prop$getWeekNumber$1149={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','weekNumber']};}};
                $prop$getWeekNumber$1149.get=function(){return weekNumber$1149};
                $prop$getWeekNumber$1149.set=setWeekNumber$1149;
                if (setWeekNumber$1149.$$metamodel$$===undefined)setWeekNumber$1149.$$metamodel$$=$prop$getWeekNumber$1149.$$metamodel$$;
                if(weekNumber$1149.equals(weekFromYearBefore$1132)){
                    weekNumber$1149=normalizeFirstWeek$1134(weekNumber$1149);
                }else {
                    if(weekNumber$1149.equals(possibleNextYearWeek$1133)){
                        weekNumber$1149=normalizeLastWeek$1141(weekNumber$1149);
                    }
                }
                return weekNumber$1149;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear']};});$$gregorianDate.at=function at(time$1151){
                var $$gregorianDate=this;
                return GregorianDateTime$internal($$gregorianDate,time$1151);
            };$$gregorianDate.at.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'time',$mt:'prm',$t:{t:Time},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] value.",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','at']};};
            $$$cl1.defineAttr($$gregorianDate,'string',function(){
                var $$gregorianDate=this;
                return $$$cl1.StringBuilder().appendAll([$$gregorianDate.year.string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.month.integer).string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.day).string]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this date.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Dates",119)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','string']};});$$gregorianDate.periodFrom=function periodFrom(start$1152){
                var $$gregorianDate=this;
                var from$1153=(opt$1154=($$gregorianDate.compare(start$1152).equals($$$cl1.getSmaller())?$$gregorianDate:null),opt$1154!==null?opt$1154:start$1152);
                var opt$1154;
                var to$1155=(opt$1156=($$gregorianDate.compare(start$1152).equals($$$cl1.getSmaller())?start$1152:null),opt$1156!==null?opt$1156:$$gregorianDate);
                var opt$1156;
                var nextDate$1157=from$1153.plusYears((1));
                function setNextDate$1157(nextDate$1158){return nextDate$1157=nextDate$1158;};
                var yy$1159=(0);
                function setYy$1159(yy$1160){return yy$1159=yy$1160;};
                while((nextDate$1157.compare(to$1155)!==$$$cl1.getLarger())){
                    nextDate$1157=nextDate$1157.plusYears((1));
                    (yy$1159=yy$1159.plus((1)));
                }
                var mm$1161=(0);
                function setMm$1161(mm$1162){return mm$1161=mm$1162;};
                nextDate$1157=from$1153.plusYears(yy$1159).plusMonths(mm$1161.plus((1)));
                while((nextDate$1157.compare(to$1155)!==$$$cl1.getLarger())){
                    (mm$1161=mm$1161.plus((1)));
                    nextDate$1157=from$1153.plusYears(yy$1159).plusMonths(mm$1161.plus((1)));
                }
                nextDate$1157=from$1153.plusYears(yy$1159).plusMonths(mm$1161).plusDays((1));
                var dd$1163=(0);
                function setDd$1163(dd$1164){return dd$1163=dd$1164;};
                while((nextDate$1157.compare(to$1155)!==$$$cl1.getLarger())){
                    nextDate$1157=nextDate$1157.plusDays((1));
                    (dd$1163=dd$1163.plus((1)));
                }
                var positive$1165=start$1152.compare($$gregorianDate).equals($$$cl1.getSmaller());
                return (years$1166=(opt$1167=(positive$1165?yy$1159:null),opt$1167!==null?opt$1167:(-yy$1159)),months$1168=(opt$1169=(positive$1165?mm$1161:null),opt$1169!==null?opt$1169:(-mm$1161)),days$1170=(opt$1171=(positive$1165?dd$1163:null),opt$1171!==null?opt$1171:(-dd$1163)),Period(years$1166,months$1168,days$1170,undefined,undefined,undefined,undefined));
                var years$1166,opt$1167,months$1168,opt$1169,days$1170,opt$1171;
            };$$gregorianDate.periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given date.\n\nIf this date is before the given date then return negative period.",119)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom']};};
            $$gregorianDate.periodTo=function (end$1172){
                var $$gregorianDate=this;
                return end$1172.periodFrom($$gregorianDate);
            };
            $$gregorianDate.periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given date.\n\nIf this date is after the given date then return negative period.",118)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','periodTo']};};
            $$gregorianDate.rangeTo=function rangeTo(other$1173){
                var $$gregorianDate=this;
                return DateRange($$gregorianDate,other$1173);
            };$$gregorianDate.rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[DateRange]] between this and given Date.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','rangeTo']};};
            $$$cl1.defineAttr($$gregorianDate,'integerValue',function(){
                var $$gregorianDate=this;
                return $$gregorianDate.dayOfEra$1103;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of era_ as it enumerable value",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','integerValue']};});
            $$$cl1.defineAttr($$gregorianDate,'dayOfEra$1103',function(){return this.dayOfEra$1103_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,d:['ceylon.time.internal','GregorianDate','$at','dayOfEra']};});
        })(GregorianDate$internal.$$.prototype);
    }
    return GregorianDate$internal;
}
exports.$init$GregorianDate$internal=$init$GregorianDate$internal;
$init$GregorianDate$internal();
function gregorianDate$internal(year$1174,month$1175,day$1176){
    var year$1174=year$1174;
    var month$1175=month$1175;
    var day$1176=day$1176;
    getGregorian$chronology().checkDate($$$cl1.Tuple(year$1174,$$$cl1.Tuple(monthOf$base(month$1175).integer,$$$cl1.Tuple(day$1176,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
    return GregorianDate$internal(getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1174,$$$cl1.Tuple(monthOf$base(month$1175).integer,$$$cl1.Tuple(day$1176,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
}
exports.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Year number of the date")];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[$$$cl1.doc("Month of the year")];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Day of month")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a gregorian calendar date according to the specified year, month and date values.",89)),$$$cl1.shared()];},d:['ceylon.time.internal','gregorianDate']};};
function GregorianDateTime$internal(date, time, $$gregorianDateTime){
    $init$GregorianDateTime$internal();
    if ($$gregorianDateTime===undefined)$$gregorianDateTime=new GregorianDateTime$internal.$$;
    DateTime($$gregorianDateTime);
    $$gregorianDateTime.date$1177_=date;
    $$gregorianDateTime.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};}};
    $$gregorianDateTime.$prop$getDate.get=function(){return date};
    $$gregorianDateTime.time$1178_=time;
    $$gregorianDateTime.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};}};
    $$gregorianDateTime.$prop$getTime.get=function(){return time};
    $$gregorianDateTime.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};}};
    $$gregorianDateTime.$prop$getDay.get=function(){return day};
    $$gregorianDateTime.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};}};
    $$gregorianDateTime.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    $$gregorianDateTime.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};}};
    $$gregorianDateTime.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$gregorianDateTime.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};}};
    $$gregorianDateTime.$prop$getDayOfEra.get=function(){return dayOfEra};
    $$gregorianDateTime.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};}};
    $$gregorianDateTime.$prop$getYear.get=function(){return year};
    $$gregorianDateTime.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true` if this is a leap year according to gregorian calendar leap year rules.",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};}};
    $$gregorianDateTime.$prop$getLeapYear.get=function(){return leapYear};
    $$gregorianDateTime.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};}};
    $$gregorianDateTime.$prop$getWeekOfYear.get=function(){return weekOfYear};
    $$gregorianDateTime.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};}};
    $$gregorianDateTime.$prop$getMonth.get=function(){return month};
    $$gregorianDateTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};}};
    $$gregorianDateTime.$prop$getHours.get=function(){return hours};
    $$gregorianDateTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};}};
    $$gregorianDateTime.$prop$getMilliseconds.get=function(){return milliseconds};
    $$gregorianDateTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};}};
    $$gregorianDateTime.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$gregorianDateTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};}};
    $$gregorianDateTime.$prop$getMinutes.get=function(){return minutes};
    $$gregorianDateTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};}};
    $$gregorianDateTime.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    $$gregorianDateTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};}};
    $$gregorianDateTime.$prop$getSeconds.get=function(){return seconds};
    $$gregorianDateTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};}};
    $$gregorianDateTime.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    $$gregorianDateTime.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n",169)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};}};
    $$gregorianDateTime.$prop$getPredecessor.get=function(){return predecessor};
    $$gregorianDateTime.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n",165)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};}};
    $$gregorianDateTime.$prop$getSuccessor.get=function(){return successor};
    $$gregorianDateTime.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone.",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','integerValue']};}};
    $$gregorianDateTime.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianDateTime;
}
GregorianDateTime$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:DateTime}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of a gregorian calendar",46)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianDateTime']};};
exports.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
    if (GregorianDateTime$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',$$$cl1.Basic,$init$DateTime());
        (function($$gregorianDateTime){
            $$$cl1.defineAttr($$gregorianDateTime,'date',function(){return this.date$1177_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};});
            $$$cl1.defineAttr($$gregorianDateTime,'time',function(){return this.time$1178_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};});
            $$gregorianDateTime.compare=function compare(other$1179){
                var $$gregorianDateTime=this;
                return (opt$1180=((!$$gregorianDateTime.date.equals(other$1179.date))?$$gregorianDateTime.date.compare(other$1179.date):null),opt$1180!==null?opt$1180:$$gregorianDateTime.time.compare(other$1179.time));
                var opt$1180;
            };$$gregorianDateTime.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Comparing [[DateTime]] is based on [[Date]] and [[Time]] comparision.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','compare']};};
            $$$cl1.defineAttr($$gregorianDateTime,'day',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.day;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};});
            $$$cl1.defineAttr($$gregorianDateTime,'dayOfWeek',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.dayOfWeek;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};});
            $$$cl1.defineAttr($$gregorianDateTime,'dayOfYear',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.dayOfYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};});
            $$$cl1.defineAttr($$gregorianDateTime,'dayOfEra',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.dayOfEra;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};});
            $$$cl1.defineAttr($$gregorianDateTime,'year',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.year;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};});
            $$$cl1.defineAttr($$gregorianDateTime,'leapYear',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.leapYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true` if this is a leap year according to gregorian calendar leap year rules.",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};});
            $$$cl1.defineAttr($$gregorianDateTime,'weekOfYear',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.weekOfYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};});
            $$$cl1.defineAttr($$gregorianDateTime,'month',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.date.month;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};});
            $$$cl1.defineAttr($$gregorianDateTime,'hours',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.hours;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};});
            $$$cl1.defineAttr($$gregorianDateTime,'milliseconds',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.milliseconds;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};});
            $$$cl1.defineAttr($$gregorianDateTime,'millisecondsOfDay',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.millisecondsOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};});
            $$$cl1.defineAttr($$gregorianDateTime,'minutes',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.minutes;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};});
            $$$cl1.defineAttr($$gregorianDateTime,'minutesOfDay',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.minutesOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};});
            $$$cl1.defineAttr($$gregorianDateTime,'seconds',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.seconds;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};});
            $$$cl1.defineAttr($$gregorianDateTime,'secondsOfDay',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.time.secondsOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};});
            $$gregorianDateTime.plusYears=function plusYears(years$1181){
                var $$gregorianDateTime=this;
                return (date$1182=$$gregorianDateTime.date.plusYears(years$1181),time$1183=$$gregorianDateTime.time,GregorianDateTime$internal(date$1182,time$1183));
                var date$1182,time$1183;
            };$$gregorianDateTime.plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",326)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusYears']};};
            $$gregorianDateTime.minusYears=function minusYears(years$1184){
                var $$gregorianDateTime=this;
                return (date$1185=$$gregorianDateTime.date.minusYears(years$1184),time$1186=$$gregorianDateTime.time,GregorianDateTime$internal(date$1185,time$1186));
                var date$1185,time$1186;
            };$$gregorianDateTime.minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n",342)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusYears']};};
            $$gregorianDateTime.plusMonths=function plusMonths(months$1187){
                var $$gregorianDateTime=this;
                return (date$1188=$$gregorianDateTime.date.plusMonths(months$1187),time$1189=$$gregorianDateTime.time,GregorianDateTime$internal(date$1188,time$1189));
                var date$1188,time$1189;
            };$$gregorianDateTime.plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",320)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMonths']};};
            $$gregorianDateTime.minusMonths=function minusMonths(months$1190){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusMonths((-months$1190));
            };$$gregorianDateTime.minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",328)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMonths']};};
            $$gregorianDateTime.plusWeeks=function plusWeeks(weeks$1191){
                var $$gregorianDateTime=this;
                return (date$1192=$$gregorianDateTime.date.plusWeeks(weeks$1191),time$1193=$$gregorianDateTime.time,GregorianDateTime$internal(date$1192,time$1193));
                var date$1192,time$1193;
            };$$gregorianDateTime.plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks to this date and returns the resulting [[DateTime]].",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusWeeks']};};
            $$gregorianDateTime.minusWeeks=function minusWeeks(weeks$1194){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusWeeks((-weeks$1194));
            };$$gregorianDateTime.minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this date and returns the resulting [[DateTime]].",80)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusWeeks']};};
            $$gregorianDateTime.plusDays=function plusDays(days$1195){
                var $$gregorianDateTime=this;
                return (date$1196=$$gregorianDateTime.date.plusDays(days$1195),time$1197=$$gregorianDateTime.time,GregorianDateTime$internal(date$1196,time$1197));
                var date$1196,time$1197;
            };$$gregorianDateTime.plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days to this date and returns the resulting [[DateTime]].",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusDays']};};
            $$gregorianDateTime.minusDays=function minusDays(days$1198){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusDays((-days$1198));
            };$$gregorianDateTime.minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this date and returns the resulting [[DateTime]].",79)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusDays']};};
            $$gregorianDateTime.plusHours=function plusHours(hours$1199){
                var $$gregorianDateTime=this;
                if(hours$1199.equals((0))){
                    return $$gregorianDateTime;
                }
                var signal$1200=(opt$1201=((hours$1199.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1201!==null?opt$1201:(-(1)));
                var opt$1201;
                return (hours$1202=hours$1199.times(signal$1200),signal$1203=signal$1200,$$gregorianDateTime.fromTime$1204(hours$1202,undefined,undefined,undefined,signal$1203));
                var hours$1202,signal$1203;
            };$$gregorianDateTime.plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of hours from this _date and time_ and returns the resulting [[DateTime]].",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours']};};
            $$gregorianDateTime.minusHours=function minusHours(hours$1205){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusHours((-hours$1205));
            };$$gregorianDateTime.minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of hours from this _date and time_ and returns the resulting [[DateTime]].",91)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusHours']};};
            $$gregorianDateTime.plusMinutes=function plusMinutes(minutes$1206){
                var $$gregorianDateTime=this;
                if(minutes$1206.equals((0))){
                    return $$gregorianDateTime;
                }
                var signal$1207=(opt$1208=((minutes$1206.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1208!==null?opt$1208:(-(1)));
                var opt$1208;
                return (minutes$1209=minutes$1206.times(signal$1207),signal$1210=signal$1207,$$gregorianDateTime.fromTime$1204(undefined,minutes$1209,undefined,undefined,signal$1210));
                var minutes$1209,signal$1210;
            };$$gregorianDateTime.plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of minutes from this _date and time_ and returns the resulting [[DateTime]].",88)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes']};};
            $$gregorianDateTime.minusMinutes=function minusMinutes(minutes$1211){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusMinutes((-minutes$1211));
            };$$gregorianDateTime.minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of minutes from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMinutes']};};
            $$gregorianDateTime.plusSeconds=function plusSeconds(seconds$1212){
                var $$gregorianDateTime=this;
                if(seconds$1212.equals((0))){
                    return $$gregorianDateTime;
                }
                var signal$1213=(opt$1214=((seconds$1212.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1214!==null?opt$1214:(-(1)));
                var opt$1214;
                return (seconds$1215=seconds$1212.times(signal$1213),signal$1216=signal$1213,$$gregorianDateTime.fromTime$1204(undefined,undefined,seconds$1215,undefined,signal$1216));
                var seconds$1215,signal$1216;
            };$$gregorianDateTime.plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of seconds from this _date and time_ and returns the resulting [[DateTime]].",88)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds']};};
            $$gregorianDateTime.minusSeconds=function minusSeconds(seconds$1217){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusSeconds((-seconds$1217));
            };$$gregorianDateTime.minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of seconds from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusSeconds']};};
            $$gregorianDateTime.plusMilliseconds=function plusMilliseconds(milliseconds$1218){
                var $$gregorianDateTime=this;
                if(milliseconds$1218.equals((0))){
                    return $$gregorianDateTime;
                }
                var signal$1219=(opt$1220=((milliseconds$1218.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1220!==null?opt$1220:(-(1)));
                var opt$1220;
                return (millis$1221=milliseconds$1218.times(signal$1219),signal$1222=signal$1219,$$gregorianDateTime.fromTime$1204(undefined,undefined,undefined,millis$1221,signal$1222));
                var millis$1221,signal$1222;
            };$$gregorianDateTime.plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of milliseconds from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds']};};
            $$gregorianDateTime.minusMilliseconds=function minusMilliseconds(milliseconds$1223){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusMilliseconds((-milliseconds$1223));
            };$$gregorianDateTime.minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of milliseconds from this _date and time_ and returns the resulting [[DateTime]].",98)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMilliseconds']};};
            $$gregorianDateTime.withDay=function withDay(dayOfMonth$1224){
                var $$gregorianDateTime=this;
                return (date$1225=$$gregorianDateTime.date.withDay(dayOfMonth$1224),time$1226=$$gregorianDateTime.time,GregorianDateTime$internal(date$1225,time$1226));
                var date$1225,time$1226;
            };$$gregorianDateTime.withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'dayOfMonth',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",138)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withDay']};};
            $$gregorianDateTime.withHours=function withHours(hours$1227){
                var $$gregorianDateTime=this;
                return (date$1228=$$gregorianDateTime.date,time$1229=$$gregorianDateTime.time.withHours(hours$1227),GregorianDateTime$internal(date$1228,time$1229));
                var date$1228,time$1229;
            };$$gregorianDateTime.withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _hours_ value set to the specified value.\n\n**Note:** It should be a valid _hour_.\n",116)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withHours']};};
            $$gregorianDateTime.withYear=function withYear(year$1230){
                var $$gregorianDateTime=this;
                return (date$1231=$$gregorianDateTime.date.withYear(year$1230),time$1232=$$gregorianDateTime.time,GregorianDateTime$internal(date$1231,time$1232));
                var date$1231,time$1232;
            };$$gregorianDateTime.withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _year_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withYear']};};
            $$gregorianDateTime.withMonth=function withMonth(month$1233){
                var $$gregorianDateTime=this;
                return GregorianDateTime$internal($$gregorianDateTime.date.withMonth(month$1233),$$gregorianDateTime.time);
            };$$gregorianDateTime.withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",131)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMonth']};};
            $$gregorianDateTime.withMinutes=function withMinutes(minutes$1234){
                var $$gregorianDateTime=this;
                return (date$1235=$$gregorianDateTime.date,time$1236=$$gregorianDateTime.time.withMinutes(minutes$1234),GregorianDateTime$internal(date$1235,time$1236));
                var date$1235,time$1236;
            };$$gregorianDateTime.withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _minutes_ value set to the specified value.\n\n**Note:** It should be a valid _minute_.\n",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMinutes']};};
            $$gregorianDateTime.withSeconds=function withSeconds(seconds$1237){
                var $$gregorianDateTime=this;
                return (date$1238=$$gregorianDateTime.date,time$1239=$$gregorianDateTime.time.withSeconds(seconds$1237),GregorianDateTime$internal(date$1238,time$1239));
                var date$1238,time$1239;
            };$$gregorianDateTime.withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _seconds_ value set to the specified value.\n\n**Note:** It should be a valid _second_.\n",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withSeconds']};};
            $$gregorianDateTime.withMilliseconds=function withMilliseconds(milliseconds$1240){
                var $$gregorianDateTime=this;
                return (date$1241=$$gregorianDateTime.date,time$1242=$$gregorianDateTime.time.withMilliseconds(milliseconds$1240),GregorianDateTime$internal(date$1241,time$1242));
                var date$1241,time$1242;
            };$$gregorianDateTime.withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note:** It should be a valid _millisecond_.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMilliseconds']};};
            $$$cl1.defineAttr($$gregorianDateTime,'predecessor',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.minusMilliseconds((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n",169)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};});
            $$$cl1.defineAttr($$gregorianDateTime,'successor',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.plusMilliseconds((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n",165)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};});
            $$gregorianDateTime.plus=function plus(amount$1243){
                var $$gregorianDateTime=this;
                return (months$1244=amount$1243.years.times(getMonths$base().perYear).plus(amount$1243.months),days$1245=amount$1243.days,hours$1246=amount$1243.hours,minutes$1247=amount$1243.minutes,seconds$1248=amount$1243.seconds,milliseconds$1249=amount$1243.milliseconds,$$gregorianDateTime.addPeriod$1250(months$1244,days$1245,hours$1246,minutes$1247,seconds$1248,milliseconds$1249));
                var months$1244,days$1245,hours$1246,minutes$1247,seconds$1248,milliseconds$1249;
            };$$gregorianDateTime.plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:ReadablePeriod$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified date period to this date and returns the new [[DateTime]].",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plus']};};
            $$gregorianDateTime.minus=function minus(amount$1251){
                var $$gregorianDateTime=this;
                return (months$1252=amount$1251.years.negativeValue.times(getMonths$base().perYear).plus(amount$1251.months.negativeValue),days$1253=amount$1251.days.negativeValue,hours$1254=amount$1251.hours.negativeValue,minutes$1255=amount$1251.minutes.negativeValue,seconds$1256=amount$1251.seconds.negativeValue,milliseconds$1257=amount$1251.milliseconds.negativeValue,$$gregorianDateTime.addPeriod$1250(months$1252,days$1253,hours$1254,minutes$1255,seconds$1256,milliseconds$1257));
                var months$1252,days$1253,hours$1254,minutes$1255,seconds$1256,milliseconds$1257;
            };$$gregorianDateTime.minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:ReadablePeriod$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified date period from this date and returns the new [[DateTime]].",80)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minus']};};
            $$gregorianDateTime.addPeriod$1250=function addPeriod$1250(months$1258,days$1259,hours$1260,minutes$1261,seconds$1262,milliseconds$1263){
                var $$gregorianDateTime=this;
                var _this$1264=$$gregorianDateTime;
                function set_this$1264(_this$1265){return _this$1264=_this$1265;};
                var totalTime$1266=hours$1260.times(getMilliseconds$base().perHour).plus(minutes$1261.times(getMilliseconds$base().perMinute)).plus(seconds$1262.times(getMilliseconds$base().perSecond)).plus(milliseconds$1263);
                if(totalTime$1266.compare((0)).equals($$$cl1.getSmaller())){
                    _this$1264=_this$1264.minusMilliseconds(totalTime$1266.negativeValue);
                }
                if(days$1259.compare((0)).equals($$$cl1.getSmaller())){
                    _this$1264=_this$1264.minusDays(days$1259.negativeValue);
                }
                if(months$1258.compare((0)).equals($$$cl1.getSmaller())){
                    _this$1264=_this$1264.minusMonths(months$1258.negativeValue);
                }
                if(months$1258.compare((0)).equals($$$cl1.getLarger())){
                    _this$1264=_this$1264.plusMonths(months$1258);
                }
                if(days$1259.compare((0)).equals($$$cl1.getLarger())){
                    _this$1264=_this$1264.plusDays(days$1259);
                }
                if(totalTime$1266.compare((0)).equals($$$cl1.getLarger())){
                    _this$1264=_this$1264.plusMilliseconds(totalTime$1266);
                }
                return _this$1264;
            };$$gregorianDateTime.addPeriod$1250.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior.",176))];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod']};};
            $$gregorianDateTime.instant=function instant(timeZone$1267){
                var $$gregorianDateTime=this;
                if(timeZone$1267===undefined){timeZone$1267=$$gregorianDateTime.instant$defs$timeZone(timeZone$1267);}
                var instant$1268=Instant(getUnixTime$chronology().timeFromFixed($$gregorianDateTime.dayOfEra).plus($$gregorianDateTime.millisecondsOfDay));
                return Instant(instant$1268.millisecondsOfEpoch.minus(timeZone$1267.offset(instant$1268)));
            };$$gregorianDateTime.instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:TimeZone$timezone},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("[[DateTime]] does not know anything about [[TimeZone]] and it should be supplied to\ncreate a [[Instant]].",105)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','instant']};};
            $$gregorianDateTime.equals=function equals(other$1269){
                var $$gregorianDateTime=this;
                var other$1270;
                if($$$cl1.isOfType((other$1270=other$1269),{t:GregorianDateTime$internal})){
                    if(($$gregorianDateTime===other$1270)){
                        return true;
                    }
                    return ($$gregorianDateTime.day.equals(other$1270.day)&&$$gregorianDateTime.time.equals(other$1270.time));
                }
                return false;
            };$$gregorianDateTime.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type, date and time.",58)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','equals']};};
            $$$cl1.defineAttr($$gregorianDateTime,'string',function(){
                var $$gregorianDateTime=this;
                return $$$cl1.StringBuilder().appendAll([$$gregorianDateTime.date.string.string,$$$cl1.String("T",1),$$gregorianDateTime.time.string.string]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _Date and Time of day_.\n\nhttps://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations",159)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','string']};});$$gregorianDateTime.periodFrom=function periodFrom(start$1271){
                var $$gregorianDateTime=this;
                var from$1272=(opt$1273=($$gregorianDateTime.compare(start$1271).equals($$$cl1.getSmaller())?$$gregorianDateTime:null),opt$1273!==null?opt$1273:start$1271);
                var opt$1273;
                var to$1274=(opt$1275=($$gregorianDateTime.compare(start$1271).equals($$$cl1.getSmaller())?start$1271:null),opt$1275!==null?opt$1275:$$gregorianDateTime);
                var opt$1275;
                var dayConsumed$1276=(opt$1277=(to$1274.time.compare(from$1272.time).equals($$$cl1.getSmaller())?(1):null),opt$1277!==null?opt$1277:(0));
                var opt$1277;
                var total$1278=(opt$1279=((to$1274.millisecondsOfDay.compare(from$1272.millisecondsOfDay)!==$$$cl1.getSmaller())?to$1274.millisecondsOfDay.minus(from$1272.millisecondsOfDay):null),opt$1279!==null?opt$1279:getMilliseconds$base().perDay.plus(to$1274.millisecondsOfDay).minus(from$1272.millisecondsOfDay));
                function setTotal$1278(total$1280){return total$1278=total$1280;};
                var opt$1279;
                var hh$1281=total$1278.divided(getMilliseconds$base().perHour);
                total$1278=total$1278.remainder(getMilliseconds$base().perHour);
                var mm$1282=total$1278.divided(getMilliseconds$base().perMinute);
                total$1278=total$1278.remainder(getMilliseconds$base().perMinute);
                var ss$1283=total$1278.divided(getMilliseconds$base().perSecond);
                var positive$1284=start$1271.compare($$gregorianDateTime).equals($$$cl1.getSmaller());
                return (hours$1285=(opt$1286=(positive$1284?hh$1281:null),opt$1286!==null?opt$1286:(-hh$1281)),minutes$1287=(opt$1288=(positive$1284?mm$1282:null),opt$1288!==null?opt$1288:(-mm$1282)),seconds$1289=(opt$1290=(positive$1284?ss$1283:null),opt$1290!==null?opt$1290:(-ss$1283)),milliseconds$1291=(opt$1292=(positive$1284?total$1278.remainder(getMilliseconds$base().perSecond):null),opt$1292!==null?opt$1292:(-total$1278.remainder(getMilliseconds$base().perSecond))),Period(undefined,undefined,undefined,hours$1285,minutes$1287,seconds$1289,milliseconds$1291)).plus((opt$1293=(positive$1284?to$1274.date.minusDays(dayConsumed$1276).periodFrom(from$1272.date):null),opt$1293!==null?opt$1293:to$1274.date.minusDays(dayConsumed$1276).periodTo(from$1272.date)));
                var hours$1285,opt$1286,minutes$1287,opt$1288,seconds$1289,opt$1290,milliseconds$1291,opt$1292,opt$1293;
            };$$gregorianDateTime.periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is before the given [[DateTime]] then return negative period.",143)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom']};};
            $$gregorianDateTime.periodTo=function periodTo(end$1294){
                var $$gregorianDateTime=this;
                return end$1294.periodFrom($$gregorianDateTime);
            };$$gregorianDateTime.periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is after the given [[DateTime]] then return negative period.",142)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','periodTo']};};
            $$gregorianDateTime.rangeTo=function rangeTo(other$1295){
                var $$gregorianDateTime=this;
                return DateTimeRange($$gregorianDateTime,other$1295);
            };$$gregorianDateTime.rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[DateTimeRange]] between this and given DateTime.",62)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','rangeTo']};};
            $$gregorianDateTime.fromTime$1204$defs$hours=function(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){var $$gregorianDateTime=this;
            return (0);};
            $$gregorianDateTime.fromTime$1204$defs$minutes=function(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){var $$gregorianDateTime=this;
            return (0);};
            $$gregorianDateTime.fromTime$1204$defs$seconds=function(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){var $$gregorianDateTime=this;
            return (0);};
            $$gregorianDateTime.fromTime$1204$defs$millis=function(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){var $$gregorianDateTime=this;
            return (0);};
            $$gregorianDateTime.fromTime$1204$defs$signal=function(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){var $$gregorianDateTime=this;
            return (1);};
            $$gregorianDateTime.fromTime$1204=function fromTime$1204(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300){
                var $$gregorianDateTime=this;
                if(hours$1296===undefined){hours$1296=$$gregorianDateTime.fromTime$1204$defs$hours(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300);}
                if(minutes$1297===undefined){minutes$1297=$$gregorianDateTime.fromTime$1204$defs$minutes(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300);}
                if(seconds$1298===undefined){seconds$1298=$$gregorianDateTime.fromTime$1204$defs$seconds(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300);}
                if(millis$1299===undefined){millis$1299=$$gregorianDateTime.fromTime$1204$defs$millis(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300);}
                if(signal$1300===undefined){signal$1300=$$gregorianDateTime.fromTime$1204$defs$signal(hours$1296,minutes$1297,seconds$1298,millis$1299,signal$1300);}
                var inputMillis$1301=hours$1296.times(getMilliseconds$base().perHour).plus(minutes$1297.times(getMilliseconds$base().perMinute)).plus(seconds$1298.times(getMilliseconds$base().perSecond)).plus(millis$1299);
                var days$1302=getDays$base().fromMilliseconds(inputMillis$1301).times(signal$1300);
                var restOfMillis$1303=floorMod$internal$math(inputMillis$1301,getMilliseconds$base().perDay).times(signal$1300).plus($$gregorianDateTime.time.millisecondsOfDay);
                var totalDays$1304=days$1302.plus(floorDiv$internal$math(restOfMillis$1303,getMilliseconds$base().perDay));
                var newMillis$1305=floorMod$internal$math(restOfMillis$1303,getMilliseconds$base().perDay);
                var newTime$1306=(opt$1307=(newMillis$1305.equals($$gregorianDateTime.time.millisecondsOfDay)?$$gregorianDateTime.time:null),opt$1307!==null?opt$1307:TimeOfDay$internal(newMillis$1305));
                var opt$1307;
                return GregorianDateTime$internal($$gregorianDateTime.date.plusDays(totalDays$1304),newTime$1306);
            };$$gregorianDateTime.fromTime$1204.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'hours',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'signal',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Calculates the based in given time, consuming it for each day if necessary.",75))];},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime']};};
            $$$cl1.defineAttr($$gregorianDateTime,'integerValue',function(){
                var $$gregorianDateTime=this;
                return $$gregorianDateTime.instant(getTimeZone$timezone().utc).millisecondsOfEpoch;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone.",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','integerValue']};});
        })(GregorianDateTime$internal.$$.prototype);
    }
    return GregorianDateTime$internal;
}
exports.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;
$init$GregorianDateTime$internal();
function GregorianZonedDateTime$internal(instant, timeZone, $$gregorianZonedDateTime){
    $init$GregorianZonedDateTime$internal();
    if ($$gregorianZonedDateTime===undefined)$$gregorianZonedDateTime=new GregorianZonedDateTime$internal.$$;
    if(timeZone===undefined){timeZone=getTimeZone$timezone().system;}
    ZoneDateTime$timezone($$gregorianZonedDateTime);
    $$gregorianZonedDateTime.timeZone$1308_=timeZone;
    $$gregorianZonedDateTime.$prop$getTimeZone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("TimeZone to be applied in this implementation.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};}};
    $$gregorianZonedDateTime.$prop$getTimeZone.get=function(){return timeZone};
    $$gregorianZonedDateTime.instant$1309_=instant;
    $$gregorianZonedDateTime.$prop$getInstant={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("All operations of this implementations is based in this Instant.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};}};
    $$gregorianZonedDateTime.$prop$getInstant.get=function(){return instant};
    $$gregorianZonedDateTime.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};}};
    $$gregorianZonedDateTime.$prop$getDay.get=function(){return day};
    $$gregorianZonedDateTime.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};}};
    $$gregorianZonedDateTime.$prop$getDayOfEra.get=function(){return dayOfEra};
    $$gregorianZonedDateTime.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};}};
    $$gregorianZonedDateTime.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    $$gregorianZonedDateTime.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};}};
    $$gregorianZonedDateTime.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$gregorianZonedDateTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};}};
    $$gregorianZonedDateTime.$prop$getHours.get=function(){return hours};
    $$gregorianZonedDateTime.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};}};
    $$gregorianZonedDateTime.$prop$getLeapYear.get=function(){return leapYear};
    $$gregorianZonedDateTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};}};
    $$gregorianZonedDateTime.$prop$getMilliseconds.get=function(){return milliseconds};
    $$gregorianZonedDateTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};}};
    $$gregorianZonedDateTime.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$gregorianZonedDateTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};}};
    $$gregorianZonedDateTime.$prop$getMinutes.get=function(){return minutes};
    $$gregorianZonedDateTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};}};
    $$gregorianZonedDateTime.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    $$gregorianZonedDateTime.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};}};
    $$gregorianZonedDateTime.$prop$getMonth.get=function(){return month};
    $$gregorianZonedDateTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};}};
    $$gregorianZonedDateTime.$prop$getSeconds.get=function(){return seconds};
    $$gregorianZonedDateTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};}};
    $$gregorianZonedDateTime.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    $$gregorianZonedDateTime.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};}};
    $$gregorianZonedDateTime.$prop$getWeekOfYear.get=function(){return weekOfYear};
    $$gregorianZonedDateTime.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};}};
    $$gregorianZonedDateTime.$prop$getYear.get=function(){return year};
    $$gregorianZonedDateTime.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};}};
    $$gregorianZonedDateTime.$prop$getDate.get=function(){return date};
    $$gregorianZonedDateTime.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};}};
    $$gregorianZonedDateTime.$prop$getTime.get=function(){return time};
    $$gregorianZonedDateTime.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",252)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};}};
    $$gregorianZonedDateTime.$prop$getPredecessor.get=function(){return predecessor};
    $$gregorianZonedDateTime.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",246)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};}};
    $$gregorianZonedDateTime.$prop$getSuccessor.get=function(){return successor};
    $$gregorianZonedDateTime.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of epoch_ as it enumerable value.",55)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','integerValue']};}};
    $$gregorianZonedDateTime.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianZonedDateTime;
}
GregorianZonedDateTime$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:ZoneDateTime$timezone}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of gregorian calendar thats makes use of a [[TimeZone]] for it´s operations.\n\nThis means that making some operations like _plusDays_ takes into \naccount the result Instant generated to reapply all the rules of the current TimeZone.",254)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianZonedDateTime']};};
exports.GregorianZonedDateTime$internal=GregorianZonedDateTime$internal;
function $init$GregorianZonedDateTime$internal(){
    if (GregorianZonedDateTime$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianZonedDateTime$internal,'ceylon.time.internal::GregorianZonedDateTime',$$$cl1.Basic,$init$ZoneDateTime$timezone());
        (function($$gregorianZonedDateTime){
            $$$cl1.defineAttr($$gregorianZonedDateTime,'timeZone',function(){return this.timeZone$1308_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("TimeZone to be applied in this implementation.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'instant',function(){return this.instant$1309_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("All operations of this implementations is based in this Instant.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};});
            $$gregorianZonedDateTime.compare=function compare(other$1310){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.compare(other$1310.instant);
            };$$gregorianZonedDateTime.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:ZoneDateTime$timezone},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Comparing [[ZoneDateTime]] is based on [[Instant]] and should not be \ncompared as it´s human representation as they are adjusted based on geographic and regional (DST) \nlocations and do not represent a comparison correct.",221)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','compare']};};
            $$$cl1.defineAttr($$gregorianZonedDateTime,'day',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).day;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfEra',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfEra;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfWeek',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfWeek;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfYear',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'hours',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).hours;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'leapYear',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).leapYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'milliseconds',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).milliseconds;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'millisecondsOfDay',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).millisecondsOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'minutes',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minutes;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'minutesOfDay',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minutesOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'month',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).month;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'seconds',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).seconds;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'secondsOfDay',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).secondsOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'weekOfYear',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).weekOfYear;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'year',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).year;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'date',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).date;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$Date},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'time',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).time;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};});
            $$gregorianZonedDateTime.minusDays=function (days$1311){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusDays(days$1311));
            };
            $$gregorianZonedDateTime.minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",184)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusDays']};};
            $$gregorianZonedDateTime.minusHours=function (hours$1313){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusHours(hours$1313));
            };
            $$gregorianZonedDateTime.minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",185)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusHours']};};
            $$gregorianZonedDateTime.minusMilliseconds=function (milliseconds$1314){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMilliseconds(milliseconds$1314));
            };
            $$gregorianZonedDateTime.minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",192)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMilliseconds']};};
            $$gregorianZonedDateTime.minusMinutes=function (minutes$1315){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMinutes(minutes$1315));
            };
            $$gregorianZonedDateTime.minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMinutes']};};
            $$gregorianZonedDateTime.minusMonths=function (months$1316){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMonths(months$1316));
            };
            $$gregorianZonedDateTime.minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",447)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMonths']};};
            $$gregorianZonedDateTime.minusSeconds=function (seconds$1317){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusSeconds(seconds$1317));
            };
            $$gregorianZonedDateTime.minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusSeconds']};};
            $$gregorianZonedDateTime.minusWeeks=function (weeks$1318){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusWeeks(weeks$1318));
            };
            $$gregorianZonedDateTime.minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",185)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusWeeks']};};
            $$gregorianZonedDateTime.minusYears=function (years$1319){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusYears(years$1319));
            };
            $$gregorianZonedDateTime.minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",445)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusYears']};};
            $$gregorianZonedDateTime.plusDays=function (days$1320){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusDays(days$1320));
            };
            $$gregorianZonedDateTime.plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",179)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusDays']};};
            $$gregorianZonedDateTime.plusHours=function (hours$1321){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusHours(hours$1321));
            };
            $$gregorianZonedDateTime.plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",180)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusHours']};};
            $$gregorianZonedDateTime.plusMilliseconds=function (milliseconds$1322){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMilliseconds(milliseconds$1322));
            };
            $$gregorianZonedDateTime.plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMilliseconds']};};
            $$gregorianZonedDateTime.plusMinutes=function (minutes$1323){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMinutes(minutes$1323));
            };
            $$gregorianZonedDateTime.plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",182)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMinutes']};};
            $$gregorianZonedDateTime.plusMonths=function (months$1324){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMonths(months$1324));
            };
            $$gregorianZonedDateTime.plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this _zoned date and time_ and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",337)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMonths']};};
            $$gregorianZonedDateTime.plusSeconds=function (seconds$1325){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusSeconds(seconds$1325));
            };
            $$gregorianZonedDateTime.plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",182)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusSeconds']};};
            $$gregorianZonedDateTime.plusWeeks=function (weeks$1326){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusWeeks(weeks$1326));
            };
            $$gregorianZonedDateTime.plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",180)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusWeeks']};};
            $$gregorianZonedDateTime.plusYears=function (years$1327){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusYears(years$1327));
            };
            $$gregorianZonedDateTime.plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",437)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusYears']};};
            $$gregorianZonedDateTime.withDay=function (dayOfMonth$1328){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withDay(dayOfMonth$1328));
            };
            $$gregorianZonedDateTime.withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'dayOfMonth',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _day of month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",232)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDay']};};
            $$gregorianZonedDateTime.withHours=function (hours$1329){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withHours(hours$1329));
            };
            $$gregorianZonedDateTime.withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _hour_ value set to the specified value.\n\n**Note 01:** It should be a valid _hour_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",209)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withHours']};};
            $$gregorianZonedDateTime.withMilliseconds=function (milliseconds$1330){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMilliseconds(milliseconds$1330));
            };
            $$gregorianZonedDateTime.withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note 01:** It should be a valid _millisecond_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",224)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMilliseconds']};};
            $$gregorianZonedDateTime.withMinutes=function (minutes$1331){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMinutes(minutes$1331));
            };
            $$gregorianZonedDateTime.withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _minute_ value set to the specified value.\n\n**Note 01:** It should be a valid _minute_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMinutes']};};
            $$gregorianZonedDateTime.withMonth=function (month$1332){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMonth(month$1332));
            };
            $$gregorianZonedDateTime.withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",225)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMonth']};};
            $$gregorianZonedDateTime.withSeconds=function (seconds$1333){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withSeconds(seconds$1333));
            };
            $$gregorianZonedDateTime.withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _second_ value set to the specified value.\n\n**Note 01:** It should be a valid _second_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withSeconds']};};
            $$gregorianZonedDateTime.withYear=function (year$1334){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withYear(year$1334));
            };
            $$gregorianZonedDateTime.withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _year_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",224)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withYear']};};
            $$$cl1.defineAttr($$gregorianZonedDateTime,'predecessor',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).predecessor);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",252)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'successor',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.adjust$1312($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).successor);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",246)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};});
            $$$cl1.defineAttr($$gregorianZonedDateTime,'string',function(){
                var $$gregorianZonedDateTime=this;
                var offset$1335=$$gregorianZonedDateTime.timeZone.offset($$gregorianZonedDateTime.instant);
                $prop$getOffset$1335={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string','$at','offset']};}};
                $prop$getOffset$1335.get=function(){return offset$1335};
                var builder$1336=$$$cl1.StringBuilder();
                $prop$getBuilder$1336={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string','$at','builder']};}};
                $prop$getBuilder$1336.get=function(){return builder$1336};
                builder$1336.append($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).string);
                builder$1336.append((opt$1337=((offset$1335.compare((0))!==$$$cl1.getSmaller())?$$$cl1.String("+",1):null),opt$1337!==null?opt$1337:$$$cl1.String("-",1)));
                var opt$1337;
                builder$1336.append($$$cl1.StringBuilder().appendAll([leftPad$internal(offset$1335.divided(getMilliseconds$base().perHour).magnitude).string,$$$cl1.String(":",1),leftPad$internal(offset$1335.remainder(getMilliseconds$base().perHour)).string]).string);
                return builder$1336.string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC",144)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string']};});$$gregorianZonedDateTime.adjust$1312=function adjust$1312(resolved$1338){
                var $$gregorianZonedDateTime=this;
                var zoneMillisecondsOfEpoch$1339=getUnixTime$chronology().timeFromFixed(resolved$1338.dayOfEra).plus(resolved$1338.millisecondsOfDay);
                var utcMillisecondsOfEpoch$1340=zoneMillisecondsOfEpoch$1339.minus($$gregorianZonedDateTime.timeZone.offset($$gregorianZonedDateTime.instant));
                return GregorianZonedDateTime$internal(Instant(utcMillisecondsOfEpoch$1340),$$gregorianZonedDateTime.timeZone);
            };$$gregorianZonedDateTime.adjust$1312.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:GregorianZonedDateTime$internal},$ps:[{$nm:'resolved',$mt:'prm',$t:{t:DateTime},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Fix [[DateTime]] zone absence.",30))];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust']};};
            $$$cl1.defineAttr($$gregorianZonedDateTime,'integerValue',function(){
                var $$gregorianZonedDateTime=this;
                return $$gregorianZonedDateTime.instant.millisecondsOfEpoch;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of epoch_ as it enumerable value.",55)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','integerValue']};});
        })(GregorianZonedDateTime$internal.$$.prototype);
    }
    return GregorianZonedDateTime$internal;
}
exports.$init$GregorianZonedDateTime$internal=$init$GregorianZonedDateTime$internal;
$init$GregorianZonedDateTime$internal();
function floor$internal$math(x$1341){
    if(((!x$1341.fractionalPart.equals($$$cl1.Float(0.0)))&&x$1341.negative)){
        return x$1341.integer.minus((1));
    }
    var i$1342=x$1341.integer;
    return i$1342;
}
exports.floor$internal$math=floor$internal$math;
floor$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the largest integer less than or equal to _x_.",54)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floor']};};
var floorDiv$internal$math=function (x$1343,y$1344){
    return floor$internal$math(x$1343.$float.divided(y$1344.$float));
};
floorDiv$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns floored division of the two integers.",45)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floorDiv']};};
exports.floorDiv$internal$math=floorDiv$internal$math;
var round$internal$math=function (f$1345){
    return floor$internal$math(f$1345.plus($$$cl1.Float(0.5)));
};
round$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns nearest integer to x",28)),$$$cl1.shared()];},d:['ceylon.time.internal.math','round']};};
exports.round$internal$math=round$internal$math;
function floorMod$internal$math(x$1346,y$1347){
    var fx$1348=x$1346.$float;
    var fy$1349=y$1347.$float;
    return fx$1348.minus(fy$1349.times(floor$internal$math(fx$1348.divided(fy$1349)))).integer;
}
exports.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the floor remainder (modulus) of the two integers.\n\n    value moduli = [for (x in 4..-4) mod(x, 4)] \n    assert( moduli == [0, 3, 2, 1, 0, 3, 2, 1, 0] );\n",162)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floorMod']};};
function adjustedMod$internal$math(x$1350,y$1351){
    var amod$1352=floorMod$internal$math(x$1350,y$1351);
    if(amod$1352.equals((0))){
        return y$1351;
    }
    return amod$1352;
}
exports.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an _adjusted remainder_ of the two integers.\n\n   value moduli = [for (x in 4..-4) amod(x, 4)];\n   assert( moduli == [4, 3, 2, 1, 4, 3, 2, 1, 4] );\n",155)),$$$cl1.shared()];},d:['ceylon.time.internal.math','adjustedMod']};};
exports.$pkg$ans$ceylon$time$internal$math=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
exports.$pkg$ans$ceylon$time$internal=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function TimeOfDay$internal(millisecondsOfDay, $$timeOfDay){
    $init$TimeOfDay$internal();
    if ($$timeOfDay===undefined)$$timeOfDay=new TimeOfDay$internal.$$;
    Time($$timeOfDay);
    $$timeOfDay.millisecondsOfDay$1353_=millisecondsOfDay;
    $$timeOfDay.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};}};
    $$timeOfDay.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$timeOfDay.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};}};
    $$timeOfDay.$prop$getHours.get=function(){return hours};
    $$timeOfDay.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};}};
    $$timeOfDay.$prop$getMinutes.get=function(){return minutes};
    $$timeOfDay.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};}};
    $$timeOfDay.$prop$getSeconds.get=function(){return seconds};
    $$timeOfDay.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};}};
    $$timeOfDay.$prop$getMilliseconds.get=function(){return milliseconds};
    $$timeOfDay.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};}};
    $$timeOfDay.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    $$timeOfDay.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};}};
    $$timeOfDay.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    $$timeOfDay.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.",168)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};}};
    $$timeOfDay.$prop$getPredecessor.get=function(){return predecessor};
    $$timeOfDay.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond.",162)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};}};
    $$timeOfDay.$prop$getSuccessor.get=function(){return successor};
    $$timeOfDay.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of day_ as it enumerable value",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','integerValue']};}};
    $$timeOfDay.$prop$getIntegerValue.get=function(){return integerValue};
    return $$timeOfDay;
}
TimeOfDay$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Time}],$an:function(){return[$$$cl1.doc($$$cl1.String("Basic implementation of [[Time]] interface, representing an abstract \n_time of day_ such as _10am_ or _3.20pm_ with a precision of milliseconds.",144)),$$$cl1.shared()];},d:['ceylon.time.internal','TimeOfDay']};};
exports.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
    if (TimeOfDay$internal.$$===undefined){
        $$$cl1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',$$$cl1.Basic,$init$Time());
        (function($$timeOfDay){
            $$$cl1.defineAttr($$timeOfDay,'millisecondsOfDay',function(){return this.millisecondsOfDay$1353_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};});
            $$$cl1.defineAttr($$timeOfDay,'hours',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.millisecondsOfDay.divided(getMilliseconds$base().perHour);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};});
            $$$cl1.defineAttr($$timeOfDay,'minutes',function(){
                var $$timeOfDay=this;
                return floorMod$internal$math($$timeOfDay.millisecondsOfDay,getMilliseconds$base().perHour).divided(getMilliseconds$base().perMinute);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};});
            $$$cl1.defineAttr($$timeOfDay,'seconds',function(){
                var $$timeOfDay=this;
                return floorMod$internal$math($$timeOfDay.millisecondsOfDay,getMilliseconds$base().perMinute).divided(getMilliseconds$base().perSecond);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};});
            $$$cl1.defineAttr($$timeOfDay,'milliseconds',function(){
                var $$timeOfDay=this;
                return floorMod$internal$math($$timeOfDay.millisecondsOfDay,getMilliseconds$base().perSecond);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};});
            $$$cl1.defineAttr($$timeOfDay,'secondsOfDay',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.millisecondsOfDay.divided(getMilliseconds$base().perSecond);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};});
            $$$cl1.defineAttr($$timeOfDay,'minutesOfDay',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.secondsOfDay.divided(getSeconds$base().perMinute);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};});
            $$timeOfDay.compare=function compare(other$1354){
                var $$timeOfDay=this;
                return $$timeOfDay.millisecondsOfDay.compare(other$1354.millisecondsOfDay);
            };$$timeOfDay.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Compare two instances of _time of day_.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','compare']};};
            $$$cl1.defineAttr($$timeOfDay,'predecessor',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.minusMilliseconds((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.",168)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};});
            $$$cl1.defineAttr($$timeOfDay,'successor',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.plusMilliseconds((1));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond.",162)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};});
            $$$cl1.defineAttr($$timeOfDay,'string',function(){
                var $$timeOfDay=this;
                return $$$cl1.StringBuilder().appendAll([leftPad$internal($$timeOfDay.hours).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.minutes).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.seconds).string,$$$cl1.String(".",1),leftPad$internal($$timeOfDay.milliseconds,$$$cl1.String("000",3)).string]).string;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Times",128)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','string']};});$$timeOfDay.plusHours=function (hours$1355){
                var $$timeOfDay=this;
                return $$timeOfDay.plusMilliseconds(hours$1355.times(getMilliseconds$base().perHour));
            };
            $$timeOfDay.plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of hours to this time of day\nand returns the result as new time of day.",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusHours']};};
            $$timeOfDay.minusHours=function (hours$1356){
                var $$timeOfDay=this;
                return $$timeOfDay.minusMilliseconds(hours$1356.times(getMilliseconds$base().perHour));
            };
            $$timeOfDay.minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of hours from this time of day \nand returns the resul as new time of day.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusHours']};};
            $$timeOfDay.plusMinutes=function (minutes$1357){
                var $$timeOfDay=this;
                return $$timeOfDay.plusMilliseconds(minutes$1357.times(getMilliseconds$base().perMinute));
            };
            $$timeOfDay.plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of minutes to this time of day \nand returns the result as new  time of day.",97)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusMinutes']};};
            $$timeOfDay.minusMinutes=function (minutes$1358){
                var $$timeOfDay=this;
                return $$timeOfDay.minusMilliseconds(minutes$1358.times(getMilliseconds$base().perMinute));
            };
            $$timeOfDay.minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of minutes from this time of day \nand returns the result as new  time of day.",104)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusMinutes']};};
            $$timeOfDay.plusSeconds=function (seconds$1359){
                var $$timeOfDay=this;
                return $$timeOfDay.plusMilliseconds(seconds$1359.times(getMilliseconds$base().perSecond));
            };
            $$timeOfDay.plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of seconds to this time of day\nand returns the result as new time of day.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusSeconds']};};
            $$timeOfDay.minusSeconds=function (seconds$1360){
                var $$timeOfDay=this;
                return $$timeOfDay.minusMilliseconds(seconds$1360.times(getMilliseconds$base().perSecond));
            };
            $$timeOfDay.minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of seconds from this time of day\nand returns the result as new time of day.",102)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusSeconds']};};
            $$timeOfDay.plusMilliseconds=function plusMilliseconds(milliseconds$1361){
                var $$timeOfDay=this;
                if(milliseconds$1361.equals((0))){
                    return $$timeOfDay;
                }
                var newMillisOfDay$1362=floorMod$internal$math($$timeOfDay.millisecondsOfDay.plus(milliseconds$1361),getMilliseconds$base().perDay);
                return (opt$1363=(newMillisOfDay$1362.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1363!==null?opt$1363:TimeOfDay$internal(newMillisOfDay$1362));
                var opt$1363;
            };$$timeOfDay.plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of milliseconds to this time of day\nand returns the result as new time of day.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds']};};
            $$timeOfDay.minusMilliseconds=function (milliseconds$1364){
                var $$timeOfDay=this;
                return $$timeOfDay.plusMilliseconds((-milliseconds$1364));
            };
            $$timeOfDay.minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of milliseconds from this time of day\nand returns the result as new time of day.",107)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusMilliseconds']};};
            $$timeOfDay.plus=function plus(period$1365){
                var $$timeOfDay=this;
                var totalMillis$1366=$$timeOfDay.millisecondsOfDay.plus(period$1365.milliseconds).plus(period$1365.seconds.times(getMilliseconds$base().perSecond)).plus(period$1365.minutes.times(getMilliseconds$base().perMinute)).plus(period$1365.hours.times(getMilliseconds$base().perHour));
                var time$1367=floorMod$internal$math(totalMillis$1366,getMilliseconds$base().perDay);
                return (opt$1368=(time$1367.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1368!==null?opt$1368:TimeOfDay$internal(time$1367));
                var opt$1368;
            };$$timeOfDay.plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:ReadableTimePeriod$base},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified time period to this time of day \nand returns the result as new time of day.",90)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plus']};};
            $$timeOfDay.minus=function minus(period$1369){
                var $$timeOfDay=this;
                var totalMillis$1370=$$timeOfDay.millisecondsOfDay.minus(period$1369.milliseconds).minus(period$1369.seconds.times(getMilliseconds$base().perSecond)).minus(period$1369.minutes.times(getMilliseconds$base().perMinute)).minus(period$1369.hours.times(getMilliseconds$base().perHour));
                var time$1371=floorMod$internal$math(totalMillis$1370,getMilliseconds$base().perDay);
                return (opt$1372=(time$1371.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1372!==null?opt$1372:TimeOfDay$internal(time$1371));
                var opt$1372;
            };$$timeOfDay.minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:ReadableTimePeriod$base},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified time period from this time of day \nand returns the result as new time of day.",97)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minus']};};
            $$timeOfDay.withHours=function withHours(hours$1373){
                var $$timeOfDay=this;
                if($$timeOfDay.hours.equals(hours$1373)){
                    return $$timeOfDay;
                }
                return time(hours$1373,$$timeOfDay.minutes,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
            };$$timeOfDay.withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _hours_ value.\n\n**Note:** It should be a valid _hour_.",96)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withHours']};};
            $$timeOfDay.withMinutes=function withMinutes(minutes$1374){
                var $$timeOfDay=this;
                if($$timeOfDay.minutes.equals(minutes$1374)){
                    return $$timeOfDay;
                }
                return time($$timeOfDay.hours,minutes$1374,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
            };$$timeOfDay.withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _minutes_ value.\n\n**Note:** It should be a valid _minute_.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withMinutes']};};
            $$timeOfDay.withSeconds=function withSeconds(seconds$1375){
                var $$timeOfDay=this;
                if($$timeOfDay.seconds.equals(seconds$1375)){
                    return $$timeOfDay;
                }
                return time($$timeOfDay.hours,$$timeOfDay.minutes,seconds$1375,$$timeOfDay.milliseconds);
            };$$timeOfDay.withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _seconds_ value.\n\n**Note:** It should be a valid _second_.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withSeconds']};};
            $$timeOfDay.withMilliseconds=function withMilliseconds(milliseconds$1376){
                var $$timeOfDay=this;
                if($$timeOfDay.milliseconds.equals(milliseconds$1376)){
                    return $$timeOfDay;
                }
                return time($$timeOfDay.hours,$$timeOfDay.minutes,$$timeOfDay.seconds,milliseconds$1376);
            };$$timeOfDay.withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _milliseconds_ value.\n\n**Note:** It should be a valid _millisecond_.",110)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withMilliseconds']};};
            $$timeOfDay.equals=function equals(other$1377){
                var $$timeOfDay=this;
                var other$1378;
                if($$$cl1.isOfType((other$1378=other$1377),{t:TimeOfDay$internal})){
                    return $$timeOfDay.millisecondsOfDay.equals(other$1378.millisecondsOfDay);
                }
                return false;
            };$$timeOfDay.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Return _true_ if it have same type and milliseconds of day.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','equals']};};
            $$timeOfDay.periodFrom=function periodFrom(start$1379){
                var $$timeOfDay=this;
                var from$1380=(opt$1381=($$timeOfDay.compare(start$1379).equals($$$cl1.getSmaller())?$$timeOfDay:null),opt$1381!==null?opt$1381:start$1379);
                var opt$1381;
                var to$1382=(opt$1383=($$timeOfDay.compare(start$1379).equals($$$cl1.getSmaller())?start$1379:null),opt$1383!==null?opt$1383:$$timeOfDay);
                var opt$1383;
                var total$1384=to$1382.millisecondsOfDay.minus(from$1380.millisecondsOfDay);
                function setTotal$1384(total$1385){return total$1384=total$1385;};
                var hh$1386=total$1384.divided(getMilliseconds$base().perHour);
                total$1384=total$1384.remainder(getMilliseconds$base().perHour);
                var mm$1387=total$1384.divided(getMilliseconds$base().perMinute);
                total$1384=total$1384.remainder(getMilliseconds$base().perMinute);
                var ss$1388=total$1384.divided(getMilliseconds$base().perSecond);
                var positive$1389=start$1379.compare($$timeOfDay).equals($$$cl1.getSmaller());
                return (hours$1390=(opt$1391=(positive$1389?hh$1386:null),opt$1391!==null?opt$1391:(-hh$1386)),minutes$1392=(opt$1393=(positive$1389?mm$1387:null),opt$1393!==null?opt$1393:(-mm$1387)),seconds$1394=(opt$1395=(positive$1389?ss$1388:null),opt$1395!==null?opt$1395:(-ss$1388)),milliseconds$1396=(opt$1397=(positive$1389?total$1384.remainder(getMilliseconds$base().perSecond):null),opt$1397!==null?opt$1397:(-total$1384.remainder(getMilliseconds$base().perSecond))),Period(undefined,undefined,undefined,hours$1390,minutes$1392,seconds$1394,milliseconds$1396));
                var hours$1390,opt$1391,minutes$1392,opt$1393,seconds$1394,opt$1395,milliseconds$1396,opt$1397;
            };$$timeOfDay.periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given time.\n\nIf this time is before the given time then return zero period.",115)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom']};};
            $$timeOfDay.periodTo=function (end$1398){
                var $$timeOfDay=this;
                return end$1398.periodFrom($$timeOfDay);
            };
            $$timeOfDay.periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given time.\n\nIf this time is after the given time then return zero period.",114)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','periodTo']};};
            $$timeOfDay.rangeTo=function rangeTo(other$1399){
                var $$timeOfDay=this;
                return TimeRange($$timeOfDay,other$1399);
            };$$timeOfDay.rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[TimeRange]] between this and given Time.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','rangeTo']};};
            $$$cl1.defineAttr($$timeOfDay,'integerValue',function(){
                var $$timeOfDay=this;
                return $$timeOfDay.millisecondsOfDay;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of day_ as it enumerable value",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','integerValue']};});
        })(TimeOfDay$internal.$$.prototype);
    }
    return TimeOfDay$internal;
}
exports.$init$TimeOfDay$internal=$init$TimeOfDay$internal;
$init$TimeOfDay$internal();
function leftPad$internal(number$1400,padding$1401){
    if(padding$1401===undefined){padding$1401=$$$cl1.String("00",2);}
    if(number$1400.equals((0))){
        return padding$1401;
    }
    var string$1402=number$1400.string;
    var digits$1403=string$1402.size;
    if(digits$1403.compare(padding$1401.size).equals($$$cl1.getSmaller())){
        var padded$1404=padding$1401.plus(string$1402);
        $prop$getPadded$1404={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.time.internal','leftPad','$at','padded']};}};
        $prop$getPadded$1404.get=function(){return padded$1404};
        return padded$1404.segment(padded$1404.size.minus(padding$1401.size),padding$1401.size);
    }
    return string$1402;
}
exports.leftPad$internal=leftPad$internal;
leftPad$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'padding',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Return padded value of the number as a string.",46)),$$$cl1.shared()];},d:['ceylon.time.internal','leftPad']};};
function intersect$internal(start$1405,end$1406,otherStart$1407,otherEnd$1408,$$$mptypes){
    return ((start$1405.compare(otherEnd$1408)!==$$$cl1.getLarger())&&(end$1406.compare(otherStart$1407)!==$$$cl1.getSmaller()));
}
exports.intersect$internal=intersect$internal;
intersect$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'start',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'end',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'otherStart',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'otherEnd',$mt:'prm',$t:'Value',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.doc($$$cl1.String("Returns if two ranges has intersection.",39)),$$$cl1.shared()];},d:['ceylon.time.internal','intersect']};};
function overlap$internal(first$1409,second$1410,$$$mptypes){
    var ordered$1411=$$$cl1.sort($$$cl1.concatenate([first$1409,second$1410].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    if(($$$cl1.Range(first$1409.get(0),first$1409.get(1)||undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1411)&&$$$cl1.Range(second$1410.get(0),second$1410.get(1)||undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1411))){
        //assert at utils.ceylon (39:8-39:44)
        var start$1412;
        if (!((start$1412=ordered$1411.first)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists start = ordered.first\' at utils.ceylon (39:14-39:43)"),'39:8-39:44','utils.ceylon'); }
        //assert at utils.ceylon (40:8-40:41)
        var end$1413;
        if (!((end$1413=ordered$1411.last)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists end = ordered.last\' at utils.ceylon (40:14-40:40)"),'40:8-40:41','utils.ceylon'); }
        return $$$cl1.Tuple(start$1412,$$$cl1.Tuple(end$1413,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
    }
    return $$$cl1.getEmpty();
}
exports.overlap$internal=overlap$internal;
overlap$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},{t:$$$cl1.Empty}]},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}},{t:$$$cl1.Ordinal,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the inclusive overlap between two ordinal ranges.\n\nThe range of the overlap will be returned in the natural order of the values regardless of their original order in input tuples.\n\nExamples:\n\n    assert(overlap([1, 3], [2, 4]) == [2, 3]);\n    assert(overlap([4, 2], [1, 3]) == [2, 3]);\n    assert(is Empty o = overlap([1, 2], [3, 4]));\n",344)),$$$cl1.shared()];},d:['ceylon.time.internal','overlap']};};
function gap$internal(first$1414,second$1415,$$$mptypes){
    var ordered$1416=$$$cl1.sort($$$cl1.concatenate([first$1414,second$1415].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    if(($$$cl1.Range(first$1414.get(0),first$1414.get(1)||undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1416)&&$$$cl1.Range(second$1415.get(0),second$1415.get(1)||undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1416))){
        return $$$cl1.getEmpty();
    }
    //assert at utils.ceylon (67:4-67:40)
    var start$1417;
    if (!((start$1417=ordered$1416.first)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists start = ordered.first\' at utils.ceylon (67:10-67:39)"),'67:4-67:40','utils.ceylon'); }
    //assert at utils.ceylon (68:4-68:37)
    var end$1418;
    if (!((end$1418=ordered$1416.last)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists end = ordered.last\' at utils.ceylon (68:10-68:36)"),'68:4-68:37','utils.ceylon'); }
    return $$$cl1.Tuple(start$1417,$$$cl1.Tuple(end$1418,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
}
exports.gap$internal=gap$internal;
gap$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},{t:$$$cl1.Empty}]},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}},{t:$$$cl1.Ordinal,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a tuple representing an exclusive gap between two disjoint ranges of ordinal values.\n\nValues in the tuple are returned always in their natural order regardless of their original ordering in the input tuples. \nIf input ranges are overlapping, this function will return an empty value.\n\nExamples:\n\n    assert(gap([1, 2], [5, 6]) == [3, 4]);\n    assert(gap([6, 5], [1, 2]) == [3, 4]);\n    assert(is Empty g = gap([1, 3], [2, 4]));\n",436)),$$$cl1.shared()];},d:['ceylon.time.internal','gap']};};
exports.$mod$ans$=function(){return[$$$cl1.doc($$$cl1.String("Date and Time library for Ceylon language SDK.\n\nThis library is loosely modeled/inspired by the JodaTime/JSR-310 date/time library.\n",132)),$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}}))];};
exports.$pkg$ans$ceylon$time=function(){return[$$$cl1.doc($$$cl1.String("Main package for the Ceylon\'s Date and Time library.\n\nLike in [JodaTime] and [JSR-310], there is a _machine timeline_ and a _human timeline_.\n\n[JodaTime]: http://joda-time.sourceforge.net\n[JSR-310]: http://sourceforge.net/apps/mediawiki/threeten/index.php?title=ThreeTen\n\n## Machine timeline\n\nMachine timeline is represented by an [[Instant]] that is basically just an object \nwrapper around an [[Integer]] representing _[Unix time]_ value. A value of an Instant \nuniquely identifies a particular instant of time without needing to take into account\ntimezone information and contain no ambiguities associated with [DST] changeover times.\n\n[Unix time]: http://en.wikipedia.org/wiki/Unix_time\n[DST]: http://en.wikipedia.org/wiki/Daylight_saving_time\n\n## Human timeline\n\nHuman timeline is based mostly on Gregorian and ISO-8601 calendar systems and consists of \nthe following principal data types:\n\n* [[Date]] -- A date value without time component\n* [[Time]] -- A time of day vallue without date component.\n* [[DateTime]] -- A particular time of a particular date.\n* [[ZoneDateTime]] -- A particular moment of time identified by date, time of day and \n  a time zone.\n\n**Note:** At the moment, timezone is not fully supported, therefore current\nconversions can uses offsets provided by VMs  and provides some features like [[timeZone]]\nobject that allows parser and creation of fixed offsets.\n",1390)),$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function Period(years, months, days, hours, minutes, seconds, milliseconds, $$period){
    $init$Period();
    if ($$period===undefined)$$period=new Period.$$;
    $$period.$$targs$$={Self:{t:Period}};
    $$period.$$targs$$={Other:{t:Period}};
    $$period.$$targs$$={Other:{t:Period}};
    $$period.$$targs$$={Value:{t:Period},Scale:{t:$$$cl1.Integer}};
    if(years===undefined){years=(0);}
    if(months===undefined){months=(0);}
    if(days===undefined){days=(0);}
    if(hours===undefined){hours=(0);}
    if(minutes===undefined){minutes=(0);}
    if(seconds===undefined){seconds=(0);}
    if(milliseconds===undefined){milliseconds=(0);}
    ReadablePeriod$base($$period);
    ReadableTimePeriod$base($$period);
    ReadableDatePeriod$base($$period);
    PeriodBehavior$base({Self:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Self',{t:Period});
    $$$cl1.Comparable({Other:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    $$$cl1.Summable({Other:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    $$$cl1.Scalable({Value:{t:Period},Scale:{t:$$$cl1.Integer}},$$period);
    $$$cl1.add_type_arg($$period,'Value',{t:Period});
    $$$cl1.add_type_arg($$period,'Scale',{t:$$$cl1.Integer});
    $$period.years$1419_=years;
    $$period.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','years']};}};
    $$period.$prop$getYears.get=function(){return years};
    $$period.months$1420_=months;
    $$period.$prop$getMonths={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','months']};}};
    $$period.$prop$getMonths.get=function(){return months};
    $$period.days$1421_=days;
    $$period.$prop$getDays={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','days']};}};
    $$period.$prop$getDays.get=function(){return days};
    $$period.hours$1422_=hours;
    $$period.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','hours']};}};
    $$period.$prop$getHours.get=function(){return hours};
    $$period.minutes$1423_=minutes;
    $$period.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','minutes']};}};
    $$period.$prop$getMinutes.get=function(){return minutes};
    $$period.seconds$1424_=seconds;
    $$period.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','seconds']};}};
    $$period.$prop$getSeconds.get=function(){return seconds};
    $$period.milliseconds$1425_=milliseconds;
    $$period.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds.",27)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','milliseconds']};}};
    $$period.$prop$getMilliseconds.get=function(){return milliseconds};
    return $$period;
}
Period.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:ReadablePeriod$base},{t:ReadableTimePeriod$base},{t:ReadableDatePeriod$base},{t:PeriodBehavior$base,a:{Self:{t:Period}}},{t:$$$cl1.Comparable,a:{Other:{t:Period}}},{t:$$$cl1.Summable,a:{Other:{t:Period}}},{t:$$$cl1.Scalable,a:{Value:{t:Period},Scale:{t:$$$cl1.Integer}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An immutable period consisting of the ISO-8601 _years_, _months_, _days_, _hours_,\n_minutes_, _seconds_ and _milliseconds_, such as \'3 Months, 4 Days and 7 Hours\'.\n\nA period is a human-scale description of an amount of time.\n",225)),$$$cl1.shared()];},d:['ceylon.time','Period']};};
exports.Period=Period;
function $init$Period(){
    if (Period.$$===undefined){
        $$$cl1.initTypeProto(Period,'ceylon.time::Period',$$$cl1.Basic,$init$ReadablePeriod$base(),$init$ReadableTimePeriod$base(),$init$ReadableDatePeriod$base(),$init$PeriodBehavior$base(),$$$cl1.Comparable,$$$cl1.Summable,$$$cl1.Scalable);
        (function($$period){
            $$$cl1.defineAttr($$period,'years',function(){return this.years$1419_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','years']};});
            $$$cl1.defineAttr($$period,'months',function(){return this.months$1420_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','months']};});
            $$$cl1.defineAttr($$period,'days',function(){return this.days$1421_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','days']};});
            $$$cl1.defineAttr($$period,'hours',function(){return this.hours$1422_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','hours']};});
            $$$cl1.defineAttr($$period,'minutes',function(){return this.minutes$1423_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','minutes']};});
            $$$cl1.defineAttr($$period,'seconds',function(){return this.seconds$1424_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','seconds']};});
            $$$cl1.defineAttr($$period,'milliseconds',function(){return this.milliseconds$1425_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds.",27)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','milliseconds']};});
            $$period.equals=function equals(that$1426){
                var $$period=this;
                var that$1427;
                if($$$cl1.isOfType((that$1427=that$1426),{t:Period})){
                    if(($$period===that$1427)){
                        return true;
                    }
                    return (((((($$period.years.equals(that$1427.years)&&$$period.months.equals(that$1427.months))&&$$period.days.equals(that$1427.days))&&$$period.hours.equals(that$1427.hours))&&$$period.minutes.equals(that$1427.minutes))&&$$period.seconds.equals(that$1427.seconds))&&$$period.milliseconds.equals(that$1427.milliseconds));
                }
                return false;
            };$$period.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Checks if this period is equal to another period.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','equals']};};
            $$period.compare=function compare(other$1428){
                var $$period=this;
                var norm1$1429=$$period.normalized();
                var norm2$1430=other$1428.normalized();
                return (opt$1431=((!norm1$1429.years.equals(norm2$1430.years))?norm1$1429.years.compare(norm2$1430.years):null),opt$1431!==null?opt$1431:(opt$1432=((!norm1$1429.months.equals(norm2$1430.months))?norm1$1429.months.compare(norm2$1430.months):null),opt$1432!==null?opt$1432:(opt$1433=((!norm1$1429.days.equals(norm2$1430.days))?norm1$1429.days.compare(norm2$1430.days):null),opt$1433!==null?opt$1433:(opt$1434=((!norm1$1429.hours.equals(norm2$1430.hours))?norm1$1429.hours.compare(norm2$1430.hours):null),opt$1434!==null?opt$1434:(opt$1435=((!norm1$1429.minutes.equals(norm2$1430.minutes))?norm1$1429.minutes.compare(norm2$1430.minutes):null),opt$1435!==null?opt$1435:(opt$1436=((!norm1$1429.seconds.equals(norm2$1430.seconds))?norm1$1429.seconds.compare(norm2$1430.seconds):null),opt$1436!==null?opt$1436:norm1$1429.milliseconds.compare(norm2$1430.milliseconds)))))));
                var opt$1431,opt$1432,opt$1433,opt$1434,opt$1435,opt$1436;
            };$$period.compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the result of comparing this period to the _other_ period.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','compare']};};
            $$period.isZero=function isZero(){
                var $$period=this;
                return $$period.equals(getZero());
            };$$period.isZero.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Checks if this period is zero-length.",37)),$$$cl1.shared()];},d:['ceylon.time','Period','$m','isZero']};};
            $$period.withYears=function withYears(years$1437){
                var $$period=this;
                if(years$1437.equals($$period.years)){
                    return $$period;
                }
                return Period(years$1437,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
            };$$period.withYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of years.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withYears']};};
            $$period.withMonths=function withMonths(months$1438){
                var $$period=this;
                if(months$1438.equals($$period.months)){
                    return $$period;
                }
                return Period($$period.years,months$1438,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
            };$$period.withMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of months.",66)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMonths']};};
            $$period.withDays=function withDays(days$1439){
                var $$period=this;
                if(days$1439.equals($$period.days)){
                    return $$period;
                }
                return Period($$period.years,$$period.months,days$1439,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
            };$$period.withDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of days.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withDays']};};
            $$period.withHours=function withHours(hours$1440){
                var $$period=this;
                if(hours$1440.equals($$period.hours)){
                    return $$period;
                }
                return Period($$period.years,$$period.months,$$period.days,hours$1440,$$period.minutes,$$period.seconds,$$period.milliseconds);
            };$$period.withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of hours.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withHours']};};
            $$period.withMinutes=function withMinutes(minutes$1441){
                var $$period=this;
                if(minutes$1441.equals($$period.minutes)){
                    return $$period;
                }
                return Period($$period.years,$$period.months,$$period.days,$$period.hours,minutes$1441,$$period.seconds,$$period.milliseconds);
            };$$period.withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of minutes.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMinutes']};};
            $$period.withSeconds=function withSeconds(seconds$1442){
                var $$period=this;
                if(seconds$1442.equals($$period.seconds)){
                    return $$period;
                }
                return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,seconds$1442,$$period.milliseconds);
            };$$period.withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of seconds.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withSeconds']};};
            $$period.withMilliseconds=function withMilliseconds(milliseconds$1443){
                var $$period=this;
                if(milliseconds$1443.equals($$period.milliseconds)){
                    return $$period;
                }
                return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,milliseconds$1443);
            };$$period.withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of milliseconds.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMilliseconds']};};
            $$period.plusYears=function plusYears(years$1444){
                var $$period=this;
                return $$period.withYears($$period.years.plus(years$1444));
            };$$period.plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of years added.",71)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusYears']};};
            $$period.plusMonths=function plusMonths(months$1445){
                var $$period=this;
                return $$period.withMonths($$period.months.plus(months$1445));
            };$$period.plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of months added.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMonths']};};
            $$period.plusDays=function plusDays(days$1446){
                var $$period=this;
                return $$period.withDays($$period.days.plus(days$1446));
            };$$period.plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of days added.",70)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusDays']};};
            $$period.plusHours=function plusHours(hours$1447){
                var $$period=this;
                return $$period.withHours($$period.hours.plus(hours$1447));
            };$$period.plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of hours added.",71)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusHours']};};
            $$period.plusMinutes=function plusMinutes(minutes$1448){
                var $$period=this;
                return $$period.withMinutes($$period.minutes.plus(minutes$1448));
            };$$period.plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of minutes added.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMinutes']};};
            $$period.plusSeconds=function plusSeconds(seconds$1449){
                var $$period=this;
                return $$period.withSeconds($$period.seconds.plus(seconds$1449));
            };$$period.plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of seconds added.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusSeconds']};};
            $$period.plusMilliseconds=function plusMilliseconds(milliseconds$1450){
                var $$period=this;
                return $$period.withMilliseconds($$period.milliseconds.plus(milliseconds$1450));
            };$$period.plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of milliseconds added.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMilliseconds']};};
            $$period.minusYears=function minusYears(years$1451){
                var $$period=this;
                return $$period.plusYears((-years$1451));
            };$$period.minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of years subtracted.",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusYears']};};
            $$period.minusMonths=function minusMonths(months$1452){
                var $$period=this;
                return $$period.plusMonths((-months$1452));
            };$$period.minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of months subtracted.",77)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMonths']};};
            $$period.minusDays=function minusDays(days$1453){
                var $$period=this;
                return $$period.plusDays((-days$1453));
            };$$period.minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of days subtracted.",75)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusDays']};};
            $$period.minusHours=function minusHours(hours$1454){
                var $$period=this;
                return $$period.plusHours((-hours$1454));
            };$$period.minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of hours subtracted.",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusHours']};};
            $$period.minusMinutes=function minusMinutes(minutes$1455){
                var $$period=this;
                return $$period.plusMinutes((-minutes$1455));
            };$$period.minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of minutes subtracted.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMinutes']};};
            $$period.minusSeconds=function minusSeconds(seconds$1456){
                var $$period=this;
                return $$period.plusSeconds((-seconds$1456));
            };$$period.minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of seconds subtracted.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusSeconds']};};
            $$period.minusMilliseconds=function minusMilliseconds(milliseconds$1457){
                var $$period=this;
                return $$period.plusMilliseconds((-milliseconds$1457));
            };$$period.minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of milliseconds subtracted.",83)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMilliseconds']};};
            $$period.plus=function plus(other$1458){
                var $$period=this;
                return (years$1459=$$period.years.plus(other$1458.years),months$1460=$$period.months.plus(other$1458.months),days$1461=$$period.days.plus(other$1458.days),hours$1462=$$period.hours.plus(other$1458.hours),minutes$1463=$$period.minutes.plus(other$1458.minutes),seconds$1464=$$period.seconds.plus(other$1458.seconds),milliseconds$1465=$$period.milliseconds.plus(other$1458.milliseconds),Period(years$1459,months$1460,days$1461,hours$1462,minutes$1463,seconds$1464,milliseconds$1465));
                var years$1459,months$1460,days$1461,hours$1462,minutes$1463,seconds$1464,milliseconds$1465;
            };$$period.plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a new period that is a sum of the two periods.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plus']};};
            $$$cl1.defineAttr($$period,'dateOnly',function(){
                var $$period=this;
                return $$period;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ReadableDatePeriod$base},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date only view of this period.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','dateOnly']};});$$$cl1.defineAttr($$period,'timeOnly',function(){
                var $$period=this;
                return $$period;
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:ReadableTimePeriod$base},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a time only view of this period.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','timeOnly']};});$$period.normalized=function normalized(){
                var $$period=this;
                if($$period.equals(getZero())){
                    return getZero();
                }
                var years$1466=$$period.years.plus($$period.months.divided((12)));
                var months$1467=$$period.months.remainder((12));
                var total$1468=$$period.hours.times(getSeconds$base().perHour).plus($$period.minutes.times(getSeconds$base().perMinute)).plus($$period.seconds);
                function setTotal$1468(total$1469){return total$1468=total$1469;};
                var millis$1470=$$period.milliseconds.remainder(getMilliseconds$base().perSecond);
                (total$1468=total$1468.plus($$period.milliseconds.divided(getMilliseconds$base().perSecond)));
                var seconds$1471=total$1468.remainder(getSeconds$base().perMinute);
                total$1468=total$1468.divided(getSeconds$base().perMinute);
                var minutes$1472=total$1468.remainder(getMinutes$base().perHour);
                var hours$1473=total$1468.divided(getMinutes$base().perHour);
                return (years$1474=years$1466,months$1475=months$1467,days$1476=$$period.days,hours$1477=hours$1473,minutes$1478=minutes$1472,seconds$1479=seconds$1471,milliseconds$1480=millis$1470,Period(years$1474,months$1475,days$1476,hours$1477,minutes$1478,seconds$1479,milliseconds$1480));
                var years$1474,months$1475,days$1476,hours$1477,minutes$1478,seconds$1479,milliseconds$1480;
            };$$period.normalized.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with all amounts normalized to the \nstandard ranges for date/time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and milliseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year.",423)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','normalized']};};
            $$$cl1.defineAttr($$period,'string',function(){
                var $$period=this;
                if($$period.equals(getZero())){
                    return $$$cl1.String("PT0S",4);
                }else {
                    var buf$1481=$$$cl1.StringBuilder();
                    $prop$getBuf$1481={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.time','Period','$at','string','$at','buf']};}};
                    $prop$getBuf$1481.get=function(){return buf$1481};
                    buf$1481.append($$$cl1.String("P",1));
                    if((!$$period.years.equals((0)))){
                        buf$1481.append($$period.years.string).append($$$cl1.String("Y",1));
                    }
                    if((!$$period.months.equals((0)))){
                        buf$1481.append($$period.months.string).append($$$cl1.String("M",1));
                    }
                    if((!$$period.days.equals((0)))){
                        buf$1481.append($$period.days.string).append($$$cl1.String("D",1));
                    }
                    if(((((!$$period.hours.equals((0)))||(!$$period.minutes.equals((0))))||(!$$period.seconds.equals((0))))||(!$$period.milliseconds.equals((0))))){
                        buf$1481.append($$$cl1.String("T",1));
                        if((!$$period.hours.equals((0)))){
                            buf$1481.append($$period.hours.string).append($$$cl1.String("H",1));
                        }
                        if((!$$period.minutes.equals((0)))){
                            buf$1481.append($$period.minutes.string).append($$$cl1.String("M",1));
                        }
                        if(((!$$period.seconds.equals((0)))||(!$$period.milliseconds.equals((0))))){
                            buf$1481.append($$period.seconds.string);
                            if((!$$period.milliseconds.equals((0)))){
                                buf$1481.append($$$cl1.StringBuilder().appendAll([$$$cl1.String(".",1),leftPad$internal($$period.milliseconds,$$$cl1.String("000",3)).string]).string);
                            }
                            buf$1481.append($$$cl1.String("S",1));
                        }
                    }
                    return buf$1481.string;
                }
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the ISO-8601 formatted string for this period.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','string']};});$$period.scale=function (scale$1482){
                var $$period=this;
                return (years$1483=scale$1482.times($$period.years),months$1484=scale$1482.times($$period.months),days$1485=scale$1482.times($$period.days),hours$1486=scale$1482.times($$period.hours),minutes$1487=scale$1482.times($$period.minutes),seconds$1488=scale$1482.times($$period.seconds),milliseconds$1489=scale$1482.times($$period.milliseconds),Period(years$1483,months$1484,days$1485,hours$1486,minutes$1487,seconds$1488,milliseconds$1489));
            };
            $$period.scale.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'scale',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Each field will be scalable independently, and the result will _not_ be normalized",82)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','scale']};};
        })(Period.$$.prototype);
    }
    return Period;
}
exports.$init$Period=$init$Period;
$init$Period();
var years$1483,months$1484,days$1485,hours$1486,minutes$1487,seconds$1488,milliseconds$1489;
var zero$1490;function $valinit$zero$1490(){if (zero$1490===undefined)zero$1490=Period();return zero$1490;};$valinit$zero$1490();
function getZero(){return $valinit$zero$1490();}
exports.getZero=getZero;
var $prop$getZero={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$an:function(){return[$$$cl1.doc($$$cl1.String("A period of zero length.",24)),$$$cl1.shared()];},d:['ceylon.time','zero']};}};
exports.$prop$getZero=$prop$getZero;
$prop$getZero.get=getZero;
getZero.$$metamodel$$=$prop$getZero.$$metamodel$$;
function Time($$time){
    ReadableTime$base($$time);
    TimeBehavior$base({Element:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Element',{t:Time});
    $$$cl1.Comparable({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
    $$$cl1.Ordinal({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
    $$$cl1.Enumerable({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
}
Time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableTime$base},{t:TimeBehavior$base,a:{Element:{t:Time}}},{t:$$$cl1.Comparable,a:{Other:{t:Time}}},{t:$$$cl1.Ordinal,a:{Other:{t:Time}}},{t:$$$cl1.Enumerable,a:{Other:{t:Time}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Time of day like _6pm_ or _8.30am_.\n\nThis type contains only information about an abstract _time of day_ without \nreferencing any date or timezone.\n\nYou use Time to specify something that has to occur on a specific time of day\nlike _\"lunch hour starts at 1pm\"_ or _\"shop opens at 10am\"_.\n",288)),$$$cl1.shared()];},d:['ceylon.time','Time']};};
exports.Time=Time;
function $init$Time(){
    if (Time.$$===undefined){
        $$$cl1.initTypeProto(Time,'ceylon.time::Time',$init$ReadableTime$base(),$init$TimeBehavior$base(),$$$cl1.Comparable,$$$cl1.Ordinal,$$$cl1.Enumerable);
        (function($$time){
        })(Time.$$.prototype);
    }
    return Time;
}
exports.$init$Time=$init$Time;
$init$Time();
function time(hours$1491,minutes$1492,seconds$1493,milliseconds$1494){
    if(seconds$1493===undefined){seconds$1493=(0);}
    if(milliseconds$1494===undefined){milliseconds$1494=(0);}
    var hours$1491=hours$1491;
    var minutes$1492=minutes$1492;
    var seconds$1493=seconds$1493;
    var milliseconds$1494=milliseconds$1494;
    //assert at Time.ceylon (59:4-60:35)
    if (!((tmpvar$1495=hours$1491,tmpvar$1495.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1495.compare(getHours$base().perDay)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Hours value should be between 0 and 23.: \' 0 <= hours < h.perDay \' at Time.ceylon (60:10-60:34)"),'59:4-60:35','Time.ceylon'); }
    //assert at Time.ceylon (62:4-63:40)
    if (!((tmpvar$1496=minutes$1492,tmpvar$1496.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1496.compare(getMinutes$base().perHour)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Minutes value should be between 0 and 59.: \' 0 <= minutes < min.perHour \' at Time.ceylon (63:10-63:39)"),'62:4-63:40','Time.ceylon'); }
    //assert at Time.ceylon (65:4-66:42)
    if (!((tmpvar$1497=seconds$1493,tmpvar$1497.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1497.compare(getSeconds$base().perMinute)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Seconds value should be between 0 and 59.: \' 0 <= seconds < sec.perMinute \' at Time.ceylon (66:10-66:41)"),'65:4-66:42','Time.ceylon'); }
    //assert at Time.ceylon (68:4-69:46)
    if (!((tmpvar$1498=milliseconds$1494,tmpvar$1498.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1498.compare(getMilliseconds$base().perSecond)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Milliseconds value should be between 0 and 999.: \' 0 <= milliseconds < ms.perSecond \' at Time.ceylon (69:10-69:45)"),'68:4-69:46','Time.ceylon'); }
    var hh$1499=hours$1491.times(getMilliseconds$base().perHour);
    $prop$getHh$1499={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','hh']};}};
    $prop$getHh$1499.get=function(){return hh$1499};
    var mm$1500=minutes$1492.times(getMilliseconds$base().perMinute);
    $prop$getMm$1500={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','mm']};}};
    $prop$getMm$1500.get=function(){return mm$1500};
    var ss$1501=seconds$1493.times(getMilliseconds$base().perSecond);
    $prop$getSs$1501={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','ss']};}};
    $prop$getSs$1501.get=function(){return ss$1501};
    return TimeOfDay$internal(hh$1499.plus(mm$1500).plus(ss$1501).plus(milliseconds$1494));
}
exports.time=time;
time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Hours of the day (0..23).")];}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Minutes of the hour (0..59).")];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Seconds of the minute (0..59).")];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Milliseconds of the second (0..999).")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Creates new instance of [[Time]].",33)),$$$cl1.shared()];},d:['ceylon.time','time']};};
function TimeRange(from, to, step, $$timeRange){
    $init$TimeRange();
    if ($$timeRange===undefined)$$timeRange=new TimeRange.$$;
    $$timeRange.$$targs$$={StepBy:{t:UnitOfTime$base},Element:{t:Time}};
    if(step===undefined){step=getMilliseconds$base();}
    Range$base({StepBy:{t:UnitOfTime$base},Element:{t:Time}},$$timeRange);
    $$$cl1.add_type_arg($$timeRange,'StepBy',{t:UnitOfTime$base});
    $$$cl1.add_type_arg($$timeRange,'Element',{t:Time});
    $$timeRange.from$1502_=from;
    $$timeRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','from']};}};
    $$timeRange.$prop$getFrom.get=function(){return from};
    $$timeRange.to$1503_=to;
    $$timeRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','to']};}};
    $$timeRange.$prop$getTo.get=function(){return to};
    $$timeRange.step$1504_=step;
    $$timeRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:UnitOfTime$base},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','step']};}};
    $$timeRange.$prop$getStep.get=function(){return step};
    $$timeRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','period']};}};
    $$timeRange.$prop$getPeriod.get=function(){return period};
    $$timeRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','duration']};}};
    $$timeRange.$prop$getDuration.get=function(){return duration};
    return $$timeRange;
}
TimeRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Range$base,a:{StepBy:{t:UnitOfTime$base},Element:{t:Time}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[Time]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[TimeRange]] types\n* Recover the gap between [[TimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfTime]] cases\n",394)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6.1').findPackage('ceylon.time.base'),Range$base)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time','TimeRange']};};
exports.TimeRange=TimeRange;
function $init$TimeRange(){
    if (TimeRange.$$===undefined){
        $$$cl1.initTypeProto(TimeRange,'ceylon.time::TimeRange',$$$cl1.Basic,$init$Range$base());
        (function($$timeRange){
            $$$cl1.defineAttr($$timeRange,'from',function(){return this.from$1502_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','from']};});
            $$$cl1.defineAttr($$timeRange,'to',function(){return this.to$1503_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','to']};});
            $$$cl1.defineAttr($$timeRange,'step',function(){return this.step$1504_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:UnitOfTime$base},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','step']};});
            $$$cl1.defineAttr($$timeRange,'period',function(){
                var $$timeRange=this;
                return $$timeRange.from.periodTo($$timeRange.to);
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','period']};});
            $$$cl1.defineAttr($$timeRange,'duration',function(){
                var $$timeRange=this;
                return Duration($$timeRange.to.millisecondsOfDay.minus($$timeRange.from.millisecondsOfDay));
            },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','duration']};});
            $$timeRange.equals=function equals(other$1505){
                var $$timeRange=this;
                return $$timeRange.getT$all()['ceylon.time.base::Range'].$$.prototype.equals.call(this,other$1505);
            };$$timeRange.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','equals']};};
            $$timeRange.overlap=function overlap(other$1506){
                var $$timeRange=this;
                var response$1507=overlap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1506.from,$$$cl1.Tuple(other$1506.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
                var response$1508;
                if($$$cl1.isOfType((response$1508=response$1507),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})){
                    return TimeRange(response$1508.get((0)),response$1508.get((1)));
                }
                //assert at TimeRange.ceylon (82:8-82:34)
                var response$1509;
                if (!($$$cl1.isOfType((response$1509=response$1507),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at TimeRange.ceylon (82:14-82:33)"),'82:8-82:34','TimeRange.ceylon'); }
                return response$1509;
            };$$timeRange.overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{t:UnitOfTime$base},Element:{t:Time}}},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','overlap']};};
            $$timeRange.gap=function gap(other$1510){
                var $$timeRange=this;
                var response$1511=gap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1510.from,$$$cl1.Tuple(other$1510.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
                
                var case$1512=response$1511;
                if ($$$cl1.isOfType(response$1511,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})) {
                    return (opt$1513=(case$1512.get((0)).successor.compare(case$1512.get((1))).equals($$$cl1.getSmaller())?TimeRange(case$1512.get((0)).successor,case$1512.get((1)).predecessor):null),opt$1513!==null?opt$1513:$$$cl1.getEmpty());
                    var opt$1513;
                }else if ($$$cl1.isOfType(response$1511,{t:$$$cl1.Empty})) {
                    return case$1512;
                }
            };$$timeRange.gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:Range$base,a:{StepBy:{t:UnitOfTime$base},Element:{t:Time}}},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','gap']};};
            $$timeRange.iterator=function iterator(){
                var $$timeRange=this;
                function listIterator$1514($$targs$$){
                    var $$listIterator$1514=new listIterator$1514.$$;
                    $$listIterator$1514.$$targs$$=$$targs$$;
                    $$$cl1.Iterator({Element:{t:Time}},$$listIterator$1514);
                    $$$cl1.add_type_arg($$listIterator$1514,'Element',{t:Time});
                    $$listIterator$1514.count$1515_=(0);
                    $$listIterator$1514.$prop$getCount$1515={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1514,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$at','count']};}};
                    $$listIterator$1514.$prop$getCount$1515.get=function(){return count$1515};
                    return $$listIterator$1514;
                }
                function $init$listIterator$1514(){
                    if (listIterator$1514.$$===undefined){
                        $$$cl1.initTypeProto(listIterator$1514,'ceylon.time::TimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
                    }
                    return listIterator$1514;
                }
                $init$listIterator$1514();
                (function($$listIterator$1514){
                    $$$cl1.defineAttr($$listIterator$1514,'count$1515',function(){return this.count$1515_;},function(count$1516){return this.count$1515_=count$1516;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1514,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$at','count']};});
                    $$listIterator$1514.next=function next(){
                        var $$listIterator$1514=this;
                        var date$1517=(opt$1518=($$timeRange.from.compare($$timeRange.to).equals($$$cl1.getLarger())?$$timeRange.previousByStep$1519((oldcount$1520=$$listIterator$1514.count$1515,$$listIterator$1514.count$1515=oldcount$1520.successor,oldcount$1520)):null),opt$1518!==null?opt$1518:$$timeRange.nextByStep$1521((oldcount$1522=$$listIterator$1514.count$1515,$$listIterator$1514.count$1515=oldcount$1522.successor,oldcount$1522)));
                        var opt$1518,oldcount$1520,oldcount$1522;
                        var continueLoop$1523=(opt$1524=(($$timeRange.from.compare($$timeRange.to)!==$$$cl1.getLarger())?(date$1517.compare($$timeRange.to)!==$$$cl1.getLarger()):null),opt$1524!==null?opt$1524:((date$1517.compare($$timeRange.to)!==$$$cl1.getSmaller())&&(date$1517.compare($$timeRange.from)!==$$$cl1.getLarger())));
                        var opt$1524;
                        return (opt$1525=(continueLoop$1523?date$1517:null),opt$1525!==null?opt$1525:$$$cl1.getFinished());
                        var opt$1525;
                    };$$listIterator$1514.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Time},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$1514,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$m','next']};};
                })(listIterator$1514.$$.prototype);
                var listIterator$1526;
                function getListIterator$1526(){
                    if (listIterator$1526===undefined)listIterator$1526=$init$listIterator$1514()({Element:{t:Time}});
                    return listIterator$1526;
                }
                getListIterator$1526.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$1514},d:['ceylon.time','TimeRange','$m','iterator','$at','listIterator']};};
                $prop$getListIterator$1526={get:getListIterator$1526,$$metamodel$$:getListIterator$1526.$$metamodel$$};
                return getListIterator$1526();
            };$$timeRange.iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:Time}}},$ps:[],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','iterator']};};
            $$timeRange.stepBy=function stepBy(step$1527){
                var $$timeRange=this;
                return (opt$1528=(step$1527.equals($$timeRange.step)?$$timeRange:null),opt$1528!==null?opt$1528:TimeRange($$timeRange.from,$$timeRange.to,step$1527));
                var opt$1528;
            };$$timeRange.stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:UnitOfTime$base},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','stepBy']};};
            $$timeRange.nextByStep$1521$defs$jump=function(jump$1529){var $$timeRange=this;
            return (1);};
            $$timeRange.nextByStep$1521=function nextByStep$1521(jump$1529){
                var $$timeRange=this;
                if(jump$1529===undefined){jump$1529=$$timeRange.nextByStep$1521$defs$jump(jump$1529);}
                
                var case$1530=$$timeRange.step;
                if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfHour$base})) {
                    return $$timeRange.from.plusHours(jump$1529);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfMinute$base})) {
                    return $$timeRange.from.plusMinutes(jump$1529);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfSecond$base})) {
                    return $$timeRange.from.plusSeconds(jump$1529);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfMillisecond$base})) {
                    return $$timeRange.from.plusMilliseconds(jump$1529);
                }
            };$$timeRange.nextByStep$1521.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point.",67))];},d:['ceylon.time','TimeRange','$m','nextByStep']};};
            $$timeRange.previousByStep$1519$defs$jump=function(jump$1531){var $$timeRange=this;
            return (1);};
            $$timeRange.previousByStep$1519=function previousByStep$1519(jump$1531){
                var $$timeRange=this;
                if(jump$1531===undefined){jump$1531=$$timeRange.previousByStep$1519$defs$jump(jump$1531);}
                
                var case$1532=$$timeRange.step;
                if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfHour$base})) {
                    return $$timeRange.from.minusHours(jump$1531);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfMinute$base})) {
                    return $$timeRange.from.minusMinutes(jump$1531);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfSecond$base})) {
                    return $$timeRange.from.minusSeconds(jump$1531);
                }else if ($$$cl1.isOfType($$timeRange.step,{t:UnitOfMillisecond$base})) {
                    return $$timeRange.from.minusMilliseconds(jump$1531);
                }
            };$$timeRange.previousByStep$1519.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point.",67))];},d:['ceylon.time','TimeRange','$m','previousByStep']};};
        })(TimeRange.$$.prototype);
    }
    return TimeRange;
}
exports.$init$TimeRange=$init$TimeRange;
$init$TimeRange();
exports.$pkg$ans$ceylon$time$timezone=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function ParserError$timezone(message, $$parserError){
    $init$ParserError$timezone();
    if ($$parserError===undefined)$$parserError=new ParserError$timezone.$$;
    $$parserError.message$1533_=message;
    $$parserError.$prop$getMessage={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError','$at','message']};}};
    $$parserError.$prop$getMessage.get=function(){return message};
    return $$parserError;
}
ParserError$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the problem that occured while parsing. It can be recovered from _message_ field",91)),$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError']};};
exports.ParserError$timezone=ParserError$timezone;
function $init$ParserError$timezone(){
    if (ParserError$timezone.$$===undefined){
        $$$cl1.initTypeProto(ParserError$timezone,'ceylon.time.timezone::ParserError',$$$cl1.Basic);
        (function($$parserError){
            $$$cl1.defineAttr($$parserError,'message',function(){return this.message$1533_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError','$at','message']};});
            $$parserError.equals=function equals(other$1534){
                var $$parserError=this;
                var other$1535;
                if($$$cl1.isOfType((other$1535=other$1534),{t:ParserError$timezone})){
                    return $$parserError.message.equals(other$1535.message);
                }
                return false;
            };$$parserError.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','ParserError','$m','equals']};};
        })(ParserError$timezone.$$.prototype);
    }
    return ParserError$timezone;
}
exports.$init$ParserError$timezone=$init$ParserError$timezone;
$init$ParserError$timezone();
function parseTimeZone$timezone(offset$1536){
    var state$1537=Initial$timezone();
    function setState$1537(state$1538){return state$1537=state$1538;};
    var it$1539 = offset$1536.iterator();
    var character$1540;while ((character$1540=it$1539.next())!==$$$cl1.getFinished()){
        state$1537=state$1537.next(Chunk$timezone(character$1540));
    }
    state$1537=state$1537.next(getEof$timezone());
    var final$1541;
    if($$$cl1.isOfType((final$1541=state$1537),{t:Final$timezone})){
        var result$1542=final$1541.evaluate();
        $prop$getResult$1542={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.timezone','parseTimeZone','$at','result']};}};
        $prop$getResult$1542.get=function(){return result$1542};
        if((result$1542.equals((0))&&offset$1536.contains($$$cl1.Character(45)))){
            return ParserError$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Pattern not allowed by ISO-8601: \'",34),offset$1536.string,$$$cl1.String("\'!",2)]).string);
        }
        return OffsetTimeZone$timezone(result$1542);
    }
    //assert at parseTimeZone.ceylon (34:4-34:37)
    var error$1543;
    if (!($$$cl1.isOfType((error$1543=state$1537),{t:Error$timezone}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Error error = state \' at parseTimeZone.ceylon (34:11-34:36)"),'34:4-34:37','parseTimeZone.ceylon'); }
    return ParserError$timezone(error$1543.message);
}
exports.parseTimeZone$timezone=parseTimeZone$timezone;
parseTimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeZone$timezone},{t:ParserError$timezone}]},$ps:[{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n  &plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`",242)),$$$cl1.shared()];},d:['ceylon.time.timezone','parseTimeZone']};};
function Input$timezone($$input){
    $init$Input$timezone();
    if ($$input===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    return $$input;
}
Input$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents each elelment or the end of the parser",49)),$$$cl1.abstract()];},d:['ceylon.time.timezone','Input']};};
function $init$Input$timezone(){
    if (Input$timezone.$$===undefined){
        $$$cl1.initTypeProto(Input$timezone,'ceylon.time.timezone::Input',$$$cl1.Basic);
    }
    return Input$timezone;
}
exports.$init$Input$timezone=$init$Input$timezone;
$init$Input$timezone();
function Chunk$timezone(character, $$chunk){
    $init$Chunk$timezone();
    if ($$chunk===undefined)$$chunk=new Chunk$timezone.$$;
    Input$timezone($$chunk);
    $$chunk.character$1544_=character;
    $$chunk.$prop$getCharacter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Chunk','$at','character']};}};
    $$chunk.$prop$getCharacter.get=function(){return character};
    return $$chunk;
}
Chunk$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Input$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents each character",25))];},d:['ceylon.time.timezone','Chunk']};};
function $init$Chunk$timezone(){
    if (Chunk$timezone.$$===undefined){
        $$$cl1.initTypeProto(Chunk$timezone,'ceylon.time.timezone::Chunk',$init$Input$timezone());
        (function($$chunk){
            $$$cl1.defineAttr($$chunk,'character',function(){return this.character$1544_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Chunk','$at','character']};});
            $$chunk.equals=function equals(other$1545){
                var $$chunk=this;
                var other$1546;
                if($$$cl1.isOfType((other$1546=other$1545),{t:$$$cl1.Character})){
                    return $$chunk.character.equals(other$1546);
                }
                return false;
            };$$chunk.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Chunk','$m','equals']};};
        })(Chunk$timezone.$$.prototype);
    }
    return Chunk$timezone;
}
exports.$init$Chunk$timezone=$init$Chunk$timezone;
$init$Chunk$timezone();
function EOF$timezone($$eOF){
    $init$EOF$timezone();
    if ($$eOF===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    Input$timezone($$eOF);
    return $$eOF;
}
EOF$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Input$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the end of the parser",32)),$$$cl1.abstract()];},d:['ceylon.time.timezone','EOF']};};
function $init$EOF$timezone(){
    if (EOF$timezone.$$===undefined){
        $$$cl1.initTypeProto(EOF$timezone,'ceylon.time.timezone::EOF',$init$Input$timezone());
    }
    return EOF$timezone;
}
exports.$init$EOF$timezone=$init$EOF$timezone;
$init$EOF$timezone();
function eof$1547$timezone(){
    var $$eof=new eof$1547$timezone.$$;
    EOF$timezone($$eof);
    return $$eof;
}
function $init$eof$1547$timezone(){
    if (eof$1547$timezone.$$===undefined){
        $$$cl1.initTypeProto(eof$1547$timezone,'ceylon.time.timezone::eof',$init$EOF$timezone());
    }
    return eof$1547$timezone;
}
exports.$init$eof$1547$timezone=$init$eof$1547$timezone;
$init$eof$1547$timezone();
var eof$1548$timezone;
function getEof$timezone(){
    if (eof$1548$timezone===undefined)eof$1548$timezone=$init$eof$1547$timezone()();
    return eof$1548$timezone;
}
getEof$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:eof$1547$timezone},$an:function(){return[$$$cl1.doc($$$cl1.String("Singleton implementation to represent the end of the parser",59))];},d:['ceylon.time.timezone','eof']};};
$prop$getEof$timezone={get:getEof$timezone,$$metamodel$$:getEof$timezone.$$metamodel$$};
exports.$prop$getEof$timezone=$prop$getEof$timezone;
function State$timezone($$state){
    $init$State$timezone();
    if ($$state===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    return $$state;
}
State$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("All states avaiable for the parser",34)),$$$cl1.abstract()];},d:['ceylon.time.timezone','State']};};
function $init$State$timezone(){
    if (State$timezone.$$===undefined){
        $$$cl1.initTypeProto(State$timezone,'ceylon.time.timezone::State',$$$cl1.Basic);
        (function($$state){
        })(State$timezone.$$.prototype);
    }
    return State$timezone;
}
exports.$init$State$timezone=$init$State$timezone;
$init$State$timezone();
function Initial$timezone($$initial){
    $init$Initial$timezone();
    if ($$initial===undefined)$$initial=new Initial$timezone.$$;
    State$timezone($$initial);
    return $$initial;
}
Initial$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the init of the parser",33))];},d:['ceylon.time.timezone','Initial']};};
function $init$Initial$timezone(){
    if (Initial$timezone.$$===undefined){
        $$$cl1.initTypeProto(Initial$timezone,'ceylon.time.timezone::Initial',$init$State$timezone());
        (function($$initial){
            $$initial.next=function next(input$1549){
                var $$initial=this;
                
                var case$1550=input$1549;
                if ($$$cl1.isOfType(input$1549,{t:Chunk$timezone})) {
                    if(case$1550.equals($$$cl1.Character(90))){
                        return Zulu$timezone();
                    }
                    if(case$1550.equals($$$cl1.Character(43))){
                        return Sign$timezone((+(1)));
                    }
                    if(case$1550.equals($$$cl1.Character(45))){
                        return Sign$timezone((-(1)));
                    }
                    return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1550.character.string,$$$cl1.String("\' but expected: \'Z\', \'+\' or \'-\'",31)]).string);
                }else if ($$$cl1.isOfType(input$1549,{t:EOF$timezone})) {
                    return Error$timezone($$$cl1.String("Unexpected end of input! Empty time zone.",41));
                }
            };$$initial.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Initial$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Initial','$m','next']};};
        })(Initial$timezone.$$.prototype);
    }
    return Initial$timezone;
}
exports.$init$Initial$timezone=$init$Initial$timezone;
$init$Initial$timezone();
function Zulu$timezone($$zulu){
    $init$Zulu$timezone();
    if ($$zulu===undefined)$$zulu=new Zulu$timezone.$$;
    State$timezone($$zulu);
    return $$zulu;
}
Zulu$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the UTC",18))];},d:['ceylon.time.timezone','Zulu']};};
function $init$Zulu$timezone(){
    if (Zulu$timezone.$$===undefined){
        $$$cl1.initTypeProto(Zulu$timezone,'ceylon.time.timezone::Zulu',$init$State$timezone());
        (function($$zulu){
            $$zulu.next=function next(input$1551){
                var $$zulu=this;
                
                var case$1552=input$1551;
                if ($$$cl1.isOfType(input$1551,{t:Chunk$timezone})) {
                    return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1552.character.string,$$$cl1.String("\' but expected end of input after \'Z\'",37)]).string);
                }else if ($$$cl1.isOfType(input$1551,{t:EOF$timezone})) {
                    return Final$timezone();
                }
            };$$zulu.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Zulu$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Zulu','$m','next']};};
        })(Zulu$timezone.$$.prototype);
    }
    return Zulu$timezone;
}
exports.$init$Zulu$timezone=$init$Zulu$timezone;
$init$Zulu$timezone();
function Sign$timezone(sign$1553, $$sign){
    $init$Sign$timezone();
    if ($$sign===undefined)$$sign=new Sign$timezone.$$;
    $$sign.sign$1553_=sign$1553;
    State$timezone($$sign);
    return $$sign;
}
Sign$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents +1 case the time is ahead of UTC, otherwise its -1",61))];},d:['ceylon.time.timezone','Sign']};};
function $init$Sign$timezone(){
    if (Sign$timezone.$$===undefined){
        $$$cl1.initTypeProto(Sign$timezone,'ceylon.time.timezone::Sign',$init$State$timezone());
        (function($$sign){
            $$sign.next=function next(input$1554){
                var $$sign=this;
                
                var case$1555=input$1554;
                if ($$$cl1.isOfType(input$1554,{t:Chunk$timezone})) {
                    return (opt$1556=(case$1555.character.digit?Hours$timezone($$sign.sign$1553,characterToInteger$timezone(case$1555.character)):null),opt$1556!==null?opt$1556:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1555.character.string,$$$cl1.String("\' but expected a digit [0..9] after \'",37),(opt$1557=($$sign.sign$1553.compare((0)).equals($$$cl1.getLarger())?$$$cl1.String("+",1):null),opt$1557!==null?opt$1557:$$$cl1.String("-",1)).string,$$$cl1.String("\'",1)]).string));
                    var opt$1556,opt$1557;
                }else if ($$$cl1.isOfType(input$1554,{t:EOF$timezone})) {
                    return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected end of input! Expecting a digit [0..9] after \'",57),(opt$1558=($$sign.sign$1553.compare((0)).equals($$$cl1.getLarger())?$$$cl1.String("+",1):null),opt$1558!==null?opt$1558:$$$cl1.String("-",1)).string,$$$cl1.String("\'",1)]).string);
                    var opt$1558;
                }
            };$$sign.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Sign$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Sign','$m','next']};};
            $$$cl1.defineAttr($$sign,'sign$1553',function(){return this.sign$1553_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Sign$timezone,d:['ceylon.time.timezone','Sign','$at','sign']};});
        })(Sign$timezone.$$.prototype);
    }
    return Sign$timezone;
}
exports.$init$Sign$timezone=$init$Sign$timezone;
$init$Sign$timezone();
function Hours$timezone(sign$1559, hours$1560, digits$1561, $$hours){
    $init$Hours$timezone();
    if ($$hours===undefined)$$hours=new Hours$timezone.$$;
    $$hours.sign$1559_=sign$1559;
    if(digits$1561===undefined){digits$1561=(1);}
    State$timezone($$hours);
    $$hours.digits$1561_=digits$1561;
    $$hours.$prop$getDigits$1561={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','digits']};}};
    $$hours.$prop$getDigits$1561.get=function(){return digits$1561};
    $$hours.hours$1560_=hours$1560;
    $$hours.$prop$getHours$1560={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','hours']};}};
    $$hours.$prop$getHours$1560.get=function(){return hours$1560};
    return $$hours;
}
Hours$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the hours, the accepted pattern is two digit hours",61))];},d:['ceylon.time.timezone','Hours']};};
function $init$Hours$timezone(){
    if (Hours$timezone.$$===undefined){
        $$$cl1.initTypeProto(Hours$timezone,'ceylon.time.timezone::Hours',$init$State$timezone());
        (function($$hours){
            $$$cl1.defineAttr($$hours,'digits$1561',function(){return this.digits$1561_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','digits']};});
            $$$cl1.defineAttr($$hours,'hours$1560',function(){return this.hours$1560_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','hours']};});
            $$hours.next=function next(input$1562){
                var $$hours=this;
                
                var case$1563=input$1562;
                if ($$$cl1.isOfType(input$1562,{t:Chunk$timezone})) {
                    if(case$1563.character.digit){
                        return (opt$1564=($$hours.digits$1561.equals((2))?Minutes$timezone($$hours.sign$1559,$$hours.hours$1560,characterToInteger$timezone(case$1563.character)):null),opt$1564!==null?opt$1564:Hours$timezone($$hours.sign$1559,$$hours.hours$1560.times((10)).plus(characterToInteger$timezone(case$1563.character)),(2)));
                        var opt$1564;
                    }else {
                        if(case$1563.equals($$$cl1.Character(58))){
                            return Colon$timezone($$hours.sign$1559,$$hours.hours$1560);
                        }else {
                            return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1563.character.string,$$$cl1.String("\' but expected a digit [0..9]",29)]).string);
                        }
                    }
                }else if ($$$cl1.isOfType(input$1562,{t:EOF$timezone})) {
                    return (opt$1565=($$hours.digits$1561.equals((2))?Final$timezone($$hours.sign$1559,$$hours.hours$1560):null),opt$1565!==null?opt$1565:Error$timezone($$$cl1.String("Unexpected end of input! Expected at two digits for hours but got one.",70)));
                    var opt$1565;
                }
            };$$hours.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Hours$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Hours','$m','next']};};
            $$$cl1.defineAttr($$hours,'sign$1559',function(){return this.sign$1559_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','sign']};});
        })(Hours$timezone.$$.prototype);
    }
    return Hours$timezone;
}
exports.$init$Hours$timezone=$init$Hours$timezone;
$init$Hours$timezone();
function Minutes$timezone(sign$1566, hours$1567, minutes$1568, digits$1569, $$minutes){
    $init$Minutes$timezone();
    if ($$minutes===undefined)$$minutes=new Minutes$timezone.$$;
    $$minutes.sign$1566_=sign$1566;
    $$minutes.hours$1567_=hours$1567;
    if(digits$1569===undefined){digits$1569=(1);}
    State$timezone($$minutes);
    $$minutes.digits$1569_=digits$1569;
    $$minutes.$prop$getDigits$1569={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','digits']};}};
    $$minutes.$prop$getDigits$1569.get=function(){return digits$1569};
    $$minutes.minutes$1568_=minutes$1568;
    $$minutes.$prop$getMinutes$1568={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','minutes']};}};
    $$minutes.$prop$getMinutes$1568.get=function(){return minutes$1568};
    return $$minutes;
}
Minutes$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the minutes, the accepted pattern is two digit minutes",65))];},d:['ceylon.time.timezone','Minutes']};};
function $init$Minutes$timezone(){
    if (Minutes$timezone.$$===undefined){
        $$$cl1.initTypeProto(Minutes$timezone,'ceylon.time.timezone::Minutes',$init$State$timezone());
        (function($$minutes){
            $$$cl1.defineAttr($$minutes,'digits$1569',function(){return this.digits$1569_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','digits']};});
            $$$cl1.defineAttr($$minutes,'minutes$1568',function(){return this.minutes$1568_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','minutes']};});
            $$minutes.next=function next(input$1570){
                var $$minutes=this;
                
                var case$1571=input$1570;
                if ($$$cl1.isOfType(input$1570,{t:Chunk$timezone})) {
                    if(case$1571.character.digit){
                        return (opt$1572=($$minutes.digits$1569.equals((2))?Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1571.character.string,$$$cl1.String("\' but expected end of input",27)]).string):null),opt$1572!==null?opt$1572:Minutes$timezone($$minutes.sign$1566,$$minutes.hours$1567,$$minutes.minutes$1568.times((10)).plus(characterToInteger$timezone(case$1571.character)),(2)));
                        var opt$1572;
                    }else {
                        return (opt$1573=($$minutes.digits$1569.equals((2))?Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1571.character.string,$$$cl1.String("\' but expected end of input",27)]).string):null),opt$1573!==null?opt$1573:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1571.character.string,$$$cl1.String("\' but expected a digit [0..9]",29)]).string));
                        var opt$1573;
                    }
                }else if ($$$cl1.isOfType(input$1570,{t:EOF$timezone})) {
                    return (opt$1574=($$minutes.digits$1569.equals((2))?Final$timezone($$minutes.sign$1566,$$minutes.hours$1567,$$minutes.minutes$1568):null),opt$1574!==null?opt$1574:Error$timezone($$$cl1.String("Unexpected end of input! Expected two digits for minutes but got one.",69)));
                    var opt$1574;
                }
            };$$minutes.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Minutes$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Minutes','$m','next']};};
            $$$cl1.defineAttr($$minutes,'sign$1566',function(){return this.sign$1566_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','sign']};});
            $$$cl1.defineAttr($$minutes,'hours$1567',function(){return this.hours$1567_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','hours']};});
        })(Minutes$timezone.$$.prototype);
    }
    return Minutes$timezone;
}
exports.$init$Minutes$timezone=$init$Minutes$timezone;
$init$Minutes$timezone();
function Colon$timezone(sign$1575, hours$1576, $$colon){
    $init$Colon$timezone();
    if ($$colon===undefined)$$colon=new Colon$timezone.$$;
    $$colon.sign$1575_=sign$1575;
    $$colon.hours$1576_=hours$1576;
    State$timezone($$colon);
    return $$colon;
}
Colon$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the colon as some patterns accepts for example \'hh:mm\'",65))];},d:['ceylon.time.timezone','Colon']};};
function $init$Colon$timezone(){
    if (Colon$timezone.$$===undefined){
        $$$cl1.initTypeProto(Colon$timezone,'ceylon.time.timezone::Colon',$init$State$timezone());
        (function($$colon){
            $$colon.next=function next(input$1577){
                var $$colon=this;
                
                var case$1578=input$1577;
                if ($$$cl1.isOfType(input$1577,{t:Chunk$timezone})) {
                    return (opt$1579=(case$1578.character.digit?Minutes$timezone($$colon.sign$1575,$$colon.hours$1576,characterToInteger$timezone(case$1578.character)):null),opt$1579!==null?opt$1579:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1578.character.string,$$$cl1.String("\' but expected a digit [0..9] after \':\'",39)]).string));
                    var opt$1579;
                }else if ($$$cl1.isOfType(input$1577,{t:EOF$timezone})) {
                    return Error$timezone($$$cl1.String("Unexpected end of input! Expecting a digit [0..9] after \':\'",59));
                }
            };$$colon.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Colon$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Colon','$m','next']};};
            $$$cl1.defineAttr($$colon,'sign$1575',function(){return this.sign$1575_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Colon$timezone,d:['ceylon.time.timezone','Colon','$at','sign']};});
            $$$cl1.defineAttr($$colon,'hours$1576',function(){return this.hours$1576_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Colon$timezone,d:['ceylon.time.timezone','Colon','$at','hours']};});
        })(Colon$timezone.$$.prototype);
    }
    return Colon$timezone;
}
exports.$init$Colon$timezone=$init$Colon$timezone;
$init$Colon$timezone();
function Final$timezone(sign$1580, hours$1581, minutes$1582, $$final){
    $init$Final$timezone();
    if ($$final===undefined)$$final=new Final$timezone.$$;
    if(sign$1580===undefined){sign$1580=(1);}
    $$final.sign$1580_=sign$1580;
    if(hours$1581===undefined){hours$1581=(0);}
    $$final.hours$1581_=hours$1581;
    if(minutes$1582===undefined){minutes$1582=(0);}
    $$final.minutes$1582_=minutes$1582;
    State$timezone($$final);
    return $$final;
}
Final$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Rrepresents the parser successfully finished",44))];},d:['ceylon.time.timezone','Final']};};
function $init$Final$timezone(){
    if (Final$timezone.$$===undefined){
        $$$cl1.initTypeProto(Final$timezone,'ceylon.time.timezone::Final',$init$State$timezone());
        (function($$final){
            $$final.next=function (character$1583){
                var $$final=this;
                return $$final;
            };
            $$final.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'character',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Final$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Final','$m','next']};};
            $$final.evaluate=function evaluate(){
                var $$final=this;
                return $$final.sign$1580.times($$final.hours$1581.times(getMilliseconds$base().perHour).plus($$final.minutes$1582.times(getMilliseconds$base().perMinute)));
            };$$final.evaluate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Final$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Final','$m','evaluate']};};
            $$$cl1.defineAttr($$final,'sign$1580',function(){return this.sign$1580_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','sign']};});
            $$$cl1.defineAttr($$final,'hours$1581',function(){return this.hours$1581_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','hours']};});
            $$$cl1.defineAttr($$final,'minutes$1582',function(){return this.minutes$1582_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','minutes']};});
        })(Final$timezone.$$.prototype);
    }
    return Final$timezone;
}
exports.$init$Final$timezone=$init$Final$timezone;
$init$Final$timezone();
function Error$timezone(message, $$error){
    $init$Error$timezone();
    if ($$error===undefined)$$error=new Error$timezone.$$;
    State$timezone($$error);
    $$error.message$1584_=message;
    $$error.$prop$getMessage.get=function(){return message};
    return $$error;
}
Error$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the parser unsuccessfully finished and hold the error message",72))];},d:['ceylon.time.timezone','Error']};};
function $init$Error$timezone(){
    if (Error$timezone.$$===undefined){
        $$$cl1.initTypeProto(Error$timezone,'ceylon.time.timezone::Error',$init$State$timezone());
        (function($$error){
            $$$cl1.defineAttr($$error,'message',function(){return this.message$1584_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Error$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Error','$at','message']};});
            $$error.next=function (character$1585){
                var $$error=this;
                return $$error;
            };
            $$error.next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'character',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Error$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Error','$m','next']};};
        })(Error$timezone.$$.prototype);
    }
    return Error$timezone;
}
exports.$init$Error$timezone=$init$Error$timezone;
$init$Error$timezone();
function characterToInteger$timezone(digit$1586){
    return digit$1586.integer.minus($$$cl1.Character(48).integer);
};characterToInteger$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'digit',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],d:['ceylon.time.timezone','characterToInteger']};};
function TimeZone$timezone($$timeZone){
}
TimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("The interface representing a timezone.",38)),$$$cl1.shared()];},d:['ceylon.time.timezone','TimeZone']};};
exports.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
    if (TimeZone$timezone.$$===undefined){
        $$$cl1.initTypeProto(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
        (function($$timeZone){
        })(TimeZone$timezone.$$.prototype);
    }
    return TimeZone$timezone;
}
exports.$init$TimeZone$timezone=$init$TimeZone$timezone;
$init$TimeZone$timezone();
function OffsetTimeZone$timezone(offsetMilliseconds$1587, $$offsetTimeZone){
    $init$OffsetTimeZone$timezone();
    if ($$offsetTimeZone===undefined)$$offsetTimeZone=new OffsetTimeZone$timezone.$$;
    TimeZone$timezone($$offsetTimeZone);
    $$offsetTimeZone.offsetMilliseconds$1587_=offsetMilliseconds$1587;
    $$offsetTimeZone.$prop$getOffsetMilliseconds$1587={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("The value that represents this constant offset.",47))];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};}};
    $$offsetTimeZone.$prop$getOffsetMilliseconds$1587.get=function(){return offsetMilliseconds$1587};
    return $$offsetTimeZone;
}
OffsetTimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TimeZone$timezone}],$an:function(){return[$$$cl1.doc($$$cl1.String("A simple time zone with a constant offset from UTC.",51)),$$$cl1.shared()];},d:['ceylon.time.timezone','OffsetTimeZone']};};
exports.OffsetTimeZone$timezone=OffsetTimeZone$timezone;
function $init$OffsetTimeZone$timezone(){
    if (OffsetTimeZone$timezone.$$===undefined){
        $$$cl1.initTypeProto(OffsetTimeZone$timezone,'ceylon.time.timezone::OffsetTimeZone',$$$cl1.Basic,$init$TimeZone$timezone());
        (function($$offsetTimeZone){
            $$$cl1.defineAttr($$offsetTimeZone,'offsetMilliseconds$1587',function(){return this.offsetMilliseconds$1587_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("The value that represents this constant offset.",47))];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};});
            $$offsetTimeZone.offset=function (instant$1588){
                var $$offsetTimeZone=this;
                return $$offsetTimeZone.offsetMilliseconds$1587;
            };
            $$offsetTimeZone.offset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'instant',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Always returns a constant offset.",33)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','OffsetTimeZone','$m','offset']};};
            $$offsetTimeZone.equals=function equals(other$1589){
                var $$offsetTimeZone=this;
                var other$1590;
                if($$$cl1.isOfType((other$1590=other$1589),{t:OffsetTimeZone$timezone})){
                    return $$offsetTimeZone.offsetMilliseconds$1587.equals(other$1590.offsetMilliseconds$1587);
                }
                return false;
            };$$offsetTimeZone.equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type and offset milliseconds.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','OffsetTimeZone','$m','equals']};};
        })(OffsetTimeZone$timezone.$$.prototype);
    }
    return OffsetTimeZone$timezone;
}
exports.$init$OffsetTimeZone$timezone=$init$OffsetTimeZone$timezone;
$init$OffsetTimeZone$timezone();
function RuleBasedTimezone$timezone($$ruleBasedTimezone){
    TimeZone$timezone($$ruleBasedTimezone);
}
RuleBasedTimezone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:TimeZone$timezone}],$an:function(){return[$$$cl1.doc($$$cl1.String("This represents offsets based on daylight saving time.",54)),$$$cl1.shared()];},d:['ceylon.time.timezone','RuleBasedTimezone']};};
exports.RuleBasedTimezone$timezone=RuleBasedTimezone$timezone;
function $init$RuleBasedTimezone$timezone(){
    if (RuleBasedTimezone$timezone.$$===undefined){
        $$$cl1.initTypeProto(RuleBasedTimezone$timezone,'ceylon.time.timezone::RuleBasedTimezone',$init$TimeZone$timezone());
    }
    return RuleBasedTimezone$timezone;
}
exports.$init$RuleBasedTimezone$timezone=$init$RuleBasedTimezone$timezone;
$init$RuleBasedTimezone$timezone();
function timeZone$1591$timezone(){
    var $$timeZone=new timeZone$1591$timezone.$$;
    $$timeZone.system$1592_=$$timeZone.system$1593();
    $$timeZone.utc$1594_=$$timeZone.utc$1595();
    return $$timeZone;
}
function $init$timeZone$1591$timezone(){
    if (timeZone$1591$timezone.$$===undefined){
        $$$cl1.initTypeProto(timeZone$1591$timezone,'ceylon.time.timezone::timeZone',$$$cl1.Basic);
    }
    return timeZone$1591$timezone;
}
exports.$init$timeZone$1591$timezone=$init$timeZone$1591$timezone;
$init$timeZone$1591$timezone();
(function($$timeZone){
    function system$1593(){
        var $$system$timeZone=new this.system$1593.$$;
        $$system$timeZone.$$outer=this;
        OffsetTimeZone$timezone($$$cl1.getProcess().timezoneOffset,$$system$timeZone);
        return $$system$timeZone;
    }
    function $init$system$1593(){
        if (system$1593.$$===undefined){
            $$$cl1.initTypeProto(system$1593,'ceylon.time.timezone::timeZone.system',$init$OffsetTimeZone$timezone());
            timeZone$1591$timezone.system$1593=system$1593;
        }
        return system$1593;
    }
    $$timeZone.$init$system$1593=$init$system$1593;
    $init$system$1593();
    $$$cl1.defineAttr($$timeZone,'system',function(){return this.system$1592_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1591$timezone.system$1593},$cont:timeZone$1591$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents machine offset based on current VM.",46)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$at','system']};});
    $$timeZone.system$1593=system$1593;
    function utc$1595(){
        var $$utc$timeZone=new this.utc$1595.$$;
        $$utc$timeZone.$$outer=this;
        OffsetTimeZone$timezone((0),$$utc$timeZone);
        return $$utc$timeZone;
    }
    function $init$utc$1595(){
        if (utc$1595.$$===undefined){
            $$$cl1.initTypeProto(utc$1595,'ceylon.time.timezone::timeZone.utc',$init$OffsetTimeZone$timezone());
            timeZone$1591$timezone.utc$1595=utc$1595;
        }
        return utc$1595;
    }
    $$timeZone.$init$utc$1595=$init$utc$1595;
    $init$utc$1595();
    $$$cl1.defineAttr($$timeZone,'utc',function(){return this.utc$1594_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1591$timezone.utc$1595},$cont:timeZone$1591$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents Coordinated Universal Time.",38)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$at','utc']};});
    $$timeZone.utc$1595=utc$1595;
    $$timeZone.parse=function parse(zone$1596){
        var $$timeZone=this;
        return parseTimeZone$timezone(zone$1596);
    };$$timeZone.parse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeZone$timezone},{t:ParserError$timezone}]},$ps:[{$nm:'zone',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:timeZone$1591$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n&plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`.\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`.",242)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$m','parse']};};
    $$timeZone.offset$defs$minutes=function(hours$1597,minutes$1598,milliseconds$1599){var $$timeZone=this;
    return (0);};
    $$timeZone.offset$defs$milliseconds=function(hours$1597,minutes$1598,milliseconds$1599){var $$timeZone=this;
    return (0);};
    $$timeZone.offset=function offset(hours$1597,minutes$1598,milliseconds$1599){
        var $$timeZone=this;
        if(minutes$1598===undefined){minutes$1598=$$timeZone.offset$defs$minutes(hours$1597,minutes$1598,milliseconds$1599);}
        if(milliseconds$1599===undefined){milliseconds$1599=$$timeZone.offset$defs$milliseconds(hours$1597,minutes$1598,milliseconds$1599);}
        return OffsetTimeZone$timezone(hours$1597.times(getMilliseconds$base().perHour).plus(minutes$1598.times(getMilliseconds$base().perMinute)).plus(milliseconds$1599));
    };$$timeZone.offset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:timeZone$1591$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents fixed timeZone created based on given values.",56)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$m','offset']};};
})(timeZone$1591$timezone.$$.prototype);
var timeZone$1600$timezone;
function getTimeZone$timezone(){
    if (timeZone$1600$timezone===undefined)timeZone$1600$timezone=$init$timeZone$1591$timezone()();
    return timeZone$1600$timezone;
}
exports.getTimeZone$timezone=getTimeZone$timezone;
getTimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1591$timezone},$an:function(){return[$$$cl1.doc($$$cl1.String("This constant represents common operations for time zone.\n\nAt same time it hold objects references for most commons used time zones around world.\n\nExamples:\n* UTC\n* System (current machine offset)",196)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone']};};
$prop$getTimeZone$timezone={get:getTimeZone$timezone,$$metamodel$$:getTimeZone$timezone.$$metamodel$$};
exports.$prop$getTimeZone$timezone=$prop$getTimeZone$timezone;
function ZoneDateTime$timezone($$zoneDateTime){
    ReadableDateTime$base($$zoneDateTime);
    DateTimeBehavior$base({TimeType:{t:Time},DateType:{t:$Date},Element:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'TimeType',{t:Time});
    $$$cl1.add_type_arg($$zoneDateTime,'DateType',{t:$Date});
    $$$cl1.add_type_arg($$zoneDateTime,'Element',{t:ZoneDateTime$timezone});
    $$$cl1.Comparable({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$$cl1.Ordinal({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$$cl1.Enumerable({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
}
ZoneDateTime$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDateTime$base},{t:DateTimeBehavior$base,a:{TimeType:{t:Time},DateType:{t:$Date},Element:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Comparable,a:{Other:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Ordinal,a:{Other:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Enumerable,a:{Other:{t:ZoneDateTime$timezone}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Instant of time in a specific time zone.",40)),$$$cl1.shared()];},d:['ceylon.time.timezone','ZoneDateTime']};};
exports.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
    if (ZoneDateTime$timezone.$$===undefined){
        $$$cl1.initTypeProto(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$init$ReadableDateTime$base(),$init$DateTimeBehavior$base(),$$$cl1.Comparable,$$$cl1.Ordinal,$$$cl1.Enumerable);
        (function($$zoneDateTime){
            $$zoneDateTime.$prop$getTimeZone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$cont:ZoneDateTime$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Time zone information of this date and time value.",50)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.timezone','ZoneDateTime','$at','timeZone']};}};
            $$zoneDateTime.$prop$getInstant={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$cont:ZoneDateTime$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Instant used as base.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.timezone','ZoneDateTime','$at','instant']};}};
        })(ZoneDateTime$timezone.$$.prototype);
    }
    return ZoneDateTime$timezone;
}
exports.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;
$init$ZoneDateTime$timezone();
function zoneDateTime$timezone(timeZone$1601,year$1602,month$1603,date$1604,hour$1605,minutes$1606,seconds$1607,millis$1608){
    if(hour$1605===undefined){hour$1605=(0);}
    if(minutes$1606===undefined){minutes$1606=(0);}
    if(seconds$1607===undefined){seconds$1607=(0);}
    if(millis$1608===undefined){millis$1608=(0);}
    var utcDateTime$1609=dateTime(year$1602,month$1603,date$1604,hour$1605,minutes$1606,seconds$1607,millis$1608);
    var utcMilliseconds$1610=getUnixTime$chronology().timeFromFixed(utcDateTime$1609.dayOfEra).plus(utcDateTime$1609.millisecondsOfDay);
    var fixedZoneMilliseconds$1611=utcMilliseconds$1610.minus(timeZone$1601.offset(Instant(utcMilliseconds$1610)));
    return GregorianZonedDateTime$internal(Instant(fixedZoneMilliseconds$1611),timeZone$1601);
}
exports.zoneDateTime$timezone=zoneDateTime$timezone;
zoneDateTime$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'timeZone',$mt:'prm',$t:{t:TimeZone$timezone},$an:function(){return[];}},{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[];}},{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a [[ZoneDateTime]] based on the specified [[TimeZone]], year, month, day of month, hour, minute, second and millisecond values.",135)),$$$cl1.shared()];},d:['ceylon.time.timezone','zoneDateTime']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
