import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  danhSach: [],
};

const hangHoaSlice = createSlice({
  name: 'hangHoa',
  initialState,
  reducers: {
    themHangHoa: (state, action) => {
      state.danhSach.push(action.payload);
    },
    suaHangHoa: (state, action) => {
      const index = state.danhSach.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state.danhSach[index] = action.payload;
    },
    xoaHangHoa: (state, action) => {
      state.danhSach = state.danhSach.filter((item) => item.id !== action.payload);
    },
  },
});

export const { themHangHoa, suaHangHoa, xoaHangHoa } = hangHoaSlice.actions;
export default hangHoaSlice.reducer;
