// Promises — represent a future value: pending -> fulfilled | rejected.

const promise = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve("success");
  else reject(new Error("failure"));
});

promise
  .then((value) => console.log("resolved:", value)) // on fulfill
  .catch((err) => console.log("rejected:", err.message)) // on reject
  .finally(() => console.log("done"));

// TODO: Promise.all / allSettled / race, chaining & returning promises
