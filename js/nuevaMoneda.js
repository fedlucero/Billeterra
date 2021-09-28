//ingresar nueva moneda

class NuevaMoneda {
    constructor (nombre, simbolo,){
    this.nombre = nombre
    this.simbolo = simbolo
    }

    aniadirMoneda(){
        console.log(`Añadiste ${this.nombre} a tu portafolio`);
    }

} 

let pedirNombre =prompt ("Ingrese nombre de la divisa");
let pedirSimbolo =prompt ("Ingrese simbolo de la divisa");

const nuevaMoneda1 = new NuevaMoneda(pedirNombre,pedirSimbolo);
nuevaMoneda1.aniadirMoneda();


// Arrays de monedas


const monedasIngresadas = [];
monedasIngresadas.push(new NuevaMoneda("Ethereum, eth"));
monedasIngresadas.push(new NuevaMoneda("Solana, sol"));
monedasIngresadas.push(new NuevaMoneda("Polkadot, dot"));
monedasIngresadas.push(new NuevaMoneda("Chainlink, link"));
monedasIngresadas.push(new NuevaMoneda("Cardano, ada"));
monedasIngresadas.push(new NuevaMoneda("Elrond, egld"));
for (const NuevaMoneda of monedasIngresadas){
    NuevaMoneda.aniadirMoneda();
}

console.log(monedasIngresadas);

console.log(`Usted ingreso ${monedasIngresadas.length} monedas`);