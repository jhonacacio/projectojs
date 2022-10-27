let precioModeloAuto= 0;
let precioDeCuotas = 0;
let cantidadDeCuotas = 0;
let anioDeAuto = 0;
validacionDeCompra(precioCuotas(AnioAuto(precioModeloDeAuto(modeloDeAuto))));

// modelo del auto
    function modeloDeAuto(){
        let modeloAuto = Number(prompt('Que tipo de auto deseas asegurar? ingresa el numero que corresponda \n 1-Camioneta , 2-Sedan, 3-Motocicleta'));
        while(modeloAuto < 1 || modeloAuto > 3 || isNaN(modeloAuto)){
            alert('Modelo de automovil incorrecto , ingresa el numero correspondiente');
            modeloAuto = Number(prompt('Que tipo de auto deseas asegurar? ingresa el numero que corresponda \n 1-Camioneta , 2-Sedan, 3-Motocicleta'));
        }
        return modeloAuto;
    }

 //modelo del automovil y precio
function precioModeloDeAuto(modeloAuto){
    
    switch (modeloAuto()) {
        case 1:
                precioModeloAuto = 500;
            break;
        case 2:
                precioModeloAuto = 300;
            break;
        case 3:
                precioModeloAuto = 100;
            break;
        default:
            alert('Modelo de vehiculo no valido')
            break;
    }
    return precioModeloAuto;
}
    //año del automovil
    function AnioAuto(precioModeloAuto){
        anioDeAuto = Number(prompt('De que año es tu vehiculo?', 'ingresa un año entre 2000 y 2022'));
           while(anioDeAuto < 2000 || anioDeAuto > 2022 ){
               alert('el Año debe estar entre 2000 y 2022');
               anioDeAuto = Number(prompt('De que año es tu vehiculo?', 'ingresa un año entre 2000 y 2022'));
           }
           if (anioDeAuto >= 2020) {
               precioModeloAuto += 20
           } else if(anioDeAuto >= 2010){
               precioModeloAuto += 100
           } else if(anioDeAuto >= 2000){
               precioModeloAuto += 200
           }
           return precioModeloAuto;
}

function precioCuotas(precioModeloAuto){
    //cuotas a pagar
    cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 , 3 , 6 y 12'));
    while(cantidadDeCuotas !== 1 && cantidadDeCuotas !== 3 && cantidadDeCuotas !== 6 && cantidadDeCuotas !== 12 ){
        alert('cantidadDeCuotas no valida, ingrese un numero correcto de cuotas');
        cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 , 3 , 6 y 12'));
    }
    if(cantidadDeCuotas === 1){
        precioModeloAuto += 0;
    }else if(cantidadDeCuotas === 3){
        precioModeloAuto += precioModeloAuto * 0.2;
    }else if(cantidadDeCuotas === 6){
        precioModeloAuto += precioModeloAuto * 0.4;
    }else if(cantidadDeCuotas === 12){
        precioModeloAuto += precioModeloAuto * 0.8;
    }
    return precioDeCuotas = precioModeloAuto / cantidadDeCuotas;
    
}

function validacionDeCompra(precioModeloAuto,cantidadDeCuotas,precioDeCuotas){
    //resultado
    confirm(`Total : ${precioModeloAuto} Pesos \nCantidad de cuotas: ${cantidadDeCuotas} \nValor de la cuota ${precioDeCuotas} Pesos \n¿acepta contratar el seguro?`);
}  