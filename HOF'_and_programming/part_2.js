let arr = [12, 15, 17];

// there is way to print array
arr.forEach(function (element, index, arr) {
  console.log("first way :".element, index, arr);
});

// second way to print array
arr.forEach((element, index, arr) => {
  console.log("second way : ", element, index, arr);
});

const heros = ["nagraj", "ajayraj", "pushparaj", "sourabh", "shyam"];

// change this all array into uppercase
heros.forEach((element) => {
  console.log(element.toUpperCase());
});

// you can also do the same operation like "foreach" with the help of the "map" keywords
heros.map((element, index, array) => {
  console.log(element, index, array);
});

// change into upper case with the help of map

heros.map((element) => {
  console.log(element.toUpperCase());
});

// filter

// use filter and write the array which is ends with "raj"
console.log(heros);
const endWithRaj = heros.filter((element) => {
  return element.endsWith("raj");
});

console.log(endWithRaj);

//shoping cart

const cartBill = [20, 30, 45];
const sumOfCardBill = cartBill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCardBill);

//check if all values are number
const gameScore = [100, 200, 400, 500, 455];

console.log(typeof gameScore[1]); //Number

const gameScoreCheck = gameScore.every((el) => typeof el === "number");
console.log("check", gameScoreCheck);

//find score above 200
const above200 = gameScore.find((element) => element > 200);
console.log(above200);

// findIndex : The findIndex() method returns the index of the first element in an array that satisfies
// the provided testing function. If no elements satisfy the testing function, -1 is returned.

let array1 = [15, 16, 17, 18];

const isLargeNumber = (el) => el > 15;
console.log(array1.findIndex(isLargeNumber)); // expected output = 1

// some :
/*
The some() method tests whether at least one element in the array passes the test implemented by the 
provided function. It returns true if, in the array, it finds an element for which the provided function 
returns true; otherwise it returns false. It doesn't modify the array.
*/


let array2 = [12,15,15,8,10]
const search = (el)=> el >12 ;
console.log(array2.some(search)) // agr ek condition bhi satisfy ho jayegi to true return dega

// sort


const array3 = ["45","50","60", "35" ,"15"]
array3.sort();
console.log(array3); // [ '15', '35', '45', '50', '60' ]


// sort() function works on the principle of comparision 

// You can also done this same operation with using comparing 

const array4 = [1,5,4,7,82,1,24,4,25]

array4.sort((x,y)=>x-y)

console.log(array4) 
/*Output => [
  1,  1,  4,  4, 5,
  7, 24, 25, 82
]
*/

//same thing by using function
function compareFunc(x,y){
  return array4.sort((x,y)=>x-y)
}

console.log("You can also done with the help of function =>",compareFunc(array4))