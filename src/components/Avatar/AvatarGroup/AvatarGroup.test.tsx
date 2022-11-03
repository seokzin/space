import { render } from '@testing-library/react'

import Avatar from './Avatar'

describe('Avatar', () => {
  it('should render successfully', () => {
    const { container } = render(<Avatar label="" />)
    expect(container).toBeTruthy()
  })

  it('should render with the text', () => {
    const { getByText } = render(<Avatar label="test" />)
    expect(getByText('test')).toBeTruthy()
  })
})
