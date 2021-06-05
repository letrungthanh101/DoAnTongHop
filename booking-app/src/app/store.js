

import { configureStore } from '@reduxjs/toolkit';
import storeReducer from "../Components/Barbershops/barbershopSlice"
import userReducer from "../Features/Auth/userSlice"
// khởi tạo root
const rootReducer = {
  user: userReducer,
  barbershop: storeReducer
};
// tạo store
const store = configureStore({
  reducer: rootReducer,
});
export default store;
