var n = 1;
var output = [];
var message = "";

    if (n % 3 === 0) {
        message = "Fizz";
    }
    if (n % 5 === 0) {
        message = "Buzz";
    }
    if (n % 3 === 0 && n % 5 ===0) {
        message = "FizzBuzz";
    } else {
        message = n;
    }
    output.push(message)
    
console.log(output);