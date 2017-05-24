$(document).ready(function() {
	$("#quizStart").click(quiz.start);
});
	var intervalId;
	var quizScore = 10;

	var quiz = {

		time: 500,

		start: function() {
			$("#quizStart").hide();	
			$("#quizDiv").show();
			intervalId = setInterval(quiz.countdown, 1000);
		},

		countdown: function() {
			quiz.time--;
			$("#timeLeft").text(quiz.time);
		},

		checkAnswers: function() {
		}
	};

