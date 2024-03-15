import React, { Component } from 'react';
import Container from '../Container';
import { H2, H3, Body2 } from '../Typography';
import { Btn1 } from '../Btns';
import COOKING_INGREDIENTS from '../../mock/cookingIngredients';
import styles from './style.module.css';
class CookingIngredients extends Component {
  render() {
    return (
      <Container>
        <section
          className={styles.row}
          id='cooking-ingredients'>
          <div className={styles.col__left}>
            <H2>Cooking ingredients</H2>
            <H3>{COOKING_INGREDIENTS?.title}</H3>
            <Body2>{COOKING_INGREDIENTS?.body}</Body2>
            <Btn1
              btnHref={COOKING_INGREDIENTS?.btn?.href}
              variant='btn1__md'>
              {COOKING_INGREDIENTS?.btn?.label}
            </Btn1>
          </div>
          <div className={styles.col__right}>
            <img
              className={styles.img}
              src={COOKING_INGREDIENTS?.img?.src}
              alt={COOKING_INGREDIENTS?.img?.alt}
            />
          </div>
        </section>
      </Container>
    );
  }
}

export default CookingIngredients;
