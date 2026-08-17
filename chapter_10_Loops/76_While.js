let attempt = 0; // Init
while (attempt < 3) { // Condition
    console.log(attempt);
    attempt++; // Updation
}

let modi = 1;
while (modi <= 15) { // 1 to 15,Times -> 

    console.log("Modi will do 15+ years");
    modi++;

}

// print numbers from 1 to 10 
let i = 1;
while(i<=10){
    console.log(i);
    i++;
} 

//print numbers from 10 to 1
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}

//Print only even numbers from 1 to 20.

let i=1;
while(i<=20){
    if(i%2===0){
        console.log(i);
    }
    i++;
}


//Print only odd numbers from 1 to 20.

let num=1;
while(num<=20){
    if(num%2!==0){
        console.log(num);
    }
    num++;
}

//Print the 5 multiplication table.
let i = 1;
while(i <=10){
    if(i*5){
        console.log("5 x" + i + "=" + (5*i))
    }
    i++;
}

//Find the sum of numbers from 1 to 10.
let sum=0;
let i =1;
while(i<=10){
    sum = sum + i;
        i++;
       }
       console.log(sum);
       
 let sum =0;

let sum =0;
for(let n=0; n<=10; n++)
{
sum = sum + n;
}      
console.log(sum);



// print the sum of even numbers from 1 to 10 && sum of odd numbers from 1 to 10

let sum_even =0;
let sum_odd = 0;
for(i =1; i<=10; i++){
    if(i%2===0) {
sum_even = sum_even + i;
    } 
    else{
sum_odd= sum_odd + i;
    }
}
console.log("Sum of even numbers is:"+ sum_even);
console.log("Sum of odd numbers is:"+ sum_odd);
