// Variables to track whether a question has been answered or not
var questionOne = 0;
var questionTwo = 0;
var questionThree = 0;
var questionFour = 0;

// Variable for score
var score = 0;
var scoreInterval = setInterval(scoreFunc, 1000)
function scoreFunc() {
  $("#score-text").text("Score: " + score)
}

// Timer and Timer functions
var timer = 20
var timeInterval = setInterval(timeFunc, 1000);
function timeFunc() {
  if (timer > 0) {
    timer--;
    $("#remainingTime").text("Time Remaining: " + timer)
  } else return;
}
setTimeout(timeUp, 20000)
function timeUp() {
  $("#remainingTime").text("Times Up!")
  $(".question-row").text("")
  $("#score-text").css("visibility", "visible");
}
// Question 1 right answer on-click
$(".right-answer-1").on("click", function () {
  if (questionOne < 1) {
    score++;
    $(this).addClass("btn-success");
  } else return;
});
// Question 1 right answer on-click
$(".right-answer-2").on("click", function () {
  if (questionTwo < 1) {
    score++;
    $(this).addClass("btn-success");
  } else return;
});
// Question 1 right answer on-click
$(".right-answer-3").on("click", function () {
  if (questionThree < 1) {
    score++;
    $(this).addClass("btn-success");
  } else return;
});
// Question 1 right answer on-click
$(".right-answer-4").on("click", function () {
  if (questionFour < 1) {
    score++;
    $(this).addClass("btn-success");
  } else return;
});

// --------------------------------------------------------------

// Question 1 wrong answer on-click
$(".wrong-answer").on("click", function () {
  if (questionOne < 1) {
    $(this).addClass("btn-danger");
  }
});

// Question 2 wrong answer on-click
$(".wrong-answer").on("click", function () {
  if (questionTwo < 1) {
    $(this).addClass("btn-danger");
  }
});

// Question 3 wrong answer on-click
$(".wrong-answer").on("click", function () {
  if (questionThree < 1) {
    $(this).addClass("btn-danger");
  }
});

// Question 4 wrong answer on-click
$(".wrong-answer").on("click", function () {
  if (questionFour < 1) {
    $(this).addClass("btn-danger");
  }
});

// --------------------------------------------------------------

// Button on-click for question-1 buttons
$(".question-1").on("click", function () {
  if (questionOne < 1) {
    questionOne++;
  } else return;
});

// Button on-click for question-2 buttons
$(".question-2").on("click", function () {
  if (questionTwo < 1) {
    questionTwo++;
  } else return;
});

// Button on-click for question-3 buttons
$(".question-3").on("click", function () {
  if (questionThree < 1) {
    questionThree++;
  } else return;
});

// Button on-click for question-4 buttons
$(".question-4").on("click", function () {
  if (questionFour < 1) {
    questionFour++;
  } else return;
});