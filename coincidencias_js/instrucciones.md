1. Creamos archivo `html`
   1. Le damos un `id = juego` a la capa que tiene la `class = "row"` para más tarde modificar la opacidad según este activo el juego o no y darle un estilo inicial.
   1. Creamos una tabla, con cuatro filas y cuatro celdas cada una (tantas filas y celdas como amplitud le queramos dar al juego), que nos servirá para que en cada celda sea una carta.
   1. A cada tabla le vamos a dar un estilo en [estilo.css](./estilo.css) mediante el selector `letra`
   1. Asignamos un `id` númerico entre 0 y 15 que nos hará coincidir con las posiciones de la array que utilizaremos en el `js`
   1. A cada `td` le pondremos `?` como texto inicial, más tarde se modificará mediante código
   1. A cada `td` le vamos a dar el atributo [data-valor](https://developer.mozilla.org/es/docs/Learn/HTML/como/Usando_atributos_de_datos) ( [artículo de interés](https://www.htmlcinco.com/atributos-data/) ) para luego mediante js darle valores para el juego.
   1. A cada celda le vamos a asociar un evento `click` que luego implementaremos en el `js`
   1. En una segunda `row` pondremos los botones de `iniciar` y `resetear` juego y le daremos un el selector `.centrar` para dar estilos simples y le asociaremos los eventos `click` de `iniciarJuego()` y `resetearJuego()`.
   1. Por último enlzamos nuestro archivo `js`al final del `body`.
1. Creamos archivo `app.js`
   1. Declara variable `cartas` que es `array`de objetos tipo `{ nombre: number, seleccion: boolean }`
   1. Declarar variables `jugada1`, `jugada2`, `identificadorJ1` y `identificadorJ2` iniciandolas a `''`
   1. Realizar un metodo que se llame `iniciarJuego` que haga lo siguiente:
      1. cambiar la `opacidad` de las cartas para que se muestren
      1. Desordenar las cartas para que se muestren cada vez de una forma, utiliza el metodo `sort` de las arrays ( _[pista](//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)_ )
      1. Asignar a cada atributo `data-valor` el valor de cada carta que hemos desordenado en el apartado anterior.
   1. Crear el Método `resetearJuego`:
      1. Cada vez que se resetea el juego hay que desordenar las cartas. Sacalo a un método llamado `desordenarCartas` al que se le pase por parametros un array y modifica el apartado 2.3.2
      1. El método del apartado anterior también tendrá actualizar el atributo `data-valor` para que se puedan actualizar los valores de las cartas. Elimina lo que sobre del método `iniciarJuego()`
   1. Crea el método `girarCarta()`:
      1. Capturar el evento que vien de la vista en la variable `evento`, 1. Dar a `jugada2` el valor que tiene la carta
      1. Dar a `identificadorJ2` el id que tiene la carta que se ha seleccionado
         1. Hacer estructura de control, para destapar la primera carta y la segunda:
         1. Debe evitar que se destapen cartas antes de iniciar el juego
            ```javascript
            if (jugada1 !== "") {
              console.log("Haz algo");
            } else if (jugada !== "valor") {
              jugada1 = jugada2;
              identificadorJ1 = identificadorJ2;
              document.getElementById(
                identificadorJ2.toString()
              ).style.backgroundColor = "blue";
              document.getElementById(
                identificadorJ2.toString()
              ).innerHTML = jugada2;
            }
            ```
         1. No debe permitir destapar dos veces la misma carta
         1. Si destapa dos cartas con el mismo valor debe marcarlas como acierto, apoyate en un método que llames `comprobar` y cambia de color y valor la que muestres utilizando el método `colorCambio` que se le pasa por parametro una posición, color y contenido(refactorizalo a un nuevo método y sustituyelo donde creas necesario)
         1. Si las cartas no son iguales que se vuelvan a girar y se muestren 0,2 segundos.
            1. Para "vaciar" las variables crea un método llamado `vaciar` y refactoriza
   1. Perfecciona el método `resetear` para que gire las cartas para que ademas de desordenar la array `cartas` cambie el color a cada carta, apoyate en el metodo `colorCambio` que ya has implementado.
   1. Por último módifica el metodo `comprobar` para que después de dacirte que has ganado a los 3 segundos te permita iniciar nuevamente el juego
