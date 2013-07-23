(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6"],"$mod-name":"ceylon.time","ceylon.time.internal.math":{"floorDiv":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns floored division of the two integers"]},"$nm":"floorDiv"},"$pkg-shared":"1","floor":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$pt":"v","$nm":"x"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the largest integer less than or equal to _x_"]},"$nm":"floor"},"round":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Float"},"$mt":"prm","$pt":"v","$nm":"f"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns nearest integer to x"]},"$nm":"round"},"adjustedMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an _adjusted remainder_ of the two integers.\n\n   value moduli = [for (x in 4..-4) amod(x, 4)];\n   assert( moduli == [4, 3, 2, 1, 4, 3, 2, 1, 4] );\n"]},"$nm":"adjustedMod"},"floorMod":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"x"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"y"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the floor remainder (modulus) of the two integers.\n\n    value moduli = [for (x in 4..-4) mod(x, 4)] \n    assert( moduli == [0, 3, 2, 1, 0, 3, 2, 1, 0] );\n"]},"$nm":"floorMod"}},"$mod-version":"0.6","ceylon.time.timezone":{"$pkg-shared":"1","ZoneDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$pk":"ceylon.time.base","$nm":"ReadableTime"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$mt":"ifc","$an":{"shared":[],"doc":["Instant of time in a specific time zone."]},"$at":{"timeZone":{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Time zone information of this date and time value."]},"$nm":"timeZone"}},"$nm":"ZoneDateTime"},"TimeZone":{"$mt":"ifc","$an":{"shared":[],"doc":["The interface representing a timezone."]},"$nm":"TimeZone"}},"ceylon.time.internal":{"$pkg-shared":"1","AbstractDate":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"dayOfEra"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Date"}],"$mt":"cls","$an":{"abstract":[],"shared":[]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"compare"}},"$at":{"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"dayOfEra"}},"$nm":"AbstractDate"},"overlap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns the inclusive overlap between two ordinal ranges.\n\nThe range of the overlap will be returned in the natural order of the values regardless of their original order in input tuples.\n\nExamples:\n\n    assert(overlap([1, 3], [2, 4]) == [2, 3]);\n    assert(overlap([4, 2], [1, 3]) == [2, 3]);\n    assert(is Empty o = overlap([1, 2], [3, 4]));\n"]},"$nm":"overlap"},"TimeOfDay":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"millisecondsOfDay"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Time"}],"$mt":"cls","$an":{"shared":[],"doc":["Basic implementation of [[Time]] interface, representing an abstract \n_time of day_ such as _10am_ or _3.20pm_."]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[TimeRange]] between this and given Time"],"actual":[]},"$nm":"to"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified time period to this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"plus"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of seconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusSeconds"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified time period from this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\nIf this time is after the given time then return zero period"],"actual":[]},"$nm":"periodTo"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withMinutes"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare two instances of _time of day_"],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of minutes from this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"minusMinutes"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of hours to this time of day \nand returns the result as new time of day."],"actual":[]},"$nm":"plusHours"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given time.\nIf this time is before the given time then return zero period"],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of hours from this time of day \nand returns the resul as new time of day."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of seconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusSeconds"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of milliseconds to this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"plusMilliseconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified number of milliseconds from this time of day\nand returns the result as new time of day."],"actual":[]},"$nm":"minusMilliseconds"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withHours"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified number of minutes to this time of day \nand returns the result as new  time of day."],"actual":[]},"$nm":"plusMinutes"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["Previous second"],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds since last midnight"],"actual":[]},"$nm":"millisecondsOfDay"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"gttr","$an":{"shared":[],"doc":["Next second"],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last full hour."],"actual":[]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last minute."],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of full hours elapsed since last midnight."],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO 8601 formatted String representation of this _time of day_."],"actual":[]},"$nm":"string"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds since last midnight"],"actual":[]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds since last full second"],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes since last midnight"],"actual":[]},"$nm":"minutesOfDay"}},"$nm":"TimeOfDay"},"GregorianDate":{"super":{"$pk":"ceylon.time.internal","$nm":"AbstractDate"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"dayOfEra"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateRange]] between this and given Date"],"actual":[]},"$nm":"to"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$pt":"v","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds specified date period to this date and returns the new date."],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$pt":"v","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts specified date period from this date and returns the new date."],"actual":[]},"$nm":"minus"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of days to this date and returns the resulting date."],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\nIf this date is after the given date then return negative period"],"actual":[]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new [[DateTime]] value."],"actual":[]},"$nm":"at"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\nThe mix between positive and negative fields does not guarantee any expected behavior"]},"$nm":"addPeriod"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of years from this date returning the resulting the new gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).minusYears(1)` will return\n`2011-02-28`, since _February 2011_ has only 28 days.\n"],"actual":[]},"$nm":"minusYears"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the month set to the specified value.\n\nResulting date will have to be valid Gregorian date.\n"],"actual":[]},"$nm":"withMonth"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of days from this date and returns the resulting date."],"actual":[]},"$nm":"minusDays"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the period between this and the given date.\nIf this date is before the given date then return negative period"],"actual":[]},"$nm":"periodFrom"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of months from this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 3, 30).minusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts number of weeks from this date and returns the resulting date."],"actual":[]},"$nm":"minusWeeks"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this date and returns the resulting date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2013, 1, 31).plusMonths(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of weeks to this date and returns the resulting date."],"actual":[]},"$nm":"plusWeeks"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of years to this date returning the resulting gregorian date.\n\n**Note:** Day of month value of the resulting date will be truncated to the \nvalid range of the target date if necessary.\n\nThis means for example, that `date(2012, 2, 29).plusYears(1)` will return\n`2013-02-28`, since _February 2013_ has only 28 days.\n"],"actual":[]},"$nm":"plusYears"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the specified year value.\n\nResulting date will have to be valid Gregorian date.\n"],"actual":[]},"$nm":"withYear"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns new date with the _day of month_ vaue set to the specified value.\n\nResulting date will have to be valid Gregorian date.\n"],"actual":[]},"$nm":"withDay"}},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately preceeding this date."],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns gregorian date immediately succeeding this date."],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns ISO 8601 formatted String representation of this date."],"actual":[]},"$nm":"string"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns month of this gregorian date"],"actual":[]},"$nm":"month"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns week of year according to ISO 8601 week number calculation rules."],"actual":[]},"$m":{"normalizeLastWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeLastWeek"},"normalizeFirstWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weekNumber"}]],"$mt":"mthd","$nm":"normalizeFirstWeek"}},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns year of this gregorian date."],"actual":[]},"$nm":"year"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns `true`, if this is a leap year according to gregorian calendar leap year rules."],"actual":[]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of month_ value of this gregorian date"],"actual":[]},"$nm":"day"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns current day of the week."],"actual":[]},"$nm":"dayOfWeek"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns _day of year_ value of this gregorian date."],"actual":[]},"$nm":"dayOfYear"}},"$nm":"GregorianDate"},"intersect":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":"Value","$mt":"prm","$pt":"v","$nm":"start"},{"$t":"Value","$mt":"prm","$pt":"v","$nm":"end"},{"$t":"Value","$mt":"prm","$pt":"v","$nm":"otherStart"},{"$t":"Value","$mt":"prm","$pt":"v","$nm":"otherEnd"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns if two ranges has intersection"]},"$nm":"intersect"},"gregorianDate":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian calendar date according to the specified year, month and date values"]},"$nm":"gregorianDate"},"leftPad":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"number"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$def":"1","$nm":"padding"}]],"$mt":"mthd","$an":{"shared":[],"doc":["return padded value of the number as a string"]},"$nm":"leftPad"},"julianDate":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"julianDate"},"gap":{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"first"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$mt":"tpm","$nm":"Value"},{"$mt":"tpm","$nm":"Value"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"second"}]],"$mt":"mthd","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Value"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Value"}],"$an":{"shared":[],"doc":["Returns a tuple representing an exclusive gap between two disjoint ranges of ordinal values.\n\nValues in the tuple are returned always in their natural order regardless of their original ordering in the input tuples. \nIf input ranges are overlapping, this function will return an empty value.\n\nExamples:\n\n    assert(gap([1, 2], [5, 6]) == [3, 4]);\n    assert(gap([6, 5], [1, 2]) == [3, 4]);\n    assert(is Empty g = gap([1, 3], [2, 4]));\n"]},"$nm":"gap"},"GregorianDateTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"date"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"time"}],"satisfies":[{"$pk":"ceylon.time","$nm":"DateTime"}],"$mt":"cls","$an":{"shared":[],"doc":["Default implementation of a gregorian calendar"]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the [[DateTimeRange]] between this and given DateTime"],"actual":[]},"$nm":"to"},"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusDays"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"periodTo"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withMinutes"},"addPeriod":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"doc":["This method add the specified fields doing first the subtraction and last the additions.\nThe mix between positive and negative fields does not guarantee any expected behavior"]},"$nm":"addPeriod"},"fromTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"millis"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"signal"}]],"$mt":"mthd","$nm":"fromTime"},"withMonth":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withMonth"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"periodFrom"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withSeconds"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"timeZone"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"instant"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusMinutes"},"withDay":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withDay"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$pt":"v","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$pt":"v","$nm":"amount"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minus"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusDays"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"minusWeeks"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusWeeks"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withHours"},"withYear":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"withYear"}},"$at":{"successor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"minutes"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"secondsOfDay"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"leapYear"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"date"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"dayOfYear"},"predecessor":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"millisecondsOfDay"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"time"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"seconds"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"string"},"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"dayOfEra"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"year"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"weekOfYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"day"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"minutesOfDay"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"dayOfWeek"}},"$nm":"GregorianDateTime"}},"ceylon.time.base":{"monday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Monday_ is the day of the week that follows Sunday and preceeds Tuesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"monday"},"ReadableTime":{"$mt":"ifc","$an":{"shared":[],"doc":["Common interface capable of representing _time of day_."],"by":["Diego Coronel","Roland Tepp"]},"$at":{"millisecondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since the beginning of the day"]},"$nm":"millisecondsOfDay"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since last full hour"]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since last minute"]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Hour of day"]},"$nm":"hours"},"secondsOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of seconds since the beginning of the day"]},"$nm":"secondsOfDay"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds since last second"]},"$nm":"milliseconds"},"minutesOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of minutes since the beginning of the day"]},"$nm":"minutesOfDay"}},"$nm":"ReadableTime"},"Month":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"january"},{"$pk":"ceylon.time.base","$nm":"february"},{"$pk":"ceylon.time.base","$nm":"march"},{"$pk":"ceylon.time.base","$nm":"april"},{"$pk":"ceylon.time.base","$nm":"may"},{"$pk":"ceylon.time.base","$nm":"june"},{"$pk":"ceylon.time.base","$nm":"july"},{"$pk":"ceylon.time.base","$nm":"august"},{"$pk":"ceylon.time.base","$nm":"september"},{"$pk":"ceylon.time.base","$nm":"october"},{"$pk":"ceylon.time.base","$nm":"november"},{"$pk":"ceylon.time.base","$nm":"december"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A month in a Gregorian or Julian calendar system."]},"$m":{"fisrtDayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns the _day of year_ value for first of this month"]},"$nm":"fisrtDayOfYear"},"minusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months before this month."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year that comes specified number of months after this month."]},"$nm":"plusMonths"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares ordinal numbers of two instances of `Month`"],"actual":[]},"$nm":"compare"},"add":{"$t":{"$pk":"ceylon.time.base","$nm":"Overflow"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"numberOfMonths"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds number of months to this month and returns the result of \nas new month value and number of times the operation overflowed."]},"$nm":"add"},"numberOfDays":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns number of days in this month"]},"$nm":"numberOfDays"}},"$c":{"Overflow":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"years"}],"$mt":"cls","$an":{"shared":[],"doc":["A result of adding or subtracting a month to another mont"]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"doc":["New month value"]},"$nm":"month"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of years overflowed by calculation"]},"$nm":"years"}},"$nm":"Overflow"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Ordinal number of the month of year.\nWhere:\n   january  = 1\n   february = 2\n   ...\n   december = 12"]},"$nm":"integer"}},"$nm":"Month"},"DayOfWeek":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.base","$nm":"monday"},{"$pk":"ceylon.time.base","$nm":"tuesday"},{"$pk":"ceylon.time.base","$nm":"wednesday"},{"$pk":"ceylon.time.base","$nm":"thursday"},{"$pk":"ceylon.time.base","$nm":"friday"},{"$pk":"ceylon.time.base","$nm":"saturday"},{"$pk":"ceylon.time.base","$nm":"sunday"}],"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"integer"}],"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["A day of week, such as 'tuesday'."]},"$m":{"plusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes specified number of days after this DayOfWeek"]},"$nm":"plusDays"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compare days of week"],"actual":[]},"$nm":"compare"},"minusDays":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"number"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a day of week that comes number of days before this DayOfWeek"]},"$nm":"minusDays"}},"$at":{"integer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Numeric value of the DayOfWeek"]},"$nm":"integer"}},"$nm":"DayOfWeek"},"parseWeekday":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Parses a string into a DayOfWeek"]},"$nm":"parseWeekday"},"$pkg-shared":"1","UnitOfHour":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfHour"},"march":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["March. The third month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"march"},"ReadableInstant":{"$mt":"ifc","$an":{"shared":[],"doc":["An abstraction for data that can represent an instant of time."],"by":["Diego Coronel","Roland Tepp"]},"$at":{"millisecondsOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Internal value of an instant as a number of milliseconds \nsince beginning of an _era_ (january 1st 1974 UTC)"]},"$nm":"millisecondsOfEra"}},"$nm":"ReadableInstant"},"january":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["January. The first month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"january"},"saturday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Saturday_ is the day of the week that follows Friday and preceeds Sunday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"saturday"},"july":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["July. The seventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"july"},"UnitOfMonth":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMonth"},"friday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Friday_ is the day of the week that follows Thursday and preceeds Saturday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"friday"},"milliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _millisecond_ time unit"]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Milliseconds per minute (60000)"]},"$nm":"perMinute"},"perSecond":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds per second (1000)"]},"$nm":"perSecond"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per day"]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of milliseconds per hour"]},"$nm":"perHour"}},"$nm":"milliseconds"},"ReadableDuration":{"$mt":"ifc","$an":{"shared":[],"doc":["An abstraction of data representing a specific duration of time.\n\nA duration is a fixed delta of time between two instants \nmeasured in number of milliseconds."],"by":["Diego Coronel","Roland Tepp"]},"$at":{"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of milliseconds."]},"$nm":"milliseconds"}},"$nm":"ReadableDuration"},"november":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["November. The eleventh month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"november"},"DateBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for date types"]},"$m":{"minusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"minusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks subtracted."]},"$nm":"minusWeeks"},"plusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"plusMonths":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusWeeks":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"weeks"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of weeks added."]},"$nm":"plusWeeks"},"minusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusYears":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withMonth":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified month of year."]},"$nm":"withMonth"},"withYear":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified year."]},"$nm":"withYear"},"minusDays":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"withDay":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"dayOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDay"}},"$nm":"DateBehavior","$st":"Element"},"hours":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _hour_ time unit"]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of hours per day"]},"$nm":"perDay"}},"$nm":"hours"},"thursday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Thursday_ is the day of the week that follows Wednesday and preceeds Friday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"thursday"},"monthOf":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$pt":"v","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns month of year specified by the input argument.\n\nIf input is an Integer, this method returns a month according to the integer \nvalue of the [[MonthOfYear]] (i.e. 1=[[january]], 2=[[february]], ... 12=[[december]])\nAny invalid values will throw an exception.\n\nIf the imput value is a [[MonthOfYear]], the input value is returned as is."]},"$nm":"monthOf"},"PeriodBehavior":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"}],"$nm":"Self"}],"$an":{"shared":[],"doc":["Common behavior of objects representing a period."]},"$m":{"normalized":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Self"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date-time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and nanoseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\n\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."]},"$nm":"normalized"},"withMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of nanos."]},"$nm":"withMilliseconds"},"withYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of years."]},"$nm":"withYears"},"minusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"plusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days added."]},"$nm":"plusDays"},"withDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"daysOfMonth"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of days."]},"$nm":"withDays"},"withMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"minusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years subtracted."]},"$nm":"minusYears"},"plusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"},"minusDays":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of days subtracted."]},"$nm":"minusDays"},"minusHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"month"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of months."]},"$nm":"withMonths"},"minusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months subtracted."]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of months added."]},"$nm":"plusMonths"},"plusSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of nonoseconds subtracted."]},"$nm":"minusMilliseconds"},"plusMilliseconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of nonoseconds added."]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of years added."]},"$nm":"plusYears"},"withHours":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Self"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"}},"$nm":"PeriodBehavior","$st":"Self"},"UnitOfYear":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfYear"},"ReadableTimePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of time (_hours_, _minutes_, _seconds_ and _milliseconds_)."]},"$at":{"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of minutes"]},"$nm":"minutes"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of seconds"]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of hours"]},"$nm":"hours"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of milliseconds"]},"$nm":"milliseconds"}},"$nm":"ReadableTimePeriod"},"DateTimeBehavior":{"of":[{"$nm":"Element"}],"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"}],"$nm":"Element"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"}],"variance":"out","$nm":"DateType"},{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"variance":"out","$nm":"TimeType"}],"$an":{"shared":[],"doc":["Common behavior of the [[DateTime]] types"]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns an instant from this [[DateTime]]"]},"$nm":"instant"}},"$at":{"time":{"$t":{"$nm":"TimeType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Time portion of this [[DateTime]] value."]},"$nm":"time"},"date":{"$t":{"$nm":"DateType"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns Date portion of this [[DateTime]] value."]},"$nm":"date"}},"$nm":"DateTimeBehavior","$st":"Element"},"december":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["December. The twelveth (last) month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"december"},"february":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["February. The second month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"february"},"sunday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Sunday_ is the day of the week that follows Saturday and preceeds Monday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"sunday"},"ReadablePeriod":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"}],"$mt":"ifc","$an":{"shared":[],"doc":["A Period of time represented as number of _years_, _months_, _days_, \n_hours_, _minutes_, _seconds_ and\/or _milliseconds_."]},"$at":{"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_years_, _months_ and _days_."]},"$nm":"dateOnly"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns a truncated view of this period that only contains number of \n_hours_, _minutes_, _seconds_ and _milliseconds_."]},"$nm":"timeOnly"}},"$nm":"ReadablePeriod"},"firstDayOfMonth":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"doc":["Table of _day of year_ values for the first day of each month"]},"$nm":"firstDayOfMonth"},"years":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _year_ unit"]},"$at":{"minimum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The minimum supported year for instances of `Date`, -283_457."]},"$nm":"minimum"},"maximum":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The maximum supported year for instances of `Date`, 999,999,999."]},"$nm":"maximum"}},"$nm":"years"},"ReadableDateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$mt":"ifc","$an":{"shared":[],"doc":["Common interface that can represent particulat time of day on a specific date."]},"$nm":"ReadableDateTime"},"UnitOfTime":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfHour"},{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"},{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"},{"$pk":"ceylon.time.base","$nm":"UnitOfMillisecond"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Time"]},"$nm":"UnitOfTime"},"june":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["June. The sixth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"june"},"UnitOfDate":{"of":[{"$pk":"ceylon.time.base","$nm":"UnitOfYear"},{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"},{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"ifc","$an":{"shared":[],"doc":["Represents units of Date"]},"$nm":"UnitOfDate"},"weekdays":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["List of all available weekdays"]},"$nm":"weekdays"},"ReadableDate":{"$mt":"ifc","$an":{"shared":[],"doc":["A common interface of all date like objects.\n\nThis interface is common to all data types that\neither partially or fully represent information \nthat can be interpreted as _date_."],"by":["Diego Coronel","Roland Tepp"]},"$at":{"month":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Month of the year value of the date"]},"$nm":"month"},"dayOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of calendar days since ERA."]},"$nm":"dayOfEra"},"weekOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the week of the date"]},"$nm":"weekOfYear"},"year":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The year of the date"]},"$nm":"year"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["True if the year of the date is a leap year."]},"$nm":"leapYear"},"day":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of month value of the date"]},"$nm":"day"},"dayOfYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Number of the day in year"]},"$nm":"dayOfYear"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Day of the week."]},"$nm":"dayOfWeek"}},"$nm":"ReadableDate"},"UnitOfMillisecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMillisecond"},"august":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["August. The eighth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"august"},"ReadableDatePeriod":{"$mt":"ifc","$an":{"shared":[],"doc":["A period of _days_, _months_ and _years_."]},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of months."]},"$nm":"months"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of days."]},"$nm":"days"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The number of years."]},"$nm":"years"}},"$nm":"ReadableDatePeriod"},"UnitOfDay":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfDay"},"tuesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Tuesday_ is the day of the week that follows Monday and preceeds Wednesday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"tuesday"},"dayOfWeek":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"DayOfWeek"}]},"$mt":"prm","$pt":"v","$nm":"dayOfWeek"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns [[DayOfWeek]] from the input"]},"$nm":"dayOfWeek"},"september":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["September. The nineth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"september"},"Range":{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"}],"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Element"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$nm":"Element"},{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Self"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"}],"variance":"in","$nm":"Self"},{"$nm":"StepBy"}],"$an":{"shared":[],"doc":["An interface to represent a Range between two Date\/DateTime\/Time"]},"$m":{"overlap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Self"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":"Self","$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB < CD\n\n    [1..6] overlap [3..9] = [3,6]\n\n    [1..6] overlap [9..3] = [3,6]\n\n    [6..1] overlap [3..9] = [3,6]\n\n    [6..1] overlap [9..3] = [3,6]\n\n\n\nGiven: [A..B] overlap [C..D]\n \nWhen: AB > CD\n\n    [3..9] overlap [1..6] = [6,3]\n\n    [3..9] overlap [6..1] = [6,3]\n\n    [9..3] overlap [1..6] = [6,3]\n\n    [9..3] overlap [6..1] = [6,3]"]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"default":[],"doc":["Returns true if both: this and other are same type and have equal fields _from_ and _to_"],"actual":[]},"$nm":"equals"},"stepBy":{"$t":{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Self"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},"$ps":[[{"$t":"StepBy","$mt":"prm","$pt":"v","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Define how this Range will get next or previous element while iterating."]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$tp":[{"$mt":"tpm","$nm":"Element"},{"$mt":"tpm","$nm":"Self"},{"$mt":"tpm","$nm":"StepBy"}],"$pk":"ceylon.time.base","$nm":"Range"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":"Self","$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns empty or a new Range:\n- Each Range is considered a _set_ then [A..B] is equivalent to [B..A] \n- The precision is based on the lowest unit \n- When the new Range exists it will follow these rules:\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB < CD\n\n    [1..2] gap [5..6] = (2,5)\n\n    [1..2] gap [6..5] = (2,5)\n\n    [2..1] gap [5..6] = (2,5)\n\n    [2..1] gap [6..5] = (2,5)\n\n\n\nGiven: [A..B] gap [C..D]\n \nWhen: AB > CD\n\n    [5..6] gap [1..2] = (5,2)\n\n    [5..6] gap [2..1] = (5,2)\n\n    [6..5] gap [1..2] = (5,2)\n\n    [6..5] gap [2..1] = (5,2)"]},"$nm":"gap"}},"$at":{"to":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The limit of the Range where. \n\nExample:\n\nGiven: today().to(tomorrow) then tomorrow is the _to_ element\n\nGiven: tomorrow.to(today()) then today() is the _to_ element"]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Duration between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 86400000 milliseconds\n\nGiven: tomorrow().to(today).duration then duration is -86400000 milliseconds"]},"$nm":"duration"},"from":{"$t":{"$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["The first Element returned by the iterator, if any.\nThis should always produce the same value as\n`iterable.iterator().head`.\nIt also represents the _caller_ that created the Range:\n\nExample: today().to(tomorrow) -> in this case today() is the caller\/creator of the range"]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Returns the Period between _from_ and _to_ fields.\n\nExample: \n\nGiven: today().to(tomorrow).duration then duration is 1 day\n\nGiven: tomorrow().to(today).duration then duration is -1 day"]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Customized way to iterate over each element, it does not interfer in _from_\nand _to_ fields, but it does not guarantee that _to_ will be included in iterator"]},"$nm":"step"}},"$nm":"Range"},"may":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["May. The fifth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"may"},"minutes":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMinute"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _minute_ time unit"]},"$at":{"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of minutes per day"]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of minutes per hour"]},"$nm":"perHour"}},"$nm":"minutes"},"april":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["April. The fourth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"april"},"WeekdayParseError":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"message"}],"$mt":"cls","$an":{"shared":[],"doc":["An exception that is thrown when parsing a DayOfWeek fails"]},"$nm":"WeekdayParseError"},"UnitOfSecond":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfSecond"},"months":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfMonth"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of months"]},"$at":{"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of months per year"]},"$nm":"perYear"},"all":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"Month"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[],"doc":["Ordered list of all months of Gregorian and Julian calendar system from January to December"]},"$nm":"all"}},"$nm":"months"},"wednesday":{"super":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"obj","$an":{"shared":[],"doc":["_Wednesday_ is the day of the week that follows Tuesday and preceeds Thursday."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"DayOfWeek"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"wednesday"},"days":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfDay"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties and constraints of _day_ unit"]},"$m":{"toMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days from the start of the year to the first of the month"]},"$nm":"toMonth"},"perYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days per year"]},"$nm":"perYear"},"fromMillis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"millis"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns number of days from the number of milliseconds."]},"$nm":"fromMillis"},"perMonth":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$pt":"v","$def":"1","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns the number of days per month"]},"$nm":"perMonth"}},"$at":{"inFourYears":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days in four years"]},"$nm":"inFourYears"},"toEpoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of days from year zero to year 1970.\nThere are five 400 year cycles from year zero to 2000.\nThere are 7 leap years from 1970 to 2000."]},"$nm":"toEpoch"},"ofWeek":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"DayOfWeek"}],"$pk":"ceylon.language","$nm":"Sequential"},"$mt":"attr","$an":{"shared":[]},"$nm":"ofWeek"},"perCentury":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of of per century (100 years)"]},"$nm":"perCentury"},"perFourCenturies":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perFourCenturies"},"perCycle":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days in a 400 year cycle."]},"$nm":"perCycle"},"perWeek":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of days per week (7)"]},"$nm":"perWeek"}},"$nm":"days"},"seconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfSecond"}],"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _second_ time unit"]},"$at":{"perMinute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of seconds per minute"]},"$nm":"perMinute"},"perDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per day"]},"$nm":"perDay"},"perHour":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"gttr","$an":{"shared":[],"doc":["Number of seconds per hour"]},"$nm":"perHour"}},"$nm":"seconds"},"DateTimeException":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Exception"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$pt":"v","$nm":"message"}],"$mt":"cls","$an":{"shared":[]},"$nm":"DateTimeException"},"october":{"super":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"obj","$an":{"shared":[],"doc":["October. The tenth month of a gregorian calendar system."]},"$at":{"predecessor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"predecessor"},"successor":{"$t":{"$pk":"ceylon.time.base","$nm":"Month"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"successor"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"string"}},"$nm":"october"},"UnitOfMinute":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"UnitOfMinute"},"TimeBehavior":{"of":[{"$nm":"Element"}],"$mt":"ifc","$tp":[{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"}],"$nm":"Element"}],"$an":{"shared":[],"doc":["Common behavior for the types that represent time."]},"$m":{"minusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."]},"$nm":"minusHours"},"withMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of milliseconds."]},"$nm":"withMilliseconds"},"minusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."]},"$nm":"minusSeconds"},"withMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of minutes."]},"$nm":"withMinutes"},"plusSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of seconds added."]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of milliseconds subtracted."]},"$nm":"minusMilliseconds"},"minusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."]},"$nm":"minusMinutes"},"plusMilliseconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of nonoseconds added."]},"$nm":"plusMilliseconds"},"withHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of hours.\nResult must be a valid time of day."]},"$nm":"withHours"},"withSeconds":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified amount of seconds."]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of minutes added."]},"$nm":"plusMinutes"},"plusHours":{"$t":{"$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns a copy of this period with the specified number of hours added."]},"$nm":"plusHours"}},"$nm":"TimeBehavior","$st":"Element"}},"ceylon.time.chronology":{"$pkg-shared":"1","LeapYear":{"of":[{"$nm":"Self"}],"$mt":"ifc","$tp":[{"satisfies":[{"$tp":[{"$mt":"tpm","$nm":"Fields"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"}],"$nm":"Self"},{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["An interface for calendar system that defines leap year rules.\n\n*Note:* This interface is meant to convey a Calendar that has some sort of leap year syntax"]},"$m":{"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"leapYear"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns true if the specified year is a leap year according to the leap year rules of the"]},"$nm":"leapYear"}},"$nm":"LeapYear","$st":"Self"},"unixTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$mt":"obj","$an":{"shared":[],"doc":["Common properties of _Unix time_"]},"$m":{"fixedFromTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a _fixed date_ from the _unix time_ value."]},"$nm":"fixedFromTime"},"timeOfDay":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return time of day from the provided unix time value"]},"$nm":"timeOfDay"},"timeFromFixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return milliseconds elapsed from 1970-01-01 00:00:00"]},"$nm":"timeFromFixed"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Fixed date value of the _Unix time_ epoch (1970-01-01)"]},"$nm":"epoch"},"epochTime":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Time value of the unix time epoch (1970-01-01 00:00:00Z)"]},"$nm":"epochTime"}},"$nm":"unixTime"},"gregorian":{"super":{"$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},"$mt":"obj","$an":{"shared":[],"doc":["Represents the implementation of all calculations for\nthe rules based on Gregorian Calendar"]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"fixedFrom"},"yearEnd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the last day of the gregorian year."]},"$nm":"yearEnd"},"dayOfWeekFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _day of week_ value for the specified fixed date value."]},"$nm":"dayOfWeekFrom"},"monthFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Retunrs the month number of the gregorian calendar from the fixed date value."]},"$nm":"monthFrom"},"newYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns fixed date value of the first day of the gregorian year."]},"$nm":"newYear"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"checkDate"},"yearFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a gregorian year number of the fixed date value."]},"$nm":"yearFrom"},"dayFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns day of month value of the fixed date value."]},"$nm":"dayFrom"},"leapYear":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gregorian leap year rule states that every fourth year\nis a leap year except cenury years not divisible by 400."],"actual":[]},"$nm":"leapYear"},"dateFrom":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts the fixed date value to an equivalent gregorian date"],"actual":[]},"$nm":"dateFrom"},"fixed":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"day"}]],"$mt":"mthd","$nm":"fixed"}},"$at":{"december":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"december"},"november":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"november"},"may":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"may"},"march":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"march"},"april":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"april"},"february":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"february"},"june":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"june"},"january":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"january"},"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Epoch of the gregorian calendar"],"actual":[]},"$nm":"epoch"},"august":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"august"},"july":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"july"},"october":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"october"},"september":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[]},"$nm":"september"}},"$nm":"gregorian"},"Chronology":{"$mt":"ifc","$tp":[{"satisfies":[{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"}],"$pk":"ceylon.language","$nm":"Sequential"}],"$nm":"Fields"}],"$an":{"shared":[],"doc":["Generic base interface of a _calendar system_.\nChronology serves as a computational backend to \na Date representation of the same calendar system."]},"$m":{"fixedFrom":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":"Fields","$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts date tuple of this calendar system to an equivalent _fixed date_\nrepresentation of the "]},"$nm":"fixedFrom"},"checkDate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":"Fields","$mt":"prm","$pt":"v","$nm":"date"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Validate the given date"]},"$nm":"checkDate"},"dateFrom":{"$t":{"$nm":"Fields"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"fixed"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Converts a _fixed day_ number to a calendar date tuple"]},"$nm":"dateFrom"}},"$at":{"epoch":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[],"doc":["Epoch is the offset of the _fixed date_ day number that defines \nthe beginning of the calendar."]},"$nm":"epoch"}},"$nm":"Chronology"},"rd":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"t"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Converts _Rata Die_ day number to a fixed date value.\n\n_Rata Die_ is fixed at Monday, January 1st, 1. (Gregorian)."]},"$nm":"rd"},"GregorianCalendar":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"ceylon.time.chronology","$nm":"gregorian"}],"satisfies":[{"$tp":[{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"Chronology"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time.chronology","$nm":"GregorianCalendar"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Integer"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Empty"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.language","$nm":"Tuple"}],"$pk":"ceylon.time.chronology","$nm":"LeapYear"}],"$mt":"cls","$an":{"shared":[],"abstract":[],"doc":["Base class for a gregorian calendar chronology."]},"$nm":"GregorianCalendar"}},"ceylon.time":{"Period":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"years"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"months"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"days"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.time.base","$nm":"PeriodBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Period"}],"$pk":"ceylon.language","$nm":"Summable"}],"$mt":"cls","$an":{"shared":[],"doc":["An immutable period consisting of the ISO-8601 _years_, _months_, _days_, _hours_,\n_minutes_, _seconds_ and _milliseconds_, such as '3 Months, 4 Days and 7 Hours'.\n\nA period is a human-scale description of an amount of time.\n"]},"$m":{"withMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of nanos."],"actual":[]},"$nm":"withMilliseconds"},"plusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days added."],"actual":[]},"$nm":"plusDays"},"withMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of minutes."],"actual":[]},"$nm":"withMinutes"},"withDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of days."],"actual":[]},"$nm":"withDays"},"minusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours subtracted."],"actual":[]},"$nm":"minusHours"},"plusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds added."],"actual":[]},"$nm":"plusSeconds"},"minusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of nonoseconds subtracted."],"actual":[]},"$nm":"minusMilliseconds"},"withSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of seconds."],"actual":[]},"$nm":"withSeconds"},"plusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes added."],"actual":[]},"$nm":"plusMinutes"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a new period that is a sum of the two periods."],"actual":[]},"$nm":"plus"},"normalized":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with all amounts normalized to the \nstandard ranges for date\/time fields.\n\nTwo normalizations occur, one for years and months, and one for\nhours, minutes, seconds and milliseconds.\n\nDays are not normalized, as a day may vary in length at daylight savings cutover.\nNeither is days normalized into months, as number of days per month varies from \nmonth to another and depending on the leap year."],"actual":[]},"$nm":"normalized"},"withYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of years."],"actual":[]},"$nm":"withYears"},"minusSeconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"seconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of seconds subtracted."],"actual":[]},"$nm":"minusSeconds"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"that"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is equal to another period."],"actual":[]},"$nm":"equals"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Return the result of comparing this period to the _other_ period."],"actual":[]},"$nm":"compare"},"minusMinutes":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"minutes"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of minutes subtracted."],"actual":[]},"$nm":"minusMinutes"},"minusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years subtracted."],"actual":[]},"$nm":"minusYears"},"plusHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of hours added."],"actual":[]},"$nm":"plusHours"},"minusDays":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"days"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of days subtracted."],"actual":[]},"$nm":"minusDays"},"withMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of months."],"actual":[]},"$nm":"withMonths"},"minusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months subtracted."],"actual":[]},"$nm":"minusMonths"},"plusMonths":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"months"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of months added."],"actual":[]},"$nm":"plusMonths"},"plusMilliseconds":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of nonoseconds added."],"actual":[]},"$nm":"plusMilliseconds"},"plusYears":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"years"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified number of years added."],"actual":[]},"$nm":"plusYears"},"withHours":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"hours"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a copy of this period with the specified amount of hours."],"actual":[]},"$nm":"withHours"},"isZero":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"doc":["Checks if this period is zero-length."]},"$nm":"isZero"}},"$at":{"months":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of months"],"actual":[]},"$nm":"months"},"dateOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a date only view of this period."],"actual":[]},"$nm":"dateOnly"},"minutes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of minutes"],"actual":[]},"$nm":"minutes"},"days":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of days"],"actual":[]},"$nm":"days"},"seconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of seconds"],"actual":[]},"$nm":"seconds"},"hours":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of hours"],"actual":[]},"$nm":"hours"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the ISO 8601 formatted string for this period"],"actual":[]},"$nm":"string"},"timeOnly":{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns a time only view of this period."],"actual":[]},"$nm":"timeOnly"},"years":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of years."],"actual":[]},"$nm":"years"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["The number of milliseconds"],"actual":[]},"$nm":"milliseconds"}},"$nm":"Period"},"DateRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateRange"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfDate"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range"],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Date"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"prm","$pt":"v","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"step"}},"$nm":"DateRange"},"Instant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"millisecondsOfEra"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableInstant"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Instant"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"cls","$an":{"shared":[],"doc":["A specific instant of time on a continuous time-scale.\n\nAn instant represents a single point in time irrespective of \nany time-zone offsets or geographical locations"]},"$m":{"durationFrom":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from other instant to this instant."]},"$nm":"durationFrom"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Adds a period to this instant"]},"$nm":"plus"},"durationTo":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns duration in milliseconds from this instant to the other instant."]},"$nm":"durationTo"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$an":{"doc":["Time zone of the conversion.\n\nIf omitted the current\/default time zone of the system will be used.\n\n**Note:** Since time zone support is not implemented yet, this method \nwill return time of day according to the of the UTC-0 instead of using local \ntime zone."]},"$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns _time of day_ for this instant"]},"$nm":"time"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Duration"},{"$pk":"ceylon.time","$nm":"Period"}]},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Subtracts a period to this instant"]},"$nm":"minus"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$an":{"doc":["Time zone of the conversion.\n\nIf omitted, the current\/default time zone of the system will be used.\n\n**Note:** Since time zone support is not implemented yet, this method \nwill return dateTime according to the of the UTC instead of using local \ntime zone."]},"$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[DateTime]] value."]},"$nm":"dateTime"},"compare":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Comparison"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Compares this instant to the _other_ instant"],"actual":[]},"$nm":"compare"},"zoneDateTime":{"$t":{"$pk":"ceylon.time.timezone","$nm":"ZoneDateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.timezone","$nm":"TimeZone"},"$mt":"prm","$pt":"v","$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns ZoneDateTime value for this instant."]},"$nm":"zoneDateTime"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$an":{"doc":["Time zone of the conversion.\n\nIf omitted the current\/default time zone of the system will be used.\n\n**Note:** Since time zone support is not implemented yet, this method \nwill return date according to the of the UTC instead of using local \ntime zone."]},"$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns this instant as a [[Date]] value"]},"$nm":"date"}},"$at":{"millisecondsOfEra":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Internal value of an instant as a number of milliseconds since \n1970-01-01T00:00:00.000Z."],"actual":[]},"$nm":"millisecondsOfEra"}},"$nm":"Instant"},"dateTime":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"date"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"hour"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"millis"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day-of-month values"]},"$nm":"dateTime"},"FixedMilliseconds":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"fixedMilliseconds"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the instant from the fixed milliseconds"],"actual":[]},"$nm":"instant"},"millis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed milliseconds"],"actual":[]},"$nm":"millis"}},"$nm":"FixedMilliseconds"},"today":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$pt":"v","$def":"1","$nm":"clock"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time.timezone","$nm":"TimeZone"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"zone"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns current date according to the provided system clock and time zone."]},"$nm":"today"},"Clock":{"$mt":"ifc","$an":{"shared":[],"doc":["A clock providing access to the current instant, date and time using a time-zone.\n\nInstances of this class are used to find the current instant, which can be\ninterpreted using the stored time-zone to find the current date and time.\nAs such, a clock can be used instead of `process.milliseconds`.\n\nThe primary purpose of this abstraction is to allow alternate clocks to be\nplugged in as and when required. Applications use an object to obtain the\ncurrent time rather than a static method. This can simplify testing.\n\nApplications should _avoid_ using the top level objects directly.\nInstead, they should pass a [[Clock]] into any method that requires it.\nA dependency injection framework is one way to achieve this.\n\nThis approach allows an alternate clock, such as [[fixedTime]] to be used during testing.\n\nThe [[systemTime]] top level factory method offers clocks based on the best available \nsystem clock, such as `process.milliseconds`."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current instant of the clock."]},"$nm":"instant"},"millis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Gets the current millisecond instant of the clock."]},"$nm":"millis"}},"$nm":"Clock"},"zero":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"attr","$an":{"shared":[],"doc":["A period of zero length"]},"$nm":"zero"},"date":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"year"},{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},{"$pk":"ceylon.time.base","$nm":"Month"}]},"$mt":"prm","$pt":"v","$nm":"month"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"day"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns a date based on the specified year, month and day-ofMonth values"]},"$nm":"date"},"offsetTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$pt":"v","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Returns an implementation of a clock that always returns a \nconstant offset from the value of the provided clock."]},"$nm":"offsetTime"},"fixedTime":{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Instant"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"}]},"$mt":"prm","$pt":"v","$nm":"instant"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Gets a clock that always returns the same instant in the UTC time-zone."]},"$nm":"fixedTime"},"$pkg-shared":"1","TimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"to"},{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"TimeRange"},{"$mt":"tpm","$pk":"ceylon.time.base","$nm":"UnitOfTime"}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range"],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"Time"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"prm","$pt":"v","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"TimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"period"},"step":{"$t":{"$pk":"ceylon.time.base","$nm":"UnitOfTime"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"step"}},"$nm":"TimeRange"},"time":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"hours"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"minutes"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"seconds"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"milliseconds"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Creates new instance of [[Time]]."]},"$nm":"time"},"systemTime":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"obj","$an":{"shared":[],"doc":["Gets a clock that obtains the current instant using the best available system clock."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Return current instant from system time"],"actual":[]},"$nm":"instant"},"millis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Return number of milliseconds from system time"],"actual":[]},"$nm":"millis"}},"$nm":"systemTime"},"Time":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"TimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Comparable"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.language","$nm":"Ordinal"}],"$mt":"ifc","$an":{"shared":[],"doc":["Time of day like _6pm_ or _8.30am_.\n\nThis type contains only information about an abstract _time of day_ without \nreferencing any date or timezone.\n\nYou use Time to specify something that has to occur on a specific time of day\nlike _\"lunch hour starts at 1pm\"_ or _\"shop opens at 10am\"_.\n"]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"TimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[TimeRange]] between this and given Time"]},"$nm":"to"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableTimePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a period of time to this time of day value.\n\nResult of this operation is another time of day,\nwrapping around 12 a.m. (midnight) if necessary.\n"]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is after the given time then return zero period"]},"$nm":"periodTo"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given time.\nIf this time is before the given time then return zero period"]},"$nm":"periodFrom"}},"$nm":"Time"},"now":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Null"},{"$pk":"ceylon.time","$nm":"Clock"}]},"$mt":"prm","$pt":"v","$def":"1","$nm":"clock"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Obtains the current instant from the system clock."]},"$nm":"now"},"DateTime":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDateTime"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"Time"}],"$pk":"ceylon.time.base","$nm":"DateTimeBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An abstract moment in time (like _4pm, October 21. 2012_).\n\nDateTime does not contain a time zone information, so You can not use it to record or \nschedule events."]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateTimeRange]] between this and given DateTime"]},"$nm":"to"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date and time."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadablePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date and time."]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\nIf this DateTime is after the given DateTime then return zero period"]},"$nm":"periodTo"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given DateTime.\nIf this date is before the given date then return zero period"]},"$nm":"periodFrom"}},"$nm":"DateTime"},"Date":{"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDate"},{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.time.base","$nm":"DateBehavior"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Ordinal"},{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"Date"}],"$pk":"ceylon.language","$nm":"Comparable"}],"$mt":"ifc","$an":{"shared":[],"doc":["An interface for date objects in the ISO-8601 calendar system.\n\nA date is often viewed as triple of year-month-day values. \nThis interface also defines access to other date fields such as \nday-of-year, day-of-week and week-of-year."]},"$m":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateRange"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the [[DateRange]] between this and given Date"]},"$nm":"to"},"plus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Adds a specified period to this date."]},"$nm":"plus"},"minus":{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$ps":[[{"$t":{"$pk":"ceylon.time.base","$nm":"ReadableDatePeriod"},"$mt":"prm","$pt":"v","$nm":"period"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Subtracts a specified period to this date."]},"$nm":"minus"},"periodTo":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"end"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\nIf this date is after the given date then return zero period"]},"$nm":"periodTo"},"at":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Time"},"$mt":"prm","$pt":"v","$nm":"time"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns new DateTime value based on this date and a specified time"]},"$nm":"at"},"periodFrom":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"Date"},"$mt":"prm","$pt":"v","$nm":"start"}]],"$mt":"mthd","$an":{"shared":[],"formal":[],"doc":["Returns the period between this and the given date.\nIf this date is before the given date then return zero period"]},"$nm":"periodFrom"}},"$nm":"Date"},"Duration":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"milliseconds"}],"satisfies":[{"$pk":"ceylon.time.base","$nm":"ReadableDuration"}],"$mt":"cls","$an":{"shared":[],"doc":["Duration specifies a discreet amount of milliseconds between two instances of time."]},"$m":{"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Duration is considered equal when type and milliseconds are the same"],"actual":[]},"$nm":"equals"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns the string representation of this duration."],"actual":[]},"$nm":"string"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"doc":["Returns this duration as a period of milliseconds"]},"$nm":"period"},"milliseconds":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"doc":["Number of milliseconds of this duration"],"actual":[]},"$nm":"milliseconds"}},"$nm":"Duration"},"DateTimeRange":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"from"},{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$hdn":"1","$mt":"prm","$pt":"p","$nm":"to"},{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$hdn":"1","$mt":"prm","$pt":"p","$def":"1","$nm":"step"}],"satisfies":[{"$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"},{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTimeRange"},{"comp":"u","$mt":"tpm","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]}],"$pk":"ceylon.time.base","$nm":"Range"}],"$mt":"cls","$an":{"shared":[]},"$m":{"previousByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"previousByStep"},"iterator":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"},"$mt":"mthd","$an":{"shared":[],"doc":["An iterator for the elements belonging to this \ncontainer. where each jump is based on actual step of this Range"],"actual":[]},"$nm":"iterator","$o":{"listIterator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"satisfies":[{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"ceylon.time","$nm":"DateTime"}],"$pk":"ceylon.language","$nm":"Iterator"}],"$mt":"obj","$m":{"next":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTime"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Finished"}]},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"next"}},"$at":{"count":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"var":"1","$mt":"attr","$an":{"variable":[]},"$nm":"count"}},"$nm":"listIterator"}}},"overlap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"overlap"},"equals":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Object"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"equals"},"nextByStep":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$def":"1","$nm":"jump"}]],"$mt":"mthd","$nm":"nextByStep"},"stepBy":{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$ps":[[{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"prm","$pt":"v","$nm":"step"}]],"$mt":"mthd","$an":{"shared":[],"doc":["Define how this Range will get next or previous element while iterating."],"actual":[]},"$nm":"stepBy"},"gap":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time","$nm":"DateTimeRange"},{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Empty"}]},"$ps":[[{"$t":{"$pk":"ceylon.time","$nm":"DateTimeRange"},"$mt":"prm","$pt":"v","$nm":"other"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"gap"}},"$at":{"to":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"to"},"duration":{"$t":{"$pk":"ceylon.time","$nm":"Duration"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"duration"},"from":{"$t":{"$pk":"ceylon.time","$nm":"DateTime"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"from"},"period":{"$t":{"$pk":"ceylon.time","$nm":"Period"},"$mt":"gttr","$an":{"shared":[],"actual":[]},"$nm":"period"},"step":{"$t":{"comp":"u","$ts":[{"$pk":"ceylon.time.base","$nm":"UnitOfDate"},{"$pk":"ceylon.time.base","$nm":"UnitOfTime"}]},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"step"}},"$nm":"DateTimeRange"},"FixedInstant":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"prm","$pt":"v","$nm":"fixedInstant"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["Implementation of a clock that always returns the same instant.\nThis is typically used for testing."]},"$m":{"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns the fixed instant"],"actual":[]},"$nm":"instant"},"millis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"doc":["Returns milliseconds from the fixed instant"],"actual":[]},"$nm":"millis"}},"$nm":"FixedInstant"},"OffsetClock":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"ceylon.time","$nm":"Clock"},"$mt":"prm","$pt":"v","$nm":"baseClock"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$pt":"v","$nm":"offset"}],"satisfies":[{"$pk":"ceylon.time","$nm":"Clock"}],"$mt":"cls","$an":{"doc":["An implementation of a [[Clock]] that returns tilem with a constant \noffset from the provided clock."]},"$m":{"millis":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"millis"},"instant":{"$t":{"$pk":"ceylon.time","$nm":"Instant"},"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"instant"}},"$nm":"OffsetClock"}}};
var $$$cl1=require('ceylon/language/0.6/ceylon.language-0.6');
var $$$ct798=require('ceylon/time/0.6/ceylon.time-0.6');
function UnitOfDate$base($$unitOfDate){
}
UnitOfDate$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfDate']};
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
UnitOfYear$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfYear']};
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
UnitOfMonth$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfMonth']};
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
UnitOfDay$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfDate$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfDay']};
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
UnitOfTime$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfTime']};
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
UnitOfHour$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfHour']};
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
UnitOfMinute$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfMinute']};
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
UnitOfSecond$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfSecond']};
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
UnitOfMillisecond$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:UnitOfTime$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['UnitOfMillisecond']};
exports.UnitOfMillisecond$base=UnitOfMillisecond$base;
function $init$UnitOfMillisecond$base(){
    if (UnitOfMillisecond$base.$$===undefined){
        $$$cl1.initTypeProto(UnitOfMillisecond$base,'ceylon.time.base::UnitOfMillisecond',$init$UnitOfTime$base());
    }
    return UnitOfMillisecond$base;
}
exports.$init$UnitOfMillisecond$base=$init$UnitOfMillisecond$base;
$init$UnitOfMillisecond$base();
function years$799$base(){
    var $$years=new years$799$base.$$;
    UnitOfYear$base($$years);
    var minimum=(-(283456));
    $$$cl1.defineAttr($$years,'minimum',function(){return minimum;});
    var maximum=(287396);
    $$$cl1.defineAttr($$years,'maximum',function(){return maximum;});
    return $$years;
}
function $init$years$799$base(){
    if (years$799$base.$$===undefined){
        $$$cl1.initTypeProto(years$799$base,'ceylon.time.base::years',$$$cl1.Basic,$init$UnitOfYear$base());
    }
    return years$799$base;
}
exports.$init$years$799$base=$init$years$799$base;
$init$years$799$base();
var years$800$base=years$799$base();
var getYears$base=function(){
    return years$800$base;
}
exports.getYears$base=getYears$base;
function months$801$base(){
    var $$months=new months$801$base.$$;
    UnitOfMonth$base($$months);
    var all=$$$cl1.Tuple(getJanuary$base(),$$$cl1.Tuple(getFebruary$base(),$$$cl1.Tuple(getMarch$base(),$$$cl1.Tuple(getApril$base(),$$$cl1.Tuple(getMay$base(),$$$cl1.Tuple(getJune$base(),$$$cl1.Tuple(getJuly$base(),$$$cl1.Tuple(getAugust$base(),$$$cl1.Tuple(getSeptember$base(),$$$cl1.Tuple(getOctober$base(),$$$cl1.Tuple(getNovember$base(),$$$cl1.Tuple(getDecember$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}}},First:{t:Month$base},Element:{t:Month$base}});
    $$$cl1.defineAttr($$months,'all',function(){return all;});
    var perYear=$$months.all.size;
    $$$cl1.defineAttr($$months,'perYear',function(){return perYear;});
    return $$months;
}
function $init$months$801$base(){
    if (months$801$base.$$===undefined){
        $$$cl1.initTypeProto(months$801$base,'ceylon.time.base::months',$$$cl1.Basic,$init$UnitOfMonth$base());
    }
    return months$801$base;
}
exports.$init$months$801$base=$init$months$801$base;
$init$months$801$base();
var months$802$base=months$801$base();
var getMonths$base=function(){
    return months$802$base;
}
exports.getMonths$base=getMonths$base;
function days$803$base(){
    var $$days=new days$803$base.$$;
    UnitOfDay$base($$days);
    var perYear=function (leapYear$804){
        if(leapYear$804===undefined){leapYear$804=false;}
        return (opt$805=(leapYear$804?(366):null),opt$805!==null?opt$805:(365));
    };
    perYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['days']['$m']['perYear']};
    $$days.perYear=perYear;
    var opt$805;
    var perMonth=function (month$806,leapYear$807){
        if(leapYear$807===undefined){leapYear$807=false;}
        return month$806.numberOfDays(leapYear$807);
    };
    perMonth.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['days']['$m']['perMonth']};
    $$days.perMonth=perMonth;
    var toMonth=function (month$808,leapYear$809){
        if(leapYear$809===undefined){leapYear$809=false;}
        return month$808.fisrtDayOfYear(leapYear$809).minus((1));
    };
    toMonth.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'month',$mt:'prm',$t:{t:Month$base}},{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['days']['$m']['toMonth']};
    $$days.toMonth=toMonth;
    var ofWeek=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});
    $$$cl1.defineAttr($$days,'ofWeek',function(){return ofWeek;});
    var perWeek=$$days.ofWeek.size;
    $$$cl1.defineAttr($$days,'perWeek',function(){return perWeek;});
    var perCycle=(146097);
    $$$cl1.defineAttr($$days,'perCycle',function(){return perCycle;});
    $$$cl1.defineAttr($$days,'perFourCenturies',function(){return $$days.perCycle;});
    $$$cl1.defineAttr($$days,'toEpoch',function(){return $$days.perCycle.times((5)).minus((30).times((365)).plus((7)));});
    var inFourYears=(1461);
    $$$cl1.defineAttr($$days,'inFourYears',function(){return inFourYears;});
    var perCentury=(36524);
    $$$cl1.defineAttr($$days,'perCentury',function(){return perCentury;});
    var fromMillis=function (millis$810){
        if(millis$810===undefined){millis$810=(0);}
        return $$$ct798.floorDiv$internal$math(millis$810,getMilliseconds$base().perDay);
    };
    fromMillis.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['days']['$m']['fromMillis']};
    $$days.fromMillis=fromMillis;
    return $$days;
}
function $init$days$803$base(){
    if (days$803$base.$$===undefined){
        $$$cl1.initTypeProto(days$803$base,'ceylon.time.base::days',$$$cl1.Basic,$init$UnitOfDay$base());
    }
    return days$803$base;
}
exports.$init$days$803$base=$init$days$803$base;
$init$days$803$base();
var days$811$base=days$803$base();
var getDays$base=function(){
    return days$811$base;
}
exports.getDays$base=getDays$base;
function hours$812$base(){
    var $$hours=new hours$812$base.$$;
    UnitOfHour$base($$hours);
    var perDay=(24);
    $$$cl1.defineAttr($$hours,'perDay',function(){return perDay;});
    return $$hours;
}
function $init$hours$812$base(){
    if (hours$812$base.$$===undefined){
        $$$cl1.initTypeProto(hours$812$base,'ceylon.time.base::hours',$$$cl1.Basic,$init$UnitOfHour$base());
    }
    return hours$812$base;
}
exports.$init$hours$812$base=$init$hours$812$base;
$init$hours$812$base();
var hours$813$base=hours$812$base();
var getHours$base=function(){
    return hours$813$base;
}
exports.getHours$base=getHours$base;
function minutes$814$base(){
    var $$minutes=new minutes$814$base.$$;
    UnitOfMinute$base($$minutes);
    var perHour=(60);
    $$$cl1.defineAttr($$minutes,'perHour',function(){return perHour;});
    $$$cl1.defineAttr($$minutes,'perDay',function(){return getHours$base().perDay.times(getMinutes$base().perHour);});
    return $$minutes;
}
function $init$minutes$814$base(){
    if (minutes$814$base.$$===undefined){
        $$$cl1.initTypeProto(minutes$814$base,'ceylon.time.base::minutes',$$$cl1.Basic,$init$UnitOfMinute$base());
    }
    return minutes$814$base;
}
exports.$init$minutes$814$base=$init$minutes$814$base;
$init$minutes$814$base();
var minutes$815$base=minutes$814$base();
var getMinutes$base=function(){
    return minutes$815$base;
}
exports.getMinutes$base=getMinutes$base;
function seconds$816$base(){
    var $$seconds=new seconds$816$base.$$;
    UnitOfSecond$base($$seconds);
    var perMinute=(60);
    $$$cl1.defineAttr($$seconds,'perMinute',function(){return perMinute;});
    $$$cl1.defineAttr($$seconds,'perHour',function(){return getMinutes$base().perHour.times(getSeconds$base().perMinute);});
    $$$cl1.defineAttr($$seconds,'perDay',function(){return getHours$base().perDay.times(getSeconds$base().perHour);});
    return $$seconds;
}
function $init$seconds$816$base(){
    if (seconds$816$base.$$===undefined){
        $$$cl1.initTypeProto(seconds$816$base,'ceylon.time.base::seconds',$$$cl1.Basic,$init$UnitOfSecond$base());
    }
    return seconds$816$base;
}
exports.$init$seconds$816$base=$init$seconds$816$base;
$init$seconds$816$base();
var seconds$817$base=seconds$816$base();
var getSeconds$base=function(){
    return seconds$817$base;
}
exports.getSeconds$base=getSeconds$base;
function milliseconds$818$base(){
    var $$milliseconds=new milliseconds$818$base.$$;
    UnitOfMillisecond$base($$milliseconds);
    var perSecond=(1000);
    $$$cl1.defineAttr($$milliseconds,'perSecond',function(){return perSecond;});
    $$$cl1.defineAttr($$milliseconds,'perMinute',function(){return getSeconds$base().perMinute.times(getMilliseconds$base().perSecond);});
    $$$cl1.defineAttr($$milliseconds,'perHour',function(){return getMinutes$base().perHour.times(getMilliseconds$base().perMinute);});
    $$$cl1.defineAttr($$milliseconds,'perDay',function(){return getHours$base().perDay.times(getMilliseconds$base().perHour);});
    return $$milliseconds;
}
function $init$milliseconds$818$base(){
    if (milliseconds$818$base.$$===undefined){
        $$$cl1.initTypeProto(milliseconds$818$base,'ceylon.time.base::milliseconds',$$$cl1.Basic,$init$UnitOfMillisecond$base());
    }
    return milliseconds$818$base;
}
exports.$init$milliseconds$818$base=$init$milliseconds$818$base;
$init$milliseconds$818$base();
var milliseconds$819$base=milliseconds$818$base();
var getMilliseconds$base=function(){
    return milliseconds$819$base;
}
exports.getMilliseconds$base=getMilliseconds$base;
function DateBehavior$base($$dateBehavior){
}
DateBehavior$base.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableDate$base}]}},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DateBehavior']};
exports.DateBehavior$base=DateBehavior$base;
function $init$DateBehavior$base(){
    if (DateBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(DateBehavior$base,'ceylon.time.base::DateBehavior');
    }
    return DateBehavior$base;
}
exports.$init$DateBehavior$base=$init$DateBehavior$base;
$init$DateBehavior$base();
function DateTimeBehavior$base($$dateTimeBehavior){
    DateBehavior$base($$dateTimeBehavior);
    TimeBehavior$base($$dateTimeBehavior);
}
DateTimeBehavior$base.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableDateTime$base}]},DateType:{'var':'out','satisfies':[{t:ReadableDate$base}]},TimeType:{'var':'out','satisfies':[{t:ReadableTime$base}]}},satisfies:[{t:DateBehavior$base,a:{Element:'Element'}},{t:TimeBehavior$base,a:{Element:'Element'}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DateTimeBehavior']};
exports.DateTimeBehavior$base=DateTimeBehavior$base;
function $init$DateTimeBehavior$base(){
    if (DateTimeBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(DateTimeBehavior$base,'ceylon.time.base::DateTimeBehavior',$init$DateBehavior$base(),$init$TimeBehavior$base());
    }
    return DateTimeBehavior$base;
}
exports.$init$DateTimeBehavior$base=$init$DateTimeBehavior$base;
$init$DateTimeBehavior$base();
function DateTimeException$base(message$820, $$dateTimeException){
    $init$DateTimeException$base();
    if ($$dateTimeException===undefined)$$dateTimeException=new DateTimeException$base.$$;
    $$$cl1.Exception(message$820,null,$$dateTimeException);
    return $$dateTimeException;
}
DateTimeException$base.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DateTimeException']};
exports.DateTimeException$base=DateTimeException$base;
function $init$DateTimeException$base(){
    if (DateTimeException$base.$$===undefined){
        $$$cl1.initTypeProto(DateTimeException$base,'ceylon.time.base::DateTimeException',$$$cl1.Exception);
    }
    return DateTimeException$base;
}
exports.$init$DateTimeException$base=$init$DateTimeException$base;
$init$DateTimeException$base();
function DayOfWeek$base(integer$821, $$dayOfWeek){
    $init$DayOfWeek$base();
    if ($$dayOfWeek===undefined)$$dayOfWeek=new DayOfWeek$base.$$;
    $$dayOfWeek.$$targs$$={Other:{t:DayOfWeek$base}};
    $$dayOfWeek.$$targs$$={Other:{t:DayOfWeek$base}};
    $$$cl1.Ordinal($$dayOfWeek);
    $$$cl1.add_type_arg($$dayOfWeek,'Other',{t:DayOfWeek$base});
    $$$cl1.Comparable($$dayOfWeek);
    $$$cl1.add_type_arg($$dayOfWeek,'Other',{t:DayOfWeek$base});
    var integer=integer$821;
    $$$cl1.defineAttr($$dayOfWeek,'integer',function(){return integer;});
    function plusDays(number$822){
        var wd$823=$$dayOfWeek.integer.plus(number$822).remainder((7));
        //assert at DayOfWeek.ceylon (12:8-12:42)
        var dow$824;
        if (!((dow$824=getWeekdays$base().get(wd$823))!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists dow = weekdays[wd]\' at DayOfWeek.ceylon (12:15-12:41)'); }
        return dow$824;
    }
    $$dayOfWeek.plusDays=plusDays;
    plusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DayOfWeek']['$m']['plusDays']};//plusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:DayOfWeek$base}};
    var minusDays=function (number$825){
        return $$dayOfWeek.plusDays((-number$825));
    };
    minusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DayOfWeek']['$m']['minusDays']};
    $$dayOfWeek.minusDays=minusDays;
    var compare=function (other$826){
        return $$dayOfWeek.integer.compare(other$826.integer);
    };
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:DayOfWeek$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DayOfWeek']['$m']['compare']};
    $$dayOfWeek.compare=compare;
    return $$dayOfWeek;
}
DayOfWeek$base.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:DayOfWeek$base}}},{t:$$$cl1.Comparable,a:{Other:{t:DayOfWeek$base}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['DayOfWeek']};
exports.DayOfWeek$base=DayOfWeek$base;
function $init$DayOfWeek$base(){
    if (DayOfWeek$base.$$===undefined){
        $$$cl1.initTypeProto(DayOfWeek$base,'ceylon.time.base::DayOfWeek',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return DayOfWeek$base;
}
exports.$init$DayOfWeek$base=$init$DayOfWeek$base;
$init$DayOfWeek$base();
var weekdays$827$base=$$$cl1.Tuple(getSunday$base(),$$$cl1.Tuple(getMonday$base(),$$$cl1.Tuple(getTuesday$base(),$$$cl1.Tuple(getWednesday$base(),$$$cl1.Tuple(getThursday$base(),$$$cl1.Tuple(getFriday$base(),$$$cl1.Tuple(getSaturday$base(),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}}},First:{t:DayOfWeek$base},Element:{t:DayOfWeek$base}});
var getWeekdays$base=function(){return weekdays$827$base;};
exports.getWeekdays$base=getWeekdays$base;
function dayOfWeek$base(dayOfWeek$828){
    
    var case$829=dayOfWeek$828;
    if ($$$cl1.isOfType(dayOfWeek$828,{t:DayOfWeek$base})) {
        return case$829;
    }else if ($$$cl1.isOfType(dayOfWeek$828,{t:$$$cl1.Integer})) {
        //assert at DayOfWeek.ceylon (32:8-32:48)
        if (!((((0).compare(case$829)!==$$$cl1.getLarger())&&case$829.compare((7)).equals($$$cl1.getSmaller())))) { throw $$$cl1.AssertionException('Assertion failed: \'0 <= dayOfWeek && dayOfWeek < 7\' at DayOfWeek.ceylon (32:15-32:47)'); }
        //assert at DayOfWeek.ceylon (33:8-33:59)
        var dow$830;
        if (!((dow$830=getWeekdays$base().get(case$829))!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists DayOfWeek dow = weekdays[dayOfWeek]\' at DayOfWeek.ceylon (33:15-33:58)'); }
        return dow$830;
    }
}
exports.dayOfWeek$base=dayOfWeek$base;
dayOfWeek$base.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:DayOfWeek$base}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['dayOfWeek']};//dayOfWeek$base.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Integer},{t:DayOfWeek$base}]},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:DayOfWeek$base}]}}},Return:{t:DayOfWeek$base}};
function WeekdayParseError$base(message$831, $$weekdayParseError){
    $init$WeekdayParseError$base();
    if ($$weekdayParseError===undefined)$$weekdayParseError=new WeekdayParseError$base.$$;
    $$$cl1.Exception(message$831,undefined,$$weekdayParseError);
    return $$weekdayParseError;
}
WeekdayParseError$base.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Exception},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['WeekdayParseError']};
exports.WeekdayParseError$base=WeekdayParseError$base;
function $init$WeekdayParseError$base(){
    if (WeekdayParseError$base.$$===undefined){
        $$$cl1.initTypeProto(WeekdayParseError$base,'ceylon.time.base::WeekdayParseError',$$$cl1.Exception);
    }
    return WeekdayParseError$base;
}
exports.$init$WeekdayParseError$base=$init$WeekdayParseError$base;
$init$WeekdayParseError$base();
function parseWeekday$base(dayOfWeek$832){
    var wd$833=dayOfWeek$832.lowercased;
    var it$834 = getWeekdays$base().iterator();
    var dow$835;while ((dow$835=it$834.next())!==$$$cl1.getFinished()){
        if(dow$835.string.lowercased.equals(wd$833)){
            return dow$835;
        }
    }
    throw WeekdayParseError$base($$$cl1.StringBuilder().appendAll([$$$cl1.String("Unrecognized DayOfWeek: ",24),dayOfWeek$832.string,$$$cl1.String(" .",2)]).string);
}
exports.parseWeekday$base=parseWeekday$base;
parseWeekday$base.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DayOfWeek$base},$ps:[{$nm:'dayOfWeek',$mt:'prm',$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['parseWeekday']};//parseWeekday$base.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:DayOfWeek$base}};
function sunday$836$base(){
    var $$sunday=new sunday$836$base.$$;
    DayOfWeek$base((0),$$sunday);
    var string=$$$cl1.String("sunday",6);
    $$$cl1.defineAttr($$sunday,'string',function(){return string;});
    $$$cl1.defineAttr($$sunday,'predecessor',function(){return getSaturday$base();});
    $$$cl1.defineAttr($$sunday,'successor',function(){return getMonday$base();});
    return $$sunday;
}
function $init$sunday$836$base(){
    if (sunday$836$base.$$===undefined){
        $$$cl1.initTypeProto(sunday$836$base,'ceylon.time.base::sunday',DayOfWeek$base);
    }
    return sunday$836$base;
}
exports.$init$sunday$836$base=$init$sunday$836$base;
$init$sunday$836$base();
var sunday$837$base=sunday$836$base();
var getSunday$base=function(){
    return sunday$837$base;
}
exports.getSunday$base=getSunday$base;
function monday$838$base(){
    var $$monday=new monday$838$base.$$;
    DayOfWeek$base((1),$$monday);
    var string=$$$cl1.String("monday",6);
    $$$cl1.defineAttr($$monday,'string',function(){return string;});
    $$$cl1.defineAttr($$monday,'predecessor',function(){return getSunday$base();});
    $$$cl1.defineAttr($$monday,'successor',function(){return getTuesday$base();});
    return $$monday;
}
function $init$monday$838$base(){
    if (monday$838$base.$$===undefined){
        $$$cl1.initTypeProto(monday$838$base,'ceylon.time.base::monday',DayOfWeek$base);
    }
    return monday$838$base;
}
exports.$init$monday$838$base=$init$monday$838$base;
$init$monday$838$base();
var monday$839$base=monday$838$base();
var getMonday$base=function(){
    return monday$839$base;
}
exports.getMonday$base=getMonday$base;
function tuesday$840$base(){
    var $$tuesday=new tuesday$840$base.$$;
    DayOfWeek$base((2),$$tuesday);
    var string=$$$cl1.String("tuesday",7);
    $$$cl1.defineAttr($$tuesday,'string',function(){return string;});
    $$$cl1.defineAttr($$tuesday,'predecessor',function(){return getMonday$base();});
    $$$cl1.defineAttr($$tuesday,'successor',function(){return getWednesday$base();});
    return $$tuesday;
}
function $init$tuesday$840$base(){
    if (tuesday$840$base.$$===undefined){
        $$$cl1.initTypeProto(tuesday$840$base,'ceylon.time.base::tuesday',DayOfWeek$base);
    }
    return tuesday$840$base;
}
exports.$init$tuesday$840$base=$init$tuesday$840$base;
$init$tuesday$840$base();
var tuesday$841$base=tuesday$840$base();
var getTuesday$base=function(){
    return tuesday$841$base;
}
exports.getTuesday$base=getTuesday$base;
function wednesday$842$base(){
    var $$wednesday=new wednesday$842$base.$$;
    DayOfWeek$base((3),$$wednesday);
    var string=$$$cl1.String("wednesday",9);
    $$$cl1.defineAttr($$wednesday,'string',function(){return string;});
    $$$cl1.defineAttr($$wednesday,'predecessor',function(){return getTuesday$base();});
    $$$cl1.defineAttr($$wednesday,'successor',function(){return getThursday$base();});
    return $$wednesday;
}
function $init$wednesday$842$base(){
    if (wednesday$842$base.$$===undefined){
        $$$cl1.initTypeProto(wednesday$842$base,'ceylon.time.base::wednesday',DayOfWeek$base);
    }
    return wednesday$842$base;
}
exports.$init$wednesday$842$base=$init$wednesday$842$base;
$init$wednesday$842$base();
var wednesday$843$base=wednesday$842$base();
var getWednesday$base=function(){
    return wednesday$843$base;
}
exports.getWednesday$base=getWednesday$base;
function thursday$844$base(){
    var $$thursday=new thursday$844$base.$$;
    DayOfWeek$base((4),$$thursday);
    var string=$$$cl1.String("thursday",8);
    $$$cl1.defineAttr($$thursday,'string',function(){return string;});
    $$$cl1.defineAttr($$thursday,'predecessor',function(){return getWednesday$base();});
    $$$cl1.defineAttr($$thursday,'successor',function(){return getFriday$base();});
    return $$thursday;
}
function $init$thursday$844$base(){
    if (thursday$844$base.$$===undefined){
        $$$cl1.initTypeProto(thursday$844$base,'ceylon.time.base::thursday',DayOfWeek$base);
    }
    return thursday$844$base;
}
exports.$init$thursday$844$base=$init$thursday$844$base;
$init$thursday$844$base();
var thursday$845$base=thursday$844$base();
var getThursday$base=function(){
    return thursday$845$base;
}
exports.getThursday$base=getThursday$base;
function friday$846$base(){
    var $$friday=new friday$846$base.$$;
    DayOfWeek$base((5),$$friday);
    var string=$$$cl1.String("friday",6);
    $$$cl1.defineAttr($$friday,'string',function(){return string;});
    $$$cl1.defineAttr($$friday,'predecessor',function(){return getThursday$base();});
    $$$cl1.defineAttr($$friday,'successor',function(){return getSaturday$base();});
    return $$friday;
}
function $init$friday$846$base(){
    if (friday$846$base.$$===undefined){
        $$$cl1.initTypeProto(friday$846$base,'ceylon.time.base::friday',DayOfWeek$base);
    }
    return friday$846$base;
}
exports.$init$friday$846$base=$init$friday$846$base;
$init$friday$846$base();
var friday$847$base=friday$846$base();
var getFriday$base=function(){
    return friday$847$base;
}
exports.getFriday$base=getFriday$base;
function saturday$848$base(){
    var $$saturday=new saturday$848$base.$$;
    DayOfWeek$base((6),$$saturday);
    var string=$$$cl1.String("saturday",8);
    $$$cl1.defineAttr($$saturday,'string',function(){return string;});
    $$$cl1.defineAttr($$saturday,'predecessor',function(){return getFriday$base();});
    $$$cl1.defineAttr($$saturday,'successor',function(){return getSunday$base();});
    return $$saturday;
}
function $init$saturday$848$base(){
    if (saturday$848$base.$$===undefined){
        $$$cl1.initTypeProto(saturday$848$base,'ceylon.time.base::saturday',DayOfWeek$base);
    }
    return saturday$848$base;
}
exports.$init$saturday$848$base=$init$saturday$848$base;
$init$saturday$848$base();
var saturday$849$base=saturday$848$base();
var getSaturday$base=function(){
    return saturday$849$base;
}
exports.getSaturday$base=getSaturday$base;
function Month$base(integer$850, $$month){
    $init$Month$base();
    if ($$month===undefined)$$month=new Month$base.$$;
    $$month.$$targs$$={Other:{t:Month$base}};
    $$month.$$targs$$={Other:{t:Month$base}};
    $$$cl1.Ordinal($$month);
    $$$cl1.add_type_arg($$month,'Other',{t:Month$base});
    $$$cl1.Comparable($$month);
    $$$cl1.add_type_arg($$month,'Other',{t:Month$base});
    var integer=integer$850;
    $$$cl1.defineAttr($$month,'integer',function(){return integer;});
    function numberOfDays(leapYear$851){
        if(leapYear$851===undefined){leapYear$851=false;}
        
        var case$852=$$month;
        if (case$852===getFebruary$base()) {
            return (opt$853=(leapYear$851?(29):null),opt$853!==null?opt$853:(28));
            var opt$853;
        }else if (case$852===getApril$base() || case$852===getJune$base() || case$852===getSeptember$base() || case$852===getNovember$base()) {
            return (30);
        }else if (case$852===getJanuary$base() || case$852===getMarch$base() || case$852===getMay$base() || case$852===getJuly$base() || case$852===getAugust$base() || case$852===getOctober$base() || case$852===getDecember$base()) {
            return (31);
        }
    }
    $$month.numberOfDays=numberOfDays;
    numberOfDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['numberOfDays']};//numberOfDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Integer}};
    function fisrtDayOfYear(leapYear$854){
        if(leapYear$854===undefined){leapYear$854=false;}
        //assert at Month.ceylon (28:8-28:60)
        var day$855;
        if (!((day$855=getFirstDayOfMonth$base().get($$month.integer.minus((1))))!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists day = firstDayOfMonth[this.integer-1]\' at Month.ceylon (28:14-28:59)'); }
        if((leapYear$854&&$$month.compare(getFebruary$base()).equals($$$cl1.getLarger()))){
            return day$855.plus((1));
        }
        return day$855;
    }
    $$month.fisrtDayOfYear=fisrtDayOfYear;
    fisrtDayOfYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'leapYear',$mt:'prm',$def:1,$t:{t:$$$cl1.Boolean}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['fisrtDayOfYear']};//fisrtDayOfYear.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Boolean},Element:{t:$$$cl1.Boolean}}},Return:{t:$$$cl1.Integer}};
    var compare=function (other$856){
        return $$month.integer.compare(other$856.integer);
    };
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Month$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['compare']};
    $$month.compare=compare;
    var plusMonths=function (number$857){
        return (opt$858=(number$857.equals((0))?$$month:null),opt$858!==null?opt$858:$$month.add(number$857).month);
    };
    plusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['plusMonths']};
    $$month.plusMonths=plusMonths;
    var opt$858;
    var minusMonths=function (number$859){
        return (opt$860=(number$859.equals((0))?$$month:null),opt$860!==null?opt$860:$$month.add((-number$859)).month);
    };
    minusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['minusMonths']};
    $$month.minusMonths=minusMonths;
    var opt$860;
    function Overflow$Month(month$861, years$862, $$overflow$Month){
        $init$Overflow$Month();
        if ($$overflow$Month===undefined)$$overflow$Month=new Overflow$Month.$$;
        $$overflow$Month.$$outer=this;
        var month=month$861;
        $$$cl1.defineAttr($$overflow$Month,'month',function(){return month;});
        var years=years$862;
        $$$cl1.defineAttr($$overflow$Month,'years',function(){return years;});
        return $$overflow$Month;
    }
    Overflow$Month.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$c']['Overflow']};
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
    function add(numberOfMonths$863){
        var next$864=$$month.integer.minus((1)).plus(numberOfMonths$863);
        var nextMonth$865=$$$ct798.floorMod$internal$math(next$864,getMonths$base().perYear);
        //assert at Month.ceylon (61:8-61:53)
        var month$866;
        if (!((month$866=getMonths$base().all.get(nextMonth$865))!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists month = months.all[nextMonth]\' at Month.ceylon (61:15-61:52)'); }
        var years$867=$$$ct798.floorDiv$internal$math(next$864,(12));
        return $$month.Overflow$Month(month$866,years$867);
    }
    $$month.add=add;
    add.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Month$base.Overflow$Month},$ps:[{$nm:'numberOfMonths',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']['$m']['add']};//add.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Month$base.Overflow$Month}};
    return $$month;
}
Month$base.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$cl1.Ordinal,a:{Other:{t:Month$base}}},{t:$$$cl1.Comparable,a:{Other:{t:Month$base}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Month']};
exports.Month$base=Month$base;
function $init$Month$base(){
    if (Month$base.$$===undefined){
        $$$cl1.initTypeProto(Month$base,'ceylon.time.base::Month',$$$cl1.Basic,$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return Month$base;
}
exports.$init$Month$base=$init$Month$base;
$init$Month$base();
var firstDayOfMonth$868$base=$$$cl1.Tuple((1),$$$cl1.Tuple((32),$$$cl1.Tuple((60),$$$cl1.Tuple((91),$$$cl1.Tuple((121),$$$cl1.Tuple((152),$$$cl1.Tuple((182),$$$cl1.Tuple((213),$$$cl1.Tuple((244),$$$cl1.Tuple((274),$$$cl1.Tuple((305),$$$cl1.Tuple((335),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});
var getFirstDayOfMonth$base=function(){return firstDayOfMonth$868$base;};
exports.getFirstDayOfMonth$base=getFirstDayOfMonth$base;
function monthOf$base(month$869){
    
    var case$870=month$869;
    if ($$$cl1.isOfType(month$869,{t:Month$base})) {
        return case$870;
    }else if ($$$cl1.isOfType(month$869,{t:$$$cl1.Integer})) {
        //assert at Month.ceylon (82:8-83:72)
        if (!(((getJanuary$base().integer.compare(case$870)!==$$$cl1.getLarger())&&(case$870.compare(getDecember$base().integer)!==$$$cl1.getLarger())))) { throw $$$cl1.AssertionException('Invalid month, it should be xx,zz,yy: \' january.integer <= month && month <= december.integer \' at Month.ceylon (83:15-83:71)'); }
        //assert at Month.ceylon (84:8-84:49)
        var m$871;
        if (!((m$871=getMonths$base().all.get(case$870.minus((1))))!==null)) { throw $$$cl1.AssertionException('Assertion failed: \' exists m = months.all[month-1] \' at Month.ceylon (84:15-84:48)'); }
        return m$871;
    }
}
exports.monthOf$base=monthOf$base;
monthOf$base.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Month$base},$ps:[{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['monthOf']};//monthOf$base.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]},Element:{ t:'u', l:[{t:$$$cl1.Integer},{t:Month$base}]}}},Return:{t:Month$base}};
function january$872$base(){
    var $$january=new january$872$base.$$;
    Month$base($$$ct798.getGregorian$chronology().january,$$january);
    var string=$$$cl1.String("january",7);
    $$$cl1.defineAttr($$january,'string',function(){return string;});
    $$$cl1.defineAttr($$january,'predecessor',function(){return getDecember$base();});
    $$$cl1.defineAttr($$january,'successor',function(){return getFebruary$base();});
    return $$january;
}
function $init$january$872$base(){
    if (january$872$base.$$===undefined){
        $$$cl1.initTypeProto(january$872$base,'ceylon.time.base::january',Month$base);
    }
    return january$872$base;
}
exports.$init$january$872$base=$init$january$872$base;
$init$january$872$base();
var january$873$base=january$872$base();
var getJanuary$base=function(){
    return january$873$base;
}
exports.getJanuary$base=getJanuary$base;
function february$874$base(){
    var $$february=new february$874$base.$$;
    Month$base($$$ct798.getGregorian$chronology().february,$$february);
    var string=$$$cl1.String("february",8);
    $$$cl1.defineAttr($$february,'string',function(){return string;});
    $$$cl1.defineAttr($$february,'predecessor',function(){return getJanuary$base();});
    $$$cl1.defineAttr($$february,'successor',function(){return getMarch$base();});
    return $$february;
}
function $init$february$874$base(){
    if (february$874$base.$$===undefined){
        $$$cl1.initTypeProto(february$874$base,'ceylon.time.base::february',Month$base);
    }
    return february$874$base;
}
exports.$init$february$874$base=$init$february$874$base;
$init$february$874$base();
var february$875$base=february$874$base();
var getFebruary$base=function(){
    return february$875$base;
}
exports.getFebruary$base=getFebruary$base;
function march$876$base(){
    var $$march=new march$876$base.$$;
    Month$base($$$ct798.getGregorian$chronology().march,$$march);
    var string=$$$cl1.String("march",5);
    $$$cl1.defineAttr($$march,'string',function(){return string;});
    $$$cl1.defineAttr($$march,'predecessor',function(){return getFebruary$base();});
    $$$cl1.defineAttr($$march,'successor',function(){return getApril$base();});
    return $$march;
}
function $init$march$876$base(){
    if (march$876$base.$$===undefined){
        $$$cl1.initTypeProto(march$876$base,'ceylon.time.base::march',Month$base);
    }
    return march$876$base;
}
exports.$init$march$876$base=$init$march$876$base;
$init$march$876$base();
var march$877$base=march$876$base();
var getMarch$base=function(){
    return march$877$base;
}
exports.getMarch$base=getMarch$base;
function april$878$base(){
    var $$april=new april$878$base.$$;
    Month$base($$$ct798.getGregorian$chronology().april,$$april);
    var string=$$$cl1.String("april",5);
    $$$cl1.defineAttr($$april,'string',function(){return string;});
    $$$cl1.defineAttr($$april,'predecessor',function(){return getMarch$base();});
    $$$cl1.defineAttr($$april,'successor',function(){return getMay$base();});
    return $$april;
}
function $init$april$878$base(){
    if (april$878$base.$$===undefined){
        $$$cl1.initTypeProto(april$878$base,'ceylon.time.base::april',Month$base);
    }
    return april$878$base;
}
exports.$init$april$878$base=$init$april$878$base;
$init$april$878$base();
var april$879$base=april$878$base();
var getApril$base=function(){
    return april$879$base;
}
exports.getApril$base=getApril$base;
function may$880$base(){
    var $$may=new may$880$base.$$;
    Month$base((5),$$may);
    var string=$$$cl1.String("may",3);
    $$$cl1.defineAttr($$may,'string',function(){return string;});
    $$$cl1.defineAttr($$may,'predecessor',function(){return getApril$base();});
    $$$cl1.defineAttr($$may,'successor',function(){return getJune$base();});
    return $$may;
}
function $init$may$880$base(){
    if (may$880$base.$$===undefined){
        $$$cl1.initTypeProto(may$880$base,'ceylon.time.base::may',Month$base);
    }
    return may$880$base;
}
exports.$init$may$880$base=$init$may$880$base;
$init$may$880$base();
var may$881$base=may$880$base();
var getMay$base=function(){
    return may$881$base;
}
exports.getMay$base=getMay$base;
function june$882$base(){
    var $$june=new june$882$base.$$;
    Month$base($$$ct798.getGregorian$chronology().june,$$june);
    var string=$$$cl1.String("june",4);
    $$$cl1.defineAttr($$june,'string',function(){return string;});
    $$$cl1.defineAttr($$june,'predecessor',function(){return getMay$base();});
    $$$cl1.defineAttr($$june,'successor',function(){return getJuly$base();});
    return $$june;
}
function $init$june$882$base(){
    if (june$882$base.$$===undefined){
        $$$cl1.initTypeProto(june$882$base,'ceylon.time.base::june',Month$base);
    }
    return june$882$base;
}
exports.$init$june$882$base=$init$june$882$base;
$init$june$882$base();
var june$883$base=june$882$base();
var getJune$base=function(){
    return june$883$base;
}
exports.getJune$base=getJune$base;
function july$884$base(){
    var $$july=new july$884$base.$$;
    Month$base($$$ct798.getGregorian$chronology().july,$$july);
    var string=$$$cl1.String("july",4);
    $$$cl1.defineAttr($$july,'string',function(){return string;});
    $$$cl1.defineAttr($$july,'predecessor',function(){return getJune$base();});
    $$$cl1.defineAttr($$july,'successor',function(){return getAugust$base();});
    return $$july;
}
function $init$july$884$base(){
    if (july$884$base.$$===undefined){
        $$$cl1.initTypeProto(july$884$base,'ceylon.time.base::july',Month$base);
    }
    return july$884$base;
}
exports.$init$july$884$base=$init$july$884$base;
$init$july$884$base();
var july$885$base=july$884$base();
var getJuly$base=function(){
    return july$885$base;
}
exports.getJuly$base=getJuly$base;
function august$886$base(){
    var $$august=new august$886$base.$$;
    Month$base($$$ct798.getGregorian$chronology().august,$$august);
    var string=$$$cl1.String("august",6);
    $$$cl1.defineAttr($$august,'string',function(){return string;});
    $$$cl1.defineAttr($$august,'predecessor',function(){return getJuly$base();});
    $$$cl1.defineAttr($$august,'successor',function(){return getSeptember$base();});
    return $$august;
}
function $init$august$886$base(){
    if (august$886$base.$$===undefined){
        $$$cl1.initTypeProto(august$886$base,'ceylon.time.base::august',Month$base);
    }
    return august$886$base;
}
exports.$init$august$886$base=$init$august$886$base;
$init$august$886$base();
var august$887$base=august$886$base();
var getAugust$base=function(){
    return august$887$base;
}
exports.getAugust$base=getAugust$base;
function september$888$base(){
    var $$september=new september$888$base.$$;
    Month$base($$$ct798.getGregorian$chronology().september,$$september);
    var string=$$$cl1.String("september",9);
    $$$cl1.defineAttr($$september,'string',function(){return string;});
    $$$cl1.defineAttr($$september,'predecessor',function(){return getAugust$base();});
    $$$cl1.defineAttr($$september,'successor',function(){return getOctober$base();});
    return $$september;
}
function $init$september$888$base(){
    if (september$888$base.$$===undefined){
        $$$cl1.initTypeProto(september$888$base,'ceylon.time.base::september',Month$base);
    }
    return september$888$base;
}
exports.$init$september$888$base=$init$september$888$base;
$init$september$888$base();
var september$889$base=september$888$base();
var getSeptember$base=function(){
    return september$889$base;
}
exports.getSeptember$base=getSeptember$base;
function october$890$base(){
    var $$october=new october$890$base.$$;
    Month$base($$$ct798.getGregorian$chronology().october,$$october);
    var string=$$$cl1.String("october",7);
    $$$cl1.defineAttr($$october,'string',function(){return string;});
    $$$cl1.defineAttr($$october,'predecessor',function(){return getSeptember$base();});
    $$$cl1.defineAttr($$october,'successor',function(){return getNovember$base();});
    return $$october;
}
function $init$october$890$base(){
    if (october$890$base.$$===undefined){
        $$$cl1.initTypeProto(october$890$base,'ceylon.time.base::october',Month$base);
    }
    return october$890$base;
}
exports.$init$october$890$base=$init$october$890$base;
$init$october$890$base();
var october$891$base=october$890$base();
var getOctober$base=function(){
    return october$891$base;
}
exports.getOctober$base=getOctober$base;
function november$892$base(){
    var $$november=new november$892$base.$$;
    Month$base($$$ct798.getGregorian$chronology().november,$$november);
    var string=$$$cl1.String("november",8);
    $$$cl1.defineAttr($$november,'string',function(){return string;});
    $$$cl1.defineAttr($$november,'predecessor',function(){return getOctober$base();});
    $$$cl1.defineAttr($$november,'successor',function(){return getDecember$base();});
    return $$november;
}
function $init$november$892$base(){
    if (november$892$base.$$===undefined){
        $$$cl1.initTypeProto(november$892$base,'ceylon.time.base::november',Month$base);
    }
    return november$892$base;
}
exports.$init$november$892$base=$init$november$892$base;
$init$november$892$base();
var november$893$base=november$892$base();
var getNovember$base=function(){
    return november$893$base;
}
exports.getNovember$base=getNovember$base;
function december$894$base(){
    var $$december=new december$894$base.$$;
    Month$base($$$ct798.getGregorian$chronology().december,$$december);
    var string=$$$cl1.String("december",8);
    $$$cl1.defineAttr($$december,'string',function(){return string;});
    $$$cl1.defineAttr($$december,'predecessor',function(){return getNovember$base();});
    $$$cl1.defineAttr($$december,'successor',function(){return getJanuary$base();});
    return $$december;
}
function $init$december$894$base(){
    if (december$894$base.$$===undefined){
        $$$cl1.initTypeProto(december$894$base,'ceylon.time.base::december',Month$base);
    }
    return december$894$base;
}
exports.$init$december$894$base=$init$december$894$base;
$init$december$894$base();
var december$895$base=december$894$base();
var getDecember$base=function(){
    return december$895$base;
}
exports.getDecember$base=getDecember$base;
function PeriodBehavior$base($$periodBehavior){
}
PeriodBehavior$base.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Self:{'satisfies':[{t:PeriodBehavior$base,a:{Self:'Self'}},{t:ReadablePeriod$base}]}},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['PeriodBehavior']};
exports.PeriodBehavior$base=PeriodBehavior$base;
function $init$PeriodBehavior$base(){
    if (PeriodBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(PeriodBehavior$base,'ceylon.time.base::PeriodBehavior');
    }
    return PeriodBehavior$base;
}
exports.$init$PeriodBehavior$base=$init$PeriodBehavior$base;
$init$PeriodBehavior$base();
function Range$base($$range){
    $$$cl1.Iterable($$range);
    $$$cl1.add_type_arg($$range,'Absent',{t:$$$cl1.Null});
    function equals(other$896){
        var other$897;
        if($$$cl1.isOfType((other$897=other$896),{t:Range$base,a:{StepBy:$$range.$$targs$$.StepBy,Self:$$range.$$targs$$.Self,Element:$$range.$$targs$$.Element}})){
            return ($$range.from.equals(other$897.from)&&$$range.to.equals(other$897.to));
        }
        return false;
    }
    $$range.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.$default(),$$$cl1.actual()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Range']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
}
Range$base.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Element'}},{t:$$$cl1.Ordinal,a:{Other:'Element'}}]},Self:{'var':'in','satisfies':[{t:Range$base,a:{StepBy:'StepBy',Self:'Self',Element:'Element'}}]},StepBy:{}},satisfies:[{t:$$$cl1.Iterable,a:{Absent:{t:$$$cl1.Null},Element:'Element'}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['Range']};
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
}
ReadableDate$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableDate']};
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
ReadableDateTime$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:ReadableDate$base},{t:ReadableTime$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableDateTime']};
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
ReadableDuration$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableDuration']};
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
}
ReadableInstant$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableInstant']};
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
}
ReadablePeriod$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:ReadableDatePeriod$base},{t:ReadableTimePeriod$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadablePeriod']};
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
}
ReadableDatePeriod$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableDatePeriod']};
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
}
ReadableTimePeriod$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableTimePeriod']};
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
}
ReadableTime$base.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.by([$$$cl1.String("Diego Coronel",13),$$$cl1.String("Roland Tepp",11)].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.String}})),$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['ReadableTime']};
exports.ReadableTime$base=ReadableTime$base;
function $init$ReadableTime$base(){
    if (ReadableTime$base.$$===undefined){
        $$$cl1.initTypeProto(ReadableTime$base,'ceylon.time.base::ReadableTime');
    }
    return ReadableTime$base;
}
exports.$init$ReadableTime$base=$init$ReadableTime$base;
$init$ReadableTime$base();
function TimeBehavior$base($$timeBehavior){
}
TimeBehavior$base.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Element:{'satisfies':[{t:ReadableTime$base}]}},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.base',d:$$METAMODEL$$['ceylon.time.base']['TimeBehavior']};
exports.TimeBehavior$base=TimeBehavior$base;
function $init$TimeBehavior$base(){
    if (TimeBehavior$base.$$===undefined){
        $$$cl1.initTypeProto(TimeBehavior$base,'ceylon.time.base::TimeBehavior');
    }
    return TimeBehavior$base;
}
exports.$init$TimeBehavior$base=$init$TimeBehavior$base;
$init$TimeBehavior$base();
function rd$chronology(t$898){
    var epoch$899=(0);
    return t$898.minus(epoch$899);
}
exports.rd$chronology=rd$chronology;
rd$chronology.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'t',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['rd']};//rd$chronology.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
function unixTime$900$chronology(){
    var $$unixTime=new unixTime$900$chronology.$$;
    var epoch=getGregorian$chronology().fixedFrom($$$cl1.Tuple((1970),$$$cl1.Tuple((1),$$$cl1.Tuple((1),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
    $$$cl1.defineAttr($$unixTime,'epoch',function(){return epoch;});
    var epochTime=$$unixTime.epoch.times($$$ct798.getMilliseconds$base().perDay);
    $$$cl1.defineAttr($$unixTime,'epochTime',function(){return epochTime;});
    function fixedFromTime(time$901){
        return $$$ct798.floorDiv$internal$math(time$901,$$$ct798.getMilliseconds$base().perDay).plus($$unixTime.epoch);
    }
    $$unixTime.fixedFromTime=fixedFromTime;
    fixedFromTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['unixTime']['$m']['fixedFromTime']};//fixedFromTime.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function timeFromFixed(date$902){
        return date$902.minus($$unixTime.epoch).times($$$ct798.getMilliseconds$base().perDay);
    }
    $$unixTime.timeFromFixed=timeFromFixed;
    timeFromFixed.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['unixTime']['$m']['timeFromFixed']};//timeFromFixed.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function timeOfDay(time$903){
        return $$$ct798.floorMod$internal$math(time$903,$$$ct798.getMilliseconds$base().perDay);
    }
    $$unixTime.timeOfDay=timeOfDay;
    timeOfDay.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['unixTime']['$m']['timeOfDay']};//timeOfDay.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    return $$unixTime;
}
function $init$unixTime$900$chronology(){
    if (unixTime$900$chronology.$$===undefined){
        $$$cl1.initTypeProto(unixTime$900$chronology,'ceylon.time.chronology::unixTime',$$$cl1.Basic);
    }
    return unixTime$900$chronology;
}
exports.$init$unixTime$900$chronology=$init$unixTime$900$chronology;
$init$unixTime$900$chronology();
var unixTime$904$chronology=unixTime$900$chronology();
var getUnixTime$chronology=function(){
    return unixTime$904$chronology;
}
exports.getUnixTime$chronology=getUnixTime$chronology;
function Chronology$chronology($$chronology){
}
Chronology$chronology.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Fields:{'satisfies':[{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}]}},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['Chronology']};
exports.Chronology$chronology=Chronology$chronology;
function $init$Chronology$chronology(){
    if (Chronology$chronology.$$===undefined){
        $$$cl1.initTypeProto(Chronology$chronology,'ceylon.time.chronology::Chronology');
    }
    return Chronology$chronology;
}
exports.$init$Chronology$chronology=$init$Chronology$chronology;
$init$Chronology$chronology();
function LeapYear$chronology($$leapYear){
}
LeapYear$chronology.$$metamodel$$={mod:$$METAMODEL$$,$tp:{Self:{'satisfies':[{t:Chronology$chronology,a:{Fields:'Fields'}}]},Fields:{'satisfies':[{t:$$$cl1.Sequential,a:{Element:{t:$$$cl1.Anything}}}]}},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['LeapYear']};
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
    if ($$gregorianCalendar===undefined)$$gregorianCalendar=new GregorianCalendar$chronology.$$;
    $$gregorianCalendar.$$targs$$={Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}};
    $$gregorianCalendar.$$targs$$={Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Self:{t:GregorianCalendar$chronology}};
    Chronology$chronology($$gregorianCalendar);
    $$$cl1.add_type_arg($$gregorianCalendar,'Fields',{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}});
    LeapYear$chronology($$gregorianCalendar);
    $$$cl1.add_type_arg($$gregorianCalendar,'Fields',{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}});
    $$$cl1.add_type_arg($$gregorianCalendar,'Self',{t:GregorianCalendar$chronology});
    return $$gregorianCalendar;
}
GregorianCalendar$chronology.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Chronology$chronology,a:{Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}},{t:LeapYear$chronology,a:{Fields:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Self:{t:GregorianCalendar$chronology}}}],$an:function(){return[$$$cl1.abstract(),$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['GregorianCalendar']};
exports.GregorianCalendar$chronology=GregorianCalendar$chronology;
function $init$GregorianCalendar$chronology(){
    if (GregorianCalendar$chronology.$$===undefined){
        $$$cl1.initTypeProto(GregorianCalendar$chronology,'ceylon.time.chronology::GregorianCalendar',$$$cl1.Basic,$init$Chronology$chronology(),$init$LeapYear$chronology());
    }
    return GregorianCalendar$chronology;
}
exports.$init$GregorianCalendar$chronology=$init$GregorianCalendar$chronology;
$init$GregorianCalendar$chronology();
function gregorian$905$chronology(){
    var $$gregorian=new gregorian$905$chronology.$$;
    GregorianCalendar$chronology($$gregorian);
    var epoch=rd$chronology((1));
    $$$cl1.defineAttr($$gregorian,'epoch',function(){return epoch;});
    var january=(1);
    $$$cl1.defineAttr($$gregorian,'january',function(){return january;});
    var february=(2);
    $$$cl1.defineAttr($$gregorian,'february',function(){return february;});
    var march=(3);
    $$$cl1.defineAttr($$gregorian,'march',function(){return march;});
    var april=(4);
    $$$cl1.defineAttr($$gregorian,'april',function(){return april;});
    var may=(5);
    $$$cl1.defineAttr($$gregorian,'may',function(){return may;});
    var june=(6);
    $$$cl1.defineAttr($$gregorian,'june',function(){return june;});
    var july=(7);
    $$$cl1.defineAttr($$gregorian,'july',function(){return july;});
    var august=(8);
    $$$cl1.defineAttr($$gregorian,'august',function(){return august;});
    var september=(9);
    $$$cl1.defineAttr($$gregorian,'september',function(){return september;});
    var october=(10);
    $$$cl1.defineAttr($$gregorian,'october',function(){return october;});
    var november=(11);
    $$$cl1.defineAttr($$gregorian,'november',function(){return november;});
    var december=(12);
    $$$cl1.defineAttr($$gregorian,'december',function(){return december;});
    function leapYear(year$906){
        return (opt$907=(year$906.remainder((100)).equals((0))?year$906.remainder((400)).equals((0)):null),opt$907!==null?opt$907:year$906.remainder((4)).equals((0)));
        var opt$907;
    }
    $$gregorian.leapYear=leapYear;
    leapYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['leapYear']};//leapYear.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Boolean}};
    function fixed$908(year$909,month$910,day$911){
        return $$gregorian.epoch.minus((1)).plus((365).times(year$909.minus((1)))).plus($$$ct798.floor$internal$math(year$909.minus((1)).divided($$$cl1.Float(4.0)))).minus($$$ct798.floor$internal$math(year$909.minus((1)).divided($$$cl1.Float(100.0)))).plus($$$ct798.floor$internal$math(year$909.minus((1)).divided($$$cl1.Float(400.0)))).plus($$$ct798.floor$internal$math((367).times(month$910).minus((362)).divided($$$cl1.Float(12.0)))).plus((opt$912=(month$910.compare((2)).equals($$$cl1.getLarger())?(opt$913=($$gregorian.leapYear(year$909)?(-(1)):null),opt$913!==null?opt$913:(-(2))):null),opt$912!==null?opt$912:(0))).plus(day$911);
        var opt$912,opt$913;
    };fixed$908.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['fixed']};//fixed$908.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function fixedFrom(date$914){
        return $$$cl1.unflatten($$$cl1.$JsCallable(fixed$908,[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer}}],{Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}}),{Args:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}})(date$914,{Args:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}});
    }
    $$gregorian.fixedFrom=fixedFrom;
    fixedFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['fixedFrom']};//fixedFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}},Return:{t:$$$cl1.Integer}};
    function checkDate(date$915){
        //assert at Chronology.ceylon (115:8-116:68)
        if (!((($$$ct798.getYears$base().minimum.compare(date$915.get((0)))!==$$$cl1.getLarger())&&(date$915.get((0)).compare($$$ct798.getYears$base().maximum)!==$$$cl1.getLarger())))) { throw $$$cl1.AssertionException('Invalid year value: \'years.minimum <= date[0] && date[0] <= years.maximum\' at Chronology.ceylon (116:14-116:67)'); }
        //assert at Chronology.ceylon (118:8-119:53)
        if (!(date$915.equals($$gregorian.dateFrom($$gregorian.fixedFrom(date$915))))) { throw $$$cl1.AssertionException('Invalid date value: \' date == dateFrom( fixedFrom(date) ) \' at Chronology.ceylon (119:14-119:52)'); }
    }
    $$gregorian.checkDate=checkDate;
    checkDate.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['checkDate']};//checkDate.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}}},Return:{t:$$$cl1.Anything}};
    function newYear(year$916){
        return fixed$908(year$916,$$gregorian.january,(1));
    }
    $$gregorian.newYear=newYear;
    newYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['newYear']};//newYear.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function yearEnd(year$917){
        return fixed$908(year$917,$$gregorian.december,(31));
    }
    $$gregorian.yearEnd=yearEnd;
    yearEnd.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['yearEnd']};//yearEnd.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function yearFrom(fixed$918){
        var d0$919=fixed$918.minus($$gregorian.epoch);
        var n400$920=$$$ct798.floorDiv$internal$math(d0$919,$$$ct798.getDays$base().perFourCenturies);
        var d1$921=$$$ct798.floorMod$internal$math(d0$919,$$$ct798.getDays$base().perFourCenturies);
        var n100$922=$$$ct798.floorDiv$internal$math(d1$921,$$$ct798.getDays$base().perCentury);
        var d2$923=$$$ct798.floorMod$internal$math(d1$921,$$$ct798.getDays$base().perCentury);
        var n4$924=$$$ct798.floorDiv$internal$math(d2$923,$$$ct798.getDays$base().inFourYears);
        var d3$925=$$$ct798.floorMod$internal$math(d2$923,$$$ct798.getDays$base().inFourYears);
        var n1$926=$$$ct798.floorDiv$internal$math(d3$925,$$$ct798.getDays$base().perYear());
        var year$927=(400).times(n400$920).plus((100).times(n100$922)).plus((4).times(n4$924)).plus(n1$926);
        return (opt$928=((n100$922.equals((4))||n1$926.equals((4)))?year$927:null),opt$928!==null?opt$928:year$927.plus((1)));
        var opt$928;
    }
    $$gregorian.yearFrom=yearFrom;
    yearFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'fixed',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['yearFrom']};//yearFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function dateFrom(date$929){
        var year$930=$$gregorian.yearFrom(date$929);
        var priorDays$931=date$929.minus($$gregorian.newYear(year$930));
        var correction$932=(opt$933=(date$929.compare(fixed$908(year$930,$$gregorian.march,(1))).equals($$$cl1.getSmaller())?(0):null),opt$933!==null?opt$933:(opt$934=($$gregorian.leapYear(year$930)?(1):null),opt$934!==null?opt$934:(2)));
        var opt$933,opt$934;
        var month$935=$$$ct798.floorDiv$internal$math((12).times(priorDays$931.plus(correction$932)).plus((373)),(367));
        var day$936=(1).plus(date$929).minus(fixed$908(year$930,month$935,(1)));
        return $$$cl1.Tuple(year$930,$$$cl1.Tuple(month$935,$$$cl1.Tuple(day$936,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}});
    }
    $$gregorian.dateFrom=dateFrom;
    dateFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['dateFrom']};//dateFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}}};
    function monthFrom(date$937){
        return $$gregorian.dateFrom(date$937).get((1));
    }
    $$gregorian.monthFrom=monthFrom;
    monthFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['monthFrom']};//monthFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function dayFrom(date$938){
        return $$gregorian.dateFrom(date$938).get((2));
    }
    $$gregorian.dayFrom=dayFrom;
    dayFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['dayFrom']};//dayFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    function dayOfWeekFrom(date$939){
        return $$$ct798.floorMod$internal$math(date$939,(7));
    }
    $$gregorian.dayOfWeekFrom=dayOfWeekFrom;
    dayOfWeekFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.chronology',d:$$METAMODEL$$['ceylon.time.chronology']['gregorian']['$m']['dayOfWeekFrom']};//dayOfWeekFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
    return $$gregorian;
}
function $init$gregorian$905$chronology(){
    if (gregorian$905$chronology.$$===undefined){
        $$$cl1.initTypeProto(gregorian$905$chronology,'ceylon.time.chronology::gregorian',GregorianCalendar$chronology);
    }
    return gregorian$905$chronology;
}
exports.$init$gregorian$905$chronology=$init$gregorian$905$chronology;
$init$gregorian$905$chronology();
var gregorian$940$chronology=gregorian$905$chronology();
var getGregorian$chronology=function(){
    return gregorian$940$chronology;
}
exports.getGregorian$chronology=getGregorian$chronology;
function Clock($$clock){
}
Clock.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Clock']};
exports.Clock=Clock;
function $init$Clock(){
    if (Clock.$$===undefined){
        $$$cl1.initTypeProto(Clock,'ceylon.time::Clock');
    }
    return Clock;
}
exports.$init$Clock=$init$Clock;
$init$Clock();
function systemTime$941(){
    var $$systemTime=new systemTime$941.$$;
    Clock($$systemTime);
    var millis=function (){
        return $$$cl1.getProcess().milliseconds;
    };
    millis.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['systemTime']['$m']['millis']};
    $$systemTime.millis=millis;
    var instant=function (){
        return Instant($$systemTime.millis());
    };
    instant.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['systemTime']['$m']['instant']};
    $$systemTime.instant=instant;
    return $$systemTime;
}
function $init$systemTime$941(){
    if (systemTime$941.$$===undefined){
        $$$cl1.initTypeProto(systemTime$941,'ceylon.time::systemTime',$$$cl1.Basic,$init$Clock());
    }
    return systemTime$941;
}
exports.$init$systemTime$941=$init$systemTime$941;
$init$systemTime$941();
var systemTime$942=systemTime$941();
var getSystemTime=function(){
    return systemTime$942;
}
exports.getSystemTime=getSystemTime;
function fixedTime(instant$943){
    
    var case$944=instant$943;
    if ($$$cl1.isOfType(instant$943,{t:Instant})) {
        return FixedInstant(case$944);
    }else if ($$$cl1.isOfType(instant$943,{t:$$$cl1.Integer})) {
        return FixedMilliseconds(case$944);
    }
}
exports.fixedTime=fixedTime;
fixedTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'instant',$mt:'prm',$t:{ t:'u', l:[{t:Instant},{t:$$$cl1.Integer}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['fixedTime']};//fixedTime.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:Instant},{t:$$$cl1.Integer}]},Element:{ t:'u', l:[{t:Instant},{t:$$$cl1.Integer}]}}},Return:{t:Clock}};
function FixedInstant(fixedInstant$945, $$fixedInstant){
    $init$FixedInstant();
    if ($$fixedInstant===undefined)$$fixedInstant=new FixedInstant.$$;
    $$fixedInstant.fixedInstant$945=fixedInstant$945;
    Clock($$fixedInstant);
    var millis=function (){
        return fixedInstant$945.millisecondsOfEra;
    };
    millis.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedInstant']['$m']['millis']};
    $$fixedInstant.millis=millis;
    var instant=function (){
        return fixedInstant$945;
    };
    instant.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedInstant']['$m']['instant']};
    $$fixedInstant.instant=instant;
    return $$fixedInstant;
}
FixedInstant.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedInstant']};
function $init$FixedInstant(){
    if (FixedInstant.$$===undefined){
        $$$cl1.initTypeProto(FixedInstant,'ceylon.time::FixedInstant',$$$cl1.Basic,$init$Clock());
    }
    return FixedInstant;
}
exports.$init$FixedInstant=$init$FixedInstant;
$init$FixedInstant();
function FixedMilliseconds(fixedMilliseconds$946, $$fixedMilliseconds){
    $init$FixedMilliseconds();
    if ($$fixedMilliseconds===undefined)$$fixedMilliseconds=new FixedMilliseconds.$$;
    $$fixedMilliseconds.fixedMilliseconds$946=fixedMilliseconds$946;
    Clock($$fixedMilliseconds);
    var millis=function (){
        return fixedMilliseconds$946;
    };
    millis.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedMilliseconds']['$m']['millis']};
    $$fixedMilliseconds.millis=millis;
    var instant=function (){
        return Instant(fixedMilliseconds$946);
    };
    instant.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedMilliseconds']['$m']['instant']};
    $$fixedMilliseconds.instant=instant;
    return $$fixedMilliseconds;
}
FixedMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['FixedMilliseconds']};
function $init$FixedMilliseconds(){
    if (FixedMilliseconds.$$===undefined){
        $$$cl1.initTypeProto(FixedMilliseconds,'ceylon.time::FixedMilliseconds',$$$cl1.Basic,$init$Clock());
    }
    return FixedMilliseconds;
}
exports.$init$FixedMilliseconds=$init$FixedMilliseconds;
$init$FixedMilliseconds();
var offsetTime=function (baseClock$947,offset$948){
    return OffsetClock(baseClock$947,offset$948);
};
offsetTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Clock},$ps:[{$nm:'baseClock',$mt:'prm',$t:{t:Clock}},{$nm:'offset',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['offsetTime']};
exports.offsetTime=offsetTime;
function OffsetClock(baseClock$949, offset$950, $$offsetClock){
    $init$OffsetClock();
    if ($$offsetClock===undefined)$$offsetClock=new OffsetClock.$$;
    $$offsetClock.baseClock$949=baseClock$949;
    $$offsetClock.offset$950=offset$950;
    Clock($$offsetClock);
    var instant=function (){
        return Instant($$offsetClock.millis());
    };
    instant.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['OffsetClock']['$m']['instant']};
    $$offsetClock.instant=instant;
    var millis=function (){
        return baseClock$949.millis().plus(offset$950);
    };
    millis.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['OffsetClock']['$m']['millis']};
    $$offsetClock.millis=millis;
    return $$offsetClock;
}
OffsetClock.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:Clock}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['OffsetClock']};
function $init$OffsetClock(){
    if (OffsetClock.$$===undefined){
        $$$cl1.initTypeProto(OffsetClock,'ceylon.time::OffsetClock',$$$cl1.Basic,$init$Clock());
    }
    return OffsetClock;
}
exports.$init$OffsetClock=$init$OffsetClock;
$init$OffsetClock();
function Date($$date){
    $$$ct798.ReadableDate$base($$date);
    $$$ct798.DateBehavior$base($$date);
    $$$cl1.add_type_arg($$date,'Element',{t:Date});
    $$$cl1.Ordinal($$date);
    $$$cl1.add_type_arg($$date,'Other',{t:Date});
    $$$cl1.Comparable($$date);
    $$$cl1.add_type_arg($$date,'Other',{t:Date});
}
Date.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:$$$ct798.ReadableDate$base},{t:$$$ct798.DateBehavior$base,a:{Element:{t:Date}}},{t:$$$cl1.Ordinal,a:{Other:{t:Date}}},{t:$$$cl1.Comparable,a:{Other:{t:Date}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Date']};
exports.Date=Date;
function $init$Date(){
    if (Date.$$===undefined){
        $$$cl1.initTypeProto(Date,'ceylon.time::Date',$$$ct798.$init$ReadableDate$base(),$$$ct798.$init$DateBehavior$base(),$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return Date;
}
exports.$init$Date=$init$Date;
$init$Date();
function today(clock$951,zone$952){
    if(clock$951===undefined){clock$951=getSystemTime();}
    if(zone$952===undefined){zone$952=null;}
    return clock$951.instant().date(zone$952);
}
exports.today=today;
today.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{t:Clock}},{$nm:'zone',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['today']};//today.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}},Return:{t:Date}};
function date(year$953,month$954,day$955){
    return $$$ct798.gregorianDate$internal(year$953,month$954,day$955);
}
exports.date=date;
date.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct798.Month$base}]}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['date']};//date.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Date}};
function DateRange(from$956, to$957, step$958, $$dateRange){
    $init$DateRange();
    if ($$dateRange===undefined)$$dateRange=new DateRange.$$;
    $$dateRange.$$targs$$={StepBy:{t:$$$ct798.UnitOfDate$base},Self:{t:DateRange},Element:{t:Date}};
    if(step$958===undefined){step$958=$$$ct798.getDays$base();}
    $$$ct798.Range$base($$dateRange);
    $$$cl1.add_type_arg($$dateRange,'StepBy',{t:$$$ct798.UnitOfDate$base});
    $$$cl1.add_type_arg($$dateRange,'Self',{t:DateRange});
    $$$cl1.add_type_arg($$dateRange,'Element',{t:Date});
    $$dateRange.equals$$ceylon$time$base$Range=$$dateRange.equals;
    var from=from$956;
    $$$cl1.defineAttr($$dateRange,'from',function(){return from;});
    var to=to$957;
    $$$cl1.defineAttr($$dateRange,'to',function(){return to;});
    var step=step$958;
    $$$cl1.defineAttr($$dateRange,'step',function(){return step;});
    $$$cl1.defineAttr($$dateRange,'period',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$dateRange.from.periodTo($$dateRange.to);
    });
    $$$cl1.defineAttr($$dateRange,'duration',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Duration($$dateRange.to.dayOfEra.minus($$dateRange.from.dayOfEra).times($$$ct798.getMilliseconds$base().perDay));
    });
    function equals(other$959){
        return $$dateRange.equals$$ceylon$time$base$Range(other$959);
    }
    $$dateRange.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function overlap(other$960){
        var response$961=$$$ct798.overlap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),$$$cl1.Tuple(other$960.from,$$$cl1.Tuple(other$960.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),{Value:{t:Date}});
        var response$962;
        if($$$cl1.isOfType((response$962=response$961),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}})){
            return DateRange(response$962.get((0)),response$962.get((1)));
        }
        //assert at DateRange.ceylon (28:8-28:34)
        var response$963;
        if (!($$$cl1.isOfType((response$963=response$961),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at DateRange.ceylon (28:14-28:33)'); }
        return response$963;
    }
    $$dateRange.overlap=overlap;
    overlap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['overlap']};//overlap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateRange},Element:{t:DateRange}}},Return:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]}};
    function gap(other$964){
        var response$965=$$$ct798.gap$internal($$$cl1.Tuple($$dateRange.from,$$$cl1.Tuple($$dateRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),$$$cl1.Tuple(other$964.from,$$$cl1.Tuple(other$964.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}),{Value:{t:Date}});
        var response$966;
        if($$$cl1.isOfType((response$966=response$965),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Date},Element:{t:Date}}},First:{t:Date},Element:{t:Date}}})){
            return DateRange(response$966.get((0)),response$966.get((1)));
        }
        //assert at DateRange.ceylon (37:8-37:34)
        var response$967;
        if (!($$$cl1.isOfType((response$967=response$965),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at DateRange.ceylon (37:14-37:33)'); }
        return response$967;
    }
    $$dateRange.gap=gap;
    gap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['gap']};//gap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateRange},Element:{t:DateRange}}},Return:{ t:'u', l:[{t:DateRange},{t:$$$cl1.Empty}]}};
    function iterator(){
        function listIterator$968($$targs$$){
            var $$listIterator$968=new listIterator$968.$$;
            $$listIterator$968.$$targs$$=$$targs$$;
            $$$cl1.Iterator($$listIterator$968);
            $$$cl1.add_type_arg($$listIterator$968,'Element',{t:Date});
            var count$969=(0);
            $$$cl1.defineAttr($$listIterator$968,'count$969',function(){return count$969;},function(count$970){return count$969=count$970;});
            function next(){
                var date$971=(opt$972=($$dateRange.from.compare($$dateRange.to).equals($$$cl1.getLarger())?previousByStep$973((oldcount$974=count$969,count$969=oldcount$974.successor,oldcount$974)):null),opt$972!==null?opt$972:nextByStep$975((oldcount$976=count$969,count$969=oldcount$976.successor,oldcount$976)));
                var opt$972,oldcount$974,oldcount$976;
                var continueLoop$977=(opt$978=(($$dateRange.from.compare($$dateRange.to)!==$$$cl1.getLarger())?(date$971.compare($$dateRange.to)!==$$$cl1.getLarger()):null),opt$978!==null?opt$978:(date$971.compare($$dateRange.to)!==$$$cl1.getSmaller()));
                var opt$978;
                return (opt$979=(continueLoop$977?date$971:null),opt$979!==null?opt$979:$$$cl1.getFinished());
                var opt$979;
            }
            $$listIterator$968.next=next;
            next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Date},{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['iterator']['$o']['listIterator']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:Date},{t:$$$cl1.Finished}]}};
            return $$listIterator$968;
        }
        function $init$listIterator$968(){
            if (listIterator$968.$$===undefined){
                $$$cl1.initTypeProto(listIterator$968,'ceylon.time::DateRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$968;
        }
        $init$listIterator$968();
        var listIterator$980=listIterator$968({Element:{t:Date}});
        var getListIterator$980=function(){
            return listIterator$980;
        }
        return getListIterator$980();
    }
    $$dateRange.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:Date}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:{t:Date}}}};
    function stepBy(step$981){
        return (opt$982=(step$981.equals($$dateRange.step)?$$dateRange:null),opt$982!==null?opt$982:DateRange($$dateRange.from,$$dateRange.to,step$981));
        var opt$982;
    }
    $$dateRange.stepBy=stepBy;
    stepBy.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:$$$ct798.UnitOfDate$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['stepBy']};//stepBy.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.UnitOfDate$base},Element:{t:$$$ct798.UnitOfDate$base}}},Return:{t:DateRange}};
    function nextByStep$975(jump$983){
        if(jump$983===undefined){jump$983=(1);}
        
        var case$984=$$dateRange.step;
        if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfYear$base})) {
            return $$dateRange.from.plusYears(jump$983);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfMonth$base})) {
            return $$dateRange.from.plusMonths(jump$983);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfDay$base})) {
            return $$dateRange.from.plusDays(jump$983);
        }
    };nextByStep$975.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['nextByStep']};//nextByStep$975.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Date}};
    function previousByStep$973(jump$985){
        if(jump$985===undefined){jump$985=(1);}
        
        var case$986=$$dateRange.step;
        if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfYear$base})) {
            return $$dateRange.from.minusYears(jump$985);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfMonth$base})) {
            return $$dateRange.from.minusMonths(jump$985);
        }else if ($$$cl1.isOfType($$dateRange.step,{t:$$$ct798.UnitOfDay$base})) {
            return $$dateRange.from.minusDays(jump$985);
        }
    };previousByStep$973.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']['$m']['previousByStep']};//previousByStep$973.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Date}};
    return $$dateRange;
}
DateRange.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.Range$base,a:{StepBy:{t:$$$ct798.UnitOfDate$base},Self:{t:DateRange},Element:{t:Date}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateRange']};
exports.DateRange=DateRange;
function $init$DateRange(){
    if (DateRange.$$===undefined){
        $$$cl1.initTypeProto(DateRange,'ceylon.time::DateRange',$$$cl1.Basic,$$$ct798.$init$Range$base());
    }
    return DateRange;
}
exports.$init$DateRange=$init$DateRange;
$init$DateRange();
function DateTime($$dateTime){
    $$$ct798.ReadableDateTime$base($$dateTime);
    $$$ct798.DateTimeBehavior$base($$dateTime);
    $$$cl1.add_type_arg($$dateTime,'TimeType',{t:Time});
    $$$cl1.add_type_arg($$dateTime,'DateType',{t:Date});
    $$$cl1.add_type_arg($$dateTime,'Element',{t:DateTime});
    $$$cl1.Ordinal($$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
    $$$cl1.Comparable($$dateTime);
    $$$cl1.add_type_arg($$dateTime,'Other',{t:DateTime});
}
DateTime.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:$$$ct798.ReadableDateTime$base},{t:$$$ct798.DateTimeBehavior$base,a:{TimeType:{t:Time},DateType:{t:Date},Element:{t:DateTime}}},{t:$$$cl1.Ordinal,a:{Other:{t:DateTime}}},{t:$$$cl1.Comparable,a:{Other:{t:DateTime}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTime']};
exports.DateTime=DateTime;
function $init$DateTime(){
    if (DateTime.$$===undefined){
        $$$cl1.initTypeProto(DateTime,'ceylon.time::DateTime',$$$ct798.$init$ReadableDateTime$base(),$$$ct798.$init$DateTimeBehavior$base(),$$$cl1.Ordinal,$$$cl1.Comparable);
    }
    return DateTime;
}
exports.$init$DateTime=$init$DateTime;
$init$DateTime();
function dateTime(year$987,month$988,date$989,hour$990,minutes$991,seconds$992,millis$993){
    if(hour$990===undefined){hour$990=(0);}
    if(minutes$991===undefined){minutes$991=(0);}
    if(seconds$992===undefined){seconds$992=(0);}
    if(millis$993===undefined){millis$993=(0);}
    return $$$ct798.GregorianDateTime$internal(date(year$987,month$988,date$989),time(hour$990,minutes$991,seconds$992,millis$993));
}
exports.dateTime=dateTime;
dateTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct798.Month$base}]}},{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'hour',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['dateTime']};//dateTime.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:DateTime}};
function DateTimeRange(from$994, to$995, step$996, $$dateTimeRange){
    $init$DateTimeRange();
    if ($$dateTimeRange===undefined)$$dateTimeRange=new DateTimeRange.$$;
    $$dateTimeRange.$$targs$$={StepBy:{ t:'u', l:[{t:$$$ct798.UnitOfDate$base},{t:$$$ct798.UnitOfTime$base}]},Self:{t:DateTimeRange},Element:{t:DateTime}};
    if(step$996===undefined){step$996=$$$ct798.getMilliseconds$base();}
    $$$ct798.Range$base($$dateTimeRange);
    $$$cl1.add_type_arg($$dateTimeRange,'Self',{t:DateTimeRange});
    $$$cl1.add_type_arg($$dateTimeRange,'Element',{t:DateTime});
    $$dateTimeRange.equals$$ceylon$time$base$Range=$$dateTimeRange.equals;
    var from=from$994;
    $$$cl1.defineAttr($$dateTimeRange,'from',function(){return from;});
    var to=to$995;
    $$$cl1.defineAttr($$dateTimeRange,'to',function(){return to;});
    var step=step$996;
    $$$cl1.defineAttr($$dateTimeRange,'step',function(){return step;});
    $$$cl1.defineAttr($$dateTimeRange,'period',function(){return $$dateTimeRange.from.periodTo($$dateTimeRange.to);});
    $$$cl1.defineAttr($$dateTimeRange,'duration',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Duration($$dateTimeRange.to.instant().millisecondsOfEra.minus($$dateTimeRange.from.instant().millisecondsOfEra));
    });
    var equals=function (other$997){
        return $$dateTimeRange.equals$$ceylon$time$base$Range(other$997);
    };
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['equals']};
    $$dateTimeRange.equals=equals;
    function overlap(other$998){
        var response$999=$$$ct798.overlap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$998.from,$$$cl1.Tuple(other$998.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
        var response$1000;
        if($$$cl1.isOfType((response$1000=response$999),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})){
            return DateTimeRange(response$1000);
        }
        //assert at DateTimeRange.ceylon (25:8-25:34)
        var response$1001;
        if (!($$$cl1.isOfType((response$1001=response$999),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at DateTimeRange.ceylon (25:14-25:33)'); }
        return response$1001;
    }
    $$dateTimeRange.overlap=overlap;
    overlap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateTimeRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['overlap']};//overlap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTimeRange},Element:{t:DateTimeRange}}},Return:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]}};
    function gap(other$1002){
        var response$1003=$$$ct798.gap$internal($$$cl1.Tuple($$dateTimeRange.from,$$$cl1.Tuple($$dateTimeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),$$$cl1.Tuple(other$1002.from,$$$cl1.Tuple(other$1002.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}),{Value:{t:DateTime}});
        var response$1004;
        if($$$cl1.isOfType((response$1004=response$1003),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTime},Element:{t:DateTime}}},First:{t:DateTime},Element:{t:DateTime}}})){
            return DateTimeRange(response$1004.get((0)),response$1004.get((1)));
        }
        //assert at DateTimeRange.ceylon (34:8-34:34)
        var response$1005;
        if (!($$$cl1.isOfType((response$1005=response$1003),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at DateTimeRange.ceylon (34:14-34:33)'); }
        return response$1005;
    }
    $$dateTimeRange.gap=gap;
    gap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:DateTimeRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['gap']};//gap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:DateTimeRange},Element:{t:DateTimeRange}}},Return:{ t:'u', l:[{t:DateTimeRange},{t:$$$cl1.Empty}]}};
    function iterator(){
        function listIterator$1006($$targs$$){
            var $$listIterator$1006=new listIterator$1006.$$;
            $$listIterator$1006.$$targs$$=$$targs$$;
            $$$cl1.Iterator($$listIterator$1006);
            $$$cl1.add_type_arg($$listIterator$1006,'Element',{t:DateTime});
            var count$1007=(0);
            $$$cl1.defineAttr($$listIterator$1006,'count$1007',function(){return count$1007;},function(count$1008){return count$1007=count$1008;});
            function next(){
                var date$1009=(opt$1010=($$dateTimeRange.from.compare($$dateTimeRange.to).equals($$$cl1.getLarger())?previousByStep$1011((oldcount$1012=count$1007,count$1007=oldcount$1012.successor,oldcount$1012)):null),opt$1010!==null?opt$1010:nextByStep$1013((oldcount$1014=count$1007,count$1007=oldcount$1014.successor,oldcount$1014)));
                var opt$1010,oldcount$1012,oldcount$1014;
                var continueLoop$1015=(opt$1016=(($$dateTimeRange.from.compare($$dateTimeRange.to)!==$$$cl1.getLarger())?(date$1009.compare($$dateTimeRange.to)!==$$$cl1.getLarger()):null),opt$1016!==null?opt$1016:(date$1009.compare($$dateTimeRange.to)!==$$$cl1.getSmaller()));
                var opt$1016;
                return (opt$1017=(continueLoop$1015?date$1009:null),opt$1017!==null?opt$1017:$$$cl1.getFinished());
                var opt$1017;
            }
            $$listIterator$1006.next=next;
            next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:DateTime},{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['iterator']['$o']['listIterator']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:DateTime},{t:$$$cl1.Finished}]}};
            return $$listIterator$1006;
        }
        function $init$listIterator$1006(){
            if (listIterator$1006.$$===undefined){
                $$$cl1.initTypeProto(listIterator$1006,'ceylon.time::DateTimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$1006;
        }
        $init$listIterator$1006();
        var listIterator$1018=listIterator$1006({Element:{t:DateTime}});
        var getListIterator$1018=function(){
            return listIterator$1018;
        }
        return getListIterator$1018();
    }
    $$dateTimeRange.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:DateTime}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:{t:DateTime}}}};
    function stepBy(step$1019){
        return (opt$1020=(step$1019.equals($$dateTimeRange.step)?$$dateTimeRange:null),opt$1020!==null?opt$1020:DateTimeRange($$dateTimeRange.from,$$dateTimeRange.to,step$1019));
        var opt$1020;
    }
    $$dateTimeRange.stepBy=stepBy;
    stepBy.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateTimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{ t:'u', l:[{t:$$$ct798.UnitOfDate$base},{t:$$$ct798.UnitOfTime$base}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['stepBy']};//stepBy.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$ct798.UnitOfDate$base},{t:$$$ct798.UnitOfTime$base}]},Element:{ t:'u', l:[{t:$$$ct798.UnitOfDate$base},{t:$$$ct798.UnitOfTime$base}]}}},Return:{t:DateTimeRange}};
    function nextByStep$1013(jump$1021){
        if(jump$1021===undefined){jump$1021=(1);}
        var step$1022;
        if($$$cl1.isOfType((step$1022=$$dateTimeRange.step),{t:$$$ct798.UnitOfDate$base})){
            
            var case$1023=step$1022;
            if ($$$cl1.isOfType(step$1022,{t:$$$ct798.UnitOfYear$base})) {
                return $$dateTimeRange.from.plusYears(jump$1021);
            }else if ($$$cl1.isOfType(step$1022,{t:$$$ct798.UnitOfMonth$base})) {
                return $$dateTimeRange.from.plusMonths(jump$1021);
            }else if ($$$cl1.isOfType(step$1022,{t:$$$ct798.UnitOfDay$base})) {
                return $$dateTimeRange.from.plusDays(jump$1021);
            }
        }
        var step$1024;
        if($$$cl1.isOfType((step$1024=$$dateTimeRange.step),{t:$$$ct798.UnitOfTime$base})){
            
            var case$1025=step$1024;
            if ($$$cl1.isOfType(step$1024,{t:$$$ct798.UnitOfHour$base})) {
                return $$dateTimeRange.from.plusHours(jump$1021);
            }else if ($$$cl1.isOfType(step$1024,{t:$$$ct798.UnitOfMinute$base})) {
                return $$dateTimeRange.from.plusMinutes(jump$1021);
            }else if ($$$cl1.isOfType(step$1024,{t:$$$ct798.UnitOfSecond$base})) {
                return $$dateTimeRange.from.plusSeconds(jump$1021);
            }else if ($$$cl1.isOfType(step$1024,{t:$$$ct798.UnitOfMillisecond$base})) {
                return $$dateTimeRange.from.plusMilliseconds(jump$1021);
            }
        }
        throw $$$cl1.Exception();
    };nextByStep$1013.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['nextByStep']};//nextByStep$1013.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:DateTime}};
    function previousByStep$1011(jump$1026){
        if(jump$1026===undefined){jump$1026=(1);}
        var step$1027;
        if($$$cl1.isOfType((step$1027=$$dateTimeRange.step),{t:$$$ct798.UnitOfDate$base})){
            
            var case$1028=step$1027;
            if ($$$cl1.isOfType(step$1027,{t:$$$ct798.UnitOfYear$base})) {
                return $$dateTimeRange.from.minusYears(jump$1026);
            }else if ($$$cl1.isOfType(step$1027,{t:$$$ct798.UnitOfMonth$base})) {
                return $$dateTimeRange.from.minusMonths(jump$1026);
            }else if ($$$cl1.isOfType(step$1027,{t:$$$ct798.UnitOfDay$base})) {
                return $$dateTimeRange.from.minusDays(jump$1026);
            }
        }
        var step$1029;
        if($$$cl1.isOfType((step$1029=$$dateTimeRange.step),{t:$$$ct798.UnitOfTime$base})){
            
            var case$1030=step$1029;
            if ($$$cl1.isOfType(step$1029,{t:$$$ct798.UnitOfHour$base})) {
                return $$dateTimeRange.from.minusHours(jump$1026);
            }else if ($$$cl1.isOfType(step$1029,{t:$$$ct798.UnitOfMinute$base})) {
                return $$dateTimeRange.from.minusMinutes(jump$1026);
            }else if ($$$cl1.isOfType(step$1029,{t:$$$ct798.UnitOfSecond$base})) {
                return $$dateTimeRange.from.minusSeconds(jump$1026);
            }else if ($$$cl1.isOfType(step$1029,{t:$$$ct798.UnitOfMillisecond$base})) {
                return $$dateTimeRange.from.minusMilliseconds(jump$1026);
            }
        }
        throw $$$cl1.Exception();
    };previousByStep$1011.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']['$m']['previousByStep']};//previousByStep$1011.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:DateTime}};
    return $$dateTimeRange;
}
DateTimeRange.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.Range$base,a:{StepBy:{ t:'u', l:[{t:$$$ct798.UnitOfDate$base},{t:$$$ct798.UnitOfTime$base}]},Self:{t:DateTimeRange},Element:{t:DateTime}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['DateTimeRange']};
exports.DateTimeRange=DateTimeRange;
function $init$DateTimeRange(){
    if (DateTimeRange.$$===undefined){
        $$$cl1.initTypeProto(DateTimeRange,'ceylon.time::DateTimeRange',$$$cl1.Basic,$$$ct798.$init$Range$base());
    }
    return DateTimeRange;
}
exports.$init$DateTimeRange=$init$DateTimeRange;
$init$DateTimeRange();
function Duration(milliseconds$1031, $$duration){
    $init$Duration();
    if ($$duration===undefined)$$duration=new Duration.$$;
    $$$ct798.ReadableDuration$base($$duration);
    var milliseconds=milliseconds$1031;
    $$$cl1.defineAttr($$duration,'milliseconds',function(){return milliseconds;});
    $$$cl1.defineAttr($$duration,'period',function(){return (milliseconds$1032=$$duration.milliseconds,Period(undefined,undefined,undefined,undefined,undefined,undefined,milliseconds$1032));});
    var milliseconds$1032;
    $$$cl1.defineAttr($$duration,'string',function(){return $$$cl1.StringBuilder().appendAll([$$duration.milliseconds.string,$$$cl1.String("ms",2)]).string;});
    function equals(other$1033){
        var other$1034;
        if($$$cl1.isOfType((other$1034=other$1033),{t:Duration})){
            return $$duration.milliseconds.equals(other$1034.milliseconds);
        }
        return false;
    }
    $$duration.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Duration']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    return $$duration;
}
Duration.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.ReadableDuration$base}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Duration']};
exports.Duration=Duration;
function $init$Duration(){
    if (Duration.$$===undefined){
        $$$cl1.initTypeProto(Duration,'ceylon.time::Duration',$$$cl1.Basic,$$$ct798.$init$ReadableDuration$base());
    }
    return Duration;
}
exports.$init$Duration=$init$Duration;
$init$Duration();
function now(clock$1035){
    if(clock$1035===undefined){clock$1035=null;}
    var clock$1036;
    if((clock$1036=clock$1035)!==null){
        return clock$1036.instant();
    }
    return getSystemTime().instant();
}
exports.now=now;
now.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'clock',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:Clock}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['now']};//now.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:Clock}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:Clock}]}}},Return:{t:Instant}};
function Instant(millisecondsOfEra$1037, $$instant){
    $init$Instant();
    if ($$instant===undefined)$$instant=new Instant.$$;
    $$instant.$$targs$$={Other:{t:Instant}};
    $$$ct798.ReadableInstant$base($$instant);
    $$$cl1.Comparable($$instant);
    $$$cl1.add_type_arg($$instant,'Other',{t:Instant});
    var millisecondsOfEra=millisecondsOfEra$1037;
    $$$cl1.defineAttr($$instant,'millisecondsOfEra',function(){return millisecondsOfEra;});
    function plus(other$1038){
        
        var case$1039=other$1038;
        if ($$$cl1.isOfType(other$1038,{t:Duration})) {
            return Instant($$instant.millisecondsOfEra.plus(case$1039.milliseconds));
        }else if ($$$cl1.isOfType(other$1038,{t:Period})) {
            return $$instant.dateTime().plus(case$1039).instant();
        }
    }
    $$instant.plus=plus;
    plus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['plus']};//plus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:Duration},{t:Period}]},Element:{ t:'u', l:[{t:Duration},{t:Period}]}}},Return:{t:Instant}};
    function minus(other$1040){
        
        var case$1041=other$1040;
        if ($$$cl1.isOfType(other$1040,{t:Duration})) {
            return Instant($$instant.millisecondsOfEra.minus(case$1041.milliseconds));
        }else if ($$$cl1.isOfType(other$1040,{t:Period})) {
            return $$instant.dateTime().minus(case$1041).instant();
        }
    }
    $$instant.minus=minus;
    minus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Instant},$ps:[{$nm:'other',$mt:'prm',$t:{ t:'u', l:[{t:Duration},{t:Period}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['minus']};//minus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:Duration},{t:Period}]},Element:{ t:'u', l:[{t:Duration},{t:Period}]}}},Return:{t:Instant}};
    function compare(other$1042){
        return $$instant.millisecondsOfEra.compare(other$1042.millisecondsOfEra);
    }
    $$instant.compare=compare;
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['compare']};//compare.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Instant},Element:{t:Instant}}},Return:{t:$$$cl1.Comparison}};
    function dateTime(zone$1043){
        if(zone$1043===undefined){zone$1043=null;}
        var zone$1044;
        if((zone$1044=zone$1043)!==null){
            return $$$cl1.getNothing();
        }
        return $$$ct798.GregorianDateTime$internal($$instant.date(),$$instant.time());
    }
    $$instant.dateTime=dateTime;
    dateTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:DateTime},$ps:[{$nm:'zone',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['dateTime']};//dateTime.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}},Return:{t:DateTime}};
    function date(zone$1045){
        if(zone$1045===undefined){zone$1045=null;}
        var zone$1046;
        if((zone$1046=zone$1045)!==null){
            return $$$cl1.getNothing();
        }
        return $$$ct798.GregorianDate$internal($$$ct798.getUnixTime$chronology().fixedFromTime($$instant.millisecondsOfEra));
    }
    $$instant.date=date;
    date.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Date},$ps:[{$nm:'zone',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['date']};//date.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}},Return:{t:Date}};
    function time(zone$1047){
        if(zone$1047===undefined){zone$1047=null;}
        var zone$1048;
        if((zone$1048=zone$1047)!==null){
            return $$$cl1.getNothing();
        }
        return $$$ct798.TimeOfDay$internal($$$ct798.getUnixTime$chronology().timeOfDay($$instant.millisecondsOfEra));
    }
    $$instant.time=time;
    time.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'zone',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['time']};//time.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}},Return:{t:Time}};
    function zoneDateTime(zone$1049){
        return $$$cl1.getNothing();
    }
    $$instant.zoneDateTime=zoneDateTime;
    zoneDateTime.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.ZoneDateTime$timezone},$ps:[{$nm:'zone',$mt:'prm',$t:{t:$$$ct798.TimeZone$timezone}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['zoneDateTime']};//zoneDateTime.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.TimeZone$timezone},Element:{t:$$$ct798.TimeZone$timezone}}},Return:{t:$$$ct798.ZoneDateTime$timezone}};
    function durationTo(other$1050){
        return Duration(other$1050.millisecondsOfEra.minus($$instant.millisecondsOfEra));
    }
    $$instant.durationTo=durationTo;
    durationTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['durationTo']};//durationTo.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Instant},Element:{t:Instant}}},Return:{t:Duration}};
    function durationFrom(other$1051){
        return Duration($$instant.millisecondsOfEra.minus(other$1051.millisecondsOfEra));
    }
    $$instant.durationFrom=durationFrom;
    durationFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Duration},$ps:[{$nm:'other',$mt:'prm',$t:{t:Instant}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']['$m']['durationFrom']};//durationFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Instant},Element:{t:Instant}}},Return:{t:Duration}};
    return $$instant;
}
Instant.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.ReadableInstant$base},{t:$$$cl1.Comparable,a:{Other:{t:Instant}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Instant']};
exports.Instant=Instant;
function $init$Instant(){
    if (Instant.$$===undefined){
        $$$cl1.initTypeProto(Instant,'ceylon.time::Instant',$$$cl1.Basic,$$$ct798.$init$ReadableInstant$base(),$$$cl1.Comparable);
    }
    return Instant;
}
exports.$init$Instant=$init$Instant;
$init$Instant();
function AbstractDate$internal(dayOfEra$1052, $$abstractDate){
    $init$AbstractDate$internal();
    if ($$abstractDate===undefined)$$abstractDate=new AbstractDate$internal.$$;
    $$$ct798.Date($$abstractDate);
    var dayOfEra=dayOfEra$1052;
    $$$cl1.defineAttr($$abstractDate,'dayOfEra',function(){return dayOfEra;});
    function compare(other$1053){
        return $$abstractDate.dayOfEra.compare(other$1053.dayOfEra);
    }
    $$abstractDate.compare=compare;
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.Date}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['AbstractDate']['$m']['compare']};//compare.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Date},Element:{t:$$$ct798.Date}}},Return:{t:$$$cl1.Comparison}};
    function equals(other$1054){
        var other$1055;
        if($$$cl1.isOfType((other$1055=other$1054),{t:AbstractDate$internal})){
            return $$abstractDate.dayOfEra.equals(other$1055.dayOfEra);
        }
        return false;
    }
    $$abstractDate.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['AbstractDate']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    return $$abstractDate;
}
AbstractDate$internal.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.Date}],$an:function(){return[$$$cl1.shared(),$$$cl1.abstract()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['AbstractDate']};
exports.AbstractDate$internal=AbstractDate$internal;
function $init$AbstractDate$internal(){
    if (AbstractDate$internal.$$===undefined){
        $$$cl1.initTypeProto(AbstractDate$internal,'ceylon.time.internal::AbstractDate',$$$cl1.Basic,$$$ct798.$init$Date());
    }
    return AbstractDate$internal;
}
exports.$init$AbstractDate$internal=$init$AbstractDate$internal;
$init$AbstractDate$internal();
function GregorianDate$internal(dayOfEra$1056, $$gregorianDate){
    $init$GregorianDate$internal();
    if ($$gregorianDate===undefined)$$gregorianDate=new GregorianDate$internal.$$;
    $$gregorianDate.dayOfEra$1056=dayOfEra$1056;
    AbstractDate$internal(dayOfEra$1056,$$gregorianDate);
    $$$cl1.defineAttr($$gregorianDate,'year',function(){return $$$ct798.getGregorian$chronology().yearFrom(dayOfEra$1056);});
    $$$cl1.defineAttr($$gregorianDate,'month',function(){return $$$ct798.monthOf$base($$$ct798.getGregorian$chronology().monthFrom(dayOfEra$1056));});
    $$$cl1.defineAttr($$gregorianDate,'day',function(){return $$$ct798.getGregorian$chronology().dayFrom(dayOfEra$1056);});
    $$$cl1.defineAttr($$gregorianDate,'leapYear',function(){return $$$ct798.getGregorian$chronology().leapYear($$gregorianDate.year);});
    $$$cl1.defineAttr($$gregorianDate,'dayOfYear',function(){return $$gregorianDate.month.fisrtDayOfYear($$gregorianDate.leapYear).plus($$gregorianDate.day).minus((1));});
    $$$cl1.defineAttr($$gregorianDate,'predecessor',function(){return $$gregorianDate.minusDays((1));});
    $$$cl1.defineAttr($$gregorianDate,'successor',function(){return $$gregorianDate.plusDays((1));});
    $$$cl1.defineAttr($$gregorianDate,'dayOfWeek',function(){return $$$ct798.dayOfWeek$base($$$ct798.getGregorian$chronology().dayOfWeekFrom(dayOfEra$1056));});
    function plusDays(days$1057){
        if(days$1057.equals((0))){
            return $$gregorianDate;
        }
        return GregorianDate$internal(dayOfEra$1056.plus(days$1057));
    }
    $$gregorianDate.plusDays=plusDays;
    plusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['plusDays']};//plusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    var minusDays=function (days$1058){
        return $$gregorianDate.plusDays((-days$1058));
    };
    minusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['minusDays']};
    $$gregorianDate.minusDays=minusDays;
    var plusWeeks=function (weeks$1059){
        return $$gregorianDate.plusDays(weeks$1059.times($$$ct798.getDays$base().perWeek));
    };
    plusWeeks.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['plusWeeks']};
    $$gregorianDate.plusWeeks=plusWeeks;
    var minusWeeks=function (weeks$1060){
        return $$gregorianDate.plusWeeks((-weeks$1060));
    };
    minusWeeks.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['minusWeeks']};
    $$gregorianDate.minusWeeks=minusWeeks;
    function plusMonths(months$1061){
        if(months$1061.equals((0))){
            return $$gregorianDate;
        }
        var o$1062=$$gregorianDate.month.add(months$1061);
        var newYear$1063=$$gregorianDate.year.plus(o$1062.years);
        var monthDay$1064=$$$ct798.monthOf$base(o$1062.month.integer).numberOfDays($$$ct798.getGregorian$chronology().leapYear(newYear$1063));
        return GregorianDate$internal($$$ct798.getGregorian$chronology().fixedFrom($$$cl1.Tuple(newYear$1063,$$$cl1.Tuple(o$1062.month.integer,$$$cl1.Tuple($$$cl1.min($$$cl1.Tuple(monthDay$1064,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Value:{t:$$$cl1.Integer},Absent:{t:$$$cl1.Nothing}}),$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Integer}]},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Integer}]},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Integer}]},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.plusMonths=plusMonths;
    plusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['plusMonths']};//plusMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    var minusMonths=function (months$1065){
        return $$gregorianDate.plusMonths((-months$1065));
    };
    minusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['minusMonths']};
    $$gregorianDate.minusMonths=minusMonths;
    function plusYears(years$1066){
        if(years$1066.equals((0))){
            return $$gregorianDate;
        }
        var newDay$1067=(opt$1068=(($$gregorianDate.day.equals((29))&&$$gregorianDate.month.equals($$$ct798.getFebruary$base()))?(28):null),opt$1068!==null?opt$1068:$$gregorianDate.day);
        var opt$1068;
        return GregorianDate$internal($$$ct798.getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year.plus(years$1066),$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(newDay$1067,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.plusYears=plusYears;
    plusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['plusYears']};//plusYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    var minusYears=function (years$1069){
        return $$gregorianDate.plusYears((-years$1069));
    };
    minusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['minusYears']};
    $$gregorianDate.minusYears=minusYears;
    function withDay(day$1070){
        if(day$1070.equals($$gregorianDate.day)){
            return $$gregorianDate;
        }
        $$$ct798.getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple(day$1070,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal(dayOfEra$1056.minus($$gregorianDate.day).plus(day$1070));
    }
    $$gregorianDate.withDay=withDay;
    withDay.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['withDay']};//withDay.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    function withMonth(month$1071){
        var newMonth$1072=$$$ct798.monthOf$base(month$1071);
        if(newMonth$1072.equals($$gregorianDate.month)){
            return $$gregorianDate;
        }
        $$$ct798.getGregorian$chronology().checkDate($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1072.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal($$$ct798.getGregorian$chronology().fixedFrom($$$cl1.Tuple($$gregorianDate.year,$$$cl1.Tuple(newMonth$1072.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.withMonth=withMonth;
    withMonth.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'month',$mt:'prm',$t:{t:$$$ct798.Month$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['withMonth']};//withMonth.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Month$base},Element:{t:$$$ct798.Month$base}}},Return:{t:$$$ct798.Date}};
    function withYear(year$1073){
        if(year$1073.equals($$gregorianDate.year)){
            return $$gregorianDate;
        }
        $$$ct798.getGregorian$chronology().checkDate($$$cl1.Tuple(year$1073,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
        return GregorianDate$internal($$$ct798.getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1073,$$$cl1.Tuple($$gregorianDate.month.integer,$$$cl1.Tuple($$gregorianDate.day,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
    }
    $$gregorianDate.withYear=withYear;
    withYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['withYear']};//withYear.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    function plus(amount$1074){
        return (months$1075=amount$1074.years.times($$$ct798.getMonths$base().perYear).plus(amount$1074.months),days$1076=amount$1074.days,addPeriod$1077(months$1075,days$1076));
        var months$1075,days$1076;
    }
    $$gregorianDate.plus=plus;
    plus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct798.ReadableDatePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['plus']};//plus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadableDatePeriod$base},Element:{t:$$$ct798.ReadableDatePeriod$base}}},Return:{t:$$$ct798.Date}};
    function minus(amount$1078){
        return (months$1079=amount$1078.years.negativeValue.times($$$ct798.getMonths$base().perYear).plus(amount$1078.months.negativeValue),days$1080=amount$1078.days.negativeValue,addPeriod$1077(months$1079,days$1080));
        var months$1079,days$1080;
    }
    $$gregorianDate.minus=minus;
    minus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct798.ReadableDatePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['minus']};//minus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadableDatePeriod$base},Element:{t:$$$ct798.ReadableDatePeriod$base}}},Return:{t:$$$ct798.Date}};
    function addPeriod$1077(months$1081,days$1082){
        var _this$1083=$$gregorianDate;
        var set_this$1083=function(_this$1084){return _this$1083=_this$1084;};
        if(days$1082.compare((0)).equals($$$cl1.getSmaller())){
            _this$1083=_this$1083.minusDays(days$1082.negativeValue);
        }
        if(months$1081.compare((0)).equals($$$cl1.getSmaller())){
            _this$1083=_this$1083.minusMonths(months$1081.negativeValue);
        }
        if(months$1081.compare((0)).equals($$$cl1.getLarger())){
            _this$1083=_this$1083.plusMonths(months$1081);
        }
        if(days$1082.compare((0)).equals($$$cl1.getLarger())){
            _this$1083=_this$1083.plusDays(days$1082);
        }
        return _this$1083;
    };addPeriod$1077.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['addPeriod']};//addPeriod$1077.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
    $$$cl1.defineAttr($$gregorianDate,'weekOfYear',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        var weekFromYearBefore$1085=(0);
        var possibleNextYearWeek$1086=(53);
        function normalizeFirstWeek$1087(weekNumber$1088){
            var result$1089=weekNumber$1088;
            var setResult$1089=function(result$1090){return result$1089=result$1090;};
            var jan1$1091=$$gregorianDate.withDay((1)).withMonth($$$ct798.getJanuary$base());
            var jan1WeekDay$1092=(opt$1093=(jan1$1091.dayOfWeek.equals($$$ct798.getSunday$base())?(7):null),opt$1093!==null?opt$1093:jan1$1091.dayOfWeek.integer);
            var opt$1093;
            if((($$gregorianDate.dayOfYear.compare((8).minus(jan1WeekDay$1092))!==$$$cl1.getLarger())&&jan1WeekDay$1092.compare((4)).equals($$$cl1.getLarger()))){
                if((jan1WeekDay$1092.equals((5))||(jan1WeekDay$1092.equals((6))&&$$gregorianDate.minusYears((1)).leapYear))){
                    result$1089=(53);
                }else {
                    result$1089=(52);
                }
            }
            return result$1089;
        };normalizeFirstWeek$1087.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$at']['weekOfYear']['$m']['normalizeFirstWeek']};//normalizeFirstWeek$1087.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
        function normalizeLastWeek$1094(weekNumber$1095){
            var result$1096=weekNumber$1095;
            var setResult$1096=function(result$1097){return result$1096=result$1097;};
            var weekDay$1098=$$$ct798.adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
            var totalDaysInYear$1099=(opt$1100=($$gregorianDate.leapYear?(366):null),opt$1100!==null?opt$1100:(365));
            var opt$1100;
            if(totalDaysInYear$1099.minus($$gregorianDate.dayOfYear).compare((4).minus(weekDay$1098)).equals($$$cl1.getSmaller())){
                result$1096=(1);
            }
            return result$1096;
        };normalizeLastWeek$1094.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'weekNumber',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$at']['weekOfYear']['$m']['normalizeLastWeek']};//normalizeLastWeek$1094.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
        var dayOfWeekNumber$1101=$$$ct798.adjustedMod$internal$math($$gregorianDate.dayOfWeek.integer,(7));
        var weekNumber$1102=$$gregorianDate.dayOfYear.minus(dayOfWeekNumber$1101).plus((10)).divided((7));
        var setWeekNumber$1102=function(weekNumber$1103){return weekNumber$1102=weekNumber$1103;};
        if(weekNumber$1102.equals(weekFromYearBefore$1085)){
            weekNumber$1102=normalizeFirstWeek$1087(weekNumber$1102);
        }else {
            if(weekNumber$1102.equals(possibleNextYearWeek$1086)){
                weekNumber$1102=normalizeLastWeek$1094(weekNumber$1102);
            }
        }
        return weekNumber$1102;
    });
    function at(time$1104){
        return GregorianDateTime$internal($$gregorianDate,time$1104);
    }
    $$gregorianDate.at=at;
    at.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'time',$mt:'prm',$t:{t:$$$ct798.Time}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['at']};//at.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Time},Element:{t:$$$ct798.Time}}},Return:{t:$$$ct798.DateTime}};
    $$$cl1.defineAttr($$gregorianDate,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$$cl1.StringBuilder().appendAll([$$gregorianDate.year.string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.month.integer).string,$$$cl1.String("-",1),leftPad$internal($$gregorianDate.day).string]).string;
    });
    function periodFrom(start$1105){
        var from$1106=(opt$1107=($$gregorianDate.compare(start$1105).equals($$$cl1.getSmaller())?$$gregorianDate:null),opt$1107!==null?opt$1107:start$1105);
        var opt$1107;
        var to$1108=(opt$1109=($$gregorianDate.compare(start$1105).equals($$$cl1.getSmaller())?start$1105:null),opt$1109!==null?opt$1109:$$gregorianDate);
        var opt$1109;
        var nextDate$1110=from$1106.plusYears((1));
        var setNextDate$1110=function(nextDate$1111){return nextDate$1110=nextDate$1111;};
        var yy$1112=(0);
        var setYy$1112=function(yy$1113){return yy$1112=yy$1113;};
        while((nextDate$1110.compare(to$1108)!==$$$cl1.getLarger())){
            nextDate$1110=nextDate$1110.plusYears((1));
            (yy$1112=yy$1112.plus((1)));
        }
        var mm$1114=(0);
        var setMm$1114=function(mm$1115){return mm$1114=mm$1115;};
        nextDate$1110=from$1106.plusYears(yy$1112).plusMonths(mm$1114.plus((1)));
        while((nextDate$1110.compare(to$1108)!==$$$cl1.getLarger())){
            (mm$1114=mm$1114.plus((1)));
            nextDate$1110=from$1106.plusYears(yy$1112).plusMonths(mm$1114.plus((1)));
        }
        nextDate$1110=from$1106.plusYears(yy$1112).plusMonths(mm$1114).plusDays((1));
        var dd$1116=(0);
        var setDd$1116=function(dd$1117){return dd$1116=dd$1117;};
        while((nextDate$1110.compare(to$1108)!==$$$cl1.getLarger())){
            nextDate$1110=nextDate$1110.plusDays((1));
            (dd$1116=dd$1116.plus((1)));
        }
        var positive$1118=start$1105.compare($$gregorianDate).equals($$$cl1.getSmaller());
        return (years$1119=(opt$1120=(positive$1118?yy$1112:null),opt$1120!==null?opt$1120:(-yy$1112)),months$1121=(opt$1122=(positive$1118?mm$1114:null),opt$1122!==null?opt$1122:(-mm$1114)),days$1123=(opt$1124=(positive$1118?dd$1116:null),opt$1124!==null?opt$1124:(-dd$1116)),$$$ct798.Period(years$1119,months$1121,days$1123,undefined,undefined,undefined,undefined));
        var years$1119,opt$1120,months$1121,opt$1122,days$1123,opt$1124;
    }
    $$gregorianDate.periodFrom=periodFrom;
    periodFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct798.Date}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['periodFrom']};//periodFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Date},Element:{t:$$$ct798.Date}}},Return:{t:$$$ct798.Period}};
    var periodTo=function (end$1125){
        return end$1125.periodFrom($$gregorianDate);
    };
    periodTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct798.Date}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['periodTo']};
    $$gregorianDate.periodTo=periodTo;
    function to(other$1126){
        return $$$ct798.DateRange($$gregorianDate,other$1126);
    }
    $$gregorianDate.to=to;
    to.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.Date}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']['$m']['to']};//to.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Date},Element:{t:$$$ct798.Date}}},Return:{t:$$$ct798.DateRange}};
    return $$gregorianDate;
}
GregorianDate$internal.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:AbstractDate$internal},satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDate']};
exports.GregorianDate$internal=GregorianDate$internal;
function $init$GregorianDate$internal(){
    if (GregorianDate$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDate$internal,'ceylon.time.internal::GregorianDate',AbstractDate$internal);
    }
    return GregorianDate$internal;
}
exports.$init$GregorianDate$internal=$init$GregorianDate$internal;
$init$GregorianDate$internal();
function gregorianDate$internal(year$1127,month$1128,day$1129){
    var year$1130=year$1127;
    var month$1131=month$1128;
    var day$1132=day$1129;
    $$$ct798.getGregorian$chronology().checkDate($$$cl1.Tuple(year$1130,$$$cl1.Tuple($$$ct798.monthOf$base(month$1131).integer,$$$cl1.Tuple(day$1132,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}));
    return GregorianDate$internal($$$ct798.getGregorian$chronology().fixedFrom($$$cl1.Tuple(year$1130,$$$cl1.Tuple($$$ct798.monthOf$base(month$1131).integer,$$$cl1.Tuple(day$1132,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}})));
}
exports.gregorianDate$internal=gregorianDate$internal;
gregorianDate$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{ t:'u', l:[{t:$$$cl1.Integer},{t:$$$ct798.Month$base}]}},{$nm:'day',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['gregorianDate']};//gregorianDate$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
function GregorianDateTime$internal(date$1133, time$1134, $$gregorianDateTime){
    $init$GregorianDateTime$internal();
    if ($$gregorianDateTime===undefined)$$gregorianDateTime=new GregorianDateTime$internal.$$;
    $$$ct798.DateTime($$gregorianDateTime);
    var date=date$1133;
    $$$cl1.defineAttr($$gregorianDateTime,'date',function(){return date;});
    var time=time$1134;
    $$$cl1.defineAttr($$gregorianDateTime,'time',function(){return time;});
    function compare(other$1135){
        return (opt$1136=((!$$gregorianDateTime.date.equals(other$1135.date))?$$gregorianDateTime.date.compare(other$1135.date):null),opt$1136!==null?opt$1136:$$gregorianDateTime.time.compare(other$1135.time));
        var opt$1136;
    }
    $$gregorianDateTime.compare=compare;
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.DateTime}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['compare']};//compare.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.DateTime},Element:{t:$$$ct798.DateTime}}},Return:{t:$$$cl1.Comparison}};
    $$$cl1.defineAttr($$gregorianDateTime,'day',function(){return $$gregorianDateTime.date.day;});
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfWeek',function(){return $$gregorianDateTime.date.dayOfWeek;});
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfYear',function(){return $$gregorianDateTime.date.dayOfYear;});
    $$$cl1.defineAttr($$gregorianDateTime,'dayOfEra',function(){return $$gregorianDateTime.date.dayOfEra;});
    $$$cl1.defineAttr($$gregorianDateTime,'year',function(){return $$gregorianDateTime.date.year;});
    $$$cl1.defineAttr($$gregorianDateTime,'leapYear',function(){return $$gregorianDateTime.date.leapYear;});
    $$$cl1.defineAttr($$gregorianDateTime,'weekOfYear',function(){return $$gregorianDateTime.date.weekOfYear;});
    $$$cl1.defineAttr($$gregorianDateTime,'month',function(){return $$gregorianDateTime.date.month;});
    $$$cl1.defineAttr($$gregorianDateTime,'hours',function(){return $$gregorianDateTime.time.hours;});
    $$$cl1.defineAttr($$gregorianDateTime,'milliseconds',function(){return $$gregorianDateTime.time.milliseconds;});
    $$$cl1.defineAttr($$gregorianDateTime,'millisecondsOfDay',function(){return $$gregorianDateTime.time.millisecondsOfDay;});
    $$$cl1.defineAttr($$gregorianDateTime,'minutes',function(){return $$gregorianDateTime.time.minutes;});
    $$$cl1.defineAttr($$gregorianDateTime,'minutesOfDay',function(){return $$gregorianDateTime.time.minutesOfDay;});
    $$$cl1.defineAttr($$gregorianDateTime,'seconds',function(){return $$gregorianDateTime.time.seconds;});
    $$$cl1.defineAttr($$gregorianDateTime,'secondsOfDay',function(){return $$gregorianDateTime.time.secondsOfDay;});
    function plusYears(years$1137){
        return (date$1138=$$gregorianDateTime.date.plusYears(years$1137),time$1139=$$gregorianDateTime.time,GregorianDateTime$internal(date$1138,time$1139));
        var date$1138,time$1139;
    }
    $$gregorianDateTime.plusYears=plusYears;
    plusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusYears']};//plusYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusYears(years$1140){
        return (date$1141=$$gregorianDateTime.date.minusYears(years$1140),time$1142=$$gregorianDateTime.time,GregorianDateTime$internal(date$1141,time$1142));
        var date$1141,time$1142;
    }
    $$gregorianDateTime.minusYears=minusYears;
    minusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusYears']};//minusYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusMonths(months$1143){
        return (date$1144=$$gregorianDateTime.date.plusMonths(months$1143),time$1145=$$gregorianDateTime.time,GregorianDateTime$internal(date$1144,time$1145));
        var date$1144,time$1145;
    }
    $$gregorianDateTime.plusMonths=plusMonths;
    plusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusMonths']};//plusMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusMonths(months$1146){
        return $$gregorianDateTime.plusMonths((-months$1146));
    }
    $$gregorianDateTime.minusMonths=minusMonths;
    minusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusMonths']};//minusMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusWeeks(weeks$1147){
        return (date$1148=$$gregorianDateTime.date.plusWeeks(weeks$1147),time$1149=$$gregorianDateTime.time,GregorianDateTime$internal(date$1148,time$1149));
        var date$1148,time$1149;
    }
    $$gregorianDateTime.plusWeeks=plusWeeks;
    plusWeeks.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusWeeks']};//plusWeeks.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusWeeks(weeks$1150){
        return $$gregorianDateTime.plusWeeks((-weeks$1150));
    }
    $$gregorianDateTime.minusWeeks=minusWeeks;
    minusWeeks.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'weeks',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusWeeks']};//minusWeeks.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusDays(days$1151){
        return (date$1152=$$gregorianDateTime.date.plusDays(days$1151),time$1153=$$gregorianDateTime.time,GregorianDateTime$internal(date$1152,time$1153));
        var date$1152,time$1153;
    }
    $$gregorianDateTime.plusDays=plusDays;
    plusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusDays']};//plusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusDays(days$1154){
        return $$gregorianDateTime.plusDays((-days$1154));
    }
    $$gregorianDateTime.minusDays=minusDays;
    minusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusDays']};//minusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusHours(hours$1155){
        if(hours$1155.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1156=(opt$1157=((hours$1155.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1157!==null?opt$1157:(-(1)));
        var opt$1157;
        return (hours$1158=hours$1155.times(signal$1156),signal$1159=signal$1156,fromTime$1160(hours$1158,undefined,undefined,undefined,signal$1159));
        var hours$1158,signal$1159;
    }
    $$gregorianDateTime.plusHours=plusHours;
    plusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusHours']};//plusHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusHours(hours$1161){
        return $$gregorianDateTime.plusHours((-hours$1161));
    }
    $$gregorianDateTime.minusHours=minusHours;
    minusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusHours']};//minusHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusMinutes(minutes$1162){
        if(minutes$1162.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1163=(opt$1164=((minutes$1162.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1164!==null?opt$1164:(-(1)));
        var opt$1164;
        return (minutes$1165=minutes$1162.times(signal$1163),signal$1166=signal$1163,fromTime$1160(undefined,minutes$1165,undefined,undefined,signal$1166));
        var minutes$1165,signal$1166;
    }
    $$gregorianDateTime.plusMinutes=plusMinutes;
    plusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusMinutes']};//plusMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusMinutes(minutes$1167){
        return $$gregorianDateTime.plusMinutes((-minutes$1167));
    }
    $$gregorianDateTime.minusMinutes=minusMinutes;
    minusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusMinutes']};//minusMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusSeconds(seconds$1168){
        if(seconds$1168.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1169=(opt$1170=((seconds$1168.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1170!==null?opt$1170:(-(1)));
        var opt$1170;
        return (seconds$1171=seconds$1168.times(signal$1169),signal$1172=signal$1169,fromTime$1160(undefined,undefined,seconds$1171,undefined,signal$1172));
        var seconds$1171,signal$1172;
    }
    $$gregorianDateTime.plusSeconds=plusSeconds;
    plusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusSeconds']};//plusSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusSeconds(seconds$1173){
        return $$gregorianDateTime.plusSeconds((-seconds$1173));
    }
    $$gregorianDateTime.minusSeconds=minusSeconds;
    minusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusSeconds']};//minusSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function plusMilliseconds(milliseconds$1174){
        if(milliseconds$1174.equals((0))){
            return $$gregorianDateTime;
        }
        var signal$1175=(opt$1176=((milliseconds$1174.compare((0))!==$$$cl1.getSmaller())?(1):null),opt$1176!==null?opt$1176:(-(1)));
        var opt$1176;
        return (millis$1177=milliseconds$1174.times(signal$1175),signal$1178=signal$1175,fromTime$1160(undefined,undefined,undefined,millis$1177,signal$1178));
        var millis$1177,signal$1178;
    }
    $$gregorianDateTime.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plusMilliseconds']};//plusMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function minusMilliseconds(milliseconds$1179){
        return $$gregorianDateTime.plusMilliseconds((-milliseconds$1179));
    }
    $$gregorianDateTime.minusMilliseconds=minusMilliseconds;
    minusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minusMilliseconds']};//minusMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withDay(dayOfMonth$1180){
        return (date$1181=$$gregorianDateTime.date.withDay(dayOfMonth$1180),time$1182=$$gregorianDateTime.time,GregorianDateTime$internal(date$1181,time$1182));
        var date$1181,time$1182;
    }
    $$gregorianDateTime.withDay=withDay;
    withDay.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'dayOfMonth',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withDay']};//withDay.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withHours(hours$1183){
        return (date$1184=$$gregorianDateTime.date,time$1185=$$gregorianDateTime.time.withHours(hours$1183),GregorianDateTime$internal(date$1184,time$1185));
        var date$1184,time$1185;
    }
    $$gregorianDateTime.withHours=withHours;
    withHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withHours']};//withHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withYear(year$1186){
        return (date$1187=$$gregorianDateTime.date.withYear(year$1186),time$1188=$$gregorianDateTime.time,GregorianDateTime$internal(date$1187,time$1188));
        var date$1187,time$1188;
    }
    $$gregorianDateTime.withYear=withYear;
    withYear.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withYear']};//withYear.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withMonth(month$1189){
        return GregorianDateTime$internal($$gregorianDateTime.date.withMonth(month$1189),$$gregorianDateTime.time);
    }
    $$gregorianDateTime.withMonth=withMonth;
    withMonth.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'month',$mt:'prm',$t:{t:$$$ct798.Month$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withMonth']};//withMonth.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Month$base},Element:{t:$$$ct798.Month$base}}},Return:{t:$$$ct798.DateTime}};
    function withMinutes(minutes$1190){
        return (date$1191=$$gregorianDateTime.date,time$1192=$$gregorianDateTime.time.withMinutes(minutes$1190),GregorianDateTime$internal(date$1191,time$1192));
        var date$1191,time$1192;
    }
    $$gregorianDateTime.withMinutes=withMinutes;
    withMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withMinutes']};//withMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withSeconds(seconds$1193){
        return (date$1194=$$gregorianDateTime.date,time$1195=$$gregorianDateTime.time.withSeconds(seconds$1193),GregorianDateTime$internal(date$1194,time$1195));
        var date$1194,time$1195;
    }
    $$gregorianDateTime.withSeconds=withSeconds;
    withSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withSeconds']};//withSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function withMilliseconds(milliseconds$1196){
        return (date$1197=$$gregorianDateTime.date,time$1198=$$gregorianDateTime.time.withMilliseconds(milliseconds$1196),GregorianDateTime$internal(date$1197,time$1198));
        var date$1197,time$1198;
    }
    $$gregorianDateTime.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['withMilliseconds']};//withMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    $$$cl1.defineAttr($$gregorianDateTime,'predecessor',function(){return $$gregorianDateTime.minusMilliseconds((1));});
    $$$cl1.defineAttr($$gregorianDateTime,'successor',function(){return $$gregorianDateTime.plusMilliseconds((1));});
    function plus(amount$1199){
        return (months$1200=amount$1199.years.times($$$ct798.getMonths$base().perYear).plus(amount$1199.months),days$1201=amount$1199.days,hours$1202=amount$1199.hours,minutes$1203=amount$1199.minutes,seconds$1204=amount$1199.seconds,milliseconds$1205=amount$1199.milliseconds,addPeriod$1206(months$1200,days$1201,hours$1202,minutes$1203,seconds$1204,milliseconds$1205));
        var months$1200,days$1201,hours$1202,minutes$1203,seconds$1204,milliseconds$1205;
    }
    $$gregorianDateTime.plus=plus;
    plus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct798.ReadablePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['plus']};//plus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadablePeriod$base},Element:{t:$$$ct798.ReadablePeriod$base}}},Return:{t:$$$ct798.DateTime}};
    function minus(amount$1207){
        return (months$1208=amount$1207.years.negativeValue.times($$$ct798.getMonths$base().perYear).plus(amount$1207.months.negativeValue),days$1209=amount$1207.days.negativeValue,hours$1210=amount$1207.hours.negativeValue,minutes$1211=amount$1207.minutes.negativeValue,seconds$1212=amount$1207.seconds.negativeValue,milliseconds$1213=amount$1207.milliseconds.negativeValue,addPeriod$1206(months$1208,days$1209,hours$1210,minutes$1211,seconds$1212,milliseconds$1213));
        var months$1208,days$1209,hours$1210,minutes$1211,seconds$1212,milliseconds$1213;
    }
    $$gregorianDateTime.minus=minus;
    minus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'amount',$mt:'prm',$t:{t:$$$ct798.ReadablePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['minus']};//minus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadablePeriod$base},Element:{t:$$$ct798.ReadablePeriod$base}}},Return:{t:$$$ct798.DateTime}};
    function addPeriod$1206(months$1214,days$1215,hours$1216,minutes$1217,seconds$1218,milliseconds$1219){
        var _this$1220=$$gregorianDateTime;
        var set_this$1220=function(_this$1221){return _this$1220=_this$1221;};
        var totalTime$1222=hours$1216.times($$$ct798.getMilliseconds$base().perHour).plus(minutes$1217.times($$$ct798.getMilliseconds$base().perMinute)).plus(seconds$1218.times($$$ct798.getMilliseconds$base().perSecond)).plus(milliseconds$1219);
        if(totalTime$1222.compare((0)).equals($$$cl1.getSmaller())){
            _this$1220=_this$1220.minusMilliseconds(totalTime$1222.negativeValue);
        }
        if(days$1215.compare((0)).equals($$$cl1.getSmaller())){
            _this$1220=_this$1220.minusDays(days$1215.negativeValue);
        }
        if(months$1214.compare((0)).equals($$$cl1.getSmaller())){
            _this$1220=_this$1220.minusMonths(months$1214.negativeValue);
        }
        if(months$1214.compare((0)).equals($$$cl1.getLarger())){
            _this$1220=_this$1220.plusMonths(months$1214);
        }
        if(days$1215.compare((0)).equals($$$cl1.getLarger())){
            _this$1220=_this$1220.plusDays(days$1215);
        }
        if(totalTime$1222.compare((0)).equals($$$cl1.getLarger())){
            _this$1220=_this$1220.plusMilliseconds(totalTime$1222);
        }
        return _this$1220;
    };addPeriod$1206.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['addPeriod']};//addPeriod$1206.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    function instant(timeZone$1223){
        var timeZone$1224;
        if((timeZone$1224=timeZone$1223)!==null){
            return $$$cl1.getNothing();
        }
        return $$$ct798.Instant($$$ct798.getUnixTime$chronology().timeFromFixed($$gregorianDateTime.dayOfEra).plus($$gregorianDateTime.millisecondsOfDay));
    }
    $$gregorianDateTime.instant=instant;
    instant.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Instant},$ps:[{$nm:'timeZone',$mt:'prm',$def:1,$t:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['instant']};//instant.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]},Element:{ t:'u', l:[{t:$$$cl1.Null},{t:$$$ct798.TimeZone$timezone}]}}},Return:{t:$$$ct798.Instant}};
    function equals(other$1225){
        var other$1226;
        if($$$cl1.isOfType((other$1226=other$1225),{t:GregorianDateTime$internal})){
            if(($$gregorianDateTime===other$1226)){
                return true;
            }
            return ($$gregorianDateTime.day.equals(other$1226.day)&&$$gregorianDateTime.time.equals(other$1226.time));
        }
        return false;
    }
    $$gregorianDateTime.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    $$$cl1.defineAttr($$gregorianDateTime,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$$cl1.StringBuilder().appendAll([$$gregorianDateTime.date.string.string,$$$cl1.String(" ",1),$$gregorianDateTime.time.string.string]).string;
    });
    function periodFrom(start$1227){
        var from$1228=(opt$1229=($$gregorianDateTime.compare(start$1227).equals($$$cl1.getSmaller())?$$gregorianDateTime:null),opt$1229!==null?opt$1229:start$1227);
        var opt$1229;
        var to$1230=(opt$1231=($$gregorianDateTime.compare(start$1227).equals($$$cl1.getSmaller())?start$1227:null),opt$1231!==null?opt$1231:$$gregorianDateTime);
        var opt$1231;
        var dayConsumed$1232=(opt$1233=(to$1230.time.compare(from$1228.time).equals($$$cl1.getSmaller())?(1):null),opt$1233!==null?opt$1233:(0));
        var opt$1233;
        var total$1234=(opt$1235=((to$1230.millisecondsOfDay.compare(from$1228.millisecondsOfDay)!==$$$cl1.getSmaller())?to$1230.millisecondsOfDay.minus(from$1228.millisecondsOfDay):null),opt$1235!==null?opt$1235:$$$ct798.getMilliseconds$base().perDay.plus(to$1230.millisecondsOfDay).minus(from$1228.millisecondsOfDay));
        var setTotal$1234=function(total$1236){return total$1234=total$1236;};
        var opt$1235;
        var hh$1237=total$1234.divided($$$ct798.getMilliseconds$base().perHour);
        total$1234=total$1234.remainder($$$ct798.getMilliseconds$base().perHour);
        var mm$1238=total$1234.divided($$$ct798.getMilliseconds$base().perMinute);
        total$1234=total$1234.remainder($$$ct798.getMilliseconds$base().perMinute);
        var ss$1239=total$1234.divided($$$ct798.getMilliseconds$base().perSecond);
        var positive$1240=start$1227.compare($$gregorianDateTime).equals($$$cl1.getSmaller());
        return (hours$1241=(opt$1242=(positive$1240?hh$1237:null),opt$1242!==null?opt$1242:(-hh$1237)),minutes$1243=(opt$1244=(positive$1240?mm$1238:null),opt$1244!==null?opt$1244:(-mm$1238)),seconds$1245=(opt$1246=(positive$1240?ss$1239:null),opt$1246!==null?opt$1246:(-ss$1239)),milliseconds$1247=(opt$1248=(positive$1240?total$1234.remainder($$$ct798.getMilliseconds$base().perSecond):null),opt$1248!==null?opt$1248:(-total$1234.remainder($$$ct798.getMilliseconds$base().perSecond))),$$$ct798.Period(undefined,undefined,undefined,hours$1241,minutes$1243,seconds$1245,milliseconds$1247)).plus((opt$1249=(positive$1240?to$1230.date.minusDays(dayConsumed$1232).periodFrom(from$1228.date):null),opt$1249!==null?opt$1249:to$1230.date.minusDays(dayConsumed$1232).periodTo(from$1228.date)));
        var hours$1241,opt$1242,minutes$1243,opt$1244,seconds$1245,opt$1246,milliseconds$1247,opt$1248,opt$1249;
    }
    $$gregorianDateTime.periodFrom=periodFrom;
    periodFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct798.DateTime}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['periodFrom']};//periodFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.DateTime},Element:{t:$$$ct798.DateTime}}},Return:{t:$$$ct798.Period}};
    function periodTo(end$1250){
        return end$1250.periodFrom($$gregorianDateTime);
    }
    $$gregorianDateTime.periodTo=periodTo;
    periodTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct798.DateTime}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['periodTo']};//periodTo.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.DateTime},Element:{t:$$$ct798.DateTime}}},Return:{t:$$$ct798.Period}};
    function to(other$1251){
        return $$$ct798.DateTimeRange($$gregorianDateTime,other$1251);
    }
    $$gregorianDateTime.to=to;
    to.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.DateTime}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['to']};//to.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.DateTime},Element:{t:$$$ct798.DateTime}}},Return:{t:$$$ct798.DateTimeRange}};
    function fromTime$1160(hours$1252,minutes$1253,seconds$1254,millis$1255,signal$1256){
        if(hours$1252===undefined){hours$1252=(0);}
        if(minutes$1253===undefined){minutes$1253=(0);}
        if(seconds$1254===undefined){seconds$1254=(0);}
        if(millis$1255===undefined){millis$1255=(0);}
        if(signal$1256===undefined){signal$1256=(1);}
        var inputMillis$1257=hours$1252.times($$$ct798.getMilliseconds$base().perHour).plus(minutes$1253.times($$$ct798.getMilliseconds$base().perMinute)).plus(seconds$1254.times($$$ct798.getMilliseconds$base().perSecond)).plus(millis$1255);
        var days$1258=$$$ct798.getDays$base().fromMillis(inputMillis$1257).times(signal$1256);
        var restOfMillis$1259=$$$ct798.floorMod$internal$math(inputMillis$1257,$$$ct798.getMilliseconds$base().perDay).times(signal$1256).plus($$gregorianDateTime.time.millisecondsOfDay);
        var totalDays$1260=days$1258.plus($$$ct798.floorDiv$internal$math(restOfMillis$1259,$$$ct798.getMilliseconds$base().perDay));
        var newMillis$1261=$$$ct798.floorMod$internal$math(restOfMillis$1259,$$$ct798.getMilliseconds$base().perDay);
        var newTime$1262=(opt$1263=(newMillis$1261.equals($$gregorianDateTime.time.millisecondsOfDay)?$$gregorianDateTime.time:null),opt$1263!==null?opt$1263:TimeOfDay$internal(newMillis$1261));
        var opt$1263;
        return GregorianDateTime$internal($$gregorianDateTime.date.plusDays(totalDays$1260),newTime$1262);
    };fromTime$1160.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.DateTime},$ps:[{$nm:'hours',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'minutes',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'millis',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'signal',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']['$m']['fromTime']};//fromTime$1160.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.DateTime}};
    return $$gregorianDateTime;
}
GregorianDateTime$internal.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.DateTime}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['GregorianDateTime']};
exports.GregorianDateTime$internal=GregorianDateTime$internal;
function $init$GregorianDateTime$internal(){
    if (GregorianDateTime$internal.$$===undefined){
        $$$cl1.initTypeProto(GregorianDateTime$internal,'ceylon.time.internal::GregorianDateTime',$$$cl1.Basic,$$$ct798.$init$DateTime());
    }
    return GregorianDateTime$internal;
}
exports.$init$GregorianDateTime$internal=$init$GregorianDateTime$internal;
$init$GregorianDateTime$internal();
function julianDate$internal(year$1264,month$1265,date$1266){
    return $$$cl1.getNothing();
}
exports.julianDate$internal=julianDate$internal;
julianDate$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Date},$ps:[{$nm:'year',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'month',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'date',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['julianDate']};//julianDate$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Date}};
function floor$internal$math(x$1267){
    if(((!x$1267.fractionalPart.equals($$$cl1.Float(0.0)))&&x$1267.negative)){
        return x$1267.integer.minus((1));
    }
    var i$1268=x$1267.integer;
    return i$1268;
}
exports.floor$internal$math=floor$internal$math;
floor$internal$math.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Float}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal.math',d:$$METAMODEL$$['ceylon.time.internal.math']['floor']};//floor$internal$math.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Float},Element:{t:$$$cl1.Float}}},Return:{t:$$$cl1.Integer}};
var floorDiv$internal$math=function (x$1269,y$1270){
    return floor$internal$math(x$1269.$float.divided(y$1270.$float));
};
floorDiv$internal$math.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal.math',d:$$METAMODEL$$['ceylon.time.internal.math']['floorDiv']};
exports.floorDiv$internal$math=floorDiv$internal$math;
var round$internal$math=function (f$1271){
    return floor$internal$math(f$1271.plus($$$cl1.Float(0.5)));
};
round$internal$math.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'f',$mt:'prm',$t:{t:$$$cl1.Float}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal.math',d:$$METAMODEL$$['ceylon.time.internal.math']['round']};
exports.round$internal$math=round$internal$math;
function floorMod$internal$math(x$1272,y$1273){
    var fx$1274=x$1272.$float;
    var fy$1275=y$1273.$float;
    return fx$1274.minus(fy$1275.times(floor$internal$math(fx$1274.divided(fy$1275)))).integer;
}
exports.floorMod$internal$math=floorMod$internal$math;
floorMod$internal$math.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal.math',d:$$METAMODEL$$['ceylon.time.internal.math']['floorMod']};//floorMod$internal$math.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
function adjustedMod$internal$math(x$1276,y$1277){
    var amod$1278=floorMod$internal$math(x$1276,y$1277);
    if(amod$1278.equals((0))){
        return y$1277;
    }
    return amod$1278;
}
exports.adjustedMod$internal$math=adjustedMod$internal$math;
adjustedMod$internal$math.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Integer},$ps:[{$nm:'x',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'y',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal.math',d:$$METAMODEL$$['ceylon.time.internal.math']['adjustedMod']};//adjustedMod$internal$math.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$cl1.Integer}};
function TimeOfDay$internal(millisecondsOfDay$1279, $$timeOfDay){
    $init$TimeOfDay$internal();
    if ($$timeOfDay===undefined)$$timeOfDay=new TimeOfDay$internal.$$;
    $$$ct798.Time($$timeOfDay);
    var millisecondsOfDay=millisecondsOfDay$1279;
    $$$cl1.defineAttr($$timeOfDay,'millisecondsOfDay',function(){return millisecondsOfDay;});
    $$$cl1.defineAttr($$timeOfDay,'hours',function(){return $$timeOfDay.millisecondsOfDay.divided($$$ct798.getMilliseconds$base().perHour);});
    $$$cl1.defineAttr($$timeOfDay,'minutes',function(){return $$$ct798.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct798.getMilliseconds$base().perHour).divided($$$ct798.getMilliseconds$base().perMinute);});
    $$$cl1.defineAttr($$timeOfDay,'seconds',function(){return $$$ct798.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct798.getMilliseconds$base().perMinute).divided($$$ct798.getMilliseconds$base().perSecond);});
    $$$cl1.defineAttr($$timeOfDay,'milliseconds',function(){return $$$ct798.floorMod$internal$math($$timeOfDay.millisecondsOfDay,$$$ct798.getMilliseconds$base().perSecond);});
    $$$cl1.defineAttr($$timeOfDay,'secondsOfDay',function(){return $$timeOfDay.millisecondsOfDay.divided($$$ct798.getMilliseconds$base().perSecond);});
    $$$cl1.defineAttr($$timeOfDay,'minutesOfDay',function(){return $$timeOfDay.secondsOfDay.divided($$$ct798.getSeconds$base().perMinute);});
    function compare(other$1280){
        return $$timeOfDay.millisecondsOfDay.compare(other$1280.millisecondsOfDay);
    }
    $$timeOfDay.compare=compare;
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.Time}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['compare']};//compare.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Time},Element:{t:$$$ct798.Time}}},Return:{t:$$$cl1.Comparison}};
    $$$cl1.defineAttr($$timeOfDay,'predecessor',function(){return $$timeOfDay.minusMilliseconds((1));});
    $$$cl1.defineAttr($$timeOfDay,'successor',function(){return $$timeOfDay.plusMilliseconds((1));});
    $$$cl1.defineAttr($$timeOfDay,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$$cl1.StringBuilder().appendAll([leftPad$internal($$timeOfDay.hours).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.minutes).string,$$$cl1.String(":",1),leftPad$internal($$timeOfDay.seconds).string,$$$cl1.String(".",1),leftPad$internal($$timeOfDay.milliseconds,$$$cl1.String("000",3)).string]).string;
    });
    var plusHours=function (hours$1281){
        return $$timeOfDay.plusMilliseconds(hours$1281.times($$$ct798.getMilliseconds$base().perHour));
    };
    plusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['plusHours']};
    $$timeOfDay.plusHours=plusHours;
    var minusHours=function (hours$1282){
        return $$timeOfDay.minusMilliseconds(hours$1282.times($$$ct798.getMilliseconds$base().perHour));
    };
    minusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['minusHours']};
    $$timeOfDay.minusHours=minusHours;
    var plusMinutes=function (minutes$1283){
        return $$timeOfDay.plusMilliseconds(minutes$1283.times($$$ct798.getMilliseconds$base().perMinute));
    };
    plusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['plusMinutes']};
    $$timeOfDay.plusMinutes=plusMinutes;
    var minusMinutes=function (minutes$1284){
        return $$timeOfDay.minusMilliseconds(minutes$1284.times($$$ct798.getMilliseconds$base().perMinute));
    };
    minusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['minusMinutes']};
    $$timeOfDay.minusMinutes=minusMinutes;
    var plusSeconds=function (seconds$1285){
        return $$timeOfDay.plusMilliseconds(seconds$1285.times($$$ct798.getMilliseconds$base().perSecond));
    };
    plusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['plusSeconds']};
    $$timeOfDay.plusSeconds=plusSeconds;
    var minusSeconds=function (seconds$1286){
        return $$timeOfDay.minusMilliseconds(seconds$1286.times($$$ct798.getMilliseconds$base().perSecond));
    };
    minusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['minusSeconds']};
    $$timeOfDay.minusSeconds=minusSeconds;
    function plusMilliseconds(milliseconds$1287){
        if(milliseconds$1287.equals((0))){
            return $$timeOfDay;
        }
        var newMillisOfDay$1288=$$$ct798.floorMod$internal$math($$timeOfDay.millisecondsOfDay.plus(milliseconds$1287),$$$ct798.getMilliseconds$base().perDay);
        return (opt$1289=(newMillisOfDay$1288.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1289!==null?opt$1289:TimeOfDay$internal(newMillisOfDay$1288));
        var opt$1289;
    }
    $$timeOfDay.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['plusMilliseconds']};//plusMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Time}};
    var minusMilliseconds=function (milliseconds$1290){
        return $$timeOfDay.plusMilliseconds((-milliseconds$1290));
    };
    minusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['minusMilliseconds']};
    $$timeOfDay.minusMilliseconds=minusMilliseconds;
    function plus(period$1291){
        var totalMillis$1292=$$timeOfDay.millisecondsOfDay.plus(period$1291.milliseconds).plus(period$1291.seconds.times($$$ct798.getMilliseconds$base().perSecond)).plus(period$1291.minutes.times($$$ct798.getMilliseconds$base().perMinute)).plus(period$1291.hours.times($$$ct798.getMilliseconds$base().perHour));
        var time$1293=$$$ct798.floorMod$internal$math(totalMillis$1292,$$$ct798.getMilliseconds$base().perDay);
        return (opt$1294=(time$1293.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1294!==null?opt$1294:TimeOfDay$internal(time$1293));
        var opt$1294;
    }
    $$timeOfDay.plus=plus;
    plus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:$$$ct798.ReadableTimePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['plus']};//plus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadableTimePeriod$base},Element:{t:$$$ct798.ReadableTimePeriod$base}}},Return:{t:$$$ct798.Time}};
    function minus(period$1295){
        var totalMillis$1296=$$timeOfDay.millisecondsOfDay.minus(period$1295.milliseconds).minus(period$1295.seconds.times($$$ct798.getMilliseconds$base().perSecond)).minus(period$1295.minutes.times($$$ct798.getMilliseconds$base().perMinute)).minus(period$1295.hours.times($$$ct798.getMilliseconds$base().perHour));
        var time$1297=$$$ct798.floorMod$internal$math(totalMillis$1296,$$$ct798.getMilliseconds$base().perDay);
        return (opt$1298=(time$1297.equals($$timeOfDay.millisecondsOfDay)?$$timeOfDay:null),opt$1298!==null?opt$1298:TimeOfDay$internal(time$1297));
        var opt$1298;
    }
    $$timeOfDay.minus=minus;
    minus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'period',$mt:'prm',$t:{t:$$$ct798.ReadableTimePeriod$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['minus']};//minus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.ReadableTimePeriod$base},Element:{t:$$$ct798.ReadableTimePeriod$base}}},Return:{t:$$$ct798.Time}};
    function withHours(hours$1299){
        if($$timeOfDay.hours.equals(hours$1299)){
            return $$timeOfDay;
        }
        return $$$ct798.time(hours$1299,$$timeOfDay.minutes,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withHours=withHours;
    withHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['withHours']};//withHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Time}};
    function withMinutes(minutes$1300){
        if($$timeOfDay.minutes.equals(minutes$1300)){
            return $$timeOfDay;
        }
        return $$$ct798.time($$timeOfDay.hours,minutes$1300,$$timeOfDay.seconds,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withMinutes=withMinutes;
    withMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['withMinutes']};//withMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Time}};
    function withSeconds(seconds$1301){
        if($$timeOfDay.seconds.equals(seconds$1301)){
            return $$timeOfDay;
        }
        return $$$ct798.time($$timeOfDay.hours,$$timeOfDay.minutes,seconds$1301,$$timeOfDay.milliseconds);
    }
    $$timeOfDay.withSeconds=withSeconds;
    withSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['withSeconds']};//withSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Time}};
    function withMilliseconds(milliseconds$1302){
        if($$timeOfDay.milliseconds.equals(milliseconds$1302)){
            return $$timeOfDay;
        }
        return $$$ct798.time($$timeOfDay.hours,$$timeOfDay.minutes,$$timeOfDay.seconds,milliseconds$1302);
    }
    $$timeOfDay.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Time},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['withMilliseconds']};//withMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:$$$ct798.Time}};
    function equals(other$1303){
        var other$1304;
        if($$$cl1.isOfType((other$1304=other$1303),{t:TimeOfDay$internal})){
            return $$timeOfDay.millisecondsOfDay.equals(other$1304.millisecondsOfDay);
        }
        return false;
    }
    $$timeOfDay.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function periodFrom(start$1305){
        var from$1306=(opt$1307=($$timeOfDay.compare(start$1305).equals($$$cl1.getSmaller())?$$timeOfDay:null),opt$1307!==null?opt$1307:start$1305);
        var opt$1307;
        var to$1308=(opt$1309=($$timeOfDay.compare(start$1305).equals($$$cl1.getSmaller())?start$1305:null),opt$1309!==null?opt$1309:$$timeOfDay);
        var opt$1309;
        var total$1310=to$1308.millisecondsOfDay.minus(from$1306.millisecondsOfDay);
        var setTotal$1310=function(total$1311){return total$1310=total$1311;};
        var hh$1312=total$1310.divided($$$ct798.getMilliseconds$base().perHour);
        total$1310=total$1310.remainder($$$ct798.getMilliseconds$base().perHour);
        var mm$1313=total$1310.divided($$$ct798.getMilliseconds$base().perMinute);
        total$1310=total$1310.remainder($$$ct798.getMilliseconds$base().perMinute);
        var ss$1314=total$1310.divided($$$ct798.getMilliseconds$base().perSecond);
        var positive$1315=start$1305.compare($$timeOfDay).equals($$$cl1.getSmaller());
        return (hours$1316=(opt$1317=(positive$1315?hh$1312:null),opt$1317!==null?opt$1317:(-hh$1312)),minutes$1318=(opt$1319=(positive$1315?mm$1313:null),opt$1319!==null?opt$1319:(-mm$1313)),seconds$1320=(opt$1321=(positive$1315?ss$1314:null),opt$1321!==null?opt$1321:(-ss$1314)),milliseconds$1322=(opt$1323=(positive$1315?total$1310.remainder($$$ct798.getMilliseconds$base().perSecond):null),opt$1323!==null?opt$1323:(-total$1310.remainder($$$ct798.getMilliseconds$base().perSecond))),$$$ct798.Period(undefined,undefined,undefined,hours$1316,minutes$1318,seconds$1320,milliseconds$1322));
        var hours$1316,opt$1317,minutes$1318,opt$1319,seconds$1320,opt$1321,milliseconds$1322,opt$1323;
    }
    $$timeOfDay.periodFrom=periodFrom;
    periodFrom.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'start',$mt:'prm',$t:{t:$$$ct798.Time}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['periodFrom']};//periodFrom.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Time},Element:{t:$$$ct798.Time}}},Return:{t:$$$ct798.Period}};
    var periodTo=function (end$1324){
        return end$1324.periodFrom($$timeOfDay);
    };
    periodTo.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.Period},$ps:[{$nm:'end',$mt:'prm',$t:{t:$$$ct798.Time}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['periodTo']};
    $$timeOfDay.periodTo=periodTo;
    function to(other$1325){
        return $$$ct798.TimeRange($$timeOfDay,other$1325);
    }
    $$timeOfDay.to=to;
    to.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$ct798.TimeRange},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$ct798.Time}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']['$m']['to']};//to.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.Time},Element:{t:$$$ct798.Time}}},Return:{t:$$$ct798.TimeRange}};
    return $$timeOfDay;
}
TimeOfDay$internal.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.Time}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['TimeOfDay']};
exports.TimeOfDay$internal=TimeOfDay$internal;
function $init$TimeOfDay$internal(){
    if (TimeOfDay$internal.$$===undefined){
        $$$cl1.initTypeProto(TimeOfDay$internal,'ceylon.time.internal::TimeOfDay',$$$cl1.Basic,$$$ct798.$init$Time());
    }
    return TimeOfDay$internal;
}
exports.$init$TimeOfDay$internal=$init$TimeOfDay$internal;
$init$TimeOfDay$internal();
function leftPad$internal(number$1326,padding$1327){
    if(padding$1327===undefined){padding$1327=$$$cl1.String("00",2);}
    if(number$1326.equals((0))){
        return padding$1327;
    }
    var string$1328=number$1326.string;
    var digits$1329=string$1328.size;
    if(digits$1329.compare(padding$1327.size).equals($$$cl1.getSmaller())){
        var padded$1330=padding$1327.plus(string$1328);
        return padded$1330.segment(padded$1330.size.minus(padding$1327.size),padding$1327.size);
    }
    return string$1328;
}
exports.leftPad$internal=leftPad$internal;
leftPad$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.String},$ps:[{$nm:'number',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'padding',$mt:'prm',$def:1,$t:{t:$$$cl1.String}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['leftPad']};//leftPad$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.String},Element:{t:$$$cl1.String}}},Return:{t:$$$cl1.String}};
function intersect$internal(start$1331,end$1332,otherStart$1333,otherEnd$1334,$$$mptypes){
    return ((start$1331.compare(otherEnd$1334)!==$$$cl1.getLarger())&&(end$1332.compare(otherStart$1333)!==$$$cl1.getSmaller()));
}
exports.intersect$internal=intersect$internal;
intersect$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'start',$mt:'prm',$t:'Value'},{$nm:'end',$mt:'prm',$t:'Value'},{$nm:'otherStart',$mt:'prm',$t:'Value'},{$nm:'otherEnd',$mt:'prm',$t:'Value'}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['intersect']};//intersect$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},Return:{t:$$$cl1.Boolean}};
function overlap$internal(first$1335,second$1336,$$$mptypes){
    var ordered$1337=$$$cl1.sort($$$cl1.join([first$1335,second$1336].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    if(($$$cl1.Range(first$1335,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1337)&&$$$cl1.Range(second$1336,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1337))){
        //assert at utils.ceylon (39:8-39:44)
        var start$1338;
        if (!((start$1338=ordered$1337.first)!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists start = ordered.first\' at utils.ceylon (39:14-39:43)'); }
        //assert at utils.ceylon (40:8-40:41)
        var end$1339;
        if (!((end$1339=ordered$1337.last)!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists end = ordered.last\' at utils.ceylon (40:14-40:40)'); }
        return $$$cl1.Tuple(start$1338,$$$cl1.Tuple(end$1339,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
    }
    return $$$cl1.getEmpty();
}
exports.overlap$internal=overlap$internal;
overlap$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},{t:$$$cl1.Empty}]},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}}},{$nm:'second',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}},{t:$$$cl1.Ordinal,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['overlap']};//overlap$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}},Return:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}},{t:$$$cl1.Empty}]}};
function gap$internal(first$1340,second$1341,$$$mptypes){
    var ordered$1342=$$$cl1.sort($$$cl1.join([first$1340,second$1341].reifyCeylonType({Absent:{t:$$$cl1.Null},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}),{Element:$$$mptypes.Value}),{Element:$$$mptypes.Value}).segment((1),(2));
    if(($$$cl1.Range(first$1340,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1342)&&$$$cl1.Range(second$1341,undefined,{Element:$$$mptypes.Value}).containsEvery(ordered$1342))){
        return $$$cl1.getEmpty();
    }
    //assert at utils.ceylon (66:4-66:40)
    var start$1343;
    if (!((start$1343=ordered$1342.first)!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists start = ordered.first\' at utils.ceylon (66:10-66:39)'); }
    //assert at utils.ceylon (67:4-67:37)
    var end$1344;
    if (!((end$1344=ordered$1342.last)!==null)) { throw $$$cl1.AssertionException('Assertion failed: \'exists end = ordered.last\' at utils.ceylon (67:10-67:36)'); }
    return $$$cl1.Tuple(start$1343,$$$cl1.Tuple(end$1344,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value});
}
exports.gap$internal=gap$internal;
gap$internal.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}},{t:$$$cl1.Empty}]},$ps:[{$nm:'first',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}}},{$nm:'second',$mt:'prm',$t:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:'Value',Element:'Value'}},First:'Value',Element:'Value'}}}],$tp:{Value:{'satisfies':[{t:$$$cl1.Comparable,a:{Other:'Value'}},{t:$$$cl1.Ordinal,a:{Other:'Value'}}]}},$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.internal',d:$$METAMODEL$$['ceylon.time.internal']['gap']};//gap$internal.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}},Element:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}}}},Return:{ t:'u', l:[{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:$$$mptypes.Value,Element:$$$mptypes.Value}},First:$$$mptypes.Value,Element:$$$mptypes.Value}},{t:$$$cl1.Empty}]}};
function Period(years$1345, months$1346, days$1347, hours$1348, minutes$1349, seconds$1350, milliseconds$1351, $$period){
    $init$Period();
    if ($$period===undefined)$$period=new Period.$$;
    $$period.$$targs$$={Self:{t:Period}};
    $$period.$$targs$$={Other:{t:Period}};
    $$period.$$targs$$={Other:{t:Period}};
    if(years$1345===undefined){years$1345=(0);}
    if(months$1346===undefined){months$1346=(0);}
    if(days$1347===undefined){days$1347=(0);}
    if(hours$1348===undefined){hours$1348=(0);}
    if(minutes$1349===undefined){minutes$1349=(0);}
    if(seconds$1350===undefined){seconds$1350=(0);}
    if(milliseconds$1351===undefined){milliseconds$1351=(0);}
    $$$ct798.ReadablePeriod$base($$period);
    $$$ct798.ReadableTimePeriod$base($$period);
    $$$ct798.ReadableDatePeriod$base($$period);
    $$$ct798.PeriodBehavior$base($$period);
    $$$cl1.add_type_arg($$period,'Self',{t:Period});
    $$$cl1.Comparable($$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    $$$cl1.Summable($$period);
    $$$cl1.add_type_arg($$period,'Other',{t:Period});
    var years=years$1345;
    $$$cl1.defineAttr($$period,'years',function(){return years;});
    var months=months$1346;
    $$$cl1.defineAttr($$period,'months',function(){return months;});
    var days=days$1347;
    $$$cl1.defineAttr($$period,'days',function(){return days;});
    var hours=hours$1348;
    $$$cl1.defineAttr($$period,'hours',function(){return hours;});
    var minutes=minutes$1349;
    $$$cl1.defineAttr($$period,'minutes',function(){return minutes;});
    var seconds=seconds$1350;
    $$$cl1.defineAttr($$period,'seconds',function(){return seconds;});
    var milliseconds=milliseconds$1351;
    $$$cl1.defineAttr($$period,'milliseconds',function(){return milliseconds;});
    function equals(that$1352){
        var that$1353;
        if($$$cl1.isOfType((that$1353=that$1352),{t:Period})){
            if(($$period===that$1353)){
                return true;
            }
            return (((((($$period.years.equals(that$1353.years)&&$$period.months.equals(that$1353.months))&&$$period.days.equals(that$1353.days))&&$$period.hours.equals(that$1353.hours))&&$$period.minutes.equals(that$1353.minutes))&&$$period.seconds.equals(that$1353.seconds))&&$$period.milliseconds.equals(that$1353.milliseconds));
        }
        return false;
    }
    $$period.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'that',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function compare(other$1354){
        var norm1$1355=$$period.normalized();
        var norm2$1356=other$1354.normalized();
        return (opt$1357=((!norm1$1355.years.equals(norm2$1356.years))?norm1$1355.years.compare(norm2$1356.years):null),opt$1357!==null?opt$1357:(opt$1358=((!norm1$1355.months.equals(norm2$1356.months))?norm1$1355.months.compare(norm2$1356.months):null),opt$1358!==null?opt$1358:(opt$1359=((!norm1$1355.days.equals(norm2$1356.days))?norm1$1355.days.compare(norm2$1356.days):null),opt$1359!==null?opt$1359:(opt$1360=((!norm1$1355.hours.equals(norm2$1356.hours))?norm1$1355.hours.compare(norm2$1356.hours):null),opt$1360!==null?opt$1360:(opt$1361=((!norm1$1355.minutes.equals(norm2$1356.minutes))?norm1$1355.minutes.compare(norm2$1356.minutes):null),opt$1361!==null?opt$1361:(opt$1362=((!norm1$1355.seconds.equals(norm2$1356.seconds))?norm1$1355.seconds.compare(norm2$1356.seconds):null),opt$1362!==null?opt$1362:norm1$1355.milliseconds.compare(norm2$1356.milliseconds)))))));
        var opt$1357,opt$1358,opt$1359,opt$1360,opt$1361,opt$1362;
    }
    $$period.compare=compare;
    compare.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Comparison},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['compare']};//compare.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Period},Element:{t:Period}}},Return:{t:$$$cl1.Comparison}};
    function isZero(){
        return $$period.equals(getZero());
    }
    $$period.isZero=isZero;
    isZero.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['isZero']};//isZero.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Boolean}};
    function withYears(years$1363){
        if(years$1363.equals($$period.years)){
            return $$period;
        }
        return Period(years$1363,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withYears=withYears;
    withYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withYears']};//withYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withMonths(months$1364){
        if(months$1364.equals($$period.months)){
            return $$period;
        }
        return Period($$period.years,months$1364,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withMonths=withMonths;
    withMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withMonths']};//withMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withDays(days$1365){
        if(days$1365.equals($$period.days)){
            return $$period;
        }
        return Period($$period.years,$$period.months,days$1365,$$period.hours,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withDays=withDays;
    withDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withDays']};//withDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withHours(hours$1366){
        if(hours$1366.equals($$period.hours)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,hours$1366,$$period.minutes,$$period.seconds,$$period.milliseconds);
    }
    $$period.withHours=withHours;
    withHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withHours']};//withHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withMinutes(minutes$1367){
        if(minutes$1367.equals($$period.minutes)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,minutes$1367,$$period.seconds,$$period.milliseconds);
    }
    $$period.withMinutes=withMinutes;
    withMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withMinutes']};//withMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withSeconds(seconds$1368){
        if(seconds$1368.equals($$period.seconds)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,seconds$1368,$$period.milliseconds);
    }
    $$period.withSeconds=withSeconds;
    withSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withSeconds']};//withSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function withMilliseconds(milliseconds$1369){
        if(milliseconds$1369.equals($$period.milliseconds)){
            return $$period;
        }
        return Period($$period.years,$$period.months,$$period.days,$$period.hours,$$period.minutes,$$period.seconds,milliseconds$1369);
    }
    $$period.withMilliseconds=withMilliseconds;
    withMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['withMilliseconds']};//withMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusYears(years$1370){
        return $$period.withYears($$period.years.plus(years$1370));
    }
    $$period.plusYears=plusYears;
    plusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusYears']};//plusYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusMonths(months$1371){
        return $$period.withMonths($$period.months.plus(months$1371));
    }
    $$period.plusMonths=plusMonths;
    plusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusMonths']};//plusMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusDays(days$1372){
        return $$period.withDays($$period.days.plus(days$1372));
    }
    $$period.plusDays=plusDays;
    plusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusDays']};//plusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusHours(hours$1373){
        return $$period.withHours($$period.hours.plus(hours$1373));
    }
    $$period.plusHours=plusHours;
    plusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusHours']};//plusHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusMinutes(minutes$1374){
        return $$period.withMinutes($$period.minutes.plus(minutes$1374));
    }
    $$period.plusMinutes=plusMinutes;
    plusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusMinutes']};//plusMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusSeconds(seconds$1375){
        return $$period.withSeconds($$period.seconds.plus(seconds$1375));
    }
    $$period.plusSeconds=plusSeconds;
    plusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusSeconds']};//plusSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plusMilliseconds(milliseconds$1376){
        return $$period.withMilliseconds($$period.milliseconds.plus(milliseconds$1376));
    }
    $$period.plusMilliseconds=plusMilliseconds;
    plusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plusMilliseconds']};//plusMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusYears(years$1377){
        return $$period.plusYears((-years$1377));
    }
    $$period.minusYears=minusYears;
    minusYears.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'years',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusYears']};//minusYears.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusMonths(months$1378){
        return $$period.plusMonths((-months$1378));
    }
    $$period.minusMonths=minusMonths;
    minusMonths.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'months',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusMonths']};//minusMonths.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusDays(days$1379){
        return $$period.plusDays((-days$1379));
    }
    $$period.minusDays=minusDays;
    minusDays.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'days',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusDays']};//minusDays.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusHours(hours$1380){
        return $$period.plusHours((-hours$1380));
    }
    $$period.minusHours=minusHours;
    minusHours.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusHours']};//minusHours.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusMinutes(minutes$1381){
        return $$period.plusMinutes((-minutes$1381));
    }
    $$period.minusMinutes=minusMinutes;
    minusMinutes.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusMinutes']};//minusMinutes.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusSeconds(seconds$1382){
        return $$period.plusSeconds((-seconds$1382));
    }
    $$period.minusSeconds=minusSeconds;
    minusSeconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'seconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusSeconds']};//minusSeconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function minusMilliseconds(milliseconds$1383){
        return $$period.plusMilliseconds((-milliseconds$1383));
    }
    $$period.minusMilliseconds=minusMilliseconds;
    minusMilliseconds.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'milliseconds',$mt:'prm',$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['minusMilliseconds']};//minusMilliseconds.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Period}};
    function plus(other$1384){
        return (years$1385=$$period.years.plus(other$1384.years),months$1386=$$period.months.plus(other$1384.months),days$1387=$$period.days.plus(other$1384.days),hours$1388=$$period.hours.plus(other$1384.hours),minutes$1389=$$period.minutes.plus(other$1384.minutes),seconds$1390=$$period.seconds.plus(other$1384.seconds),milliseconds$1391=$$period.milliseconds.plus(other$1384.milliseconds),Period(years$1385,months$1386,days$1387,hours$1388,minutes$1389,seconds$1390,milliseconds$1391));
        var years$1385,months$1386,days$1387,hours$1388,minutes$1389,seconds$1390,milliseconds$1391;
    }
    $$period.plus=plus;
    plus.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[{$nm:'other',$mt:'prm',$t:{t:Period}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['plus']};//plus.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Period},Element:{t:Period}}},Return:{t:Period}};
    $$$cl1.defineAttr($$period,'dateOnly',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$period;
    });
    $$$cl1.defineAttr($$period,'timeOnly',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$period;
    });
    function normalized(){
        if($$period.equals(getZero())){
            return getZero();
        }
        var years$1392=$$period.years.plus($$period.months.divided((12)));
        var months$1393=$$period.months.remainder((12));
        var total$1394=$$period.hours.times($$$ct798.getSeconds$base().perHour).plus($$period.minutes.times($$$ct798.getSeconds$base().perMinute)).plus($$period.seconds);
        var setTotal$1394=function(total$1395){return total$1394=total$1395;};
        var millis$1396=$$period.milliseconds.remainder($$$ct798.getMilliseconds$base().perSecond);
        (total$1394=total$1394.plus($$period.milliseconds.divided($$$ct798.getMilliseconds$base().perSecond)));
        var seconds$1397=total$1394.remainder($$$ct798.getSeconds$base().perMinute);
        total$1394=total$1394.divided($$$ct798.getSeconds$base().perMinute);
        var minutes$1398=total$1394.remainder($$$ct798.getMinutes$base().perHour);
        var hours$1399=total$1394.divided($$$ct798.getMinutes$base().perHour);
        return (years$1400=years$1392,months$1401=months$1393,days$1402=$$period.days,hours$1403=hours$1399,minutes$1404=minutes$1398,seconds$1405=seconds$1397,milliseconds$1406=millis$1396,Period(years$1400,months$1401,days$1402,hours$1403,minutes$1404,seconds$1405,milliseconds$1406));
        var years$1400,months$1401,days$1402,hours$1403,minutes$1404,seconds$1405,milliseconds$1406;
    }
    $$period.normalized=normalized;
    normalized.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Period},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']['$m']['normalized']};//normalized.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:Period}};
    $$$cl1.defineAttr($$period,'string',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        if($$period.equals(getZero())){
            return $$$cl1.String("PT0S",4);
        }else {
            var buf$1407=$$$cl1.StringBuilder();
            buf$1407.append($$$cl1.String("P",1));
            if((!$$period.years.equals((0)))){
                buf$1407.append($$period.years.string).append($$$cl1.String("Y",1));
            }
            if((!$$period.months.equals((0)))){
                buf$1407.append($$period.months.string).append($$$cl1.String("M",1));
            }
            if((!$$period.days.equals((0)))){
                buf$1407.append($$period.days.string).append($$$cl1.String("D",1));
            }
            if(((((!$$period.hours.equals((0)))||(!$$period.minutes.equals((0))))||(!$$period.seconds.equals((0))))||(!$$period.milliseconds.equals((0))))){
                buf$1407.append($$$cl1.String("T",1));
                if((!$$period.hours.equals((0)))){
                    buf$1407.append($$period.hours.string).append($$$cl1.String("H",1));
                }
                if((!$$period.minutes.equals((0)))){
                    buf$1407.append($$period.minutes.string).append($$$cl1.String("M",1));
                }
                if(((!$$period.seconds.equals((0)))||(!$$period.milliseconds.equals((0))))){
                    buf$1407.append($$period.seconds.string);
                    if((!$$period.milliseconds.equals((0)))){
                        buf$1407.append($$$cl1.StringBuilder().appendAll([$$$cl1.String(".",1),$$$ct798.leftPad$internal($$period.milliseconds,$$$cl1.String("000",3)).string]).string);
                    }
                    buf$1407.append($$$cl1.String("S",1));
                }
            }
            return buf$1407.string;
        }
    });
    return $$period;
}
Period.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.ReadablePeriod$base},{t:$$$ct798.ReadableTimePeriod$base},{t:$$$ct798.ReadableDatePeriod$base},{t:$$$ct798.PeriodBehavior$base,a:{Self:{t:Period}}},{t:$$$cl1.Comparable,a:{Other:{t:Period}}},{t:$$$cl1.Summable,a:{Other:{t:Period}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Period']};
exports.Period=Period;
function $init$Period(){
    if (Period.$$===undefined){
        $$$cl1.initTypeProto(Period,'ceylon.time::Period',$$$cl1.Basic,$$$ct798.$init$ReadablePeriod$base(),$$$ct798.$init$ReadableTimePeriod$base(),$$$ct798.$init$ReadableDatePeriod$base(),$$$ct798.$init$PeriodBehavior$base(),$$$cl1.Comparable,$$$cl1.Summable);
    }
    return Period;
}
exports.$init$Period=$init$Period;
$init$Period();
var zero$1408=Period();
var getZero=function(){return zero$1408;};
exports.getZero=getZero;
function Time($$time){
    $$$ct798.ReadableTime$base($$time);
    $$$ct798.TimeBehavior$base($$time);
    $$$cl1.add_type_arg($$time,'Element',{t:Time});
    $$$cl1.Comparable($$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
    $$$cl1.Ordinal($$time);
    $$$cl1.add_type_arg($$time,'Other',{t:Time});
}
Time.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:$$$ct798.ReadableTime$base},{t:$$$ct798.TimeBehavior$base,a:{Element:{t:Time}}},{t:$$$cl1.Comparable,a:{Other:{t:Time}}},{t:$$$cl1.Ordinal,a:{Other:{t:Time}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['Time']};
exports.Time=Time;
function $init$Time(){
    if (Time.$$===undefined){
        $$$cl1.initTypeProto(Time,'ceylon.time::Time',$$$ct798.$init$ReadableTime$base(),$$$ct798.$init$TimeBehavior$base(),$$$cl1.Comparable,$$$cl1.Ordinal);
    }
    return Time;
}
exports.$init$Time=$init$Time;
$init$Time();
function time(hours$1409,minutes$1410,seconds$1411,milliseconds$1412){
    if(seconds$1411===undefined){seconds$1411=(0);}
    if(milliseconds$1412===undefined){milliseconds$1412=(0);}
    var hours$1413=hours$1409;
    var minutes$1414=minutes$1410;
    var seconds$1415=seconds$1411;
    var milliseconds$1416=milliseconds$1412;
    //assert at Time.ceylon (59:4-60:35)
    if (!((tmpvar$1417=hours$1413,tmpvar$1417.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1417.compare($$$ct798.getHours$base().perDay)===$$$cl1.getSmaller()))) { throw $$$cl1.AssertionException('Hours value should be between 0 and 23: \' 0 <= hours < h.perDay \' at Time.ceylon (60:10-60:34)'); }
    //assert at Time.ceylon (62:4-63:40)
    if (!((tmpvar$1418=minutes$1414,tmpvar$1418.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1418.compare($$$ct798.getMinutes$base().perHour)===$$$cl1.getSmaller()))) { throw $$$cl1.AssertionException('Minutes value should be between 0 and 59: \' 0 <= minutes < min.perHour \' at Time.ceylon (63:10-63:39)'); }
    //assert at Time.ceylon (65:4-66:42)
    if (!((tmpvar$1419=seconds$1415,tmpvar$1419.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1419.compare($$$ct798.getSeconds$base().perMinute)===$$$cl1.getSmaller()))) { throw $$$cl1.AssertionException('Seconds value should be between 0 and 59: \' 0 <= seconds < sec.perMinute \' at Time.ceylon (66:10-66:41)'); }
    //assert at Time.ceylon (68:4-69:46)
    if (!((tmpvar$1420=milliseconds$1416,tmpvar$1420.compare((0))!==$$$cl1.getSmaller()&&tmpvar$1420.compare($$$ct798.getMilliseconds$base().perSecond)===$$$cl1.getSmaller()))) { throw $$$cl1.AssertionException('Milliseconds value should be between 0 and 999: \' 0 <= milliseconds < ms.perSecond \' at Time.ceylon (69:10-69:45)'); }
    var hh$1421=hours$1413.times($$$ct798.getMilliseconds$base().perHour);
    var mm$1422=minutes$1414.times($$$ct798.getMilliseconds$base().perMinute);
    var ss$1423=seconds$1415.times($$$ct798.getMilliseconds$base().perSecond);
    return $$$ct798.TimeOfDay$internal(hh$1421.plus(mm$1422).plus(ss$1423).plus(milliseconds$1416));
}
exports.time=time;
time.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'hours',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'minutes',$mt:'prm',$t:{t:$$$cl1.Integer}},{$nm:'seconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}},{$nm:'milliseconds',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['time']};//time.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Time}};
function TimeRange(from$1424, to$1425, step$1426, $$timeRange){
    $init$TimeRange();
    if ($$timeRange===undefined)$$timeRange=new TimeRange.$$;
    $$timeRange.$$targs$$={StepBy:{t:$$$ct798.UnitOfTime$base},Self:{t:TimeRange},Element:{t:Time}};
    if(step$1426===undefined){step$1426=$$$ct798.getMilliseconds$base();}
    $$$ct798.Range$base($$timeRange);
    $$$cl1.add_type_arg($$timeRange,'StepBy',{t:$$$ct798.UnitOfTime$base});
    $$$cl1.add_type_arg($$timeRange,'Self',{t:TimeRange});
    $$$cl1.add_type_arg($$timeRange,'Element',{t:Time});
    $$timeRange.equals$$ceylon$time$base$Range=$$timeRange.equals;
    var from=from$1424;
    $$$cl1.defineAttr($$timeRange,'from',function(){return from;});
    var to=to$1425;
    $$$cl1.defineAttr($$timeRange,'to',function(){return to;});
    var step=step$1426;
    $$$cl1.defineAttr($$timeRange,'step',function(){return step;});
    $$$cl1.defineAttr($$timeRange,'period',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return $$timeRange.from.periodTo($$timeRange.to);
    });
    $$$cl1.defineAttr($$timeRange,'duration',function()/*anotaciones:ceylon.language::Shared,ceylon.language::Actual,*/{
        return Duration($$timeRange.to.millisecondsOfDay.minus($$timeRange.from.millisecondsOfDay));
    });
    function equals(other$1427){
        return $$timeRange.equals$$ceylon$time$base$Range(other$1427);
    }
    $$timeRange.equals=equals;
    equals.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Boolean},$ps:[{$nm:'other',$mt:'prm',$t:{t:$$$cl1.Object}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['equals']};//equals.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Object},Element:{t:$$$cl1.Object}}},Return:{t:$$$cl1.Boolean}};
    function overlap(other$1428){
        var response$1429=$$$ct798.overlap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1428.from,$$$cl1.Tuple(other$1428.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
        var response$1430;
        if($$$cl1.isOfType((response$1430=response$1429),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})){
            return TimeRange(response$1430.get((0)),response$1430.get((1)));
        }
        //assert at TimeRange.ceylon (28:8-28:34)
        var response$1431;
        if (!($$$cl1.isOfType((response$1431=response$1429),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at TimeRange.ceylon (28:14-28:33)'); }
        return response$1431;
    }
    $$timeRange.overlap=overlap;
    overlap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:TimeRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['overlap']};//overlap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TimeRange},Element:{t:TimeRange}}},Return:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]}};
    function gap(other$1432){
        var response$1433=$$$ct798.gap$internal($$$cl1.Tuple($$timeRange.from,$$$cl1.Tuple($$timeRange.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),$$$cl1.Tuple(other$1432.from,$$$cl1.Tuple(other$1432.to,$$$cl1.getEmpty(),{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}),{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}),{Value:{t:Time}});
        var response$1434;
        if($$$cl1.isOfType((response$1434=response$1433),{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:Time},Element:{t:Time}}},First:{t:Time},Element:{t:Time}}})){
            return TimeRange(response$1434.get((0)),response$1434.get((1)));
        }
        //assert at TimeRange.ceylon (37:8-37:34)
        var response$1435;
        if (!($$$cl1.isOfType((response$1435=response$1433),{t:$$$cl1.Empty}))) { throw $$$cl1.AssertionException('Assertion failed: \' is Empty response\' at TimeRange.ceylon (37:14-37:33)'); }
        return response$1435;
    }
    $$timeRange.gap=gap;
    gap.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]},$ps:[{$nm:'other',$mt:'prm',$t:{t:TimeRange}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['gap']};//gap.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:TimeRange},Element:{t:TimeRange}}},Return:{ t:'u', l:[{t:TimeRange},{t:$$$cl1.Empty}]}};
    function iterator(){
        function listIterator$1436($$targs$$){
            var $$listIterator$1436=new listIterator$1436.$$;
            $$listIterator$1436.$$targs$$=$$targs$$;
            $$$cl1.Iterator($$listIterator$1436);
            $$$cl1.add_type_arg($$listIterator$1436,'Element',{t:Time});
            var count$1437=(0);
            $$$cl1.defineAttr($$listIterator$1436,'count$1437',function(){return count$1437;},function(count$1438){return count$1437=count$1438;});
            function next(){
                var date$1439=(opt$1440=($$timeRange.from.compare($$timeRange.to).equals($$$cl1.getLarger())?previousByStep$1441((oldcount$1442=count$1437,count$1437=oldcount$1442.successor,oldcount$1442)):null),opt$1440!==null?opt$1440:nextByStep$1443((oldcount$1444=count$1437,count$1437=oldcount$1444.successor,oldcount$1444)));
                var opt$1440,oldcount$1442,oldcount$1444;
                var continueLoop$1445=(opt$1446=(($$timeRange.from.compare($$timeRange.to)!==$$$cl1.getLarger())?(date$1439.compare($$timeRange.to)!==$$$cl1.getLarger()):null),opt$1446!==null?opt$1446:((date$1439.compare($$timeRange.to)!==$$$cl1.getSmaller())&&(date$1439.compare($$timeRange.from)!==$$$cl1.getLarger())));
                var opt$1446;
                return (opt$1447=(continueLoop$1445?date$1439:null),opt$1447!==null?opt$1447:$$$cl1.getFinished());
                var opt$1447;
            }
            $$listIterator$1436.next=next;
            next.$$metamodel$$={mod:$$METAMODEL$$,$t:{ t:'u', l:[{t:Time},{t:$$$cl1.Finished}]},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['iterator']['$o']['listIterator']['$m']['next']};//next.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{ t:'u', l:[{t:Time},{t:$$$cl1.Finished}]}};
            return $$listIterator$1436;
        }
        function $init$listIterator$1436(){
            if (listIterator$1436.$$===undefined){
                $$$cl1.initTypeProto(listIterator$1436,'ceylon.time::TimeRange.iterator.listIterator',$$$cl1.Basic,$$$cl1.Iterator);
            }
            return listIterator$1436;
        }
        $init$listIterator$1436();
        var listIterator$1448=listIterator$1436({Element:{t:Time}});
        var getListIterator$1448=function(){
            return listIterator$1448;
        }
        return getListIterator$1448();
    }
    $$timeRange.iterator=iterator;
    iterator.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:$$$cl1.Iterator,a:{Element:{t:Time}}},$ps:[],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['iterator']};//iterator.$$targs$$={Arguments:{t:$$$cl1.Empty},Return:{t:$$$cl1.Iterator,a:{Element:{t:Time}}}};
    function stepBy(step$1449){
        return (opt$1450=(step$1449.equals($$timeRange.step)?$$timeRange:null),opt$1450!==null?opt$1450:TimeRange($$timeRange.from,$$timeRange.to,step$1449));
        var opt$1450;
    }
    $$timeRange.stepBy=stepBy;
    stepBy.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:TimeRange},$ps:[{$nm:'step',$mt:'prm',$t:{t:$$$ct798.UnitOfTime$base}}],$an:function(){return[$$$cl1.shared(),$$$cl1.actual()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['stepBy']};//stepBy.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$ct798.UnitOfTime$base},Element:{t:$$$ct798.UnitOfTime$base}}},Return:{t:TimeRange}};
    function nextByStep$1443(jump$1451){
        if(jump$1451===undefined){jump$1451=(1);}
        
        var case$1452=$$timeRange.step;
        if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfHour$base})) {
            return $$timeRange.from.plusHours(jump$1451);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfMinute$base})) {
            return $$timeRange.from.plusMinutes(jump$1451);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfSecond$base})) {
            return $$timeRange.from.plusSeconds(jump$1451);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfMillisecond$base})) {
            return $$timeRange.from.plusMilliseconds(jump$1451);
        }
    };nextByStep$1443.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['nextByStep']};//nextByStep$1443.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Time}};
    function previousByStep$1441(jump$1453){
        if(jump$1453===undefined){jump$1453=(1);}
        
        var case$1454=$$timeRange.step;
        if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfHour$base})) {
            return $$timeRange.from.minusHours(jump$1453);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfMinute$base})) {
            return $$timeRange.from.minusMinutes(jump$1453);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfSecond$base})) {
            return $$timeRange.from.minusSeconds(jump$1453);
        }else if ($$$cl1.isOfType($$timeRange.step,{t:$$$ct798.UnitOfMillisecond$base})) {
            return $$timeRange.from.minusMilliseconds(jump$1453);
        }
    };previousByStep$1441.$$metamodel$$={mod:$$METAMODEL$$,$t:{t:Time},$ps:[{$nm:'jump',$mt:'prm',$def:1,$t:{t:$$$cl1.Integer}}],pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']['$m']['previousByStep']};//previousByStep$1441.$$targs$$={Arguments:{t:$$$cl1.Tuple,a:{Rest:{t:$$$cl1.Empty},First:{t:$$$cl1.Integer},Element:{t:$$$cl1.Integer}}},Return:{t:Time}};
    return $$timeRange;
}
TimeRange.$$metamodel$$={mod:$$METAMODEL$$,'super':{t:$$$cl1.Basic},satisfies:[{t:$$$ct798.Range$base,a:{StepBy:{t:$$$ct798.UnitOfTime$base},Self:{t:TimeRange},Element:{t:Time}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time',d:$$METAMODEL$$['ceylon.time']['TimeRange']};
exports.TimeRange=TimeRange;
function $init$TimeRange(){
    if (TimeRange.$$===undefined){
        $$$cl1.initTypeProto(TimeRange,'ceylon.time::TimeRange',$$$cl1.Basic,$$$ct798.$init$Range$base());
    }
    return TimeRange;
}
exports.$init$TimeRange=$init$TimeRange;
$init$TimeRange();
function TimeZone$timezone($$timeZone){
}
TimeZone$timezone.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.timezone',d:$$METAMODEL$$['ceylon.time.timezone']['TimeZone']};
exports.TimeZone$timezone=TimeZone$timezone;
function $init$TimeZone$timezone(){
    if (TimeZone$timezone.$$===undefined){
        $$$cl1.initTypeProto(TimeZone$timezone,'ceylon.time.timezone::TimeZone');
    }
    return TimeZone$timezone;
}
exports.$init$TimeZone$timezone=$init$TimeZone$timezone;
$init$TimeZone$timezone();
function ZoneDateTime$timezone($$zoneDateTime){
    $$$ct798.ReadableDate$base($$zoneDateTime);
    $$$ct798.ReadableTime$base($$zoneDateTime);
    $$$cl1.Comparable($$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
    $$$cl1.Ordinal($$zoneDateTime);
    $$$cl1.add_type_arg($$zoneDateTime,'Other',{t:ZoneDateTime$timezone});
}
ZoneDateTime$timezone.$$metamodel$$={mod:$$METAMODEL$$,satisfies:[{t:$$$ct798.ReadableDate$base},{t:$$$ct798.ReadableTime$base},{t:$$$cl1.Comparable,a:{Other:{t:ZoneDateTime$timezone}}},{t:$$$cl1.Ordinal,a:{Other:{t:ZoneDateTime$timezone}}}],$an:function(){return[$$$cl1.shared()];},pkg:'ceylon.time.timezone',d:$$METAMODEL$$['ceylon.time.timezone']['ZoneDateTime']};
exports.ZoneDateTime$timezone=ZoneDateTime$timezone;
function $init$ZoneDateTime$timezone(){
    if (ZoneDateTime$timezone.$$===undefined){
        $$$cl1.initTypeProto(ZoneDateTime$timezone,'ceylon.time.timezone::ZoneDateTime',$$$ct798.$init$ReadableDate$base(),$$$ct798.$init$ReadableTime$base(),$$$cl1.Comparable,$$$cl1.Ordinal);
    }
    return ZoneDateTime$timezone;
}
exports.$init$ZoneDateTime$timezone=$init$ZoneDateTime$timezone;
$init$ZoneDateTime$timezone();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
