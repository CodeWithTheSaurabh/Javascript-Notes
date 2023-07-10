//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Spread

const oneArray = [1,2,3,4]
const secondArray = [6,7,8,9]
// const threeArray = oneArray.concat(secondArray)
// const threeArray = [oneArray, secondArray]

const threeArray = [...oneArray , ...secondArray] // Here element are spreading 
console.log(threeArray);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Rest 

function manyArguments() {
    console.log(typeof arguments);
let args = Array.from(arguments)    
let finalArr = args.map((el)=>el);
console.log(finalArr)
}

manyArguments(12,24,45,48,45)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const name1 = ["Sourabh" , "Sharma"]
const name_2 = ["Hello" , "dear" , "my" , "name" , "is" , ...name1 ]

const siteName = "PWSKILLS"
console.log([...siteName]);


 function pwSkills(...values) {

    return values ;
    
 }
 console.log(pwSkills("superman", "flash"));