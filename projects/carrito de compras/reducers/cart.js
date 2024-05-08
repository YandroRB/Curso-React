export const cartInitialState =JSON.parse(window.localStorage.getItem('cart'))||[];

function updateLocalStorage(state){
    window.localStorage.setItem('cart',JSON.stringify(state))
}
const reducerActions={
    ADD_TO_CART: (state,actionPayload)=>{
        const {id}=actionPayload;
        const productInCart=state.findIndex(item=>item.id===id);
        if(productInCart>=0){
            const newState=structuredClone(state);
            newState[productInCart].quantity+=1;
            updateLocalStorage(newState);
            return newState;
        }
        const newState= [
            ...state,
            {
                ...actionPayload,
                quantity:1
            }
        ]
        updateLocalStorage(newState);
        return newState;
    },
    REMOVE_FROM_CART:(state,actionPayload)=>{
        const {id}=actionPayload;
        const newState=state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState;
    },
    CLEAR_CART:()=>{
        updateLocalStorage([]);
        return [];
    }
}
export function cartReducer(state,action){
    const {type:actionType,payload:actionPayload}=action
    const actionHandler=reducerActions[actionType];
    return actionHandler?actionHandler(state,actionPayload):state;
}