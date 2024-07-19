import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface StockState {
  data: any[];
  symbol: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StockState = {
  data: [],
  symbol: 'BTC',
  status: 'idle',
};

export const fetchStockData = createAsyncThunk('stock/fetchStockData', async (symbol: string) => {
  const response = await axios.get(`/api/stocks/${symbol}`);
  return response.data;
});

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<string>) => {
      state.symbol = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStockData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStockData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSymbol } = stockSlice.actions;

export const selectStock = (state: RootState) => state.stock.data;
export const selectSymbol = (state: RootState) => state.stock.symbol;

export default stockSlice.reducer;
