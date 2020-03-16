var secondsLeft = (75)

function startTimer() {
    setTimer();

    makequestions();
}
function setTimer() {
    var countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time:" + secondsLeft;
    })
}
