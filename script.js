'use strict';

import bootStrapHelper from './bootstrapHelper.js';

//Global initializations
let welcomeHeading = document.getElementById('pageHeading');
let timerSpan = document.getElementById('timer');
let mainContentBlock = document.getElementById('mainContent');

let initWelcomeBlock = function init() {
    welcomeHeading.textContent = 'Coding Quiz Challenge';
    //reset the timer text
    timerSpan.textContent = 'Time : 0';
    //add a descriptive paragraph about the quiz, scoring and timer rules.
    const quizDescription = document.createElement('p');
    quizDescription.textContent = 'Try to answer the following code related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!';
    const quizDescriptionRow = bootStrapHelper.getBootStrapGridRow('quizDescRow', 'div').appendChild(bootStrapHelper.getootStrapGridColumn('quizDescCol', 'div');
    const quizDescriptionColumn = bootStrapHelper.getootStrapGridColumn('quizDescCol', 'div');
    mainContentBlock.appendChild(quizDescriptionRow);
};

initWelcomeBlock();
