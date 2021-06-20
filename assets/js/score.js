"use strict";

/*---------------------------------------------------------------
Iterate through stored items and display on high scores HTML page
---------------------------------------------------------------*/
function allScores() {
  var values = Object.values(localStorage);
  var keyItem = Object.keys(localStorage);
  console.log(keyItem.length);

  for (let i = 0; i < keyItem.length; i++) {
    var highScore = document.querySelector("#high-score");
    console.log(keyItem[i]);
    highScore.innerHTML +=
      "<h2 id='high-score'class='high-score'>" +
      "Initials: " +
      keyItem[i] +
      " - Score: " +
      values[i] +
      "</br>" +
      "</h2>";
  }
}
allScores();

/*------------------
Clear storage button
------------------*/
function clearStorage() {
  localStorage.clear();
  var highScore = document.querySelector("#high-score");
  highScore.innerHTML = "<h2></h2>";
}

var clearButton = document.querySelector("#clear-all");
clearButton.addEventListener("click", clearStorage);
