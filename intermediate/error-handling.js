// Error handling — try / catch / finally (best practice)

try {
  // code that might throw
  JSON.parse("{ not valid json }");
} catch (e) {
  console.log("Caught:", e.name, "-", e.message);
} finally {
  console.log("Always runs (cleanup).");
}

/*
Common built-in error types:
  ReferenceError  - an illegal reference (using an undeclared variable)
  SyntaxError     - invalid syntax (e.g. bad JSON.parse input)
  TypeError       - a value is not the expected type
  RangeError      - a value is out of the allowed range
*/

// TODO: throwing custom errors (throw new Error), extending Error, async try/catch
