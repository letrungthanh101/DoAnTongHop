

import { configureStore } from '@reduxjs/toolkit';
import barbershopReducer from '../Features/Barbershops/barbershopSlice';

// khởi tạo root
const rootReducer = {
  barbershop: barbershopReducer,
};
// tạo store
const store = configureStore({
  reducer: rootReducer,
});
export default store;
