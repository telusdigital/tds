import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import YouTube from 'react-youtube'

import { safeRest } from '@tds/util-helpers'

import VideoSplash from '../../shared/components/VideoSplash/VideoSplash'

const StyledPlayerContainer = styled.div({
  width: '100%',
  minWidth: 288,
  outline: 'none',
})

const StyledYoutubePlayer = styled(YouTube)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

const getAspectRatioStyle = aspectRatio => {
  const [numerator, denominator] = aspectRatio
    .split(':')
    .map(number => parseInt(number, 10))
    .filter(number => number !== 0)
  const percentage = numerator && denominator ? (denominator * 100) / numerator : 100
  return {
    paddingTop: `${percentage.toString()}%`,
  }
}

const AspectLimiter = styled.div(props => ({
  ...getAspectRatioStyle(props.aspectRatio),
  position: 'relative',
}))

/**
 * @version ./package.json
 */

const WebVideo = ({
  videoId,
  aspectRatio,
  posterSrc,
  defaultVolume,
  beginMuted,
  videoLength,
  copy,
  onStart,
  ...rest
}) => {
  const [started, setStarted] = useState(false)

  const initializeYoutubePlayer = event => {
    onStart()
    if (beginMuted) {
      event.target.mute()
    }
    event.target.setVolume(defaultVolume)
    event.target.playVideo() // This plays the video after passing the splash screen on mobile.
  }

  return (
    <StyledPlayerContainer
      data-testid="youtubePlayer"
      {...safeRest(rest)}
      id="videoPlayerContainer"
    >
      <AspectLimiter aspectRatio={aspectRatio} data-testid="aspectLimiter">
        {started ? (
          <StyledYoutubePlayer
            videoId={videoId}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                playsinline: 1,
                rel: 0,
              },
            }}
            onReady={initializeYoutubePlayer}
          />
        ) : (
          <VideoSplash
            poster={posterSrc || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            videoLength={videoLength}
            label={copy === 'en' ? 'Watch the video' : 'Regardez la vidéo'}
            onClick={() => {
              setStarted(true)
            }}
          />
        )}
      </AspectLimiter>
    </StyledPlayerContainer>
  )
}

WebVideo.propTypes = {
  /**
   * The video's ID, typically available via the video's URL.
   */
  videoId: PropTypes.string.isRequired,
  /**
   * The aspect ratio of the player.
   */
  aspectRatio: PropTypes.string,
  /**
   * A path of the image that will be displayed on the video's splash screen. If this is undefined, it will pull an image from the defined web video if available.
   */
  posterSrc: PropTypes.string,
  /**
   * The video's default volume, defined from 1 to 100. Please use the `beginMuted` prop to have the video start silenced.
   */
  defaultVolume: PropTypes.number,
  /**
   * Defines if the video should start muted.
   */
  beginMuted: PropTypes.bool,
  /**
   * The video's length, which will be displayed on the splash screen. This is defined in seconds.
   */
  videoLength: PropTypes.number.isRequired,
  /**
   * The splash screen UI's language as an ISO language code. It currently supports English and French.
   */
  copy: PropTypes.oneOf(['en', 'fr']).isRequired,
  /**
   * A function to be run when the play button is pressed on the video splash screen and the video is ready to play.
   */
  onStart: PropTypes.func,
}

WebVideo.defaultProps = {
  aspectRatio: '16:9',
  posterSrc: undefined,
  defaultVolume: 1,
  beginMuted: false,
  onStart: () => {},
}

export default WebVideo
