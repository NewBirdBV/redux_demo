import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})

const deleteFromCart = productId => ({
    type: types.DELETE_FROM_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}
export const deleteProduct = productId => (dispatch, getState) => {
    if(getState().cart.quantityById[productId] !== 0 ) {
        dispatch(deleteFromCart(productId))
    }
}
/*
* 经过CartContainer connect包装后，该函数返回一个新函数，新函数被注入 dispatch 和 getState,相当于bindActionCreator
* */
export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()

    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    }, 10000)
}
