function add (a,b) {
	return a + b
}

function subtract (a,b) {
	return a - b
}

function sum (arr) {
	return arr.reduce((a,b) => a+b,0)

}

function multiply (arr) {
	var sum = 1;
	for(let i = 0; i < arr.length; i++){
		sum = sum * arr[i]
	}
	return sum
}

function power(a,b) {
	return a ** b
}

function factorial(num) {
	let result = num;
	if(num < 0 ){
		return -1
	}
	else if(num === 0 ){
		return 1
	}
	
    while(num > 1 ){
			 num --;
			 result = result * num
		 }
	return result
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}