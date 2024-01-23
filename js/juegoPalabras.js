"use strict";
let palabraIntroducida;
let palabras = [];
let letraAimprimir;
let letraAleatoria;
const botonEnviar = document.getElementById('enviar');
const botonEmpezar = document.getElementById('empezar');
let segundosTotales = 60;

function empiezaPartida(){
    segundosTotales = 60;
    palabras.length = 0;
    document.getElementById('arrayPalabras').innerHTML = "";
    document.getElementById('puntuacionObtenida').innerHTML = "";
    
    reloj();
    generarLetra();
}

function generarLetra(){
    botonEnviar.disabled = false;
    const arrayLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // 27 letras tiene el abecedario
    const indexAleatorio = Math.floor(Math.random()*27);
    letraAleatoria = arrayLetras[indexAleatorio];
    
    letraAimprimir = document.getElementById('indicadorLetra');
    letraAimprimir.innerHTML= letraAleatoria;
    
}

// let segundosTotales = 60;

function reloj(){
    
    document.getElementById('segundos').innerHTML = segundosTotales + " segundos";
    botonEmpezar.disabled = true;
    
    if(segundosTotales==0){
        // acaba
        const arrayPalabrasAimprimir = document.getElementById('arrayPalabras');
        arrayPalabrasAimprimir.innerHTML = palabras;

        const puntuacionAimprimir = document.getElementById('puntuacionObtenida');
        puntuacionAimprimir.innerHTML = palabras.length + " puntos";

        //desactivar el botón enviar, los segundos y la letra aleatoria
        letraAimprimir.innerHTML = "";
        document.getElementById('segundos').innerHTML = "";
        document.getElementById('palabraIntroducida').value = "";

        //deshabilitar el botón
        botonEnviar.disabled = true;
        botonEmpezar.disabled = false;
    }
    else{
        //continuar con el temporizador
        segundosTotales-=1;
        setTimeout("reloj()", 1000);
    }
}

function recibePalabra(){
    // Guarda el valor en una variable
    const palabraIntroducida = document.getElementById('palabraIntroducida').value; 
    //si ha introducido una palabra y empieza por la letra o en mayúscula o en minúscula
    let primeraLetra = palabraIntroducida.substr(0, 1);
    
    //contabilizar y seguir el juego si se introduce una palabra y si esta empieza por la letra requerida
    if((palabraIntroducida.length) && ((primeraLetra == letraAleatoria) || (primeraLetra.toUpperCase() == letraAleatoria))){
        palabras.push(palabraIntroducida);
        
        // Limpiar formulario cuando se envía
        document.getElementById('palabraIntroducida').value = "";

        generarLetra();
    }
    
}

document.getElementById('empezar').addEventListener('click', empiezaPartida);
document.getElementById('enviar').addEventListener('click', recibePalabra);