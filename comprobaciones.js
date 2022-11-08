function cuotas() {
    let cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 a 12 cuotas'));
    cantidadDeCuotas = validarCantidadDeCuotas(cantidadDeCuotas);
return cantidadDeCuotas
}

function validarCantidadDeCuotas(cantidadDeCuotas) {
    while(cantidadDeCuotas < 1||cantidadDeCuotas > 12 || Number.isNaN(cantidadDeCuotas) ){
        alert('cantidadDeCuotas no valida, ingrese un numero correcto de cuotas');
        cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 , 3 , 6 y 12'));
    }
    return cantidadDeCuotas
}

const calculoPrecioCuotas = (precio,cantidadDeCuotas)=> {
    
    if(cantidadDeCuotas <= 1){
        precio = precio;
    }else if(cantidadDeCuotas <= 5){
        precio += precio * 0.2;
    }else if(cantidadDeCuotas <= 9){
        precio += precio * 0.4;
    }else{
        precio += precio * 0.8;
    }
    const valorDeCuota =  precio / cantidadDeCuotas;
    return valorDeCuota
}
