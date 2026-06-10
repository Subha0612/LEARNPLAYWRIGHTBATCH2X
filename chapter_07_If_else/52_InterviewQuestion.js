// if ("hello") console.log("String is truthy"); // // "hello" = truthy
// if (42) console.log("Number is truthy");
// if ({}) console.log("Empty object is truthy!");
// if ([]) console.log("Empty array is truthy!");

// if ("") console.log("Won't print");
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");
// if (NaN) console.log("Won't print");
// if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}


// question : HTTPS Status Code Categorizer
// problem Statement : Given an HTTP status code, print which category it belongs to 
 
//if200–299 → Success
//300–399 → Redirection
//400–499 → Client Error
//500–599 → Server Error
//Anything else → Invalid

let statusCode = 404;

if(statusCode ===200 || statusCode <=299)
{
    console.log("Success");
}
else if(statusCode ===300 || statusCode <=399)
{
    console.log("Redirection");
}
else if(statusCode ===400 || statusCode <=499)
{
    console.log("Client Error");
}
else if(statusCode === 500 || status <=599)
{
    console.log("Server Error");
}
else{
    console.log("Invalid request");
}