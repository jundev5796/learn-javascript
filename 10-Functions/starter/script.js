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
// - javascript only passes by value NOT reference

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
