import { useState } from "react";
import TaskView from "../components/TableTasks";
import { useTasks } from "../hooks/useTasks";

function DropdownComponent() {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option>ReactJS Dropdown</option>
        <option>Laravel 9 con React</option>
        <option>React con Tailwind CSS</option>
        <option >React con Headless UI</option>
      </select>
    </div>
  );
}

function Prueba() {
const [isOpen, setIsOpen] = useState(false);
const { state } = useTasks();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">

      {/* Sidebar */}
      <div className={`fixed z-50 inset-y-0 left-0 w-64 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Sidebar content */}
        <nav className="flex flex-col h-full bg-white border-r border-gray-200">
          <div className="flex justify-end">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
          {/* Sidebar header */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <span className="text-xl font-semibold">My App</span>
          </div>
          {/* Sidebar links */}
          <ul className="flex-grow p-4 space-y-2">
            <li>
              <a href="#" className="block text-gray-600 hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-600 hover:text-blue-500">
                Profile
              </a>
            </li>
            <li>
              <DropdownComponent/>
            </li>
            {/* Add more sidebar links */}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Toggle button */}
        <div className="flex items-center justify-start h-16 px-4 border-b border-gray-200">
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Main content area */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="relative">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(!isOpen)}>
        Toggle Submenu
      </button>
      <div className={`absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden  transition  duration-300 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
          <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
        </ul>
      </div>
    </div>
        </main>
      </div>
    </div>
  );
}

export default Prueba