let DB;


const form = document.querySelector('form'),
    nombrem = document.querySelector('#nmoneda'),
    simbolom = document.querySelector('#smoneda'),
    cantidadm = document.querySelector('#cantidadCompra'),
    cotizacionm = document.querySelector('#cotizacionCompra'),
    fecham = document.querySelector('#fecha'),
    monedas = document.querySelector('#monedas'),
    headingAdministra = document.querySelector('#administra');


//esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    //crear la base de datos
    let crearDB = window.indexedDB.open('monedas', 1);
    //si hay un error enviarlo a la consola
    crearDB.onerror = function() {
        console.log('Hubo un error :c');
    };
    //si todo esta bien mostrar en consola, y asignar la base de datos
    crearDB.onsuccess = function() {
        //asignar a la base de datos
        DB = crearDB.result;

        mostrarMonedas();
    };

    //este método sólo corre una vez y es ideal para crear el Schema de la BD
    crearDB.onupgradeneeded = function(e) {
        //El evento es la misma base de datos 
        let db = e.target.result;
        //definir el objetcstore, toma 2 parametro; el nombre de la base de datos y las opciones
        let objetcStore = db.createObjectStore('monedas', {
            keyPath: 'key', //indice de la base de datos
            autoIncrement: true,
        });
        //crear los indices y campos de la base de datos, createIndex: 3 parametros, nombre, keypath y opciones
        objetcStore.createIndex('nombre', 'nombre', { unique: false });
        objetcStore.createIndex('simbolo', 'simbolo', { unique: false });
        objetcStore.createIndex('cantidad', 'cantidad', { unique: false });
        objetcStore.createIndex('cotizacion', 'cotizacion', { unique: false });
        objetcStore.createIndex('fecha', 'fecha', { unique: false });
        
    };

    //cuando el formulario se envia
    form.addEventListener('submit', agregarDatos)

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaMoneda = {
            nombre: nombrem.value,
            simbolo: simbolom.value,
            cantidad: cantidadm.value,
            cotizacion: cotizacionm.value,
            fecha: fecham.value
            
           
            
        }

        //en IndexeddDB se utilizan las transacciones
        let transaction = DB.transaction(['monedas'], 'readwrite');
        let objectStore = transaction.objectStore('monedas');
        let peticion = objectStore.add(nuevaMoneda);

        console.log(peticion);
        peticion.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('Moneda agregada');
            mostrarMonedas();
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    };

    function mostrarMonedas() {
        //limpiar las citas anteriores
        while (monedas.firstChild) {
            monedas.removeChild(monedas.firstChild);
        }

        //creamos un objectStore
        let objectStore = DB.transaction('monedas').objectStore('monedas');
        //esto retorna una petición
        objectStore.openCursor().onsuccess = function(e) {
            //cursos se va a ubicar en el registro indicado, para acceder a los datos
            let cursor = e.target.result;

            if (cursor) {
                let monedaHTML = document.createElement('li');
                monedaHTML.setAttribute('data-moneda-id', cursor.value.key);
                monedaHTML.classList.add('list-group-item');
                monedaHTML.innerHTML = `
                    <p class="font-weight-bold">Nombre: 
                        <span class="font-weight-normal">${cursor.value.nombre}</span>
                    </p>
                    <p class="font-weight-bold">Simbolo: 
                        <span class="font-weight-normal">${cursor.value.simbolo}</span>
                    </p>
                    <p class="font-weight-bold">Cantidad: 
                        <span class="font-weight-normal">${cursor.value.cantidad}</span>
                    </p>
                    <p class="font-weight-bold">Cotizacion: 
                        <span class="font-weight-normal">${cursor.value.cotizacion}</span>
                    </p>
                    <p class="font-weight-bold">Fecha: 
                        <span class="font-weight-normal">${cursor.value.fecha}</span>
                    </p>
                    <p class="font-weight-bold">Total: 
                        <span class="font-weight-normal">${cursor.value.cantidad*cursor.value.cotizacion}</span>
                    </p>
                    
                `;
                //boton de borrar
                const btnBorrar = document.createElement('button');
                btnBorrar.classList.add('borrar', 'btn', 'btn-danger');
                btnBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                btnBorrar.onclick = borrarMoneda;
                monedaHTML.appendChild(btnBorrar);

                //append en el padre
                monedas.appendChild(monedaHTML);
                //consultar los próximos registros
                cursor.continue();
            } else {
                if (!monedas.firstChild) {
                    //cuando no hay registros
                    headingAdministra.textContent = 'No tienes compras agregadas';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    monedas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Historial compras';
                }
            }
        }
    }


    function borrarMoneda(e) {
        let monedaID = Number(e.target.parentElement.getAttribute('data-moneda-id'));

        //en IndexeddDB se utilizan las transacciones
        let transaction = DB.transaction(['monedas'], 'readwrite');
        let objectStore = transaction.objectStore('monedas');
        let peticion = objectStore.delete(monedaID);

        transaction.oncomplete = () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se elimino la cita con el ID: ${monedaID}`);

            if (!monedas.firstChild) {
                //cuando no hay registros
                headingAdministra.textContent = 'No tienes compras agregadas';
                let listado = document.createElement('p');
                listado.classList.add('atras');
                listado.textContent = 'No hay registros';
                monedas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Historial compras';
            }
        }
    }

});