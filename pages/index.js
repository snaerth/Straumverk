import React, { Component } from 'react';
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { setTranslations } from '../common/actions';
import { SET_LANG } from '../common/types';
import configureStore from '../common/store';
import Navigation from '../components/navigation';
import Slider from '../components/slider';
import Section from '../components/section';
import 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps({ req, store }) {
    const lang = req.cookies.lang || 'is';
    const res = await fetch(`${process.env.LOCAL_URL}/static/lang/${lang}.json`);
    const json = await res.json();
    const payload = {
      lang,
      translations: json,
    };

    store.dispatch({ type: SET_LANG, payload });
    return { t: json, lang };
  }

  render() {
    const { t, lang } = this.props;

    const slides = [
      {
        image: '/static/img/25.jpg',
        title: t.specialField,
        desc: t.specialFieldDesc,
        link: t.specialFieldLink,
      },
      {
        image: '/static/img/28.jpg',
        title: t.projects,
        desc: t.projectsDesc,
        link: t.projectsLink,
      },
      {
        image: '/static/img/27.jpg',
        title: t.partners,
        desc: t.partnersDesc,
        link: t.partnersLink,
      },
    ];

    return (
      <div>
        <Head>
          <title>New Nordic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
          <link rel="stylesheet" href="/static/css/base.css" />
        </Head>
        <main>
          <Navigation t={t} lang={lang} />
          <Slider slides={slides} t={t} />
          <Section title={t.partners} desc={t.partnersDesc} />
          <Section title={t.projects} desc={t.projectsDesc} />
          <Section title={t.specialField} desc={t.specialFieldDesc} />
        </main>
      </div>
    );
  }
}

/**
 * Maps redux state to props
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  const { translations, lang } = state.common;
  return {
    t: translations,
    lang,
  };
}

/**
 * Maps dispatch to props
 *
 * @param {Object} state
 */
function mapDispatchToProps(dispatch) {
  return {
    setTranslations: bindActionCreators(setTranslations, dispatch),
  };
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Index);
