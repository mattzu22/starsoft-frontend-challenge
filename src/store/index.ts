import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";

import storage from "redux-persist/lib/storage";
import {
    persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "cart",
    storage
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer)

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistorCart = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch