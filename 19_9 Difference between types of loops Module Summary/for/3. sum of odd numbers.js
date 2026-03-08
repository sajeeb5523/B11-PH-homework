/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/





// Subtask-1:
let oddSum = 0;

for (let odd = 91; odd <= 129; odd++) {
    if (odd % 2 === 1) {
        oddSum = oddSum + odd;
        console.log(odd);
    }
}

console.log("Sum of odd numbers from 91 to 129:", oddSum);

// Subtask-2:
let evenSum = 0;

for (let even = 51; even <= 85; even++) {
    if (even % 2 === 0) {
        evenSum = evenSum + even;
        console.log(even);
    }
}

console.log("Sum of even numbers from 51 to 85:", evenSum);