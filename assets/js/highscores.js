var submitBtn = document.getElementById("submitBtn");
var clearBtn = document.getElementById("clearBtn");

//local storage for the high score page
(highScores = JSON.parse(localStorage.getItem("highScores") || "[]")),
  (highScoreList = document.getElementById("highScoreList"));
highScores.sort(function(low, high) {
  return high.score - low.score;
});

//this function makes and sorts the high scores
window.addEventListener("load", function() {
  html = "<table><tr>";
  for (var scoreNum = 0; scoreNum < highScores.length; scoreNum++) {
    html +=
      "<td>" +
      highScores[scoreNum].name +
      "</td>" +
      "<td>" +
      highScores[scoreNum].score +
      "</td>";
  }
  html += "</tr></table>";
  document.getElementById("highScoreList").innerHTML = html;
});

//this function clears the high scores
clearBtn.addEventListener("click", clearScores);
startBtn.addEventListener("click", startTimer);

function clearScores() {
  localStorage.clear();
  location.reload();
}
