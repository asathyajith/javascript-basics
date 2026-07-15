// Interfaces & type aliases — describe the shape of objects.

interface User {
  id: number;
  name: string;
  email?: string;        // optional
  readonly createdAt: Date; // can't be reassigned
}

// `type` alias — similar, but also does unions/intersections/primitives
type ID = string | number;

type Point = { x: number; y: number };

const u: User = { id: 1, name: "John", createdAt: new Date() };
const p: Point = { x: 1, y: 2 };

console.log(u, p);

// TODO: extending interfaces, intersection types (A & B), index signatures
