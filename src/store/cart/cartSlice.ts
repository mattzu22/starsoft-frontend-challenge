import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NFTprops } from "@/src/types/nft";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as NFTprops[],
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
        addItem: (state, action: PayloadAction<NFTprops>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseItem: (state, action: PayloadAction<{ id: string }>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        },
        deleteItem: (state, action: PayloadAction<{ id: string }>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const {
    addItem,
    deleteItem,
    clearCart,
    toggleCart,
    closeCart,
    openCart,
    decreaseItem
} = cartSlice.actions

export default cartSlice;