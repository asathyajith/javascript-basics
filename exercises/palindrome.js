// Exercise: palindrome check + sum of positives

// Returns true if a string reads the same forwards and backwards.
function isPalindrome(str) {
  const rev = str.split("").reverse().join("");
  return rev === str;
}

// Sum of the positive numbers in an array.
// (Fixed from the original: the accumulator now lives OUTSIDE the loop,
//  and we actually return it — the old version returned undefined.)
function sumPositives(arr) {
  let sum = 0;
  arr.forEach((ele) => {
    if (ele > 0) sum += ele;
  });
  return sum;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(sumPositives([3, -2, 7, -5, 1])); // 11

module.exports = { isPalindrome, sumPositives };
