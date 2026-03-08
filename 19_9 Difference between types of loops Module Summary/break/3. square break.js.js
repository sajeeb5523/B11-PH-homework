// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)





let i = 1;

while (true) {
    if (i * i > 100) {
        break;
    }
    console.log("normal:", i);
    console.log("square root:", i * i);
    i++;
}