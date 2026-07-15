// Node modules: CommonJS vs ES Modules

// --- CommonJS (default in .js when package.json has no "type":"module") ---
// Export:
//   module.exports = { add };           // whole object
//   module.exports.add = add;           // single named
// Import:
//   const { add } = require("./math");

// --- ES Modules (.mjs, or "type":"module" in package.json) ---
// Export:
//   export function add(a, b) { return a + b; }
//   export default something;
// Import:
//   import { add } from "./math.js";
//   import something from "./math.js";

// This repo uses CommonJS (see package.json "type": "commonjs").
function add(a, b) {
  return a + b;
}
module.exports = { add };

// TODO: __dirname / __filename, dynamic import(), differences in `this`
