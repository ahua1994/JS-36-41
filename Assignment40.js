// Assignment-JS-40:
// Write a JS arrow function to sum all the numbers between 2
// positive integer numbers. Start and end numbers should be
// included to sum.
// Example:
// totalsum(10,20) = 10+11+12+13+14+15+16+17+18+19+20 = 165

let totalsum = (num1, num2) => {
    let answer = num1;
    for (let i = num1 + 1; i <= num2; i++) {
        answer += i;
    }
    return answer;
};

console.log(totalsum(10, 20));
