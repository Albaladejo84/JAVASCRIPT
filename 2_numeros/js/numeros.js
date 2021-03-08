const numero1 = 30;
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .1020;
const numero5 = -3;


let resultado;

//SUMA
resultado = numero1 + numero2;

//RESTA
resultado = numero1 -numero2;

//MULTIPLICAR
resultado = numero1 * numero2;

//DIVIDIR
resultado = numero1 / numero2;


//MODULO
resultado = numero1 % numero2;

//PI
resultado = Math.PI;

//REDONNDEO
resultado = Math.ceil(2.1);  // hacia arriba
resultado = Math.floor(2.99);  // hacia abajo

//RAIZ CUADRADA
resultado = Math.sqrt(144);

//ABSOLUTO
resultado = Math.abs(numero5);

//POTENCIA
resultado = Math.pow(2, 4);

//MIN y MAX
resultado = Math.min(3,6,8,2,6,1);
resultado = Math.max(3,6,8,2,6,1);

//ALEATORIO

resultado = Math.random(); //numero aleatorio entre 0 y 1


console.log(resultado);