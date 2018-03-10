import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './footer.css';

class Footer extends Component {
  render() {
    const { t } = this.props;

    return (
      <footer className={s.container}>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Straumverk ehf.</strong> · Netfang:{' '}
              <a href="mailto:straumverk@straumverk.is">straumverk@straumverk.is</a> ·
              Kt.640517-0500 · Vsk.129428 · Sími: <a href="tel:+3548884070">888-4070</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  t: PropTypes.object.isRequired,
};

export default Footer;
