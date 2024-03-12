import { useEffect } from "react";
import { useTasks } from "../hooks/useTasks";
import { formatDate } from "../utils/utils";
import { useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();
  const { state, findTask } = useTasks();
  useEffect(() => {
    findTask(id);
  }, [id, state.foundedTask]);

  const task= {title:'',description:'',time:'2022-01-24T16:00:00Z',status:''};
  const {title,description,time,status}=state.foundedTask?state.foundedTask:task;
  
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
