// JSON & Dates

// JSON
// JSON.parse(str)   -> string  => JS value/object
// JSON.stringify(v) -> JS value => string
const parsed = JSON.parse('{"a":1,"b":[2,3]}');
const text = JSON.stringify(parsed);
console.log(parsed, text);

// Dates
// Constructors:
//   new Date()
//   new Date(dateString)              // ISO 8601 "YYYY-MM-DD" is preferred
//   new Date(year, month, day, ...)   // month is 0-indexed!
const d = new Date("2015-03-25");
console.log(d.toISOString());
console.log(Date.now()); // current time in ms since epoch

// TODO: getFullYear/getMonth/getDate, timezones, formatting with Intl.DateTimeFormat
