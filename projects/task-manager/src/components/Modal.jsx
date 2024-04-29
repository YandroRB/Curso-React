import React from 'react'
import { CloseIcon } from '../utils/Icons'

function Modal({children,closeModal}) {
  return (
    <div>
        <div>
          <button onClick={closeModal}><CloseIcon/></button>
          {children}
        </div>
    </div>
  )
}

export default Modal