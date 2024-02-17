import React, { useEffect, useRef } from "react";
import { Formulario } from "./Formulario";

function Modal({ task, handleSubmit,changeModalStatus }) {
  return (
    <article className="modal">
      <section className="modal-container">
        <Formulario task={task} handleSubmit={handleSubmit} />
        <button onClick={changeModalStatus}>Cerrar</button>
      </section>
    </article>
  );
}

export default Modal;
