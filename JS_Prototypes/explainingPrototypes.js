// What is prototypes
// How to add methods and properties to the prototype object
// How to use prototype in javascript
// Key takeway

////////////////////////////////////////////////////////////////////////////////////////////

// What is prototypes

/*
A prototype is an object that contains properties and methods that are shared among all instances
of a particular object . Every javascript object has a prototype property.
*/


// How to add methods and properties to the prototype object

/*
Let's first see the constructor function . A constructor function is a simple javascript function used to create
object using the 'new' keyword. so the instead of calling the function directly . we have to invoke it with the
'new' keyword


// Here is what happend when we invoke a function with new keyword:
1. A new object is Created
2. 'this' keyword inside the function refer to the newly created object.
3. The new object is linked to a prototype object
4. The function body is executed , which can modify the newly created object by adding properties or method
to it
5. The newly created object automatically returned from the function. unless the function returned an object 
explicitly
*/


function Person_1(name,age) {
    this.name = name;
    this.age = age ;

}
const john = new Person_1("john_lavra" , 25);

//*********************************************************************************************************** */

// Let's create a new constructor function and add property and method to the prototype

function Person(name){
    this.name = name;
}

// adding a method to the person prototype
Person.prototype.sayHello = function () {
   console.log(`Hello My name is ${this.name}. and my age is ${this.age}`);
    }

    // adding a property to the person prototype -:
    Person.prototype.age = " ";

    let person2 = new Person("john" ,18);
person2.sayHello(); // Hello My name is john.
console.log(person2.age); // 18

/*
When a new instance of 'Person' is created using "new" keyword and assigned to the person2 variable. it will have access to both
the sayHello method and the age property object of the Person function.
*/


// we can also add method and properties to an existing object's prototype, including the built-inarray and string 
// object.Here is an example of adding a method to the array to the string prototype.

String.prototype.strLength = function(){
    return this.length;

}

Array.prototype.arrLength = function(){
    return this.length;
}
console.log("sourabh".strLength()); // 7
console.log([1,2,3,4,5,6,7,8,9].arrLength()) // 9

/****************************************************************************************************************************** */

// When to use prototype in javascript
/* Here are some common usecase of prototypes in javascript */

//Adding properties and methods -:
/*
you can use prototype to add methods and properties to the existing objects. This is often done by modifying the prototype of object 
*/

//Creating reusable Object -:
/*
Prototype are great way to create object that can be reused by throught your code. By defining common properties and mehod on a prototype
object, you can easily create new instances of the object without having to repeat the same code over and over again.
*/

// Inheritances -:
/*
Inheritance: Prototypes are used to implement inheritance in JavaScript. When you define a new object,
you can set its prototype to another object, and the new object will inherit all the properties and methods
of the prototype
*/

// performance optimization -:
/*
Prototypes can be used to optimize the performance of JavaScript code. For
example, by using prototypes, you can avoid creating multiple copies of the same function or object*
*/

// Key takeaway-:

/*
A prototype is an object which associates with every functions and objects. Additionally, it is invisible,
but all the properties inside the prototype are accessible)
 When a programmer needs to add new properties like variables and methods at a later point in time,
and these properties need sharing across all the instances, then the prototype will be very handy)
 The prototype can add both variables and methods to an existing object dynamically.
*/

/************************************************************************************************************************************************* */