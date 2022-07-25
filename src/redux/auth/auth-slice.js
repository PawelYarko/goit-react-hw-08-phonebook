import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './auth-operations';


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
        [register.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggerIn = true;
        },
        [logIn.fulfilled](state, action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggerIn = true;
        },
        [logOut.fulfilled](state, action){
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggerIn = false;
        }
    },
  });

  export default authSlice.reducer;