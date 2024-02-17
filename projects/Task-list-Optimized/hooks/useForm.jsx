import { useEffect, useRef } from "react";

export function useForm({initialTask}){
    const formRef = useRef(null);
    useEffect(()=>{
        if(initialTask){
            formRef.current.elements["task"].value=initialTask.current.task;
            formRef.current.elements["status"].value=initialTask.current.status;
        }
    },[initialTask])
    return {formRef}
}