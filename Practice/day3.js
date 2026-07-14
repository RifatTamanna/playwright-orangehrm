// Arrays, Objects, push(), pop(), length, for...of


// Arrays
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'cherry'

for (let fruit of fruits) {
    console.log(fruit);
}

let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari'];
// console.log(browsers);
console.log(browsers.length); // 4
console.log(browsers[0]); // 'Chrome'
console.log(browsers[2]); // 'Edge'
console.log(browsers[browsers.length - 1]); // 'Safari' (last element)
console.log(browsers.push('Opera')); // Adds 'Opera' to the end of the array and returns the new length
console.log(browsers);
console.log(browsers.pop()); // Removes the last element ('Opera') and returns it
console.log(browsers);


for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
} 
for (let browser of browsers) {
    console.log(browser);
}



// Objects

let employee = {
    name: 'Tamanna',
    Company: 'CNS Limited',
    Profession: 'SQA Engineer'
}

console.log(employee.name);
console.log(employee.Company);
console.log(employee.Profession);