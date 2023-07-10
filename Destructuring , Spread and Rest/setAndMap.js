let emptySet = new Set();
// console.log(emptySet.size); // 0

let myArr = [15,1,15,25,12,25,45,25]
let newSet = new Set([...myArr])
console.log(newSet); //Set(5) { 15, 1, 25, 12, 45 }


newSet.add(9);
console.log(newSet); //Set(6) { 15, 1, 25, 12, 45, 9 }

// newSet.clear()
// console.log(newSet); // Set(0) {}


 let check = newSet.has(9)
console.log(check); // true


// set difference 



// const setA = new Set([1,2,3]);
// const setB = new Set([1,3,6]);

// function setDifference(setA, setB) {
//     return new Set([...setA].filter(el => !setB.has(el)));
// }

// console.log(setDifference(setA, setB));

const setA = new Set(["s","o","u","r","a","b","h"]);
const setB = new Set(["s","h","a","r","m","a"]);

function setDifference(setA, setB) {
    return new Set([...setA].filter(el => !setB.has(el)));
}

console.log(setDifference(setA, setB));

// output will be = Set(3) { 'o', 'u', 'b' }

