// #9 Equality Operators

// Other than comparison operators, there are also equality operators for checking whether the value is exactly equal or not.
// The equality operators will return a boolean result.

const age = 18;

// This is called a 'strict equality operator'(===) because there is no type coercion.

if (age === 18) console.log("You just became an adult :D (strict)"); // we can write if/else statements within one line by omitting the curly brackets.

// There is a 'loose equality operator' (==) but it is not recommended for actual use due to unnecessary bugs.

if (age == 18) console.log("You just became an adult :D (loose)");

// Using 'else if'

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 23 == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Using 'Not Equal' (!==)

if (favorite !== 23) console.log("Why not 23?");
