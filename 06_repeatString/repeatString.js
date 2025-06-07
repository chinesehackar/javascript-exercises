const repeatString = function(str, count) {
    let string = ""
    if (count < 0) {
        return "ERROR";
    } else {
    for (let i = 1; i <= count; i++) {
        string+=str
    }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
