import "./Modal.css"
import {IconClose} from "./Icons"
export function Modal ({imageProduct,setModalOpen}){
    return (
      <div className="modal">
        <div className="modal-container">
          <img src={imageProduct} alt="imagen" />
        </div>
        <button title="cerrar modal" onClick={()=>setModalOpen(prevState => !prevState)}> <IconClose width={35} fill={"#fff"} height={35}/> </button>
      </div>
    )
  }