const isLoggedIn = true;

const temperature = 41;

// if (temperature == 40) {
//   console.log("Temperature is less than 50");
// } else{
// //     console.log("Temperatre is greater than 50");

// // }
// // console.log("It will always execute...");

// <, >, <=, >=, !=, ==, ===, !==

const score = 100;
if (score > 50) {
  let power = "fly";
  // console.log(`Power of Score: ${power}`);
}
// console.log(`Power of Score: ${power}`);// Not execute here due to Scope

const balance = 1000;
// if(balance > 100) console.log("test1"),console.log("test2") //This is not a good practice

if (balance > 1001) {
  // console.log("first statement");
} else if (balance > 1002) {
  // console.log("second statement");
} else if (balance > 100) {
  // console.log("second statement");
} else {
  // console.log("this is last statement");
}

let UserLoggedIna = true;
const debitCard = true;

const userLoggedinGmail = false;
const userLoggedInGoogle = true;

//Use AND staetement means both shoudl be true:
if (UserLoggedIna && debitCard) {
  // console.log("User Looged In");
}

//Use OR steatement means one should be correct:
if (userLoggedInGoogle || userLoggedinGmail) {
  // console.log("user login by Mail");
}
