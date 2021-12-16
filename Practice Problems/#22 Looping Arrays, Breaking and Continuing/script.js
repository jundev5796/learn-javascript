// #22 Looping Arrays, Breaking and Continuing

// 1. Let's bring back the 'populations' array from a previous assignment.
// 2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier.
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is.

const populations = [52, 330, 67, 17];
const percentages2 = [];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

for (let i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / 7900) * 100);
}

console.log(percentages2);
