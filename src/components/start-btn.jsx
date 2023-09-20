import { TurnContext } from "../context/turn-context";
import { useContext, useEffect } from "react";

export const StartBtn = () => {
    const { toggleIsPlaying, isFinished } = useContext(TurnContext);

    useEffect(() => {
        if (isFinished) {
            toggleIsPlaying();
            alert("Se termino el juego");
        }
    }), [isFinished];

    return (
        <div className="start-btn">
        <button onClick={toggleIsPlaying}>START</button>
        </div>
    );
}