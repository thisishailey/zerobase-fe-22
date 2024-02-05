import { useEffect, useState } from 'react';
import './App.css';
import data from './data/cards';
import BusinessCard from './component/BusinessCard';

export type CardData = (typeof data)[0];

export function App() {
    const [cards, setCards] = useState<CardData[]>([]);
    const [drawnCards, setDrawnCards] = useState<CardData[]>([]);

    useEffect(() => {
        setCards(data);
    }, []);

    function draw() {
        const i = Math.floor(Math.random() * cards.length);
        const randomCard = cards[i];

        setCards(
            cards.filter((e) => {
                return e.phoneNumber !== randomCard.phoneNumber;
            }),
        );
        setDrawnCards([...drawnCards, randomCard]);
    }

    return (
        <div className='App'>
            {cards.length > 0 ? (
                <button className='drawButton' onClick={draw}>
                    Draw
                </button>
            ) : (
                <div>There is no more card left to draw...</div>
            )}
            <section className='cardSection'>
                {drawnCards.length > 0 &&
                    drawnCards.map((card) => (
                        <BusinessCard key={card.phoneNumber} cardInfo={card} />
                    ))}
            </section>
        </div>
    );
}
