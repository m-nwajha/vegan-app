import React, { Component } from 'react';
import Container from '../Container';
import BlogItem from '../BlogsItem';
import { H2, H3 } from '../Typography';
import BLOG_DATA from '../../mock/blogData';
import styles from './style.module.css';
class Blogs extends Component {
  render() {
    return (
      <Container variant='container__lg'>
        <div
          className={styles.box}
          id='blogs'>
          <div className={styles.box__header}>
            <H2>Blogs</H2>
            <H3>words from our food lovers</H3>
          </div>
          <div className={styles.box__body}>
            {BLOG_DATA.map((blogItem)=>{
              return (
                <BlogItem
                  key={blogItem.id}
                  id={blogItem.id}
                  title={blogItem.title}
                  href={blogItem.href}
                  imgSrc={blogItem.imgSrc}>
                  {blogItem.body}
                </BlogItem>
              );
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default Blogs;
