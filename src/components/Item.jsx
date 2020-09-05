import React from 'react';

const Item = (props) => {
  const { level, fullname, photo } = props;

  const className = `slide__item level${level}`;
  return (
    <div>
      <a key={`index-${fullname}`} className={className} href='/'>
        <img src={photo} alt='' />
        {/* <span>{fullname}</span> */}
      </a>
    </div>
  );
};

export default Item;
