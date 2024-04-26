import {data} from '../../data.json'
export const initialState={taskList:[...data],foundedTask:{title:'null',description:'null',time:'2022-01-24T16:00:00Z',status:'null'},trash:[]};

const reducerActions={
    'ADD_TASK':(state,actionPayload)=>{
        const newState = {
            ...state,
            taskList:[...state.taskList,actionPayload]
        }
        return newState;
    },
    'DEL_TASK':(state,actionPayload)=>{
        const newState={
            ...state,
            taskList:state.taskList.filter(task => task.id !== actionPayload.id),
            trash:[...state.trash,actionPayload]
        }
        return newState;
    },
    'EDIT_TASK':(state,actionPayload)=>{
        const newState={...state};
        const findIndexTask=newState.taskList.findIndex(task => task.id === actionPayload.id);
        newState.taskList[findIndexTask]=actionPayload;
        return newState;
    },
    'FIND_TASK':(state,actionPayload)=>{
        const newState={...state}
        const foundedTask= state.taskList.find(task=>task.id === actionPayload);
        newState.foundedTask=foundedTask??{title:'null',description:'null',time:'2022-01-24T16:00:00Z',status:'null'};
        return newState;
    }
}

export function reducerTasks(state,action){
    const {type:actionType,payload:actionPayload}=action;
    const actionHandler=reducerActions[actionType];
    return actionHandler?actionHandler(state,actionPayload):state;
}