
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
    //Create the elements that are going to be in the DOM.
    //Elements that are going to be Created after Event.
    const newTaskNameList = document.createElement('ul');
    const newTaskDateList = document.createElement('ul');
    const newTaskNameListItem = document.createElement('li');
    const newTaskDateListItem = document.createElement('li');
    const checkBoxList = document.createElement('input');

    //Information that is going to be inside the DOM Elements.
    newTaskNameList.appendChild(newTaskNameListItem);
    newTaskDateList.appendChild(newTaskDateListItem);
    newTaskDateList.appendChild(checkBoxList);
    newTaskNameListItem.innerHTML = textNameWord.value;
    newTaskDateListItem.innerHTML = dateManager.value;

    //Set classes for the DOM Elements
    newTaskNameList.setAttribute('class', 'incompletedBlock');
    newTaskDateList.setAttribute('class', 'incompletedBlock');
    checkBoxList.setAttribute('type', 'checkbox');
    checkBoxList.setAttribute('class', 'checkBoxStatus');

    //Include the information within the DOM Elements into the respective Lists or Rows.
    incompletedNewRow.appendChild(newTaskNameList);
    incompletedNewRow.appendChild(newTaskDateList);

    //Create an Array.
    const ObjectArray = [];

    //Create an Object with information in it.
    const MainArray = ({ TaskName: textNameWord.value, DateData: dateManager.value, Completed: false });

    //Add the Object into the Array.
    ObjectArray.push(MainArray);
    console.log(ObjectArray);

    //Apply styles to the Incompleted Rows.
    newTaskNameList.style.color = ('red');
    newTaskDateList.style.color = ('red');

    //Clear all the Set information for new options.
    textNameWord.value = '';
    dateManager.value = '';
    textNameWord.style.border = ('');
    dateManager.style.border = ('');

    //Message that will be displayed as Task is successfully registered.
    mainTitle.innerHTML = 'Successful Task Registration.';
    function changeStatus() {
      if (checkBoxList.checked) {

        //Will change Status from Object.
        MainArray.Completed = true;
        console.log(ObjectArray);

        //Set classes to DOM Elements.
        newTaskNameList.setAttribute('class', 'completedBlock');
        newTaskDateList.setAttribute('class', 'completedBlock');

        //Information included into DOM Elements.
        completedNewRow.appendChild(newTaskNameList);
        completedNewRow.appendChild(newTaskDateList);

        //DOM Elements Styles.
        newTaskNameList.style.color = ('green');
        newTaskDateList.style.color = ('green');
      } else if (!checkBoxList.checked) {

        //Will change Status from Object.
        MainArray.Completed = false;
        console.log(ObjectArray);

        //Set classes to DOM Elements.
        newTaskNameList.setAttribute('class', 'incompletedBlock');
        newTaskDateList.setAttribute('class', 'incompletedBlock');

        //Information included into DOM Elements.
        incompletedNewRow.appendChild(newTaskNameList);
        incompletedNewRow.appendChild(newTaskDateList);

        //DOM Elements Styles.
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
