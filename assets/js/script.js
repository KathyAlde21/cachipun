//console.log('validando link');
// 1 es piedra, 2 es papel, 3 es tijera

/*FUNCION ALEATORIO para que quede más ordenado */
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
/* ELECCIÓN ahora como función junto los datos de jugador y pc */
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
         resultado = 'Piedra 🥌'
    }else if(jugada == 2){
        resultado = 'Papel 📰'
    }else if(jugada == 3){
        resultado = 'Tijera ✂️'
    }else{
        resultado = 'Nulo'
    }
    return resultado 
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){ //mientras se cumpla va a correr el codigo
    pc = aleatorio(1,3) //es importante para que la computadora elija su número
    jugador = prompt('Elije: \n1 para piedra \n2 para papel \n3 para tijera')

    alert('PC elige: ' + eleccion(pc))
    alert('Tu eliges: ' + eleccion(jugador))
    
    // 1 es piedra, 2 es papel, 3 es tijera
    //COMBATE
    if (pc == jugador) {
        alert('EMPATE')
        //con un || que significa o, puedo unir todos porque el alert es igual
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){ 
        alert('GANASTE')
        triunfos = triunfos + 1 //le sumo 1 para dar opción al siguiente juego
    }else{
        alert('PERDISTE')
        perdidas = perdidas + 1 //le sumo 1 para dar opción al siguiente juego
    }
    
}
//se va a detener cuando uno de los dos gane tres veces
alert('Ganaste ' + triunfos + ' veces. Perdiste ' + perdidas + ' veces.')


