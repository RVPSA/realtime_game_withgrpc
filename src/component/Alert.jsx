import React from "react";
import Button from "./Button";
import { check, cross } from "../assests";

const Alert = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#020617] bg-opacity-50 inset-0 absolute">
      <div className="bg-cyan-50 w-96 h-96 m-10 rounded-md flex flex-col relative">
        <div className="w-12 h-12 rounded-full bg-[#f3f3f3] bg-opacity-80 absolute -top-5 -right-5 flex flex-row items-center justify-center z-20">
          <img src={cross} className="w-3 h-3" />
        </div>
        <div className="w-full h-full relative overflow-hidden">
          <div className="w-96 h-96 rounded-full bg-cyan-800 absolute bottom-52"></div>
          <div className="w-72 h-72 rounded-full bg-cyan-700 absolute bottom-64 left-24"></div>
          <div className="w-52 h-52 rounded-full bg-cyan-600 absolute bottom-72 left-44"></div>
          <div className="w-12 h-12 rounded-full bg-cyan-500 absolute bottom-52 left-[170px] flex flex-row items-center justify-center">
            <img src={check} className="w-6 h-6" />
          </div>
        </div>

        <h1 className="absolute bottom-44 w-full text-center">Success</h1>
        <div className="absolute bottom-36 w-full text-center">
          Game Created Successfully
        </div>
        <div className="absolute bottom-28 w-full text-center">
          Game ID : game-1
        </div>
        <div className="absolute bottom-7 w-full">
          <Button btnName="Ok"></Button>
        </div>
      </div>
    </div>
  );
}; /*  */

export default Alert;
