const repeatString = function(str, n) {
    let newStr = '';
    if(n < 0){return 'ERROR'} else {while(n > 0){
       newStr =  newStr.concat(str)
       n--       }
    }
    return newStr
}

module.exports = repeatString
