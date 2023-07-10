// Here are the basics fundamental of javascript contains - Array , types of different Function , Objects 

 /*
 Array : An array is an Javascript is a data structure that stores different types of values , It can hold the 
 value of different data types like - String, Number , Boolean, Undefined , Object and even other array.
 */

 let player = ["rohit sharma" , "Virat kholi" , "Suryakumar Yadav","KL rahul" ,"Ravindra Jadeja", 
 "Rishabh Pant", "Shivam"]; // example of string array

 let number = [1,2,3,4,5,6,4,7,8,9,41,15]; // example of a number array

 let array = ["sourabh" , 177 , true , false , undefined ]; // combined array 

 let number_1 = new Array(12,15,17,18,25);  /* You can also create an array using the Array constructor. You can
 pass in the length of the array or a list of elements: */

 let emptyArray = new Array(5)  // Creates an array with 5 empty elements.

 let color = Array("Pink" , "Red" , "Blue" , "Green" , "Brown"); // using an array literal:

 //Array indexing and storing
  

 let game = [];
 game[0] ="sourabh";
 game[1]= 155;
 game[2] = undefined;
 game[3] = "sharma";
 game[4] = "ludo" ;
 game[5] = "rubics cube"
 console.log(game);

// Accessing elements in an array

let players = ["Virat", "Rohit", "Suryakumar" , "sourabh" , "hello_world"];
 players[4]; //Return => hello_world
 players[0]; // Return => Virat
 player[1]; // Return => Rohit
 players[2]; // Return => Suryakumar
 players[3]; // Return => sourabh
players[9]; // Return => undefined
players[-2]; //  Return => undefined 
 console.log( players[1]); // Output => Rohit


/* In some other programming languages like Java, C, and C++ if you try to access a negative index, you will
get an error which is ArrayIndexOutOfBoundException or Invalid OutOfRange */
 