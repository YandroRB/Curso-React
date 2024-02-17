export function Modal ({imageProduct,setModalOpen}){
    return (
      <div className="modal">
        <div className="modal-container">
          <img src={imageProduct} alt="imagen" />
          <button onClick={()=>setModalOpen(prevState => !prevState)}>✖</button>
        </div>
      </div>
    )
  }