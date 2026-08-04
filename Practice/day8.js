//Callback Functions, Higher-Order Functions, Arrow Function Deep Dive, setTimeout(), setInterval()

//const { count } = require("node:console");

//Callback Functions..................একটা function-কে আরেকটা function-এর parameter হিসেবে পাঠানো।

function greet(name) {
    console.log(`Hello ${name}`);
}
function processUser(callback) {
    callback("rifat");
}
processUser(greet);




//Practice 1

function welcome(name) {
    console.log(`Welcome ${name}`);
}
function login(callback) {
    callback("Tamanna");
}
login(welcome);



//Higher-order Function.................অন্য function receive করে অথবা function return করে.


function calculate(a, b, operation){
    return operation(a, b);
}
function add(x, y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}
function substract(x, y){
    return x - y;
}
function divide(x, y){
    return x /y;
}
console.log(calculate(5, 10, add));
console.log(calculate(5, 10, multiply));
console.log(calculate(10, 5, substract));
console.log(calculate(10, 5, divide));



// Arrow Function Deep Dive .........................

const square = (num) => {
    return num * num;
}
console.log(square(5));

const cube = (number) => {
    return number * number * number;
}
console.log(cube(3));


//setTimeout() ..............................

console.log("Start");

setTimeout(() =>{
    console.log("Login Success"); 
}, 2000);

console.log("End");

//Practice

console.log("Testing Started");

setTimeout(() => {
    console.log("Testing Completed");
}, 3000);



// setInterval() .............................এটা নির্দিষ্ট interval পরপর run হয়।

// let count = 1;

// let timer = setInterval(() => {
//     console.log(count);

//     count++;

//     if (count > 5){
//         clearInterval(timer);
//     }
// }, 1000);


// Practice 2................. 
let count = 10;

let timer = setInterval(() =>{
    console.log(count);

    count =count + 5;

    if(count > 25){
        clearInterval(timer);
    }

}, 1000);


function executeTest(testName, callback) {
    console.log(`Running ${testName}`);
    callback();
}
function testPassed(){
    console.log("Test Passed");
}
executeTest("Login Test", testPassed);