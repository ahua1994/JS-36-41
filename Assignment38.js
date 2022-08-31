// Assignment-JS-38:
// Ask the user to enter a word, a separator, and a number of
// repetitions. Write a JS code displaying the word with repetition
// times and separating each word with a separator character. For
// example, if the user enters the word as Tina, separator as ! and
// repetitions as 3 expected output is "Tina!Tina!Tina"
// Be careful there is no separator character at the end.

// // clean way
function wordSeperator(word, seperator, reps) {
    let words = [];
    for (let i = 0; i < reps; i++) {
        words.push(word);
    }
    return words.join(seperator);
}

// dirty way
// let wordSeperator = (word, sep, reps) =>
//     (word + sep).repeat(reps).slice(0, word.length * reps + reps - 1);

// console.log(wordSeperator("Tina", "!", 8));
