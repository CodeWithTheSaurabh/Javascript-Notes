// Function without a parameter and return---->
/* The parameter and return statements inside a function are optional sometimes we wish to get some 
tasks done inside a function without taking any input parameter and without returing any output */

//Syntax - function declaration

function functionName(){
    //function body
  }
  
  //calling function
  functionName();
  
  // example of function(without parameter) ->
  
  // function declaration -
  
  function sayMessage(){
    console.log("I am Happy to Learn Full stack developer course from pw skills ")
  
  }
  
  sayMessage();
  sayMessage();
  sayMessage();
  sayMessage();
  
  /*
  Output->
  I am Happy to Learn Full stack developer course from pw skills 
  I am Happy to Learn Full stack developer course from pw skills 
  I am Happy to Learn Full stack developer course from pw skills 
  I am Happy to Learn Full stack developer course from pw skills
  */
  
  
  //Function with returning value
  
  // Declaration
  /*
  
  function functionName(){
  //function body
  
  return expression/value;
  }
  
  // calling a function
  
  let return_value = functionName();
  
  */
  
  
  // Example for returning value 
  
  function passMessage(){
    return "I am happy to learn Full Stack Development from PW skills";
  }
  
  let Message = passMessage();
  console.log(` ->${Message}`);
  
  /*
  output->
   ->I am happy to learn Full Stack Development from PW skills
  
  */
  
  //function with no returning value 
  function printName(name){
    if (name==undefined){
      return;
    }
  console.log(name);  
  } 
  
  printName(''); // Output=> No output
  printName("PW SKILLS"); // Output -> PW SKILLS 
  
  
  //We can further use the value stored throughout the program.
  
  // function returining value
  
  // declaration
  
  function passMessage(){
    return "I am Happy to learn full stack developent course from pw skills";
  }
  
  let message = passMessage();
  console.log(message);//Output=> I am Happy to learn full stack developent course from pw skills
  
  let new_message = message + " Enroll Today ! ";
  console.log(new_message); //Output -> I am Happy to learn full stack developent course from pw skills Enroll Today ! 
  