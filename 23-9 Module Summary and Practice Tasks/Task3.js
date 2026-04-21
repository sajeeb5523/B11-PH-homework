// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.





const electronics = [
    { name: "laptop", price: 35000 },
    { name: "tablet", price: 15000 },
    { name: "mobile", price: 20000 },
]

function calculateElectronicsBudget(products) {
    let total = 0;

    for (const product of products) {
       total = total + product.price;
    }
    
    return total;
}

const calculation = calculateElectronicsBudget(electronics);
console.log(calculation);