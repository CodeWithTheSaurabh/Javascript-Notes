//Function with Unlimited Number of parameter ------> 

// function declaration 

function sumOFAll(){
    let sm = 0;
    for(let i = 0; i<arguments.length ; i++)
    sm = sm + arguments[i];
    return sm ; 
    }
  
    //Function call 
    let rs = sumOFAll(12,15,14,15,15,15);
    console.log(`sum of all parameters is ${rs}`);
  
  //Output =>  sum of all parameters is 86
  
  