// WebSocket — persistent, bidirectional, full-duplex communication over one TCP
// connection. Unlike REST (request/response then close), either side can push
// messages at any time. Great for chat, live dashboards, notifications, IoT telemetry.
//
// Handshake: starts as an HTTP request with `Upgrade: websocket`, then the
// protocol switches. URLs use ws:// (or wss:// for TLS).

// --- Browser (built-in, no library) ---
// const socket = new WebSocket("wss://example.com/socket");
//
// socket.addEventListener("open",    () => socket.send("hello from client"));
// socket.addEventListener("message", (event) => console.log("received:", event.data));
// socket.addEventListener("close",   () => console.log("connection closed"));
// socket.addEventListener("error",   (err) => console.error("ws error", err));

// --- Node.js server ---
// Node has no built-in WebSocket *server*, so use the `ws` package:
//   npm install ws
//
// const { WebSocketServer } = require("ws");
// const wss = new WebSocketServer({ port: 8080 });
// wss.on("connection", (ws) => {
//   ws.on("message", (data) => ws.send(`echo: ${data}`)); // echo back
//   ws.send("welcome!");
// });

// REST vs WebSocket:
//   REST      -> client pulls, stateless, cacheable, simple.
//   WebSocket -> server can push, stateful connection, low latency, real-time.

// TODO: reconnection/backoff, heartbeat ping/pong, rooms/broadcast, socket.io comparison
