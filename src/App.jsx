import { TurnProvider } from "./components/turn-provider";
import { TurnApp } from "./components/turn-app";
import { PLAYERS } from "./constants";
import { StartBtn } from "./components/start-btn";

function App() {
  return (
      <main>
        <div className="container">
          <h1>CHESS-TIMER</h1>
          <div className="timer">
            <TurnProvider>
              <TurnApp player={PLAYERS.PLAYER1} />
              <StartBtn/>
              <TurnApp player={PLAYERS.PLAYER2}/>
            </TurnProvider>
          </div>
        </div>
      </main>
  );
}

export default App;
