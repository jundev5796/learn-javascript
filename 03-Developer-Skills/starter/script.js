// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// using the 'Prettier' tool automatically structures our code to look more consistent.
// we can adjust the formatting rules of 'Prettier' by creating a separate configuration file and configuring preferrable settings.
const x = 23;
if (x === 23) console.log(23);

// getting rid of brackets around a function variable.
const calcAge = birthYear => 2037 - birthYear;

// configuring 'snippets' to avoid writing repetitive commands.
// Ex) changing the shortcut command of 'console.log()' to 'cl'.
console.log();

// testing the 'live server' tool.
// automatically computes and updates result on the chrome developer tool.
console.log(calcAge(1995));
