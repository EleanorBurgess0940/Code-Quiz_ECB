var clearBtn = document.getElementById("clearBtn");
var submitBtn = document.getElementById("submitBtn");


highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    highScoreList = document.getElementById("highScoreList");
highScores.sort(function (low, high) {
    return high.score - low.score
})

for (var scoreNum = 0; scoreNum < highScores.length; scoreNum++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[scoreNum].name + " - " + highScores[scoreNum].score
    highScoreList.appendChild(newLi)
}


clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

