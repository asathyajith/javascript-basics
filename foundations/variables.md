# Variables: var, let, const

## Rules of thumb
1. Always declare variables.
2. Use `const` if the value should not change.
3. Use `const` if the type should not change (arrays & objects — the binding stays, contents can mutate).
4. Only use `let` if you can't use `const`.
5. Only use `var` if you MUST support very old browsers.

## What's good (let / const)
- Block scoped.
- Cannot be redeclared.
- Must be declared before use.
- Do not bind to `this`.
- Not hoisted (in the usable sense — they sit in the "temporal dead zone").

## What's not good (var)
- Does not have to be declared.
- Is hoisted.
- Binds to `this`.

<!-- TODO: add examples of block scope vs function scope, and the temporal dead zone -->
