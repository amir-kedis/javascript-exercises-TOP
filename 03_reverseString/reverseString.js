const reverseString = function(str = "") {
    let strArr = str.split("");
    let reverseArr = strArr.reverse();
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
