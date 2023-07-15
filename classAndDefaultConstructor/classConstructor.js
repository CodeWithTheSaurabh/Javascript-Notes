// Class Constructor , Default values with constructor

// 1. What is a Class constructor
// 2. Examples
// 3. Default values with constructor
// 4. Examples

/****************************************************************************************/

// What is a Class  constructor
/*
 * for the purpose of creating and intializing obkects created within a class, there is a particular method
 * called a constructor
 *
 * thr constructor() is immedietely invoked when a class is created and it must preciously be named
 * 'constructor' otherwise , javascript will add an empty constructor method
 *
 * there can only be one constructor() method per class.
 *
 * it was introduced as a ECMAScript (ES6) feature.
 *
 * A constructor enables you to provide any custom intialization that must be done an other
 * methods can be called on an instantiated object
 *
 * Syntax :
 *
 * constructor(arg, arg1,//...,argN  ){
 *   // Your code is here
 * }
 *
 * Argument here are optional
 *
 * if you don't provide your own constructor then default constructor will be supplies for you.
 *
 *
 */

/*************************************************************************************** */

class Person {
  //  constructor
  constructor(name) {
    this.name = name;
  }

  //methods
  introduce() {
    console.log(`Hello, My name is ${this.name} `);
  }
}

const myName = new Person("Sourabh Sharma");
myName.introduce();

// Output -> Hello, My name is Sourabh Sharma

/*********************************************************************************** */

// Example -> 2

class person {
  constructor(name, lastName, age, city) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
  }

  introduction() {
    console.log(
      `Hello , My name is ${this.name} ${this.lastName} and I am ${this.age} year old . I live in ${this.city} city`
    );
  }
}

const newPerson2 = new person("sourabh", "sharma", 21, "indore");
newPerson2.introduction();

// Output => Hello , My name is sourabh sharma and I am 21 year old . I live in shamgarh city

/************************************************************************************* */

// Default values with class constructor

class person_2 {
  constructor(fName = "auuj", lName = "kumar", age = 25, city = "delhi") {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.city = city;
  }
}

const person2Detail = new person_2();
const person3Detail = new person_2("sourabh", "sharma", 21, "shamgarh");
console.log(person2Detail);
console.log(person3Detail);

/* Output =>
person_2 { 
    fName: 'auuj',
     lName: 'kumar',
      age: 25, 
      city: 'delhi'
     }

person_2 {
  fName: 'sourabh',
  lName: 'sharma',
  age: 21,
  city: 'indore'
}
*/

// Here is the constructor function accepts four parameter ,each with default values
// fName , lName , age , city . These parameter is used to set the corresponding properties
// on the newly created person object this keyword.

// Two instances of the person class created using the new keyword and assigned to
// person2Detail , person3Detail variable respectively . the first instance person2Detail
// does not pass any arguments to the constructor function the default values are used .

// The second instance person3Detail passes four arguments to the constructor function to specify
// non default values

// finally console.log() method is used to print the values of the person2Detail and
// person3Detail objects to the console , which displays their properties and their respective values

/********************************************************************************************************** */
