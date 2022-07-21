const repeatString = function(str, times) {
    let resultStr = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0;i < times;i++)
    {
        resultStr += str;
    }
    return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
