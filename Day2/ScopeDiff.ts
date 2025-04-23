function ScopeTest()
{
if(true)
{
 var a=10;
 let a2=20;
 const a3=30;

console.log(a);

console.log(a2);

console.log(a3);

}

// console.log(a);--Function scope

// console.log(a2);--error  block scope

// console.log(a3);-error  Block scope

}

ScopeTest();

// var with 
var x;//decleration
console.log(x);
x=30;//initializations
console.log(x);

//let
let y;
console.log(y);
y=40;
console.log(y);

//const
const k=20;// initilization important
//const b;
console.log(k);