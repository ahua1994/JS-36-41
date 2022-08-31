// Assignment-JS-37:
// Write a JS code that counts how many vowels and
// consonants a string has that a user entered.

const Vowels = ["A", "E", "I", "O", "U"];
const Consonants = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "S",
    "T",
    "V",
    "X",
    "Z",
    "H",
    "R",
    "W",
    "Y",
];

function charTypeCount(str) {
    let vowels = 0,
        consonants = 0;
    str.split("").forEach((x) => {
        if (Vowels.includes(x.toUpperCase())) {
            vowels++;
        } else if (Consonants.includes(x.toUpperCase())) {
            consonants++;
        }
    });
    return `${vowels} vowels, ${consonants} consonants`;
}

console.log(
    charTypeCount(
        "You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick."
    )
);
