//The three main pages linked on the index.html page
var quizPage = document.getElementById("quiz");
var homePage = document.getElementById("homePage");
var finalPage = document.getElementById("submit-score");
//misc. variables
var question = document.getElementById("questions");
var answers = document.getElementById("answers");
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var secondsLeft = 90;
var quizTimer = document.getElementById("timer");
var correctAnswers = 0;
var questionNumber = 0;

//on load screen the quiz page and the final page will be hidden will be hidden
window.onload = function() {
  quizPage.hidden = true;
  homePage.hidden = false;
  finalPage.hidden = true;
  quizTimer.hidden = true;
};

//various buttons
startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", submitScore);
answers.addEventListener("click", selectAnswer);

//function to start the timer
function startTimer() {
  quizPage.hidden = false;
  homePage.hidden = true;
  setTimer();
  renderQuestions();
}

//function to renderQuestions if question number is less than ten and they have time left
function renderQuestions() {
  if (questionNumber > 9) {
    alert("Nice job, that was the last question");
    endQuiz();
    return;
  }
  if (secondsLeft <= 0) {
    alert("Sorry you have run out of time");
    endQuiz();
    return;
  }

  answer = questions[questionNumber].answer;

  question.textContent = questions[questionNumber].title;

  answers.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
    var option = document.createElement("button");
    option.textContent = choices[i];
    answerBtn = answers
      .appendChild(option)
      .setAttribute("class", "btn btn-block");
  }

  questionNumber++;
}

function setTimer() {
  setInterval(function() {
    secondsLeft--;
    timer.textContent = "time left:" + secondsLeft;
    quizTimer.hidden = false;
  }, 1000);
}

function selectAnswer() {
  //this is somewhere i would like to work on i couldnt figure out how to get correct with out alerting correct
  if (answer === event.target.textContent) {
    alert("Correct!");
    correctAnswers++;
  } else {
    alert("Incorrect!");
    secondsLeft = secondsLeft - 10;
  }
  renderQuestions();
}

//this function leads to the final submit page
function endQuiz() {
  quizPage.hidden = true;
  finalPage.hidden = false;
  quizTimer.hidden = true;
}

//function that takes the username submission keeps it in local storage and sends it to high score page
function submitScore() {
  userName = document.getElementById("userName").value;
  var newScore = {
    name: userName,
    score: correctAnswers
  };
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  highScores.push(newScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}
