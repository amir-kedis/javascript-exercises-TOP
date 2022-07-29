const palindromes = function (str) {
    const charsArr = Array.from(str.toLowerCase()).filter((char) => /^[a-zA-Z]+$/.test(char));
    const charsStr = charsArr.join("");
    const charsStrRev = charsArr.reverse().join("");

    return charsStr === charsStrRev;
};

// Do not edit below this line
module.exports = palindromes;
