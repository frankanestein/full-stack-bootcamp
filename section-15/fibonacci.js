function fibonacciGenerator (n) {

    var sequence = [0,1];
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n > 1) {
        for (var i = 1; i < n-1; i++) {
            sequence.push(sequence[i] + sequence[i-1]);
        }
        output = sequence;
    }
    console.log(output);
}