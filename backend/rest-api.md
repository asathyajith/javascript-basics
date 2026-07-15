# REST APIs

**REST** (Representational State Transfer) is an architectural style for HTTP APIs.
Resources are identified by URLs; you act on them with HTTP methods.

## HTTP methods (CRUD)
| Method | Purpose | Idempotent? |
|--------|---------|-------------|
| GET | Read a resource | Yes |
| POST | Create a resource | No |
| PUT | Replace a resource | Yes |
| PATCH | Partially update | No |
| DELETE | Remove a resource | Yes |

## URL design
```
GET    /users          -> list users
GET    /users/42       -> get user 42
POST   /users          -> create a user
PUT    /users/42       -> replace user 42
DELETE /users/42       -> delete user 42
```

## Status codes
- **2xx** success — 200 OK, 201 Created, 204 No Content
- **3xx** redirect — 301, 304 Not Modified
- **4xx** client error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict
- **5xx** server error — 500 Internal Server Error, 503 Service Unavailable

## Principles
- **Stateless** — each request carries everything needed (e.g. an auth token); the
  server keeps no session between calls.
- **Uniform interface** — consistent, predictable URLs and methods.
- Usually exchanges **JSON** bodies with `Content-Type: application/json`.

See `rest-api.js` for a minimal runnable server.
