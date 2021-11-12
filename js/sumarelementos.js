const elementoasumar = Array.from(document.getElementsByClassName("totalbtc"));
let suma = 0;
elementoasumar.forEach(el => suma=suma + +el.innerText);
console.log(suma);