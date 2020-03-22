var startBtn = document.getElementById("startBtn");
var secondsLeft = (90);
var timer = document.getElementById("timer");



function startTimer() {
    document.getElementById("homePage").classList.add("d-none")
    document.getElementById("quizPage").classList.remove("d-none")
    setTimer();
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
startBtn.addEventListener("click", startTimer);