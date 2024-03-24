import TaskDetails from "./components/TaskDetails";
import { Routes, Route,Outlet} from "react-router-dom";
import TaskView from "./components/TaskView";
import { useTasks } from "./hooks/useTasks";
import TasksList from "./components/TasksList";
import { FilterObject } from "./utils/utils";
import BarChart from "./components/BarChart";

function App() {
  const { state } = useTasks();
  const datos={labels:["A","B","C"],data:[56,89,13]}
  return (
    <>
      <TaskView taskList={state.taskList} />
      <BarChart chartData={datos}/>
      <Routes>
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route
          path="/view"
          element={
            <>
              <TasksList tasks={FilterObject(state.taskList,'pendiente','status')} status={"pendiente"} />
              <TasksList tasks={FilterObject(state.taskList,'en progreso','status')} status={"en progreso"} />
              <TasksList tasks={FilterObject(state.taskList,'completo','status')} status={"completo"} />
            </>
          }
        />

        <Route path="/view/pendiente" element={<TasksList tasks={FilterObject(state.taskList,'pendiente','status')} status={"pendiente"} />}/>
        <Route path="/view/en progreso" element={<TasksList tasks={FilterObject(state.taskList,'en progreso','status')} status={"en progreso"} />}/>
        <Route path="/view/completo" element={<TasksList tasks={FilterObject(state.taskList,'completo','status')} status={"completo"} />}/>
      </Routes>
    </>
  );
}

export default App;
