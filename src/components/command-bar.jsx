import { TimerContext } from "../context/timer-context";
import { useState, useContext } from "react";
import { Settings } from "./settings";

import "./command-bar.css";
import { FaPlay, FaPause } from "react-icons/fa6";
import { AiOutlineSetting } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";

export const CommandBar = () => {
  const {
    Reset,
    isPressedSett,
    toggleIsPressedSett,
    isPlaying,
    toggleIsPlaying,
  } = useContext(TimerContext);
  const [isPressedPlay, setIsPressedPlay] = useState(false);

  const handleClickSett = () => {
    toggleIsPressedSett();
    setIsPressedPlay(false);
    if (isPlaying) toggleIsPlaying();
  };

  const handleClickStart = () => {
    setIsPressedPlay((prev) => !prev);
    toggleIsPlaying();
  };

  const handleClickReset = () => {
    Reset();
    setIsPressedPlay(false);
  };

  return (
    <div className="command-bar">
      {isPressedSett ? (
        <Settings />
      ) : (
        <>
          <div className="dark-btn button" onClick={handleClickSett}>
            <AiOutlineSetting />
          </div>
          <div className="light-btn button" onClick={handleClickStart}>
            {isPressedPlay ? <FaPause /> : <FaPlay />}
          </div>
          <div className="dark-btn button" onClick={handleClickReset}>
            <LuTimerReset />
          </div>
        </>
      )}
    </div>
  );
};
