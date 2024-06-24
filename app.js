let numeroSecreto = 0;
let intetos = 0;
let listaNumerosSorteados=[];
let numeroMaximo =10;

console.log(numeroSecreto)
function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intetos)

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intetos} ${(intetos===1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')            
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intetos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(params) {
    let valorCaja = document.querySelector('#valorUsuario').value="";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    // Si ya sorteamos tdoso los numeros, mostramos un mensaje en pantalla.
    // Si el numero generado esta incluido en la lista, hacemos una cosa, si no hacemos otra cosa
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{

    
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}




function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del Numero Secreto!");
    asignarTextoElemento("p",`Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intetos=1;
}

function reiniciarJuego() {

    limpiarCaja();
   
    condicionesIniciales();
  
    //Deshabilitar el boton de nuevo juego  

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    condicionesIniciales();
    asignarTextoElemento("h1", "Juego del Numero Secreto!");
    asignarTextoElemento("p",`Indica un Numero del 1 al ${numeroMaximo}`)

