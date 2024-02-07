import React from 'react'
import './style.css'
const Container = ({ children , variant }) => {
  return (
    <div className={variant === 'container__lg' ? 'container__lg' : 'container'}>
      {children}
    </div>
  );
};

export default Container