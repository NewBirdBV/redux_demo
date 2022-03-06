import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
export default class TodoList extends React.Component {
  render() {
    console.log(this.props.todos);
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              onClick={() => this.props.onTodoClick(todo.id)}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};
