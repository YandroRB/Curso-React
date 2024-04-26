import { Link } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import { useEffect, useRef, useState } from "react";

function TasksList({ tasks, status,styles}) {
  const {editTask}=useTasks();
  const sectionRef=useRef(null);
  const [sectionSize,setSectionSize]=useState(0);
  
  useEffect(()=>{
    setSectionSize(sectionRef.current.offsetWidth);
  },[status])
  
  const handleDrag= (event,task)=>
  {
    event.dataTransfer.setData('taskObject',JSON.stringify(task));
  }

  const handleDraggingOver=(event)=>event.preventDefault();

  const handleDrop=(event)=>{
    const taskObject=JSON.parse(event.dataTransfer.getData('taskObject'));
    const newTask={...taskObject,status:status}
    editTask(newTask);
  }

  return (
    <>
    <section ref={sectionRef} droppable="true" onDragOver={handleDraggingOver} onDrop={handleDrop} className={styles}>
      <h2 className="text-xl  first-letter:uppercase mb-5 font-semibold">{status}</h2>
      <ul className={` space-y-2 ${sectionSize>=768?'grid grid-cols-3 gap-5 justify-stretch':'' }`}>
        {tasks.map((task) => {
          return (
            <li draggable onDragStart={(event) => handleDrag(event,task)} className={` cursor-pointer p-2 shadow-lg bg-opacity-20 backdrop-blur-lg backdrop-filter bg-white  rounded-lg `} key={task.id}>
              <Link to={`/tasks/${task.id}`}>
                {task.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
    </>
  );
}

export default TasksList;
