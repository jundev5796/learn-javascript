// Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// -TASKS-
// 1. Calculate the average score for each team, using the test data below.
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score.
// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉.
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// -TEST DATA-
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(dolphinAverage, koalaAverage);

if (dolphinAverage > koalaAverage) {
  console.log("Dolphins Win!");
} else if (koalaAverage > dolphinAverage) {
  console.log("Koalas Win!");
} else if (dolphinAverage === koalaAverage) {
  console.log("It is a tie!");
}

// BONUS 1

const dolphinAverageBonus1 = (97 + 112 + 101) / 3;
const koalaAverageBonus1 = (109 + 95 + 123) / 3;
console.log(dolphinAverageBonus1, koalaAverageBonus1);

if (dolphinAverageBonus1 > koalaAverageBonus1 && dolphinAverageBonus1 >= 100) {
  console.log("Dolphins Win!");
} else if (
  koalaAverageBonus1 > dolphinAverageBonus1 &&
  koalaAverageBonus1 >= 100
) {
  console.log("Koalas Win!");
} else if (dolphinAverageBonus1 === koalaAverageBonus1) {
  console.log("It is a tie!");
}

// BONUS 2

const dolphinAverageBonus2 = (97 + 112 + 101) / 3;
const koalaAverageBonus2 = (109 + 95 + 106) / 3;
console.log(dolphinAverageBonus2, koalaAverageBonus2);

if (dolphinAverageBonus2 > koalaAverageBonus2 && dolphinAverageBonus2 >= 100) {
  console.log("Dolphins Win!");
} else if (
  koalaAverageBonus2 > dolphinAverageBonus2 &&
  koalaAverageBonus2 >= 100
) {
  console.log("Koalas Win!");
} else if (
  dolphinAverageBonus2 === koalaAverageBonus2 &&
  dolphinAverageBonus2 >= 100 &&
  koalaAverageBonus2 >= 100
) {
  console.log("It is a tie!");
}
