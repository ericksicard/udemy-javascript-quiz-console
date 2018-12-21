(function () {
	// Variables initialization

	const qst1 = 'It\'s programming dificult to learn?';
	const qst2 = 'Do you enjoy learning JavaScript?';

	const opts1 = ['Very hard', 'Not at all', 'It depends'];
	const opts2 = ['A lot!', 'Not at all', 'Sometimes'];

	let rightAnsw1 = opts1.indexOf(opts1[2]);
	let rightAnsw2 = opts2.indexOf(opts2[0]);
	

	// Function constructor

	function Question(question, answers, rightAnsw) {
		this.question = question;
		this.answers = answers;
		this.rightAnsw = rightAnsw;
	}

	Question.prototype.showQuiz = function() {

		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswers = function(answ, callback) {
		var sc;  // declaring a ew variable to store the value returned by keepScore
		
		if (answ != null && answ != []) {
			if (answ == this.rightAnsw) { //We have to do the comparisson with == to get advantage of type coercion, because prompt return a string
				console.log('Correct answer!');
				sc = callback(true); // invoking the function that updates the score(keepScore), settting the argument to "true" and storing the returned value in "sc"
			} else {
				console.log('Try again');
				sc = callback(false); // invoking the function that updates the score(keepScore), settting the argument to "false" and storing the returned value in "sc"
			}
			
			this.displayScore(sc); // calling the constructor method to print the new score
		}	
	}
	
	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score)
	}
	
	//Question.prototype.keepScore = function()

	//Creating new objects
	let quiz1 = new Question(qst1, opts1, rightAnsw1);
	let quiz2 = new Question(qst2, opts2, rightAnsw2);
	let quizes = [quiz1, quiz2]; // objects array
	
	// Score - callback function
	function score() {  // keeping and updating the score when the answer is correct
		var sc = 0;
		return function(correct) { // function to update the score
			if (correct) {
				sc++;
			}
			return sc;
		}
	}	
	var keepScore = score();  // attaching the function returned to this variable
	
	
	// Questions
	function newQuestion() {
		// Generating random numbers to altern quizes
		let n = Math.floor(Math.random() * quizes.length);
		
		// calling the constructor's method that shows a question and possible amswers
		quizes[n].showQuiz();
		
		// Prompt windows to look for an answer
		let resp = prompt('Please, select the correct answer(just type the number).');
		
		if (resp !== 'exit') {
			// calling the constructor's method that check correctness of the answer
			quizes[n].checkAnswers(resp, keepScore);
		
			// calling for a new quiz automatically
			newQuestion();
		}	

	}
	
	// Calling for the quiz the first time
	newQuestion();
	
})();



