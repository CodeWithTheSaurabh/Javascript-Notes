// Live notes with Sanket Sir

function createPromise() {
    return new Promise(function exec(resolve, reject) {
      // Your code goes here -:
      setTimeout(function f() {
        console.log("Timer done");
        resolve("sourabh"); // resolve("value is here you can also access through argument");
        reject("cancelled"); // pass when your promise request got rejected
        // If promise got reject than you can also handled the code with the help of .catch function
      }, 3000);
    });
  }
  
  // You don't need to mentioned the function name in the arguments you can call directly with
  // anonymous function
  
  console.log("Start");
  let x = createPromise();
  console.log("Got a new promise");
  x.then(function f(value) {
    // that is registration of promise
    console.log("promise done", value);
  }).catch(function f() {
    console.log("Error Handled", value);
  });
  console.log("End");
  
  //--------------------------------------------------------------------------------------------------
  
  /*
  Promises are the most important concept in modern javascript . They allows us to handled the javascript 
  code and make it more efficient and responsive
  */
  
  function MathFormulation() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let num = Math.random();
        console.log(num);
        if (num > 0.5) {
          resolve("Task completed successfully");
        } else {
          reject("please check once");
        }
      }, 4000);
    });
  }
  
  let n = MathFormulation();
  n.then(function (value) {
    console.log("Result :", value);
  }).catch(function (value) {
    console.log("Rejected : " , value);
  }).finally(function(){
    console.log("Finally your code has been done thankyou!");
  });
  
  MathFormulation();
  
  
  //---------------------------------------------------------------------------------------------------
  
  // Promises lifeCycle =>
  
  // 1. Pending : once a promise is created then outcome of the asynchronous code in the pending 
  // state 
  
  // 2. Resolved : Resolved is the promise state when your promise has done successfully
  
  // 3. Rejected : Rejected is the promise state when your promise got rejected because of condition or error
  
  // 4. Settled : In promises setteled state referes to the final state of the promise. it had been 
  // fulfilled or rejected
  
  
  // Once you create promise then you have two condition that your asynchronous piece of code done
  // successfully or it got rejected . this particular state is handled through the parameter of 
  // the promises that are resolve , reject . This parameter takes values which is triggered once 
  // you done your complete execution . Outcomes of the code is pinpoint out through the values 
  // which we had been passes in the parameter and after that it extended with the 