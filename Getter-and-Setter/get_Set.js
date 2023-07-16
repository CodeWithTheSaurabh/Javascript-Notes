//List of content ->

/* 

Getter
Example
Setter
Example  

*/

/************************************************************************************* */

// Getter :->
/**
 * In javascript a getter is a special type of function that is used to get the value of an object property.
 * It allows you to define a method to be executed when a specified property is accessed.
 *
 * To define a getter you can use the get keyword followed by the property name, and then add a function that
 * returns the desired value . Here is an example.
 */

// Example -:

const Person = {
  firstName: "sourabh",
  lastName: "sharma",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Person.fullName); // sourabh sharma

// In this example the fullname property is defined as a getter . when person.fullName is accessed, the
// getter function is executed and the result is returned.

//getter can be useful for calculating or formatting a property value on the fly, without needing to store it
// as a separate property . They can also be used to provide read-only access to an object peroperty since
// you cannnot directly set the value of property that only has a getter.

//It is important to note that getters should not have any side effect, since they may be called multiple
// times and should not modify the object they are defined on.

/************************************************************************************ */
//Setter -:

/*
 * In javascript , a setter is a special type of function that us used to set the value of an object property . It allows
 * you to define a method to be executed when a specified property is assigned a new value
 *
 * to define a setter , you can use the set keyword followed by the property name and then add a function that takes a single parameter
 * representing the new value . Here is an example
 *
 */

const person = {
  firstName: "anuj",
  lastName: "kumar",

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Rohan sharma";
console.log(person.firstName);
console.log(person.lastName);

// In this example, the fullname property is defined as a setter . When person.fullName is assigned a new
// value , the setter function is executed with the new value as its parameter and it update the firstName and lastName
// properties accordingly

//setter can be useful for enforcing constraints or validadating input before setting a property value . They can
// also be used to provide write only access to an object property , since youcannot directly read the value
//of a property that only has a setter

//its important to note that setter should not have any effects beyound setting the value of the corresponding
// property. they should not return any values or perform any other operations beyond updating the object state.
