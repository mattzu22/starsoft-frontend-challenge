import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import CardNFT from '@/components/home-nft/CardNFT'
import { mockNFT } from '../mocks'
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '@/store/cart/cartSlice'

const mockStore = configureStore({
  reducer: { cart: cartSlice.reducer },
})

describe('CardNFT', () => {
  it('should render NFT name', () => {
    render(
      <Provider store={mockStore}>
        <CardNFT data={mockNFT} />
      </Provider>
    )
    expect(screen.getByText(mockNFT.name)).toBeInTheDocument()
  })

  it('should render NFT price', () => {
    render(
      <Provider store={mockStore}>
        <CardNFT data={mockNFT} />
      </Provider>
    )
    expect(screen.getByText(`${mockNFT.price.toFixed(2)} ETH`)).toBeInTheDocument()
  })

  it('should render NFT description', () => {
    render(
      <Provider store={mockStore}>
        <CardNFT data={mockNFT} />
      </Provider>
    )
    expect(screen.getByText(mockNFT.description)).toBeInTheDocument()
  })

  it('should render NFT image', () => {
    render(
      <Provider store={mockStore}>
        <CardNFT data={mockNFT} />
      </Provider>
    )
    expect(screen.getByAltText(mockNFT.name)).toBeInTheDocument()
  })

  it('should dispatch addItem action when button is clicked', async () => {

    const dispatchSpy = jest.spyOn(mockStore, 'dispatch');

    render(
      <Provider store={mockStore}>
        <CardNFT data={mockNFT} />
      </Provider>
    )
    
    const button = screen.getByText('Comprar');
    await userEvent.click(button)
    
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'cart/addItem',
      payload: {
        id: mockNFT.id,
        name: mockNFT.name,
        image: mockNFT.image,
        description: mockNFT.description,
        price: mockNFT.price,
        quantity: 1,
      },
    });
    
    dispatchSpy.mockRestore();
  })
})
