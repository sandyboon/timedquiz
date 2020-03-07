('use strict');
//Global initializations
const contentHeading = document.getElementById('contentHeading');
const contentHeadnigRow = document.getElementById('contentHeadingRow');
const timerSpan = document.getElementById('timer');
const mainContentBlock = document.getElementById('mainContent');
const mainContainer = document.getElementById('mainContainer');

let initWelcomeBlock = function init() {
  contentHeading.setAttribute('class', 'h1 text-center');
  contentHeading.textContent = 'Coding Quiz Challenge';
  //reset the timer text
  timerSpan.textContent = 'Time : 0';
  //add a descriptive paragraph about the quiz, scoring and timer rules.
  const quizDescription = document.createElement('p');
  quizDescription.textContent = allTheContent.quizDescription;
  const quizDescriptionRow = bootStrapHelper.getBootStrapGridRow(
    'quizDescRow',
    'div',
    'justify-content-center'
  );

  const quizDescCol = bootStrapHelper.getootStrapGridColumn(
    'quizDescCol',
    'div',
    'col-4' //mx-auto'
  );
  const quizDescContainerRow1 = bootStrapHelper.getBootStrapGridRow(
    'quizDescContainerRow1',
    'div',
    'justify-content-center'
  );
  const quizDescContainerColumn = bootStrapHelper.getootStrapGridColumn(
    'quizDescContainerColumn',
    'div',
    'col'
  );
  quizDescContainerColumn.appendChild(quizDescription);
  quizDescContainerRow1.appendChild(quizDescContainerColumn);

  const quizDescContainerRow2 = bootStrapHelper.getBootStrapGridRow(
    'quizDescContainerRow2',
    'div',
    'justify-content-center'
  );
  //add the start quiz button
  const quizStartBtnColumn = bootStrapHelper.getootStrapGridColumn(
    'quizStartBtnCol',
    'div',
    'col-6'
  );
  const startQuizButton = bootStrapHelper.getBootStrapButton(
    'quizStartBtn',
    'btn-sm',
    null,
    null
  );
  startQuizButton.textContent = allTheContent.startQuiz;
  quizStartBtnColumn.appendChild(startQuizButton);
  quizDescContainerRow2.appendChild(quizStartBtnColumn);

  quizDescCol.appendChild(quizDescContainerRow1);
  quizDescCol.appendChild(quizDescContainerRow2);

  quizDescriptionRow.appendChild(quizDescCol);
  mainContainer.appendChild(quizDescriptionRow);
};

//define behaviour for startquiz button click

initWelcomeBlock();
