// Generics — reusable code that works over many types while staying type-safe.

// A generic function: T is inferred from the argument.
function identity<T>(value: T): T {
  return value;
}

// A generic "wrap in array" helper.
function wrap<T>(value: T): T[] {
  return [value];
}

console.log(identity<string>("hi"), wrap(123));

// Generic constraint: T must have a `.length`.
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
console.log(longest("apple", "kiwi"));

// TODO: generic interfaces, default type params, keyof, Partial/Pick/Record utility types
