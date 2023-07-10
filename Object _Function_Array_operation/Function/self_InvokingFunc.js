//Self Invoking function
/* A funcion ha invokes iself immediaely afer is definiion is referred o as a self-invokin. (or self-
execuin.) funcion. */


//Syntax

/*

(function(parameter){
  //body of the function
}) (arguments)

*/

(function(){
    console.log(Math.PI);
  }) ();
  // Output = 3.141592653589793
  
  //The example below demonstrates how parameters can also be supplied to self-invoking functions.
  
  (function (x) {
    console.log(x)
  })(`Welcome to PW skills`);
  
  
  //Output => Welcome to PW skills
  
  
  