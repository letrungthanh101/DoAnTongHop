import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';




//action
export const login = createAsyncThunk('user/loginFromFirebase', async (payload) => {
  //call api to login
  const currentUser = await firebase.auth().onAuthStateChanged(payload);
  // lưu local storage
  console.log('data from redux',payload)
  localStorage.setItem('access_token', currentUser.getIdToken());
  localStorage.setItem('name_user', currentUser.displayName);

  //return data
  return {
   
    loginFirebase: currentUser
  };
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
 
  },
  reducers: {},
  extraReducers: {
    // định nghĩa ra 1 action type

    [login.fulfilled]: (state, action) => {
     
      state.current = action.payload;
    },
  },
});
const { reducer } = userSlice;
export default reducer;
