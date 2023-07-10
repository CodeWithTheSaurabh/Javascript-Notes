// Anonymous function 

/*

function(){
  console.log("Hello Pw Skills");
}

// Output => Syntex error : Function statements require a function name

*/

//Syntax of anonymous function 

/*
let variableName = function() {
  //function body
  
}

// calling an anonymous function

variableName();
*/


// Immedietly invoked function

/*

//Syntax

(function () {
  //function body
}) ();

*/


// example

(function (num) {
    console.log(num + num)
      
    })(5); // output 10