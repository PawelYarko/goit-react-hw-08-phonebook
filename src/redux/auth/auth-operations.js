import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseURL = 'https://connections-api.herokuapp.com';

// const axios = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com'
//   });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', 
    async credentials =>{
        try{
            const { data } = await axios.post('/users/signup' , credentials);
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
            return data;
        }
        catch(error){

        }
    }
)

// export default register;