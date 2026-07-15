// Cookies & Web Storage (browser environment)

// --- Cookies ---
// const all = document.cookie;               // read all cookies as one string
// const expires = new Date();
// expires.setDate(expires.getDate() + 7);
// document.cookie = `username=john; expires=${expires.toUTCString()}; path=/`;

// --- localStorage / sessionStorage --- (simpler, key/value, string only)
// localStorage.setItem("token", "abc");
// const token = localStorage.getItem("token");
// localStorage.removeItem("token");
// sessionStorage clears when the tab closes.

// TODO: JSON.stringify objects before storing; cookie vs localStorage tradeoffs; security (HttpOnly, SameSite)
