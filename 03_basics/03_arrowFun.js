const user = {
  name: "umair",
  price: 99,
  isLoogedIn: false,
  welComeMessage: function () {
    console.log(`Hi, ${this.name}, Welcome to my Website`);
    console.log(this);
  },
};
// user.welComeMessage();
// user.name="Shoaib"
// user.welComeMessage();

// console.log(this);

/*
function chai(){
    let username="umair"
    console.log(this.username);
    
}
chai()
*/

// const chai= function (){
//     let username="umair"
//     console.log(this.username);

// }
// chai()

const chai = () => {
  let username = "umair";
  console.log(this.username);
};
// chai()

// const addTwo =(num1,num2)=>{
//     return num1 +num2
// }
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = () => ({ username: "umair" });

console.log(addTwo());

const myArray = [4, 5, 6, 7, 8];
myArray.forEach(() => ({}));
