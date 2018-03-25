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
import Button from '../components/button';
import Footer from '../components/footer';
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
        image: '/static/img/electric3.jpg',
        title: 'Straumverk',
        desc: 'Allt sem þú þarft á einum stað',
      },
      {
        image: '/static/img/electric1.jpg',
        title: t.operations,
        desc: t.specialFieldShortDesc,
      },
      {
        image: '/static/img/electric2.jpg',
        title: t.contact,
        desc: t.contactDesc,
      },
    ];

    return (
      <div>
        <Head>
          <title>Straumverk</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
          <link rel="stylesheet" href="/static/css/base.css" />
          {process.env.NODE_ENV === 'production' ? (
            <link rel="stylesheet" href="/_next/static/style.css" />
          ) : (
            <link rel="stylesheet" href="/static/css/style.css" />
          )}
        </Head>
        <main>
          <Navigation t={t} lang={lang} />
          <Menu open={menuOpen} t={t} />
          <Slider slides={slides} t={t} />

          <Section img="/static/img/electric3.jpg" id={1} switch>
            <h2>{t.operations}</h2>
            <p>{t.operationsDesc}</p>
          </Section>
          <Section img="/static/img/electric1.jpg" id={2}>
            <h2>{t.aboutus}</h2>
            <p>{t.aboutusDesc}</p>
          </Section>
          <Section img="/static/img/electric2.jpg" id={3} switch>
            <h2>{t.contact}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.contactDesc,
              }}
            />
            <div className="has-text-centered">
              <a href="mailto:straumverk@straumverk.is">
                <Button>{t.contact}</Button>
              </a>
            </div>
          </Section>
          <Footer t={t} />
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
