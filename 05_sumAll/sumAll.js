const sumAll = function(start=0,end=0) {
    let sum = 0;
    if (typeof start != "number" || typeof end != "number" ) {
        return "ERROR";
    } else if (start > end ) {
        let temp = start;
        start = end;
        end = temp;
    } else if (start < 0 || end < 0) {
        return "ERROR";
    }
    for (let i = start;i <= end;i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
