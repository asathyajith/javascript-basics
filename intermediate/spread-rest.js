// Spread (...) and Rest (...)

// Spread: expand an iterable into elements
const a = [1, 2];
const b = [...a, 3, 4];          // [1, 2, 3, 4]
const obj = { ...{ x: 1 }, y: 2 }; // { x: 1, y: 2 }

// Rest: collect remaining args/elements
function total(...nums) {
  return nums.reduce((t, n) => t + n, 0);
}
console.log(b, total(1, 2, 3));

// TODO: shallow-copy caveat, merging objects, array destructuring with rest
