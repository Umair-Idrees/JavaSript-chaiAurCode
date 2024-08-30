//Reduce:

const myArray = [1, 2, 3, 4, 5];

// initailvalue = 0;

// const mynewArray = myArray.reduce(function (accu, currentVal) {
//   console.log(
//     `Accumulator valus is : ${accu} and Current value is : ${currentVal}`
//   );

//   return accu + currentVal;
// }, initailvalue);
// console.log(mynewArray);

const myNewArray = myArray.reduce((acc, currentVal) => {
  // console.log(`Accumulator valus is: ${acc} and Current value is: ${currentVal}`);

  return acc + currentVal;
}, 3);
// console.log(myNewArray);

const shoppingCart = [
  { itemName: "Js course", itemPrice: 299 },
  { itemName: "Py course", itemPrice: 2299 },
  { itemName: "data science course", itemPrice: 22299 },
  { itemName: "language course", itemPrice: 2299 },
];

const shopping = shoppingCart.reduce((acc, item) => acc + item.itemPrice, 0);
console.log(shopping);
