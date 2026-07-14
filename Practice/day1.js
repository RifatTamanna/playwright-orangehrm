//  let, const, var Practice

let name = "Tamanna";
let age = 25;
let profession = "SQA Engineer";
let learningPlaywright = true;
let salary = 50000;

console.log("Name:", name);
console.log("Age:", age);
console.log("Profession:", profession);
console.log("Learning Playwright:", learningPlaywright);
console.log("Salary:", salary);

function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiple(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

console.log("Addition of 5 and 10", add(5, 10));
console.log("Addition of 20 and 30", add(20, 30));

console.log("Subtraction of 10 and 5", subtract(10, 5));
console.log("Subtraction of 30 and 20", subtract(30, 20));

console.log("Multiplication of 5 and 10", multiple(5, 10));
console.log("Multiplication of 20 and 30", multiple(20, 30));

console.log("Division of 10 and 5", divide(10, 5));
console.log("Division of 30 and 20", divide(3, 0)); // This will trigger the division by zero error message



function checkAge(age) {
    if (age >=18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log("Check Age 15", checkAge(15));
console.log("Check Age 25", checkAge(25));