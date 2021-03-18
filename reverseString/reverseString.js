const reverseString = function(str) {
    let reverseArr = []
    let arr = str.split('')
    for(let i = arr.length - 1; i >= 0; i-- ){
       reverseArr.push(arr[i])
    }
    return reverseArr.join('')
}

module.exports = reverseString
