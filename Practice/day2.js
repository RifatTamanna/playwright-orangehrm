// Conditions, Loops & Functions

// Example of if-else statement
let marks = 75;

if (marks >= 80) {
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Grade: A-");
}
else {
    console.log("Fail");
}


let number = 5;

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}

console.log("Check Number 5:", checkNumber(5));
console.log("Check Number -3:", checkNumber(-3));
console.log("Check Number 0:", checkNumber(0));


// Example of for Switch statement

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// Example of for loop

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

for(let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}
for(let i = 1; i <=10; i++){
    console.log(i*2);
}

// Example of while loop

let count = 1;

while(count <=5){
    console.log(count);
    count++;
}

let num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

let i = 1;
while(i <= 10){
    console.log(i*3);
    i++;
}


// Example of functions

function multiplicationTable(num){
    let j = 1;
    while(j <= 10){
        console.log(`${num} x ${j} = ${num * j}`);
        j++;
    }
}
multiplicationTable(5);
