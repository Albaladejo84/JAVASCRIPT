## EXÁMEN RECUPERACIÓN ECMASCRIPT 6 2020 DIM XLII JUN20

La prueba consiste en realizar una serie de ejercicos en un tiempo limite de **2 horas** y subirlo a un repositorio online.
Puede descargar los recursos necesarios que contienen:

1. [index.html](index.html): Página web con la que se trabajará durante la prueba. Cualquier modificación en este archivo será descartada y no se tendrá en cuenta como resultado de la prueba.
1. [index.css](index.css): Archivo con estilos para capa de la gráfica que tendrá que implementar durante el examen.
1. [prototipo.png](prototipo.png): Muestra el resultado final
1. [prototipoConsola.png](prototipoConsola.png): Muestra el resultado que debe mostrar la consola
1. [index.js](index.js): Contien la Clase Academia que no debe tocar. Apartir del texto `COMIENCE AQUÍ SU CÓDIGO` deberá escribir sus soluciones.
1. El estado actual del `body` **completado** y no se puede escribir nada
1. Puede utilizar las librerías que crea necesarias.
1. Se valorará positivamente el uso de funciones anónimas y arrow functions

Al finalizar el examen hará un commit con el siguiente texto:
**_empleo-apellido fecha y hora-fin recuperacion JS_** y a continuación un `push`.

A partir de aquí se pide:

1. (VALOR = 0.22 puntos) Instancie un objeto de la `clase Academia` y asígnelo a la variable `academia`.
    1. Imprima por consola `academia` para comprobar que el archivo `index.js` está bien enlazado.
1.  (VALOR = 0.26 puntos) Declare una Variable , que no **cambiará**, que se llame `aprobado` y que apunte al valor `5`.
1.  (VALOR = 0.37 puntos) Añada el selector `btn-danger` al `button` que tiene el texto `Emergente` para que se muestre de color rojo.
1.  (VALOR = 0.45 puntos) Realice un método que se le pase por parametro un `aula` y devuelva la media de notas de ese aula.
    1. Imprima por consola la media del aula `Escaño` (`e`) utilizando el método que acaba de implementar.
1.  (VALOR = 0.60 puntos) Calcule la media de todas las aulas aproximada a dos decimales. Apóyese en alguno de los métodos que ya ha implenetado anteriormente.
    1. Imprima por consola la media de notas de `academia`
1.  (VALOR = 0.45 puntos) Realize un método que al pasarle una nota devuelva si esta a probado o no, utilice la `APROBADO`.

    1. Compruebe por consola si `4,99` es aprobado o suspenso.

1.  (VALOR = 1 puntos) Realize un método que devuelva un objetos de este tipo, el nombre de los aprobados debe estar en **mayúsculas**:

    ```json
            datosAprobados = {
                aprobadosAula: [ { a: 1 }, { b: 2 }, { c: 0 }, { e: 1 } ],
                nombreAprobados: ["PEPE", "MANOLO", "TINO", "MIGUEL"]
            };
    ```

    1. imprime por consola el resultado del anterior método

1.  (VALOR = 0.45 puntos) Realice un método que devuelva la nota máxima de cada aula.

    1. Imprima por consola el anterior método para el aula `Churruca`.

1.  (VALOR = 0.45 puntos) Realice un método que devuelva un array que contenga todas las notas máximas de todas las aulas, debe utilizar el método que implemento en el apartado anterior.
    1. Imprima por consola el array que obtenga del método anterior.
1.  (VALOR = 0.83 puntos) Haga los métodos que crea oportunos para que la variable `mediaEdadSuspensos` apunte al valor de la media de edad de los suspensos de todas las aulas
    1. Imprima por consola la variable `mediaEdadSuspensos`
1.  (VALOR = 1.5 puntos) Realice un método que muestre una gráfica al pulsar el botón que hay en la linea 15 del html, apóyese en la capa que está en el `footer` declarado en el `index.html`, con las siguientes características:
    - Debe ser tipo de barras
    - En el eje de las X debe aparecer el nombre de las aulas, NO EL ACRÓNIMO
    - En el eje de las Y debe aparecer las notas máximas de las aulas  
    - Cada Barra de la gráfica debe ser de un color (puede utilizar cualquier color menos el gris y el blanco)
1.  (VALOR = 0.75 puntos) Implemente lo necesario para que cuando se presione la barra espaciadora desaparezca la gráfica y ya no se pueda volver a mostrar aunque se presione nuevamente el botón de la linea 15 del `index.html`
1.  (VALOR = 1.7 puntos) Implemente lo necesario para que al presionar el botón emergente (línea 16 del `index.html`) aparezca una ventana tipo `alert` cada 3 segundos mostrando el siguiente texto ("Número de Suspenos es: X") siendo X el número de suspensos que hay entre todas las clases. Usa Templates Literals
1.  (VALOR = 0.94 puntos) Implemente un evento, de forma distinta al que utilizó en el apartado `12`, para que cuando se haga doble click con el ratón dejen de mostrarse las ventanas cada 3 segundos y en la consola aparezca el texto 'Ventanas eliminadas'.
