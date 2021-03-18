const leapYears = function(n) {
  if(n % 4 != 0){
      return false 
  } else if(n % 100 === 0 && n % 400 != 0){
      return false
  }else if (n % 100 === 0 && n % 400 === 0){
      return true 
  } else {return true}
}
module.exports = leapYears
