// #4 Basic Operators

// An 'operator' allows us to transform or combine multiple values.
// Ex) mathematical, comparison, logical, assignment.

// A) Mathematical

const now = 2021; // place values in a variable for reusability
const ageJohn = now - 1985;
const ageSarah = now - 2002;
console.log(ageJohn, ageSarah);
console.log(ageJohn * 2, ageJohn / 2, 2 ** 3); // we can calculate multiple values in one console.log

// Using '+' operators, we can concatenate multiple strings.

const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName);

// B) Assignment

// The '=' sign is designated as an assignment operator.
// Along with assignment operators, we can also use mathematical operators at the same time.

let x = 10 + 5;
x += 10; // 'x += 10' is 'x = x + 10'
x *= 4; // 'x *= 4' is 'x = x * 4'
x++; // 'x++' is 'x = x + 1;
x--; // 'x--' is 'x = x - 1;
console.log(x);

// C) Comparison

// Comparison operators (>, <, >=, <=, =) are used to determine whether a value is 'true' or 'false' in a certain condition.

console.log(ageJohn > ageSarah);
console.log(ageSarah >= 18);

// Storing the values in a variable is best for reusability.

const isFullAge = ageSarah >= 18;

// It is possible to compare all values in one console.log.

console.log(now - 1985 > now - 2002);

// -OPERATOR PRECEDENCE-

// Operator precedence holds a set of rules on how operators are logically functioned on expressions. Operators with higher precedence takes priority over those with lower precedence.

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJohn + ageSarah) / 2;
console, log(averageAge);
