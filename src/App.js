function Square({ value }){
  /* componente Square se le puede pasar un objeto llamado value*/
  /* Creamos un componente Square para editar simultaneamente los elementos*/
  return <button className="square">{value}</button>; //Utilizar las {} para llamar el componente
}
export default function Board() {
  return (
    <>
    /*Utilzamos Fragmentos (<> </>); para agregar más de un elemento JSX*/
      <div className="board-row">
        /* Si queremos dividir en secciones diferentes los elementos utilizamos un Div con estilos CSS */
        <Square value="1"/>; //Componente value en square asignando un valor
        <Square value="2"/>;
        <Square value="3"/>;
      </div>
      <div className="board-row">
        <Square value="4"/>;
        <Square value="5"/>;
        <Square value="6"/>;
      </div>
      <div className="board-row">
        <Square value="7"/>;
        <Square value="8"/>;
        <Square value="9"/>;
      </div>
    </>
  );
}
