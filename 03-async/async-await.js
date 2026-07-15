// async / await — syntactic sugar over promises.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("start");
  await wait(300); // pauses this function, not the whole program
  console.log("after 300ms");
  return "finished";
}

run().then((msg) => console.log(msg));

// TODO: try/catch around await, awaiting Promise.all, sequential vs parallel awaits
