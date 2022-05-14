// Challenge

// Understanding
// - array transformed to string, separted by ...
// - What is the X days? (index + 1)
// - need to print elements in an array for each day
// - how to print each temp in order?
// - how to print each day in order?

// Divide
// - use a for loop to check for each element in an array
// - use a template literal to log the string to the console
// - use a counter to count each day that is printed on the string

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let counter = '';
  for (let i = 0; i < arr.length; i++) {
    counter += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + counter);
};
printForecast(temp1);
