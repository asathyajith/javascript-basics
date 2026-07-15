// Operators

// Arithmetic: + - * / % **
// Assignment: = += -= *= /=
// Comparison: == vs === (prefer === strict, no type coercion)
// Logical: && || !  and short-circuiting
// Ternary: cond ? a : b

// Integer check using modulo:
const isInt = (num) => num % 1 === 0;
console.log(isInt(4));    // true
console.log(isInt(12.2)); // false

// TODO: nullish coalescing ??, optional chaining ?., bitwise operators (relevant for IoT)
