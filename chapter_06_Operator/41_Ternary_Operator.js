let a = 10;
let is_a_greater_than_5 = a > 5 ?"Yes" : "No";
console.log(is_a_greater_than_5);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

let environment = "Staging";
let baseUrl = environment === "Production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);

let condition = true;
let isSKMale = condition ?" True" : "False";
console.log(isSKMale);

let resonseTime = 650;
let sla = 1000;
let slaStatus = responseTime <= sla ? " Within SLA" : "SLA Breached";
console.log(slaStatus);


let age = 16;
let Adult = age >=18 ? "Major" : " Minor";
console.log(Adult);

let num =8;
let EvenOrOdd = num % 2 === 0 ? " Even" : "Odd";
console.log(EvenOrOdd);

let num = -5;
let PosOrNeg = num >= 0 ? "Positive" : "Negative";
console.log(PosOrNeg);

let marks= 72;
let PassOrFail = marks >=35 ?"Pass" : "Fail";
console.log(PassOrFail);

let isLoggedIn = false;
let accessMessage = isLoggedIn === true ? "Welcome" : "Please Login";
console.log(accessMessage);

//Max number between two numbers using ternary operator.
let a = 10;
let b = 25;
let maxnum = a > b ?"a is larger" : " b is larger";
console.log(maxnum);

let amt = 1000;
let discount = amt >= 1000 ? "10% Discount Applied" : " No Discount";
console.log(discount);


let username = "group process owner";
let role = username === " " ? "Guest" : `${username}`;
console.log(role);


let temp =28;
let weather = temp >= 30 ? "Hot" : "Cool";
console.log(weather);

let age = 20;
let voteEligibility = age >= 18 ? "Can Vote ": "Cannot vote";
console.log(voteEligibility);

//nested ternary practice

let marks = 82;
let gradeSystem = marks > 90 ? "Grade A" : (marks > 75 ? "Grade B" :(marks > 50 ? "Grade C": "Fail"));
console.log(gradeSystem);


let num = 0;
let numNature = num > 0 ? "Postive" : (num < 0 ? "Negative" : "Zero");
console.log(numNature);

//Max number among three numbers using nested ternary opertor.
let a = 5;
let b = 9;
let c = 7;
 let largestNumber = a > b ? "a is largest" :(b > c ? " b is largest" : (c > a ? " c is largest" : ""));
 console.log(largestNumber);


 let darkMode = true;
 let themeMode = darkMode == true ? " Dark Theme" : " Light Theme";
 console.log(themeMode);

 let subscribed = false;
 let subsStatus = subscribed === true ? "Premium user" : "Free user";
 console.log(subsStatus);
 

 let year = 2024;
 let leapYear = year % 4 === 0 ?" Leap Year" :"Not a Leap year";
 console.log(leapYear);

 

 let str = "HelloWorld";
 let strLength = str.length > 5 ? "Long String" : "Short String";
 console.log(strLength);