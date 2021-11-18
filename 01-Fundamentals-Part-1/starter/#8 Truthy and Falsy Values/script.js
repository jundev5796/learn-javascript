// #8 Truthy and Falsy Values

// Falsy values are values that are not yet false, but will be false when converted to a boolean.
// 5 falsy values: 0, '', undefined, null, NaN.
// Everything else will be a truthy value.

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("John")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

// Ex 1)
// Checking truthy and falsy values with logical conditions.
// If value is 0, the result will be a falsy value.
// On the other hand, if the value has a number more than 0, the result will be a truthy value.

const money = 100;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

// Ex 2)
// An undefined variable will result as a falsy value.

let height;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
