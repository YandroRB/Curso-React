import { useContext } from "react";
import { TasksContext } from "../context/tasks";

export function useTasks(){
    const {state,dispatch,newIDTask}= useContext(TasksContext);
    const addTask =(task) =>{
        dispatch({
            type:'ADD_TASK',
            payload:task
        })
    }
    const editTask= (taskEdited)=>dispatch({
        type:'EDIT_TASK',
        payload:taskEdited
    })
    return {state,addTask,editTask,newIDTask};
}