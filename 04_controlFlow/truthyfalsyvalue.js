const getEmail = "umair@google.com";

if (getEmail) {
  // console.log("Got Yuor Email");
} else {
  ("Not showing YOur Email");
}

//Some Falsy Values:
// false - The Boolean false value.
// 0 - The number zero.
// -0 - The negative zero.
// 0n - The BigInt zero.
// "" - An empty string.
// null - Represents the absence of value or a null reference.
// undefined - Indicates a variable that has not been assigned a value.
// NaN - Represents "Not-a-Number" which is a result of undefined or unrepresentable mathematical operations.

//Truthy Values:
// Non-empty strings ("hello")
// Non-zero numbers (1, -1)
// Objects ({}, [])
// Arrays ([1, 2, 3])
// Functions (function() {})
// Any value that is not explicitly listed as falsy

const newArr = [];

if (newArr.length === 0) {
  // console.log("this is truth");
} else {
  // console.log("this is false");
}

if (function () {}) {
  // console.log("Function is true");
} else {
  // console.log("Function is false");
}

const emptyObject = {};
if (Object.keys(emptyObject).length == 0) {
  console.log("Object work as true");
} else {
  console.log("Object not work properly");
}

//Nullish Coalescing Operator:(??)

// let nullish = 10 ?? 40;

let nullish = null ?? 100;

const nullishcoalesce = undefined ?? 20;

console.log(nullishcoalesce);

//************************Terniary Operators ********************************

//syntax:
// condition ? true : false
let myName = "umair";

myName ? console.log("Yes, This is my Name") : console.log("Not my Name");

//   const emptyObj={}
//   if(Object.keys(emptyObj).length === 0){
//     console.log('This is empty object');

//   }
//   else{
//     "Empty object not use as a true statement."
//   }
