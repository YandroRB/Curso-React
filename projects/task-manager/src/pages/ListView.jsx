import TableTasks from "../components/TableTasks";
import { useTasks } from "../hooks/useTasks";

function ListView() {
    const {state}=useTasks();
  return (
    <>
      <TableTasks taskList={state.taskList} />
    </>
  );
}

export default ListView;
