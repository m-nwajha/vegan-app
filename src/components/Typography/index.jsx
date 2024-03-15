import './style.css';
export const H1 = ({ children }) => {
  return <h1 className='t__h1'>{children}</h1>;
};
export const H2 = ({ children }) => {
  return <h2 className='t__h2'>{children}</h2>;
};
export const H3 = ({ children }) => {
  return <h3 className='t__h3'>{children}</h3>;
};
export const H4 = ({ children }) => {
  return <h4 className='t__h4'>{children}</h4>;
};
export const H5 = ({ children }) => {
  return <h5 className='t__h5'>{children}</h5>;
};
export const H6 = ({ children }) => {
  return <h6 className='t__h6'>{children}</h6>;
};
export const Body1 = ({ children }) => {
  return <p className='t__body1'>{children}</p>;
};
export const Body2 = ({ children }) => {
  return <p className='t__body2'>{children}</p>;
};
export const Span = ({ children }) => {
  return <span className='t__span'>{children}</span>;
};
export const Caption = ({ children }) => {
  return <span className='t__caption'>{children}</span>;
};

export const VectorStar = ({ reviewNum }) => {
  const star = [];
  for (let i = 0; i < reviewNum; i++) {
    star.push(
      <svg
        key={i}
        width='12'
        height='11'
        viewBox='0 0 12 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z'
          fill='#FFFFFC'
          stroke='#FFFFFC'
          strokeWidth='0.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  }
  return star;
};
