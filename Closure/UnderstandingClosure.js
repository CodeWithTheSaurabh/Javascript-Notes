function Outer() {
  let a = 10;

  function inner() {
    let b = 10;

    console.log(a + b);
  }
  inner();
}
Outer();

//-----------------------------------------------------------------------------------------------

// Taking another example =>

function parant() {
  let count = 0;
  function child() {
    count = count + 1;
    console.log(count);
  }
  return child;
}
const increament = parant();
increament(); //1
increament(); //2
increament(); //3
increament(); //4
increament(); //5
increament(); //6

//----------------------------------------------------------------------------------------------------

// Example -3
function secretPassword() {
  const password = "MjakThodiHai123";
  return {
    guessPassowrd: function (guess) {
      if (guess === password) {
        return true;
      } else {
        return false;
      }
    }
  }
}
const passwordGame = secretPassword();
var CheckGuessPassword = passwordGame.guessPassowrd("sourabh");
console.log(CheckGuessPassword);// false
var CheckGuessPassword = passwordGame.guessPassowrd("MjakThodiHai123");
console.log(CheckGuessPassword); // true

//-------------------------------------------------------------------------------------------




