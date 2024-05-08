import React, { useCallback, useRef, useState } from "react";
import TaskList from "./components/TaskList";
import { deleteTask, getNewTask, getNewTaskList, getTaskListEdited } from "./logic/utils";
import "./App.css";
import { Formulario } from "./components/Formulario";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";

const overlays=document.getElementById('overlays');

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: "1",
      task: "Finish report",
      status: "pending",
    },
    {
      id: "2",
      task: "Schedule meeting",
      status: "in progress",
    },
    {
      id: "3",
      task: "Prepare presentation",
      status: "complete",
    },
    {
      id: "4",
      task: "Review documents",
      status: "pending",
    },
    {
      id: "5",
      task: "Send emails",
      status: "in progress",
    },
    {
      id: "6",
      task: "Organize files",
      status: "complete",
    },
    {
      id: "7",
      task: "Order office supplies",
      status: "pending",
    },
    {
      id: "8",
      task: "Update website",
      status: "in progress",
    },
    {
      id: "9",
      task: "Attend conference call",
      status: "complete",
    },
    {
      id: "10",
      task: "Follow up with clients",
      status: "pending",
    },
  ]);
  const selectedTask= useRef(null);
  const [isOpen,setIsOpen]=useState(false);

  const handleSubmit =useCallback((formRef) => {
    const newTask=getNewTask({formData:formRef});
    setTaskList(getNewTaskList({ taskList, newTask }));
  },[taskList]);

  const handleSubmitEdit=useCallback((formRef)=>{
    const newTask=getNewTask({formData:formRef,taskID:selectedTask.current.id});
    const newTaskList=getTaskListEdited({taskList,newTask,taskID:selectedTask.current.id})
    setTaskList(newTaskList);
    changeModalStatus();
  },[isOpen])

  const handleDelete=useCallback((taskID)=>{
    const newTaskList=deleteTask({taskList,taskID})
    setTaskList(newTaskList);
  },[taskList])

  const changeModalStatus=useCallback(()=>{
    setIsOpen(!isOpen);
  },[isOpen])
  const isSelectedTask=useCallback((task)=>{
    selectedTask.current=task;
    changeModalStatus();
  },[selectedTask]);

  return (
    <>
      <header>
        <h1>Task List</h1>
      </header>
      <main>
        <Formulario handleSubmit={handleSubmit}/>
        {taskList.length > 0 ? 
          <ul>
            <TaskList tasks={taskList} handleDelete={handleDelete} isSelectedTask={isSelectedTask}/>
          </ul>
         : 
          <p>No se pudo encontrar que haceres w(ﾟДﾟ)w</p>
        }
      </main>
      {isOpen && createPortal(<Modal task={selectedTask} handleSubmit={handleSubmitEdit} changeModalStatus={changeModalStatus} />,overlays)}
    </>
  );
}

export default App;
