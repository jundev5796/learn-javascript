// #12 Switch Statement

// The switch statement is an alternative way of executing complicated if/else statements.
// The purpose is to mostly compare one value to multiple different options.

// Ex) Naming an activity for each weekday

const day = "Tuesday";

switch (day) {
  case "Monday": // day === 'Monday'
    console.log("Study JavaScript");
    console.log("Go to coding meetup");
    break; // stops the code from continuing
  case "Tuesday":
    console.log("Attend coding workshop");
    break;
  case "Wednesday": // running a code for two different values at the same time
  case "Thursday":
    console.log("Solve coding practice problems");
    break;
  case "Friday":
    console.log("Meet up with friend");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Take a break! :D");
    break;
  default:
    // code executed for any other values
    console.log("Not a valid day!");
}

// Executing the code above using an 'if/else' statement

if (day === "Monday") {
  console.log("Study JavaScript");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Attend coding workshop");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Solve coding practice problems");
} else if (day === "Friday") {
  console.log("Meet up with friend");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Take a break! :D");
} else {
  console.log("Not a valid day!");
}
