import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(-1);
  };
  return (
    <div className="w-full h-full bg-indigo-400/50 grid place-content-center text-center font-bold">
      <span className="text-[10rem]/snug text-slate-600">404</span>
      <span className=" text-lg">Not ¯\_(ツ)_/¯ Fount</span>
      <button className="border border-slate-800 mt-8 py-3 rounded-md hover:bg-slate-300 bg-slate-100" onClick={handleButton}>Regresar</button>
    </div>
  );
}

export default NotFound;
