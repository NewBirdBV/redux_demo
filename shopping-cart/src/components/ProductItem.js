import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Button, Col, Tag } from 'antd'

class ProductItem extends React.Component {
  render() {
    return (
      <Col style={{ padding: 10, textAlign: 'center' }}  xs={24} sm={8} md={6}>
          <Product
              title={this.props.product.title}
              price={this.props.product.price}
              inventory={this.props.product.inventory}
          />
          <Button
              type="primary"
              onClick={this.props.onAddToCartClicked}
              disabled={this.props.product.inventory > 0 ? '': true}
          >
              {this.props.product.inventory > 0 ? 'Add' : 'Sold Out'}
          </Button>
      </Col>
    );
  }
}
ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
const initialState = {
    visibility: "SHOW_ALL",
    todos: []
}
