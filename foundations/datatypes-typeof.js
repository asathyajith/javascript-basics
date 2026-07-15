// Data types & typeof
//
// Primitives: string, number, bigint, boolean, undefined, symbol, null
// Reference:  object (includes arrays, functions, dates)

console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"

// Quirks worth remembering:
console.log(typeof { name: "John", age: 34 }); // "object"
console.log(typeof [1, 2, 3, 4]);              // "object"  (not "array" — use Array.isArray())
console.log(typeof null);                       // "object"  (historical bug in JS)

// The data type of an undefined variable is "undefined".

// TODO: add Number/String/Boolean conversion examples, NaN, and == vs ===
