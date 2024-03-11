import {data} from '../../data.json'
export const initialState=[...data];

const reducerActions={
    'ADD_TASK':(state,actionPayload)=>{
        const newState = [
            ...state,
            {
                ...actionPayload
            }
        ]
        return newState;
    },
    'DEL_TASK':(state,actionPayload)=>{},
    'EDIT_TASK':(state,actionPayload)=>{
        const newState=[...state];
        const findIndexTask=newState.findIndex(task => task.id === actionPayload.id);
        newState[findIndexTask]=actionPayload;
        return newState;
    }
}

export function reducerTasks(state,action){
    const {type:actionType,payload:actionPayload}=action;
    const actionHandler=reducerActions[actionType];
    return actionHandler?actionHandler(state,actionPayload):state;
}