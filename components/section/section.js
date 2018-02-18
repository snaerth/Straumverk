import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Waypoint from 'react-waypoint';
import shortid from 'shortid';
import s from './section.css';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter() {
    console.log(this.content);
  }

  /**
   * Renders section content
   *
   * @param {Boolean} isVisible
   */
  renderText() {
    const { title, desc, img, id } = this.props;
    const { visible } = this.state;

    return (
      <div className={`section-${id}`} key={shortid.generate()} ref={r => (this.content = r)}>
        <div>
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.desc}>{desc}</div>
      </div>
    );
  }

  renderImage() {
    const { img, title, id } = this.props;

    return (
      <div key={shortid.generate()}>
        <img src={img} alt={title} />
      </div>
    );
  }

  render() {
    return (
      <section className={this.props.switch ? s.odd : ''}>
        <Waypoint onEnter={this.onEnter} partialVisibility>
          <div className={classnames(s.container, 'container')}>
            {this.props.switch
              ? [this.renderImage(), this.renderText()]
              : [this.renderText(), this.renderImage()]}
          </div>
        </Waypoint>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  switch: PropTypes.bool,
};

export default Section;
