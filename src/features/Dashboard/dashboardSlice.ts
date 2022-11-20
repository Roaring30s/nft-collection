import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//Will dispatch promise lifecycles

// Async Thunk
export const loadItems = createAsyncThunk(
  "items/getItems",
  async (arg, thunkAPI) => {
    const data = await fetch("https://secure-plateau-79831.herokuapp.com/https://api.joepegs.dev/v2/items?collectionAddress=0x3025c5c2aa6eb7364555aac0074292195701bbd6&filters=buy_now&orderBy=price_asc",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-joepegs-api-key": process.env.REACT_APP_JOE_KEY,
            "mode": 'no-cors'
        }
        });
    const json = await data.json();
    if(json[0].id) {
        return json;
    } else {
        return thunkAPI.rejectWithValue(true);
    }
  }
);

// Reducer Options
const sliceOptions = {
  name: "items",
  initialState: {
    list: {},
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadItems.pending, (state, { payload }) => {
      state.isLoading = true;
      state.hasError = false;
    })
    builder.addCase(loadItems.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
      state.hasError = false;
    })
    builder.addCase(loadItems.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    })
  }
}

// Selectors
export const itemsSlice = createSlice(sliceOptions);

export const selectItems = (state) => state.items.list;

export default itemsSlice.reducer;
