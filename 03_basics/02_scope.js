// var scope => Global Scope
//let scope => block scope
//const scope => block scope

let a = 300;
if (true) {
  let a = 2;
  const b = 3;
  console.log("INNER: ", a);
  function checkScope(num1, num2) {
    return num1 + num2;
  }
  console.log("Nested Scope : ", checkScope(2, 3));
}

console.log("OUTER: ", a);
// console.log(b);

let d = 3;
if (d == 3) {
  console.log("here I am correct");
} else {
  console.log("here I am wrong");
}
//expected output correct

function one() {
  const username = "umair";

  function two() {
    const website = "github.hitesh";
    // console.log(username);      // It will access by inner function
  }
  //   console.log(website);

  two();
}

one();

// ************************ Interesting Related to Interviews ************************
console.log(funOne());
function funOne() {
  const username1 = "shoaib";
  return username1;
}

const funTwo = function () {
  const username2 = "Idrees";
  return username2;
};
console.log(funTwo());
