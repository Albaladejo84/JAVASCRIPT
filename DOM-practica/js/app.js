// Eliminar de Local Storage
localStorage.clear();

//1º FUNCIONALIDADES hablar con la consola abierta

/* let elemento;

elemento = document; //que se muestra
elemento = document.all; //devuelve todo explicar las HTMLCOLLECTIONS (https://developer.mozilla.org/es/docs/Web/API/HTMLCollection) DEPRECATED
elemento = document.all[10]; // DEVUELVE UN ELEMENTO AUNQUE NO SE SUELE UTILIZAR ESTO DEPRECATED
elemento = document.head; //comentar con la consola
elemento = document.body; //cometar con la consola
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms; // devuelve los fformularios
 elemento = document.forms[0];
elemento = document.forms[0].id; //devuelve el nombre del id
elemento = document.forms[0].className; // devuelve el nombre la clase
//Hacer prueba  añadiendo clases en el HTML EN LA LINEA 73 solo a los 
elemento = document.forms[0].classList += ' clase-de-prueba'; // devuelve todas los clases. // otra formaelemento = document.forms[0].classList.add('nombreClase');
elemento = document.forms[0].classList[0];
elemento = document.images; //devuelve todas las imagenes
/*elemento = document.images[2]; //devuelve la imagen de posicion2
elemento = document.images[2].src;
elemento = document.images[2].getAttribute("src"); // misma forma que el anterior pero accediendo a todos los atributos

//sctipts

elemento = document.scripts; //devuelve el numero de script una HTML COLLECTIONS

//EJERCICO Y LO TRASFORMAMANOS A UN ARRAY

let imagenes = document.images;
let imagenesArr = Array.isArray(imagenes);//Array.from(imagenes)

console.log(imagenes);
console.log(imagenesArr);

imagenesArr.forEach(function(imagen) {
  console.log(imagen);
}); 


console.log(elemento); */

//2º Seleccionar elementos y aplicarles propiedades.

// seleccionar elementos en especifico
//getElementById
//vamos a localizar el id= 'hero'  busca con el inspector // hacer el segundo ejemplo
/* let elemento;

elemento = document.getElementById("hero");
elemento = document.getElementById("hero").id;
//acceder a la clase
elemento = document.getElementById("header").className;

console.log(elemento); */

/* let encabezado;

encabezado = document.getElementById("encabezado");
encabezado = document.getElementById("encabezado").className;

encabezado = document.getElementById("encabezado").id;
encabezado = document.getElementById("encabezado").innerText; // devuelve el texto que tiene el id="encabezado

encabezado = document.getElementById("encabezado");
encabezado.style.background = "#333"; //FIJARSE EN EL COLOR QUE PONE EN CURSOSO EN LINEA
encabezado.style.color = "#fff";
encabezado.style.padding = "40px";

//cambiar el texto

encabezado.textContent = "Las asignaturas del DIM";
//tambien lo podemaos hacer con:

encabezado.innerText = "Más asignaturas del DIM";

console.log(encabezado); */

//3º QUERY SELECTOR
//si manejamos el css nos facilita las cosas porque es la misma sintaxis
//selecuibar un id
/*let encabezado = document.querySelector("#encabezado");

//podeamos ahora aplicar estilos

encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = "40px";
encabezado.textContent = "Las asiganturas del DIM";
// la diferencia con getElementById es que es te solo selecciona ID

//por id
encabezado = document.querySelector(".enlace");

//por etiquetas

encabezado = document.querySelector("h1"); //aqui devolvera solo uno porque en principò solo hay un h1 por pagina

encabezado = document.querySelector("img"); // VEMOS QUE NOS DEVUELVE LA PRIMERA QUE NOS DEVUELVE. Si quiero que  me devuelva todas tengo que hacerlo con querySelectorAll

//creando selectores igual que en css

encabezado = document.querySelector(".card img");

console.log(encabezado);*/

/*let enlace;
// vamos a seleccionar el menu principal linea 263 del HTML

enlace = document.querySelector("#principal a:first-child");
enlace = document.querySelector("#principal a:last-child");
enlace = document.querySelector("#principal a:nth-child(3)");

console.log(enlace);*/

// 3º SELECCIONAR MULTIPLES ELEMENTOS

//get elements ByClassName

//let enlaces = document.getElementsByClassName("enlace"); // enlace esta en la linea 293 del codigo. OJO con la sintaxis porque no se pome el punto antes de enlace. esto devuelve un HTMLCOLLECTION
//enlaces = enlaces[2];
/*let enlaces = document.getElementsByClassName("enlace")[3];
enlaces.style.background = "#333";
enlaces.textContent = 'Nuevo enlace'; 
//HACE EXACTAMENTE LO MISMO QUE querySelector

console.log(enlaces);*/

//se puede mezcal querySector con getElementsByClassname

/*let listaEnalces = document.querySelector("#principal");
listaEnalces = document.querySelector("#principal").getElementsByClassName("enlace");
console.log(listaEnalces);*/

/*let links = document.getElementsByTagName("a");

// de los enlaces que devuelve cogemos el 18

links[18].style.color = "red";
links[18].textContent = "Nuevo enlace";

let enlaces = Array.from(links);

enlaces.forEach(enlace => {
  console.log(enlace.textContent);// enseña los numeros que aparece en la consola explicando porque se repite
});

console.log(links);

console.log(enlaces);*/

// 4º querySelectorAll

//obtenemos una serie de resultados. es el más flexible

/*let enlaces = document.querySelectorAll("#principal .enlace"); // fijate que esto devuelve u NodeList
//podemos hacer lo mismo que en los anteriores puntos
enlaces[1].style.background = "red";
enlaces[1].textContent = "Modificando el enlace";

enlaces = document.querySelectorAll("img");
console.log(enlaces);*/

//EJEMPLO DE QUERY SELECTOR ALL

/*const enlaces = document.querySelectorAll("#principal a:nth-child(odd)"); // enlaces impares

enlaces.forEach(function(impares) {
  impares.style.backgroundColor = "red";
  impares.style.color = "white";
});

//probar a seleccionar todos los cards, todas las imagenes, info-card, los h4 etc

console.log(enlaces);*/

//TRAVERSING QUE ES LO QUE NOS PERMITE NAVEGAR A LO LARGO DE TODO EL DOCUMENTO.

//ES DECIR IR DEL PADRE AL HIJO ETC o al reves
/*
let navegacion = document.querySelector("#principal");

console.log(navegacion);
console.log(navegacion.childNodes); // me devuelve los nodos hijos. fijarse que devuelve los text que son los huecos en blaco que hay en el html.
// para evitar eso
console.log(navegacion.children);
console.log(navegacion.children[0].nodeName);
console.log(navegacion.nodeName); //vamos a hacer el simil que los nodos son las etiquetas
console.log(navegacion.children[0].nodeType); //devuelve un 1 (los enlaces son 1)

// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = comentarios
// 9 = documentos
// 10 = doctype

//https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

console.log((navegacion.children[0].textContent = "Hola Campos"));

//otro ejemplo seleccionamos la barra que es la linea 81 del HTML

const barra = document.querySelector(".barra");

console.log(barra.children);
console.log(barra.children[0].children);
console.log(barra.children[0].children[0].children);

//otro ejemplo

let cursos = document.querySelectorAll(".card"); // desplegar la consola y enseñar el valor d elso childresn

console.log(cursos);
console.log(cursos[0].lastChild);
console.log(cursos[0].lastElementChild); //de otra forma
console.log(cursos[0].childElementCount); //te dice cuantos hay. Sacar el html y enseñalor. Linea 256 HTML
*/
//TRAVERSING DE HIJO A PADRE

//LO VAMOS A HACER SOBRE EL FOOTER LINEA 292

/*const enlaces = document.querySelectorAll(".enlace");

console.log(enlaces[0]); //me devuelve un solo elemento
console.log(enlaces[0].parentNode); // devuelve el elemento hacia arriba
console.log(enlaces[0].parentElement);

//(document.documentElement.parentNode === document);  // true
//(document.documentElement.parentElement === document);  // false
//console.log(document.documentElement.parentNode);
//console.log(document.documentElement.parentElement);
console.log(
  enlaces[0].parentElement.parentElement.parentElement.parentElement
    .parentElement.parentElement.parentElement
);

const cursos = document.querySelectorAll(".card");

console.log(cursos[0].parentElement);
console.log(cursos[0].parentElement.parentElement);

console.log(
  (cursos[0].parentElement.parentElement.parentElement.children[0].textContent =
    "hola haciendo Traversing")
);*/

// SIBliNG son los que estan al mismo nivel//los hermanos
/*
const enlaces = document.querySelectorAll(".enlace");

console.log(enlaces); //enseñar en la consola lo que hace y mostrar el 4 que es el que vamos a selccionar

console.log(enlaces[4]);
console.log(enlaces[4].previousSibling); // devuelve un text que es el texto en blanco
console.log(enlaces[4].previousElementSibling);
console.log(enlaces[4].previousElementSibling.previousElementSibling);

//next elementSibiling
console.log(enlaces[0].nextElementSibling); // NOS DEVUELVE EL SIGUIENTE ELEMENTO
console.log(enlaces[0].nextElementSibling.nextElementSibling); // NOS IMPRIME EL SIGUIENTE
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement); // se va hacia el padre
console.log(
  enlaces[0].nextElementSibling.nextElementSibling.parentElement.children
); // listar a los hijos

console.log(
  enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]
); //accedemos a los temas
*/
//5º CREAR ELEMENTOS DESDE JS


//Crear un enlace
/*
const enlace = document.createElement("a");

//agregamos una clase

enlace.className = "enlace";

//añadir id

enlace.id = "nuevo-id";

//añadir href
enlace.setAttribute("href", "#");

//añadir texyo

enlace.textContent = "Nuevo enlace";

//de otra forma
enlace.appendChild(document.createTextNode("Nuevo Enlace"));

// agregarlo al HTML

document.querySelector("#secundaria").appendChild(enlace);

console.log(enlace);
*/

//6º REeMPLAZAR ELEMENTO EN EL HTML
/*
const nuevoEncabezado = document.createElement("h2");

//agregamos id

nuevoEncabezado.id = "otroEncabezado";

nuevoEncabezado.appendChild(document.createTextNode("La mejor asignatura"));

//Elemento anterior será reeplazado

const anteriorEncabezado = document.querySelector("#encabezado");
//elemento padre. Siempre se reemplaza dirigiendose hacia el padre
const elementoPadre = document.querySelector("#lista-cursos");

//Reemplazar
elementoPadre.replaceChild(nuevoEncabezado, anteriorEncabezado);

console.log(nuevoEncabezado);
*/

//7º ELIMINAR NODOS DESDE JS
// UN elemento se puede borrar sobre sin mismo o sobre le padre
/*
const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.querySelector("#principal");

//vamos a eliminar el de indice 0 desde si mismo

enlaces[0].remove();

console.log(enlaces);

//eliminar desde el padre

navegacion.removeChild(enlaces[1]);
*/

//8º agregar y eliminar atributos

/*const primerLi = document.querySelector(".enlace");
let elemento;
//obtener una clase de CSS

elemento = primerLi.className;
elemento = primerLi.classList.add("nueva-clase");
elemento = primerLi.classList.remove("nueva-clase");
elemento = primerLi.classList;

//console.log(primerLi);

//9º leer atributos

elemento = primerLi.getAttribute("href");
primerLi.setAttribute("href", "https://web.institutomilitar.com");
primerLi.setAttribute("polla", "con-alas"); // crear atributos en html5
primerLi.hasAttribute("polla");//devuelve un valor Booleano indicando si el elemento tiene el atributo especificado o no.

//eliminar un artibbuto

primerLi.removeAttribute("polla");

elemento = primerLi;

console.log(elemento);*/

//local storage y session storage

//AGREGAR AL LOCAL STORAGE
//setItem guardamos en local storage una clave y un valor
localStorage.setItem("nombre", "kzurro");

//SESSION STORAGE
sessionStorage.setItem("empleo", "militar");

//eliminar de LOCALSTORAGE

localStorage.removeItem("nombre");

localStorage.setItem("nombre", "kzurro");

const nombre = localStorage.getItem("nombre");

console.log(nombre);

//elimiar todo el LOCALSTORAGE DE UNa vez
