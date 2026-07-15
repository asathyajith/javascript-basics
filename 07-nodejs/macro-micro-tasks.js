// Macrotask vs microtask ordering in Node.js.
// Run:  node 07-nodejs/macro-micro-tasks.js

console.log("1: sync start");

setTimeout(() => console.log("2: setTimeout 0  (macrotask, timers phase)"), 0);

setImmediate(() => console.log("3: setImmediate  (macrotask, check phase)"));

Promise.resolve().then(() => console.log("4: Promise.then (microtask)"));

queueMicrotask(() => console.log("5: queueMicrotask (microtask)"));

process.nextTick(() => console.log("6: process.nextTick (runs before other microtasks)"));

console.log("7: sync end");

/*
Expected output:

  1: sync start
  7: sync end
  6: process.nextTick        <- nextTick queue drains first
  4: Promise.then            <- then the Promise microtask queue
  5: queueMicrotask
  2: setTimeout 0            <- then macrotasks (timers before check here)
  3: setImmediate

Note: the order of 2 vs 3 (setTimeout 0 vs setImmediate) is not guaranteed
when started from the main module — it depends on timing. Inside an I/O
callback, setImmediate always fires before setTimeout.
*/
