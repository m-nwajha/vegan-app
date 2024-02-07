import React, { Component } from 'react';
import { Body2, H4, H5 } from '../Typography';
import styles from './style.module.css';
class FromKitchenItem extends Component {
  render() {
    const { title, children, prise, imgSrc } = this.props;
    return (
      <div className={styles.item__box}>
        <div className={styles.box__left}>
          <img
            src={imgSrc}
            alt={title}
          />
          <div className={styles.box__text}>
            <H5>{title}</H5>
            <Body2>{children}</Body2>
          </div>
        </div>
        <div className={styles.box__right}>
          <H4>{prise}</H4>
        </div>
      </div>
    );
  }
}

export default FromKitchenItem;
