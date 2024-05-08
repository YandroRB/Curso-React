import React from 'react'
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';
import { FormTask } from '../components/FormTask';
import { useNavigate } from 'react-router-dom';

const overlays=document.getElementById('overlays');
function ModalFormTask({previousLocation}) {

  const navigate = useNavigate();
  const handleModalClose=()=>{
    navigate(previousLocation.pathname);
  }
  return (
   createPortal(<Modal closeModal={handleModalClose}><FormTask/></Modal>,overlays)
  )
}

export default ModalFormTask