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
    const findTask=(taskID)=>dispatch({
        type:'FIND_TASK',
        payload:taskID
    })
    const delTask=(task)=>dispatch({
        type:'DEL_TASK',
        payload:task
    })
    return {state,addTask,editTask,newIDTask,findTask,delTask};
}