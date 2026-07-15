// Callbacks — a function passed to another function, called later.

function fetchData(callback) {
  setTimeout(() => callback("data ready"), 500); // simulate async work
}

fetchData((result) => console.log(result));

// The downside: nesting callbacks -> "callback hell". Promises fix this.

// TODO: error-first callback convention (err, data)
