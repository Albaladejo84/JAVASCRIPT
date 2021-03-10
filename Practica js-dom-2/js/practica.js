
/* document.getElementsByTagName("button")[0].addEventListener('click', () => {añadir()}) */

function anyadirIngrediente(){
    let nuevoElemento = prompt("Introduzca un elemento en la lista");
    let node = document.createElement("LI");// Create a <li> node
    let textnode = document.createTextNode(nuevoElemento); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("ingredientes").appendChild(node); // Append <li> to <ul> with id="myList"
}
