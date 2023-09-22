import "./settings.css";
import { OPTIONS } from "../constants";
import { useContext } from "react";
import { TimerContext } from "../context/timer-context";

export const Settings = () => {
  const { Reset, newMins, setNewMins, increment, toggleIsPressedSett } =
    useContext(TimerContext);

  const handleChangeIncrement = (e) => {
    increment.current = parseInt(e.target.value);
    Reset();
  };

  const handleChangeNewMins = (e) => {
    setNewMins(parseInt(e.target.value));
    Reset();
  };

  const handleClickClose = () => {
    toggleIsPressedSett();
  };

  return (
    <div className="settings">
      <div className="setting">
        <div className="minutes-set">Mins</div>
        <select
          defaultValue={newMins}
          onChange={handleChangeNewMins}
          name=""
          id=""
        >
          {OPTIONS.MINS.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="setting">
        <div className="increment-set">Increment (secs)</div>
        <select
          defaultValue={increment.current}
          onChange={handleChangeIncrement}
          name=""
          id=""
        >
          {OPTIONS.INCREMENT.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="button-container">
        <button className="close" onClick={handleClickClose}>
          Close
        </button>
      </div>
    </div>
  );
};
