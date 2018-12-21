// Immediately Invoked Functions Expressions(IIFE)

/*
* Using IIFE we can create data privacy, we create a new scope that is hidden from the outside scope,
* we create private variables that cannot be accessed from the outside,
* and these private variables do NOT interfier with global variables.
*
*IIFE can be called only ONE time.
*/

(function () {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();


(function (goodLuck) {				// Passing arguments to an IIFE
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);