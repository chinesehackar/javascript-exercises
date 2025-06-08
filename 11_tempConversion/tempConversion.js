const convertToCelsius = function(fahrenheight) {
  let result =  (fahrenheight-32)*(5/9)
  return Math.floor(result) === result ? result
    : parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let result = ((celsius*9/5)+32)
  return Math.floor(result) === result ? result
    : parseFloat(result.toFixed(1));
};

//toFixed(1) = one decimal place but returns string
//parseFLoat = converts string to float.

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
