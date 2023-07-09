// first javascript program
console.log("Hello World")



//Data types in Javascript
/*String , Number , Boolean , Undefined , Null , Object , Symbol , BigInt */

String : "I am Happy to Join PW FSWD Course " // STRING

Number : 10; // Integer 
Number : 10.5; // Floating value
Number: Number.POSITIVE_INFINITY ;
Number: Number.NEGATIVE_INFINITY;
Number :NaN;

BigInt:1024n;

Boolean: true, false;

Undefined: undefined;

Null : null;

Symbol : Symbol('PW SKILLS LAB');

//Objects

Array:[1,2,"PW"];

Object: {name: "sourabh" ; course: "FSWD"}


// 2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.

let arr1 = ["headphone" , "earphone" , "mike" , "tennis ball" , "CPU" , "keyboard", "mouse", "server"]

console.log(arr1);


/* 3. Create an object of a student registry of 5 students whose key is the registration number and the value is
the student name. Registration number starts from 1 and continues.*/


let arr2 = {
    1:"sourabh",
    2:"gaurav",
    3:"chintu",
    4:"shubham",
    5:"golu"
}

console.log(arr2);

//Variables and typeof

/*1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored.
*/

//String

let var3 = "I AM HAPPY TO JOIN PW FSDW COURSE";
console.log(typeof var3); //Output -> string


/*NOTE "typeof" is that keyword which is used to find out the type of data */


//Number

//1. integer 

let var4 = 15;
console.log(typeof var4);

//2. Floating value
let var5 = 15.2;
console.log(typeof var5);

//3.Infinity -: nagative value
let var6 = Number.NEGATIVE_INFINITY;
console.log(typeof var6)

//4. Infinity -: positive value
let var7 = Number.POSITIVE_INFINITY;
console.log(typeof var7);

//5. Not a Number
let var8 = NaN;
console.log(typeof NaN);

//Boolean
let var9 = true;
console.log(typeof var9);

// Undefined
let var10 = undefined;
console.log(typeof var10);

//Null
let var11 = null;
console.log(typeof var11);

//Symbol
let var12 = Symbol("Pw Skills");
console.log(typeof var12);

//Objects:-

//1. Array
let var13 = [12,15.2, true, undefined , null, Symbol];
console.log(typeof var13)

//2. Objects
let var14 = {
name :"sourabh",
course:"PW_SKILLS",
class:"FSDW"
}

console.log(typeof var14);  

/* 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and
error messages. */

//Valid Variable ->
let name = "PW SKILLS";
console.log(name); // output will be -> PW SKILLS 

let iAmHappy = true; 
 console.log(iAmHappy); // output will be - True

 // Invalid variable
 /*

 let 1name = "pw skills";  // output will be -> Invalid or unexpected token 
 console.log(1name); 

 let var = 13;
 console.log(var); // Output will be -> syntax error

*/

//OPERATORS :

//1. Write a program that prints the multiplication table in the textbook format of any number specified.

let number = 6;
console.log(`${number} * 1 = ${number*1}`);
console.log(`${number} * 2 = ${number*2}`);
console.log(`${number} * 3 = ${number*3}`);
console.log(`${number} * 4 = ${number*4}`);
console.log(`${number} * 5 = ${number*5}`);
console.log(`${number} * 6 = ${number*6}`);
console.log(`${number} * 7 = ${number*7}`);
console.log(`${number} * 8 = ${number*8}`);
console.log(`${number} * 9 = ${number*9}`);
console.log(`${number} * 10 = ${number*10}`);
/*2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of
javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console. */


let int1= 13;
let int2 =6;


//Addition (+) -> add two values together
console.log(`The addition of int1 and int2 is ${int1 + int2}`);

//substraction (-)
console.log(`The substraction of int1 and int2 is ${int1-int2}`);

//Multiplication (*)
console.log(`The multiplication of int1 and int2 is ${int1*int2}`);

//Division(/)
console.log(`The division of int1 by int2 is ${int1/int2}`);

//modulo (%) - its function used to find out the remainder of the following term
console.log(`The modulo of int1 and int2 is ${int1%int2}`);

//Exponential (**) 
console.log(`The exponential of int1 and int2 is ${int1**int2}`);


// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

let length = 15;
let bredth = 19;

let perimeterOfRectangle = 2*(length+ bredth);

console.log(`The perimeter of the given rectangle of its length ${length} and breadth is ${bredth} = 
${perimeterOfRectangle}`);

/*3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false
condition for each operator must be specified.*/

// Equal
let var15 = 12;
let var16 = 12;

console.log(var15==var16); //true

let var17 = 15;
let var18 = 16;

console.log(var17==var18);  //false

// Not equal
let var19 = 14;
let var20 = 15;

console.log(var19!=var20); // true

let var21 = 15;
let var22 = 15;

console.log(var21 != var20); //false

//strictly equal

let var23 = 15;
let var24 = 15;

console.log(var23===var24); //true

let var25 = 15;
let var26 = "15";

console.log(var25===var26); // false

//strictly not equal
let var27 = 15;
let var28 = 14;

console.log(var27!==var28); //true

let var29 = 15;
let var30 = 15;

console.log(var29!==var30); // false

// Greater than

let var_a = 15;
let var_b = 16;

console.log(var_b > var_a); //true

let var_c = 15;
let var_d = 19;

console.log(var_c > var_d) // false

// greater than or equal to

let var_e = 20;
let var_f = 15;

console.log(var_e >= var_f) //true

let var_g = 12;
let var_h = 13;

console.log(var_g >= var_h); // false




//What are Conditions, If, If-else, if-else-if


/*
1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop.
*/

let trafficLight = "orange";
if(trafficLight=="red"){
    console.log("Vehicle must stop :");
}else if(trafficLight=="orange"){
    console.log("vehicle must wait , The signal is changing to red to green");
}else if(trafficLight=="green"){
    console.log("vehicle may proceed with caution");
}else{
    console.log("invalid traffic light");
}

//output => vehicle must wait , The signal is changing to red to green.


/* 2. Write a program to print the largest of 2 numbers. */

let number1 = 14;
let number2 = 18;

if(number1 > number2){
    console.log("Number1 is greater than Number2");
}else{
    console.log("Number1 is less than Number2");
}

//output : Number1 is less than Number2.


/* 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
the numbers divisible by 3 or 5. */

let numDiv = 45;

if
(numDiv % 3 == 0 && numDiv % 5 == 0)
{
console.log("FizzBuzz");
} 
else if( numDiv%5==0)
{
    console.log("Buzz");
} 
else if
(numDiv % 3 == 0)
{
    console.log("Fizz");
}
else
{
console.log("Invalid Number");
}


//output => FizzBuzz

//Switch case ->

/* 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
days until the weekend. */

let day = "tuesday";

switch(day){
    case "monday": console.log("There are five days are more remainds in the weekand ");
    break;

    case"tuesday": console.log("There are four days are more remains in the weekand");
    break;

    case"wednesday" : console.log("there are three days are more remains in the weekand");
    break;

    case"thursday" : console.log("there are two days are more remains in the weekand");
    break;

    case"friday" : console.log("there are one days are more remains in the weekand");
    break;

    case"saturday" : console.log("there are zero days are more remains in the weekand");
    break;

    case"sunday" : console.log("Today is holiday");
break;

default: console.log("invalid key");

}

//output :There are four days are more remains in the weekand


/* 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
year. */

let numMonth = 7;

switch(numMonth){
    case 1 : console.log("its january bro ");
    break;

    case 2 : console.log("its feburary bro ");
    break;

    case 3 : console.log("its march bro ");
    break;

    case 4 : console.log("its april bro ");
    break;

    case 5 : console.log("its may bro ");
    break;

    case 6 : console.log("its june bro ");
    break;

    case 7 : console.log("its july bro ");
    break;

    case 8 : console.log("its august bro ");
    break;

    case 9 : console.log("its september bro ");
    break;

    case 10 : console.log("its october bro ");
    break;

    case 11 : console.log("its november bro ");
    break;

    case 12 : console.log("its december bro ");
    break;

    default : console.log("Invalid key");
}

// output => july


//Ternary condition ->

/*  1. Write a program that takes in a number and outputs whether it is positive, negative, or zero. */

let numter = 0;
numter == 0 ? console.log("The number is zero") : 
numter > 0 ? console.log("The number is greater than zero"):
console.log("the number is less than zero");
//output => The number is zero


/* 2. Create a program that takes in two numbers and prints the larger one. */

let num45 = 45;
let num46 = 48;

num45 == num46 ? console.log(`Both nummber that is ${num45} and ${num46} are equal`) :
num45 < num46 ? console.log(`${num46} is greater than ${num45}`):
console.log(`${num45} is greater than ${num46}`);
 //output => 48 is greater than 45


// LOOPS =>

/* 1. Write a program that generates the multiplication table in the textbook format for a given number. */

let table = 12;

for(let i = 1 ; i <=10 ; i++){
    result = table*i;
    console.log(`${table} * ${i} = ${result}`);
}

/* 
output =>
12 * 1 = 12
12 * 2 = 24
12 * 3 = 36
12 * 4 = 48
12 * 5 = 60
12 * 6 = 72
12 * 7 = 84
12 * 8 = 96
12 * 9 = 108
12 * 10 = 120
*/


/* 2. Write a program that prints all the positive even numbers till the number specified. */
 let evenNum = 14;

 for(let i = 1 ; i <= evenNum ; i++){
    if( i % 2 == 0 ){
        console.log(i);
    }
 }

 /* output =>

2
4
6
8
10
12
14

 */


//Here is all the basics of javascript
