# JWT — JSON Web Tokens

A **JWT** is a compact, URL-safe, signed token that carries **claims** (facts about a
user). Servers use it to authenticate requests without keeping session state.

## Structure: three base64url parts joined by dots
```
xxxxx.yyyyy.zzzzz
header.payload.signature
```

1. **Header** — algorithm & type: `{ "alg": "HS256", "typ": "JWT" }`
2. **Payload** — claims: `{ "sub": "123", "name": "John", "iat": 169..., "exp": 169... }`
   - Standard claims: `sub` (subject), `iat` (issued at), `exp` (expiry), `iss` (issuer), `aud` (audience).
   - ⚠️ Payload is only **encoded, not encrypted** — anyone can read it. Never put secrets in it.
3. **Signature** — `HMACSHA256(base64url(header) + "." + base64url(payload), secret)`.
   Proves the token wasn't tampered with and was issued by someone holding the secret.

## Typical flow
```
1. User logs in with credentials.
2. Server verifies them, signs a JWT, returns it.
3. Client stores it and sends it on each request:
      Authorization: Bearer <token>
4. Server verifies the signature + expiry, then trusts the claims.
```

## Notes
- **HS256** = symmetric (one shared secret). **RS256** = asymmetric (private key signs,
  public key verifies) — better when many services need to verify but not issue.
- Keep tokens short-lived; use a **refresh token** to get new ones.
- In production use a library (`jsonwebtoken`) — don't hand-roll signing/verification.

See `jwt-decode.js` to inspect a token's parts (decode only — no verification).
