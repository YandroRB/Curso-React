export const cartInitialState=[];

const reducerActions={
    ADD_TO_CART:(state,actionPayload)=>{
        const {id}=actionPayload;
        const indexProductInCart=state.findIndex(item=>item.id === id);
        if(indexProductInCart>=0){
            const newState=structuredClone(state);
            newState[indexProductInCart].quantity+=1;
            newState[indexProductInCart].totalPrice+=newState[indexProductInCart].price;
            return newState;
        }
        const newState=[
            ...state,
            {
                ...actionPayload,
                quantity:1,
                totalPrice:actionPayload.price
            }
        ]
        return newState;
    },
    LESS_QUANTITY: (state,actionPayload)=>{
        const {id}=actionPayload;
        const indexProductInCart=state.findIndex(item => item.id === id);
        if(indexProductInCart>=0){
            const newState=structuredClone(state);
            newState[indexProductInCart].quantity-=1;
            newState[indexProductInCart].totalPrice-=newState[indexProductInCart].price;
            return newState;
        }
    },
    REMOVE_FROM_CART:(state,actionPayload)=>{
        const {id}=actionPayload;
        const newState=state.filter(item => item.id !==id);
        return newState;
    },
    CLEAR_CART:()=>[]
}

export function cartReducer (state,action){
    const {type:actionType,payload:actionPayload}=action;
    const actionHandler=reducerActions[actionType];
    return actionHandler?actionHandler(state,actionPayload):state;
}