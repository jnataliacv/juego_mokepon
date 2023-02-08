const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquedelJugador = document.getElementById('ataque-del-Jugador')
const ataquedelEnemigo = document.getElementById('ataque-del-Enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let hipodoge = new Mokepon('Hipodoge', 'mascota/Hipopotamo.png.png', 5)
let capipepo = new Mokepon('Capipepo', 'mascota/cocodrilo.png.png', 5)
let ratigueya = new Mokepon('Ratigueya', 'mascota/ratigueya.png.png', 5)
let langostelvis = new Mokepon('Langostelvis', 'mascota/langosta.png.png', 5)
let tucapalma = new Mokepon('Tucapalma', 'mascota/tucan.png.png', 5)
let pydos = new Mokepon('Pydos', 'mascota/pydos.png.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'},
)
capipepo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'},
)
ratigueya.ataques.push(
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
langostelvis.ataques.push(
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
)
tucapalma.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌎', id: 'boton-tierra'},
)
pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌎', id: 'boton-tierra'},
)
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

//Función para seleccionar el elemento mascota/registro del evento boton de seleccionar mascota jugador 
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}/>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p> 
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    })
    sectionReiniciar.style.display = 'none'

    //Darle clicck con 'addEventListener'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Función y lógica de la mascota que escoge el jugador 
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

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
    //variable para crear un parrafo con el mensaje de ataque tanto del jugador como el pc 
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    //"Sobre escribir el mensaje del html "
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
   
    //Agregar al final del cuerpo del documento con appendChild
    ataquedelJugador.appendChild(nuevoAtaqueJugador)
    ataquedelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

//Función para crear mensaje final de la partida 
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true 
    botonAgua.disabled = true 
    botonTierra.disabled = true
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
