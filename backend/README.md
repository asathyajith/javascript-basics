# Backend & Web APIs

How clients and servers talk, and how they prove who they are.

| File | Topic |
|------|-------|
| `rest-api.md` + `rest-api.js` | REST principles + a runnable Node HTTP server |
| `jwt.md` + `jwt-decode.js` | JSON Web Tokens: structure & a runnable decoder |
| `oauth2.md` | OAuth 2.0 roles & the main flows |
| `websocket.js` | Real-time, bidirectional communication |

## Quick mental model
- **REST API** — request/response over HTTP. Client asks, server answers, connection closes.
- **WebSocket** — a persistent, two-way pipe. Either side can push at any time.
- **JWT** — a signed token that carries claims (who you are). Used to *authenticate* requests.
- **OAuth 2.0** — a framework for *delegated authorization* ("Log in with Google") that
  often issues JWTs as access tokens.
