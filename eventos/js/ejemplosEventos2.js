// vamos a establecer un listener para que este pendiente d ehacer algo

document.querySelector('#encabezado').addEventListener('click', function (event) {
    event.target.innerText = 'Otro curso'


    console.log(event)
});

//eventos con el mouse

//variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlaces');
const boton = document.querySelector('#vaciar-carrito');// linea 56 html es el boton de vaciar carrito
//primero hacer la funcion obtener evento

// 2º  ==> click
//boton.addEventListener('click', obtenerEvento);

//doble click
//boton.addEventListener('dblclick', obtenerEvento);

//mouse ENTER
//boton.addEventListener('mouseenter', obtenerEvento); // con pasar el raton por encima vale

//MOUSE LEAVE
//boton.addEventListener('mouseleave', obtenerEvento);// cuando salgo del evento manda el valor a la consola

//mouse over

//boton.addEventListener('mouseover', obtenerEvento);//muy parecido al anterior

//MOUSE out
//boton.addEventListener('mouseout', obtenerEvento);//muy parecido al anterior

//mouse down

//boton.addEventListener('mousedown', obtenerEvento);//solo cuando se presiona


//mouse up
//boton.addEventListener('mouseup', obtenerEvento);//se ejecuta cuando soltamos el mouse

//encabezado.addEventListener('mousemove', obtenerEvento)/// todo lo que nos movamos en una linea

/*function obtenerEvento(event) {
    console.log(`EVENTO: ${event.type}`); //
}*/
