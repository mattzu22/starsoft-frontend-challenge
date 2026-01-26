import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ModalCart from '@/components/cart/ModalCart'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { addItem, openCart } from '@/store/cart/cartSlice'
import { mockNFT, mockNFT2 } from '../mocks'

const createMockStore = () => {
  return configureStore({
    reducer: { cart: cartSlice.reducer },
  })
}

describe('ModalCart', () => {
  it('should render modal cart', () => {
    const store = createMockStore()
    const { container } = render(
      <Provider store={store}>
        <ModalCart />
      </Provider>
    )
    expect(container).toBeInTheDocument()
  })

  it('should display empty cart message when no items', () => {
    const store = createMockStore()
    render(
      <Provider store={store}>
        <ModalCart />
      </Provider>
    )
    expect(screen.getByText(/carrinho vazio/i)).toBeInTheDocument()
  })

  it('should display total price', () => {
    const store = createMockStore()
    store.dispatch(openCart())
    store.dispatch(addItem({ ...mockNFT, quantity: 1 }))
    
    render(
      <Provider store={store}>
        <ModalCart />
      </Provider>
    )
    
    const totalPrice = mockNFT.price
    const totalPriceElements = screen.getAllByText(`${totalPrice.toFixed(2)} ETH`)
    expect(totalPriceElements.length).toBeGreaterThan(0)
  })

  it('should render close button', () => {
    const store = createMockStore()
    store.dispatch(openCart())
    
    render(
      <Provider store={store}>
        <ModalCart />
      </Provider>
    )
    
    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument()
  })

  it('should display cart items', () => {
    const store = createMockStore()
    store.dispatch(openCart())
    store.dispatch(addItem({ ...mockNFT, quantity: 1 }))
    store.dispatch(addItem({ ...mockNFT2, quantity: 1 }))
    
    render(
      <Provider store={store}>
        <ModalCart />
      </Provider>
    )
    
    expect(screen.getByText(mockNFT.name)).toBeInTheDocument()
    expect(screen.getByText(mockNFT2.name)).toBeInTheDocument()
  })
})
