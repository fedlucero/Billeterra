// class NuevaCompra {
//     constructor(nombre,simbolo, cantidad, fechaCompra,cotizacionCompra){
//         this.nombre = nombre;
//         this.simbolo = simbolo;
//         this.cantidad = cantidad;
//         this.fechaCompra = fechaCompra;
//         this.cotizacionCompra = cotizacionCompra;    

//     }   
// }

// let pedirNombreEnCompra =prompt ("Ingrese nombre de la moneda");
// let pedirSimboloEnCompra =prompt ("Ingrese simbolo de la moneda");
// let pedirCantidadEnCompra =prompt ("Ingrese cantidad adquirida");
// let pedirFechaEnCompra =prompt ("Ingrese fecha de compra");
// let pedirCotizacionEnCompra =prompt ("Ingrese cotizacion de la moneda el dia de la compra");

// const nuevaCompra1 = new NuevaCompra(pedirNombreEnCompra, pedirSimboloEnCompra, pedirCantidadEnCompra, pedirFechaEnCompra, pedirCotizacionEnCompra);
// ; 

// const comprasRealizadas = [];
// comprasRealizadas.push(new NuevaCompra(pedirNombreEnCompra, pedirSimboloEnCompra, pedirCantidadEnCompra, pedirFechaEnCompra, pedirCotizacionEnCompra));





// class NuevaMoneda {
//     constructor (nombre, simbolo,cantidad,cotizacionCompra){
//     this.nombre = nombre
//     this.simbolo = simbolo
//     this.cantidad = cantidad;
//     this.cotizacionCompra = cotizacionCompra;  
//     }


// } 

// let pedirNombre =prompt ("Ingrese nombre de la moneda");
// let pedirSimbolo =prompt ("Ingrese simbolo de la moneda");
// let pedirCantidad =prompt ("Ingrese cantidad comprada");
// let pedirCotizacion =prompt ("Ingrese cotizacion a la hora de la compra");

// const nuevaMoneda1 = new NuevaMoneda(pedirNombre,pedirSimbolo,pedirCantidad,pedirCotizacion);






function crearMoneda(nuevaMoneda1){

    class NuevaMoneda {
        constructor (nombre, simbolo,cantidad,cotizacionCompra){
        this.nombre = nombre
        this.simbolo = simbolo
        this.cantidad = cantidad;
        this.cotizacionCompra = cotizacionCompra;  
        }
    
    
    } 
    
    let pedirNombre =prompt ("Ingrese nombre de la moneda");
    let pedirSimbolo =prompt ("Ingrese simbolo de la moneda");
    let pedirCantidad =prompt ("Ingrese cantidad comprada");
    let pedirCotizacion =prompt ("Ingrese cotizacion a la hora de la compra");
    
    const nuevaMonedaBtn = new NuevaMoneda(pedirNombre,pedirSimbolo,pedirCantidad,pedirCotizacion);

    const monedasIngresadas = [];
    monedasIngresadas.push(new NuevaMoneda(pedirNombre,pedirSimbolo,pedirCantidad,pedirCotizacion));

    const multi = (a,b) => a * b;
    const articleMonedas = document.getElementById("cardsMonedas")

    for (const moneda of monedasIngresadas) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `<div class="moneda">
                                    <div class="logo">
                                        <img src="../imagenes/${moneda.simbolo}.png" alt="${moneda.nombre}">
                                        <p>${moneda.nombre}</p>
                                    </div>
                                    <div class="totales">
                                        <div class="totalMoneda">
                                            <p class="catidadMoneda">${moneda.cantidad}</p>
                                            <p class="simboloMoneda">${moneda.simbolo}</p>
                                        </div>
                                        <div class="totalDinero">

                                            <p class="dinero">${multi(moneda.cantidad,moneda.cotizacion)}</p>
                                            <p class="simboloDinero">USD</p>
                                        </div>
                                    </div>
                                </div>`
        articleMonedas.appendChild(contenedor);

    
}
}



const botonMoneda = document.getElementById("btnMoneda");
botonMoneda.addEventListener("click", crearMoneda);

