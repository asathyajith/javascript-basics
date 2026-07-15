# javascript-basics

Personal reference collection: foundational **JavaScript** for web development & IoT,
plus **TypeScript** foundations. Notes live in `.md` files; runnable examples in `.js` / `.ts`.

## Suggested learning path

1. **`foundations/`** → 2. **`intermediate/`** → 3. **`async/`** → 4. **`web-dev/`** →
5. **`iot/`** → 6. **`typescript/`** → 7. **`backend/`**

Topics are independent folders — the order above is a suggested study sequence, not a
hard dependency. Dip into `exercises/` any time.

## Folders

| Folder | Topic |
|--------|-------|
| `foundations/` | Variables, data types, operators, functions, strings, arrays, objects, control flow |
| `intermediate/` | map/filter/reduce, spread/rest, destructuring, error handling, JSON & dates |
| `async/` | Event loop, callbacks, promises, async/await |
| `web-dev/` | DOM, events, fetch, cookies & storage |
| `iot/` | Binary data (`DataView`), LoRaWAN/TTN payload decoding |
| `typescript/` | Types, interfaces, generics, a typed decoder |
| `backend/` | REST APIs, JWT, OAuth 2.0, WebSocket |
| `exercises/` | Practice problems (e.g. palindrome) |

> Note: Node.js material has been moved to its own repository.

## Running snippets

```bash
# JavaScript
node foundations/arrays.js

# TypeScript (one-off, no build)
npx ts-node typescript/types-basics.ts

# Compile all TS to ./dist
npm run ts:build
```

First-time setup for the TS tooling:

```bash
npm install
```

## Status

Files marked `TODO` are stubs to fill in as I learn each topic.
