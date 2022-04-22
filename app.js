
// el reto es sobre Tic Tac Toe, la primera parte o sprint del reto va a ser que dado un tablero en un array de 9 posiciones, determinar si ganan las X los O o hay empate, recuerden que un ganador en un TicTacToe se determina si tiene 3 iguales en fila, columna o diagonal

// Adicional, debemos garantizar que no hubo trampa, para determinar si la X o el O ganó sin trampa, el número de los dos símbolos debe ser igual o con diferencia de 1 máximo, es decir, si hay X=5 entonces O debe ser igual a 4, si X = 4, entonces O es 3,4,5

// Un ejemplo de un array del estado del juego podría ser: ["X", "X", "X", "O", "O", "X", "O", "", "" ]




// Tablero Actual
let tablero = ["X", "X", "X", "X", "X", "X", "O", "O", "O"];

// Definir quien gano o si hay un empate
function verificarGanador(tablero) {
  let combos =  [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

  for(let [a, b, c] of combos) {
      if(tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
          return  `El ganador es: ${tablero[a]}  ¡Felicitaciones!`;
      }
  }
  return '¡Tenemos un empate!';
}

//Adicional No Trampa

// Contando X & O
function contadorMovimientos(tablero) {
  let cantidadDeX = 0
  let cantidadDeO = 0

  tablero.forEach(elements => {
    if (elements === 'X') {
      cantidadDeX++
    }else if(elements === 'O') {
      cantidadDeO++
    }
  })

  if(cantidadDeX === cantidadDeO || cantidadDeX === cantidadDeO+1 || cantidadDeX === cantidadDeO-1) {
    return true
  } else {
    return false
  }
}

function main (tablero) {
  let ganador = verificarGanador(tablero)
  let esValido = contadorMovimientos(tablero);

  if (esValido === true) {
    console.log(ganador)
  }else {
    console.log('Es un resultado trucado, por lo tanto no hay ganador')
  }
}

main(tablero);