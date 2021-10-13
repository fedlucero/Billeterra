class NuevaMoneda {

  constructor(nombre, simbolo) {

    this.nombre = nombre;

    this.simbolo = simbolo;

  }

}



//Esta función está hecha para separar tareas. Crea el ítem que será unido al DOM

const crearItemMoneda = (newMoneda) => {

  //Creamos un div

  let divMoneda = document.createElement("div");

  //Le ponemos el atributo class con el valor 'moneda'

  divMoneda.setAttribute("class", "moneda");

  //Creamos un div

  let divLogo = document.createElement("div");

  //Le ponemos el atributo class con el valor 'logo'

  divLogo.setAttribute("class", "logo");

  //Creamos un p

  let p = document.createElement("p");

  //Le ponemos texto. No agarramos el inputNombre, porque no estaríamos aplicando bien el tema de objetos

  p.textContent = newMoneda.nombre;

  //Creamos un img

  let img = document.createElement("img");

  //Le cargamos un src y un alt. Ambos datos los sacamos del objeto moneda que acabamos de crear

  img.setAttribute("src", `../imagenes/${newMoneda.simbolo}.png`);

  img.setAttribute("alt", newMoneda.nombre);



  //comenzamos a unir todas las piezas

  divLogo.appendChild(img);

  divLogo.appendChild(p);

  divMoneda.appendChild(divLogo);

  //Devolvemos al elemento con todo cargado. Está listo para ser agregado al DOM

  return divMoneda;

};



const crearMoneda = () => {

  let inputNombre = document.getElementById("nombreMoneda").value;

  let inputSimbolo = document.getElementById("simboloMoneda").value;



  const newMoneda = new NuevaMoneda(inputNombre, inputSimbolo);



  const monedasIngresadas = [];

  monedasIngresadas.push(newMoneda);



  //Agregamos al DOM el nuevo ítem que se crea con creatItemMoneda

  document.getElementById("cardsMonedas").appendChild(crearItemMoneda(newMoneda));

};



const botonMoneda = document.getElementById("btnCrear");

botonMoneda.addEventListener("click", crearMoneda);


