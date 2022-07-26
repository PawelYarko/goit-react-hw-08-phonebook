import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk('auth/register', 
    async credentials =>{
        try{
            const { data } = await axios.post('/users/signup' , credentials);
            token.set(data.token);
            return data;
        }
        catch(error){

        }
    }
)

export const logIn = createAsyncThunk('auth/login', 
    async credentials =>{
        try{
            const { data } = await axios.post('/users/login' , credentials);
            token.set(data.token);
            return data;
        }
        catch(error){

        }
    }
)


export const logOut = createAsyncThunk('auth/logout', 
    async () =>{
        try{
            await axios.post('/users/logout');
            token.unset();
        }
        catch(error){

        }
    }
)

export const fetchCurrentUser = createAsyncThunk('auth/refresh', 
    async (_, thunkAPI) =>{
        
        const state = thunkAPI.getState();
        const perToken = state.auth.auth.user.token;
        console.log( state)

        if(perToken === null){
            return thunkAPI.rejectWithValue('error');
        }

        token.set(perToken);
        try{
            const { data } = await axios.post('/users/current');
            return data;
        }
        catch(error){

        }
    }
)