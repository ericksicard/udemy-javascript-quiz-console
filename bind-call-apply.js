/*
* Lecture: BIND, CALL and APPLY methods
*/

var john = {
	name: 'John',
	age: 39,
	job: 'programmer',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.')
		} else if (style === 'friendly') {
			console.log('What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.')
		}
	}
}

john.presentation('formal', 'morning');

var jane = {
	name: 'Jane',
	age: 34,
	job: 'designer',
}
// CALL method
john.presentation.call(jane, 'friendly', 'afternoon'); // the first argument is the "this" variable, in this case "jane".
													   // this is called method borrowing.



// APPLY method
//john.presentation.apply(jane, ['friendly', 'afternoon']);



// BIND method (carying: a technique to create a function based on another function, but with some preset parameters)
// This method does not inmediately call the function, it generates a copy of the function so we can stored somewhere(a variable).
// This is extremely useful to create functions with preset arguments.

var johnFriendly = john.presentation.bind(john, 'friendly');  // in this case we preset the "friendly" argument
johnFriendly('morning'); 
johnFriendly('night'); 

var janeFormal = john.presentation.bind(jane, 'formal'); 
janeFormal('evening');


// Practical example

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {				
	var arrResult = [];		
	for (var i = 0; i < arr.length; i++) {
		arrResult.push(fn(arr[i]));
	}
	return arrResult;	
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAges(limit, el) {		// callback function
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);  // in this point we do NOT call the "calculateAge" function
console.log(ages);				 			// "calculateAge" is passed as a variable to "arrayCalc" function to be executed later
								 
var fullAgesJapan = arrayCalc(ages, isFullAges.bind(this, 20)); // with BIND we are preseting the "limit" argument to 20
console.log(ages);
console.log(fullAgesJapan);

