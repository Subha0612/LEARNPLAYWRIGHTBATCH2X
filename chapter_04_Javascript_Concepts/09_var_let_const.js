var v = 30;
let l = 50;
const c = 5.5;

// redeclaration and reassignment allowed in var 
var browser = "Chrome";
var browser = " Edge"; // This redeclaration
browser = "Firefox"; // This is reassignment

// for , functions 

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++){
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);


//This is possible in JS 

console.log("HI");
console.log("HI");
console.log("HI");
console.log("HI");
console.log("HI");
console.log("HI");

function log(){
    console.log("HI");
}

// function definition 
function say(){
    console.log("Hi Hello");
}

// function calling 
say();
say();
say();
say();