// Challenge #6

// -TASKS-
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// -TEST DATA-
// 125, 555, and 44

let tip;

const calcTip = function (bill) {
  tip = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);
