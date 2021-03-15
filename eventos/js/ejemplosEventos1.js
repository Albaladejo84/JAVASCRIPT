//traspa 4

/*document.querySelector(".btn-success").onclick = function (event) {
    console.log(event.default)
    document.querySelector('#demo2').innerHTML = Date()
}*/

/*document.querySelector(".btn-success").addEventListener('click', function (event) {
    document.querySelector('#demo2').innerHTML = Date()
});*/

//TRASPA 6
//otra foma, creando la funcion fuera

/*document.querySelector(".btn-success").addEventListener('click', ejecutarBoton)

function ejecutarBoton(event) {
    let elemento;
    document.querySelector('#demo2').innerHTML = Date();
    elemento = event; //ver LA INFORMACION QUE DEVUELVE DEL MOUSEVENT EN LA CONSOLA
    elemento = event.target // devuelve donde he hecho click
    elemento = event.target.className// devuelve las clases
    elemento = event.target.innerText;// devuelve el texto que hay

    console.log(elemento)
}*/


document.querySelector('body').addEventListener('click', ejecutarBoton);

function ejecutarBoton(event){
let elemento;
document.querySelector('#demo2').innerHTML = new Date();
}

