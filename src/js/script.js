// Get all the elements from the DOM.
const textNameWord = document.getElementById('taskManager');
const dateManager = document.getElementById('dateManager');
const incompletedNameBox = document.getElementById('taskNameIncompletedBox');
const incompletedDateBox = document.getElementById('taskDateIncompletedBox');
const completedBox = document.getElementById('taskCompletedBox');
const incompletedNewRow = document.getElementById('newRowIncompletedBox');
const mainTitle = document.getElementById('mainTitle');
const btnAction = document.getElementById('btnAction');

// Main function, Upload the current value into the DOM.
function uploadTask() {
  if (textNameWord.value !== '' && dateManager.value) {
    const newTaskNameList = document.createElement('ul');
    const newTaskDateList = document.createElement('ul');
    const newTaskNameListItem = document.createElement('li');
    const newTaskDateListItem = document.createElement('li');
    newTaskNameList.appendChild(newTaskNameListItem);
    newTaskDateList.appendChild(newTaskDateListItem);
    newTaskNameListItem.innerHTML = textNameWord.value;
    newTaskDateListItem.innerHTML = dateManager.value;
    newTaskNameList.setAttribute('class', 'incompletedBlock');
    newTaskDateList.setAttribute('class', 'incompletedBlock');
    incompletedNewRow.appendChild(newTaskNameList);
    incompletedNewRow.appendChild(newTaskDateList);
    textNameWord.value = '';
    dateManager.value = '';
    textNameWord.style.border = ('');
    dateManager.style.border = ('');
    mainTitle.innerHTML = 'Successful Task Registration.';
  } else if (textNameWord.value === '' && !dateManager.value) {
    textNameWord.style.border = ('5px solid red');
    dateManager.style.border = ('5px solid red');
    mainTitle.innerHTML = 'Error, please complete the following information';
  } else if (textNameWord.value && !dateManager.value) {
    textNameWord.style.border = ('');
    dateManager.style.border = ('5px solid red');
    mainTitle.innerHTML = 'Error, please complete the following information';
  } else if (!textNameWord.value && dateManager.value) {
    textNameWord.style.border = ('5px solid red');
    dateManager.style.border = ('');
    mainTitle.innerHTML = 'Error, please complete the following information';
  }
}

// Set the Event to the BTN to run the Function.
btnAction.addEventListener('click', uploadTask);
