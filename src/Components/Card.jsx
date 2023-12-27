import React from 'react';

export default function Card({ item }) {
  const [side, setSide] = React.useState();

  const handleClick = () => {
    console.log('clicked');
    setSide(!side);
    console.log(side);
  };

  return (
    <div className={`card ${side ? 'side' : ''}`} onClick={handleClick}>
      <small>
        <span>Item ID</span>
        {item.id}
      </small>
    </div>
  );
}
