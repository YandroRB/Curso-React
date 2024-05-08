import Nav from "../components/Nav";
import TasksList from "../components/TasksList";
import { useTasks } from "../hooks/useTasks";
import { FilterObject } from "../utils/utils";

function BoardView() {
  const { state } = useTasks();
  return (
    <>
      <div className="lg:flex lg:justify-evenly ">
        <TasksList
          tasks={FilterObject(state.taskList, "pendiente", "status")}
          status={"pendiente"}
          styles={
            "bg-red-300/[.07] border-red-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8"
          }
        />
        <TasksList
          tasks={FilterObject(state.taskList, "en progreso", "status")}
          status={"en progreso"}
          styles={
            " bg-orange-300/[.07] border-orange-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8"
          }
        />
        <TasksList
          tasks={FilterObject(state.taskList, "completo", "status")}
          status={"completo"}
          styles={
            "bg-lime-300/[.07] border-lime-300  rounded-lg border-t-8 p-4 my-5 h-fit pb-8"
          }
        />
      </div>
    </>
  );
}

export default BoardView;
