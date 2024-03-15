import React, { Component } from 'react';
import Container from '../Container';
import CounterItem from '../CounterItem';
import COUNTER_DATA from '../../mock/counterData';
import styles from './style.module.css';
class Counters extends Component {
  render() {
    return (
      <section
        className={styles.ads__section}
        id='counters'>
        <Container>
          <div className={styles.box}>
            {COUNTER_DATA.map(counter => {
              return (
                <CounterItem
                  key={counter.key}
                  counterName={counter.label}
                  counterValue={counter.value}
                  counterImg={counter.img}
                />
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
}

export default Counters;
