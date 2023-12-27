import { useState } from 'react';

export function Card({ card }) {
  const [side, setSide] = useState();

  const handleClick = () => {
    console.log('clicked');
    setSide(!side);
    console.log(side);
  };

  return (
    <div className={`card ${side ? 'side' : ''}`} onClick={handleClick}>
      <small>
        <span>Card ID</span>
        {card.id}
      </small>
      <div className="front">{card.fields.side1}</div>
      <div className="back">{card.fields.side2}</div>
    </div>
  );
}
