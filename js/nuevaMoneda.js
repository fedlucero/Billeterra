const monedasIngresadas = [];

class NuevaMoneda {

    constructor(nombre, simbolo) {
  
      this.nombre = nombre;
  
      this.simbolo = simbolo;
  
    }
  
  }
  
  
  const crearItemMoneda = (newMoneda) => {
  
    
  
    let divMoneda = document.createElement("div");
  
    divMoneda.setAttribute("class", "moneda");
  
    let divLogo = document.createElement("div");
  
    divLogo.setAttribute("class", "logo");
  
    let p = document.createElement("p");
  
    p.textContent = newMoneda.nombre;
  
    let img = document.createElement("img");
  
    img.setAttribute("src", `../imagenes/${newMoneda.simbolo}.png`);
  
    img.setAttribute("alt", newMoneda.nombre);
  
    divLogo.appendChild(img);
  
    divLogo.appendChild(p);
  
    divMoneda.appendChild(divLogo);
  
    return divMoneda;
  
  };

  
  const crearMoneda = () => {
  
    let inputNombre = document.getElementById("nombreMoneda").value;
  
    let inputSimbolo = document.getElementById("simboloMoneda").value;
  
  
  
    const newMoneda = new NuevaMoneda(inputNombre, inputSimbolo);
  
  
    monedasIngresadas.push(newMoneda);

    localStorage.setItem("moneda", JSON.stringify(monedasIngresadas));

  
    document.getElementById("cardsMonedas").appendChild(crearItemMoneda(newMoneda));

    

   
  
  };
  
  
  
  const botonMoneda = document.getElementById("btnCrear");
  
  botonMoneda.addEventListener("click", crearMoneda);



    
   const monedasCreadas= JSON.parse(localStorage.getItem("moneda"));

  if(monedasCreadas !== null){
    for (const moneda of monedasCreadas){
      crearMoneda(moneda);
    }
}



 

  

  


  


