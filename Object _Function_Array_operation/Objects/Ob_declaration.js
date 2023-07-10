//What was the need of object

/*

We can already see from the differences that objects are far more superior to variables. Variables limit us
to handling only one value at a time whereas objects enable us to have multiple values of multiple data
types to be stored under one name. This allows us to escape many variables for our applications and
organize the code for better data handling.
Objects are a boon for developers to develop applications we see in the current web world. Objects give
us the liberty to see and implement the scenarios in real-world form.


Objects => 

An object is an entity with a certain state and behaviour, examples includes a car, pen
bicycle, chair , glass , keyboard 

*/


// Ways to create an object =>
/*
1.By object literal
2.By creating an instance of object directly using new keywords 
3.By using object constructor
*/


//By Object literal :

Object = {UserName : `Sourabh` , ID :9777, Email : `sourabhsharma@gmail.com` , }
console.log(Object);

console.log(Object.UserName); // sourabh



emp={id:101,name:"Alex",salary:10000}
console.log(emp.id+" "+emp.name+" "+emp.salary);


//2. Using new keyword => 

/*
let fetched = new Object();
fetched.name = `sourabh`;
fetched.class = 12;
fetched.suranme = `sharma`;

console.log(fetched);


// output = > {name : sourabh , class : 12 , surname : sharma  }

*/

// 3. By using an object constructor ----->

function demo(Name, Roll_number , email) {
  //Each argument value can be assigned in the current object by using this keyword.
  this.Name = Name;
  this.Roll_number = Roll_number;
  this.email = email;
}
 
const e = new demo(`sourabh`, 78787 , `sourabhsharma@gmail.com`)

console.log(e.id +" "+ e.Roll_number+ " "+ e.email); // we can also used dot notation and breaket notation to access the value
// output : undefined 78787 sourabhsharma@gmail.com

console.log(e);


/* ouput => 
demo {
  Name: 'sourabh',
  Roll_number: 78787,
  email: 'sourabhsharma@gmail.com'
}
 */

// Manipulating values in object---> 

// Format for the square bracket notation: objectName['propertyName'].

let grab = {
  name : `sourabh`,
  class : `Graduate`,
  college : `Vikram university ujjain `,
  percentage : 80.55,
  category : `General`
}
console.log(grab.name) //Output=>  sourabh  -> manipualting using dot notation
console.log(grab[`class`]); // Output=> graduate -> manipulating using breaket notation 
  

// Adding data in Object => 

grab.type = `intern`; // Insertion of data using dot notaion
grab[`salory`] = 90000;

console.log(grab);

// output 
/*
{
  name: 'sourabh',
  class: 'Graduate',
  college: 'Vikram university ujjain ',
  percentage: 80.55,
  category: 'General',
  type: 'intern',
  salory: 90000
}

*/

// Changing data ==>

grab.name = "chintu"; // changing data using dot notation
grab[`class`]= `master degree`; // changing data using breaket notation

console.log(grab);

/*
//Output => 
{
  name: 'chintu',
  class: 'master degree',
  college: 'Vikram university ujjain ',
  percentage: 80.55,
  category: 'General',
  type: 'intern',
  salory: 90000
}

*/

//Deleting Data ===> data is an object can be deleted by only one method . It is done by using the keyword `delete` , data 
// is not be lost if we defined null or undefined The key is kept but value is altered

     grab.name = undefined;
      console.log(grab); 


    /*
    Output =>
    {
  name: undefined,
  class: 'master degree',
  college: 'Vikram university ujjain ',
  percentage: 80.55,
  category: 'General',
  type: 'intern',
  salory: 90000
}
    */

 delete grab.name;  // This keyword is used to delete the object entity from the making object

 console.log(grab);

/*
Output =>

{
  class: 'master degree',
  college: 'Vikram university ujjain ',
  percentage: 80.55,
  category: 'General',
  type: 'intern',
  salory: 90000
}

*/


