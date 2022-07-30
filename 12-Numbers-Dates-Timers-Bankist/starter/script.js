"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting API
// const now2 = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };
// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(now2);

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now2 = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };
    const locale = navigator.language;
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now2);

    // const day = `${now2.getDate()}`.padStart(2, 0);
    // const month = `${now2.getMonth() + 1}`.padStart(2, 0);
    // const year = now2.getFullYear();
    // const hour = `${now2.getHours()}`.padStart(2, 0);
    // const min = `${now2.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 1. Converting and Checking Numbers

console.log(
  "-------------------------------Converting and Checking Numbers-------------------------------"
);

// - all numbers are internally represented as floating point numbers (decimals)
// - numbers are formatted in binary forms (0's and 1's)
// - sometimes javascript computes weird numerical results for different mathematical operations (but this is normal)

console.log(23 === 23.0);
console.log(0.1 + 0.2);

// converting strings to numbers
console.log(Number("23"));
console.log(+"23"); // cleaner method

// parsing
console.log(Number.parseInt("30px", 10)); // finding a number within a string
console.log(Number.parseInt("e23", 10)); // needs to start with a number

console.log(Number.parseFloat("2.5rem")); // reads decimal numbers

// checking for values that are NaN (use only when checking for NaN)
console.log(Number.isNaN(20)); // checking for numbers
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// checking for numbers (recommended way)
console.log(Number.isFinite(20)); // better way
console.log(Number.isFinite("20"));
console.log(Number.isFinite("20X"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// --

// 2. Math and Rounding

console.log(
  "-------------------------------Math and Rounding-------------------------------"
);

// square root, cubic root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// maximum value
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

// minimum value
console.log(Math.min(5, 18, 23, 11, 2));

// constants
console.log(Math.PI * Number.parseFloat("10px") ** 2); // area of a circle

// random
console.log(Math.trunc(Math.random() * 6));

// example #1 (number stays between min and max)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // 0...1 -> 0...(max - min) -> min...(max - min + min)
console.log(randomInt(10, 20));

// rounding integers
console.log(Math.trunc(23.3)); // get rids of decmial points and values

console.log(Math.round(23.3)); // rounds to the nearest integer
console.log(Math.round(23.9));

console.log(Math.ceil(23.3)); // rounds up integers
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3)); // rounds down integers
console.log(Math.floor(23.9));

// rounding decimals
console.log((2.7).toFixed(0)); // returns a string
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// --

// 3. The Remainder Operator

console.log(
  "-------------------------------The Remainder Operator-------------------------------"
);

// - returns the remainder of a division

console.log(5 % 2); // remainder
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

// odd / even
console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

// example #1
const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// example #2
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});

// --

// 4. Numeric Separators

console.log(
  "-------------------------------Numeric Separators-------------------------------"
);

// - to make reading numbers easier

const diameter = 287_460_000_000; // 287,460,000,000
console.log(diameter);

// example #1
const priceCents = 345_99;
console.log(priceCents);

// example #2
const transferFee = 15_00;
const transferFee2 = 1_500;

// example #3 (restrictions)
const PI = 3.14_15; // cannot place underscores at the beginning, end, and between a decimal (also cannot have 2 underscores together)
console.log(PI);

// example #4 (cannot place underscore on strings)
console.log(Number("230_000"));
console.log(parseInt("230_000"));

// --

// 5. Working with Bigint

console.log(
  "-------------------------------Working with Bigint-------------------------------"
);

// - numbers are represented internally as 64-bits
// - out of the 64-bits, only 53 are used for representing numbers
// - with bigint, we can use big numbers without limit

console.log(2 ** 53 - 1); // '-1' because numbers start at 0
console.log(Number.MAX_SAFE_INTEGER);

// applying bigint
console.log(3904280925201938590251075123578n); // displays big numbers accurately
console.log(BigInt(490185908230984102938410395105098n));

// operations
console.log(10000n + 10000n);
console.log(23094832015815985902819058120359n - 10000000n);
console.log(23094832015815985902819058120359n * 10000000n);

// when working with regular numbers
const huge = 20230984092384039232890248n;
const num = 23;
console.log(huge * BigInt(num));

// exceptions
console.log(20n > 15);
console.log(20n === 20); // this does not work due to type coercion
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + " is REALLY big!!!"); // string concatenation

// division
console.log(10n / 3n);
console.log(10 / 3);

// --

// 6. Creating Dates

console.log(
  "-------------------------------Creating Dates-------------------------------"
);

// create a date
const now = new Date();
console.log(now);

console.log(new Date("Jul 24 2022 12:43:16"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // the 'month' is 0-based
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // adding 3 days

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142224580000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// --

// 7. Operations With Dates

console.log(
  "-------------------------------Operations With Dates-------------------------------"
);

// - doing calculations with dates (ex. days passed)

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(+future2);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(
  new Date(2037, 3, 14),
  new Date(2037, 3, 24, 10, 8)
);
console.log(days1);

// --

// 8. Internalizing Numbers (Intl)

console.log(
  "-------------------------------Operations With Dates-------------------------------"
);

const num2 = 3884763.23;

const options = {
  style: "unit",
  unit: "mile-per-hour",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num2));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num2)
);

// --

// 9. Timers: setTimeout and setInterval

console.log(
  "-------------------------------Timers: setTimeout and setInterval-------------------------------"
);

// - setting a time for a callback function to execute

// setTimeout
const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // 3s = 3000ms
console.log("Waiting..."); // asynchronous javascript (code executes simultaneously)

// clearing setTimeout before execution
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
