import { NFTprops, initialDataProps } from '@/types/nft'
import { RootState } from '@/store/index'

export const mockNFT: NFTprops = {
  id: '1',
  name: 'Test NFT',
  image: 'https://example.com/nft.jpg',
  price: 2.0,
  description: 'Test NFT Description',
  quantity: 1,
}

export const mockNFT2: NFTprops = {
  id: '2',
  name: 'Test NFT 2',
  image: 'https://example.com/nft2.jpg',
  price: 2.0,
  description: 'Test NFT 2 Description',
  quantity: 1,
}

export const mockNFT3: NFTprops = {
  id: '3',
  name: 'Test NFT 3',
  image: 'https://example.com/nft3.jpg',
  price: 3.0,
  description: 'Test NFT 3 Description',
  quantity: 1,
}

export const mockNFT4: NFTprops = {
  id: '4',
  name: 'Test NFT 4',
  image: 'https://example.com/nft4.jpg',
  price: 4.0,
  description: 'Test NFT 4 Description',
  quantity: 1,
}

export const mockInitialData: initialDataProps = {
  initialData: [mockNFT, mockNFT2, mockNFT3, mockNFT4],
  count: 12,
}

export const createMockRootState = (
  cartState: { cart: NFTprops[]; isCartOpen: boolean }
): RootState => ({
  cart: {
    ...cartState,
    _persist: { version: -1, rehydrated: true },
  },
})

export const mockDefaultCartState = {
  cart: [],
  isCartOpen: false,
}
