import media, { breakpoints } from '../media'

beforeEach(() => {})

describe('media', () => {
  describe('from()', () => {
    it('accepts a function', () => {
      const style = media.from('md').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (min-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.from('md').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (min-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })
  })

  describe('until()', () => {
    it('accepts a function', () => {
      const style = media.until('md').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (max-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.until('md').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (max-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })
  })

  describe('and()', () => {
    it('accepts a function', () => {
      const style = media.and('(orientation: landscape)').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (orientation: landscape)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.and('(orientation: landscape)').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (orientation: landscape)`]: { color: 'red' } })
    })
  })

  it('can chain', () => {
    const style = media
      .from('md')
      .until('lg')
      .and('(orientation: landscape)')
      .css({
        color: 'red',
      })

    expect(style).toEqual({
      [`@media (min-width: ${breakpoints.md}px) and (max-width: ${
        breakpoints.lg
      }px) and (orientation: landscape)`]: { color: 'red' },
    })
  })
})
