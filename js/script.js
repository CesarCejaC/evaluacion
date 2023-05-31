const listaTareas = [];

//Función que limpia el contenido de linput al agregar la tarea
const cleanInput = () => {

  //Valor inicial vacío
  const initialValue = '';

  //Se obtiene el elemento input
  const input = document.getElementById('task-input');

  //Se le sobreescribe al valor inicial
  input.value = initialValue;

};

//Función para añadir nueva tarea
const agregarTarea = (e) => {
  //evitar la recarga de la página
  e.preventDefault();

  //obtener la información del input
  const input = document.getElementById('task-input').value;



  //Validamos que el input no este vacío
  if (input.trim() == '') {
    return;
  };

  //Añadir la tarea a la lista
  const newElement = document.createElement('li');
  newElement.innerText = input;

  listaTareas.unshift(newElement)

  //Limpiar entrada
  cleanInput();

  //renderizar nueva tarea
  mostrarLista()

};

//Función para renderizar la lista
const mostrarLista = () => {

  //Se obtiene el contenedor
  const container = document.getElementById('lista-tareas');

  //Por cada elemento dentro de la lista se agrega dentro del contenedor
  for (let i = 0; i < listaTareas.length; i++) {

    const currentTask = listaTareas[i];

    container.appendChild(currentTask);

  };

};

mostrarLista();