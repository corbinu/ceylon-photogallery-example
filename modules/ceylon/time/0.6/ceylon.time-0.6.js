(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.time","ceylon.time.internal.math":{"floorDiv":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns floored division of the two integers."]},"$nm":"floorDiv"},"$pkg-shared":"1","floor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the largest integer less than or equal to _x_."]},"$nm":"floor"},"round":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$nm":"f"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns nearest integer to x"]},"$nm":"round"},"adjustedMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an _adjusted remainder_ of the two integers.\n\n   value moduli = [for (x in 4..-4) amod(x, 4)];\n   assert( moduli == [4, 3, 2, 1, 4, 3, 2, 1, 4] );\n"]},"$nm":"adjustedMod"},"floorMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the floor remainder (modulus) of the two integers.\n\n    value moduli = [for (x in 4..-4) mod(x, 4)] \n    assert( moduli == [0, 3, 2, 1, 0, 3, 2, 1, 0] );\n"]},"$nm":"floorMod"}},"$mod-version":"0.6","ceylon.time.timezone":{"Input":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.timezone","$nm":"Chunk"},{"$pk":"ceylon.time.timezone","$nm":"EOF"}],"$mt":"cls","$an":{"abstract":[],"doc":["Represents each elelment or the end of the parser"]},"$nm":"Input"},"OffsetTimeZone":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["The value that represents this constant offset."]},"$nm":"offsetMilliseconds"}],"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}],"$mt":"cls","$an":{"shared":[],"doc":["A simple time zone with a constant offset from UTC."]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type and offset milliseconds."],"actual":[]},"$nm":"equals"},"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Always returns a constant offset."],"actual":[]},"$nm":"offset"}},"$at":{"offsetMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"doc":["The value that represents this constant offset."]},"$nm":"offsetMilliseconds"}},"$nm":"OffsetTimeZone"},"parseTimeZone":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},{"$pk":"ceylon.time.timezone","$nm":"ParserError"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n  &plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`"]},"$nm":"parseTimeZone"},"ZoneDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"DateTimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["Instant of time in a specific time zone."]},"$at":{"timeZone":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Time zone information of this date and time value."]},"$nm":"timeZone"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Instant used as base."]},"$nm":"instant"}},"$nm":"ZoneDateTime"},"Hours":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$nm":"digits"}],"$mt":"cls","$an":{"doc":["Represents the hours, the accepted pattern is two digit hours"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"},"digits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"digits"}},"$nm":"Hours"},"timeZone":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"doc":["This constant represents common operations for time zone.\n\nAt same time it hold objects references for most commons used time zones around world.\n\nExamples:\n* UTC\n* System (current machine offset)"]},"$m":{"offset":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Represents fixed timeZone created based on given values."]},"$nm":"offset"},"parse":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},{"$pk":"ceylon.time.timezone","$nm":"ParserError"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n&plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`.\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`."]},"$nm":"parse"}},"$nm":"timeZone","$o":{"system":{"super":{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},"$mt":"obj","$an":{"shared":[],"doc":["Represents machine offset based on current VM."]},"$nm":"system"},"utc":{"super":{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},"$mt":"obj","$an":{"shared":[],"doc":["Represents Coordinated Universal Time."]},"$nm":"utc"}}},"characterToInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"prm","$nm":"digit"}]],"$mt":"mthd","$nm":"characterToInteger"},"Error":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"message"}],"$mt":"cls","$an":{"doc":["Represents the parser unsuccessfully finished and hold the error message"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"message"}},"$nm":"Error"},"$pkg-shared":"1","Final":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"}],"$mt":"cls","$an":{"doc":["Rrepresents the parser successfully finished"]},"$m":{"evaluate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[]},"$nm":"evaluate"},"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"character"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"}},"$nm":"Final"},"Colon":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}],"$mt":"cls","$an":{"doc":["Represents the colon as some patterns accepts for example 'hh:mm'"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"}},"$nm":"Colon"},"State":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.timezone","$nm":"Initial"},{"$pk":"ceylon.time.timezone","$nm":"Zulu"},{"$pk":"ceylon.time.timezone","$nm":"Sign"},{"$pk":"ceylon.time.timezone","$nm":"Hours"},{"$pk":"ceylon.time.timezone","$nm":"Minutes"},{"$pk":"ceylon.time.timezone","$nm":"Final"},{"$pk":"ceylon.time.timezone","$nm":"Error"},{"$pk":"ceylon.time.timezone","$nm":"Colon"}],"$mt":"cls","$an":{"abstract":[],"doc":["All states avaiable for the parser"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Each state is responsible to check if the next state is valid and call it"]},"$nm":"next"}},"$nm":"State"},"Sign":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"}],"$mt":"cls","$an":{"doc":["Represents +1 case the time is ahead of UTC, otherwise its -1"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"}},"$nm":"Sign"},"EOF":{"abstract":"1","super":{"$pk":"ceylon.time.timezone","$nm":"Input"},"of":[{"$pk":"ceylon.time.timezone","$nm":"eof"}],"$mt":"cls","$an":{"abstract":[],"doc":["Represents the end of the parser"]},"$nm":"EOF"},"zoneDateTime":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$nm":"timeZone"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hour"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millis"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a [[ZoneDateTime]] based on the specified [[TimeZone]], year, month, day of month, hour, minute, second and millisecond values."]},"$nm":"zoneDateTime"},"ParserError":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents the problem that occured while parsing. It can be recovered from _message_ field"]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"}},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"message"}},"$nm":"ParserError"},"TimeZone":{"of":[{"$pk":"ceylon.time.timezone","$nm":"OffsetTimeZone"},{"$pk":"ceylon.time.timezone","$nm":"RuleBasedTimezone"}],"$mt":"ifc","$an":{"shared":[],"doc":["The interface representing a timezone."]},"$m":{"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns offset in milliseconds of the specified instant according to this time zone."]},"$nm":"offset"}},"$nm":"TimeZone"},"eof":{"super":{"$pk":"ceylon.time.timezone","$nm":"EOF"},"$mt":"obj","$an":{"doc":["Singleton implementation to represent the end of the parser"]},"$nm":"eof"},"Minutes":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"sign"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$nm":"digits"}],"$mt":"cls","$an":{"doc":["Represents the minutes, the accepted pattern is two digit minutes"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"sign":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"sign"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"hours"},"digits":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"digits"}},"$nm":"Minutes"},"Initial":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$mt":"cls","$an":{"doc":["Represents the init of the parser"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"Initial"},"RuleBasedTimezone":{"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}],"$mt":"ifc","$an":{"shared":[],"doc":["This represents offsets based on daylight saving time."]},"$nm":"RuleBasedTimezone"},"Zulu":{"super":{"$pk":"ceylon.time.timezone","$nm":"State"},"$mt":"cls","$an":{"doc":["Represents the UTC"]},"$m":{"next":{"$t":{"$pk":"ceylon.time.timezone","$nm":"State"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$mt":"prm","$nm":"input"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$nm":"Zulu"},"Chunk":{"super":{"$pk":"ceylon.time.timezone","$nm":"Input"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"character"}],"$mt":"cls","$an":{"doc":["Represents each character"]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"}},"$at":{"character":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Character"},"$mt":"attr","$an":{"shared":[]},"$nm":"character"}},"$nm":"Chunk"}},"ceylon.time.internal":{"$pkg-shared":"1","GregorianZonedDateTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["All operations of this implementations is based in this Instant."],"actual":[]},"$nm":"instant"},{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["TimeZone to be applied in this implementation."],"actual":[]},"$nm":"timeZone"}],"satisfies":[{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of gregorian calendar thats makes use of a [[TimeZone]] for it´s operations.\n\nThis means that making some operations like _plusDays_ takes into \naccount the result Instant generated to reapply all the rules of the current TimeZone."]},"$m":{"withMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note 01:** It should be a valid _millisecond_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusDays"},"withMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _minute_ value set to the specified value.\n\n**Note 01:** It should be a valid _minute_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMinutes"},"withMonth":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withMonth"},"minusHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusHours"},"adjust":{"$t":{"$pk":"ceylon.time.internal","$nm":"GregorianZonedDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"resolved"}]],"$mt":"mthd","$an":{"doc":["Fix [[DateTime]] zone absence."]},"$nm":"adjust"},"plusSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _second_ value set to the specified value.\n\n**Note 01:** It should be a valid _second_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusMinutes"},"withDay":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _day of month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withDay"},"minusSeconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusSeconds"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Comparing [[ZoneDateTime]] is based on [[Instant]] and should not be \ncompared as it´s human representation as they are adjusted based on geographic and regional (DST) \nlocations and do not represent a comparison correct."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusDays"},"minusMonths":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"minusWeeks"},"plusMonths":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this _zoned date and time_ and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusMilliseconds"},"plusWeeks":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"plusWeeks"},"plusYears":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _hour_ value set to the specified value.\n\n**Note 01:** It should be a valid _hour_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withHours"},"withYear":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[ZoneDateTime]] with the _year_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n"],"actual":[]},"$nm":"withYear"}},"$at":{"successor":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"timeZone":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"attr","$an":{"shared":[],"doc":["TimeZone to be applied in this implementation."],"actual":[]},"$nm":"timeZone"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`, if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns [[Date]] representation of current zoned _date and time_."],"actual":[]},"$nm":"date"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"},"predecessor":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time."],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns [[Time]] representation of current zoned _date and time_."],"actual":[]},"$nm":"time"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Time_offsets_from_UTC"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _milliseconds of epoch_ as it enumerable value."],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$nm":"weekOfYear"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfEra"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$an":{"shared":[],"doc":["All operations of this implementations is based in this Instant."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"}},"$nm":"GregorianZonedDateTime"},"AbstractDate":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology."],"actual":[]},"$nm":"dayOfEra"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Date"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Common behaviors for _Date_ types."]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Dates from same chronology can be considered equal if they have same _day of era_."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Dates from same chronology can be compared if they have same _day of era_."],"actual":[]},"$nm":"compare"}},"$at":{"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology."],"actual":[]},"$nm":"dayOfEra"}},"$nm":"AbstractDate"},"overlap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns the inclusive overlap between two ordinal ranges.\n\nThe range of the overlap will be returned in the natural order of the values regardless of their original order in input tuples.\n\nExamples:\n\n    assert(overlap([1, 3], [2, 4]) == [2, 3]);\n    assert(overlap([4, 2], [1, 3]) == [2, 3]);\n    assert(is Empty o = overlap([1, 2], [3, 4]));\n"]},"$nm":"overlap"},"TimeOfDay":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Time"}],"$mt":"cls","$an":{"shared":[],"doc":["Basic implementation of [[Time]] interface, representing an abstract \n_time of day_ such as _10am_ or _3.20pm_ with a precision of milliseconds."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified time period to this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"plus"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _milliseconds_ value.\n\n**Note:** It should be a valid _millisecond_."],"actual":[]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of seconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusSeconds"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified time period from this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\n\nIf this time is after the given time then return zero period."],"actual":[]},"$nm":"periodTo"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return _true_ if it have same type and milliseconds of day."],"actual":[]},"$nm":"equals"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _minutes_ value.\n\n**Note:** It should be a valid _minute_."],"actual":[]},"$nm":"withMinutes"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare two instances of _time of day_."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of minutes from this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"minusMinutes"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of hours to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusHours"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\n\nIf this time is before the given time then return zero period."],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of hours from this time of day \nand returns the resul as new time of day."],"actual":[]},"$nm":"minusHours"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[TimeRange]] between this and given Time."],"actual":[]},"$nm":"rangeTo"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of seconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusSeconds"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of milliseconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusMilliseconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of milliseconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusMilliseconds"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _hours_ value.\n\n**Note:** It should be a valid _hour_."],"actual":[]},"$nm":"withHours"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this Time replacing the _seconds_ value.\n\n**Note:** It should be a valid _second_."],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of minutes to this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"plusMinutes"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond."],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond."],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Times"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _milliseconds of day_ as it enumerable value"],"actual":[]},"$nm":"integerValue"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"}},"$nm":"TimeOfDay"},"GregorianDate":{"super":{"$pk":"ceylon.time.internal","$nm":"AbstractDate"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfEra"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified date period to this date and returns the new [[Date]]."],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified date period from this date and returns the new [[Date]]."],"actual":[]},"$nm":"minus"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days to this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\n\nIf this date is after the given date then return negative period."],"actual":[]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] value."],"actual":[]},"$nm":"at"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior."]},"$nm":"addPeriod"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n"],"actual":[]},"$nm":"minusYears"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the month set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withMonth"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"minusDays"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\n\nIf this date is before the given date then return negative period."],"actual":[]},"$nm":"periodFrom"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"minusWeeks"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateRange]] between this and given Date."],"actual":[]},"$nm":"rangeTo"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks to this date and returns the resulting [[Date]]."],"actual":[]},"$nm":"plusWeeks"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusYears"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the specified year value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withYear"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withDay"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day."],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day."],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this date.\n\nReference: https:\/\/en.wikipedia.org\/wiki\/ISO_8601#Dates"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of era_ as it enumerable value"],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$m":{"normalizeLastWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeLastWeek"},"normalizeFirstWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeFirstWeek"}},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"dayOfEra"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`, if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"}},"$nm":"GregorianDate"},"intersect":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"start"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"end"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"otherStart"},{"$t":{"$nm":"Value"},"$mt":"prm","$nm":"otherEnd"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns if two ranges has intersection."]},"$nm":"intersect"},"gregorianDate":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Year number of the date"]},"$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$hdn":"1","$mt":"prm","$an":{"doc":["Month of the year"]},"$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Day of month"]},"$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian calendar date according to the specified year, month and date values."]},"$nm":"gregorianDate"},"leftPad":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$def":"1","$nm":"padding"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return padded value of the number as a string."]},"$nm":"leftPad"},"gap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns a tuple representing an exclusive gap between two disjoint ranges of ordinal values.\n\nValues in the tuple are returned always in their natural order regardless of their original ordering in the input tuples. \nIf input ranges are overlapping, this function will return an empty value.\n\nExamples:\n\n    assert(gap([1, 2], [5, 6]) == [3, 4]);\n    assert(gap([6, 5], [1, 2]) == [3, 4]);\n    assert(is Empty g = gap([1, 3], [2, 4]));\n"]},"$nm":"gap"},"GregorianDateTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Returns [[Date]] representation of current _date and time_."],"actual":[]},"$nm":"date"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Returns [[Time]] representation of current _date and time_."],"actual":[]},"$nm":"time"}],"satisfies":[{"$pk":"ceylon.time","$nm":"DateTime"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note:** It should be a valid _millisecond_.\n"],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days to this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is after the given [[DateTime]] then return negative period."],"actual":[]},"$nm":"periodTo"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _minutes_ value set to the specified value.\n\n**Note:** It should be a valid _minute_.\n"],"actual":[]},"$nm":"withMinutes"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior."]},"$nm":"addPeriod"},"fromTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millis"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"signal"}]],"$mt":"mthd","$an":{"doc":["Calculates the based in given time, consuming it for each day if necessary."]},"$nm":"fromTime"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withMonth"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is before the given [[DateTime]] then return negative period."],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of hours from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of seconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of milliseconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _seconds_ value set to the specified value.\n\n**Note:** It should be a valid _second_.\n"],"actual":[]},"$nm":"withSeconds"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["[[DateTime]] does not know anything about [[TimeZone]] and it should be supplied to\ncreate a [[Instant]]."],"actual":[]},"$nm":"instant"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of minutes from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusMinutes"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withDay"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified date period to this date and returns the new [[DateTime]]."],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified date period from this date and returns the new [[DateTime]]."],"actual":[]},"$nm":"minus"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of seconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type, date and time."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Comparing [[DateTime]] is based on [[Date]] and [[Time]] comparision."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of minutes from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n"],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of hours from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusDays"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"minusWeeks"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateTimeRange]] between this and given DateTime."],"actual":[]},"$nm":"rangeTo"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks to this date and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusWeeks"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of milliseconds from this _date and time_ and returns the resulting [[DateTime]]."],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _hours_ value set to the specified value.\n\n**Note:** It should be a valid _hour_.\n"],"actual":[]},"$nm":"withHours"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] with the _year_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n"],"actual":[]},"$nm":"withYear"}},"$at":{"successor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n"],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight."],"actual":[]},"$nm":"secondsOfDay"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true` if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["Returns [[Date]] representation of current _date and time_."],"actual":[]},"$nm":"date"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"},"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"doc":["For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n"],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight."],"actual":[]},"$nm":"millisecondsOfDay"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["Returns [[Time]] representation of current _date and time_."],"actual":[]},"$nm":"time"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO-8601 formatted String representation of this _Date and Time of day_.\n\nhttps:\/\/en.wikipedia.org\/wiki\/ISO_8601#Combined_date_and_time_representations"],"actual":[]},"$nm":"string"},"integerValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone."],"actual":[]},"$nm":"integerValue"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date."],"actual":[]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfEra"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO-8601 week number calculation rules."],"actual":[]},"$nm":"weekOfYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date."],"actual":[]},"$nm":"day"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second."],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight."],"actual":[]},"$nm":"minutesOfDay"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"}},"$nm":"GregorianDateTime"}},"ceylon.time.base":{"monday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Monday_ is the day of the week that follows Sunday and preceeds Tuesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"monday"},"ReadableTime":{"$mt":"ifc","$an":{"shared":[],"see":["Time","DateTime","ZoneDateTime"],"doc":["Common interface capable of representing _time of day_."]},"$at":{"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since the beginning of the day."]},"$nm":"millisecondsOfDay"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since last full hour."]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since last minute."]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Hour of day."]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since the beginning of the day."]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since last second."]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since the beginning of the day."]},"$nm":"minutesOfDay"}},"$nm":"ReadableTime"},"Month":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"january"},{"$pk":"ceylon.time.base","$nm":"february"},{"$pk":"ceylon.time.base","$nm":"march"},{"$pk":"ceylon.time.base","$nm":"april"},{"$pk":"ceylon.time.base","$nm":"may"},{"$pk":"ceylon.time.base","$nm":"june"},{"$pk":"ceylon.time.base","$nm":"july"},{"$pk":"ceylon.time.base","$nm":"august"},{"$pk":"ceylon.time.base","$nm":"september"},{"$pk":"ceylon.time.base","$nm":"october"},{"$pk":"ceylon.time.base","$nm":"november"},{"$pk":"ceylon.time.base","$nm":"december"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12"]},"$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A month in a Gregorian or Julian calendar system."]},"$m":{"fisrtDayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns the _day of year_ value for first of this month."]},"$nm":"fisrtDayOfYear"},"minusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months before this month."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months after this month."]},"$nm":"plusMonths"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares ordinal numbers of two instances of `Month`."],"actual":[]},"$nm":"compare"},"add":{"$t":{"$pk":"ceylon.time.base","$nm":"Overflow"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"numberOfMonths"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this month and returns the result of \nas new month value and number of times the operation overflowed."]},"$nm":"add"},"numberOfDays":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns number of days in this month."]},"$nm":"numberOfDays"}},"$c":{"Overflow":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["New month value."]},"$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of years overflowed by calculation."]},"$nm":"years"}],"$mt":"cls","$an":{"shared":[],"doc":["A result of adding or subtracting a month to another amount."]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"doc":["New month value."]},"$nm":"month"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of years overflowed by calculation."]},"$nm":"years"}},"$nm":"Overflow"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12"]},"$nm":"integer"}},"$nm":"Month"},"parseWeekday":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Parses a string into a DayOfWeek."]},"$nm":"parseWeekday"},"DayOfWeek":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"monday"},{"$pk":"ceylon.time.base","$nm":"tuesday"},{"$pk":"ceylon.time.base","$nm":"wednesday"},{"$pk":"ceylon.time.base","$nm":"thursday"},{"$pk":"ceylon.time.base","$nm":"friday"},{"$pk":"ceylon.time.base","$nm":"saturday"},{"$pk":"ceylon.time.base","$nm":"sunday"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Numeric value of the DayOfWeek."]},"$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A day of week, such as 'tuesday'."]},"$m":{"plusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes specified number of days after this DayOfWeek."]},"$nm":"plusDays"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare days of week."],"actual":[]},"$nm":"compare"},"minusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes number of days before this DayOfWeek."]},"$nm":"minusDays"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Numeric value of the DayOfWeek."]},"$nm":"integer"}},"$nm":"DayOfWeek"},"$pkg-shared":"1","UnitOfHour":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfHour"},"march":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["March. The third month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"march"},"ReadableInstant":{"$mt":"ifc","$an":{"shared":[],"see":["Instant"],"doc":["An abstraction for data that can represent an instant of time."]},"$at":{"millisecondsOfEpoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Internal value of an instant as a number of milliseconds \nsince beginning of an _epoch_ (january 1st 1970 UTC)"]},"$nm":"millisecondsOfEpoch"}},"$nm":"ReadableInstant"},"january":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["January. The first month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"january"},"saturday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Saturday_ is the day of the week that follows Friday and preceeds Sunday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"saturday"},"july":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["July. The seventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"july"},"UnitOfMonth":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMonth"},"friday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Friday_ is the day of the week that follows Thursday and preceeds Saturday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"friday"},"milliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _millisecond_ time unit."]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Milliseconds per minute."]},"$nm":"perMinute"},"perSecond":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds per second."]},"$nm":"perSecond"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per hour."]},"$nm":"perHour"}},"$nm":"milliseconds"},"ReadableDuration":{"$mt":"ifc","$an":{"shared":[],"see":["Duration"],"doc":["An abstraction of data representing a specific duration of time.\n\nA duration is a fixed delta of time between two instants \nmeasured in number of milliseconds."]},"$at":{"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds."]},"$nm":"milliseconds"}},"$nm":"ReadableDuration"},"november":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["November. The eleventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"november"},"DateBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for date types."]},"$m":{"minusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks subtracted."]},"$nm":"minusWeeks"},"plusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"plusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks added."]},"$nm":"plusWeeks"},"minusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withMonth":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified month of year."]},"$nm":"withMonth"},"withYear":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified year."]},"$nm":"withYear"},"minusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"withDay":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDay"}},"$nm":"DateBehavior","$st":"Element"},"hours":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _hour_ time unit."]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of hours per day."]},"$nm":"perDay"}},"$nm":"hours"},"thursday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Thursday_ is the day of the week that follows Wednesday and preceeds Friday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"thursday"},"monthOf":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year specified by the input argument.\n\nIf input is an Integer, this method returns a month according to the integer \nvalue of the [[MonthOfYear]] (i.e. 1=[[january]], 2=[[february]], ... 12=[[december]])\nAny invalid values will throw an exception.\n\nIf the imput value is a [[MonthOfYear]], the input value is returned as is."]},"$nm":"monthOf"},"PeriodBehavior":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"}],"$nm":"Self"}],"$an":{"shared":[],"doc":["Common behavior of objects representing a period."]},"$m":{"normalized":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date-time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and nanoseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\n\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."]},"$nm":"normalized"},"withMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."]},"$nm":"withMilliseconds"},"withYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of years."]},"$nm":"withYears"},"minusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"plusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"withDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"daysOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDays"},"withMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"minusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"},"minusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"minusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of months."]},"$nm":"withMonths"},"minusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."]},"$nm":"minusMilliseconds"},"plusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"}},"$nm":"PeriodBehavior","$st":"Self"},"UnitOfYear":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfYear"},"ReadableTimePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of _hours_, _minutes_, _seconds_ and _milliseconds_."]},"$at":{"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of minutes"]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of seconds"]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of hours"]},"$nm":"hours"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of milliseconds"]},"$nm":"milliseconds"}},"$nm":"ReadableTimePeriod"},"DateTimeBehavior":{"of":[{"$nm":"Element"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"}],"$nm":"Element"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"variance":"out","$nm":"DateType"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"variance":"out","$nm":"TimeType"}],"$an":{"shared":[],"doc":["Common behavior of the [[DateTime]] types."]},"$at":{"time":{"$t":{"$nm":"TimeType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Time portion of this [[DateTime]] value."]},"$nm":"time"},"date":{"$t":{"$nm":"DateType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Date portion of this [[DateTime]] value."]},"$nm":"date"}},"$nm":"DateTimeBehavior","$st":"Element"},"december":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["December. The twelveth (last) month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"december"},"february":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["February. The second month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"february"},"sunday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Sunday_ is the day of the week that follows Saturday and preceeds Monday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"sunday"},"ReadablePeriod":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"}],"$mt":"ifc","$an":{"shared":[],"doc":["A Period of time represented as number of _years_, _months_, _days_, \n_hours_, _minutes_, _seconds_ and\/or _milliseconds_."]},"$at":{"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_years_, _months_ and _days_."]},"$nm":"dateOnly"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_hours_, _minutes_, _seconds_ and _milliseconds_."]},"$nm":"timeOnly"}},"$nm":"ReadablePeriod"},"firstDayOfMonth":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"doc":["Table of _day of year_ values for the first day of each month."]},"$nm":"firstDayOfMonth"},"years":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _year_ unit."]},"$at":{"minimum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The minimum supported year for instances of `Date`, -283_457."]},"$nm":"minimum"},"maximum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The maximum supported year for instances of `Date`, 999,999,999."]},"$nm":"maximum"}},"$nm":"years"},"ReadableDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$mt":"ifc","$an":{"shared":[],"doc":["Common interface that can represent particular time of day on a specific date."]},"$nm":"ReadableDateTime"},"UnitOfTime":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"},{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"},{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"},{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Time"]},"$nm":"UnitOfTime"},"june":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["June. The sixth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"june"},"UnitOfDate":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"},{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"},{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Date"]},"$nm":"UnitOfDate"},"weekdays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["List of all available weekdays."]},"$nm":"weekdays"},"ReadableDate":{"$mt":"ifc","$an":{"shared":[],"see":["Date","Time","DateTime","ZoneDateTime"],"doc":["A common interface of all date like objects.\n\nThis interface is common to all data types that\neither partially or fully represent information \nthat can be interpreted as _date_."]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Month of the year value of the date."]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of calendar days since ERA."]},"$nm":"dayOfEra"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the week of the date."]},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The year of the date."]},"$nm":"year"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the year of the date is a leap year."]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of month value of the date."]},"$nm":"day"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the day in year."]},"$nm":"dayOfYear"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of the week."]},"$nm":"dayOfWeek"}},"$nm":"ReadableDate"},"UnitOfMillisecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMillisecond"},"august":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["August. The eighth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"august"},"ReadableDatePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of _days_, _months_ and _years_."]},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of months."]},"$nm":"months"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of days."]},"$nm":"days"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of years."]},"$nm":"years"}},"$nm":"ReadableDatePeriod"},"UnitOfDay":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfDay"},"tuesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Tuesday_ is the day of the week that follows Monday and preceeds Wednesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"tuesday"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"DayOfWeek"}]},"$mt":"prm","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns [[DayOfWeek]] from the input."]},"$nm":"dayOfWeek"},"september":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["September. The nineth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"september"},"may":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["May. The fifth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"may"},"Range":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Element"},{"$nm":"StepBy"}],"$an":{"shared":[],"doc":["An interface to represent a Range between same kinds of _Date_ or _DateTime_ or _Time_."]},"$m":{"overlap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"stepBy":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$ps":[[{"$t":{"$nm":"StepBy"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Define how this Range will get next or previous element while iterating."]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"]},"$nm":"gap"}},"$at":{"to":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."]},"$nm":"duration"},"from":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."]},"$nm":"step"}},"$nm":"Range"},"minutes":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _minute_ time unit."]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of minutes per hour."]},"$nm":"perHour"}},"$nm":"minutes"},"april":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["April. The fourth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"april"},"WeekdayParseError":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["An exception that is thrown when parsing a DayOfWeek fails."]},"$at":{"message":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$nm":"message"}},"$nm":"WeekdayParseError"},"UnitOfSecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfSecond"},"months":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of months."]},"$at":{"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of months per year."]},"$nm":"perYear"},"all":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["Ordered list of all months of Gregorian and Julian calendar system from January to December."]},"$nm":"all"}},"$nm":"months"},"wednesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Wednesday_ is the day of the week that follows Tuesday and preceeds Thursday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"wednesday"},"days":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _day_ unit."]},"$m":{"toMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days from the start of the year to the first of the month."]},"$nm":"toMonth"},"fromMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"millisecondsIn"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns number of days from the number of milliseconds."]},"$nm":"fromMilliseconds"},"perMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days per month."]},"$nm":"perMonth"}},"$at":{"inFourYears":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days in four years."]},"$nm":"inFourYears"},"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of days per normal year."]},"$nm":"perYear"},"ofWeek":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"ofWeek"},"perCentury":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of of per century (100 years)."]},"$nm":"perCentury"},"perFourCenturies":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perFourCenturies"},"perLeapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of days per leap year."]},"$nm":"perLeapYear"},"perCycle":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perCycle"},"perWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days per week (7)."]},"$nm":"perWeek"}},"$nm":"days"},"seconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _second_ time unit."]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of seconds per minute."]},"$nm":"perMinute"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per day."]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per hour."]},"$nm":"perHour"}},"$nm":"seconds"},"october":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["October. The tenth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"october"},"UnitOfMinute":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMinute"},"TimeBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for the types that represent time."]},"$m":{"minusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"withMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"plusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."]},"$nm":"minusMilliseconds"},"minusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"plusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."]},"$nm":"plusMilliseconds"},"withHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours.\n\nResult must be a valid time of day."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"},"plusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"}},"$nm":"TimeBehavior","$st":"Element"}},"ceylon.time.chronology":{"$pkg-shared":"1","LeapYear":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Fields"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"}],"$nm":"Self"},{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["An interface for calendar system that defines leap year rules.\n\n*Note:* This interface is meant to convey a Calendar that has some sort of leap year syntax."]},"$m":{"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns true if the specified year is a leap year according to the leap year rules of the given chronology."]},"$nm":"leapYear"}},"$nm":"LeapYear","$st":"Self"},"unixTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _Unix time_."]},"$m":{"fixedFromTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a _fixed date_ from the _unix time_ value."]},"$nm":"fixedFromTime"},"timeOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _time of day_ in milliseconds for the specified _unix time_ value."]},"$nm":"timeOfDay"},"timeFromFixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return milliseconds elapsed from 1970-01-01 00:00:00."]},"$nm":"timeFromFixed"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Fixed date value of the _Unix time_ epoch (1970-01-01)."]},"$nm":"epoch"}},"$nm":"unixTime"},"gregorian":{"super":{"$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},"$mt":"obj","$an":{"shared":[],"doc":["Represents the implementation of all calculations for\nthe rules based on Gregorian Calendar."]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return the _day of era_ from a given date."],"actual":[]},"$nm":"fixedFrom"},"yearEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the last day of the gregorian year."]},"$nm":"yearEnd"},"dayOfWeekFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _day of week_ value for the specified fixed date value."]},"$nm":"dayOfWeekFrom"},"monthFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Retunrs the month number of the gregorian calendar from the fixed date value."]},"$nm":"monthFrom"},"newYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the first day of the gregorian year."]},"$nm":"newYear"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Assert that specified date has it conjunction of year, month and day as valid gregorian values."],"actual":[]},"$nm":"checkDate"},"yearFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian year number of the fixed date value."]},"$nm":"yearFrom"},"dayFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns day of month value of the fixed date value."]},"$nm":"dayFrom"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gregorian leap year rule states that every fourth year\nis a leap year except cenury years not divisible by 400."],"actual":[]},"$nm":"leapYear"},"dateFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts the fixed date value to an equivalent gregorian date."],"actual":[]},"$nm":"dateFrom"},"fixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"doc":["Return the _day of era_ from a given date."]},"$nm":"fixed"}},"$at":{"december":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"december"},"november":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"november"},"may":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"may"},"march":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"march"},"april":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"april"},"february":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"february"},"june":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"june"},"january":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"january"},"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Epoch of the gregorian calendar."],"actual":[]},"$nm":"epoch"},"august":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"august"},"july":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"july"},"october":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"october"},"september":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"september"}},"$nm":"gregorian"},"Chronology":{"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["Generic base interface of a _calendar system_.\nChronology serves as a computational backend to \na Date representation of the same calendar system."]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$nm":"Fields"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts date tuple of this calendar system to an equivalent _fixed date_\nrepresentation of the day of era."]},"$nm":"fixedFrom"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$nm":"Fields"},"$mt":"prm","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Validate the given date."]},"$nm":"checkDate"},"dateFrom":{"$t":{"$nm":"Fields"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts a _fixed day_ number to a calendar date tuple."]},"$nm":"dateFrom"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Epoch is the offset of the _fixed date_ day number that defines \nthe beginning of the calendar."]},"$nm":"epoch"}},"$nm":"Chronology"},"rd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"t"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts _Rata Die_ day number to a fixed date value.\n\n_Rata Die_ is fixed at Monday, January 1st, 1. (Gregorian)."]},"$nm":"rd"},"GregorianCalendar":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.chronology","$nm":"gregorian"}],"satisfies":[{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"LeapYear"}],"$mt":"cls","$an":{"shared":[],"abstract":[],"doc":["Base class for a gregorian calendar chronology."]},"$nm":"GregorianCalendar"}},"ceylon.time":{"Period":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of years."],"actual":[]},"$nm":"years"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of months."],"actual":[]},"$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of days."],"actual":[]},"$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of hours."],"actual":[]},"$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of minutes."],"actual":[]},"$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of seconds."],"actual":[]},"$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The number of milliseconds."],"actual":[]},"$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Summable"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Scalable"}],"$mt":"cls","$an":{"shared":[],"doc":["An immutable period consisting of the ISO-8601 _years_, _months_, _days_, _hours_,\n_minutes_, _seconds_ and _milliseconds_, such as '3 Months, 4 Days and 7 Hours'.\n\nA period is a human-scale description of an amount of time.\n"]},"$m":{"scale":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"scale"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Each field will be scalable independently, and the result will _not_ be normalized"],"actual":[]},"$nm":"scale"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days added."],"actual":[]},"$nm":"plusDays"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of minutes."],"actual":[]},"$nm":"withMinutes"},"withDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of days."],"actual":[]},"$nm":"withDays"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds added."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of seconds."],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes added."],"actual":[]},"$nm":"plusMinutes"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a new period that is a sum of the two periods."],"actual":[]},"$nm":"plus"},"normalized":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date\/time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and milliseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."],"actual":[]},"$nm":"normalized"},"withYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of years."],"actual":[]},"$nm":"withYears"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is equal to another period."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return the result of comparing this period to the _other_ period."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years subtracted."],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours added."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days subtracted."],"actual":[]},"$nm":"minusDays"},"withMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of months."],"actual":[]},"$nm":"withMonths"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months subtracted."],"actual":[]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months added."],"actual":[]},"$nm":"plusMonths"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of milliseconds added."],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years added."],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of hours."],"actual":[]},"$nm":"withHours"},"isZero":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is zero-length."]},"$nm":"isZero"}},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of months."],"actual":[]},"$nm":"months"},"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a date only view of this period."],"actual":[]},"$nm":"dateOnly"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of minutes."],"actual":[]},"$nm":"minutes"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days."],"actual":[]},"$nm":"days"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of seconds."],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of hours."],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the ISO-8601 formatted string for this period."],"actual":[]},"$nm":"string"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a time only view of this period."],"actual":[]},"$nm":"timeOnly"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of years."],"actual":[]},"$nm":"years"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of milliseconds."],"actual":[]},"$nm":"milliseconds"}},"$nm":"Period"},"DateRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"see":["Range"],"doc":["Implementation of [[Range]] and allows easy iteration between [[Date]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateRange]] types\n* Recover the gap between [[DateRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Date"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"DateRange"},"Instant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z."],"actual":[]},"$nm":"millisecondsOfEpoch"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableInstant"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Instant"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"shared":[],"doc":["A specific instant of time on a continuous time-scale.\n\nAn instant represents a single point in time irrespective of \nany time-zone offsets or geographical locations."]},"$m":{"durationFrom":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from other instant to this instant."]},"$nm":"durationFrom"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a period to this instant."]},"$nm":"plus"},"durationTo":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from this instant to the other instant."]},"$nm":"durationTo"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _time of day_ for this instant."]},"$nm":"time"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts a period to this instant."]},"$nm":"minus"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _true_ if given value is same type and milliseconds of epoch."],"actual":[]},"$nm":"equals"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[DateTime]] value."]},"$nm":"dateTime"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares this instant to the _other_ instant."],"actual":[]},"$nm":"compare"},"zoneDateTime":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns ZoneDateTime value for this instant."]},"$nm":"zoneDateTime"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[Date]] value."]},"$nm":"date"}},"$at":{"millisecondsOfEpoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z."],"actual":[]},"$nm":"millisecondsOfEpoch"}},"$nm":"Instant"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day of month values."]},"$nm":"dateTime"},"FixedMilliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"fixedMilliseconds"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the instant from the fixed milliseconds."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed milliseconds."],"actual":[]},"$nm":"milliseconds"}},"$at":{"fixedMilliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"fixedMilliseconds"}},"$nm":"FixedMilliseconds"},"today":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$def":"1","$nm":"clock"},{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns current date according to the provided system clock and time zone."]},"$nm":"today"},"Clock":{"$mt":"ifc","$an":{"shared":[],"doc":["A clock providing access to the current instant, date and time using a time-zone.\n\nInstances of this class are used to find the current instant, which can be\ninterpreted using the stored time-zone to find the current date and time.\nAs such, a clock can be used instead of `process.milliseconds`.\n\nThe primary purpose of this abstraction is to allow alternate clocks to be\nplugged in as and when required. Applications use an object to obtain the\ncurrent time rather than a static method. This can simplify testing.\n\nApplications should _avoid_ using the top level objects directly.\nInstead, they should pass a [[Clock]] into any method that requires it.\nA dependency injection framework is one way to achieve this.\n\nThis approach allows an alternate clock, such as [[fixedTime]] to be used during testing.\n\nThe [[systemTime]] top level factory method offers clocks based on the best available \nsystem clock, such as `process.milliseconds`."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current instant of the clock."]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current millisecond instant of the clock."]},"$nm":"milliseconds"}},"$nm":"Clock"},"zero":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"doc":["A period of zero length."]},"$nm":"zero"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day of month values."]},"$nm":"date"},"offsetTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an implementation of a clock that always returns a \nconstant offset from the value of the provided clock."]},"$nm":"offsetTime"},"fixedTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Instant"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets a clock that always returns the same instant in the UTC time-zone."]},"$nm":"fixedTime"},"$pkg-shared":"1","TimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"see":["Range"],"doc":["Implementation of [[Range]] and allows easy iteration between [[Time]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[TimeRange]] types\n* Recover the gap between [[TimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfTime]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Time"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"TimeRange"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Hours of the day (0..23)."]},"$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"doc":["Minutes of the hour (0..59)."]},"$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"doc":["Seconds of the minute (0..59)."]},"$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"doc":["Milliseconds of the second (0..999)."]},"$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Creates new instance of [[Time]]."]},"$nm":"time"},"systemTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"obj","$an":{"shared":[],"doc":["Gets a clock that obtains the current instant using the best available system clock."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Return current instant from system time."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Return number of milliseconds from system time."],"actual":[]},"$nm":"milliseconds"}},"$nm":"systemTime"},"Time":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["Time of day like _6pm_ or _8.30am_.\n\nThis type contains only information about an abstract _time of day_ without \nreferencing any date or timezone.\n\nYou use Time to specify something that has to occur on a specific time of day\nlike _\"lunch hour starts at 1pm\"_ or _\"shop opens at 10am\"_.\n"]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[TimeRange]] between this and given Time."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is after the given time then return zero period."]},"$nm":"periodTo"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is before the given time then return zero period."]},"$nm":"periodFrom"}},"$nm":"Time"},"now":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time","$nm":"Clock"}]},"$mt":"prm","$def":"1","$nm":"clock"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Obtains the current instant from the system clock."]},"$nm":"now"},"DateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"DateTimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Enumerable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An abstract moment in time (like _4pm, October 21. 2012_).\n\nDateTime does not contain a time zone information, so You can not use it to record or \nschedule events."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date and time."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date and time."]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateTimeRange]] between this and given [[DateTime]]."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\n\nIf this DateTime is after the given DateTime then return zero period."]},"$nm":"periodTo"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns an instant from this [[DateTime]]."]},"$nm":"instant"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\n\nIf this date is before the given date then return zero period."]},"$nm":"periodFrom"}},"$nm":"DateTime"},"Date":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Enumerable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An interface for date objects in the ISO-8601 calendar system.\n\nA date is often viewed as triple of year-month-day values. \nThis interface also defines access to other date fields such as \nday-of-year, day-of-week and week-of-year."]},"$m":{"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date."]},"$nm":"minus"},"rangeTo":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateRange]] between this and given [[Date]]."]},"$nm":"rangeTo"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\n\nIf this date is after the given date then return zero period."]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns new DateTime value based on this date and a specified time."]},"$nm":"at"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\n\nIf this date is before the given date then return zero period."]},"$nm":"periodFrom"}},"$nm":"Date"},"Duration":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Number of milliseconds of this duration."],"actual":[]},"$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDuration"},{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Duration"}],"$pk":"ceylon.language","$nm":"Scalable"}],"$mt":"cls","$an":{"shared":[],"doc":["Duration specifies a discreet amount of milliseconds between two instances of time."]},"$m":{"scale":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"scale"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a new [[Duration]] with it´s milliseconds scaled."],"actual":[]},"$nm":"scale"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Duration is considered equal when type and milliseconds are the same."],"actual":[]},"$nm":"equals"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the string representation of this duration."],"actual":[]},"$nm":"string"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns this duration as a period of milliseconds."]},"$nm":"period"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds of this duration."],"actual":[]},"$nm":"milliseconds"}},"$nm":"Duration"},"DateTimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[],"doc":["Implementation of [[Range]] and allows easy iteration between [[DateTime]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateTimeRange]] types\n* Recover the gap between [[DateTimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] or [[UnitOfTime]] cases\n"]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range."],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTime"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]"],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_."],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$def":"1","$nm":"jump"}]],"$mt":"mthd","$an":{"doc":["The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months."]},"$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"prm","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"},"$mt":"prm","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)"],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element."],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds."],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range."],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day."],"actual":[]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator."],"actual":[]},"$nm":"step"}},"$nm":"DateTimeRange"},"FixedInstant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$nm":"fixedInstant"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed instant."],"actual":[]},"$nm":"instant"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns milliseconds from the fixed instant."],"actual":[]},"$nm":"milliseconds"}},"$at":{"fixedInstant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"attr","$nm":"fixedInstant"}},"$nm":"FixedInstant"},"OffsetClock":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["An implementation of a [[Clock]] that returns tilem with a constant \noffset from the provided clock."]},"$m":{"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"milliseconds"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"instant"}},"$at":{"baseClock":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"attr","$nm":"baseClock"},"offset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$nm":"offset"}},"$nm":"OffsetClock"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
$$$cl1.$addmod$($$$cl1,'ceylon.language/0.6');
var $$$ct793=require('ceylon/time/0.6/ceylon.time-0.6');
$$$cl1.$addmod$($$$ct793,'ceylon.time/0.6');
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
function years$794$base(){
    var $$years=new years$794$base.$$;
    UnitOfYear$base($$years);
    var minimum=(-(283456));
    $$$cl1.defineAttr($$years,'minimum',function(){return minimum;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$794$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The minimum supported year for instances of `Date`, -283_457.",61)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','minimum']};});
    $$years.$prop$getMinimum={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$794$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The minimum supported year for instances of `Date`, -283_457.",61)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','minimum']};}};
    $$years.$prop$getMinimum.get=function(){return minimum};
    var maximum=(287396);
    $$$cl1.defineAttr($$years,'maximum',function(){return maximum;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$794$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The maximum supported year for instances of `Date`, 999,999,999.",64)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','maximum']};});
    $$years.$prop$getMaximum={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:years$794$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The maximum supported year for instances of `Date`, 999,999,999.",64)),$$$cl1.shared()];},d:['ceylon.time.base','years','$at','maximum']};}};
    $$years.$prop$getMaximum.get=function(){return maximum};
    return $$years;
}
function $init$years$794$base(){
    if (years$794$base.$$===undefined){
        $$$cl1.initTypeProto(years$794$base,'ceylon.time.base::years',$$$cl1.Basic,$init$UnitOfYear$base());
    }
    return years$794$base;
}
exports.$init$years$794$base=$init$years$794$base;
$init$years$794$base();
var years$795$base=years$794$base();
var getYears$base=function(){
    return years$795$base;
}
exports.getYears$base=getYears$base;
getYears$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:years$794$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of _year_ unit.",49)),$$$cl1.shared()];},d:['ceylon.time.base','years']};};
$prop$getYears$base={get:getYears$base,$$metamodel$$:getYears$base.$$metamodel$$};
exports.$prop$getYears$base=$prop$getYears$base;
function months$796$base(){
    var $$months=new months$796$base.$$;
    UnitOfMonth$base($$months);
    var all=$$$cl1.Tuple(getJanuary$base(),$$$cl1.Tuple(getFebruary$base(),$$$cl1.Tuple(getMarch$base(),$$$cl1.Tuple(getApril$base(),$$$cl1.Tuple(getMay$base(),$$$cl1.Tuple(getJune$base(),$$$cl1.Tuple(getJuly$base(),$$$cl1.Tuple(getAugust$base(),$$$cl1.Tuple(getSeptember$base(),$$$cl1.Tuple(getOctober$base(),$$$cl1.Tuple(getNovember$base(),$$$cl1.Tuple(getDecember$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}});
    $$$cl1.defineAttr($$months,'all',function(){return all;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Month$base}}},$cont:months$796$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordered list of all months of Gregorian and Julian calendar system from January to December.",92)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','all']};});
    $$months.$prop$getAll={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:Month$base}}},$cont:months$796$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordered list of all months of Gregorian and Julian calendar system from January to December.",92)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','all']};}};
    $$months.$prop$getAll.get=function(){return all};
    var perYear=$$months.all.size;
    $$$cl1.defineAttr($$months,'perYear',function(){return perYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:months$796$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of months per year.",26)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','perYear']};});
    $$months.$prop$getPerYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:months$796$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of months per year.",26)),$$$cl1.shared()];},d:['ceylon.time.base','months','$at','perYear']};}};
    $$months.$prop$getPerYear.get=function(){return perYear};
    return $$months;
}
function $init$months$796$base(){
    if (months$796$base.$$===undefined){
        $$$cl1.initTypeProto(months$796$base,'ceylon.time.base::months',$$$cl1.Basic,$init$UnitOfMonth$base());
    }
    return months$796$base;
}
exports.$init$months$796$base=$init$months$796$base;
$init$months$796$base();
var months$797$base=months$796$base();
var getMonths$base=function(){
    return months$797$base;
}
exports.getMonths$base=getMonths$base;
getMonths$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:months$796$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of months.",44)),$$$cl1.shared()];},d:['ceylon.time.base','months']};};
$prop$getMonths$base={get:getMonths$base,$$metamodel$$:getMonths$base.$$metamodel$$};
exports.$prop$getMonths$base=$prop$getMonths$base;
function days$798$base(){
    var $$days=new days$798$base.$$;
    UnitOfDay$base($$days);
    $$$cl1.defineAttr($$days,'perYear',function(){return (365);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per normal year.",31)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perYear']};});
    $$days.$prop$getPerYear.get=function(){return perYear};
    $$$cl1.defineAttr($$days,'perLeapYear',function(){return (366);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per leap year.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perLeapYear']};});
    $$days.$prop$getPerLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per leap year.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perLeapYear']};}};
    $$days.$prop$getPerLeapYear.get=function(){return perLeapYear};
    $$days.perMonth$defs$leapYear=function(month$799,leapYear$800){return false;};
    var perMonth=function (month$799,leapYear$800){
        if(leapYear$800===undefined){leapYear$800=$$days.perMonth$defs$leapYear(month$799,leapYear$800);}
        return month$799.numberOfDays(leapYear$800);
    };
    perMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of days per month.",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','perMonth']};};
    $$days.perMonth=perMonth;
    $$days.toMonth$defs$leapYear=function(month$801,leapYear$802){return false;};
    var toMonth=function (month$801,leapYear$802){
        if(leapYear$802===undefined){leapYear$802=$$days.toMonth$defs$leapYear(month$801,leapYear$802);}
        return month$801.fisrtDayOfYear(leapYear$802).minus((1));
    };
    toMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the number of days from the start of the year to the first of the month.",80)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','toMonth']};};
    $$days.toMonth=toMonth;
    var ofWeek=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});
    $$$cl1.defineAttr($$days,'ofWeek',function(){return ofWeek;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$cont:days$798$base,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','days','$at','ofWeek']};});
    $$days.$prop$getOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$cont:days$798$base,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.base','days','$at','ofWeek']};}};
    $$days.$prop$getOfWeek.get=function(){return ofWeek};
    var perWeek=$$days.ofWeek.size;
    $$$cl1.defineAttr($$days,'perWeek',function(){return perWeek;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per week (7).",28)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perWeek']};});
    $$days.$prop$getPerWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days per week (7).",28)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perWeek']};}};
    $$days.$prop$getPerWeek.get=function(){return perWeek};
    var perCycle=(146097);
    $$$cl1.defineAttr($$days,'perCycle',function(){return perCycle;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCycle']};});
    $$days.$prop$getPerCycle={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCycle']};}};
    $$days.$prop$getPerCycle.get=function(){return perCycle};
    $$$cl1.defineAttr($$days,'perFourCenturies',function(){return $$days.perCycle;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perFourCenturies']};});
    $$days.$prop$getPerFourCenturies={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days in a 400 year cycle.",39)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perFourCenturies']};}};
    $$days.$prop$getPerFourCenturies.get=function(){return perFourCenturies};
    var inFourYears=(1461);
    $$$cl1.defineAttr($$days,'inFourYears',function(){return inFourYears;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days in four years.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','inFourYears']};});
    $$days.$prop$getInFourYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of days in four years.",29)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','inFourYears']};}};
    $$days.$prop$getInFourYears.get=function(){return inFourYears};
    var perCentury=(36524);
    $$$cl1.defineAttr($$days,'perCentury',function(){return perCentury;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of of per century (100 years).",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCentury']};});
    $$days.$prop$getPerCentury={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of of per century (100 years).",37)),$$$cl1.shared()];},d:['ceylon.time.base','days','$at','perCentury']};}};
    $$days.$prop$getPerCentury.get=function(){return perCentury};
    $$days.fromMilliseconds$defs$millisecondsIn=function(millisecondsIn$803){return (0);};
    var fromMilliseconds=function (millisecondsIn$803){
        if(millisecondsIn$803===undefined){millisecondsIn$803=$$days.fromMilliseconds$defs$millisecondsIn(millisecondsIn$803);}
        return $$$ct793.floorDiv$internal$math(millisecondsIn$803,getMilliseconds$base().perDay);
    };
    fromMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'millisecondsIn',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:days$798$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns number of days from the number of milliseconds.",55)),$$$cl1.shared()];},d:['ceylon.time.base','days','$m','fromMilliseconds']};};
    $$days.fromMilliseconds=fromMilliseconds;
    return $$days;
}
function $init$days$798$base(){
    if (days$798$base.$$===undefined){
        $$$cl1.initTypeProto(days$798$base,'ceylon.time.base::days',$$$cl1.Basic,$init$UnitOfDay$base());
    }
    return days$798$base;
}
exports.$init$days$798$base=$init$days$798$base;
$init$days$798$base();
var days$804$base=days$798$base();
var getDays$base=function(){
    return days$804$base;
}
exports.getDays$base=getDays$base;
getDays$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:days$798$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties and constraints of _day_ unit.",48)),$$$cl1.shared()];},d:['ceylon.time.base','days']};};
$prop$getDays$base={get:getDays$base,$$metamodel$$:getDays$base.$$metamodel$$};
exports.$prop$getDays$base=$prop$getDays$base;
function hours$805$base(){
    var $$hours=new hours$805$base.$$;
    UnitOfHour$base($$hours);
    var perDay=(24);
    $$$cl1.defineAttr($$hours,'perDay',function(){return perDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:hours$805$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of hours per day.",24)),$$$cl1.shared()];},d:['ceylon.time.base','hours','$at','perDay']};});
    $$hours.$prop$getPerDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:hours$805$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of hours per day.",24)),$$$cl1.shared()];},d:['ceylon.time.base','hours','$at','perDay']};}};
    $$hours.$prop$getPerDay.get=function(){return perDay};
    return $$hours;
}
function $init$hours$805$base(){
    if (hours$805$base.$$===undefined){
        $$$cl1.initTypeProto(hours$805$base,'ceylon.time.base::hours',$$$cl1.Basic,$init$UnitOfHour$base());
    }
    return hours$805$base;
}
exports.$init$hours$805$base=$init$hours$805$base;
$init$hours$805$base();
var hours$806$base=hours$805$base();
var getHours$base=function(){
    return hours$806$base;
}
exports.getHours$base=getHours$base;
getHours$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:hours$805$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _hour_ time unit.",38)),$$$cl1.shared()];},d:['ceylon.time.base','hours']};};
$prop$getHours$base={get:getHours$base,$$metamodel$$:getHours$base.$$metamodel$$};
exports.$prop$getHours$base=$prop$getHours$base;
function minutes$807$base(){
    var $$minutes=new minutes$807$base.$$;
    UnitOfMinute$base($$minutes);
    var perHour=(60);
    $$$cl1.defineAttr($$minutes,'perHour',function(){return perHour;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perHour']};});
    $$minutes.$prop$getPerHour={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perHour']};}};
    $$minutes.$prop$getPerHour.get=function(){return perHour};
    $$$cl1.defineAttr($$minutes,'perDay',function(){return getHours$base().perDay.times(getMinutes$base().perHour);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:minutes$807$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes per day.",26)),$$$cl1.shared()];},d:['ceylon.time.base','minutes','$at','perDay']};});
    $$minutes.$prop$getPerDay.get=function(){return perDay};
    return $$minutes;
}
function $init$minutes$807$base(){
    if (minutes$807$base.$$===undefined){
        $$$cl1.initTypeProto(minutes$807$base,'ceylon.time.base::minutes',$$$cl1.Basic,$init$UnitOfMinute$base());
    }
    return minutes$807$base;
}
exports.$init$minutes$807$base=$init$minutes$807$base;
$init$minutes$807$base();
var minutes$808$base=minutes$807$base();
var getMinutes$base=function(){
    return minutes$808$base;
}
exports.getMinutes$base=getMinutes$base;
getMinutes$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:minutes$807$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _minute_ time unit.",40)),$$$cl1.shared()];},d:['ceylon.time.base','minutes']};};
$prop$getMinutes$base={get:getMinutes$base,$$metamodel$$:getMinutes$base.$$metamodel$$};
exports.$prop$getMinutes$base=$prop$getMinutes$base;
function seconds$809$base(){
    var $$seconds=new seconds$809$base.$$;
    UnitOfSecond$base($$seconds);
    var perMinute=(60);
    $$$cl1.defineAttr($$seconds,'perMinute',function(){return perMinute;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$809$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per minute.",29)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perMinute']};});
    $$seconds.$prop$getPerMinute={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$809$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per minute.",29)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perMinute']};}};
    $$seconds.$prop$getPerMinute.get=function(){return perMinute};
    $$$cl1.defineAttr($$seconds,'perHour',function(){return getMinutes$base().perHour.times(getSeconds$base().perMinute);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$809$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per hour.",27)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perHour']};});
    $$seconds.$prop$getPerHour.get=function(){return perHour};
    $$$cl1.defineAttr($$seconds,'perDay',function(){return getHours$base().perDay.times(getSeconds$base().perHour);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:seconds$809$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds per day.",26)),$$$cl1.shared()];},d:['ceylon.time.base','seconds','$at','perDay']};});
    $$seconds.$prop$getPerDay.get=function(){return perDay};
    return $$seconds;
}
function $init$seconds$809$base(){
    if (seconds$809$base.$$===undefined){
        $$$cl1.initTypeProto(seconds$809$base,'ceylon.time.base::seconds',$$$cl1.Basic,$init$UnitOfSecond$base());
    }
    return seconds$809$base;
}
exports.$init$seconds$809$base=$init$seconds$809$base;
$init$seconds$809$base();
var seconds$810$base=seconds$809$base();
var getSeconds$base=function(){
    return seconds$810$base;
}
exports.getSeconds$base=getSeconds$base;
getSeconds$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:seconds$809$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _second_ time unit.",40)),$$$cl1.shared()];},d:['ceylon.time.base','seconds']};};
$prop$getSeconds$base={get:getSeconds$base,$$metamodel$$:getSeconds$base.$$metamodel$$};
exports.$prop$getSeconds$base=$prop$getSeconds$base;
function milliseconds$811$base(){
    var $$milliseconds=new milliseconds$811$base.$$;
    UnitOfMillisecond$base($$milliseconds);
    var perSecond=(1000);
    $$$cl1.defineAttr($$milliseconds,'perSecond',function(){return perSecond;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per second.",34)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perSecond']};});
    $$milliseconds.$prop$getPerSecond={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per second.",34)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perSecond']};}};
    $$milliseconds.$prop$getPerSecond.get=function(){return perSecond};
    $$$cl1.defineAttr($$milliseconds,'perMinute',function(){return getSeconds$base().perMinute.times(getMilliseconds$base().perSecond);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Milliseconds per minute.",24)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perMinute']};});
    $$milliseconds.$prop$getPerMinute.get=function(){return perMinute};
    $$$cl1.defineAttr($$milliseconds,'perHour',function(){return getMinutes$base().perHour.times(getMilliseconds$base().perMinute);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per hour.",32)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perHour']};});
    $$milliseconds.$prop$getPerHour.get=function(){return perHour};
    $$$cl1.defineAttr($$milliseconds,'perDay',function(){return getHours$base().perDay.times(getMilliseconds$base().perHour);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:milliseconds$811$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds per day.",31)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds','$at','perDay']};});
    $$milliseconds.$prop$getPerDay.get=function(){return perDay};
    return $$milliseconds;
}
function $init$milliseconds$811$base(){
    if (milliseconds$811$base.$$===undefined){
        $$$cl1.initTypeProto(milliseconds$811$base,'ceylon.time.base::milliseconds',$$$cl1.Basic,$init$UnitOfMillisecond$base());
    }
    return milliseconds$811$base;
}
exports.$init$milliseconds$811$base=$init$milliseconds$811$base;
$init$milliseconds$811$base();
var milliseconds$812$base=milliseconds$811$base();
var getMilliseconds$base=function(){
    return milliseconds$812$base;
}
exports.getMilliseconds$base=getMilliseconds$base;
getMilliseconds$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:milliseconds$811$base},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _millisecond_ time unit.",45)),$$$cl1.shared()];},d:['ceylon.time.base','milliseconds']};};
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
    }
    return DateBehavior$base;
}
exports.$init$DateBehavior$base=$init$DateBehavior$base;
$init$DateBehavior$base();
function DateTimeBehavior$base($$targs$$,$$dateTimeBehavior){
    DateBehavior$base($$dateTimeBehavior.$$targs$$===undefined?$$targs$$:{Element:$$dateTimeBehavior.$$targs$$.Element},$$dateTimeBehavior);
    TimeBehavior$base($$dateTimeBehavior.$$targs$$===undefined?$$targs$$:{Element:$$dateTimeBehavior.$$targs$$.Element},$$dateTimeBehavior);
    $$$cl1.set_type_args($$dateTimeBehavior,$$targs$$);
    $$dateTimeBehavior.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'TimeType',$cont:DateTimeBehavior$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns Time portion of this [[DateTime]] value.",48)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','DateTimeBehavior','$at','time']};}};
    $$dateTimeBehavior.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'DateType',$cont:DateTimeBehavior$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns Date portion of this [[DateTime]] value.",48)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','DateTimeBehavior','$at','date']};}};
}
DateTimeBehavior$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableDateTime$base}]},DateType:{'var':'out','satisfies':[{t:ReadableDate$base}]},TimeType:{'var':'out','satisfies':[{t:ReadableTime$base}]}},satisfies:[{t:DateBehavior$base,a:{Element:'Element'}},{t:TimeBehavior$base,a:{Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behavior of the [[DateTime]] types.",42)),$$$cl1.shared()];},d:['ceylon.time.base','DateTimeBehavior']};};
exports.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
    if (DateTimeBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
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
    var integer=integer;
    $$$cl1.defineAttr($$dayOfWeek,'integer',function(){return integer;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Numeric value of the DayOfWeek.",31)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$at','integer']};});
    $$dayOfWeek.$prop$getInteger={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Numeric value of the DayOfWeek.",31)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$at','integer']};}};
    $$dayOfWeek.$prop$getInteger.get=function(){return integer};
    function plusDays(number$813){
        var wd$814=$$dayOfWeek.integer.plus(number$813).remainder((7));
        $prop$getWd$814={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.base','DayOfWeek','$m','plusDays','$at','wd']};}};
        $prop$getWd$814.get=function(){return wd$814};
        //assert at DayOfWeek.ceylon (12:8-12:42)
        var dow$815;
        if (!((dow$815=getWeekdays$base().get(wd$814))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists dow = weekdays[wd]\' at DayOfWeek.ceylon (12:15-12:41)"),'12:8-12:42','DayOfWeek.ceylon'); }
        return dow$815;
    }
    $$dayOfWeek.plusDays=plusDays;
    plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a day of week that comes specified number of days after this DayOfWeek.",79)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$m','plusDays']};};
    var minusDays=function (number$816){
        return $$dayOfWeek.plusDays((-number$816));
    };
    minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a day of week that comes number of days before this DayOfWeek.",70)),$$$cl1.shared()];},d:['ceylon.time.base','DayOfWeek','$m','minusDays']};};
    $$dayOfWeek.minusDays=minusDays;
    var compare=function (other$817){
        return $$dayOfWeek.integer.compare(other$817.integer);
    };
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:DayOfWeek$base},$an:function(){return[];}}],$cont:DayOfWeek$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Compare days of week.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','DayOfWeek','$m','compare']};};
    $$dayOfWeek.compare=compare;
    return $$dayOfWeek;
}
DayOfWeek$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:DayOfWeek$base}}},{t:$$$cl1.Comparable,a:{Other:{t:DayOfWeek$base}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A day of week, such as \'tuesday\'.",33)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.base','DayOfWeek']};};
exports.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
    if (DayOfWeek$base.$$===undefined){
        $$$cl1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return DayOfWeek$base;
}
exports.$init$DayOfWeek$base=$init$DayOfWeek$base;
$init$DayOfWeek$base();
var weekdays$818$base=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});
var getWeekdays$base=function(){return weekdays$818$base;};
exports.getWeekdays$base=getWeekdays$base;
var $prop$getWeekdays$base={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:DayOfWeek$base}}},$an:function(){return[$$$cl1.doc($$$cl1.String("List of all available weekdays.",31)),$$$cl1.shared()];},d:['ceylon.time.base','weekdays']};}};
exports.$prop$getWeekdays$base=$prop$getWeekdays$base;
$prop$getWeekdays$base.get=getWeekdays$base;
getWeekdays$base.$$metamodel$$=$prop$getWeekdays$base.$$metamodel$$;
function dayOfWeek$base(dayOfWeek$819){
    
    var case$820=dayOfWeek$819;
    if ($$$cl1.isOfType(dayOfWeek$819,{t:DayOfWeek$base})) {
        return case$820;
    }else if ($$$cl1.isOfType(dayOfWeek$819,{t:$$$cl1.Integer})) {
        //assert at DayOfWeek.ceylon (32:8-32:48)
        if (!((((0).compare(case$820)!==$$$cl1.getLarger())&&case$820.compare((7)).equals($$$cl1.getSmaller())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'0 <= dayOfWeek && dayOfWeek < 7\' at DayOfWeek.ceylon (32:15-32:47)"),'32:8-32:48','DayOfWeek.ceylon'); }
        //assert at DayOfWeek.ceylon (33:8-33:59)
        var dow$821;
        if (!((dow$821=getWeekdays$base().get(case$820))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists DayOfWeek dow = weekdays[dayOfWeek]\' at DayOfWeek.ceylon (33:15-33:58)"),'33:8-33:59','DayOfWeek.ceylon'); }
        return dow$821;
    }
}
exports.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:DayOfWeek$base}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[DayOfWeek]] from the input.",37)),$$$cl1.shared()];},d:['ceylon.time.base','dayOfWeek']};};
function WeekdayParseError$base(message$822, $$weekdayParseError){
    $init$WeekdayParseError$base();
    if ($$weekdayParseError===undefined)$$weekdayParseError=new WeekdayParseError$base.$$;
    $$weekdayParseError.message$822_=message$822;
    $$$cl1.Exception(message$822,undefined,$$weekdayParseError);
    $$$cl1.defineAttr($$weekdayParseError,'message$822',function(){return this.message$822_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:WeekdayParseError$base,d:['ceylon.time.base','WeekdayParseError','$at','message']};});
    return $$weekdayParseError;
}
WeekdayParseError$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An exception that is thrown when parsing a DayOfWeek fails.",59)),$$$cl1.shared()];},d:['ceylon.time.base','WeekdayParseError']};};
exports.WeekdayParseError$base=WeekdayParseError$base;
function $init$WeekdayParseError$base(){
    if (WeekdayParseError$base.$$===undefined){
        $$$cl1.initTypeProto(WeekdayParseError$base,'ceylon.time.base::WeekdayParseError',$$$cl1.Exception);
    }
    return WeekdayParseError$base;
}
exports.$init$WeekdayParseError$base=$init$WeekdayParseError$base;
$init$WeekdayParseError$base();
function parseWeekday$base(dayOfWeek$823){
    var wd$824=dayOfWeek$823.lowercased;
    $prop$getWd$824={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.time.base','parseWeekday','$at','wd']};}};
    $prop$getWd$824.get=function(){return wd$824};
    var it$825 = getWeekdays$base().iterator();
    var dow$826;while ((dow$826=it$825.next())!==$$$cl1.getFinished()){
        if(dow$826.string.lowercased.equals(wd$824)){
            return dow$826;
        }
    }
    throw $$$cl1.wrapexc(WeekdayParseError$base($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unrecognized DayOfWeek: ",24),dayOfWeek$823.string,$$$cl1.String(" .",2)]).string),'51:4-51:71','ceylon/time/base/DayOfWeek.ceylon');
}
exports.parseWeekday$base=parseWeekday$base;
parseWeekday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Parses a string into a DayOfWeek.",33)),$$$cl1.shared()];},d:['ceylon.time.base','parseWeekday']};};
function sunday$827$base(){
    var $$sunday=new sunday$827$base.$$;
    DayOfWeek$base((0),$$sunday);
    var string=$$$cl1.String("sunday",6);
    $$$cl1.defineAttr($$sunday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','string']};});
    $$sunday.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','string']};}};
    $$sunday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$sunday,'predecessor',function(){return getSaturday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','predecessor']};});
    $$sunday.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','predecessor']};}};
    $$sunday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$sunday,'successor',function(){return getMonday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','successor']};});
    $$sunday.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:sunday$827$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','sunday','$at','successor']};}};
    $$sunday.$prop$getSuccessor.get=function(){return successor};
    return $$sunday;
}
function $init$sunday$827$base(){
    if (sunday$827$base.$$===undefined){
        $$$cl1.initTypeProto(sunday$827$base,'ceylon.time.base::sunday',DayOfWeek$base);
    }
    return sunday$827$base;
}
exports.$init$sunday$827$base=$init$sunday$827$base;
$init$sunday$827$base();
var sunday$828$base=sunday$827$base();
var getSunday$base=function(){
    return sunday$828$base;
}
exports.getSunday$base=getSunday$base;
getSunday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:sunday$827$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Sunday_ is the day of the week that follows Saturday and preceeds Monday.",74)),$$$cl1.shared()];},d:['ceylon.time.base','sunday']};};
$prop$getSunday$base={get:getSunday$base,$$metamodel$$:getSunday$base.$$metamodel$$};
exports.$prop$getSunday$base=$prop$getSunday$base;
function monday$829$base(){
    var $$monday=new monday$829$base.$$;
    DayOfWeek$base((1),$$monday);
    var string=$$$cl1.String("monday",6);
    $$$cl1.defineAttr($$monday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:monday$829$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','string']};});
    $$monday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$monday,'predecessor',function(){return getSunday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:monday$829$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','predecessor']};});
    $$monday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$monday,'successor',function(){return getTuesday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:monday$829$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','monday','$at','successor']};});
    $$monday.$prop$getSuccessor.get=function(){return successor};
    return $$monday;
}
function $init$monday$829$base(){
    if (monday$829$base.$$===undefined){
        $$$cl1.initTypeProto(monday$829$base,'ceylon.time.base::monday',DayOfWeek$base);
    }
    return monday$829$base;
}
exports.$init$monday$829$base=$init$monday$829$base;
$init$monday$829$base();
var monday$830$base=monday$829$base();
var getMonday$base=function(){
    return monday$830$base;
}
exports.getMonday$base=getMonday$base;
getMonday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:monday$829$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Monday_ is the day of the week that follows Sunday and preceeds Tuesday.",73)),$$$cl1.shared()];},d:['ceylon.time.base','monday']};};
$prop$getMonday$base={get:getMonday$base,$$metamodel$$:getMonday$base.$$metamodel$$};
exports.$prop$getMonday$base=$prop$getMonday$base;
function tuesday$831$base(){
    var $$tuesday=new tuesday$831$base.$$;
    DayOfWeek$base((2),$$tuesday);
    var string=$$$cl1.String("tuesday",7);
    $$$cl1.defineAttr($$tuesday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:tuesday$831$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','string']};});
    $$tuesday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$tuesday,'predecessor',function(){return getMonday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:tuesday$831$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','predecessor']};});
    $$tuesday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$tuesday,'successor',function(){return getWednesday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:tuesday$831$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','tuesday','$at','successor']};});
    $$tuesday.$prop$getSuccessor.get=function(){return successor};
    return $$tuesday;
}
function $init$tuesday$831$base(){
    if (tuesday$831$base.$$===undefined){
        $$$cl1.initTypeProto(tuesday$831$base,'ceylon.time.base::tuesday',DayOfWeek$base);
    }
    return tuesday$831$base;
}
exports.$init$tuesday$831$base=$init$tuesday$831$base;
$init$tuesday$831$base();
var tuesday$832$base=tuesday$831$base();
var getTuesday$base=function(){
    return tuesday$832$base;
}
exports.getTuesday$base=getTuesday$base;
getTuesday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:tuesday$831$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Tuesday_ is the day of the week that follows Monday and preceeds Wednesday.",76)),$$$cl1.shared()];},d:['ceylon.time.base','tuesday']};};
$prop$getTuesday$base={get:getTuesday$base,$$metamodel$$:getTuesday$base.$$metamodel$$};
exports.$prop$getTuesday$base=$prop$getTuesday$base;
function wednesday$833$base(){
    var $$wednesday=new wednesday$833$base.$$;
    DayOfWeek$base((3),$$wednesday);
    var string=$$$cl1.String("wednesday",9);
    $$$cl1.defineAttr($$wednesday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:wednesday$833$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','string']};});
    $$wednesday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$wednesday,'predecessor',function(){return getTuesday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:wednesday$833$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','predecessor']};});
    $$wednesday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$wednesday,'successor',function(){return getThursday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:wednesday$833$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','wednesday','$at','successor']};});
    $$wednesday.$prop$getSuccessor.get=function(){return successor};
    return $$wednesday;
}
function $init$wednesday$833$base(){
    if (wednesday$833$base.$$===undefined){
        $$$cl1.initTypeProto(wednesday$833$base,'ceylon.time.base::wednesday',DayOfWeek$base);
    }
    return wednesday$833$base;
}
exports.$init$wednesday$833$base=$init$wednesday$833$base;
$init$wednesday$833$base();
var wednesday$834$base=wednesday$833$base();
var getWednesday$base=function(){
    return wednesday$834$base;
}
exports.getWednesday$base=getWednesday$base;
getWednesday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:wednesday$833$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Wednesday_ is the day of the week that follows Tuesday and preceeds Thursday.",78)),$$$cl1.shared()];},d:['ceylon.time.base','wednesday']};};
$prop$getWednesday$base={get:getWednesday$base,$$metamodel$$:getWednesday$base.$$metamodel$$};
exports.$prop$getWednesday$base=$prop$getWednesday$base;
function thursday$835$base(){
    var $$thursday=new thursday$835$base.$$;
    DayOfWeek$base((4),$$thursday);
    var string=$$$cl1.String("thursday",8);
    $$$cl1.defineAttr($$thursday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:thursday$835$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','string']};});
    $$thursday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$thursday,'predecessor',function(){return getWednesday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:thursday$835$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','predecessor']};});
    $$thursday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$thursday,'successor',function(){return getFriday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:thursday$835$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','thursday','$at','successor']};});
    $$thursday.$prop$getSuccessor.get=function(){return successor};
    return $$thursday;
}
function $init$thursday$835$base(){
    if (thursday$835$base.$$===undefined){
        $$$cl1.initTypeProto(thursday$835$base,'ceylon.time.base::thursday',DayOfWeek$base);
    }
    return thursday$835$base;
}
exports.$init$thursday$835$base=$init$thursday$835$base;
$init$thursday$835$base();
var thursday$836$base=thursday$835$base();
var getThursday$base=function(){
    return thursday$836$base;
}
exports.getThursday$base=getThursday$base;
getThursday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:thursday$835$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Thursday_ is the day of the week that follows Wednesday and preceeds Friday.",77)),$$$cl1.shared()];},d:['ceylon.time.base','thursday']};};
$prop$getThursday$base={get:getThursday$base,$$metamodel$$:getThursday$base.$$metamodel$$};
exports.$prop$getThursday$base=$prop$getThursday$base;
function friday$837$base(){
    var $$friday=new friday$837$base.$$;
    DayOfWeek$base((5),$$friday);
    var string=$$$cl1.String("friday",6);
    $$$cl1.defineAttr($$friday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:friday$837$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','string']};});
    $$friday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$friday,'predecessor',function(){return getThursday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:friday$837$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','predecessor']};});
    $$friday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$friday,'successor',function(){return getSaturday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:friday$837$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','friday','$at','successor']};});
    $$friday.$prop$getSuccessor.get=function(){return successor};
    return $$friday;
}
function $init$friday$837$base(){
    if (friday$837$base.$$===undefined){
        $$$cl1.initTypeProto(friday$837$base,'ceylon.time.base::friday',DayOfWeek$base);
    }
    return friday$837$base;
}
exports.$init$friday$837$base=$init$friday$837$base;
$init$friday$837$base();
var friday$838$base=friday$837$base();
var getFriday$base=function(){
    return friday$838$base;
}
exports.getFriday$base=getFriday$base;
getFriday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:friday$837$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Friday_ is the day of the week that follows Thursday and preceeds Saturday.",76)),$$$cl1.shared()];},d:['ceylon.time.base','friday']};};
$prop$getFriday$base={get:getFriday$base,$$metamodel$$:getFriday$base.$$metamodel$$};
exports.$prop$getFriday$base=$prop$getFriday$base;
function saturday$839$base(){
    var $$saturday=new saturday$839$base.$$;
    DayOfWeek$base((6),$$saturday);
    var string=$$$cl1.String("saturday",8);
    $$$cl1.defineAttr($$saturday,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:saturday$839$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','string']};});
    $$saturday.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$saturday,'predecessor',function(){return getFriday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:saturday$839$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','predecessor']};});
    $$saturday.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$saturday,'successor',function(){return getSunday$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:saturday$839$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','saturday','$at','successor']};});
    $$saturday.$prop$getSuccessor.get=function(){return successor};
    return $$saturday;
}
function $init$saturday$839$base(){
    if (saturday$839$base.$$===undefined){
        $$$cl1.initTypeProto(saturday$839$base,'ceylon.time.base::saturday',DayOfWeek$base);
    }
    return saturday$839$base;
}
exports.$init$saturday$839$base=$init$saturday$839$base;
$init$saturday$839$base();
var saturday$840$base=saturday$839$base();
var getSaturday$base=function(){
    return saturday$840$base;
}
exports.getSaturday$base=getSaturday$base;
getSaturday$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:saturday$839$base},$an:function(){return[$$$cl1.doc($$$cl1.String("_Saturday_ is the day of the week that follows Friday and preceeds Sunday.",74)),$$$cl1.shared()];},d:['ceylon.time.base','saturday']};};
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
    var integer=integer;
    $$$cl1.defineAttr($$month,'integer',function(){return integer;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12",99)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$at','integer']};});
    $$month.$prop$getInteger={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12",99)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$at','integer']};}};
    $$month.$prop$getInteger.get=function(){return integer};
    $$month.numberOfDays$defs$leapYear=function(leapYear$841){return false;};
    function numberOfDays(leapYear$841){
        if(leapYear$841===undefined){leapYear$841=$$month.numberOfDays$defs$leapYear(leapYear$841);}
        
        var case$842=$$month;
        if (case$842===getFebruary$base()) {
            return (opt$843=(leapYear$841?(29):null),opt$843!==null?opt$843:(28));
            var opt$843;
        }else if (case$842===getApril$base() || case$842===getJune$base() || case$842===getSeptember$base() || case$842===getNovember$base()) {
            return (30);
        }else if (case$842===getJanuary$base() || case$842===getMarch$base() || case$842===getMay$base() || case$842===getJuly$base() || case$842===getAugust$base() || case$842===getOctober$base() || case$842===getDecember$base()) {
            return (31);
        }
    }
    $$month.numberOfDays=numberOfDays;
    numberOfDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns number of days in this month.",37)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.time.base','Month','$m','numberOfDays']};};
    $$month.fisrtDayOfYear$defs$leapYear=function(leapYear$844){return false;};
    function fisrtDayOfYear(leapYear$844){
        if(leapYear$844===undefined){leapYear$844=$$month.fisrtDayOfYear$defs$leapYear(leapYear$844);}
        //assert at Month.ceylon (28:8-28:60)
        var day$845;
        if (!((day$845=getFirstDayOfMonth$base().get($$month.integer.minus((1))))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists day = firstDayOfMonth[this.integer-1]\' at Month.ceylon (28:14-28:59)"),'28:8-28:60','Month.ceylon'); }
        if((leapYear$844&&$$month.compare(getFebruary$base()).equals($$$cl1.getLarger()))){
            return day$845.plus((1));
        }
        return day$845;
    }
    $$month.fisrtDayOfYear=fisrtDayOfYear;
    fisrtDayOfYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the _day of year_ value for first of this month.",56)),$$$cl1.shared(),$$$cl1.$default()];},d:['ceylon.time.base','Month','$m','fisrtDayOfYear']};};
    var compare=function (other$846){
        return $$month.integer.compare(other$846.integer);
    };
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Month$base},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Compares ordinal numbers of two instances of `Month`.",53)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','Month','$m','compare']};};
    $$month.compare=compare;
    var plusMonths=function (number$847){
        return (opt$848=(number$847.equals((0))?$$month:null),opt$848!==null?opt$848:$$month.add(number$847).month);
    };
    plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year that comes specified number of months after this month.",77)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','plusMonths']};};
    $$month.plusMonths=plusMonths;
    var opt$848;
    var minusMonths=function (number$849){
        return (opt$850=(number$849.equals((0))?$$month:null),opt$850!==null?opt$850:$$month.add((-number$849)).month);
    };
    minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year that comes specified number of months before this month.",78)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','minusMonths']};};
    $$month.minusMonths=minusMonths;
    var opt$850;
    function Overflow$Month(month, years, $$overflow$Month){
        $init$Overflow$Month();
        if ($$overflow$Month===undefined)$$overflow$Month=new Overflow$Month.$$;
        $$overflow$Month.$$outer=this;
        var month=month;
        $$$cl1.defineAttr($$overflow$Month,'month',function(){return month;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("New month value.",16)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};});
        $$overflow$Month.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("New month value.",16)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','month']};}};
        $$overflow$Month.$prop$getMonth.get=function(){return month};
        var years=years;
        $$$cl1.defineAttr($$overflow$Month,'years',function(){return years;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of years overflowed by calculation.",42)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};});
        $$overflow$Month.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Overflow$Month,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of years overflowed by calculation.",42)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow','$at','years']};}};
        $$overflow$Month.$prop$getYears.get=function(){return years};
        return $$overflow$Month;
    }
    Overflow$Month.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},$cont:Month$base,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A result of adding or subtracting a month to another amount.",60)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$c','Overflow']};};
    $$month.Overflow$Month=Overflow$Month;
    function $init$Overflow$Month(){
        if (Overflow$Month.$$===undefined){
            $$$cl1.initTypeProto(Overflow$Month,'ceylon.time.base::Month.Overflow',$$$cl1.Basic);
            Month$base.Overflow$Month=Overflow$Month;
        }
        return Overflow$Month;
    }
    $$month.$init$Overflow$Month=$init$Overflow$Month;
    $init$Overflow$Month();
    function add(numberOfMonths$851){
        var next$852=$$month.integer.minus((1)).plus(numberOfMonths$851);
        $prop$getNext$852={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.base','Month','$m','add','$at','next']};}};
        $prop$getNext$852.get=function(){return next$852};
        var nextMonth$853=$$$ct793.floorMod$internal$math(next$852,getMonths$base().perYear);
        $prop$getNextMonth$853={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.base','Month','$m','add','$at','nextMonth']};}};
        $prop$getNextMonth$853.get=function(){return nextMonth$853};
        //assert at Month.ceylon (61:8-61:53)
        var month$854;
        if (!((month$854=getMonths$base().all.get(nextMonth$853))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists month = months.all[nextMonth]\' at Month.ceylon (61:15-61:52)"),'61:8-61:53','Month.ceylon'); }
        var years$855=$$$ct793.floorDiv$internal$math(next$852,(12));
        $prop$getYears$855={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.base','Month','$m','add','$at','years']};}};
        $prop$getYears$855.get=function(){return years$855};
        return $$month.Overflow$Month(month$854,years$855);
    }
    $$month.add=add;
    add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base.Overflow$Month},$ps:[{$nm:'numberOfMonths',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Month$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this month and returns the result of \nas new month value and number of times the operation overflowed.",127)),$$$cl1.shared()];},d:['ceylon.time.base','Month','$m','add']};};
    return $$month;
}
Month$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:Month$base}}},{t:$$$cl1.Comparable,a:{Other:{t:Month$base}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A month in a Gregorian or Julian calendar system.",49)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.base','Month']};};
exports.Month$base=Month$base;
function $init$Month$base(){
    if (Month$base.$$===undefined){
        $$$cl1.initTypeProto(Month$base,'ceylon.time.base::Month',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return Month$base;
}
exports.$init$Month$base=$init$Month$base;
$init$Month$base();
var firstDayOfMonth$856$base=$$$cl1.Tuple((1),$$$cl1.Tuple((32),$$$cl1.Tuple((60),$$$cl1.Tuple((91),$$$cl1.Tuple((121),$$$cl1.Tuple((152),$$$cl1.Tuple((182),$$$cl1.Tuple((213),$$$cl1.Tuple((244),$$$cl1.Tuple((274),$$$cl1.Tuple((305),$$$cl1.Tuple((335),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});
var getFirstDayOfMonth$base=function(){return firstDayOfMonth$856$base;};
exports.getFirstDayOfMonth$base=getFirstDayOfMonth$base;
var $prop$getFirstDayOfMonth$base={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Integer}}},$an:function(){return[$$$cl1.doc($$$cl1.String("Table of _day of year_ values for the first day of each month.",62))];},d:['ceylon.time.base','firstDayOfMonth']};}};
exports.$prop$getFirstDayOfMonth$base=$prop$getFirstDayOfMonth$base;
$prop$getFirstDayOfMonth$base.get=getFirstDayOfMonth$base;
getFirstDayOfMonth$base.$$metamodel$$=$prop$getFirstDayOfMonth$base.$$metamodel$$;
function monthOf$base(month$857){
    
    var case$858=month$857;
    if ($$$cl1.isOfType(month$857,{t:Month$base})) {
        return case$858;
    }else if ($$$cl1.isOfType(month$857,{t:$$$cl1.Integer})) {
        //assert at Month.ceylon (82:8-83:72)
        if (!(((getJanuary$base().integer.compare(case$858)!==$$$cl1.getLarger())&&(case$858.compare(getDecember$base().integer)!==$$$cl1.getLarger())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid month.: \' january.integer <= month && month <= december.integer \' at Month.ceylon (83:15-83:71)"),'82:8-83:72','Month.ceylon'); }
        //assert at Month.ceylon (84:8-84:49)
        var m$859;
        if (!((m$859=getMonths$base().all.get(case$858.minus((1))))!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' exists m = months.all[month-1] \' at Month.ceylon (84:15-84:48)"),'84:8-84:49','Month.ceylon'); }
        return m$859;
    }
}
exports.monthOf$base=monthOf$base;
monthOf$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of year specified by the input argument.\n\nIf input is an Integer, this method returns a month according to the integer \nvalue of the [[MonthOfYear]] (i.e. 1=[[january]], 2=[[february]], ... 12=[[december]])\nAny invalid values will throw an exception.\n\nIf the imput value is a [[MonthOfYear]], the input value is returned as is.",341)),$$$cl1.shared()];},d:['ceylon.time.base','monthOf']};};
function january$860$base(){
    var $$january=new january$860$base.$$;
    Month$base($$$ct793.getGregorian$chronology().january,$$january);
    var string=$$$cl1.String("january",7);
    $$$cl1.defineAttr($$january,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','string']};});
    $$january.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','string']};}};
    $$january.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$january,'predecessor',function(){return getDecember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','predecessor']};});
    $$january.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','predecessor']};}};
    $$january.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$january,'successor',function(){return getFebruary$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','successor']};});
    $$january.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:january$860$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','january','$at','successor']};}};
    $$january.$prop$getSuccessor.get=function(){return successor};
    return $$january;
}
function $init$january$860$base(){
    if (january$860$base.$$===undefined){
        $$$cl1.initTypeProto(january$860$base,'ceylon.time.base::january',Month$base);
    }
    return january$860$base;
}
exports.$init$january$860$base=$init$january$860$base;
$init$january$860$base();
var january$861$base=january$860$base();
var getJanuary$base=function(){
    return january$861$base;
}
exports.getJanuary$base=getJanuary$base;
getJanuary$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:january$860$base},$an:function(){return[$$$cl1.doc($$$cl1.String("January. The first month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','january']};};
$prop$getJanuary$base={get:getJanuary$base,$$metamodel$$:getJanuary$base.$$metamodel$$};
exports.$prop$getJanuary$base=$prop$getJanuary$base;
function february$862$base(){
    var $$february=new february$862$base.$$;
    Month$base($$$ct793.getGregorian$chronology().february,$$february);
    var string=$$$cl1.String("february",8);
    $$$cl1.defineAttr($$february,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:february$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','string']};});
    $$february.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$february,'predecessor',function(){return getJanuary$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:february$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','predecessor']};});
    $$february.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$february,'successor',function(){return getMarch$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:february$862$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','february','$at','successor']};});
    $$february.$prop$getSuccessor.get=function(){return successor};
    return $$february;
}
function $init$february$862$base(){
    if (february$862$base.$$===undefined){
        $$$cl1.initTypeProto(february$862$base,'ceylon.time.base::february',Month$base);
    }
    return february$862$base;
}
exports.$init$february$862$base=$init$february$862$base;
$init$february$862$base();
var february$863$base=february$862$base();
var getFebruary$base=function(){
    return february$863$base;
}
exports.getFebruary$base=getFebruary$base;
getFebruary$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:february$862$base},$an:function(){return[$$$cl1.doc($$$cl1.String("February. The second month of a gregorian calendar system.",58)),$$$cl1.shared()];},d:['ceylon.time.base','february']};};
$prop$getFebruary$base={get:getFebruary$base,$$metamodel$$:getFebruary$base.$$metamodel$$};
exports.$prop$getFebruary$base=$prop$getFebruary$base;
function march$864$base(){
    var $$march=new march$864$base.$$;
    Month$base($$$ct793.getGregorian$chronology().march,$$march);
    var string=$$$cl1.String("march",5);
    $$$cl1.defineAttr($$march,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:march$864$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','string']};});
    $$march.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$march,'predecessor',function(){return getFebruary$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:march$864$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','predecessor']};});
    $$march.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$march,'successor',function(){return getApril$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:march$864$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','march','$at','successor']};});
    $$march.$prop$getSuccessor.get=function(){return successor};
    return $$march;
}
function $init$march$864$base(){
    if (march$864$base.$$===undefined){
        $$$cl1.initTypeProto(march$864$base,'ceylon.time.base::march',Month$base);
    }
    return march$864$base;
}
exports.$init$march$864$base=$init$march$864$base;
$init$march$864$base();
var march$865$base=march$864$base();
var getMarch$base=function(){
    return march$865$base;
}
exports.getMarch$base=getMarch$base;
getMarch$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:march$864$base},$an:function(){return[$$$cl1.doc($$$cl1.String("March. The third month of a gregorian calendar system.",54)),$$$cl1.shared()];},d:['ceylon.time.base','march']};};
$prop$getMarch$base={get:getMarch$base,$$metamodel$$:getMarch$base.$$metamodel$$};
exports.$prop$getMarch$base=$prop$getMarch$base;
function april$866$base(){
    var $$april=new april$866$base.$$;
    Month$base($$$ct793.getGregorian$chronology().april,$$april);
    var string=$$$cl1.String("april",5);
    $$$cl1.defineAttr($$april,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:april$866$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','string']};});
    $$april.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$april,'predecessor',function(){return getMarch$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:april$866$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','predecessor']};});
    $$april.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$april,'successor',function(){return getMay$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:april$866$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','april','$at','successor']};});
    $$april.$prop$getSuccessor.get=function(){return successor};
    return $$april;
}
function $init$april$866$base(){
    if (april$866$base.$$===undefined){
        $$$cl1.initTypeProto(april$866$base,'ceylon.time.base::april',Month$base);
    }
    return april$866$base;
}
exports.$init$april$866$base=$init$april$866$base;
$init$april$866$base();
var april$867$base=april$866$base();
var getApril$base=function(){
    return april$867$base;
}
exports.getApril$base=getApril$base;
getApril$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:april$866$base},$an:function(){return[$$$cl1.doc($$$cl1.String("April. The fourth month of a gregorian calendar system.",55)),$$$cl1.shared()];},d:['ceylon.time.base','april']};};
$prop$getApril$base={get:getApril$base,$$metamodel$$:getApril$base.$$metamodel$$};
exports.$prop$getApril$base=$prop$getApril$base;
function may$868$base(){
    var $$may=new may$868$base.$$;
    Month$base((5),$$may);
    var string=$$$cl1.String("may",3);
    $$$cl1.defineAttr($$may,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:may$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','string']};});
    $$may.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$may,'predecessor',function(){return getApril$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:may$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','predecessor']};});
    $$may.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$may,'successor',function(){return getJune$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:may$868$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','may','$at','successor']};});
    $$may.$prop$getSuccessor.get=function(){return successor};
    return $$may;
}
function $init$may$868$base(){
    if (may$868$base.$$===undefined){
        $$$cl1.initTypeProto(may$868$base,'ceylon.time.base::may',Month$base);
    }
    return may$868$base;
}
exports.$init$may$868$base=$init$may$868$base;
$init$may$868$base();
var may$869$base=may$868$base();
var getMay$base=function(){
    return may$869$base;
}
exports.getMay$base=getMay$base;
getMay$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:may$868$base},$an:function(){return[$$$cl1.doc($$$cl1.String("May. The fifth month of a gregorian calendar system.",52)),$$$cl1.shared()];},d:['ceylon.time.base','may']};};
$prop$getMay$base={get:getMay$base,$$metamodel$$:getMay$base.$$metamodel$$};
exports.$prop$getMay$base=$prop$getMay$base;
function june$870$base(){
    var $$june=new june$870$base.$$;
    Month$base($$$ct793.getGregorian$chronology().june,$$june);
    var string=$$$cl1.String("june",4);
    $$$cl1.defineAttr($$june,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:june$870$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','string']};});
    $$june.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$june,'predecessor',function(){return getMay$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:june$870$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','predecessor']};});
    $$june.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$june,'successor',function(){return getJuly$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:june$870$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','june','$at','successor']};});
    $$june.$prop$getSuccessor.get=function(){return successor};
    return $$june;
}
function $init$june$870$base(){
    if (june$870$base.$$===undefined){
        $$$cl1.initTypeProto(june$870$base,'ceylon.time.base::june',Month$base);
    }
    return june$870$base;
}
exports.$init$june$870$base=$init$june$870$base;
$init$june$870$base();
var june$871$base=june$870$base();
var getJune$base=function(){
    return june$871$base;
}
exports.getJune$base=getJune$base;
getJune$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:june$870$base},$an:function(){return[$$$cl1.doc($$$cl1.String("June. The sixth month of a gregorian calendar system.",53)),$$$cl1.shared()];},d:['ceylon.time.base','june']};};
$prop$getJune$base={get:getJune$base,$$metamodel$$:getJune$base.$$metamodel$$};
exports.$prop$getJune$base=$prop$getJune$base;
function july$872$base(){
    var $$july=new july$872$base.$$;
    Month$base($$$ct793.getGregorian$chronology().july,$$july);
    var string=$$$cl1.String("july",4);
    $$$cl1.defineAttr($$july,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:july$872$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','string']};});
    $$july.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$july,'predecessor',function(){return getJune$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:july$872$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','predecessor']};});
    $$july.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$july,'successor',function(){return getAugust$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:july$872$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','july','$at','successor']};});
    $$july.$prop$getSuccessor.get=function(){return successor};
    return $$july;
}
function $init$july$872$base(){
    if (july$872$base.$$===undefined){
        $$$cl1.initTypeProto(july$872$base,'ceylon.time.base::july',Month$base);
    }
    return july$872$base;
}
exports.$init$july$872$base=$init$july$872$base;
$init$july$872$base();
var july$873$base=july$872$base();
var getJuly$base=function(){
    return july$873$base;
}
exports.getJuly$base=getJuly$base;
getJuly$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:july$872$base},$an:function(){return[$$$cl1.doc($$$cl1.String("July. The seventh month of a gregorian calendar system.",55)),$$$cl1.shared()];},d:['ceylon.time.base','july']};};
$prop$getJuly$base={get:getJuly$base,$$metamodel$$:getJuly$base.$$metamodel$$};
exports.$prop$getJuly$base=$prop$getJuly$base;
function august$874$base(){
    var $$august=new august$874$base.$$;
    Month$base($$$ct793.getGregorian$chronology().august,$$august);
    var string=$$$cl1.String("august",6);
    $$$cl1.defineAttr($$august,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:august$874$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','string']};});
    $$august.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$august,'predecessor',function(){return getJuly$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:august$874$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','predecessor']};});
    $$august.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$august,'successor',function(){return getSeptember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:august$874$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','august','$at','successor']};});
    $$august.$prop$getSuccessor.get=function(){return successor};
    return $$august;
}
function $init$august$874$base(){
    if (august$874$base.$$===undefined){
        $$$cl1.initTypeProto(august$874$base,'ceylon.time.base::august',Month$base);
    }
    return august$874$base;
}
exports.$init$august$874$base=$init$august$874$base;
$init$august$874$base();
var august$875$base=august$874$base();
var getAugust$base=function(){
    return august$875$base;
}
exports.getAugust$base=getAugust$base;
getAugust$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:august$874$base},$an:function(){return[$$$cl1.doc($$$cl1.String("August. The eighth month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','august']};};
$prop$getAugust$base={get:getAugust$base,$$metamodel$$:getAugust$base.$$metamodel$$};
exports.$prop$getAugust$base=$prop$getAugust$base;
function september$876$base(){
    var $$september=new september$876$base.$$;
    Month$base($$$ct793.getGregorian$chronology().september,$$september);
    var string=$$$cl1.String("september",9);
    $$$cl1.defineAttr($$september,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:september$876$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','string']};});
    $$september.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$september,'predecessor',function(){return getAugust$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:september$876$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','predecessor']};});
    $$september.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$september,'successor',function(){return getOctober$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:september$876$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','september','$at','successor']};});
    $$september.$prop$getSuccessor.get=function(){return successor};
    return $$september;
}
function $init$september$876$base(){
    if (september$876$base.$$===undefined){
        $$$cl1.initTypeProto(september$876$base,'ceylon.time.base::september',Month$base);
    }
    return september$876$base;
}
exports.$init$september$876$base=$init$september$876$base;
$init$september$876$base();
var september$877$base=september$876$base();
var getSeptember$base=function(){
    return september$877$base;
}
exports.getSeptember$base=getSeptember$base;
getSeptember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:september$876$base},$an:function(){return[$$$cl1.doc($$$cl1.String("September. The nineth month of a gregorian calendar system.",59)),$$$cl1.shared()];},d:['ceylon.time.base','september']};};
$prop$getSeptember$base={get:getSeptember$base,$$metamodel$$:getSeptember$base.$$metamodel$$};
exports.$prop$getSeptember$base=$prop$getSeptember$base;
function october$878$base(){
    var $$october=new october$878$base.$$;
    Month$base($$$ct793.getGregorian$chronology().october,$$october);
    var string=$$$cl1.String("october",7);
    $$$cl1.defineAttr($$october,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:october$878$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','string']};});
    $$october.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$october,'predecessor',function(){return getSeptember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:october$878$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','predecessor']};});
    $$october.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$october,'successor',function(){return getNovember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:october$878$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','october','$at','successor']};});
    $$october.$prop$getSuccessor.get=function(){return successor};
    return $$october;
}
function $init$october$878$base(){
    if (october$878$base.$$===undefined){
        $$$cl1.initTypeProto(october$878$base,'ceylon.time.base::october',Month$base);
    }
    return october$878$base;
}
exports.$init$october$878$base=$init$october$878$base;
$init$october$878$base();
var october$879$base=october$878$base();
var getOctober$base=function(){
    return october$879$base;
}
exports.getOctober$base=getOctober$base;
getOctober$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:october$878$base},$an:function(){return[$$$cl1.doc($$$cl1.String("October. The tenth month of a gregorian calendar system.",56)),$$$cl1.shared()];},d:['ceylon.time.base','october']};};
$prop$getOctober$base={get:getOctober$base,$$metamodel$$:getOctober$base.$$metamodel$$};
exports.$prop$getOctober$base=$prop$getOctober$base;
function november$880$base(){
    var $$november=new november$880$base.$$;
    Month$base($$$ct793.getGregorian$chronology().november,$$november);
    var string=$$$cl1.String("november",8);
    $$$cl1.defineAttr($$november,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:november$880$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','string']};});
    $$november.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$november,'predecessor',function(){return getOctober$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:november$880$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','predecessor']};});
    $$november.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$november,'successor',function(){return getDecember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:november$880$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','november','$at','successor']};});
    $$november.$prop$getSuccessor.get=function(){return successor};
    return $$november;
}
function $init$november$880$base(){
    if (november$880$base.$$===undefined){
        $$$cl1.initTypeProto(november$880$base,'ceylon.time.base::november',Month$base);
    }
    return november$880$base;
}
exports.$init$november$880$base=$init$november$880$base;
$init$november$880$base();
var november$881$base=november$880$base();
var getNovember$base=function(){
    return november$881$base;
}
exports.getNovember$base=getNovember$base;
getNovember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:november$880$base},$an:function(){return[$$$cl1.doc($$$cl1.String("November. The eleventh month of a gregorian calendar system.",60)),$$$cl1.shared()];},d:['ceylon.time.base','november']};};
$prop$getNovember$base={get:getNovember$base,$$metamodel$$:getNovember$base.$$metamodel$$};
exports.$prop$getNovember$base=$prop$getNovember$base;
function december$882$base(){
    var $$december=new december$882$base.$$;
    Month$base($$$ct793.getGregorian$chronology().december,$$december);
    var string=$$$cl1.String("december",8);
    $$$cl1.defineAttr($$december,'string',function(){return string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:december$882$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','string']};});
    $$december.$prop$getString.get=function(){return string};
    $$$cl1.defineAttr($$december,'predecessor',function(){return getNovember$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:december$882$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','predecessor']};});
    $$december.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$december,'successor',function(){return getJanuary$base();},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:december$882$base,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.base','december','$at','successor']};});
    $$december.$prop$getSuccessor.get=function(){return successor};
    return $$december;
}
function $init$december$882$base(){
    if (december$882$base.$$===undefined){
        $$$cl1.initTypeProto(december$882$base,'ceylon.time.base::december',Month$base);
    }
    return december$882$base;
}
exports.$init$december$882$base=$init$december$882$base;
$init$december$882$base();
var december$883$base=december$882$base();
var getDecember$base=function(){
    return december$883$base;
}
exports.getDecember$base=getDecember$base;
getDecember$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:december$882$base},$an:function(){return[$$$cl1.doc($$$cl1.String("December. The twelveth (last) month of a gregorian calendar system.",67)),$$$cl1.shared()];},d:['ceylon.time.base','december']};};
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
    }
    return PeriodBehavior$base;
}
exports.$init$PeriodBehavior$base=$init$PeriodBehavior$base;
$init$PeriodBehavior$base();
function Range$base($$targs$$,$$range){
    $$$cl1.Iterable($$range.$$targs$$===undefined?$$targs$$:{Absent:{t:$$$cl1.Null},Element:$$range.$$targs$$.Element},$$range);
    $$$cl1.add_type_arg($$range,'Absent',{t:$$$cl1.Null});
    $$$cl1.set_type_args($$range,$$targs$$);
    $$range.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','from']};}};
    $$range.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Element',$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','to']};}};
    $$range.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:UnitOfDate$base},{t:UnitOfTime$base}]},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','step']};}};
    $$range.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Duration},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','duration']};}};
    $$range.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','Range','$at','period']};}};
    function equals(other$884){
        var other$885;
        if($$$cl1.isOfType((other$885=other$884),{t:Range$base,a:{StepBy:$$range.$$targs$$.StepBy,Element:$$range.$$targs$$.Element}})){
            return ($$range.from.equals(other$885.from)&&$$range.to.equals(other$885.to));
        }
        return false;
    }
    $$range.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Range$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.$default(),$$$cl1.actual()];},d:['ceylon.time.base','Range','$m','equals']};};
}
Range$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Element'}},{t:$$$cl1.Ordinal,a:{Other:'Element'}}]},StepBy:{}},satisfies:[{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An interface to represent a Range between same kinds of _Date_ or _DateTime_ or _Time_.",87)),$$$cl1.shared()];},d:['ceylon.time.base','Range']};};
exports.Range$base=Range$base;
function $init$Range$base(){
    if (Range$base.$$===undefined){
        $$$cl1.initTypeProto(Range$base,'ceylon.time.base::Range',$$$cl1.Iterable);
    }
    return Range$base;
}
exports.$init$Range$base=$init$Range$base;
$init$Range$base();
function ReadableDate$base($$readableDate){
    $$readableDate.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The year of the date.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','year']};}};
    $$readableDate.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Month of the year value of the date.",36)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','month']};}};
    $$readableDate.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Day of month value of the date.",31)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','day']};}};
    $$readableDate.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Day of the week.",16)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfWeek']};}};
    $$readableDate.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of the week of the date.",31)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','weekOfYear']};}};
    $$readableDate.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of the day in year.",26)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfYear']};}};
    $$readableDate.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of calendar days since ERA.",34)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','dayOfEra']};}};
    $$readableDate.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:ReadableDate$base,$an:function(){return[$$$cl1.doc($$$cl1.String("True if the year of the date is a leap year.",44)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDate','$at','leapYear']};}};
}
ReadableDate$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A common interface of all date like objects.\n\nThis interface is common to all data types that\neither partially or fully represent information \nthat can be interpreted as _date_.",177)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.Date),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.Time),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.DateTime),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time.timezone'),$$$ct793.ZoneDateTime$timezone)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDate']};};
exports.ReadableDate$base=ReadableDate$base;
function $init$ReadableDate$base(){
    if (ReadableDate$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDate$base,'ceylon.time.base::ReadableDate');
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
    $$readableDuration.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDuration$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds.",23)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDuration','$at','milliseconds']};}};
}
ReadableDuration$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstraction of data representing a specific duration of time.\n\nA duration is a fixed delta of time between two instants \nmeasured in number of milliseconds.",159)),$$$cl1.see([$$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.Duration)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.ClassDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDuration']};};
exports.ReadableDuration$base=ReadableDuration$base;
function $init$ReadableDuration$base(){
    if (ReadableDuration$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDuration$base,'ceylon.time.base::ReadableDuration');
    }
    return ReadableDuration$base;
}
exports.$init$ReadableDuration$base=$init$ReadableDuration$base;
$init$ReadableDuration$base();
function ReadableInstant$base($$readableInstant){
    $$readableInstant.$prop$getMillisecondsOfEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableInstant$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds \nsince beginning of an _epoch_ (january 1st 1970 UTC)",110)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableInstant','$at','millisecondsOfEpoch']};}};
}
ReadableInstant$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstraction for data that can represent an instant of time.",62)),$$$cl1.see([$$$cl1.$init$OpenClass()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.Instant)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.ClassDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableInstant']};};
exports.ReadableInstant$base=ReadableInstant$base;
function $init$ReadableInstant$base(){
    if (ReadableInstant$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableInstant$base,'ceylon.time.base::ReadableInstant');
    }
    return ReadableInstant$base;
}
exports.$init$ReadableInstant$base=$init$ReadableInstant$base;
$init$ReadableInstant$base();
function ReadablePeriod$base($$readablePeriod){
    ReadableDatePeriod$base($$readablePeriod);
    ReadableTimePeriod$base($$readablePeriod);
    $$readablePeriod.$prop$getDateOnly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ReadableDatePeriod$base},$cont:ReadablePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a truncated view of this period that only contains number of \n_years_, _months_ and _days_.",99)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadablePeriod','$at','dateOnly']};}};
    $$readablePeriod.$prop$getTimeOnly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:ReadableTimePeriod$base},$cont:ReadablePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a truncated view of this period that only contains number of \n_hours_, _minutes_, _seconds_ and _milliseconds_.",119)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadablePeriod','$at','timeOnly']};}};
}
ReadablePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],$an:function(){return[$$$cl1.doc($$$cl1.String("A Period of time represented as number of _years_, _months_, _days_, \n_hours_, _minutes_, _seconds_ and/or _milliseconds_.",122)),$$$cl1.shared()];},d:['ceylon.time.base','ReadablePeriod']};};
exports.ReadablePeriod$base=ReadablePeriod$base;
function $init$ReadablePeriod$base(){
    if (ReadablePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadablePeriod$base,'ceylon.time.base::ReadablePeriod',$init$ReadableDatePeriod$base(),$init$ReadableTimePeriod$base());
    }
    return ReadablePeriod$base;
}
exports.$init$ReadablePeriod$base=$init$ReadablePeriod$base;
$init$ReadablePeriod$base();
function ReadableDatePeriod$base($$readableDatePeriod){
    $$readableDatePeriod.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','years']};}};
    $$readableDatePeriod.$prop$getMonths={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','months']};}};
    $$readableDatePeriod.$prop$getDays={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableDatePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableDatePeriod','$at','days']};}};
}
ReadableDatePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A period of _days_, _months_ and _years_.",41)),$$$cl1.shared()];},d:['ceylon.time.base','ReadableDatePeriod']};};
exports.ReadableDatePeriod$base=ReadableDatePeriod$base;
function $init$ReadableDatePeriod$base(){
    if (ReadableDatePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableDatePeriod$base,'ceylon.time.base::ReadableDatePeriod');
    }
    return ReadableDatePeriod$base;
}
exports.$init$ReadableDatePeriod$base=$init$ReadableDatePeriod$base;
$init$ReadableDatePeriod$base();
function ReadableTimePeriod$base($$readableTimePeriod){
    $$readableTimePeriod.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours",19)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','hours']};}};
    $$readableTimePeriod.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','minutes']};}};
    $$readableTimePeriod.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','seconds']};}};
    $$readableTimePeriod.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTimePeriod$base,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds",26)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTimePeriod','$at','milliseconds']};}};
}
ReadableTimePeriod$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("A period of _hours_, _minutes_, _seconds_ and _milliseconds_.",61)),$$$cl1.shared()];},d:['ceylon.time.base','ReadableTimePeriod']};};
exports.ReadableTimePeriod$base=ReadableTimePeriod$base;
function $init$ReadableTimePeriod$base(){
    if (ReadableTimePeriod$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableTimePeriod$base,'ceylon.time.base::ReadableTimePeriod');
    }
    return ReadableTimePeriod$base;
}
exports.$init$ReadableTimePeriod$base=$init$ReadableTimePeriod$base;
$init$ReadableTimePeriod$base();
function ReadableTime$base($$readableTime){
    $$readableTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Hour of day.",12)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','hours']};}};
    $$readableTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','minutes']};}};
    $$readableTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','seconds']};}};
    $$readableTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last second.",41)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','milliseconds']};}};
    $$readableTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since the beginning of the day.",49)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','minutesOfDay']};}};
    $$readableTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since the beginning of the day.",49)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','secondsOfDay']};}};
    $$readableTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:ReadableTime$base,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since the beginning of the day.",54)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.base','ReadableTime','$at','millisecondsOfDay']};}};
}
ReadableTime$base.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Common interface capable of representing _time of day_.",55)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.Time),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time'),$$$ct793.DateTime),$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time.timezone'),$$$ct793.ZoneDateTime$timezone)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time.base','ReadableTime']};};
exports.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
    if (ReadableTime$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableTime$base,'ceylon.time.base::ReadableTime');
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
    }
    return TimeBehavior$base;
}
exports.$init$TimeBehavior$base=$init$TimeBehavior$base;
$init$TimeBehavior$base();
function rd$chronology(t$886){
    var epoch$887=(0);
    $prop$getEpoch$887={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','rd','$at','epoch']};}};
    $prop$getEpoch$887.get=function(){return epoch$887};
    return t$886.minus(epoch$887);
}
exports.rd$chronology=rd$chronology;
rd$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'t',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Converts _Rata Die_ day number to a fixed date value.\n\n_Rata Die_ is fixed at Monday, January 1st, 1. (Gregorian).",114)),$$$cl1.shared()];},d:['ceylon.time.chronology','rd']};};
function unixTime$888$chronology(){
    var $$unixTime=new unixTime$888$chronology.$$;
    $$$cl1.defineAttr($$unixTime,'epoch',function(){return getGregorian$chronology().fixedFrom($$$cl1.Tuple((1970),$$$cl1.Tuple((1),$$$cl1.Tuple((1),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:unixTime$888$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Fixed date value of the _Unix time_ epoch (1970-01-01).",55)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$at','epoch']};});
    $$unixTime.$prop$getEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:unixTime$888$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Fixed date value of the _Unix time_ epoch (1970-01-01).",55)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$at','epoch']};}};
    $$unixTime.$prop$getEpoch.get=function(){return epoch};
    function fixedFromTime(time$889){
        return $$$ct793.floorDiv$internal$math(time$889,$$$ct793.getMilliseconds$base().perDay).plus($$unixTime.epoch);
    }
    $$unixTime.fixedFromTime=fixedFromTime;
    fixedFromTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$888$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a _fixed date_ from the _unix time_ value.",50)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','fixedFromTime']};};
    function timeFromFixed(date$890){
        return date$890.minus($$unixTime.epoch).times($$$ct793.getMilliseconds$base().perDay);
    }
    $$unixTime.timeFromFixed=timeFromFixed;
    timeFromFixed.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$888$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return milliseconds elapsed from 1970-01-01 00:00:00.",53)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','timeFromFixed']};};
    function timeOfDay(time$891){
        return $$$ct793.floorMod$internal$math(time$891,$$$ct793.getMilliseconds$base().perDay);
    }
    $$unixTime.timeOfDay=timeOfDay;
    timeOfDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:unixTime$888$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _time of day_ in milliseconds for the specified _unix time_ value.",74)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime','$m','timeOfDay']};};
    return $$unixTime;
}
function $init$unixTime$888$chronology(){
    if (unixTime$888$chronology.$$===undefined){
        $$$cl1.initTypeProto(unixTime$888$chronology,'ceylon.time.chronology::unixTime',$$$cl1.Basic);
    }
    return unixTime$888$chronology;
}
exports.$init$unixTime$888$chronology=$init$unixTime$888$chronology;
$init$unixTime$888$chronology();
var unixTime$892$chronology=unixTime$888$chronology();
var getUnixTime$chronology=function(){
    return unixTime$892$chronology;
}
exports.getUnixTime$chronology=getUnixTime$chronology;
getUnixTime$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:unixTime$888$chronology},$an:function(){return[$$$cl1.doc($$$cl1.String("Common properties of _Unix time_.",33)),$$$cl1.shared()];},d:['ceylon.time.chronology','unixTime']};};
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
function gregorian$893$chronology(){
    var $$gregorian=new gregorian$893$chronology.$$;
    GregorianCalendar$chronology($$gregorian);
    var epoch=rd$chronology((1));
    $$$cl1.defineAttr($$gregorian,'epoch',function(){return epoch;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Epoch of the gregorian calendar.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$at','epoch']};});
    $$gregorian.$prop$getEpoch.get=function(){return epoch};
    var january=(1);
    $$$cl1.defineAttr($$gregorian,'january',function(){return january;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','january']};});
    $$gregorian.$prop$getJanuary={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','january']};}};
    $$gregorian.$prop$getJanuary.get=function(){return january};
    var february=(2);
    $$$cl1.defineAttr($$gregorian,'february',function(){return february;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','february']};});
    $$gregorian.$prop$getFebruary={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','february']};}};
    $$gregorian.$prop$getFebruary.get=function(){return february};
    var march=(3);
    $$$cl1.defineAttr($$gregorian,'march',function(){return march;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','march']};});
    $$gregorian.$prop$getMarch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','march']};}};
    $$gregorian.$prop$getMarch.get=function(){return march};
    var april=(4);
    $$$cl1.defineAttr($$gregorian,'april',function(){return april;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','april']};});
    $$gregorian.$prop$getApril={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','april']};}};
    $$gregorian.$prop$getApril.get=function(){return april};
    var may=(5);
    $$$cl1.defineAttr($$gregorian,'may',function(){return may;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','may']};});
    $$gregorian.$prop$getMay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','may']};}};
    $$gregorian.$prop$getMay.get=function(){return may};
    var june=(6);
    $$$cl1.defineAttr($$gregorian,'june',function(){return june;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','june']};});
    $$gregorian.$prop$getJune={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','june']};}};
    $$gregorian.$prop$getJune.get=function(){return june};
    var july=(7);
    $$$cl1.defineAttr($$gregorian,'july',function(){return july;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','july']};});
    $$gregorian.$prop$getJuly={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','july']};}};
    $$gregorian.$prop$getJuly.get=function(){return july};
    var august=(8);
    $$$cl1.defineAttr($$gregorian,'august',function(){return august;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','august']};});
    $$gregorian.$prop$getAugust={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','august']};}};
    $$gregorian.$prop$getAugust.get=function(){return august};
    var september=(9);
    $$$cl1.defineAttr($$gregorian,'september',function(){return september;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','september']};});
    $$gregorian.$prop$getSeptember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','september']};}};
    $$gregorian.$prop$getSeptember.get=function(){return september};
    var october=(10);
    $$$cl1.defineAttr($$gregorian,'october',function(){return october;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','october']};});
    $$gregorian.$prop$getOctober={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','october']};}};
    $$gregorian.$prop$getOctober.get=function(){return october};
    var november=(11);
    $$$cl1.defineAttr($$gregorian,'november',function(){return november;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','november']};});
    $$gregorian.$prop$getNovember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','november']};}};
    $$gregorian.$prop$getNovember.get=function(){return november};
    var december=(12);
    $$$cl1.defineAttr($$gregorian,'december',function(){return december;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','december']};});
    $$gregorian.$prop$getDecember={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$at','december']};}};
    $$gregorian.$prop$getDecember.get=function(){return december};
    function leapYear(year$894){
        return (opt$895=(year$894.remainder((100)).equals((0))?year$894.remainder((400)).equals((0)):null),opt$895!==null?opt$895:year$894.remainder((4)).equals((0)));
        var opt$895;
    }
    $$gregorian.leapYear=leapYear;
    leapYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Gregorian leap year rule states that every fourth year\nis a leap year except cenury years not divisible by 400.",111)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','leapYear']};};
    function fixed$896(year$897,month$898,day$899){
        return $$gregorian.epoch.minus((1)).plus((365).times(year$897.minus((1)))).plus($$$ct793.floor$internal$math(year$897.minus((1)).divided($$$cl1.Float(4.0)))).minus($$$ct793.floor$internal$math(year$897.minus((1)).divided($$$cl1.Float(100.0)))).plus($$$ct793.floor$internal$math(year$897.minus((1)).divided($$$cl1.Float(400.0)))).plus($$$ct793.floor$internal$math((367).times(month$898).minus((362)).divided($$$cl1.Float(12.0)))).plus((opt$900=(month$898.compare((2)).equals($$$cl1.getLarger())?(opt$901=($$gregorian.leapYear(year$897)?(-(1)):null),opt$901!==null?opt$901:(-(2))):null),opt$900!==null?opt$900:(0))).plus(day$899);
        var opt$900,opt$901;
    };fixed$896.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the _day of era_ from a given date.",42))];},d:['ceylon.time.chronology','gregorian','$m','fixed']};};
    function fixedFrom(date$902){
        return $$$cl1.unflatten($$$cl1.$JsCallable(fixed$896,[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}}),{Args:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}})(date$902,{Args:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}});
    }
    $$gregorian.fixedFrom=fixedFrom;
    fixedFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the _day of era_ from a given date.",42)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','fixedFrom']};};
    function checkDate(date$903){
        //assert at Chronology.ceylon (115:8-116:68)
        if (!((($$$ct793.getYears$base().minimum.compare(date$903.get((0)))!==$$$cl1.getLarger())&&(date$903.get((0)).compare($$$ct793.getYears$base().maximum)!==$$$cl1.getLarger())))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid year value: \'years.minimum <= date[0] && date[0] <= years.maximum\' at Chronology.ceylon (116:14-116:67)"),'115:8-116:68','Chronology.ceylon'); }
        //assert at Chronology.ceylon (118:8-119:53)
        if (!(date$903.equals($$gregorian.dateFrom($$gregorian.fixedFrom(date$903))))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Invalid date value: \' date == dateFrom( fixedFrom(date) ) \' at Chronology.ceylon (119:14-119:52)"),'118:8-119:53','Chronology.ceylon'); }
    }
    $$gregorian.checkDate=checkDate;
    checkDate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Assert that specified date has it conjunction of year, month and day as valid gregorian values.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','checkDate']};};
    function newYear(year$904){
        return fixed$896(year$904,$$gregorian.january,(1));
    }
    $$gregorian.newYear=newYear;
    newYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns fixed date value of the first day of the gregorian year.",64)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','newYear']};};
    function yearEnd(year$905){
        return fixed$896(year$905,$$gregorian.december,(31));
    }
    $$gregorian.yearEnd=yearEnd;
    yearEnd.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns fixed date value of the last day of the gregorian year.",63)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','yearEnd']};};
    function yearFrom(fixed$906){
        var d0$907=fixed$906.minus($$gregorian.epoch);
        $prop$getD0$907={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','d0']};}};
        $prop$getD0$907.get=function(){return d0$907};
        var n400$908=$$$ct793.floorDiv$internal$math(d0$907,$$$ct793.getDays$base().perFourCenturies);
        $prop$getN400$908={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','n400']};}};
        $prop$getN400$908.get=function(){return n400$908};
        var d1$909=$$$ct793.floorMod$internal$math(d0$907,$$$ct793.getDays$base().perFourCenturies);
        $prop$getD1$909={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','d1']};}};
        $prop$getD1$909.get=function(){return d1$909};
        var n100$910=$$$ct793.floorDiv$internal$math(d1$909,$$$ct793.getDays$base().perCentury);
        $prop$getN100$910={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','n100']};}};
        $prop$getN100$910.get=function(){return n100$910};
        var d2$911=$$$ct793.floorMod$internal$math(d1$909,$$$ct793.getDays$base().perCentury);
        $prop$getD2$911={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','d2']};}};
        $prop$getD2$911.get=function(){return d2$911};
        var n4$912=$$$ct793.floorDiv$internal$math(d2$911,$$$ct793.getDays$base().inFourYears);
        $prop$getN4$912={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','n4']};}};
        $prop$getN4$912.get=function(){return n4$912};
        var d3$913=$$$ct793.floorMod$internal$math(d2$911,$$$ct793.getDays$base().inFourYears);
        $prop$getD3$913={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','d3']};}};
        $prop$getD3$913.get=function(){return d3$913};
        var n1$914=$$$ct793.floorDiv$internal$math(d3$913,$$$ct793.getDays$base().perYear);
        $prop$getN1$914={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','n1']};}};
        $prop$getN1$914.get=function(){return n1$914};
        var year$915=(400).times(n400$908).plus((100).times(n100$910)).plus((4).times(n4$912)).plus(n1$914);
        $prop$getYear$915={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','yearFrom','$at','year']};}};
        $prop$getYear$915.get=function(){return year$915};
        return (opt$916=((n100$910.equals((4))||n1$914.equals((4)))?year$915:null),opt$916!==null?opt$916:year$915.plus((1)));
        var opt$916;
    }
    $$gregorian.yearFrom=yearFrom;
    yearFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'fixed',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a gregorian year number of the fixed date value.",56)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','yearFrom']};};
    function dateFrom(date$917){
        var year$918=$$gregorian.yearFrom(date$917);
        $prop$getYear$918={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','dateFrom','$at','year']};}};
        $prop$getYear$918.get=function(){return year$918};
        var priorDays$919=date$917.minus($$gregorian.newYear(year$918));
        $prop$getPriorDays$919={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','dateFrom','$at','priorDays']};}};
        $prop$getPriorDays$919.get=function(){return priorDays$919};
        var correction$920=(opt$921=(date$917.compare(fixed$896(year$918,$$gregorian.march,(1))).equals($$$cl1.getSmaller())?(0):null),opt$921!==null?opt$921:(opt$922=($$gregorian.leapYear(year$918)?(1):null),opt$922!==null?opt$922:(2)));
        $prop$getCorrection$920={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','dateFrom','$at','correction']};}};
        $prop$getCorrection$920.get=function(){return correction$920};
        var opt$921,opt$922;
        var month$923=$$$ct793.floorDiv$internal$math((12).times(priorDays$919.plus(correction$920)).plus((373)),(367));
        $prop$getMonth$923={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','dateFrom','$at','month']};}};
        $prop$getMonth$923.get=function(){return month$923};
        var day$924=(1).plus(date$917).minus(fixed$896(year$918,month$923,(1)));
        $prop$getDay$924={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.chronology','gregorian','$m','dateFrom','$at','day']};}};
        $prop$getDay$924.get=function(){return day$924};
        return $$$cl1.Tuple(year$918,$$$cl1.Tuple(month$923,$$$cl1.Tuple(day$924,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});
    }
    $$gregorian.dateFrom=dateFrom;
    dateFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Converts the fixed date value to an equivalent gregorian date.",62)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.chronology','gregorian','$m','dateFrom']};};
    function monthFrom(date$925){
        return $$gregorian.dateFrom(date$925).get((1));
    }
    $$gregorian.monthFrom=monthFrom;
    monthFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Retunrs the month number of the gregorian calendar from the fixed date value.",77)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','monthFrom']};};
    function dayFrom(date$926){
        return $$gregorian.dateFrom(date$926).get((2));
    }
    $$gregorian.dayFrom=dayFrom;
    dayFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns day of month value of the fixed date value.",51)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','dayFrom']};};
    function dayOfWeekFrom(date$927){
        return $$$ct793.floorMod$internal$math(date$927,(7));
    }
    $$gregorian.dayOfWeekFrom=dayOfWeekFrom;
    dayOfWeekFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:gregorian$893$chronology,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of week_ value for the specified fixed date value.",63)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian','$m','dayOfWeekFrom']};};
    return $$gregorian;
}
function $init$gregorian$893$chronology(){
    if (gregorian$893$chronology.$$===undefined){
        $$$cl1.initTypeProto(gregorian$893$chronology,'ceylon.time.chronology::gregorian',GregorianCalendar$chronology);
    }
    return gregorian$893$chronology;
}
exports.$init$gregorian$893$chronology=$init$gregorian$893$chronology;
$init$gregorian$893$chronology();
var gregorian$928$chronology=gregorian$893$chronology();
var getGregorian$chronology=function(){
    return gregorian$928$chronology;
}
exports.getGregorian$chronology=getGregorian$chronology;
getGregorian$chronology.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:gregorian$893$chronology},$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the implementation of all calculations for\nthe rules based on Gregorian Calendar.",92)),$$$cl1.shared()];},d:['ceylon.time.chronology','gregorian']};};
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
    }
    return Clock;
}
exports.$init$Clock=$init$Clock;
$init$Clock();
function systemTime$929(){
    var $$systemTime=new systemTime$929.$$;
    Clock($$systemTime);
    var milliseconds=function (){
        return $$$cl1.getProcess().milliseconds;
    };
    milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:systemTime$929,$an:function(){return[$$$cl1.doc($$$cl1.String("Return number of milliseconds from system time.",47)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','systemTime','$m','milliseconds']};};
    $$systemTime.milliseconds=milliseconds;
    var instant=function (){
        return Instant($$systemTime.milliseconds());
    };
    instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:systemTime$929,$an:function(){return[$$$cl1.doc($$$cl1.String("Return current instant from system time.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','systemTime','$m','instant']};};
    $$systemTime.instant=instant;
    return $$systemTime;
}
function $init$systemTime$929(){
    if (systemTime$929.$$===undefined){
        $$$cl1.initTypeProto(systemTime$929,'ceylon.time::systemTime',$$$cl1.Basic,$init$Clock());
    }
    return systemTime$929;
}
exports.$init$systemTime$929=$init$systemTime$929;
$init$systemTime$929();
var systemTime$930=systemTime$929();
var getSystemTime=function(){
    return systemTime$930;
}
exports.getSystemTime=getSystemTime;
getSystemTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:systemTime$929},$an:function(){return[$$$cl1.doc($$$cl1.String("Gets a clock that obtains the current instant using the best available system clock.",84)),$$$cl1.shared()];},d:['ceylon.time','systemTime']};};
$prop$getSystemTime={get:getSystemTime,$$metamodel$$:getSystemTime.$$metamodel$$};
exports.$prop$getSystemTime=$prop$getSystemTime;
function fixedTime(instant$931){
    
    var case$932=instant$931;
    if ($$$cl1.isOfType(instant$931,{t:Instant})) {
        return FixedInstant(case$932);
    }else if ($$$cl1.isOfType(instant$931,{t:$$$cl1.Integer})) {
        return FixedMilliseconds(case$932);
    }
}
exports.fixedTime=fixedTime;
fixedTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'instant',$mt:'prm',$t:{ t:'u', l:[{t:Instant},{t:$$$cl1.Integer}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Gets a clock that always returns the same instant in the UTC time-zone.",71)),$$$cl1.shared()];},d:['ceylon.time','fixedTime']};};
function FixedInstant(fixedInstant$933, $$fixedInstant){
    $init$FixedInstant();
    if ($$fixedInstant===undefined)$$fixedInstant=new FixedInstant.$$;
    $$fixedInstant.fixedInstant$933_=fixedInstant$933;
    Clock($$fixedInstant);
    $$$cl1.defineAttr($$fixedInstant,'fixedInstant$933',function(){return this.fixedInstant$933_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$cont:FixedInstant,d:['ceylon.time','FixedInstant','$at','fixedInstant']};});
    var milliseconds=function (){
        return fixedInstant$933.millisecondsOfEpoch;
    };
    milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:FixedInstant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns milliseconds from the fixed instant.",44)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedInstant','$m','milliseconds']};};
    $$fixedInstant.milliseconds=milliseconds;
    var instant=function (){
        return fixedInstant$933;
    };
    instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:FixedInstant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the fixed instant.",26)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedInstant','$m','instant']};};
    $$fixedInstant.instant=instant;
    return $$fixedInstant;
}
FixedInstant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing.",100))];},d:['ceylon.time','FixedInstant']};};
function $init$FixedInstant(){
    if (FixedInstant.$$===undefined){
        $$$cl1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',$$$cl1.Basic,$init$Clock());
    }
    return FixedInstant;
}
exports.$init$FixedInstant=$init$FixedInstant;
$init$FixedInstant();
function FixedMilliseconds(fixedMilliseconds$934, $$fixedMilliseconds){
    $init$FixedMilliseconds();
    if ($$fixedMilliseconds===undefined)$$fixedMilliseconds=new FixedMilliseconds.$$;
    $$fixedMilliseconds.fixedMilliseconds$934_=fixedMilliseconds$934;
    Clock($$fixedMilliseconds);
    $$$cl1.defineAttr($$fixedMilliseconds,'fixedMilliseconds$934',function(){return this.fixedMilliseconds$934_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:FixedMilliseconds,d:['ceylon.time','FixedMilliseconds','$at','fixedMilliseconds']};});
    var milliseconds=function (){
        return fixedMilliseconds$934;
    };
    milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:FixedMilliseconds,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the fixed milliseconds.",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedMilliseconds','$m','milliseconds']};};
    $$fixedMilliseconds.milliseconds=milliseconds;
    var instant=function (){
        return Instant(fixedMilliseconds$934);
    };
    instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:FixedMilliseconds,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the instant from the fixed milliseconds.",48)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','FixedMilliseconds','$m','instant']};};
    $$fixedMilliseconds.instant=instant;
    return $$fixedMilliseconds;
}
FixedMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of a clock that always returns the same instant.\n\nThis is typically used for testing.",100))];},d:['ceylon.time','FixedMilliseconds']};};
function $init$FixedMilliseconds(){
    if (FixedMilliseconds.$$===undefined){
        $$$cl1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',$$$cl1.Basic,$init$Clock());
    }
    return FixedMilliseconds;
}
exports.$init$FixedMilliseconds=$init$FixedMilliseconds;
$init$FixedMilliseconds();
var offsetTime=function (baseClock$935,offset$936){
    return OffsetClock(baseClock$935,offset$936);
};
offsetTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'baseClock',$mt:'prm',$t:{t:Clock},$an:function(){return[];}},{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an implementation of a clock that always returns a \nconstant offset from the value of the provided clock.",113)),$$$cl1.shared()];},d:['ceylon.time','offsetTime']};};
exports.offsetTime=offsetTime;
function OffsetClock(baseClock$937, offset$938, $$offsetClock){
    $init$OffsetClock();
    if ($$offsetClock===undefined)$$offsetClock=new OffsetClock.$$;
    $$offsetClock.baseClock$937_=baseClock$937;
    $$offsetClock.offset$938_=offset$938;
    Clock($$offsetClock);
    $$$cl1.defineAttr($$offsetClock,'baseClock$937',function(){return this.baseClock$937_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Clock},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','baseClock']};});
    $$$cl1.defineAttr($$offsetClock,'offset$938',function(){return this.offset$938_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetClock,d:['ceylon.time','OffsetClock','$at','offset']};});
    var instant=function (){
        return Instant($$offsetClock.milliseconds());
    };
    instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$cont:OffsetClock,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','OffsetClock','$m','instant']};};
    $$offsetClock.instant=instant;
    var milliseconds=function (){
        return baseClock$937.milliseconds().plus(offset$938);
    };
    milliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:OffsetClock,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','OffsetClock','$m','milliseconds']};};
    $$offsetClock.milliseconds=milliseconds;
    return $$offsetClock;
}
OffsetClock.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],$an:function(){return[$$$cl1.doc($$$cl1.String("An implementation of a [[Clock]] that returns tilem with a constant \noffset from the provided clock.",100))];},d:['ceylon.time','OffsetClock']};};
function $init$OffsetClock(){
    if (OffsetClock.$$===undefined){
        $$$cl1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',$$$cl1.Basic,$init$Clock());
    }
    return OffsetClock;
}
exports.$init$OffsetClock=$init$OffsetClock;
$init$OffsetClock();
function Date($$date){
    $$$ct793.ReadableDate$base($$date);
    $$$ct793.DateBehavior$base({Element:{t:Date}},$$date);
    $$$cl1.add_type_arg($$date,'Element',{t:Date});
    $$$cl1.Ordinal({Other:{t:Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:Date});
    $$$cl1.Comparable({Other:{t:Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:Date});
    $$$cl1.Enumerable({Other:{t:Date}},$$date);
    $$$cl1.add_type_arg($$date,'Other',{t:Date});
}
Date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:$$$ct793.ReadableDate$base},{t:$$$ct793.DateBehavior$base,a:{Element:{t:Date}}},{t:$$$cl1.Ordinal,a:{Other:{t:Date}}},{t:$$$cl1.Comparable,a:{Other:{t:Date}}},{t:$$$cl1.Enumerable,a:{Other:{t:Date}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An interface for date objects in the ISO-8601 calendar system.\n\nA date is often viewed as triple of year-month-day values. \nThis interface also defines access to other date fields such as \nday-of-year, day-of-week and week-of-year.",231)),$$$cl1.shared()];},d:['ceylon.time','Date']};};
exports.Date=Date;
function $init$Date(){
    if (Date.$$===undefined){
        $$$cl1.initTypeProto(Date,'ceylon.time::Date',$$$ct793.$init$ReadableDate$base(),$$$ct793.$init$DateBehavior$base(),$$$cl1.Ordinal,$$$cl1.Comparable,$$$cl1.Enumerable);
    }
    return Date;
}
exports.$init$Date=$init$Date;
$init$Date();
function today(clock$939,timeZone$940){
    if(clock$939===undefined){clock$939=getSystemTime();}
    if(timeZone$940===undefined){timeZone$940=$$$ct793.getTimeZone$timezone().system;}
    return clock$939.instant().date(timeZone$940);
}
exports.today=today;
today.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{t:Clock},$an:function(){return[];}},{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current date according to the provided system clock and time zone.",74)),$$$cl1.shared()];},d:['ceylon.time','today']};};
function date(year$941,month$942,day$943){
    return $$$ct793.gregorianDate$internal(year$941,month$942,day$943);
}
exports.date=date;
date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct793.Month$base}]},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date based on the specified year, month and day of month values.",74)),$$$cl1.shared()];},d:['ceylon.time','date']};};
function DateRange(from, to, step, $$dateRange){
    $init$DateRange();
    if ($$dateRange===undefined)$$dateRange=new DateRange.$$;
    $$dateRange.$$targs$$={StepBy:{t:$$$ct793.UnitOfDate$base},Element:{t:Date}};
    if(step===undefined){step=$$$ct793.getDays$base();}
    $$$ct793.Range$base({StepBy:{t:$$$ct793.UnitOfDate$base},Element:{t:Date}},$$dateRange);
    $$$cl1.add_type_arg($$dateRange,'StepBy',{t:$$$ct793.UnitOfDate$base});
    $$$cl1.add_type_arg($$dateRange,'Element',{t:Date});
    $$dateRange.equals$$ceylon$time$base$Range=$$dateRange.equals;
    var from=from;
    $$$cl1.defineAttr($$dateRange,'from',function(){return from;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','from']};});
    $$dateRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','from']};}};
    $$dateRange.$prop$getFrom.get=function(){return from};
    var to=to;
    $$$cl1.defineAttr($$dateRange,'to',function(){return to;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','to']};});
    $$dateRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Date},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','to']};}};
    $$dateRange.$prop$getTo.get=function(){return to};
    var step=step;
    $$$cl1.defineAttr($$dateRange,'step',function(){return step;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.UnitOfDate$base},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','step']};});
    $$dateRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.UnitOfDate$base},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','step']};}};
    $$dateRange.$prop$getStep.get=function(){return step};
    $$$cl1.defineAttr($$dateRange,'period',function(){return $$dateRange.from.periodTo($$dateRange.to);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','period']};});
    $$dateRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','period']};}};
    $$dateRange.$prop$getPeriod.get=function(){return period};
    $$$cl1.defineAttr($$dateRange,'duration',function(){return Duration($$dateRange.to.dayOfEra.minus($$dateRange.from.dayOfEra).times($$$ct793.getMilliseconds$base().perDay));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','duration']};});
    $$dateRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$at','duration']};}};
    $$dateRange.$prop$getDuration.get=function(){return duration};
    var equals=function (other$944){
        return $$dateRange.equals$$ceylon$time$base$Range(other$944);
    };
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','equals']};};
    $$dateRange.equals=equals;
    function overlap(other$945){
        var response$946=$$$ct793.overlap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),$$$cl1.Tuple(other$945.from,$$$cl1.Tuple(other$945.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),{Value:{t:Date}});
        $prop$getResponse$946={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}},{t:$$$cl1.Empty}]},d:['ceylon.time','DateRange','$m','overlap','$at','response']};}};
        $prop$getResponse$946.get=function(){return response$946};
        var response$947;
        if($$$cl1.isOfType((response$947=response$946),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}})){
            return DateRange(response$947.get((0)),response$947.get((1)));
        }
        //assert at DateRange.ceylon (81:8-81:34)
        var response$948;
        if (!($$$cl1.isOfType((response$948=response$946),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at DateRange.ceylon (81:14-81:33)"),'81:8-81:34','DateRange.ceylon'); }
        return response$948;
    }
    $$dateRange.overlap=overlap;
    overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfDate$base},Element:{t:Date}}},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','overlap']};};
    function gap(other$949){
        var response$950=$$$ct793.gap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),$$$cl1.Tuple(other$949.from,$$$cl1.Tuple(other$949.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),{Value:{t:Date}});
        $prop$getResponse$950={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}},{t:$$$cl1.Empty}]},d:['ceylon.time','DateRange','$m','gap','$at','response']};}};
        $prop$getResponse$950.get=function(){return response$950};
        
        var case$951=response$950;
        if ($$$cl1.isOfType(response$950,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}})) {
            return (opt$952=(case$951.get((0)).successor.compare(case$951.get((1))).equals($$$cl1.getSmaller())?DateRange(case$951.get((0)).successor,case$951.get((1)).predecessor):null),opt$952!==null?opt$952:$$$cl1.getEmpty());
            var opt$952;
        }else if ($$$cl1.isOfType(response$950,{t:$$$cl1.Empty})) {
            return case$951;
        }
    }
    $$dateRange.gap=gap;
    gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfDate$base},Element:{t:Date}}},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','gap']};};
    function iterator(){
        function listIterator$953($$targs$$){
            var $$listIterator$953=new listIterator$953.$$;
            $$listIterator$953.$$targs$$=$$targs$$;
            $$$cl1.Iterator({Element:{t:Date}},$$listIterator$953);
            $$$cl1.add_type_arg($$listIterator$953,'Element',{t:Date});
            var count$954=(0);
            $$$cl1.defineAttr($$listIterator$953,'count$954',function(){return count$954;},function(count$955){return count$954=count$955;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$953,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$at','count']};});
            $$listIterator$953.$prop$getCount$954={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$953,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$at','count']};}};
            $$listIterator$953.$prop$getCount$954.get=function(){return count$954};
            function next(){
                var date$956=(opt$957=($$dateRange.from.compare($$dateRange.to).equals($$$cl1.getLarger())?previousByStep$958((oldcount$959=count$954,count$954=oldcount$959.successor,oldcount$959)):null),opt$957!==null?opt$957:nextByStep$960((oldcount$961=count$954,count$954=oldcount$961.successor,oldcount$961)));
                $prop$getDate$956={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Date},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$m','next','$at','date']};}};
                $prop$getDate$956.get=function(){return date$956};
                var opt$957,oldcount$959,oldcount$961;
                var continueLoop$962=(opt$963=(($$dateRange.from.compare($$dateRange.to)!==$$$cl1.getLarger())?(date$956.compare($$dateRange.to)!==$$$cl1.getLarger()):null),opt$963!==null?opt$963:(date$956.compare($$dateRange.to)!==$$$cl1.getSmaller()));
                $prop$getContinueLoop$962={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$m','next','$at','continueLoop']};}};
                $prop$getContinueLoop$962.get=function(){return continueLoop$962};
                var opt$963;
                return (opt$964=(continueLoop$962?date$956:null),opt$964!==null?opt$964:$$$cl1.getFinished());
                var opt$964;
            }
            $$listIterator$953.next=next;
            next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Date},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$953,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','iterator','$o','listIterator','$m','next']};};
            return $$listIterator$953;
        }
        function $init$listIterator$953(){
            if (listIterator$953.$$===undefined){
                $$$cl1.initTypeProto(listIterator$953,'ceylon.time::DateRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$953;
        }
        $init$listIterator$953();
        var listIterator$965=listIterator$953({Element:{t:Date}});
        var getListIterator$965=function(){
            return listIterator$965;
        }
        getListIterator$965.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$953},d:['ceylon.time','DateRange','$m','iterator','$at','listIterator']};};
        $prop$getListIterator$965={get:getListIterator$965,$$metamodel$$:getListIterator$965.$$metamodel$$};
        return getListIterator$965();
    }
    $$dateRange.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:Date}}},$ps:[],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','iterator']};};
    function stepBy(step$966){
        return (opt$967=(step$966.equals($$dateRange.step)?$$dateRange:null),opt$967!==null?opt$967:DateRange($$dateRange.from,$$dateRange.to,step$966));
        var opt$967;
    }
    $$dateRange.stepBy=stepBy;
    stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:$$$ct793.UnitOfDate$base},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateRange','$m','stepBy']};};
    nextByStep$960$defs$jump=function(jump$968){return (1);};
    function nextByStep$960(jump$968){
        if(jump$968===undefined){jump$968=nextByStep$960$defs$jump(jump$968);}
        
        var case$969=$$dateRange.step;
        if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfYear$base})) {
            return $$dateRange.from.plusYears(jump$968);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfMonth$base})) {
            return $$dateRange.from.plusMonths(jump$968);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfDay$base})) {
            return $$dateRange.from.plusDays(jump$968);
        }
    };nextByStep$960.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateRange','$m','nextByStep']};};
    previousByStep$958$defs$jump=function(jump$970){return (1);};
    function previousByStep$958(jump$970){
        if(jump$970===undefined){jump$970=previousByStep$958$defs$jump(jump$970);}
        
        var case$971=$$dateRange.step;
        if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfYear$base})) {
            return $$dateRange.from.minusYears(jump$970);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfMonth$base})) {
            return $$dateRange.from.minusMonths(jump$970);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct793.UnitOfDay$base})) {
            return $$dateRange.from.minusDays(jump$970);
        }
    };previousByStep$958.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateRange','$m','previousByStep']};};
    return $$dateRange;
}
DateRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfDate$base},Element:{t:Date}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[Date]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateRange]] types\n* Recover the gap between [[DateRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] cases\n",394)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time.base'),$$$ct793.Range$base)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time','DateRange']};};
exports.DateRange=DateRange;
function $init$DateRange(){
    if (DateRange.$$===undefined){
        $$$cl1.initTypeProto(DateRange,'ceylon.time::DateRange',$$$cl1.Basic,$$$ct793.$init$Range$base());
    }
    return DateRange;
}
exports.$init$DateRange=$init$DateRange;
$init$DateRange();
function DateTime($$dateTime){
    $$$ct793.ReadableDateTime$base($$dateTime);
    $$$ct793.DateTimeBehavior$base({TimeType:{t:Time},DateType:{t:Date},Element:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'TimeType',{t:Time});
    $$$cl1.add_type_arg($$dateTime,'DateType',{t:Date});
    $$$cl1.add_type_arg($$dateTime,'Element',{t:DateTime});
    $$$cl1.Ordinal({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$$cl1.Enumerable({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$$cl1.Comparable({Other:{t:DateTime}},$$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$dateTime.instant$defs$timeZone=function(timeZone$972){return $$$ct793.getTimeZone$timezone().system;};
}
DateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:$$$ct793.ReadableDateTime$base},{t:$$$ct793.DateTimeBehavior$base,a:{TimeType:{t:Time},DateType:{t:Date},Element:{t:DateTime}}},{t:$$$cl1.Ordinal,a:{Other:{t:DateTime}}},{t:$$$cl1.Enumerable,a:{Other:{t:DateTime}}},{t:$$$cl1.Comparable,a:{Other:{t:DateTime}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An abstract moment in time (like _4pm, October 21. 2012_).\n\nDateTime does not contain a time zone information, so You can not use it to record or \nschedule events.",163)),$$$cl1.shared()];},d:['ceylon.time','DateTime']};};
exports.DateTime=DateTime;
function $init$DateTime(){
    if (DateTime.$$===undefined){
        $$$cl1.initTypeProto(DateTime,'ceylon.time::DateTime',$$$ct793.$init$ReadableDateTime$base(),$$$ct793.$init$DateTimeBehavior$base(),$$$cl1.Ordinal,$$$cl1.Enumerable,$$$cl1.Comparable);
    }
    return DateTime;
}
exports.$init$DateTime=$init$DateTime;
$init$DateTime();
function dateTime(year$973,month$974,day$975,hours$976,minutes$977,seconds$978,milliseconds$979){
    if(hours$976===undefined){hours$976=(0);}
    if(minutes$977===undefined){minutes$977=(0);}
    if(seconds$978===undefined){seconds$978=(0);}
    if(milliseconds$979===undefined){milliseconds$979=(0);}
    return $$$ct793.GregorianDateTime$internal(date(year$973,month$974,day$975),time(hours$976,minutes$977,seconds$978,milliseconds$979));
}
exports.dateTime=dateTime;
dateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct793.Month$base}]},$an:function(){return[];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hours',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date based on the specified year, month and day of month values.",74)),$$$cl1.shared()];},d:['ceylon.time','dateTime']};};
function DateTimeRange(from, to, step, $$dateTimeRange){
    $init$DateTimeRange();
    if ($$dateTimeRange===undefined)$$dateTimeRange=new DateTimeRange.$$;
    $$dateTimeRange.$$targs$$={StepBy:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},Element:{t:DateTime}};
    if(step===undefined){step=$$$ct793.getMilliseconds$base();}
    $$$ct793.Range$base({StepBy:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},Element:{t:DateTime}},$$dateTimeRange);
    $$$cl1.add_type_arg($$dateTimeRange,'Element',{t:DateTime});
    $$dateTimeRange.equals$$ceylon$time$base$Range=$$dateTimeRange.equals;
    var from=from;
    $$$cl1.defineAttr($$dateTimeRange,'from',function(){return from;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','from']};});
    $$dateTimeRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','from']};}};
    $$dateTimeRange.$prop$getFrom.get=function(){return from};
    var to=to;
    $$$cl1.defineAttr($$dateTimeRange,'to',function(){return to;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','to']};});
    $$dateTimeRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','to']};}};
    $$dateTimeRange.$prop$getTo.get=function(){return to};
    var step=step;
    $$$cl1.defineAttr($$dateTimeRange,'step',function(){return step;},undefined,function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','step']};});
    $$dateTimeRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','step']};}};
    $$dateTimeRange.$prop$getStep.get=function(){return step};
    $$$cl1.defineAttr($$dateTimeRange,'period',function(){return $$dateTimeRange.from.periodTo($$dateTimeRange.to);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','period']};});
    $$dateTimeRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','period']};}};
    $$dateTimeRange.$prop$getPeriod.get=function(){return period};
    $$$cl1.defineAttr($$dateTimeRange,'duration',function(){return Duration($$dateTimeRange.to.instant().millisecondsOfEpoch.minus($$dateTimeRange.from.instant().millisecondsOfEpoch));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','duration']};});
    $$dateTimeRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$at','duration']};}};
    $$dateTimeRange.$prop$getDuration.get=function(){return duration};
    var equals=function (other$980){
        return $$dateTimeRange.equals$$ceylon$time$base$Range(other$980);
    };
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','equals']};};
    $$dateTimeRange.equals=equals;
    function overlap(other$981){
        var response$982=$$$ct793.overlap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$981.from,$$$cl1.Tuple(other$981.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
        $prop$getResponse$982={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}},{t:$$$cl1.Empty}]},d:['ceylon.time','DateTimeRange','$m','overlap','$at','response']};}};
        $prop$getResponse$982.get=function(){return response$982};
        var response$983;
        if($$$cl1.isOfType((response$983=response$982),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})){
            return DateTimeRange(response$983);
        }
        //assert at DateTimeRange.ceylon (80:8-80:34)
        var response$984;
        if (!($$$cl1.isOfType((response$984=response$982),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at DateTimeRange.ceylon (80:14-80:33)"),'80:8-80:34','DateTimeRange.ceylon'); }
        return response$984;
    }
    $$dateTimeRange.overlap=overlap;
    overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},Element:{t:DateTime}}},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','overlap']};};
    function gap(other$985){
        var response$986=$$$ct793.gap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$985.from,$$$cl1.Tuple(other$985.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
        $prop$getResponse$986={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}},{t:$$$cl1.Empty}]},d:['ceylon.time','DateTimeRange','$m','gap','$at','response']};}};
        $prop$getResponse$986.get=function(){return response$986};
        
        var case$987=response$986;
        if ($$$cl1.isOfType(response$986,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})) {
            return (opt$988=(case$987.get((0)).successor.compare(case$987.get((1))).equals($$$cl1.getSmaller())?DateTimeRange(case$987.get((0)).successor,case$987.get((1)).predecessor):null),opt$988!==null?opt$988:$$$cl1.getEmpty());
            var opt$988;
        }else if ($$$cl1.isOfType(response$986,{t:$$$cl1.Empty})) {
            return case$987;
        }
    }
    $$dateTimeRange.gap=gap;
    gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},Element:{t:DateTime}}},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','gap']};};
    function iterator(){
        function listIterator$989($$targs$$){
            var $$listIterator$989=new listIterator$989.$$;
            $$listIterator$989.$$targs$$=$$targs$$;
            $$$cl1.Iterator({Element:{t:DateTime}},$$listIterator$989);
            $$$cl1.add_type_arg($$listIterator$989,'Element',{t:DateTime});
            var count$990=(0);
            $$$cl1.defineAttr($$listIterator$989,'count$990',function(){return count$990;},function(count$991){return count$990=count$991;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$989,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$at','count']};});
            $$listIterator$989.$prop$getCount$990={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$989,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$at','count']};}};
            $$listIterator$989.$prop$getCount$990.get=function(){return count$990};
            function next(){
                var date$992=(opt$993=($$dateTimeRange.from.compare($$dateTimeRange.to).equals($$$cl1.getLarger())?previousByStep$994((oldcount$995=count$990,count$990=oldcount$995.successor,oldcount$995)):null),opt$993!==null?opt$993:nextByStep$996((oldcount$997=count$990,count$990=oldcount$997.successor,oldcount$997)));
                $prop$getDate$992={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$m','next','$at','date']};}};
                $prop$getDate$992.get=function(){return date$992};
                var opt$993,oldcount$995,oldcount$997;
                var continueLoop$998=(opt$999=(($$dateTimeRange.from.compare($$dateTimeRange.to)!==$$$cl1.getLarger())?(date$992.compare($$dateTimeRange.to)!==$$$cl1.getLarger()):null),opt$999!==null?opt$999:(date$992.compare($$dateTimeRange.to)!==$$$cl1.getSmaller()));
                $prop$getContinueLoop$998={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$m','next','$at','continueLoop']};}};
                $prop$getContinueLoop$998.get=function(){return continueLoop$998};
                var opt$999;
                return (opt$1000=(continueLoop$998?date$992:null),opt$1000!==null?opt$1000:$$$cl1.getFinished());
                var opt$1000;
            }
            $$listIterator$989.next=next;
            next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTime},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$989,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','iterator','$o','listIterator','$m','next']};};
            return $$listIterator$989;
        }
        function $init$listIterator$989(){
            if (listIterator$989.$$===undefined){
                $$$cl1.initTypeProto(listIterator$989,'ceylon.time::DateTimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$989;
        }
        $init$listIterator$989();
        var listIterator$1001=listIterator$989({Element:{t:DateTime}});
        var getListIterator$1001=function(){
            return listIterator$1001;
        }
        getListIterator$1001.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$989},d:['ceylon.time','DateTimeRange','$m','iterator','$at','listIterator']};};
        $prop$getListIterator$1001={get:getListIterator$1001,$$metamodel$$:getListIterator$1001.$$metamodel$$};
        return getListIterator$1001();
    }
    $$dateTimeRange.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:DateTime}}},$ps:[],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','iterator']};};
    function stepBy(step$1002){
        return (opt$1003=(step$1002.equals($$dateTimeRange.step)?$$dateTimeRange:null),opt$1003!==null?opt$1003:DateTimeRange($$dateTimeRange.from,$$dateTimeRange.to,step$1002));
        var opt$1003;
    }
    $$dateTimeRange.stepBy=stepBy;
    stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','DateTimeRange','$m','stepBy']};};
    nextByStep$996$defs$jump=function(jump$1004){return (1);};
    function nextByStep$996(jump$1004){
        if(jump$1004===undefined){jump$1004=nextByStep$996$defs$jump(jump$1004);}
        var step$1005;
        if($$$cl1.isOfType((step$1005=$$dateTimeRange.step),{t:$$$ct793.UnitOfDate$base})){
            
            var case$1006=step$1005;
            if ($$$cl1.isOfType(step$1005,{t:$$$ct793.UnitOfYear$base})) {
                return $$dateTimeRange.from.plusYears(jump$1004);
            }else if ($$$cl1.isOfType(step$1005,{t:$$$ct793.UnitOfMonth$base})) {
                return $$dateTimeRange.from.plusMonths(jump$1004);
            }else if ($$$cl1.isOfType(step$1005,{t:$$$ct793.UnitOfDay$base})) {
                return $$dateTimeRange.from.plusDays(jump$1004);
            }
        }
        var step$1007;
        if($$$cl1.isOfType((step$1007=$$dateTimeRange.step),{t:$$$ct793.UnitOfTime$base})){
            
            var case$1008=step$1007;
            if ($$$cl1.isOfType(step$1007,{t:$$$ct793.UnitOfHour$base})) {
                return $$dateTimeRange.from.plusHours(jump$1004);
            }else if ($$$cl1.isOfType(step$1007,{t:$$$ct793.UnitOfMinute$base})) {
                return $$dateTimeRange.from.plusMinutes(jump$1004);
            }else if ($$$cl1.isOfType(step$1007,{t:$$$ct793.UnitOfSecond$base})) {
                return $$dateTimeRange.from.plusSeconds(jump$1004);
            }else if ($$$cl1.isOfType(step$1007,{t:$$$ct793.UnitOfMillisecond$base})) {
                return $$dateTimeRange.from.plusMilliseconds(jump$1004);
            }
        }
        throw $$$cl1.wrapexc($$$cl1.Exception(),'150:8-150:13','ceylon/time/DateTimeRange.ceylon');
    };nextByStep$996.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateTimeRange','$m','nextByStep']};};
    previousByStep$994$defs$jump=function(jump$1009){return (1);};
    function previousByStep$994(jump$1009){
        if(jump$1009===undefined){jump$1009=previousByStep$994$defs$jump(jump$1009);}
        var step$1010;
        if($$$cl1.isOfType((step$1010=$$dateTimeRange.step),{t:$$$ct793.UnitOfDate$base})){
            
            var case$1011=step$1010;
            if ($$$cl1.isOfType(step$1010,{t:$$$ct793.UnitOfYear$base})) {
                return $$dateTimeRange.from.minusYears(jump$1009);
            }else if ($$$cl1.isOfType(step$1010,{t:$$$ct793.UnitOfMonth$base})) {
                return $$dateTimeRange.from.minusMonths(jump$1009);
            }else if ($$$cl1.isOfType(step$1010,{t:$$$ct793.UnitOfDay$base})) {
                return $$dateTimeRange.from.minusDays(jump$1009);
            }
        }
        var step$1012;
        if($$$cl1.isOfType((step$1012=$$dateTimeRange.step),{t:$$$ct793.UnitOfTime$base})){
            
            var case$1013=step$1012;
            if ($$$cl1.isOfType(step$1012,{t:$$$ct793.UnitOfHour$base})) {
                return $$dateTimeRange.from.minusHours(jump$1009);
            }else if ($$$cl1.isOfType(step$1012,{t:$$$ct793.UnitOfMinute$base})) {
                return $$dateTimeRange.from.minusMinutes(jump$1009);
            }else if ($$$cl1.isOfType(step$1012,{t:$$$ct793.UnitOfSecond$base})) {
                return $$dateTimeRange.from.minusSeconds(jump$1009);
            }else if ($$$cl1.isOfType(step$1012,{t:$$$ct793.UnitOfMillisecond$base})) {
                return $$dateTimeRange.from.minusMilliseconds(jump$1009);
            }
        }
        throw $$$cl1.wrapexc($$$cl1.Exception(),'169:8-169:13','ceylon/time/DateTimeRange.ceylon');
    };previousByStep$994.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:DateTimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point,\nthis way is possible to not suffer with different number of days in months.",143))];},d:['ceylon.time','DateTimeRange','$m','previousByStep']};};
    return $$dateTimeRange;
}
DateTimeRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.Range$base,a:{StepBy:{ t:'u', l:[{t:$$$ct793.UnitOfDate$base},{t:$$$ct793.UnitOfTime$base}]},Element:{t:DateTime}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[DateTime]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[DateTimeRange]] types\n* Recover the gap between [[DateTimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfDate]] or [[UnitOfTime]] cases\n",424)),$$$cl1.shared()];},d:['ceylon.time','DateTimeRange']};};
exports.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
    if (DateTimeRange.$$===undefined){
        $$$cl1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',$$$cl1.Basic,$$$ct793.$init$Range$base());
    }
    return DateTimeRange;
}
exports.$init$DateTimeRange=$init$DateTimeRange;
$init$DateTimeRange();
function Duration(milliseconds, $$duration){
    $init$Duration();
    if ($$duration===undefined)$$duration=new Duration.$$;
    $$duration.$$targs$$={Value:{t:Duration},Scale:{t:$$$cl1.Integer}};
    $$$ct793.ReadableDuration$base($$duration);
    $$$cl1.Scalable({Value:{t:Duration},Scale:{t:$$$cl1.Integer}},$$duration);
    $$$cl1.add_type_arg($$duration,'Value',{t:Duration});
    $$$cl1.add_type_arg($$duration,'Scale',{t:$$$cl1.Integer});
    var milliseconds=milliseconds;
    $$$cl1.defineAttr($$duration,'milliseconds',function(){return milliseconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds of this duration.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','milliseconds']};});
    $$duration.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds of this duration.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','milliseconds']};}};
    $$duration.$prop$getMilliseconds.get=function(){return milliseconds};
    $$$cl1.defineAttr($$duration,'period',function(){return (milliseconds$1014=$$duration.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,milliseconds$1014));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this duration as a period of milliseconds.",50)),$$$cl1.shared()];},d:['ceylon.time','Duration','$at','period']};});
    $$duration.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this duration as a period of milliseconds.",50)),$$$cl1.shared()];},d:['ceylon.time','Duration','$at','period']};}};
    $$duration.$prop$getPeriod.get=function(){return period};
    var milliseconds$1014;
    $$$cl1.defineAttr($$duration,'string',function(){return $$$cl1.StringBuilder().appendAll([$$duration.milliseconds.string,$$$cl1.String("ms",2)]).string;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the string representation of this duration.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','string']};});
    $$duration.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the string representation of this duration.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$at','string']};}};
    $$duration.$prop$getString.get=function(){return string};
    function equals(other$1015){
        var other$1016;
        if($$$cl1.isOfType((other$1016=other$1015),{t:Duration})){
            return $$duration.milliseconds.equals(other$1016.milliseconds);
        }
        return false;
    }
    $$duration.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Duration is considered equal when type and milliseconds are the same.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$m','equals']};};
    var scale=function (scale$1017){
        return Duration(scale$1017.times($$duration.milliseconds));
    };
    scale.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'scale',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Duration,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a new [[Duration]] with it´s milliseconds scaled.",57)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Duration','$m','scale']};};
    $$duration.scale=scale;
    return $$duration;
}
Duration.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.ReadableDuration$base},{t:$$$cl1.Scalable,a:{Value:{t:Duration},Scale:{t:$$$cl1.Integer}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Duration specifies a discreet amount of milliseconds between two instances of time.",83)),$$$cl1.shared()];},d:['ceylon.time','Duration']};};
exports.Duration=Duration;
function $init$Duration(){
    if (Duration.$$===undefined){
        $$$cl1.initTypeProto(Duration,'ceylon.time::Duration',$$$cl1.Basic,$$$ct793.$init$ReadableDuration$base(),$$$cl1.Scalable);
    }
    return Duration;
}
exports.$init$Duration=$init$Duration;
$init$Duration();
function now(clock$1018){
    if(clock$1018===undefined){clock$1018=null;}
    var clock$1019;
    if((clock$1019=clock$1018)!==null){
        return clock$1019.instant();
    }
    return getSystemTime().instant();
}
exports.now=now;
now.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Clock}]},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Obtains the current instant from the system clock.",50)),$$$cl1.shared()];},d:['ceylon.time','now']};};
function Instant(millisecondsOfEpoch, $$instant){
    $init$Instant();
    if ($$instant===undefined)$$instant=new Instant.$$;
    $$instant.$$targs$$={Other:{t:Instant}};
    $$$ct793.ReadableInstant$base($$instant);
    $$$cl1.Comparable({Other:{t:Instant}},$$instant);
    $$$cl1.add_type_arg($$instant,'Other',{t:Instant});
    var millisecondsOfEpoch=millisecondsOfEpoch;
    $$$cl1.defineAttr($$instant,'millisecondsOfEpoch',function(){return millisecondsOfEpoch;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};});
    $$instant.$prop$getMillisecondsOfEpoch={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$at','millisecondsOfEpoch']};}};
    $$instant.$prop$getMillisecondsOfEpoch.get=function(){return millisecondsOfEpoch};
    function plus(other$1020){
        
        var case$1021=other$1020;
        if ($$$cl1.isOfType(other$1020,{t:Duration})) {
            return Instant($$instant.millisecondsOfEpoch.plus(case$1021.milliseconds));
        }else if ($$$cl1.isOfType(other$1020,{t:Period})) {
            return $$instant.dateTime().plus(case$1021).instant();
        }
    }
    $$instant.plus=plus;
    plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds a period to this instant.",30)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','plus']};};
    function minus(other$1022){
        
        var case$1023=other$1022;
        if ($$$cl1.isOfType(other$1022,{t:Duration})) {
            return Instant($$instant.millisecondsOfEpoch.minus(case$1023.milliseconds));
        }else if ($$$cl1.isOfType(other$1022,{t:Period})) {
            return $$instant.dateTime().minus(case$1023).instant();
        }
    }
    $$instant.minus=minus;
    minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts a period to this instant.",35)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','minus']};};
    function compare(other$1024){
        return $$instant.millisecondsOfEpoch.compare(other$1024.millisecondsOfEpoch);
    }
    $$instant.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Compares this instant to the _other_ instant.",45)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$m','compare']};};
    $$instant.dateTime$defs$timeZone=function(timeZone$1025){return $$$ct793.getTimeZone$timezone().system;};
    function dateTime(timeZone$1025){
        if(timeZone$1025===undefined){timeZone$1025=$$instant.dateTime$defs$timeZone(timeZone$1025);}
        return $$$ct793.GregorianDateTime$internal($$instant.date(timeZone$1025),$$instant.time(timeZone$1025));
    }
    $$instant.dateTime=dateTime;
    dateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this instant as a [[DateTime]] value.",45)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','dateTime']};};
    $$instant.date$defs$timeZone=function(timeZone$1026){return $$$ct793.getTimeZone$timezone().system;};
    function date(timeZone$1026){
        if(timeZone$1026===undefined){timeZone$1026=$$instant.date$defs$timeZone(timeZone$1026);}
        return $$$ct793.GregorianDate$internal($$$ct793.getUnixTime$chronology().fixedFromTime($$instant.millisecondsOfEpoch.plus(timeZone$1026.offset($$instant))));
    }
    $$instant.date=date;
    date.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns this instant as a [[Date]] value.",41)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','date']};};
    $$instant.time$defs$timeZone=function(timeZone$1027){return $$$ct793.getTimeZone$timezone().system;};
    function time(timeZone$1027){
        if(timeZone$1027===undefined){timeZone$1027=$$instant.time$defs$timeZone(timeZone$1027);}
        return $$$ct793.TimeOfDay$internal($$$ct793.getUnixTime$chronology().timeOfDay($$instant.millisecondsOfEpoch.plus(timeZone$1027.offset($$instant))));
    }
    $$instant.time=time;
    time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _time of day_ for this instant.",39)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','time']};};
    $$instant.zoneDateTime$defs$timeZone=function(timeZone$1028){return $$$ct793.getTimeZone$timezone().system;};
    function zoneDateTime(timeZone$1028){
        if(timeZone$1028===undefined){timeZone$1028=$$instant.zoneDateTime$defs$timeZone(timeZone$1028);}
        return $$$ct793.GregorianZonedDateTime$internal($$instant,timeZone$1028);
    }
    $$instant.zoneDateTime=zoneDateTime;
    zoneDateTime.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ZoneDateTime value for this instant.",44)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','zoneDateTime']};};
    function durationTo(other$1029){
        return Duration(other$1029.millisecondsOfEpoch.minus($$instant.millisecondsOfEpoch));
    }
    $$instant.durationTo=durationTo;
    durationTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns duration in milliseconds from this instant to the other instant.",72)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','durationTo']};};
    function durationFrom(other$1030){
        return Duration($$instant.millisecondsOfEpoch.minus(other$1030.millisecondsOfEpoch));
    }
    $$instant.durationFrom=durationFrom;
    durationFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns duration in milliseconds from other instant to this instant.",68)),$$$cl1.shared()];},d:['ceylon.time','Instant','$m','durationFrom']};};
    function equals(other$1031){
        var other$1032;
        if($$$cl1.isOfType((other$1032=other$1031),{t:Instant})){
            return $$instant.millisecondsOfEpoch.equals(other$1032.millisecondsOfEpoch);
        }
        return false;
    }
    $$instant.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Instant,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type and milliseconds of epoch.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Instant','$m','equals']};};
    return $$instant;
}
Instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.ReadableInstant$base},{t:$$$cl1.Comparable,a:{Other:{t:Instant}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("A specific instant of time on a continuous time-scale.\n\nAn instant represents a single point in time irrespective of \nany time-zone offsets or geographical locations.",166)),$$$cl1.shared()];},d:['ceylon.time','Instant']};};
exports.Instant=Instant;
function $init$Instant(){
    if (Instant.$$===undefined){
        $$$cl1.initTypeProto(Instant,'ceylon.time::Instant',$$$cl1.Basic,$$$ct793.$init$ReadableInstant$base(),$$$cl1.Comparable);
    }
    return Instant;
}
exports.$init$Instant=$init$Instant;
$init$Instant();
function AbstractDate$internal(dayOfEra, $$abstractDate){
    $init$AbstractDate$internal();
    if ($$abstractDate===undefined)$$$cl1.throwexc($$$cl1.InvocationException$meta$model($$$cl1.String("Cannot instantiate abstract class")),'?','?')
    $$$ct793.Date($$abstractDate);
    var dayOfEra=dayOfEra;
    $$$cl1.defineAttr($$abstractDate,'dayOfEra',function(){return dayOfEra;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$at','dayOfEra']};});
    $$abstractDate.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Every [[Date]] implementation should indicate it own _day of ere_ based in it´s own chronology.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$at','dayOfEra']};}};
    $$abstractDate.$prop$getDayOfEra.get=function(){return dayOfEra};
    function compare(other$1033){
        return $$abstractDate.dayOfEra.compare(other$1033.dayOfEra);
    }
    $$abstractDate.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Date},$an:function(){return[];}}],$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Dates from same chronology can be compared if they have same _day of era_.",74)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$m','compare']};};
    function equals(other$1034){
        var other$1035;
        if($$$cl1.isOfType((other$1035=other$1034),{t:AbstractDate$internal})){
            return $$abstractDate.dayOfEra.equals(other$1035.dayOfEra);
        }
        return false;
    }
    $$abstractDate.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:AbstractDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Dates from same chronology can be considered equal if they have same _day of era_.",82)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','AbstractDate','$m','equals']};};
    return $$abstractDate;
}
AbstractDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.Date}],$an:function(){return[$$$cl1.doc($$$cl1.String("Common behaviors for _Date_ types.",34)),$$$cl1.shared(),$$$cl1.abstract()];},d:['ceylon.time.internal','AbstractDate']};};
exports.AbstractDate$internal=AbstractDate$internal;
function $init$AbstractDate$internal(){
    if (AbstractDate$internal.$$===undefined){
        $$$cl1.initTypeProto(AbstractDate$internal,'ceylon.time.internal::AbstractDate',$$$cl1.Basic,$$$ct793.$init$Date());
    }
    return AbstractDate$internal;
}
exports.$init$AbstractDate$internal=$init$AbstractDate$internal;
$init$AbstractDate$internal();
function GregorianDate$internal(dayOfEra$1036, $$gregorianDate){
    $init$GregorianDate$internal();
    if ($$gregorianDate===undefined)$$gregorianDate=new GregorianDate$internal.$$;
    $$gregorianDate.dayOfEra$1036_=dayOfEra$1036;
    AbstractDate$internal(dayOfEra$1036,$$gregorianDate);
    $$$cl1.defineAttr($$gregorianDate,'dayOfEra$1036',function(){return this.dayOfEra$1036_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,d:['ceylon.time.internal','GregorianDate','$at','dayOfEra']};});
    $$$cl1.defineAttr($$gregorianDate,'year',function(){return $$$ct793.getGregorian$chronology().yearFrom(dayOfEra$1036);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','year']};});
    $$gregorianDate.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','year']};}};
    $$gregorianDate.$prop$getYear.get=function(){return year};
    $$$cl1.defineAttr($$gregorianDate,'month',function(){return $$$ct793.monthOf$base($$$ct793.getGregorian$chronology().monthFrom(dayOfEra$1036));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','month']};});
    $$gregorianDate.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','month']};}};
    $$gregorianDate.$prop$getMonth.get=function(){return month};
    $$$cl1.defineAttr($$gregorianDate,'day',function(){return $$$ct793.getGregorian$chronology().dayFrom(dayOfEra$1036);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','day']};});
    $$gregorianDate.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','day']};}};
    $$gregorianDate.$prop$getDay.get=function(){return day};
    $$$cl1.defineAttr($$gregorianDate,'leapYear',function(){return $$$ct793.getGregorian$chronology().leapYear($$gregorianDate.year);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};});
    $$gregorianDate.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','leapYear']};}};
    $$gregorianDate.$prop$getLeapYear.get=function(){return leapYear};
    $$$cl1.defineAttr($$gregorianDate,'dayOfYear',function(){return $$gregorianDate.month.fisrtDayOfYear($$gregorianDate.leapYear).plus($$gregorianDate.day).minus((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};});
    $$gregorianDate.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfYear']};}};
    $$gregorianDate.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$$cl1.defineAttr($$gregorianDate,'predecessor',function(){return $$gregorianDate.minusDays((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day.",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};});
    $$gregorianDate.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately preceeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value minus 1 day.",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','predecessor']};}};
    $$gregorianDate.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$gregorianDate,'successor',function(){return $$gregorianDate.plusDays((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day.",212)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','successor']};});
    $$gregorianDate.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns gregorian date immediately succeeding this date.\n\nFor successor its used the lowest unit of date, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 day.",212)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','successor']};}};
    $$gregorianDate.$prop$getSuccessor.get=function(){return successor};
    $$$cl1.defineAttr($$gregorianDate,'dayOfWeek',function(){return $$$ct793.dayOfWeek$base($$$ct793.getGregorian$chronology().dayOfWeekFrom(dayOfEra$1036));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};});
    $$gregorianDate.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','dayOfWeek']};}};
    $$gregorianDate.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    function plusDays(days$1037){
        if(days$1037.equals((0))){
            return $$gregorianDate;
        }
        return GregorianDate$internal(dayOfEra$1036.plus(days$1037));
    }
    $$gregorianDate.plusDays=plusDays;
    plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days to this date and returns the resulting [[Date]].",68)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusDays']};};
    var minusDays=function (days$1038){
        return $$gregorianDate.plusDays((-days$1038));
    };
    minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this date and returns the resulting [[Date]].",75)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusDays']};};
    $$gregorianDate.minusDays=minusDays;
    var plusWeeks=function (weeks$1039){
        return $$gregorianDate.plusDays(weeks$1039.times($$$ct793.getDays$base().perWeek));
    };
    plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks to this date and returns the resulting [[Date]].",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusWeeks']};};
    $$gregorianDate.plusWeeks=plusWeeks;
    var minusWeeks=function (weeks$1040){
        return $$gregorianDate.plusWeeks((-weeks$1040));
    };
    minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this date and returns the resulting [[Date]].",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusWeeks']};};
    $$gregorianDate.minusWeeks=minusWeeks;
    function plusMonths(months$1041){
        if(months$1041.equals((0))){
            return $$gregorianDate;
        }
        var o$1042=$$gregorianDate.month.add(months$1041);
        $prop$getO$1042={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Month$base.Overflow$Month},d:['ceylon.time.internal','GregorianDate','$m','plusMonths','$at','o']};}};
        $prop$getO$1042.get=function(){return o$1042};
        var newYear$1043=$$gregorianDate.year.plus(o$1042.years);
        $prop$getNewYear$1043={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$m','plusMonths','$at','newYear']};}};
        $prop$getNewYear$1043.get=function(){return newYear$1043};
        var monthDay$1044=$$$ct793.monthOf$base(o$1042.month.integer).numberOfDays($$$ct793.getGregorian$chronology().leapYear(newYear$1043));
        $prop$getMonthDay$1044={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$m','plusMonths','$at','monthDay']};}};
        $prop$getMonthDay$1044.get=function(){return monthDay$1044};
        return GregorianDate$internal($$$ct793.getGregorian$chronology().fixedFrom($$$cl1.Tuple(newYear$1043,$$$cl1.Tuple(o$1042.month.integer,$$$cl1.Tuple($$$cl1.min($$$cl1.Tuple(monthDay$1044,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Value:{t:$$$cl1.Integer},Absent:{t:$$$cl1.Nothing}}),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.plusMonths=plusMonths;
    plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",320)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusMonths']};};
    var minusMonths=function (months$1045){
        return $$gregorianDate.plusMonths((-months$1045));
    };
    minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",328)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusMonths']};};
    $$gregorianDate.minusMonths=minusMonths;
    function plusYears(years$1046){
        if(years$1046.equals((0))){
            return $$gregorianDate;
        }
        var newDay$1047=(opt$1048=(($$gregorianDate.day.equals((29))&&$$gregorianDate.month.equals($$$ct793.getFebruary$base()))?(28):null),opt$1048!==null?opt$1048:$$gregorianDate.day);
        $prop$getNewDay$1047={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$m','plusYears','$at','newDay']};}};
        $prop$getNewDay$1047.get=function(){return newDay$1047};
        var opt$1048;
        return GregorianDate$internal($$$ct793.getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year.plus(years$1046),$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(newDay$1047,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.plusYears=plusYears;
    plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",326)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plusYears']};};
    var minusYears=function (years$1049){
        return $$gregorianDate.plusYears((-years$1049));
    };
    minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n",342)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minusYears']};};
    $$gregorianDate.minusYears=minusYears;
    function withDay(day$1050){
        if(day$1050.equals($$gregorianDate.day)){
            return $$gregorianDate;
        }
        $$$ct793.getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(day$1050,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal(dayOfEra$1036.minus($$gregorianDate.day).plus(day$1050));
    }
    $$gregorianDate.withDay=withDay;
    withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withDay']};};
    function withMonth(month$1051){
        var newMonth$1052=$$$ct793.monthOf$base(month$1051);
        $prop$getNewMonth$1052={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},d:['ceylon.time.internal','GregorianDate','$m','withMonth','$at','newMonth']};}};
        $prop$getNewMonth$1052.get=function(){return newMonth$1052};
        if(newMonth$1052.equals($$gregorianDate.month)){
            return $$gregorianDate;
        }
        $$$ct793.getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1052.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal($$$ct793.getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1052.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.withMonth=withMonth;
    withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'month',$mt:'prm',$t:{t:$$$ct793.Month$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the month set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",115)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withMonth']};};
    function withYear(year$1053){
        if(year$1053.equals($$gregorianDate.year)){
            return $$gregorianDate;
        }
        $$$ct793.getGregorian$chronology().checkDate($$$cl1.Tuple(year$1053,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal($$$ct793.getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1053,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.withYear=withYear;
    withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new date with the specified year value.\n\n**Note:** It should result in a valid gregorian date.\n",103)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','withYear']};};
    function plus(amount$1054){
        return (months$1055=amount$1054.years.times($$$ct793.getMonths$base().perYear).plus(amount$1054.months),days$1056=amount$1054.days,addPeriod$1057(months$1055,days$1056));
        var months$1055,days$1056;
    }
    $$gregorianDate.plus=plus;
    plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct793.ReadableDatePeriod$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified date period to this date and returns the new [[Date]].",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','plus']};};
    function minus(amount$1058){
        return (months$1059=amount$1058.years.negativeValue.times($$$ct793.getMonths$base().perYear).plus(amount$1058.months.negativeValue),days$1060=amount$1058.days.negativeValue,addPeriod$1057(months$1059,days$1060));
        var months$1059,days$1060;
    }
    $$gregorianDate.minus=minus;
    minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct793.ReadableDatePeriod$base},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified date period from this date and returns the new [[Date]].",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','minus']};};
    function addPeriod$1057(months$1061,days$1062){
        var _this$1063=$$gregorianDate;
        var set_this$1063=function(_this$1064){return _this$1063=_this$1064;};
        $prop$get_this$1063={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod','$at','_this']};}};
        $prop$get_this$1063.get=function(){return _this$1063};
        $prop$get_this$1063.set=set_this$1063;
        if (set_this$1063.$$metamodel$$===undefined)set_this$1063.$$metamodel$$=$prop$get_this$1063.$$metamodel$$;
        if(days$1062.compare((0)).equals($$$cl1.getSmaller())){
            _this$1063=_this$1063.minusDays(days$1062.negativeValue);
        }
        if(months$1061.compare((0)).equals($$$cl1.getSmaller())){
            _this$1063=_this$1063.minusMonths(months$1061.negativeValue);
        }
        if(months$1061.compare((0)).equals($$$cl1.getLarger())){
            _this$1063=_this$1063.plusMonths(months$1061);
        }
        if(days$1062.compare((0)).equals($$$cl1.getLarger())){
            _this$1063=_this$1063.plusDays(days$1062);
        }
        return _this$1063;
    };addPeriod$1057.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior.",176))];},d:['ceylon.time.internal','GregorianDate','$m','addPeriod']};};
    $$$cl1.defineAttr($$gregorianDate,'weekOfYear',function(){
        var weekFromYearBefore$1065=(0);
        $prop$getWeekFromYearBefore$1065={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','weekFromYearBefore']};}};
        $prop$getWeekFromYearBefore$1065.get=function(){return weekFromYearBefore$1065};
        var possibleNextYearWeek$1066=(53);
        $prop$getPossibleNextYearWeek$1066={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','possibleNextYearWeek']};}};
        $prop$getPossibleNextYearWeek$1066.get=function(){return possibleNextYearWeek$1066};
        function normalizeFirstWeek$1067(weekNumber$1068){
            var result$1069=weekNumber$1068;
            var setResult$1069=function(result$1070){return result$1069=result$1070;};
            $prop$getResult$1069={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek','$at','result']};}};
            $prop$getResult$1069.get=function(){return result$1069};
            $prop$getResult$1069.set=setResult$1069;
            if (setResult$1069.$$metamodel$$===undefined)setResult$1069.$$metamodel$$=$prop$getResult$1069.$$metamodel$$;
            var jan1$1071=$$gregorianDate.withDay((1)).withMonth($$$ct793.getJanuary$base());
            $prop$getJan1$1071={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek','$at','jan1']};}};
            $prop$getJan1$1071.get=function(){return jan1$1071};
            var jan1WeekDay$1072=(opt$1073=(jan1$1071.dayOfWeek.equals($$$ct793.getSunday$base())?(7):null),opt$1073!==null?opt$1073:jan1$1071.dayOfWeek.integer);
            $prop$getJan1WeekDay$1072={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek','$at','jan1WeekDay']};}};
            $prop$getJan1WeekDay$1072.get=function(){return jan1WeekDay$1072};
            var opt$1073;
            if((($$gregorianDate.dayOfYear.compare((8).minus(jan1WeekDay$1072))!==$$$cl1.getLarger())&&jan1WeekDay$1072.compare((4)).equals($$$cl1.getLarger()))){
                if((jan1WeekDay$1072.equals((5))||(jan1WeekDay$1072.equals((6))&&$$gregorianDate.minusYears((1)).leapYear))){
                    result$1069=(53);
                }else {
                    result$1069=(52);
                }
            }
            return result$1069;
        };normalizeFirstWeek$1067.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeFirstWeek']};};
        function normalizeLastWeek$1074(weekNumber$1075){
            var result$1076=weekNumber$1075;
            var setResult$1076=function(result$1077){return result$1076=result$1077;};
            $prop$getResult$1076={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek','$at','result']};}};
            $prop$getResult$1076.get=function(){return result$1076};
            $prop$getResult$1076.set=setResult$1076;
            if (setResult$1076.$$metamodel$$===undefined)setResult$1076.$$metamodel$$=$prop$getResult$1076.$$metamodel$$;
            var weekDay$1078=$$$ct793.adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
            $prop$getWeekDay$1078={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek','$at','weekDay']};}};
            $prop$getWeekDay$1078.get=function(){return weekDay$1078};
            var totalDaysInYear$1079=(opt$1080=($$gregorianDate.leapYear?(366):null),opt$1080!==null?opt$1080:(365));
            $prop$getTotalDaysInYear$1079={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek','$at','totalDaysInYear']};}};
            $prop$getTotalDaysInYear$1079.get=function(){return totalDaysInYear$1079};
            var opt$1080;
            if(totalDaysInYear$1079.minus($$gregorianDate.dayOfYear).compare((4).minus(weekDay$1078)).equals($$$cl1.getSmaller())){
                result$1076=(1);
            }
            return result$1076;
        };normalizeLastWeek$1074.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$m','normalizeLastWeek']};};
        var dayOfWeekNumber$1081=$$$ct793.adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
        $prop$getDayOfWeekNumber$1081={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','dayOfWeekNumber']};}};
        $prop$getDayOfWeekNumber$1081.get=function(){return dayOfWeekNumber$1081};
        var weekNumber$1082=$$gregorianDate.dayOfYear.minus(dayOfWeekNumber$1081).plus((10)).divided((7));
        var setWeekNumber$1082=function(weekNumber$1083){return weekNumber$1082=weekNumber$1083;};
        $prop$getWeekNumber$1082={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear','$at','weekNumber']};}};
        $prop$getWeekNumber$1082.get=function(){return weekNumber$1082};
        $prop$getWeekNumber$1082.set=setWeekNumber$1082;
        if (setWeekNumber$1082.$$metamodel$$===undefined)setWeekNumber$1082.$$metamodel$$=$prop$getWeekNumber$1082.$$metamodel$$;
        if(weekNumber$1082.equals(weekFromYearBefore$1065)){
            weekNumber$1082=normalizeFirstWeek$1067(weekNumber$1082);
        }else {
            if(weekNumber$1082.equals(possibleNextYearWeek$1066)){
                weekNumber$1082=normalizeLastWeek$1074(weekNumber$1082);
            }
        }
        return weekNumber$1082;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','weekOfYear']};});
    function at(time$1084){
        return GregorianDateTime$internal($$gregorianDate,time$1084);
    }
    $$gregorianDate.at=at;
    at.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$ct793.Time},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] value.",31)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','at']};};
    $$$cl1.defineAttr($$gregorianDate,'string',function(){
        return $$$cl1.StringBuilder().appendAll([$$gregorianDate.year.string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.month.integer).string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.day).string]).string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this date.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Dates",119)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','string']};});
    function periodFrom(start$1085){
        var from$1086=(opt$1087=($$gregorianDate.compare(start$1085).equals($$$cl1.getSmaller())?$$gregorianDate:null),opt$1087!==null?opt$1087:start$1085);
        $prop$getFrom$1086={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','from']};}};
        $prop$getFrom$1086.get=function(){return from$1086};
        var opt$1087;
        var to$1088=(opt$1089=($$gregorianDate.compare(start$1085).equals($$$cl1.getSmaller())?start$1085:null),opt$1089!==null?opt$1089:$$gregorianDate);
        $prop$getTo$1088={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','to']};}};
        $prop$getTo$1088.get=function(){return to$1088};
        var opt$1089;
        var nextDate$1090=from$1086.plusYears((1));
        var setNextDate$1090=function(nextDate$1091){return nextDate$1090=nextDate$1091;};
        $prop$getNextDate$1090={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','nextDate']};}};
        $prop$getNextDate$1090.get=function(){return nextDate$1090};
        $prop$getNextDate$1090.set=setNextDate$1090;
        if (setNextDate$1090.$$metamodel$$===undefined)setNextDate$1090.$$metamodel$$=$prop$getNextDate$1090.$$metamodel$$;
        var yy$1092=(0);
        var setYy$1092=function(yy$1093){return yy$1092=yy$1093;};
        $prop$getYy$1092={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','yy']};}};
        $prop$getYy$1092.get=function(){return yy$1092};
        $prop$getYy$1092.set=setYy$1092;
        if (setYy$1092.$$metamodel$$===undefined)setYy$1092.$$metamodel$$=$prop$getYy$1092.$$metamodel$$;
        while((nextDate$1090.compare(to$1088)!==$$$cl1.getLarger())){
            nextDate$1090=nextDate$1090.plusYears((1));
            (yy$1092=yy$1092.plus((1)));
        }
        var mm$1094=(0);
        var setMm$1094=function(mm$1095){return mm$1094=mm$1095;};
        $prop$getMm$1094={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','mm']};}};
        $prop$getMm$1094.get=function(){return mm$1094};
        $prop$getMm$1094.set=setMm$1094;
        if (setMm$1094.$$metamodel$$===undefined)setMm$1094.$$metamodel$$=$prop$getMm$1094.$$metamodel$$;
        nextDate$1090=from$1086.plusYears(yy$1092).plusMonths(mm$1094.plus((1)));
        while((nextDate$1090.compare(to$1088)!==$$$cl1.getLarger())){
            (mm$1094=mm$1094.plus((1)));
            nextDate$1090=from$1086.plusYears(yy$1092).plusMonths(mm$1094.plus((1)));
        }
        nextDate$1090=from$1086.plusYears(yy$1092).plusMonths(mm$1094).plusDays((1));
        var dd$1096=(0);
        var setDd$1096=function(dd$1097){return dd$1096=dd$1097;};
        $prop$getDd$1096={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','dd']};}};
        $prop$getDd$1096.get=function(){return dd$1096};
        $prop$getDd$1096.set=setDd$1096;
        if (setDd$1096.$$metamodel$$===undefined)setDd$1096.$$metamodel$$=$prop$getDd$1096.$$metamodel$$;
        while((nextDate$1090.compare(to$1088)!==$$$cl1.getLarger())){
            nextDate$1090=nextDate$1090.plusDays((1));
            (dd$1096=dd$1096.plus((1)));
        }
        var positive$1098=start$1085.compare($$gregorianDate).equals($$$cl1.getSmaller());
        $prop$getPositive$1098={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time.internal','GregorianDate','$m','periodFrom','$at','positive']};}};
        $prop$getPositive$1098.get=function(){return positive$1098};
        return (years$1099=(opt$1100=(positive$1098?yy$1092:null),opt$1100!==null?opt$1100:(-yy$1092)),months$1101=(opt$1102=(positive$1098?mm$1094:null),opt$1102!==null?opt$1102:(-mm$1094)),days$1103=(opt$1104=(positive$1098?dd$1096:null),opt$1104!==null?opt$1104:(-dd$1096)),$$$ct793.Period(years$1099,months$1101,days$1103,undefined,undefined,undefined,undefined));
        var years$1099,opt$1100,months$1101,opt$1102,days$1103,opt$1104;
    }
    $$gregorianDate.periodFrom=periodFrom;
    periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct793.Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given date.\n\nIf this date is before the given date then return negative period.",119)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','periodFrom']};};
    var periodTo=function (end$1105){
        return end$1105.periodFrom($$gregorianDate);
    };
    periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct793.Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given date.\n\nIf this date is after the given date then return negative period.",118)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','periodTo']};};
    $$gregorianDate.periodTo=periodTo;
    function rangeTo(other$1106){
        return $$$ct793.DateRange($$gregorianDate,other$1106);
    }
    $$gregorianDate.rangeTo=rangeTo;
    rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Date},$an:function(){return[];}}],$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[DateRange]] between this and given Date.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$m','rangeTo']};};
    $$$cl1.defineAttr($$gregorianDate,'integerValue',function(){return dayOfEra$1036;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of era_ as it enumerable value",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','integerValue']};});
    $$gregorianDate.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDate$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of era_ as it enumerable value",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDate','$at','integerValue']};}};
    $$gregorianDate.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianDate;
}
GregorianDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:AbstractDate$internal},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of a gregorian calendar",46)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianDate']};};
exports.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
    if (GregorianDate$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',AbstractDate$internal);
    }
    return GregorianDate$internal;
}
exports.$init$GregorianDate$internal=$init$GregorianDate$internal;
$init$GregorianDate$internal();
function gregorianDate$internal(year$1107,month$1108,day$1109){
    var year$1107=year$1107;
    $prop$getYear$1107={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Year number of the date",23))];},d:['ceylon.time.internal','gregorianDate','$at','year']};}};
    $prop$getYear$1107.get=function(){return year$1107};
    var month$1108=month$1108;
    $prop$getMonth$1108={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct793.Month$base}]},$an:function(){return[$$$cl1.doc($$$cl1.String("Month of the year",17))];},d:['ceylon.time.internal','gregorianDate','$at','month']};}};
    $prop$getMonth$1108.get=function(){return month$1108};
    var day$1109=day$1109;
    $prop$getDay$1109={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Day of month",12))];},d:['ceylon.time.internal','gregorianDate','$at','day']};}};
    $prop$getDay$1109.get=function(){return day$1109};
    $$$ct793.getGregorian$chronology().checkDate($$$cl1.Tuple(year$1107,$$$cl1.Tuple($$$ct793.monthOf$base(month$1108).integer,$$$cl1.Tuple(day$1109,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
    return GregorianDate$internal($$$ct793.getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1107,$$$cl1.Tuple($$$ct793.monthOf$base(month$1108).integer,$$$cl1.Tuple(day$1109,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
}
exports.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Year number of the date")];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct793.Month$base}]},$an:function(){return[$$$cl1.doc("Month of the year")];}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Day of month")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a gregorian calendar date according to the specified year, month and date values.",89)),$$$cl1.shared()];},d:['ceylon.time.internal','gregorianDate']};};
function GregorianDateTime$internal(date, time, $$gregorianDateTime){
    $init$GregorianDateTime$internal();
    if ($$gregorianDateTime===undefined)$$gregorianDateTime=new GregorianDateTime$internal.$$;
    $$$ct793.DateTime($$gregorianDateTime);
    var date=date;
    $$$cl1.defineAttr($$gregorianDateTime,'date',function(){return date;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};});
    $$gregorianDateTime.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','date']};}};
    $$gregorianDateTime.$prop$getDate.get=function(){return date};
    var time=time;
    $$$cl1.defineAttr($$gregorianDateTime,'time',function(){return time;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};});
    $$gregorianDateTime.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current _date and time_.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','time']};}};
    $$gregorianDateTime.$prop$getTime.get=function(){return time};
    function compare(other$1110){
        return (opt$1111=((!$$gregorianDateTime.date.equals(other$1110.date))?$$gregorianDateTime.date.compare(other$1110.date):null),opt$1111!==null?opt$1111:$$gregorianDateTime.time.compare(other$1110.time));
        var opt$1111;
    }
    $$gregorianDateTime.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Comparing [[DateTime]] is based on [[Date]] and [[Time]] comparision.",69)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','compare']};};
    $$$cl1.defineAttr($$gregorianDateTime,'day',function(){return $$gregorianDateTime.date.day;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};});
    $$gregorianDateTime.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','day']};}};
    $$gregorianDateTime.$prop$getDay.get=function(){return day};
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfWeek',function(){return $$gregorianDateTime.date.dayOfWeek;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};});
    $$gregorianDateTime.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfWeek']};}};
    $$gregorianDateTime.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfYear',function(){return $$gregorianDateTime.date.dayOfYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};});
    $$gregorianDateTime.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfYear']};}};
    $$gregorianDateTime.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfEra',function(){return $$gregorianDateTime.date.dayOfEra;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};});
    $$gregorianDateTime.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','dayOfEra']};}};
    $$gregorianDateTime.$prop$getDayOfEra.get=function(){return dayOfEra};
    $$$cl1.defineAttr($$gregorianDateTime,'year',function(){return $$gregorianDateTime.date.year;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};});
    $$gregorianDateTime.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','year']};}};
    $$gregorianDateTime.$prop$getYear.get=function(){return year};
    $$$cl1.defineAttr($$gregorianDateTime,'leapYear',function(){return $$gregorianDateTime.date.leapYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true` if this is a leap year according to gregorian calendar leap year rules.",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};});
    $$gregorianDateTime.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true` if this is a leap year according to gregorian calendar leap year rules.",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','leapYear']};}};
    $$gregorianDateTime.$prop$getLeapYear.get=function(){return leapYear};
    $$$cl1.defineAttr($$gregorianDateTime,'weekOfYear',function(){return $$gregorianDateTime.date.weekOfYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};});
    $$gregorianDateTime.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','weekOfYear']};}};
    $$gregorianDateTime.$prop$getWeekOfYear.get=function(){return weekOfYear};
    $$$cl1.defineAttr($$gregorianDateTime,'month',function(){return $$gregorianDateTime.date.month;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};});
    $$gregorianDateTime.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','month']};}};
    $$gregorianDateTime.$prop$getMonth.get=function(){return month};
    $$$cl1.defineAttr($$gregorianDateTime,'hours',function(){return $$gregorianDateTime.time.hours;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};});
    $$gregorianDateTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','hours']};}};
    $$gregorianDateTime.$prop$getHours.get=function(){return hours};
    $$$cl1.defineAttr($$gregorianDateTime,'milliseconds',function(){return $$gregorianDateTime.time.milliseconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};});
    $$gregorianDateTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','milliseconds']};}};
    $$gregorianDateTime.$prop$getMilliseconds.get=function(){return milliseconds};
    $$$cl1.defineAttr($$gregorianDateTime,'millisecondsOfDay',function(){return $$gregorianDateTime.time.millisecondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};});
    $$gregorianDateTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','millisecondsOfDay']};}};
    $$gregorianDateTime.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$$cl1.defineAttr($$gregorianDateTime,'minutes',function(){return $$gregorianDateTime.time.minutes;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};});
    $$gregorianDateTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutes']};}};
    $$gregorianDateTime.$prop$getMinutes.get=function(){return minutes};
    $$$cl1.defineAttr($$gregorianDateTime,'minutesOfDay',function(){return $$gregorianDateTime.time.minutesOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};});
    $$gregorianDateTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','minutesOfDay']};}};
    $$gregorianDateTime.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    $$$cl1.defineAttr($$gregorianDateTime,'seconds',function(){return $$gregorianDateTime.time.seconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};});
    $$gregorianDateTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','seconds']};}};
    $$gregorianDateTime.$prop$getSeconds.get=function(){return seconds};
    $$$cl1.defineAttr($$gregorianDateTime,'secondsOfDay',function(){return $$gregorianDateTime.time.secondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};});
    $$gregorianDateTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','secondsOfDay']};}};
    $$gregorianDateTime.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    function plusYears(years$1112){
        return (date$1113=$$gregorianDateTime.date.plusYears(years$1112),time$1114=$$gregorianDateTime.time,GregorianDateTime$internal(date$1113,time$1114));
        var date$1113,time$1114;
    }
    $$gregorianDateTime.plusYears=plusYears;
    plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",326)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusYears']};};
    function minusYears(years$1115){
        return (date$1116=$$gregorianDateTime.date.minusYears(years$1115),time$1117=$$gregorianDateTime.time,GregorianDateTime$internal(date$1116,time$1117));
        var date$1116,time$1117;
    }
    $$gregorianDateTime.minusYears=minusYears;
    minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n",342)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusYears']};};
    function plusMonths(months$1118){
        return (date$1119=$$gregorianDateTime.date.plusMonths(months$1118),time$1120=$$gregorianDateTime.time,GregorianDateTime$internal(date$1119,time$1120));
        var date$1119,time$1120;
    }
    $$gregorianDateTime.plusMonths=plusMonths;
    plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",320)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMonths']};};
    function minusMonths(months$1121){
        return $$gregorianDateTime.plusMonths((-months$1121));
    }
    $$gregorianDateTime.minusMonths=minusMonths;
    minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",328)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMonths']};};
    function plusWeeks(weeks$1122){
        return (date$1123=$$gregorianDateTime.date.plusWeeks(weeks$1122),time$1124=$$gregorianDateTime.time,GregorianDateTime$internal(date$1123,time$1124));
        var date$1123,time$1124;
    }
    $$gregorianDateTime.plusWeeks=plusWeeks;
    plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks to this date and returns the resulting [[DateTime]].",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusWeeks']};};
    function minusWeeks(weeks$1125){
        return $$gregorianDateTime.plusWeeks((-weeks$1125));
    }
    $$gregorianDateTime.minusWeeks=minusWeeks;
    minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this date and returns the resulting [[DateTime]].",80)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusWeeks']};};
    function plusDays(days$1126){
        return (date$1127=$$gregorianDateTime.date.plusDays(days$1126),time$1128=$$gregorianDateTime.time,GregorianDateTime$internal(date$1127,time$1128));
        var date$1127,time$1128;
    }
    $$gregorianDateTime.plusDays=plusDays;
    plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days to this date and returns the resulting [[DateTime]].",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusDays']};};
    function minusDays(days$1129){
        return $$gregorianDateTime.plusDays((-days$1129));
    }
    $$gregorianDateTime.minusDays=minusDays;
    minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this date and returns the resulting [[DateTime]].",79)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusDays']};};
    function plusHours(hours$1130){
        if(hours$1130.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1131=(opt$1132=((hours$1130.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1132!==null?opt$1132:(-(1)));
        $prop$getSignal$1131={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours','$at','signal']};}};
        $prop$getSignal$1131.get=function(){return signal$1131};
        var opt$1132;
        return (hours$1133=hours$1130.times(signal$1131),signal$1134=signal$1131,fromTime$1135(hours$1133,undefined,undefined,undefined,signal$1134));
        var hours$1133,signal$1134;
    }
    $$gregorianDateTime.plusHours=plusHours;
    plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of hours from this _date and time_ and returns the resulting [[DateTime]].",86)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusHours']};};
    function minusHours(hours$1136){
        return $$gregorianDateTime.plusHours((-hours$1136));
    }
    $$gregorianDateTime.minusHours=minusHours;
    minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of hours from this _date and time_ and returns the resulting [[DateTime]].",91)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusHours']};};
    function plusMinutes(minutes$1137){
        if(minutes$1137.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1138=(opt$1139=((minutes$1137.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1139!==null?opt$1139:(-(1)));
        $prop$getSignal$1138={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes','$at','signal']};}};
        $prop$getSignal$1138.get=function(){return signal$1138};
        var opt$1139;
        return (minutes$1140=minutes$1137.times(signal$1138),signal$1141=signal$1138,fromTime$1135(undefined,minutes$1140,undefined,undefined,signal$1141));
        var minutes$1140,signal$1141;
    }
    $$gregorianDateTime.plusMinutes=plusMinutes;
    plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of minutes from this _date and time_ and returns the resulting [[DateTime]].",88)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMinutes']};};
    function minusMinutes(minutes$1142){
        return $$gregorianDateTime.plusMinutes((-minutes$1142));
    }
    $$gregorianDateTime.minusMinutes=minusMinutes;
    minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of minutes from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMinutes']};};
    function plusSeconds(seconds$1143){
        if(seconds$1143.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1144=(opt$1145=((seconds$1143.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1145!==null?opt$1145:(-(1)));
        $prop$getSignal$1144={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds','$at','signal']};}};
        $prop$getSignal$1144.get=function(){return signal$1144};
        var opt$1145;
        return (seconds$1146=seconds$1143.times(signal$1144),signal$1147=signal$1144,fromTime$1135(undefined,undefined,seconds$1146,undefined,signal$1147));
        var seconds$1146,signal$1147;
    }
    $$gregorianDateTime.plusSeconds=plusSeconds;
    plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of seconds from this _date and time_ and returns the resulting [[DateTime]].",88)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusSeconds']};};
    function minusSeconds(seconds$1148){
        return $$gregorianDateTime.plusSeconds((-seconds$1148));
    }
    $$gregorianDateTime.minusSeconds=minusSeconds;
    minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of seconds from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusSeconds']};};
    function plusMilliseconds(milliseconds$1149){
        if(milliseconds$1149.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1150=(opt$1151=((milliseconds$1149.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1151!==null?opt$1151:(-(1)));
        $prop$getSignal$1150={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds','$at','signal']};}};
        $prop$getSignal$1150.get=function(){return signal$1150};
        var opt$1151;
        return (millis$1152=milliseconds$1149.times(signal$1150),signal$1153=signal$1150,fromTime$1135(undefined,undefined,undefined,millis$1152,signal$1153));
        var millis$1152,signal$1153;
    }
    $$gregorianDateTime.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of milliseconds from this _date and time_ and returns the resulting [[DateTime]].",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plusMilliseconds']};};
    function minusMilliseconds(milliseconds$1154){
        return $$gregorianDateTime.plusMilliseconds((-milliseconds$1154));
    }
    $$gregorianDateTime.minusMilliseconds=minusMilliseconds;
    minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of milliseconds from this _date and time_ and returns the resulting [[DateTime]].",98)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minusMilliseconds']};};
    function withDay(dayOfMonth$1155){
        return (date$1156=$$gregorianDateTime.date.withDay(dayOfMonth$1155),time$1157=$$gregorianDateTime.time,GregorianDateTime$internal(date$1156,time$1157));
        var date$1156,time$1157;
    }
    $$gregorianDateTime.withDay=withDay;
    withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'dayOfMonth',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _day of month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",138)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withDay']};};
    function withHours(hours$1158){
        return (date$1159=$$gregorianDateTime.date,time$1160=$$gregorianDateTime.time.withHours(hours$1158),GregorianDateTime$internal(date$1159,time$1160));
        var date$1159,time$1160;
    }
    $$gregorianDateTime.withHours=withHours;
    withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _hours_ value set to the specified value.\n\n**Note:** It should be a valid _hour_.\n",116)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withHours']};};
    function withYear(year$1161){
        return (date$1162=$$gregorianDateTime.date.withYear(year$1161),time$1163=$$gregorianDateTime.time,GregorianDateTime$internal(date$1162,time$1163));
        var date$1162,time$1163;
    }
    $$gregorianDateTime.withYear=withYear;
    withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _year_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withYear']};};
    function withMonth(month$1164){
        return GregorianDateTime$internal($$gregorianDateTime.date.withMonth(month$1164),$$gregorianDateTime.time);
    }
    $$gregorianDateTime.withMonth=withMonth;
    withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'month',$mt:'prm',$t:{t:$$$ct793.Month$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _month_ value set to the specified value.\n\n**Note:** It should result in a valid gregorian date.\n",131)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMonth']};};
    function withMinutes(minutes$1165){
        return (date$1166=$$gregorianDateTime.date,time$1167=$$gregorianDateTime.time.withMinutes(minutes$1165),GregorianDateTime$internal(date$1166,time$1167));
        var date$1166,time$1167;
    }
    $$gregorianDateTime.withMinutes=withMinutes;
    withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _minutes_ value set to the specified value.\n\n**Note:** It should be a valid _minute_.\n",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMinutes']};};
    function withSeconds(seconds$1168){
        return (date$1169=$$gregorianDateTime.date,time$1170=$$gregorianDateTime.time.withSeconds(seconds$1168),GregorianDateTime$internal(date$1169,time$1170));
        var date$1169,time$1170;
    }
    $$gregorianDateTime.withSeconds=withSeconds;
    withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _seconds_ value set to the specified value.\n\n**Note:** It should be a valid _second_.\n",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withSeconds']};};
    function withMilliseconds(milliseconds$1171){
        return (date$1172=$$gregorianDateTime.date,time$1173=$$gregorianDateTime.time.withMilliseconds(milliseconds$1171),GregorianDateTime$internal(date$1172,time$1173));
        var date$1172,time$1173;
    }
    $$gregorianDateTime.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[DateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note:** It should be a valid _millisecond_.\n",130)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','withMilliseconds']};};
    $$$cl1.defineAttr($$gregorianDateTime,'predecessor',function(){return $$gregorianDateTime.minusMilliseconds((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n",169)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};});
    $$gregorianDateTime.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n",169)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','predecessor']};}};
    $$gregorianDateTime.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$gregorianDateTime,'successor',function(){return $$gregorianDateTime.plusMilliseconds((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n",165)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};});
    $$gregorianDateTime.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value minus 1 millisecond.\n",165)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','successor']};}};
    $$gregorianDateTime.$prop$getSuccessor.get=function(){return successor};
    function plus(amount$1174){
        return (months$1175=amount$1174.years.times($$$ct793.getMonths$base().perYear).plus(amount$1174.months),days$1176=amount$1174.days,hours$1177=amount$1174.hours,minutes$1178=amount$1174.minutes,seconds$1179=amount$1174.seconds,milliseconds$1180=amount$1174.milliseconds,addPeriod$1181(months$1175,days$1176,hours$1177,minutes$1178,seconds$1179,milliseconds$1180));
        var months$1175,days$1176,hours$1177,minutes$1178,seconds$1179,milliseconds$1180;
    }
    $$gregorianDateTime.plus=plus;
    plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct793.ReadablePeriod$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified date period to this date and returns the new [[DateTime]].",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','plus']};};
    function minus(amount$1182){
        return (months$1183=amount$1182.years.negativeValue.times($$$ct793.getMonths$base().perYear).plus(amount$1182.months.negativeValue),days$1184=amount$1182.days.negativeValue,hours$1185=amount$1182.hours.negativeValue,minutes$1186=amount$1182.minutes.negativeValue,seconds$1187=amount$1182.seconds.negativeValue,milliseconds$1188=amount$1182.milliseconds.negativeValue,addPeriod$1181(months$1183,days$1184,hours$1185,minutes$1186,seconds$1187,milliseconds$1188));
        var months$1183,days$1184,hours$1185,minutes$1186,seconds$1187,milliseconds$1188;
    }
    $$gregorianDateTime.minus=minus;
    minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct793.ReadablePeriod$base},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified date period from this date and returns the new [[DateTime]].",80)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','minus']};};
    function addPeriod$1181(months$1189,days$1190,hours$1191,minutes$1192,seconds$1193,milliseconds$1194){
        var _this$1195=$$gregorianDateTime;
        var set_this$1195=function(_this$1196){return _this$1195=_this$1196;};
        $prop$get_this$1195={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod','$at','_this']};}};
        $prop$get_this$1195.get=function(){return _this$1195};
        $prop$get_this$1195.set=set_this$1195;
        if (set_this$1195.$$metamodel$$===undefined)set_this$1195.$$metamodel$$=$prop$get_this$1195.$$metamodel$$;
        var totalTime$1197=hours$1191.times($$$ct793.getMilliseconds$base().perHour).plus(minutes$1192.times($$$ct793.getMilliseconds$base().perMinute)).plus(seconds$1193.times($$$ct793.getMilliseconds$base().perSecond)).plus(milliseconds$1194);
        $prop$getTotalTime$1197={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod','$at','totalTime']};}};
        $prop$getTotalTime$1197.get=function(){return totalTime$1197};
        if(totalTime$1197.compare((0)).equals($$$cl1.getSmaller())){
            _this$1195=_this$1195.minusMilliseconds(totalTime$1197.negativeValue);
        }
        if(days$1190.compare((0)).equals($$$cl1.getSmaller())){
            _this$1195=_this$1195.minusDays(days$1190.negativeValue);
        }
        if(months$1189.compare((0)).equals($$$cl1.getSmaller())){
            _this$1195=_this$1195.minusMonths(months$1189.negativeValue);
        }
        if(months$1189.compare((0)).equals($$$cl1.getLarger())){
            _this$1195=_this$1195.plusMonths(months$1189);
        }
        if(days$1190.compare((0)).equals($$$cl1.getLarger())){
            _this$1195=_this$1195.plusDays(days$1190);
        }
        if(totalTime$1197.compare((0)).equals($$$cl1.getLarger())){
            _this$1195=_this$1195.plusMilliseconds(totalTime$1197);
        }
        return _this$1195;
    };addPeriod$1181.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("This method add the specified fields doing first the subtraction and last the additions.\n\nThe mix between positive and negative fields does not guarantee any expected behavior.",176))];},d:['ceylon.time.internal','GregorianDateTime','$m','addPeriod']};};
    function instant(timeZone$1198){
        if(timeZone$1198===undefined){timeZone$1198=$$gregorianDateTime.instant$defs$timeZone(timeZone$1198);}
        var instant$1199=$$$ct793.Instant($$$ct793.getUnixTime$chronology().timeFromFixed($$gregorianDateTime.dayOfEra).plus($$gregorianDateTime.millisecondsOfDay));
        $prop$getInstant$1199={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Instant},d:['ceylon.time.internal','GregorianDateTime','$m','instant','$at','instant']};}};
        $prop$getInstant$1199.get=function(){return instant$1199};
        return $$$ct793.Instant(instant$1199.millisecondsOfEpoch.minus(timeZone$1198.offset(instant$1199)));
    }
    $$gregorianDateTime.instant=instant;
    instant.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Instant},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{t:$$$ct793.TimeZone$timezone},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("[[DateTime]] does not know anything about [[TimeZone]] and it should be supplied to\ncreate a [[Instant]].",105)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','instant']};};
    function equals(other$1200){
        var other$1201;
        if($$$cl1.isOfType((other$1201=other$1200),{t:GregorianDateTime$internal})){
            if(($$gregorianDateTime===other$1201)){
                return true;
            }
            return ($$gregorianDateTime.day.equals(other$1201.day)&&$$gregorianDateTime.time.equals(other$1201.time));
        }
        return false;
    }
    $$gregorianDateTime.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type, date and time.",58)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','equals']};};
    $$$cl1.defineAttr($$gregorianDateTime,'string',function(){
        return $$$cl1.StringBuilder().appendAll([$$gregorianDateTime.date.string.string,$$$cl1.String("T",1),$$gregorianDateTime.time.string.string]).string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _Date and Time of day_.\n\nhttps://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations",159)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','string']};});
    function periodFrom(start$1202){
        var from$1203=(opt$1204=($$gregorianDateTime.compare(start$1202).equals($$$cl1.getSmaller())?$$gregorianDateTime:null),opt$1204!==null?opt$1204:start$1202);
        $prop$getFrom$1203={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','from']};}};
        $prop$getFrom$1203.get=function(){return from$1203};
        var opt$1204;
        var to$1205=(opt$1206=($$gregorianDateTime.compare(start$1202).equals($$$cl1.getSmaller())?start$1202:null),opt$1206!==null?opt$1206:$$gregorianDateTime);
        $prop$getTo$1205={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','to']};}};
        $prop$getTo$1205.get=function(){return to$1205};
        var opt$1206;
        var dayConsumed$1207=(opt$1208=(to$1205.time.compare(from$1203.time).equals($$$cl1.getSmaller())?(1):null),opt$1208!==null?opt$1208:(0));
        $prop$getDayConsumed$1207={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','dayConsumed']};}};
        $prop$getDayConsumed$1207.get=function(){return dayConsumed$1207};
        var opt$1208;
        var total$1209=(opt$1210=((to$1205.millisecondsOfDay.compare(from$1203.millisecondsOfDay)!==$$$cl1.getSmaller())?to$1205.millisecondsOfDay.minus(from$1203.millisecondsOfDay):null),opt$1210!==null?opt$1210:$$$ct793.getMilliseconds$base().perDay.plus(to$1205.millisecondsOfDay).minus(from$1203.millisecondsOfDay));
        var setTotal$1209=function(total$1211){return total$1209=total$1211;};
        $prop$getTotal$1209={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','total']};}};
        $prop$getTotal$1209.get=function(){return total$1209};
        $prop$getTotal$1209.set=setTotal$1209;
        if (setTotal$1209.$$metamodel$$===undefined)setTotal$1209.$$metamodel$$=$prop$getTotal$1209.$$metamodel$$;
        var opt$1210;
        var hh$1212=total$1209.divided($$$ct793.getMilliseconds$base().perHour);
        $prop$getHh$1212={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','hh']};}};
        $prop$getHh$1212.get=function(){return hh$1212};
        total$1209=total$1209.remainder($$$ct793.getMilliseconds$base().perHour);
        var mm$1213=total$1209.divided($$$ct793.getMilliseconds$base().perMinute);
        $prop$getMm$1213={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','mm']};}};
        $prop$getMm$1213.get=function(){return mm$1213};
        total$1209=total$1209.remainder($$$ct793.getMilliseconds$base().perMinute);
        var ss$1214=total$1209.divided($$$ct793.getMilliseconds$base().perSecond);
        $prop$getSs$1214={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','ss']};}};
        $prop$getSs$1214.get=function(){return ss$1214};
        var positive$1215=start$1202.compare($$gregorianDateTime).equals($$$cl1.getSmaller());
        $prop$getPositive$1215={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom','$at','positive']};}};
        $prop$getPositive$1215.get=function(){return positive$1215};
        return (hours$1216=(opt$1217=(positive$1215?hh$1212:null),opt$1217!==null?opt$1217:(-hh$1212)),minutes$1218=(opt$1219=(positive$1215?mm$1213:null),opt$1219!==null?opt$1219:(-mm$1213)),seconds$1220=(opt$1221=(positive$1215?ss$1214:null),opt$1221!==null?opt$1221:(-ss$1214)),milliseconds$1222=(opt$1223=(positive$1215?total$1209.remainder($$$ct793.getMilliseconds$base().perSecond):null),opt$1223!==null?opt$1223:(-total$1209.remainder($$$ct793.getMilliseconds$base().perSecond))),$$$ct793.Period(undefined,undefined,undefined,hours$1216,minutes$1218,seconds$1220,milliseconds$1222)).plus((opt$1224=(positive$1215?to$1205.date.minusDays(dayConsumed$1207).periodFrom(from$1203.date):null),opt$1224!==null?opt$1224:to$1205.date.minusDays(dayConsumed$1207).periodTo(from$1203.date)));
        var hours$1216,opt$1217,minutes$1218,opt$1219,seconds$1220,opt$1221,milliseconds$1222,opt$1223,opt$1224;
    }
    $$gregorianDateTime.periodFrom=periodFrom;
    periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct793.DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is before the given [[DateTime]] then return negative period.",143)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','periodFrom']};};
    function periodTo(end$1225){
        return end$1225.periodFrom($$gregorianDateTime);
    }
    $$gregorianDateTime.periodTo=periodTo;
    periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct793.DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given [[DateTime]].\n\nIf this [[DateTime]] is after the given [[DateTime]] then return negative period.",142)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','periodTo']};};
    function rangeTo(other$1226){
        return $$$ct793.DateTimeRange($$gregorianDateTime,other$1226);
    }
    $$gregorianDateTime.rangeTo=rangeTo;
    rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.DateTime},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[DateTimeRange]] between this and given DateTime.",62)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$m','rangeTo']};};
    fromTime$1135$defs$hours=function(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){return (0);};
    fromTime$1135$defs$minutes=function(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){return (0);};
    fromTime$1135$defs$seconds=function(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){return (0);};
    fromTime$1135$defs$millis=function(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){return (0);};
    fromTime$1135$defs$signal=function(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){return (1);};
    function fromTime$1135(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231){
        if(hours$1227===undefined){hours$1227=fromTime$1135$defs$hours(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231);}
        if(minutes$1228===undefined){minutes$1228=fromTime$1135$defs$minutes(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231);}
        if(seconds$1229===undefined){seconds$1229=fromTime$1135$defs$seconds(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231);}
        if(millis$1230===undefined){millis$1230=fromTime$1135$defs$millis(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231);}
        if(signal$1231===undefined){signal$1231=fromTime$1135$defs$signal(hours$1227,minutes$1228,seconds$1229,millis$1230,signal$1231);}
        var inputMillis$1232=hours$1227.times($$$ct793.getMilliseconds$base().perHour).plus(minutes$1228.times($$$ct793.getMilliseconds$base().perMinute)).plus(seconds$1229.times($$$ct793.getMilliseconds$base().perSecond)).plus(millis$1230);
        $prop$getInputMillis$1232={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','inputMillis']};}};
        $prop$getInputMillis$1232.get=function(){return inputMillis$1232};
        var days$1233=$$$ct793.getDays$base().fromMilliseconds(inputMillis$1232).times(signal$1231);
        $prop$getDays$1233={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','days']};}};
        $prop$getDays$1233.get=function(){return days$1233};
        var restOfMillis$1234=$$$ct793.floorMod$internal$math(inputMillis$1232,$$$ct793.getMilliseconds$base().perDay).times(signal$1231).plus($$gregorianDateTime.time.millisecondsOfDay);
        $prop$getRestOfMillis$1234={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','restOfMillis']};}};
        $prop$getRestOfMillis$1234.get=function(){return restOfMillis$1234};
        var totalDays$1235=days$1233.plus($$$ct793.floorDiv$internal$math(restOfMillis$1234,$$$ct793.getMilliseconds$base().perDay));
        $prop$getTotalDays$1235={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','totalDays']};}};
        $prop$getTotalDays$1235.get=function(){return totalDays$1235};
        var newMillis$1236=$$$ct793.floorMod$internal$math(restOfMillis$1234,$$$ct793.getMilliseconds$base().perDay);
        $prop$getNewMillis$1236={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','newMillis']};}};
        $prop$getNewMillis$1236.get=function(){return newMillis$1236};
        var newTime$1237=(opt$1238=(newMillis$1236.equals($$gregorianDateTime.time.millisecondsOfDay)?$$gregorianDateTime.time:null),opt$1238!==null?opt$1238:TimeOfDay$internal(newMillis$1236));
        $prop$getNewTime$1237={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime','$at','newTime']};}};
        $prop$getNewTime$1237.get=function(){return newTime$1237};
        var opt$1238;
        return GregorianDateTime$internal($$gregorianDateTime.date.plusDays(totalDays$1235),newTime$1237);
    };fromTime$1135.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},$ps:[{$nm:'hours',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'signal',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Calculates the based in given time, consuming it for each day if necessary.",75))];},d:['ceylon.time.internal','GregorianDateTime','$m','fromTime']};};
    $$$cl1.defineAttr($$gregorianDateTime,'integerValue',function(){return $$gregorianDateTime.instant($$$ct793.getTimeZone$timezone().utc).millisecondsOfEpoch;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone.",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','integerValue']};});
    $$gregorianDateTime.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _millisecondsOfEpoch_ as it enumerable value. \n\nNote that to have the _milliseconds of epoch_ it apply UTC zone.",120)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianDateTime','$at','integerValue']};}};
    $$gregorianDateTime.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianDateTime;
}
GregorianDateTime$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.DateTime}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of a gregorian calendar",46)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianDateTime']};};
exports.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
    if (GregorianDateTime$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',$$$cl1.Basic,$$$ct793.$init$DateTime());
    }
    return GregorianDateTime$internal;
}
exports.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;
$init$GregorianDateTime$internal();
function GregorianZonedDateTime$internal(instant, timeZone, $$gregorianZonedDateTime){
    $init$GregorianZonedDateTime$internal();
    if ($$gregorianZonedDateTime===undefined)$$gregorianZonedDateTime=new GregorianZonedDateTime$internal.$$;
    if(timeZone===undefined){timeZone=$$$ct793.getTimeZone$timezone().system;}
    $$$ct793.ZoneDateTime$timezone($$gregorianZonedDateTime);
    var timeZone=timeZone;
    $$$cl1.defineAttr($$gregorianZonedDateTime,'timeZone',function(){return timeZone;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.TimeZone$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("TimeZone to be applied in this implementation.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};});
    $$gregorianZonedDateTime.$prop$getTimeZone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.TimeZone$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("TimeZone to be applied in this implementation.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','timeZone']};}};
    $$gregorianZonedDateTime.$prop$getTimeZone.get=function(){return timeZone};
    var instant=instant;
    $$$cl1.defineAttr($$gregorianZonedDateTime,'instant',function(){return instant;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Instant},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("All operations of this implementations is based in this Instant.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};});
    $$gregorianZonedDateTime.$prop$getInstant={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Instant},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("All operations of this implementations is based in this Instant.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','instant']};}};
    $$gregorianZonedDateTime.$prop$getInstant.get=function(){return instant};
    function compare(other$1239){
        return $$gregorianZonedDateTime.instant.compare(other$1239.instant);
    }
    $$gregorianZonedDateTime.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.ZoneDateTime$timezone},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Comparing [[ZoneDateTime]] is based on [[Instant]] and should not be \ncompared as it´s human representation as they are adjusted based on geographic and regional (DST) \nlocations and do not represent a comparison correct.",221)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','compare']};};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'day',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).day;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};});
    $$gregorianZonedDateTime.$prop$getDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of month_ value of this gregorian date.",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','day']};}};
    $$gregorianZonedDateTime.$prop$getDay.get=function(){return day};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfEra',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfEra;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};});
    $$gregorianZonedDateTime.$prop$getDayOfEra={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfEra']};}};
    $$gregorianZonedDateTime.$prop$getDayOfEra.get=function(){return dayOfEra};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfWeek',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfWeek;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};});
    $$gregorianZonedDateTime.$prop$getDayOfWeek={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DayOfWeek$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns current day of the week.",32)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfWeek']};}};
    $$gregorianZonedDateTime.$prop$getDayOfWeek.get=function(){return dayOfWeek};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'dayOfYear',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).dayOfYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};});
    $$gregorianZonedDateTime.$prop$getDayOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _day of year_ value of this gregorian date.",51)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','dayOfYear']};}};
    $$gregorianZonedDateTime.$prop$getDayOfYear.get=function(){return dayOfYear};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'hours',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).hours;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};});
    $$gregorianZonedDateTime.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','hours']};}};
    $$gregorianZonedDateTime.$prop$getHours.get=function(){return hours};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'leapYear',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).leapYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};});
    $$gregorianZonedDateTime.$prop$getLeapYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns `true`, if this is a leap year according to gregorian calendar leap year rules.",87)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','leapYear']};}};
    $$gregorianZonedDateTime.$prop$getLeapYear.get=function(){return leapYear};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'milliseconds',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).milliseconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};});
    $$gregorianZonedDateTime.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','milliseconds']};}};
    $$gregorianZonedDateTime.$prop$getMilliseconds.get=function(){return milliseconds};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'millisecondsOfDay',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).millisecondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};});
    $$gregorianZonedDateTime.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','millisecondsOfDay']};}};
    $$gregorianZonedDateTime.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'minutes',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minutes;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};});
    $$gregorianZonedDateTime.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutes']};}};
    $$gregorianZonedDateTime.$prop$getMinutes.get=function(){return minutes};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'minutesOfDay',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minutesOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};});
    $$gregorianZonedDateTime.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','minutesOfDay']};}};
    $$gregorianZonedDateTime.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'month',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).month;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};});
    $$gregorianZonedDateTime.$prop$getMonth={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Month$base},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns month of this gregorian date.",37)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','month']};}};
    $$gregorianZonedDateTime.$prop$getMonth.get=function(){return month};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'seconds',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).seconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};});
    $$gregorianZonedDateTime.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','seconds']};}};
    $$gregorianZonedDateTime.$prop$getSeconds.get=function(){return seconds};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'secondsOfDay',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).secondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};});
    $$gregorianZonedDateTime.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','secondsOfDay']};}};
    $$gregorianZonedDateTime.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'weekOfYear',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).weekOfYear;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};});
    $$gregorianZonedDateTime.$prop$getWeekOfYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns week of year according to ISO-8601 week number calculation rules.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','weekOfYear']};}};
    $$gregorianZonedDateTime.$prop$getWeekOfYear.get=function(){return weekOfYear};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'year',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).year;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};});
    $$gregorianZonedDateTime.$prop$getYear={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns year of this gregorian date.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','year']};}};
    $$gregorianZonedDateTime.$prop$getYear.get=function(){return year};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'date',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).date;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};});
    $$gregorianZonedDateTime.$prop$getDate={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Date},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Date]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','date']};}};
    $$gregorianZonedDateTime.$prop$getDate.get=function(){return date};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'time',function(){return $$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).time;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};});
    $$gregorianZonedDateTime.$prop$getTime={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns [[Time]] representation of current zoned _date and time_.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','time']};}};
    $$gregorianZonedDateTime.$prop$getTime.get=function(){return time};
    var minusDays=function (days$1240){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusDays(days$1240));
    };
    minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",184)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusDays']};};
    $$gregorianZonedDateTime.minusDays=minusDays;
    var minusHours=function (hours$1242){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusHours(hours$1242));
    };
    minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",185)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusHours']};};
    $$gregorianZonedDateTime.minusHours=minusHours;
    var minusMilliseconds=function (milliseconds$1243){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMilliseconds(milliseconds$1243));
    };
    minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",192)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMilliseconds']};};
    $$gregorianZonedDateTime.minusMilliseconds=minusMilliseconds;
    var minusMinutes=function (minutes$1244){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMinutes(minutes$1244));
    };
    minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMinutes']};};
    $$gregorianZonedDateTime.minusMinutes=minusMinutes;
    var minusMonths=function (months$1245){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusMonths(months$1245));
    };
    minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of months from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",447)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusMonths']};};
    $$gregorianZonedDateTime.minusMonths=minusMonths;
    var minusSeconds=function (seconds$1246){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusSeconds(seconds$1246));
    };
    minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusSeconds']};};
    $$gregorianZonedDateTime.minusSeconds=minusSeconds;
    var minusWeeks=function (weeks$1247){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusWeeks(weeks$1247));
    };
    minusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",185)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusWeeks']};};
    $$gregorianZonedDateTime.minusWeeks=minusWeeks;
    var minusYears=function (years$1248){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).minusYears(years$1248));
    };
    minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts number of years from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",445)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','minusYears']};};
    $$gregorianZonedDateTime.minusYears=minusYears;
    var plusDays=function (days$1249){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusDays(days$1249));
    };
    plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of days from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",179)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusDays']};};
    $$gregorianZonedDateTime.plusDays=plusDays;
    var plusHours=function (hours$1250){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusHours(hours$1250));
    };
    plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of hours from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",180)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusHours']};};
    $$gregorianZonedDateTime.plusHours=plusHours;
    var plusMilliseconds=function (milliseconds$1251){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMilliseconds(milliseconds$1251));
    };
    plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of milliseconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",187)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMilliseconds']};};
    $$gregorianZonedDateTime.plusMilliseconds=plusMilliseconds;
    var plusMinutes=function (minutes$1252){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMinutes(minutes$1252));
    };
    plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of minutes from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",182)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMinutes']};};
    $$gregorianZonedDateTime.plusMinutes=plusMinutes;
    var plusMonths=function (months$1253){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusMonths(months$1253));
    };
    plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of months to this _zoned date and time_ and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n",337)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusMonths']};};
    $$gregorianZonedDateTime.plusMonths=plusMonths;
    var plusSeconds=function (seconds$1254){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusSeconds(seconds$1254));
    };
    plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of seconds from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",182)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusSeconds']};};
    $$gregorianZonedDateTime.plusSeconds=plusSeconds;
    var plusWeeks=function (weeks$1255){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusWeeks(weeks$1255));
    };
    plusWeeks.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of weeks from this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",180)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusWeeks']};};
    $$gregorianZonedDateTime.plusWeeks=plusWeeks;
    var plusYears=function (years$1256){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).plusYears(years$1256));
    };
    plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds number of years to this _zoned date and time_ and returns the resulting [[ZoneDateTime]].\n\n**Note 01:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",437)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','plusYears']};};
    $$gregorianZonedDateTime.plusYears=plusYears;
    var withDay=function (dayOfMonth$1257){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withDay(dayOfMonth$1257));
    };
    withDay.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'dayOfMonth',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _day of month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",232)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withDay']};};
    $$gregorianZonedDateTime.withDay=withDay;
    var withHours=function (hours$1258){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withHours(hours$1258));
    };
    withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _hour_ value set to the specified value.\n\n**Note 01:** It should be a valid _hour_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",209)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withHours']};};
    $$gregorianZonedDateTime.withHours=withHours;
    var withMilliseconds=function (milliseconds$1259){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMilliseconds(milliseconds$1259));
    };
    withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _milliseconds_ value set to the specified value.\n\n**Note 01:** It should be a valid _millisecond_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",224)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMilliseconds']};};
    $$gregorianZonedDateTime.withMilliseconds=withMilliseconds;
    var withMinutes=function (minutes$1260){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMinutes(minutes$1260));
    };
    withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _minute_ value set to the specified value.\n\n**Note 01:** It should be a valid _minute_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMinutes']};};
    $$gregorianZonedDateTime.withMinutes=withMinutes;
    var withMonth=function (month$1261){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withMonth(month$1261));
    };
    withMonth.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'month',$mt:'prm',$t:{t:$$$ct793.Month$base},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _month_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",225)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withMonth']};};
    $$gregorianZonedDateTime.withMonth=withMonth;
    var withSeconds=function (seconds$1262){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withSeconds(seconds$1262));
    };
    withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _second_ value set to the specified value.\n\n**Note 01:** It should be a valid _second_.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",213)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withSeconds']};};
    $$gregorianZonedDateTime.withSeconds=withSeconds;
    var withYear=function (year$1263){
        return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).withYear(year$1263));
    };
    withYear.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns new [[ZoneDateTime]] with the _year_ value set to the specified value.\n\n**Note 01:** It should result in a valid gregorian date.\n\n**Note 02:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.\n",224)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','withYear']};};
    $$gregorianZonedDateTime.withYear=withYear;
    $$$cl1.defineAttr($$gregorianZonedDateTime,'predecessor',function(){return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).predecessor);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",252)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};});
    $$gregorianZonedDateTime.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",252)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','predecessor']};}};
    $$gregorianZonedDateTime.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'successor',function(){return adjust$1241($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).successor);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",246)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};});
    $$gregorianZonedDateTime.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ZoneDateTime$timezone},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For sucessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the successor is the current value plus 1 millisecond.\n\n**Note:** The resulting  [[ZoneDateTime]] can be affected by Daylight Saving Time.",246)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','successor']};}};
    $$gregorianZonedDateTime.$prop$getSuccessor.get=function(){return successor};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'string',function(){
        var offset$1264=$$gregorianZonedDateTime.timeZone.offset($$gregorianZonedDateTime.instant);
        $prop$getOffset$1264={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string','$at','offset']};}};
        $prop$getOffset$1264.get=function(){return offset$1264};
        var builder$1265=$$$cl1.StringBuilder();
        $prop$getBuilder$1265={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string','$at','builder']};}};
        $prop$getBuilder$1265.get=function(){return builder$1265};
        builder$1265.append($$gregorianZonedDateTime.instant.dateTime($$gregorianZonedDateTime.timeZone).string);
        builder$1265.append((opt$1266=((offset$1264.compare((0))!==$$$cl1.getSmaller())?$$$cl1.String("+",1):null),opt$1266!==null?opt$1266:$$$cl1.String("-",1)));
        var opt$1266;
        builder$1265.append($$$cl1.StringBuilder().appendAll([leftPad$internal(offset$1264.divided($$$ct793.getMilliseconds$base().perHour).magnitude).string,$$$cl1.String(":",1),leftPad$internal(offset$1264.remainder($$$ct793.getMilliseconds$base().perHour)).string]).string);
        return builder$1265.string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC",144)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','string']};});
    function adjust$1241(resolved$1267){
        var zoneMillisecondsOfEpoch$1268=$$$ct793.getUnixTime$chronology().timeFromFixed(resolved$1267.dayOfEra).plus(resolved$1267.millisecondsOfDay);
        $prop$getZoneMillisecondsOfEpoch$1268={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust','$at','zoneMillisecondsOfEpoch']};}};
        $prop$getZoneMillisecondsOfEpoch$1268.get=function(){return zoneMillisecondsOfEpoch$1268};
        var utcMillisecondsOfEpoch$1269=zoneMillisecondsOfEpoch$1268.minus($$gregorianZonedDateTime.timeZone.offset($$gregorianZonedDateTime.instant));
        $prop$getUtcMillisecondsOfEpoch$1269={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust','$at','utcMillisecondsOfEpoch']};}};
        $prop$getUtcMillisecondsOfEpoch$1269.get=function(){return utcMillisecondsOfEpoch$1269};
        return GregorianZonedDateTime$internal($$$ct793.Instant(utcMillisecondsOfEpoch$1269),$$gregorianZonedDateTime.timeZone);
    };adjust$1241.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:GregorianZonedDateTime$internal},$ps:[{$nm:'resolved',$mt:'prm',$t:{t:$$$ct793.DateTime},$an:function(){return[];}}],$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Fix [[DateTime]] zone absence.",30))];},d:['ceylon.time.internal','GregorianZonedDateTime','$m','adjust']};};
    $$$cl1.defineAttr($$gregorianZonedDateTime,'integerValue',function(){return $$gregorianZonedDateTime.instant.millisecondsOfEpoch;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of epoch_ as it enumerable value.",55)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','integerValue']};});
    $$gregorianZonedDateTime.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:GregorianZonedDateTime$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of epoch_ as it enumerable value.",55)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','GregorianZonedDateTime','$at','integerValue']};}};
    $$gregorianZonedDateTime.$prop$getIntegerValue.get=function(){return integerValue};
    return $$gregorianZonedDateTime;
}
GregorianZonedDateTime$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.ZoneDateTime$timezone}],$an:function(){return[$$$cl1.doc($$$cl1.String("Default implementation of gregorian calendar thats makes use of a [[TimeZone]] for it´s operations.\n\nThis means that making some operations like _plusDays_ takes into \naccount the result Instant generated to reapply all the rules of the current TimeZone.",254)),$$$cl1.shared()];},d:['ceylon.time.internal','GregorianZonedDateTime']};};
exports.GregorianZonedDateTime$internal=GregorianZonedDateTime$internal;
function $init$GregorianZonedDateTime$internal(){
    if (GregorianZonedDateTime$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianZonedDateTime$internal,'ceylon.time.internal::GregorianZonedDateTime',$$$cl1.Basic,$$$ct793.$init$ZoneDateTime$timezone());
    }
    return GregorianZonedDateTime$internal;
}
exports.$init$GregorianZonedDateTime$internal=$init$GregorianZonedDateTime$internal;
$init$GregorianZonedDateTime$internal();
function floor$internal$math(x$1270){
    if(((!x$1270.fractionalPart.equals($$$cl1.Float(0.0)))&&x$1270.negative)){
        return x$1270.integer.minus((1));
    }
    var i$1271=x$1270.integer;
    $prop$getI$1271={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal.math','floor','$at','i']};}};
    $prop$getI$1271.get=function(){return i$1271};
    return i$1271;
}
exports.floor$internal$math=floor$internal$math;
floor$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the largest integer less than or equal to _x_.",54)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floor']};};
var floorDiv$internal$math=function (x$1272,y$1273){
    return floor$internal$math(x$1272.$float.divided(y$1273.$float));
};
floorDiv$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns floored division of the two integers.",45)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floorDiv']};};
exports.floorDiv$internal$math=floorDiv$internal$math;
var round$internal$math=function (f$1274){
    return floor$internal$math(f$1274.plus($$$cl1.Float(0.5)));
};
round$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl1.Float},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns nearest integer to x",28)),$$$cl1.shared()];},d:['ceylon.time.internal.math','round']};};
exports.round$internal$math=round$internal$math;
function floorMod$internal$math(x$1275,y$1276){
    var fx$1277=x$1275.$float;
    $prop$getFx$1277={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.time.internal.math','floorMod','$at','fx']};}};
    $prop$getFx$1277.get=function(){return fx$1277};
    var fy$1278=y$1276.$float;
    $prop$getFy$1278={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Float},d:['ceylon.time.internal.math','floorMod','$at','fy']};}};
    $prop$getFy$1278.get=function(){return fy$1278};
    return fx$1277.minus(fy$1278.times(floor$internal$math(fx$1277.divided(fy$1278)))).integer;
}
exports.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the floor remainder (modulus) of the two integers.\n\n    value moduli = [for (x in 4..-4) mod(x, 4)] \n    assert( moduli == [0, 3, 2, 1, 0, 3, 2, 1, 0] );\n",162)),$$$cl1.shared()];},d:['ceylon.time.internal.math','floorMod']};};
function adjustedMod$internal$math(x$1279,y$1280){
    var amod$1281=floorMod$internal$math(x$1279,y$1280);
    $prop$getAmod$1281={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal.math','adjustedMod','$at','amod']};}};
    $prop$getAmod$1281.get=function(){return amod$1281};
    if(amod$1281.equals((0))){
        return y$1280;
    }
    return amod$1281;
}
exports.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns an _adjusted remainder_ of the two integers.\n\n   value moduli = [for (x in 4..-4) amod(x, 4)];\n   assert( moduli == [4, 3, 2, 1, 4, 3, 2, 1, 4] );\n",155)),$$$cl1.shared()];},d:['ceylon.time.internal.math','adjustedMod']};};
exports.$pkg$ans$ceylon$time$internal$math=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
exports.$pkg$ans$ceylon$time$internal=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function TimeOfDay$internal(millisecondsOfDay, $$timeOfDay){
    $init$TimeOfDay$internal();
    if ($$timeOfDay===undefined)$$timeOfDay=new TimeOfDay$internal.$$;
    $$$ct793.Time($$timeOfDay);
    var millisecondsOfDay=millisecondsOfDay;
    $$$cl1.defineAttr($$timeOfDay,'millisecondsOfDay',function(){return millisecondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};});
    $$timeOfDay.$prop$getMillisecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last midnight.",43)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','millisecondsOfDay']};}};
    $$timeOfDay.$prop$getMillisecondsOfDay.get=function(){return millisecondsOfDay};
    $$$cl1.defineAttr($$timeOfDay,'hours',function(){return $$timeOfDay.millisecondsOfDay.divided($$$ct793.getMilliseconds$base().perHour);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};});
    $$timeOfDay.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of full hours elapsed since last midnight.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','hours']};}};
    $$timeOfDay.$prop$getHours.get=function(){return hours};
    $$$cl1.defineAttr($$timeOfDay,'minutes',function(){return $$$ct793.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct793.getMilliseconds$base().perHour).divided($$$ct793.getMilliseconds$base().perMinute);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};});
    $$timeOfDay.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last full hour.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutes']};}};
    $$timeOfDay.$prop$getMinutes.get=function(){return minutes};
    $$$cl1.defineAttr($$timeOfDay,'seconds',function(){return $$$ct793.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct793.getMilliseconds$base().perMinute).divided($$$ct793.getMilliseconds$base().perSecond);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};});
    $$timeOfDay.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last minute.",36)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','seconds']};}};
    $$timeOfDay.$prop$getSeconds.get=function(){return seconds};
    $$$cl1.defineAttr($$timeOfDay,'milliseconds',function(){return $$$ct793.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct793.getMilliseconds$base().perSecond);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};});
    $$timeOfDay.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of milliseconds since last full second.",46)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','milliseconds']};}};
    $$timeOfDay.$prop$getMilliseconds.get=function(){return milliseconds};
    $$$cl1.defineAttr($$timeOfDay,'secondsOfDay',function(){return $$timeOfDay.millisecondsOfDay.divided($$$ct793.getMilliseconds$base().perSecond);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};});
    $$timeOfDay.$prop$getSecondsOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of seconds since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','secondsOfDay']};}};
    $$timeOfDay.$prop$getSecondsOfDay.get=function(){return secondsOfDay};
    $$$cl1.defineAttr($$timeOfDay,'minutesOfDay',function(){return $$timeOfDay.secondsOfDay.divided($$$ct793.getSeconds$base().perMinute);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};});
    $$timeOfDay.$prop$getMinutesOfDay={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Number of minutes since last midnight.",38)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','minutesOfDay']};}};
    $$timeOfDay.$prop$getMinutesOfDay.get=function(){return minutesOfDay};
    function compare(other$1282){
        return $$timeOfDay.millisecondsOfDay.compare(other$1282.millisecondsOfDay);
    }
    $$timeOfDay.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Compare two instances of _time of day_.",39)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','compare']};};
    $$$cl1.defineAttr($$timeOfDay,'predecessor',function(){return $$timeOfDay.minusMilliseconds((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.",168)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};});
    $$timeOfDay.$prop$getPredecessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For predecessor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the predecessor is the current value minus 1 millisecond.",168)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','predecessor']};}};
    $$timeOfDay.$prop$getPredecessor.get=function(){return predecessor};
    $$$cl1.defineAttr($$timeOfDay,'successor',function(){return $$timeOfDay.plusMilliseconds((1));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond.",162)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};});
    $$timeOfDay.$prop$getSuccessor={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("For successor its used the lowest unit of time, this way we can benefit\nfrom maximum precision. In this case the sucessor is the current value plus 1 millisecond.",162)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','successor']};}};
    $$timeOfDay.$prop$getSuccessor.get=function(){return successor};
    $$$cl1.defineAttr($$timeOfDay,'string',function(){
        return $$$cl1.StringBuilder().appendAll([leftPad$internal($$timeOfDay.hours).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.minutes).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.seconds).string,$$$cl1.String(".",1),leftPad$internal($$timeOfDay.milliseconds,$$$cl1.String("000",3)).string]).string;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns ISO-8601 formatted String representation of this _time of day_.\n\nReference: https://en.wikipedia.org/wiki/ISO_8601#Times",128)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','string']};});
    var plusHours=function (hours$1283){
        return $$timeOfDay.plusMilliseconds(hours$1283.times($$$ct793.getMilliseconds$base().perHour));
    };
    plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of hours to this time of day\nand returns the result as new time of day.",93)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusHours']};};
    $$timeOfDay.plusHours=plusHours;
    var minusHours=function (hours$1284){
        return $$timeOfDay.minusMilliseconds(hours$1284.times($$$ct793.getMilliseconds$base().perHour));
    };
    minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of hours from this time of day \nand returns the resul as new time of day.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusHours']};};
    $$timeOfDay.minusHours=minusHours;
    var plusMinutes=function (minutes$1285){
        return $$timeOfDay.plusMilliseconds(minutes$1285.times($$$ct793.getMilliseconds$base().perMinute));
    };
    plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of minutes to this time of day \nand returns the result as new  time of day.",97)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusMinutes']};};
    $$timeOfDay.plusMinutes=plusMinutes;
    var minusMinutes=function (minutes$1286){
        return $$timeOfDay.minusMilliseconds(minutes$1286.times($$$ct793.getMilliseconds$base().perMinute));
    };
    minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of minutes from this time of day \nand returns the result as new  time of day.",104)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusMinutes']};};
    $$timeOfDay.minusMinutes=minusMinutes;
    var plusSeconds=function (seconds$1287){
        return $$timeOfDay.plusMilliseconds(seconds$1287.times($$$ct793.getMilliseconds$base().perSecond));
    };
    plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of seconds to this time of day\nand returns the result as new time of day.",95)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusSeconds']};};
    $$timeOfDay.plusSeconds=plusSeconds;
    var minusSeconds=function (seconds$1288){
        return $$timeOfDay.minusMilliseconds(seconds$1288.times($$$ct793.getMilliseconds$base().perSecond));
    };
    minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of seconds from this time of day\nand returns the result as new time of day.",102)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusSeconds']};};
    $$timeOfDay.minusSeconds=minusSeconds;
    function plusMilliseconds(milliseconds$1289){
        if(milliseconds$1289.equals((0))){
            return $$timeOfDay;
        }
        var newMillisOfDay$1290=$$$ct793.floorMod$internal$math($$timeOfDay.millisecondsOfDay.plus(milliseconds$1289),$$$ct793.getMilliseconds$base().perDay);
        $prop$getNewMillisOfDay$1290={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds','$at','newMillisOfDay']};}};
        $prop$getNewMillisOfDay$1290.get=function(){return newMillisOfDay$1290};
        return (opt$1291=(newMillisOfDay$1290.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1291!==null?opt$1291:TimeOfDay$internal(newMillisOfDay$1290));
        var opt$1291;
    }
    $$timeOfDay.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified number of milliseconds to this time of day\nand returns the result as new time of day.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plusMilliseconds']};};
    var minusMilliseconds=function (milliseconds$1292){
        return $$timeOfDay.plusMilliseconds((-milliseconds$1292));
    };
    minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified number of milliseconds from this time of day\nand returns the result as new time of day.",107)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minusMilliseconds']};};
    $$timeOfDay.minusMilliseconds=minusMilliseconds;
    function plus(period$1293){
        var totalMillis$1294=$$timeOfDay.millisecondsOfDay.plus(period$1293.milliseconds).plus(period$1293.seconds.times($$$ct793.getMilliseconds$base().perSecond)).plus(period$1293.minutes.times($$$ct793.getMilliseconds$base().perMinute)).plus(period$1293.hours.times($$$ct793.getMilliseconds$base().perHour));
        $prop$getTotalMillis$1294={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','plus','$at','totalMillis']};}};
        $prop$getTotalMillis$1294.get=function(){return totalMillis$1294};
        var time$1295=$$$ct793.floorMod$internal$math(totalMillis$1294,$$$ct793.getMilliseconds$base().perDay);
        $prop$getTime$1295={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','plus','$at','time']};}};
        $prop$getTime$1295.get=function(){return time$1295};
        return (opt$1296=(time$1295.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1296!==null?opt$1296:TimeOfDay$internal(time$1295));
        var opt$1296;
    }
    $$timeOfDay.plus=plus;
    plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:$$$ct793.ReadableTimePeriod$base},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Adds specified time period to this time of day \nand returns the result as new time of day.",90)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','plus']};};
    function minus(period$1297){
        var totalMillis$1298=$$timeOfDay.millisecondsOfDay.minus(period$1297.milliseconds).minus(period$1297.seconds.times($$$ct793.getMilliseconds$base().perSecond)).minus(period$1297.minutes.times($$$ct793.getMilliseconds$base().perMinute)).minus(period$1297.hours.times($$$ct793.getMilliseconds$base().perHour));
        $prop$getTotalMillis$1298={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','minus','$at','totalMillis']};}};
        $prop$getTotalMillis$1298.get=function(){return totalMillis$1298};
        var time$1299=$$$ct793.floorMod$internal$math(totalMillis$1298,$$$ct793.getMilliseconds$base().perDay);
        $prop$getTime$1299={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','minus','$at','time']};}};
        $prop$getTime$1299.get=function(){return time$1299};
        return (opt$1300=(time$1299.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1300!==null?opt$1300:TimeOfDay$internal(time$1299));
        var opt$1300;
    }
    $$timeOfDay.minus=minus;
    minus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:$$$ct793.ReadableTimePeriod$base},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Subtracts specified time period from this time of day \nand returns the result as new time of day.",97)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','minus']};};
    function withHours(hours$1301){
        if($$timeOfDay.hours.equals(hours$1301)){
            return $$timeOfDay;
        }
        return $$$ct793.time(hours$1301,$$timeOfDay.minutes,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withHours=withHours;
    withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _hours_ value.\n\n**Note:** It should be a valid _hour_.",96)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withHours']};};
    function withMinutes(minutes$1302){
        if($$timeOfDay.minutes.equals(minutes$1302)){
            return $$timeOfDay;
        }
        return $$$ct793.time($$timeOfDay.hours,minutes$1302,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withMinutes=withMinutes;
    withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _minutes_ value.\n\n**Note:** It should be a valid _minute_.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withMinutes']};};
    function withSeconds(seconds$1303){
        if($$timeOfDay.seconds.equals(seconds$1303)){
            return $$timeOfDay;
        }
        return $$$ct793.time($$timeOfDay.hours,$$timeOfDay.minutes,seconds$1303,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withSeconds=withSeconds;
    withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _seconds_ value.\n\n**Note:** It should be a valid _second_.",100)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withSeconds']};};
    function withMilliseconds(milliseconds$1304){
        if($$timeOfDay.milliseconds.equals(milliseconds$1304)){
            return $$timeOfDay;
        }
        return $$$ct793.time($$timeOfDay.hours,$$timeOfDay.minutes,$$timeOfDay.seconds,milliseconds$1304);
    }
    $$timeOfDay.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this Time replacing the _milliseconds_ value.\n\n**Note:** It should be a valid _millisecond_.",110)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','withMilliseconds']};};
    function equals(other$1305){
        var other$1306;
        if($$$cl1.isOfType((other$1306=other$1305),{t:TimeOfDay$internal})){
            return $$timeOfDay.millisecondsOfDay.equals(other$1306.millisecondsOfDay);
        }
        return false;
    }
    $$timeOfDay.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Return _true_ if it have same type and milliseconds of day.",59)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','equals']};};
    function periodFrom(start$1307){
        var from$1308=(opt$1309=($$timeOfDay.compare(start$1307).equals($$$cl1.getSmaller())?$$timeOfDay:null),opt$1309!==null?opt$1309:start$1307);
        $prop$getFrom$1308={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','from']};}};
        $prop$getFrom$1308.get=function(){return from$1308};
        var opt$1309;
        var to$1310=(opt$1311=($$timeOfDay.compare(start$1307).equals($$$cl1.getSmaller())?start$1307:null),opt$1311!==null?opt$1311:$$timeOfDay);
        $prop$getTo$1310={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Time},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','to']};}};
        $prop$getTo$1310.get=function(){return to$1310};
        var opt$1311;
        var total$1312=to$1310.millisecondsOfDay.minus(from$1308.millisecondsOfDay);
        var setTotal$1312=function(total$1313){return total$1312=total$1313;};
        $prop$getTotal$1312={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','total']};}};
        $prop$getTotal$1312.get=function(){return total$1312};
        $prop$getTotal$1312.set=setTotal$1312;
        if (setTotal$1312.$$metamodel$$===undefined)setTotal$1312.$$metamodel$$=$prop$getTotal$1312.$$metamodel$$;
        var hh$1314=total$1312.divided($$$ct793.getMilliseconds$base().perHour);
        $prop$getHh$1314={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','hh']};}};
        $prop$getHh$1314.get=function(){return hh$1314};
        total$1312=total$1312.remainder($$$ct793.getMilliseconds$base().perHour);
        var mm$1315=total$1312.divided($$$ct793.getMilliseconds$base().perMinute);
        $prop$getMm$1315={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','mm']};}};
        $prop$getMm$1315.get=function(){return mm$1315};
        total$1312=total$1312.remainder($$$ct793.getMilliseconds$base().perMinute);
        var ss$1316=total$1312.divided($$$ct793.getMilliseconds$base().perSecond);
        $prop$getSs$1316={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','ss']};}};
        $prop$getSs$1316.get=function(){return ss$1316};
        var positive$1317=start$1307.compare($$timeOfDay).equals($$$cl1.getSmaller());
        $prop$getPositive$1317={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom','$at','positive']};}};
        $prop$getPositive$1317.get=function(){return positive$1317};
        return (hours$1318=(opt$1319=(positive$1317?hh$1314:null),opt$1319!==null?opt$1319:(-hh$1314)),minutes$1320=(opt$1321=(positive$1317?mm$1315:null),opt$1321!==null?opt$1321:(-mm$1315)),seconds$1322=(opt$1323=(positive$1317?ss$1316:null),opt$1323!==null?opt$1323:(-ss$1316)),milliseconds$1324=(opt$1325=(positive$1317?total$1312.remainder($$$ct793.getMilliseconds$base().perSecond):null),opt$1325!==null?opt$1325:(-total$1312.remainder($$$ct793.getMilliseconds$base().perSecond))),$$$ct793.Period(undefined,undefined,undefined,hours$1318,minutes$1320,seconds$1322,milliseconds$1324));
        var hours$1318,opt$1319,minutes$1320,opt$1321,seconds$1322,opt$1323,milliseconds$1324,opt$1325;
    }
    $$timeOfDay.periodFrom=periodFrom;
    periodFrom.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct793.Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given time.\n\nIf this time is before the given time then return zero period.",115)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','periodFrom']};};
    var periodTo=function (end$1326){
        return end$1326.periodFrom($$timeOfDay);
    };
    periodTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct793.Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the period between this and the given time.\n\nIf this time is after the given time then return zero period.",114)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','periodTo']};};
    $$timeOfDay.periodTo=periodTo;
    function rangeTo(other$1327){
        return $$$ct793.TimeRange($$timeOfDay,other$1327);
    }
    $$timeOfDay.rangeTo=rangeTo;
    rangeTo.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.TimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Time},$an:function(){return[];}}],$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the [[TimeRange]] between this and given Time.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$m','rangeTo']};};
    $$$cl1.defineAttr($$timeOfDay,'integerValue',function(){return $$timeOfDay.millisecondsOfDay;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of day_ as it enumerable value",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','integerValue']};});
    $$timeOfDay.$prop$getIntegerValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:TimeOfDay$internal,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _milliseconds of day_ as it enumerable value",52)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.internal','TimeOfDay','$at','integerValue']};}};
    $$timeOfDay.$prop$getIntegerValue.get=function(){return integerValue};
    return $$timeOfDay;
}
TimeOfDay$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.Time}],$an:function(){return[$$$cl1.doc($$$cl1.String("Basic implementation of [[Time]] interface, representing an abstract \n_time of day_ such as _10am_ or _3.20pm_ with a precision of milliseconds.",144)),$$$cl1.shared()];},d:['ceylon.time.internal','TimeOfDay']};};
exports.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
    if (TimeOfDay$internal.$$===undefined){
        $$$cl1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',$$$cl1.Basic,$$$ct793.$init$Time());
    }
    return TimeOfDay$internal;
}
exports.$init$TimeOfDay$internal=$init$TimeOfDay$internal;
$init$TimeOfDay$internal();
function leftPad$internal(number$1328,padding$1329){
    if(padding$1329===undefined){padding$1329=$$$cl1.String("00",2);}
    if(number$1328.equals((0))){
        return padding$1329;
    }
    var string$1330=number$1328.string;
    $prop$getString$1330={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.time.internal','leftPad','$at','string']};}};
    $prop$getString$1330.get=function(){return string$1330};
    var digits$1331=string$1330.size;
    $prop$getDigits$1331={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.internal','leftPad','$at','digits']};}};
    $prop$getDigits$1331.get=function(){return digits$1331};
    if(digits$1331.compare(padding$1329.size).equals($$$cl1.getSmaller())){
        var padded$1332=padding$1329.plus(string$1330);
        $prop$getPadded$1332={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['ceylon.time.internal','leftPad','$at','padded']};}};
        $prop$getPadded$1332.get=function(){return padded$1332};
        return padded$1332.segment(padded$1332.size.minus(padding$1329.size),padding$1329.size);
    }
    return string$1330;
}
exports.leftPad$internal=leftPad$internal;
leftPad$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'padding',$mt:'prm',$def:1,$t:{t:$$$cl1.String},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Return padded value of the number as a string.",46)),$$$cl1.shared()];},d:['ceylon.time.internal','leftPad']};};
function intersect$internal(start$1333,end$1334,otherStart$1335,otherEnd$1336,$$$mptypes){
    return ((start$1333.compare(otherEnd$1336)!==$$$cl1.getLarger())&&(end$1334.compare(otherStart$1335)!==$$$cl1.getSmaller()));
}
exports.intersect$internal=intersect$internal;
intersect$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'start',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'end',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'otherStart',$mt:'prm',$t:'Value',$an:function(){return[];}},{$nm:'otherEnd',$mt:'prm',$t:'Value',$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.doc($$$cl1.String("Returns if two ranges has intersection.",39)),$$$cl1.shared()];},d:['ceylon.time.internal','intersect']};};
function overlap$internal(first$1337,second$1338,$$$mptypes){
    var ordered$1339=$$$cl1.sort($$$cl1.join([first$1337,second$1338].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    $prop$getOrdered$1339={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:'Value'}},d:['ceylon.time.internal','overlap','$at','ordered']};}};
    $prop$getOrdered$1339.get=function(){return ordered$1339};
    if(($$$cl1.Range(first$1337,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1339)&&$$$cl1.Range(second$1338,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1339))){
        //assert at utils.ceylon (39:8-39:44)
        var start$1340;
        if (!((start$1340=ordered$1339.first)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists start = ordered.first\' at utils.ceylon (39:14-39:43)"),'39:8-39:44','utils.ceylon'); }
        //assert at utils.ceylon (40:8-40:41)
        var end$1341;
        if (!((end$1341=ordered$1339.last)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists end = ordered.last\' at utils.ceylon (40:14-40:40)"),'40:8-40:41','utils.ceylon'); }
        return $$$cl1.Tuple(start$1340,$$$cl1.Tuple(end$1341,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
    }
    return $$$cl1.getEmpty();
}
exports.overlap$internal=overlap$internal;
overlap$internal.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},{t:$$$cl1.Empty}]},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}},{$nm:'second',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},$an:function(){return[];}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}},{t:$$$cl1.Ordinal,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the inclusive overlap between two ordinal ranges.\n\nThe range of the overlap will be returned in the natural order of the values regardless of their original order in input tuples.\n\nExamples:\n\n    assert(overlap([1, 3], [2, 4]) == [2, 3]);\n    assert(overlap([4, 2], [1, 3]) == [2, 3]);\n    assert(is Empty o = overlap([1, 2], [3, 4]));\n",344)),$$$cl1.shared()];},d:['ceylon.time.internal','overlap']};};
function gap$internal(first$1342,second$1343,$$$mptypes){
    var ordered$1344=$$$cl1.sort($$$cl1.join([first$1342,second$1343].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    $prop$getOrdered$1344={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Sequential,a:{Element:'Value'}},d:['ceylon.time.internal','gap','$at','ordered']};}};
    $prop$getOrdered$1344.get=function(){return ordered$1344};
    if(($$$cl1.Range(first$1342,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1344)&&$$$cl1.Range(second$1343,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1344))){
        return $$$cl1.getEmpty();
    }
    //assert at utils.ceylon (67:4-67:40)
    var start$1345;
    if (!((start$1345=ordered$1344.first)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists start = ordered.first\' at utils.ceylon (67:10-67:39)"),'67:4-67:40','utils.ceylon'); }
    //assert at utils.ceylon (68:4-68:37)
    var end$1346;
    if (!((end$1346=ordered$1344.last)!==null)) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \'exists end = ordered.last\' at utils.ceylon (68:10-68:36)"),'68:4-68:37','utils.ceylon'); }
    return $$$cl1.Tuple(start$1345,$$$cl1.Tuple(end$1346,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
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
    $$$ct793.ReadablePeriod$base($$period);
    $$$ct793.ReadableTimePeriod$base($$period);
    $$$ct793.ReadableDatePeriod$base($$period);
    $$$ct793.PeriodBehavior$base({Self:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Self',{t:Period});
    $$$cl1.Comparable({Other:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    $$$cl1.Summable({Other:{t:Period}},$$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    $$$cl1.Scalable({Value:{t:Period},Scale:{t:$$$cl1.Integer}},$$period);
    $$$cl1.add_type_arg($$period,'Value',{t:Period});
    $$$cl1.add_type_arg($$period,'Scale',{t:$$$cl1.Integer});
    var years=years;
    $$$cl1.defineAttr($$period,'years',function(){return years;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','years']};});
    $$period.$prop$getYears={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of years.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','years']};}};
    $$period.$prop$getYears.get=function(){return years};
    var months=months;
    $$$cl1.defineAttr($$period,'months',function(){return months;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','months']};});
    $$period.$prop$getMonths={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of months.",21)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','months']};}};
    $$period.$prop$getMonths.get=function(){return months};
    var days=days;
    $$$cl1.defineAttr($$period,'days',function(){return days;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','days']};});
    $$period.$prop$getDays={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of days.",19)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','days']};}};
    $$period.$prop$getDays.get=function(){return days};
    var hours=hours;
    $$$cl1.defineAttr($$period,'hours',function(){return hours;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','hours']};});
    $$period.$prop$getHours={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of hours.",20)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','hours']};}};
    $$period.$prop$getHours.get=function(){return hours};
    var minutes=minutes;
    $$$cl1.defineAttr($$period,'minutes',function(){return minutes;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','minutes']};});
    $$period.$prop$getMinutes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of minutes.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','minutes']};}};
    $$period.$prop$getMinutes.get=function(){return minutes};
    var seconds=seconds;
    $$$cl1.defineAttr($$period,'seconds',function(){return seconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','seconds']};});
    $$period.$prop$getSeconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of seconds.",22)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','seconds']};}};
    $$period.$prop$getSeconds.get=function(){return seconds};
    var milliseconds=milliseconds;
    $$$cl1.defineAttr($$period,'milliseconds',function(){return milliseconds;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds.",27)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','milliseconds']};});
    $$period.$prop$getMilliseconds={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("The number of milliseconds.",27)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','milliseconds']};}};
    $$period.$prop$getMilliseconds.get=function(){return milliseconds};
    function equals(that$1347){
        var that$1348;
        if($$$cl1.isOfType((that$1348=that$1347),{t:Period})){
            if(($$period===that$1348)){
                return true;
            }
            return (((((($$period.years.equals(that$1348.years)&&$$period.months.equals(that$1348.months))&&$$period.days.equals(that$1348.days))&&$$period.hours.equals(that$1348.hours))&&$$period.minutes.equals(that$1348.minutes))&&$$period.seconds.equals(that$1348.seconds))&&$$period.milliseconds.equals(that$1348.milliseconds));
        }
        return false;
    }
    $$period.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Checks if this period is equal to another period.",49)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','equals']};};
    function compare(other$1349){
        var norm1$1350=$$period.normalized();
        $prop$getNorm1$1350={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},d:['ceylon.time','Period','$m','compare','$at','norm1']};}};
        $prop$getNorm1$1350.get=function(){return norm1$1350};
        var norm2$1351=other$1349.normalized();
        $prop$getNorm2$1351={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},d:['ceylon.time','Period','$m','compare','$at','norm2']};}};
        $prop$getNorm2$1351.get=function(){return norm2$1351};
        return (opt$1352=((!norm1$1350.years.equals(norm2$1351.years))?norm1$1350.years.compare(norm2$1351.years):null),opt$1352!==null?opt$1352:(opt$1353=((!norm1$1350.months.equals(norm2$1351.months))?norm1$1350.months.compare(norm2$1351.months):null),opt$1353!==null?opt$1353:(opt$1354=((!norm1$1350.days.equals(norm2$1351.days))?norm1$1350.days.compare(norm2$1351.days):null),opt$1354!==null?opt$1354:(opt$1355=((!norm1$1350.hours.equals(norm2$1351.hours))?norm1$1350.hours.compare(norm2$1351.hours):null),opt$1355!==null?opt$1355:(opt$1356=((!norm1$1350.minutes.equals(norm2$1351.minutes))?norm1$1350.minutes.compare(norm2$1351.minutes):null),opt$1356!==null?opt$1356:(opt$1357=((!norm1$1350.seconds.equals(norm2$1351.seconds))?norm1$1350.seconds.compare(norm2$1351.seconds):null),opt$1357!==null?opt$1357:norm1$1350.milliseconds.compare(norm2$1351.milliseconds)))))));
        var opt$1352,opt$1353,opt$1354,opt$1355,opt$1356,opt$1357;
    }
    $$period.compare=compare;
    compare.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Return the result of comparing this period to the _other_ period.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','compare']};};
    function isZero(){
        return $$period.equals(getZero());
    }
    $$period.isZero=isZero;
    isZero.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Checks if this period is zero-length.",37)),$$$cl1.shared()];},d:['ceylon.time','Period','$m','isZero']};};
    function withYears(years$1358){
        if(years$1358.equals($$period.years)){
            return $$period;
        }
        return Period(years$1358,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withYears=withYears;
    withYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of years.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withYears']};};
    function withMonths(months$1359){
        if(months$1359.equals($$period.months)){
            return $$period;
        }
        return Period($$period.years,months$1359,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withMonths=withMonths;
    withMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of months.",66)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMonths']};};
    function withDays(days$1360){
        if(days$1360.equals($$period.days)){
            return $$period;
        }
        return Period($$period.years,$$period.months,days$1360,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withDays=withDays;
    withDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of days.",64)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withDays']};};
    function withHours(hours$1361){
        if(hours$1361.equals($$period.hours)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,hours$1361,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withHours=withHours;
    withHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of hours.",65)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withHours']};};
    function withMinutes(minutes$1362){
        if(minutes$1362.equals($$period.minutes)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,minutes$1362,$$period.seconds,$$period.milliseconds);
    }
    $$period.withMinutes=withMinutes;
    withMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of minutes.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMinutes']};};
    function withSeconds(seconds$1363){
        if(seconds$1363.equals($$period.seconds)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,seconds$1363,$$period.milliseconds);
    }
    $$period.withSeconds=withSeconds;
    withSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of seconds.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withSeconds']};};
    function withMilliseconds(milliseconds$1364){
        if(milliseconds$1364.equals($$period.milliseconds)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,milliseconds$1364);
    }
    $$period.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified amount of milliseconds.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','withMilliseconds']};};
    function plusYears(years$1365){
        return $$period.withYears($$period.years.plus(years$1365));
    }
    $$period.plusYears=plusYears;
    plusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of years added.",71)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusYears']};};
    function plusMonths(months$1366){
        return $$period.withMonths($$period.months.plus(months$1366));
    }
    $$period.plusMonths=plusMonths;
    plusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of months added.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMonths']};};
    function plusDays(days$1367){
        return $$period.withDays($$period.days.plus(days$1367));
    }
    $$period.plusDays=plusDays;
    plusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of days added.",70)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusDays']};};
    function plusHours(hours$1368){
        return $$period.withHours($$period.hours.plus(hours$1368));
    }
    $$period.plusHours=plusHours;
    plusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of hours added.",71)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusHours']};};
    function plusMinutes(minutes$1369){
        return $$period.withMinutes($$period.minutes.plus(minutes$1369));
    }
    $$period.plusMinutes=plusMinutes;
    plusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of minutes added.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMinutes']};};
    function plusSeconds(seconds$1370){
        return $$period.withSeconds($$period.seconds.plus(seconds$1370));
    }
    $$period.plusSeconds=plusSeconds;
    plusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of seconds added.",73)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusSeconds']};};
    function plusMilliseconds(milliseconds$1371){
        return $$period.withMilliseconds($$period.milliseconds.plus(milliseconds$1371));
    }
    $$period.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of milliseconds added.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plusMilliseconds']};};
    function minusYears(years$1372){
        return $$period.plusYears((-years$1372));
    }
    $$period.minusYears=minusYears;
    minusYears.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of years subtracted.",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusYears']};};
    function minusMonths(months$1373){
        return $$period.plusMonths((-months$1373));
    }
    $$period.minusMonths=minusMonths;
    minusMonths.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of months subtracted.",77)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMonths']};};
    function minusDays(days$1374){
        return $$period.plusDays((-days$1374));
    }
    $$period.minusDays=minusDays;
    minusDays.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of days subtracted.",75)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusDays']};};
    function minusHours(hours$1375){
        return $$period.plusHours((-hours$1375));
    }
    $$period.minusHours=minusHours;
    minusHours.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of hours subtracted.",76)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusHours']};};
    function minusMinutes(minutes$1376){
        return $$period.plusMinutes((-minutes$1376));
    }
    $$period.minusMinutes=minusMinutes;
    minusMinutes.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of minutes subtracted.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMinutes']};};
    function minusSeconds(seconds$1377){
        return $$period.plusSeconds((-seconds$1377));
    }
    $$period.minusSeconds=minusSeconds;
    minusSeconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of seconds subtracted.",78)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusSeconds']};};
    function minusMilliseconds(milliseconds$1378){
        return $$period.plusMilliseconds((-milliseconds$1378));
    }
    $$period.minusMilliseconds=minusMilliseconds;
    minusMilliseconds.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with the specified number of milliseconds subtracted.",83)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','minusMilliseconds']};};
    function plus(other$1379){
        return (years$1380=$$period.years.plus(other$1379.years),months$1381=$$period.months.plus(other$1379.months),days$1382=$$period.days.plus(other$1379.days),hours$1383=$$period.hours.plus(other$1379.hours),minutes$1384=$$period.minutes.plus(other$1379.minutes),seconds$1385=$$period.seconds.plus(other$1379.seconds),milliseconds$1386=$$period.milliseconds.plus(other$1379.milliseconds),Period(years$1380,months$1381,days$1382,hours$1383,minutes$1384,seconds$1385,milliseconds$1386));
        var years$1380,months$1381,days$1382,hours$1383,minutes$1384,seconds$1385,milliseconds$1386;
    }
    $$period.plus=plus;
    plus.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a new period that is a sum of the two periods.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','plus']};};
    $$$cl1.defineAttr($$period,'dateOnly',function(){
        return $$period;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ReadableDatePeriod$base},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a date only view of this period.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','dateOnly']};});
    $$$cl1.defineAttr($$period,'timeOnly',function(){
        return $$period;
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.ReadableTimePeriod$base},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a time only view of this period.",40)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','timeOnly']};});
    function normalized(){
        if($$period.equals(getZero())){
            return getZero();
        }
        var years$1387=$$period.years.plus($$period.months.divided((12)));
        $prop$getYears$1387={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','years']};}};
        $prop$getYears$1387.get=function(){return years$1387};
        var months$1388=$$period.months.remainder((12));
        $prop$getMonths$1388={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','months']};}};
        $prop$getMonths$1388.get=function(){return months$1388};
        var total$1389=$$period.hours.times($$$ct793.getSeconds$base().perHour).plus($$period.minutes.times($$$ct793.getSeconds$base().perMinute)).plus($$period.seconds);
        var setTotal$1389=function(total$1390){return total$1389=total$1390;};
        $prop$getTotal$1389={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','Period','$m','normalized','$at','total']};}};
        $prop$getTotal$1389.get=function(){return total$1389};
        $prop$getTotal$1389.set=setTotal$1389;
        if (setTotal$1389.$$metamodel$$===undefined)setTotal$1389.$$metamodel$$=$prop$getTotal$1389.$$metamodel$$;
        var millis$1391=$$period.milliseconds.remainder($$$ct793.getMilliseconds$base().perSecond);
        $prop$getMillis$1391={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','millis']};}};
        $prop$getMillis$1391.get=function(){return millis$1391};
        (total$1389=total$1389.plus($$period.milliseconds.divided($$$ct793.getMilliseconds$base().perSecond)));
        var seconds$1392=total$1389.remainder($$$ct793.getSeconds$base().perMinute);
        $prop$getSeconds$1392={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','seconds']};}};
        $prop$getSeconds$1392.get=function(){return seconds$1392};
        total$1389=total$1389.divided($$$ct793.getSeconds$base().perMinute);
        var minutes$1393=total$1389.remainder($$$ct793.getMinutes$base().perHour);
        $prop$getMinutes$1393={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','minutes']};}};
        $prop$getMinutes$1393.get=function(){return minutes$1393};
        var hours$1394=total$1389.divided($$$ct793.getMinutes$base().perHour);
        $prop$getHours$1394={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','Period','$m','normalized','$at','hours']};}};
        $prop$getHours$1394.get=function(){return hours$1394};
        return (years$1395=years$1387,months$1396=months$1388,days$1397=$$period.days,hours$1398=hours$1394,minutes$1399=minutes$1393,seconds$1400=seconds$1392,milliseconds$1401=millis$1391,Period(years$1395,months$1396,days$1397,hours$1398,minutes$1399,seconds$1400,milliseconds$1401));
        var years$1395,months$1396,days$1397,hours$1398,minutes$1399,seconds$1400,milliseconds$1401;
    }
    $$period.normalized=normalized;
    normalized.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a copy of this period with all amounts normalized to the \nstandard ranges for date/time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and milliseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year.",423)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','normalized']};};
    $$$cl1.defineAttr($$period,'string',function(){
        if($$period.equals(getZero())){
            return $$$cl1.String("PT0S",4);
        }else {
            var buf$1402=$$$cl1.StringBuilder();
            $prop$getBuf$1402={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.StringBuilder},d:['ceylon.time','Period','$at','string','$at','buf']};}};
            $prop$getBuf$1402.get=function(){return buf$1402};
            buf$1402.append($$$cl1.String("P",1));
            if((!$$period.years.equals((0)))){
                buf$1402.append($$period.years.string).append($$$cl1.String("Y",1));
            }
            if((!$$period.months.equals((0)))){
                buf$1402.append($$period.months.string).append($$$cl1.String("M",1));
            }
            if((!$$period.days.equals((0)))){
                buf$1402.append($$period.days.string).append($$$cl1.String("D",1));
            }
            if(((((!$$period.hours.equals((0)))||(!$$period.minutes.equals((0))))||(!$$period.seconds.equals((0))))||(!$$period.milliseconds.equals((0))))){
                buf$1402.append($$$cl1.String("T",1));
                if((!$$period.hours.equals((0)))){
                    buf$1402.append($$period.hours.string).append($$$cl1.String("H",1));
                }
                if((!$$period.minutes.equals((0)))){
                    buf$1402.append($$period.minutes.string).append($$$cl1.String("M",1));
                }
                if(((!$$period.seconds.equals((0)))||(!$$period.milliseconds.equals((0))))){
                    buf$1402.append($$period.seconds.string);
                    if((!$$period.milliseconds.equals((0)))){
                        buf$1402.append($$$cl1.StringBuilder().appendAll([$$$cl1.String(".",1),$$$ct793.leftPad$internal($$period.milliseconds,$$$cl1.String("000",3)).string]).string);
                    }
                    buf$1402.append($$$cl1.String("S",1));
                }
            }
            return buf$1402.string;
        }
    },undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the ISO-8601 formatted string for this period.",54)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$at','string']};});
    var scale=function (scale$1403){
        return (years$1404=scale$1403.times($$period.years),months$1405=scale$1403.times($$period.months),days$1406=scale$1403.times($$period.days),hours$1407=scale$1403.times($$period.hours),minutes$1408=scale$1403.times($$period.minutes),seconds$1409=scale$1403.times($$period.seconds),milliseconds$1410=scale$1403.times($$period.milliseconds),Period(years$1404,months$1405,days$1406,hours$1407,minutes$1408,seconds$1409,milliseconds$1410));
    };
    scale.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'scale',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:Period,$an:function(){return[$$$cl1.doc($$$cl1.String("Each field will be scalable independently, and the result will _not_ be normalized",82)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','Period','$m','scale']};};
    $$period.scale=scale;
    var years$1404,months$1405,days$1406,hours$1407,minutes$1408,seconds$1409,milliseconds$1410;
    return $$period;
}
Period.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.ReadablePeriod$base},{t:$$$ct793.ReadableTimePeriod$base},{t:$$$ct793.ReadableDatePeriod$base},{t:$$$ct793.PeriodBehavior$base,a:{Self:{t:Period}}},{t:$$$cl1.Comparable,a:{Other:{t:Period}}},{t:$$$cl1.Summable,a:{Other:{t:Period}}},{t:$$$cl1.Scalable,a:{Value:{t:Period},Scale:{t:$$$cl1.Integer}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("An immutable period consisting of the ISO-8601 _years_, _months_, _days_, _hours_,\n_minutes_, _seconds_ and _milliseconds_, such as \'3 Months, 4 Days and 7 Hours\'.\n\nA period is a human-scale description of an amount of time.\n",225)),$$$cl1.shared()];},d:['ceylon.time','Period']};};
exports.Period=Period;
function $init$Period(){
    if (Period.$$===undefined){
        $$$cl1.initTypeProto(Period,'ceylon.time::Period',$$$cl1.Basic,$$$ct793.$init$ReadablePeriod$base(),$$$ct793.$init$ReadableTimePeriod$base(),$$$ct793.$init$ReadableDatePeriod$base(),$$$ct793.$init$PeriodBehavior$base(),$$$cl1.Comparable,$$$cl1.Summable,$$$cl1.Scalable);
    }
    return Period;
}
exports.$init$Period=$init$Period;
$init$Period();
var zero$1411=Period();
var getZero=function(){return zero$1411;};
exports.getZero=getZero;
var $prop$getZero={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$an:function(){return[$$$cl1.doc($$$cl1.String("A period of zero length.",24)),$$$cl1.shared()];},d:['ceylon.time','zero']};}};
exports.$prop$getZero=$prop$getZero;
$prop$getZero.get=getZero;
getZero.$$metamodel$$=$prop$getZero.$$metamodel$$;
function Time($$time){
    $$$ct793.ReadableTime$base($$time);
    $$$ct793.TimeBehavior$base({Element:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Element',{t:Time});
    $$$cl1.Comparable({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
    $$$cl1.Ordinal({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
    $$$cl1.Enumerable({Other:{t:Time}},$$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
}
Time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:$$$ct793.ReadableTime$base},{t:$$$ct793.TimeBehavior$base,a:{Element:{t:Time}}},{t:$$$cl1.Comparable,a:{Other:{t:Time}}},{t:$$$cl1.Ordinal,a:{Other:{t:Time}}},{t:$$$cl1.Enumerable,a:{Other:{t:Time}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Time of day like _6pm_ or _8.30am_.\n\nThis type contains only information about an abstract _time of day_ without \nreferencing any date or timezone.\n\nYou use Time to specify something that has to occur on a specific time of day\nlike _\"lunch hour starts at 1pm\"_ or _\"shop opens at 10am\"_.\n",288)),$$$cl1.shared()];},d:['ceylon.time','Time']};};
exports.Time=Time;
function $init$Time(){
    if (Time.$$===undefined){
        $$$cl1.initTypeProto(Time,'ceylon.time::Time',$$$ct793.$init$ReadableTime$base(),$$$ct793.$init$TimeBehavior$base(),$$$cl1.Comparable,$$$cl1.Ordinal,$$$cl1.Enumerable);
    }
    return Time;
}
exports.$init$Time=$init$Time;
$init$Time();
function time(hours$1412,minutes$1413,seconds$1414,milliseconds$1415){
    if(seconds$1414===undefined){seconds$1414=(0);}
    if(milliseconds$1415===undefined){milliseconds$1415=(0);}
    var hours$1412=hours$1412;
    $prop$getHours$1412={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Hours of the day (0..23).",25))];},d:['ceylon.time','time','$at','hours']};}};
    $prop$getHours$1412.get=function(){return hours$1412};
    var minutes$1413=minutes$1413;
    $prop$getMinutes$1413={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Minutes of the hour (0..59).",28))];},d:['ceylon.time','time','$at','minutes']};}};
    $prop$getMinutes$1413.get=function(){return minutes$1413};
    var seconds$1414=seconds$1414;
    $prop$getSeconds$1414={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Seconds of the minute (0..59).",30))];},d:['ceylon.time','time','$at','seconds']};}};
    $prop$getSeconds$1414.get=function(){return seconds$1414};
    var milliseconds$1415=milliseconds$1415;
    $prop$getMilliseconds$1415={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc($$$cl1.String("Milliseconds of the second (0..999).",36))];},d:['ceylon.time','time','$at','milliseconds']};}};
    $prop$getMilliseconds$1415.get=function(){return milliseconds$1415};
    //assert at Time.ceylon (59:4-60:35)
    if (!((tmpvar$1416=hours$1412,tmpvar$1416.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1416.compare($$$ct793.getHours$base().perDay)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Hours value should be between 0 and 23.: \' 0 <= hours < h.perDay \' at Time.ceylon (60:10-60:34)"),'59:4-60:35','Time.ceylon'); }
    //assert at Time.ceylon (62:4-63:40)
    if (!((tmpvar$1417=minutes$1413,tmpvar$1417.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1417.compare($$$ct793.getMinutes$base().perHour)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Minutes value should be between 0 and 59.: \' 0 <= minutes < min.perHour \' at Time.ceylon (63:10-63:39)"),'62:4-63:40','Time.ceylon'); }
    //assert at Time.ceylon (65:4-66:42)
    if (!((tmpvar$1418=seconds$1414,tmpvar$1418.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1418.compare($$$ct793.getSeconds$base().perMinute)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Seconds value should be between 0 and 59.: \' 0 <= seconds < sec.perMinute \' at Time.ceylon (66:10-66:41)"),'65:4-66:42','Time.ceylon'); }
    //assert at Time.ceylon (68:4-69:46)
    if (!((tmpvar$1419=milliseconds$1415,tmpvar$1419.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1419.compare($$$ct793.getMilliseconds$base().perSecond)===$$$cl1.getSmaller()))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Milliseconds value should be between 0 and 999.: \' 0 <= milliseconds < ms.perSecond \' at Time.ceylon (69:10-69:45)"),'68:4-69:46','Time.ceylon'); }
    var hh$1420=hours$1412.times($$$ct793.getMilliseconds$base().perHour);
    $prop$getHh$1420={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','hh']};}};
    $prop$getHh$1420.get=function(){return hh$1420};
    var mm$1421=minutes$1413.times($$$ct793.getMilliseconds$base().perMinute);
    $prop$getMm$1421={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','mm']};}};
    $prop$getMm$1421.get=function(){return mm$1421};
    var ss$1422=seconds$1414.times($$$ct793.getMilliseconds$base().perSecond);
    $prop$getSs$1422={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time','time','$at','ss']};}};
    $prop$getSs$1422.get=function(){return ss$1422};
    return $$$ct793.TimeOfDay$internal(hh$1420.plus(mm$1421).plus(ss$1422).plus(milliseconds$1415));
}
exports.time=time;
time.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Hours of the day (0..23).")];}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Minutes of the hour (0..59).")];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Seconds of the minute (0..59).")];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[$$$cl1.doc("Milliseconds of the second (0..999).")];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Creates new instance of [[Time]].",33)),$$$cl1.shared()];},d:['ceylon.time','time']};};
function TimeRange(from, to, step, $$timeRange){
    $init$TimeRange();
    if ($$timeRange===undefined)$$timeRange=new TimeRange.$$;
    $$timeRange.$$targs$$={StepBy:{t:$$$ct793.UnitOfTime$base},Element:{t:Time}};
    if(step===undefined){step=$$$ct793.getMilliseconds$base();}
    $$$ct793.Range$base({StepBy:{t:$$$ct793.UnitOfTime$base},Element:{t:Time}},$$timeRange);
    $$$cl1.add_type_arg($$timeRange,'StepBy',{t:$$$ct793.UnitOfTime$base});
    $$$cl1.add_type_arg($$timeRange,'Element',{t:Time});
    $$timeRange.equals$$ceylon$time$base$Range=$$timeRange.equals;
    var from=from;
    $$$cl1.defineAttr($$timeRange,'from',function(){return from;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','from']};});
    $$timeRange.$prop$getFrom={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller/creator of the range.",271)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','from']};}};
    $$timeRange.$prop$getFrom.get=function(){return from};
    var to=to;
    $$$cl1.defineAttr($$timeRange,'to',function(){return to;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','to']};});
    $$timeRange.$prop$getTo={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element.\n\nGiven: tomorrow.to(today()) then today() is the _to_ element.",167)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','to']};}};
    $$timeRange.$prop$getTo.get=function(){return to};
    var step=step;
    $$$cl1.defineAttr($$timeRange,'step',function(){return step;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.UnitOfTime$base},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','step']};});
    $$timeRange.$prop$getStep={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.UnitOfTime$base},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator.",158)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','step']};}};
    $$timeRange.$prop$getStep.get=function(){return step};
    $$$cl1.defineAttr($$timeRange,'period',function(){return $$timeRange.from.periodTo($$timeRange.to);},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','period']};});
    $$timeRange.$prop$getPeriod={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Period},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day.\n\nGiven: tomorrow().to(today).duration then duration is -1 day.",186)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','period']};}};
    $$timeRange.$prop$getPeriod.get=function(){return period};
    $$$cl1.defineAttr($$timeRange,'duration',function(){return Duration($$timeRange.to.millisecondsOfDay.minus($$timeRange.from.millisecondsOfDay));},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','duration']};});
    $$timeRange.$prop$getDuration={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Duration},$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds.\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds.",220)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$at','duration']};}};
    $$timeRange.$prop$getDuration.get=function(){return duration};
    function equals(other$1423){
        return $$timeRange.equals$$ceylon$time$base$Range(other$1423);
    }
    $$timeRange.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns true if both: this and other are same type and have equal fields _from_ and _to_.",89)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','equals']};};
    function overlap(other$1424){
        var response$1425=$$$ct793.overlap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1424.from,$$$cl1.Tuple(other$1424.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
        $prop$getResponse$1425={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}},{t:$$$cl1.Empty}]},d:['ceylon.time','TimeRange','$m','overlap','$at','response']};}};
        $prop$getResponse$1425.get=function(){return response$1425};
        var response$1426;
        if($$$cl1.isOfType((response$1426=response$1425),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})){
            return TimeRange(response$1426.get((0)),response$1426.get((1)));
        }
        //assert at TimeRange.ceylon (82:8-82:34)
        var response$1427;
        if (!($$$cl1.isOfType((response$1427=response$1425),{t:$$$cl1.Empty}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Empty response\' at TimeRange.ceylon (82:14-82:33)"),'82:8-82:34','TimeRange.ceylon'); }
        return response$1427;
    }
    $$timeRange.overlap=overlap;
    overlap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfTime$base},Element:{t:Time}}},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [3,6]\n\n    [3..9] overlap [6..1] = [3,6]\n\n    [9..3] overlap [1..6] = [3,6]\n\n    [9..3] overlap [6..1] = [3,6]",576)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','overlap']};};
    function gap(other$1428){
        var response$1429=$$$ct793.gap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1428.from,$$$cl1.Tuple(other$1428.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
        $prop$getResponse$1429={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}},{t:$$$cl1.Empty}]},d:['ceylon.time','TimeRange','$m','gap','$at','response']};}};
        $prop$getResponse$1429.get=function(){return response$1429};
        
        var case$1430=response$1429;
        if ($$$cl1.isOfType(response$1429,{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})) {
            return (opt$1431=(case$1430.get((0)).successor.compare(case$1430.get((1))).equals($$$cl1.getSmaller())?TimeRange(case$1430.get((0)).successor,case$1430.get((1)).predecessor):null),opt$1431!==null?opt$1431:$$$cl1.getEmpty());
            var opt$1431;
        }else if ($$$cl1.isOfType(response$1429,{t:$$$cl1.Empty})) {
            return case$1430;
        }
    }
    $$timeRange.gap=gap;
    gap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfTime$base},Element:{t:Time}}},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (2,5)\n\n    [5..6] gap [2..1] = (2,5)\n\n    [6..5] gap [1..2] = (2,5)\n\n    [6..5] gap [2..1] = (2,5)",536)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','gap']};};
    function iterator(){
        function listIterator$1432($$targs$$){
            var $$listIterator$1432=new listIterator$1432.$$;
            $$listIterator$1432.$$targs$$=$$targs$$;
            $$$cl1.Iterator({Element:{t:Time}},$$listIterator$1432);
            $$$cl1.add_type_arg($$listIterator$1432,'Element',{t:Time});
            var count$1433=(0);
            $$$cl1.defineAttr($$listIterator$1432,'count$1433',function(){return count$1433;},function(count$1434){return count$1433=count$1434;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1432,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$at','count']};});
            $$listIterator$1432.$prop$getCount$1433={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:listIterator$1432,$an:function(){return[$$$cl1.variable()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$at','count']};}};
            $$listIterator$1432.$prop$getCount$1433.get=function(){return count$1433};
            function next(){
                var date$1435=(opt$1436=($$timeRange.from.compare($$timeRange.to).equals($$$cl1.getLarger())?previousByStep$1437((oldcount$1438=count$1433,count$1433=oldcount$1438.successor,oldcount$1438)):null),opt$1436!==null?opt$1436:nextByStep$1439((oldcount$1440=count$1433,count$1433=oldcount$1440.successor,oldcount$1440)));
                $prop$getDate$1435={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Time},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$m','next','$at','date']};}};
                $prop$getDate$1435.get=function(){return date$1435};
                var opt$1436,oldcount$1438,oldcount$1440;
                var continueLoop$1441=(opt$1442=(($$timeRange.from.compare($$timeRange.to)!==$$$cl1.getLarger())?(date$1435.compare($$timeRange.to)!==$$$cl1.getLarger()):null),opt$1442!==null?opt$1442:((date$1435.compare($$timeRange.to)!==$$$cl1.getSmaller())&&(date$1435.compare($$timeRange.from)!==$$$cl1.getLarger())));
                $prop$getContinueLoop$1441={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$m','next','$at','continueLoop']};}};
                $prop$getContinueLoop$1441.get=function(){return continueLoop$1441};
                var opt$1442;
                return (opt$1443=(continueLoop$1441?date$1435:null),opt$1443!==null?opt$1443:$$$cl1.getFinished());
                var opt$1443;
            }
            $$listIterator$1432.next=next;
            next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Time},{t:$$$cl1.Finished}]},$ps:[],$cont:listIterator$1432,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','iterator','$o','listIterator','$m','next']};};
            return $$listIterator$1432;
        }
        function $init$listIterator$1432(){
            if (listIterator$1432.$$===undefined){
                $$$cl1.initTypeProto(listIterator$1432,'ceylon.time::TimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$1432;
        }
        $init$listIterator$1432();
        var listIterator$1444=listIterator$1432({Element:{t:Time}});
        var getListIterator$1444=function(){
            return listIterator$1444;
        }
        getListIterator$1444.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:listIterator$1432},d:['ceylon.time','TimeRange','$m','iterator','$at','listIterator']};};
        $prop$getListIterator$1444={get:getListIterator$1444,$$metamodel$$:getListIterator$1444.$$metamodel$$};
        return getListIterator$1444();
    }
    $$timeRange.iterator=iterator;
    iterator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:Time}}},$ps:[],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range.",113)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','iterator']};};
    function stepBy(step$1445){
        return (opt$1446=(step$1445.equals($$timeRange.step)?$$timeRange:null),opt$1446!==null?opt$1446:TimeRange($$timeRange.from,$$timeRange.to,step$1445));
        var opt$1446;
    }
    $$timeRange.stepBy=stepBy;
    stepBy.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:$$$ct793.UnitOfTime$base},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("Define how this Range will get next or previous element while iterating.",72)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time','TimeRange','$m','stepBy']};};
    nextByStep$1439$defs$jump=function(jump$1447){return (1);};
    function nextByStep$1439(jump$1447){
        if(jump$1447===undefined){jump$1447=nextByStep$1439$defs$jump(jump$1447);}
        
        var case$1448=$$timeRange.step;
        if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfHour$base})) {
            return $$timeRange.from.plusHours(jump$1447);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfMinute$base})) {
            return $$timeRange.from.plusMinutes(jump$1447);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfSecond$base})) {
            return $$timeRange.from.plusSeconds(jump$1447);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfMillisecond$base})) {
            return $$timeRange.from.plusMilliseconds(jump$1447);
        }
    };nextByStep$1439.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point.",67))];},d:['ceylon.time','TimeRange','$m','nextByStep']};};
    previousByStep$1437$defs$jump=function(jump$1449){return (1);};
    function previousByStep$1437(jump$1449){
        if(jump$1449===undefined){jump$1449=previousByStep$1437$defs$jump(jump$1449);}
        
        var case$1450=$$timeRange.step;
        if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfHour$base})) {
            return $$timeRange.from.minusHours(jump$1449);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfMinute$base})) {
            return $$timeRange.from.minusMinutes(jump$1449);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfSecond$base})) {
            return $$timeRange.from.minusSeconds(jump$1449);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct793.UnitOfMillisecond$base})) {
            return $$timeRange.from.minusMilliseconds(jump$1449);
        }
    };previousByStep$1437.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:TimeRange,$an:function(){return[$$$cl1.doc($$$cl1.String("The iteration for each element should always start from same point.",67))];},d:['ceylon.time','TimeRange','$m','previousByStep']};};
    return $$timeRange;
}
TimeRange.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct793.Range$base,a:{StepBy:{t:$$$ct793.UnitOfTime$base},Element:{t:Time}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Implementation of [[Range]] and allows easy iteration between [[Time]] types.\n\nProvides all power of [[Iterable]] features and complements with:\n* Easy way to recover [[Period]]\n* Easy way to recober [[Duration]]\n* Recover the overlap between [[TimeRange]] types\n* Recover the gap between [[TimeRange]] types\n* Allows cutomized way to iterate as navigate between values by [[UnitOfTime]] cases\n",394)),$$$cl1.see([$$$cl1.$init$OpenInterface()($$$cl1.getModules$meta().find('ceylon.time','0.6').findPackage('ceylon.time.base'),$$$ct793.Range$base)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.InterfaceDeclaration$meta$declaration}})),$$$cl1.shared()];},d:['ceylon.time','TimeRange']};};
exports.TimeRange=TimeRange;
function $init$TimeRange(){
    if (TimeRange.$$===undefined){
        $$$cl1.initTypeProto(TimeRange,'ceylon.time::TimeRange',$$$cl1.Basic,$$$ct793.$init$Range$base());
    }
    return TimeRange;
}
exports.$init$TimeRange=$init$TimeRange;
$init$TimeRange();
exports.$pkg$ans$ceylon$time$timezone=function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];};
function ParserError$timezone(message, $$parserError){
    $init$ParserError$timezone();
    if ($$parserError===undefined)$$parserError=new ParserError$timezone.$$;
    var message=message;
    $$$cl1.defineAttr($$parserError,'message',function(){return message;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError','$at','message']};});
    $$parserError.$prop$getMessage={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError','$at','message']};}};
    $$parserError.$prop$getMessage.get=function(){return message};
    function equals(other$1451){
        var other$1452;
        if($$$cl1.isOfType((other$1452=other$1451),{t:ParserError$timezone})){
            return $$parserError.message.equals(other$1452.message);
        }
        return false;
    }
    $$parserError.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:ParserError$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','ParserError','$m','equals']};};
    return $$parserError;
}
ParserError$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the problem that occured while parsing. It can be recovered from _message_ field",91)),$$$cl1.shared()];},d:['ceylon.time.timezone','ParserError']};};
exports.ParserError$timezone=ParserError$timezone;
function $init$ParserError$timezone(){
    if (ParserError$timezone.$$===undefined){
        $$$cl1.initTypeProto(ParserError$timezone,'ceylon.time.timezone::ParserError',$$$cl1.Basic);
    }
    return ParserError$timezone;
}
exports.$init$ParserError$timezone=$init$ParserError$timezone;
$init$ParserError$timezone();
function parseTimeZone$timezone(offset$1453){
    var state$1454=Initial$timezone();
    var setState$1454=function(state$1455){return state$1454=state$1455;};
    $prop$getState$1454={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$an:function(){return[$$$cl1.variable()];},d:['ceylon.time.timezone','parseTimeZone','$at','state']};}};
    $prop$getState$1454.get=function(){return state$1454};
    $prop$getState$1454.set=setState$1454;
    if (setState$1454.$$metamodel$$===undefined)setState$1454.$$metamodel$$=$prop$getState$1454.$$metamodel$$;
    var it$1456 = offset$1453.iterator();
    var character$1457;while ((character$1457=it$1456.next())!==$$$cl1.getFinished()){
        state$1454=state$1454.next(Chunk$timezone(character$1457));
    }
    state$1454=state$1454.next(getEof$timezone());
    var final$1458;
    if($$$cl1.isOfType((final$1458=state$1454),{t:Final$timezone})){
        var result$1459=final$1458.evaluate();
        $prop$getResult$1459={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.timezone','parseTimeZone','$at','result']};}};
        $prop$getResult$1459.get=function(){return result$1459};
        if((result$1459.equals((0))&&offset$1453.contains($$$cl1.Character(45)))){
            return ParserError$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Pattern not allowed by ISO-8601: \'",34),offset$1453.string,$$$cl1.String("\'!",2)]).string);
        }
        return OffsetTimeZone$timezone(result$1459);
    }
    //assert at parseTimeZone.ceylon (34:4-34:37)
    var error$1460;
    if (!($$$cl1.isOfType((error$1460=state$1454),{t:Error$timezone}))) {throw $$$cl1.wrapexc($$$cl1.AssertionException("Assertion failed: \' is Error error = state \' at parseTimeZone.ceylon (34:11-34:36)"),'34:4-34:37','parseTimeZone.ceylon'); }
    return ParserError$timezone(error$1460.message);
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
    var character=character;
    $$$cl1.defineAttr($$chunk,'character',function(){return character;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Chunk','$at','character']};});
    $$chunk.$prop$getCharacter={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Character},$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Chunk','$at','character']};}};
    $$chunk.$prop$getCharacter.get=function(){return character};
    function equals(other$1461){
        var other$1462;
        if($$$cl1.isOfType((other$1462=other$1461),{t:$$$cl1.Character})){
            return $$chunk.character.equals(other$1462);
        }
        return false;
    }
    $$chunk.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:Chunk$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Chunk','$m','equals']};};
    return $$chunk;
}
Chunk$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:Input$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents each character",25))];},d:['ceylon.time.timezone','Chunk']};};
function $init$Chunk$timezone(){
    if (Chunk$timezone.$$===undefined){
        $$$cl1.initTypeProto(Chunk$timezone,'ceylon.time.timezone::Chunk',Input$timezone);
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
        $$$cl1.initTypeProto(EOF$timezone,'ceylon.time.timezone::EOF',Input$timezone);
    }
    return EOF$timezone;
}
exports.$init$EOF$timezone=$init$EOF$timezone;
$init$EOF$timezone();
function eof$1463$timezone(){
    var $$eof=new eof$1463$timezone.$$;
    EOF$timezone($$eof);
    return $$eof;
}
function $init$eof$1463$timezone(){
    if (eof$1463$timezone.$$===undefined){
        $$$cl1.initTypeProto(eof$1463$timezone,'ceylon.time.timezone::eof',EOF$timezone);
    }
    return eof$1463$timezone;
}
exports.$init$eof$1463$timezone=$init$eof$1463$timezone;
$init$eof$1463$timezone();
var eof$1464$timezone=eof$1463$timezone();
var getEof$timezone=function(){
    return eof$1464$timezone;
}
getEof$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:eof$1463$timezone},$an:function(){return[$$$cl1.doc($$$cl1.String("Singleton implementation to represent the end of the parser",59))];},d:['ceylon.time.timezone','eof']};};
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
    }
    return State$timezone;
}
exports.$init$State$timezone=$init$State$timezone;
$init$State$timezone();
function Initial$timezone($$initial){
    $init$Initial$timezone();
    if ($$initial===undefined)$$initial=new Initial$timezone.$$;
    State$timezone($$initial);
    function next(input$1465){
        
        var case$1466=input$1465;
        if ($$$cl1.isOfType(input$1465,{t:Chunk$timezone})) {
            if(case$1466.equals($$$cl1.Character(90))){
                return Zulu$timezone();
            }
            if(case$1466.equals($$$cl1.Character(43))){
                return Sign$timezone((+(1)));
            }
            if(case$1466.equals($$$cl1.Character(45))){
                return Sign$timezone((-(1)));
            }
            return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1466.character.string,$$$cl1.String("\' but expected: \'Z\', \'+\' or \'-\'",31)]).string);
        }else if ($$$cl1.isOfType(input$1465,{t:EOF$timezone})) {
            return Error$timezone($$$cl1.String("Unexpected end of input! Empty time zone.",41));
        }
    }
    $$initial.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Initial$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Initial','$m','next']};};
    return $$initial;
}
Initial$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the init of the parser",33))];},d:['ceylon.time.timezone','Initial']};};
function $init$Initial$timezone(){
    if (Initial$timezone.$$===undefined){
        $$$cl1.initTypeProto(Initial$timezone,'ceylon.time.timezone::Initial',State$timezone);
    }
    return Initial$timezone;
}
exports.$init$Initial$timezone=$init$Initial$timezone;
$init$Initial$timezone();
function Zulu$timezone($$zulu){
    $init$Zulu$timezone();
    if ($$zulu===undefined)$$zulu=new Zulu$timezone.$$;
    State$timezone($$zulu);
    function next(input$1467){
        
        var case$1468=input$1467;
        if ($$$cl1.isOfType(input$1467,{t:Chunk$timezone})) {
            return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1468.character.string,$$$cl1.String("\' but expected end of input after \'Z\'",37)]).string);
        }else if ($$$cl1.isOfType(input$1467,{t:EOF$timezone})) {
            return Final$timezone();
        }
    }
    $$zulu.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Zulu$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Zulu','$m','next']};};
    return $$zulu;
}
Zulu$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the UTC",18))];},d:['ceylon.time.timezone','Zulu']};};
function $init$Zulu$timezone(){
    if (Zulu$timezone.$$===undefined){
        $$$cl1.initTypeProto(Zulu$timezone,'ceylon.time.timezone::Zulu',State$timezone);
    }
    return Zulu$timezone;
}
exports.$init$Zulu$timezone=$init$Zulu$timezone;
$init$Zulu$timezone();
function Sign$timezone(sign$1469, $$sign){
    $init$Sign$timezone();
    if ($$sign===undefined)$$sign=new Sign$timezone.$$;
    $$sign.sign$1469_=sign$1469;
    State$timezone($$sign);
    $$$cl1.defineAttr($$sign,'sign$1469',function(){return this.sign$1469_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Sign$timezone,d:['ceylon.time.timezone','Sign','$at','sign']};});
    function next(input$1470){
        
        var case$1471=input$1470;
        if ($$$cl1.isOfType(input$1470,{t:Chunk$timezone})) {
            return (opt$1472=(case$1471.character.digit?Hours$timezone(sign$1469,characterToInteger$timezone(case$1471.character)):null),opt$1472!==null?opt$1472:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1471.character.string,$$$cl1.String("\' but expected a digit [0..9] after \'",37),(opt$1473=(sign$1469.compare((0)).equals($$$cl1.getLarger())?$$$cl1.String("+",1):null),opt$1473!==null?opt$1473:$$$cl1.String("-",1)).string,$$$cl1.String("\'",1)]).string));
            var opt$1472,opt$1473;
        }else if ($$$cl1.isOfType(input$1470,{t:EOF$timezone})) {
            return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected end of input! Expecting a digit [0..9] after \'",57),(opt$1474=(sign$1469.compare((0)).equals($$$cl1.getLarger())?$$$cl1.String("+",1):null),opt$1474!==null?opt$1474:$$$cl1.String("-",1)).string,$$$cl1.String("\'",1)]).string);
            var opt$1474;
        }
    }
    $$sign.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Sign$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Sign','$m','next']};};
    return $$sign;
}
Sign$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents +1 case the time is ahead of UTC, otherwise its -1",61))];},d:['ceylon.time.timezone','Sign']};};
function $init$Sign$timezone(){
    if (Sign$timezone.$$===undefined){
        $$$cl1.initTypeProto(Sign$timezone,'ceylon.time.timezone::Sign',State$timezone);
    }
    return Sign$timezone;
}
exports.$init$Sign$timezone=$init$Sign$timezone;
$init$Sign$timezone();
function Hours$timezone(sign$1475, hours$1476, digits$1477, $$hours){
    $init$Hours$timezone();
    if ($$hours===undefined)$$hours=new Hours$timezone.$$;
    $$hours.sign$1475_=sign$1475;
    if(digits$1477===undefined){digits$1477=(1);}
    State$timezone($$hours);
    $$$cl1.defineAttr($$hours,'sign$1475',function(){return this.sign$1475_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','sign']};});
    var digits$1477=digits$1477;
    $$$cl1.defineAttr($$hours,'digits$1477',function(){return digits$1477;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','digits']};});
    $$hours.$prop$getDigits$1477={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','digits']};}};
    $$hours.$prop$getDigits$1477.get=function(){return digits$1477};
    var hours$1476=hours$1476;
    $$$cl1.defineAttr($$hours,'hours$1476',function(){return hours$1476;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','hours']};});
    $$hours.$prop$getHours$1476={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Hours$timezone,d:['ceylon.time.timezone','Hours','$at','hours']};}};
    $$hours.$prop$getHours$1476.get=function(){return hours$1476};
    function next(input$1478){
        
        var case$1479=input$1478;
        if ($$$cl1.isOfType(input$1478,{t:Chunk$timezone})) {
            if(case$1479.character.digit){
                return (opt$1480=(digits$1477.equals((2))?Minutes$timezone(sign$1475,hours$1476,characterToInteger$timezone(case$1479.character)):null),opt$1480!==null?opt$1480:Hours$timezone(sign$1475,hours$1476.times((10)).plus(characterToInteger$timezone(case$1479.character)),(2)));
                var opt$1480;
            }else {
                if(case$1479.equals($$$cl1.Character(58))){
                    return Colon$timezone(sign$1475,hours$1476);
                }else {
                    return Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1479.character.string,$$$cl1.String("\' but expected a digit [0..9]",29)]).string);
                }
            }
        }else if ($$$cl1.isOfType(input$1478,{t:EOF$timezone})) {
            return (opt$1481=(digits$1477.equals((2))?Final$timezone(sign$1475,hours$1476):null),opt$1481!==null?opt$1481:Error$timezone($$$cl1.String("Unexpected end of input! Expected at two digits for hours but got one.",70)));
            var opt$1481;
        }
    }
    $$hours.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Hours$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Hours','$m','next']};};
    return $$hours;
}
Hours$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the hours, the accepted pattern is two digit hours",61))];},d:['ceylon.time.timezone','Hours']};};
function $init$Hours$timezone(){
    if (Hours$timezone.$$===undefined){
        $$$cl1.initTypeProto(Hours$timezone,'ceylon.time.timezone::Hours',State$timezone);
    }
    return Hours$timezone;
}
exports.$init$Hours$timezone=$init$Hours$timezone;
$init$Hours$timezone();
function Minutes$timezone(sign$1482, hours$1483, minutes$1484, digits$1485, $$minutes){
    $init$Minutes$timezone();
    if ($$minutes===undefined)$$minutes=new Minutes$timezone.$$;
    $$minutes.sign$1482_=sign$1482;
    $$minutes.hours$1483_=hours$1483;
    if(digits$1485===undefined){digits$1485=(1);}
    State$timezone($$minutes);
    $$$cl1.defineAttr($$minutes,'sign$1482',function(){return this.sign$1482_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','sign']};});
    $$$cl1.defineAttr($$minutes,'hours$1483',function(){return this.hours$1483_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','hours']};});
    var digits$1485=digits$1485;
    $$$cl1.defineAttr($$minutes,'digits$1485',function(){return digits$1485;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','digits']};});
    $$minutes.$prop$getDigits$1485={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','digits']};}};
    $$minutes.$prop$getDigits$1485.get=function(){return digits$1485};
    var minutes$1484=minutes$1484;
    $$$cl1.defineAttr($$minutes,'minutes$1484',function(){return minutes$1484;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','minutes']};});
    $$minutes.$prop$getMinutes$1484={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Minutes$timezone,d:['ceylon.time.timezone','Minutes','$at','minutes']};}};
    $$minutes.$prop$getMinutes$1484.get=function(){return minutes$1484};
    function next(input$1486){
        
        var case$1487=input$1486;
        if ($$$cl1.isOfType(input$1486,{t:Chunk$timezone})) {
            if(case$1487.character.digit){
                return (opt$1488=(digits$1485.equals((2))?Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1487.character.string,$$$cl1.String("\' but expected end of input",27)]).string):null),opt$1488!==null?opt$1488:Minutes$timezone(sign$1482,hours$1483,minutes$1484.times((10)).plus(characterToInteger$timezone(case$1487.character)),(2)));
                var opt$1488;
            }else {
                return (opt$1489=(digits$1485.equals((2))?Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1487.character.string,$$$cl1.String("\' but expected end of input",27)]).string):null),opt$1489!==null?opt$1489:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1487.character.string,$$$cl1.String("\' but expected a digit [0..9]",29)]).string));
                var opt$1489;
            }
        }else if ($$$cl1.isOfType(input$1486,{t:EOF$timezone})) {
            return (opt$1490=(digits$1485.equals((2))?Final$timezone(sign$1482,hours$1483,minutes$1484):null),opt$1490!==null?opt$1490:Error$timezone($$$cl1.String("Unexpected end of input! Expected two digits for minutes but got one.",69)));
            var opt$1490;
        }
    }
    $$minutes.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Minutes$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Minutes','$m','next']};};
    return $$minutes;
}
Minutes$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the minutes, the accepted pattern is two digit minutes",65))];},d:['ceylon.time.timezone','Minutes']};};
function $init$Minutes$timezone(){
    if (Minutes$timezone.$$===undefined){
        $$$cl1.initTypeProto(Minutes$timezone,'ceylon.time.timezone::Minutes',State$timezone);
    }
    return Minutes$timezone;
}
exports.$init$Minutes$timezone=$init$Minutes$timezone;
$init$Minutes$timezone();
function Colon$timezone(sign$1491, hours$1492, $$colon){
    $init$Colon$timezone();
    if ($$colon===undefined)$$colon=new Colon$timezone.$$;
    $$colon.sign$1491_=sign$1491;
    $$colon.hours$1492_=hours$1492;
    State$timezone($$colon);
    $$$cl1.defineAttr($$colon,'sign$1491',function(){return this.sign$1491_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Colon$timezone,d:['ceylon.time.timezone','Colon','$at','sign']};});
    $$$cl1.defineAttr($$colon,'hours$1492',function(){return this.hours$1492_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Colon$timezone,d:['ceylon.time.timezone','Colon','$at','hours']};});
    function next(input$1493){
        
        var case$1494=input$1493;
        if ($$$cl1.isOfType(input$1493,{t:Chunk$timezone})) {
            return (opt$1495=(case$1494.character.digit?Minutes$timezone(sign$1491,hours$1492,characterToInteger$timezone(case$1494.character)):null),opt$1495!==null?opt$1495:Error$timezone($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unexpected character! Got \'",27),case$1494.character.string,$$$cl1.String("\' but expected a digit [0..9] after \':\'",39)]).string));
            var opt$1495;
        }else if ($$$cl1.isOfType(input$1493,{t:EOF$timezone})) {
            return Error$timezone($$$cl1.String("Unexpected end of input! Expecting a digit [0..9] after \':\'",59));
        }
    }
    $$colon.next=next;
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'input',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Colon$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Colon','$m','next']};};
    return $$colon;
}
Colon$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the colon as some patterns accepts for example \'hh:mm\'",65))];},d:['ceylon.time.timezone','Colon']};};
function $init$Colon$timezone(){
    if (Colon$timezone.$$===undefined){
        $$$cl1.initTypeProto(Colon$timezone,'ceylon.time.timezone::Colon',State$timezone);
    }
    return Colon$timezone;
}
exports.$init$Colon$timezone=$init$Colon$timezone;
$init$Colon$timezone();
function Final$timezone(sign$1496, hours$1497, minutes$1498, $$final){
    $init$Final$timezone();
    if ($$final===undefined)$$final=new Final$timezone.$$;
    if(sign$1496===undefined){sign$1496=(1);}
    $$final.sign$1496_=sign$1496;
    if(hours$1497===undefined){hours$1497=(0);}
    $$final.hours$1497_=hours$1497;
    if(minutes$1498===undefined){minutes$1498=(0);}
    $$final.minutes$1498_=minutes$1498;
    State$timezone($$final);
    $$$cl1.defineAttr($$final,'sign$1496',function(){return this.sign$1496_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','sign']};});
    $$$cl1.defineAttr($$final,'hours$1497',function(){return this.hours$1497_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','hours']};});
    $$$cl1.defineAttr($$final,'minutes$1498',function(){return this.minutes$1498_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:Final$timezone,d:['ceylon.time.timezone','Final','$at','minutes']};});
    var next=function (character$1499){
        return $$final;
    };
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'character',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Final$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Final','$m','next']};};
    $$final.next=next;
    function evaluate(){
        return sign$1496.times(hours$1497.times($$$ct793.getMilliseconds$base().perHour).plus(minutes$1498.times($$$ct793.getMilliseconds$base().perMinute)));
    }
    $$final.evaluate=evaluate;
    evaluate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$cont:Final$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Final','$m','evaluate']};};
    return $$final;
}
Final$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Rrepresents the parser successfully finished",44))];},d:['ceylon.time.timezone','Final']};};
function $init$Final$timezone(){
    if (Final$timezone.$$===undefined){
        $$$cl1.initTypeProto(Final$timezone,'ceylon.time.timezone::Final',State$timezone);
    }
    return Final$timezone;
}
exports.$init$Final$timezone=$init$Final$timezone;
$init$Final$timezone();
function Error$timezone(message, $$error){
    $init$Error$timezone();
    if ($$error===undefined)$$error=new Error$timezone.$$;
    State$timezone($$error);
    var message=message;
    $$$cl1.defineAttr($$error,'message',function(){return message;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$cont:Error$timezone,$an:function(){return[$$$cl1.shared()];},d:['ceylon.time.timezone','Error','$at','message']};});
    $$error.$prop$getMessage.get=function(){return message};
    var next=function (character$1500){
        return $$error;
    };
    next.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:State$timezone},$ps:[{$nm:'character',$mt:'prm',$t:{t:Input$timezone},$an:function(){return[];}}],$cont:Error$timezone,$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','Error','$m','next']};};
    $$error.next=next;
    return $$error;
}
Error$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:State$timezone},satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("Represents the parser unsuccessfully finished and hold the error message",72))];},d:['ceylon.time.timezone','Error']};};
function $init$Error$timezone(){
    if (Error$timezone.$$===undefined){
        $$$cl1.initTypeProto(Error$timezone,'ceylon.time.timezone::Error',State$timezone);
    }
    return Error$timezone;
}
exports.$init$Error$timezone=$init$Error$timezone;
$init$Error$timezone();
function characterToInteger$timezone(digit$1501){
    return digit$1501.integer.minus($$$cl1.Character(48).integer);
};characterToInteger$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'digit',$mt:'prm',$t:{t:$$$cl1.Character},$an:function(){return[];}}],d:['ceylon.time.timezone','characterToInteger']};};
function TimeZone$timezone($$timeZone){
}
TimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.doc($$$cl1.String("The interface representing a timezone.",38)),$$$cl1.shared()];},d:['ceylon.time.timezone','TimeZone']};};
exports.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
    if (TimeZone$timezone.$$===undefined){
        $$$cl1.initTypeProto(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
    }
    return TimeZone$timezone;
}
exports.$init$TimeZone$timezone=$init$TimeZone$timezone;
$init$TimeZone$timezone();
function OffsetTimeZone$timezone(offsetMilliseconds$1502, $$offsetTimeZone){
    $init$OffsetTimeZone$timezone();
    if ($$offsetTimeZone===undefined)$$offsetTimeZone=new OffsetTimeZone$timezone.$$;
    TimeZone$timezone($$offsetTimeZone);
    var offsetMilliseconds$1502=offsetMilliseconds$1502;
    $$$cl1.defineAttr($$offsetTimeZone,'offsetMilliseconds$1502',function(){return offsetMilliseconds$1502;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("The value that represents this constant offset.",47))];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};});
    $$offsetTimeZone.$prop$getOffsetMilliseconds$1502={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("The value that represents this constant offset.",47))];},d:['ceylon.time.timezone','OffsetTimeZone','$at','offsetMilliseconds']};}};
    $$offsetTimeZone.$prop$getOffsetMilliseconds$1502.get=function(){return offsetMilliseconds$1502};
    var offset=function (instant$1503){
        return offsetMilliseconds$1502;
    };
    offset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'instant',$mt:'prm',$t:{t:$$$ct793.Instant},$an:function(){return[];}}],$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Always returns a constant offset.",33)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','OffsetTimeZone','$m','offset']};};
    $$offsetTimeZone.offset=offset;
    function equals(other$1504){
        var other$1505;
        if($$$cl1.isOfType((other$1505=other$1504),{t:OffsetTimeZone$timezone})){
            return $$offsetTimeZone.offsetMilliseconds$1502.equals(other$1505.offsetMilliseconds$1502);
        }
        return false;
    }
    $$offsetTimeZone.equals=equals;
    equals.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object},$an:function(){return[];}}],$cont:OffsetTimeZone$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Returns _true_ if given value is same type and offset milliseconds.",67)),$$$cl1.shared(),$$$cl1.actual()];},d:['ceylon.time.timezone','OffsetTimeZone','$m','equals']};};
    return $$offsetTimeZone;
}
OffsetTimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:TimeZone$timezone}],$an:function(){return[$$$cl1.doc($$$cl1.String("A simple time zone with a constant offset from UTC.",51)),$$$cl1.shared()];},d:['ceylon.time.timezone','OffsetTimeZone']};};
exports.OffsetTimeZone$timezone=OffsetTimeZone$timezone;
function $init$OffsetTimeZone$timezone(){
    if (OffsetTimeZone$timezone.$$===undefined){
        $$$cl1.initTypeProto(OffsetTimeZone$timezone,'ceylon.time.timezone::OffsetTimeZone',$$$cl1.Basic,$init$TimeZone$timezone());
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
function timeZone$1506$timezone(){
    var $$timeZone=new timeZone$1506$timezone.$$;
    function system$1507(){
        var $$system$timeZone=new system$1507.$$;
        $$system$timeZone.$$outer=this;
        OffsetTimeZone$timezone($$$cl1.getProcess().timezoneOffset,$$system$timeZone);
        return $$system$timeZone;
    }
    function $init$system$1507(){
        if (system$1507.$$===undefined){
            $$$cl1.initTypeProto(system$1507,'ceylon.time.timezone::timeZone.system',OffsetTimeZone$timezone);
            timeZone$1506$timezone.system$1507=system$1507;
        }
        return system$1507;
    }
    $$timeZone.$init$system$1507=$init$system$1507;
    $init$system$1507();
    var system=system$1507();
    $$$cl1.defineAttr($$timeZone,'system',function(){return system;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1506$timezone.system$1507},$cont:timeZone$1506$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents machine offset based on current VM.",46)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$at','system']};});
    function utc$1508(){
        var $$utc$timeZone=new utc$1508.$$;
        $$utc$timeZone.$$outer=this;
        OffsetTimeZone$timezone((0),$$utc$timeZone);
        return $$utc$timeZone;
    }
    function $init$utc$1508(){
        if (utc$1508.$$===undefined){
            $$$cl1.initTypeProto(utc$1508,'ceylon.time.timezone::timeZone.utc',OffsetTimeZone$timezone);
            timeZone$1506$timezone.utc$1508=utc$1508;
        }
        return utc$1508;
    }
    $$timeZone.$init$utc$1508=$init$utc$1508;
    $init$utc$1508();
    var utc=utc$1508();
    $$$cl1.defineAttr($$timeZone,'utc',function(){return utc;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1506$timezone.utc$1508},$cont:timeZone$1506$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents Coordinated Universal Time.",38)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$at','utc']};});
    function parse(zone$1509){
        return parseTimeZone$timezone(zone$1509);
    }
    $$timeZone.parse=parse;
    parse.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeZone$timezone},{t:ParserError$timezone}]},$ps:[{$nm:'zone',$mt:'prm',$t:{t:$$$cl1.String},$an:function(){return[];}}],$cont:timeZone$1506$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Timezone offset parser based on ISO-8601, currently it accepts the following time zone offset patterns:\n&plusmn;`[hh]:[mm]`, &plusmn;`[hh][mm]`, and &plusmn;`[hh]`.\n\nIn addition, the special code `Z` is recognized as a shorthand for `+00:00`.",242)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$m','parse']};};
    $$timeZone.offset$defs$minutes=function(hours$1510,minutes$1511,milliseconds$1512){return (0);};
    $$timeZone.offset$defs$milliseconds=function(hours$1510,minutes$1511,milliseconds$1512){return (0);};
    function offset(hours$1510,minutes$1511,milliseconds$1512){
        if(minutes$1511===undefined){minutes$1511=$$timeZone.offset$defs$minutes(hours$1510,minutes$1511,milliseconds$1512);}
        if(milliseconds$1512===undefined){milliseconds$1512=$$timeZone.offset$defs$milliseconds(hours$1510,minutes$1511,milliseconds$1512);}
        return OffsetTimeZone$timezone(hours$1510.times($$$ct793.getMilliseconds$base().perHour).plus(minutes$1511.times($$$ct793.getMilliseconds$base().perMinute)).plus(milliseconds$1512));
    }
    $$timeZone.offset=offset;
    offset.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$cont:timeZone$1506$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Represents fixed timeZone created based on given values.",56)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone','$m','offset']};};
    return $$timeZone;
}
function $init$timeZone$1506$timezone(){
    if (timeZone$1506$timezone.$$===undefined){
        $$$cl1.initTypeProto(timeZone$1506$timezone,'ceylon.time.timezone::timeZone',$$$cl1.Basic);
    }
    return timeZone$1506$timezone;
}
exports.$init$timeZone$1506$timezone=$init$timeZone$1506$timezone;
$init$timeZone$1506$timezone();
var timeZone$1513$timezone=timeZone$1506$timezone();
var getTimeZone$timezone=function(){
    return timeZone$1513$timezone;
}
exports.getTimeZone$timezone=getTimeZone$timezone;
getTimeZone$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:timeZone$1506$timezone},$an:function(){return[$$$cl1.doc($$$cl1.String("This constant represents common operations for time zone.\n\nAt same time it hold objects references for most commons used time zones around world.\n\nExamples:\n* UTC\n* System (current machine offset)",196)),$$$cl1.shared()];},d:['ceylon.time.timezone','timeZone']};};
$prop$getTimeZone$timezone={get:getTimeZone$timezone,$$metamodel$$:getTimeZone$timezone.$$metamodel$$};
exports.$prop$getTimeZone$timezone=$prop$getTimeZone$timezone;
function ZoneDateTime$timezone($$zoneDateTime){
    $$$ct793.ReadableDateTime$base($$zoneDateTime);
    $$$ct793.DateTimeBehavior$base({TimeType:{t:$$$ct793.Time},DateType:{t:$$$ct793.Date},Element:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'TimeType',{t:$$$ct793.Time});
    $$$cl1.add_type_arg($$zoneDateTime,'DateType',{t:$$$ct793.Date});
    $$$cl1.add_type_arg($$zoneDateTime,'Element',{t:ZoneDateTime$timezone});
    $$$cl1.Comparable({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$$cl1.Ordinal({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$$cl1.Enumerable({Other:{t:ZoneDateTime$timezone}},$$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$zoneDateTime.$prop$getTimeZone={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:TimeZone$timezone},$cont:ZoneDateTime$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Time zone information of this date and time value.",50)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.timezone','ZoneDateTime','$at','timeZone']};}};
    $$zoneDateTime.$prop$getInstant={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.Instant},$cont:ZoneDateTime$timezone,$an:function(){return[$$$cl1.doc($$$cl1.String("Instant used as base.",21)),$$$cl1.shared(),$$$cl1.formal()];},d:['ceylon.time.timezone','ZoneDateTime','$at','instant']};}};
}
ZoneDateTime$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:$$$ct793.ReadableDateTime$base},{t:$$$ct793.DateTimeBehavior$base,a:{TimeType:{t:$$$ct793.Time},DateType:{t:$$$ct793.Date},Element:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Comparable,a:{Other:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Ordinal,a:{Other:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Enumerable,a:{Other:{t:ZoneDateTime$timezone}}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Instant of time in a specific time zone.",40)),$$$cl1.shared()];},d:['ceylon.time.timezone','ZoneDateTime']};};
exports.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
    if (ZoneDateTime$timezone.$$===undefined){
        $$$cl1.initTypeProto(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$$$ct793.$init$ReadableDateTime$base(),$$$ct793.$init$DateTimeBehavior$base(),$$$cl1.Comparable,$$$cl1.Ordinal,$$$cl1.Enumerable);
    }
    return ZoneDateTime$timezone;
}
exports.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;
$init$ZoneDateTime$timezone();
function zoneDateTime$timezone(timeZone$1514,year$1515,month$1516,date$1517,hour$1518,minutes$1519,seconds$1520,millis$1521){
    if(hour$1518===undefined){hour$1518=(0);}
    if(minutes$1519===undefined){minutes$1519=(0);}
    if(seconds$1520===undefined){seconds$1520=(0);}
    if(millis$1521===undefined){millis$1521=(0);}
    var utcDateTime$1522=$$$ct793.dateTime(year$1515,month$1516,date$1517,hour$1518,minutes$1519,seconds$1520,millis$1521);
    $prop$getUtcDateTime$1522={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$ct793.DateTime},d:['ceylon.time.timezone','zoneDateTime','$at','utcDateTime']};}};
    $prop$getUtcDateTime$1522.get=function(){return utcDateTime$1522};
    var utcMilliseconds$1523=$$$ct793.getUnixTime$chronology().timeFromFixed(utcDateTime$1522.dayOfEra).plus(utcDateTime$1522.millisecondsOfDay);
    $prop$getUtcMilliseconds$1523={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.timezone','zoneDateTime','$at','utcMilliseconds']};}};
    $prop$getUtcMilliseconds$1523.get=function(){return utcMilliseconds$1523};
    var fixedZoneMilliseconds$1524=utcMilliseconds$1523.minus(timeZone$1514.offset($$$ct793.Instant(utcMilliseconds$1523)));
    $prop$getFixedZoneMilliseconds$1524={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},d:['ceylon.time.timezone','zoneDateTime','$at','fixedZoneMilliseconds']};}};
    $prop$getFixedZoneMilliseconds$1524.get=function(){return fixedZoneMilliseconds$1524};
    return $$$ct793.GregorianZonedDateTime$internal($$$ct793.Instant(fixedZoneMilliseconds$1524),timeZone$1514);
}
exports.zoneDateTime$timezone=zoneDateTime$timezone;
zoneDateTime$timezone.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ZoneDateTime$timezone},$ps:[{$nm:'timeZone',$mt:'prm',$t:{t:TimeZone$timezone},$an:function(){return[];}},{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct793.Month$base}]},$an:function(){return[];}},{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("Returns a [[ZoneDateTime]] based on the specified [[TimeZone]], year, month, day of month, hour, minute, second and millisecond values.",135)),$$$cl1.shared()];},d:['ceylon.time.timezone','zoneDateTime']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
