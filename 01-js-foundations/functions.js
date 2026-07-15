// Functions

// Function declaration (hoisted)
function add(a, b) {
  return a + b;
}

// Function expression
const sub = function (a, b) {
  return a - b;
};

// Arrow function (ES6)
const mul = (a, b) => a * b;

console.log(add(2, 3), sub(5, 1), mul(4, 2));

/*
Arrow functions — advantages:
  - Shorter syntax; return & braces optional for single-line bodies.
  - Lexical `this`: they inherit `this` from the enclosing scope
    (handy in callbacks / event listeners).

Arrow functions — limitations:
  - No `prototype` property.
  - Cannot be used with `new` (not constructors).
  - Anonymous — harder to debug in stack traces.
  - Cannot be generator functions (no `yield`).
*/

// TODO: default params, rest params, closures, IIFE, higher-order functions
