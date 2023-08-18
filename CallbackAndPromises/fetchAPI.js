// Fetch API
// 1. Introduction to networks and API's
// 2. Introduction to fetch Api
// 3. Feature of fetch()
// 4. How to use fetch()
// 5. Implementation

// Network request and Api's are fundamental to modern web development . In simple terms network
// request is a process of sending a request to server from the site of the client and retrive
// and response . This process is often used for retrive data from the server such as html pages,
// images or other resources or send data to the server , such as form submission or user input.

// Api(Application Programming Interface) are interfaces that defines how software component
// interact to each other. In web development api is set of rules and protocol that enabled
// a client to interact with server and retrive and manipulate data. The data can be in various
// format like JSON or XML and is often used to create dynamic web application

// The fetch api is a part of standard web effort to modernize and simplified web development
// by providing a more flexible and powerful way to send network request to the server in JS
// before the fetch api , developers primarly used the XMLHTTPSREQUEST(XHR) API  to make network
// reuqest . However XHR have some limitation which was replaced by fetch api

// Feature of fetch api -:
// 1. Used promise based api that makes easier to work with asychronous task or easy syntax
// 2. better support for newly updatted features
// 3. improved error handling
// 4. request and response object = this request object defined that network request is being
// send to the server and response object defined that response is returned by the object.

// How to use fetch api
// syntax :

//   fetch("enter url")
// . then((response){ return reponse.json();})
//  .then(function(value){ console.log(value)})

// fetch method return a promise that resolve to a response object when the request is completed
// the response object represent the http response returned by the server and provide access to
// the response header , status and body.


async function getQuotess(){
    const response = await fetch("https://type.fit/api/quotes");
    const value = await response.json();
    console.log(value);
  }
 
  getQuotess()
 
 
 // How to error handling in async and await -:
 
 async function getQuotes() {
   try {
     const response = await fetch("https://type.fit/api/quotes"); // network request
     const value = await response.json(); // through this method we change our api to json method
     console.log(value); // saved the data 
   } catch (error) {
     console.log("There is error in your uper code but we handled this");
   } finally {
     console.log("Finally code completed");
   }
 }
 getQuotes();
 
 
 // or you can also use this way -: 
 
 fetch("https://jsonplaceholder.typicode.com/posts")
 .then((response)=>{
     return response.json()
 }).then((value) => {
     console.log(value);
 })
 
 // This is the another syntax that you can also used this while network reuqest using api
 
 