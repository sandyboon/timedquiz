'use strict';

let allTheContent = {
  quizDescription:
    'Try to answer the following code related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!',
  welcomeHeading: 'Coding Quiz Challenge',
  startQuiz: 'Start Quiz'
};

//quizQuestion array. We will push questions later
let quizQuestionArray = [];

//Quiz Questions described here
let quizQuestion1 = {
  id: 1,
  question: 'Commonly used data types do NOT include: ',
  answerchoices: ['strings', 'booleans', 'alerts', 'numbers'],
  correctAnswer: 'alerts'
};

let quizQuestion2 = {
  id: 2,
  question: 'Inside which HTML element do we put the JavaScript?',
  answerchoices: ['<script>', '<scripting>', '<js>', '<javascript>'],
  correctAnswer: '<script>'
};

let quizQuestion3 = {
  id: 3,
  question: 'Inside which HTML element do we put the JavaScript?',
  answerchoices: ['<script>', '<scripting>', '<js>', '<javascript>'],
  correctAnswer: '<script>'
};

(function() {
  quizQuestionArray.push(quizQuestion1);
  quizQuestionArray.push(quizQuestion2);
  quizQuestionArray.push(quizQuestion3);
})();
