//Object.keys(), Object.values(), Object.entries(), Nested Object, Optional Chaining(?.), Nullish Coalescing (??)।

//Object.keys().........................................Object.keys(response)


let tester = {
    name: "Rifat",
    role: "SQA",
    Company: "CNS Limited"
};
console.log(Object.keys(tester));


let laptop = {
    brand: "Dell",
    ram: "16GB",
    processor: "Core i7",
    storage: "512GB SSD"
};
console.log(Object.keys(laptop));


// Object.values() ..............................

console.log(Object.values(tester));
console.log(Object.values(laptop));


//Object.entries().......................................একটি object-এর key এবং value দুটোই array আকারে দেয়।

console.log(Object.entries(tester));

let student = {
    id: 101,
    name: "Rifat",
    cgpa: 3.25
};
console.log(Object.entries(student));




//Nested Object.......................................

let employee = {
    name: "Rifat",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
console.log(employee.address.city);


let company ={
    name: "Microsoft",
    office: {
        country: "USA",
        city: "Seattle"
    }
};
console.log(company.office.country);

let testEnvironment = {
    project: "OrangeHRM",
    browser: {
        name: "Chrome",
        version: 138
    }
};
console.log(testEnvironment.browser.name);
console.log(testEnvironment.browser.version);


let response = {
    status: 200,
    data: {
        employee: {
            id: 101,
            name: "Tamanna",
            department: "QA"
        }
    }
};
console.log(response.data.employee.name);
console.log(response.data.employee.department);




//Optional Chaining(?.) ...............................Optional Chaining ব্যবহার করলে program crash করবে না।

console.log(response.data?.employee?.id);

//Nullish Coalescing (??)।..............যদি কোনো variable-এর value null বা undefined হয়, তাহলে ??-এর ডান পাশের value ব্যবহার করবে।

let browser = null;
console.log(browser ?? "Chrome");

let username;
console.log(username??"Guest");



//Optional Chaining + Nullish Coalescing.............................


console.log(employee.department?.name?? "No Department");  //75-84 line hints
console.log(employee.address?.division ?? "No Division");  //75-84 line hints

console.log(response.data?.position?? "Employee Not Found");  //75-84 line hints
console.log(response.data.employee?.department ?? "Not Assigned");  //75-84 line hints
console.log(response.data.employee?.email ?? "No Email");  //75-84 line hints

let value = "";
console.log(value || "Default");