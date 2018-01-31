import React, { Component } from 'react';

import clouds from '../assets/img/clouds.png';
import bgImage from '../assets/img/antoine-barres.jpg';


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="page-header section-dark" style={{backgroundImage: "url("+bgImage+")"}}>
          <div className="filter"></div>
          <div className="content-center">
            <div className="container">
              <div className="title-brand">
                <h1 className="presentation-title">React Blog</h1>
                <div className="fog-low">
                  <img src="assets/img/fog-low.png" alt="" />
                </div>
                <div className="fog-low right">
                  <img src="assets/img/fog-low.png" alt="" />
                </div>
              </div>

              <h2 className="presentation-subtitle text-center">Broken? No, just rearranging.</h2>
            </div>
          </div>
          <div className="moving-clouds" style={{backgroundImage: "url("+clouds+")"}}></div>
        </div>
      </div>
    )
  }
}

export default Home;
