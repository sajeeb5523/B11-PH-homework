// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.





const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const nonArray1 = "This is a string";
const nonArray2 = 42;

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
console.log(Array.isArray(nonArray1));
console.log(Array.isArray(nonArray2));