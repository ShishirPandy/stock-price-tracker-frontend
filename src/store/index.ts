import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import stockReducer from '../features/stockSlice';

export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
