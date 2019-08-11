import { createStore } from "redux";
import { TODOS } from "../utils/data.js";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = todoBody => ({
  type: ADD_TODO,
  todoBody
});
export const removeTodo = todoId => ({
  type: REMOVE_TODO,
  todoId
});
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
});

const initialState = {
  todoList: TODOS
};
const rootReducer = (state = initialState, action) => {
  let newTodoList = state.todoList;
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: [
          {
            body: action.todoBody,
            id: state.todoList.length + 1,
            status: "Active"
          },
          ...state.todoList
        ]
      };
    case REMOVE_TODO:
      newTodoList = state.todoList.filter(todo => todo.id !== action.todoId);
      return {
        todoList: newTodoList
      };
    case TOGGLE_TODO:
      let todo = state.todoList.find(todo => todo.id === action.todoId);
      console.log(todo)
      todo.status = todo.status === "Done" ? "Active" : "Done";
      const foundIndex = state.todoList.findIndex(
        todo => todo.id === action.todoId
      );
      newTodoList[foundIndex] = todo;
      return {
        todoList: [...newTodoList]
      };
  }
  return state;
};

const store = createStore(rootReducer);
export default store;
