Array.prototype.uniq = function () {
    let uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqueArray.indexOf(this[i]) === -1) {
            uniqueArray.push(this[i]);
        }
    }

    return uniqueArray;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

Array.prototype.twoSum = function () {



};