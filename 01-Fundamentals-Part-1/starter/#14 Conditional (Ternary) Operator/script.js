// #14 Conditional (Ternary) Operator

// The 'conditional operator' allows us to write an 'if/else' statement within a single line.

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water ");

// Conditional operator as an expression

const drink = age >= 18 ? "wine 🍷" : "water";
console.log(drink); // wine

// Comparing with regular 'if/else' statement

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water";
}
console.log(drink2);

// Since 'conditional operators' are expressions, we can add them inside template literals

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water"}`);
