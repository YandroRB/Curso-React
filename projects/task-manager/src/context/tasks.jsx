import { createContext, useReducer, useRef } from "react";
import { initialState, reducerTasks } from "../reducers/tasks";

export const TasksContext= createContext();

export function TasksProvider ({children}){
    const [state,dispatch] = useReducer(reducerTasks,initialState);
    const newIDTask= useRef(200);
    return (
        <TasksContext.Provider value={{
            state,
            dispatch,
            newIDTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}