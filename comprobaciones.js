function validarCantidadDeCuotas(cantidadDeCuotas) {
    while(cantidadDeCuotas < 1||cantidadDeCuotas > 12 || Number.isNaN(cantidadDeCuotas) ){
        alert('cantidadDeCuotas no valida, ingrese un numero correcto de cuotas');
        cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 , 3 , 6 y 12'));
    }
    return cantidadDeCuotas
}

function cuotas() {
    let cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 a 12 cuotas'));
    cantidadDeCuotas = validarCantidadDeCuotas(cantidadDeCuotas);
return cantidadDeCuotas
}

// Calcular el valor de la cuota
const calculoPrecioCuotas = (precio,cantidadDeCuotas)=> {
    if(cantidadDeCuotas <= 1){
        precio = precio;
    }else if(cantidadDeCuotas <= 5){
        precio += precio * 0.02;
    }else if(cantidadDeCuotas <= 9){
        precio += precio * 0.04;
    }else{ precio += precio * 0.08;}
    const valorDeCuota = Math.round(precio / cantidadDeCuotas) ;
    return valorDeCuota
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
        let precio = producto.precioAuto;
        let cantidadDeCuotas = cuotas();
        let totalCuota = calculoPrecioCuotas(precio,cantidadDeCuotas);
        let total = totalCuota * cantidadDeCuotas 
        confirm(`El Valor del vehiculo es: ${precio} \nEl total a pagar es: ${total} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${totalCuota} dolares \nQuieres comprar el auto?`)
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
        let precio = producto.precioAuto;
        let cantidadDeCuotas = cuotas();
        let totalCuota = calculoPrecioCuotas(precio,cantidadDeCuotas);
        let total = totalCuota * cantidadDeCuotas 
        confirm(`El Valor del vehiculo es: ${precio} \nEl total a pagar es: ${total} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${totalCuota} dolares \nQuieres comprar el auto?`)
            })
        });
    };



    

