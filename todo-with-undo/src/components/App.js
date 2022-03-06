import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import UndoRedo from '../containers/UndoRedo'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
                <UndoRedo/>
            </div>
        )
    }
}