
//Mensaje con las coordenadas del cursor dentro de la página 
function ejemplo2(evento) {
    alert('Hiciste click en coordenadas: ' + evento.clientX + ', ' + evento.clientY + ' con botón ' + evento.button);
}

//Lo mismo con un eventListener
// document.querySelector('.cuadro').addEventListener('mousedown', ejemplo2);

// Lo mismo de otra forma
// document.querySelector('.cuadro').onmousedown = ejemplo2;

//Nos informa de las coordenadas del cursor DENTRO de "elemento"
//offsetLeft devuelve el numero de pixeles a la izquierda del elemento actual 
function ejemplo3(evento) {
    var elemento = evento.target;
    escribirEtiqueta(`Ahora estás en coordenadas:  ${(evento.clientX - elemento.offsetLeft)} , ${(evento.clientY - elemento.offsetTop)}`);
    console.log(elemento.offsetLeft, event.clientX)
}
//Funciones auxiliares para mensajes en pantalla
function resetearEtiqueta() { escribirEtiqueta('Pincha en lo verde'); }
function escribirEtiqueta(texto) { document.querySelector('#texto').innerHTML = texto; }

