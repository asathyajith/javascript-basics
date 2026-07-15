# javascript-basics

Personal reference collection: foundational **JavaScript** for web development & IoT,
plus **TypeScript** foundations. Notes live in `.md` files; runnable examples in `.js` / `.ts`.

## Layout

| Folder | Topic |
|--------|-------|
| `01-js-foundations/` | Variables, data types, operators, functions, strings, arrays, objects, control flow |
| `02-js-intermediate/` | map/filter/reduce, spread/rest, destructuring, error handling, JSON & dates |
| `03-async/` | Event loop, callbacks, promises, async/await |
| `04-web-dev/` | DOM, events, fetch, cookies & storage |
| `05-iot/` | Binary data (`DataView`), LoRaWAN/TTN payload decoding |
| `06-typescript/` | Types, interfaces, generics, a typed decoder |
| `07-nodejs/` | Node runtime, modules, event-loop phases, macro/microtasks |
| `08-backend/` | REST APIs, JWT, OAuth 2.0, WebSocket |
| `exercises/` | Practice problems (e.g. palindrome) |

## Running snippets

```bash
# JavaScript
node 01-js-foundations/arrays.js

# TypeScript (one-off, no build)
npx ts-node 06-typescript/types-basics.ts

# Compile all TS to ./dist
npm run ts:build
```

First-time setup for the TS tooling:

```bash
npm install
```

## Status

Files marked `TODO` are stubs to fill in as I learn each topic.
