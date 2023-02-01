// variale global para ataque 
let ataqueJugador

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
    let ataqueAleatorio = numeroAleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
    }else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
    }else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'langostelvis'
    }else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'tucapalma'
    }else {
        spanMascotaEnemigo.innerHTML = 'pydos'
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}
function ataqueAleatorio() {
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
}
//función y ecuacion matemática para que la pc escoja aleatoriamnete 
function numeroAleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

window.addEventListener('load', iniciarJuego)
