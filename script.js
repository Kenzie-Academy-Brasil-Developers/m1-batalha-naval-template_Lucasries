// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard){
  var copia = []
  for (var i = 0; i < initialBoard.length; i++) {
    var ColLinha = []
    for (var j = 0; j < initialBoard[i].length; j++){
      ColLinha.push(initialBoard[i][j])
    }
    copia.push(ColLinha)
  }

  for(var k = 0; k < shipPositions.length; k++){
    var posicao = shipPositions[k];
    var linha = posicao[0];
    var coluna = posicao[1];
    copia[linha][coluna] = "S";
  }
  return copia;
}

function checkGuesses(guesses, mountedBoard) {
  var copia = [];
  for (var i = 0; i < mountedBoard.length; i++) {
    var ColLinha = [];
    for (var j = 0; j < mountedBoard[i].length; j++) {
      ColLinha.push(mountedBoard[i][j]);
    }
    copia.push(ColLinha);
  }

  for (var k = 0; k < guesses.length; k++) {
    var guess = guesses[k];
    var linha = guess[0];
    var coluna = guess[1];
    if (copia[linha][coluna] === "S") {
      copia[linha][coluna] = "X";
    }
  }

  return copia;
}

function checkWinCondition(guessedBoard) {
  for (var i = 0; i < guessedBoard.length; i++) {
    var ColLinha = guessedBoard[i];
    for (var j = 0; j < ColLinha.length; j++) {
      if (ColLinha[j] === "S") {
        return false;
      }
    }
  }

  return true;
}