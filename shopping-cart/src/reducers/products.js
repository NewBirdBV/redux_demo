import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, DELETE_FROM_CART } from '../constants/ActionTypes'
const initialState = {
    byId: {},
    visibleIds: []
}
/*
* some handles
* */
const products = (state, action) => { //返回一件商品的详细信息
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                inventory: state.inventory + 1
            }
        default:
            return state
    }
}

const byId = (state = initialState.byId, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const { productId } = action
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
}
/*
* 从远程Mock data(products.json)获取所有商品,返回商品Id
* */
const visibleIds = (state = initialState.visibleIds, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})
export const getProduct = (state, id) => //根据id获取商品详情
    state.byId[id]

export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))
