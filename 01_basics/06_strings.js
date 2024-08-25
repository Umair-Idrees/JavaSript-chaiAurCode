//This is old method to console with , or + sign
let oldMethod = "Muhammad umair";
let fullName = "Idrees";
let age = 23;
let living = "lahore";
// console.log("Full Name: ",oldMethod,fullName)

// Now a days we are using backtick keyword for console:

console.log(
  `My Ful Name is: ${oldMethod} ${fullName} and my age is ${age} and I am living in ${living}`
);

const newString = new String("Muhammad Umair");

//.toUpperCase and .toLowerCase method
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());

//.replace(pattern, replacement) method:
let dog = new String("let suppose Ruth's Dog is dangerous than your dog");
console.log(dog.replace("Ruth's", "my"));

//Use of .valueOf() method:
const value = new String("good");
console.log(value);
console.log(value.valueOf("good"));

//use of indexOf() method:
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
// Expected output: "The index of the second "dog" is 38"

// use .slice(2 arguments or may be one argument)

let breadcut = "Sandwich";
console.log(breadcut.slice(1, 3));

// .concat() to join two or more strngs:
let myName = "      umair    ";
let friend = "zeshan";

console.log(myName.concat(" is a freind of ", friend, " ok"));
console.log(myName);

//.trim() to remove space in string value
console.log(myName.trim());
