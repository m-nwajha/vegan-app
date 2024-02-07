import React, { Component } from 'react';
import Container from '../Container';
import { H2, H3 } from '../Typography';
import FromKitchenItem from '../FromKitchenItem';
import MENU_DATA from '../../mock/menuData';
import styles from './style.module.css';
class FromKitchen extends Component {
  render() {
    return (
      <Container>
        <section
          className={styles.box}
          id='menu'>
          <div className={styles.box__header}>
            <H2>Straight From Kitchen</H2>
            <H3>{MENU_DATA?.title}</H3>
          </div>
          <div className={styles.box__body}>
            {MENU_DATA?.body.map(menuItem => (
              <FromKitchenItem
                key={menuItem?.key}
                title={menuItem?.title}
                prise={menuItem?.prise}
                imgSrc={menuItem?.imgSrc}>
                {menuItem?.body}
              </FromKitchenItem>
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default FromKitchen;
