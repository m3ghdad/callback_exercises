const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please enter a number", function(answer){
      const num = parseInt(answer);

      // completionCallback(sum + num);
      sum += num;
      // numsLeft -= 1;
      console.log(`Total Sum: ${sum}`);

      addNumbers(sum, numsLeft - 1, completionCallback);
      // if (numsLeft === 0) {
      //   completionCallback(sum);
      // }
    });
  }
  else {
    completionCallback(sum)
  }
}



// If numsLeft > 0, then:
// Prompt the user for a number (use reader).
// Pass a callback that:
// Uses parseInt to parse the input.
// Increment the sum and console.log it.
// Recursively calls addNumbers again, passing in:
// the increased sum,
// the decreased numsLeft,
// and the same completionCallback.
// If numsLeft === 0, call completionCallback(sum) so that the total sum can be used.
// To test, try out:

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
