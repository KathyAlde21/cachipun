//console.log('validando link');
// 1 es piedra, 2 es papel, 3 es tijera
//let jugador = 0
//numero pc aleatorio
/*
let min = 1
let max = 3
let pc = Math.floor(Math.random()*(max-min+1)+min)
*/

/*FUNCION ALEATORIO => para anotar lo de arriba pero que quede más ordenado */
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)

}
let jugador = 0
let pc = aleatorio(1,3)

jugador = prompt('Elije: \n1 para piedra \n2 para papel \n3 para tijera')
//alert('Elegiste ' + jugador)

/* PODRIA ESCRIBIRLO ASI PERO SE VE FEO
if(jugador == 1){
    alert('Elejiste piedra')
}
if(jugador == 2){
    alert('Elejiste papel')
}
if(jugador == 3){
    alert('Elejiste tijera')
}
*/
/* CONDICIONALES */
//JUGADOR
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
    //con un || que significa o, puedo unir todos porque el alert es igual
}else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){ 
    alert('GANASTE')
}else{
    alert('PERDISTE')
}

