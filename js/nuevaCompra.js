

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

const crearItemCompra = (newCompra) => {

    
    let divCompra = document.createElement("div");
    
    divCompra.setAttribute("class", "moneda");

    let divLogo = document.createElement("div");

    divLogo.setAttribute("class", "logo");

    let pNombre = document.createElement("p");
    pNombre.setAttribute("class", "nombreFecha")

    pNombre.textContent = newCompra.nombre;

    pNombre.textContent = newCompra.fecha;

    let img= document.createElement("img");

    img.setAttribute("src", `../imagenes/${newCompra.simbolo}.png`);

    img.setAttribute("alt", newCompra.nombre);

    let divTotales = document.createElement("div");

    divTotales.setAttribute("class","totales");

    let divTotalMoneda = document.createElement("div");

    divTotalMoneda.setAttribute("class", "totalMoneda")

    let pCantidad = document.createElement("p")

    pCantidad.setAttribute("calss","catidadMoneda")

    pCantidad.textContent = newCompra.cantidad;

    let pSimbolo = document.createElement("p")

    pSimbolo.setAttribute("calss","simboloMoneda")

    pSimbolo.textContent = newCompra.simbolo;

    let divTotalDinero = document.createElement("div");

    divTotalDinero.setAttribute("class","totalDinero");

    let pDinero = document.createElement("p")

    pDinero.setAttribute("calss","dinero")

    pDinero.textContent = multi(newCompra.cantidad, newCompra.cotizacionCompra);

    let pSimboloDinero = document.createElement("p");

    pSimboloDinero.setAttribute("class", "simboloDinero");

    pSimboloDinero.textContent = "USD";



    divLogo.appendChild(img);

    divLogo.appendChild(pNombre);
  
    divCompra.appendChild(divLogo);

    divCompra.appendChild(divTotales);

    divTotales.appendChild(divTotalMoneda);

    divTotalMoneda.appendChild(pCantidad);

    divTotalMoneda.appendChild(pSimbolo);

    divTotales.appendChild(divTotalDinero);

    divTotalDinero.appendChild(pDinero);

    divTotalDinero.appendChild(pSimboloDinero);



    return divCompra;

};

const crearCompra = () =>{

    
        let inputNombre = document.getElementById("monedaNombre").value; 
        let inputSimbolo = document.getElementById("monedaSimbolo").value; 
        let inputCantidad = document.getElementById("monedaCantidad").value;
        let inpuntCotizacion = document.getElementById("monedaCotizacion").value;
        let inputFecha = document.getElementById("monedaFecha").value

        const newCompra = new NuevaCompra(inputNombre,inputSimbolo,inputCantidad,inpuntCotizacion,inputFecha)
    
        const monedasIngresadas=[];

        monedasIngresadas.push(new NuevaCompra(inputNombre,inputSimbolo,inputCantidad,inpuntCotizacion,inputFecha));


        document.getElementById("cardsCompras").appendChild(crearItemCompra(newCompra));
};

        const botonCompra =document.getElementById("btnCrearCompra")

        botonCompra.addEventListener("click", crearCompra);









