import React, { Component } from 'react';
import NAVBAR_DATA from '../../mock/navbar.js';
import styles from './style.module.css';
const logoHeader = '/assets/Logo.png';
class Header extends Component {
  state = {
    openMenuNav: false
  };
  handelMenuToggle = () => {
    this.setState(prevState => ({ openMenuNav: !prevState.openMenuNav }));
  };
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.left__header}>
          <a
            href='/'
            className={styles.brand}>
            <img
              src={logoHeader}
              alt='logo'
            />
          </a>
          <nav className={styles.navbar}>
            <button
              onClick={this.handelMenuToggle}
              className={styles.toggle__btn__nav}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 16 16'>
                <path
                  fillRule='evenodd'
                  d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5'
                  stroke='#A08040'
                />
              </svg>
              <span>Menu</span>
            </button>
            <ul className={this.state.openMenuNav ? styles.menu__open : null}>
              <button
                className={styles.toggle__btn__nav}
                onClick={this.handelMenuToggle}
                style={{ marginBottom: '1.5rem' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  viewBox='0 0 16 16'>
                  <path
                    d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z'
                    stroke='#A08040'
                  />
                </svg>
              </button>
              {NAVBAR_DATA.map(navItem => {
                return (
                  !navItem.isBtnNav && (
                    <li
                      key={navItem.id}
                      onClick={this.handelMenuToggle}>
                      <a
                        className={`${styles.nav__link} ${navItem.path === '/' ? styles.active : null}`}
                        href={navItem.path}>
                        {navItem.label}
                      </a>
                    </li>
                  )
                );
              })}
              {NAVBAR_DATA.map(
                navItem =>
                  navItem.isBtnNav && (
                    <a
                      className={`${styles.btn__header} ${styles.center}`}
                      href={navItem.path}
                      key={navItem.id}>
                      <span>{navItem.label}</span>
                    </a>
                  )
              )}
            </ul>
          </nav>
        </div>
        <div className={styles.right__header}>
          <a
            className={styles.search}
            href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'>
              <path
                d='M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z'
                stroke='#A08040'
                strokeWidth='2'
              />
            </svg>
          </a>
          {NAVBAR_DATA.map(
            navItem =>
              navItem.isBtnNav && (
                <a
                  className={`${styles.btn__header} ${styles.right}`}
                  style={{ width: '12rem' }}
                  href={navItem.path}
                  key={navItem.id}>
                  <span>{navItem.label}</span>
                </a>
              )
          )}
        </div>
      </header>
    );
  }
}

export default Header;
