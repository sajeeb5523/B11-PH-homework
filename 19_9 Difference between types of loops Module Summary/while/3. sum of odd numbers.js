/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/





// subtask-1

let odd = 81;
let oddSum = 0;

while (odd <= 131) {
    if (odd % 2 === 1) {
        oddSum = oddSum + odd;
    }
    odd++;
}

console.log("sum of odd numbers: " + oddSum);


// subtask-2
let even = 206; 
let evenSum = 0;        

while (even <= 311) {
    if (even % 2 === 0) {
        evenSum = evenSum + even;
    }   
    even++;
}

console.log("sum of even numbers: " + evenSum);