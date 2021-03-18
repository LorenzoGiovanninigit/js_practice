const removeFromArray = function() {
    let answer = [];
    let arr2 = [];
    let arrArgugments = Array.from(arguments);
    let arr1 = arrArgugments[0];
    for(let i = 1; i < arr1.length; i++){
        arr2.push(arrArgugments[i])
    }
    answer = arr1.filter(function(item) {
        return !arr2.includes(item)
    })
    return answer
}

module.exports = removeFromArray
