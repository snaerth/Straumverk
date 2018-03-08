import React, { Component } from 'react';
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { setTranslations } from '../common/actions';
import { SET_LANG } from '../common/types';
import configureStore from '../common/store';
import Navigation from '../components/navigation';
import Slider from '../components/slider';
import Menu from '../components/menu';
import Section from '../components/section';
import Employees from '../components/employees';
import 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps({ req, store }) {
    const lang = req.cookies && req.cookies.lang ? req.cookies.lang : 'is';
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
    const { t, lang, menuOpen } = this.props;

    const slides = [
      {
        image: '/static/img/electric1.jpg',
        title: t.specialField,
        desc: t.specialFieldShortDesc,
        link: t.specialFieldLink,
      },
      {
        image: '/static/img/electric2.jpg',
        title: t.projects,
        desc: t.projectsShortDesc,
        link: t.projectsLink,
      },
      {
        image: '/static/img/electric3.jpg',
        title: t.partners,
        desc: t.partnersShortDesc,
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
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>
        <main>
          <Navigation t={t} lang={lang} />
          <Menu open={menuOpen} t={t} />
          <Slider slides={slides} t={t} />
          <Employees />
          <Section
            title={t.partners}
            desc={t.partnersDesc}
            img="/static/img/electric4.jpg"
            id={1}
          />
          <Section
            title={t.projects}
            desc={t.projectsDesc}
            img="/static/img/electric2.jpg"
            id={2}
            switch
          />
          <Section
            title={t.specialField}
            desc={t.specialFieldDesc}
            img="/static/img/electric3.jpg"
            id={3}
          />
        </main>
        <style jsx global>{`
          body {
            padding-top: 3.25rem;
          }
        `}</style>
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
  const { translations, lang, menuOpen } = state.common;
  return {
    t: translations,
    lang,
    menuOpen,
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
