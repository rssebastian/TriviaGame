$(document).ready(function() {
	$("#quizStart").click(quiz.start);
	$("#quizEnd").click(quiz.generateResultDiv);
});
	var intervalId;
	var userChoice, question, answerA, answerB, answerC, answerD, choices, correct = 0, incorrect = 0, unanswered = 0, answerArray = [];
	var quizQuestions = [
			[ "How many Pokemon were in the first generation?", "100", "151", "84", "250", "B" ],
			[ "As of May 2017, how many generations are there now?", "5", "7", "11", "13", "B" ],
			[ "As of May 2017, how many Pokemon exist in the games?", "802", "681", "500", "399", "A" ],
			[ "Which Pokemon Version was NOT part of 'Generation I'?", "Red", "Blue", "Purple", "Yellow", "C" ],
			[ "In Generation II, you could travel to a different region after beating the Elite Four. What region was this?", "Sinnoh", "Hoenn", "Alola", "Kanto", "D" ],
			[ "As of May 2017, which of these is NOT the name of a Pokemon Professor?", "Oak", "Juniper", "Ficus", "Sycamore", "C" ],
			[ "Which of these types was native to Generation I games?", "Dragon", "Fairy", "Steel", "Dark", "A" ],
			[ "Which of these Pokemon cannot evolve by Trading?", "Machoke", "Growlithe", "Haunter", "Kadabra", "B" ],
			[ "Which of these items is NOT a one-use held item?", "Air Balloon", "Energy Root", "Sitrus Berry", "Hyper Potion", "D" ],
			[ "Which Type Combination has the least number of weaknesses?", "Poison/Dark", "Water/Ground", "Bug/Steel", "Ghost/Dark", "B" ]
		];

	var quiz = {

		time: 500, 

		start: function() {
			$("#quizStart").hide();	
			$("#quizDiv").html("<div id='timeDiv'><h2><center>Time Left: <span id='timeLeft'>500</span></center></h2></div>");
			quiz.renderQuestions();
			$("#quizEnd").show();
			quiz.time = 500;
			clearInterval(intervalId);
			intervalId = setInterval(quiz.countdown, 1000);
		},

		countdown: function() {
			quiz.time--;
			$("#timeLeft").text(quiz.time);
			if (quiz.time === 0) {
				quiz.generateResultDiv();
			};
		},

		renderQuestions: function() {
			for (i=0; i < quizQuestions.length; i++) {
				question = quizQuestions[i][0];
				answerA = quizQuestions[i][1];
				answerB = quizQuestions[i][2];
				answerC = quizQuestions[i][3];
				answerD = quizQuestions[i][4];
				$("#quizDiv").append("<div id='question"+(i+1)+"'><h3>"+question+"</h3></div>");
				$("#question"+(i+1)).append("<input type='radio' name='answers"+(i+1)+"' value='A'> "+answerA+"<br>");
				$("#question"+(i+1)).append("<input type='radio' name='answers"+(i+1)+"' value='B'> "+answerB+"<br>");
				$("#question"+(i+1)).append("<input type='radio' name='answers"+(i+1)+"' value='C'> "+answerC+"<br>");
				$("#question"+(i+1)).append("<input type='radio' name='answers"+(i+1)+"' value='D'> "+answerD+"<br>");
			};
		},

		generateResultDiv: function() {
			for (j=0; j<quizQuestions.length; j++) {
				userChoice = $("#question"+(j+1)).find("input:checked").val();
				if (userChoice === quizQuestions[j][5]) {
					correct++;
				} else if (userChoice !== quizQuestions[j][5] && userChoice !== undefined) {
					incorrect++;
				} else {
					unanswered++;
				};
			};

			$("#quizDiv").html("<div id='resultsDiv'></div");
			$("#resultsDiv").append("<center><h2>Congratulations! Here is your score!</h2></center><br>");
			$("#resultsDiv").append("<center><h3>You got "+correct+" questions correct!</h3></center>");
			$("#resultsDiv").append("<center><h3>And you got "+incorrect+" questions wrong!</h3></center>");
			$("#resultsDiv").append("<center><h3>And you didn't answer "+unanswered+" questions!</h3></center>");
			$("#resultsDiv").append("<center><h3>Wanna try again? Click the button at the top!</h3></center>");
			$("#quizEnd").hide();
			$("#quizStart").show();
		}
	};

