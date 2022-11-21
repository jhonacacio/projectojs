
const precioLista = document.getElementById("precioLista");
const totalApagar = document.getElementById("precioTotal");
const modeloSeleccionado = document.getElementById("modeloAutoSeleccionado");
const cuotaInicial = document.getElementById("cuotaInicial");
const descuento = document.getElementById("descuento");

// calculo del valor de descuento
const valorDescuento = (producto) => {
    let descuento = producto.precioLista - producto.precioAuto;
    return descuento
}
// calculo de la cuota inicial 
const calculoCuotaInicial = (producto) => {
    valorCuota = producto.precioAuto / 2;
    return valorCuota
}
//contenedor para el resultado de la cotizacion
const mostrarCotizacion = (producto) => {
    let precio = producto.precioAuto; 
    impresionCotizacion(producto,precio)
    }

// impresion de cotizacion
    const impresionCotizacion = (producto,precio)=> {
        modeloSeleccionado.innerText = `${producto.modeloAuto}`
        precioLista.innerText = `$${producto.precioLista}`;     
        descuento.innerText = '$' + valorDescuento(producto);     
        cuotaInicial.innerText =  '$' + calculoCuotaInicial(producto) ;     
        totalApagar.innerText = '$' + producto.precioAuto ;
        guardarCotizacion(producto,precio)
        }
// guardar cotizacion en localStorage
const guardarCotizacion = (producto,total) => {
        localStorage.setItem('cotizacion',JSON.stringify(producto,total));
        }
// obtener datos de cotizacion de localStorage
const obtenerCotizacion = () =>{
    const cotizacionStorage = JSON.parse(localStorage.getItem('cotizacion'));
    return cotizacionStorage;
}

//accion de boton para mostrar contenedor de todos los productos
const mostrarProductos = (claseBoton,display1,display2,display3,display4) =>{
let boton = document.getElementById(claseBoton);
boton.onclick = () => {
    document.getElementById('contenedorTodos').style.display = display1;
    document.getElementById('contenedorCamionetas').style.display = display2;
    document.getElementById('contenedorSedan').style.display = display3;
    document.getElementById('contenedorSuv').style.display = display4;
}
};
//contenedor para todos los objetos en general
const contenedorTodos = (id) => {
const contenedor = document.getElementById(id);  
        modelosAutos.forEach( (producto) => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML += `  
            <div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.modeloAuto}</h5>
              <p class="card-info">${producto.marca}</p>
              <p class="card-info">Año: ${producto.anioAuto}</p>
              <p class="card-info">Tipo: ${producto.tipoAuto}</p>
              <p class="card-priceList">Precio lista: ${producto.precioLista}</p>
              <p class="card-price">Desde: ${producto.precioAuto}</p>
              <button id="agregar${producto.id}" name="marcador" class="btn btn-primary">Comprar</button>
            </div>`

            contenedor.appendChild(div);
            
            const boton = document.getElementById(`agregar${producto.id}`);
            boton.addEventListener('click',() => { 
                mostrarCotizacion(producto);
       })
        });
    }

//contenedor para objetos con filtro
const contenedorFiltro = (id,tipoAuto) => {
const contenedor = document.getElementById(id);
const modeloAuto = modelosAutos.filter(producto => producto.tipoAuto === tipoAuto);
modeloAuto.forEach( producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.modeloAuto}</h5>
      <p class="card-info">${producto.marca}</p>
      <p class="card-info">Año: ${producto.anioAuto}</p>
      <p class="card-info">Tipo: ${producto.tipoAuto}</p>
      <p class="card-priceList">Precio lista: ${producto.precioLista}</p>
      <p class="card-price">Desde: ${producto.precioAuto}</p>
      <button id="agregarCamioneta${producto.id}" name="marcador" class="btn btn-primary">Comprar</button>
      </div>`
      contenedor.appendChild(div);
  
      const boton = document.getElementById(`agregarCamioneta${producto.id}`);
      boton.addEventListener('click',() => { 
        mostrarCotizacion(producto);
            })
        });
    };

contenedorFiltro('contenedorSuv','Suv');
contenedorTodos('contenedorTodos');
contenedorFiltro('contenedorCamionetas','Camioneta');
contenedorFiltro('contenedorSedan','Sedan');

mostrarProductos('btnAll','flex','none','none','none');
mostrarProductos('btnSuv','none','none','none','flex');
mostrarProductos('btnCamionetas','none','flex','none','none');
mostrarProductos('btnSedan','none','none','flex','none');

document.addEventListener('DOMContentLoaded', () =>{
    mostrarCotizacion(obtenerCotizacion());
})