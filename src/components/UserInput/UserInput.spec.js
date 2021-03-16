import { render, screen } from '@testing-library/react'

import UserInput from './UserInput'

describe('UserInput', () => {
  it('renders a user input', () => {
    render(<UserInput placeholder="John Doe" />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
  })
})
