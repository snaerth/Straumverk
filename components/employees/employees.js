import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './employees.css';

class Employees extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.listContainer}>
          <div className={s.wrapper}>
            <figure className={s.imageWrapper}>
              <img
                src="/static/img/electric3.jpg"
                alt="Excited at KEF airport"
                className={s.image}
              />
            </figure>
            <figcaption>
              <p>Excited at KEF airport</p>
            </figcaption>
          </div>
          <div className={s.wrapper}>
            <figure className={s.imageWrapper}>
              <img
                src="/static/img/electric3.jpg"
                alt="Excited at KEF airport"
                className={s.image}
              />
            </figure>
            <figcaption>
              <p>Excited at KEF airport</p>
            </figcaption>
          </div>
        </div>
      </div>
    );
  }
}

Employees.propTypes = {};

export default Employees;
