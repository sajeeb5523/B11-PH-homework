// Write a function to convert temperature from Celsius to Fahrenheit.





function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

const tempInCelsius = celsiusToFahrenheit(37);
console.log(tempInCelsius);