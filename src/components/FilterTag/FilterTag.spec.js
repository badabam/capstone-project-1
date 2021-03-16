import { render, screen } from '@testing-library/react'

import FilterTag from './FilterTag'
// const test = [{ genres: 'Adventure' }, { genres: 'Action' }]

describe('FilterTag', () => {
  it('renders a button with a type of genre', () => {
    render(<FilterTag genres="Drama" />)
    expect(screen.getByText('Action')).toBeInTheDocument()

    // 2nd possibility to test
    // render(<FilterTag tag={test[0].genres} genres={test} />)
    // expect(screen.getByText('Drama')).toBeInTheDocument()
  })
})
