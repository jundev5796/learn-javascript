'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1998);

const john = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
john.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = john.calcAge; // borrowed method from previous object
matilda.calcAge();

// const f = john.calcAge;
// f();
