// map(), filter(), find(), arrow function(=>)


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