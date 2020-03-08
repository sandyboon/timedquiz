('use strict');
//Global initializations
const contentHeading = document.getElementById('contentHeading');
const contentHeadnigRow = document.getElementById('contentHeadingRow');
const timerSpan = document.getElementById('timer');
const mainContentBlock = document.getElementById('mainContent');
const mainContainer = document.getElementById('mainContainer');
//IDs defined globally for easy refrences
const startQuizButtonId = 'quizStartBtn';
const quizDescContainerColumnId = 'quizDescContainerColumn';
const answerChoiceId = 'answerchoice'; //'C'.concat(index).concat(questionObj.id);

let initWelcomeBlock = function init() {
  createIntroductionBlock();

  //define behaviour for startquiz button click
  document.getElementById('quizStartBtn').addEventListener('click', startQuiz);
};

function startQuiz() {
  //Start the clock at 75 seconds.
  timerSpan.textContent = 'Time : 75';
  //start the timer
  let quizTimer = setInterval(decrementClockByOneSecond, 1000);

  //display the first question in the quiz
  displayQuestions();
}

function displayQuestions() {
  //set the content heading to h2 now. Questions will be places there.
  contentHeading.setAttribute('class', 'h3');
  let questionColumn = document.getElementById('contentHeadingCol');
  questionColumn.setAttribute('class', 'col-4');
  //remove the start quiz button frmo DOM
  document.getElementById(startQuizButtonId).remove();
  //empty the quizDescContainerColumn
  document.getElementById(quizDescContainerColumnId).innerHTML = '';
  displayQuestion(quizQuestionArray[0], 0);
}

function displayQuestion(questionObj, currentQuestionIndex) {
  contentHeading.textContent = questionObj.question;
  // let quizDescContainerColumn
  questionObj.answerchoices.forEach(element => {
    displayQuestionOnDom(currentQuestionIndex, questionObj, element);
  });

  document.querySelectorAll('#'.concat(answerChoiceId)).forEach(element => {
    // alert('choice');
    element.addEventListener('click', evaluateUserResponse);
  });
  // .getElementById(answerChoiceId)
  // .addEventListener('click', evaluateUserResponse);
}

function evaluateUserResponse(event) {
  //draw a horizontal line
  //but first check if it is already there
  let horizontalLine = document.getElementById('responseLine');
  let feedbackParagraph = document.getElementById('feedbackParagraph');
  if (feedbackParagraph !== null && feedbackParagraph.textContent !== '') {
    //already provided feedback
    return;
  }

  if (horizontalLine === null) {
    horizontalLine = bootStrapHelper.createDomElement('responseLine', 'hr');
    document
      .getElementById(quizDescContainerColumnId)
      .appendChild(horizontalLine);
  }
  feedbackParagraph = bootStrapHelper.createDomElement(
    'feedbackParagraph',
    'p'
  );
  feedbackParagraph.setAttribute('class', 'font-italic');
  let currentQuestionIndex = parseInt(
    event.target.getAttribute('data-questionindex')
  );

  if (event.target.getAttribute('data-correctanswer') === 'false') {
    feedbackParagraph.textContent = 'Wrong!';
    decrementClockByOneSecond();
  } else {
    feedbackParagraph.textContent = 'Correct!!';
  }
  document
    .getElementById(quizDescContainerColumnId)
    .appendChild(feedbackParagraph);
  // move to the next question IF
  //1. Timer is not 0 && max-index has not been reached yet
  let nextQuestionIndex = currentQuestionIndex + 1;
  if (!isQuizOver(nextQuestionIndex)) {
    //put some delay so user can see the response before moving on
    setInterval(() => {
      document.getElementById(quizDescContainerColumnId).innerHTML = '';
      displayQuestion(quizQuestionArray[nextQuestionIndex], nextQuestionIndex);
    }, 3000);
    //get the next question
  } else {
    //show the score and save details
    alert('quiz is over');
  }
}

function showScore() {}

function isQuizOver(nextQuestionIndex) {
  return (
    nextQuestionIndex >= quizQuestionArray.length ||
    getCurrentTimeOnTheClock() <= 0
  );
}

function displayQuestionOnDom(currentQuestionIndex, questionObj, element) {
  let bootStrapRow = bootStrapHelper.getBootStrapGridRow('choices', 'div');
  let bootStrapCol = bootStrapHelper.getootStrapGridColumn(
    'choice',
    'div',
    'align-self-end'
  );

  let answerChoice = bootStrapHelper.getBootStrapBadge(
    answerChoiceId,
    'badge-pill',
    'badge-info mt-2'
  );
  answerChoice.textContent = element;
  //is it the correct answer ?
  let correctAnswer = element === questionObj.correctAnswer ? 'true' : 'false';
  answerChoice.setAttribute('data-correctanswer', correctAnswer);
  answerChoice.setAttribute('data-questionIndex', currentQuestionIndex);
  bootStrapCol.appendChild(answerChoice);
  bootStrapRow.appendChild(bootStrapCol);
  document.getElementById(quizDescContainerColumnId).appendChild(bootStrapRow);
}

//define click behaviour for answer choices

function decrementClockByOneSecond() {
  let timerTextContent = timerSpan.textContent;
  let timeElapsed = timerTextContent.substr('Time : '.length);
  timeElapsed--;
  timerSpan.textContent = 'Time : ' + timeElapsed;
}

function getCurrentTimeOnTheClock() {
  let timerTextContent = timerSpan.textContent;
  let timeElapsed = timerTextContent.substr('Time : '.length);
  return parseInt(timeElapsed);
}

function createIntroductionBlock() {
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
    quizDescContainerColumnId,
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
    startQuizButtonId,
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
  mainContentBlock.appendChild(quizDescriptionRow);
}

function endQuiz() {
  //stop the time
  //display score etc etx
}

initWelcomeBlock();
