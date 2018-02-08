import React, { Component } from 'react';
import Head from 'next/head';
import Navigation from '../components/navigation';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>New Nordic</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" />
        </Head>
        <Navigation />
      </div>
    );
  }
}

export default Index;
