import React, { useEffect, useState } from "react";
import { tictactoe } from "../assests";
import Button from "./Button";

const Welcome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <div
        className={`${
          animate && "transition-all h-32 w-32 duration-500"
        } rounded-full overflow-hidden bg-cyan-50 h-52 w-52`}
      >
        <img src={tictactoe} className="w-full h-full object-fill" />
      </div>
      <p
        className={` ${
          animate && "transition-all text-lg duration-500"
        } pt-5 text-cyan-100 text-center text-3xl font-bold`}
      >
        Tic Tac Toe <br /> Multiplayer Game
      </p>

      <div
        className={`${
          animate ? "flex flex-col mt-5 transition-all delay-700" : "hidden"
        }`}
      >
        <input
          placeholder="Enter your name "
          className="rounded-lg m-2 p-2 outline-none"
        ></input>
        {/* <button className="rounded-lg p-3 m-3 bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 ">
          Create Game
        </button> */}
        <Button btnName="Create Game"></Button>
        <Button btnName="Join Game"></Button>
        {/* <button className="rounded-lg p-3 m-3 bg-gradient-to-t from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 ">
          Join Game
        </button> */}
      </div>
    </div>
  );
};

export default Welcome;
