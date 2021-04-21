import barbershopReducer from '../Features/Barbershops/barbershopSlice';
const { configureStore } = require('@reduxjs/toolkit');
// khởi tạo root
const rootReducer = {
  barbershop: barbershopReducer,
};
// tạo store
const store = configureStore({
  reducer: rootReducer,
});
export default store;
