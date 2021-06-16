"use strict";

/*querySelector to control HTML elements in JS*/
var initial = document.querySelector("#initial");
var startQuizBtn = document.querySelector("#start-btn");
var questionsEl = document.querySelector("#question-element");
var questionButtons = document.querySelector("#answer-buttons");
var quiz = document.querySelector("#quiz");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var correct = document.querySelector("#correct");
var incorrect = document.querySelector("#incorrect");

var currentQuestionIndex = 0;
var time = 70;

/*Start quiz button is pressed - what happens...*/
var beginQuiz = function () {
  /*hide welcome screen*/
  initial.classList.add("hidden");
  /*unhide initial question and answers*/
  questionsEl.classList.remove("hidden");
  quiz.textContent = questions[0].question;
  quiz.classList.add("title");
  btn1.textContent = questions[0].answers[0].text;
  btn2.textContent = questions[0].answers[1].text;
  btn3.textContent = questions[0].answers[2].text;
  btn4.textContent = questions[0].answers[3].text;
  nextQuestions();
};
/*loads next set of questions*/
var nextQuestions = function () {
  questionButtons.addEventListener("click", function () {
    for (let i = currentQuestionIndex; i < questions.length; i++) {
      quiz.textContent = questions[i].question;
      quiz.classList.add("title");
      btn1.textContent = questions[i].answers[0].text;
      btn2.textContent = questions[i].answers[1].text;
      btn3.textContent = questions[i].answers[2].text;
      btn4.textContent = questions[i].answers[3].text;
      correctAnswer();
      correct.classList.add("hidden");
      incorrect.classList.add("hidden");
      currentQuestionIndex++;

      return;
    }
  });
};

/*compares user answer to hard coded answer and returns correct/incorrect and score value*/
var correctAnswer = function () {
  var answer1 = questions[currentQuestionIndex].answers[0].correct;
  btn1.onclick = function () {
    let clickedBtn1 = true;
    if (clickedBtn1 === true && answer1 === true) {
      console.log("Correct");
      correct.classList.remove("hidden");
    } else {
      console.log("Incorrect");
      incorrect.classList.remove("hidden");
      time -= 10;
    }
  };
  var answer2 = questions[currentQuestionIndex].answers[1].correct;
  btn2.onclick = function () {
    let clickedBtn2 = true;
    if (clickedBtn2 === true && answer2 === true) {
      console.log("Correct");
      correct.classList.remove("hidden");
    } else {
      console.log("Incorrect");
      incorrect.classList.remove("hidden");
      time -= 10;
    }
  };
  var answer3 = questions[currentQuestionIndex].answers[2].correct;
  btn3.onclick = function () {
    let clickedBtn3 = true;
    if (clickedBtn3 === true && answer3 === true) {
      console.log("Correct");
      correct.classList.remove("hidden");
    } else {
      console.log("Incorrect");
      incorrect.classList.remove("hidden");
      time -= 10;
    }
  };
  var answer4 = questions[currentQuestionIndex].answers[3].correct;
  btn4.onclick = function () {
    let clickedBtn4 = true;
    if (clickedBtn4 === true && answer4 === true) {
      console.log("Correct");
      correct.classList.remove("hidden");
    } else {
      console.log("Incorrect");
      incorrect.classList.remove("hidden");
      time -= 10;
    }
  };
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
      { text: "1. numbers and strings", correct: false },
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
