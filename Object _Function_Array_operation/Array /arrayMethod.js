// Array Methods 

let method = [ 12 , 15 , 24 , "sourabh" , "Hello_world" , true , false , undefined];

// pop () => pop is used to remove last element from the array

let last = method.pop();

console.log(last);  // return => undefined

console.log(method); // return => [ 12, 15, 24, 'sourabh', 'Hello_world', true, false ]


//push => push is used to add last element in the array 

let lastAdd = method.push(`ye_add_kiya_hai_push_se`);

console.log(method);
/*  return => 
 12,
  15,
  24,
  'sourabh',
  'Hello_world',
  true,
  false,
  'ye_add_kiya_hai_push_se'
*/

console.log(`This is the length of the array ${method.length}`) // return : 8


//Shift() => shift is used to remove the first element of the array 

let firstRemove = method.shift();

console.log(` ${method}`); // isse 12 hat gya hai array se 


/*
Output :
 15,24,sourabh,Hello_world,true,false,ye_add_kiya_hai_push_se

*/


// Unshift() => This method is generally used to add one or more elements to the begining of any array and return the new length 

let newAdd = method.unshift(`hiii`); //you can also use multiple data type here 
console.log(method);
/*
output

[
  'hiii',
  15,
  24,
  'sourabh',
  'Hello_world',
  true,
  false,
  'ye_add_kiya_hai_push_se'
]
*/


//Concat => The concat method is used to concate(add) two or more 

let con1 = [777, "sourabh" , "Pajama" , undefined , ]
let con2 = [`sharma_ji_ka_launda` , true , false]

   //Alternate => console.log(con1.concat(con2)); 
   // you can also add more than 2 array 
   let add_concat = con1.concat(con2);
   console.log(add_concat);

/*
output =>
[
  777,
  'sourabh',
  'Pajama',
  undefined,
  'sharma_ji_ka_launda',
  true,
  false
]
*/

// you can also add more thann three array or unlimited
let con3 = ["me" , "sakht" , "launda" , "hu"];
let add_concat_1 = con1.concat(con2,con3);
console.log(add_concat_1);
 
/*
Output =
[
  777,
  'sourabh',
  'Pajama',
  undefined,
  'sharma_ji_ka_launda',
  true,
  false,
  'me',
  'sakht',
  'launda',
  'hu'
]

*/

// join() => This Method is used to join all element of an array into a String the element are separated by speacial separator


let join_1 = [1,2,3,4,5,6,7,8,9,10];
let join_Now = join_1.join('-')
console.log(join_Now);

/*
Output:
1-2-3-4-5-6-7-8-9-10
*/


// slice() => The slice() method is used to extract the portion of array and return the new array

let slice_1 = ['mera' , 'name' , 'sourabh' , 'sharma' , 'hai'];
let extract_slice_1 = slice_1.slice(2, 3);
console.log(slice_1); // output : [ 'mera', 'name', 'sourabh', 'sharma', 'hai' ]
console.log(extract_slice_1); // output: [ 'sourabh' ]


//Splice(start , deleteCount , item1 , item2) => 
/*
Start : The index which to start changing the array if start is nagative it is treated as array.length + start

deleteCount : The number of elements to remove. If deleteCount is 0, no elements are removed. If
deleteCount is greater than the number of elements that exist after start, all elements from start to the
end of the array will be removed]

item1 and item2 : : The elements to add to the array, starting at start. If no elements are added, this
parameter can be omitted.

*/

let splice_1 = [1,2,3,4,5];
let removed =  splice_1.splice(2,2,6,7)
console.log(splice_1);// output => [ 1, 2, 6, 7, 5 ]

console.log(removed) // output => [ 3, 4 ]


/* reverse() => The array.reverse() is method used to reverse the order of the element
 in an array in place jThe method modifies the original array and does not create a new array*/

 let reverse_1 = [1,2,3,4,5,6,7,8,9,10];
 let final_reverse = reverse_1.reverse();
 console.log(final_reverse);
  /* output => 
[
  10, 9, 8, 7, 6,
   5, 4, 3, 2, 1
]
*/
 
// indexOf() =>
/* this method is used to search the arrau of an element and 
return its index the method returns the first index of which the given element can be found in the array */

let index = ['sourabh' , "namastey" , 1277 , `clear` , ];
let search_index = index.indexOf("clear")
console.log(search_index); // output => 3

