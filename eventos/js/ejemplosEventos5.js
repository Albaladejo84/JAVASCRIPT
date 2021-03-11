//DELEGATION 
document.body.addEventListener( 'click', eliminarElemento );//porque queremos escuchar cualquier click que haya en el documento

/* function eliminarElemento( event ) {
    event.preventDefault();// PRIMERO HACER LA PRUEBA SI ESTA LINEA. EL PREVENT DEFAULT ES PARA PREVENIR QUE NO HAYA OTROS EVENTOS QUE ME ESTÉN INFLUYENDO
    console.log( '¡Click!' );
} */

/* function eliminarElemento( event ) {
    event.preventDefault();
    console.log( '¡Click!' );
    console.log( event.target.classList );
} */

//VER EL HTML Y EXPLICAR LO COMPLEJO QUE ES SABER DONDE SE HA HECHO CLICK O EN QUE CURSO ES EN EL QUE SE HA HECHO CLICK

/* function eliminarElemento( event ) {
    event.preventDefault();
    if ( event.target.classList.contains( 'borrar-curso' ) ) {
        console.log( 'Si' );
    } else console.log( 'No' );
} */

// con esto mismo podemos decir que nos devuelva su padre ¿no?

/* function eliminarElemento( event ) {
    event.preventDefault();
    if ( event.target.classList.contains( 'borrar-curso' ) ) {
        console.log( event.target.parentElement );//linea 43 html y siguientes
    }
} */

// si queremos que al pulsar a la x del carrito eliminemos el curso tendremos que seleccionar el tr 

/* function eliminarElemento( event ) {
    event.preventDefault();
    if ( event.target.classList.contains( 'borrar-curso' ) ) {
        console.log( event.target.parentElement.parentElement );//linea 37 html y siguientes
    }
} */

//si quermos eliminar el elmento
/* function eliminarElemento( event ) {
    event.preventDefault();
    if ( event.target.classList.contains( 'borrar-curso' ) ) {
        console.log( event.target.parentElement.parentElement.remove() );//obviamente en el momento que se recargue volverán a aparecer porque son parte del html
    }
} */

//OTRO EJEMPLO. BUSCAR CON EL INSPECTOR DE HTML LA CLASE AGREGAR-CARRITO QUE ESTA EN EL BOTÓN DE AGREGAR CARRITO

function eliminarElemento(event) {
    console.log('he entrado en eliminarEliminar');
    event.preventDefault();
    if ( event.target.classList.contains( 'borrar-curso' ) ) {
        console.log( event.target.parentElement.parentElement.remove() );
    }
    if ( event.target.classList.contains( 'agregar-carrito' ) ) {
        console.log( 'curso agregado' )// como vemos no me hace falta crear un selector css para cada curso o un eventlistener para cada uno
    }
}

//COMO VEMOS NO HACE FALTA CREAR UN SELECTOR CSS PARA CADA CURSO O UN EVENTLISTENER PARA CADA UNO.