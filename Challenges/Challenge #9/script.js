// Challenge #9

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."

// -TASKS-
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// -TEST DATA-
// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0,4]

// 1) Understanding the problem
// - Array transformed to string, separate by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
    // const degrees = `... ${arr[0]}°C in 1 days ... ${arr[1]}°C in 2 days ... ${arr[2]}°C in 3 days ...`;
    // return degrees;
  }
  console.log("... " + str);
};
printForecast(data1);
