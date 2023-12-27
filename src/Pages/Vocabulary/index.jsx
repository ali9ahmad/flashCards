import { useEffect, useState } from 'react';
import './styles.scss';

import Card from '../../Components/Card';

export default function Vocabulary() {
  const [flashcarddata, setFlashcarddata] = useState([]);

  useEffect(() => {
    const url = 'https://658b1accba789a962238718b.mockapi.io/api/v1/cardWord';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFlashcarddata(json.records);
        // console.log(json.records);
      }); //
  }, []);

  const cards = flashcarddata.map((item) => {
    return <Card item={item} key={item.id} />;
  });

  const loading = <div> Words are getting loaded ... please wait ...</div>;

  const [current, setCurrent] = useState(0);
  const nextItem () => { setCurrent(current + 1)}
  // console.log(loading);
}
