/**
 * Libreria para máquina tragaperras (Slot)
 * @author LanyuEStudio
 */

var idsSpinners = [];
var tiempoEntreParadaSlotAdyacente = 500;
var msGiro = 10;
var limiteSaldoParaMostrar = 15;
var banco;
var slotItems;
var slotsActuales;
var capasSlot;
var multiplicadorPorPleno;
function cambioDeSlot(){};
function notificarSaldo(){};

class Slot {
	constructor(nombre, imagen, premio){
		this.nombre = nombre;
		this.imagen = imagen;
		this.premio = premio || 0;
	}

}
Slot.prototype.toString = function(){ return this.nombre + " (" + this.premio + ")"};

//Devuelve un numero al azar entre el maximo (no incluido) y el minimo
//O entre cero y 1 si no se especifica
function getNumeroAlAzar(maximo, minimo){
	var min = minimo || 0;
	var max = maximo || 1;
	return Math.floor((Math.random() * max) + min);
}

//Devuelve un slot al azar de la coleccion
function getSlotItem(slots){
	var numero = getNumeroAlAzar(slots.length);
	return slots[numero];
}

//Carga el slot en el indice dado con el item marcado
//O con uno aleatorio si no se pasa el argumento
function cargarSlot(slots, indice, slotItem){
	slots[indice] = slotItem || getSlotItem(slotItems);
	//Usado para notificar cambio de Slot
	if(cambioDeSlot)
		cambioDeSlot(slots, indice);
}

//Devuelve true si hay algun slot girando
function estaGirando(){
	return idsSpinners.length > 0;
}

//Recorre los slots pasados y ejecuta en cada una la funcion pasada
function operarSlots(slots, funcion) {
	for(var i = 0; i < slots.length; i++){
		funcion(slots, i);
	}
}

//Carga los slots del argumento
function cargarSlots(slots){
	operarSlots(slots, cargarSlot);
}

//Calcula la aportacion de un slot al premio actual
function sumaPremio(slot) {
	banco.setPremio(banco.getPremio() > 0 ? banco.getPremio() * slot.premio : banco.getPremio() + slot.premio);
	return banco.getPremio();
}

//Premio segun todos los slots resultantes
function getPremioSlots(slots) {
	operarSlots(slots, function(slots, indice){ sumaPremio(slots[indice]) });
	if(esPleno(slots))
		banco.setPremio(banco.getPremio() * (multiplicadorPorPleno || slots.length));
}

//Devuelve "true" si todos los slots son iguales
function esPleno(slots) {
	var igual = true;
	var slotPrimero = slots[0];
	for(var i = 0; i < slots.length && igual; i++){
		igual &= slots[i] == slotPrimero;
	}
	
	return igual;
}

slotItems = [
		new Slot("Limón", "limon.png", 0),
		new Slot("Naranja", "naranja.png", 0),
		new Slot("Plátanos", "platano.png", .5),
		new Slot("Sandía", "sandia.png", 1),
		new Slot("Cerezas", "cereza.png", 1),
		new Slot("Dolar", "dolar.png", 2)
	];

function giroAceptado(){
	var aceptado = !estaGirando() && getApuesta() > 0;
	if(aceptado) banco.apostar(apuesta);
	
	return aceptado;
}


//Operaciones con DIVs
//Cuando hay un cambio de slot se ejecuta este codigo
cambioDeSlot = function(slots, indice){
	//alert("Cambio en slot " + indice + " ahora es: " + slots[indice]);
	cargarCapaConSlotItem(capasSlot[indice], slots[indice]);
}