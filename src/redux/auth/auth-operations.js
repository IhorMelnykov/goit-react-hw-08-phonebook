import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
        }
    };

    export const register = createAsyncThunk('auth/register',
        async (credentials, thunkAPI) => {
          try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );

      export const logIn = createAsyncThunk('auth/login', 
      async (credentials, thunkAPI ) => {
        try {
          const { data } = await axios.post('users/login', credentials);
          token.set(data.token);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      });

export const logOut = createAsyncThunk('auth/logout', async () => {
    try { 
         await axios.post('/users/logout');
         token.unset();
    } catch (error) {
        console.log(error);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
  
    if (!persistedToken) {return thunkAPI.rejectWithValue('Something wrong with refresh!');}
  
    token.set(persistedToken);

    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

const authOperations = {
    register,
    logIn,
    logOut, 
    refreshUser
}

export default authOperations;