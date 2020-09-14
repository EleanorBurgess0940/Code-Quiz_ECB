function printHighscores() {
  //local storage for the high score page
  var highscores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  //
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}
//this function clears the high scores
document.getElementById("clear").onclick = clearHighscores;

function clearHighScores() {
  window.localStorage.removeItem("highscores");
  location.reload();
}

printHighscores();
