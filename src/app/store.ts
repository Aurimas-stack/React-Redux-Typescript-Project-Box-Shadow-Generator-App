import { configureStore } from "@reduxjs/toolkit";
import BoxShadowReducer from '../features/Box/BoxSlice';

export const store = configureStore({
    reducer: {
        boxShadow: BoxShadowReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;