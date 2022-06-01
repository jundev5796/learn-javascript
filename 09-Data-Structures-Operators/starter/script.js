'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// 2. Destructuring Objects

// - order does not matter
// - useful for API calls (ex. movies, weather)

// calling and destructuring an entire object from a function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// giving new variable names during destructuring of obejcts
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // need to include paranthesis for mutating variables in objects
console.log(a, b);

// nested objects
const {
  fri: { open, close }, // include the exact variable names within nested objects
} = openingHours;
console.log(open, close);

// --

// 1. Destructuring Arrays

// - Breaking down arrays and storing them into separate variables

// declaring all variables at the same time
const arr = [2, 3, 4];

const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z); // 2, 3, 4
console.log(arr); // [2, 3, 4] (original array not affected)

// taking out values from an array in an object
let [main, , secondary] = restaurant.categories; // leave a blank to skip a value
console.log(main, secondary); // Italian Vegetarian

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring nested arrays
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values for destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// // 3. ES6 enhanced object literals (compute property names)
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // 1. ES6 enhanced object literals (can create new object and call it with that variable as a property)
//   openingHours,

//   // 2. ES6 enhanced object literals (don't need 'function' keyword)
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// ////////////////////////////////////////////
// // --Working with Strings (Part 3)--

// // the 'split' method
// console.log('a+vvery+nice+string'.split('+')); // a very nice string
// console.log('John Smith'.split(' ')); // John Smith

// // the 'join' method
// const [firstName, lastName] = 'John Smith'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// // capitalize name easier
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('john smith');

// // padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('John'.padStart(23, '+').padEnd(30, '+'));

// // [EXAMPLE]
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(38473928));
// console.log(maskCreditCard(433784633904089328048));
// console.log(maskCreditCard(149057043898578915714));

// // repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// // [EXAMPLE]
// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'1'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

/*
////////////////////////////////////////////
// --Working with Strings (Part 2)--

const airline = 'TAP Air Portugal';

// changing string format to either 'lower-case' or 'upper-case'
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// fix capitalization in name
const passenger = 'jOhN'; // John
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = 'hellow@john.io';
const loginEmail = '  Hello@john.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// deleting whitespaces
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // chaining method
console.log(priceUS); // 288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate')); // method 1
console.log(announcement.replace(/door/g, 'gate')); // method 2

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// [EXAMPLE]
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('tazer')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a tazer for protection');
*/

/*
////////////////////////////////////////////
// --Working with Strings (Part 1)--

const airline = 'TAP Air Portugal';
const plane = 'A320';

// retrieving elements from strings directly
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

// retrieving the length of string elements
console.log(airline.length); // 16
console.log('B737'.length); // 4

// locating the index of string elements
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')); // -1

// the 'slice' method (does not get mutated)
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air (last index is omitted)

// retrieving elements without directly using the values
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// counting from the last index
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

// [EXAMPLE]
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat :(');
  } else {
    console.log('You got lucky :)');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// NOTE: when we work with strings, javascript converts strings to objects behind the scenes (which is why strings are able to use methods)
*/

////////////////////////////////////////////
// --Data Structures Overview--

// Where does data come from?
// 1. From the program itself
// 2. From the UI
// 3. From external sources (web API)

// Where is data stored?
// - Within data structures
// 1. Arraays or Sets (simple list)
// 2. Objects or Maps (key/value pairs)
// - Data within web API's are stored as JSON

/*
////////////////////////////////////////////
// --Maps: Iteration--

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try Again!'],
]);
console.log(question);

// converting object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iteration on maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your Answer'));
console.log(answer);

// display boolean values
console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
/*

/*
////////////////////////////////////////////
// --Maps: Fundamentals--

// maps are data structures stored as key-value pairs (just like objects)
// unlike objects, keys in maps can be any type

const rest = new Map();
rest.set('name', 'Classico Italiano'); // key-value
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // updates and returns values

// chaining multiple key-values
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// reading data from map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// checking if a map contains a certain key
console.log(rest.has('categories'));

// deleting elements on maps
rest.delete(2);
console.log(rest);

// checking number of elements on maps
console.log(rest.size);

// using arrays or objects as map keys
const arr = [1, 2];
rest.set(arr, 'Test');

// applying maps on DOM
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr));
*/

/*
////////////////////////////////////////////
// --Sets (collection of unique values without duplicates)--

// There is no need to retrieve values out of a set

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // {'Pasta', 'Pizza', 'Risotto'}

// set with strings
console.log(new Set('John')); // {'J', 'o', 'h', 'n'}

// checking number of unique values in a set
console.log(ordersSet.size);

// checking if a certain element is in a set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// adding a new element to a set
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// deleting existing elements in a set
ordersSet.delete('Risotto');
console.log(ordersSet);

// looping over sets
for (const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('John').size);
*/

/*
////////////////////////////////////////////
// --Looping Objects: Object Keys, Values, and Entries--

// Object Keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Object Values
const values = Object.values(openingHours);
console.log(values);

// Entries (Keys + Values)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////
// --Optional Chaining (?.) (ES2020)--

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// applying optional chaining
// if the following property exists, the next property will be executed (otherwise is 'undefined')
console.log(restaurant.openingHours.mon?.open);

// multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'John', email: 'hello@john.io' }];

console.log(users[0]?.name ?? 'User array empty');
*/

////////////////////////////////////////////
// --Enhanced Object Literals--

/*
////////////////////////////////////////////
// --The for-of Loop (ES6)--

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// an easier and faster way of looping over arrays
for (const item of menu) console.log(item);

// obtaining the current index using a 'for of' loop
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
////////////////////////////////////////////
// --Logical Assignment Operators (ES2021)--

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovnni Rossi',
};

// 'OR' assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// 'AND' assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////////////
// --The Nullish Coalescing Operator (??)--

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// nullish: null and undefined (NOT 0 or '') (ES2020)
// makes it so as if '0' or '' are truthy values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
////////////////////////////////////////////
// --Short Circuiting (&& and II)--

// use ANY data type, return ANY data type, short-circuiting

// OR (||)
console.log('---- OR ----');

// if the 1st value is a 'truthy' value, it will return that value immediately
console.log(3 || 'John'); // 3
console.log('' || 'John'); // 'John'
console.log(true || 0); // true
console.log(undefined || null); // null (because if there is no short circuiting, it returns the last value)

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// use-case
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND (&&)
console.log('---- AND ----');

// if the 1st value is a 'falsy' value, it will short-circuits and returns that value
// if all the values are 'truthy' values, it will keep going and return the last truthy value
console.log(0 && 'John');
console.log(7 && 'John');

console.log('Hello' && 23 && null && 'John');

// use-case
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
////////////////////////////////////////////
// --Rest Pattern and Parameters--

// 1) Destructuring

// SPREAD, because on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log([pizza, risotto, otherFood]);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

// packing multiple numbers into a single array
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // spread first, pack second

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
////////////////////////////////////////////
// --The Spread Operator (...)--

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// spread operator (unpacking arrays)
// spread operator does not create new variables
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // 1, 2, 7, 8, 9

// example
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// either taking in arguments of a function or creating a new array
const str = 'John';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// using a spread operator on a function
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// objects (ES2018 way of adding new properties in an existing object)
// using this method creates a new object while not changing the original object
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// creating a copy of an existing object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
////////////////////////////////////////////
// --destructuring objects--

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// giving new variable names for properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
////////////////////////////////////////////
// --Destructuring Arrays--

// - Breaking down arrays and storing them into separate variables

// retrieving values from an object normally
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// storing retrieved values to a new array (destructuring process)
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
console.log(arr); // [2, 3, 4]

// retrieving selected values of an array in an object
// leaving a 'blank' with a 'comma' skips the element that we do not need
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// reassigning variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// destructuring for nested arrays
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values (in case there is no set value)
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
