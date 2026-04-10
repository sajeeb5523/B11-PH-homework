// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.





function make_avg(arr, length) {
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / length;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
const sizes = numbers.length;
console.log(make_avg(numbers, sizes));