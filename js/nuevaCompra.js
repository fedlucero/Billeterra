// // Nueva compra

// class NuevaCompra {
//     constructor(nombre,simbolo, cantidad, fechaCompra,cotizacionCompra){
//         this.nombre = nombre;
//         this.simbolo = simbolo;
//         this.cantidad = cantidad;
//         this.fechaCompra = fechaCompra;
//         this.cotizacionCompra = cotizacionCompra;

//     }
//     ingreso(){
//         alert(`El ${this.fechaCompra} compraste un total de ${this.cantidad} de ${this.nombre} a un precio de $${this.cotizacionCompra*this.cantidad}. Cada ${this.simbolo} te costo $${this.cotizacionCompra}`);
//     }
//     ingresoSinAlert(){
//         console.table(`El ${this.fechaCompra} compraste un total de ${this.cantidad} de ${this.nombre} a un precio de $${this.cotizacionCompra*this.cantidad}. Cada ${this.simbolo} te costo $${this.cotizacionCompra}`);
//     }
    

// }

// let pedirNombreEnCompra =prompt ("Ingrese nombre de la divisa");
// let pedirSimboloEnCompra =prompt ("Ingrese simbolo de la divisa");
// let pedirCantidadEnCompra =prompt ("Ingrese cantidad adquirida");
// let pedirFechaEnCompra =prompt ("Ingrese fecha de compra");
// let pedirCotizacionEnCompra =prompt ("Ingrese cotizacion de la divisa el dia de la compra");

// const nuevaCompra1 = new NuevaCompra(pedirNombreEnCompra, pedirSimboloEnCompra, pedirCantidadEnCompra, pedirFechaEnCompra, pedirCotizacionEnCompra);
// nuevaCompra1.ingreso(); 

// // Arrays de compras

// const comprasRealizadas = [];
// comprasRealizadas.push(new NuevaCompra("Elrond", "egld", "1", "20/10/2020", "79"));
// comprasRealizadas.push(new NuevaCompra("Chainlink", "link", "5", "20/10/2020", "28"));
// comprasRealizadas.push(new NuevaCompra("Ethereum", "eth", "1", "20/10/2020", "2879"));
// comprasRealizadas.push(new NuevaCompra("Elrond", "egld", "1", "20/10/2021", "190"));
// comprasRealizadas.push(new NuevaCompra("Polkadot", "dot", "1", "20/10/2020", "7"));
// for (const NuevaCompra of comprasRealizadas){
//     NuevaCompra.ingresoSinAlert();
// }
//  console.table(comprasRealizadas);

//  console.table(`Usted realizo ${comprasRealizadas.length} compras`);

const multi = (a,b) => a * b;

class NuevaCompra {
    constructor(nombre,simbolo, cantidad,cotizacionCompra,fechaCompra){
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.cantidad = cantidad;
        this.cotizacionCompra = cotizacionCompra;
        this.fechaCompra = fechaCompra;
}
}

const crearCompra = () =>{

    
        let inputNombre = document.getElementById("monedaNombre").value; 
        let inputSimbolo = document.getElementById("monedaSimbolo").value; 
        let inputCantidad = document.getElementById("monedaCantidad").value;
        let inpuntCotizacion = document.getElementById("monedaCotizacion").value;
        let inputFecha = document.getElementById("monedaFecha").value

        const newMoneda = new NuevaCompra(inputNombre,inputSimbolo,inputCantidad,inpuntCotizacion,inputFecha)
    
        const monedasIngresadas=[];
        monedasIngresadas.push(new NuevaCompra(inputNombre,inputSimbolo,inputCantidad,inpuntCotizacion,inputFecha));

    
    const articleMonedas = document.getElementById("cardsCompras");
    let contenedor =document.createElement("div");
    
    contenedor.innerHTML = 
                    `<div class="moneda">
                    <div class="logo">
                        <img src="../imagenes/${inputSimbolo}.png" alt="${inputNombre}">
                        <p>${inputNombre} ${inputFecha}</p>
                    </div>
                    <div class="totales">
                        <div class="totalMoneda">
                            <p class="catidadMoneda">${inputCantidad}</p>
                            <p class="simboloMoneda">${inputSimbolo}</p>
                        </div>
                        <div class="totalDinero">

                            <p class="dinero">${multi(inputCantidad,inpuntCotizacion)}</p>
                            <p class="simboloDinero">USD</p>
                        </div>
                    </div>
                </div>`
                    articleMonedas.appendChild(contenedor);
                    }

 const botonMoneda = document.getElementById("btnCrearCompra");
 botonMoneda.addEventListener("click", crearCompra);
