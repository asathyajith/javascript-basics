// Decode (NOT verify) a JWT to see its parts. Pure Node, no dependencies.
// Decoding needs no secret — that's why you must never trust an unverified token.
//
// Run:  node backend/jwt-decode.js

// A sample HS256 token (header.payload.signature).
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" + // header
  ".eyJzdWIiOiIxMjMiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9" + // payload
  ".SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"; // signature

function decodeSegment(seg) {
  // JWT uses base64url; convert to standard base64 then decode.
  const base64 = seg.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(Buffer.from(base64, "base64").toString("utf8"));
}

const [headerB64, payloadB64, signature] = token.split(".");

console.log("Header: ", decodeSegment(headerB64));
console.log("Payload:", decodeSegment(payloadB64));
console.log("Signature (opaque):", signature);

// To actually VERIFY, you'd recompute the HMAC with the secret and compare:
//   const crypto = require("node:crypto");
//   const data = `${headerB64}.${payloadB64}`;
//   const expected = crypto.createHmac("sha256", SECRET).update(data)
//     .digest("base64url");
//   const valid = expected === signature;   // plus check payload.exp

// TODO: implement full HS256 verification with the crypto module
