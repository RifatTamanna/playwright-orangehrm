//forEach(), some(), every(), includes(), String methods = trim(), toUpperCase(), toLowerCase()


//forEach()  forEach() অনেকটা for...of-এর মতো, কিন্তু এটা array-এর প্রতিটি element-এর জন্য একটা function চালায়।

let browsers = ["Chrome", "Opera", "Firefox"];

browsers.forEach(browser =>{
    console.log(browser);
});

let modules = [
    "Login",
    "Dashboard",
    "Admin",
    "PIM"
];
modules.forEach(module=> {
     console.log(module);
});


//some() যদি একটাও element condition match করে, তাহলে true।

let bugs = ["Low", "Medium", "Critical"];
let hasCritical = bugs.some(bug => bug === "Critical");
console.log(hasCritical);


let statuses = ["Pass", "Pass", "Fail", "Pass"];
let hasFail = statuses.some(result => result === "Fail");
console.log(hasFail);


// every()  সব element যদি condition match করে, তাহলে true।

let marks = [80, 70, 90];
let passed = marks.every(mark => mark >= 40);
console.log(passed);


let responseCodes = [200, 200, 500, 200];
let response = responseCodes.every( code => code ===200);
console.log(response);


//includes()

let roles = ["Admin", "HR", "ESS"];
console.log(roles.includes("HR"));

let net = ["Chrome", "Firefox", "Edge"];
console.log(net.includes("Safari"));


// String Method 

let username = "Tamanna";
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());


let email = "QA@Example.COM ";

console.log(email.trim());
console.log(email.toLowerCase());
console.log(email.includes("Example"));






let numbers = [10, 20, 30, 40];

let [first, second, ...others] = numbers;

console.log(first);
console.log(second);
console.log(others);