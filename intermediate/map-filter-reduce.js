// map / filter / reduce / forEach

const numbers = [45, 4, 9, 16, 25];

// map -> new array, same length, each element transformed
const doubled = numbers.map((value) => value * 2);
console.log(doubled); // [90, 8, 18, 32, 50]

// filter -> new array, only elements passing the test
const over18 = numbers.filter((value) => value > 18);
console.log(over18); // [45, 25]

// reduce -> single accumulated value
const sum = numbers.reduce((total, value) => total + value, 0);
console.log(sum); // 99

// forEach -> side effects only, returns undefined
numbers.forEach((value, index) => console.log(index, value));

// Each callback receives (value, index, array).

// TODO: chaining map+filter+reduce, find, some, every
