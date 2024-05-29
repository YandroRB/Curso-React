import { useEffect } from 'react';
import { ClaritySuccessStandardSolid, PhXCircleFill } from '../Icons';
import './Post.css';
interface Props {
  status: number;
  isError: boolean;
  closeModal: () => void;
}
const statusValues: Record<number, string> = {
  200: 'El mensaje se ha enviado correctamente',
  429: 'Anteriormente usted ha enviado un mensaje, por favor espere 5 minutos',
  400: 'No se pudo conectar con el servicio, por favor intente mas tarde',
};
function ModalContent({ status, isError, closeModal }: Props) {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      closeModal();
    }, 4000);
    return () => clearTimeout(temporizador);
  }, [closeModal]);
  return (
    <div className="flex flex-col justify-center">
      {isError ? (
        <PhXCircleFill className="  text-red-500 size-[125px]  mx-auto" />
      ) : (
        <ClaritySuccessStandardSolid className=" text-green-500 size-[125px]  mx-auto" />
      )}
      <p className=" text-center">{statusValues[status]}</p>
      <button
        onClick={closeModal}
        className="neon-hover-leer mt-10 mx-auto bg-sky-200 w-[125px] py-2 hover:bg-sky-500 hover:font-bold rounded"
      >
        Cerrar
      </button>
    </div>
  );
}

export default ModalContent;
