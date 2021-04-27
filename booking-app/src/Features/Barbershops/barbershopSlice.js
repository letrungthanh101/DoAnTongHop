

const { createSlice} = require('@reduxjs/toolkit');

// tạo slice
const barbershopSlice = createSlice({
    name: 'barbershop',
    initialState: [], // khởi tạo state
    reducers:{
        //mỗi key là 1 trường hợp và là 1 func
        fetchBarbershop(state,action){
            return state;
        },
    }
});
const {actions, reducer} = barbershopSlice;
export const {fetchBarbershop} = actions; //name export
export default reducer;