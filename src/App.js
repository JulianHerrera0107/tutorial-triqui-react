function Square(){
  return <button className="square">1</button>;
}
export default function Board() {
  return (
    <>
    /*Utilzamos Fragmentos (<> </>); para agregar más de un elemento JSX*/
      <div className="board-row">
        /* Si queremos dividir en secciones diferentes los elementos utilizamos un Div con estilos CSS */
        <button className="square">1</button>;
        <button className="square">2</button>;
        <button className="square">3</button>;
      </div>
      <div className="board-row">
        <button className="square">4</button>;
        <button className="square">5</button>;
        <button className="square">6</button>;
      </div>
      <div className="board-row">
        <button className="square">7</button>;
        <button className="square">8</button>;
        <button className="square">10</button>;
      </div>
    </>
  );
}
