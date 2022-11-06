// filtrar por todos los modelos
    let botonAll = document.getElementById('btnAll');
    botonAll.onclick = () => {

        document.getElementById('contenedorTodos').style.display = 'flex';
        document.getElementById('contenedorCamionetas').style.display = 'none';
        document.getElementById('contenedorSedan').style.display = 'none';
        document.getElementById('contenedorSuv').style.display = 'none';
    }

        const pintarProductos = () => {
            const contenedor = document.getElementById('contenedorTodos');
        
            modelosAutos.forEach( producto => {
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
                  <button name="marcador" class="btn btn-primary">Cotizar</button>
                </div>`
                contenedor.appendChild(div);
            })
        };
        pintarProductos();
    



// filtro camionetas 
let botonCamionetas = document.getElementById('btnCamionetas');

botonCamionetas.onclick = () => {
    document.getElementById('contenedorTodos').style.display = 'none';
    document.getElementById('contenedorCamionetas').style.display = 'flex';
    document.getElementById('contenedorSedan').style.display = 'none';
    document.getElementById('contenedorSuv').style.display = 'none';
}

const pintarCamionetas = () => {
    const contenedor = document.getElementById('contenedorCamionetas');
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
          <button name="marcador" class="btn btn-primary">Cotizar</button>
        </div>`
        contenedor.appendChild(div);

       

    })

};

pintarCamionetas();



// //filtro sedan

let botonSedan = document.getElementById('btnSedan');
botonSedan.onclick = () => {
    document.getElementById('contenedorTodos').style.display = 'none';
    document.getElementById('contenedorCamionetas').style.display = 'none';
    document.getElementById('contenedorSedan').style.display = 'flex';
    document.getElementById('contenedorSuv').style.display = 'none';
}
const pintarSedan = () => {
    const contenedor = document.getElementById('contenedorSedan');
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
          <button name="marcador" class="btn btn-primary">Cotizar</button>
        </div>`
        contenedor.appendChild(div);
    })
};

pintarSedan();



//Filtro Todo Suv


let botonSuv = document.getElementById('btnSuv');
botonSuv.onclick = () => {
    document.getElementById('contenedorTodos').style.display = 'none';
    document.getElementById('contenedorCamionetas').style.display = 'none';
    document.getElementById('contenedorSedan').style.display = 'none';
    document.getElementById('contenedorSuv').style.display = 'flex';
}
const pintarSuv = () => {
    const contenedor = document.getElementById('contenedorSuv');
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
          <button name="marcador" class="btn btn-primary">Cotizar</button>
        </div>`
        contenedor.appendChild(div);
    })
};

pintarSuv();

