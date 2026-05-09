let a = 15;
console.log(a);

//below is the hot code - where the optimization (compilation) happens 
for (let a = 0; a < 100000; a++) {
    console.log(a);
    print();
}

function print() {
    console.log("Hello");
}