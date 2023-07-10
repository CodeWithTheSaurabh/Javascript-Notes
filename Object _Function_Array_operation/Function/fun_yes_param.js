// Function with a Parameter (Single and Multiple)------>

 /* Topic covered  :
  * Function with parameter
  * Funcrtion with one parameter
  * Function with default Parameter
  * Function with two parameter
  * Array as an arguments
   */


//function with parameter
 // function declaration 

 function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
   }
  
  /* In the above example the 'messageToBeDisplayed' in the paramter which is specified in the 
  function declaration */
  
  //function with parameter 
  // function declaration
  
  function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
  }
  
  // calling function ->
  displayMessage(" I am happy to learn full stack developer course from pw skills ");
  displayMessage("I am enjoying the jorney of javascript");
  
  
  /*
  Sometimes functions are written with (default parameter) values to avoid errors when the function is
  called without passing any arguments.
  */
  
  function displayMessage(
    messageToBeDisplayed = "I am a proud student of PW SKILLS"
  ){
    console.log(messageToBeDisplayed);
  }
  displayMessage();
  //output=> I am a proud student of PW SKILLS
  
  displayMessage("I am happy to learn Full Stack Web Development from PW Skills");
  // output => I am happy to learn Full Stack Web Development from PW Skills
  
  //Function with two parameters.
  //function declaration
  
  function sumOfTwo(num1,num2){
    return num1 + num2;
  
  }
  
  // calling function
  let result = sumOfTwo(15,20);
  console.log(result);
  
  //output = 35
  
  
  // function using arguments as an array
  
  function sumOfTwoNumbers([number1, number2]){
    return number1 + number2;
  }
  
  //calling function
  let arey = [12,15];
  let final_array = sumOfTwoNumbers(arey);
  
  console.log(`Result is => ${final_array}`);
    
  
  // OR you can also pass in this manner also ->
  
  function addOfTwONumber(){
  
    return n_1+n_2;
  }
  let n_1 = 12;
  let n_2 = 12;
  let sum = addOfTwONumber(n_1,n_2);
  console.log(`Result of addOFTwoNumber => ${sum}`);
  
  // OR YOU CAN ALSO ADD IN THIS MANNER =>
  
  function Sum([n1,n2]){
  
    return n1+n2;
  }
  
  let n = [25,25];
  let r= Sum(n);
  console.log(` sum of n number is => ${r}`);
  