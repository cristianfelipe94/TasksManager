const textNameWord = document.getElementById('taskManager');
const dateManager = document.getElementById('dateManager');
const incompletedNameBox = document.getElementById('taskNameIncompletedBox');
const incompletedDateBox = document.getElementById('taskDateIncompletedBox');
const completedBox = document.getElementById('taskCompletedBox');
const mainTitle = document.getElementById('mainTitle');
const btnAction = document.getElementById('btnAction');

function uploadTask() {
  if (textNameWord.value !== '' && dateManager.value) {
    mainTitle.style.color = 'red';
    const newTaskName = document.createElement('li');
    const newTaskDate = document.createElement('li');
    incompletedNameBox.appendChild(newTaskName);
    incompletedDateBox.appendChild(newTaskDate);
    newTaskName.innerHTML = textNameWord.value;
    newTaskDate.innerHTML = dateManager.value;
    textNameWord.value = '';
    dateManager.value = '';
  } else if (textNameWord.value === '' && !dateManager.value) {
    mainTitle.innerHTML = 'Error ingrese Nombre de Tarea y Fecha.';
  }
}

btnAction.addEventListener('click', uploadTask);
