import { useState } from "react";
import { createGame, joinGame } from "./grpcclient/GrpcClient";
import "./App.css";

function App() {
  const [createGameUserName, setCreateGameUserName] = useState("");
  const [joinGameUserName, setJoinGameUserName] = useState("");
  const [gameId, setGameId] = useState("");

  const handleCreateGame = async () => {
    if (createGameUserName.trim()) {
      try {
        await createGame(createGameUserName);
        setCreateGameUserName("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleJoinGame = async () => {
    if (joinGameUserName.trim()) {
      try {
        await joinGame(gameId, joinGameUserName);
        setGameId("");
        setJoinGameUserName("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>Create Game</h1>
          <label>
            User name:{" "}
            <input
              type="text"
              onChange={(e) => {
                setCreateGameUserName(e.target.value);
              }}
              value={createGameUserName}
            />
          </label>
          <button onClick={handleCreateGame}>Create Game</button>
        </div>
        <div>
          <h1>Join Game</h1>
          <label>
            User name:{" "}
            <input
              type="text"
              onChange={(e) => {
                setJoinGameUserName(e.target.value);
              }}
              value={joinGameUserName}
            />
          </label>
          <label>
            Game Id:{" "}
            <input
              type="text"
              onChange={(e) => {
                setGameId(e.target.value);
              }}
              value={gameId}
            />
          </label>
          <button onClick={handleJoinGame}>Join Game</button>
        </div>
      </div>
    </>
  );
}

export default App;
