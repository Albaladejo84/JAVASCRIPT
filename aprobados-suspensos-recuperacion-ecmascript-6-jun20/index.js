class Academia {
  constructor() {
    (this.aulas = ["Alcala", "Bazan", "Churruca", "Escaño"]),
      (this.acronimos = ["a", "b", "c", "e"]),
      (this.alumnos = [
        {
          nombre: "Jose",
          apellido: "Garcia",
          edad: 18,
          aula: "a"
        },
        {
          nombre: "Miguel",
          apellido: "Rodriguez",
          edad: 17,
          aula: "a"
        },
        {
          nombre: "Roberto",
          apellido: "Perez",
          edad: 12,
          aula: "a"
        },
        {
          nombre: "Juan Jesus",
          apellido: "Revuelta",
          edad: 19,
          aula: "b"
        },
        {
          nombre: "Ruben",
          apellido: "Almeida",
          edad: 16,
          aula: "b"
        },
        {
          nombre: "Alex",
          apellido: "Iglesias",
          edad: 19,
          aula: "c"
        },
        {
          nombre: "Amine",
          apellido: "Elabdy",
          edad: 16,
          aula: "c"
        },
        {
          nombre: "Jose Vicente",
          apellido: "Alvarez",
          edad: 27,
          aula: "e"
        },
        {
          nombre: "Jose Luis",
          apellido: "Fernandez",
          edad: 21,
          aula: "e"
        }
      ]),
      (this.notas = [
        {
          aula: "a",
          nombre: "Jose",
          nota: 4.75
        },
        {
          aula: "a",
          nombre: "Miguel",
          nota: 2.5
        },
        {
          aula: "a",
          nombre: "Roberto",
          nota: 4.87
        },
        {
          aula: "b",
          nombre: "Juan Jesus",
          nota: 9
        },
        {
          aula: "b",
          nombre: "Ruben",
          nota: 3
        },
        {
          aula: "c",
          nombre: "Alex",
          nota: 2
        },
        {
          aula: "c",
          nombre: "Amine",
          nota: 5
        },
        {
          aula: "e",
          nombre: "Jose Vicente",
          nota: 7
        },
        {
          aula: "e",
          nombre: "Jose Luis",
          nota: 9
        }
      ]);
  }
}
//`COMIENCE AQUÍ SU CÓDIGO`

/*(VALOR = 0.22 puntos) Instancie un objeto de la `clase Academia` y asígnelo a la variable `academia`.*/
    /*Imprima por consola `academia` para comprobar que el archivo `index.js` está bien enlazado.*/

    var academia = new Academia();
    console.log(academia);

/*(VALOR = 0.26 puntos) Declare una Variable , que no **cambiará**, que se llame `aprobado` y que apunte al valor `5`.*/
const APROBADO = 5;

/*(VALOR = 0.37 puntos) Añada el selector `btn-danger` al `button` que tiene el texto `Emergente` 
para que se muestre de color rojo.*/

document.getElementsByTagName('button')[1].classList.add('btn-danger');

/*(VALOR = 0.45 puntos) Realice un método que se le pase por parametro un `aula` y devuelva la media de notas de ese aula.
    1. Imprima por consola la media del aula `Escaño` (`e`) utilizando el método que acaba de implementar.*/

function notaMediaAula(aula) {
  var notaSuma = 0;
  var numeroNotas = 0;
  for (let index = 0; index < academia.notas.length; index++) {
    if (academia.notas[index].aula === aula) {
      notaSuma += academia.notas[index].nota;
      numeroNotas++;
    }
  }
  return (notaSuma/numeroNotas).toFixed(2);
}
console.log(notaMediaAula('e'));

/*(VALOR = 0.60 puntos) Calcule la media de todas las aulas aproximada a dos decimales. 
Apóyese en alguno de los métodos que ya ha implenetado anteriormente.
    1. Imprima por consola la media de notas de `academia`*/

for (aula of academia.acronimos) {
  console.log('La nota media del aula ' + aula + ' es ' + notaMediaAula(aula));
}
function mediaNotasAcademia() {
  var notaSuma = 0;
  var numeroNotas = 0;
  for (aula of academia.acronimos) {
    notaSuma += parseFloat(notaMediaAula(aula));
    numeroNotas++;
  }
  return (notaSuma/numeroNotas).toFixed(2);
}
console.log('La nota media de la academia es ' + mediaNotasAcademia());

/*(VALOR = 0.45 puntos) Realize un método que al pasarle una nota devuelva si esta a probado o no, utilice la `APROBADO`.

    1. Compruebe por consola si `4,99` es aprobado o suspenso.*/

isAprobado = (nota) => {
  return nota >= APROBADO;
}
console.log('4.99 es aprobado¿?' + isAprobado(4.99));

/*(VALOR = 1 puntos) Realize un método que devuelva un objetos de este tipo, el nombre de los aprobados 
debe estar en **mayúsculas**:

            datosAprobados = {
                aprobadosAula: [ { a: 1 }, { b: 2 }, { c: 0 }, { e: 1 } ],
                nombreAprobados: ["PEPE", "MANOLO", "TINO", "MIGUEL"]
            };
    

    1. imprime por consola el resultado del anterior método*/

function quienAprueba() {
  var aprobadosA = 0;
  var aprobadosB = 0;
  var aprobadosC = 0;
  var aprobadosE = 0;
  var nombreAprobados = []
  for (aula of academia.acronimos) {
    for (let index = 0; index < academia.notas.length; index++) {
      if (academia.notas[index].aula === aula) {
        if (isAprobado(academia.notas[index].nota)) {
          //console.log(datosAprobados.aprobadosAula[academia.acronimos.indexOf(aula)]);
          if (academia.notas[index].aula === "a") {
            aprobadosA++;
          }
          else if (academia.notas[index].aula === "b") {
            aprobadosB++;
          }
          else if (academia.notas[index].aula === "c") {
            aprobadosC++;
          }
          else if (academia.notas[index].aula === "e") {
            aprobadosE++;
          }
          //datosAprobados.aprobadosAula[academia.acronimos.indexOf(aula)]; //quiero incrementar el valor de cada objeto
          nombreAprobados.push(academia.notas[index].nombre.toUpperCase());
        }
      }
    }
  }
  var datosAprobados = {
    aprobadosAula: [{a: aprobadosA}, {b: aprobadosB}, {c: aprobadosC}, {e: aprobadosE}],
    nombreAprobados: nombreAprobados
  }
  
  return datosAprobados;
}
console.log(quienAprueba());  
  
/*(VALOR = 0.45 puntos) Realice un método que devuelva la nota máxima de cada aula.

    1. Imprima por consola el anterior método para el aula `Churruca`.*/

function notaMaxima(aula) {
  var notaMaxima = 0;
  var letraAula = aula.substr(0, 1).toLowerCase();
  for (let index = 0; index < academia.notas.length; index++) {
    if (academia.notas[index].aula === letraAula) {
      if (notaMaxima < academia.notas[index].nota) {
        notaMaxima = academia.notas[index].nota;
      }
    }
  }
  return notaMaxima;
}
console.log('La nota máxima del aula Churruca es ' + notaMaxima('Churruca'));

/*(VALOR = 0.45 puntos) Realice un método que devuelva un array que contenga todas las notas máximas de todas las aulas, 
debe utilizar el método que implemento en el apartado anterior.
    1. Imprima por consola el array que obtenga del método anterior.*/
  
function notasMaximasAulas() {
  var notasMaximasAulas = [];
  var index = 0;
  for (aula of academia.aulas) {
    notasMaximasAulas[index] = notaMaxima(aula);
    index++;
  }

  return notasMaximasAulas;
}
console.log(notasMaximasAulas());

/*(VALOR = 0.83 puntos) Haga los métodos que crea oportunos para que la variable `mediaEdadSuspensos` apunte al valor
 de la media de edad de los suspensos de todas las aulas
    1. Imprima por consola la variable `mediaEdadSuspensos`*/

var mediaEdadSuspensos = 0;

function arraySuspensos() {
  var arraySuspensos =[];
  for (let index = 0; index < academia.notas.length; index++) {
    if (!isAprobado(academia.notas[index].nota)) {
      arraySuspensos.push(academia.notas[index].nombre);
    }
  }
  return arraySuspensos;
}
console.log(arraySuspensos());

function mediaEdad(arrayPersonas) {
  var sumaEdad = 0;
  var numeroPersonas = 0;
  for (let index = 0; index < academia.alumnos.length; index++) {
    if (arrayPersonas.includes(academia.alumnos[index].nombre)) {
      sumaEdad += academia.alumnos[index].edad;
      numeroPersonas++;
    }
  return (sumaEdad / numeroPersonas).toFixed(0);
  }
}
console.log('La edad media de los suspensos es ' + mediaEdad(arraySuspensos()));

/*(VALOR = 1.5 puntos) Realice un método que muestre una gráfica al pulsar el botón que hay en la linea 15 del html, 
apóyese en la capa que está en el `footer` declarado en el `index.html`, con las siguientes características:
    - Debe ser tipo de barras
    - En el eje de las X debe aparecer el nombre de las aulas, NO EL ACRÓNIMO
    - En el eje de las Y debe aparecer las notas máximas de las aulas  
    - Cada Barra de la gráfica debe ser de un color (puede utilizar cualquier color menos el gris y el blanco)*/

//CREAMOS LA GRÁFICA 
//VINCULAMOS LA LIBRERIA 
//creo el elemento script y lo inserto, con 'defer', para que no se cargue hasta el final
let chart = document.createElement("script");
chart.setAttribute('defer','');//defer no tiene valor y le tengo que dar el valor vacio
chart.src = "./Chart.bundle.min.js"//https://cdn.jsdelivr.net/npm/chart.js@2.8.0";//podria ser una referencia local del archivo descargado
document.querySelector("head").appendChild(chart);

function muestraGrafica() {
  var ctx = document.getElementById("miDiagrama");//el id del elemento canvas q necesitamos
  var myChart = new Chart(ctx, {
    type: "bubble",//tipo barras. esta tb 'line', 'radar','pie', 'doughnut','polarArea',
    data: {
      labels: academia.aulas,//lo q va en eje X
      datasets: [
        {
          label: "Máximas",//el letrerillo con el cuadrado rojo
          data: notasMaximasAulas(),//lo q va en el eje Y
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      events: ["click"],
      title: {
        display: true,//en false creo q no se mostrara
        text: "Notas Máximas"//titulo de la tabla en negrita
      },
      tooltips: {
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            return {
              borderColor: "red",
              backgroundColor: "blue"
            };
          },
          labelTextColor: function(tooltipItem, chart) {
            return "green";
          }
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

/*(VALOR = 0.75 puntos) Implemente lo necesario para que cuando se presione la barra espaciadora desaparezca la gráfica
 y ya no se pueda volver a mostrar aunque se presione nuevamente el botón de la linea 15 del `index.html`*/

 document.body.addEventListener("keydown", function(evento) {
  if(evento.key === ' ') {
    document.body.querySelector(".miCapa").removeChild(document.querySelector('canvas'));
    document.body.removeEventListener("onclick", muestraGrafica);
  }
 });

/*(VALOR = 1.7 puntos) Implemente lo necesario para que al presionar el botón emergente (línea 16 del `index.html`) 
aparezca una ventana tipo `alert` cada 3 segundos mostrando el siguiente texto ("Número de Suspenos es: X") siendo X
 el número de suspensos que hay entre todas las clases. Usa Templates Literals*/

 var alertSuspensos;

 function mostrarVentana() {
     var numSuspensos = arraySuspensos().length;
     alertSuspensos = setInterval(function() {
         alert(`Número de suspensos es: ${numSuspensos}`)
     }, 3000);
 }

 /*(VALOR = 0.94 puntos) Implemente un evento, de forma distinta al que utilizó en el apartado `12`, 
 para que cuando se haga doble click con el ratón dejen de mostrarse las ventanas cada 3 segundos y en la consola 
 aparezca el texto 'Ventanas eliminadas'.*/

document.body.ondblclick = function() {
    clearInterval(alertSuspensos);
    console.log("Ventanas eliminadas");
};