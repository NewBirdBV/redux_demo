import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((it) => it.completed);
        case 'SHOW_ACTIVE':
            return todos.filter((it) => !it.completed);
        default:
            throw new Error('UnKnown filter' + filter);
    }
}
const mapStateToProps = (state) => {
    return {
        todos:getVisibleTodos(state.todos.present, state.visibilityFilter)
    }
}
const mapDispatchToProps =({
    onTodoClick: toggleTodo
})
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList