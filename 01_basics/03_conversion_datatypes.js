let score = 23;
//console.log(typeof score);

let numberIsString = String(score);
//console.log(numberIsString);
//console.log(typeof numberIsString);

let weHave = true;
//console.log(typeof weHave);
let anotherWeHave = Number(weHave);
//console.log(anotherWeHave);
//console.log(typeof anotherWeHave);

//"23" => string will be converted to Number
// 23abc => string will be NaN(not a number)
//trye => 1; false =>0;

let isBoolean = 0;
//console.log(typeof isBoolean);
let anotherIsBoolean = String(isBoolean);
// console.log(anotherIsBoolean);
// console.log(typeof anotherIsBoolean);

// *********************  OPERATIONS ****************

let simpleValue = 3;
let negValue = -simpleValue;
//console.log(negValue)

//Basic Operations:

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**5)
// console.log(2/2)
// console.log(2%2)

let sumNum = "1" + 1 + 1;

//console.log(sumNum);
let sumNum1 = 1 + 1 + "1";
//console.log(sumNum1);

let gameCounter = 200;
gameCounter++;
++gameCounter;
//console.log(gameCounter)

//Here discussion of PREFIX AND POSTFIX Operations from MDN:

let prefix = 23;
const anotherPrefix = prefix++;
console.log("Prefix :", prefix);

console.log("anotherPrefix: ", anotherPrefix);


let postfix = 99;
const anotherPostfix = ++postfix;
console.log("Postfix :", postfix);
console.log("anotherPostfix: ", anotherPostfix);
