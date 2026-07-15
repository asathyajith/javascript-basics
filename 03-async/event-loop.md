# The Event Loop

> JavaScript functions are executed in the sequence they are **called**, not the sequence they are **defined**.

JS is single-threaded but non-blocking. The event loop coordinates:

- **Call stack** — where synchronous code runs.
- **Web APIs / libuv (Node)** — handle timers, I/O, network off the main thread.
- **Callback (macrotask) queue** — `setTimeout`, I/O callbacks.
- **Microtask queue** — resolved Promises, `queueMicrotask`. Drained *before* the next macrotask.

Order: run all sync code → drain microtasks → take one macrotask → drain microtasks → repeat.

Browser event loop vs Node event loop differ (Node adds phases via libuv & a thread pool):
https://medium.com/@gopesh.jangid/what-is-the-between-browser-event-loop-and-node-event-loop-explained-cf3bbb981545

<!-- TODO: a runnable ordering example: console.log + setTimeout + Promise.resolve().then -->
