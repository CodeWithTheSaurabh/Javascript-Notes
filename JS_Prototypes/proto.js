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

function person(name, age) {
  this.name = name;
  this.age = age;
  person.prototype.sayHello = function () {
    console.log(`hello , my name is  ${this.name}`);
  };
}

const alice = new person("alice", 30);
console.log(alice.__proto__ === person.prototype); // true

const bob = new person("bob", 35);
bob.sayHello(); // hello , my name is  bob

//   This means that the 'alice' object has access to all of the properties and method defined on the
//   'person.prototype' object

// Now when we call 'bob.sayHello()' javascript finds the sayHello() method directly on the 'bob' object
// and calls it . THe 'sayHello' method on the 'person.prototype' object is ignored

/**********************************************************************************************************************/

// Prototype inheritance :

/*
Prototype inheritance refer to the ability of an object to inherit properties and methods from its prototype, when an object is created
in javascript , it automatically inherits properties and methods from its prototype, If a property or method is not defined on the object
itself , Javascript will look for it on the object prototype and if it finds it there , it will use it.

Consider a person constructor is creates an object with a name property and a 'sayHello' method
*/

let Person = new person("john");
Person.sayHello(); // hello , my name is  john

// In this example the sayHello method is defined on the person prototype. When we create a new object using the new Person()
// constructor function the object inherits the sayHello method from its prototype.

/******************************************************************************************************************************** */
/*
// Prototype chaining =>

 * Prototype chaining refers to the way that JavaScript looks for properties and methods when they are not
defined on an object. When a property or method is called on an object, JavaScript first checks to see if the
property or method is defined on the object itself. If it is not defined on the object, JavaScript then looks for
it on the object's prototype. If the property or method is still not found, JavaScript continues to look up the
prototype chain until it either finds the property or method or reaches the end of the chain.


In JavaScript, the prototype chain is created automatically when an object is created. The prototype of an
object is set to the constructor function's prototype property. This means that any properties or methods
defined on the constructor function's prototype will be inherited by all instances of the object created with
that constructor function.
 */

// Prototype chaining =>
function Student(name, studentId) {
  this.name = name;
  this.studentId = studentId;
}

Student.prototype = new person();
Student.prototype.sayHello = function () {
  console.log(
    `Hello, my name is ${this.name} and my student ID is ${this.studentId}`
  );
};

let student = new Student("jane", "12345");
student.sayHello(); // Hello, my name is jane and my student ID is 12345

/**
 * In this example we set the Student prototype to be a new person object using the person constructor function.
 * This mean that the Student prototype inherits all the properties and methods from the person constructor
 * prototype,include the sayHello method.
 *
 * we also redefined the sayHello method on the Student prototype to include the studentId.
 *
 *
 * Now we can create a new object student using the Student constructor function and call the sayHello
 * method on it .
 */

let student1 = new Student("jane", "12322");
student1.sayHello(); // Hello, my name is jane and my student ID is 12322

/************************************************************************************** */
function Person3(name) {
  this.name = name;
}

Person3.prototype.sayHello = function () {
  console.log(`Hello my name is ${this.name}`);
};

let perosn4 = new Person3("sourabh");
perosn4.sayHello(); // Hello my name is sourabh

/****************************************************************************************** */
//conclusion =>

/*
prototypes allow you to define properties and methods that are shared by all instances of a
constructor function. When you call a method on an object, JavaScript first looks for the method on the
object itself. If it doesn't find the method, it looks for it on the object's prototype, and so on up the
prototype chain until it reaches the Object.prototype object, which is the final link in the chain.
*/