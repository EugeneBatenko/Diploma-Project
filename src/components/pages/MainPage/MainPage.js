import React, { Component } from 'react';

import Header from '../../elements/Header';
import HeaderBanner from '../../elements/HeaderBanner';
import About from '../../elements/About';
import WhatInclude from '../../elements/WhatInclude';
import Facts from '../../elements/Facts';
import OurTeam from '../../elements/OurTeam';
import Footer from "../../elements/Footer";
//Scroll restore
import ScrollToTop from "../../elements/ScrollToTop";



class MainPage extends Component {
  render() {
    return (
        <div className="container-wrapper">
            <ScrollToTop/>
          <Header/>
          <main>
            <HeaderBanner/>
            <About/>
            <WhatInclude/>
            <Facts/>
            <OurTeam/>
          </main>
            <Footer/>
        </div>
    );
  }
}

export default MainPage;
