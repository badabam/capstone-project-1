import { render, screen } from '@testing-library/react'

import User from './User'

describe('User', () => {
  it('renders a User with a name', () => {
    render(<User name="Batman" />)
    expect(screen.getByText('Batman')).toBeInTheDocument()
  })
})
