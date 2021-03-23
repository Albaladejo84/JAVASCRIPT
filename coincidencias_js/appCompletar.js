var cartas = [];
var jugada1 = '';
var jugada2 = '';
var identificadorJ = '';
var identificadorJ2 = '';
var contador = 0;
var juegoIniciado = false;
var aciertos = 0;

for (let index = 0; index < 2; index++) {
    for (let index = 1; index < 9; index++) {
        var nombreCarta = index;
        carta = { nombre: nombreCarta, seleccion: false };
        cartas.push(carta);
    }
}

console.log(cartas)

iniciarJuego();
function iniciarJuego() {
    document.querySelector('#juego').style.opacity = "0.8";
    desordenarCartas(cartas);
    juegoIniciado = true;
}

function resetearJuego() {
    desordenarCartas(cartas);
    juegoIniciado = false;
    letras = document.getElementsByClassName("letra");
    for (let index = 0; index < letras.length; index++) {
        letras[index].innerHTML = '?';
    }
}

function desordenarCartas(cartas) {
    cartas.sort((a, b) => 0.5 - Math.random());
    for (let index = 0; index < cartas.length; index++) {
        selector = `#${index}`;
        document.getElementById(index).setAttribute('data-valor', cartas[index].nombre);
    }

    return cartas;
}

function girarCarta() {
    if (juegoIniciado) {
        var evento = window.event;
        if (contador % 2 == 0) {
            jugada1 = evento.target.getAttribute('data-valor');
            identificadorJ = evento.target.id;
            document.getElementById(identificadorJ).innerHTML = jugada1;
            contador++;
        } else {
            jugada2 = evento.target.getAttribute('data-valor');
            identificadorJ2 = evento.target.id;
            contador++;
            document.getElementById(identificadorJ2).innerHTML = jugada2;
            setTimeout(function () {
                if (jugada2 !== jugada1 || identificadorJ == identificadorJ2) {
                    document.getElementById(identificadorJ).innerHTML = "?";
                    document.getElementById(identificadorJ2).innerHTML = "?";
                } else {
                    aciertos++;
                    
                    if (aciertos == 8) {
                        alert(`Has acabado en ${contador / 2} intentos`);
                        juegoIniciado = false;
                    }
                }
            }, 1000);

        }
    }
}



