var nombrePila = 'Pedro';
console.log(nombrePila);

nombrePila = 'Jose';
console.log(nombrePila);

let nombre = 'Paco';
console.log(nombre);

nombre = 'Carlos'
console.log(nombre);

nombre = 23;
console.log(nombre);

nombre = true;
console.log(nombre);

const apellido = 'Garcia';
console.log(apellido);

//apellido = 'Lopez';

mensaje = 'Empezando JavaScript: \'el Mejor lenguaje de programción\'';

console.log(mensaje);

mensaje = 'java' + 'Script';

console.log(mensaje);

let aprendiendo = 'Aprendiendo',
    lenguaje = 'javaScript';

console.log(aprendiendo + lenguaje);





let mensaje2 = 'Esto es un mensaje de pruebas para aprender JavaScript';

console.log(mensaje2.indexOf('aprender')) //devuelve la posición en la que esta, -1 si no lo encuentra
console.log(mensaje2.substring(0, 10));
console.log(mensaje2.slice(-3)); // devuelve un string desde donde se indique (negativo es de atras hacia delante)
console.log(mensaje2.split(' '));// busca el espacio en blanco y devuelve una array
console.log(mensaje2.replace('JavaScript', '.NET'));
console.log(mensaje2.includes('JavaScript')); // devuelve true o false
console.log(lenguaje.repeat(10));// repite tantos valores como se le pida