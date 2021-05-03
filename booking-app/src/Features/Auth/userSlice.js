import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const register = createAsyncThunk(
    'user/register',
    async (payload)=>{
        //call api to register

        //save data to local storage
        return {};
    }
)

const userSlice = createSlice({
    name:'user',
    initialState:{
        current: {},
        setting:{}
    },
    reducers:{

    }

})
const {reducer} = userSlice;
export default reducer;