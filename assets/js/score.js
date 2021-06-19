"use strict";

function allScores() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  console.log(keys, values);
  var highScore = document.querySelector("#high-score");
  highScore.innerHTML =
    "<h2>" + [i] + ".  " + keys + ":  SCORE = " + values + "</h2>";
}

allScores();

function clearStorage() {
  localStorage.clear();
  var highScore = document.querySelector("#high-score");
  highScore.innerHTML = "<h2></h2>";
}

var clearButton = document.querySelector("#clear-all");
clearButton.addEventListener("click", clearStorage);
