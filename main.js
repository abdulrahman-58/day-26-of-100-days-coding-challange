// Assalamualaikum @everyone 👋
// 🚀 Day 26 Challenge: Start Coding! 🚀
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function addNum(number1, number2) {
    return number1 + number2;
}
console.log(addNum(88, 34));
console.log("\n");
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Ali");
greetUser();
console.log("\n");
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function squareDeclaration(num) {
    return num * num;
}
function squareExpression(num) {
    return num * num;
}
console.log("Function Expression: ".concat(squareDeclaration(5)));
console.log("Function Declaration: ".concat(squareExpression(5)));
