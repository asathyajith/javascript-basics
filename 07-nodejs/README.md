# Node.js

Node.js is a JavaScript **runtime** built on Chrome's V8 engine that runs JS
outside the browser (servers, CLIs, IoT gateways). Key traits:

- **Single-threaded** JS execution with an **event loop** (via the C library **libuv**).
- **Non-blocking, asynchronous I/O** — file/network work is offloaded so the main
  thread stays free. Heavy CPU work still blocks it (use worker threads for that).
- Rich **core modules** (`fs`, `path`, `http`, `crypto`, `events`, `stream`) — no install needed.
- Package ecosystem via **npm**.

## Files
- `modules.js` — CommonJS (`require`) vs ES Modules (`import`).
- `core-modules.js` — `fs`, `path`, `http`, `events` quick tour.
- `event-loop-phases.md` — the libuv phases.
- `macro-micro-tasks.js` — **runnable** demo of task ordering.

## Run
```bash
node 07-nodejs/macro-micro-tasks.js
```
