// import { createSelector } from "@reduxjs/toolkit"

// const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
// const getStatus = (state) => state.todos.status;
// const getError = (state) => state.todos.error;   getStatus, getError,

// const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) =>{
//   return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
// });

//  export { getContacts, getFilter, getVisibleContacts };
export { getFilter };