let retry = 0;
do{
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while(retry< 3);

//Practice exercise 
// Print numbers 1 to 10

let num = 0;
do{

    console.log("Number",num++);
  
}while(num <=10);


// Print numbers from 10 to 1

let num = 10;
do{
    
    console.log("Numbers",num--);

}while(num >=0);

// Printing even numbers from 2 to 20

let a =0;

do{
    
    a +=2;
    console.log("Even numbers",a);
    
}while(a<20);


// Print SUM 1 to 10

let i =1;
let sum =0;

do{
     console.log("inside:");
     sum= sum+i;
    i++;
}while(i<=10);

console.log("SUM is:",sum);

// do while + if 
// Print the numbers from 1to 20, whic are divisible by 3

let num = 1;
do{
   // console.log("inside 2:");
    if(num%3===0){
       console.log("Number",num );
      
    } 
    num++; 
    
}while(num <=20);
//console.log("Number",num );


//