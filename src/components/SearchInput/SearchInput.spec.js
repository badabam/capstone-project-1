import { render, screen } from '@testing-library/react'

import SearchInput from './SearchInput'
import { MemoryRouter } from 'react-router-dom'

describe('SearchInput', () => {
  it('renders a search input', () => {
    render(
      <MemoryRouter>
        <SearchInput placeholder="Choose your Movie" />
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Choose your Movie')).toBeInTheDocument()
  })
})
