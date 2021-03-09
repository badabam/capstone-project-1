import { render, screen } from '@testing-library/react'

import Card from './Card'

import posterImg from '../../image/poster.jpg'

describe('Card', () => {
  it('renders a card with a name and an image', () => {
    render(<Card title="Batman" poster={posterImg} />)
    expect(screen.getByText('Batman')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
