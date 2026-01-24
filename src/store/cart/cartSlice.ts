import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/src/types/storeCart";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as CartItem[],
        isCartOpen: false
    },
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        closeCart: (state) => {
            state.isCartOpen = false;
        },
        openCart: (state) => {
            state.isCartOpen = true;
        },
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteItem: (state, action: PayloadAction<{ id: string }>) => {
            state.cart.find(item => item.id != action.payload.id);
        },
        updateItem: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const item = state.cart.find(item => item.id === action.payload.id);

            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const {
    addItem,
    deleteItem,
    updateItem,
    clearCart,
    toggleCart,
    closeCart,
    openCart
} = cartSlice.actions

export default cartSlice;