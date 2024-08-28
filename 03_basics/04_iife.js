// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log("DataBase Connected");
    
// }
// chai()


//named function
(function chai(){
    console.log("DataBase Connected");
    
}
)();


//unnamed function
( (user)=>{
    console.log(`DataBaseTwo Connected ${user}`);
    
} )("Merry")