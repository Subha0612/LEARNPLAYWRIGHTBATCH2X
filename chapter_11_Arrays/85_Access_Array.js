// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses[-1]); //undefined
console.log(statuses[-2]); //undefined
console.log(statuses[-3]); //undefined
console.log(statuses[-4]);  //undefined

//Modify
statuses[1] = "blocked";
console.log(statuses);