var output = [];
var count = 1;
var message = "";

function fizzBuzz() {
    message = count;
    if (count % 3 === 0) {
        message = "Fizz";
    }
    if (count % 5 === 0) {
        message = "Buzz";
    }
    if (count % 3 === 0 && count % 5 ===0) {
        message = "FizzBuzz";
    }
    output.push(message)
    count++;
    console.log(output);
}