




const multi = (a,b) => a * b;

const Monedas = [
                  { id: "dot", simbolo: "dot",  nombre: "Polkadot", cantidad: 1, cotizacion: 2,},
                  {  id: "ada", simbolo: "ada",  nombre: "Solana", cantidad: 3, cotizacion:  4},
                  {  id: "egold", simbolo: "egld",  nombre: "Elron"  , cantidad: 5, cotizacion: 6},
                  {  id: "doge", simbolo: "doge",  nombre: "Dogecoin" , cantidad: 7, cotizacion:8 }
                ];


const articleMonedas = document.getElementById("cardsMonedas")

for (const moneda of Monedas) {
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


                
            