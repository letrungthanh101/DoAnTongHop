import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'Api/userApi';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call api to register

  //save data to local storage

  //return user.data
  return {};
});

export const login = createAsyncThunk('user/loginFromFirebase', async (payload) => {
  const currentUser = await userApi.getMe();

  return {
   currentUser,
  };
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    // định nghĩa ra 1 action type
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.pending]: (state, action) => {
        state.loading = true
    },
    [login.rejected]: (state, action) => {
        state.loading = false;
        state.error = 'Lỗi rồi';
    },
    [login.fulfilled]: (state, action) => {
        state.loading = false;
        state.current = action.payload
    },
  },
});
const { reducer } = userSlice;
export default reducer;
