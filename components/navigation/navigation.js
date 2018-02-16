import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { getTranslations } from '../../common/actions';
import s from './navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.changeLang = this.changeLang.bind(this);
  }

  /**
   * Gets and changes default language
   *
   * @param {String} lang - Language key
   */
  changeLang(lang) {
    this.props.getTranslations(lang);
  }

  /**
   * Renders default global language
   */
  renderLang() {
    const { t, lang, avaliableLang } = this.props;

    return avaliableLang.map(item => {
      if (item !== lang) {
        return (
          <a className="navbar-item" key={item} onClick={() => this.changeLang(item)}>
            {item.toUpperCase()}
          </a>
        );
      }
    });
  }

  render() {
    const { t } = this.props;

    return (
      <nav className={s.navbarBackground}>
        <div className="container">
          <div className="navbar">
            <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-item title is-4">New Nordic</a>
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item">{t.aboutUs}</a>
                <a className="navbar-item">{t.specialField}</a>
                <a className="navbar-item">{t.projects}</a>
                <a className="navbar-item">{t.partners}</a>
                <a className="navbar-item">{t.employees}</a>
                {this.renderLang()}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  t: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
};

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  const { avaliableLang } = state.common;

  return {
    avaliableLang,
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    getTranslations: bindActionCreators(getTranslations, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
