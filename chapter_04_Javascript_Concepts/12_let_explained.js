// let is blocked scoped and it does not allow redecalaration but it allows reassignment. 

let a = 10;
let retryCount =0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry count is:", retryCount);

let retryCount = 5; // This will throw syntax error because redeclaration is not allowed in Let.

let testStatus = "pending";

if (testStatus === "pending"){
    let executionTime = 1500;
    console.log("Inside Block:",executionTime);

}

console.log(executionTime); // This will throw reference erroor because 
// executionTime is block scoped and it is not accessible outside the block 


// Block - {}
// if(){}
// Function - function name (){}