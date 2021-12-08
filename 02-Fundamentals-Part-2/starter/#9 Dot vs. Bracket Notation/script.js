"use strict"; // for avoiding bugs

// #9 Dot vs. Bracket Notation

const john = {
  firstName: "John",
  lastName: "Smith",
  age: 2037 - 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(john);

// Dot Notation
console.log(john.lastName); // Smith

// Bracket Notation
// For 'bracket notation', we can use expressions to retrieve values from an object.
console.log(john["lastName"]); // Smith

const nameKey = "Name";
console.log(john["first" + nameKey]); // John
console.log(john["last" + nameKey]); // Smith

// Applying 'Bracket Notation' to retrieve elements from objects
const interestedIn = prompt(
  "What do you want to know about John? Choose between firstName, lastName, age, job, and friends"
);

if (john[interestedIn]) {
  console.log(john[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Adding elements to objects
john.location = "United States";
john["twitter"] = "@johnsmith";
console.log(john);

// -CHALLENGE-
// 'John has 3 friends and his best friend is called Michael'
console.log(
  `${john.firstName} has ${john.friends.length} friends and his best friend is called ${john.friends[0]}`
);
