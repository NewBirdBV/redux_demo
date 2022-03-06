let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    text: text,
    id: nextTodoId++
  };
};
export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};
export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
export const destroyTodo = id => {
  return {
    type: "DESTROY_TODO",
    id
  };
};
export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    id,
    text
  };
};
