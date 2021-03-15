
var registroResultados = [];
var resultadoPorNumeros = [0,0,0,0,0,0]; 

function tirarDado(){
    resultado = Math.ceil(6*Math.random());
    console.log("./img/animacionDado" + toString(resultado) + ".gif")
    document.getElementsByClassName("dado")[0].setAttribute("src", (`./img/animacionDado${resultado}.gif`));
    console.log(resultado);
    setTimeout(() => {  AgregarTiradasAnteriores(resultado); }, 3000);
    setTimeout(() => {  actualizarEstadistica(resultado); }, 3000);
    }

function AgregarTiradasAnteriores(resultado){
    registroResultados.push(resultado);
    registroResultados.sort((a,b) => a -b);
    console.log(registroResultados);
    document.getElementsByClassName("registroResultados")[0].innerHTML = registroResultados;
}

function actualizarEstadistica(resultado){
    let mensajeEstadistica = "";
    let total = 0;
    resultadoPorNumeros[resultado-1]++;
    for (let index = 0; index < resultadoPorNumeros.length; index++) {
        mensajeEstadistica = mensajeEstadistica + "Nº " + (index+1) + ": " + resultadoPorNumeros[index] + " veces, ";
    }
    resultadoPorNumeros.forEach(element => {
        total = total + element;
    });
    mensajeEstadistica = mensajeEstadistica + " de un total de " + total + " tiradas.";
    document.getElementsByClassName("estadisticaResultados")[0].innerHTML = mensajeEstadistica;
}



