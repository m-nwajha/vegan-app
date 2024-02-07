import React, { Component } from 'react';
import {  H4, Body2 } from '../Typography';
import styles from './style.module.css';
class SpecialItem extends Component {
  render() {
    const { title, children, imgSrc } = this.props;
    return (
      <div className={styles.item__box}>
        <img
          src={imgSrc}
          alt={title}
        />
        <H4>{title}</H4>
        <Body2>{children}</Body2>
      </div>
    );
  }
}

export default SpecialItem;
