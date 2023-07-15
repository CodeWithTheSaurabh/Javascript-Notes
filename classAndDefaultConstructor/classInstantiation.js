// List of concepts ->
// 1. What is class
// 2. Examples
// 3. class Instantiation
// 4. Example

/************************************************************************************/
// What is class ?
/* Classes as a blueprint for creating a objects , providing a way to organize and structure code. They
 * allow you to define with similar properties and methods in a reusable manner, reducing the
 * amount of code you need to write and making your code easier to maintain .
 *
 * Here are some of reason why you might want to use classes in Javascript
 *
 * Object-Oriented Programming : Classes provide a way to do object - Oriented  programming in
 * javascript, which is a popular programming paradigm for organizing code into and class
 *
 * Reusability - Classes provide a way to create multiple objects with similar properties and method,
 * reducing the amount of code you need to write
 *
 * Abstraction - Classes provide a way to abstract away the implementation details of objects,
 * making it easier to manage and maintain large codebases.
 *
 * Encapsulation - Classes provide a way to organize code into distinct , reusable units , making it easier to
 * manage  state and behavior in a structured way.
 *
 * Modularity - Classes provide a way to organize code into distinct, reusable units ,making it easier to manage
 * and maintain large codebases.
 *
 * oveall classes in javascript are useful tools for organizing and structuring code, making it easier to write , understand , and maintain.
 *
 * In javascript , classes were introduced to ECMAScript 6 . A class is defined using the class keyword,
 * followed by the class name , and a block of code that defined the properties and methods of the class.
 *
 * Here is an example  of a class defination in Javascript
 *
 */

/*********************************************************************************** */
//Example->1

class Animal {
  makeSound() {
    // method
    console.log("Animal Sound");
  }
}

const myAnimal = new Animal();
myAnimal.makeSound(); // Output -> Animal sound

/*********************************************************************************** */
//Example -> 2
class car {
  honk() {
    console.log("beep beep !");
  }
}
const myCar = new car();
myCar.honk();

// In this example car class is defined . It has a single method honk that logs a message to the console.
// An object of the car class is created using the new operator and assigned to the myCar variable and its
// method can be accessed using dot notation

/************************************************************************************* */ // Output => beep beep !

// Example -> Let us try adding some data in the same car class

class Car {
  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setYear(year) {
    this.year = year;
  }

  horn() {
    console.log("beep-beep-beep-beep!!!");
  }
}

const newCar = new Car();
newCar.setMake("Toyota");
newCar.setModel("Camry");
newCar.setYear(2020);
console.log(newCar.make); // Toyota
console.log(newCar.model); //Camry
console.log(newCar.year); // 2020
newCar.horn(); // beep-beep-beep-beep!!!

// This example have three method setMake , setModel and setYear
// for setting - make , model and year properties
// method horn() is for honking the horn
// object of the Car() class created using the new operator and assigned to the newCar
// and this all method is accessed my using dot notation

/************************************************************************************ */

// Class Instantiation

/*
Class instantiation in javascript refer to creating an object from a class is a kind of
primitive data type that shows the behaviour and the characteristics of a class. This is done using the 'new'
keyword operator , which creates an instance of the class and returns the object
*/

class Person {
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  introduce() {
    console.log(`Hi , my name is ${this.name} and I am ${this.age} year old`);
  }
}

const myPerson = new Person();
myPerson.setName("Sourabh Sharma");
myPerson.setAge(21);
myPerson.introduce(); // Output : Hi , my name is Sourabh Sharma and I am 21 year old

// Note-> this calling should be in order like how we arrange in the class
// In this example the person class has two method setName and setAge
// for setting name and age properties
// and a method introduce()  for introducing the person
// Object of the person class created using the new keyword and assigned to myPerson

/*********************************************************************************** */

// A class may also be intantiated as expression . Let us look at the example below to know more :

const MyClass = class {
  constructor(expression) {
    this.result = expression;
  }
};
const myInstance = new MyClass(10 + 2);
console.log(myInstance.result); // Output : 12

// class expression is assigned to the constant myClass
// the expression 10+2 is then evaluated and used as the argument in the new keyword
//effectively instantiating an instance of the myClass class
// the value of the expression is stored as a property on the instance  - myInstance
// which can be accessed using the result property.

/******************************************************************************************** */


