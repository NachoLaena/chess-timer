import { useRef, useState } from "react";
import { PLAYERS } from "../constants";
import { TimerContext } from "../context/timer-context";

export const TimerProvider = ({ children }) => {
  const [turn, setTurn] = useState(PLAYERS.PLAYER1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPressedSett, setIsPressedSett] = useState(false);
  const increment = useRef(3);

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleIsFinished = () => {
    setIsFinished((prev) => !prev);
  };

  const toggleIsPressedSett = () => {
    setIsPressedSett((prev) => !prev);
  }

  const toggleTurn = () => {
    setTurn((prev) =>
      prev === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1
    );
  };

  return (
    <TimerContext.Provider
      value={{
        isPressedSett,
        toggleIsPressedSett,
        increment,
        isFinished,
        toggleIsFinished,
        isPlaying,
        toggleIsPlaying,
        turn,
        toggleTurn,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
