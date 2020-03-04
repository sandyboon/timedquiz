('use strict');
//Global initializations
const welcomeHeading = document.getElementById('contentHeading');
const timerSpan = document.getElementById('timer');
const mainContentBlock = document.getElementById('mainContent');
const mainContainer = document.getElementById('mainContainer');

let initWelcomeBlock = function init() {
  welcomeHeading.textContent = 'Coding Quiz Challenge';
  //reset the timer text
  timerSpan.textContent = 'Time : 0';
  //add a descriptive paragraph about the quiz, scoring and timer rules.
  const quizDescription = document.createElement('p');
  quizDescription.textContent = allTheContent.quizDescription;
  const quizDescriptionRow = bootStrapHelper.getBootStrapGridRow(
    'quizDescRow',
    'div'
  );
  const quizDescCol = bootStrapHelper.getootStrapGridColumn(
    'quizDescCol',
    'div',
    'col mx-auto'
  );
  quizDescCol.appendChild(quizDescription);
  quizDescriptionRow.appendChild(quizDescCol);
  console.log(quizDescriptionRow);
  mainContainer.appendChild(quizDescriptionRow);
};

initWelcomeBlock();
