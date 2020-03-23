var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var secondsLeft = (90);
var timerEl = document.getElementById("timer");
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;

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
    answer = questions[questionNumber].answer;

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;
    console.log("choices", choices);

    for (var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[i]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "btn btn-light btn-block")
    }

}
startBtn.addEventListener("click", startTimer);
