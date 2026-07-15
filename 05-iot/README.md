# IoT — Binary payloads & LoRaWAN/TTN decoding

IoT devices (especially LoRaWAN) send tiny binary payloads to save power and airtime.
The network server (e.g. **The Things Network / TTN**) runs a **decoder** (a.k.a. payload
formatter) that turns raw bytes into a structured JS object.

## Key idea
- Data arrives as a byte array (`bytes` / `Uint8Array`).
- You read fields at known offsets using a `DataView` over an `ArrayBuffer`.
- Bit math (`%`, `&`, `>>`) extracts flags packed into a single byte.

## Files
- `binary-dataview.js` — the raw mechanics of `ArrayBuffer` / `DataView`.
- `payload-decoder.js` — a cleaned-up example decoder (humidity, battery, uplink frequency).

## Error codes convention (from the original device spec)
```
400  Message part missing/corrupt
401  Middle part of a multi-message
402  Wrong port
404  callData empty
```
