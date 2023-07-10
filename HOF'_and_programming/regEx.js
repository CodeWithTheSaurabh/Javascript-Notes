//There are some ways to initialized regular expression in the code

// First ways ->

let pattern = "pw";
let regExOne = new RegExp(pattern); // creating object
let flag = "gi"; // here we initializing our pattern is globally insensitive
let regExTwo = new RegExp(pattern, flag); // Here we have created second object in which I stored the value of both first one is pattern and in second globally sensitive or not

//Second ways ->

let regExThree = /pw/gi;
const strCheck =
  "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";
const result = regExThree.test(strCheck);
console.log(result); // Output => True

//match function show that how many numbers of count that regular function comes in existence
const anotherResult = strCheck.match(regExThree);
console.log(anotherResult);

// Third way :

// How to replace string using keyword replace
const replacement = strCheck.replace(regExThree, "p-w");
console.log(replacement);

// How to update on web URL
const weburl = "https://www.pwskills.com/Sourabh%20Sharma";
const reusableUrl = weburl.replace(/%\d\d/gi, "-");
console.log(reusableUrl);




