import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: {name: null, email: null},
      token: null,
      isLoggerIn: false,
    },
  
    reducers: {
    }, 

    extraReducers: {
        [authOperations.register.fulfilled](state, action){
            
        }
    },
  });

  export default authSlice.reducer;