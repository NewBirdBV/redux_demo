import React from 'react'
import PropType from 'prop-types'
export default class Link extends React.Component{
    render(){
        if(this.props.active){
            return <span>{this.props.children}</span>
        }
        return (
            <a href="#" onClick={e=>{
                e.preventDefault();
                this.props.onClick();
            }}>
                {this.props.children}
            </a>
        )
    }
}
Link.proptypes = {
    active:PropType.bool.isRequired,
    children:PropType.node.isRequired,
    onClick:PropType.func.isRequired
}