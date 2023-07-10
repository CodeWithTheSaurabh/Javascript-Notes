// Method of objects

//  Object methods===> Acftion on object are carried out using object method . A object property is used to action on 
// declaration

// Types of object method 

/*
Object.keys()
Object.values()
Object.entries()
Object.assign()
Object.freeze()
Object.seal()
*/

let detail = {
    name : `sourabh`,
    Course : `Full stack development`,
    Batch : `FSWD`,
    Price : 3500,
}


// Object.keys()

let keys = Object.keys(detail);
console.log(keys);   // Output ==> [ 'name', 'Course', 'Batch', 'Price' ]

//Object.values();

let values = Object.values(detail);
console.log(values ); // Output ==> [ 'sourabh', 'Full stack development', 'FSWD', 3500 ]

/*Object.entries()=>This method is used to return an array of enumerable property [key, value] pairs of the object passed
as the parameter.*/

let entries = Object.entries(detail)[0];
console.log(entries); //Output==>[0] => [ 'name', 'sourabh' ] 
    //Output==>[1]=>[`Course` , `Full stack development`]


// Object.assign()

let assign_Ob = Object.assign({},detail);
console.log(assign_Ob);

/*
Output=>
{
  name: 'sourabh',
  Course: 'Full stack development',
  Batch: 'FSWD',
  Price: 3500

  }

  //Syntax
  let ob_1 = {
a:2 , b:3
  }

  let ob_2 = {
b:4: x : 8
  }

  let assign = Object.assign({target}, {source}) // where target and source are objects
  console.log(assign)

  //output : {a:2,b:4,x:8}

*/


// Object.freeze(); =>Changing a frozen object is impossible. It prevents the addition and deletion of properties.
// Additionally, it prevents changes to property values from occurring unless an object is involved.

let freeze = Object.freeze(detail);
console.log(freeze)
console.log(Object.isFrozen(detail));// True

/*
Output =>
{
  name: 'sourabh',
  Course: 'Full stack development',
  Batch: 'FSWD',
  Price: 3500
}
true

*/


// Object.seal(); => It is a method identical to Object.freeze(). You cannot add or remove an object's properties, 
// but you can edit the value of an existing property.

let seal = Object.seal(detail);
console.log(seal);
console.log(Object.isSealed(detail)) // true


/*
//Output =>
{
  name: 'sourabh',
  Course: 'Full stack development',
  Batch: 'FSWD',
  Price: 3500
}
true
*/










