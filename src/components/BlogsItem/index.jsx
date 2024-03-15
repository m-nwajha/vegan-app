import React, { Component } from 'react';
import { Body2, H5 } from '../Typography';
import { Btn2 } from '../Btns';
import styles from './style.module.css';
class BlogItem extends Component {
  render() {
    const { id, title, href, imgSrc, children } = this.props;
    return (
      <div className={styles.box__blog}>
        <div
          className={`${styles.header__box}  ${
            id % 2 === 0 ? styles.img__bottom : null
          }`}>
          <img
            src={imgSrc}
            alt={title}
          />
        </div>
        <div className={styles.body__box}>
          <H5>{title}</H5>
          <Body2>{children}</Body2>
          <Btn2 btnHref={href}>Read more</Btn2>
        </div>
      </div>
    );
  }
}

export default BlogItem;
