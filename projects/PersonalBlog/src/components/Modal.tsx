import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Modal({ children }: Props) {
  return (
    <>
      <div className="fixed  top-0 w-full h-screen z-[100] bg-black/65  grid place-content-center overflow-y-auto">
        <div className=" bg-white p-8 w-[320px] rounded-lg">{children}</div>
      </div>
      <style>
        {`
        body{
          overflow: hidden;
        }
      `}
      </style>
    </>
  );
}

export default Modal;
