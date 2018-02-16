import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, desc } = this.props;

    return (
      <section>
        <div>{title}</div>
        <div>{desc}</div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Section;
