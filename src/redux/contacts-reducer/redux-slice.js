import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      todos: [],
      status: null,
      error: null,
    },
  
    reducers: {
    },

    extraReducers: {
    },
  });

  export default todoSlice.reducer;