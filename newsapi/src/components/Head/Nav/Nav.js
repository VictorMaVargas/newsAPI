import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  
  render() {
    return (
      <nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__listItem">
            <Link className="Nav__link" to="/home">Home</Link>
          </li>
          <li>
            <Link to="/form"> Form</Link>
          </li>
          <li>
            <Link to="/list"> ListNews</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;