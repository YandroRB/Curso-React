import { useState } from "react";
import { CloseIcon, IconAddR, IconBxsTrash, IconCaretDown, IconCircleFill, IconListTask, IconViewDashboard, ListIcon } from "../utils/Icons";
import { Link, NavLink, useLocation } from "react-router-dom";

function SideBar() {
const location=useLocation();
const [isOpen, setIsOpen] = useState(false);
const [isSubOpen, setIsSubOpen]=useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSubMenu=()=>{
    setIsSubOpen(!isSubOpen);
  }
  return (
    <>
    <aside style={{gridArea:'sidebar'}} className={`z-50 fixed inset-y-0 left-0 w-64 select-none transition-transform duration-300 transform ${isOpen?"translate-x-0":"-translate-x-full"} 
    lg:translate-x-0  lg:static lg:h-screen border-r border-gray-200 bg-white`}>
      <nav >
        <div className=" flex items-center justify-center h-20 relative bg-indigo-950 text-sky-300">
            <div className="lg:hidden absolute right-1 top-1 bg-violet-50  rounded-lg flex items-center justify-center">
            <button onClick={toggleSidebar} className=" text-gray-500  hover:text-gray-700 focus:outline-none">
              <CloseIcon className=" h-6 w-6"/>
            </button>
          </div>
          <h1 className=" text-2xl uppercase font-semibold">Task Manager</h1>
        </div>
        <ul className="  text-xl p-3 space-y-2">
          <li className="cursor-pointer  hover:transition hover:duration-200 hover:bg-indigo-500 hover:bg-opacity-50 rounded-lg">
            <NavLink to={'/'} className={({isActive})=> isActive?'flex items-center p-2 rounded-lg bg-indigo-500 bg-opacity-50':'flex items-center p-2'} ><IconViewDashboard/> <span className=" ml-2">Estadisticas</span></NavLink> 
          </li>
          <li  className={` relative hover:transition hover:duration-200 cursor-pointer ${isSubOpen&& "bg-indigo-500 bg-opacity-50"} hover:bg-indigo-500 hover:bg-opacity-50 rounded-lg`}>
            <NavLink to={'/tasks'} className={({isActive})=> isActive?'flex items-center p-2  rounded-lg bg-indigo-500 bg-opacity-50':'flex items-center p-2'}><IconListTask/> <span className=" ml-2 ">Tareas</span></NavLink> <IconCaretDown onClick={toggleSubMenu} className={` absolute top-3 right-6`} /> 
          </li>
          {isSubOpen&&
            <ul className={`px-4 space-y-1 mt-3 text-lg overflow-hidden` }>
            <li className=" cursor-pointer hover:transition hover:duration-200 hover:bg-indigo-500 hover:bg-opacity-50 rounded-lg">
              <NavLink to={'/tasks/completo/board'} className={({isActive})=> isActive?'flex items-center p-2 rounded-lg bg-indigo-500 bg-opacity-50':'flex items-center p-2'}><IconCircleFill className=" text-lime-500"/> <span className="ml-2">Completas</span></NavLink> 
            </li>
            <li className="cursor-pointer hover:transition hover:duration-200 hover:bg-indigo-500 hover:bg-opacity-50 rounded-lg">
            <NavLink to={'/tasks/en progreso/board'} className={({isActive})=> isActive?'flex items-center p-2 rounded-lg bg-indigo-500 bg-opacity-50':'flex items-center p-2'}><IconCircleFill className=" text-orange-600"/> <span className="ml-2">En Progreso</span></NavLink>
            </li>
            <li className="cursor-pointer hover:transition hover:duration-200 hover:bg-indigo-500 hover:bg-opacity-50 rounded-lg">
            <NavLink to={'/tasks/pendiente/board'} className={({isActive})=> isActive?'flex items-center p-2 rounded-lg bg-indigo-500 bg-opacity-50':'flex items-center p-2'}><IconCircleFill className=" text-red-700"/> <span className="ml-2">Pendientes</span></NavLink>
            </li>
          </ul>
          }
        </ul>
      </nav>
    </aside>
    <header style={{gridArea:'header'}} className="flex  justify-between p-2 border-b border-gray-200">
    <div className="lg:hidden">
        <button onClick={toggleSidebar} className=" text-gray-600 hover:text-blue-500 focus:outline-none">
          <ListIcon/>
        </button>
    </div>
    <div className="lg:ml-auto cursor-pointer text-gray-600  hover:text-indigo-500 focus:outline-none"><Link to={"/tasks/create"} state={{previousLocation: location}}><IconAddR height="2em" width="2em"/></Link></div>
    </header>
   </>
  );
}

export default SideBar