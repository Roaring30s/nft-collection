import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async Thunk
export const loadCollectionStats = createAsyncThunk(
  "collectionStats/getCollectionStats",
  async (arg, thunkAPI) => {
    const data = await fetch("https://secure-plateau-79831.herokuapp.com/https://api.joepegs.dev/v2/collections/0x3025c5c2aa6eb7364555aac0074292195701bbd6",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-joepegs-api-key": process.env.REACT_APP_JOE_KEY,
            "mode": 'no-cors'
        }
        });
    const json = await data.json();
    if(json.name) {
        return json;
    } else {
        return thunkAPI.rejectWithValue(true);
    }
  }
);

// Reducer Options
const sliceOptions = {
  name: "collectionStats",
  initialState: {
    stats: {},
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCollectionStats.pending, (state, { payload }) => {
      state.isLoading = true;
      state.hasError = false;
    })
    builder.addCase(loadCollectionStats.fulfilled, (state, { payload }) => {
      state.stats = payload;
      state.isLoading = false;
      state.hasError = false;
    })
    builder.addCase(loadCollectionStats.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
}

// Selectors
export const collectionStatsSlice = createSlice(sliceOptions);

export const selectCollectionStats = (state) => state.collectionStats.stats;

export default collectionStatsSlice.reducer;
