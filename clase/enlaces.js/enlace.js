const enlace = document.createElement("a");
enlace.className = "enlace";
enlace.id = 'nuevo-id';
enlace.setAttribute = ('href', '#');
enlace.textContent = 'Enlace a pagina';
    
document.querySelector('#secundaria').appendChild(enlace);

