'use strict';

var React = require('react');
var classnames = require('classnames');
var FontAwesomeIcon = require('@fortawesome/react-fontawesome');

class ChildButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.disabled === true) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    var iconClass = this.props.icon;
    var className = classnames('mfb-component__button--child',
                               this.props.className,
                               {"mfb-component__button--disabled": this.props.disabled});
    return (
      <li>
        <a href={this.props.href}
           data-mfb-label={this.props.label}
           onClick={this.handleOnClick}
           style={this.props.style}
           className={className}>
           <i className='mfb-component__child-icon'><FontAwesomeIcon icon={iconClass}></FontAwesomeIcon></i>
        </a>
      </li>
    );
  }
}

module.exports = ChildButton;
