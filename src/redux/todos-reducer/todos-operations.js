import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo, deleteTodo } from './todos-slice';
import { nanoid } from 'nanoid';

const baseURL = 'https://62d5e3f115ad24cbf2ce8796.mockapi.io';

export const fetchTodos = createAsyncThunk(
    '/contacts',
    async function (_, { rejectWithValue }) {
      try {
        const response = await fetch(`${baseURL}/contacts`,
          {
            method: 'GET',
          });
  
        if (!response.ok) {
          throw rejectWithValue('error');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  // export const fetchTodos = () => async dispatch =>{
  //   dispatch(fetchTodosRequest());
  //   try {
  //     const { data } = await axios.get('/tasks');
  //     dispatch(fetchTodosSuccess(data));
  //   } catch (error) {
  //     dispatch(fetchTodosError(error.message));
  //   }
  // }
  
  export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async function (id, { rejectWithValue, dispatch }) {
      try {
        const response = await fetch(
          `${baseURL}/contacts/${id}`,
          {
            method: 'DELETE',
          }
        );
        if (!response.ok) {
          throw rejectWithValue('error');
        }
        return dispatch(deleteTodo({ id }));
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (info, { rejectWithValue, dispatch }) {
      try {
        const todo = {
          id: nanoid(),
          ...info,
        };
        const response = await fetch(
          `${baseURL}/contacts`, 
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo),
          }
        );
  
        if (!response.ok) {
          throw rejectWithValue('error');
        }
        const data = await response.json();
        return dispatch(addTodo(data));
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );