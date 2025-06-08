const removeFromArray = function(array, ...myArgs) {
    /*let newArr = [];
    array.forEach((item) => {
        if (!myArgs.includes(item)) {
            newArr.push(item);
        }
    })
    return newArr;
    */
    return array.filter(item => !myArgs.includes(item))
};

//init function that takes array and indefinite param
//init new array
//forEach item in myArgs, check if array includes that item. 
//If else, then push to new Array.

// Do not edit below this line
module.exports = removeFromArray;
