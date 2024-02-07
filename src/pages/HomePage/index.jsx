import React, { Component } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Special from '../../components/Special';

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutUs />
        <Special />
      </>
    );
  }
}

export default HomePage;
