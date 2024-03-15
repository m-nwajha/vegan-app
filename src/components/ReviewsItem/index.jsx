import React, { Component } from 'react';
import styles from './style.module.css';
import { Body1, Body2, VectorStar } from '../Typography';
class ReviewsItem extends Component {
  render() {
    const { photo, name, reviewStar, children } = this.props;
    return (
      <div className={styles.box__review}>
        <div className={styles.header__box}>
          <img
            src={photo}
            alt={name}
          />
          <div className={styles.box__title}>
            <Body1>{name}</Body1>
            <span>
              <VectorStar reviewNum={reviewStar} />
            </span>
          </div>
        </div>
        <div className={styles.body__box}>
          <Body2>{children}</Body2>
        </div>
      </div>
    );
  }
}

export default ReviewsItem;
