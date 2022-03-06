import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkout, deleteProduct } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

class CartContainer extends React.Component{
    deleteProduct = (productId) => {
        this.props.deleteProduct(productId);
    }
    render(){
        return (
            <Cart
                products={this.props.products}
                total={this.props.total}
                onCheckoutClicked={() => this.props.checkout(this.props.products)}
                deleteProduct={this.deleteProduct}
            />
        )
    }
}
CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

/*const mapDispatchToProps = (dispatch) => {
 return {
 checkout: bindActionCreators(checkout, dispatch),
 deleteProduct: bindActionCreators(deleteProduct, dispatch)
 }
 }*/

/*
* connect()的第二个参数传递的是一个Object,定义在Object上的函数都将被当作action creator
* */
export default connect(
    mapStateToProps,
    {
        checkout,
        deleteProduct
    }
    //mapDispatchToProps
)(CartContainer);
