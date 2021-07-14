import React from 'react'
import { mount } from 'enzyme'

import WebVideo from '../WebVideo'

describe('WebVideo', () => {
  const doMount = (props = {}) =>
    mount(<WebVideo videoId="ppF-fn37SDs" videoLength={30} copy="en" {...props} />)

  it('renders', () => {
    const webVideo = doMount()

    expect(webVideo).toMatchSnapshot()
  })

  it('applies the selected aspect ratio', () => {
    const webVideo = doMount({ aspectRatio: '4:3' }).find('[data-testid="aspectLimiter"]')
    expect(webVideo).toHaveStyleRule('padding-top', '75%')
  })

  it('applies default ratio when invalid aspect ratio is provided', () => {
    const webVideo = doMount({ aspectRatio: '0:invalid' }).find('[data-testid="aspectLimiter"]')
    expect(webVideo).toHaveStyleRule('padding-top', '100%')
  })

  it('passes additional attributes to the element', () => {
    const webVideo = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(webVideo).toHaveProp('id', 'the-id')
    expect(webVideo).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const webVideo = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    }).find('[data-testid="youtubePlayer"]')

    expect(webVideo).not.toHaveProp('className', 'my-custom-class')
    expect(webVideo).not.toHaveProp('style')
  })
})
