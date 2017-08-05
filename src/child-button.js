'use strict';

var React = require('react');
var classnames = require('classnames');

var ChildButton = React.createClass({

  handleOnClick: function handleOnClick() {
    if(this.props.disabled === true)
    {
      return;
    }

    this.props.onClick();
  },

  render: function(){
    var iconClass = classnames('mfb-component__child-icon', this.props.icon);
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
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }
});

module.exports = ChildButton;
