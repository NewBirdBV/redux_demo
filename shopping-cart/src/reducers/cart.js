import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    DELETE_FROM_CART
} from '../constants/ActionTypes'

const inistialState = {
    addedIds: [],
    quantityById: {}
}
/*
* some handles
* */
const addedIds = (state=inistialState.addedIds, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            if(state.includes(action.productId)){
                return state;
            }
            return [...state, action.productId];
        default:
            return state
    }
}
const quantityById = (state=inistialState.quantityById, action)=>{
    const {productId}=action;
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                [productId]:(state[productId] || 0) +1
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                [productId]:state[productId] -1
            }
        default:
            return state;
    }
}
export const getQuantity = (state, productId) => { //根据id获取某种商品的数量
    return state.quantityById[productId] || 0;
}
export const getAddedIds = (state) => state.addedIds
/*
* slice reducer: cart
* */
const cart = (state=inistialState, action)=>{
    switch (action.type){
        case CHECKOUT_REQUEST:
            return inistialState;
        case CHECKOUT_FAILURE:
            return action.cart;
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action),
            }
    }
}

export default cart;
