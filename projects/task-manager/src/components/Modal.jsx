import React from 'react'
import { CloseIcon } from '../utils/Icons'

function Modal({children,closeModal}) {
  return (
    <>
    <div className='fixed  top-0 w-full h-screen z-[100] bg-black/65  grid place-content-center overflow-y-auto'>
        <div className=' bg-white relative p-8 w-[320px] rounded-lg'>
          <button className=' absolute top-2 right-2 hover:text-indigo-500' onClick={closeModal}><CloseIcon/></button>
          {children}
        </div>
    </div>
    <style>
      {`
        body{
          overflow: hidden;
        }
      `}
    </style>
    </>
  )
}

export default Modal