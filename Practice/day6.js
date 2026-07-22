// Destructuring (Array), Destructuring (Object), Spread Operator (...), Rest Operator (...), Default Parameter, Variables, Functions, Loops


// Destructuring (Array)
let browsers = ["Chrome", "Firefox", "Edge"];
let [first, second] = browsers;
console.log(first);
console.log(second);


let colors = ["Red", "Green", "Blue"];
let [first1, second1] = colors;
console.log(first1);
console.log(second1);


// Destructuring (Object)

let tester ={
    name: "Tamanna",
    Company: "CNS",
    experience: "3"
};
let {name, Company} = tester;
console.log(name);
console.log(Company);


let laptop = {
    brand: "Dell",
    ram: "16GB",
    processor: "Core i7"
};
let { brand, processor} = laptop;
console.log(brand);
console.log(processor);


//Spread Operator (...) 

let browser1 = ["Chrome", "Firefox"];
let browser2 = ["Edge", "Safari"];

let allBrowsers = [...browser1, ...browser2];
console.log(allBrowsers);



let manualTools = ["Jira", "Postman"];
let automationTools = ["Playwright", "Selenium"];

let allTools = [...manualTools, ...automationTools];
console.log(allTools);



let frontend = ["HTML", "CSS"];
let backend = ["Node.js", "Express"];
let database = ["MySQL"];

let allType = [...frontend, ...backend, ...database];
console.log(allType);




// Rest Operator (...)

let numbers =[10, 20, 30, 40];
let [firstNo, ...others] = numbers;

console.log(firstNo);
console.log(others);


let cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi"];
let [firstCity, ...otherCities] =cities;

console.log(firstCity);
console.log(otherCities);



//Default Parameter

function greet(name = "Guest"){
    console.log("Hello " + name);
}
greet();
greet("Tamanna");



function login(username = "Admin"){
    console.log("Hello " + username);
}
login();
login("Rifat");


//Challenge

let qaTools = {
    manuals: ["Jira", "Postman"],
    automations: ["Playwright", "Selenium"],
    performances: ["JMeter"]
};
// let {manuals} = qaTools;
// console.log(manuals);

let {manuals, automations, performances} = qaTools; // destructuring array
let allTool = [...manuals, ...automations, ...performances]; // spread operator
console.log(allTool);



