import React, { Component } from 'react';
import Container from '../Container';
import { H2, H3 } from '../Typography';
import { Btn1 } from '../Btns';
import OFFER_ADS_DATA from '../../mock/OfferAdsData';
import styles from './style.module.css';
class OfferAds extends Component {
  render() {
    const { titleA, titleA2, titleB, btnLabel, btnHref, adsImg } = OFFER_ADS_DATA;
    return (
      <section
        className={styles.ads__section}
        id='offer-ads'>
        <Container>
          <div className={styles.box}>
            <div className={styles.box__img}>
              <img
                src={adsImg}
                alt='offer ads'
              />
            </div>
            <div className={styles.box__text}>
              <H2>
                {titleA} <br /> {titleA2}
              </H2>
              <H3>{titleB}</H3>
              <Btn1 btnHref={btnHref}>{btnLabel}</Btn1>
            </div>
            <div className={styles.box__img}>
              <img
                src={adsImg}
                alt='offer ads'
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default OfferAds;
