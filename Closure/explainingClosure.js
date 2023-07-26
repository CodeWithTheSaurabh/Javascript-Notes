// Explaining what is closure
// lexical environment
// why lexical environment is important for closure
// Summary

//---------------------------------------------------------------------------------------------------\

// Lexical environment
/*
Every time javascript engine creates an execution context to execute the function or global code, It
also create new lexical environment to store the variable defined in that function during the execution 
of that function.

A lexical environment is a data structure that holds an identifier-variable mapping. (Here identifier refers
    to the name of variable / function and the variable is the reference to the actual object[including function
    type object] or primitive values)


    Lexical Environment has two component
*/

function OuterFunction(){
    const outerVarible = "I am in outer function";

    function InnerFunction(){
        console.log(outerVarible); // I am in outer function

    }
    InnerFunction();
}
OuterFunction();

//------------------------------------------------------------------------------------------------

/*
In JavaScript, closures are created whenever a function is declared inside another function, and they are
used extensively in modern web development. Understanding closures and how they interact with lexical
environment and scope is essential for writing efficient and effective code.
*/