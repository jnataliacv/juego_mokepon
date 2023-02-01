// variale global para ataque y cambios de vidas
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Función para seleccionar el elemento mascota/registro del evento boton de seleccionar mascota jugador 
function iniciarJuego() {

    //variables para ocultar las secciones de ataque y reinicio con la propiedad display 
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    //variables para seleccionando el boton con el id del HTML 'getElementById' y darle clicck con 'addEventListener'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Función y lógica de la mascota que escoge el jugador 
function seleccionarMascotaJugador() {
    //variable para ocultar la sección de seleccionar mascota
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    //variable para mostrar la sección de seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    //Variables para preguntar al condicional checked seleccionando el elemento del input de cada mascpta del HTML 
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    //varaiable para seleccionar mascota y que nos salga en nuestro mensaje con span
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    //condicionales para preguntar que mascota a sido selecionado con checked  
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

    //varibles para que el pc de forma aleatoria escoja la mascota y salga el mensaje con span
    let mascotaAleatorio = numeroAleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    //logica de condicional para la mascota aleatoria del pc
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

//Función ataque jugador fuego
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
//Función ataque jugador agua
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
//Función ataque jugador tierra
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

//Función para el ataque aleatorio del pc
function ataqueAleatorioEnemigo() {
    //varaiable para llamar formula matematica de aleatorio
    let ataqueAleatorio =  numeroAleatorio(1,3)
    //Condicional para el ataque aleatorio del pc
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else  if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

//Función para ver el resultado del combate por cada ataque
function combate() {
    // Varibales para las vidas del jugador y pc, y que salgan en el mensaje con span
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    //Logica para el resultado del ataque y que se le vaya quintando vidas al perdedor
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
//Función para ver el  resusltado final e imprimir el mensaje de ganador o perdedor
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES! Ganaste 😜')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste 😢')
    }
    
} 

//Función para crear mensaje del ataque 
function crearMensaje(resultado) {
    //variable para seleccionar el elemento mensaje del HTML
    let sectionMensajes = document.getElementById('mensaje')

    //variable para crear un parrafo con el mensaje de ataque tanto del jugador como el pc
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascotas del enemigo atacó con ' + ataqueEnemigo + ' ' +  resultado
    //Agregar al final del cuerpo del documento con appendChild
    sectionMensajes.appendChild(parrafo)
}

//Función para crear mensaje final de la partida 
function crearMensajeFinal(resultadoFinal) {
    //variable para unir con el parrafo mensaje que salga la parte final si ganaste o perdiste
    let sectionMensajes = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    //variables con disabled para que no funcionen mas los botones de ataque
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true 
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true 
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    //variable para mostrar el boton de reiniciar 
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

// Función para reiniciar juego con el metodo location.reload
function reiniciarJuego(){
    location.reload()
}

//Función y ecuacion matemática para que la pc escoja aleatoriamnete 
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

window.addEventListener('load', iniciarJuego)
