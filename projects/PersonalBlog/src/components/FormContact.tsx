import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import credentials from '../credentials.json';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import ModalContent from './ModalContent';

const overlays = document.getElementById('overlays');

function FormContact() {
  const refForm = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({ status: 400, isError: true });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!refForm.current) return;
    emailjs
      .sendForm(
        credentials.serviceID,
        credentials.emailTemplateID,
        refForm.current,
        {
          publicKey: credentials.publicKey,
          limitRate: {
            throttle: 300000,
          },
        }
      )
      .then((response) => {
        setModalProps({ status: response.status, isError: false });
        setIsModalOpen(!isModalOpen);
      })
      .catch((error: { status: number; text: string }) => {
        setModalProps({ status: error.status, isError: true });
        setIsModalOpen(!isModalOpen);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[420px] gap-y-1 mx-auto"
      >
        <label className=" text-gray-100" htmlFor="nombre">
          Nombre
        </label>
        <input
          className=" rounded-lg px-3 py-1 bg-gray-500"
          autoComplete="off"
          name="from_name"
          type="text"
          id="nombre"
          placeholder="¿Cual es tu nombre?"
          required
        />
        <label className=" text-gray-100" htmlFor="correo">
          Correo Electronico
        </label>
        <input
          className=" rounded-lg px-3 py-1 bg-gray-500"
          name="from_email"
          type="email"
          id="correo"
          placeholder="Tu correo electronico"
          required
        />
        <label className=" text-gray-100" htmlFor="comentario">
          Nombre
        </label>
        <textarea
          className=" rounded-lg px-3 py-1 bg-gray-500 resize-none"
          name="message"
          id="comentario"
          placeholder="¿Sobre qué quieres hablarme?"
          rows={7}
          required
        ></textarea>
        <button
          type="submit"
          className="neon-hover-leer bg-sky-300 w-[125px] mt-4 rounded py-1 hover:bg-sky-200 hover:font-bold"
        >
          Enviar
        </button>
      </form>
      {isModalOpen &&
        overlays &&
        createPortal(
          <Modal>
            <ModalContent
              status={modalProps.status}
              isError={modalProps.isError}
              closeModal={closeModal}
            />
          </Modal>,
          overlays
        )}
    </>
  );
}

export default FormContact;
