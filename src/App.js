import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null); //Se reemplaza Value para llamar una variable con useState

  function handleClick(){
    setValue('X'); //Agregar el componente setValue al momento de hacer clic
    console.log('Hiciste click'); //Componente interactivo
  }
  /* componente Square se le puede pasar un objeto llamado value*/
  /* Creamos un componente Square para editar simultaneamente los elementos*/
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
      </button>
  ); //Utilizar las {} para llamar el componente
}
export default function Board() {
  return (
    <>
    /*Utilzamos Fragmentos (<> </>); para agregar más de un elemento JSX*/
      <div className="board-row">
        /* Si queremos dividir en secciones diferentes los elementos utilizamos un Div con estilos CSS */
        <Square /> //Componente value en square asignando un valor - Se cambia el prop por useState
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
