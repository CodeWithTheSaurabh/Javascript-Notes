// Class methods and properties with initial value

// 1. Class method
// 2. Static method
// 3. properties with initial values

/************************************************************************************** */

// Class method =>

/*
 * In javascript , class methods are functions that belongs to a class and can be called on instances of that
 * class . They are defined within a class using the "method" syntax
 *
 * Method are defined onthe prototype of each class instance and are shared by all instances. We will
 * learn about prototypes in detail as we proceed with the lectures.
 *
 * we always add a constructor() method before adding any number  of methods
 */

// Syntax :

// class ClassName{
//     constructor(){  }
//      method1()   {  }
//      method2()   {  }

//      method(){}
//

/********************************************************************************** */

// Example - 1

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ! , My name is ${this.name} .`);
  }
}

const person = new Person("Sourabh Sharma");
person.sayHello();

// Output => Hello ! , My name is Sourabh Sharma .

// Class method can access properties of the class instances though the 'this' keyword, and
// and can also access other methods defined on the class using 'this'

/*************************************************************************************************** */

// Static method =>

/**
 * Static class methods are defined on the class itself. They can be called without creating an instance
 * of the class and typically used to implement utility functions that operator on class - level data,
 * you cannot call a static method on an object but only on an object class.
 * Static methods are often utility functions , such as functions to create or clone objects.
 */

class MyClass {
  static myStaticMethod() {
    console.log("this is a static method");
  }
}
MyClass.myStaticMethod();

// Output => this is a static method
// Static method are declared using the static keyword and are called using he class name followed by the method name.

/***************************************************************************************************** */

// Properties with initial values 
/* For some properties , we might have initial values hen we build a class .
 * Some properties may have an initial value when we build a class for them, for instance , if you are learning 
 * a programming languavge , Your level would be of a beginner which also means level 0 . This means that we might starts off with one skill 
 * increase our level in it and pick up more after some time.
 */

// Example ->

class PersonNew{
constructor(fName,lName,age,city){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.city = city;
    this.level = 0
    this.skills = []
}

    getFullName(){
        const fullName = this.fName + ' ' + this.lName ;
        return fullName;
    }
}

const person1 = new PersonNew("Sourabh" , "Sharma" , 21 , "indore");
const person2 = new PersonNew("Rohan" , "Sharma" , 28 , "jaipur");
console.log(person1.getFullName()); // Sourabh Sharma
console.log(person2.getFullName()); //Rohan Sharma
console.log(person1.level); // 0
console.log(person2.level);// 0
console.log(person1.skills); // []
console.log(person2.skills); // []



//Person class ->
// The person class is defined with a constructor function that takes four paramenter
//fName,lName,age and city . The constructor function sets properties of the new object created by 
//the class instance to the values of these parameter . Additionally ,two properties are also set with default 
// values of 0 and an empty array respectively. The getFullName() method is also defined on the person class ,
// which concatenates the fName and lName properties to return the full name of the person


//Creating instances of the person class : -> 
//Two instances of the person class are created using the new keyword
// with different values for the fName, lName, age and city parameter


// Accessing properties of the instances : -> 
// The console.log() statements output the value of the level and skills properties and person2
// instances respectively . As the level property has a default value of 0 and skills is an empty
// array , both console.log() statements output 0 and [] respectively

//************************************************************************************* */
