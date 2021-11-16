// Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables.
// 2. Calculate both their BMI's using the formula (you can even implement both versions).
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// -TEST DATA-
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Data 1

const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / heightJohn1 ** 2;
console.log(BMIMark1, BMIJohn1);

const markHigherBMI = BMIMark1 > BMIJohn1;
console.log(markHigherBMI);

// Data 2

const massMark2 = 95;
const heightMark2 = 1.88;

const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);
