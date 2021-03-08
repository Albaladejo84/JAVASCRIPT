var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

function leerDNI(){
  let DNI;
  DNI = prompt('Introduzca un numero DNI valido:');
  console.log(DNI.length);
  let numDNI = DNI.substring(0, (DNI.length - 1));
  let letraDNI = DNI.slice(-1).toUpperCase();
  console.log(numDNI);
  console.log(letraDNI);
  validarDNI(numDNI, letraDNI);
}

function validarDNI (numDNI, letraDNI){
  if(numDNI>99999999 || numDNI<0){
    console.log('El formato de numero introducido no es válido')
  }else{
    let letraCorrecta = letras [numDNI % letras.length];
    if(letraCorrecta == letraDNI){
      console.log('El DNI es correcto');
    }else{
      console.log('La letra del DNI introducido es incorrecta');
    }
  }
}

leerDNI();



  



