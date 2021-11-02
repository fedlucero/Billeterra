const url = 'https://api.coinlore.net/api/';

//Al cargar la página armamos la tabla. Esto se ejecuta la primera vez únicamente
window.addEventListener('load', () => {
    const tabla = document.querySelector('.table');

    tabla.innerHTML = `
                        <div class="apiDiva">
                            <div class="apiHijo">Logo</div>
                            <div class="apiHijo">Nombre</div>
                            <div class="apiHijo">Simbolo</div>
                            <div class="apiHijo">Cotizacion</div>
                            <div class="apiHijo">Mis monedas</div>
                            <div class="apiHijo">Mi total</div>
                        </div>`
                        fetch(`${url}tickers/?start=0&limit=25`).then(response => response.json()).then(json => {
                            const coins = json.data;
                            const tdiv = document.createElement('div');
                            tdiv.setAttribute('class', 'data');
                            coins.forEach(coin => {
                                tdiv.innerHTML += `

                                <div class="apiDiv" id="${coin.id}">
                                    
                                <div class="apiHijo">
                                    <img src="../imagenes/${coin.symbol}.png">
                                </div>
                                <div class="apiHijo">
                                    ${coin.name}
                                </div>
                                <div class="apiHijo">
                                    ${coin.symbol}
                                </div>
                                <div class="apiHijo">
                                    ${coin.price_usd}
                                </div>
                                <div class="apiHijo">
                                    mis monedas
                                </div>
                                <div class="apiHijo">
                                    total
                                </div>

                                
                            </div>
                                        `
                            });
                            //Agrego listener a la tabla.
                            tdiv.addEventListener("click", (e) => {
                                //Cuando hace clic, será sobre una td, guardo el id del padre de dicho td (la fila tr de la criptomoneda)
                                const id = e.target.parentNode.id;
                                //Redirecciono a la página de detalle mandando por url el id
                                window.location.href = `./detail.html?id=${id}`;
                            });
                            tabla.append(tdiv);
                            document.getElementById('loading').classList.add('hide');
                            tabla.classList.remove('hide');
                        });
                    });
                    
                    //Cada 10 segundos pedimos información nuevamente para actualizar los datos
                    setInterval(() => {
                        fetch(`${url}tickers/?start=0&limit=25`).then(response => response.json()).then(json => {
                            const coins = json.data;
                            const tdiv = document.querySelector('tbody');
                            tdiv.innerHTML = '';
                            //Por cada moneda agregamos una nueva fila a la tabla.
                            coins.forEach((coin) => {
                                tdiv.innerHTML += 
                                    `
                                    <div class="apiDiv" id="${coin.id}">
                                    
                                        <div class="apiHijo">
                                            <img src="../imagenes/${coin.symbol}.png">
                                        </div>
                                        <div class="apiHijo">
                                            ${coin.name}
                                        </div>
                                        <div class="apiHijo">
                                            ${coin.symbol}
                                        </div>
                                        <div class="apiHijo">
                                            ${coin.price_usd}
                                        </div>
                                        <div class="apiHijo">
                                        mis monedas
                                    </div>
                                    <div class="apiHijo">
                                        total
                                    </div>
                                        
                                    </div>
                                `
                            });
                        });
                    }, 10000);
                    