import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Hero from '@/components/sections/Hero'
import uiSlice from '@/store/slices/uiSlice'
import authSlice from '@/store/slices/authSlice'
import blogSlice from '@/store/slices/blogSlice'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock @react-three/fiber
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: any) => <div data-testid="canvas">{children}</div>,
}))

// Mock @react-three/drei
jest.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  Sphere: ({ children }: any) => <div data-testid="sphere">{children}</div>,
  MeshDistortMaterial: () => <div data-testid="mesh-distort-material" />,
  Float: ({ children }: any) => <div data-testid="float">{children}</div>,
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

describe('Hero Component', () => {
  it('renders hero section with main heading', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByText('Transform Your')).toBeInTheDocument()
    expect(screen.getByText('Digital Presence')).toBeInTheDocument()
    expect(screen.getByText('with Webstitch')).toBeInTheDocument()
  })

  it('displays the correct subtitle', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByText(/We craft exceptional digital experiences/)).toBeInTheDocument()
  })

  it('shows call-to-action buttons', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByText('Start Your Project')).toBeInTheDocument()
    expect(screen.getByText('Watch Our Story')).toBeInTheDocument()
  })

  it('displays statistics', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByText('580+')).toBeInTheDocument()
    expect(screen.getByText('450+')).toBeInTheDocument()
    expect(screen.getByText('7+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
  })

  it('shows technology badges', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders 3D canvas element', () => {
    renderWithProvider(<Hero />)
    
    expect(screen.getByTestId('canvas')).toBeInTheDocument()
  })
})