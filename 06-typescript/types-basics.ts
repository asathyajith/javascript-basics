// TypeScript basics — types add compile-time safety to JavaScript.

// Primitive annotations
const name: string = "John";
const age: number = 34;
const active: boolean = true;

// Arrays
const scores: number[] = [90, 85, 77];
const tags: Array<string> = ["a", "b"];

// Union types — a value that can be one of several types
let id: string | number = 42;
id = "abc";

// Literal types
let dir: "left" | "right" = "left";

// Functions: annotate params and return type
function add(a: number, b: number): number {
  return a + b;
}

// `any` opts out of checking (avoid); `unknown` is the safe version.
const risky: unknown = JSON.parse("{}");

console.log(name, age, active, scores, tags, id, dir, add(2, 3), risky);

// TODO: type inference, void, never, tuples, enums
