let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados =[];
let numeroMaximo = 10;


//Es para poder asignar un texto en varios sin tener que repetir lo mismo 
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   //console.log(intentos);
       if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    }  
        else{
            if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
            }else{
            asignarTextoElemento("p","El número secreto es mayor");            
        }
            intentos++;
            limpiarCaja();
        }
        return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    
    
    //Si ya todos los numeros fueron sorteados debe de mostrar un texto
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
      
        
    }else{
    //si el numero esta incluido en la lista
    if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto");
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
   }

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Poner parrafo del 1 al 10
    //generar numero secreto
    //numero de intentos
    condicionesIniciales();
    //desahabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
