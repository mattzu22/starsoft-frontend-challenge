import cartSlice, {
  addItem,
  decreaseItem,
  deleteItem,
  clearCart,
  toggleCart,
  closeCart,
  openCart,
} from '@/store/cart/cartSlice'
import { mockNFT, mockNFT2 } from './mocks/index'
import type { NFTprops } from '@/types/nft'

interface CartState {
  cart: NFTprops[]
  isCartOpen: boolean
}

describe('cartSlice', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      const initialState = cartSlice.reducer(undefined, { type: 'unknown' })
      expect(initialState).toEqual({
        cart: [],
        isCartOpen: false,
      })
    })
  })

  describe('toggleCart', () => {
    it('should toggle isCartOpen from false to true', () => {
      const previousState = {
        cart: [],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, toggleCart())
      expect(newState.isCartOpen).toBe(true)
    })

    it('should toggle isCartOpen from true to false', () => {
      const previousState = {
        cart: [],
        isCartOpen: true,
      }
      const newState = cartSlice.reducer(previousState, toggleCart())
      expect(newState.isCartOpen).toBe(false)
    })
  })

  describe('closeCart', () => {
    it('should set isCartOpen to false', () => {
      const previousState = {
        cart: [],
        isCartOpen: true,
      }
      const newState = cartSlice.reducer(previousState, closeCart())
      expect(newState.isCartOpen).toBe(false)
    })
  })
  describe('openCart', () => {
    it('should set isCartOpen to true', () => {
      const previousState = {
        cart: [],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, openCart())
      expect(newState.isCartOpen).toBe(true)
    })
  })

  describe('addItem', () => {
    it('should add a new item to the cart', () => {
      const previousState = {
        cart: [],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, addItem(mockNFT))
      expect(newState.cart).toHaveLength(1)
      expect(newState.cart[0]).toEqual(mockNFT)
      expect(newState.cart[0].quantity).toBe(1)
    })

    it('should add multiple items to the cart', () => {
      const state: CartState = {
        cart: [],
        isCartOpen: false,
      }
      let newState = cartSlice.reducer(state, addItem({ ...mockNFT }))
      newState = cartSlice.reducer(newState, addItem({ ...mockNFT2 }))
      expect(newState.cart).toHaveLength(2)
      expect(newState.cart[0].id).toBe('1')
      expect(newState.cart[1].id).toBe('2')
    })

    it('should increment quantity if item already exists', () => {
      const previousState = {
        cart: [{ ...mockNFT }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, addItem(mockNFT))
      expect(newState.cart).toHaveLength(1)
      expect(newState.cart[0].quantity).toBe(2)
    })

    it('should increment quantity multiple times', () => {
      let state = {
        cart: [{ ...mockNFT }],
        isCartOpen: false,
      }
      state = cartSlice.reducer(state, addItem(mockNFT))
      state = cartSlice.reducer(state, addItem(mockNFT))
      state = cartSlice.reducer(state, addItem(mockNFT))
      expect(state.cart).toHaveLength(1)
      expect(state.cart[0].quantity).toBe(4)
    })
  })

  describe('decreaseItem', () => {
    it('should decrease item quantity', () => {
      const nftWithQuantity = { ...mockNFT, quantity: 3 }
      const previousState = {
        cart: [nftWithQuantity],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(
        previousState,
        decreaseItem({ id: '1' })
      )
      expect(newState.cart[0].quantity).toBe(2)
    })

    it('should not decrease below 1', () => {
      const previousState = {
        cart: [{ ...mockNFT, quantity: 1 }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(
        previousState,
        decreaseItem({ id: '1' })
      )
      expect(newState.cart[0].quantity).toBe(1)
    })

    it('should not affect other items', () => {
      const previousState = {
        cart: [
          { ...mockNFT, quantity: 3 },
          { ...mockNFT2, quantity: 2 },
        ],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(
        previousState,
        decreaseItem({ id: '1' })
      )
      expect(newState.cart[0].quantity).toBe(2)
      expect(newState.cart[1].quantity).toBe(2)
    })

    it('should do nothing if item not found', () => {
      const previousState = {
        cart: [{ ...mockNFT }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(
        previousState,
        decreaseItem({ id: 'non-existent' })
      )
      expect(newState.cart).toEqual(previousState.cart)
    })
  })

  describe('deleteItem', () => {
    it('should remove an item from the cart', () => {
      const previousState = {
        cart: [{ ...mockNFT }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, deleteItem({ id: '1' }))
      expect(newState.cart).toHaveLength(0)
    })

    it('should remove only the specified item', () => {
      const previousState = {
        cart: [{ ...mockNFT }, { ...mockNFT2 }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, deleteItem({ id: '1' }))
      expect(newState.cart).toHaveLength(1)
      expect(newState.cart[0].id).toBe('2')
    })

    it('should handle deletion of non-existent item', () => {
      const previousState = {
        cart: [{ ...mockNFT }],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(
        previousState,
        deleteItem({ id: 'non-existent' })
      )
      expect(newState.cart).toEqual(previousState.cart)
    })
  })

  describe('clearCart', () => {
    it('should clear all items from the cart', () => {
      const previousState = {
        cart: [{ ...mockNFT }, { ...mockNFT2 }],
        isCartOpen: true,
      }
      const newState = cartSlice.reducer(previousState, clearCart())
      expect(newState.cart).toHaveLength(0)
      expect(newState.cart).toEqual([])
      expect(newState.isCartOpen).toBe(true)
    })

    it('should handle clearing an already empty cart', () => {
      const previousState = {
        cart: [],
        isCartOpen: false,
      }
      const newState = cartSlice.reducer(previousState, clearCart())
      expect(newState.cart).toHaveLength(0)
    })
  })
})