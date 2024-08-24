/* 
Var = Funciotnal Scope Element
Const = Block Scope Element
Let = Block Scope Element
*/

const umair = "name1";
var shoaib = "name2";
let idrees = "name3";
name = "name4";

let alias;

console.log(umair, shoaib, idrees, name, alias);

// umair = "1"; because this is constant we can't change the value of constant variable

shoaib = "2";
idrees = "3";
name = "name";

console.warn(umair, shoaib, idrees, name, alias);
