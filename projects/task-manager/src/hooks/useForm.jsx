import { useEffect, useRef } from "react";
import { useTasks } from "./useTasks";

export function useForm({initialTask}){
    const formRef= useRef(null);
    const {addTask,newIDTask,editTask}=useTasks();

    useEffect(()=>{
        if(initialTask){
            formRef.current.elements["title"].value=initialTask.title;
            formRef.current.elements["description"].value=initialTask.description;
            formRef.current.elements["status"].value=initialTask.status;   
        }
    },[initialTask])

    const handleForm = (event)=>{
        event.preventDefault();
        const frmTask=Object.fromEntries(new FormData(formRef.current));
        const fecha= new Date();
        const newTask={
            id:newIDTask.current.toString(),
            ...frmTask,
            time:fecha.toISOString()
        }
        newIDTask.current+=1;
        addTask(newTask);
    }
    const handleEditForm = (event)=>{
        event.preventDefault();
        const frmTask=Object.fromEntries(new FormData(formRef.current));
        const newTask={...initialTask,...frmTask}
        editTask(newTask);
    }
    return {formRef,handleEditForm,handleForm}


}