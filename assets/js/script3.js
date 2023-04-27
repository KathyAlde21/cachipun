/*FUNCION ALEATORIO */
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
let pc = aleatorio(1,3)

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
}else{
    alert('PERDISTE')
}

