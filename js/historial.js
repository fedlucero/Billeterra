 
 
 

 
 



const suma = (a,b) => a + b;  
const resta = (a,b)=> a-b;
const multi = (a,b) => a * b;
const calcularTotalMovimientos = () => {
let cantidad1=prompt("Tngrese cantidad de tokens comprados");
let cotizacionCompra1=prompt("Ingrese cotizacion del token");
let cantidad2=prompt("Tngrese cantidad de tokens comprados");
let cotizacionCompra2=prompt("Ingrese cotizacion del token");
let cantidad3=prompt("Tngrese cantidad de tokens comprados");
let cotizacionCompra3=prompt("Ingrese cotizacion del token");
let ingreso1 = multi(cantidad1,cotizacionCompra1);
let ingreso2 = multi(cantidad2,cotizacionCompra2);
let ingreso3 =multi(cantidad3,cotizacionCompra3);
let total = resta((suma(ingreso1,ingreso2)),ingreso3)

console.log(total);
   
}

calcularTotalMovimientos() 


 



