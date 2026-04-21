// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];





const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(names) {
    let smallest = names[0];

    for (const name of names) {
        if (name.length < smallest.length) {
            smallest = name;
        }
    }
    
    return smallest;
}

const heights = findSmallestName(heights2);
console.log(heights);