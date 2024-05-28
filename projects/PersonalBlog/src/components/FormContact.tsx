function FormContact() {
  return (
    <form className="flex flex-col max-w-[420px] gap-y-1 mx-auto">
      <label className=" text-gray-100" htmlFor="nombre">
        Nombre
      </label>
      <input
        className=" rounded-lg px-3 py-1 bg-gray-500"
        autoComplete="off"
        type="text"
        id="nombre"
        placeholder="¿Cual es tu nombre?"
      />
      <label className=" text-gray-100" htmlFor="correo">
        Correo Electronico
      </label>
      <input
        className=" rounded-lg px-3 py-1 bg-gray-500"
        type="text"
        id="correo"
        placeholder="Tu correo electronico"
      />
      <label className=" text-gray-100" htmlFor="comentario">
        Nombre
      </label>
      <textarea
        className=" rounded-lg px-3 py-1 bg-gray-500 resize-none"
        id="comentario"
        placeholder="¿Sobre qué quieres hablarme?"
        rows={7}
      ></textarea>
      <button
        type="submit"
        className="neon-hover-leer bg-sky-300 w-[125px] mt-4 rounded py-1 hover:bg-sky-200 hover:font-bold"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormContact;
