/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/





let age = 62;
let isStudent = false;
let ticketFare = 800;


if (age < 10) {
    console.log("You get a free ticket!");
}

else if (!isStudent) {
    let discountedFare = ticketFare * 50 / 100;
    let payAmount = ticketFare - discountedFare;
    console.log("Student ticket fare: " + payAmount + " taka");
}

else if (age >= 60) {
    let discountedFare = ticketFare * 85 / 100;
    console.log("Senior citizen ticket fare: " + discountedFare + " tk");
}

else {
    console.log("Regular ticket fare: " + ticketFare + 100 + " tk");
}