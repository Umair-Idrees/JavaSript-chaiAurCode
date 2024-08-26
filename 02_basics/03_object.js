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
// console.log(obj3);

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

// console.log(newObject[1]);
// console.log(newObject[1].class);

// console.log((Object.keys(tinderObject)));
// console.log((Object.values(tinderObject)));
// console.log((Object.entries(tinderObject))); //it will make array sperately 

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
// console.log(target);

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true




// **************************de-Structuring of Object ************************

let course={
    name:"learn JS",
    courseName:"JS",
    courseInstructor:"umair"
}
console.log(course.courseInstructor);

const {courseInstructor:ins}=course
console.log("deStructure courseInstructor : " ,ins );


//*****************API******************************************* */
//we can decalre through objects and as well as arrays

{
    "name":"umair"
    "class":"BSCS",
    "rollNo":"5127"
}
//Or it can be:

[
    {},
    {},
]