const sumAll = function(a,b) {
    let sum = 0;
  if(a < 0 || b < 0){
      return 'ERROR'
  }
  else if(typeof(a) != 'number' || typeof(b) != 'number'){
      return "ERROR"
  }
  else if(a < b ){
      for(let i = a; i <= b; i++){
          sum = sum + i

      }
  } else {
      for(let i = b; i<=a; i++){
          sum = sum  + i
      }
  }
  return sum
  
}

module.exports = sumAll
