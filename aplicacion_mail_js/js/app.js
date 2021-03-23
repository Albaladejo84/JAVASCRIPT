const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const reset = document.querySelector('#resetBtn');
const loader = document.querySelector("#loaders");
const enviar = document.querySelector('#enviar');
enviar.disabled = true;

email.addEventListener("blur", comprobarCampo);
asunto.addEventListener("blur", comprobarCampo);
mensaje.addEventListener("blur", comprobarCampo);
reset.addEventListener("click", resetear);
enviar.addEventListener("click", enviarMail);
document.querySelector(".container").addEventListener("keydown", habilitarEnviar);

function comprobarCampo(event) {

    let tituloCampo = document.querySelector(`#${this.id}`).nextElementSibling;
    let resultado = false;
  
    if (this.value == "") {
        tituloCampo.style.color = 'red';
        resultado = false;
    } else {
        if (this.id == "email") {
            return (comprobarEmail(this));
        } else {
            tituloCampo.style.color = '';
            resultado = true;
        }
    }
    return resultado;
}

function comprobarEmail(nodo) {
    let tituloCampo = document.querySelector(`#${nodo.id}`).nextElementSibling;
    
    if (nodo.value.indexOf("@") == -1 || nodo.value.indexOf("@") == nodo.value.length - 1 || nodo.value.indexOf("@") == 0 || 
    nodo.value.indexOf(".") == -1 || nodo.value.indexOf(".") == nodo.value.length - 1 || nodo.value.indexOf(".") == 0) {
        tituloCampo.style.color = 'red';
        resultado = false;
    } else {
        tituloCampo.style.color = '';
        resultado = true;
    }
}

function resetear() {
    email.value = "";
    asunto.value = "";
    mensaje.value = "";
    loader.removeChild(enviado);
}

function enviarMail() {
    document.querySelector("#spinner").style.display = "block";
    setTimeout(function () {
        document.querySelector("#spinner").style.display = "none";
    }, 3000);
    setTimeout(function () {
        enviado = document.createElement("img");
        enviado.src = "./img/mail.gif";
        enviado.style.display = "block";
        loader.appendChild(enviado);
        enviar.disabled = true;
    }, 3002);

}
function habilitarEnviar() {
    if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
        setTimeout(function(){
            enviar.disabled = false;
        }, 10);   
    }
}
