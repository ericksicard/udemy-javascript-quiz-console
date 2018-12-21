// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {				// "fn" is a function being passed as an argument to be used later(callback function)
	var arrResult = [];						// array to store the results
	for (var i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;	
}

function calculateAge(el) {		// callback function to calculate the current age
	return 2018 - el;
}

function isFullAges(el) {		// callback function
	return el >= 18;
}

function maxHeartRate(el) {		// callback function
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));		
	} else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);  // in this point we do NOT call the "calculateAge" function
console.log(ages);				 			// "calculateAge" is passed as a variable to "arrayCalc" function to be executed later
								 
var fullAges = arrayCalc(ages, isFullAges);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
