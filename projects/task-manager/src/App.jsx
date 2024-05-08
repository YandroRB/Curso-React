import TaskDetails from "./components/TaskDetails";
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { useTasks } from "./hooks/useTasks";
import TasksList from "./components/TasksList";
import { FilterObject } from "./utils/utils";
import SideBar from "./pages/SideBar";
import Estadisticas from "./pages/Estadisticas";
import BoardView from "./pages/BoardView";
import ListView from "./pages/ListView";
import Nav from "./components/Nav";
import ModalFormTask from "./pages/ModalFormTask";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const prevLocation=location.state?.previousLocation;
  const { state } = useTasks();
  return (
    <>
    <SideBar/>
    <main style={{gridArea:'main'}} className="w-full h-full pt-3 pl-3 pr-3  bg-gray-100 ">
      <Routes location={prevLocation || location} >
          <Route path="/" element={<Estadisticas/>}/>
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks" element={<Nav/>}>
            <Route index element={<BoardView/>} /> 
            <Route path="board" element={<BoardView/>} /> 
            <Route path="list" element={<ListView/>}/>
          </Route>
          <Route path="/tasks/pendiente/board" element={<TasksList tasks={FilterObject(state.taskList,'pendiente','status')} status={"pendiente"}  styles={'bg-red-300/[.07] border-red-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8'}/>}/>
          <Route path="/tasks/en progreso/board" element={<TasksList tasks={FilterObject(state.taskList,'en progreso','status')} status={"en progreso"} styles={'bg-orange-300/[.07] border-orange-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8'}/>}/>
          <Route path="/tasks/completo/board" element={<TasksList tasks={FilterObject(state.taskList,'completo','status')} status={"completo"} styles={'bg-lime-300/[.07] border-lime-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8'}/>}/>
          <Route path="/not found" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to={"/not found"}/>}/>
        </Routes>
    </main>
    {
      prevLocation &&(
        <Routes>
          <Route path="/tasks/create" element={<ModalFormTask previousLocation={prevLocation}/>}/>
          <Route path="/tasks/edit" element={<ModalFormTask previousLocation={prevLocation}/>}/>
        </Routes>
      )
    }

    </>
  );
}

export default App;
