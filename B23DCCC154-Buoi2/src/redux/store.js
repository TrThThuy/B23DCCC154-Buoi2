import { configureStore } from '@reduxjs/toolkit';
import hangHoaReducer from './hangHoaSlice';

const store = configureStore({
  reducer: {
    hangHoa: hangHoaReducer,
  },
});

export default store;
