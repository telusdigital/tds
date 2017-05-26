import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

if (process.env.BROWSER) {
  require('./Panel.scss');
}

class Panel extends Component {

  componentDidMount() {
    this.setMaxHeight();
  }

  componentDidUpdate() {
    this.setMaxHeight();
  }

  setMaxHeight() {
    if (this.props.isActive) {
      const height = this.panelContent.scrollHeight + 40;
      this.panelContent.style.maxHeight = `${height}px`;
      console.log(height);
    } else {
      this.panelContent.style.maxHeight = '0px';
    }
  }

  render() {
    const { className, header, children, isActive, isDisabled, onPanelClick, isFirst } = this.props;
    const collapsePanelClassName = classNames('collapsible-panel', className);
    const collapsePanelContent = classNames('collapsible-panel__content', {
      'collapsible-panel__content--visible': isActive
    });

    const collapsePaneLabelClassName = classNames('collapsible-panel__label', {
      'collapsible-panel__label--disabled': isDisabled,
      'collapsible-panel__label--expanded': isActive,
      'collapsible-panel__label--collapsed': !isActive,
      'collapsible-panel__label--first': isFirst
    });

    const iconClassName = classNames('icon', {
      'icon-core-minus': isActive,
      'icon-core-plus': !isActive
    });


    return (
      <div className={collapsePanelClassName}>
        <span aria-live="polite" className="tds-accessible-hide">{isActive ? 'expanded' : 'collapsed'}</span>
        <button onClick={onPanelClick} aria-expanded={isActive ? 'true' : 'false'} className={collapsePaneLabelClassName}>
          <span className="collapsible-panel__header">{ header }</span>
          <span className="collapsible-panel__icon">
            <i className={iconClassName} />
          </span>
        </button>
        <div ref={(node) => { this.panelContent = node; }} className={collapsePanelContent}>
          { children }
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onPanelClick: PropTypes.func,
  isFirst: PropTypes.bool
};

Panel.defaultProps = {
  isActive: false,
  isDisabled: false,
  className: '',
  header: ''
};


export default Panel;
