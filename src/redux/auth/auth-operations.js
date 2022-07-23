import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://connections-api.herokuapp.com';
const register = createAsyncThunk('auth', 
    async credentials =>{
        try{
            const { data } = await axios.post('/users/signup' , credentials);
            return data;
        }
        catch(error){

        }
    }
)

export default register;