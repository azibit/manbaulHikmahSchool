import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'

class HeaderNavigation extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo"><h4>Manba'ul Hikmah Private Schools</h4></a>
        <ul className="right hide-on-med-and-down">
          <li>
          <a href="#introduction">Home</a>
          </li>
          <li><a href="badges.html">What We Offer</a></li>
          <li><a href="badges.html">Facilities</a></li>
          <li><a className="waves-effect waves-light btn " href="#modal1">Contact Us</a></li>
        </ul>
      </div>

    </nav>
  </div>);
  }
}

export default HeaderNavigation;