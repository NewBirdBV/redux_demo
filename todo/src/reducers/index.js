import {combineReducers} from 'redux'
import filter from './filter'
import todos from './todos'
/*
* 顶层reducer
* */
const todoApp = combineReducers({
    todos,
    filter
})
export default todoApp
