var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var secondsLeft = (90);
var timerEl = document.getElementById("timer");
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var answerEl = document.getElementById("answers");
var correctAnswers = (0);

var questionNumber = -1;
var answer = document.getElementById("answer");

function startTimer() {
    document.getElementById("homePage").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    setTimer();
    renderQuestions();
}

function setTimer() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timer.textContent = "time left:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

function renderQuestions() {
    questionNumber++;

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

    ;
    answer = questions[questionNumber].answer

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;


    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "btn btn-light btn-block")
    }

}

function endQuiz() {
    document.getElementById("quiz").classList.add("d-none");
    document.getElementById("submit-score").classList.remove("d-none");
}

function submitScore() {
    userNameInput = document.getElementById("userName").value;

    var newScore = {
        name: userNameInput,
        score: correctAnswers
    };


    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    highScores.push(newScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

}


startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", submitScore);


answerChoices.addEventListener("click", function (event) {


    if (answer === event.target.textContent) {
        alert("Correct!");
        correctAnswers++;
        setTimeout(1000);
    } else {
        alert("Sorry, that's incorrect.");
        setTimeout(1000);
        secondsLeft = secondsLeft - 10;
    }
    renderQuestions();
});
