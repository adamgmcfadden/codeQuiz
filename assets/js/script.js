"use strict";

/*querySelector to control HTML elements in JS*/
var initial = document.querySelector("#initial");
var startQuizBtn = document.querySelector("#start-btn");
var questionsEl = document.querySelector("#question-element");
var timeRemaining = document.querySelector("#time-rem");
var correctWrong = document.querySelector("#correct-wrong");

var currentQuestionIndex = 0;
var timeLeft = 70;

//Start quiz button is pressed - what happens...
var beginQuiz = function () {
  var quizDiv = document.createElement("div");
  quizDiv.textContent = questions[0].question;
  quizDiv.classList.add("title");
  quizDiv.id = "quiz";
  questionsEl.appendChild(quizDiv);
  var buttonDiv = document.createElement("div");
  buttonDiv.classList.add("btn-grid");
  buttonDiv.id = "button-div";
  questionsEl.appendChild(buttonDiv);
  var answerBtn1 = document.createElement("button");
  answerBtn1.textContent = questions[0].answers[0].text;
  answerBtn1.className = "btn";
  answerBtn1.id = "btn-1";
  buttonDiv.appendChild(answerBtn1);
  var answerBtn2 = document.createElement("button");
  answerBtn2.textContent = questions[0].answers[1].text;
  answerBtn2.className = "btn";
  answerBtn2.id = "btn-2";
  buttonDiv.appendChild(answerBtn2);
  var answerBtn3 = document.createElement("button");
  answerBtn3.textContent = questions[0].answers[2].text;
  answerBtn3.className = "btn";
  answerBtn3.id = "btn-3";
  buttonDiv.appendChild(answerBtn3);
  var answerBtn4 = document.createElement("button");
  answerBtn4.textContent = questions[0].answers[3].text;
  answerBtn4.className = "btn";
  answerBtn4.id = "btn-4";
  buttonDiv.appendChild(answerBtn4);

  //Start Timer
  var countDown = function () {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
      }
      timeRemaining.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  };
  countDown();

  //hide welcome screen
  initial.classList.add("hidden");
  //unhide initial question and answers
  nextQuestions();
};
/*loads next set of questions*/
var nextQuestions = function () {
  questionsEl.addEventListener("click", function () {
    for (let i = currentQuestionIndex; i < questions.length; i++) {
      var quiz = document.querySelector("#quiz");
      quiz.textContent = questions[i].question;
      var btn1 = document.querySelector("#btn-1");
      btn1.textContent = questions[i].answers[0].text;
      var btn2 = document.querySelector("#btn-2");
      btn2.textContent = questions[i].answers[1].text;
      var btn3 = document.querySelector("#btn-3");
      btn3.textContent = questions[i].answers[2].text;
      var btn4 = document.querySelector("#btn-4");
      btn4.textContent = questions[i].answers[3].text;
      correctAnswer();
      currentQuestionIndex++;

      return;
    }
    endQuiz();
    var finalScore = timeRemaining.innerHTML;
    var lastPageDiv = document.createElement("div");
    questionsEl.appendChild(lastPageDiv);
    var allDone = document.createElement("h1");
    allDone.textContent = "All done!";
    allDone.className = "title";
    lastPageDiv.appendChild(allDone);
    var report = document.createElement("h3");
    report.textContent = "Your final score is " + finalScore;
    report.className = "last-page-text";
    lastPageDiv.appendChild(report);
    var entryDiv = document.createElement("div");
    entryDiv.className = "submit-container";
    questionsEl.appendChild(entryDiv);
    var enterInitials = document.createElement("h3");
    enterInitials.textContent = "Enter initials";
    enterInitials.className = "last-page-text";
    entryDiv.appendChild(enterInitials);
    var textArea = document.createElement("textarea");
    textArea.className = "text-area";
    entryDiv.appendChild(textArea);
    var button = document.createElement("input");
    button.type = "button";
    button.id = "submit";
    button.value = "Submit";
    button.className = "btn submit-btn";
    entryDiv.appendChild(button);
  });
};

/*compares user answer to hard coded answer and returns correct/incorrect and score value*/
let answerCounter = 0;
var correctAnswer = function () {
  var answer1 = questions[currentQuestionIndex].answers[0].correct;
  var btn1 = document.querySelector("#btn-1");
  btn1.onclick = function () {
    let clickedBtn1 = true;
    if (clickedBtn1 === true && answer1 === true) {
      console.log("Correct");
      displayCorrect();
      answerCounter++;
    } else {
      console.log("Incorrect");
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  var answer2 = questions[currentQuestionIndex].answers[1].correct;
  var btn2 = document.querySelector("#btn-2");
  btn2.onclick = function () {
    let clickedBtn2 = true;
    if (clickedBtn2 === true && answer2 === true) {
      console.log("Correct");
      displayCorrect();
      answerCounter++;
    } else {
      console.log("Incorrect");
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  var answer3 = questions[currentQuestionIndex].answers[2].correct;
  var btn3 = document.querySelector("#btn-3");
  btn3.onclick = function () {
    let clickedBtn3 = true;
    if (clickedBtn3 === true && answer3 === true) {
      console.log("Correct");
      displayCorrect();
      answerCounter++;
    } else {
      console.log("Incorrect");
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
  var answer4 = questions[currentQuestionIndex].answers[3].correct;
  var btn4 = document.querySelector("#btn-4");
  btn4.onclick = function () {
    let clickedBtn4 = true;
    if (clickedBtn4 === true && answer4 === true) {
      console.log("Correct");
      displayCorrect();
      answerCounter++;
    } else {
      console.log("Incorrect");
      displayIncorrect();
      timeLeft -= 10;
      answerCounter++;
    }
  };
};
var displayCorrect = function () {
  var correctText = document.createElement("h2");
  correctText.id = "correct";
  correctText.className = "correct";
  correctText.textContent = "Correct!!";
  correctWrong.appendChild(correctText);
  setTimeout(function () {
    correctText.classList.add("hidden");
  }, 1000);
};

var displayIncorrect = function () {
  var incorrectText = document.createElement("h2");
  incorrectText.id = "incorrect";
  incorrectText.className = "incorrect";
  incorrectText.textContent = "Incorrect!!";
  correctWrong.appendChild(incorrectText);
  setTimeout(function () {
    incorrectText.classList.add("hidden");
  }, 1000);
};

var endQuiz = function () {
  if (answerCounter === questions.length) {
    console.log("Game over");
    var buttonDiv = document.querySelector("#button-div");
    var quiz = document.querySelector("#quiz");
    questionsEl.removeChild(quiz);
    var btn1 = document.querySelector("#btn-1");
    buttonDiv.removeChild(btn1);
    var btn2 = document.querySelector("#btn-2");
    buttonDiv.removeChild(btn2);
    var btn3 = document.querySelector("#btn-3");
    buttonDiv.removeChild(btn3);
    var btn4 = document.querySelector("#btn-4");
    buttonDiv.removeChild(btn4);
  }
};

startQuizBtn.addEventListener("click", beginQuiz);

var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: [
      { text: "1. strings", correct: false },
      { text: "2. booleans", correct: false },
      { text: "3. alerts", correct: true },
      { text: "4. numbers", correct: false },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed with________.",
    answers: [
      { text: "1. quotes", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. parenthesis", correct: true },
      { text: "4. square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store________.",
    answers: [
      { text: "1. numbers & strings", correct: false },
      { text: "2. other arrays", correct: false },
      { text: "3. booleans", correct: false },
      { text: "4. all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within______ when being assigned to variables",
    answers: [
      { text: "1. commas", correct: false },
      { text: "2. curly brackets", correct: false },
      { text: "3. quotes", correct: true },
      { text: "4. parenthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used in during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "1. JavaScript", correct: false },
      { text: "2. terminal/bash", correct: false },
      { text: "3. for loops", correct: false },
      { text: "4. console.log", correct: true },
    ],
  },
];
