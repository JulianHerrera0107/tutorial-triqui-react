import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );//Utilizar las {} para llamar el componente
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) { //Creación de un Closure para la función handleClick
    if (squares[i] || calcularGanador(squares)) { //Si el cuadrado ya está lleno, genera un return en la función handleClick, 
    // antes de que intente actualizar el estado del tablero.
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calcularGanador(squares);
  let status;
  if (winner) {
    status = `El Ganador es ${winner}`;
  } else {
    status = `Siguiente jugador: "${xIsNext ? "X" : "O"}"`;
  }

  return (
    <>
    /*Utilzamos Fragmentos (<> </>); para agregar más de un elemento JSX*/
      <div className="status">{status}</div>
      <div className="board-row">
        /* Si queremos dividir en secciones diferentes los elementos utilizamos un Div con estilos CSS */
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> 
        //Componente value en square asignando un valor - Se cambia el prop por useState
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> 
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
function calcularGanador(squares){
  const lines = [
    [0, 1, 2], //Gana en superior horizontal
    [3, 4, 5], //Gana en centro horizontal
    [6, 7, 8], //Gana en bajo horizontal
    [0, 3, 6], //Gana en izquierda vertical
    [1, 4, 7], //Gana en medio vertical
    [2, 5, 8], //Gana en derecha vertical
    [0, 4, 8], //Gana en diagonal izquierda
    [2, 4, 6], //Gana en diagonal derecha
  ];
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
