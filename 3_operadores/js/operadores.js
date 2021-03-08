
const numero1 = 20;
const numero2 = '50';
const numero3 = '20';

//menor que y mayor que 
console.log(numero1 > numero2);
console.log(numero1 < numero2);

//comarador de igual
console.log(20 == 20);
console.log(numero1 == numero3);//ojo que pone true, solo examina el valor

console.log(numero1 === numero2); //comprueba el valor y tipo de dato

//DIFERNETES
console.log(2 != 3);

//COMPARAR CADENAS DE TEXTO O LETRAS
console.log('HOLA' == ' HOLA');
console.log('a' > 'b');// devuelve  false. javascriop evalua que A es la de mayor rango y z la de menor rango ==> ABCDE       uvwyxz
console.log('Z' > 'a'); 

console.log(null === undefined);//false
console.log(null == undefined);// true

//CONVERTIR A STRING

const num1 = "50",
      num2 = 10,
      num3 ='tres';

console.log( 1 + 2);
console.log('Java' + 'Script')
console.log(num1 + num2) //ojo que devuelve un string

console.log(Number(num1 + num2));// es un number

console.log(parseInt(num1) + num2)
console.log(num1 - num2)//¿porque hace esto? Porque con el más interpreta que tiene que concatenar

console.log(typeof num1);
console.log(typeof parseInt(num1));

console.log(typeof num3);
console.log(typeof parseInt(num3));// devuelve number
console.log( Number(num3)); //NaN


 //más ejemplos
let dato;
dato = Number ('20');
dato =Number('20.10931');
dato = Number (true);//devuelve 1
dato = Number (false);//devuelve 0
dato = Number (null);//devuelve 0
dato = Number (undefined);//NaN
dato = Number ('Hola mundo');//NaN
dato = Number ([1, 2, 3]);//devuelve 1

//parseInt , parseFloat
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat ('100.23568');

console.log(dato);
//toFixed
dato = 188889888;
dato = 123654.923654987;

console.log(dato); 
console.log (dato.toFixed());//string redondeando
console.log (dato.toFixed(3));// string con tres decimales
console.log (typeof dato.toFixed(3));
console.log(typeof dato);

//LONGITUD NUMEROS
let cp;
cp = 24005; //undefined 
//cp = String(cp);
console.log(cp.length)//length solo sirve para String y arrays
