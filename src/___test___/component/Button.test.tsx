import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('should render with children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick when clicked', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)
    
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should apply fade animation class', () => {
    const { container } = render(<Button animation="fade">Click</Button>)
    expect(container.querySelector('.animationFade')).toBeInTheDocument()
  })

  it('should apply drop animation class', () => {
    const { container } = render(<Button animation="drop">Click</Button>)
    expect(container.querySelector('.animationDrop')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<Button className="custom-class">Click</Button>)
    expect(container.querySelector('.custom-class')).toBeInTheDocument()
  })

  it('should show loading state', () => {
    const { container } = render(<Button isLoading>Click</Button>)
    expect(container.querySelector('.loadingBar')).toBeInTheDocument()
  })
})
