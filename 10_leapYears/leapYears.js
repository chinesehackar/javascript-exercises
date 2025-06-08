const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

//configurations:
//divisible by 4 => true
//divisible by 100 but not 400 ==> false
//divisible by 400 => true

// Do not edit below this line
module.exports = leapYears;
