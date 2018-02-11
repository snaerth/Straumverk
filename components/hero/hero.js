import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './hero.css';

class Hero extends Component {
  render() {
    const { title, children, className } = this.props;

    return (
      <section
        className={classnames('hero', 'is-medium', 'is-bold', s.hero, className || s.background)}
      >
        <div
          className={classnames('hero-body', s.backgroundImage)}
          style={{ backgroundImage: `url(/static/img/movies.jpg)` }}
        >
          <div className="container">
            <div className="columns">
              <div className="column content is-medium">
                <h1
                  className={classnames(
                    'title',
                    'is-1',
                    'max-768',
                    s.animated,
                    s.fadeInLeft,
                    s.colorWhite
                  )}
                >
                  {title}
                </h1>
                <p
                  className={classnames(
                    'subtitle',
                    'max-768',
                    s.animated,
                    s.fadeInLeft,
                    s.colorWhite,
                    s.delay
                  )}
                />
              </div>
              {children ? <div className="column content is-medium">{children}</div> : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Hero;
