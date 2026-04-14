// Write a function to count the number of vowels in a string.





function numberOfString(str) {

    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

const strings = "Sajeeb Al Jabed";
console.log(numberOfString(strings));