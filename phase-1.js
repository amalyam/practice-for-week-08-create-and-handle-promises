/*
- return a promise
- fulfill the promise after 1 second
- print `"done stretching"` once the promise is fulfilled
*/
function stretch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(console.log("done stretching"), 1000));
  });
}

/*
- return a promise
- fulfill the promise after 0.5 seconds
- print `"done running on treadmill"` once the promise is fulfilled
*/
function runOnTreadmill() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(console.log("done running on treadmill"), 500));
  });
}

/*
- return a promise
- fulfill the promise after 2 seconds
- print `"done lifting weights"` once the promise is fulfilled
*/

/*
Write a function called `workout` that runs the above functions in a way
that ensures you begin running on the treadmill after you've finished
stretching. Begin lifting weights after running on the treadmill. Print
`"done working out"` after you've finished lifting weights.
*/
function workout() {
  return stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

//stretch();

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
