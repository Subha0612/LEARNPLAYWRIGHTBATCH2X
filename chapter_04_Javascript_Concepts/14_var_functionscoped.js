// Gobale Scope
var b = 10; 
console.log(b);

function printHello(){
    console.log(" Hello Hello How are you doing ");
// Local Scope
    var b = 60;
    console.log(b);
    if(true){
        var b = 50;
        console.log(b);
    }
}
 printHello();
 
