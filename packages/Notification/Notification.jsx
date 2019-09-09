import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorWhiteLilac } from '@tds/core-colours'
import FlexGrid from '@tds/core-flex-grid'
import {
  NotificationSuccess,
  NotificationError,
  NotificationWarning,
} from '@tds/core-feedback-icon'
import { Close } from '@tds/core-interactive-icon'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import { Reveal, Fade } from '@tds/shared-animation'
import { messaging } from '@tds/shared-styles'
import { getCopy, safeRest } from '@tds/util-helpers'

import copyDictionary from './notificationText'

import { warn } from '../../shared/utils/warn'

const StyledNotificationContainer = styled(({ variant, ...rest }) => <Box {...rest} />)(
  ({ variant }) => ({
    position: 'relative',
    ...{
      instructional: messaging.standard,
      success: messaging.success,
      error: messaging.error,
      warning: messaging.warning,
      branded: { backgroundColor: colorWhiteLilac },
    }[variant],
  })
)

const StyledMessageContainer = styled.div(({ hasIcon }) => ({
  width: hasIcon ? 'calc(100% - 2.5rem)' : '100%',
}))

const StyledDismissContainer = styled.div({
  position: 'relative',
})

const StyledDismissButtonWrapper = styled.div({
  position: 'absolute',
  top: '-0.5rem',
  right: 0,
})

const isImportant = variant => variant === 'success' || variant === 'error' || variant === 'warning'

const renderIcon = (variant, copy) => {
  const feedback = getCopy(copyDictionary, copy).feedback
  const iconCopy = copy.feedback ? { a11yText: feedback } : feedback

  if (variant === 'success') {
    return <NotificationSuccess copy={iconCopy} />
  }
  if (variant === 'error') {
    return <NotificationError copy={iconCopy} />
  }
  if (variant === 'warning') {
    return <NotificationWarning copy={iconCopy} />
  }
  return undefined
}

/**
 * A banner that highlights important messages.
 *
 * @version ./package.json
 */
class Notification extends React.Component {
  state = {
    dismissed: false,
    contentWrapperHeight: undefined,
  }

  componentDidMount() {
    if (this.props.dismissible) {
      this.adjustContentHeight()
    }
  }

  componentDidUpdate() {
    if (this.props.dismissible) {
      this.adjustContentHeight()
    }
  }

  adjustContentHeight = () => {
    if (this.contentWrapper.offsetHeight !== this.state.contentWrapperHeight) {
      this.setState({ contentWrapperHeight: this.contentWrapper.offsetHeight })
    }
  }

  renderNotification() {
    const { variant, dismissible, children, onExit, onDismiss, copy, ...rest } = this.props

    return (
      <StyledNotificationContainer {...safeRest(rest)} vertical={3} variant={variant}>
        <FlexGrid>
          <FlexGrid.Row>
            <FlexGrid.Col>
              <FlexGrid gutter={false}>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={dismissible ? 11 : undefined}>
                    <Box inline between={3}>
                      {isImportant(variant) && <Box vertical={1}>{renderIcon(variant, copy)}</Box>}
                      <StyledMessageContainer hasIcon={isImportant(variant)}>
                        <Paragraph>{children}</Paragraph>
                      </StyledMessageContainer>
                    </Box>
                  </FlexGrid.Col>
                  {dismissible && (
                    <FlexGrid.Col>
                      <StyledDismissContainer>
                        <StyledDismissButtonWrapper>
                          <Close
                            a11yText={getCopy(copyDictionary, copy).close}
                            onClick={() => {
                              this.setState(() => ({ dismissed: true }))
                              if (onDismiss) {
                                onDismiss()
                              }
                            }}
                          />
                        </StyledDismissButtonWrapper>
                      </StyledDismissContainer>
                    </FlexGrid.Col>
                  )}
                </FlexGrid.Row>
              </FlexGrid>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
      </StyledNotificationContainer>
    )
  }

  render() {
    const { dismissible, onExit, onDismiss } = this.props

    if (onExit && !dismissible) {
      warn('Notification', 'The prop `onExit` must be used together with `dismissible`.')
    }
    if (onDismiss && !dismissible) {
      warn('Notification', 'The prop `onDismiss` must be used together with `dismissible`.')
    }
    if (dismissible) {
      return (
        <Reveal
          timeout={400}
          in={!this.state.dismissed}
          height={this.state.contentWrapperHeight || 0}
        >
          {() => (
            <Fade unmountOnExit timeout={500} in={!this.state.dismissed} onExited={onExit}>
              {() => (
                <div
                  ref={c => {
                    this.contentWrapper = c
                  }}
                >
                  {this.renderNotification()}
                </div>
              )}
            </Fade>
          )}
        </Reveal>
      )
    }
    return this.renderNotification()
  }
}

Notification.propTypes = {
  /**
   * The appearance.
   */
  variant: PropTypes.oneOf(['instructional', 'branded', 'success', 'error', 'warning']),
  /**
   * Use the copy prop to either select provided English or French copy
   * by passing `'en'` or `'fr'` respectively.
   *
   * To provide your own, pass a JSON object with the keys
   * `feedback` for the `FeedbackIcon` and `close` for the `InteractiveIcon` used as the close button.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      feedback: PropTypes.string.isRequired,
      close: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  /**
   * Whether or not to allow the Notificiation to be dismissed.
   *
   * @since 1.2.0
   */
  dismissible: PropTypes.bool,
  /**
   * A callback function to be run on click of the dismissible icon.
   * Requires `dismissible={true}`
   *
   * @since 1.3.0
   */
  onDismiss: PropTypes.func,
  /**
   * A callback function to be run when the Notification has fully played its exit animation
   * Requires `dismissible={true}`
   *
   * @since 1.3.0
   */
  onExit: PropTypes.func,
  /**
   * The message. Can be raw text or text components.
   */
  children: PropTypes.node.isRequired,
}

Notification.defaultProps = {
  variant: 'instructional',
  dismissible: false,
  onDismiss: undefined,
  onExit: undefined,
}

export default Notification
