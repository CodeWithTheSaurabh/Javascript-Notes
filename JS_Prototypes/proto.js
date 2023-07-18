// Prototypes works ==>


//List of content
// prototype object
// __proto__
// Example
// Prototype inheritance
// Prototype Channing

/**
 * In javascript everything is an object, including functions. When you create a function in javascript , it
 * automatically gets a prototype object . This prototype object is just an ordinary Javascript object that contain
 * properties and methods that will be shared by all instances of the function.
 */


// Prototypes object

/**
 * When you create an instance of a function using the 'new' keyword. Javascript sets the new object's internal 
 * `[[prototype]]` property to be a reference to the prototype object of the function . This prototype object is often 
 * referred to as the constructor's prototype.
 */

// _proto_

// When you create a new object of the function using new keyword JS Engine creates an object and set a property 
// named  __proto__ which points to its functions prototype object 

/*********************************************************************************************************************** */

// Example - :
// for example consider the following constructor function

function person(name,age){
    this.name = name;
    this.age = age;
}

const alice = new person("alice",30);
console.log(alice.__proto__=== person.prototype);  
console.log(alice); // true 

/**********************************************************************************************************************/









