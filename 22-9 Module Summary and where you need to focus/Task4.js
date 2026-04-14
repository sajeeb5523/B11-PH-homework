/*

 Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

 */





function findLongestWord(sentence) {
    
    const words = sentence.split(' ');
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

const input = "I am learning Programming to become a programmer";
const result = findLongestWord(input);

console.log(result);