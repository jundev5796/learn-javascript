'use strict';

// variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'John';
let job = 'programmer';
const year = 1998;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example
var x = 1;
let y = 2;
const z = 3;
