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
