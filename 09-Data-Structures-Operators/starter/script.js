'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// 3. ES6 enhanced object literals (Compute property names)
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1. ES6 enhanced object literals (can create new object and call it with that variable as a property)
  openingHours,

  // 2. ES6 enhanced object literals (don't need 'function' keyword)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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

// Values
const values = Object.values(openingHours);
console.log(values);

// Entries (Keys + Values)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

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
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// use case
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

// use case
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
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
////////////////////////////////////////////
// The Spread Operator (...)

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

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

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
// retrieving values from an object normally
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// storing retrieved values to a new array (destructuring process)
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// retrieving selected values of an array in an object
// leaving a 'blank' with a 'comma' skips the element that we do not need
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

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

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
