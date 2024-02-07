import React, { Component } from 'react';
import Container from '../Container';
import { H2, H3, Body2 } from '../Typography';
import { Btn1 } from '../Btns';
import ABOUT_DATA from '../../mock/aboutData';
import styles from './style.module.css';
class AboutUs extends Component {
  render() {
    return (
      <Container>
        <section
          className={styles.row}
          id='about-us'>
          <div className={styles.col__left}>
            <H2>About Us</H2>
            <H3>{ABOUT_DATA?.title}</H3>
            <Body2>{ABOUT_DATA?.body}</Body2>
            <Btn1
              btnHref={ABOUT_DATA?.btn?.href}
              variant='btn1__md'>
              {ABOUT_DATA?.btn?.label}
            </Btn1>
          </div>
          <div className={styles.col__right}>
            <img
              className={styles.img}
              src={ABOUT_DATA?.img?.src}
              alt={ABOUT_DATA?.img?.alt}
            />
          </div>
        </section>
      </Container>
    );
  }
}

export default AboutUs;
