for (let i = 0; i < 10; i++) {
  const element = i;
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is a best Number");
  }
  //console.log(element);
}

for (let i = 0; i < 10; i++) {
  // console.log(`outer loop is: ${i}`);

  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop is: ${j} and ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
  }
}

yourArray = ["umair", "shoaib", "Idrees", "More Name"];
// console.log(yourArray.length);

for (let index = 0; index < yourArray.length; index++) {
  const element = yourArray[index];
  // console.log(element);
}

//role of Break and Continue in for loop:

// for (let index = 0; index < 20; index++) {
//   if (index == 5) {
//     console.log("Dectected 5");
//     break;
//   }
//   console.log(`Value of i is ${index}`);
// }


for (let index = 0; index < 20; index++) {
  if (index == 5) {
    console.log("Dectected 5");
    continue;
  }
  console.log(`Value of i is ${index}`);
}
