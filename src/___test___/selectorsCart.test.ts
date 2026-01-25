import { selectIsCartOpen, selectNFTItems, selectTotalPrice, selectTotalItems } from '@/store/cart/selectors'
import { mockNFT, mockNFT2, createMockRootState } from './mocks/index'

describe('selectorsCart', () => {
  it('should select the items in the cart', () => {
    const cartSliceState = {
      cart: [{ ...mockNFT }, { ...mockNFT2 }],
      isCartOpen: true,
    }
    const mockRootState = createMockRootState(cartSliceState)

    const result = selectNFTItems(mockRootState)
    expect(result).toEqual([mockNFT, mockNFT2])
  })

  it('should select the total price', () => {
    const cartSliceState = {
      cart: [{ ...mockNFT, quantity: 2 }, { ...mockNFT2, quantity: 3 }],
      isCartOpen: false,
    }
    const mockRootState = createMockRootState(cartSliceState)

    const result = selectTotalPrice(mockRootState)
    expect(result).toEqual(10.0)
  })

  it('should select if the cart is open', () => {
    const cartSliceState = {
      cart: [],
      isCartOpen: true,
    }
    const mockRootState = createMockRootState(cartSliceState)

    const result = selectIsCartOpen(mockRootState)
    expect(result).toEqual(true)
  })

  it('should select the total items', () => {
    const cartSliceState = {
      cart: [{ ...mockNFT, quantity: 2 }, { ...mockNFT2, quantity: 3 }],
      isCartOpen: true,
    }
    const mockRootState = createMockRootState(cartSliceState)

    const result = selectTotalItems(mockRootState)
    expect(result).toEqual(2)
  })
})