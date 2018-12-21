/*
* Lecture: CLOSURES
*
* CLOSURE SUMMARY:
* An inner function has always access to the variables and parameters of its outer function,
* even after the outer function has returned. This is possible because the SCOPE CHAIN always stays intact.
*/

function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUSA = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUSA(1979);
retirementGermany(1979);
retirementIceland(1979);

// Result
// 27 years left until retirement
// 26 years left until retirement
// 28 years left until retirement



function interviewQuestion(job) {
	
	var messageProgrammer = ', can you please explain what a function is?';
	var messageTeacher = 'What subject do you teach, ';
	var message = 'What do you do ';	
	
		return function(name) {
			if (job === 'programmer') {
				console.log(name + messageProgrammer);
			} else if(job === 'teacher') {
				console.log(messageTeacher + name + '?');
			} else {
				console.log(message + name + '?');
			}
	}
}

var teacherQuestion = interviewQuestion('teacher'); 
var programmerQuestion = interviewQuestion('designer');

teacherQuestion('John'); 
programmerQuestion('Jane');

interviewQuestion('programmer')('Erick');