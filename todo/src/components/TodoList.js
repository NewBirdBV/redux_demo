import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends React.Component{
    handleEdit = (id, text) => {
        this.props.actions.editTodo(id, text)
    }
    render(){
        return (
            <ul style={{ width: 300, margin: '0 auto' }}>
                {
                    this.props.todos.map(todo => {
                        return <Todo
                            key={todo.id}
                            {...todo}
                            deleteTodo={() => {this.props.actions.destroyTodo(todo.id) }}
                            toggleTodo={() => {this.props.actions.toggleTodo(todo.id) }}
                            editTodo={(text) => this.handleEdit(todo.id, text)}
                        />
                    })
                }
            </ul>
        )
    }
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}