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

// -----SOLVING A PROBLEM USING ONLINE SOURCES(Google, StackOverflow, MDN etc.)-----

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude?
// Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; // Step 1) skips all values that are not a 'number'

    if (curTemp > max) {
      // Step 2
      max = curTemp;
    }
    if (curTemp < min) {
      // Step 3
      min = curTemp;
    }
  }
  console.log(max, min); // 17, -6
  return max - min; // Step 4
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); // 17 - (-6) = 23

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; // Step 1) skips all values that are not a 'number'

    if (curTemp > max) {
      // Step 2
      max = curTemp;
    }
    if (curTemp < min) {
      // Step 3
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); // 9 - 0 = 0

// -----DEBUGGING-----

// 1) IDENTIFY
// When trying to fix a bug, we need to first become aware that there is a bug in the program. At this stage we need to identify the point in which the bug occurred. Did it occur during development? During testing our software? During production?

// 2) FIND
// After pinpointing where the bug occurred, we need to isolate where exactly the bug is happening in the code. For JavaScript, we use the developer console to find simple bugs and the debugger tool for more complex bugs.

// 3) FIX
// Once we know where the bug is located, we need to fix the code where the bug occurred. We take a logical approach and replace the error code with the corrent solution.

// 4) PREVENT
// Finally, when the code is fixed, we need to make sure the same error does not occur again. Once the problem is solved, we run a diagnosis within the entire codebase and search for any similar code in case there is a similar bug. This can be done easier by using testing softwares.

// -----DEBUGGING WITH THE CONSOLE AND BREAKPOINTS-----

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')), // the 'prompt' function always returns a 'string'
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
