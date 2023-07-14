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
