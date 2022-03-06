import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class ProductsContainer extends React.Component{
    render(){
        return (
         <ProductsList
             title="All Products"
         >
             {
                 this.props.products.map(product => (
                     <ProductItem
                         key={product.id}
                         product={product}
                         onAddToCartClicked={() => this.props.addToCart(product.id)}
                     />
                ))
             }
         </ProductsList>
        )
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})
const NewProductsContainer = connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)

export default NewProductsContainer