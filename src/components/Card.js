import React from "react";

const Card = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className={"card " + card.matched && `match`}>
      <img src={card.src} alt="front" className="front" />
      <img
        src="./img/cover.png"
        alt="back"
        onClick={handleClick}
        className="back"
      />
    </div>
  );
};

export default Card;
