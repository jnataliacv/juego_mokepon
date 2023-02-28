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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './mascota/mapa.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


// Clase con su constructor de lo que lleva cada objeto 
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = numeroAleatorio(0, mapa.width - this.ancho)
        this.y = numeroAleatorio(0, mapa.height -this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            )
        }
        }

    
//Variables de cada objeto con su informaciòn
let hipodoge = new Mokepon('Hipodoge', 'mascota/Hipopotamo.png.png', 5, 'mascota/Hipopotamo.png.png')
let capipepo = new Mokepon('Capipepo', 'mascota/cocodrilo.png.png', 5, 'mascota/cocodrilo.png.png')
let ratigueya = new Mokepon('Ratigueya', 'mascota/ratigueya.png.png', 5, 'mascota/ratigueya.png.png')
let langostelvis = new Mokepon('Langostelvis', 'mascota/langosta.png.png', 5, 'mascota/langosta.png.png')
let tucapalma = new Mokepon('Tucapalma', 'mascota/tucan.png.png', 5, 'mascota/tucan.png.png')
let pydos = new Mokepon('Pydos', 'mascota/pydos.png.png', 5, 'mascota/pydos.png.png')

let hipodogeEnemigo = new Mokepon('Hipodoge', 'mascota/Hipopotamo.png.png', 5, 'mascota/Hipopotamo.png.png', 80, 120)
let capipepoEnemigo = new Mokepon('Capipepo', 'mascota/cocodrilo.png.png', 5, 'mascota/cocodrilo.png.png', 350, 195)
let ratigueyaEnemigo = new Mokepon('Ratigueya', 'mascota/ratigueya.png.png', 5, 'mascota/ratigueya.png.png', 240, 120)
let langostelvisEnemigo = new Mokepon('Langostelvis', 'mascota/langosta.png.png', 5, 'mascota/langosta.png.png', 250, 195)
let tucapalmaEnemigo = new Mokepon('Tucapalma', 'mascota/tucan.png.png', 5, 'mascota/tucan.png.png',430, 245)
let pydosEnemigo = new Mokepon('Pydos', 'mascota/pydos.png.png', 5, 'mascota/pydos.png.png',460, 275)

//Agregar cada ataque en el array de cada objeto  
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'},
)
hipodogeEnemigo.ataques.push(
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
capipepoEnemigo.ataques.push(
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
ratigueyaEnemigo.ataques.push(
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
langostelvisEnemigo.ataques.push(
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
tucapalmaEnemigo.ataques.push(
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
pydosEnemigo.ataques.push(
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
        alert('Selecciona una mascota')
        return
    }

    sectionSeleccionarMascota.style.display = 'none'

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
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
//Función para dibujar con drawImage y limpiar los movimientos con clearRect del mokepon
function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}
// Función para mover nuestro mokepon con su respectiva velocidad y detener el movimiendo 
function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    
    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}
function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota =  mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque.style.display='flex'
    sectionVerMapa.style.display='none'
    seleccionarMascotaEnemigo(enemigo)}


window.addEventListener('load', iniciarJuego)
