import { configureStore } from "@reduxjs/toolkit";
import collectionStatsReducer from "@features/CollectionStats/collectionStatsSlice";
import itemsReducer from "@features/Dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    collectionStats: collectionStatsReducer,
    items: itemsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;