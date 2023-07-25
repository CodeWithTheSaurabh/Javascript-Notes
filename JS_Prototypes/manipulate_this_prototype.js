// What is the keyword in JS
// Manipulating the keyword using prototype
// key points
// conclusion
/******************************************************************************************** */

// What is the 'this' keyword in JS?

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greeting = function(){
console.log(`Hello, my name is ${this.name} and I am ${this.age} year old`);

}

const john = new Person("john",21)
john.greeting(); // Hello, my name is john and I am 21 year old

// const sourabh = new Person("sourabh" , 22)
// sourabh.greeting(); // Hello, my name is sourabh and I am 22 year old


Person.prototype.changeName = function(newName){
    this.name = newName;
}

john.changeName("jonny");
john.greeting() // Hello, my name is jonny and I am 21 year old

/************************************************************************************************/

function Car(make,model) {
    this.make = make;
    this.model = model;
}

// add a property to the model
Car.prototype.year = 2022;
Car.prototype.model = "Fortuner"

// create a new car object 
const MyCar = new Car("Toyoto" ,"Camry");

// Access the instance object property
console.log(MyCar.model);// Camry
/*
note :

JavaScript will take the value of the "model" property from the closest object since the "model"
property exists in both the object instance and its prototype object.

*/

// Access the year property on MyCar object
console.log(MyCar.year); // 2022

//Access the property which was not defined by the coder
console.log(MyCar.horsePower); // undefined

/*
Overall, prototypes allow for inheritance in JavaScript, which means that an object can inherit properties and
methods from its prototype. The `this` keyword is manipulated in the context of prototype inheritance and
refers to the appropriate object that the method is being called on, whether it is the object itself or an object
in the prototype chain.

*/