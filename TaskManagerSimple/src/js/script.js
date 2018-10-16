
// Get all the elements from the DOM.
const textNameWord = document.getElementById('taskManager');
const dateManager = document.getElementById('dateManager');
const incompletedNameBox = document.getElementById('taskNameIncompletedBox');
const incompletedDateBox = document.getElementById('taskDateIncompletedBox');
const completedBox = document.getElementById('taskCompletedBox');
const incompletedNewRow = document.getElementById('newRowIncompletedBox');
const completedNewRow = document.getElementById('newRowCompletedBox');
const mainTitle = document.getElementById('mainTitle');
const btnAction = document.getElementById('btnAction');

// Main function, Upload the current value into the DOM.
function uploadTask() {
  if (textNameWord.value !== '' && dateManager.value) {
    const newTaskNameList = document.createElement('ul');
    const newTaskDateList = document.createElement('ul');
    const newTaskNameListItem = document.createElement('li');
    const newTaskDateListItem = document.createElement('li');
    const checkBoxList = document.createElement('input');
    newTaskNameList.appendChild(newTaskNameListItem);
    newTaskDateList.appendChild(newTaskDateListItem);
    newTaskDateList.appendChild(checkBoxList);
    newTaskNameListItem.innerHTML = textNameWord.value;
    newTaskDateListItem.innerHTML = dateManager.value;
    newTaskNameList.setAttribute('class', 'incompletedBlock');
    newTaskDateList.setAttribute('class', 'incompletedBlock');
    checkBoxList.setAttribute('type', 'checkbox');
    checkBoxList.setAttribute('class', 'checkBoxStatus');
    incompletedNewRow.appendChild(newTaskNameList);
    incompletedNewRow.appendChild(newTaskDateList);
    const ObjectArray = [];
    const MainArray = ({ TaskName: textNameWord.value, DateData: dateManager.value, Completed: false });
    ObjectArray.push(MainArray);
    console.log(ObjectArray);
    newTaskNameList.style.color = ('red');
    newTaskDateList.style.color = ('red');
    textNameWord.value = '';
    dateManager.value = '';
    textNameWord.style.border = ('');
    dateManager.style.border = ('');
    mainTitle.innerHTML = 'Successful Task Registration.';
    function changeStatus() {
      if (checkBoxList.checked) {
        MainArray.Completed = true;
        console.log(ObjectArray);
        newTaskNameList.setAttribute('class', 'completedBlock');
        newTaskDateList.setAttribute('class', 'completedBlock');
        completedNewRow.appendChild(newTaskNameList);
        completedNewRow.appendChild(newTaskDateList);
        newTaskNameList.style.color = ('green');
        newTaskDateList.style.color = ('green');
      } else if (!checkBoxList.checked) {
        MainArray.Completed = false;
        console.log(ObjectArray);
        newTaskNameList.setAttribute('class', 'incompletedBlock');
        newTaskDateList.setAttribute('class', 'incompletedBlock');
        incompletedNewRow.appendChild(newTaskNameList);
        incompletedNewRow.appendChild(newTaskDateList);
        newTaskNameList.style.color = ('red');
        newTaskDateList.style.color = ('red');
      }
    }
    checkBoxList.addEventListener('click', changeStatus);
  } else if (textNameWord.value === '' && !dateManager.value) {
    textNameWord.style.border = ('5px solid red');
    dateManager.style.border = ('5px solid red');
    mainTitle.innerHTML = 'Error, please complete the following information.';
  } else if (textNameWord.value && !dateManager.value) {
    textNameWord.style.border = ('');
    dateManager.style.border = ('5px solid red');
    mainTitle.innerHTML = 'Error, please complete the following information.';
  } else if (!textNameWord.value && dateManager.value) {
    textNameWord.style.border = ('5px solid red');
    dateManager.style.border = ('');
    mainTitle.innerHTML = 'Error, please complete the following information.';
  }
}

// Set the Event to the BTN to run the Function.
btnAction.addEventListener('click', uploadTask);
