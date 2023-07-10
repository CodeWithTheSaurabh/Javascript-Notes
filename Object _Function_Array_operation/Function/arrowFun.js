// Arrow function

// One paramter and single return statement 
const square = x => x*x;

//Multiple parameter and single return statement
const sumOfTwoNumbe = (x,y) => x+y;

// Multiple statements in function expression
const addition = (x,y) =>{
  console.log(`adding ${x} and ${y}`);
  return x+y;
}

// Returning an object

const sumAndDifference = (x , y) =>({
  sum: x+y, difference: x-y })

// Calling a function 
let output_1 = square(5);
console.log(output_1) // output will be 25

let output_2 = sumOfTwoNumbe(45,48);
console.log(output_2); // Output will be 93

let output_3 = addition(45,45);
console.log(output_3); // output will be 90

console.log(sumAndDifference(45,15)); // { sum: 60, difference: 30 }
