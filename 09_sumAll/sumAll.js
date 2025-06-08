const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    let sum = 0;
    /* original solution
    let tempArr = [];
    if (max>min) {
        for (let i = min; i <= max; i++) {
            tempArr.push(i)
        }
    } else {
        for (let i = min; i >= max; i--) {
            tempArr.push(i);
        }
    }
    sum = tempArr.reduce((accumulator, current) => accumulator + current, 0);
    return sum;
    */
    if (min>max) {
    [min, max] = [max, min];
    }
    for (let i = min; i <= max; i++) {
        sum+=i;
    }
    return sum;
   
};

//let sum = 0;
//let tempArr = [];
//for loop. let i = min; i <= max; i++ 
//tempArr.push(i)
//let result = reduce of accumulated sum + current, 0

// Do not edit below this line
module.exports = sumAll;
