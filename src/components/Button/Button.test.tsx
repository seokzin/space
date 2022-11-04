import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  it('should render successfully', () => {
    const { container } = render(<Button>test</Button>)
    expect(container).toBeTruthy()
  })

  it('should render with the text', () => {
    const { getByText } = render(<Button>test</Button>)
    expect(getByText('test')).toBeTruthy()
  })
})
