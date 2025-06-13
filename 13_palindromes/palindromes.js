const palindromes = function (str) {
    let baseString = str.replace(/ |, /g, "").split("").join("");
    if (baseString[baseString.length-1] === '.' || baseString[baseString.length-1] === '!') {
        baseString = baseString.slice(0, baseString.length-1).toLowerCase();
    }

    let reversedString = baseString.split('').reverse().join('')
    if (baseString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
