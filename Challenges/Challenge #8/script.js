// Challenge #8

// -TASKS-
// 1. Create an array 'bills' containing all 10 test bill values.
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals').
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// -TEST DATA-
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

const bills = [22, 295, 176, 440, 37, 105, 19, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  tip = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);
