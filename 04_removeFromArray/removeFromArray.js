const removeFromArray = function(arr = [], ...itemsToRemove) {

    let result = [...arr];


    for (itemToRemove of itemsToRemove) {

        for (let i = 0;i<arr.length;i++) {

            if (itemToRemove === arr[i]) {

                result.splice(result.indexOf(itemToRemove),1);
                
            }
        }

    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
