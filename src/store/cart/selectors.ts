import { RootState }  from "@/store/index";

export const selectNFTpropss = (state: RootState) => state.cart.cart;
export const selectTotalItems = (state: RootState) => state.cart.cart.length || 0;
export const selectTotalPrice = (state: RootState) => state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
