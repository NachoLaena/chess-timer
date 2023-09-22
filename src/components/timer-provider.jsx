import { useRef, useState } from "react";
import { PLAYERS } from "../constants";
import { TimerContext } from "../context/timer-context";

export const TimerProvider = ({ children }) => {
  const [turn, setTurn] = useState(PLAYERS.PLAYER1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPressedSett, setIsPressedSett] = useState(false);
  const [isPressedReset, setIsPressedReset] = useState(false);
  const [newMins, setNewMins] = useState(5);
  const increment = useRef(3);

  const Reset = () => {
    toggleIsPressedReset();
    setIsPlaying(false);
    setTurn(PLAYERS.PLAYER1);
  };

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleIsPressedSett = () => {
    setIsPressedSett((prev) => !prev);
  };

  const toggleIsPressedReset = () => {
    setIsPressedReset((prev) => !prev);
  };

  const toggleTurn = () => {
    setTurn((prev) =>
      prev === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1
    );
  };

  return (
    <TimerContext.Provider
      value={{
        Reset,
        isPressedReset,
        toggleIsPressedReset,
        newMins,
        setNewMins,
        isPressedSett,
        toggleIsPressedSett,
        increment,
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
