// Two types of Datatypes:

// Primitive Datatypes:
//7 types: string, number, boolean, null, undefined, symbol, bigInt,

let iAmString = "umair";
let iAmNumber = 5127;
let AmILogged = true;
let Undefined;

let Id = Symbol("123");
const anotherSymbolId = Symbol("123");
// console.log(Id === anotherSymbolId);
// console.log(Id);

let bigInt = 83495873498573498n;

//Reference (Non Primitive Datatype):
// Arrays, Objects, Functions

let Heroes = ["Abubakar", "usman", "Ali"];

console.log(typeof Heroes);

let student = {
  Name: "Umair",
  rollNumber: 23,
  class: "BSCS",
  Section: "C",
};
console.log(typeof student);

const myFunction = function () {
  console.log(typeof myFunction);
};
myFunction();
