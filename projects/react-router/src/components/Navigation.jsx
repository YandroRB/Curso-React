import { Link, NavLink } from "react-router-dom";
import './Navigation.css'

export default function Navigation(){
    return (

        <>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/acerca'}>Acerca</Link>
            <Link to={'/contacto'}>Contacto</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/productos'}>Productos</Link>
            <Link to={'/servicios'}>Servicios</Link>
        </nav>
        <nav>
            <NavLink className={({isActive})=>isActive?'Isfocus':''} to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=>isActive?'Isfocus':''} to={'/acerca'}>Acerca</NavLink>
            <NavLink className={({isActive})=>isActive?'Isfocus':''} to={'/contacto'}>Contacto</NavLink>
        </nav>
        </>
    )
}