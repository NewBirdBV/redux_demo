import React from "react";
import PropTypes from "prop-types";
import { Tag, Button, Icon } from "antd";

class Product extends React.Component {
  handleDelete = () => {
    this.props.deleteProduct(this.props.productId);
  };
  render() {
    const productInfo = (
      <span>
        <Tag>
          {this.props.title}
        </Tag>
        <Tag>
          {this.props.price}
        </Tag>
          {
              this.props.quantity ? <Tag>{`x ${this.props.quantity}`}</Tag> : null
          }
          {
              this.props.inventory !== undefined && <Tag>{`库存${this.props.inventory}`}</Tag>
          }
      </span>
    );
      return (
          <div style={this.props.quantity!==0 ? {padding: 5} : null}>
              {this.props.quantity!==0 ? productInfo: null}
              {this.props.canDelete
                  ? <Button onClick={this.handleDelete} shape="circle" size="small">
                      <Icon type="close" style={{ color: '#08c' }}/>
                  </Button>
                  : null}
          </div>
      )
  }
}
Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  canDelete: PropTypes.bool,
  deleteProduct: PropTypes.func
};

export default Product;