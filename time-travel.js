// =============================================
/* TASK 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
// =============================================
let destination = "Ancient Egypt";
console.log(`Your destination is: ${destination}`);


// ================================================
/* TASK 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
// ================================================
destination = "Medieval Europe";
console.log(`Your new destination is: ${destination}`);


// ================================================
/* TASK 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment./* 
// ================================================
const travelDate = "2024-03-15";
console.log(`Travel date is: ${travelDate}`);
const travelDate = "2013-02-15";

//  * Observations:
//  * TODO: Explain here.
//  */

// using keyword "const", you can only assign a value one time. Read only!!!
// Error message received was: "Identifier 'travelDate' has already been declared"


// ================================================
/* TASK 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment./*
// ================================================
console.log(timeMachineModel);
var timeMachineModel = "T-800";

//  * Observations:
//  * TODO: Explain here.
//  */


// Trying to print a variable named "timeMachineModel" to the console without a value 
// will return an ReferenceError message - "timeMachineModel is not defined(undefined)"; Once a value 
// has been assigned, it will print the value to the console.