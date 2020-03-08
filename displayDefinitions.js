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
  question: 'Commonly used data types do NOT include: ',
  answerchoices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
  correctAnswer: '3. alerts'
};

let quizQuestion2 = {
  question: 'Inside which HTML element do we put the JavaScript?',
  answerchoices: [
    '1. <script>',
    '2. <scripting>',
    '3. <js>',
    '4. <javascript>'
  ],
  correctAnswer: '1. <script>'
};

let quizQuestion3 = {
  question: 'Inside which HTML element do we put the JavaScript?',
  answerchoices: [
    '1. <script>',
    '2. <scripting>',
    '3. <js>',
    '4. <javascript>'
  ],
  correctAnswer: '1. <script>'
};

(function() {
  quizQuestionArray.push(quizQuestion1);
  quizQuestionArray.push(quizQuestion2);
  quizQuestionArray.push(quizQuestion3);
})();
