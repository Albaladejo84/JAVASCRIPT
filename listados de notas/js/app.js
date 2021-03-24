// 1. Instanciar un objeto de la clase App y asignarlo a la variable app

var app = new App();
// Imprime por consola app y estudia su estructura.
console.log(app);

// 2. Crea un método que se llame getNotasAula(aula) devolverá un array de las notas de esa aula.
function getNotasAula(aula) {
    var notasAula = [];
    app.notas.forEach(element => {
        if (element.aula == aula) {
            notasAula.push(element.nota);
        }
    });
    return notasAula;
}


// Utiliza el siguiente método, para que devuelva un objeto con los array de las notas de cada clase. 

function getNotasAulas() {
    var notas = {
        a: getNotasAula('a'),
        b: getNotasAula('b'),
        c: getNotasAula('c'),
    };
    return notas;
}

// El método getNotasAulas() asígnalo a una variable llamada notasAulas

var notasAulas = getNotasAulas();
console.log(notasAulas);

// 3. Existe una variable Global que se llama NOTACORTE, su valor es el que marca el apto o no apto. Si la imprime por consola puede comprobar su valor.
console.log(NOTACORTE);

// Cree un método llamado isAprobado(nota) que devuelva si la nota que se pasa por parámetro es aprobado o no (usa la variable NOTACORTE).
function isAprobado(nota) {
    let esAprobado = false;
    if (nota > NOTACORTE) {
        esAprobado = true;
    }
    return esAprobado;
}


// 4. Medias de aula:

// Implemente un método que se llame getMediaAula(aula) que devuelve la media del aula que se pasa por parámetro aproximada a 2 decimales.

function getMediaAula(aula) {
    let cantidadNotas = 0;
    let sumaNotas = 0;
    for (let index = 0; index < app.notas.length; index++) {
        if (app.notas[index].aula == aula) {
            sumaNotas += app.notas[index].nota;
            cantidadNotas++;
        }
    }
    return sumaNotas / cantidadNotas;
}

// function getMediaAula(aula) {
//     sumaNotasAula = 0;
//     numeroNotas = 0;
//     for (let index = 0; index < app.notas.length; index++) {
//         if (app.notas[index].aula == aula) {
//             sumaNotasAula += app.notas[index].nota;
//             numeroNotas++;
//         }
//     }
//     return (sumaNotasAula / numeroNotas).toFixed(2);
// }


// Implementa un método que se llame getMediaPorAula() y devuelva un objeto que tenga la siguiente forma:


// {
//     "aulas": ["a", "b", "c"],
//     "medias": ["4.87", "3.50", "5.50"]
//   }

//  utilice el método getMediaAula(aula) que ha implementado en el apartado anterior.

function getMediaPorAula() {
    return {
        "aulas": ["a", "b", "c"],
        "medias": [getMediaAula('a'), getMediaAula('b'), getMediaAula('c')]
    }
}
console.log(getMediaPorAula());


// Asigne el método getMediaPorAula() a una variable llamada mediaPorAula

var mediaPorAula = getMediaPorAula();

// 5. Implemente el método muestraAprobados() que está en la linea 20 del index.html para que muestre un alert cada 5 segundos con el siguiente texto:
// El Número de aprobados es [salto de linea] es : (numero de aprobados según sus datos)

function muestraAprobados() {
    let aprobados = 0;
    for (let index = 0; index < app.notas.length; index++) {
        if (isAprobado(app.notas[index].nota)) {
            aprobados++;
        }
    }
    var mensajeAprobados = setInterval(function () {
        alert(`El Número de aprobados es \n es : ${aprobados}`);
    }, 5000)
}
muestraAprobados();
//6. Complete el siguiente método, para que en la casilla de nota media de cada aula ponga su nota media y aparezca una cara sonriente de color verde (fa-smile y icono-ok) si es aprobado, si es suspenso una cara triste de color rojo (fa-frown y icono-no-ok)
function pintaTotalesAula(aula) {
    let bloqueAulaElem = document.querySelector(`   [data-aula="${aula}"]`);
    let totalesAulaElem = bloqueAulaElem.querySelector(".totales");
    let notaMediaElem = totalesAulaElem.querySelector(".nota-media");
    let notaMediaStatusElem = totalesAulaElem.querySelector(".nota-media-status");
    let notaMedia = getMediaAula(aula);
    notaMediaElem.textContent = notaMedia;
    if (isAprobado(notaMedia)) {
        notaMediaStatusElem.classList.add('fa-smile', 'icono-ok');
    } else {
        notaMediaStatusElem.classList.add('fa-frown', 'icono-no-ok');
    }
}

// function pintaTotalesAula(aula) {
//     let bloqueAulaElem = document.querySelector(`   [data-aula="${aula}"]`);
//     let totalesAulaElem = bloqueAulaElem.querySelector(".totales");
//     let notaMediaElem = totalesAulaElem.querySelector(????);
//     let notaMediaStatusElem = totalesAulaElem.querySelector   (".nota-media-status");
//     let notaMedia = ??????;
//     notaMediaElem.textContent = notaMedia;
//     if (isAprobado(?????)) {
//      ????????
//     } else {
//         ????????
//     }
// }
// Lo que debe completar es el código que hay donde las interrogaciones

// Pegue el siguiente método en su código .

function pintaTotalesAulas() {
    for (let aula of app.aulas) {
        pintaTotalesAula(aula);
    }
}

// Con él hacemos que se ejecute el método pintaTotalesAula(aula) por cada aula

// Invoque pintaTotalesAulas() para que se empiecen a mostrar los datos.

pintaTotalesAulas();

// 7. Añadir un listener para:

// Que cuando se pulse la inicial de su apellido se muestre una gráfica en el footer del index.html en la que se represente la nota media de cada aula en un diagrama de barras, estando en el eje de las x las aulas y en el eje de las y las notas medias.
var chart = document.createElement('script');
chart.src = './js/Chart.bundle.min.js';
document.querySelector('head').appendChild(chart);


document.addEventListener('keydown', pintarGrafica);


function pintarGrafica(e){
    if (e.key == 'a' || e.key == 'A') {
        var ctx = document.getElementById('miDiagrama').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['a', 'b', 'c'],
                datasets: [{
                    label: '# of Votes',
                    data: [getMediaAula('a'), getMediaAula('b'), getMediaAula('c')],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        document.querySelector('.footer').appendChild(ctx);
        document.querySelector('.footer').appendChild(myChart);
    }
}


// Que cuando se haga doble click con el ratón en la pantalla se anule el evento de teclado del apartado 5.1 y se deje de mostrar la gráfica. Implemente este listener de forma distinta a como lo hizo en el apartado anterior.

document.ondblclick = eliminarGrafica;

function eliminarGrafica(){
    document.removeEventListener('keydown', pintarGrafica);
    document.querySelector('#miDiagrama').remove();
}
// Implemente lo necesario para que al hacer click sobre Listado de notas se cancelen las ventanas emergentes del apartado 5.
document.querySelector('.listado-notas-js').addEventListener('click', cerrarEmergente);
function cerrarEmergente(){
    document.clearInterval(mensajeAprobados);
}