// Challenge #7

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// -TASKS-
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// -TEST DATA-
// Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const markInfo = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};

const johnInfo = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  },
};

markInfo.calcBMI();
console.log(markInfo.markBMI);

johnInfo.calcBMI();
console.log(johnInfo.johnBMI);

if (johnInfo.johnBMI > markInfo.markBMI) {
  console.log(
    `${johnInfo.fullname}'s BMI (${johnInfo.johnBMI}) is higher than ${markInfo.fullname}'s (${markInfo.markBMI})`
  );
} else if (markInfo.markBMI > johnInfo.johnBMI) {
  console.log(
    `${markInfo.fullname}'s BMI (${markInfo.markBMI}) is higher than ${johnInfo.fullname}'s (${johnInfo.johnBMI})`
  );
} else {
  console.log(`They both have the same BMI`);
}
