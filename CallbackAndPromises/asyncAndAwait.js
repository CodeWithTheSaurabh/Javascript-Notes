// Async and Await -> Live with Sanket singh
function createPromise() {
    return new Promise(function consume(resolve, reject) {
      setTimeout(function () {
        console.log("Timer DOne !");
        resolve("Success");
        //reject("failed"); // you have to pass here parameter
      }, 3000);
    });
  }
  // Everything is return as a promise in the async function until you add await
  /* you can also create multi- promises */
  //await function throuugh out once before executing and check is there any global piece of code is available
  
  async function consume() {
    try {
      console.log("Inside Function");
      // const response1 = await createPromise();
      const response = await createPromise();
      console.log("Response is : ", response);
    } catch (err) {
      console.log(
        "Your response is rejected but don't worry we handled it : Status=>",
        err
      );
    }
  }
  consume();
  
  //------------------------------------------------------------------------------------------------------
  
  // fetch-api -> fetch api is used to download data
  //.then() returned promise in json so in the next line we handled it by next then()
  
  fetch("https://type.fit/api/quotes").then(function (response){
  return response.json();
  }).then(function (value){
   console.log(value);
  })
  
  //-------------------------------------------------------------------------------------------------
  
  function createNewPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Printing hello");
        resolve("Success");
      }, 3000);
    });
  }
  
  async function checkNotes() {
    const put = await createNewPromise();
    console.log("Status :", put);
  }
  
  checkNotes();
  
  //------------------------------------------------------------------------------------------------------
  
  async function printHelloAfterFourSecond() {
    let data = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("printing hello after four second")
        resolve("Congratulation")
      }, 4000);
    });
  
    let result = await data;
    console.log("Status :",result)
  }
  
  printHelloAfterFourSecond();
  
  //------------------------------------------------------------------------------------------------------------
  
  /*
  await => await keyword is used to wait for the function to complete the asynchronous task.
  async => async keyword is used to mark a function as a asychronous . A asynchronous function is 
  a function that is used to return the promise, which represent the eventual completion of the
  operation performed by the function.
   */