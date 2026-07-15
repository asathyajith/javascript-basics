# Node.js Event Loop — phases, macrotasks & microtasks

The browser and Node both have an event loop, but Node's (libuv) runs in **phases**.
Each phase has its own macrotask (callback) queue. See also `../03-async/event-loop.md`.

## The phases (each loop iteration)
1. **timers** — callbacks from `setTimeout` / `setInterval` whose time has elapsed.
2. **pending callbacks** — some system operations (e.g. certain TCP errors).
3. **idle / prepare** — internal only.
4. **poll** — retrieve new I/O events; run I/O callbacks (this is where most work happens).
5. **check** — `setImmediate` callbacks.
6. **close callbacks** — e.g. `socket.on('close', ...)`.

## Macrotasks vs microtasks
- **Macrotasks** (a.k.a. tasks): `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks.
  One macrotask runs per relevant phase.
- **Microtasks**: resolved **Promise** callbacks (`.then/await`), `queueMicrotask`.
  The microtask queue is **fully drained after each macrotask** (and after the sync script).
- **`process.nextTick`** (Node-only): its own queue, drained **before** the Promise
  microtask queue — the highest-priority "run this ASAP" callback.

## Priority order (simplified)
```
run sync code
  -> drain process.nextTick queue
  -> drain Promise microtask queue
  -> take next macrotask (timers/poll/check ...)
  -> drain nextTick, then microtasks again
  -> repeat
```

`macro-micro-tasks.js` demonstrates exactly this ordering.
