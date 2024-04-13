
// const a = 3;
// let x = 10;
// x += 5;
// console.log();

//checking integer//
// function isInt(num) {
//     return num % 1 == 0;
//   }  
// console.log(isInt(4));
// console.log(isInt(12.2));
// console.log(isInt(0.3));

/////////*EVENTS*//////
//onClick
// onchange
// onmouseover
// onkeydown

//string methods - concat,trim,length,slice ; search,indexOf

//math.random - for generating random numbers OTPs ect...
// Math.floor(Math.random() * 101); //numbers 0 to 100

/*
//##Advantages of Arrow Functions//
~introduced in ES6
~Arrow functions reduce the size of the code.
~The return statement and function brackets are optional for single-line functions.
~It increases the readability of the code.
~Arrow functions provide a lexical this binding. It means, they inherit the value of “this” from the enclosing scope. This feature can be advantageous when dealing with event listeners or callback functions where the value of “this” can be uncertain.
//##Limitations of Arrow Functions//
~Arrow functions do not have the prototype property.
~Arrow functions cannot be used with the new keyword.
~Arrow functions cannot be used as constructors.
~These functions are anonymous and it is hard to debug the code.
~Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.
*/

//promises//
// function xyz(){
//     function abc(){};
//     abc.then(
//         //true
//     ).catch(
//         //false
//     );
// };


// cookies//
// const cookies = document.cookie; // Get all cookies
// document.cookie = 'username=john; expires=' + expirationDate.toUTCString();