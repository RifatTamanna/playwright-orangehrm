// arrow function(=>), map(), filter(), find(),


// Arrow function

    const add = (a, b) =>{
        return a + b;
    }
    console.log("Addition of 5 and 10", add(5, 10));

    const subtract = (a, b) => {
        return a - b;
    }
    console.log("Subtraction of 10 and 5", subtract(10, 5));

    const multiply = (a, b) =>{
        return a * b;
    }
    console.log("Multiplication of 5 and 10", multiply(5, 10));

    const divide = (a, b) =>{
        return a / b;
    }
    console.log("Division of 10 and 5", divide(10, 5));

//map()

    let numbers = [1, 2, 3, 4, 5];
    let doubled =   numbers.map(num => num*2);
    console.log("Doubled numbers:", doubled);

    let prices = [100, 200, 300, 400, 500];
    let taxedPrices = prices.map(price => Math.round(price * 1.1)); // chaining map() to apply tax and round to nearest integer
    console.log("Prices after tax:", taxedPrices);

    let names = ["tamanna" , "taima" , "tarin" , "nourin"]
    let upperNames = names.map(names => names.toUpperCase());
    console.log("All upperNames", upperNames);


//filter()

    let ages = [15, 18, 20, 22, 12, 30, 40];
    let adults = ages.filter( age => age >= 18);
    console.log(adults);

    let marks = [35, 50, 80, 25, 90, 60];
    let pass = marks.filter(mark => mark >= 40);
    console.log(pass);


//find()

    let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
    let browser = browsers.find(item => item === "Edge");
    console.log("Browser: ", browser);
    
    let number = [10, 20, 30, 40, 50];
    let result = number.find(num => num === 25);
    console.log(result);

    let employees = [
    { id: 1, name: "Tamanna" },
    { id: 2, name: "Rahim" },
    { id: 3, name: "Karim" }
    ];
    let employee = employees.find(employee => employee.id ===2);
    console.log(employee);