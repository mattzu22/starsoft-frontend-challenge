import { RoostState } from "@/src/store";

export const selectCartItems = (state: RoostState) => state.cart.cart;
export const selectTotalItems = (state: RoostState) => state.cart.cart.length || 0;
export const selectTotalPrice = (state: RoostState) => state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0) || 0;