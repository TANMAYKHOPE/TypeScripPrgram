var studentname="tanmay";
// var let and const
var age :30;
let Newage=40;
console.log("age");

// var vs let vs const
//---------------------



function variableFun()
{
if(true)
{
var mess="hello tanmay";
console.log(mess);

}
console.log(mess);

}

variableFun();

//let abd  constant  (block scope)
function blockscope()
{
if(true)
{
    let message="Hello new";
    const greet="Hello const";
    console.log(message);
    console.log(greet);
}
}

blockscope();

var x;
console.log(x);
x=30;
console.log(x);//undefined

const agea=30;
//agea=23;
console.log(agea);


//hosting  


let A=10
{
    let A=20;
}
console.log(A);
