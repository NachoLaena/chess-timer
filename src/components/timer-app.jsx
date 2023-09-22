import { useContext, useEffect, useRef, useState } from "react";
import "./timer.css";
import { TimerContext } from "../context/timer-context";
import { PLAYERS } from "../constants";

export const TimerApp = ({ player }) => {
  const {
    isPressedReset,
    isPressedSett,
    newMins,
    increment,
    toggleIsPlaying,
    isPlaying,
    turn,
    toggleTurn,
  } = useContext(TimerContext);
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(newMins);
  const [isLastSecs, setIsLastSecs] = useState(false);
  const interval = useRef();

  const handleBoardClick = () => {
    isPlaying ? toggleTurn() : null;
  };

  useEffect(() => {
    if (isPlaying && turn === player) {
      interval.current = setInterval(() => {
        setSecs((prevSecs) => prevSecs - 1);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  }, [isPlaying, turn]);

  useEffect(() => {
    if (isPlaying && turn !== player) {
      if (secs + increment.current > 59) {
        setSecs((prev) => prev - 60 + increment.current);
        setMins((prev) => prev + 1);
      } else {
        setSecs((prev) => prev + increment.current);
      }
    }
  }, [turn]);

  useEffect(() => {
    if (isPlaying && turn === player) {
      if (mins === 0 && secs === 0) {
        clearInterval(interval.current);
        toggleIsPlaying();
        return;
      }
      if (secs < 0) {
        setSecs(59);
        setMins((prev) => prev - 1);
      }
      if (mins === 0 && secs === 15) {
        setIsLastSecs(true);
      } else {
        setIsLastSecs(false);
      }
    }
  }, [secs, isPlaying]);

  useEffect(() => {
    setMins(newMins);
    setSecs(0);
  }, [newMins, isPressedReset]);

  useEffect(() => {
    if (isPressedSett) {
      clearInterval(interval.current);
    }
  }, [isPressedSett]);

  return (
    <div
      className={`timer-key ${player === PLAYERS.PLAYER1 ? "player1" : ""} ${
        turn === player ? "active" : "disabled"
      } ${isLastSecs ? "last-secs" : ""}`}
      onClick={handleBoardClick}
    >
      <span>
        {mins} : {secs <= 9 ? "0" + secs : secs}
      </span>
    </div>
  );
};
