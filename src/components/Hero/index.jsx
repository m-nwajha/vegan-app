import React, { Component } from 'react';
import Container from '../Container';
import { Body1, H1 } from '../Typography';
import { Btn1 } from '../Btns';
import HERO_DATA from '../../mock/heroData';
import styles from './style.module.css';
class Hero extends Component {
  render() {
    return (
      <div
        className={styles.hero}
        id='hero'>
        <Container>
          <div className={styles.hero__card}>
            <H1>
              Welcome To <br /> {HERO_DATA?.title}
            </H1>
            <Body1>{HERO_DATA?.text}</Body1>
            <Btn1
              btnHref={HERO_DATA?.btn?.href}
              variant='btn1__lg'>
              {HERO_DATA?.btn?.label}
            </Btn1>
          </div>
        </Container>
      </div>
    );
  }
}

export default Hero;
