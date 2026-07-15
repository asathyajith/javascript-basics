// A quick tour of common Node core modules (no install needed).

const path = require("node:path");
const os = require("node:os");
const { EventEmitter } = require("node:events");

// path — build/parse file paths cross-platform
console.log(path.join("a", "b", "c.txt")); // a\b\c.txt (Windows) or a/b/c.txt
console.log(path.extname("report.pdf"));   // .pdf

// os — system info
console.log("platform:", os.platform());

// events — the pub/sub pattern many Node APIs are built on
const bus = new EventEmitter();
bus.on("ping", (msg) => console.log("got:", msg));
bus.emit("ping", "hello");

// Other must-know modules:
//   fs      -> read/write files (fs.promises for async/await)
//   http    -> create servers / clients (see ../08-backend/rest-api.js)
//   crypto  -> hashing, HMAC (used by JWT signing)
//   stream  -> process data in chunks (large files, network)

// TODO: fs.promises.readFile example, a Buffer example
