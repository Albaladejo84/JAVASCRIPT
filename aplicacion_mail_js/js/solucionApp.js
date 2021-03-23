//1º CREAR TRES BLOQUES (VARIABLES, EVENTLISTENER, METODOS)

//VARIABLES
// 1a.- PARA linea 24 index.html
const email = document.querySelector("#email");
//1b.- asunto linea 28 index html
const asunto = document.querySelector("#asunto");
//1c.- mensaje linea 35 index.html
const mensaje = document.querySelector("#mensaje");
//1d.- botón enviar linea 44 index.html
const enviar = document.querySelector("#enviar");
//6a.- linea 23 html en el form
const formularioEnviar = document.querySelector("#enviar-mail");
//8.a coton de resetear linea 53 index.html
const reset = document.querySelector("#resetBtn");

//EVENT LISTENER

//1e
function eventListeners() {
  //1º iiciar aplicaicón y deshabilitar botón submit
  //https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded
  document.addEventListener("DOMContentLoaded", inicioApp);
  //2a crear listener para los campos del formulario y los dos van a mandar a l mismo metodo que los validará
  //https://developer.mozilla.org/es/docs/Web/Events/blur
  email.addEventListener("blur", validarCampo);
  //2d
  asunto.addEventListener("blur", validarCampo);
  //2e
  mensaje.addEventListener("blur", validarCampo);
  //6b boton enviar en el submit linea 47 del html
  formularioEnviar.addEventListener("submit", enviarEmail);
  //8.b
  reset.addEventListener("click", limpiarFormulario);
}

//1f llamar al método eventListener sino no fucnionará
eventListeners();

//MÉTODOS
//1g hacer funcion del eventListener
function inicioApp() {
  //deshabilitar botón enviar
  enviar.disabled = true;
}

//2b función que valida el campo
function validarCampo() {
  //2c
  //console.log("Dentro del Input"); //para probar que me funciona
  //2f comentar linea de 2c.
  //3a crear otra funcion para que valide la longitud del texto y no este vacio
  validarLongitud(this); // el this se refiere al campo actual
  //5a Validar unicamente el mail
  //console.log(this.type);
  //5b comentar linea 5a
  if (this.type == "email") {
    //para que solo afecte al email y no a todos
    validarEmail(this);
  }
  //4b para localizar los errores hacer prueba en la cosola con let errores = document.querySelectorAll('.error'); hacer linea 72
  let errores = document.querySelectorAll(".error");
  //4a habilitar el botón de enviar
  if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (errores.length === 0) {
      // hacer con 4b
      //  console.log(errores);
      enviar.disabled = false;
    }
  }
}

//8.c funcion limpiar formulario
function limpiarFormulario(evento) {
  formularioEnviar.reset(); //metodo que sirve para limpiar un formulario
  evento.preventDefault();
}

//6c cuando se envía el correo
function enviarEmail(evento) {
  //6e. Comprobar que se escribe por consola el resultado.
  console.log("mail enviado");
  //7a. comentar 6.e que APAREZCA EL SPINNER AL pulsar el botn enviar
  const spinner = document.querySelector("#spinner"); //linea 41 html
  spinner.style.display = "block"; // comprobar que funciona
  //7b. crear gif de enviar email
  const enviado = document.createElement("img");
  enviado.src = "./img/mail.gif";
  enviado.style.display = "block";
  //7c. ocultar spinner y mostrar gif enviado
  setTimeout(function() {
    spinner.style.display = "none"; //comprobar que funciona y se va  a los 3 segundos
    //7d. meter gif de enviado
    document.querySelector("#loaders").appendChild(enviado); //linea 41 html
    //7e. para evitar el gif este continuamente mostrandose
    setTimeout(function() {
      enviado.remove();
      formularioEnviar.reset();
    }, 5000);
  }, 3000);
  //6d . cancelamos el evento Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo. https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
  evento.preventDefault();
}

//3b verifica la longitud del texto en los campos
function validarLongitud(campo) {
  //3c hacer prueba
  //console.log(campo);
  //3d comentar linea 3c y hacer comprobaciones con los if
  if (campo.value.length > 0) {
    //hacer prueba con console.log(campo.value.length);
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error"); //eliminara la clase error si la hubieré. Se pondrá en el else
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
    enviar.disabled = true; //linea propuesta a los alumnos
  }
}

//5c validamos el email
function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf("@") !== -1) {
    //si no esta esta devuelve un -1
    campo.style.borderBottomColor = "green";
    campo.classList.remove("error");
  } else {
    campo.style.borderBottomColor = "red";
    campo.classList.add("error");
  }
}
