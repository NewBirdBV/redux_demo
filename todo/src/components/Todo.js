import React from 'react'
import PropTypes from 'prop-types'
import style from '../style.css'
import {Input,Checkbox,Icon} from 'antd'

export default class Todo extends React.Component{
    state = {
        todoTxt: this.props.text,
        isTodoActive: false
    }
    handleChange = (e) => {
        if(e.target.value){
            this.setState({
                todoTxt: e.target.value
            })
        }else{
           this.setState({
               todoTxt: ''
           })
        }
    }
    handleBlur = (e) => {
        const curTodoTxt = this.props.text;
        if(curTodoTxt !== e.target.value) {
            this.props.editTodo(e.target.value);
        }
        this.setState({
            isTodoActive: false
        })
    }
    toggleActive = () => {
        this.setState({
            isTodoActive: true
        })
    }
    render(){
        return (
            <li
                className="todoItem"
                style={{
                    textDecoration:this.props.completed ? 'line-through' : 'none',
                    backgroundColor:this.props.completed ? 'lightblue' : 'rgba(10,100,100,.7)'
                }}
            >
                <Checkbox
                    style={{width:30,height:30}}
                    onChange={this.props.toggleTodo}
                    checked={this.props.completed}
                >
                </Checkbox>

                <span onClick={this.toggleActive}>
                    {
                       this.state.isTodoActive ?
                           <Input
                               ref={i => this.input = i}
                               onChange={this.handleChange}
                               onBlur={this.handleBlur}
                               value={this.state.todoTxt}
                               size='small'
                               type="text"
                               autoFocus
                           /> :
                           this.props.text || '请输入todoName'
                    }
                </span>
                <span
                    className='destroyButton'
                    onClick={this.props.deleteTodo}
                >
                    <Icon type="close" style={{ color: 'rgba(255, 0, 0, .6)'}}/>
                </span>
            </li>
        )
    }
}
Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    deleteTodo:PropTypes.func.isRequired,
}
