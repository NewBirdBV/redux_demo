import React from 'react'
import CartContainers from './CartContainer'
import ProductsContainers from './ProductsContainers'
import { Row } from 'antd'
import style from './style.css'
const App = () => (
    <div>
        <Row>
            <Row className="cart-header">
                <h2>Shopping Cart</h2>
            </Row>
            <div className="cart-body">
                <Row>
                    <ProductsContainers/>
                </Row>
                <Row>
                    <CartContainers/>
                </Row>
            </div>
        </Row>
    </div>
)
export default App