import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Button,Input, Row} from 'antd'
import style from '../style.css'

class AddTodo extends React.Component{
    render(){
        return (
            <Row className="todolist-header">
                <form onSubmit={e => {
                    e.preventDefault();
                    if(!this.input.refs.input.value.trim()){
                       return
                    }
                    this.props.dispatch(addTodo(this.input.refs.input.value));
                    this.input.refs.input.value = '';
                }}>
                    <Input
                        type="text"
                        ref={node => {
                            this.input = node;
                            }
                        }
                        placeholder="TODO NAME"
                    />
                    {' '}
                    <Button
                        type="primary"
                        htmlType='submit'
                    >
                        添加todo
                    </Button>
                </form>
            </Row>
        )
    }
}
AddTodo = connect()(AddTodo);
export default AddTodo