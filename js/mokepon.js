// variale global para ataque 
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Función para seleccionar el elemento mascota/registro del evento boton de seleccionar mascota jugador 
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

//Función y lógica de la mascota que escoge el jugador 
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo'
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya'
    }else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'langostelvis'
    }else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'tucapalma'
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'pydos'
    } else {
        alert('Debes seleccionar una mascota')
    }

    seleccionarMascotaEnemigo()
}

//Función y lógica de la mascota que escoge el pc
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = numeroAleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
    }else if (mascotaAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
    }else if (mascotaAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'langostelvis'
    }else if (mascotaAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'tucapalma'
    }else {
        spanMascotaEnemigo.innerHTML = 'pydos'
    }

}

//funcione ataque jugador fuego
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
//funcione ataque jugador agua
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
//funcione ataque jugador tierra
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

//función para el ataque aleatorio del pc
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio =  numeroAleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else  if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

//función para ver el resultado del combate
function combate() {
let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if ( ataqueJugador == ataqueEnemigo ) {
        crearMensaje( "¡EMPATE! 🤼" );
    } else if ( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ) {
        crearMensaje( "¡GANASTE! 🥳" )
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if ( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ) {
        crearMensaje( "¡GANASTE! 🥳" )
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if ( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
        crearMensaje( "¡GANASTE! 🥳" )
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje( "PERDISTE... 😢" )
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        alert('FELICITACIONES! Ganaste 😜')
    } else if (vidasJugador == 0) {
       alert('Lo siento, perdiste 😢')
    }
    
} 

// función para crear mensaje del ataque 
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensaje')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascotas del enemigo atacó con ' + ataqueEnemigo + ' ' +  resultado

    sectionMensajes.appendChild(parrafo)
}



//función y ecuacion matemática para que la pc escoja aleatoriamnete 
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

window.addEventListener('load', iniciarJuego)
