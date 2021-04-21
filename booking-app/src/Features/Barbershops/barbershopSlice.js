

const { createSlice} = require('@reduxjs/toolkit');

// tạo slice
const barbershopSlice = createSlice({
    name: 'barbershops',
    initialState: [], // khởi tạo state
    reducers:{
        //mỗi key là 1 trường hợp và là 1 func
        fetchBarbershop(state,action){
            return state;
        },
    }
});
const {action, reducers} = barbershopSlice;
// export const {fetchBarbershop} = action; //name export
export default reducers;