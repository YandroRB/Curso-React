import React, { useMemo } from "react";
import IconDelete from "../icons/trash";
import IconEdit from "../icons/edit";

function TaskList({ tasks,isSelectedTask,handleDelete}) {

  const memorizedTaskList=useMemo(()=>tasks,[tasks])

  return (
    <>
      {memorizedTaskList.map((task) => (
        <li className="task" key={task.id}>
          <span className="task-nombre">{task.task}</span>
          <span className="task-estado">{task.status}</span> 
          <span className="task-buttons">
            <button onClick={()=>{handleDelete(task.id)}}>
              <IconDelete />
            </button>
            <button onClick={()=>isSelectedTask(task)} >
              <IconEdit />
            </button>
          </span>
        </li>
      ))}
    </>
  );
}

export default TaskList;
