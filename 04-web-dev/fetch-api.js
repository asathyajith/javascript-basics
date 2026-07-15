// Fetch API — HTTP requests (available in browsers and Node 18+).

async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.log("Fetch failed:", err.message);
  }
}

getUser();

// TODO: POST with method/headers/body, AbortController, query params
