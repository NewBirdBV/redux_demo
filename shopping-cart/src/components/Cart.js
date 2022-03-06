import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'antd'

class Cart extends React.Component{
    render(){
        const products = this.props.products;
        const hasProducts = products.length > 0;
        const nodes = hasProducts ?
            (
                products.map(product => (
                    <div key={product.id}>
                        <Product
                            title={product.title}
                            price={product.price}
                            quantity={product.quantity}
                            canDelete={product.quantity !== 0}
                            productId={product.id}
                            deleteProduct={this.props.deleteProduct}
                        />
                    </div>
                ))
            ) :
            (
                <em>Please add some products to cart.</em>
            )

        return (
            <div style={{ borderTop: '1px solid lightblue' }}>
                <h3>You Cart</h3>
                <div style={{ textAlign: 'center' }}>
                    <div>{nodes}</div>
                    <p>Total: {this.props.total}</p>
                    <Button
                        type="ghost"
                        onClick={this.props.onCheckoutClicked}
                        disabled={hasProducts ? '' : true}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        )
    }
}
Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string,
    onCheckoutClicked: PropTypes.func
}

export default Cart