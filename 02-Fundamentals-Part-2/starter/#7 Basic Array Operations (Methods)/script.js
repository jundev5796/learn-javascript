"use strict"; // for avoiding bugs

// #7 Basic Array Operations (Methods)

// There are various array methods that are typically used for arrays.

// push (add an element at the 'end' of an array)
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay"); // the push function is attached to the friends array
console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]

// unshift (add an element at the 'start' of an array)
friends.unshift("John");
console.log(friends); // ["John", "Michael", "Steven", "Peter", "Jay"]

// pop (removes an element at the 'end' of an array)
friends.pop();
console.log(friends); // ["John", "Michael", "Steven", "Peter"]

// shift (removes an element at the 'start' of an array)
friends.shift();
console.log(friends); // ["Michael", "Steven", "Peter"]

// indexOf (locating the index of an element in an array)
console.log(friends.indexOf("Steven")); // 1

// includes (an ES6 method that is similar to 'indexOf' but returns a boolean value)
console.log(friends.includes("Steven")); // true

// Ex) Using includes for if/else statements
if (friends.includes("Peter")) {
  console.log("You have a friend called Steven");
}
