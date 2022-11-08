let botonAll = document.getElementById('btnAll');
botonAll.onclick = () => {
    document.getElementById('contenedorTodos').style.display = 'flex';
    document.getElementById('contenedorCamionetas').style.display = 'none';
    document.getElementById('contenedorSedan').style.display = 'none';
    document.getElementById('contenedorSuv').style.display = 'none';
}
const contenedor = document.getElementById('contenedorTodos');  
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
              <button id="agregar${producto.id}" name="marcador" class="btn btn-primary">Cotizar</button>
            </div>`

            contenedor.appendChild(div);
            
            const boton = document.getElementById(`agregar${producto.id}`);
            boton.addEventListener('click',() => {             
        let precio = producto.precioAuto;
        let cantidadDeCuotas = cuotas();
        let n = calculoPrecioCuotas(precio,cantidadDeCuotas);
        let total = n * cantidadDeCuotas 
        confirm(`El Valor del vehiculo es: ${precio} \nEl total a pagar es: ${total} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${n} dolares \nQuieres comprar el auto?`)
            })
        })

// filtro camionetas 
let botonCamionetas = document.getElementById('btnCamionetas');

botonCamionetas.onclick = () => {
document.getElementById('contenedorTodos').style.display = 'none';
document.getElementById('contenedorCamionetas').style.display = 'flex';
document.getElementById('contenedorSedan').style.display = 'none';
document.getElementById('contenedorSuv').style.display = 'none';
}


const contenedor2 = document.getElementById('contenedorCamionetas');
const modeloCamioneta = modelosAutos.filter(producto => producto.tipoAuto === 'Camioneta');

  modeloCamioneta.forEach( producto => {
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
      <button id="agregarCamioneta${producto.id}" name="marcador" class="btn btn-primary">Cotizar</button>
    </div>`
    contenedor2.appendChild(div);

    const boton = document.getElementById(`agregarCamioneta${producto.id}`);
    boton.addEventListener('click',() => {
        
        let precio = producto.precioAuto;

let cantidadDeCuotas = cuotas();

if(cantidadDeCuotas <= 1){
    precio = precio;
}else if(cantidadDeCuotas <= 5){
    precio += precio * 0.2;
}else if(cantidadDeCuotas <= 9){
    precio += precio * 0.4;
}else{
    precio += precio * 0.8;
}
let valorTotalConCuota = precio;
const valorDeCuota =  precio / cantidadDeCuotas;


confirm(`El Valor del vehiculo es: ${producto.precioAuto} \nEl total a pagar es: ${valorTotalConCuota} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${valorDeCuota} dolares \nQuieres comprar el auto?`);
    })
});





// //filtro sedan

let botonSedan = document.getElementById('btnSedan');
botonSedan.onclick = () => {
document.getElementById('contenedorTodos').style.display = 'none';
document.getElementById('contenedorCamionetas').style.display = 'none';
document.getElementById('contenedorSedan').style.display = 'flex';
document.getElementById('contenedorSuv').style.display = 'none';
}

const contenedor3 = document.getElementById('contenedorSedan');
const modeloSedan = modelosAutos.filter(producto => producto.tipoAuto === 'Sedan');
modeloSedan.forEach( producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.modeloAuto}</h5>
      <p class="card-info">${producto.marca}</p>
      <p class="card-info">Año: ${producto.anioAuto}</p>
      <p class="card-info">Tipo: ${producto.tipoAuto}</p>
      <p class="card-priceList">Precio lista: ${producto.precioLista}</p>
      <p class="card-price">Desde: ${producto.precioAuto}</p>
      <button id="agregarSedan${producto.id}" name="marcador" class="btn btn-primary">Cotizar</button>
      </div>`
      contenedor3.appendChild(div);
  
      const boton = document.getElementById(`agregarSedan${producto.id}`);
      boton.addEventListener('click',() => {
          
          let precio = producto.precioAuto;
  
  let cantidadDeCuotas = cuotas();
  
  if(cantidadDeCuotas <= 1){
      precio = precio;
  }else if(cantidadDeCuotas <= 5){
      precio += precio * 0.2;
  }else if(cantidadDeCuotas <= 9){
      precio += precio * 0.4;
  }else{
      precio += precio * 0.8;
  }
  let valorTotalConCuota = precio;
  const valorDeCuota =  precio / cantidadDeCuotas;
  
  
  confirm(`El Valor del vehiculo es: ${producto.precioAuto} \nEl total a pagar es: ${valorTotalConCuota} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${valorDeCuota} dolares \nQuieres comprar el auto?`);
      })
  });



//Filtro Todo Suv


let botonSuv = document.getElementById('btnSuv');
botonSuv.onclick = () => {
document.getElementById('contenedorTodos').style.display = 'none';
document.getElementById('contenedorCamionetas').style.display = 'none';
document.getElementById('contenedorSedan').style.display = 'none';
document.getElementById('contenedorSuv').style.display = 'flex';
}

const contenedor4 = document.getElementById('contenedorSuv');
const modeloSuv = modelosAutos.filter(producto => producto.tipoAuto === 'Suv');
modeloSuv.forEach( producto => {
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
      <button id="agregarCamioneta${producto.id}" name="marcador" class="btn btn-primary">Cotizar</button>
      </div>`
      contenedor4.appendChild(div);
  
      const boton = document.getElementById(`agregarCamioneta${producto.id}`);
      boton.addEventListener('click',() => {
          
          let precio = producto.precioAuto;
  
  let cantidadDeCuotas = cuotas();
  
  if(cantidadDeCuotas <= 1){
      precio = precio;
  }else if(cantidadDeCuotas <= 5){
      precio += precio * 0.2;
  }else if(cantidadDeCuotas <= 9){
      precio += precio * 0.4;
  }else{
      precio += precio * 0.8;
  }
  let valorTotalConCuota = precio;
  const valorDeCuota =  precio / cantidadDeCuotas;
  
  
  confirm(`El Valor del vehiculo es: ${producto.precioAuto} \nEl total a pagar es: ${valorTotalConCuota} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${valorDeCuota} dolares \nQuieres comprar el auto?`);
      })
  });

