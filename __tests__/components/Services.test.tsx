import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Services from '@/components/sections/Services'
import uiSlice from '@/store/slices/uiSlice'
import authSlice from '@/store/slices/authSlice'
import blogSlice from '@/store/slices/blogSlice'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [jest.fn(), true],
}))

const mockStore = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    blog: blogSlice,
  },
})

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      {component}
    </Provider>
  )
}

describe('Services Component', () => {
  it('renders services section heading', () => {
    renderWithProvider(<Services />)
    
    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('displays all service cards', () => {
    renderWithProvider(<Services />)
    
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Development')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('SEO Services')).toBeInTheDocument()
    expect(screen.getByText('E-commerce Solutions')).toBeInTheDocument()
  })

  it('shows service descriptions', () => {
    renderWithProvider(<Services />)
    
    expect(screen.getByText(/Custom websites and web applications/)).toBeInTheDocument()
    expect(screen.getByText(/Native and cross-platform mobile applications/)).toBeInTheDocument()
  })

  it('displays call-to-action buttons', () => {
    renderWithProvider(<Services />)
    
    expect(screen.getByText('Get Started Today')).toBeInTheDocument()
    expect(screen.getByText('View Our Work')).toBeInTheDocument()
  })

  it('shows popular badge on web development service', () => {
    renderWithProvider(<Services />)
    
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })
})