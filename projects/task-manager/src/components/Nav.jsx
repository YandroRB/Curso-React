import { NavLink, Outlet } from "react-router-dom";
import { IconClipboard2Fill, IconTableList } from "../utils/Icons";

function Nav() {
  return (
    <>
      <nav className=" p-4 space-x-4 flex ">
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold flex items-center border-b-2 border-indigo-500  hover:bg-indigo-300 py-1 px-2 rounded-t-md" : "flex items-center text-black/50 hover:bg-indigo-300 py-1 px-2 rounded-md")}
          to={"/tasks/board"}
        >
         <IconClipboard2Fill className=" h-5 w-5 mr-1"/> Tablero 
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold flex items-center border-b-2 border-indigo-500 hover:bg-indigo-300 py-1 px-2 rounded-t-md " : " flex items-center text-black/50 hover:bg-indigo-300 py-1 px-2 rounded-md")}
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
