import { useEffect, useState } from "react";

const data = {
  Germany: "Berlin",
  Egypt: "Cairo",
  France: "Paris",
  Russia: "Moscow",
};
const MatchGame = () => {
  const [shuffled, setShuffled] = useState([]);
  const [ch1, setCh1] = useState(null);
  const [ch2, setCh2] = useState(null);

  const shuffleData = () => {
    console.log("shuffle data called");
    let shuffledData = [...Object.keys(data), ...Object.values(data)]
      .sort(() => Math.random() - 0.5)
      .map((t) => {
        return { txt: t, id: Math.random() * 1000 };
      });
    console.log(shuffledData);
    setShuffled(shuffledData);
  };

  const handleClick = (t) => {
    ch1 ? setCh2(t) : setCh1(t);
  };

  useEffect(() => {
    // shuffleData();
    if (ch1 && ch2) {
      if (data[ch1.txt] === ch2.txt || data[ch2.txt] === ch1.txt) {
        let updated = [...shuffled].filter(
          (obj) => obj.txt !== ch1.txt && obj.txt !== ch2.txt
        );
        console.log(shuffled, updated);
        setShuffled(updated);
      } else {
        console.log("Sorry try again");
      }

      setCh1(null);
      setCh2(null);
    }
  }, [ch1, ch2, shuffled]);
  return (
    <>
      <h1>Magic Match</h1>
      <button onClick={shuffleData}>New Capitals Game</button>

      <div className="options">
        {shuffled.map((t) => {
          return (
            <button key={t.id} onClick={() => handleClick(t)}>
              {t.txt}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default MatchGame;
