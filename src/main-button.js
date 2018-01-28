'use strict';

var React = require('react');
var classnames = require('classnames');
var FontAwesomeIcon = require('@fortawesome/react-fontawesome');
const faPlus = require('@fortawesome/fontawesome-free-solid/faPlus');
const faTimes = require('@fortawesome/fontawesome-free-solid/faTimes');

class MainButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var iconResting = this.props.iconResting;
    var iconActive = this.props.iconActive;
    var mainClass = classnames('mfb-component__button--main', this.props.className);

    if (this.props.label) {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <i className='mfb-component__main-icon--resting'><FontAwesomeIcon icon={iconResting}></FontAwesomeIcon></i>
          <i className='mfb-component__main-icon--active'><FontAwesomeIcon icon={iconActive}></FontAwesomeIcon></i>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick}>
          <i className='mfb-component__main-icon--resting'><FontAwesomeIcon icon={iconResting}></FontAwesomeIcon></i>
          <i className='mfb-component__main-icon--active'><FontAwesomeIcon icon={iconActive}></FontAwesomeIcon></i>
        </a>
      );
    }
  }
}

MainButton.defaultProps = {
  href: '#',
  onClick: function(){},
  iconResting: faPlus,
  iconActive: faTimes,
  label: null
};

module.exports = MainButton;
