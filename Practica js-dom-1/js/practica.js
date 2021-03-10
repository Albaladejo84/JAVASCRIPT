
let enlaces = document.getElementsByTagName("a");
console.log(enlaces);

enlaces = document.querySelectorAll("a");
console.log(enlaces);

let posicion = document.getElementsByTagName("a").length -1;
let direccion = document.getElementsByTagName("a")[posicion].attributes.href.value;
console.log(direccion);

parrafo = document.getElementsByTagName("p")[0].innerText;
console.log(parrafo);
parrafo = document.getElementsByTagName("p")[0].textContent;
console.log(parrafo);

parrafo = document.getElementsByTagName("p")[0].innerHTML;
console.log(parrafo);

parrafo2 = document.getElementsByTagName("p")[1].getElementsByTagName("a");
/* enlaces = parrafo2.getElementsByTagName("a"); */

console.log(parrafo2.length);

todosEnlaces = document.getElementsByTagName("a");
todosEnlaces = Array.from(todosEnlaces);
todosEnlaces.forEach(element => {
    console.log(element.attributes.href.value);
});


todosEnlaces = document.getElementsByTagName("a");
todosEnlaces = Array.from(todosEnlaces);
let contador = 0;
todosEnlaces.forEach(element => {
    if(element.attributes.href.value == "http://prueba4"){
        contador++;
    };
});
console.log(contador);

