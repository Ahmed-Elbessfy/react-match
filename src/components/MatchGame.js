import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const cardsData = [
  {
    src: "./img/helmet-1.png",
    matched: false,
  },
  {
    src: "./img/potion-1.png",
    matched: false,
  },
  {
    src: "./img/ring-1.png",
    matched: false,
  },
  {
    src: "./img/scroll-1.png",
    matched: false,
  },
  {
    src: "./img/shield-1.png",
    matched: false,
  },
  {
    src: "./img/sword-1.png",
    matched: false,
  },
];

const MatchGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);

  // shuffle images
  const shuffleCards = () => {
    const shuffledCards = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() * 1000 }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    ch1 && card.id !== ch1.id ? setCh2(card) : setCh1(card);
  };

  const reset = () => {
    setCh1(null);
    setCh2(null);
    setTurns(0);
  };

  useEffect(() => {
    if (ch2 && ch1) {
      console.log(ch1, ch2);
      if (ch1.src === ch2.src) {
        console.log("yaaaaaaaaaaah a match");
        // net ninja method
        setCards((prev) => {
          return prev.map((card) => {
            return card.src === ch1.src ? { ...card, matched: true } : card;
          });
        });

        // my method
        // const update = [...cards].map((card) => {
        //   if (card.src === ch1.src) {
        //     return { ...card, matched: true };
        //   }
        //   return card;
        // });
        // setCards(update);
      } else {
        console.log("Are you fucken craaazy?!");
      }
    }

    reset();
  }, [ch2]);

  return (
    <div>
      <button onClick={shuffleCards}>New Match Game</button>
      <div className="cards-grid">
        {cards.map((card) => {
          return <Card key={card.id} card={card} handleChoice={handleChoice} />;
        })}
      </div>
    </div>
  );
};

export default MatchGame;
