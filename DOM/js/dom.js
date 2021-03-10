elemento = document.getElementById("texto");
console.log(elemento.innerText);
//Tipo elemento

elemento = document.getElementsByClassName("tipoTexto")
console.log(elemento[0].innerText);
//Tipo HTML Collection

elemento = document.getElementsByName("Peter")
console.log(elemento[0].innerText);
//Tipo NodeList

elemento = document.getElementById("texto");
console.log(elemento.attributes.name.value);
console.log(elemento.style.length);
