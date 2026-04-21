// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];





const heights2 = [167, 190, 120, 165, 137];

// normal method
console.log(Math.min(...heights2));

// another way
function getLowestNumber(numbers) {
    let lowNumber = numbers[0];

    for (const num of numbers) {
        if (num < lowNumber){
            lowNumber = num;
        }
    }
    
    return lowNumber;
}

const lowest = getLowestNumber(heights2);
console.log(lowest);