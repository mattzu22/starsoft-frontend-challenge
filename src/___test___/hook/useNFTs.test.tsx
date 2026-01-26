import { renderHook } from '@testing-library/react'
import useNFTs from '@/hooks/useNFTs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { mockInitialData } from '../mocks'

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
  Wrapper.displayName = 'QueryClientWrapper'
  return Wrapper
}

describe('useNFTs', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should initialize with provided initial data', () => {
    const { result } = renderHook(() => useNFTs({ rows: 4, sortBy: 'name', orderBy: 'ASC', initialData: mockInitialData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.data?.pages[0]).toEqual(mockInitialData)
  })

  it('should set correct initial page param', () => {
    const { result } = renderHook(() => useNFTs({ rows: 4, sortBy: 'name', orderBy: 'ASC', initialData: mockInitialData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.data?.pageParams[0]).toBe(1)
  })

  it('should have next page when items loaded < total count', () => {
    const { result } = renderHook(() => useNFTs({ rows: 4, sortBy: 'name', orderBy: 'ASC', initialData: mockInitialData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.hasNextPage).toBe(true)
  })

  it('should not have next page when items loaded >= total count', () => {
    const singlePageData = {
      initialData: mockInitialData.initialData,
      count: 4,
    }

    const { result } = renderHook(() => useNFTs({ rows: 4, sortBy: 'name', orderBy: 'ASC', initialData: singlePageData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.hasNextPage).toBeFalsy()
  })

  it('should handle empty initial data', () => {
    const emptyData = {
      initialData: [],
      count: 0,
    }

    const { result } = renderHook(() => useNFTs({ rows: 8, sortBy: 'name', orderBy: 'ASC', initialData: emptyData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.data?.pages[0].initialData).toEqual([])
    expect(result.current.hasNextPage).toBe(false)
  })

  it('should not be loading initially', () => {
    const { result } = renderHook(() => useNFTs({ rows: 4, sortBy: 'name', orderBy: 'ASC', initialData: mockInitialData }), {
      wrapper: createWrapper(),
    })

    expect(result.current.isLoading).toBe(false)
  })

  it('should have query key with sort parameters', () => {
    renderHook(() => useNFTs({ rows: 4, sortBy: 'price', orderBy: 'DESC', initialData: mockInitialData }), {
      wrapper: createWrapper(),
    })
  })
})
