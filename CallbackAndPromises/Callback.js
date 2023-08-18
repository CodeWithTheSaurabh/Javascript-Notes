// Callback ->
// In javascript , a callback is a function that is passed as an argument to
// another function and is intended to be executed later, usually after a
// certain task or event has completed . Callbacks are commonly used in
// asynchronous programming to manage tasks that might take some
// time to finish , such as reading files , making network requests , or
// handling user interactions.

//----------------------------------------------------------------------------------------------------

//Example -> These all are the examples of synchronus callback
// Synchronous -> all line executing line by line or we can say it is natively defined
function squareOfNumber(num) {
    // console.log(num * num);
  }
  
  function operation(num, func) {
    func(num);
  }
  
  // calling the function
  operation(5, squareOfNumber);
  
  // Output -> 25
  
  //----------------------------------------------------------------------------------------------------
  
  function h(x, fn) {
    // h-> Higher order function
    // fn -> Callback
    // console.log(x * x);
    fn();
  }
  
  h(10, function () {
    //console.log("Done with Callback");
  });
  
  // Output ->100
  //Done with Callback
  
  //--------------------------------------------------------------------------------------------------
  
  function p(n, pn) {
    //  console.log(n * n);
    pn();
  }
  
  p(12, exec);
  
  function exec() {
    // console.log("Second function of callback has done");
  }
  
  // Output -> 144
  // Output -> Second function of callback has done
  
  //---------------------------------------------------------------------------------------------------
  
  function z(x, tn) {
    // console.log(x * x * x);
    tn(x * x * x);
  }
  
  z(5, fun);
  
  function fun(x) {
    // console.log("cube of the number is", x);
  }
  
  // Ouput =>125
  // cube of the number is 125
  
  //------------------------------------------------------------------
  
  //Asynchronus types of callback - this will executes frequently without delaying or powered by web-browser
  
  //console.log("start");
  setTimeout(function f() {
    // console.log("timer will complete in three second");
  }, 3000);
  
  setTimeout(function s() {
    //console.log("timer will complete in two second");
  }, 2000);
  
  // for(let i = 0 ; i<=10; i++){} // this is global piece of code
  
  // console.log("end");
  
  // output ->
  // start
  // End
  // timer will complete in two second
  // timer will complete in three second
  
  //-----------------------------------------------------------------------------------------------------
  
  // Asynchronous task -: examples
  // console.log("Start");
  function function01() {
    // console.log("Executing function 01");
  }
  
  function function02(callback) {
    callback();
    /*
    The function function2 is defined , which takes a single arguments called callback. This argument is
    expected to be a function and is executed by calling it with paranthesis () withinn the function2 function
    after that , the message "executing function 02 " is logged to the console.
    */
    //console.log("Executing function 02");
  }
  
  function02(function01);
  //console.log("End");
  
  // Output ->
  /*
  Start
  Executing function 01
  Executing function 02
  End
  */
  
  //-----------------------------------------------------------------------------------------------------------
  
  // Now let's look at the asynchronous callback -:
  
  // console.log("Start");
  setTimeout(function () {
    // console.log("Set Timeout is being Executed");
  }, 1000);
  //console.log("End");
  
  /* Output ->
  Start
  End
  Set Timeout is being Executed
  */
  
  //-----------------------------------------------------------------------------------------------------------
  
  // Nested Callback -:
  
  console.log("Start");
  setTimeout(function () {
    console.log("Executing function 01");
    setTimeout(function () {
      console.log("Executing function 02");
      setTimeout(function () {
        console.log("Executing function 03");
        setTimeout(function () {
          console.log("Executing function 04");
          setTimeout(function () {
            console.log("Executing function 05");
            setTimeout(function () {
              console.log("Executing function 06");
              setTimeout(function () {
                console.log("Executing function 07");
                setTimeout(function () {
                  console.log("Executing function 08");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 3000);
  }, 1000);
  console.log("End");
  
  
  
  // Output ->
  /*
  Start
  End
  Executing function 01
  Executing function 02
  Executing function 03
  Executing function 04
  Executing function 05
  Executing function 06
  Executing function 07
  Executing function 08
  */
  
  
  // Why it is said to be callback hell ?
  /*
  It is said to be callback hell because it is difficult to read and maintain the code Additionally 
  if any error is occured in the code it is difficult to pinpoint the code.
  
  
  To avoid Callback there is several method is available in the javascript like Promise , async 
  and await function we will be looking into the next lecture this technique also help you to write 
  cleaner and more maintainable code in the javascript when dealing with asynchronous operation/callback
  
  */