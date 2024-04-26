import { NavLink, Outlet } from "react-router-dom";
import { IconClipboard2Fill, IconTableList } from "../utils/Icons";

function Nav() {
  return (
    <>
      <nav className=" p-4 space-x-4 flex ">
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold flex items-center border-b-4 border-indigo-500 pr-2 " : "flex items-center text-black/50")}
          to={"/tasks/board"}
        >
         <IconClipboard2Fill className=" h-5 w-5 mr-1"/> Tablero 
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold flex items-center border-b-4 border-indigo-500 pr-2" : " flex items-center text-black/50")}
          to={"/tasks/list"}
        >
         <IconTableList className="h-5 w-5 mr-1"/> Lista
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
