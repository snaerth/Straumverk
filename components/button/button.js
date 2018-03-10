import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './button.css';

class Button extends Component {
  render() {
    const { children } = this.props;
    return <button className={s.button}>{children}</button>;
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
