// display odd number from 55 to 85 and skip the numbers divisible by 5.





for (let odd = 55; odd < 85; odd++) {
    if (odd % 2 === 1 && odd % 5 !== 0) {
        console.log(odd);
    }
}