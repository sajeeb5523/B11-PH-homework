// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.





function number(num) {
    if (num % 2 === 1) {
        const result = num * 2;
        return result;
    }
    else {
        const result = num / 2;
        return result;
    }
}

console.log(number(9));
console.log(number(12));