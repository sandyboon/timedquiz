'use strict';

let allTheContent = {
  quizDescription:
    'Try to answer the following code related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!',
  welcomeHeading: 'Coding Quiz Challenge',
  startQuiz: 'Start Quiz',
  allDone: 'All Done!',
  enterYourInitials: 'Enter initials : ',
  finalScoreMessage: 'Your final score is ',
  submitInitialButton: 'Submit',
  highScoresHeading: 'Highscores',
  goBackButton: 'Go Back',
  clearScoresButton: 'Clear HighScores'
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
  question: 'How to stop the timer set by using setInterval() function?',
  answerchoices: [
    '1. clear',
    '2. clearInterval',
    '3. stopTime',
    '4. resetInterval'
  ],
  correctAnswer: '2. clearInterval'
};

let quizQuestion4 = {
  question: 'What is the top level global object in the browser',
  answerchoices: [
    '1. window',
    '2. The current function being executed',
    '3. Undetermined',
    '4. The current Object in use'
  ],
  correctAnswer: '1. window'
};

let quizQuestion5 = {
  question: 'Which of the following is not a Javasctipt framework/library',
  answerchoices: ['1. Jquery', '2. ReactJS', '3. Bootstrap', '4. Angular'],
  correctAnswer: '3. Bootstrap'
};

let quizQuestion6 = {
  question: "It is possible to iterate though an Object's keys ",
  answerchoices: ['1. True', '2.False'],
  correctAnswer: '1. True'
};

let quizQuestion7 = {
  question: 'Which is NOT a Javscript version ',
  answerchoices: ['1. ES5', '2. ES6', '3. JS 2018'],
  correctAnswer: '3. JS 2018'
};

let quizQuestion8 = {
  question:
    'Which of the following methods can be used to select a DOM element?',
  answerchoices: [
    '1. getElementById',
    '2. getElementByClass',
    '3. querySelector',
    '4. All of the above'
  ],
  correctAnswer: '4. All of the above'
};

(function() {
  quizQuestionArray.push(quizQuestion1);
  quizQuestionArray.push(quizQuestion2);
  quizQuestionArray.push(quizQuestion3);
  quizQuestionArray.push(quizQuestion4);
  quizQuestionArray.push(quizQuestion5);
  quizQuestionArray.push(quizQuestion6);
  quizQuestionArray.push(quizQuestion7);
  quizQuestionArray.push(quizQuestion8);
})();
