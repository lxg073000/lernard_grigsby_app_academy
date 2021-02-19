// const myTimer = () => setTimeout(() => console.log("asdfasd"), 5000);
const myTimer = () => setTimeout(() => alert("HAMMERTIME"), 5000);

function simpleTimeout() {
  setTimeout(() => alert("SPACEJAM"), 5000);
}

// myTimer();
// simpleTimeout();

function hammerTime(func) {
  setTimeout(() => alert(`${func()}ms is HAMMERTIME!`), func());
}
// function hammerTime2(func) {
//   setTimeout(alert(`${func()}ms... for func sake!`), 5000);
// } // NOT WORKING

let time = () => (x = 5000);
// hammerTime(time);
// hammerTime2(time); NOT WORKING

const readline = require("readline");
const reader = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function teaSis() {
  reader.question("would you like some TEA? ", (reply1) => {
    reader.question("...and, would you like some BISCUITS? ", (reply2) => {
      console.log(`let me make sure I got all that`);
      finalizeOrder(reply1, reply2);
      reader.close();
    });
  });
}

function finalizeOrder(order1, order2) {
  console.log(`So you said ${order1} and ${order2}...?? awlllright.`);
}

teaSis();
