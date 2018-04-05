import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';

class Facebook extends Component {
  render() {
    return (
      <FacebookProvider appId="1981900718740297">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}

export default Facebook;
