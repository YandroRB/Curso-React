import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <img src="/404.svg" alt="Not Found" className="max-h-[550px]" />
      <Link
        className="neon-hover-button bg-sky-600 font-bold text-gray-200 hover:bg-sky-400 hover:text-gray-800 p-3 rounded-lg"
        to={'/'}
      >
        Regresar al inicio
      </Link>
    </div>
  );
}

export default NotFound;
