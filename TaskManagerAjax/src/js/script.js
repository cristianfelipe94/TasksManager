/**
 * Ejemplo de AJAX con XMLHttpRequest.
 *
 */

// dataReceived(): Este evento se dispara cuando el request
// obtiene sus datos de forma satisfactoria.
function dataReceived(event) {
  console.log(event.target);
  const response = event.target.response;
  const container = document.getElementById('container');
  for (const element of response) {
    const listItem = document.createElement('li');
    listItem.innerText = element.text;
    listItem.style.color = element.color;
    if (element.bold) {
      listItem.style.fontWeight = 'bold';
    }
    container.appendChild(listItem);
  }
}

// getElements(): Crea un nuevo request para solicitar los datos.
function getElements() {
  // Crea un nuevo XMLHttpRequest.
  const request = new XMLHttpRequest();
  // Agrega un event listener para el evento 'load'.
  request.addEventListener('load', dataReceived);
  // Define el tipo de respuesta esperada como 'json'.
  request.responseType = 'json';
  // Inicializa el request.
  request.open('GET', '/data.json');
  // Envía el request.
  request.send();
}

const button = document.getElementById('load-elements');
button.addEventListener('click', getElements);
