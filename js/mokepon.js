const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquedelJugador = document.getElementById('ataque-del-Jugador')
const ataquedelEnemigo = document.getElementById('ataque-del-Enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge  
let inputCapipepo
let inputRatigueya 
let inputLangostelvis  
let inputTucapalma  
let inputPydos  
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo= 0
let vidasJugador = 3
let vidasEnemigo = 3



// Clase con su constructor de lo que lleva cada objeto 
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
//Variables de cada objeto con su informaciòn
let hipodoge = new Mokepon('Hipodoge', 'mascota/Hipopotamo.png.png', 5)
let capipepo = new Mokepon('Capipepo', 'mascota/cocodrilo.png.png', 5)
let ratigueya = new Mokepon('Ratigueya', 'mascota/ratigueya.png.png', 5)
let langostelvis = new Mokepon('Langostelvis', 'mascota/langosta.png.png', 5)
let tucapalma = new Mokepon('Tucapalma', 'mascota/tucan.png.png', 5)
let pydos = new Mokepon('Pydos', 'mascota/pydos.png.png', 5)

//Agregar cada ataque en el array de cada objeto  
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
//Agregar en la variable array de los mokepones cada objeto
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

//Función para seleccionar el elemento mascota/registro del evento boton de seleccionar mascota jugador 
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    //Iteración del HTML para cada tarjeta del mokepon 
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p> 
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputTucapalma = document.getElementById('Tucapalma')
    inputPydos = document.getElementById('Pydos')

    })

    //Darle clicck con 'addEventListener'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

//Función y lógica de la mascota que escoge el jugador 
function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    //sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex'

    //condicionales para preguntar que mascota a sido selecionado con checked  
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert('Debes seleccionar una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }  
    }
    mostrarAtaques(ataques)
    
}
function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="botonataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}
//Función para saber la secuencia con la que se va puede atacar 
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true 
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true 
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true 
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

//Función y lógica de la mascota que escoge el pc
function seleccionarMascotaEnemigo() {
    //varibles para que el pc de forma aleatoria escoja la mascota con la longitud de los mokepones que hay
    let mascotaAleatorio = numeroAleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo =  mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()
}

//Función para el ataque aleatorio del pc
function ataqueAleatorioEnemigo() {
    //varaiable para llamar formula matematica de aleatorio
    let ataqueAleatorio =  numeroAleatorio(0, ataquesMokeponEnemigo.length -1)
    //Condicional para el ataque aleatorio del pc
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push ('FUEGO')
    } else  if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push ('AGUA')
    } else {
        ataqueEnemigo.push ('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponenete(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
//Función para ver el resultado del combate por cada ataque
function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index])  {
            indexAmbosOponenete(index, index)
            crearMensaje("EMPATE")
        }else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponenete(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponenete(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponenete(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponenete(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()
}
//Función para ver el  resusltado final e imprimir el mensaje de ganador o perdedor
function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('ESTO ES UN EMPATE!! 😎')
    }else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('FELICITACIONES! Ganaste 😜')
    }else{
        crearMensajeFinal('LO SIENTO, perdiste 😢')
    }
} 

//Función para crear mensaje del ataque 
function crearMensaje(resultado) {
    //variable para crear un parrafo con el mensaje de ataque tanto del jugador como el pc 
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    //"Sobre escribir el mensaje del html "
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
   
    //Agregar al final del cuerpo del documento con appendChild
    ataquedelJugador.appendChild(nuevoAtaqueJugador)
    ataquedelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

//Función para crear mensaje final de la partida 
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
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
