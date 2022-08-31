// Write a JS code that calculates the average of
// scores that students took in a math class below.

let scores = {
    Mary: 85,
    Susan: 75,
    Barry: 65,
    Alexis: 88,
    Jane: 45,
    Tina: 100,
    Tom: 90,
    Tim: 60,
};

let avgScore = (obj) => {
    let marks = Object.values(obj);
    let total = marks.reduce((acc, score) => acc + score, 0);
    return total / marks.length;
};

console.log(avgScore(scores));
