// First Class Functions: Functions returning functions

function interviewQuestion(job) {
	if (job === 'programmer') {
		return function(name) {
			console.log(name + ', can you please explain what a function is?');
		}
	} else if(job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('What do you do ' + name + '?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');  // this variable is gonna store one of the functions being returned by the function "interviewQuestion"
													 // this is the same case when we store a function expression in a variable
var programmerQuestion = interviewQuestion('programmer');

teacherQuestion('John');  // calling this variable, which is a function acepting a name as an input
programmerQuestion('Jane');

interviewQuestion('programmer')('Erick');