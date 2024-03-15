import React, { Component } from 'react';
import Container from '../Container';
import ReviewsItem from '../ReviewsItem';
import REVIEWS from '../../mock/reviewsData';
import { H2, H3 } from '../Typography';
import styles from './style.module.css';
class Reviews extends Component {
  render() {
    return (
      <Container variant='container__lg'>
        <div
          className={styles.box}
          id='reviews'>
          <div className={styles.box__header}>
            <H2>Reviews</H2>
            <H3>words from our food lovers</H3>
          </div>
          <div className={styles.box__body}>
            {REVIEWS.map(reviewItem => {
              return (
                <ReviewsItem
                  key={reviewItem.id}
                  photo={reviewItem.photo}
                  name={reviewItem.name}
                  reviewStar={reviewItem.reviewStar}>
                  {reviewItem.reviewBody}
                </ReviewsItem>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default Reviews;
