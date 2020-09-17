import React from 'react';

const Item = (props) => {
  const { level, fullname, photo } = props;

  const className = `slide__item level${level}`;
  return (
    <div>
      <div key={`index-${fullname}`} className={className}>
        <img src={photo} alt='' />
      </div>
    </div>
  );
};

export default Item;
