const reverseString = function(string) {
    arr = string.split("");
    return arr.reverse().join("");
};

//takes input string
//split string into array
//for let letter = array.length; letter >= 0; letter--
//pop array[letter]
//unshift array[letter]

// Do not edit below this line
module.exports = reverseString;
