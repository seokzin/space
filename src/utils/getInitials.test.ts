import getInitials from './getInitials'

describe('getInitials >', () => {
  it('should return the initials of a name', () => {
    expect(getInitials('Seokzin So')).toBe('SS')
  })

  it('should return the first letter if there is no last name', () => {
    expect(getInitials('So')).toBe('S')
  })

  it('should return the uppercase initials', () => {
    expect(getInitials('seokzin so')).toBe('SS')
  })

  it('should return the uppercase initials if there is no last name', () => {
    expect(getInitials('so')).toBe('S')
  })

  it('should return the first letter if there is korean name', () => {
    expect(getInitials('소석진')).toBe('소')
  })
})
