import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import styled from 'styled-components';


const Container = styled.button`
    background-color: red;
`;


class Counter extends React.Component{
    incrementIfOdd = () =>{
        if(this.props.value % 2 !==0){
            this.props.onIncrement()
        }
    }
    incrementAsync = () => {
        setTimeout(this.props.onIncrement,1000)
    }
    decrementAsync = () => {
        setTimeout(this.props.onDecrement,1000)
    }
    render(){
        //console.log(this.props);
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <Container>
            <p>
                Clicked: {`${value} times`}
                {' '}
                <button onClick={onIncrement}> + </button>
                {' '}
                <button onClick={onDecrement}> - </button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
                {' '}
                <button onClick={this.decrementAsync}>Decrement async</button>
            </p>
            </Container>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
const mapStateToProps = (state,ownProps) => {
    console.log(ownProps);
    return {
        value: state.value
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement:() => dispatch( {type:"INCREMENT"} ),
        onDecrement:() => dispatch( {type:"DECREMENT"} )
    }
}
Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default Counter
