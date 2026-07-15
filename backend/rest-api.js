// Minimal REST API with Node's built-in http module (no dependencies).
//
// Run:   node backend/rest-api.js
// Then:  curl http://localhost:3000/users
//        curl -X POST http://localhost:3000/users -d '{"name":"Ada"}'
// Stop:  Ctrl+C

const http = require("node:http");

let users = [{ id: 1, name: "John" }];
let nextId = 2;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET /users  -> list
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200);
    return res.end(JSON.stringify(users));
  }

  // POST /users -> create
  if (req.method === "POST" && req.url === "/users") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const { name } = JSON.parse(body || "{}");
        if (!name) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: "name is required" }));
        }
        const user = { id: nextId++, name };
        users.push(user);
        res.writeHead(201); // Created
        res.end(JSON.stringify(user));
      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "invalid JSON" }));
      }
    });
    return;
  }

  // Anything else -> 404
  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(3000, () => console.log("REST API on http://localhost:3000"));

// TODO: routing for /users/:id (GET/PUT/DELETE), or rewrite with Express
