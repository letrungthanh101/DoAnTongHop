import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';

//action

export const loginFirebase = createAsyncThunk('user/loginFromFirebase', async (payload) => {
  // const data =firebase.auth()
  // save in local storage
  const {displayName,uid,email}= payload
  localStorage.setItem("access token",uid)
  localStorage.setItem("display name:",displayName)
  localStorage.setItem("Email:",email)
  localStorage.setItem("User",payload)
  return payload;
});



export const register = createAsyncThunk('user/RegisterFromFirebase', async (payload) => {
  console.log('Payload', payload);
  const { email, passWord, fullName, phoneNumber } = payload;
  const submitForm = await firebase.database().ref('Users');
  const data = await firebase.auth().createUserWithEmailAndPassword(email, passWord);
  const infoSubmit = submitForm.push();
  infoSubmit.set({
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    passWord: passWord,
  });

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(localStorage.key.user)) ||{},
    setting: {},
  },
  reducers: {
    logOut: (state)=> {
      return state.firebase.auth().signOut();
    
    }
    
  },
  extraReducers: {
    // định nghĩa ra 1 action type
    [loginFirebase.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { reducer } = userSlice;
export const {logOut} = userSlice.actions;
export default reducer;
