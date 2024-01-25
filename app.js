let numeroSecreto ;
let intentos ;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElelemnto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    limpiarCaja()
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElelemnto('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : "veces"}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        // el susuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElelemnto('p','El numero secreto es menor');
        }else{
            asignarTextoElelemnto('p','El numero secreto es mayor');
        }
        intentos ++;
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales(){
    asignarTextoElelemnto ('h1','Juego del número secreto');
    asignarTextoElelemnto ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    // limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el bot'on de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //si el numero esta incluido en la lista
    if (listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElelemnto('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

condicionesIniciales();