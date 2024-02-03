import { useEffect, useState } from 'react';
import './App.css';
import data from './data/cards';
import BusinessCard from './component/BusinessCard';

type CardData = typeof data[0];

export default function App() {
  const [cards, setCards] = useState<CardData[]>([])
  const [drawnCards, setDrawnCards] = useState<CardData[]>([])

  useEffect(() => {
    setCards(data)
  }, [])

  function draw() {
    const i = Math.floor(Math.random() * cards.length)
    const randomCard = cards[i]

    setCards(cards.filter(e => { return e.phoneNumber !== randomCard.phoneNumber }))
    setDrawnCards([...drawnCards, randomCard])
  }

  return (
    <div className="App">
      <button onClick={draw}>Draw</button>
      <BusinessCard />
    </div>
  );
}
