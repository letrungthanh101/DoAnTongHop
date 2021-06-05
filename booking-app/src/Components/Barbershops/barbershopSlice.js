import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import firebase from 'firebase';
import { useState } from 'react';

export const fetchBarbershop = createAsyncThunk('Barbershop/FetchBarbershop', async () => {
  // call api
  const [data,setData] = useState('')
  try {
    const response = await firebase.database().ref('Stores');
    response.on('value', (snapshot) => {
      const store = snapshot.val();
      const values = Object.values(store);
      console.log(values)
   
    });
  } catch (error) {
    console.log('Lỗi rồi nè', error.message);
  }
  return data

 
});

const barbershopSlice = createSlice({
  name: 'Barbershop',
  initialState: {
    barbershop: [],
    setting: {},
  },

  reducers: {},
  extraReducers: {
    [fetchBarbershop.fulfilled]: (state, action) => {
      state.barbershop = action.data;
    },
  },
});
const { reducer, action } = barbershopSlice;
// export const {} = action
export default reducer;
