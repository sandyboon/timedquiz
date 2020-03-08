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

(function() {
  quizQuestionArray.push(quizQuestion1);
  quizQuestionArray.push(quizQuestion2);
  quizQuestionArray.push(quizQuestion3);
  quizQuestionArray.push(quizQuestion4);
})();
