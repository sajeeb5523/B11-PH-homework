/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/





// subtask-1

let odd = 61;

while (odd <= 100) {
    if (odd % 2 === 1) {
        console.log("odd: " + odd);
    }
    odd++;
}

// subtask-2

let even = 78;

while (even <= 98) {
    if (even % 2 === 0) {
        console.log("even: " + even);
    }
    even++;
}