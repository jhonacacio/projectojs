// Seleccion de modelo de auto o motocicleta, y año
function comprarSeguroDeAuto() {
    let modeloAuto = 0;
    let anioDeAuto = 0;
    let precioTotalAuto = 0;
    let interesesPorAnio = 0;

    modeloAuto = Number(prompt('Que tipo de auto deseas asegurar? ingresa el numero que corresponda \n 1-Camioneta , 2-Sedan, 3-Motocicleta'));
    modeloAutoValidado = validarModeloDeAuto(modeloAuto);
    anioDeAuto = Number(prompt('De que año es tu vehiculo?', 'ingresa un año entre 2000 y 2022'));
    anioAutoValidado = validarAnioDeAuto(anioDeAuto);
  
    switch (modeloAutoValidado) {
        case 1:
            modeloAutoValidado = 500;
            break;
        case 2:
            modeloAutoValidado = 300;
            break;
        case 3:
            modeloAutoValidado = 100;
            break;
        default:
            alert('Modelo de vehiculo no valido')
            break;
    }

    if (anioAutoValidado <= 2010) {
        interesesPorAnio = 300;
    } else {
        interesesPorAnio = 100;
    }
    precioTotalAuto = modeloAutoValidado + interesesPorAnio;
    
    return precioTotalAuto;
}

function validarModeloDeAuto(modeloAuto){
   
    while(modeloAuto < 1 || modeloAuto > 3 || isNaN(modeloAuto)){
        alert('Modelo de automovil incorrecto , ingresa el numero correspondiente');
        modeloAuto = Number(prompt('Que tipo de auto deseas asegurar? ingresa el numero que corresponda \n 1-Camioneta , 2-Sedan, 3-Motocicleta'));
    }
    return modeloAuto;
}

function validarAnioDeAuto(anioDeAuto){
    while(anioDeAuto < 2000 || anioDeAuto > 2022 || Number.isNaN(anioDeAuto)){
        alert('el Año debe estar entre 2000 y 2022');
        anioDeAuto = Number(prompt('De que año es tu vehiculo?', 'ingresa un año entre 2000 y 2022'));
    }
    return anioDeAuto;
}

// Seleccion de cuotas
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
// Calculo de valor de cuota
function calcularValorDeCuota(cantidadDeCuotas){
    let totalValidadoDeCuota = 0;
    let valorSinCuotas = 0;
    let valorCuotabaja = 0.2;
    let valorCuotaMedia = 0.4;
    let valorCuotaAlta = 0.8;

    if(cantidadDeCuotas <= 1){
        totalValidadoDeCuota = valorSinCuotas;
    }else if(cantidadDeCuotas <= 3){
        totalValidadoDeCuota = valorCuotabaja;
    }else if(cantidadDeCuotas <= 6){
        totalValidadoDeCuota += valorCuotaMedia * 0.4;
    }else{
        totalValidadoDeCuota = valorCuotaAlta;
    }

    return totalValidadoDeCuota
    }


let precio = (comprarSeguroDeAuto());
let precioModeloAuto = precio;
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


confirm(`El total a pagar es: ${valorTotalConCuota} \nLa cantidad de cuotas a pagar es: ${cantidadDeCuotas} \nCada cuota tiene el valor de ${valorDeCuota} dolares \nQuieres comprar el seguro?`)
