import React, { Component } from 'react';
import Link from 'next/link';
import s from '../navigation.css';

class Navigation extends Component {
  render() {
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
                <a className="navbar-item white">Um okkur</a>
                <a className="navbar-item">About us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
