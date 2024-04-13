/////////*OBJECT,ARRAY,DATE*//////
//////////////arrays use numbered indexes.  
///////////////objects use named indexes.
// const b = {};
// const xv = { a: 1, b: 2 };
// const car = [];
// const cars = ["Saab", "Volvo", "BMW"];
// array methods - length ,push, join, slice, shift,sort,reverse

/////////*MRF- MAP,FILTER,REDUCE; FOREACH,REST,SPREAD *//////

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);
// function myFunction(value, index, array) {
//   return value * 2;
// }

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);
// function myFunction(total, value) {
//   return total + value;
// }

// const date = new Date("1998-10-25");
// console.log();
//this keyword - global obejct 


//JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string.


//Date methods in JS

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

//The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
// const d = new Date("2015-03-25");
// Date.now() //current date