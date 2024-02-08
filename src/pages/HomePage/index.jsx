import React, { Component } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Special from '../../components/Special';
import FromKitchen from '../../components/FromKitchen';
import OfferAds from '../../components/OfferAds';

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutUs />
        <Special />
        <FromKitchen />
        <OfferAds />
      </>
    );
  }
}

export default HomePage;
