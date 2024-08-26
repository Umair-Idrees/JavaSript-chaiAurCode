//Object singleton
//object.create

//Object Literal:

const newSymbol = Symbol("key");
let newObj = {
  name: "umair",
  email: "umair@google.com",
  location: "Lahore",
  newArr: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  [newSymbol]: "only for check",
  "Access Square bracket": "declare value",
};
// console.log(newObj["email"]);

// newObj.name="Idrees"
// console.log(newObj.name);

// Object.freeze(newObj)  //After using this we cant change original Object
newObj.location = "Pakistan";
// console.log(newObj);

// console.log(newObj["Access Square bracket"]);

newObj.greetings = function () {
  console.log("Hi JS user,");
};
newObj.greetingsTwo = function () {
  console.log(`HI JS user, ${this.name}`);
};

console.log(newObj.greetings());
console.log(newObj.greetingsTwo());
