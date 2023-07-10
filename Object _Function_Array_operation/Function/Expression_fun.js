// Function Expression

//Syntax

var variableName = function(){
    //function body
  };
  
  //calling function
  
  console.log(variableName());
  
  // output --> undefined
  
  // we can also decalred variable function name too--->
  
  // Named function expression
   var variableName = function functionName(){
    // function body
   }
  // calling function
  console.log(variableName());
  // output --> Undefined
  
  //Example ->
  var add_two_number = function (x,y) {
    return x+y;
  }
  
  function add(x,y) {
    return x+y;
    
  }
  
  // calling the function
  console.log(add(4,7));  //Output : 11
  
  console.log(add_two_number(15,45)); //Output : 30
  