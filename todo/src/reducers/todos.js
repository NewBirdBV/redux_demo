const addTodo = (todoState, action) => {
    const newTodos = todoState.concat({
        id: action.id,
        text: action.text,
        completed: false
    })
    return newTodos;
}

const toggleTodo = (todoState, action) => {
    const newTodos = todoState.map(todo => {
        if(todo.id === action.id){
            return {...todo, completed: !todo.completed}
        }
        return todo;
    })
    return newTodos
}

const destroyTodo = (todoState, action) => {
    const newTodos = todoState.filter(todo => {
        return todo.id !== action.id
    })
    return newTodos;
}

const editTodo = (todoState, action) => {
    const newTodos = todoState.map(todo => {
        if(todo.id === action.id){
            return {
                ...todo,
                text: action.text
            }
        }
        return todo
    })
    return newTodos
}
/*
* slice reducer: todos
* */
const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO': return addTodo(state, action)
        case 'TOGGLE_TODO': return toggleTodo(state, action)
        case 'DESTROY_TODO': return destroyTodo(state, action)
        case 'EDIT_TODO': return editTodo(state, action)
        default: return state;
    }
}
export default todos

