
// Get all the elements from the DOM.
const textNameWord = document.getElementById('taskManager');
const dateManager = document.getElementById('dateManager');
const incompletedNewRow = document.getElementById('newRowIncompletedBox');
const completedNewRow = document.getElementById('newRowCompletedBox');
const mainTitle = document.getElementById('mainTitle');
const btnAction = document.getElementById('btnAction');

// Create an Array.
// Save the New Objects into this Global Array.
const ObjectCompletedArray = [];
console.log(ObjectCompletedArray);

// Main function, Upload the current value into the DOM.
function uploadTask() {
  if (textNameWord.value !== '' && dateManager.value) {
    // Create the elements that are going to be in the DOM.
    // Elements that are going to be Created after Event.
    const newTaskNameList = document.createElement('ul');
    const newTaskDateList = document.createElement('ul');
    const newTaskNameListItem = document.createElement('li');
    const newTaskDateListItem = document.createElement('li');
    const checkBoxList = document.createElement('input');

    // Information that is going to be inside the DOM Elements.
    newTaskNameList.appendChild(newTaskNameListItem);
    newTaskDateList.appendChild(newTaskDateListItem);
    newTaskDateList.appendChild(checkBoxList);
    newTaskNameListItem.innerHTML = textNameWord.value;
    newTaskDateListItem.innerHTML = dateManager.value;

    // Set classes for the DOM Elements
    newTaskNameList.setAttribute('class', 'incompletedBlock');
    newTaskDateList.setAttribute('class', 'incompletedBlock');
    checkBoxList.setAttribute('type', 'checkbox');
    checkBoxList.setAttribute('class', 'checkBoxStatus');

    // Include the information within the DOM Elements into the respective Lists or Rows.
    incompletedNewRow.appendChild(newTaskNameList);
    incompletedNewRow.appendChild(newTaskDateList);

    // Create an Object with information in it.
    const MainArray = {
      TaskName: textNameWord.value,
      DateData: dateManager.value,
      Completed: false,
    };
    // Add the Object into the Array.
    ObjectCompletedArray.push(MainArray);
    console.log(ObjectCompletedArray);
    // Apply styles to the Incompleted Rows.
    newTaskNameList.style.color = ('red');
    newTaskDateList.style.color = ('red');

    // Clear all the Set information for new options.
    textNameWord.value = '';
    dateManager.value = '';
    textNameWord.style.border = ('');
    dateManager.style.border = ('');

    // Message that will be displayed as Task is successfully registered.
    mainTitle.innerHTML = 'Successful Task Registration.';
    /* eslint-disable-next-line */
    function changeStatus() {
      if (checkBoxList.checked) {
        // Will change Status from Object.
        MainArray.Completed = true;
        console.log(ObjectCompletedArray);
        // Set classes to DOM Elements.
        newTaskNameList.setAttribute('class', 'completedBlock');
        newTaskDateList.setAttribute('class', 'completedBlock');

        // Information included into DOM Elements.
        completedNewRow.appendChild(newTaskNameList);
        completedNewRow.appendChild(newTaskDateList);

        // DOM Elements Styles.
        newTaskNameList.style.color = ('green');
        newTaskDateList.style.color = ('green');
      } else if (!checkBoxList.checked) {
        // Will change Status from Object.
        MainArray.Completed = false;
        console.log(ObjectCompletedArray);
        // Set classes to DOM Elements.
        newTaskNameList.setAttribute('class', 'incompletedBlock');
        newTaskDateList.setAttribute('class', 'incompletedBlock');

        // Information included into DOM Elements.
        incompletedNewRow.appendChild(newTaskNameList);
        incompletedNewRow.appendChild(newTaskDateList);

        // DOM Elements Styles.
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

// dataReceived(): This event will be active as the request gets the Data from
// the JSON.
function dataReceived(event) {
  const response = event.target.response;
  for (const element of response) {
    // Create the elements that are going to be in the DOM.
    // Elements that are going to be Created after Event.
    const newTaskNameList = document.createElement('ul');
    const newTaskDateList = document.createElement('ul');
    const newTaskNameListItem = document.createElement('li');
    const newTaskDateListItem = document.createElement('li');
    const checkBoxList = document.createElement('input');

    // Add the Element information on the List Item.
    newTaskNameListItem.innerText = element.TaskName;
    newTaskDateListItem.innerText = element.DateData;

    // Set Attributes to the CheckBoxes.
    checkBoxList.setAttribute('type', 'checkbox');
    checkBoxList.setAttribute('class', 'checkBoxStatus');

    // Information that is going to be inside the DOM Elements.
    newTaskNameList.appendChild(newTaskNameListItem);
    newTaskDateList.appendChild(newTaskDateListItem);
    newTaskDateList.appendChild(checkBoxList);

    // Check If every element from the JSON is completed.
    if (!element.Completed) {
      // Add the Object into the Array.
      ObjectCompletedArray.push(element);
      // Set classes for the DOM Elements
      newTaskNameList.setAttribute('class', 'incompletedBlock');
      newTaskDateList.setAttribute('class', 'incompletedBlock');

      // Include the information within the DOM Elements into the respective Lists or Rows.
      incompletedNewRow.appendChild(newTaskNameList);
      incompletedNewRow.appendChild(newTaskDateList);

      // Apply styles to the Incompleted Rows.
      newTaskNameList.style.color = ('red');
      newTaskDateList.style.color = ('red');
    // Check if every element from the JSON is not completed.
    } else if (element.Completed) {
      // Add the Object into the Array.
      ObjectCompletedArray.push(element);
      // Set classes for the DOM Elements
      newTaskNameList.setAttribute('class', 'completedBlock');
      newTaskDateList.setAttribute('class', 'completedBlock');

      // Include the information within the DOM Elements into the respective Lists or Rows.
      completedNewRow.appendChild(newTaskNameList);
      completedNewRow.appendChild(newTaskDateList);

      // Set the Default Attribute for those Elements that have not been completed.
      checkBoxList.setAttribute('checked', 'checked');

      // Apply styles to the Incompleted Rows.
      newTaskNameList.style.color = ('green');
      newTaskDateList.style.color = ('green');
    }
    // This Function will change the status from the JSON Elements.
    // From completed to not completed.
    /* eslint-disable-next-line */
    function changeStatus() {
      if (checkBoxList.checked) {
        // Will change Status from Object.
        element.Completed = true;
        console.log(ObjectCompletedArray);
        // Set classes for the DOM Elements
        newTaskNameList.setAttribute('class', 'completedBlock');
        newTaskDateList.setAttribute('class', 'completedBlock');

        // Include the information within the DOM Elements into the respective Lists or Rows.
        completedNewRow.appendChild(newTaskNameList);
        completedNewRow.appendChild(newTaskDateList);

        // Apply styles to the Incompleted Rows.
        newTaskNameList.style.color = ('green');
        newTaskDateList.style.color = ('green');
      } else if (!checkBoxList.checked) {
        // Will change Status from Object.
        element.Completed = false;
        console.log(ObjectCompletedArray);
        // Set classes for the DOM Elements
        newTaskNameList.setAttribute('class', 'incompletedBlock');
        newTaskDateList.setAttribute('class', 'incompletedBlock');

        // Include the information within the DOM Elements into the respective Lists or Rows.
        incompletedNewRow.appendChild(newTaskNameList);
        incompletedNewRow.appendChild(newTaskDateList);

        // Apply styles to the Incompleted Rows.
        newTaskNameList.style.color = ('red');
        newTaskDateList.style.color = ('red');
      }
    }
    // Set the EventListener to the Checkbox.
    checkBoxList.addEventListener('click', changeStatus);
  }
}

// getElements(): This will create a Request to get the information from the JSON.
function getElements() {
  // Create a XMLHttpRequest.
  const request = new XMLHttpRequest();
  // Run the Function DataReceived as the Page Loads.
  request.addEventListener('load', dataReceived);
  // Type of response the system is waiting.
  request.responseType = 'json';
  // Starts the request.
  // Set the Path to get the JSON.
  request.open('GET', '../json/data.json');
  // Sent the request.
  request.send();
}

// Set the Event to the Load Window to run the Function.
window.addEventListener('load', getElements);

// Set the Event to the BTN to run the Function.
btnAction.addEventListener('click', uploadTask);

const resumeBtnTasks = document.getElementById('resumeBtn');
const resumeBtnTasksWrapper = document.getElementById('resumeWrapper');
const hitMeResumeGoneWrap = document.getElementById('hitMeResumeGone');
const hitMeResumeRowInfo = document.getElementById('newRowResumeBox');
const resumeDescriptionInfo = document.getElementById('resumeDescription');

function updateInformation() {
  if (resumeBtnTasks.checked) {
    resumeBtnTasks.setAttribute('class', 'resumeBtnStyleCompleted');
    resumeBtnTasksWrapper.setAttribute('class', 'btnNoneStyleIncompleted');
    hitMeResumeGoneWrap.innerHTML = '';
    const hiddeIncompletedTasks = ObjectCompletedArray.filter(function (element) {
      return element.Completed;
    });
    hitMeResumeRowInfo.innerHTML = hiddeIncompletedTasks[0].TaskName;
    resumeDescriptionInfo.innerHTML = 'Main completed task name.';
  } else if (!resumeBtnTasks.checked) {
    resumeBtnTasks.setAttribute('class', 'resumeBtnStyleIncompleted');
    resumeBtnTasksWrapper.setAttribute('class', 'btnNoneStyleCompleted');
    hitMeResumeGoneWrap.innerHTML = '';
    const hiddeIncompletedTasks = ObjectCompletedArray.filter(function (element) {
      return !element.Completed;
    });
    hitMeResumeRowInfo.innerHTML = hiddeIncompletedTasks[0].TaskName;
    resumeDescriptionInfo.innerHTML = 'Main incompleted task name.';
  }
}
resumeBtnTasks.addEventListener('click', updateInformation);
