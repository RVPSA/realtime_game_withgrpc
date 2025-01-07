import React from "react";
import Welcome from "./component/Welcome";
import Alert from "./component/Alert";
import GameBoard from "./component/GameBoard";

function App() {
  return <div className="bg-cyan-800 min-h-screen relative">
    {/* <Welcome></Welcome> */}
    <GameBoard></GameBoard>
    {/* <Alert> </Alert> */}
    </div>;
}

export default App;
