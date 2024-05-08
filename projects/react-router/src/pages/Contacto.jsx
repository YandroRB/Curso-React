export default function Contacto (){
    return(
        <>
        <h1>Contactame aqui</h1>
        <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required/>

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required/>

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
        </form>
        </>
    )
}