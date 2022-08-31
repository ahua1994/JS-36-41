// Assignment-JS-39:
// Write a JS code to copy all of the contents of obj1 to obj2 by doubling
// value numbers at below.
// Expected Output:
// obj2  = {'Apple': 30, 'Orange': 70, 'Melon': 40, 'Banana': 100, 'Pear': 80}

let obj1 = { Apple: 15, Orange: 35, Melon: 20, Banana: 50, Pear: 40 };

let objDoubler = (obj) => {
    let newObj = {};
    for (let [key, value] of Object.entries(obj)) {
        newObj[key] = value * 2;
    }
    return newObj;
};

console.log(objDoubler(obj1));
