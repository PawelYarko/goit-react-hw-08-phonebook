import { createSelector } from "@reduxjs/toolkit"

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;
// const getStatus = (state) => state.todos.status;      getStatus, getError,
// const getError = (state) => state.todos.error;

const getVisibleContacts = createSelector([getTodos, getFilter], (todos, filter) =>{
      return todos.filter(({ name }) => name.toLowerCase().includes(filter));
});

 export { getTodos, getFilter, getVisibleContacts };