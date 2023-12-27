import { useEffect, useState } from 'react';
import './styles.scss';

import { Card } from './Card';

export function Cards() {
  const [flashcarddata, setFlashcarddata] = useState([]);

  useEffect(() => {
    const url = 'https://api.airtable.com/v0/appqY5UZYlf41Q5VT/Table%201?api_key=keyPZ9SKzXIt4Ek1v';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFlashcarddata(json.records);
      });
  }, []);

  const cards = flashcarddata.map((card) => {
    return <Card card={card} key={card.id} />;
  });

  const loading = <div> Words are getting loaded ... please wait ...</div>;

  const [current, setCurrent] = useState(0);
  const previousCard = () => {
    setCurrent(current - 1);
  };
  const nextCard = () => {
    setCurrent(current + 1);
  };

  return (
    <div>
      {/* number of cards */}
      {flashcarddata && flashcarddata.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcarddata.length}
        </div>
      ) : (
        ''
      )}
      {/* /number of cards */}

      {/* render cards */}
      {flashcarddata && flashcarddata.length > 0 ? cards[current] : loading}
      {/* render cards */}

      {/* render nav buttons */}
      <div className="nav">
        {current > 0 ? (
          <button onClick={previousCard}>Previous Card</button>
        ) : (
          <button className="disabled" disabled>
            Previous Card
          </button>
        )}
        {current < flashcarddata.length - 1 ? (
          <button onClick={nextCard}>Next Card</button>
        ) : (
          <button className="disabled" disabled>
            Next Card
          </button>
        )}
      </div>
      {/* render nav buttons */}
    </div>
  );
}
