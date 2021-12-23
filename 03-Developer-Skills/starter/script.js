// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// -----USING PRETTIER AND OTHER USEFUL TOOLS-----

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

// -----SUCCESSFULLY LEARNING HOW TO CODE-----

// Have a Clear Goal

// 1. Set a specific, measurable, realistic and time-based goal.
// 2. Know exactly why you are learning to code.
// 3. Imagine a big project you want to be able to build.
// 4. Research technologies you need and then learn them: JavaScript, React, etc.

// Actually try to Code

// 1. Understand the code that you're studying and typing.
// 2. Always type the code, don't just copy-paste.

// Reinforce your Learning

// 1. After you learn a new feature or concept, apply it immediately.
// 2. Take notes: hand-written, blog.
// 3. Challenge yourself and practice with small coding exercises and challenges.
// 4. Do not hurry in trying to learn something quick. Everyone has their own learning pace.

// Keep Practicing

// 1. Practicing on your own is the MOST important thing do do. Without practice, you will not get anywhere!
// 2. Come up with your own project ideas or copy popular sites or applications, or just parts of them in the beginning.
// 3. Do not become used to getting help from others all the time.

// Do not become Frustrated

// 1. Don't get stuck trying to write the perfect code. Just make sure the code works. Clean and efficient code will come with time.
// 2. No one is perfect and practice will help you become better.
// 3. If you have time, try refactoring your code.

// Don't Give Up!

// 1. Embrace the fact that you will never know everything.
// 2. Just focus on what you need to achieve your goal.
// 3. Even the best developers today continue to learn and make mistakes.

// Work with Others!

// 1. Work together with others and reinforce your knowledge.
// 2. Try explaining your knowledge to others.
// 3. You could even try to build a group project with others.

// Source: Jonas Schmedtmann

// -----THINKING LIKE A DEVELOPER-----

// 4 steps to solve any problem:

// Ex) Task: "We need a function that reverses whatever we pass into it"

// 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

// Q) What does "whatever" mean in this context? What should be reversed?
// -> Only strings, numbers, and arrays make sense to reverse.
// Q) What to do if something else is passed in?
// Q) What should be returned? Should it alwas be a string, or should the type be the same as passed in?
// Q) How to recognize whether the argument is a number, a string, or an array?
// Q) How to reverse a number, a string, and an array?

// 2. Divide and conquer: Break a big problem into smaller sub-problems.

// Sub-problems:
// -> Check if argument is a number, a string, or an array.
// -> Implement reversing a number.
// -> Implement reversing a string.
// -> Implement reversing an array.
// -> Return reversed value.

// 3. Don't be afraid to do as much research as you have to.

// 4. For bigger problems, write 'pseudo-code' before writing the actual code.
// -> A 'pseudo-code' is an informal way of describing an algorithm that does not require any syntax (can be written on actual paper).
