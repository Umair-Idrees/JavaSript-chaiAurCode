let date = new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleString());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    month: "2-digit",
  })
);
let yourDate=new Date("03-01-2023");
yourDate.toLocaleString("03-01-2023")
console.log(yourDate);

