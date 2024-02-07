import React, { Component } from 'react';
import Container from '../Container';
import { H2, H3 } from '../Typography';
import SpecialItem from '../SpecialItem';
import SPECIAL_DATA from '../../mock/specialData';
import styles from './style.module.css';
class Special extends Component {
  render() {
    return (
      <section
        className={styles.special__section}
        id='special'>
        <Container variant='container__lg'>
          <div className={styles.box}>
            <div className={styles.box__header}>
              <H2>Special</H2>
              <H3>{SPECIAL_DATA?.title}</H3>
            </div>
            <div className={styles.box__body}>
              {SPECIAL_DATA?.body.map(specialItem => (
                <SpecialItem
                  key={specialItem.key}
                  title={specialItem?.title}
                  imgSrc={specialItem?.imgSrc}>
                  {specialItem?.body}
                </SpecialItem>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default Special;
