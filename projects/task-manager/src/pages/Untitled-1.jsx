import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Componente del modal
const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario o realizar cualquier otra acción
    console.log('Formulario enviado:', formData);
    // Cerrar el modal después de enviar el formulario
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Nombre:</label><br />
          <input type="text" id="fname" name="fname" onChange={handleChange} /><br />
          <label htmlFor="lname">Apellido:</label><br />
          <input type="text" id="lname" name="lname" onChange={handleChange} /><br /><br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

// Componente de la página
const Prueba = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    // Cambiar la ruta a "/tasks/create" sin afectar el contenido visible actualmente
    navigate('/tasks/create', { replace: true });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Volver a la ruta anterior
    navigate(-1);
  };

  return (
    <div>
      <h1>Tablero de tareas</h1>
      <button onClick={handleOpenModal}>+</button>
      {showModal && <Modal onClose={handleCloseModal} />}
      
    </div>
  );
};

export default Prueba