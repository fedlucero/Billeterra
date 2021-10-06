/* let div = getElementByid();
let parrafo = getElementsByClassName();
let etiqueta = getElementsByTagName(); */



/* let monedas = document.getElementsByClassName("moneda");
console.table (monedas);
console.log(monedas[2].innerHTML);
console.log(monedas[2]);

for(moneda of monedas){
    console.log(moneda.innerHTML);
} */


/* let inputNombre = document.getElementById("nombreMoneda");
let inputSimbolo = document.getElementById("simboloMoneda");

inputNombre.value = prompt("Nombre Moneda");
inputSimbolo.value = prompt("simbolo Moneda");
 */
let nombreInput = document.getElementById("monedaNombre");
let simboloInput = document.getElementById("monedaSimbolo");
let cantidadInput = document.getElementById("monedaCantidad");
let cotizacionInput = document.getElementById("monedaCotizacion");
let fechaInput = document.getElementById("monedaFecha");



nombreInput.value = prompt("Nombre moneda");
simboloInput.value = prompt("simbolo moneda");
cantidadInput.value = prompt("Cantidad comprada");
cotizacionInput.value = prompt("cotizacion moneda");
fechaInput.value = prompt("Fecha compra");


