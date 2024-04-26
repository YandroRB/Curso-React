import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import { formatDate } from "../utils/utils";
import { useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const { state, findTask } = useTasks();
  useEffect(() => {
    findTask(id);
  }, [id]);

  const {title,description,time,status}=state.foundedTask;
  
  return (
    <aside>
      <h2>{title}</h2>
      <p>{description}</p>
      <time dateTime={time}>{formatDate(time)}</time>
      <p>{status}</p>
    </aside>
  );
}

export default TaskDetails;
