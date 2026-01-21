import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

test('renders site header', () => {
  render(<MemoryRouter><App /></MemoryRouter>)
  expect(screen.getByText(/Alkebulant Labs/i)).toBeInTheDocument()
})
