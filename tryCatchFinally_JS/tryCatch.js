// Try and Catch and finally

// Try statement =>
/*
It is a piece of code that needs to be tested during the execution of code. The block of code is checked if it 
has any errors or not . If any errors are encountered , then the try{} statement passes  it to the catch {} 
statement block. Once the control is handed over to the catch block the code block under catch {} will be executed
*/

//catch statment =>
/*
The catch statment defines a block of code that gets exexuted when any errors are encountered within the 
try block. The catch block gets executed only when there is any error present in the try block and the error
need to be addressed. Otherwise , the catch block gets skipped . The catch block gets executed only after the 
execution of the try block.
*/

// Finally statement =>
/*
In addition to the catch statement we can also use the finally statement which defines a block of code 
that will be executed regardless of whether an exception was thrown or not. This can be used to perform 
other actions after the try-and-catch statements have been executed
*/

//Syntax of try-catch-finally

try {
  // Block of code for testing (risky block of code)
} catch {
  // block of code for addressing error
} finally {
  // block of code to run after try-catch
}

/******************************************************************************************************************* */

// USE OF TRY - CATCH AND FINALLY IN REAL WORLD
/*
1. Uses of exception handling 
2. Implementation of try-catch.
3. Implementation of try -catch -finally
4. Error object
5. User-defined errors
*/

/*
There are many uses of exception handling 
1. Using exceptional handling to deal with error of code and avoid the code from crashing and keeps in code running smoothly
2. We have a clear understanding of what's happening inside the code if any error is encounter we get some error message 
 which give us some information about what is happening with the code.
3. Exceptional handling makes easier to dubug your code. By catching exception we can know the exact location where the
error occured and take approriate action  
*/

/*
console.log("Hello from PW skills");
console.log("congratulation !! You have enrolled to course");
console.log("You have completed HTML and CSS , Hurray !!");
// console.log(webdevelopment); // Reference error will occured 
console.log("You are now learning Javascript");

*/

// Exception handling ->
console.log("Hello from PW skills");
console.log("congratulation !! You have enrolled to course");
console.log("You have completed HTML and CSS , Hurray !!");

// ab dekho hota hai kya

try {
  console.log(webdevelopment);
} catch (error) {
  console.log("your error is here ->", error);
} finally {
  console.log("You are now learning Javascript");
}

/*
Output->
Hello from PW skills
congratulation !! You have enrolled to course
You have completed HTML and CSS , Hurray !!
your error is here -> ReferenceError: webdevelopment is not defined
    at Object.<anonymous> (/config/workspace/PW-SKILLS-JS-NOTES/tryCatchFinally_JS/tryCatch.js:72:15)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
You are now learning Javascript
*/

/*********************************************************************************** */

/**
 * In our example let's consider . If the student has not completed the assignment we store false value in
 * the assignmentCompletion variable and throw a new error
 * " You have not Completed the Assignment"
 */

let assignmentCompletion = false;

try {
  if (assignmentCompletion == false) {
    throw new Error("You have not completed the Assignment");
  }
} catch (error) {
  console.log(error.message);
} finally {
  console.log("You can now create Static webpages");
}

console.log("You are now learning Javascript");

/**
 * You have not completed the Assignment
 * You can now create Static webpages
 * You are now learning Javascript
 */

