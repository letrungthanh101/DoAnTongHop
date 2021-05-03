

import { configureStore } from '@reduxjs/toolkit';
import barbershopReducer from '../Features/Barbershops/barbershopSlice';
import userReducer from "../Features/Auth/userSlice"
// khởi tạo root
const rootReducer = {
  barbershop: barbershopReducer,
  user: userReducer,
};
// tạo store
const store = configureStore({
  reducer: rootReducer,
});
export default store;
