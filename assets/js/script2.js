//OTRAS OPCIONES MISMOS PROCESOS

/*FUNCION ALEATORIO => para anotar lo de arriba pero que quede más ordenado */
let min = 1
let max = 3
let pc = Math.floor(Math.random()*(max-min+1)+min)


/* COMO INDICAR QUE SE ELIGIO */
if(jugador == 1){
    alert('Elejiste piedra')
}
if(jugador == 2){
    alert('Elejiste papel')
}
if(jugador == 3){
    alert('Elejiste tijera')
}


/* COMO DOS INDICAR QUE SE ELIGIO TODO */
if(jugador == 1){
    alert('Elejiste piedra 🥌')
}else if(jugador == 2){
    alert('Elejiste papel 📰')
}else if(jugador == 3){
    alert('Elejiste tijera ✂️')
}else{
    alerte('Elejiste perder')
}
//PC
if(pc == 1){
    alert('PC elige piedra 🥌')
}else if(pc == 2){
    alert('PC elige papel 📰')
}else if(pc == 3){
    alert('PC elige tijera ✂️')
}

// 1 es piedra, 2 es papel, 3 es tijera
//COMBATE
if (pc == jugador) {
    alert('EMPATE')
}else if(jugador == 1 && pc == 3){
    alert('GANASTE')
}else if(jugador == 2 && pc == 1){
    alert('GANASTE')
}else if(jugador == 3 && pc == 2){
    alert('GANASTE')
}else{
    alert('PERDISTE')
}








