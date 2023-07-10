const powerTwo =(n)=>{

 return n**2;
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n;

}

console.log(powerCube(powerTwo,3)); // 27


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const sayhello =()=>{
    return ()=>{
        console.log("Hello Saurabh !");
    }
}

let guessValue = sayhello()
console.log(guessValue); //Anonymous function
guessValue(); // Hello Saurabh !


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const higherOrder = (m) =>{
    const oneFun =(n)=>{
        const twoFun = (o) =>{
            return m + n + o ;
        }
       return twoFun
    }
   return oneFun
}
console.log(higherOrder(5)(4)(7)); // 16

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const mySum = [12,45,78,97];

const sumArray = (arr) =>{
    let total = 0;
    arr.forEach(element => {
        total += element
    });
    return total;
}

console.log(sumArray(mySum));  // output => 232


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function sayGreeting(){
    console.log("Hello Bhai kya haal chal or suna !" , Math.random());
}

// setInterval(sayGreeting , 1000); // continue call function after one second
setTimeout(sayGreeting , 1000); //  function will close after one second  


