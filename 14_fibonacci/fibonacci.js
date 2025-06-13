const fibonacci = function(number) {
    number = parseInt(number);
    let sequence = [];
    if (number === 0 || number === 1) {
        sequence.push(number);
    } else if (number < 0) {
        return "OOPS";
    } else if (number > 1) {
        sequence.push(1, 1);
        for (let i = 1; i < number-1; i++) {
            let sumNumber = sequence[i] + sequence[i-1];
            sequence.push(sumNumber);
        }
    }
    return sequence[sequence.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
