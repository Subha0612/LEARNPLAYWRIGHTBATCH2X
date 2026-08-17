//print numbers from 1 to 10
for( let i=1;i<=10;i++){
console.log(i);
}

// print even numbers from 1 to 20

for (let n=1; n<20;  n++){
    if(n%2===0){
        console.log(n);
    }
}
// Print numbers from 10 to 1

 for(let i=10; i>=1; i--){
    console.log(i);
 }

 // print odd numbers from 1 to 20 

 for(let n=1; n<=20; n++){
    if(n%2!==0){
        console.log(n);
    }
 }
// print even numbers from 1 to 20 without if 
for (let n =0 ; n<=20; n+=2)
 {
 console.log(n);
 } 

 // print odd numbers from 1 to 20 without if 
  for (let n =1 ; n<=20; n+=2)
 {
 console.log(n);
 } 

 // Multiplication of 5 

 for (let n =1 ; n<=10; n++){
console.log("5 X " + n + " =" + (5 * n));
}


// Multiplication of 7 

for(let n = 1; n <=10 ; n++){
    console.log("7 X"+ n + " = " + (7 * n));
}

// Print the sum of numbers from 1 to 10 
let sum =0;
for (let n =0; n<=10; n++){
    if(sum = sum + n){
        console.log(sum);
    }
}

// print  how many numbers from 1 to 50 are divisible by 5

let count=0;
for (let n =1; n<=50; n++)
{
if (n%5===0){
count++;
} 
}
console.log(count);



// Print all the numbers between 1 and 100 that are divisible by both 3 and 5.
for(let i = 1; i<=100; i++){
if( i%3===0 && i%5===0)
{
console.log(i);
}
} 

// Print the star pattern * 
for (let i=1; i<=5; i++){
    for(let n=1; n<=15; n++){
        console.log("*");
    }
}
