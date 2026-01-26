import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import ListCardsNFT from '@/components/home-nft/ListCardsNFT'
import { mockNFT, mockNFT2, mockNFT3 } from './mocks'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '@/store/cart/cartSlice'

const mockStore = configureStore({
  reducer: { cart: cartSlice.reducer },
})

describe('ListCardsNFT', () => {
  it('should render empty list when data is empty', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[]} />
      </Provider>
    )
    expect(container.querySelector('.containerNFT')).toBeInTheDocument()
  })

  it('should render single NFT card', () => {
    render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[mockNFT]} />
      </Provider>
    )
    expect(screen.getByText(mockNFT.name)).toBeInTheDocument()
  })

  it('should render multiple NFT cards', () => {
    render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[mockNFT, mockNFT2, mockNFT3]} />
      </Provider>
    )
    expect(screen.getByText(mockNFT.name)).toBeInTheDocument()
    expect(screen.getByText(mockNFT2.name)).toBeInTheDocument()
    expect(screen.getByText(mockNFT3.name)).toBeInTheDocument()
  })

  it('should render all NFT prices', () => {
    render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[mockNFT, mockNFT2]} />
      </Provider>
    )
    const priceElements = screen.getAllByText(`${mockNFT.price.toFixed(2)} ETH`)
    expect(priceElements).toHaveLength(2)
  })

  it('should render CardNFTSkeleton components when isLoading is true', () => {
    render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[]} />
      </Provider>
    )
    expect(screen.getAllByTestId('card-nft-skeleton')).toHaveLength(8)
  })

  it('should render CardNFT components when isLoading is false', () => {
    render(
      <Provider store={mockStore}>
        <ListCardsNFT data={[mockNFT]} />
      </Provider>
    )
    expect(screen.getByText(mockNFT.name)).toBeInTheDocument()
    expect(screen.queryByTestId('card-nft-skeleton')).not.toBeInTheDocument()
  })
})
