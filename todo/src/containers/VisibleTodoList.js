import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
const getTodoList = (todos, filter) => {
    switch(filter){
        case 'SHOW_ACTIVE':
            return todos.filter(todo => {
                return !todo.completed
            });
        case 'SHOW_COMPLETED':
            return todos.filter(todo => {
                return todo.completed
            });
        case 'SHOW_ALL':
            return todos;
        default:
            throw new Error('UnKnown filter' + filter);
    }
}
const mapStateToPorps = (state) => {
    return {
        todos: getTodoList(state.todos,state.filter)
    }
}
/*const mapDispatchToPorps = {
    onTodoClick:toggleTodo,
    onDestroy:destroyTodo
}*/
const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
const VisibleTodoList = connect(
    mapStateToPorps,
    mapDispatchToProps
)(TodoList)
export default VisibleTodoList