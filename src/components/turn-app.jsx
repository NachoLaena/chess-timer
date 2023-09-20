import { useContext, useEffect, useRef, useState } from "react";
import "./player-timer.css";
import { TurnContext } from "../context/turn-context";
import { PLAYERS } from "../constants";

export const TurnApp = ({ player }) => {
  const { toggleIsFinished, isPlaying, turn, toggleTurn } = useContext(TurnContext);
  const [mins, setMins] = useState(5);
  const [secs, setSecs] = useState(0);
  const interval = useRef();

  const handleBoardClick = () => {
    isPlaying ? toggleTurn() : null;
  };

  useEffect(() => {
  if (isPlaying && turn === player) {
      interval.current = setInterval(() => {
        setSecs((prevSecs) => prevSecs - 1);
      }, 1000 );
    } else {
      clearInterval(interval.current);
    }
  }, [isPlaying, turn]);

  useEffect(() => {
    if (isPlaying && turn !== player) {
      if (secs + 3 > 59) {
        setSecs((prev) => prev - 60 + 3);
        setMins((prev) => prev + 1);
      } else {
        setSecs((prev) => prev + 3);
      }
    }
  }, [turn])

  useEffect(() => {
    if (isPlaying && turn === player) {
      if (secs < 0) {
        if (mins === 0) {
          clearInterval(interval.current);
          toggleIsFinished();
          console.log("se termino");
          return;
        }
        setSecs(59);
        setMins((prev) => prev - 1);
      }
    }
  }, [secs, isPlaying]);

  return (
    <div
      className={`timer-key ${turn === player ? "active" : "disabled"}`}
      onClick={handleBoardClick}
    >
      <span className={player === PLAYERS.PLAYER1 ? PLAYERS.PLAYER1 : ""}>
        {mins} : {secs <= 9 ? "0" + secs : secs}
      </span>
    </div>
  );
};
