# OAuth 2.0

OAuth 2.0 is a framework for **delegated authorization**: it lets an app act on a
user's behalf at another service **without seeing their password** ("Log in with
Google", "Connect your GitHub").

> OAuth 2.0 = authorization (what you can access). For **authentication** (who you are)
> on top of it, use **OpenID Connect (OIDC)**, which adds an ID token (a JWT).

## Roles
- **Resource Owner** — the user.
- **Client** — the app wanting access.
- **Authorization Server** — issues tokens (e.g. Google's login).
- **Resource Server** — holds the protected data (e.g. Google's API).

## Tokens
- **Access token** — sent with API requests (`Authorization: Bearer ...`); often a JWT; short-lived.
- **Refresh token** — used to obtain a new access token without re-login; long-lived, stored securely.

## Main flows (grant types)
- **Authorization Code + PKCE** — the recommended flow for web & mobile/SPA apps.
  1. App redirects user to the authorization server.
  2. User approves; server redirects back with a short-lived **code**.
  3. App exchanges the code (+ PKCE verifier) for tokens on the back channel.
- **Client Credentials** — machine-to-machine, no user involved.
- **Device Code** — for input-constrained devices (TVs, IoT).
- *Implicit* and *Password* grants are **legacy** — avoid them.

## The Authorization Code flow at a glance
```
User → Client → Authorization Server (login + consent)
                     ↓ redirect with ?code=...
Client → Authorization Server: exchange code → { access_token, refresh_token }
Client → Resource Server: request + Bearer access_token → protected data
```

<!-- TODO: sequence diagram, scopes, state parameter (CSRF protection), token introspection -->
