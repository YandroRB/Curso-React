import {data} from '../../data.json'
export const initialState={taskList:[...data]};

const reducerActions={
    'ADD_TASK':(state,actionPayload)=>{
        const newState = {
            ...state,
            taskList:[...state.taskList,actionPayload]
        }
        return newState;
    },
    'DEL_TASK':(state,actionPayload)=>{},
    'EDIT_TASK':(state,actionPayload)=>{
        const newState={...state};
        const findIndexTask=newState.taskList.findIndex(task => task.id === actionPayload.id);
        newState.taskList[findIndexTask]=actionPayload;
        return newState;
    },
    'FIND_TASK':(state,actionPayload)=>{
        const foundedTask= state.taskList.find(task=>task.id === actionPayload);
        return {...state,foundedTask}
    }
}

export function reducerTasks(state,action){
    const {type:actionType,payload:actionPayload}=action;
    const actionHandler=reducerActions[actionType];
    return actionHandler?actionHandler(state,actionPayload):state;
}