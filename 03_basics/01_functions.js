function sayMyName() {
  console.log("u");
  console.log("m");
  console.log("a");
  console.log("i");
  console.log("r");
}
// sayMyName()

// function anotherFunciton(num1, num2) {
//   return num1 + num2;
// }
// console.log(anotherFunciton(1, 2));

function loginUserMessage(username = "umair") {
  // if(username == undefined){
  //     console.log("show error");
  //     return

  // }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in `;
}
// console.log(loginUserMessage());

// ******************* Functions with objects and Array****************************

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 1000));

const objectFunction = {
  username: "umair",
  price: 23,
};

function getObject(anyobject) {
  console.log(
    `usernamae is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// getObject(objectFunction);

//Another Functon with Objects:

let secObject = {
  anotherName: "zeshan",
  anotherPrice: 23,
};

function newObject(getObj) {
  console.log(
    `Anotehr Username is ${getObj.anotherName} and another Price is ${getObj.anotherPrice}`
  );
}
// newObject(secObject)





// Function with an Array:

const firstArr=[2,3,4,5]

function firsArray(getArray){
    return Array1[2]
}
console.log(firstArray(firstArr ));
