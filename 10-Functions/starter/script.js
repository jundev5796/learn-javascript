"use strict";

// 1. Default Parameters

console.log(
  "--------------------------Default Parameters--------------------------"
);

// - setting default values in case the initial is false

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES6 method
  // ES5 method (old way)
  // numPassengers = numPassengers || 1;
  // price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000); // skipping a value

// --

// 2. How Passing Arguments Works: Value vs. Reference

console.log(
  "--------------------------How Passing Arguments Works: Value vs. Reference--------------------------"
);

// - primitive types gets copied while not affecting the original
// - reference types gets copied (from the heap) which can affect the original
// - javascript only passes by value NOT reference (the reference value is still considered a 'value' by javascript)

const flight = "LH234";
const john = {
  name: "John Smith",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, john);
console.log(flight);
console.log(john);

// EXAMPLE
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(john);
checkIn(flight, john);

// --

// 3. First-Class and Higher-Order Functions

console.log(
  "--------------------------First-Class and Higher-Order Functions--------------------------"
);

// first-class functions
// - javascript treats functions as 'first-class citizens'
// - this means that functions are 'simply values'
// - functions are just another 'type' of object (since objects are values, functionas are also values)

// higher-order functions
// - a function that 'receives' another function as an argument, that 'returns' a new function, or 'both'
// - this is only possible because of first-class functions
// - the function that gets passed is known as a 'callback function'

// --

// 4. Functions Accepting Callback Functions

console.log(
  "--------------------------Functions Accepting Callback Functions--------------------------"
);

// - callback makes it easy to split up code into their unique aspects
// - callback creates abstraction which means it hides all the complicated details

// EXAMPLE
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);

// EXAMPLE(2)
// JS uses callbacks all the time
const high5 = function () {
  console.log("✋");
};
document.body.addEventListener("click", high5);

// EXAMPLE(3) (no need to know 'forEach' method for now)
["John", "Matt", "Adam"].forEach(high5);

// --

// 5. Functions Returning Functions

console.log(
  "--------------------------Functions Returning Functions--------------------------"
);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("John");
greeterHey("Steven");

greet("Hello")("John");

// using arrow functions
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hello")("John");

// --

// 6. The call and apply Methods

console.log(
  "--------------------------The call and apply Methods--------------------------"
);

// - manually manipulating the 'this' keyword

// 'this' keyword application
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "John");
lufthansa.book(635, "Matt");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // it is important to understand how the function is called when using a 'this' keyword

// book(23, "Sarah Williams"); // this will not work because the 'this' keyword will point to 'undefined'

// call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// apply method (not used with modern JS)
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // modern JS method

// --

// 7. The bind Method

console.log(
  "--------------------------The bind Method--------------------------"
);

// - 'bind' does not immediately call a function
// - instead, it returns a new function where the 'this' keyword is bound (set to values passed to bind)

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

// partial application
const bookEW23 = book.bind(eurowings, 23); // arguments pre-defined
bookEW23("John Smith");
bookEW23("Martha Cooper");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// the 'this' keyword is set dynamically
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); // bind sets the 'this' keyword

// partial application (continued)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

// challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// --

// Challenge #1

console.log("--------------------------Challenge #1--------------------------");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// bonus
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// --

// 8. Immediately Invoked Function Expressions (IIFE)

console.log(
  "--------------------------Immediately Invoked Function Expressions (IIFE)--------------------------"
);

// - function that disappears right after being caled once
// - however, this does not mean we cannot run the function again
// - purpose: to avoid scope-related restrictions
// - not used much in ES6

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE (express and call a function at the same time)
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();

// easier method
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);

// --

// 9. Closures

console.log("--------------------------Closures--------------------------");

// - NOTE: closure is not an explicit feature, it happens automatically in certain situations
// - a closure makes a function remember all the variables that existed at the function's birth place (this is a peculiar phenomenon)
// - a function has access to the variable environment (VE) of the execution context in which it was created
// - closure: VE attached to the function, exactly as it was at the time and place the function was created

// situational closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// looking into closure property
console.dir(booker);

// --

// More Closure Examples

console.log(
  "--------------------------More Closure Examples--------------------------"
);

// example #1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // the 'f' function closed over the 'g' function

// re-assigning 'f' function (reborn on a different function)
h();
f();
console.dir(f);

// example #2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// --

// Challenge #2

console.log("--------------------------Challenge #2--------------------------");

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
