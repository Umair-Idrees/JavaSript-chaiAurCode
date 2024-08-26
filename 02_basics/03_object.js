let tinderObject = {};

tinderObject.email = "u@google.com";
tinderObject.name = "umair";
tinderObject.location = "Lahore";
tinderObject.isLoggedIn = true;

console.log(tinderObject);

const anothertinder = {
  mail: "some@gmail.com",
  anotherObject: {
    userFullName: "umairIdrees",
    userName: {
      firstName: "umair",
      lastName: "Idrees",
    },
  },
};
// console.log(anothertinder);

let obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
let obj2 = {
  4: "a",
  5: "b",
  6: "c",
};

// console.log("object3 is : ", obj3);

// const object3=Object.assign(obj1,obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const newObject = [
  {
    name: "umair",
    class: "BSCS",
  },
  {
    name: "shoaib",
    class: "BSCS",
  },
  {
    name: "zeshan",
    class: "BSCS",
  },
];

console.log(newObject[1]);
console.log(newObject[1].class);

console.log((Object.keys(tinderObject)));
console.log((Object.values(tinderObject)));
console.log((Object.entries(tinderObject))); //it will make array sperately 

