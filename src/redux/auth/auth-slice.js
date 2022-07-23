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
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggerIn = true;
        },
        [authOperations.logIn.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggerIn = true;
        }
    },
  });

  export default authSlice.reducer;