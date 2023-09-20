import { useState } from "react";
import { PLAYERS } from "../constants";
import { TurnContext } from "../context/turn-context";

export const TurnProvider = ({ children }) => {
  const [turn, setTurn] = useState(PLAYERS.PLAYER1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev);
  }

  const toggleIsFinished = () => {
    setIsFinished((prev) => !prev);
  }

  const toggleTurn = () => {
    setTurn((prev) =>
      prev === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1
    );
  };

  return (
    <TurnContext.Provider value={{isFinished, toggleIsFinished, isPlaying, toggleIsPlaying, turn, toggleTurn }}>
      {children}
    </TurnContext.Provider>
  );
};
