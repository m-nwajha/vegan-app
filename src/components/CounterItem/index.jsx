import React, { Component } from 'react';
import styles from './style.module.css';
import { Body1, H1 } from '../Typography';
class CounterItem extends Component {
  render() {
    const { counterValue, counterName, counterImg } = this.props;

    return (
      <div className={styles.box__item}>
        <img
          src={counterImg}
          alt={counterName}
        />
        <div style={{ textAlign: 'center' }}>
          <H1>{counterValue}+</H1>
          <Body1>{counterName}</Body1>
        </div>
      </div>
    );
  }
}

export default CounterItem;
