const myNum=[1,2,3,4,5,6,7,8,8,9,10]

console.log( myNum.map( (num) =>num *10 )
.map( (num) => num + 1)
.filter( (num) => num >41) // fiter use for comparisor
);
