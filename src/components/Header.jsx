import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
          <div className="navbar-translate">
            <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
            </button>
            <Link className="navbar-brand" to={'/'}>
              React Blog
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Follow me on LinkedIn" data-placement="bottom" href="https://www.linkedin.com/in/jon-lambson/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                  <p className="d-lg-none">Twitter</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Find me on Facebook" data-placement="bottom" href="https://www.facebook.com/jon.lambson" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-square"></i>
                  <p className="d-lg-none">Facebook</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Follow me on Instagram" data-placement="bottom" href="https://www.facebook.com/jon.lambson" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                  <p className="d-lg-none">Instagram</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://github.com/jonthedecepticon" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                  <p className="d-lg-none">GitHub</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
