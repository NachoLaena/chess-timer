import { TimerProvider } from "./components/timer-provider";
import { TimerApp } from "./components/timer-app";
import { PLAYERS } from "./constants";
import { CommandBar } from "./components/command-bar";

function App() {

  return (
      <main>
          <div className="timer">
            <TimerProvider>
              <TimerApp player={PLAYERS.PLAYER1}/>
              <CommandBar/>
              <TimerApp player={PLAYERS.PLAYER2} />
            </TimerProvider>
          </div>
      </main>
  );
}

export default App;
