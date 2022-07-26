import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchTodos, removeTodo } from './todos-operations';


const todoSlice = createSlice({
  name: 'todos',
  initialState: [],

  reducers: {
    addTodo(state, { payload }) {
      state.todos = [
        ...state.todos,
        {
          id: nanoid(),
          ...payload,
        },
      ];
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (_state, _action) => {
      return [];
    },
    [fetchTodos.fulfilled]: (_state, action) => {
      return action.payload;
    },
    // [fetchTodos.rejected]: (_state, action) => {
    //   return action.payload;
    // },
    // [removeTodo.rejected]: (_state, action) => {
    //   return action.payload;
    // },
    [removeTodo.rejected]: (_state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, deleteTodo, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;