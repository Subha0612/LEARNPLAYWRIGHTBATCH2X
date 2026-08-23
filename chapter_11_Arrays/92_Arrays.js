let fruits = ["banana"," apple", "cherry"];
fruits.sort();
console.log(fruits);

let numbers = [10, 1, 21, 2];
numbers.sort();
console.log(numbers);

// Natural sorting, lexicographic sorting
numbers.sort((a,b) => a - b); // Ascending 
console.log(numbers);

numbers.sort((a,b) => b - a); // Descending
console.log(numbers);
