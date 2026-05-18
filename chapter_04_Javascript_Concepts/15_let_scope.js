let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    // Local Scope
    let a = 20; 
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); 
    }
   // console.log("F ->", a);
}

//console.log("G ->", a);

printHello();