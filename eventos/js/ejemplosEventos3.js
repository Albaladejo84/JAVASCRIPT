//inputs
//seleccionar el input de la linea 75 del HTML
const busqueda = document.querySelector('#buscador');
/* console.log(busqueda); */
//busqueda.addEventListener(`keydown`, obtenerEvento)
//keydown es la tecla que se presiona
//busqueda.addEventListener('keydown', obtenerEvento);
//keyup cuando soltamos la tecla
//busqueda.addEventListener('keyup', obtenerEvento);
//key press 
//busqueda.addEventListener('keypress', obtenerEvento);

/* function obtenerEvento(event) {
    console.log(busqueda.value)// devuelve lo que el ususario tenga escrito en el buscador
    console.log(`EVENTO: ${event.type}`);
} */


//key press 
/* busqueda.addEventListener('keypress', obtenerEvento);

function obtenerEvento(event) {
    document.querySelector('#encabezado').innerText = busqueda.value; // fijate como muestra en el encabezado lo que le pasamos por el addevantelistener
    console.log(`EVENTO: ${event.type}`);
} */

//focus ==> comentar lo anterior menos busqueda

/* busqueda.addEventListener('focus', obtenerEvento); */// se activa cada vez nos posicionamos en el input


//blur  => avisa cuando se sale del formulario
/* busqueda.addEventListener('blur', obtenerEvento); */

//cut
/* busqueda.addEventListener('cut', obtenerEvento); */// si alguien le da a cortar en el input 

//copy
//busqueda.addEventListener('copy', obtenerEvento);//

//paste
//busqueda.addEventListener('paste', obtenerEvento);//

//input TODO EN UNO ==> todo lo anterior lo coge como input
/* busqueda.addEventListener('input', obtenerEvento);// */

//change

/* busqueda.addEventListener('change', obtenerEvento); */// por ejemplo sería en un select para registrar los cambios


function obtenerEvento(event) {
    console.log(`EVENTO: ${event.type}`);
} 